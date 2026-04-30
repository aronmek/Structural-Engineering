# bundle.ps1 -- produces a self-contained book.html from the template + markdown files.
#
# Usage:
#   powershell -ExecutionPolicy Bypass -File .\bundle.ps1           # online  (CDN, ~326 KB)
#   powershell -ExecutionPolicy Bypass -File .\bundle.ps1 -Offline  # offline (~1.5 MB, no internet needed)
#
# Outputs: book.html (online) or book-offline.html (offline)
param([switch]$Offline)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root

$files = @(
  @{ id = 'front';  path = '00-Front-Matter.md' }
  @{ id = 'part0';  path = '00b-Part0-Arithmetic.md' }
  @{ id = 'part1';  path = '01-Part1-Algebra.md' }
  @{ id = 'part2';  path = '02-Part2-Statics-Physics.md' }
  @{ id = 'part3';  path = '03-Part3-Geometry-Trig.md' }
  @{ id = 'part4';  path = '04-Part4-Precalculus.md' }
  @{ id = 'part5';  path = '05-Part5-ETABS.md' }
)

$templatePath = Join-Path $root 'book-template.html'
if (-not (Test-Path $templatePath)) { throw "Missing: $templatePath" }
$template = Get-Content $templatePath -Raw -Encoding UTF8

# ======================================================
# OFFLINE MODE: download + inline all JS/CSS/font assets
# ======================================================
if ($Offline) {
  Write-Host ''
  Write-Host 'Offline mode -- downloading libraries...' -ForegroundColor Yellow

  $katexVer  = '0.16.9'
  $markedVer = '12.0.2'
  $base      = 'https://cdn.jsdelivr.net/npm'

  [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
  $wc = New-Object System.Net.WebClient

  $markedJs     = $wc.DownloadString("$base/marked@$markedVer/marked.min.js")
  Write-Host '  [OK] marked.min.js' -ForegroundColor Green

  $katexJs      = $wc.DownloadString("$base/katex@$katexVer/dist/katex.min.js")
  Write-Host '  [OK] katex.min.js' -ForegroundColor Green

  $autoRenderJs = $wc.DownloadString("$base/katex@$katexVer/dist/contrib/auto-render.min.js")
  Write-Host '  [OK] auto-render.min.js' -ForegroundColor Green

  $katexCss     = $wc.DownloadString("$base/katex@$katexVer/dist/katex.min.css")
  Write-Host '  [OK] katex.min.css' -ForegroundColor Green

  # Find all unique woff2 font filenames referenced by the CSS
  $fontRe    = [regex]'url\(fonts/(KaTeX_[^)]+\.woff2)\)'
  $fontFiles = $fontRe.Matches($katexCss) | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique
  Write-Host ("  Downloading {0} font files..." -f $fontFiles.Count) -ForegroundColor Yellow

  $fontMap = @{}
  foreach ($ff in $fontFiles) {
    $bytes = $wc.DownloadData("$base/katex@$katexVer/dist/fonts/$ff")
    $fontMap[$ff] = [Convert]::ToBase64String($bytes)
    Write-Host "    [OK] $ff" -ForegroundColor DarkGreen
  }

  # Replace each url(fonts/X.woff2) with a base64 data URI
  $patchedCss = $fontRe.Replace($katexCss, {
    param($m)
    $name = $m.Groups[1].Value
    if ($fontMap.ContainsKey($name)) {
      "url('data:font/woff2;base64," + $fontMap[$name] + "')"
    } else { $m.Value }
  })
  # Drop woff / ttf fallback declarations (woff2 data URIs are sufficient for all modern browsers)
  $patchedCss = $patchedCss -replace ',url\(fonts/[^)]+\.woff\)\s*format\("woff"\)', ''
  $patchedCss = $patchedCss -replace ',url\(fonts/[^)]+\.ttf\)\s*format\("truetype"\)', ''

  # Escape any literal </script> inside the JS libraries so the HTML parser
  # does not close the <script> block prematurely.
  $escClose = '<\/' + 'script>'   # safe JS escape: <\/script>
  $rawClose = '</'  + 'script>'   # what the parser sees as a tag close
  $markedJs     = $markedJs     -replace [regex]::Escape($rawClose), $escClose
  $katexJs      = $katexJs      -replace [regex]::Escape($rawClose), $escClose
  $autoRenderJs = $autoRenderJs -replace [regex]::Escape($rawClose), $escClose

  # Build replacement strings (no CDN links, no defer -- inline scripts are synchronous)
  $openStyle  = '<style id="katex-css">'
  $closeStyle = '</style>'
  $openScript = '<script>'
  $closeScript = '</' + 'script>'

  $inlineCss = $openStyle + "`n" + $patchedCss + "`n" + $closeStyle

  $inlineJs  = $openScript + "`n" + $markedJs     + "`n" + $closeScript + "`n" +
               $openScript + "`n" + $katexJs       + "`n" + $closeScript + "`n" +
               $openScript + "`n" + $autoRenderJs  + "`n" + $closeScript

  # Replace the CDN marker blocks using string operations to avoid
  # [regex]::Replace() interpreting $' / $& / $_ in the replacement as backreferences.
  function ReplaceBetween($src, $startTag, $endTag, $replacement) {
    $s = $src.IndexOf($startTag)
    $e = $src.IndexOf($endTag)
    if ($s -lt 0 -or $e -lt 0) { throw "Marker not found: $startTag / $endTag" }
    $src.Substring(0, $s) + $replacement + $src.Substring($e + $endTag.Length)
  }
  $template = ReplaceBetween $template '<!-- CDN_KATEX_CSS_START -->' '<!-- CDN_KATEX_CSS_END -->' $inlineCss
  $template = ReplaceBetween $template '<!-- CDN_LIBS_START -->'     '<!-- CDN_LIBS_END -->'       $inlineJs

  Write-Host '  All libraries inlined.' -ForegroundColor Cyan
}

# ======================================================
# Embed Markdown chapter content
# ======================================================
$injected = New-Object System.Text.StringBuilder
[void]$injected.AppendLine('<!-- ===== Embedded chapter Markdown ===== -->')

foreach ($f in $files) {
  $p = Join-Path $root $f.path
  if (-not (Test-Path $p)) {
    Write-Warning "Missing: $p -- skipped"
    continue
  }
  $md       = Get-Content $p -Raw -Encoding UTF8
  $closeTag = '</' + 'script>'
  $md       = $md -replace [regex]::Escape($closeTag), ('<\/' + 'script>')
  [void]$injected.AppendLine('<script type="text/markdown" id="md-' + $f.id + '">')
  [void]$injected.Append($md)
  [void]$injected.AppendLine()
  [void]$injected.AppendLine($closeTag)
  Write-Host "  embedded: $($f.path) -> id=md-$($f.id)" -ForegroundColor Green
}

$marker    = '<!-- ===== CHAPTERS_INSERT_BELOW ===== -->'
$markerEnd = '<!-- ===== CHAPTERS_INSERT_ABOVE ===== -->'
$startIdx  = $template.IndexOf($marker)
$endIdx    = $template.IndexOf($markerEnd)
if ($startIdx -lt 0 -or $endIdx -lt 0) { throw 'Insertion markers not found in template' }

$before = $template.Substring(0, $startIdx)
$after  = $template.Substring($endIdx + $markerEnd.Length)
$final  = $before + $marker + "`r`n" + $injected.ToString() + "`r`n" + $markerEnd + $after

# ======================================================
# Embed exam data files (exams/*.js) between EXAMS markers
# ======================================================
$examsDir = Join-Path $root 'exams'
$examMarker    = '<!-- ===== EXAMS_INSERT_BELOW ===== -->'
$examMarkerEnd = '<!-- ===== EXAMS_INSERT_ABOVE ===== -->'
$examInjected = New-Object System.Text.StringBuilder
[void]$examInjected.AppendLine('<script>')
[void]$examInjected.AppendLine('"use strict";')
[void]$examInjected.AppendLine('window.SeExamData = window.SeExamData || {};')
[void]$examInjected.AppendLine('</' + 'script>')
if (Test-Path $examsDir) {
  $examFiles = Get-ChildItem -Path $examsDir -Filter '*.js' | Sort-Object Name
  foreach ($ef in $examFiles) {
    $code = Get-Content $ef.FullName -Raw -Encoding UTF8
    [void]$examInjected.AppendLine('<script>')
    [void]$examInjected.Append($code)
    [void]$examInjected.AppendLine()
    [void]$examInjected.AppendLine('</' + 'script>')
    Write-Host ("  embedded exam: exams/" + $ef.Name) -ForegroundColor Yellow
  }
} else {
  Write-Warning "No exams/ folder at $examsDir -- exams will not be present"
}
$exStart = $final.IndexOf($examMarker)
$exEnd   = $final.IndexOf($examMarkerEnd)
if ($exStart -ge 0 -and $exEnd -gt $exStart) {
  $b1 = $final.Substring(0, $exStart)
  $a1 = $final.Substring($exEnd + $examMarkerEnd.Length)
  $final = $b1 + $examMarker + "`r`n" + $examInjected.ToString() + "`r`n" + $examMarkerEnd + $a1
} else {
  Write-Warning 'Exam markers not found in template; exams not embedded'
}

$outName = if ($Offline) { 'book-offline.html' } else { 'book.html' }
$outPath = Join-Path $root $outName
$utf8Bom = New-Object System.Text.UTF8Encoding($true)
[System.IO.File]::WriteAllText($outPath, $final, $utf8Bom)

$sizeKb = [math]::Round((Get-Item $outPath).Length / 1024, 1)
Write-Host ''
Write-Host ("[OK] Wrote $outPath ($sizeKb KB)") -ForegroundColor Cyan
if ($Offline) {
  Write-Host '  100% offline -- works with no internet connection.' -ForegroundColor Green
}
Write-Host "  Start-Process .\$outName"
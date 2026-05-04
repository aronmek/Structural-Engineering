# bundle-offline.ps1 -- turns the Vite offline build into one self-contained HTML file.
#
# Usage:
#   npm run build:offline
#   powershell -ExecutionPolicy Bypass -File .\bundle-offline.ps1
#
# Output: structural-engineering-offline.html
param(
  [string]$DistDir = 'dist-offline',
  [string]$OutFile = 'structural-engineering-offline.html'
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$distPath = Join-Path $root $DistDir
$indexPath = Join-Path $distPath 'index.html'

if (-not (Test-Path $indexPath)) {
  throw "Missing $indexPath. Run npm run build:offline first."
}

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
$html = [System.IO.File]::ReadAllText($indexPath, [System.Text.Encoding]::UTF8)
$dataUriCache = @{}
$script:assetCount = 0
$script:cssCount = 0
$script:jsCount = 0

function Get-MimeType([string]$Path) {
  switch ([System.IO.Path]::GetExtension($Path).ToLowerInvariant()) {
    '.avif' { 'image/avif'; break }
    '.css'  { 'text/css'; break }
    '.eot'  { 'application/vnd.ms-fontobject'; break }
    '.gif'  { 'image/gif'; break }
    '.ico'  { 'image/x-icon'; break }
    '.jpeg' { 'image/jpeg'; break }
    '.jpg'  { 'image/jpeg'; break }
    '.js'   { 'text/javascript'; break }
    '.json' { 'application/json'; break }
    '.otf'  { 'font/otf'; break }
    '.png'  { 'image/png'; break }
    '.svg'  { 'image/svg+xml'; break }
    '.ttf'  { 'font/ttf'; break }
    '.webp' { 'image/webp'; break }
    '.woff' { 'font/woff'; break }
    '.woff2'{ 'font/woff2'; break }
    default { 'application/octet-stream' }
  }
}

function Convert-ToDataUri([string]$Path) {
  $fullPath = [System.IO.Path]::GetFullPath($Path)
  if ($dataUriCache.ContainsKey($fullPath)) {
    return $dataUriCache[$fullPath]
  }

  $mime = Get-MimeType $fullPath
  $bytes = [System.IO.File]::ReadAllBytes($fullPath)
  $dataUri = 'data:' + $mime + ';base64,' + [Convert]::ToBase64String($bytes)
  $dataUriCache[$fullPath] = $dataUri
  $script:assetCount++
  return $dataUri
}

function Resolve-AssetPath([string]$Reference, [string]$BaseDir) {
  $assetRef = $Reference.Trim()
  if ($assetRef -match '^(?:data:|[a-z][a-z0-9+.-]*:|//|#)') {
    return $null
  }

  $queryIndex = $assetRef.IndexOf('?')
  $hashIndex = $assetRef.IndexOf('#')
  $cutIndexes = @($queryIndex, $hashIndex) | Where-Object { $_ -ge 0 }
  if ($cutIndexes.Count -gt 0) {
    $assetRef = $assetRef.Substring(0, ($cutIndexes | Measure-Object -Minimum).Minimum)
  }

  if ([string]::IsNullOrWhiteSpace($assetRef)) {
    return $null
  }

  $assetRef = [System.Uri]::UnescapeDataString($assetRef)
  $assetRef = $assetRef -replace '/', [System.IO.Path]::DirectorySeparatorChar
  if ($assetRef.StartsWith([System.IO.Path]::DirectorySeparatorChar)) {
    $candidate = Join-Path $distPath $assetRef.TrimStart([System.IO.Path]::DirectorySeparatorChar)
  } else {
    $candidate = Join-Path $BaseDir $assetRef
  }

  $fullPath = [System.IO.Path]::GetFullPath($candidate)
  if (-not (Test-Path $fullPath)) {
    throw "Referenced asset not found: $Reference from $BaseDir"
  }

  return $fullPath
}

function Inline-CssUrls([string]$Css, [string]$CssPath) {
  $cssDir = Split-Path -Parent $CssPath
  $urlRegex = [regex]'url\(\s*(["'']?)(?<url>[^)"'']+)\1\s*\)'

  return $urlRegex.Replace($Css, {
    param($match)
    $url = $match.Groups['url'].Value.Trim()
    $assetPath = Resolve-AssetPath $url $cssDir
    if ($null -eq $assetPath) {
      return $match.Value
    }

    return "url('$(Convert-ToDataUri $assetPath)')"
  })
}

$linkRegex = [regex]'<link\b(?=[^>]*\brel=["'']stylesheet["''])(?=[^>]*\bhref=["''](?<href>[^"'']+)["''])[^>]*>'
$html = $linkRegex.Replace($html, {
  param($match)
  $href = $match.Groups['href'].Value
  $cssPath = Resolve-AssetPath $href $distPath
  if ($null -eq $cssPath) {
    return $match.Value
  }

  $css = [System.IO.File]::ReadAllText($cssPath, [System.Text.Encoding]::UTF8)
  $css = Inline-CssUrls $css $cssPath
  $script:cssCount++
  return "<style>`n$css`n</style>"
})

$scriptRegex = [regex]'<script\b(?=[^>]*\bsrc=["''](?<src>[^"'']+)["''])(?<attrs>[^>]*)>\s*</script>'
$html = $scriptRegex.Replace($html, {
  param($match)
  $src = $match.Groups['src'].Value
  $jsPath = Resolve-AssetPath $src $distPath
  if ($null -eq $jsPath) {
    return $match.Value
  }

  $attrs = $match.Groups['attrs'].Value
  $attrs = [regex]::Replace($attrs, '\s+src=["''][^"'']+["'']', '')
  $attrs = [regex]::Replace($attrs, '\s+crossorigin(?:=["''][^"'']*["''])?', '')
  $js = [System.IO.File]::ReadAllText($jsPath, [System.Text.Encoding]::UTF8)
  $js = $js -replace [regex]::Escape('</script>'), '<\/script>'
  $script:jsCount++
  return "<script$attrs>`n$js`n</script>"
})

$outPath = Join-Path $root $OutFile
[System.IO.File]::WriteAllText($outPath, $html, $utf8NoBom)

$sizeMb = [math]::Round((Get-Item $outPath).Length / 1MB, 2)
Write-Host "[OK] Wrote $outPath ($sizeMb MB)" -ForegroundColor Cyan
Write-Host "  Inlined: $script:jsCount JS file(s), $script:cssCount CSS file(s), $script:assetCount CSS asset(s)." -ForegroundColor Green
Write-Host "  Open directly: Start-Process .\$OutFile"
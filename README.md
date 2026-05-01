# From Arithmetic to Structural Engineering

## A Complete Math and ETABS Guide

This repository contains the full book in two formats:

- **Modular Markdown** — for PDF conversion via pandoc / md-to-pdf / VS Code
- **React SPA** — a Vite app that imports the Markdown sources directly, renders math with KaTeX, adds sidebar navigation, search, dark mode, print support, geometry visuals, collapsed "Why" explanations, and Shabbos mode

---

## Quick Start (React SPA)

```powershell
# Install dependencies
npm install

# Start local development server
npm run dev

# Production build
npm run build

# Local-only offline build
npm run build:offline
```

The production output is written to `dist/` and can be served by any static host. The legacy `book.html` and `book-offline.html` files are kept only as generated historical artifacts; the React app is now the primary experience.

GitHub Pages runs `npm run build`, which is the normal online mode. In online mode, Shabbos mode checks network time, IP-based location, and sunset data. `npm run build:offline` is local-only and writes `dist-offline/`; automatic Shabbos blocking is disabled there, but you can press `F12` to preview or close the Shabbos overlay manually.

### Free Deployment

The repo is ready for **GitHub Pages** via the workflow in [`.github/workflows/pages.yml`](.github/workflows/pages.yml). It runs the offline build, copies the result to `index.html`, and publishes the site from the free Pages tier.

To enable it:

1. Push this branch to GitHub.
2. In the repo settings, open **Pages** and set **Build and deployment** to **GitHub Actions** if it is not already selected.
3. Trigger the `Deploy static site to GitHub Pages` workflow, or push again to `main`.
4. Open the Pages URL shown by GitHub.

### Webapp Features

- **Sidebar TOC** — collapsible by Part, click any chapter to jump
- **Cross-references** — every "Chapter N" mention is auto-linked to that chapter
- **Search** (Ctrl+K) — full-text across all chapters with highlighted snippets
- **Geometry visual graph labs** appear in the geometry chapters to show area, coordinate changes, trigonometry, and moment-of-inertia ideas before the formulas are used
- **Collapsed Why panels** explain why common mistakes fail and why the correct rules always hold, using only concepts that were already introduced
- **Shabbos mode** checks network time and IP-based location, then blocks study from Friday sunset until 72 minutes after Saturday sunset with a rest overlay
- **Interactive SVG diagrams** in the legacy generated HTML appear in:
  - Ch A1 — drag the marker on the number line
  - Ch 11 / 13 / 15 / 26 — adjust load and span on a simply supported beam, watch SFD/BMD update
  - Ch 17 — vary moment and section dimensions, see stress distribution
  - Ch 21 — drag a force vector, see X/Y components
  - Ch 33 — refine a mesh and watch deflection converge
  - Ch 39 — animated mode shapes (1/2/3) of a 5-story building
- **Print / Save as PDF** — click 🖨, the entire book renders into one document with page breaks; use your browser's "Save as PDF"
- **Dark mode** — 🌓 toggle, persisted

---

## Files

| File | Contents |
|------|----------|
| `src/` | React SPA source |
| `package.json` | Vite/React build scripts and dependencies |
| `dist/` | **Generated** production SPA output after `npm run build` |
| `book.html` | Legacy generated static webapp |
| `book-offline.html` | Legacy generated offline static webapp |
| `book-template.html` | Legacy static shell consumed by `bundle.ps1` |
| `bundle.ps1` | Legacy build script for single-file HTML artifacts |
| `00-Front-Matter.md` | Title, preface, how to use this book |
| `00b-Part0-Arithmetic.md` | Chapters A1–A8 — Arithmetic Foundations |
| `01-Part1-Algebra.md` | Chapters 1–9 — Algebra |
| `02-Part2-Statics-Physics.md` | Chapters 10–17 — Statics and Physics |
| `03-Part3-Geometry-Trig.md` | Chapters 18–25 — Geometry and Trigonometry |
| `04-Part4-Precalculus.md` | Chapters 26–33 — Precalculus |
| `05-Part5-ETABS.md` | Chapters 34–43 — ETABS Practical Guide |
| `Book-Creation-Prompt.md` | The original prompt that generated this book |

---

## How to Convert to PDF (from Markdown)

The book uses standard Markdown plus:

- **LaTeX math** in `$inline$` and `$$block$$` form
- **ASCII diagrams** inside fenced code blocks
- **HTML page breaks**: `<div style="page-break-after: always;"></div>`
- **Tables** in standard GitHub-flavored Markdown

### Option 1 — Pandoc (recommended)

```powershell
pandoc 00-Front-Matter.md 01-Part1-Algebra.md 02-Part2-Statics-Physics.md `
       03-Part3-Geometry-Trig.md 04-Part4-Precalculus.md 05-Part5-ETABS.md `
       -o "Structural-Engineering-Book.pdf" `
       --pdf-engine=xelatex `
       --toc --toc-depth=2 `
       -V geometry:margin=1in `
       -V mainfont="Calibri" `
       -V monofont="Consolas" `
       --highlight-style=tango
```

### Option 2 — md-to-pdf (npm)

```powershell
npm install -g md-to-pdf
Get-Content 00-Front-Matter.md, 01-Part1-Algebra.md, 02-Part2-Statics-Physics.md, `
            03-Part3-Geometry-Trig.md, 04-Part4-Precalculus.md, 05-Part5-ETABS.md `
  | Set-Content book-combined.md
md-to-pdf book-combined.md
```

### Option 3 — VS Code Extension

Install **Markdown PDF** by yzane, then right-click any `.md` file → "Markdown PDF: Export (pdf)".

For LaTeX math support, also install **Markdown All in One** and enable KaTeX rendering.

---

## Conventions Used in the Book

- Every chapter follows the same nine-section template (A–I)
- Every formula appears in symbolic form **and** with numbers substituted
- All units are shown in square brackets: `P = 500 [kN]`
- Pronunciation is given in plain English syllables (no IPA)
- ETABS instructions target **ETABS version 22**

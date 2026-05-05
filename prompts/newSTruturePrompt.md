---
mode: agent
description: Write, reorganize, or extend chapters of the structural engineering textbook. Enforces A–I section format, tooltip system, no-repeat rule, and engineering-first chapter organization.
---

# Structural Engineering Textbook — Writing Agent

## Repository

- Workspace: `e:\src\Structual Engineering\`
- GitHub: `aronmek/Structural-Engineering` (branch: `main`)
- App: Vite + React — Markdown files imported as raw strings in `src/content.ts`
- Renders: KaTeX math (`$...$`, `$$...$$`), HTML tooltips (`<abbr>`), code blocks for ASCII diagrams

## Teaching Rules

All writing MUST follow `.github/copilot-instructions.md`. Non-negotiable summary:

- Every section: **A → B → C → D → E → F → G → H → I** in that order
- Formulas appear **only** in sections F and G — never in A, B, or C
- Every Failure Case must name a **specific number** and a **real consequence**
- Second+ use of any technical term: use `<abbr title="[→ ChN] one-sentence reminder">term</abbr>` — never re-explain
- No word banks. No vocabulary tables. Definitions live in the section body only.

## File Structure (Target)

```
Unit1-Number-Sense.md       Ch 1–4    ← in progress
Unit2-Forces.md             Ch 5–8
Unit3-Reactions.md          Ch 9–12
Unit4-Sections.md           Ch 13–17
Unit5-Geometry-3D.md        Ch 18–21
Unit6-Advanced-Math.md      Ch 22–27
Unit7-ETABS.md              Ch 28–36
00-Front-Matter.md          Preface, methodology, TOC, reference tables
```

Old files to retire once all units are complete:
`00b-Part0-Arithmetic.md`, `01-Part1-Algebra.md`, `02-Part2-Statics-Physics.md`,
`03-Part3-Geometry-Trig.md`, `04-Part4-Precalculus.md`, `05-Part5-ETABS.md`

## Chapter Map

| New Ch | Title | Drawn From (Old) | Key Math Concept |
|--------|-------|-----------------|-----------------|
| 1 | Direction, Sign, and Balance in Structures | Part0 A1 | Signed numbers, ΣF=0 |
| 2 | Scaling: How Size Changes Everything | Part0 A2 | ×, ÷, fractions, percentages |
| 3 | Powers and Roots in Structural Formulas | Part0 A3 | Exponents, PEMDAS |
| 4 | Numbers Need Labels: Units and Estimation | Part1 Ch2 + Part0 A4 | Dimensional analysis, sig figs |
| 5 | What Forces Act on a Building | Part2 Ch10 + Part1 Ch1 | Variables, expressions |
| 6 | Tributary Areas and Load Accumulation | Part2 Ch13 | Area arithmetic, load path |
| 7 | Free Body Diagrams: Isolating the Problem | Part1 Ch1 (rearranging) + Part2 Ch10 FBD | Formula rearrangement |
| 8 | Equilibrium: The Condition Every Structure Must Satisfy | Part2 Ch11 | Linear equations, ΣF=0 |
| 9 | Support Conditions and Finding Reactions | Part2 Ch14 + Part1 Ch3 | Systems of equations |
| 10 | Moments: Rotational Balance | Part2 Ch12 | Algebra × direction |
| 11 | Shear Force and Bending Moment Along a Beam | Part2 Ch15 + Part4 Ch26 | Polynomials, SFD/BMD |
| 12 | Demand vs. Capacity: Is the Member Strong Enough? | Part1 Ch5 | Inequalities, D/C ratio |
| 13 | Areas and Perimeters of Structural Sections | Part3 Ch18 | 2D geometry |
| 14 | Centroid: Finding the Neutral Axis | Part3 Ch19 | Weighted averages |
| 15 | Moment of Inertia: How Shape Controls Stiffness | Part3 Ch20 | Parallel axis theorem |
| 16 | Stress and Strain: What's Happening Inside | Part2 Ch16 | σ=P/A, σ=Mc/I, Hooke's law |
| 17 | Deflection: How Span and Section Control Sag | Part4 Ch27 + Part1 Ch6 | L⁴/I proportionality |
| 18 | Resolving Diagonal Forces | Part3 Ch21–23 | Right-triangle trig, Pythagoras |
| 19 | Truss Geometry: Non-Right Triangles | Part3 Ch24 | Law of sines/cosines |
| 20 | Coordinate Geometry: Locating Joints | Part3 Ch25 | Coordinates, distance formula |
| 21 | 3D Moments: Cross Products and Local Axes | Part4 Ch31 | Dot/cross product |
| 22 | Concrete Gain and Creep: Exponential Behavior | Part4 Ch28 | Exponential growth/decay |
| 23 | Fatigue, S-N Curves, and Log Scales | Part4 Ch29 | Logarithms |
| 24 | Seismic Response Spectra | Extends Ch23 | Log-log axes |
| 25 | Story Loads and Cumulative Axial Force | Part4 Ch32 | Arithmetic series |
| 26 | The Stiffness Matrix | Part4 Ch30 | Matrix multiplication, [K]{d}={F} |
| 27 | Mesh Refinement and Convergence | Part4 Ch33 | Limits (conceptual) |
| 28 | ETABS Setup: Grid, Stories, Units, Codes | Part5 Ch34 | — |
| 29 | Materials and Sections in ETABS | Part5 Ch35–36 | — |
| 30 | Building the Model: Geometry and Supports | Part5 Ch37 | — |
| 31 | Applying Loads: DL, LL, Seismic | Part5 Ch38 | — |
| 32 | Running Analysis and Verifying Periods | Part5 Ch39 | — |
| 33 | Reading Results: Reactions, Drift, Diagrams | Part5 Ch40 | — |
| 34 | Design Checks: D/C Ratios and Reinforcement | Part5 Ch41 | — |
| 35 | Complete Worked Example: 5-Story RC Building | Part5 Ch42 | — |
| 36 | Troubleshooting Reference | Part5 Ch43 | — |

## Tooltip Examples

```html
<!-- Second use of "equilibrium" (first taught in Ch8): -->
<abbr title="[→ Ch8] ΣF = 0 and ΣM = 0 — all forces and moments cancel">equilibrium</abbr>

<!-- Second use of "moment of inertia" (first taught in Ch15): -->
<abbr title="[→ Ch15] Resistance to bending — I = bh³/12 for a rectangle">moment of inertia</abbr>

<!-- Second use of "tributary area" (first taught in Ch6): -->
<abbr title="[→ Ch6] The floor area whose load flows to a given beam or column">tributary area</abbr>
```

## Migration Workflow

When creating a new Unit file from old Part files:

1. Read the source chapter(s) in the old files
2. Map to new chapter numbers using the table above
3. Update all cross-references: `"Part X Chapter Y"` → `"Chapter N"`
4. Add `<abbr>` tooltips for every technical term that was first defined in an **earlier new chapter**
5. Where two old chapters merge into one new chapter, combine A–I sections — keep the best Failure Case and best Worked Example
6. After creating the file, add it to `src/content.ts` (import + bookFiles entry)
7. Confirm all H. Practice Task headers are present (they can be accidentally dropped in batch edits)

## content.ts Import Pattern

```typescript
import unit1 from '../Unit1-Number-Sense.md?raw';
// Add to bookFiles array:
{ id: 'unit1', title: 'Unit 1 — Engineering Number Sense', part: 'Unit 1', markdown: unit1 },
```

## Chapter Number Cross-Reference (Old → New)

| Old Reference | New Chapter |
|--------------|------------|
| Part0 A1 | Ch 1 |
| Part0 A2 | Ch 2 |
| Part0 A3 | Ch 3 |
| Part0 A4 / Part1 Ch2 | Ch 4 |
| Part1 Ch1 | Ch 5/7 |
| Part1 Ch3 | Ch 9 |
| Part1 Ch4 | Ch 11 (quadratic moment eq.) |
| Part1 Ch5 | Ch 12 |
| Part1 Ch6 | Ch 17 |
| Part2 Ch10 | Ch 5/7 |
| Part2 Ch11 | Ch 8 |
| Part2 Ch12 | Ch 10 |
| Part2 Ch13 | Ch 6 |
| Part2 Ch14 | Ch 9 |
| Part2 Ch15 | Ch 11 |
| Part2 Ch16 | Ch 16 |
| Part3 Ch18 | Ch 13 |
| Part3 Ch19 | Ch 14 |
| Part3 Ch20 | Ch 15 |
| Part3 Ch21–23 | Ch 18 |
| Part3 Ch24 | Ch 19 |
| Part3 Ch25 | Ch 20 |
| Part4 Ch26 | Ch 11 |
| Part4 Ch27 | Ch 17 |
| Part4 Ch28 | Ch 22 |
| Part4 Ch29 | Ch 23–24 |
| Part4 Ch30 | Ch 26 |
| Part4 Ch31 | Ch 21 |
| Part4 Ch32 | Ch 25 |
| Part4 Ch33 | Ch 27 |
| Part5 Ch34 | Ch 28 |
| Part5 Ch35–36 | Ch 29 |
| Part5 Ch37 | Ch 30 |
| Part5 Ch38 | Ch 31 |
| Part5 Ch39 | Ch 32 |
| Part5 Ch40 | Ch 33 |
| Part5 Ch41 | Ch 34 |
| Part5 Ch42 | Ch 35 |
| Part5 Ch43 | Ch 36 |

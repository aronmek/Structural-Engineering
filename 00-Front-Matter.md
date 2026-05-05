# From Arithmetic to Structural Engineering

## A Complete Math and ETABS Guide

---

### A self-study journey from basic arithmetic to confident use of ETABS for everyday structural engineering tasks

---

<div style="page-break-after: always;"></div>

## Preface — Read This First

If you can add, subtract, multiply, and divide, you have everything you need to start this book.

You do not need to have studied algebra. You do not need to know any physics. You do not need to have ever opened a structural engineering textbook. By the time you finish, you will:

- Be fluent in algebra, geometry, trigonometry, and precalculus — all explained in plain English
- Understand the physics of forces, loads, equilibrium, stress, and bending
- Be able to perform every common hand calculation a structural engineer uses daily
- Be able to model a multi-story building in ETABS 22, run analysis, and interpret the results

The book is organized around understanding, not around a traditional math checklist. When several skills share one underlying idea, they are taught together at the first real engineering task that needs them. Once that idea is understood, later chapters use it instead of re-explaining it.

This book follows one strict rule: **a term is not considered explained until the book has defined it, shown why it matters, and worked through at least one real example using it.** A vocabulary entry is useful, but it is not enough by itself.

When a later engineering idea appears early, it is either being taught because it naturally belongs there, or it is clearly labeled as a preview. For example, signed numbers and vertical force balance belong together, because both are the same idea: size plus direction.

---

## How Learning Sections Are Organized

Each major section is built around an engineering achievement. The order may change when the logic of the idea requires it, but the section should usually contain these pieces:

| Piece | Purpose |
|-------|---------|
| **Achievement** | The structural task the reader can solve after learning this concept |
| **Situation** | A real problem that creates the need for the idea before the rule is named |
| **Intuition** | Plain-language reasoning using as little concentration as possible |
| **Failure case** | What goes wrong when the rule is ignored or memorized incorrectly |
| **Rule** | The shortest accurate statement of the rule, after the reason is clear |
| **Formal shorthand** | Symbols and formulas introduced as shorthand for the idea already understood |
| **Worked example** | The promised engineering achievement solved with real units |
| **Practice and summary** | A short check that reinforces the idea without reteaching it |

Tooltips remain part of the reading system. When a symbol appears later, its tooltip gives a quick reminder of the example where it was first introduced.

---

## Notation Used Throughout

- **Symbolic formulas** appear in math typesetting: $\sigma = \dfrac{P}{A}$
- **Numbers with units** appear in square brackets: $P = 500\ [\mathrm{kN}]$
- **Pronunciation guides** appear in quotes: *equilibrium* → "ee-kwih-LIB-ree-um"
- **ETABS menu paths** appear inline: Define > Materials > Add New Material
- **ASCII diagrams** appear in fixed-width code blocks for clarity

---

## A Note on Tone

This book never says "obviously," "simply," or "just." If something is genuinely difficult, it will say so and walk you through it slowly. If you feel lost in any chapter, go back to the Word Bank — almost every confusion can be traced to a single unfamiliar term.

## Reader Knowledge Ledger

The book keeps track of what has actually been explained:

| Stage | Concepts the reader can use confidently | Concepts that are only previews until later |
|-------|-----------------------------------------|--------------------------------------------|
| Unit 1 (Ch1–4) | Signed quantities, direction, balance, fractions, percentages, powers, roots, PEMDAS, units, estimation | Full support-reaction solving, stress, moment, ETABS output |
| Unit 2 (Ch5–8) | Forces, load types, tributary areas, FBDs, equilibrium (2D) | Support types, internal forces, section design |
| Unit 3 (Ch9–12) | Reactions, moments, SFD/BMD, D/C ratio | Section properties, material behavior, ETABS workflow |
| Unit 4 (Ch13–17) | Areas, perimeters, centroid, MoI, bending/axial stress, Hooke's law, deflection | 3D geometry, matrix stiffness, software modeling |
| Unit 5 (Ch18–21) | Trig resolution, Pythagorean resultants, non-right triangles, coordinate geometry, 3D cross products | Advanced math functions, ETABS analysis |
| Unit 6 (Ch22–27) | Polynomial BMDs, proportional scaling, exponentials, logarithms, matrices, convergence | Full ETABS workflow details |
| Unit 7 (Ch28–37) | ETABS setup, materials, sections, model building, loads, analysis, results, design, troubleshooting | Project-specific code requirements beyond this guide |

---

## Engineering Units Reference

| Quantity | Unit | Symbol | Conversion |
|----------|------|--------|-----------|
| Force | Newton, kilonewton | N, kN | $1\ \mathrm{kN} = 1{,}000\ \mathrm{N}$ |
| Length | meter, millimeter | m, mm | $1\ \mathrm{m} = 1{,}000\ \mathrm{mm}$ |
| Area | square meter, square millimeter | m², mm² | $1\ \mathrm{m}^2 = 10^6\ \mathrm{mm}^2$ |
| Stress / Pressure | Pascal, kilopascal, megapascal | Pa, kPa, MPa | $1\ \mathrm{MPa} = 10^6\ \mathrm{Pa} = 1\ \mathrm{N/mm^2}$ |
| Moment | kilonewton-meter, Newton-millimeter | kN·m, N·mm | $1\ \mathrm{kN \cdot m} = 10^6\ \mathrm{N \cdot mm}$ |
| Density | kilogram per cubic meter | kg/m³ | — |
| Unit weight | kilonewton per cubic meter | kN/m³ | $\gamma_{\text{concrete}} \approx 25\ \mathrm{kN/m^3}$ |

---

## Greek Letters You Will Meet

| Letter | Pronunciation | Used For |
|--------|--------------|---------|
| $\alpha$ | "AL-fah" | Angle, coefficient |
| $\beta$ | "BAY-tah" | Angle, coefficient |
| $\gamma$ | "GAM-ah" | Unit weight |
| $\delta$ | "DEL-tah" | Deflection (small) |
| $\Delta$ | "DEL-tah" (capital) | Change in (e.g., $\Delta L$) |
| $\varepsilon$ | "EP-sih-lon" | Strain |
| $\theta$ | "THAY-tah" | Angle |
| $\mu$ | "MEW" | Friction coefficient |
| $\pi$ | "PIE" | 3.14159... |
| $\rho$ | "ROH" | Density, reinforcement ratio |
| $\sigma$ | "SIG-mah" | Stress |
| $\Sigma$ | "SIG-mah" (capital) | "Sum of" |
| $\tau$ | "TAU" (rhymes with "now") | Shear stress |
| $\phi$ | "FY" or "FEE" | Strength reduction factor, diameter |
| $\omega$ | "oh-MAY-gah" | Angular frequency |

---

<div style="page-break-after: always;"></div>

## Table of Contents

### UNIT 1 — ENGINEERING NUMBER SENSE (Ch1–4)

1. Direction, Sign, and Balance — Reading Forces as Signed Quantities
2. Scaling, Fractions, and Percentages — Working with Load Ratios
3. Powers, Roots, and Order of Operations — PEMDAS in Structural Formulas
4. Units and Estimation — Checking Every Answer Before You Trust It

### UNIT 2 — FORCES AND HOW THEY TRAVEL (Ch5–8)

5. What Forces Act on a Building — Load Types and Their Sources
6. Tributary Areas and Load Accumulation — How Loads Reach Each Member
7. Free Body Diagrams — Isolating the Problem
8. Equilibrium — The Condition Every Structure Must Satisfy

### UNIT 3 — REACTIONS, MOMENTS, AND INTERNAL FORCES (Ch9–12)

9. Support Conditions and Finding Reactions
10. Moments — Rotational Balance
11. Shear Force and Bending Moment — Internal Forces Along a Beam
12. Demand vs. Capacity — The Engineer's Decision Rule

### UNIT 4 — CROSS-SECTION SHAPE AND MATERIAL BEHAVIOR (Ch13–17)

13. Areas and Perimeters — What You Need Before Anything Else
14. Centroids — Finding the Balance Point of a Shape
15. Moment of Inertia and Bending Stress — Why Deeper Sections Are Stronger
16. Stress, Strain, and Material Stiffness — How Materials Respond to Load
17. Deflection — How Much Will It Bend?

### UNIT 5 — GEOMETRY, ANGLES, AND 3D SPACE (Ch18–21)

18. Resolving Diagonal Forces — Trigonometry and Pythagorean Components
19. Truss Geometry — Non-Right Triangles (Sine and Cosine Rules)
20. Coordinate Geometry — Locating Every Joint in 3D Space
21. 3D Moments — Cross Products and Local Axes

### UNIT 6 — TIME, CYCLES, CONVERGENCE, AND THE MATRIX METHOD (Ch22–27)

22. Polynomials and the Bending Moment Equation
23. Proportionality — How Span Controls Deflection
24. Exponential Functions — Time-Dependent Structural Behavior
25. Logarithms — Reading S-N Curves and Response Spectra
26. Matrices — Why ETABS Can Solve Indeterminate Structures
27. Sequences, Series, and Limits — Cumulative Loads and FEM Convergence

### UNIT 7 — ETABS WORKFLOW (Ch28–37)

28. Interface and Setup — Grid, Stories, Units, and Design Codes
29. Defining Materials — Concrete, Rebar, Steel Properties
30. Defining Section Properties — Beams, Columns, Slabs, Walls
31. Building the Structural Model — Elements, Connectivity, Restraints
32. Applying Loads — Patterns, Cases, and Combinations
33. Running the Analysis — Static, Modal, and Verification
34. Reading and Interpreting Results — Forces, Drifts, Equilibrium
35. Design in ETABS — D/C Ratios and Resolving Failures
36. Complete Worked Example — 5-Story RC Building End-to-End
37. Common ETABS Mistakes and How to Fix Them

---

<div style="page-break-after: always;"></div>

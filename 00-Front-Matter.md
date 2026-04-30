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

The book is organized so each part builds directly on the previous one. Do not skip ahead — every chapter introduces vocabulary and ideas the next one assumes you already know.

This book follows one strict rule: **a term is not considered explained until the book has defined it, shown why it matters, and worked through at least one example using it.** A word-bank entry is useful, but it is not enough by itself. Until a concept has been explained this way, it may appear only as a clearly labeled preview.

When a later engineering idea is mentioned early, read it as a signpost, not as something you must already understand. For example, Part 0 may say that fractions will later appear in beam formulas, but it will not require you to solve beam formulas before beams have been explained.

---

## How Every Chapter Is Organized

Every chapter — without exception — contains the following nine sections in this order:

| Section | Purpose |
|---------|---------|
| **A — Word Bank** | Every new term, with phonetic pronunciation and a 12-year-old-friendly definition |
| **B — Concept Introduction** | Plain English explanation with a real-world analogy |
| **C — The Physics Behind It** | The physical meaning before any formula is shown (when applicable) |
| **D — The Math** | The formula, every symbol explained, fully worked numerical example |
| **E — Structural Engineering Application** | A real engineering problem using only concepts already explained; any future idea is labeled as preview |
| **F — ETABS Connection** | Exact menu paths and an immediate hands-on Mini-Task in ETABS 22, only after the needed physical idea has been taught |
| **G — Common Mistakes** | The 2–4 most frequent beginner errors and how to avoid them |
| **H — Chapter Practice Task** | A complete structural problem with full worked solution and ETABS verification |
| **I — Chapter Summary Table** | Concept • Formula • Engineering Use • ETABS Location |

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
| Part 0 | Numbers, signs, arithmetic, fractions, decimals, percentages, powers, roots, order of operations, estimation | Force, stress, moment, beam, support, ETABS design output |
| Part 1 | Variables, expressions, equations, rearranging, units, systems, quadratics, inequalities, functions | Physical equilibrium, bending moment, deflection, stiffness |
| Part 2 | Forces, loads, equilibrium, moments, supports, internal forces, stress and strain | Advanced section properties, 3D vectors, matrix analysis |
| Part 3 | Area, perimeter, centroid, moment of inertia, vectors, trigonometry, coordinates | Precalculus behavior and software matrix solving |
| Part 4 | Polynomials, proportionality, exponentials, logarithms, matrices, limits | Full ETABS workflow details |
| Part 5 | ETABS modeling, loading, analysis, result interpretation, and design workflow | Project-specific code requirements beyond this introductory guide |

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

## Table of Parts

### PART 1 — ALGEBRA FOR STRUCTURAL ENGINEERS

1. Variables and Expressions
2. Linear Equations (One Variable)
3. Rearranging Formulas
4. Units and Dimensional Analysis
5. Systems of Equations
6. Quadratic Equations
7. Inequalities
8. Exponents and Powers
9. Introduction to Functions

### PART 2 — STATICS AND PHYSICS FOR STRUCTURAL ENGINEERS

10. What Is a Force?
11. Equilibrium and the Sum of Forces
12. Moments (Rotational Forces)
13. Types of Loads in Structural Engineering
14. Support Conditions
15. Internal Forces — Axial, Shear, and Bending Moment
16. Stress and Strain
17. Bending Stress in Beams

### PART 3 — GEOMETRY AND TRIGONOMETRY FOR STRUCTURAL ENGINEERS

18. Areas and Perimeters
19. Centroids
20. Moment of Inertia (Second Moment of Area)
21. Vectors
22. Right Triangle Trigonometry
23. The Pythagorean Theorem
24. Trigonometry for Non-Right Triangles
25. Coordinate Geometry

### PART 4 — PRECALCULUS FOR STRUCTURAL ENGINEERS

26. Polynomials and the Bending Moment Equation
27. Rational Functions and Proportionality
28. Exponential Functions
29. Logarithms
30. Matrices (Basic)
31. Introduction to Vectors in 3D
32. Sequences and Series
33. Limits — Conceptual Introduction

### PART 5 — ETABS PRACTICAL GUIDE (ETABS Version 22)

34. ETABS Interface and Setup
35. Defining Materials
36. Defining Section Properties
37. Building the Structural Model
38. Applying Loads
39. Running the Analysis
40. Reading and Interpreting Results
41. Design in ETABS
42. Complete Worked Example — 5-Story Reinforced Concrete Building
43. Common ETABS Mistakes and How to Fix Them

---

<div style="page-break-after: always;"></div>

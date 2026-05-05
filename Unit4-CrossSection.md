# Unit 4 — Cross-Section Shape and Material Behavior

> The last unit found the forces inside a beam. This unit finds what those forces do to the material. You will measure the cross-sectional area, locate the neutral axis, compute the moment of inertia, calculate the exact bending stress, understand how materials deform under stress, and predict whether a beam will sag too much under service loads.

<div style="page-break-after: always;"></div>

## Chapter 13 — Areas and Perimeters of Structural Cross-Sections

### A. Achievement

After this section you can compute the net cross-sectional area of any structural section — I-beam, box tube, T-beam — by splitting it into rectangles and subtracting holes, and use the result to find axial stress.

### B. The Situation

A steel column carries $P = 1{,}500\ \mathrm{kN}$. To check whether the column is safe, you need $\sigma = P/A$. Before you can substitute, you need $A$ — and the column is an I-section, not a plain rectangle. Getting the area wrong here cascades into every downstream check.

### C. The Intuition

The **cross-section** is the shape you see when you slice a member perpendicular to its length — like cutting a loaf of bread. Its area determines how much material resists the applied force.

Most structural sections are built from rectangles. Subtract holes from the outer rectangle to find the net area that carries load. The rule is simple: every rectangle you add, add its area; every rectangle you remove (hole or void), subtract it.

```
I-SECTION                  BOX SECTION
  ← b_f →                  ← B →
 ┌────────┐ ↑              ┌──────┐  ↑
 │ flange │ t_f             │┌────┐│  t
 └──┬──┬──┘ ↓              ││hole││  H
    │  │ ↑                 │└────┘│
    │web│ h_w               └──────┘  ↓
    │  │ ↓
 ┌──┴──┴──┐ ↑
 │ flange │ t_f
 └────────┘ ↓

A = 2(b_f × t_f) + (h_w × t_w)   A = B×H − (B−2t)×(H−2t)
```

### D. Failure Case

A designer estimates the self-weight of an I-section beam by treating it as a solid rectangle: $b \times h_{total} \times \gamma_{steel}$. For a section $200\ \mathrm{mm}$ wide and $400\ \mathrm{mm}$ deep, this gives $A_{solid} = 80{,}000\ \mathrm{mm^2}$. The actual I-section area is about $11{,}600\ \mathrm{mm^2}$. The self-weight is overestimated by 6.9×. Although this error is conservative for a self-weight check, the same logic applied to axial stress would give a stress 6.9× too small — dangerously unconservative if the designer then concludes the section is over-designed.

### E. The Rule

Split any complex cross-section into simple shapes (rectangles, circles, trapezoids). Add areas for solid parts; subtract areas for holes. Never count overlapping regions twice.

### F. The Formal Shorthand

| Shape | Area $A$ | 
|-------|----------|
| Rectangle | $b \cdot h$ |
| Triangle | $\tfrac{1}{2}bh$ |
| Circle | $\pi d^2/4$ |
| Trapezoid | $\tfrac{1}{2}(a+b)h$ |

Composite section: $A_{total} = \sum A_i - \sum A_{holes}$

Axial stress: $\sigma = P/A\ [\mathrm{MPa}]$, where $P$ in N and $A$ in mm².

<abbr title="[→ Ch4] write the unit next to every number; a mismatch flags an error every time">Unit check</abbr>: $[N]/[\mathrm{mm^2}] = [\mathrm{N/mm^2}] = [\mathrm{MPa}]\ \checkmark$

### G. Full Worked Example — I-Section Axial Stress

**Problem.** A steel I-section: top and bottom flanges $200\ \mathrm{mm} \times 20\ \mathrm{mm}$; web $360\ \mathrm{mm} \times 10\ \mathrm{mm}$. The section carries $P = 1{,}500\ \mathrm{kN}$ axial compression. Find the axial stress and D/C ratio for $f_y = 350\ \mathrm{MPa}$.

**Step 1 — Area:**
$$A = 2(200 \times 20) + (360 \times 10) = 8{,}000 + 3{,}600 = 11{,}600\ \mathrm{mm^2}$$

**Step 2 — Stress** (convert $P$ to N):
$$\sigma = \frac{1{,}500{,}000}{11{,}600} = 129.3\ \mathrm{MPa}$$

**Step 3 — D/C ratio:**
$$\text{D/C} = \frac{129.3}{350} = 0.37 \quad \checkmark$$

The section uses only 37% of its axial capacity. It is significantly over-designed for this axial load alone — but it also resists bending, which Chapter 15 addresses.

**ETABS verification:** Define the section → check Frame Section Properties → $A$ should match $11{,}600\ \mathrm{mm^2}$.

### H. Practice Task

> **Scenario:** A hollow rectangular tube: outside $300 \times 200$ mm, wall thickness $12$ mm. Find $A$ and the axial stress under $P = 800\ \mathrm{kN}$.
>
> **Answers:**
> $A = 300(200) - (300-24)(200-24) = 60{,}000 - 276(176) = 60{,}000 - 48{,}576 = 11{,}424\ \mathrm{mm^2}$
> $\sigma = 800{,}000/11{,}424 = 70.0\ \mathrm{MPa}$

### I. What You Now Know

Cross-sectional area determines axial stress. Composite areas are sums of simple parts minus holes. Chapters 14 and 15 extend this idea from total area to how the area's distribution governs bending resistance.

| Shape | Formula | Use |
|-------|---------|-----|
| Rectangle | $b \cdot h$ | Flanges, webs, concrete columns |
| Circle | $\pi d^2/4$ | Round bars, pipe sections |
| I-section | $2(b_f t_f) + h_w t_w$ | Steel beam flanges + web |
| Axial stress | $\sigma = P/A$ | Column check |

<div style="page-break-after: always;"></div>

## Chapter 14 — Centroid: Finding the Neutral Axis

### A. Achievement

After this section you can compute the centroid height $\bar{y}$ for a composite beam section (T-beam or I-beam) and determine the distances from the neutral axis to the top and bottom extreme fibers.

### B. The Situation

A T-beam carries a bending moment. To compute the bending stress, you need $\sigma = Mc/I$ — and $c$ is the distance from the neutral axis to the extreme fiber. But where is the neutral axis? In an asymmetric section like a T-beam, it is not at mid-height. You must find the centroid to find $c$.

### C. The Intuition

The centroid is the geometric center of balance — the point where a flat cutout of the shape would balance on a fingertip. In a beam under bending, the neutral axis (zero stress line) passes through the centroid of the cross-section.

A T-beam has more area in the flange (at the top) than in the web (below). The balance point shifts upward toward the heavier region, so the centroid sits above mid-height. The bottom fiber is farther from the neutral axis than the top fiber, which means the bottom experiences higher bending stress. That's why T-beams are more efficient when the flange is in compression (top) — the flange provides more area near the neutral axis.

Centroid is a <abbr title="[→ Ch2] rate × quantity gives total; the centroid is a weighted average where area is the weight">weighted average</abbr>: the "weight" of each part is its area, and the "value" being averaged is its distance from the reference axis.

### D. Failure Case

An engineer assumes the centroid of a T-beam is at mid-height (250 mm for a 500 mm total). The wide flange shifts the centroid upward to 307 mm from the bottom. Using mid-height: $c_{bot} = 250\ \mathrm{mm}$. Actual: $c_{bot} = 307\ \mathrm{mm}$. The bending stress at the bottom fiber is underestimated by $307/250 = 1.23\times$ — a 23% unconservative error. The beam would be certified as adequate, but would actually exceed the allowable stress.

### E. The Rule

Compute $\bar{y}$ as the area-weighted average of the sub-shape centroids. Choose one reference axis (the bottom is conventional) and measure all $y_i$ from it consistently.

### F. The Formal Shorthand

$$\bar{y} = \frac{\sum A_i \cdot y_i}{\sum A_i}$$

where $A_i$ is the area of sub-shape $i$ and $y_i$ is the distance from the reference axis to sub-shape $i$'s own centroid.

$$c_{top} = h_{total} - \bar{y} \qquad c_{bot} = \bar{y}$$

For a symmetric section: $\bar{y} = h/2$ automatically — no calculation needed.

### G. Full Worked Example — T-Section Centroid

**Problem.** T-beam: top flange $300\ \mathrm{mm} \times 100\ \mathrm{mm}$; web $100\ \mathrm{mm} \times 400\ \mathrm{mm}$. Total height $h = 500\ \mathrm{mm}$. Find $\bar{y}$ from the bottom.

| Part | $A_i$ (mm²) | $y_i$ from bottom (mm) | $A_i y_i$ |
|------|------------|----------------------|-----------|
| Web ($100 \times 400$) | $40{,}000$ | $400/2 = 200$ | $8{,}000{,}000$ |
| Flange ($300 \times 100$) | $30{,}000$ | $400 + 100/2 = 450$ | $13{,}500{,}000$ |
| **Total** | $70{,}000$ | — | $21{,}500{,}000$ |

$$\bar{y} = \frac{21{,}500{,}000}{70{,}000} = 307.1\ \mathrm{mm}$$

$$c_{top} = 500 - 307.1 = 192.9\ \mathrm{mm} \qquad c_{bot} = 307.1\ \mathrm{mm}$$

The bottom fiber is 60% farther from the neutral axis than the top fiber. Under positive bending (sagging), the bottom is in tension and carries higher stress.

**Sanity check:** centroid should be closer to the flange (which has $30{,}000\ \mathrm{mm^2}$ concentrated at $450\ \mathrm{mm}$) than to the web. $307\ \mathrm{mm} > 250\ \mathrm{mm}\ \checkmark$

### H. Practice Task

> **Scenario:** An inverted T-beam (the large flange is at the bottom): flange $400 \times 80$ at bottom, web $80 \times 420$ rising above it. Total height $500\ \mathrm{mm}$. Find $\bar{y}$ from the bottom.
>
> **Answers:**
> Flange: $A = 32{,}000$, $y = 40$; Web: $A = 33{,}600$, $y = 80 + 210 = 290$
> $\bar{y} = (32{,}000 \times 40 + 33{,}600 \times 290) / 65{,}600 = (1{,}280{,}000 + 9{,}744{,}000)/65{,}600 = 168.1\ \mathrm{mm}$

### I. What You Now Know

The centroid locates the neutral axis. Asymmetric sections have different $c$ values to the top and bottom fibers — the larger $c$ gives the larger bending stress. Chapter 15 computes the other half of the bending stress formula: the moment of inertia $I$.

| Concept | Formula | Engineering Use |
|---------|---------|----------------|
| Centroid | $\bar{y} = \Sigma(A_i y_i)/\Sigma A_i$ | Locate neutral axis |
| $c_{bot}$, $c_{top}$ | $\bar{y}$, $h-\bar{y}$ | Extreme fiber distance for $\sigma = Mc/I$ |

<div style="page-break-after: always;"></div>

## Chapter 15 — Moment of Inertia: How Shape Controls Bending Stiffness

### A. Achievement

After this section you can compute $I_{33}$ for a composite section using the parallel axis theorem, and use $I$ with the centroid from Chapter 14 to calculate the maximum bending stress $\sigma = Mc/I$.

### B. The Situation

Two beams made from the same amount of steel:
- Beam A: $200\ \mathrm{mm} \times 400\ \mathrm{mm}$ rectangle (standing up)
- Beam B: $400\ \mathrm{mm} \times 200\ \mathrm{mm}$ rectangle (lying flat)

Same area, same material, same span, same load. Which deflects more? Which has higher bending stress?

Beam B deflects far more — because its depth in the direction of bending is only $200\ \mathrm{mm}$ instead of $400\ \mathrm{mm}$. The moment of inertia captures this difference. Knowing $I$ completes the bending stress formula.

### C. The Intuition

Moment of inertia $I$ measures how spread out a section's area is from the bending axis. Area far from the axis contributes more to bending resistance — it is squared-weighted by distance.

> A flat ruler is easy to bend when laid flat; very hard to bend when stood on edge. Same material, same cross-section area — but the depth in the bending direction is different. That difference is captured by $I$.

For a rectangle, $I = bh^3/12$. The $h^3$ term is the key: doubling the depth multiplies $I$ by $2^3 = 8$, making the beam 8× stiffer in bending. Width only appears to the first power. **Depth dominates.**

The parallel axis theorem shifts $I$ from a shape's own centroid to any other axis:
$$I_{\text{shifted}} = I_c + A \cdot d^2$$

where $d$ is the distance between the axes. For a composite section, compute this for each part and sum.

### D. Failure Case

Two beams carry the same moment $M = 80\ \mathrm{kN \cdot m}$. The engineer treats them as equivalent because they have the same cross-sectional area ($A = 80{,}000\ \mathrm{mm^2}$):
- Beam A: $200 \times 400$ mm standing up → $I_A = 200 \times 400^3/12 = 1.067 \times 10^9\ \mathrm{mm^4}$
- Beam B: $400 \times 200$ mm lying flat → $I_B = 400 \times 200^3/12 = 2.667 \times 10^8\ \mathrm{mm^4}$

$I_A / I_B = 4$. The bending stress in B is 4× greater than in A. They are not equivalent. Treating them as equal leads to a 4× underestimate of bending stress in Beam B.

### E. The Rule

Compute $I$ of each sub-shape about its own centroidal axis, then shift to the section's overall centroid using $I_c + Ad^2$. Sum all parts. Depth affects $I$ cubically — a doubling of depth gives 8× the stiffness.

### F. The Formal Shorthand

$$I_{rectangle} = \frac{bh^3}{12} \quad (\text{about own horizontal centroidal axis})$$

$$I_{circle} = \frac{\pi d^4}{64}$$

$$I_{total} = \sum\left(I_{c,i} + A_i d_i^2\right) \quad \text{(parallel axis theorem)}$$

$$\sigma_{max} = \frac{M \cdot c}{I} = \frac{M}{S} \qquad S = \frac{I}{c}$$

where $c$ is from Chapter 14, $M$ is from the BMD in Chapter 11, and $S$ is the **section modulus**.

<abbr title="[→ Ch3] evaluate exponents before multiplying">PEMDAS</abbr>: compute $h^3$ first, then multiply by $b$, then divide by 12.

### G. Full Worked Example — T-Section $I$ and Bending Stress

**Problem.** Continue from Chapter 14: T-beam with $\bar{y} = 307.1\ \mathrm{mm}$ from bottom, total $h = 500\ \mathrm{mm}$. Find $I_{33}$ and the bending stress at the extreme fibers for $M = 80\ \mathrm{kN \cdot m}$.

| Part | $A_i$ (mm²) | Own $I_{c,i}$ (mm⁴) | $d_i$ (mm) | $A_i d_i^2$ (mm⁴) |
|------|------------|---------------------|-----------|-------------------|
| Web ($100 \times 400$) | $40{,}000$ | $100(400^3)/12 = 5.333 \times 10^8$ | $307.1 - 200 = 107.1$ | $40{,}000(107.1)^2 = 4.587 \times 10^8$ |
| Flange ($300 \times 100$) | $30{,}000$ | $300(100^3)/12 = 2.5 \times 10^7$ | $450 - 307.1 = 142.9$ | $30{,}000(142.9)^2 = 6.12 \times 10^8$ |

$$I_{33} = (5.333 + 4.587 + 0.25 + 6.12) \times 10^8 = 1.629 \times 10^9\ \mathrm{mm^4}$$

**Bending stress** (convert $M$ to N·mm: $80 \times 10^6\ \mathrm{N \cdot mm}$):

$$\sigma_{top} = \frac{M \cdot c_{top}}{I} = \frac{80 \times 10^6 \times 192.9}{1.629 \times 10^9} = 9.47\ \mathrm{MPa}\ \text{(compression)}$$

$$\sigma_{bot} = \frac{M \cdot c_{bot}}{I} = \frac{80 \times 10^6 \times 307.1}{1.629 \times 10^9} = 15.08\ \mathrm{MPa}\ \text{(tension)}$$

The bottom fiber has 59% higher stress than the top because it is farther from the neutral axis.

**D/C check** for concrete ($f'_c = 30\ \mathrm{MPa}$, allowable $0.45 f'_c = 13.5\ \mathrm{MPa}$):
Bottom: $15.08/13.5 = 1.12$ — fails. The section needs to be deepened or widened.

### H. Practice Task

> **Scenario:** A symmetric rectangular beam: $b = 300\ \mathrm{mm}$, $h = 600\ \mathrm{mm}$. Applied moment $M = 120\ \mathrm{kN \cdot m}$. Find $I$, $c$, and the maximum bending stress.
>
> **Answers:**
> $I = 300(600^3)/12 = 5.4 \times 10^9\ \mathrm{mm^4}$; $c = 300\ \mathrm{mm}$ (symmetric)
> $\sigma_{max} = (120 \times 10^6)(300) / (5.4 \times 10^9) = 6.67\ \mathrm{MPa}$

### I. What You Now Know

$I$ measures how effectively the section's area resists bending. Depth is the dominant factor ($h^3$). The bending stress formula $\sigma = Mc/I$ uses the moment from Chapter 11, the centroid distance $c$ from Chapter 14, and the $I$ from this chapter.

| Concept | Formula | Engineering Use |
|---------|---------|----------------|
| Rectangle $I$ | $bh^3/12$ | Quick beam stiffness estimate |
| Parallel axis | $I = I_c + Ad^2$ | Composite / T-beam sections |
| Section modulus | $S = I/c$ | Beam selection from tables |
| Bending stress | $\sigma = Mc/I$ | Extreme fiber stress check |

<div style="page-break-after: always;"></div>

## Chapter 16 — Stress and Strain: What Happens Inside the Material

### A. Achievement

After this section you can compute axial stress, axial strain, and member elongation for any steel or concrete member, and state the relationship between stress and stiffness through the elastic modulus $E$.

### B. The Situation

A steel tie rod $2\ \mathrm{m}$ long with $A = 100\ \mathrm{mm^2}$ carries $P = 15\ \mathrm{kN}$. You know from Chapter 13 how to find the stress: $\sigma = P/A = 150\ \mathrm{MPa}$. But the structure also moves — it deforms. How much does this rod stretch? And at what stress would it permanently yield?

### C. The Intuition

Stress and strain are the cause-and-effect pair for structural materials. Apply a stress; the material strains (deforms). Remove the stress; the material recovers — as long as you stayed within the elastic range.

Strain is the deformation per unit length — a dimensionless ratio:
$$\varepsilon = \frac{\Delta L}{L}$$

A rod that stretches $1.5\ \mathrm{mm}$ over $2000\ \mathrm{mm}$ has $\varepsilon = 1.5/2000 = 0.00075$ — it stretched by 0.075% of its length.

The proportionality between stress and strain in the elastic range is Hooke's Law:
$$\sigma = E \cdot \varepsilon$$

$E$ is the **elastic modulus** (or Young's modulus). For steel: $E = 200{,}000\ \mathrm{MPa}$. For concrete: $E_c \approx 25{,}000–32{,}000\ \mathrm{MPa}$ depending on strength. Steel is about 7–8 times stiffer than concrete.

> Think of $E$ as "how hard it is to stretch." Steel is very stiff ($E$ = 200 GPa). Rubber has $E \approx 0.01\ \mathrm{GPa}$ — 20{,}000 times less stiff.

### D. Failure Case

A designer computes elongation as $\Delta L = P / (AE)$ — accidentally forgetting to multiply by $L$:
$$\Delta L = \frac{15{,}000}{100 \times 200{,}000} = 0.00075\ \mathrm{mm}$$

But the correct formula is $\Delta L = PL/(AE)$:
$$\Delta L = \frac{15{,}000 \times 2{,}000}{100 \times 200{,}000} = 1.5\ \mathrm{mm}$$

The missing $L$ factor is 2000. The elongation is 2000× too small. For a structural settlement or expansion joint calculation, this error would cause a catastrophic underestimate of the joint width needed.

### E. The Rule

Stress is force per area. Strain is deformation per length. They are linked by the elastic modulus $E$. Elongation requires the length: $\Delta L = \varepsilon \times L = (P/AE) \times L$. Include $L$ every time.

### F. The Formal Shorthand

$$\sigma = \frac{P}{A} \qquad \varepsilon = \frac{\sigma}{E} = \frac{\Delta L}{L} \qquad \Delta L = \frac{P L}{AE}$$

| Material | $E$ (MPa) | $f_y$ or $f'_c$ (MPa) | Density (kN/m³) |
|----------|-----------|-----------------------|-----------------|
| Structural steel | 200{,}000 | 250–350 | 77 |
| Reinforcing steel | 200{,}000 | 420–500 | 77 |
| Normal concrete | 25{,}000–32{,}000 | $f'_c$ = 25–40 | 24–25 |
| Timber | 8{,}000–12{,}000 | ~20–40 | 5–7 |

Stress units: $[\mathrm{N/mm^2}] = [\mathrm{MPa}]$. Strain is dimensionless. Elongation in mm when $P$ in N, $L$ and $A$ in mm.

### G. Full Worked Example — Steel Tie Rod

**Problem.** Steel tie rod: diameter $d = 20\ \mathrm{mm}$, length $L = 3\ \mathrm{m} = 3{,}000\ \mathrm{mm}$. Carries $P = 80\ \mathrm{kN}$. Find stress, strain, elongation, and D/C ratio. $E = 200{,}000\ \mathrm{MPa}$, $f_y = 350\ \mathrm{MPa}$.

**Step 1 — Area:**
$$A = \frac{\pi d^2}{4} = \frac{\pi (20)^2}{4} = 314.2\ \mathrm{mm^2}$$

**Step 2 — Stress:**
$$\sigma = \frac{P}{A} = \frac{80{,}000}{314.2} = 254.6\ \mathrm{MPa}$$

**Step 3 — Strain:**
$$\varepsilon = \frac{\sigma}{E} = \frac{254.6}{200{,}000} = 0.001273 \quad \text{(0.127\% elongation)}$$

**Step 4 — Elongation:**
$$\Delta L = \varepsilon \times L = 0.001273 \times 3{,}000 = 3.82\ \mathrm{mm}$$

**Step 5 — D/C ratio:**
$$\text{D/C} = \frac{254.6}{350} = 0.73 \quad \checkmark$$

**Step 6 — Sanity check:** $3.82\ \mathrm{mm}$ over $3000\ \mathrm{mm}$ is 0.127% — a tiny elastic stretch. Removing the load returns to zero. Makes sense for elastic steel.

### H. Practice Task

> **Scenario:** A concrete column $400 \times 400\ \mathrm{mm}$, height $3\ \mathrm{m}$, carries $P = 1{,}500\ \mathrm{kN}$. Concrete $E = 30{,}000\ \mathrm{MPa}$, $f'_c = 30\ \mathrm{MPa}$.
>
> **Tasks:** Find $\sigma$, $\varepsilon$, shortening $\Delta L$, D/C ratio.
>
> **Answers:**
> $A = 160{,}000\ \mathrm{mm^2}$; $\sigma = 9.375\ \mathrm{MPa}$; $\varepsilon = 9.375/30{,}000 = 0.000313$; $\Delta L = 0.000313 \times 3{,}000 = 0.938\ \mathrm{mm}$; D/C $= 9.375/30 = 0.31\ \checkmark$

### I. What You Now Know

Stress is force per area; strain is deformation per length; Hooke's Law links them. The elastic modulus $E$ is a material property that determines how stiff — how resistant to deformation — the material is. Chapter 17 uses $E$ and $I$ together in the deflection formula.

| Formula | Meaning | Use |
|---------|---------|-----|
| $\sigma = P/A$ | Axial stress | Column check |
| $\varepsilon = \sigma/E$ | Strain | Deformation analysis |
| $\Delta L = PL/AE$ | Elongation | Joint width, settlement |
| Hooke's Law | $\sigma = E\varepsilon$ | Foundation of elastic analysis |

<div style="page-break-after: always;"></div>

## Chapter 17 — Deflection: How Span and Section Control Sag

### A. Achievement

After this section you can compute the maximum deflection of a simply-supported beam under uniform load, check it against the code limit, and predict how deflection changes when span or section depth changes — without recalculating the full formula.

### B. The Situation

A beam passes the <abbr title="[→ Ch12] D/C ratio ≤ 1.0 — demand divided by capacity, all independent failure modes must be checked">strength check</abbr>. But the floor sags visibly, plaster cracks, and people feel the bounce when they walk. Structural **serviceability** — how the building feels and performs in daily use — can govern the design even when the material is not overstressed.

The deflection at mid-span of a simply-supported beam under uniform load is:

$$\delta_{max} = \frac{5wL^4}{384EI}$$

This formula uses the <abbr title="[→ Ch16] the material's stiffness constant — how hard it is to stretch">elastic modulus</abbr> $E$ from Chapter 16 and the <abbr title="[→ Ch15] how spread out the section's area is from the bending axis">moment of inertia</abbr> $I$ from Chapter 15. Now that both are in hand, the formula can be used in full.

### C. The Intuition

Deflection $\delta$ is the amount the beam sags at its mid-point. Four things control it:
- **Load $w$** — more load means more sag (proportional: $\delta \propto w$)
- **Span $L$** — span has the strongest influence: $\delta \propto L^4$. Double the span and deflection grows 16×
- **Elastic modulus $E$** — stiffer material, less sag: $\delta \propto 1/E$
- **Moment of inertia $I$** — deeper section, less sag: $\delta \propto 1/I$

The $L^4$ relationship is the most important engineering insight in this chapter. Doubling the span doesn't double the deflection — it multiplies it by 16. This is why long spans need disproportionately deep beams.

### D. Failure Case

A beam passes its deflection check at $L = 6\ \mathrm{m}$: $\delta = 8\ \mathrm{mm}$, limit = $16.7\ \mathrm{mm}$ ($L/360$). The architect extends the span to $8\ \mathrm{m}$. The engineer assumes deflection scales proportionally: $8 \times (8/6) = 10.7\ \mathrm{mm}$ — still under the limit.

Actual deflection: $\delta \propto L^4$, so $\delta_{new} = 8 \times (8/6)^4 = 8 \times 3.16 = 25.3\ \mathrm{mm}$.

New limit: $8000/360 = 22.2\ \mathrm{mm}$.

D/C = $25.3/22.2 = 1.14$ — fails. The proportional assumption gave 10.7; the correct $L^4$ scaling gives 25.3 — a 2.4× overestimate of adequacy.

### E. The Rule

Use the deflection formula for exact calculations. For comparative estimates, apply the power-law scaling: $\delta \propto wL^4/(EI)$. When span changes, raise the ratio to the 4th power. When depth changes, $I \propto h^3$ for a rectangle, so raise the depth ratio to the 3rd power.

### F. The Formal Shorthand

$$\delta_{SS,\, UDL} = \frac{5wL^4}{384EI} \qquad \delta_{cant,\, tip} = \frac{PL^3}{3EI}$$

Code deflection limits (serviceability, service loads — not factored):

| Application | Typical limit |
|-------------|--------------|
| Floor with plaster ceiling | $L/360$ |
| Floor without plaster | $L/240$ |
| Roof (no fragile finishes) | $L/180$ |
| Total long-term (incl. creep) | $L/250$ |

**Power-law scaling rule:** if one variable changes by factor $r$ and all else is equal:
$$\frac{\delta_{new}}{\delta_{old}} = r^n \quad \text{where } n \text{ is the exponent in the formula}$$

| Changed quantity | Exponent $n$ | Effect |
|-----------------|-------------|--------|
| Load $w$ | 1 | Linear |
| Span $L$ | 4 | Very strong |
| Elastic modulus $E$ | −1 | Inverse |
| Moment of inertia $I$ | −1 | Inverse |
| Beam depth $h$ (rectangle) | −3 | Via $I = bh^3/12$ |

### G. Full Worked Example — Deflection Check and Fix

**Problem.** Office floor beam: $L = 8\ \mathrm{m}$, $w_{service} = 11\ \mathrm{kN/m} = 11\ \mathrm{N/mm}$, $E = 200{,}000\ \mathrm{MPa}$, $I = 65 \times 10^6\ \mathrm{mm^4}$.

**Step 1 — Deflection limit:**
$$\delta_{allow} = \frac{L}{360} = \frac{8{,}000}{360} = 22.2\ \mathrm{mm}$$

**Step 2 — Compute deflection** (all in N and mm):
$$\delta = \frac{5 \times 11 \times 8000^4}{384 \times 200{,}000 \times 65 \times 10^6}$$

<abbr title="[→ Ch3] evaluate the exponent first before multiplying">PEMDAS</abbr>: $8000^4 = 4.096 \times 10^{15}$

$$\text{Numerator} = 5 \times 11 \times 4.096 \times 10^{15} = 2.253 \times 10^{17}$$
$$\text{Denominator} = 384 \times 200{,}000 \times 65 \times 10^6 = 4.992 \times 10^{15}$$
$$\delta = \frac{2.253 \times 10^{17}}{4.992 \times 10^{15}} = 45.1\ \mathrm{mm}$$

**Step 3 — D/C ratio:**
$$\text{D/C} = \frac{45.1}{22.2} = 2.03 \quad \text{✗ FAIL}$$

**Step 4 — Find required $I$:**
To pass, we need $\delta \leq 22.2\ \mathrm{mm}$. Since $\delta \propto 1/I$:
$$I_{required} = I_{current} \times \frac{\delta_{actual}}{\delta_{allow}} = 65 \times 10^6 \times 2.03 = 131.9 \times 10^6\ \mathrm{mm^4}$$

A section with $I \geq 131.9 \times 10^6\ \mathrm{mm^4}$ would satisfy the deflection limit. This is approximately a 28% increase in depth (since $I \propto h^3$: $2.03^{1/3} \approx 1.27$).

### H. Practice Task

> **Scenario:** A beam spans $L = 6\ \mathrm{m}$, $w_{service} = 10\ \mathrm{kN/m}$, $E = 200{,}000\ \mathrm{MPa}$, $I = 30 \times 10^6\ \mathrm{mm^4}$. Check deflection against $L/360$.
>
> **Tasks:**
> 1. Compute $\delta_{allow}$
> 2. Compute $\delta$ (all units in N and mm)
> 3. Find D/C ratio
> 4. If the section depth doubles (keeping same $b$), what is the new $\delta$?
>
> **Answers:**
> 1. $\delta_{allow} = 6000/360 = 16.7\ \mathrm{mm}$
> 2. $\delta = 5(10)(6000^4)/(384 \times 200000 \times 30 \times 10^6)$: numerator = $5 \times 10 \times 1.296 \times 10^{15} = 6.48 \times 10^{16}$; denominator = $2.304 \times 10^{15}$; $\delta = 28.1\ \mathrm{mm}$
> 3. D/C = $28.1/16.7 = 1.68$ — fails
> 4. Double depth: $I \times 2^3 = 8\times$ → $\delta = 28.1/8 = 3.5\ \mathrm{mm}\ \checkmark$

### I. What You Now Know

The deflection formula combines load, span, material stiffness, and section shape in one expression. Span has the strongest influence ($L^4$). The combination of this chapter and Chapter 12's D/C check framework gives you the complete serviceability toolkit.

| Formula | Use | Key power |
|---------|-----|----------|
| $\delta = 5wL^4/(384EI)$ | SS beam, UDL | $L^4$, $I^{-1}$ |
| $\delta = PL^3/(3EI)$ | Cantilever, tip load | $L^3$, $I^{-1}$ |
| Depth scaling | $I \propto h^3$ | Double depth → 8× stiffer |
| Deflection limit | $L/360$ (plaster) | Code serviceability |

<div style="page-break-after: always;"></div>

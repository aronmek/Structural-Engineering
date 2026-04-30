# PART 3 — GEOMETRY AND TRIGONOMETRY FOR STRUCTURAL ENGINEERS

> Welcome to Part 3. You now know algebra and the physics of forces and stress. This part gives you the geometric tools to compute the section properties and member geometry every structural calculation needs: areas, centroids, moments of inertia, vectors, trigonometry, and coordinate geometry. These are the building blocks behind every input field in ETABS's section editor.

<div style="page-break-after: always;"></div>

## Chapter 18 — Areas and Perimeters

### A. Word Bank

| Word | Pronunciation | Plain English Meaning | Used In |
|------|---------------|----------------------|---------|
| **Area** | "AIR-ee-ah" | Amount of surface inside a shape | Cross-section A |
| **Perimeter** | "peh-RIM-ih-ter" | Total length around a shape | Bar circumference |
| **Rectangle** | "REK-tang-ul" | Four-sided shape, all right angles | Beam cross-section |
| **Trapezoid** | "TRAP-eh-zoyd" | Four sides, one pair parallel | Sloping girder |
| **Composite** | "kom-POZ-it" | Made of multiple simple shapes | I-beam, T-beam |
| **Flange** | "FLANJ" | Horizontal plate of an I-section | Top/bottom of I-beam |
| **Web** | "WEB" | Vertical plate of an I-section | Middle of I-beam |
| **Cross-section** | — | The shape you see when you slice a member | Section properties |

### B. Concept Introduction

The **cross-section** of a structural member is the shape you see if you cut the member perpendicular to its length. The **area** of the cross-section determines axial stress; the way the area is distributed (the geometry) determines bending stiffness.

> **Real-world analogy:** Cut a loaf of bread perpendicular to the length. The shape of the slice — round, square, oval — is the cross-section. Its area is how much bread you get; its shape determines how hard it is to bend a sandwich made from it.

### C. The Physics Behind It

In structural engineering, area appears everywhere:
- Axial stress: $\sigma = P/A$ — bigger $A$ means smaller stress
- Self-weight per length: $w_{sw} = \gamma \cdot A$ — bigger $A$ means heavier member
- Reinforcement ratio: $\rho = A_s / A_c$ — area of steel over area of concrete

### D. The Math

| Shape | Area | Perimeter |
|-------|------|-----------|
| Rectangle | $A = b \cdot h$ | $P = 2(b + h)$ |
| Triangle | $A = \tfrac{1}{2} b h$ | $P = a + b + c$ |
| Circle | $A = \pi r^2 = \dfrac{\pi d^2}{4}$ | $P = 2\pi r = \pi d$ |
| Trapezoid | $A = \tfrac{1}{2}(a + b) h$ | sum of all sides |

**Composite areas.** Split into simple shapes; add their areas (or subtract for holes).

```
I-section cross-section:

    ←──── b_f ────→
   ┌─────────────┐  ↑
   │   FLANGE    │ t_f
   └────┬───┬────┘  ↓
        │ W │       ↑
        │ E │
        │ B │      h
        │   │       
   ┌────┴───┴────┐  ↓ 
   │   FLANGE    │ t_f
   └─────────────┘  ↑
```

**Worked example.** I-section with $b_f = 200, t_f = 20, h_w = 360, t_w = 10$ (all mm). Total height = $h_w + 2 t_f = 400$.

$A = 2 \times (b_f \cdot t_f) + (h_w \cdot t_w) = 2 \times (200 \times 20) + (360 \times 10) = 8{,}000 + 3{,}600 = 11{,}600\ \mathrm{mm^2}$

### E. Structural Engineering Application

**Problem.** A steel column with the I-section above carries $P = 1{,}500\ \mathrm{kN}$. Find the axial stress.

$\sigma = P/A = 1{,}500{,}000 / 11{,}600 = 129.3\ \mathrm{MPa}$

For $F_y = 350\ \mathrm{MPa}$: demand/capacity ratio = $129.3 / 350 = 0.37$ — safe.

### F. ETABS Connection

In **Define > Section Properties > Frame Sections**, when you choose a rectangular concrete or a built-up steel section, ETABS computes $A$ from the dimensions you enter. The same $A$ is used in:
- Self-weight calculation (with material density)
- Axial stress checks
- Later stiffness calculations

> **Try it in ETABS 22:**
> 1. **Define > Section Properties > Frame Sections > Add New Property**
> 2. Choose Steel I-section, enter $b_f = 200, t_f = 20, h = 400, t_w = 10$
> 3. Click **Section Properties** — confirm $A = 11{,}600\ \mathrm{mm^2}$
> 4. Compare with your hand calculation

### G. Common Mistakes

1. **Forgetting to subtract for holes.** Hollow sections need area subtraction.
2. **Mixing units.** Keep all dimensions in the same unit (mm or m).
3. **Counting the flange-web overlap twice.** When using $h$ as total height, the web is only $h_w = h - 2t_f$.

### H. Chapter Practice Task — Hollow Box Section

> **Scenario:** A hollow rectangular tube, outside $300 \times 200$ mm, wall thickness $10$ mm. Find $A$ and $P$ (perimeter outside).
>
> **Worked Solution:**
>
> Outer area: $300 \times 200 = 60{,}000\ \mathrm{mm^2}$
> Inner cavity: $(300 - 2 \times 10) \times (200 - 2 \times 10) = 280 \times 180 = 50{,}400\ \mathrm{mm^2}$
> Net area: $A = 60{,}000 - 50{,}400 = 9{,}600\ \mathrm{mm^2}$
> Perimeter (outside): $2(300 + 200) = 1{,}000\ \mathrm{mm}$
>
> **ETABS:** Use **Section Designer** to draw outer rectangle, then a hole, click **Compute Section Properties** — $A$ should match 9,600 mm².

### I. Chapter Summary Table

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Rectangle area | $A = b \cdot h$ | Axial stress denominator | Frame Section dimensions |
| Circle area | $A = \pi d^2/4$ | Round bar/column | Pipe/round dialog |
| Composite area | Sum of parts | I-beam, T-beam, holes | Section Designer |

<div style="page-break-after: always;"></div>

## Chapter 19 — Centroids

### A. Word Bank

| Word | Pronunciation | Plain English Meaning | Used In |
|------|---------------|----------------------|---------|
| **Centroid** | "SEN-troyd" | Geometric center of a shape | Where it would balance |
| **Neutral axis** | "NOO-trul" | Horizontal line through centroid where bending stress = 0 | Bending |
| **Symmetry** | "SIH-meh-tree" | Mirror balance | Centroid lies on axis of symmetry |
| **Weighted average** | — | Average where each value has a "weight" | Centroid formula |
| **First moment of area** | — | $\Sigma A_i \cdot y_i$ | Used to find centroid |

### B. Concept Introduction

The centroid is the geometric center — the point where a shape would balance if cut from cardboard.

> **Real-world analogy:** Try to balance a cardboard cutout of a state on a pencil tip. The point where it sits perfectly is the centroid.

### C. The Physics Behind It

In a beam under bending, the **neutral axis** — the line where bending stress is zero — passes through the centroid of the cross-section. Compression occurs on one side of this line, tension on the other. Knowing the centroid's location is therefore the first step in computing bending stress.

### D. The Math

For a **simple symmetric** shape (rectangle, circle), the centroid is at the geometric center.

For a **composite** shape, the centroid is a weighted average:

$$\bar{y} = \dfrac{\sum (A_i \cdot y_i)}{\sum A_i}$$

Where:
- $A_i$ = area of part $i$
- $y_i$ = distance from a reference axis to the centroid of part $i$
- $\bar{y}$ = centroid of the whole

**Worked example.** A T-section: top flange $300 \times 100$ mm, web $100 \times 400$ mm. Find the centroid measured from the bottom.

```
        ←── 300 ──→
       ┌──────────┐  ↑
       │  FLANGE  │ 100
       └──┬────┬──┘  ↓
          │    │     ↑
          │WEB │
          │    │    400
          │    │
          │    │     ↓
          └────┘
          ←100→
```

| Part | Area $A_i$ (mm²) | $y_i$ from bottom (mm) | $A_i \cdot y_i$ |
|------|------------------|------------------------|-----------------|
| Web | $100 \times 400 = 40{,}000$ | $400/2 = 200$ | $8{,}000{,}000$ |
| Flange | $300 \times 100 = 30{,}000$ | $400 + 50 = 450$ | $13{,}500{,}000$ |
| **Sum** | $70{,}000$ | — | $21{,}500{,}000$ |

$\bar{y} = 21{,}500{,}000 / 70{,}000 = 307.14\ \mathrm{mm}$

The centroid is 307 mm above the bottom — closer to the flange than to the bottom of the web, since the flange concentrates a lot of area high up.

### E. Structural Engineering Application

For a T-beam, knowing $\bar{y}$ tells you:
- Where the neutral axis sits
- The distance to top fiber: $c_{top} = h - \bar{y}$
- The distance to bottom fiber: $c_{bot} = \bar{y}$

These distances are needed for the full bending-stress formula after moment of inertia is explained in Chapter 20. If a section is asymmetric, the top and bottom distances are different, so the top and bottom bending stresses will not be equal.

In our T-section: $c_{top} = 500 - 307.14 = 192.86$ mm; $c_{bot} = 307.14$ mm.

For the same bending moment and same section stiffness, the bottom face is more critical here because $c_{bot} > c_{top}$.

### F. ETABS Connection

In **Section Designer**, after drawing any cross-section, click **Properties**. ETABS reports the centroid coordinates, often shown as $C_y$, $C_z$.

> **Try it in ETABS 22:**
> 1. **Define > Section Properties > Frame Sections > Add New Property > Section Designer**
> 2. Draw a T-section using the polygon tool with the dimensions above
> 3. Click **Compute Section Properties**
> 4. The dialog shows centroid location — should match 307 mm

### G. Common Mistakes

1. **Wrong reference axis.** Be consistent — measure all $y_i$ from the same reference (usually the bottom).
2. **Using overall section centroid for $y_i$.** $y_i$ is the centroid of each *individual* sub-shape, not the whole.
3. **Forgetting symmetry shortcuts.** A symmetric section has its centroid on the axis of symmetry — no calculation needed.

### H. Chapter Practice Task — L-Section Centroid

> **Scenario:** An L-shape: vertical leg $20 \times 200$ mm; horizontal leg $200 \times 20$ mm; sharing the bottom-left corner. Find the centroid.
>
> **Worked Solution:**
>
> Place origin at bottom-left.
>
> | Part | $A_i$ (mm²) | $\bar{x}_i$ (mm) | $\bar{y}_i$ (mm) |
> |------|-------------|------------------|------------------|
> | Vertical leg ($20 \times 200$) | $4{,}000$ | $10$ | $100$ |
> | Horizontal leg ($200 \times 20$) | $4{,}000$ | $100$ | $10$ |
>
> Total area = $8{,}000\ \mathrm{mm^2}$ — but careful: the bottom-left $20 \times 20$ corner is shared. Subtract: $A_{shared} = 400\ \mathrm{mm^2}$, with centroid at $(10, 10)$.
>
> Better approach: vertical leg ($20 \times 200$, top of L), horizontal leg ($180 \times 20$, no overlap):
> | Part | $A_i$ | $\bar{x}_i$ | $\bar{y}_i$ |
> |------|-------|-------------|-------------|
> | Vertical | $20 \times 200 = 4{,}000$ | $10$ | $100$ |
> | Horizontal (excluding overlap) | $180 \times 20 = 3{,}600$ | $20 + 90 = 110$ | $10$ |
>
> $A_{total} = 7{,}600\ \mathrm{mm^2}$
> $\bar{x} = (4{,}000 \cdot 10 + 3{,}600 \cdot 110) / 7{,}600 = (40{,}000 + 396{,}000)/7{,}600 = 57.4\ \mathrm{mm}$
> $\bar{y} = (4{,}000 \cdot 100 + 3{,}600 \cdot 10) / 7{,}600 = (400{,}000 + 36{,}000)/7{,}600 = 57.4\ \mathrm{mm}$
>
> Symmetric L → centroid sits on the line of symmetry at (57.4, 57.4) — sanity check confirms.
>
> **ETABS:** Section Designer → draw L-shape → confirm centroid coords.

### I. Chapter Summary Table

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Centroid | $\bar{y} = \Sigma(A_i y_i)/\Sigma A_i$ | Locate neutral axis | Section Designer Properties |
| Symmetric shape | Centroid on symmetry line | Quick lookup | Built-in shapes |
| $c_{top}, c_{bot}$ | From centroid to face | Bending stress check after Chapter 20 | Manual calc |

<div style="page-break-after: always;"></div>

## Chapter 20 — Moment of Inertia (Second Moment of Area)

### A. Word Bank

| Word | Pronunciation | Plain English Meaning | Used In |
|------|---------------|----------------------|---------|
| **Moment of inertia** | "in-ER-shuh" | Geometric measure of bending stiffness | $I$, mm⁴ |
| **Second moment of area** | — | Same as moment of inertia | Synonym |
| **Parallel axis theorem** | — | Shifts $I$ from one axis to a parallel axis | $I = I_c + Ad^2$ |
| **Strong axis** | — | The axis about which $I$ is largest | Major bending |
| **Weak axis** | — | The axis about which $I$ is smallest | Minor bending |
| **Radius of gyration** | "jy-RAY-shun" | $r = \sqrt{I/A}$, a later column-stability property | Slenderness |

### B. Concept Introduction

Moment of inertia $I$ measures how spread out a section's area is from the axis of bending. The further the area sits from the axis, the larger $I$ becomes — and the stiffer the beam.

> **Real-world analogy:** A flat ruler is easy to bend if you bend it sideways; very hard to bend if you turn it on edge. Same ruler, same area — but the depth in the direction of bending changes $I$ by a huge amount.

### C. The Physics Behind It

In bending, fibers far from the neutral axis stretch and compress more, contributing more resistance. Moment of inertia measures this idea by weighting area farther from the axis more heavily. The distance is squared, which is why depth matters so much.

For practical engineering, we use formulas for common shapes:

| Shape | $I$ about centroidal axis |
|-------|--------------------------|
| Rectangle (about horizontal) | $I = bh^3/12$ |
| Rectangle (about vertical) | $I = hb^3/12$ |
| Circle (any diameter) | $I = \pi d^4/64$ |
| Hollow circle | $I = \pi(d_o^4 - d_i^4)/64$ |

### D. The Math

**Parallel Axis Theorem:**
$$I_{any\ axis} = I_{centroidal} + A \cdot d^2$$
where $d$ is the distance from the part's own centroid to the new axis.

For composite sections, compute $I$ of each part about its own centroid, then shift to the overall centroid:
$$I_{total} = \sum \left( I_{c,i} + A_i \cdot d_i^2 \right)$$

**Worked example.** Same T-section as Chapter 19. Total centroid at $\bar{y} = 307.14$ mm from bottom.

| Part | $A_i$ | Own $I_{c,i}$ (mm⁴) | $d_i$ from part centroid to $\bar{y}$ | $A_i d_i^2$ |
|------|-------|---------------------|---------------------------------------|--------------|
| Web ($100 \times 400$) | $40{,}000$ | $100 \cdot 400^3 / 12 = 5.333 \times 10^8$ | $307.14 - 200 = 107.14$ | $40{,}000 \times 107.14^2 = 4.59 \times 10^8$ |
| Flange ($300 \times 100$) | $30{,}000$ | $300 \cdot 100^3 / 12 = 2.5 \times 10^7$ | $450 - 307.14 = 142.86$ | $30{,}000 \times 142.86^2 = 6.12 \times 10^8$ |

$I_{total} = 5.333 \times 10^8 + 4.59 \times 10^8 + 0.25 \times 10^8 + 6.12 \times 10^8 = 1.63 \times 10^9\ \mathrm{mm^4}$

This $I$ is what governs bending stiffness for the T-section.

Now the deferred bending-stress check from Chapter 17 can be made quantitative:

$$\sigma = \dfrac{M c}{I} \qquad \mathrm{or} \qquad \sigma = \dfrac{M}{S},\quad S = \dfrac{I}{c}$$

Here $M$ comes from the moment diagram, $c$ comes from the centroid distances in Chapter 19, and $I$ comes from this chapter. This is why the book waited until now to use the full formula.

**Worked example — bending stress after $I$ is known.** A rectangular beam has $b = 300\ \mathrm{mm}$, $h = 600\ \mathrm{mm}$, and moment $M = 80\ \mathrm{kN\cdot m}$ at the critical section. Find the maximum bending stress.

First convert moment to matching units:
$M = 80\ \mathrm{kN\cdot m} = 80 \times 10^6\ \mathrm{N\cdot mm}$

For the rectangle:
$I = bh^3/12 = 300(600^3)/12 = 5.4 \times 10^9\ \mathrm{mm^4}$
$c = h/2 = 300\ \mathrm{mm}$

Then:
$$\sigma = \dfrac{Mc}{I} = \dfrac{(80 \times 10^6)(300)}{5.4 \times 10^9} = 4.44\ \mathrm{MPa}$$

This is the exact calculation Chapter 17 pointed toward but did not yet have enough geometry to perform.

### E. Structural Engineering Application

**Cube law in action.** Compare two beams of equal area:
- Beam A: $b = 200, h = 400$ → $I = 200 \cdot 400^3 / 12 = 1.067 \times 10^9$ mm⁴
- Beam B: $b = 100, h = 800$ → $I = 100 \cdot 800^3 / 12 = 4.267 \times 10^9$ mm⁴

Ratio: B has 4× the $I$ of A despite same area — and would deflect 4× less under the same load. **Depth dominates stiffness.**

### F. ETABS Connection

ETABS reports $I_{33}$ (about the strong axis, used for major-axis bending) and $I_{22}$ (about the weak axis, used for minor-axis bending). For an I-beam laid flat (web horizontal), $I_{33}$ might be much smaller than the engineer expects — always confirm orientation.

> **Try it in ETABS 22:**
> 1. **Define > Section Properties > Frame Sections** → pick any beam → click **Section Properties**
> 2. Read $I_{33}$ and $I_{22}$ — these are the moments of inertia about the major and minor axes
> 3. Verify by hand using $I = bh^3/12$ for rectangles or the composite method for I-shapes

### G. Common Mistakes

1. **Forgetting parallel axis.** $I_{c}$ alone is not enough when the part isn't centered on the overall centroid.
2. **Confusing $I_{33}$ and $I_{22}$.** ETABS uses 3-3 = strong axis; 2-2 = weak axis.
3. **Wrong units.** $I$ has units of length⁴ — not mm³ or mm².

### H. Chapter Practice Task — Compute $I$ for a Built-up I-Section

> **Scenario:** I-section: top flange $300 \times 25$, bottom flange $300 \times 25$, web $20 \times 450$ (all mm). Symmetric → centroid at mid-height. Compute $I_{33}$ (about horizontal centroidal axis).
>
> **Worked Solution:**
>
> Total height = $25 + 450 + 25 = 500$ mm; centroid at 250 mm from bottom.
>
> | Part | $A$ | Own $I_c$ | $d$ to centroid | $A d^2$ |
> |------|-----|-----------|-----------------|---------|
> | Top flange | $7{,}500$ | $300 \cdot 25^3/12 = 3.91 \times 10^5$ | $237.5$ | $7{,}500 \cdot 237.5^2 = 4.23 \times 10^8$ |
> | Web | $9{,}000$ | $20 \cdot 450^3/12 = 1.519 \times 10^8$ | $0$ | $0$ |
> | Bottom flange | $7{,}500$ | $3.91 \times 10^5$ | $237.5$ | $4.23 \times 10^8$ |
>
> $I_{33} = 2(3.91 \times 10^5) + 1.519 \times 10^8 + 2(4.23 \times 10^8) = 7.82 \times 10^5 + 1.519 \times 10^8 + 8.46 \times 10^8$
> $\approx 9.99 \times 10^8\ \mathrm{mm^4}$
>
> **ETABS:** Section Designer → build same I-section → confirm $I_{33} \approx 1.0 \times 10^9\ \mathrm{mm^4}$.

### I. Chapter Summary Table

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Rectangle $I$ | $bh^3/12$ | Beam stiffness | Section Properties |
| Parallel axis | $I = I_c + Ad^2$ | Composite sections | Built into Section Designer |
| Strong vs weak axis | $I_{33}$ vs $I_{22}$ | Major vs minor bending | Section Properties dialog |
| Bending stress | $\sigma = Mc/I = M/S$ | Exact flexural stress check | Moment diagram + section properties |

<div style="page-break-after: always;"></div>

## Chapter 21 — Vectors

### A. Word Bank

| Word | Pronunciation | Plain English Meaning | Used In |
|------|---------------|----------------------|---------|
| **Vector** | "VEK-tor" | A quantity with magnitude and direction | Force, displacement |
| **Scalar** | "SKAY-ler" | A quantity with magnitude only | Mass, temperature |
| **Component** | "kom-POH-nent" | Projection of a vector onto an axis | $F_x$, $F_y$ |
| **Resultant** | "rih-ZUL-tant" | The single vector equivalent to several combined | Net force |
| **Unit vector** | — | A vector of length 1 used to indicate direction | $\hat{i}, \hat{j}, \hat{k}$ |

### B. Concept Introduction

A scalar is just a number with units (mass, temperature). A vector is a number plus a direction (force, velocity, displacement). Adding vectors is *not* the same as adding scalars — direction matters.

> **Real-world analogy:** Walking 3 km north then 4 km east doesn't put you 7 km away from start — it puts you 5 km away (along the diagonal). That diagonal is the resultant vector.

### C. The Physics Behind It

Forces are vectors. To analyze any structure with forces in multiple directions, you must:

1. Pick a coordinate system (typically X horizontal, Y vertical for 2D)
2. Write each force as X and Y **components**
3. Sum components separately

Then the equilibrium equations $\Sigma F_x = 0$ and $\Sigma F_y = 0$ apply directly.

### D. The Math

In this chapter, components are given directly. Chapter 22 teaches how to get components from an angle, and Chapter 23 teaches how to find a resultant magnitude from perpendicular components.

**Adding two vectors $\vec{A}$ and $\vec{B}$ by components:**
$$R_x = A_x + B_x \qquad R_y = A_y + B_y$$

**Worked example.** Two forces act at a joint. Force A has components $A_x = 12\ \mathrm{kN}$ and $A_y = 5\ \mathrm{kN}$. Force B has components $B_x = -3\ \mathrm{kN}$ and $B_y = 7\ \mathrm{kN}$. Find the resultant components.

$R_x = 12 + (-3) = 9\ \mathrm{kN}$
$R_y = 5 + 7 = 12\ \mathrm{kN}$

```
            Ry = 12 kN
              ↑
              │
              │
              └────────→ Rx = 9 kN
```

### E. Structural Engineering Application

**Problem.** A joint receives two already-resolved force components from connected members:
- Member 1: $F_x = 30\ \mathrm{kN}$, $F_y = 20\ \mathrm{kN}$
- Member 2: $F_x = -10\ \mathrm{kN}$, $F_y = 15\ \mathrm{kN}$

Find the combined components.

$R_x = 30 + (-10) = 20\ \mathrm{kN}$
$R_y = 20 + 15 = 35\ \mathrm{kN}$

The joint's net force components are 20 kN in X and 35 kN in Y.

### F. ETABS Connection

In ETABS, every force is a vector. When you assign **Joint Loads > Forces**, you enter Fx, Fy, Fz components separately. Angle-to-component calculations come in Chapter 22.

> **Try it in ETABS 22:**
> 1. **Assign > Joint Loads > Forces**
> 2. The dialog has six fields: Fx, Fy, Fz, Mx, My, Mz
> 3. To apply a force with known components, enter each component in the correct field
> 4. Click OK; visualize with **Display > Show Loads**

### G. Common Mistakes

1. **Ignoring signs.** Left/right and up/down components must keep their signs.
2. **Adding X to Y.** Add X components only with X components, and Y only with Y.
3. **Adding angled magnitudes directly.** Resolve to components first; Chapter 22 teaches how.

### H. Chapter Practice Task — Combining Component Forces

> **Scenario:** Two member forces at a node are already resolved into components:
> - Force 1: $F_{1x} = 56\ \mathrm{kN}$, $F_{1y} = 21\ \mathrm{kN}$
> - Force 2: $F_{2x} = 51\ \mathrm{kN}$, $F_{2y} = 61\ \mathrm{kN}$
> Find the resultant components.
>
> **Worked Solution:**
>
> $R_x = 56 + 51 = 107\ \mathrm{kN}$
> $R_y = 21 + 61 = 82\ \mathrm{kN}$
>
> Chapter 23 shows how to turn these components into a single resultant magnitude.

### I. Chapter Summary Table

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Component addition | $R_x = \Sigma F_x$, $R_y = \Sigma F_y$ | Combine known components | Joint Loads input |
| Vector sign | Direction matters | Force balance | Loads and reactions |

<div style="page-break-after: always;"></div>

## Chapter 22 — Right Triangle Trigonometry

### A. Word Bank

| Word | Pronunciation | Plain English Meaning | Used In |
|------|---------------|----------------------|---------|
| **Sine** | "SINE" | Opposite over hypotenuse | $\sin\theta$ |
| **Cosine** | "KOH-sine" | Adjacent over hypotenuse | $\cos\theta$ |
| **Tangent** | "TAN-jent" | Opposite over adjacent | $\tan\theta$ |
| **Hypotenuse** | "hy-POT-en-yoos" | Longest side, opposite the right angle | Diagonal brace |
| **Opposite** | "OP-oh-zit" | Side across from the angle of interest | Vertical leg in a slope |
| **Adjacent** | "ah-JAY-sent" | Side next to the angle (not the hypotenuse) | Horizontal leg |
| **SOH-CAH-TOA** | — | Mnemonic for the three ratios | Memory aid |

### B. Concept Introduction

Trigonometry is the math of triangles. A right triangle has one $90°$ angle. The three trig functions — sine, cosine, tangent — relate the sides and angles. They are the bridge between physical geometry (a roof slope, a brace angle) and the components engineers compute.

> **Real-world analogy:** A ramp. If you know its angle and length, trig tells you exactly how high it rises and how far it runs horizontally.

### C. The Physics Behind It

Inclined loads, sloping members, and lateral bracing all involve triangles. To analyze them, you decompose forces into perpendicular components — and trigonometry gives you the components from the angles.

### D. The Math

```
            *
           /│
          / │
         /  │ Opposite
        /   │
       / θ  │
      *─────*
      Adjacent
       Hypotenuse = side from θ to opposite-end vertex (the longest side)
```

| Function | Definition | Mnemonic |
|----------|-----------|----------|
| $\sin\theta$ | Opposite / Hypotenuse | **S**OH |
| $\cos\theta$ | Adjacent / Hypotenuse | **C**AH |
| $\tan\theta$ | Opposite / Adjacent | **T**OA |

**Common angle values to memorize:**

| $\theta$ | $\sin\theta$ | $\cos\theta$ | $\tan\theta$ |
|----------|-------------|-------------|-------------|
| $0°$ | $0$ | $1$ | $0$ |
| $30°$ | $0.500$ | $0.866$ | $0.577$ |
| $45°$ | $0.707$ | $0.707$ | $1.000$ |
| $60°$ | $0.866$ | $0.500$ | $1.732$ |
| $90°$ | $1$ | $0$ | $\infty$ |

**Worked example.** A diagonal brace in a frame has length $L = 5\ \mathrm{m}$ and rises at $40°$ from horizontal. Find horizontal run and vertical rise.

Horizontal run = $L \cos(40°) = 5 \times 0.766 = 3.83\ \mathrm{m}$
Vertical rise = $L \sin(40°) = 5 \times 0.643 = 3.21\ \mathrm{m}$

### E. Structural Engineering Application

**Problem.** A 12 kN load acts on a roof rafter sloped at $25°$. Resolve into components perpendicular and parallel to the rafter (for purlin design).

Perpendicular to rafter = $12 \cos(25°) = 12 \times 0.906 = 10.87\ \mathrm{kN}$
Parallel to rafter = $12 \sin(25°) = 12 \times 0.423 = 5.07\ \mathrm{kN}$

The perpendicular component creates bending; the parallel component creates axial force.

### F. ETABS Connection

When entering inclined loads in ETABS, you must trigonometrically resolve them into the global X, Y, Z components first. ETABS does not interpret angles — it only accepts components.

> **Try it in ETABS 22:**
> 1. **Assign > Frame Loads > Distributed**
> 2. To apply a 12 kN/m load perpendicular to a 25°-sloped rafter: enter the load in the local axis 2 direction (which is perpendicular to the member by default)
> 3. Or compute $w \cos 25° = 10.87$ in global Z (gravity), enter that — the BMD will reflect this projection

### G. Common Mistakes

1. **Calculator in degree vs radian mode.** Always check. $\sin(30°) = 0.5$, but $\sin(30\ \mathrm{rad}) = -0.988$.
2. **Wrong "opposite" side.** It's opposite the angle you're using.
3. **Mixing up sin and cos when "horizontal" and "vertical" are confused.** Always sketch first.

### H. Chapter Practice Task — Sloped Roof Load

> **Scenario:** A roof truss member is inclined $35°$ from horizontal. A vertical gravity load of $8\ \mathrm{kN/m}$ acts on the projected horizontal length. Convert to load along the rafter.
>
> **Worked Solution:**
>
> The vertical load $w_v = 8\ \mathrm{kN/m}$ on horizontal projection. Length of rafter per unit horizontal = $1/\cos(35°)$ → load per length along rafter = $w_v \cos(35°) = 8 \times 0.819 = 6.55\ \mathrm{kN/m}$.
>
> Decompose into perpendicular (causes bending) and parallel (axial):
> Perpendicular: $w_v \cos(35°)^2 = 8 \times 0.671 = 5.37\ \mathrm{kN/m}$
> Parallel: $w_v \cos(35°) \sin(35°) = 8 \times 0.819 \times 0.574 = 3.76\ \mathrm{kN/m}$
>
> **ETABS:** Build a 35° rafter element, apply Z = -8 kN/m. ETABS handles the inclined geometry; the resulting bending and axial follow the trig automatically.

### I. Chapter Summary Table

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Sine | $\sin\theta = O/H$ | Vertical component of inclined force | Manual, then Joint Loads |
| Cosine | $\cos\theta = A/H$ | Horizontal component | Manual, then Joint Loads |
| Tangent | $\tan\theta = O/A$ | Slope angle from rise/run | Manual |

<div style="page-break-after: always;"></div>

## Chapter 23 — The Pythagorean Theorem

### A. Word Bank

| Word | Pronunciation | Plain English Meaning | Used In |
|------|---------------|----------------------|---------|
| **Pythagorean** | "pih-THAG-oh-REE-an" | Named after Pythagoras | $a^2 + b^2 = c^2$ |
| **Theorem** | "THEE-oh-rem" | A mathematical statement that has been proven | Pythagorean theorem |
| **Right angle** | — | $90°$ angle | Corner of a rectangle |
| **Legs** | — | The two shorter sides of a right triangle | $a$, $b$ |

### B. Concept Introduction

For any right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides.

> **Real-world analogy:** Walk 3 m east, then 4 m north. Your straight-line distance from start is 5 m — because $3^2 + 4^2 = 9 + 16 = 25$, and $\sqrt{25} = 5$.

### C. The Physics Behind It

Whenever you combine two perpendicular components — horizontal/vertical, X/Y, force in two axes — the resultant magnitude follows Pythagoras. It also gives you exact diagonal lengths in framing geometry.

### D. The Math

$$a^2 + b^2 = c^2 \quad \mathrm{where}\ c\ \mathrm{is\ the\ hypotenuse}$$

Solve for $c$: $c = \sqrt{a^2 + b^2}$

**Worked example.** Diagonal brace from $(0,0)$ to $(4, 3)$ m: length = $\sqrt{16 + 9} = 5$ m.

### E. Structural Engineering Application

**Problem.** A column grid is 6 m × 8 m. A diagonal X-brace runs from corner to corner across one bay. Find the brace's length.

$L_{brace} = \sqrt{6^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10\ \mathrm{m}$

**Problem.** A column carries axial $P = 200\ \mathrm{kN}$ and shear $V = 75\ \mathrm{kN}$. Find the resultant force magnitude.

$R = \sqrt{200^2 + 75^2} = \sqrt{40{,}000 + 5{,}625} = \sqrt{45{,}625} = 213.6\ \mathrm{kN}$

### F. ETABS Connection

ETABS uses the distance formula (Pythagorean in coordinates) to compute every member length from joint coordinates. You can verify any member's length using your hand calculation.

> **Try it in ETABS 22:**
> 1. **Edit > Interactive Database Editing > Joints** — read coordinates of the brace endpoints
> 2. Apply Pythagoras: $L = \sqrt{(\Delta x)^2 + (\Delta y)^2 + (\Delta z)^2}$
> 3. Compare to ETABS's Frame property "Length" field — they should match exactly

### G. Common Mistakes

1. **Adding magnitudes directly.** $3 + 4 \neq 5$ — only the squares add.
2. **Forgetting it requires a right angle.** For non-right triangles, use the cosine rule (Chapter 24).
3. **Sign confusion.** $a$ and $b$ are lengths, always positive.

### H. Chapter Practice Task — Bracing in 3D

> **Scenario:** A 3D bracing element runs from joint A at $(0, 0, 0)$ to joint B at $(4, 3, 5)$ m. Find its length.
>
> **Worked Solution:**
>
> $L = \sqrt{4^2 + 3^2 + 5^2} = \sqrt{16 + 9 + 25} = \sqrt{50} = 7.071\ \mathrm{m}$
>
> **ETABS:** Verify by reading joint coords and member length.

### I. Chapter Summary Table

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Pythagorean theorem | $a^2 + b^2 = c^2$ | Diagonal brace length | Frame Length |
| 3D distance | $\sqrt{x^2+y^2+z^2}$ | Skew brace length | Frame Length |
| Resultant magnitude | $R = \sqrt{F_x^2 + F_y^2}$ | Force combination | Reactions |

<div style="page-break-after: always;"></div>

## Chapter 24 — Trigonometry for Non-Right Triangles

### A. Word Bank

| Word | Pronunciation | Plain English Meaning | Used In |
|------|---------------|----------------------|---------|
| **Sine rule** | — | Relates sides and opposite angles | Truss geometry |
| **Cosine rule** | — | Generalizes Pythagoras | Truss geometry |
| **Oblique** | "oh-BLEEK" | Not a right triangle | Truss panels |
| **Included angle** | — | Angle between two known sides | Cosine rule application |

### B. Concept Introduction

Many real triangles in trusses and bracing are not right-angled. Two general rules cover them: the **sine rule** and the **cosine rule**.

### C. The Physics Behind It

Truss panels often form scalene triangles (no right angles). Computing member lengths and angles requires these rules.

### D. The Math

```
       C
      / \
     /   \
   b/     \a
   /       \
  /  γ      \
 /-α______β-\
A     c     B
```

Sides $a, b, c$ opposite angles $A, B, C$.

**Sine rule:**
$$\dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C}$$

**Cosine rule:**
$$c^2 = a^2 + b^2 - 2ab\cos C$$

**Worked example.** A truss panel: side $a = 4$ m, side $b = 5$ m, included angle $C = 70°$. Find side $c$.

$c^2 = 16 + 25 - 2(4)(5)\cos 70° = 41 - 40(0.342) = 41 - 13.68 = 27.32$
$c = \sqrt{27.32} = 5.23\ \mathrm{m}$

### E. Structural Engineering Application

**Problem.** A truss has top chord $a = 6\ \mathrm{m}$ and diagonal $b = 4\ \mathrm{m}$, with included angle $30°$. Find the bottom chord length and the other angles.

Cosine rule: $c^2 = 36 + 16 - 48\cos 30° = 52 - 41.57 = 10.43$ → $c = 3.23\ \mathrm{m}$

Sine rule for angle A (opposite $a$):
$\sin A / a = \sin C / c$ → $\sin A = (a / c)\sin C = (6/3.23)(0.5) = 0.929$ → $A = 68.32°$
$B = 180 - 30 - 68.32 = 81.68°$

### F. ETABS Connection

When laying out truss geometry from drawings, you often have a panel angle and two member lengths and need to verify the third. The cosine rule confirms member lengths before you draw nodes in ETABS.

> **Try it in ETABS 22:**
> 1. Compute joint coordinates from your hand triangle calculations
> 2. **Edit > Grid Data** or directly **Draw > Frame Object** with explicit start/end coordinates
> 3. Verify member length matches your cosine-rule answer

### G. Common Mistakes

1. **Wrong angle in cosine rule.** $C$ must be the angle between sides $a$ and $b$ (the included angle).
2. **Calculator mode.** Radians vs degrees again.
3. **Ambiguous case in sine rule.** Two triangles can sometimes satisfy the same data; always sketch.

### H. Chapter Practice Task — Truss Panel Geometry

> **Scenario:** A truss panel has bottom chord 8 m, vertical post 3 m at the right end, and a diagonal connecting the top-of-post to the left end of the bottom chord. Find the diagonal length and the angle it makes with the bottom chord.
>
> **Worked Solution:**
>
> Right triangle (vertical post is at 90°). Diagonal $d = \sqrt{8^2 + 3^2} = \sqrt{73} = 8.544\ \mathrm{m}$. Angle = $\tan^{-1}(3/8) = 20.56°$ from horizontal.
>
> **ETABS:** Place joints at $(0,0,0)$, $(8,0,0)$, $(8,0,3)$. Draw frames, verify member lengths.

### I. Chapter Summary Table

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Sine rule | $a/\sin A = b/\sin B$ | Truss angle/length | Manual layout |
| Cosine rule | $c^2 = a^2 + b^2 - 2ab\cos C$ | Generalized Pythagoras | Manual layout |

<div style="page-break-after: always;"></div>

## Chapter 25 — Coordinate Geometry

### A. Word Bank

| Word | Pronunciation | Plain English Meaning | Used In |
|------|---------------|----------------------|---------|
| **Coordinate** | "koh-OR-dih-nut" | A number that locates a point | $(x, y, z)$ |
| **Cartesian** | "kar-TEE-zhun" | The standard X-Y(-Z) grid | Coordinate system |
| **Origin** | "OR-ih-jin" | The $(0,0,0)$ reference point | Building corner |
| **Distance formula** | — | Length between two points | Member length |
| **Slope** | "SLOPE" | Steepness of a line, $\Delta y / \Delta x$ | Roof slope |
| **Midpoint** | "MID-poynt" | The average of two endpoints | Centerline |

### B. Concept Introduction

Coordinate geometry assigns numbers (coordinates) to points so we can do geometry algebraically. Every joint in a structural model has $(x, y, z)$ coordinates; every member length, angle, and grid intersection comes from coordinate calculations.

### C. The Physics Behind It

ETABS stores every joint's location as $(x, y, z)$. Member lengths come from the 3D distance formula. Forces and displacements at each joint are vectors in this coordinate system.

### D. The Math

**Distance between two points** in 2D:
$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

In 3D:
$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}$$

**Midpoint:**
$$M = \left(\dfrac{x_1 + x_2}{2}, \dfrac{y_1 + y_2}{2}\right)$$

**Slope** of a line from $(x_1, y_1)$ to $(x_2, y_2)$:
$$m = \dfrac{y_2 - y_1}{x_2 - x_1}$$

**Worked example.** Joint A at $(0, 0)$, joint B at $(8, 6)$. Find member length, midpoint, slope.

Length: $\sqrt{64 + 36} = \sqrt{100} = 10$ m
Midpoint: $(4, 3)$
Slope: $6/8 = 0.75$ → angle = $\tan^{-1}(0.75) = 36.87°$

### E. Structural Engineering Application

**Problem.** A column grid: gridline 1 at $x = 0$, gridline 2 at $x = 6$, gridline 3 at $x = 12$. Y-axis: gridline A at $y = 0$, B at $y = 5$, C at $y = 10$. Story 2 is at $z = 4$. Find the coordinates of joint at intersection of grid 2-B-Story2.

Coords: $(6, 5, 4)$ m.

Length of a beam between joints (2-B-2) and (3-B-2): $\sqrt{(12-6)^2 + 0 + 0} = 6$ m.

Length of a brace from (1-A-1) at $(0, 0, 0)$ to (2-A-2) at $(6, 0, 4)$: $\sqrt{36 + 16} = \sqrt{52} = 7.21$ m.

### F. ETABS Connection

In ETABS:
- **Edit > Grid Data** sets up the coordinate system
- Every joint inherits a coordinate from the grid intersection
- **Edit > Interactive Database Editing > Joints** lets you view/edit raw coordinates
- Member lengths are computed automatically from joint coordinates

> **Try it in ETABS 22:**
> 1. **Define > Grid System Data > Modify/Show System** — create grid A, B, C at y=0, 5, 10 and 1, 2, 3 at x=0, 6, 12
> 2. Set story heights = 4 m
> 3. Draw a column at intersection 2-B
> 4. Click the column → **Display Frame Properties** — read length = 4 m
> 5. **Edit > Interactive Database Editing > Joints** — verify joint coordinates

### G. Common Mistakes

1. **Wrong axis convention.** ETABS uses Z = vertical (up). Some textbooks use Y = vertical. Stay with one.
2. **Negative coordinates.** Common when origin is at a corner — keep signs straight.
3. **Forgetting Z when computing 3D distances.** A "vertical" member appears as $\Delta x = \Delta y = 0$, $\Delta z =$ length.

### H. Chapter Practice Task — Member Length and Direction

> **Scenario:** A diagonal brace runs from joint A at $(2, 1, 0)$ to joint B at $(7, 4, 4)$ m. Find length and angle from horizontal.
>
> **Worked Solution:**
>
> $\Delta x = 5, \Delta y = 3, \Delta z = 4$
> Horizontal projection: $\sqrt{25 + 9} = \sqrt{34} = 5.83$ m
> Total length: $\sqrt{34 + 16} = \sqrt{50} = 7.07$ m
> Angle from horizontal: $\tan^{-1}(4 / 5.83) = 34.45°$
>
> **ETABS:** Place joints at exact coordinates, draw brace, confirm length.

### I. Chapter Summary Table

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| 2D distance | $\sqrt{\Delta x^2 + \Delta y^2}$ | Plan distances | Frame length |
| 3D distance | $\sqrt{\Delta x^2 + \Delta y^2 + \Delta z^2}$ | Skew braces | Frame length |
| Slope | $\Delta y / \Delta x$ | Roof, ramp angles | Manual |
| Coordinates | $(x, y, z)$ | Every joint location | Edit > Grid Data |

<div style="page-break-after: always;"></div>

> **End of Part 3.** You now command the geometry of structural sections (areas, centroids, $I$), can resolve any vector into components, can compute any triangle's sides and angles, and can place joints anywhere in 3D space. In Part 4 we promote these skills with precalculus — polynomial moment functions, proportional reasoning, exponential and logarithmic relationships, and matrices (the math ETABS solves internally).

<div style="page-break-after: always;"></div>

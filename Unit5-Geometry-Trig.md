# Unit 5 — Geometry, Angles, and 3D Space

> Forces do not always point straight up or down. This unit gives you the tools to resolve any inclined force into components, find diagonal member lengths from geometry, place every joint in 3D space with exact coordinates, and compute moment vectors in three dimensions — so you can read ETABS output for any member orientation.

<div style="page-break-after: always;"></div>

## Chapter 18 — Resolving Diagonal Forces

### A. Achievement

After this section you can decompose any inclined force into horizontal and vertical components using sine and cosine, find the resultant magnitude from two perpendicular components using the Pythagorean theorem, and find any unknown diagonal length in a structural grid.

### B. The Situation

A diagonal bracing member runs at 35° from horizontal in a steel frame. It carries a compression force of $180\ \mathrm{kN}$ along its length. The columns and beams it connects to need to resist specific horizontal and vertical components — not the inclined total. A wind force of $60\ \mathrm{kN}$ acts horizontally at a roof joint that also carries $80\ \mathrm{kN}$ vertically. What is the resultant force on the anchor?

Neither of these problems can be solved by adding magnitudes. Direction is part of what a force is.

### C. The Intuition

A force is a <abbr title="[→ Ch5] magnitude + direction + point of application">vector</abbr> — it has both size and direction. When a force acts at an angle, it is doing two jobs at once: pushing horizontally and pushing vertically. You can separate these two jobs using a right triangle.

**Decomposing into components:**
Draw the force as the hypotenuse of a right triangle. The horizontal leg and the vertical leg are the components. Three trig ratios define the relationships between the angle and the sides:

```
Force F at angle θ from horizontal:

         F (hypotenuse)
        ╱
       ╱  θ
      ╱────────── F_x = F cos θ  (horizontal)
      │
      │ F_y = F sin θ  (vertical)
      
SOH: sin θ = opposite / hypotenuse
CAH: cos θ = adjacent / hypotenuse
TOA: tan θ = opposite / adjacent
```

**Combining components back into a resultant:**
If you know two perpendicular components $F_x$ and $F_y$, the Pythagorean theorem gives the resultant magnitude:
$$R = \sqrt{F_x^2 + F_y^2}$$

This works for force components, for the length of a diagonal brace from its grid dimensions, and for any right triangle.

### D. Failure Case

A student computes $\sin(45°) = 0.851$ — the calculator is in radian mode (interpreting "45" as 45 radians). The vertical component of a $100\ \mathrm{kN}$ brace is computed as $85.1\ \mathrm{kN}$ instead of the correct $70.7\ \mathrm{kN}$ — a 20% overestimate that feeds directly into column design.

The second common failure: adding two non-parallel force magnitudes directly. $60\ \mathrm{kN}$ horizontal + $80\ \mathrm{kN}$ vertical $\neq\ 140\ \mathrm{kN}$. The actual resultant is $\sqrt{60^2 + 80^2} = 100\ \mathrm{kN}$. Only when the forces are parallel can magnitudes be added. When they are perpendicular, use Pythagoras.

### E. The Rule

Draw the triangle first. Label the angle, the hypotenuse, the opposite, and the adjacent side. Then and only then select the trig ratio. Check calculator mode. The Pythagorean theorem applies only to right triangles — when combining two forces, they must be perpendicular.

### F. The Formal Shorthand

$$F_x = F \cos\theta \qquad F_y = F \sin\theta \qquad R = \sqrt{F_x^2 + F_y^2} \qquad \theta = \arctan\!\left(\frac{F_y}{F_x}\right)$$

Common angle values (degrees, check calculator mode):

| θ | $\sin θ$ | $\cos θ$ | $\tan θ$ |
|---|--------|--------|--------|
| 0° | 0 | 1 | 0 |
| 30° | 0.500 | 0.866 | 0.577 |
| 45° | 0.707 | 0.707 | 1.000 |
| 60° | 0.866 | 0.500 | 1.732 |
| 90° | 1 | 0 | ∞ |

Brace length from grid dimensions $(\Delta x, \Delta y, \Delta z)$:
$$L = \sqrt{(\Delta x)^2 + (\Delta y)^2 + (\Delta z)^2}$$

### G. Full Worked Example — Diagonal Brace Components and Column Grid Length

**Part 1 — Brace force components.** A diagonal brace carries $F = 180\ \mathrm{kN}$ at $35°$ from horizontal.

$$F_x = 180 \cos(35°) = 180 \times 0.819 = 147.4\ \mathrm{kN} \quad (\text{horizontal — acts on beam})$$
$$F_y = 180 \sin(35°) = 180 \times 0.574 = 103.3\ \mathrm{kN} \quad (\text{vertical — acts on column})$$

**Sanity:** $\sqrt{147.4^2 + 103.3^2} = \sqrt{21{,}727 + 10{,}671} = \sqrt{32{,}398} = 180\ \mathrm{kN}\ \checkmark$

**Part 2 — Resultant at a roof joint.** Wind $F_x = 60\ \mathrm{kN}$ horizontal, gravity $F_y = 80\ \mathrm{kN}$ vertical. Resultant:

$$R = \sqrt{60^2 + 80^2} = \sqrt{3{,}600 + 6{,}400} = \sqrt{10{,}000} = 100\ \mathrm{kN}$$
$$\theta = \arctan(80/60) = 53.1°\ \text{from horizontal}$$

**Part 3 — Brace length from grid.** Bay = $6\ \mathrm{m}$ × $4\ \mathrm{m}$ (horizontal) × $3\ \mathrm{m}$ (vertical rise):
$$L = \sqrt{6^2 + 4^2 + 3^2} = \sqrt{36 + 16 + 9} = \sqrt{61} = 7.81\ \mathrm{m}$$

### H. Practice Task

> **Scenario:** A roof rafter is inclined $30°$ from horizontal. A vertical gravity load of $w = 10\ \mathrm{kN/m}$ acts over a horizontal plan length. Find:
> 1. Rafter length per 1 m of horizontal plan
> 2. Vertical and horizontal components of a 50 kN force along the rafter
> 3. The resultant of $F_x = 40\ \mathrm{kN}$ and $F_y = 30\ \mathrm{kN}$
>
> **Answers:**
> 1. Length = $1 / \cos(30°) = 1.155\ \mathrm{m}$ per m of plan
> 2. $F_x = 50\cos(30°) = 43.3\ \mathrm{kN}$; $F_y = 50\sin(30°) = 25\ \mathrm{kN}$
> 3. $R = \sqrt{1600 + 900} = 50\ \mathrm{kN}$; $\theta = \arctan(30/40) = 36.9°$

### I. What You Now Know

Any inclined force has horizontal and vertical components. Use sine for the vertical component, cosine for the horizontal — when measuring the angle from the horizontal. The Pythagorean theorem recovers the resultant from perpendicular components. These tools complete the <abbr title="[→ Ch5] sketch showing every force — known and unknown — acting on a free body">FBD</abbr> toolkit for inclined members.

| Tool | Formula | Use |
|------|---------|-----|
| Component | $F_x = F\cos\theta$, $F_y = F\sin\theta$ | Resolve inclined force |
| Resultant | $R = \sqrt{F_x^2 + F_y^2}$ | Combine perpendicular components |
| Diagonal length | $L = \sqrt{\Delta x^2 + \Delta y^2 + \Delta z^2}$ | Brace / member length |
| Angle | $\theta = \arctan(F_y/F_x)$ | Find direction of resultant |

<div style="page-break-after: always;"></div>

## Chapter 19 — Truss Geometry: Non-Right Triangles

### A. Achievement

After this section you can find unknown side lengths and angles in any truss panel using the sine rule and cosine rule, and verify member lengths from drawings before entering them in ETABS.

### B. The Situation

A truss has a panel with sides $a = 4\ \mathrm{m}$ and $b = 6\ \mathrm{m}$ and an included angle $C = 75°$ between them. Neither angle is 90°, so the <abbr title="[→ Ch18] c = √(a²+b²) — applies only when one angle is exactly 90°">Pythagorean theorem</abbr> does not apply. You need the third side to check the panel diagonal member's slenderness ratio.

### C. The Intuition

Real trusses rarely have purely right-angled panels. Hip roofs, Pratt trusses, and Vierendeel frames all produce triangles with oblique angles. Two rules cover every possible triangle:

**The cosine rule** generalizes Pythagoras. For a right triangle with $C = 90°$, the $-2ab\cos C$ term vanishes because $\cos 90° = 0$, leaving $c^2 = a^2 + b^2$. For any other angle, the cosine correction adjusts for the deviation from perpendicularity.

**The sine rule** says that in any triangle, the ratio of a side to the sine of its opposite angle is constant. This lets you find any angle or side if you know one ratio.

```
       C
      / \
     /   \
   b/     \a
   /       \
  A────────B
       c
       
Sides a, b, c opposite angles A, B, C.
```

### D. Failure Case

A truss panel has two sides of $5\ \mathrm{m}$ and $8\ \mathrm{m}$. The sketch looks almost right-angled. The engineer uses Pythagoras: $\sqrt{5^2 + 8^2} = 9.43\ \mathrm{m}$. The actual included angle is $75°$, not $90°$. Cosine rule: $c = \sqrt{25 + 64 - 80\cos(75°)} = \sqrt{89 - 20.7} = 8.27\ \mathrm{m}$.

The Pythagorean answer overstates the member length by 14%. If the slenderness limit is $L/r = 200$ with $r = 50\ \mathrm{mm}$, the Pythagorean answer gives $L_{max,allow} = 10{,}000\ \mathrm{mm}$ and the member appears to pass at $9{,}430\ \mathrm{mm}$. The actual member is $8{,}270\ \mathrm{mm}$ — still passes, but the wrong approach could have given either a false pass or false fail on a more tightly constrained panel.

### E. The Rule

For a non-right triangle: use the cosine rule to find the third side when two sides and the included angle are known. Use the sine rule to find an angle when a side and its opposite angle are known. Always verify with a sketch that the answer is geometrically sensible.

### F. The Formal Shorthand

$$\text{Cosine rule: } c^2 = a^2 + b^2 - 2ab\cos C$$
$$\text{Sine rule: } \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$

To find an angle from two sides and the third side (cosine rule rearranged):
$$\cos C = \frac{a^2 + b^2 - c^2}{2ab}$$

Note: <abbr title="[→ Ch3] evaluate exponents first, then multiply">PEMDAS</abbr> matters — compute $a^2$, $b^2$, $c^2$ first, then do the arithmetic.

### G. Full Worked Example — Hip Roof Truss Panel

**Problem.** A hip roof truss panel: top chord segment $a = 4\ \mathrm{m}$, hip rafter $b = 5.5\ \mathrm{m}$, included angle $C = 68°$. Find the horizontal ridge member $c$ and the angles $A$ and $B$.

**Step 1 — Find $c$ by cosine rule:**
$$c^2 = 4^2 + 5.5^2 - 2(4)(5.5)\cos(68°) = 16 + 30.25 - 44 \times 0.3746 = 46.25 - 16.48 = 29.77$$
$$c = \sqrt{29.77} = 5.46\ \mathrm{m}$$

**Step 2 — Find angle $A$ (opposite $a = 4\ \mathrm{m}$) by sine rule:**
$$\frac{\sin A}{4} = \frac{\sin 68°}{5.46} \quad\Rightarrow\quad \sin A = \frac{4 \times 0.9272}{5.46} = 0.679 \quad\Rightarrow\quad A = 42.7°$$

**Step 3 — Find angle $B$ by angle sum:**
$$B = 180° - 68° - 42.7° = 69.3°$$

**Verify:** $c / \sin C = 5.46/0.9272 = 5.89$; $b / \sin B = 5.5/\sin(69.3°) = 5.5/0.935 = 5.88\ \checkmark$

### H. Practice Task

> **Scenario:** A Pratt truss panel with vertical post $3\ \mathrm{m}$, bottom chord $8\ \mathrm{m}$, and a diagonal connecting the top of the post to the far end of the bottom chord. The bottom chord and vertical are at $90°$ to each other.
>
> **Tasks:**
> 1. Find the diagonal length (right triangle case, just Pythagoras)
> 2. Find the angle the diagonal makes with the horizontal
>
> **Answers:**
> 1. $d = \sqrt{8^2 + 3^2} = \sqrt{73} = 8.544\ \mathrm{m}$
> 2. $\theta = \arctan(3/8) = 20.6°$

### I. What You Now Know

Every triangle in structural geometry can be solved. Right triangles use Pythagoras and basic trig. Non-right triangles use the cosine rule (sides) or sine rule (angles and ratios).

| Rule | Use When | Formula |
|------|----------|---------|
| Cosine rule | 2 sides + included angle known | $c^2 = a^2 + b^2 - 2ab\cos C$ |
| Sine rule | A side and its opposite angle known | $a/\sin A = b/\sin B$ |
| Pythagoras | One angle is exactly 90° | $c = \sqrt{a^2+b^2}$ |

<div style="page-break-after: always;"></div>

## Chapter 20 — Coordinate Geometry: Locating Joints and Members in 3D

### A. Achievement

After this section you can write the $(x, y, z)$ coordinates for every joint in a regular structural grid, compute the length of any member from its endpoint coordinates, and verify that an ETABS model's joint data matches the design intent.

### B. The Situation

You are modeling a new concrete building in ETABS. The grid is $6 \times 8$ m in plan, 4 m story heights. A transfer beam runs diagonally from grid intersection $(6, 0, 8)$ to $(12, 8, 8)$ m. To enter it in ETABS and compute its length, you need coordinate geometry.

Every misplaced joint in ETABS produces the wrong member length, the wrong stiffness, and wrong forces throughout the model. Getting coordinates right is the foundation of accurate modeling.

### C. The Intuition

Coordinate geometry assigns a number triple $(x, y, z)$ to every point in space. The building's geometry becomes algebra: distance is the square root of the sum of squared differences, midpoints are component-wise averages, and slopes are ratios of differences.

This is the same concept as <abbr title="[→ Ch11] V(x) and M(x) — value at position x — shear and moment are functions of position along the beam">position-as-number</abbr> used in the SFD/BMD, now extended to three dimensions.

ETABS stores every joint as a triplet. Every member length, angle, and tributary area is computed from those triplets. The model is fundamentally a system of coordinates.

### D. Failure Case

A diagonal brace runs from corner A at $(0, 0, 0)$ to corner B at $(6, 4, 0)$. An engineer computes the length as $6 + 4 = 10\ \mathrm{m}$ (adding the two plan dimensions). The actual length is $\sqrt{6^2 + 4^2} = 7.21\ \mathrm{m}$. The brace weight, slenderness check, and bolt design are all based on the wrong length.

This is the same error as adding perpendicular components directly instead of using Pythagoras — coordinates make the perpendicularity explicit.

### E. The Rule

Every joint gets a coordinate triple. All geometric calculations (length, angle, midpoint) follow from coordinate arithmetic. In ETABS, always verify joint coordinates against the structural drawing — a $0.1\ \mathrm{m}$ coordinate error changes a member length and alignment permanently.

### F. The Formal Shorthand

$$\text{3D Distance: } d = \sqrt{(\Delta x)^2 + (\Delta y)^2 + (\Delta z)^2}$$
$$\text{Midpoint: } M = \left(\frac{x_1+x_2}{2},\ \frac{y_1+y_2}{2},\ \frac{z_1+z_2}{2}\right)$$
$$\text{Slope (2D): } m = \frac{\Delta y}{\Delta x} \qquad \text{Angle: } \theta = \arctan(m)$$

**ETABS grid convention:** $X$ = east-west, $Y$ = north-south, $Z$ = up (vertical).

### G. Full Worked Example — Regular Grid Coordinates

**Problem.** A 3-bay, 2-story office building: grid lines 1-2-3 at $x = 0, 6, 12\ \mathrm{m}$; grid lines A-B-C at $y = 0, 5, 10\ \mathrm{m}$; Story 1 at $z = 0$, Story 2 at $z = 4$, Story 3 at $z = 8$.

(a) Find the coordinates of joint 2-B at Story 3.
(b) Find the length of the beam from joint 1-B-Story3 to 2-B-Story3.
(c) Find the length of a diagonal brace from joint 1-A-Story1 at $(0, 0, 0)$ to joint 2-B-Story2 at $(6, 5, 4)$.

**(a)** Joint 2-B-Story3: $x = 6$, $y = 5$, $z = 8$ → coordinates $(6, 5, 8)$.

**(b)** Beam from $(0, 5, 8)$ to $(6, 5, 8)$:
$$L = \sqrt{(6-0)^2 + (5-5)^2 + (8-8)^2} = \sqrt{36} = 6\ \mathrm{m}$$

**(c)** Brace from $(0, 0, 0)$ to $(6, 5, 4)$:
$$L = \sqrt{36 + 25 + 16} = \sqrt{77} = 8.77\ \mathrm{m}$$

Angle from horizontal: $\arctan(4 / \sqrt{36+25}) = \arctan(4/7.81) = 27.1°$

### H. Practice Task

> **Scenario:** A transfer plate runs between these four joints: A$(0, 0, 6)$, B$(8, 0, 6)$, C$(8, 6, 6)$, D$(0, 6, 6)$ m. Find:
> 1. The lengths of all four perimeter beams
> 2. The length of the diagonal from A to C
>
> **Answers:**
> 1. AB: $\sqrt{64} = 8\ \mathrm{m}$; BC: $\sqrt{36} = 6\ \mathrm{m}$; CD = 8 m; DA = 6 m
> 2. AC: $\sqrt{8^2 + 6^2} = \sqrt{100} = 10\ \mathrm{m}$

### I. What You Now Know

Every point in a structure has coordinates; every geometric calculation follows from coordinate arithmetic. Lengths use the 3D distance formula. Angles use arctan. These coordinates are the input to ETABS — getting them right is the first task of structural modeling.

| Formula | Use | ETABS equivalent |
|---------|-----|-----------------|
| 3D distance | Member length from joints | Frame length check |
| Midpoint | Mid-span joint, centroid of panel | — |
| Slope/angle | Member inclination | Frame local axis angle |

<div style="page-break-after: always;"></div>

## Chapter 21 — 3D Moments: Cross Products and Local Axes

### A. Achievement

After this section you can compute the three-component moment vector at a column base from a 3D force and position vector using the cross product $\vec{M} = \vec{r} \times \vec{F}$, and interpret the result in terms of ETABS's M2, M3, and torsion outputs.

### B. The Situation

A column base connection must be designed for the moment from an eccentric load. The load is not purely vertical, and the column base is not at the origin — the force and the moment arm are both three-dimensional vectors. ETABS reports three moment components at every joint: M2 (bending about the weak axis), M3 (bending about the strong axis), and torsion (twisting). Each component comes from a different part of the 3D load path.

### C. The Intuition

In 2D, <abbr title="[→ Ch10] M = F × d — the rotational effect of a force about a pivot">moment = force × perpendicular distance</abbr>. In 3D, the same physical idea is captured by the **cross product** of the position vector $\vec{r}$ (from the pivot to the force's point of application) and the force vector $\vec{F}$:

$$\vec{M} = \vec{r} \times \vec{F}$$

The cross product of two 3D vectors produces a third vector perpendicular to both. That perpendicular vector's direction tells you which axis the moment tends to rotate about. Its magnitude tells you how large the rotational effect is.

A second tool, the **dot product**, gives the angle between two vectors or the projection of one onto another — useful for checking member orientation or decomposing a force into components along a local axis.

### D. Failure Case

A 3D load of $(20, 0, -50)\ \mathrm{kN}$ is applied at $(0, 3, 6)\ \mathrm{m}$ from the column base. An engineer computes "the moment" as $50 \times 6 = 300\ \mathrm{kN \cdot m}$ — treating it as a 2D scalar problem using only the vertical load and height.

The cross product $\vec{r} \times \vec{F}$:
- $M_x = 3(-50) - 6(0) = -150\ \mathrm{kN \cdot m}$
- $M_y = 6(20) - 0(-50) = 120\ \mathrm{kN \cdot m}$
- $M_z = 0(0) - 3(20) = -60\ \mathrm{kN \cdot m}$

Three separate moment components, all of which affect the base plate and anchor bolts differently. The $300\ \mathrm{kN \cdot m}$ estimate misses two of the three components entirely and gets the third wrong.

### E. The Rule

In 3D, compute moments with the cross product. Never simplify a 3D problem to a scalar unless the geometry truly justifies it (e.g., a purely planar structure with no out-of-plane forces). All three moment components must be designed for in connections, base plates, and splice details.

### F. The Formal Shorthand

**Dot product** (scalar result — gives angle or projection):
$$\vec{A} \cdot \vec{B} = A_x B_x + A_y B_y + A_z B_z = |\vec{A}||\vec{B}|\cos\theta$$

**Cross product** (vector result — gives moment or perpendicular direction):
$$\vec{r} \times \vec{F} = \begin{pmatrix} r_y F_z - r_z F_y \\ r_z F_x - r_x F_z \\ r_x F_y - r_y F_x \end{pmatrix}$$

**ETABS axes:** Global $X, Y, Z$ (building-fixed). Member local axes 1 (along length), 2, 3 (perpendicular). For a vertical column: local 1 = global Z; local 2 and 3 depend on the assigned angle. The choice of local axis angle affects which direction is "strong" and which is "weak."

### G. Full Worked Example — Cantilever Base Moment in 3D

**Problem.** A horizontal cantilever extends from the origin in the $+X$ direction to the point $\vec{r} = (4, 0, 0)\ \mathrm{m}$. At the tip, a force $\vec{F} = (0, -5, -10)\ \mathrm{kN}$ acts ($5\ \mathrm{kN}$ in $-Y$, $10\ \mathrm{kN}$ in $-Z$). Find the moment vector at the fixed end.

$$\vec{M} = \vec{r} \times \vec{F} = (4, 0, 0) \times (0, -5, -10)$$

$$M_x = r_y F_z - r_z F_y = 0(-10) - 0(-5) = 0$$
$$M_y = r_z F_x - r_x F_z = 0(0) - 4(-10) = +40$$
$$M_z = r_x F_y - r_y F_x = 4(-5) - 0(0) = -20$$

$$\vec{M} = (0,\ 40,\ -20)\ \mathrm{kN \cdot m}$$

**Interpretation:**
- $M_y = 40\ \mathrm{kN \cdot m}$: moment about global Y (caused by the $-Z$ downward load × 4 m horizontal arm — matches $F_z \times L = 10 \times 4 = 40$)
- $M_z = -20\ \mathrm{kN \cdot m}$: moment about global Z (caused by the $-Y$ lateral load × 4 m arm — matches $F_y \times L = 5 \times 4 = 20$)

**ETABS verification:** Build a 4 m horizontal cantilever in the $X$ direction. Apply joint loads at the tip: Fy = −5 kN, Fz = −10 kN. Read fixed-end joint reactions: My reaction should be $+40$ kN·m, Mz reaction should be $-20$ kN·m (or sign-flipped depending on ETABS convention).

### H. Practice Task

> **Scenario:** A column extends from the base at $(0, 0, 0)$ to the top at $(0, 0, 6)\ \mathrm{m}$. A horizontal load $\vec{F} = (30, 0, 0)\ \mathrm{kN}$ is applied at the top joint. Find the moment vector at the base.
>
> **Tasks:**
> 1. Write $\vec{r}$ from base to top
> 2. Compute $\vec{M} = \vec{r} \times \vec{F}$ using the cross-product formula
> 3. Identify which ETABS moment component this corresponds to (M2 or M3?)
>
> **Answers:**
> 1. $\vec{r} = (0, 0, 6)$
> 2. $M_x = 0 \cdot 0 - 6 \cdot 0 = 0$; $M_y = 6 \cdot 30 - 0 \cdot 0 = 180$; $M_z = 0 \cdot 0 - 0 \cdot 30 = 0$; $\vec{M} = (0, 180, 0)\ \mathrm{kN \cdot m}$
> 3. $M_y = 180\ \mathrm{kN \cdot m}$ — bending about the global Y axis — corresponds to M3 in ETABS if the column's local axis 3 is aligned with global Y.

### I. What You Now Know

3D moments are vectors, not scalars. The cross product $\vec{r} \times \vec{F}$ computes all three moment components simultaneously. ETABS reports them as M2 (weak-axis bending), M3 (strong-axis bending), and T (torsion). Knowing which global force and which moment arm produces which ETABS component is essential for connection design.

| Concept | Formula | Engineering Use | ETABS |
|---------|---------|----------------|-------|
| Dot product | $\vec{A}\cdot\vec{B} = |\vec{A}||\vec{B}|\cos\theta$ | Angle between members, projection | — |
| Cross product | $\vec{r} \times \vec{F}$ | 3D moment from force + arm | Joint reactions Mx, My, Mz |
| Local axes 1-2-3 | Attached to each member | Bending directions | Frame Local Axes dialog |
| Strong vs weak axis | Local axis 3 vs 2 | Different $I$ values | $I_{33}$, $I_{22}$ |

<div style="page-break-after: always;"></div>

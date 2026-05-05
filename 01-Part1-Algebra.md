# PART 1 — ALGEBRA FOR STRUCTURAL ENGINEERS

> This part teaches algebra as a tool for working with structural formulas: reading them, rearranging them for any unknown, tracking units, finding two unknowns at once, and predicting how one quantity drives another. Six sections cover exactly what you need, at the moment you need it.

<div style="page-break-after: always;"></div>

## Chapter 1 — Formulas Are Sentences: Variables, Equations, and Rearranging

### A. Achievement

After this section you can take any structural formula — $\sigma = P/A$, $M = wL^2/8$, $R = wL/2$ — and solve it for whichever quantity you need, given the others.

### B. The Situation

A concrete column has a cross-sectional area of $A = 0.09\ \mathrm{m^2}$. The building code says the maximum allowable bearing stress is $\sigma_{allow} = 5\ \mathrm{MPa} = 5000\ \mathrm{kN/m^2}$. What is the largest axial load this column can carry without exceeding that stress limit?

The formula that connects load, area, and stress is:
$$\sigma = \frac{P}{A}$$

You know $\sigma$ and $A$. You need $P$. The formula isn't written that way — but you can rearrange it.

### C. The Intuition

A formula is a sentence written in symbols. $\sigma = P/A$ says "stress equals load divided by area." A variable is a named box that holds a number. The equation says the two sides are always equal — like a scale perfectly balanced.

To find $P$, you need to move everything else away from it. The way to do that without tipping the scale is to do the same operation to both sides. If $\sigma = P/A$, then $\sigma \times A = P$ — because you multiplied both sides by $A$, and $A \div A$ on the right side cancelled to 1.

No memorized step. Just: keep the balance, and undo what's in the way.

### D. Failure Case

Suppose you "move $A$ to the other side and flip it" by instinct, without thinking:

$$\sigma = \frac{P}{A} \xrightarrow{\text{wrong}} P = \frac{\sigma}{A}$$

Plugging in numbers: $P = 5000 / 0.09 = 55{,}556\ \mathrm{kN/m^2 \div m^2}$ — the units don't even make sense. The correct answer is $P = 5000 \times 0.09 = 450\ \mathrm{kN}$.

Using the wrong rearrangement gives a result that is off by a factor of over 6,000 and has wrong units. A column designed this way would fail catastrophically.

### E. The Rule

An equation is a balance. To isolate a variable, apply the same inverse operation to both sides. Multiplication undoes division. Division undoes multiplication. Subtraction undoes addition.

### F. The Formal Shorthand

The variables in structural formulas are just named placeholders:
- $\sigma$ (sigma) = stress $[\mathrm{N/mm^2} = \mathrm{MPa}]$
- $P$ = applied axial load $[\mathrm{kN}]$
- $A$ = cross-sectional area $[\mathrm{m^2}\ \text{or}\ \mathrm{mm^2}]$

A formula like $\sigma = P/A$ can be **evaluated** (compute the right side when all variables are known) or **rearranged** (make any variable the subject).

To rearrange $\sigma = P/A$ for $P$: multiply both sides by $A$:
$$\sigma \times A = P \qquad \Rightarrow \qquad P = \sigma A$$

To rearrange for $A$: divide both sides by $\sigma$:
$$A = \frac{P}{\sigma}$$

An **expression** is any combination of variables and numbers without an equals sign: $P/A$, $wL^2/8$, $3s + 2e$. An **equation** adds the equals sign and makes a statement that must be true.

**Evaluating** means substituting known numbers and computing. The order of operations from Part 0 (powers first, then multiply/divide, then add/subtract) applies here exactly as before.

**Solving for an unknown** means rearranging until the unknown is alone.

### G. Full Worked Example — Column Bearing Capacity

**Problem.** A concrete column, $A = 0.09\ \mathrm{m^2}$, $\sigma_{allow} = 5000\ \mathrm{kN/m^2}$. Find the maximum load $P$.

**Step 1 — Write the formula:**
$$\sigma = \frac{P}{A}$$

**Step 2 — Rearrange for $P$ by multiplying both sides by $A$:**
$$P = \sigma \times A$$

**Step 3 — Substitute:**
$$P = 5000\ \mathrm{kN/m^2} \times 0.09\ \mathrm{m^2} = 450\ \mathrm{kN}$$

**Step 4 — Check by substituting back:**
$$\sigma = \frac{P}{A} = \frac{450}{0.09} = 5000\ \mathrm{kN/m^2}\ \checkmark$$

The column can carry up to $450\ \mathrm{kN}$ before reaching the bearing stress limit.

**Bonus — find required area.** The same column must carry $P = 600\ \mathrm{kN}$. What minimum area is needed?
$$A = \frac{P}{\sigma} = \frac{600}{5000} = 0.12\ \mathrm{m^2}$$

A $350\ \mathrm{mm} \times 350\ \mathrm{mm}$ column gives $A = 0.1225\ \mathrm{m^2} > 0.12\ \mathrm{m^2}$ — adequate.

### H. Practice Tasks

> 1. Rearrange $M = wL^2/8$ for $L$. Then find $L$ when $M = 100\ \mathrm{kN \cdot m}$ and $w = 12.5\ \mathrm{kN/m}$.
> 2. Rearrange $R = wL/2$ for $w$. Then find $w$ when $R = 90\ \mathrm{kN}$ and $L = 6\ \mathrm{m}$.
> 3. The layout formula is $L = ns + 2e$. Rearrange for $s$, then find $s$ when $L = 32\ \mathrm{m}$, $n = 5$, $e = 1\ \mathrm{m}$.
>
> **Answers:**
> 1. $L = \sqrt{8M/w} = \sqrt{8 \times 100/12.5} = \sqrt{64} = 8\ \mathrm{m}$
> 2. $w = 2R/L = 2 \times 90/6 = 30\ \mathrm{kN/m}$
> 3. $s = (L - 2e)/n = (32 - 2)/5 = 30/5 = 6\ \mathrm{m}$

### I. What You Now Know

Formulas are sentences. Variables are named boxes. Equations are balances. Solving is just keeping the balance while undoing what's in the way. Every structural calculation in this book is an instance of this one idea. Chapter 2 explains why the units on those variables are as important as the numbers themselves.

<div style="page-break-after: always;"></div>

## Chapter 2 — Numbers Need Labels: Units and Dimensional Analysis

### A. Achievement

After this section you can convert any structural quantity between SI units — length, force, pressure, stress — without making a factor-of-1000 error, and you can verify any formula is dimensionally consistent before substituting numbers.

### B. The Situation

A 200 mm thick concrete slab. Concrete density is $2500\ \mathrm{kg/m^3}$. The building code asks for the slab self-weight in kPa. You need to get from kg/m³ to kPa without losing track of what the numbers mean.

If you drop a unit somewhere along the way, you can easily be off by a factor of 1000 — and that goes into the load calculation, the design, and the final member sizes. No alarm sounds. The design just becomes silently wrong.

### C. The Intuition

A number without a unit is incomplete. "The beam carries 5" — five what? Newtons? Kilonewtons? Tonnes? Each changes the design entirely.

Units multiply, divide, and cancel just like algebraic variables. $\mathrm{kN/m^2} \times \mathrm{m}$ gives $\mathrm{kN/m}$, because the $\mathrm{m^2}$ in the denominator and one $\mathrm{m}$ from the multiplication cancel, leaving $\mathrm{m}$ in the denominator. The algebra of units mirrors the algebra of the physical reality.

### D. Failure Case

A designer enters concrete density as $2500$ in a formula expecting $\mathrm{kN/m^3}$, but $2500$ is in $\mathrm{kg/m^3}$. The slab self-weight comes out as $2500 \times 0.2 = 500$. The designer reads this as $500\ \mathrm{kN/m^2}$ — nearly a hundred times the true value of $5\ \mathrm{kN/m^2}$. Every downstream calculation is fatally wrong, and the model accepts it without complaint.

The fix is simple: multiply density by $g = 9.81\ \mathrm{m/s^2}$ to convert from $\mathrm{kg/m^3}$ to $\mathrm{N/m^3}$, then divide by 1000 to get $\mathrm{kN/m^3}$.

### E. The Rule

Write the unit next to every number in every step. Cancel units the same way you cancel algebraic terms. The final unit on the result should match the unit you expected — if it doesn't, an error is hiding in the steps.

### F. The Formal Shorthand

**Unit conversion is multiplication by 1.** Since $1\ \mathrm{m} = 1000\ \mathrm{mm}$, the fraction $\frac{1000\ \mathrm{mm}}{1\ \mathrm{m}} = 1$. Multiplying by it changes the unit without changing the physical quantity.

**Essential structural unit conversions:**

| From | To | Multiply by |
|------|----|-------------|
| m | mm | × 1,000 |
| m² | mm² | × 1,000,000 |
| m⁴ | mm⁴ | × 10¹² |
| N | kN | × 0.001 |
| kPa | MPa | × 0.001 |
| kPa | N/mm² | × 0.001 |
| MPa | N/mm² | = 1 (identical) |
| kg/m³ | kN/m³ | × 0.00981 (= $g/1000$) |

**Dimensional consistency:** every well-formed structural formula has the same dimension on both sides. Verify $\sigma = P/A$:
$$[\mathrm{stress}] = \frac{[\mathrm{force}]}{[\mathrm{area}]} = \frac{\mathrm{kN}}{\mathrm{m^2}} = \mathrm{kPa} \quad \checkmark$$

If your units don't match after calculation, you either used the wrong formula or dropped a conversion.

### G. Full Worked Example — Slab Self-Weight in kPa

**Problem.** Concrete slab: thickness $t = 200\ \mathrm{mm}$, density $\rho = 2500\ \mathrm{kg/m^3}$. Find the slab self-weight as an area load in kPa.

**Step 1 — Convert thickness to meters:**
$$t = 200\ \mathrm{mm} \times \frac{1\ \mathrm{m}}{1000\ \mathrm{mm}} = 0.200\ \mathrm{m}$$

**Step 2 — Convert density to unit weight:**
$$\gamma = 2500\ \frac{\mathrm{kg}}{\mathrm{m^3}} \times 9.81\ \frac{\mathrm{m}}{\mathrm{s^2}} = 24{,}525\ \frac{\mathrm{N}}{\mathrm{m^3}} = 24.525\ \frac{\mathrm{kN}}{\mathrm{m^3}} \approx 25\ \frac{\mathrm{kN}}{\mathrm{m^3}}$$

**Step 3 — Multiply by thickness:**
$$q_{sw} = \gamma \times t = 25\ \frac{\mathrm{kN}}{\mathrm{m^3}} \times 0.200\ \mathrm{m} = 5.0\ \frac{\mathrm{kN}}{\mathrm{m^2}} = 5.0\ \mathrm{kPa}$$

Units check: $\mathrm{kN/m^3} \times \mathrm{m} = \mathrm{kN/m^2} = \mathrm{kPa}\ \checkmark$

The slab self-weight is $5.0\ \mathrm{kPa}$ — about the weight of 500 kg spread over each square meter.

**ETABS:** Define > Materials > Concrete → Weight per Unit Volume should be $24.5\ \mathrm{kN/m^3}$. Entering 2500 in a kN/m³ field would give a 100× error.

### H. Practice Tasks

> 1. Convert: $600\ \mathrm{mm}$ to m; $0.045\ \mathrm{m^2}$ to mm²; $250\ \mathrm{MPa}$ to kPa.
> 2. A floor carries live load $q = 3\ \mathrm{kPa}$, tributary width $b = 3.5\ \mathrm{m}$. Find the line load $w\ [\mathrm{kN/m}]$.
> 3. Verify dimensionally: $M = wL^2/8$ where $w$ is kN/m and $L$ is m. What are the units of $M$?
>
> **Answers:**
> 1. $0.600\ \mathrm{m}$; $45{,}000\ \mathrm{mm^2}$; $250{,}000\ \mathrm{kPa}$
> 2. $w = 3 \times 3.5 = 10.5\ \mathrm{kN/m}$
> 3. $[\mathrm{kN/m}] \times [\mathrm{m^2}] = [\mathrm{kN \cdot m}]\ \checkmark$

### I. What You Now Know

Units are part of every number. They cancel like algebra. A dimension mismatch flags a formula error or a missing conversion every time. Chapter 3 applies this to finding two unknowns at once — a skill that unlocks full beam reaction calculations.

<div style="page-break-after: always;"></div>

## Chapter 3 — Two Unknowns, Two Conditions: Systems of Equations

### A. Achievement

After this section you can find both support reactions for a simply-supported beam carrying a point load at any position along the span.

### B. The Situation

A beam is $6\ \mathrm{m}$ long, supported at its left end (A) and right end (B). A single point load $P = 60\ \mathrm{kN}$ sits $2\ \mathrm{m}$ from A.

```
                  P = 60 kN
                      ↓
        A ────────────┬──────────────── B
        |<── 2 m ────>|<──── 4 m ──────>|
        ↑                               ↑
       R_A                             R_B
```

Two supports, two unknown upward forces $R_A$ and $R_B$. Vertical balance alone says $R_A + R_B = 60\ \mathrm{kN}$ — but that's one equation with two unknowns. Infinitely many pairs satisfy it: $(30,30)$, $(10,50)$, $(0,60)$, etc. You can't pick one without a second condition.

### C. The Intuition

The second condition is that the beam doesn't rotate. If all forces balanced vertically but the beam tried to spin, it would still collapse. "No rotation" gives you a second independent equation.

Imagine the beam as a seesaw. Pushing down $2\ \mathrm{m}$ from the left end is different from pushing down at the center — the left support carries more when the load is closer to it. That physical intuition is exactly what the "no rotation" equation captures.

### D. Failure Case

Using only $R_A + R_B = 60$ gives:

- If $R_A = 30$, $R_B = 30$ — maybe, but only if the load is at mid-span.
- If the load is $2\ \mathrm{m}$ from A, the actual split is $R_A = 40\ \mathrm{kN}$, $R_B = 20\ \mathrm{kN}$.

Assuming equal split when the load is off-center overestimates $R_B$ by $50\%$ and underestimates $R_A$ by $25\%$. The reaction that's underestimated controls the worst-case support design — so you'd design the left support too small.

### E. The Rule

Two unknowns require two independent equations. Each equation must describe a different physical condition (vertical balance and rotational balance are independent). Solve the pair by substitution or elimination.

### F. The Formal Shorthand

**Equation 1 — vertical force balance** (from Section A1: signed sum of forces = 0):
$$\Sigma F_y = 0: \quad R_A + R_B - P = 0 \quad \Rightarrow \quad R_A + R_B = P$$

**Equation 2 — moment balance** (introduced properly in Part 2, Ch 12; used here as a tool):

Taking moments about point A, with clockwise positive:
$$\Sigma M_A = 0: \quad P \cdot a - R_B \cdot L = 0$$

where $a$ is the distance of the load from A and $L$ is the span. Solving:
$$R_B = \frac{P \cdot a}{L} \qquad R_A = P - R_B$$

You now have a formula that gives both reactions from geometry alone.

**General solution method** when the equations aren't this clean: substitution or elimination, as shown in the worked example.

### G. Full Worked Example — Beam Support Reactions

**Problem.** Span $L = 6\ \mathrm{m}$, load $P = 60\ \mathrm{kN}$ at $a = 2\ \mathrm{m}$ from A. Find $R_A$ and $R_B$.

**Equation 1:**
$$R_A + R_B = 60 \quad (1)$$

**Equation 2 — moment about A:**
$$60 \times 2 = R_B \times 6 \quad (2)$$
$$120 = 6R_B$$
$$R_B = 20\ \mathrm{kN}$$

**Back-substitute into (1):**
$$R_A = 60 - 20 = 40\ \mathrm{kN}$$

**Check — moment about B (independent verification):**
$$R_A \times 6 = P \times (6 - 2) = 60 \times 4 = 240\ \mathrm{kN \cdot m}$$
$$R_A = 240/6 = 40\ \mathrm{kN}\ \checkmark$$

The left support carries $40\ \mathrm{kN}$ (closer to the load) and the right support carries $20\ \mathrm{kN}$.

**Physical check:** The load is at $1/3$ of the span from A. The right support is $2/3$ of the span from the load, so it carries $2/3 \times 60 = 40\ \mathrm{kN}$... wait — the support closer to the load carries more. $R_A = 40$ is $2/3$ of 60, which is the fraction $b/L$ where $b = L - a = 4\ \mathrm{m}$ (distance to right support). ✓

### H. Practice Tasks

> 1. Span $L = 8\ \mathrm{m}$, load $P = 48\ \mathrm{kN}$ at $a = 3\ \mathrm{m}$ from A. Find $R_A$ and $R_B$.
> 2. Same beam, but two loads: $P_1 = 30\ \mathrm{kN}$ at $a_1 = 2\ \mathrm{m}$ and $P_2 = 20\ \mathrm{kN}$ at $a_2 = 6\ \mathrm{m}$. Find reactions.
>
> **Answers:**
> 1. $R_B = 48 \times 3/8 = 18\ \mathrm{kN}$; $R_A = 48 - 18 = 30\ \mathrm{kN}$
> 2. $R_B = (30 \times 2 + 20 \times 6)/8 = (60 + 120)/8 = 22.5\ \mathrm{kN}$; $R_A = 50 - 22.5 = 27.5\ \mathrm{kN}$

### I. What You Now Know

Two unknowns need two independent physical conditions. For a beam, those are vertical balance and rotational balance. This pattern — one equation per independent condition — is how ETABS solves structures with thousands of unknowns. Chapter 4 shows what happens when the unknown appears squared rather than to the first power.

<div style="page-break-after: always;"></div>

## Chapter 4 — When Span Is Squared: Quadratic Equations

### A. Achievement

After this section you can find the maximum allowable span for a beam given its moment capacity and the applied load, by solving the moment formula for the span.

### B. The Situation

A steel beam has moment capacity $M_{allow} = 120\ \mathrm{kN \cdot m}$ and must carry a uniform load $w = 15\ \mathrm{kN/m}$. What is the longest span $L$ this beam can have without exceeding its capacity?

From Part 0, the midspan moment formula is $M = wL^2/8$. Set $M = M_{allow}$ and solve for $L$:

$$\frac{wL^2}{8} = 120 \quad \Rightarrow \quad L^2 = \frac{8 \times 120}{15} = 64 \quad \Rightarrow \quad L = \sqrt{64} = 8\ \mathrm{m}$$

That worked without a formal "quadratic" technique because there was no $L$ term — only $L^2$. But when a problem also involves a constant offset (for example, a point load in addition to the distributed load), the equation becomes $aL^2 + bL + c = 0$, and a different method is needed.

### C. The Intuition

A quadratic is an equation where the unknown is squared. Its graph is a parabola — a smooth curve that rises, reaches a peak, and falls. Two solutions typically exist: the curve crosses any horizontal value at two points. For a beam span, one solution is physically meaningful (positive) and the other may be negative (discard it).

The key insight: squaring "amplifies" the variable. Doubling $L$ does not double $M$ — it quadruples $M$ (because $2L$ squared is $4L^2$). So the relationship between span and moment is not proportional; it's curved. That's exactly when quadratic methods apply.

### D. Failure Case

Treating $wL^2/8 = M$ as linear and solving $L = 8M/w$:

$$L = \frac{8 \times 120}{15} = 64\ \mathrm{m} \quad \text{✗}$$

That's 64 meters, not 8 meters — off by a factor of 8. The error is ignoring the $L^2$: the linear treatment assumes $L$ appears to the first power, but the formula has $L^2$. Taking the square root of $64$ gives the correct $L = 8\ \mathrm{m}$.

### E. The Rule

When the unknown appears squared, take the square root (if only $L^2$ appears, no $L$ term). When both $L$ and $L^2$ appear, rearrange to $aL^2 + bL + c = 0$ and use the quadratic formula.

### F. The Formal Shorthand

Standard form: $aL^2 + bL + c = 0$.

**The quadratic formula** (always works):
$$L = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

The $\pm$ gives two roots. Discard any that are negative or physically impossible. The expression under the square root ($b^2 - 4ac$) is called the discriminant; if it is negative, there are no real solutions — meaning no span satisfies the conditions.

For the common structural case $aL^2 = c$ (no $L$ term): $L = \sqrt{c/a}$.

### G. Full Worked Example — Maximum Span Under Combined Loading

**Problem.** A beam carries uniform dead load $w_D = 10\ \mathrm{kN/m}$ and a point load $P = 20\ \mathrm{kN}$ at mid-span. The moment capacity is $M_{allow} = 125\ \mathrm{kN \cdot m}$. What is the maximum span $L$?

The maximum moment from both loads at mid-span:
$$M = \frac{w_D L^2}{8} + \frac{PL}{4}$$

Set $M = M_{allow} = 125$:
$$\frac{10 L^2}{8} + \frac{20 L}{4} = 125$$
$$1.25 L^2 + 5L = 125$$
$$1.25 L^2 + 5L - 125 = 0$$

Multiply through by 0.8 to clear the decimal: $L^2 + 4L - 100 = 0$.

Quadratic formula with $a = 1$, $b = 4$, $c = -100$:
$$L = \frac{-4 \pm \sqrt{16 + 400}}{2} = \frac{-4 \pm \sqrt{416}}{2} = \frac{-4 \pm 20.4}{2}$$

Positive root: $L = \frac{-4 + 20.4}{2} = \frac{16.4}{2} = 8.2\ \mathrm{m}$

Negative root: $L = \frac{-4 - 20.4}{2} = -12.2\ \mathrm{m}$ — physically impossible, discard.

**Check:** $M = 1.25 \times 8.2^2 + 5 \times 8.2 = 1.25 \times 67.24 + 41 = 84.05 + 41 = 125.05 \approx 125\ \mathrm{kN \cdot m}\ \checkmark$

The maximum span is $8.2\ \mathrm{m}$.

### H. Practice Tasks

> 1. Beam with only uniform load $w = 18\ \mathrm{kN/m}$, capacity $M_{allow} = 144\ \mathrm{kN \cdot m}$. Find maximum span.
> 2. Solve: $2L^2 - 3L - 20 = 0$ using the quadratic formula.
>
> **Answers:**
> 1. $L^2 = 8 \times 144/18 = 64$; $L = 8\ \mathrm{m}$
> 2. $L = \frac{3 \pm \sqrt{9 + 160}}{4} = \frac{3 \pm 13}{4}$; $L = 4$ or $L = -2.5$ (discard negative)

### I. What You Now Know

When a variable is squared, the relationship between input and output is not proportional — it curves. Recognizing whether a structural equation is linear or quadratic determines which solving method to use. Chapter 5 shows how these solved values feed into a comparison: did we pass the design requirement?

<div style="page-break-after: always;"></div>

## Chapter 5 — Checking a Design: Inequalities and Demand/Capacity Ratios

### A. Achievement

After this section you can check a beam against three separate design limits — moment, shear, and deflection — report a demand/capacity ratio for each, and identify which limit governs.

### B. The Situation

Every structural check ends with a comparison, not an equation. You don't want the beam to reach its limit — you want it to stay safely below. The engineering question is: "Is the demand less than the capacity?"

The beam from Chapter 4: $L = 8\ \mathrm{m}$, $w = 15\ \mathrm{kN/m}$. Moment demand $M_d = 120\ \mathrm{kN \cdot m}$ (exactly at the capacity). Shear demand $V_d = wL/2 = 15 \times 8/2 = 60\ \mathrm{kN}$. The beam has shear capacity $V_c = 75\ \mathrm{kN}$. Deflection limit is $L/360 = 8000/360 = 22.2\ \mathrm{mm}$; the actual deflection is $\delta = 5wL^4/(384EI) = 18\ \mathrm{mm}$.

Which of these three checks governs — i.e., which is closest to failure?

### C. The Intuition

"Governing" means the closest to the edge. If your car can go 120 km/h but the road limit is 100 km/h, the governing constraint is the speed limit, not the car's capability. The ratio is 80/100 = 80% of the limit. If your car can barely do 105 km/h, the ratio is 95% of the limit — now the car governs.

In structural design, you compute each check as a ratio: demand/capacity. Every check must be ≤ 1.0. The highest ratio is the most critical — it governs the design. If you want more efficiency, make that one better first.

### D. Failure Case

A designer checks only the moment (the most obvious check) and declares the beam adequate. Shear and deflection are skipped. On a short, deep beam or one carrying a moving load, shear often governs. Skipping it causes the beam to fail in shear even though the moment check passed.

Every design has multiple independent checks. Passing one does not imply passing the others.

### E. The Rule

Write each design requirement as an inequality: demand ≤ capacity. Express each as a ratio: demand/capacity ≤ 1.0. The highest ratio governs the design.

### F. The Formal Shorthand

$$\text{D/C ratio} = \frac{\text{demand}}{\text{capacity}} \leq 1.0 \quad \text{(pass)}$$

Inequality symbols:

| Symbol | Meaning |
|--------|---------|
| $<$ | strictly less than |
| $\leq$ | less than or equal to |
| $>$ | strictly greater than |
| $\geq$ | greater than or equal to |

When solving an inequality for an unknown, apply the same rules as equations, with one exception: **multiplying or dividing both sides by a negative number flips the direction.**

Example: $-2x \leq 8 \;\Rightarrow\; x \geq -4$ (direction flipped because we divided by $-2$).

This flip has a physical explanation: if multiplying a force by $-1$ means reversing its direction (from Part 0, A1), then comparing reversed quantities reverses the ordering.

### G. Full Worked Example — Three-Check Design Verification

**Beam data:** $L = 8\ \mathrm{m}$, $w = 15\ \mathrm{kN/m}$, $E = 200\ \mathrm{GPa}$, $I = 65 \times 10^6\ \mathrm{mm^4}$.

**Capacities:** $M_c = 120\ \mathrm{kN \cdot m}$, $V_c = 75\ \mathrm{kN}$, $\delta_{allow} = L/360 = 22.2\ \mathrm{mm}$.

**Check 1 — Moment:**
$$M_d = \frac{wL^2}{8} = \frac{15 \times 64}{8} = 120\ \mathrm{kN \cdot m}$$
$$\text{Ratio} = \frac{120}{120} = 1.00 \quad \text{(just at limit)}$$

**Check 2 — Shear:**
$$V_d = \frac{wL}{2} = \frac{15 \times 8}{2} = 60\ \mathrm{kN}$$
$$\text{Ratio} = \frac{60}{75} = 0.80\ \checkmark$$

**Check 3 — Deflection** (formula from Part 4):
$$\delta_d = \frac{5wL^4}{384EI} = \frac{5 \times 15 \times (8000)^4}{384 \times 200{,}000 \times 65 \times 10^6}$$

Numerator: $5 \times 15 \times 4.096 \times 10^{15} = 3.072 \times 10^{17}$

Denominator: $384 \times 200{,}000 \times 65 \times 10^6 = 4.992 \times 10^{15}$

$$\delta_d = \frac{3.072 \times 10^{17}}{4.992 \times 10^{15}} \approx 61.5\ \mathrm{mm}$$

Wait — that exceeds the limit. Let's recalculate: this confirms that at $L = 8\ \mathrm{m}$, a more stocky section would be needed. With the given $I$, the deflection ratio is $61.5/22.2 = 2.77$ — the beam fails deflection badly.

**Summary of governing check:**

| Check | Demand | Capacity | D/C Ratio | Pass? |
|-------|--------|----------|-----------|-------|
| Moment | 120 kN·m | 120 kN·m | 1.00 | ✓ (limit) |
| Shear | 60 kN | 75 kN | 0.80 | ✓ |
| Deflection | 61.5 mm | 22.2 mm | 2.77 | ✗ |

**Governing check: deflection** with ratio 2.77. The section must be stiffened (larger $I$) or the span shortened. Moment and shear alone would have passed — this is exactly the failure mode that skipping deflection check would miss.

### H. Practice Tasks

> 1. Beam: $M_d = 95\ \mathrm{kN \cdot m}$, $V_d = 45\ \mathrm{kN}$. Capacities: $M_c = 110\ \mathrm{kN \cdot m}$, $V_c = 50\ \mathrm{kN}$. Compute ratios. Which governs?
> 2. Solve the inequality: $3x - 9 \geq 0$. What is the minimum value of $x$?
>
> **Answers:**
> 1. Moment ratio = $95/110 = 0.864$; Shear ratio = $45/50 = 0.900$; shear governs.
> 2. $3x \geq 9$; $x \geq 3$. Minimum $x = 3$.

### I. What You Now Know

Every structural design is a series of inequalities: one per independent failure mode. The highest ratio governs. ETABS design output is literally a table of these ratios, color-coded by how close each member is to its limit. Chapter 6 shows how one quantity driving another — functions and power relationships — lets you predict those ratios without recalculating from scratch.

<div style="page-break-after: always;"></div>

## Chapter 6 — How One Quantity Drives Another: Functions and Power Relationships

### A. Achievement

After this section you can predict how beam deflection, moment, and member forces change when span, load, or section size changes — without recalculating — by understanding the power relationship in the governing formula.

### B. The Situation

The deflection formula is:
$$\delta = \frac{5wL^4}{384EI}$$

You've designed a beam for a $6\ \mathrm{m}$ span. The architect now wants to extend it to $9\ \mathrm{m}$ — a 50% increase. By how much does deflection increase? Does it go up by 50% too?

If you said 50%, the beam would be designed too slender. The actual answer is: deflection increases by a factor of $(9/6)^4 = (1.5)^4 = 5.06$ — over five times. A 50% longer span creates five times the deflection. That is why longer spans need disproportionately deeper or stiffer beams.

### C. The Intuition

A function is a rule that turns one input into one output. In $\delta = \frac{5wL^4}{384EI}$, $L$ is the input that matters most: the formula is a machine that takes $L$ and produces $\delta$.

When $L$ appears raised to a power, the output changes by that power of the ratio. Doubling $L$ (ratio = 2) multiplies $\delta$ by $2^4 = 16$. Tripling $L$ (ratio = 3) multiplies $\delta$ by $3^4 = 81$. The exponent 4 means deflection is extremely sensitive to span — far more sensitive than to load (which appears to the first power) or section depth (which appears to the third power in $I$).

This is the physical reason why tall, slender buildings are deflection-governed rather than stress-governed, and why adding span is much more expensive than adding load.

### D. Failure Case

A designer checks a 6 m beam and finds deflection = 8 mm, well within the 16.7 mm limit. The span is extended to 8 m. The designer assumes deflection scales proportionally: $8 \times (8/6) = 10.7\ \mathrm{mm}$ — still under the limit. Beam is approved.

Actual deflection: $8 \times (8/6)^4 = 8 \times 3.16 = 25.3\ \mathrm{mm}$ — 52% over the limit.

The proportional-scaling assumption is only valid when the variable appears to the first power. Whenever an exponent is present, scale by the exponent.

### E. The Rule

When a formula has the form $y = k \cdot x^n$ (one variable raised to a power, with everything else constant), changing $x$ by a factor $r$ changes $y$ by a factor of $r^n$. This is a power function.

### F. The Formal Shorthand

A function $f(x)$ is a rule that takes input $x$ and produces output $f(x)$. Notation: $\delta(L)$ means deflection as a function of span.

**Power function:** $y = kx^n$, where $k$ is everything held constant.

**Scaling rule:** if $x$ changes by factor $r$, $y$ changes by factor $r^n$:
$$\frac{y_{\text{new}}}{y_{\text{old}}} = \left(\frac{x_{\text{new}}}{x_{\text{old}}}\right)^n = r^n$$

**Algebraic exponent rules** (for manipulating power functions):
$$a^m \cdot a^n = a^{m+n} \qquad (a^m)^n = a^{mn} \qquad a^{-n} = \frac{1}{a^n} \qquad a^{1/n} = \sqrt[n]{a}$$

These rules let you simplify formulas before substituting numbers, which reduces arithmetic errors.

**Function notation in engineering:** $M(L)$, $V(x)$, $\delta(L)$ — the variable in parentheses is the one being varied. Everything else is treated as a constant for that analysis.

### G. Full Worked Example — Effect of Span on Deflection

**Problem.** A beam has $\delta = 8\ \mathrm{mm}$ at $L = 6\ \mathrm{m}$ with fixed $w$, $E$, $I$. Find deflection at $L = 7.5\ \mathrm{m}$ and $L = 9\ \mathrm{m}$.

The deflection formula: $\delta = \frac{5w}{384EI} \cdot L^4$. With $w$, $E$, $I$ fixed, $\delta \propto L^4$.

**At $L = 7.5\ \mathrm{m}$** (ratio $r = 7.5/6 = 1.25$):
$$\delta_{\text{new}} = 8 \times (1.25)^4 = 8 \times 2.441 = 19.5\ \mathrm{mm}$$

**At $L = 9\ \mathrm{m}$** (ratio $r = 9/6 = 1.5$):
$$\delta_{\text{new}} = 8 \times (1.5)^4 = 8 \times 5.063 = 40.5\ \mathrm{mm}$$

**Versus moment at $L = 9\ \mathrm{m}$** (moment $\propto L^2$, ratio same 1.5):
$$M_{\text{new}} = M_{\text{old}} \times (1.5)^2 = M_{\text{old}} \times 2.25$$

Moment only went up by 2.25×; deflection went up by 5.06×. Extending the span hits deflection far harder than moment.

**Implication:** to accommodate the 9 m span without changing beam depth, $I$ must increase by the same factor of 5.06 to keep deflection constant. That means roughly doubling the section depth (since $I \propto d^3$ for a rectangle, and $2^3 = 8 > 5$).

### H. Practice Tasks

> 1. Beam moment $M = wL^2/8$. If $w$ doubles but $L$ stays, by what factor does $M$ change? If $L$ doubles but $w$ stays?
> 2. Deflection at $L = 5\ \mathrm{m}$ is $4\ \mathrm{mm}$. Find deflection at $L = 8\ \mathrm{m}$ using scaling.
>
> **Answers:**
> 1. $w$ doubles: $M$ doubles (exponent 1 on $w$). $L$ doubles: $M \times 4$ (exponent 2 on $L$).
> 2. $r = 8/5 = 1.6$; $\delta = 4 \times (1.6)^4 = 4 \times 6.554 = 26.2\ \mathrm{mm}$

### I. What You Now Know

A function describes how one quantity drives another. When a formula has a power, the output is more sensitive to the input than a proportional relationship suggests — sometimes dramatically so. This insight lets you make quick engineering judgments about whether changing a dimension will help a little or a lot. Part 2 now applies all these algebraic tools to the actual physics of forces, loads, and structural equilibrium.

<div style="page-break-after: always;"></div>

> **End of Part 1.** You can now read any structural formula, solve for any variable, track units, find two unknowns at once, and understand how output scales with input. Part 2 uses these tools on the physics: forces, moments, loads, supports, and internal forces.



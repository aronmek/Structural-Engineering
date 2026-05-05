# Unit 1 — Engineering Number Sense

> This unit teaches the number ideas at the moment they become useful. Each chapter introduces a skill through a real engineering problem that requires it. By the end you can read any structural formula, track its units, estimate whether a software result is plausible, and catch factor-of-10 errors before they reach a drawing.

<div style="page-break-after: always;"></div>

## Chapter 1 — Direction, Sign, and Balance in Structures

### A. Achievement

After this section you can check whether a beam's upward support forces balance its downward loads.

### B. The Situation

A small beam has one load pushing down and two supports pushing up.

<figure class="structural-diagram" aria-label="Beam with 10 kN downward load, 6 kN and 4 kN upward reactions">
<svg viewBox="0 0 360 110" xmlns="http://www.w3.org/2000/svg">
  <line x1="230" y1="16" x2="230" y2="46" class="sd-force-down" stroke-width="3"/>
  <polygon points="230,48 225,38 235,38" class="sd-arrow-down"/>
  <text x="242" y="22" class="sd-label-red">10 kN down</text>
  <rect x="60" y="48" width="240" height="12" rx="2" class="sd-beam-fill"/>
  <line x1="90" y1="78" x2="90" y2="68" class="sd-force-up" stroke-width="2.5"/>
  <polygon points="90,66 85,76 95,76" class="sd-arrow-up"/>
  <text x="58" y="92" class="sd-label-green">6 kN up</text>
  <line x1="270" y1="78" x2="270" y2="68" class="sd-force-up" stroke-width="2.5"/>
  <polygon points="270,66 265,76 275,76" class="sd-arrow-up"/>
  <text x="258" y="92" class="sd-label-green">4 kN up</text>
</svg>
</figure>

The beam is supposed to stand still. So the real question is not "How many force numbers are written down?" The real question is: after the upward pushes and downward pushes fight each other, is anything left over?

### C. The Intuition

A sign is a direction label.

If we choose "up" as positive, then the opposite direction, "down," is negative.

- A support pushing up with $6\ \mathrm{kN}$ becomes $+6\ \mathrm{kN}$.
- A load pushing down with $10\ \mathrm{kN}$ becomes $-10\ \mathrm{kN}$.

The number line is the same idea drawn as a ruler. Positive goes one way. Negative goes the opposite way. Zero is the reference point where nothing is left over.

<figure class="structural-diagram" aria-label="Number line: negative (down) on left, zero in centre, positive (up) on right">
<svg viewBox="0 0 500 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="30" y1="30" x2="470" y2="30" stroke="var(--muted)" stroke-width="2"/>
  <polygon points="470,30 460,25 460,35" fill="var(--muted)"/>
  <polygon points="30,30 40,25 40,35" fill="var(--muted)"/>
  <circle cx="250" cy="30" r="5" fill="#f59e0b"/>
  <text x="250" y="20" text-anchor="middle" class="sd-label" style="fill:#f59e0b;font-weight:700">0</text>
  <text x="80" y="50" text-anchor="middle" class="sd-label-red">down / negative</text>
  <text x="420" y="50" text-anchor="middle" class="sd-label-green">up / positive</text>
</svg>
</figure>

So signed addition is not a list of tricks. It is a bookkeeping method for opposite directions.

### D. Failure Case

If you ignore direction and add only sizes, the beam above gives:

$$10 + 6 + 4 = 20\ \mathrm{kN}$$

That number is true as a total amount of force written on the page, but it does not answer the engineering question. It cannot tell whether the beam is balanced, because it treated up and down as if they were the same direction.

That is why the sign matters. The sign carries the direction.

### E. The Rule

Choose one direction as positive, make the opposite direction negative, and add the signed numbers; if the total is zero, the pushes balance.

### F. The Formal Shorthand

For vertical force balance, engineers often write:

$$\Sigma F_y = 0$$

Read it as: "the signed sum of vertical forces equals zero."

For the beam above:

$$\Sigma F_y = +6 - 10 + 4 = 0\ \mathrm{kN}$$

The upward forces exactly match the downward force.

The size of a force without its direction is called its magnitude. We write that with absolute value:

$$|-10| = 10$$

So $-10\ \mathrm{kN}$ means "10 kN downward," not "less force than 10 kN."

### G. Full Worked Example — Check a Beam's Vertical Balance

**Problem.** A simply supported beam carries a downward point load of $18\ \mathrm{kN}$. The left support pushes up with $8\ \mathrm{kN}$, and the right support pushes up with $10\ \mathrm{kN}$. Check whether the beam is vertically balanced.

<figure class="structural-diagram" aria-label="Beam: P=18kN down, RA=8kN up, RB=10kN up">
<svg viewBox="0 0 400 110" xmlns="http://www.w3.org/2000/svg">
  <line x1="260" y1="16" x2="260" y2="46" class="sd-force-down" stroke-width="3"/>
  <polygon points="260,48 255,38 265,38" class="sd-arrow-down"/>
  <text x="272" y="22" class="sd-label-red">P = 18 kN down</text>
  <rect x="60" y="48" width="280" height="12" rx="2" class="sd-beam-fill"/>
  <line x1="90" y1="80" x2="90" y2="68" class="sd-force-up" stroke-width="2.5"/>
  <polygon points="90,66 85,76 95,76" class="sd-arrow-up"/>
  <text x="52" y="95" class="sd-label-green">R_A = 8 kN up</text>
  <line x1="310" y1="80" x2="310" y2="68" class="sd-force-up" stroke-width="2.5"/>
  <polygon points="310,66 305,76 315,76" class="sd-arrow-up"/>
  <text x="270" y="95" class="sd-label-green">R_B = 10 kN up</text>
</svg>
</figure>

Choose up as positive:

- $R_A = +8\ \mathrm{kN}$
- $R_B = +10\ \mathrm{kN}$
- $P = -18\ \mathrm{kN}$

$$\Sigma F_y = R_A + R_B + P = 8 + 10 - 18 = 0\ \mathrm{kN}$$

The beam is balanced vertically. The supports supply exactly the same total force upward as the load applies downward.

### H. Practice Task

> **Tasks:**
> 1. A beam has support forces $+7\ \mathrm{kN}$ and $+5\ \mathrm{kN}$, and one downward load $-12\ \mathrm{kN}$. Find $\Sigma F_y$.
> 2. A beam has support forces $+6\ \mathrm{kN}$ and $+5\ \mathrm{kN}$, and one downward load $-12\ \mathrm{kN}$. Is it balanced?
> 3. Compute $|-15\ \mathrm{kN}|$ and explain what changed.
>
> **Answers:**
> 1. $+7 + 5 - 12 = 0\ \mathrm{kN}$ — balanced.
> 2. $+6 + 5 - 12 = -1\ \mathrm{kN}$ — there is $1\ \mathrm{kN}$ net downward force; not balanced.
> 3. $|-15\ \mathrm{kN}| = 15\ \mathrm{kN}$. The magnitude stays; the downward direction is removed.

### I. What You Now Know

Signed numbers are direction attached to size. Every force, displacement, and reaction in later chapters reuses this idea.

| Idea | Plain Meaning | Engineering Use |
|------|---------------|----------------|
| Positive sign | Chosen direction | Upward support force |
| Negative sign | Opposite direction | Downward load |
| Signed sum | Net effect after directions fight | Balance check |
| Absolute value | Size without direction | Force magnitude |

Unit 2 builds on this — once you can represent forces with signs, you can write the equations that govern how structures resist them.

<div style="page-break-after: always;"></div>

## Chapter 2 — Scaling: How Size Changes Everything

### A. Achievement

After this section you can calculate the total load a floor slab puts on a supporting beam, given a load intensity in kPa and a tributary width in meters.

### B. The Situation

A floor slab carries a live load of $3.5\ \mathrm{kPa}$ — meaning $3.5\ \mathrm{kN}$ per square meter. The slab is $6\ \mathrm{m}$ long and sits on a beam that collects load from a $2\ \mathrm{m}$ wide strip on each side. That's $4\ \mathrm{m}$ of tributary width. What total line load, in $\mathrm{kN/m}$, does the beam carry?

You know the load per square meter. You need to find the load per meter of beam length.

### C. The Intuition

The word "per" is division dressed up. "$3.5\ \mathrm{kN}$ per square meter" means: for every square meter, add $3.5\ \mathrm{kN}$.

If your strip is 4 m wide, then each meter of beam length collects $4\ \mathrm{m^2}$ of floor. So the beam carries:

$$3.5\ \frac{\mathrm{kN}}{\mathrm{m^2}} \times 4\ \mathrm{m} = 14\ \frac{\mathrm{kN}}{\mathrm{m}}$$

Multiplication is just repeated equal amounts: $3.5$ added $4$ times. Division reverses this: if the total is 14 kN/m and you want to know what load each meter-width strip contributes, you divide $14 \div 4 = 3.5\ \mathrm{kN/m}$ per meter of width.

**Fractions are named divisions.** The phrase "half the span" means "divide the span by 2." Three-quarters means divide by 4, keep 3 of the pieces. The notation $\tfrac{3}{4}$ is just shorthand for "3 ÷ 4."

**Percentages are fractions out of 100.** A live load reduction of 25% means you keep $\frac{75}{100} = 0.75$ of the full value. A load factor of 150% means you multiply by $\frac{150}{100} = 1.50$. Convert any percentage to a decimal by dividing by 100, then multiply.

### D. Failure Case

Suppose you confuse "per" with "plus" and write:

$$3.5 + 4 = 7.5$$

The number $7.5$ is not a load. It doesn't even have consistent units — you added kN/m² to meters. The units flag the error before any engineering damage is done. This is why units must travel with every number.

### E. The Rule

To get a total from a rate, multiply the rate by the quantity it applies to. To get back to the rate, divide the total by the quantity. Fractions and percentages are both compact ways to write that same multiplication or division.

### F. The Formal Shorthand

$$\text{Line load} = q \times b_{\text{trib}}$$

where $q$ is the area load $[\mathrm{kPa}]$ and $b_{\text{trib}}$ is the tributary width $[\mathrm{m}]$.

Fraction arithmetic in one line:
$$\frac{a}{b} \times \frac{c}{d} = \frac{ac}{bd} \qquad\qquad \frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \times \frac{d}{c}$$

To add fractions, first make the denominators the same:
$$\frac{1}{3} + \frac{1}{4} = \frac{4}{12} + \frac{3}{12} = \frac{7}{12}$$

Percentage to decimal: divide by 100. Decimal to percentage: multiply by 100.

Sign rules for multiplication and division:
- Same signs → positive result: $(-3)(-4) = +12$
- Different signs → negative result: $(-7)(2) = -14$

These follow from the <abbr title="[→ Ch1] direction attached to size — positive = chosen direction, negative = opposite">signed-number</abbr> idea in Chapter 1: flipping direction twice returns you to the original direction.

### G. Full Worked Example — Floor Beam Line Load

**Problem.** A floor system carries:
- Slab self-weight: $3.75\ \mathrm{kPa}$ (150 mm concrete slab)
- Floor finish: $1.0\ \mathrm{kPa}$
- Live load: $3.5\ \mathrm{kPa}$
- Live load reduction: the code allows 20% reduction for this tributary area.

The beam's tributary width is $4.0\ \mathrm{m}$. Find the total design line load on the beam in $\mathrm{kN/m}$.

**Step 1 — Find unreduced total area load:**
$$q_{\text{total}} = 3.75 + 1.0 + 3.5 = 8.25\ \mathrm{kPa}$$

**Step 2 — Apply live load reduction to the live portion only:**
$$q_{LL,\text{reduced}} = 3.5 \times (1 - 0.20) = 3.5 \times 0.80 = 2.8\ \mathrm{kPa}$$

**Step 3 — Revised total:**
$$q_{\text{design}} = 3.75 + 1.0 + 2.8 = 7.55\ \mathrm{kPa}$$

**Step 4 — Convert to line load:**
$$w = q_{\text{design}} \times b_{\text{trib}} = 7.55 \times 4.0 = 30.2\ \mathrm{kN/m}$$

The beam carries $30.2\ \mathrm{kN/m}$ as a design line load.

### H. Practice Task

> **Tasks:**
> 1. A beam has tributary width $3.5\ \mathrm{m}$. Floor DL = $4.5\ \mathrm{kPa}$, LL = $2.5\ \mathrm{kPa}$. Find the total line load.
> 2. A load of $84\ \mathrm{kN}$ is distributed over $24\ \mathrm{m^2}$. Find the area load in kPa.
> 3. A factored load is 140% of the unfactored value of $30\ \mathrm{kN/m}$. Find the factored value.
> 4. Compute and simplify: $\tfrac{3}{8} + \tfrac{1}{4}$; $\tfrac{5}{6} \div \tfrac{10}{3}$.
>
> **Answers:**
> 1. $w = (4.5 + 2.5) \times 3.5 = 7.0 \times 3.5 = 24.5\ \mathrm{kN/m}$
> 2. $q = 84 \div 24 = 3.5\ \mathrm{kPa}$
> 3. $30 \times 1.40 = 42\ \mathrm{kN/m}$
> 4. $\tfrac{3}{8} + \tfrac{2}{8} = \tfrac{5}{8}$; $\tfrac{5}{6} \times \tfrac{3}{10} = \tfrac{15}{60} = \tfrac{1}{4}$

### I. What You Now Know

Multiplication, division, fractions, and percentages are all the same idea — scaling a quantity up or down. Every future load calculation uses this. Chapter 3 shows what happens when that scaling involves a quantity multiplied by itself.

| Idea | Plain Meaning | Engineering Use |
|------|---------------|----------------|
| Rate × quantity | Total from intensity | Load intensity × tributary width |
| Fraction | Named division | Load reduction, partial spans |
| Percentage | Fraction of 100 | Load factors, reductions |

<div style="page-break-after: always;"></div>

## Chapter 3 — Powers and Roots in Structural Formulas

### A. Achievement

After this section you can evaluate the midspan bending moment formula $M = \dfrac{wL^2}{8}$ without getting the wrong answer from the wrong calculation order, and you can compute a column's cross-sectional area from its dimensions.

### B. The Situation

The most-used beam formula in structural engineering is:

$$M_{\max} = \frac{wL^2}{8}$$

It gives the maximum bending moment at the center of a simply-supported beam with uniform load $w\ [\mathrm{kN/m}]$ and span $L\ [\mathrm{m}]$.

Try it naively for $w = 12\ \mathrm{kN/m}$, $L = 6\ \mathrm{m}$:

> "I'll multiply $w$ by $L$, then square it, then divide by 8."

$$\left(12 \times 6\right)^2 \div 8 = 72^2 \div 8 = 5184 \div 8 = 648\ \mathrm{kN \cdot m}$$

The correct answer is $54\ \mathrm{kN \cdot m}$. The naive approach is off by a factor of 12. A real structure designed using $648\ \mathrm{kN \cdot m}$ would be vastly over-designed; one checked against $648$ but actually experiencing it might collapse.

### C. The Intuition

**What a power means physically.** A beam cross-section is $b = 200\ \mathrm{mm}$ wide and $d = 200\ \mathrm{mm}$ deep. Its area is $b \times d = 200 \times 200 = 40{,}000\ \mathrm{mm^2}$. That's $200^2$. The exponent 2 is just a compact way of writing "multiplied by itself once more." It comes from the geometry: two lengths multiplied together give an area.

Powers appear in structural formulas whenever a geometric dimension contributes to a property more than once — span contributes twice to moment because both the magnitude and the spread of the load grow with span.

**Why the formula has a fixed evaluation order.** The formula $wL^2/8$ is a recipe, and recipes have a step order. Powers come first because they describe the thing being scaled ($L^2$ is a geometric area). Multiplication comes next to scale it by the load. Division by 8 applies last as an overall factor. Changing the order changes what you're computing.

### D. Failure Case

Doing the operations left-to-right without following order:

$$w \times L^2 \div 8 \xrightarrow{\text{wrong}} (w \times L)^2 \div 8$$

$$= (12 \times 6)^2 \div 8 = 648\ \mathrm{kN \cdot m} \quad \text{✗ — 12× too large}$$

The error is squaring $(wL)$ instead of just $L$. The $^2$ only applies to $L$, not to the entire product.

### E. The Rule

Evaluate powers first, then multiply and divide left to right, then add and subtract left to right. Parentheses override this order. This sequence is called the order of operations.

### F. The Formal Shorthand

$a^n$ means $a$ multiplied by itself $n$ times. $\sqrt{a}$ (the square root) is the inverse: the number that, when squared, gives $a$.

**Order of operations (PEMDAS):**
1. Parentheses — evaluate everything inside first
2. Exponents / roots — powers and square roots
3. Multiplication and Division — left to right
4. Addition and Subtraction — left to right

**Power rules you need for structural formulas:**
$$a^m \cdot a^n = a^{m+n} \qquad (a^m)^n = a^{mn} \qquad a^0 = 1 \qquad a^{-n} = \frac{1}{a^n}$$

**Scientific notation** handles the large numbers in material properties. Steel's elastic modulus is $200\ \mathrm{GPa} = 200 \times 10^9\ \mathrm{Pa} = 2 \times 10^{11}\ \mathrm{Pa}$. Move the decimal until one nonzero digit sits left of it; the count of places you moved is the exponent.

A negative sign inside parentheses before a power applies to the whole base: $(-3)^2 = 9$. Without parentheses, it applies after: $-3^2 = -9$. This distinction matters when substituting negative values into formulas.

### G. Full Worked Example — Midspan Moment

**Problem.** A simply-supported steel beam spans $L = 8\ \mathrm{m}$ and carries a uniform dead + live load of $w = 22\ \mathrm{kN/m}$. Compute the maximum bending moment.

$$M_{\max} = \frac{wL^2}{8}$$

**Step 1 — Exponents first:**
$$L^2 = 8^2 = 64\ \mathrm{m^2}$$

**Step 2 — Multiply:**
$$wL^2 = 22 \times 64 = 1408\ \mathrm{kN \cdot m}$$

**Step 3 — Divide:**
$$M_{\max} = \frac{1408}{8} = 176\ \mathrm{kN \cdot m}$$

This is the maximum bending moment the beam must resist. A designer would next check whether the chosen section has sufficient moment capacity.

### H. Practice Task

> **Tasks:**
> 1. Compute $M = wL^2/8$ for $w = 15\ \mathrm{kN/m}$, $L = 6\ \mathrm{m}$.
> 2. A square column is $350\ \mathrm{mm} \times 350\ \mathrm{mm}$. Find its cross-sectional area in $\mathrm{mm^2}$ and in $\mathrm{m^2}$.
> 3. Simplify: $x^4 \cdot x^3$; $(y^2)^3$; $z^9 / z^4$.
> 4. Steel modulus $E = 2 \times 10^{11}\ \mathrm{Pa}$, concrete modulus $E_c = 3 \times 10^{10}\ \mathrm{Pa}$. How many times stiffer is steel?
>
> **Answers:**
> 1. $M = 15 \times 36 / 8 = 540 / 8 = 67.5\ \mathrm{kN \cdot m}$
> 2. $350^2 = 122{,}500\ \mathrm{mm^2}$; $= 0.1225\ \mathrm{m^2}$
> 3. $x^7$; $y^6$; $z^5$
> 4. $2 \times 10^{11} \div 3 \times 10^{10} \approx 6.7\times$ stiffer

### I. What You Now Know

Powers are geometric scaling, and the order you evaluate a formula matters as much as the formula itself. Every structural formula from this point forward will be evaluated with powers first. Chapter 4 shows how to tell whether a formula result is physically reasonable before trusting it.

| Idea | Plain Meaning | Engineering Use |
|------|---------------|----------------|
| $a^n$ | $a$ multiplied by itself $n$ times | Area $= b^2$, moment $\propto L^2$ |
| $\sqrt{a}$ | Number that squares to $a$ | Diagonal from legs |
| PEMDAS | Fixed evaluation order | Every structural formula |

<div style="page-break-after: always;"></div>

## Chapter 4 — Numbers Need Labels: Units and Estimation

### A. Achievement

After this section you can convert any structural quantity between SI units without a factor-of-1000 error, verify any formula dimensionally before substituting numbers, and use a back-of-envelope estimate to catch a software result that is wrong by a factor of 10.

### B. The Situation

A 200 mm thick concrete slab. Concrete density is $2500\ \mathrm{kg/m^3}$. The building code asks for the slab self-weight in kPa. You need to get from kg/m³ to kPa without losing track of what the numbers mean.

If you drop a unit somewhere along the way, you can easily be off by a factor of 1000 — and that goes into the load calculation, the design, and the final member sizes. No alarm sounds. The design just becomes silently wrong.

### C. The Intuition

A number without a unit is incomplete. "The beam carries 5" — five what? Newtons? Kilonewtons? Tonnes? Each changes the design entirely.

Units multiply, divide, and cancel just like algebraic variables. $\mathrm{kN/m^2} \times \mathrm{m}$ gives $\mathrm{kN/m}$, because the $\mathrm{m^2}$ in the denominator and one $\mathrm{m}$ from the multiplication cancel, leaving $\mathrm{m}$ in the denominator. The algebra of units mirrors the algebra of the physical reality.

**Estimation works alongside units.** Once you know what units make sense for an answer, estimation tells you whether the number is the right *size*. Replace every input with its nearest round number, compute quickly, and compare to the software result. If they differ by more than a factor of 2, something is wrong — a misplaced decimal, a wrong unit, a load entered twice, or a missing support.

### D. Failure Case

A designer enters concrete density as $2500$ in a formula expecting $\mathrm{kN/m^3}$, but $2500$ is in $\mathrm{kg/m^3}$. The slab self-weight comes out as $2500 \times 0.2 = 500$. The designer reads this as $500\ \mathrm{kN/m^2}$ — nearly a hundred times the true value of $5\ \mathrm{kN/m^2}$. Every downstream calculation is fatally wrong, and the model accepts it without complaint.

### E. The Rule

Write the unit next to every number in every step. Cancel units the same way you cancel algebraic terms. The final unit on the result should match the unit you expected — if it doesn't, an error is hiding in the steps.

Before trusting any computed or software result, estimate the answer using round numbers. If the two differ by more than a factor of 2, find the error.

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
| MPa | N/mm² | = 1 (identical) |
| kg/m³ | kN/m³ | × 0.00981 |

**Dimensional consistency:** every well-formed structural formula has the same dimension on both sides.
$$[\sigma] = \frac{[\mathrm{force}]}{[\mathrm{area}]} = \frac{\mathrm{kN}}{\mathrm{m^2}} = \mathrm{kPa} \quad \checkmark$$

**Significant figures:** the digits that carry real measurement information. In multiplication or division, the result has as many significant figures as the least precise input.
$$0.00420 \to 3\ \text{sig figs} \qquad 5.060 \to 4\ \text{sig figs}$$

**Order-of-magnitude estimate:** replace each number with its nearest <abbr title="[→ Ch3] a^n means a multiplied by itself n times">power of 10</abbr> and compute. Fast, and catches factor-of-10 errors before they reach a drawing.

### G. Full Worked Example — Slab Self-Weight and Sanity Check

**Problem.** Concrete slab: thickness $t = 200\ \mathrm{mm}$, density $\rho = 2500\ \mathrm{kg/m^3}$. Find the slab self-weight as an area load in kPa. Then verify the answer with an estimate.

**Step 1 — Convert thickness to meters:**
$$t = 200\ \mathrm{mm} \times \frac{1\ \mathrm{m}}{1000\ \mathrm{mm}} = 0.200\ \mathrm{m}$$

**Step 2 — Convert density to unit weight:**
$$\gamma = 2500\ \frac{\mathrm{kg}}{\mathrm{m^3}} \times 9.81\ \frac{\mathrm{m}}{\mathrm{s^2}} = 24{,}525\ \frac{\mathrm{N}}{\mathrm{m^3}} = 24.525\ \frac{\mathrm{kN}}{\mathrm{m^3}} \approx 25\ \frac{\mathrm{kN}}{\mathrm{m^3}}$$

**Step 3 — Multiply by thickness:**
$$q_{sw} = \gamma \times t = 25\ \frac{\mathrm{kN}}{\mathrm{m^3}} \times 0.200\ \mathrm{m} = 5.0\ \frac{\mathrm{kN}}{\mathrm{m^2}} = 5.0\ \mathrm{kPa}$$

Units check: $\mathrm{kN/m^3} \times \mathrm{m} = \mathrm{kN/m^2} = \mathrm{kPa}\ \checkmark$

**Sanity estimate:** concrete is "about like water but 2.5 times heavier." Water depth of 1 m gives $\approx 10\ \mathrm{kPa}$. A 200 mm concrete slab weighs about $0.2 \times 2.5 \times 10 = 5\ \mathrm{kPa}$. Matches.

**ETABS note:** Define > Materials > Concrete → Weight per Unit Volume should be $24.5\ \mathrm{kN/m^3}$. Entering 2500 in a kN/m³ field would give a 100× error.

### H. Practice Task

> **Tasks:**
> 1. Convert: $600\ \mathrm{mm}$ to m; $0.045\ \mathrm{m^2}$ to mm²; $250\ \mathrm{MPa}$ to kPa.
> 2. A floor carries live load $q = 3\ \mathrm{kPa}$, tributary width $b = 3.5\ \mathrm{m}$. Find the line load $w\ [\mathrm{kN/m}]$.
> 3. Verify dimensionally: $M = wL^2/8$ where $w$ is kN/m and $L$ is m. What are the units of $M$?
> 4. ETABS reports a ground-floor column axial of $14{,}850\ \mathrm{kN}$ for a 6-story office. Floor plan $18 \times 12\ \mathrm{m}$, 9 columns, average load $6\ \mathrm{kPa}$. Is this plausible?
>
> **Answers:**
> 1. $0.600\ \mathrm{m}$; $45{,}000\ \mathrm{mm^2}$; $250{,}000\ \mathrm{kPa}$
> 2. $w = 3 \times 3.5 = 10.5\ \mathrm{kN/m}$
> 3. $[\mathrm{kN/m}] \times [\mathrm{m^2}] = [\mathrm{kN \cdot m}]\ \checkmark$
> 4. Estimate: $6\ \mathrm{kPa} \times 216\ \mathrm{m^2} \times 6\ \text{floors} / 9\ \text{columns} \approx 864\ \mathrm{kN}$ per column. Interior columns carry $1.5\times$ average $\approx 1{,}300\ \mathrm{kN}$. ETABS gives $14{,}850\ \mathrm{kN}$ — 11× too large. Investigate before proceeding (likely a units error or self-weight multiplier applied to multiple patterns).

### I. What You Now Know

Every number has a unit; units cancel like algebra; a mismatch flags an error every time. Estimation catches order-of-magnitude errors before they reach design. Chapter 9 applies dimensional analysis to finding support reactions — two unknowns from two equilibrium equations.

| Idea | Formula or Rule | Engineering Use |
|------|-----------------|----------------|
| Unit conversion | Multiply by a fraction equal to 1 | kg/m³ → kN/m³ |
| Dimensional check | Both sides must match | Verify any formula |
| Significant figures | Least precise input determines output | Report $176\ \mathrm{kN \cdot m}$, not $176.4832$ |
| Order-of-magnitude estimate | Round to powers of 10, compute fast | ETABS sanity check |

<div style="page-break-after: always;"></div>

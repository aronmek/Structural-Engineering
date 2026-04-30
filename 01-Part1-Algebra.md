# PART 1 — ALGEBRA FOR STRUCTURAL ENGINEERS

> Welcome. This part teaches you the algebra a structural engineer uses every single working day. By the end of these nine chapters, you will be able to read any structural formula, rearrange it to solve for any unknown, and perform unit conversions correctly — the three skills that, more than any others, separate engineers who get correct answers from those who do not.

<div style="page-break-after: always;"></div>

## Chapter 1 — Variables and Expressions

### A. Word Bank

| Word | Pronunciation | Plain English Meaning | Used In |
|------|---------------|----------------------|---------|
| **Variable** | "VAIR-ee-ah-bul" | A letter that stands in for a number we don't know yet, or that can change | $L$ for length |
| **Expression** | "ex-PRESH-un" | A combination of numbers, variables, and operations — but no equals sign | $3x + 5$ |
| **Constant** | "KON-stant" | A number whose value never changes | The $2$ in $2s + 1$ |
| **Coefficient** | "co-ih-FISH-ent" | The number multiplying a variable | The $3$ in $3x$ |
| **Substitute** | "SUB-stih-toot" | To replace a variable with a number | Putting $x = 4$ into $3x + 5$ |
| **Evaluate** | "ee-VAL-yoo-ate" | To calculate the final number after substitution | $3(4) + 5 = 17$ |
| **Term** | "TURM" | One piece of an expression separated by + or − | In $3x + 5y - 7$ there are three terms |

### B. Concept Introduction

A variable is a placeholder. Imagine ordering coffee online: the form has a box labeled "Quantity" — that empty box is a variable. It will hold a number eventually, but right now it is just a name waiting for a value.

In structural engineering, almost nothing has a fixed value at the start of a calculation. A length, a spacing, a count of repeated bays, or a chosen member size may all be unknown until you choose them or calculate them. Algebra is the language we use to describe how these unknowns relate to one another.

> **Real-world analogy:** A recipe says "use F cups of flour and S cups of sugar, where F = 2S." You don't know F or S yet, but you know their relationship. The same idea runs through every engineering formula.

### C. What This Means in Measurement

Engineers describe measurable things with formulas. A formula is a sentence written in symbols. The symbols are variables that stand for quantities such as length, spacing, count, width, or height. Later, variables will also stand for force, stress, moment, and other physical quantities. Those are not needed yet.

For now, read a formula like $L = 3s + 2$ as a sentence: "The total length $L$ equals three equal spacings $s$, plus 2 extra meters."

### D. The Math

An expression has the general form:

$$ax + b$$

where $a$ is the coefficient, $x$ is the variable, and $b$ is the constant.

To **evaluate** an expression you substitute a known value for the variable and do the arithmetic.

**Worked example.** Evaluate $3x + 5$ when $x = 4$:

1. Write the expression: $3x + 5$
2. Replace $x$ with $4$: $3(4) + 5$
3. Multiply: $3 \times 4 = 12$, so we have $12 + 5$
4. Add: $12 + 5 = 17$

Final answer: $3x + 5 = 17$ when $x = 4$.

### E. Structural Engineering Application

**Problem.** A small frame has 3 equal bays. Each bay has spacing $s = 4\ [\mathrm{m}]$. There is also a 1 m overhang on each end. Find the total length $L$.

The formula is:

$$L = 3s + 2e$$

where:
- $L$ = total length
- $s$ = spacing of one bay
- $e$ = overhang length at one end

**Solution:**

1. Write the expression: $3s + 2e$
2. Substitute values: $3(4) + 2(1)$
3. Multiply: $12 + 2$
4. Add: $14\ [\mathrm{m}]$

**What this means:** Algebra lets one short expression describe many possible layouts. If the spacing changes, you substitute the new value for $s$ and evaluate again.

### F. ETABS Connection

Every input field in ETABS is a variable waiting for a value.

- **Define > Grid Systems** has fields for spacing and number of grid lines — these are variables describing the model layout
- **Define > Section Properties > Frame Sections** has fields for width $b$ and depth $h$ — variables that ETABS later uses in section calculations

> **Try it in ETABS 22:**
> 1. Open ETABS 22
> 2. Go to **Define > Materials**
> 3. Click **Add New Material**
> 4. Notice that each box is empty until you supply a number — each empty box is a variable waiting for a value
> 5. Type any trial spacing into one grid field and watch ETABS use that value to place the grid line

### G. Common Mistakes

1. **Confusing a variable with its value.** Writing $\sigma = P$ when you mean $\sigma = P/A$ — the variable is just a label; the formula is what relates them.
2. **Forgetting the coefficient.** In $3x$, the $3$ is multiplied. Writing $3x = 3 + x$ is wrong; $3x$ means $3 \times x$.
3. **Skipping units when substituting.** $P = 75{,}000$ alone is meaningless. Always write $P = 75{,}000\ [\mathrm{N}]$.

### H. Chapter Practice Task — Grid Length

> **Scenario:** A simple frame layout has 4 equal bays and one overhang at each end. Each bay spacing is $s = 5\ [\mathrm{m}]$. Each overhang is $e = 1.5\ [\mathrm{m}]$.
>
> **Given:**
> - $s = 5\ [\mathrm{m}]$
> - $e = 1.5\ [\mathrm{m}]$
> - Formula: $L = 4s + 2e$
>
> **Tasks:**
> 1. Substitute $s$ and $e$ into the expression
> 2. Evaluate the expression
> 3. State the total length with units

> **Worked Solution:**
>
> $L = 4s + 2e = 4(5) + 2(1.5) = 20 + 3 = 23\ [\mathrm{m}]$
>
> The total grid length is $23\ [\mathrm{m}]$.

### I. Chapter Summary Table

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Variable | $x$ | Placeholder for any unknown value | Every input field |
| Expression | $ax + b$ | Building block of formulas | Section property dialogs |
| Substitution | Replace a variable with a value | Compute layout quantities | Grid and section input fields |

<div style="page-break-after: always;"></div>

## Chapter 2 — Linear Equations (One Variable)

### A. Word Bank

| Word | Pronunciation | Plain English Meaning | Used In |
|------|---------------|----------------------|---------|
| **Equation** | "ee-KWAY-zhun" | Two expressions connected by an equals sign | $3x + 5 = 17$ |
| **Linear** | "LIN-ee-er" | The variable appears only to the first power (no $x^2$, no $x^3$) | $3x + 5 = 17$ is linear |
| **Solve** | "SOLV" | Find the value of the variable that makes the equation true | $x = 4$ solves $3x + 5 = 17$ |
| **Isolate** | "EYE-soh-late" | Get the variable alone on one side | Move everything else away from $x$ |
| **Balance** | "BAL-ans" | Whatever you do to one side, do to the other | An equation is a scale |
| **Inverse operation** | "IN-vurs op-er-AY-shun" | The operation that undoes another | Subtraction undoes addition |

### B. Concept Introduction

An equation is a balance scale. The equals sign is the pivot. Whatever you do to the left side, you must also do to the right side, or the scale tips and the statement is no longer true. Solving an equation means moving things off the side where the variable lives until the variable stands alone.

> **Real-world analogy:** Imagine a luggage scale showing "your bag plus 3 books = 12 kg." To find your bag's weight, you remove the 3 books from one side. You must also subtract their weight from the other side: bag = 12 − (weight of 3 books).

### C. What This Means in Measurement

Equations express a condition that must be true. In a layout problem, an equation might say that several equal spacings must add up to a known total length. Solving the equation finds the unknown spacing that makes the layout fit.

Later, equations will also express physical balance in structures. That idea is called equilibrium and is explained in Part 2.

### D. The Math

The four inverse-operation pairs you need:

| Operation | Inverse |
|-----------|---------|
| Add a number | Subtract that number |
| Subtract a number | Add that number |
| Multiply by a number | Divide by that number |
| Divide by a number | Multiply by that number |

**Worked example.** Solve $3x + 5 = 17$.

1. Write the equation: $3x + 5 = 17$
2. Subtract $5$ from both sides (inverse of $+5$): $3x + 5 - 5 = 17 - 5$
3. Simplify: $3x = 12$
4. Divide both sides by $3$ (inverse of $\times 3$): $\dfrac{3x}{3} = \dfrac{12}{3}$
5. Simplify: $x = 4$

**Check:** Substitute $x = 4$ back into the original: $3(4) + 5 = 12 + 5 = 17$ ✓

### E. Structural Engineering Application

**Problem.** A straight grid line is $17\ [\mathrm{m}]$ long. It has 3 equal bays and a 1 m overhang at each end. What bay spacing $s$ makes the layout fit?

The formula is:

$$3s + 2 = 17$$

**Solution:**

1. Write the equation: $3s + 2 = 17$
2. Subtract $2$ from both sides: $3s = 15$
3. Divide both sides by $3$: $s = 5$

**What this means:** Each bay must be $5\ [\mathrm{m}]$ wide. If you used a different spacing, the total length would not equal 17 m.

### F. ETABS Connection

ETABS uses equations whenever you define a model. If you enter a total grid length and number of spaces, you are deciding the spacing relationship. Later, ETABS also solves large systems of equations for reactions, displacements, and member forces; those physical results are explained after statics is introduced.

> **Try it in ETABS 22:**
> 1. Start a new model
> 2. Open the grid definition dialog
> 3. Choose a total length of 17 m with 3 equal spaces and 1 m overhang at each end
> 4. Confirm that each repeated spacing is 5 m
> 5. The software is using the same relationship: $3s + 2 = 17$

### G. Common Mistakes

1. **Doing the operation to only one side.** Subtracting 5 from the left but not from the right — the equality breaks.
2. **Wrong inverse operation.** To undo $+5$ you subtract, not divide. Match each operation with its correct inverse.
3. **Forgetting to check.** Always substitute your answer back. If both sides don't equal, you made an error.

### H. Chapter Practice Task — Unknown Bay Spacing

> **Scenario:** A grid line is $26\ [\mathrm{m}]$ long. It contains 4 equal bays and a $1\ [\mathrm{m}]$ overhang at each end. Find the bay spacing $s$.
>
> **Given:**
> - Total length: $26\ [\mathrm{m}]$
> - Overhangs: $1\ [\mathrm{m}]$ each, so $2\ [\mathrm{m}]$ total
> - Equation: $4s + 2 = 26$
>
> **Tasks:**
> 1. Subtract 2 from both sides
> 2. Divide by 4
> 3. State the spacing with units

> **Worked Solution:**
>
> $4s + 2 = 26$
>
> $4s = 24$
>
> $s = 6\ [\mathrm{m}]$
>
> Each bay spacing is $6\ [\mathrm{m}]$.

### I. Chapter Summary Table

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Linear equation | $ax + b = c$ | Solving for unknown lengths, counts, or spacings | Used internally everywhere |
| Inverse operation | $+ \leftrightarrow -$, $\times \leftrightarrow \div$ | Isolating any variable | — |
| Solving for spacing | $s = (L - 2e)/n$ | Fit repeated bays into a total length | Grid definition |

<div style="page-break-after: always;"></div>

## Chapter 3 — Rearranging Formulas

### A. Word Bank

| Word | Pronunciation | Plain English Meaning | Used In |
|------|---------------|----------------------|---------|
| **Rearrange** | "ree-ah-RAYNJ" | Move terms to make a different variable the subject | Turning $L = ns + 2e$ into $s = (L - 2e)/n$ |
| **Transpose** | "tranz-POZE" | Move a term from one side of the equals sign to the other | "Transposing $A$ to the other side" |
| **Subject of the formula** | — | The single variable on its own on one side | $\sigma$ is the subject of $\sigma = P/A$ |

### B. Concept Introduction

You will rarely use a formula exactly as it is first written. A drawing formula might give total length from spacing, but in real work you might know the total length and need the spacing. Rearranging a formula means choosing a new "subject" — the variable you want alone on the left.

> **Real-world analogy:** A recipe gives quantities for 4 servings, but you have 6 guests. You don't throw out the recipe — you rearrange the proportions. The information is the same; the form is different.

### C. The Physics Behind It

The measured relationship doesn't change when you rearrange — only the algebra. $L = ns + 2e$ and $s = (L - 2e)/n$ describe the same layout. Rearranging just lets you solve for whichever quantity you need.

### D. The Math

The rule is simple: do the same operation to both sides until the variable you want is alone.

**Worked example.** Start with $L = ns + 2e$. Make $s$ the subject.

1. Write the formula: $L = ns + 2e$
2. Subtract $2e$ from both sides: $L - 2e = ns$
3. Divide both sides by $n$: $\dfrac{L - 2e}{n} = s$
4. Rewrite with the subject on the left: $s = \dfrac{L - 2e}{n}$

The same formula now solves for spacing.

**Worked example 2.** Start with $L = ns + 2e$. Make $e$ the subject.

1. Subtract $ns$ from both sides: $L - ns = 2e$
2. Divide both sides by $2$: $e = \dfrac{L - ns}{2}$

### E. Structural Engineering Application

A common early layout formula is:

$$L = ns + 2e$$

where:
- $L$ = total grid length
- $n$ = number of equal bays
- $s$ = spacing of each bay
- $e$ = overhang at one end

| Want to find | Rearrange to |
|-------------|-------------|
| Total length $L$ | $L = ns + 2e$ |
| Bay spacing $s$ | $s = \dfrac{L - 2e}{n}$ |
| End overhang $e$ | $e = \dfrac{L - ns}{2}$ |

**Problem.** A grid line must fit inside $L = 32\ [\mathrm{m}]$. It has $n = 5$ equal bays and $e = 1\ [\mathrm{m}]$ overhang at each end. Find the required bay spacing.

**Solution:**

1. Rearrange: $s = \dfrac{L - 2e}{n}$
2. Substitute: $s = \dfrac{32 - 2(1)}{5}$
3. Simplify numerator: $32 - 2 = 30$
4. Divide: $s = 6\ [\mathrm{m}]$

**What this means:** Five 6 m bays plus two 1 m overhangs exactly fill 32 m.

### F. ETABS Connection

ETABS contains many input fields connected by formulas. Rearranging helps you decide what value to enter before you model. For example, if the total grid length is fixed, you rearrange the layout formula to choose the bay spacing.

> **Try it in ETABS 22:**
> 1. Open the grid definition dialog
> 2. Decide on a total length, number of bays, and overhangs
> 3. Use $s = (L - 2e)/n$ to calculate the spacing before entering it
> 4. Enter the spacing and confirm the total dimension matches your calculation

### G. Common Mistakes

1. **Rearranging like English instead of like math.** "Move $A$ to the other side and flip it" sometimes works and sometimes doesn't. The safe rule is always: do the same operation to both sides.
2. **Forgetting to do operations to *every* term.** When dividing by $\sigma$, every term on each side must be divided.
3. **Losing the negative sign.** Moving a $-3$ across the equals sign means it becomes $+3$ on the other side — this is just algebra, but it's easy to forget.

### H. Chapter Practice Task — Choosing a Bay Spacing

> **Scenario:** A rectangular building side is $L = 42\ [\mathrm{m}]$ long. The architect wants $n = 6$ equal bays and a $1.5\ [\mathrm{m}]$ overhang at each end. Find the bay spacing $s$.
>
> **Given:**
> - $L = 42\ [\mathrm{m}]$
> - $n = 6$
> - $e = 1.5\ [\mathrm{m}]$
> - $L = ns + 2e$
>
> **Tasks:**
> 1. Rearrange for $s$
> 2. Substitute values
> 3. Solve numerically
> 4. Check by substituting back into the original formula

> **Worked Solution:**
>
> **Step 1 — Rearrange:**
> $s = \dfrac{L - 2e}{n}$
>
> **Step 2 — Substitute:**
> $s = \dfrac{42 - 2(1.5)}{6}$
>
> **Step 3 — Solve:**
> $s = \dfrac{42 - 3}{6} = \dfrac{39}{6} = 6.5\ [\mathrm{m}]$
>
> **Step 4 — Check:**
> $ns + 2e = 6(6.5) + 2(1.5) = 39 + 3 = 42\ [\mathrm{m}]$ ✓

### I. Chapter Summary Table

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Rearranging | Same operation, both sides | Adapting any formula to find any unknown | All design checks |
| Layout formula, all forms | $L = ns + 2e$, $s = (L - 2e)/n$, $e = (L - ns)/2$ | Planning grid dimensions | Grid spacing fields |

<div style="page-break-after: always;"></div>

## Chapter 4 — Units and Dimensional Analysis

### A. Word Bank

| Word | Pronunciation | Plain English Meaning | Used In |
|------|---------------|----------------------|---------|
| **Unit** | "YOO-nit" | The standard amount we measure with | meters, kilograms, Newtons |
| **Dimension** | "dih-MEN-shun" | What kind of thing the quantity is | length, mass, force, time |
| **Conversion factor** | "kon-VER-zhun FAK-tor" | A multiplier that changes a value from one unit to another | $1\ \mathrm{m} = 1000\ \mathrm{mm}$ |
| **Newton** | "NOO-ton" | The SI unit of force | $1\ \mathrm{N} = 1\ \mathrm{kg \cdot m/s^2}$ |
| **kilonewton** | "KIL-oh-NOO-ton" | 1000 Newtons | Used for structural loads |
| **Pascal** | "PASS-kal" | The SI unit of stress / pressure | $1\ \mathrm{Pa} = 1\ \mathrm{N/m^2}$ |
| **kilopascal** | "KIL-oh-PASS-kal" | 1000 Pascals | Floor area loads |
| **megapascal** | "MEG-ah-PASS-kal" | 1,000,000 Pascals | Material strength |

### B. Concept Introduction

A number alone is meaningless in engineering. "The beam carries 5" — five what? Five Newtons? Five kilonewtons per meter? Five tons? Each gives a totally different answer.

Units are part of every quantity. They behave like algebra: they multiply and they cancel. Mastering this turns unit conversion from a guessing game into a reliable mechanical procedure.

> **Real-world analogy:** Converting recipes between cups and milliliters. You multiply by a known factor (1 cup ≈ 240 mL). The same approach works for every unit conversion.

### C. The Physics Behind It

Every physical quantity has a **dimension** — a fundamental kind of measurement. The seven SI base dimensions include length, mass, time, and temperature. Force is a *derived* dimension: $\mathrm{[force]} = \mathrm{[mass]} \cdot \mathrm{[acceleration]}$. Stress is force per area: $\mathrm{[stress]} = \mathrm{[force]/[length]^2}$. Equations only make sense when the dimensions on both sides match — this is called **dimensional consistency**, and checking it catches almost every formula error.

### D. The Math

**Conversion is multiplication by 1.** Since $1\ \mathrm{m} = 1000\ \mathrm{mm}$, the ratio $\dfrac{1000\ \mathrm{mm}}{1\ \mathrm{m}}$ equals 1. Multiplying any quantity by 1 doesn't change its value, but it does change the units.

**Worked example.** Convert $5\ [\mathrm{m}]$ to millimeters.

$5\ [\mathrm{m}] \times \dfrac{1000\ [\mathrm{mm}]}{1\ [\mathrm{m}]} = 5 \times 1000\ [\mathrm{mm}] = 5{,}000\ [\mathrm{mm}]$

The $\mathrm{m}$ cancels with $\mathrm{m}$, leaving $\mathrm{mm}$.

**Essential structural conversions:**

| From | To | Multiply by |
|------|----|-----------|
| m | mm | 1,000 |
| mm | m | 0.001 |
| m² | mm² | 1,000,000 |
| kN | N | 1,000 |
| kPa | MPa | 0.001 |
| kPa | N/mm² | 0.001 |
| MPa | N/mm² | 1 (they are equal) |
| t/m³ | kN/m³ | 9.81 (×g) |

**Verifying an area formula dimensionally:**

$A = b \cdot h$ → $[\mathrm{mm}] \cdot [\mathrm{mm}] = [\mathrm{mm^2}]$ ✓

### E. Structural Engineering Application

**Problem.** A floor carries a live load of $q = 4\ [\mathrm{kPa}]$. A beam supports a tributary width of $2.5\ [\mathrm{m}]$. Find the line load $w$ on the beam in $\mathrm{kN/m}$.

**Solution:**

1. The beam supports load over a strip $2.5\ [\mathrm{m}]$ wide
2. Multiply: $w = q \times \text{tributary width} = 4\ [\mathrm{kPa}] \times 2.5\ [\mathrm{m}]$
3. Recall $1\ [\mathrm{kPa}] = 1\ [\mathrm{kN/m^2}]$, so:
   $w = 4\ [\mathrm{kN/m^2}] \times 2.5\ [\mathrm{m}] = 10\ [\mathrm{kN/m}]$

The $\mathrm{m}$ in $\mathrm{m^2}$ cancels with the $\mathrm{m}$ from tributary width, leaving $\mathrm{kN/m}$.

**Sanity check:** A 6 m beam at 10 kN/m carries $60\ [\mathrm{kN}]$ total — about the weight of a small car. Reasonable for a residential floor beam.

### F. ETABS Connection

ETABS lets you choose units globally and locally, and it converts internally. But it cannot detect the kind of mistake where you typed a number in the wrong unit — that error propagates silently. **Always confirm units BEFORE entering any value.**

> **Try it in ETABS 22:**
> 1. **File > New Model** — when the dialog opens, set units to **kN, m**
> 2. **Edit > Preferences > Units** — confirm the same units
> 3. In the bottom-right corner of the ETABS window, the active units are always displayed
> 4. Click that label to switch units on the fly — values are converted automatically by ETABS

### G. Common Mistakes

1. **Mixing units in one formula.** Putting $b$ in mm and $h$ in m into $A = b \cdot h$ gives a value that is neither m² nor mm² — it is meaningless.
2. **Confusing kPa and MPa.** A factor of 1000! Concrete strength $f'_c = 30\ \mathrm{MPa} = 30{,}000\ \mathrm{kPa}$. Entering 30 in a kPa field gives a column 1000× too weak.
3. **Forgetting that mass is not weight.** A mass of $100\ \mathrm{kg}$ has a *weight* (force) of $100 \times 9.81 = 981\ \mathrm{N} \approx 0.981\ \mathrm{kN}$. Use force units, not mass units, for structural loads.

### H. Chapter Practice Task — Slab Self-Weight as Load

> **Scenario:** A reinforced concrete slab is $200\ [\mathrm{mm}]$ thick. Concrete density is $\rho = 2{,}500\ [\mathrm{kg/m^3}]$. Calculate the slab's self-weight as a uniform area load in $[\mathrm{kPa}]$ for use in ETABS.
>
> **Given:**
> - Thickness $t = 200\ \mathrm{mm} = 0.2\ \mathrm{m}$
> - Density $\rho = 2{,}500\ \mathrm{kg/m^3}$
> - Gravity $g = 9.81\ \mathrm{m/s^2}$
>
> **Tasks:**
> 1. Convert density to unit weight in $\mathrm{kN/m^3}$
> 2. Calculate self-weight per unit area in $\mathrm{kN/m^2} = \mathrm{kPa}$
> 3. Verify in ETABS

> **Worked Solution:**
>
> **Step 1 — Unit weight:**
> $\gamma = \rho \times g = 2{,}500\ [\mathrm{kg/m^3}] \times 9.81\ [\mathrm{m/s^2}] = 24{,}525\ [\mathrm{N/m^3}] = 24.525\ [\mathrm{kN/m^3}]$
>
> Engineers typically round to $25\ \mathrm{kN/m^3}$ for normal-weight concrete.
>
> **Step 2 — Self-weight per unit area:**
> $q_{\text{sw}} = \gamma \times t = 25\ [\mathrm{kN/m^3}] \times 0.2\ [\mathrm{m}] = 5.0\ [\mathrm{kN/m^2}] = 5.0\ [\mathrm{kPa}]$
>
> Units check: $[\mathrm{kN/m^3}] \times [\mathrm{m}] = [\mathrm{kN/m^2}] = [\mathrm{kPa}]$ ✓
>
> **Step 3 — ETABS Connection:**
> 1. **Define > Materials > Concrete** — confirm Weight per Unit Volume = $24.5\ \mathrm{kN/m^3}$ (or $25$)
> 2. **Define > Section Properties > Slab Sections** — create a 200 mm thick slab
> 3. **Define > Load Patterns** — DL with Self Weight Multiplier = 1.0
> 4. Draw a $5\ \mathrm{m} \times 5\ \mathrm{m}$ slab, run analysis
> 5. Later, after reactions are explained, you can use ETABS tables to confirm the total self-weight. For now, the important unit result is $5\ \mathrm{kPa} \times 25\ \mathrm{m^2} = 125\ \mathrm{kN}$.

### I. Chapter Summary Table

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Length conversion | $\mathrm{m} \to \mathrm{mm}$ via ×1000 | Section dimensions | Edit > Preferences > Units |
| Force conversion | $\mathrm{kN} \to \mathrm{N}$ via ×1000 | Later load calculations | All load dialogs |
| Pressure unit | $1\ \mathrm{kPa} = 1\ \mathrm{kN/m^2}$ | Area load units later | Area Load dialog |
| Weight from mass | $W = m \cdot g$ | Self-weight | Material weight per unit volume |
| Slab self-weight | $q = \gamma \cdot t$ | Dead load on floors | Self Weight Multiplier in load pattern |

<div style="page-break-after: always;"></div>

## Chapter 5 — Systems of Equations

### A. Word Bank

| Word | Pronunciation | Plain English Meaning | Used In |
|------|---------------|----------------------|---------|
| **System** | "SIS-tem" | A set of equations sharing the same variables | Two unknown dimensions |
| **Simultaneous** | "sy-mul-TAY-nee-us" | Holding true at the same time | Both equations satisfied together |
| **Substitution** | "sub-stih-TOO-shun" | Solve one for a variable, plug into the other | First method shown below |
| **Elimination** | "ee-lim-ih-NAY-shun" | Add or subtract equations to remove a variable | Second method shown below |
| **Pair of equations** | — | Two equations used together | Total length and total cost |

### B. Concept Introduction

When two unknowns appear, one equation isn't enough — the equation has many possible solutions. You need a second equation that also relates the same unknowns. A pair of such equations forms a **system**, and "solving the system" means finding the single pair of values that satisfies both equations at once.

> **Real-world analogy:** Two friends together weigh 150 kg, and their difference is 20 kg. One equation alone (sum = 150) admits infinitely many possibilities. Both equations together pin down a unique answer.

### C. What This Means in Measurement

A single equation may not give enough information. If two unknown dimensions appear, you need two separate facts about them.

Example: suppose a rectangular opening has width $w$ and height $h$.
- Fact 1: width plus height equals 7 m, so $w + h = 7$.
- Fact 2: width is 1 m more than height, so $w - h = 1$.

Together, those two facts are enough to find both dimensions. Later, Part 2 will use systems of equations for forces and supports, after those physical ideas have been explained.

### D. The Math

**Method 1 — Substitution.** Solve one equation for one variable, then plug that expression into the other.

**Method 2 — Elimination.** Multiply equations by constants so that adding or subtracting eliminates one variable.

**Worked example (substitution).** Solve:
$$x + y = 10 \qquad x - y = 4$$

1. From the first: $x = 10 - y$
2. Substitute into the second: $(10 - y) - y = 4$
3. Simplify: $10 - 2y = 4$
4. Subtract 10: $-2y = -6$
5. Divide: $y = 3$
6. Back-substitute: $x = 10 - 3 = 7$

Solution: $x = 7$, $y = 3$.

**Worked example (elimination).** Same system:
$$x + y = 10$$
$$x - y = 4$$

1. Add the two equations term-by-term: $(x + y) + (x - y) = 10 + 4$
2. The $y$ cancels: $2x = 14$
3. Divide: $x = 7$
4. Substitute back: $7 + y = 10$ → $y = 3$

### E. Structural Engineering Application

**Problem.** A rectangular equipment opening must have width $w$ and height $h$. The width plus height must be $7\ [\mathrm{m}]$. The width must be $1\ [\mathrm{m}]$ more than the height. Find $w$ and $h$.

Write the two equations:

$$w + h = 7$$
$$w - h = 1$$

**Solution by elimination:**

1. Add the equations: $(w + h) + (w - h) = 7 + 1$
2. The $h$ terms cancel: $2w = 8$
3. Divide by 2: $w = 4\ [\mathrm{m}]$
4. Substitute into $w + h = 7$: $4 + h = 7$, so $h = 3\ [\mathrm{m}]$

**Check:** $w - h = 4 - 3 = 1$ ✓

**What this means:** Two independent facts let you determine two unknown dimensions.

### F. ETABS Connection

ETABS eventually solves massive systems of simultaneous equations. At this point, you do not need the physical meaning of those equations yet. The algebra idea is enough: many unknowns require enough independent equations to determine them.

> **Try it in ETABS 22:**
> 1. In any dialog with several related inputs, notice that changing one value may require another value to adjust
> 2. Treat those relationships as equations
> 3. Later, after forces and supports are explained, you will use ETABS results to verify structural systems of equations

### G. Common Mistakes

1. **Using two equations that say the same thing.** $x + y = 10$ and $2x + 2y = 20$ are not independent; the second is just twice the first.
2. **Substituting into the wrong place.** After solving one variable, plug it into an original equation to avoid carrying an earlier mistake.
3. **Dropping a negative sign during elimination.** Write each line clearly before adding or subtracting equations.

### H. Chapter Practice Task — Two Unknown Dimensions

> **Scenario:** A rectangular panel has width $w$ and height $h$. The width plus height is $9\ [\mathrm{m}]$. The width is $3\ [\mathrm{m}]$ more than the height. Find $w$ and $h$.
>
> **Tasks:**
> 1. Write the two equations
> 2. Solve by elimination
> 3. Check both equations

> **Worked Solution:**
>
> **Step 1 — Equations:**
> $w + h = 9$
> $w - h = 3$
>
> **Step 2 — Add equations:**
> $(w + h) + (w - h) = 9 + 3$
> $2w = 12$
> $w = 6\ [\mathrm{m}]$
>
> **Step 3 — Back-substitute:**
> $6 + h = 9$ → $h = 3\ [\mathrm{m}]$
>
> **Check:**
> $w + h = 6 + 3 = 9$ ✓
> $w - h = 6 - 3 = 3$ ✓

### I. Chapter Summary Table

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Substitution method | Solve, plug in | Two-unknown problems | — |
| Elimination method | Add/subtract equations | Two-unknown problems | — |
| Independent equations | Need one independent equation per unknown | Layout and later structural problems | Solver setup |

<div style="page-break-after: always;"></div>

## Chapter 6 — Quadratic Equations

### A. Word Bank

| Word | Pronunciation | Plain English Meaning | Used In |
|------|---------------|----------------------|---------|
| **Quadratic** | "kwod-RAT-ik" | An equation with $x^2$ as the highest power | $ax^2 + bx + c = 0$ |
| **Parabola** | "pah-RAB-oh-lah" | The U-shaped graph of a quadratic | Camber or arch shape |
| **Discriminant** | "dis-KRIM-ih-nant" | The $b^2 - 4ac$ piece — tells how many solutions exist | Inside the square root |
| **Roots** | "ROOTS" | The values of $x$ that make the equation equal zero | Where the parabola crosses zero |
| **Vertex** | "VER-teks" | The high or low point of the parabola | Highest point of an arch |
| **Camber** | "KAM-ber" | A small upward curve built into a member | Parabolic shape |

### B. Concept Introduction

A quadratic equation has $x^2$ in it. Its graph is a parabola — a smooth curve shaped like a U (or upside-down U). Quadratics are useful whenever a quantity rises and then falls in a smooth, symmetric way.

> **Real-world analogy:** The path of a thrown ball is a parabola. A gently curved arch or cambered member can also be described with a parabola. Beam moment diagrams also use parabolas later, after bending has been explained.

### C. What This Means in Geometry

Imagine a shallow arch that starts at ground level, rises to a highest point, then returns to ground level. If the shape is symmetric and smooth, a quadratic can describe its height.

One simple example is:

$$y = 6x - x^2$$

where $x$ is the horizontal position in meters and $y$ is the height in meters. The $-x^2$ term makes the curve turn back downward.

### D. The Math

The general form: $ax^2 + bx + c = 0$.

**Three ways to solve:**

**1. Factoring** (when easy). Find $(px + q)(rx + s) = 0$, then either factor equals zero gives a root.

**2. Completing the square** (rarely used in practice).

**3. The quadratic formula** (always works):

$$x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

The $\pm$ gives two roots. The piece under the square root, $b^2 - 4ac$, is the discriminant:
- If $> 0$: two real roots
- If $= 0$: one repeated root
- If $< 0$: no real roots

**Worked example.** Solve $x^2 - 5x + 6 = 0$ by factoring.

1. Find two numbers that multiply to $+6$ and add to $-5$: those are $-2$ and $-3$
2. Factor: $(x - 2)(x - 3) = 0$
3. Either factor equals zero: $x - 2 = 0$ → $x = 2$, or $x - 3 = 0$ → $x = 3$

Roots: $x = 2$ and $x = 3$.

**Worked example with the formula.** Solve $2x^2 + 3x - 5 = 0$.

1. Identify $a = 2$, $b = 3$, $c = -5$
2. Discriminant: $b^2 - 4ac = 9 - 4(2)(-5) = 9 + 40 = 49$
3. $\sqrt{49} = 7$
4. $x = \dfrac{-3 \pm 7}{2 \times 2} = \dfrac{-3 \pm 7}{4}$
5. $x_1 = \dfrac{-3 + 7}{4} = \dfrac{4}{4} = 1$
6. $x_2 = \dfrac{-3 - 7}{4} = \dfrac{-10}{4} = -2.5$

Roots: $x = 1$ and $x = -2.5$.

### E. Structural Engineering Application

**Problem — find where a parabolic arch reaches a height.** An arch profile is described by:

$$y = 6x - x^2$$

where $x$ is position from the left end in meters and $y$ is height in meters. Where is the arch $8\ [\mathrm{m}]$ high?

Set $y = 8$:
$6x - x^2 = 8$ → $x^2 - 6x + 8 = 0$

Factor:
$(x - 2)(x - 4) = 0$

So:
$x = 2\ [\mathrm{m}]$ or $x = 4\ [\mathrm{m}]$

**What this means:** The arch reaches 8 m high twice — once while rising and once while falling.

### F. ETABS Connection

Later, ETABS will draw result diagrams that can be linear, parabolic, or more complex. For now, the useful idea is visual recognition: a quadratic creates a smooth parabola, not a straight line.

> **Try it in ETABS 22:**
> 1. Sketch the curve $y = 6x - x^2$ for $x = 0$ through $6$
> 2. Notice that the curve starts at 0, rises, then returns to 0
> 3. Later, when ETABS shows a curved result diagram, you will already recognize the basic parabolic shape

### G. Common Mistakes

1. **Sign error in the formula.** The minus sign on the discriminant is part of $-4ac$, not $-(4ac)$ — but with $c$ already negative, double negatives cause sign mistakes.
2. **Stopping at one root.** Quadratics usually have two solutions. Both may be physically meaningful (or one may be discarded as outside the beam).
3. **Confusing $x^2$ with $2x$.** $x^2 = x \cdot x$, not $x + x$. The whole structure of the problem changes.

### H. Chapter Practice Task — Where Does an Arch Reach a Height?

> **Scenario:** A parabolic arch profile is $y = 8x - x^2$. Find where the arch is $12\ [\mathrm{m}]$ high.
>
> **Tasks:**
> 1. Set $y = 12$
> 2. Rearrange to standard quadratic form
> 3. Solve for the two $x$ values
> 4. Explain why there are two positions

> **Worked Solution:**
>
> **Step 1 — Set height equal to 12:**
> $8x - x^2 = 12$
>
> **Step 2 — Rearrange:**
> $x^2 - 8x + 12 = 0$
>
> **Step 3 — Factor:**
> $(x - 2)(x - 6) = 0$
> $x = 2\ [\mathrm{m}]$ or $x = 6\ [\mathrm{m}]$
>
> **Step 4 — Meaning:**
> The arch reaches 12 m high on the way up at 2 m and on the way down at 6 m.

### I. Chapter Summary Table

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Quadratic formula | $x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ | Find roots of any quadratic | Internal solver math |
| Parabolic profile | $y = ax^2 + bx + c$ | Arch/camber geometry | Visual check |
| Two roots | Two places where the curve crosses a chosen height | Layout interpretation | — |

<div style="page-break-after: always;"></div>

## Chapter 7 — Inequalities

### A. Word Bank

| Word | Pronunciation | Plain English Meaning | Used In |
|------|---------------|----------------------|---------|
| **Inequality** | "in-ee-KWOL-ih-tee" | A statement that two quantities are NOT equal — one is bigger | $8 \le 10$ |
| **Demand** | "dee-MAND" | What is being asked of an item | Required amount |
| **Capacity** | "kah-PASS-ih-tee" | What an item can provide or hold | Allowable amount |
| **Demand-capacity ratio** | — | Demand ÷ capacity; must be ≤ 1.0 | Basic capacity check |
| **Limit state** | "LIM-it stayt" | A boundary that must not be crossed | Demand must stay below capacity |
| **Compliance** | "kom-PLY-ans" | Meeting code requirements | What design checks ensure |

### B. Concept Introduction

Almost every structural check ends in an inequality, not an equation. We do not want the required amount to equal or exceed the available capacity; we want the required amount to be less than or equal to the capacity. Equality means the item is exactly at its limit.

> **Real-world analogy:** A bridge sign reads "Maximum vehicle weight: 10 tonnes." The bridge weight capacity is 10 t. Your truck weighs 8 t. The inequality $8 \le 10$ tells you it is safe to cross.

### C. The Physics Behind It

The physical details of structural limits are taught later. The inequality idea is already useful now: every check compares **demand** to **capacity**.

$$\text{Demand} \le \text{Capacity}$$

If the demand is smaller, the check passes. If the demand is larger, the check fails.

### D. The Math

Inequality symbols:

| Symbol | Meaning |
|--------|---------|
| $<$ | strictly less than |
| $\le$ | less than or equal to |
| $>$ | strictly greater than |
| $\ge$ | greater than or equal to |

**Solving inequalities** uses the same rules as equations, with one critical difference: **multiplying or dividing both sides by a negative number flips the inequality direction.**

**Worked example.** Solve $3x + 5 \le 17$.

1. Subtract 5: $3x \le 12$
2. Divide by 3 (positive — direction stays): $x \le 4$

Solution: any $x$ less than or equal to 4 works.

**Worked example with sign flip.** Solve $-2x + 3 < 11$.

1. Subtract 3: $-2x < 8$
2. Divide by $-2$ (negative — flip): $x > -4$

### E. Structural Engineering Application

**The universal design check:**

$$\text{Ratio} = \dfrac{\text{Demand}}{\text{Capacity}} \le 1.0$$

For any basic capacity check:
- Demand = required amount
- Capacity = allowable amount
- Check: demand $\le$ capacity
- Ratio = demand / capacity $\le 1.0$

**Problem.** A temporary platform is allowed to carry $10$ storage units. The planned storage is $8$ units. Check the platform using an inequality and demand/capacity ratio.

**Solution:**

1. Demand: $8$ units
2. Capacity: $10$ units
3. Ratio: $8 / 10 = 0.80$
4. Check: $0.80 \le 1.0$ ✓

The platform passes with 20% capacity remaining.

**What if the planned storage is 12 units instead?**
1. Ratio = $12/10 = 1.20$
2. $1.20 > 1.0$ ✗ — the check fails.

### F. ETABS Connection

Later, ETABS design output will display demand/capacity ratios for designed members. The color coding goes from green (low ratio) to red (over 1.0). For now, the important idea is the inequality: ratio $\le 1.0$ passes.

> **Try it in ETABS 22:**
> 1. After running analysis and design, go to **Design > Steel Frame Design > Display Design Info > P-M Ratio**
> 2. Every member shows a colored stripe and a number — the demand/capacity ratio
> 3. Click any member; a popup details the demand $M$, $P$, $V$, and capacity values
> 4. Members with ratio > 1.0 are flagged red — they fail the inequality

### G. Common Mistakes

1. **Forgetting to flip when multiplying by negative.** $-2x \le 8$ becomes $x \ge -4$, not $x \le -4$.
2. **Reading a ratio as a raw percentage.** A ratio of 0.85 means 85% utilized, leaving 15% reserve. A ratio of 1.05 is 5% over the limit.
3. **Checking only one limit.** A real design may have several separate limits. Each one needs its own inequality.

### H. Chapter Practice Task — Multiple Capacity Checks

> **Scenario:** A temporary work zone has three limits: storage limit = 110 units, access limit = 100 units, and movement limit = 20 mm. The planned demands are storage = 90 units, access = 70 units, and movement = 18 mm. Check all three and find the governing demand/capacity ratio.
>
> **Tasks:**
> 1. Compute the demand/capacity ratio for storage, access, and movement
> 2. Check each against 1.0
> 3. Identify the governing (highest) ratio

> **Worked Solution:**
>
> **Ratio for storage:** $90 / 110 = 0.818$
> **Ratio for access:** $70 / 100 = 0.700$
> **Ratio for movement:** $18 / 20 = 0.900$
>
> All three < 1.0 → beam passes.
>
> Governing limit state: **movement** with ratio = 0.900 — closest to failure.

### I. Chapter Summary Table

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Demand/capacity ratio | Demand / Capacity ≤ 1.0 | Universal design check | Design output later |
| Basic check | Demand $\le$ capacity | All design checks | Design output later |
| Governing ratio | Largest demand/capacity ratio | Closest check to the limit | Design summary later |
| Inequality direction flip | When ×/÷ by negative | Ensures correct logic | — |

<div style="page-break-after: always;"></div>

## Chapter 8 — Exponents and Powers

### A. Word Bank

| Word | Pronunciation | Plain English Meaning | Used In |
|------|---------------|----------------------|---------|
| **Exponent** | "EX-poh-nent" | The small number showing how many times to multiply | The 3 in $h^3$ |
| **Power** | "POW-er" | The whole expression (base raised to exponent) | $h^3$ is "h to the third power" |
| **Base** | "BASE" | The number being raised | The $h$ in $h^3$ |
| **Squared** | "SKWAIRD" | Raised to the second power | $b^2$ = "b squared" |
| **Cubed** | "KYOOBD" | Raised to the third power | $h^3$ = "h cubed" |
| **Square root** | "SKWAIR ROOT" | The number that, squared, gives the original | $\sqrt{25} = 5$ |
| **Volume** | "VOL-yoom" | Space inside a 3D object | $V = bhl$ |

### B. Concept Introduction

An exponent is a shortcut for repeated multiplication. $h^3$ means $h \times h \times h$. Squares appear in area. Cubes appear in volume. Later, exponents will also explain why some structural properties change very quickly when a dimension changes.

> **Real-world analogy:** A square that is twice as wide and twice as tall has four times the area. A cube that is twice as wide, twice as tall, and twice as deep has eight times the volume.

### C. The Physics Behind It

Area and volume show why exponents matter physically. If you double the side length of a square, its area does not double; it becomes four times as large. If you double the side length of a cube, its volume becomes eight times as large.

Later, Chapter 20 explains a structural property called moment of inertia. It also uses powers, but it is not needed for this chapter.

### D. The Math

**Rules of exponents** (all assume same base):

| Rule | Example |
|------|---------|
| $a^m \cdot a^n = a^{m+n}$ | $x^2 \cdot x^3 = x^5$ |
| $\dfrac{a^m}{a^n} = a^{m-n}$ | $x^5 / x^2 = x^3$ |
| $(a^m)^n = a^{mn}$ | $(x^2)^3 = x^6$ |
| $a^0 = 1$ (any nonzero $a$) | $5^0 = 1$ |
| $a^{-n} = \dfrac{1}{a^n}$ | $x^{-2} = 1/x^2$ |
| $a^{1/n} = \sqrt[n]{a}$ | $x^{1/2} = \sqrt{x}$ |

**Worked example.** Evaluate $h^3$ when $h = 400\ [\mathrm{mm}]$:
$h^3 = 400 \times 400 \times 400 = 160{,}000 \times 400 = 64{,}000{,}000\ [\mathrm{mm^3}]$

**Worked example.** Evaluate $\sqrt{125{,}000}$:
$\sqrt{125{,}000} = \sqrt{25 \times 5{,}000} = 5 \times \sqrt{5{,}000} \approx 5 \times 70.71 = 353.55$

### E. Structural Engineering Application

The volume of a rectangular block is:
$$V = bhl$$

**Problem.** Calculate the volume for two blocks: (a) $b = 2, h = 2, l = 2$, (b) $b = 4, h = 4, l = 4$.

**Solution (a):**
$V = 2 \times 2 \times 2 = 2^3 = 8\ [\mathrm{m^3}]$

**Solution (b):**
$V = 4 \times 4 \times 4 = 4^3 = 64\ [\mathrm{m^3}]$

**Ratio:** $64 / 8 = 8.0$

Doubling each side length multiplied the volume by **exactly 8**. This is the cube law in action.

### F. ETABS Connection

ETABS contains many quantities that use powers. Some are simple geometry, such as areas and volumes. Later, section properties will also use powers. Knowing exponent rules helps you predict whether changing a dimension has a small effect or a large one.

> **Try it in ETABS 22:**
> 1. Compute $2^2$, $2^3$, and $2^4$
> 2. Notice that each extra exponent multiplies by another 2
> 3. Later, when ETABS reports section properties, look for units like mm², mm³, and mm⁴; the exponent tells you the kind of quantity

### G. Common Mistakes

1. **$h^3 \neq 3h$.** Cubing means multiplying three times, not multiplying by three.
2. **Adding exponents when bases differ.** $x^2 \cdot y^3 \neq xy^5$. The rule only applies to the same base.
3. **Forgetting exponent units.** If length is in meters, area is in $\mathrm{m^2}$ and volume is in $\mathrm{m^3}$.

### H. Chapter Practice Task — Comparing Two Block Sizes

> **Scenario:** Compare two square plan areas:
> - Square X: side $s = 3\ \mathrm{m}$
> - Square Y: side $s = 6\ \mathrm{m}$
>
> **Tasks:**
> 1. Calculate area $A = s^2$ for each
> 2. Find the ratio
> 3. Explain why doubling the side length does not merely double the area

> **Worked Solution:**
>
> **Square X:**
> $A_X = 3^2 = 9\ \mathrm{m^2}$
>
> **Square Y:**
> $A_Y = 6^2 = 36\ \mathrm{m^2}$
>
> **Ratio:** $A_Y/A_X = 36/9 = 4$
>
> Square Y has **4 times** the area because both side directions doubled: $2 \times 2 = 4$.

### I. Chapter Summary Table

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Square | $s^2$ | Area scaling | Plan and section geometry |
| Cube | $s^3$ | Volume scaling | Material quantity estimates |
| Square root | $\sqrt{x}$ | Solve for unknown side | Manual sizing calculations |

<div style="page-break-after: always;"></div>

## Chapter 9 — Introduction to Functions

### A. Word Bank

| Word | Pronunciation | Plain English Meaning | Used In |
|------|---------------|----------------------|---------|
| **Function** | "FUNK-shun" | A rule that turns each input into one output | $C(L)$ — cost as a function of length |
| **Input** | "IN-put" | The value you put in | $x$ — distance along the beam |
| **Output** | "OWT-put" | The value the function gives back | Cost, area, or total length |
| **Domain** | "doh-MAYN" | The set of allowed inputs | $0 \le x \le L$ for a beam |
| **Range** | "RAYNJ" | The set of possible outputs | $0 \le M \le M_{\max}$ |
| **Independent variable** | — | The input you control | Position $x$ |
| **Dependent variable** | — | The output that depends on the input | Cost $C$ |

### B. Concept Introduction

A function is a rule that takes one number in and gives one number out — every time the same way. Think of it as a vending machine: input a button code, output a specific snack. Every input has exactly one corresponding output.

In structural work, many quantities depend on other quantities. Total cost depends on length. Total grid length depends on spacing. Area depends on side length. A function is how we write that dependable relationship.

Later, structural result diagrams will also be functions. Those diagrams are easier to understand after force, support, and bending have been explained.

> **Real-world analogy:** A function is a recipe: you put in ingredients (input), follow a procedure (the rule), get out a dish (output). The same ingredients always give the same dish.

### C. What This Means in Measurement

Measurement relationships are functions because the same input gives the same output. If a material costs $120$ dollars per meter plus a fixed delivery fee of $500$, then a 10 m order always has the same cost.

That relationship can be written:

$$C(L) = 120L + 500$$

where $L$ is length and $C(L)$ is the cost for that length.

### D. The Math

Function notation: $f(x)$ — read as "f of x."

This is **not** $f$ times $x$. It is the value of the function $f$ when the input is $x$.

**Worked example.** If $f(x) = 2x + 3$:
- $f(0) = 2(0) + 3 = 3$
- $f(5) = 2(5) + 3 = 13$
- $f(-2) = 2(-2) + 3 = -1$

**Different inputs may give the same output:** the function $f(x) = x^2$ gives $f(2) = 4$ and $f(-2) = 4$. That's allowed.

**The same input always gives the same output:** that's the rule.

### E. Structural Engineering Application

Material order cost can be written as a function:

$$C(L) = 120L + 500$$

This is a function. Input $L$ (length in meters); output $C$ (cost).

**Problem.** Compute $C$ for $L = 0$, $5$, $10$, and $20$.

| $L$ [m] | $C(L) = 120L + 500$ |
|---------|----------------------|
| 0 | $500$ |
| 5 | $120(5) + 500 = 1{,}100$ |
| 10 | $120(10) + 500 = 1{,}700$ |
| 20 | $120(20) + 500 = 2{,}900$ |

**Domain:** $L \ge 0$ because negative length is not physically meaningful.
**Range:** $C \ge 500$ because the fixed delivery fee applies even when the variable length is zero.

### F. ETABS Connection

Many ETABS tables and diagrams are functions: one input location gives one output value. The physical diagrams are explained later. For now, the key idea is that a software table often pairs an input with a computed output.

> **Try it in ETABS 22:**
> 1. Make a small table with input length $L = 0, 5, 10, 20$
> 2. Compute output cost using $C(L) = 120L + 500$
> 3. Notice that every input has exactly one output
> 4. Later, ETABS result tables will use the same input-output pattern

### G. Common Mistakes

1. **Reading $f(x)$ as multiplication.** It is function notation, not "$f$ times $x$."
2. **Plotting input on the wrong axis.** By convention, input is horizontal ($x$-axis), output vertical ($y$-axis).
3. **Confusing the function rule with a single value.** $f(x) = 2x + 3$ is the rule; $f(5) = 13$ is one specific output.

### H. Chapter Practice Task — Tabulating a Cost Function

> **Scenario:** A material order has cost $C(L) = 85L + 250$, where $L$ is length in meters.
>
> **Tasks:**
> 1. Evaluate $C(L)$ at $L = 0, 4, 8, 12$
> 2. Identify the input and output
> 3. State the domain for a real material order

> **Worked Solution:**
>
> $C(0) = 85(0) + 250 = 250$
>
> $C(4) = 85(4) + 250 = 590$
>
> $C(8) = 85(8) + 250 = 930$
>
> $C(12) = 85(12) + 250 = 1{,}270$
>
> Input: length $L$. Output: cost $C$. For a real order, the domain is $L \ge 0$.

### I. Chapter Summary Table

| Concept | Notation | Engineering Use | ETABS Location |
|---------|----------|----------------|----------------|
| Function | $f(x)$ | Rule turning input to output | Every diagram |
| Cost as a function | $C(L)$ | Quantity estimating | Tables and reports |
| Layout as a function | $L(s)$ | Grid planning | Grid definition |
| Domain | $0 \le x \le L$ | Where the function is defined | Length of the member |

<div style="page-break-after: always;"></div>

> **End of Part 1.** You now know algebra well enough to write, rearrange, and solve every formula a structural engineer uses on a daily basis. In Part 2 we step into the physical world: forces, equilibrium, supports, and bending. Every formula from here forward will be a partner of a real physical phenomenon you can picture.

<div style="page-break-after: always;"></div>

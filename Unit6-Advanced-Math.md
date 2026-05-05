# Unit 6 — Time, Cycles, Convergence, and the Matrix Method

> So far every calculation has been at a single instant in time and in a single plane. This unit introduces the mathematical ideas that handle more: how structural behavior evolves over time (exponentials), how data spanning many orders of magnitude is read (logarithms), how structural quantities accumulate story by story (sequences), how ETABS solves structures with more unknowns than equilibrium equations (matrices), and how to know when an ETABS finite-element result has converged to a reliable answer (limits).

<div style="page-break-after: always;"></div>

## Chapter 22 — Polynomials and the Bending Moment Equation

### A. Achievement

After this section you can write and evaluate $V(x)$ and $M(x)$ — the shear and moment at any position along a uniformly loaded beam — recognize the parabolic shape of the moment diagram, and locate the maximum moment without reading a table.

### B. The Situation

The <abbr title="[→ Ch11] diagram of how the internal moment varies along the beam's length">bending moment diagram</abbr> you built by hand for short beams in Chapter 11 was plotted from a table of values. But for reinforcement design you need the moment at *any* position $x$ — for example, to decide where to curtail bars. The moment varies continuously along the beam, and it follows a function. That function is a polynomial.

### C. The Intuition

A polynomial is built from powers of $x$: $x^0$ (constant), $x^1$ (linear), $x^2$ (parabola), $x^3$ (S-curve), and so on. The **degree** is the highest power. For a simply supported beam under uniform load $w$:

- The <abbr title="[→ Ch11] internal horizontal shearing force at position x">shear force</abbr> $V(x) = R_A - wx$ — degree 1 (straight line)
- The bending moment $M(x) = R_A x - \frac{w}{2} x^2$ — degree 2 (parabola)

The shape of the SFD/BMD is not arbitrary — it comes directly from the degree of the polynomial.

**Why the shapes follow from degree:** Each meter along the beam, the uniform load $w$ adds another increment to the shear and another moment contribution. A constant load creates a linearly changing shear; integrating a linear shear gives a quadratic moment.

### D. Failure Case

A design engineer needs the moment at $x = 6\ \mathrm{m}$ on a $L = 10\ \mathrm{m}$ beam with $w = 8\ \mathrm{kN/m}$. The peak moment is $M_{max} = wL^2/8 = 100\ \mathrm{kN \cdot m}$ at mid-span. The engineer assumes the moment diagram is linear and interpolates: $M(6) = 100 \cdot (10-6)/5 = 80\ \mathrm{kN \cdot m}$.

The correct polynomial value: $M(6) = 40(6) - 4(36) = 240 - 144 = 96\ \mathrm{kN \cdot m}$.

The error is 17%. At a bar curtailment point, under-estimating the moment by 17% means the bars are cut too early — a potential flexural failure.

### E. The Rule

The shear force under a uniform load is a linear function of position; the bending moment is a quadratic. Evaluate them by substituting $x$ directly. Never interpolate linearly between known values unless you are sure the function is linear.

### F. The Formal Shorthand

For a simply supported beam, span $L$, uniform load $w$, reactions $R_A = R_B = wL/2$:

$$V(x) = \frac{wL}{2} - wx \qquad M(x) = \frac{wL}{2}\,x - \frac{w}{2}\,x^2$$

Maximum moment at $x = L/2$: $M_{max} = \frac{wL^2}{8}$

Roots: $M = 0$ at $x = 0$ and $x = L$.

### G. Full Worked Example

**Problem.** Beam: $L = 10\ \mathrm{m}$, $w = 8\ \mathrm{kN/m}$, simply supported.

Reactions: $R_A = R_B = 40\ \mathrm{kN}$.
$V(x) = 40 - 8x$ $\quad M(x) = 40x - 4x^2$

| $x$ (m) | $V$ (kN) | $M$ (kN·m) |
|---------|---------|----------|
| 0 | 40 | 0 |
| 2.5 | 20 | 75 |
| 5 | 0 | 100 |
| 7.5 | −20 | 75 |
| 10 | −40 | 0 |

Maximum moment at $x = 5\ \mathrm{m}$: $M = 100\ \mathrm{kN \cdot m}$. Consistent with $wL^2/8 = 100\ \checkmark$.

**Bar curtailment:** Bars can be curtailed (cut off) where $M < M_{required}$. If a second-layer bar is needed only where $M > 80\ \mathrm{kN \cdot m}$, find the range:
$40x - 4x^2 = 80 \Rightarrow 4x^2 - 40x + 80 = 0 \Rightarrow x^2 - 10x + 20 = 0$

Using the quadratic formula: $x = (10 \pm \sqrt{100-80})/2 = (10 \pm 4.47)/2$

$x_1 = 2.76\ \mathrm{m}$, $x_2 = 7.24\ \mathrm{m}$.

The second-layer bars are needed between $x = 2.76$ and $x = 7.24$ m.

### H. Practice Task

> **Scenario:** Simply supported beam $L = 8\ \mathrm{m}$, $w = 6\ \mathrm{kN/m}$.
>
> **Tasks:**
> 1. Write $V(x)$ and $M(x)$
> 2. Evaluate both at $x = 0, 2, 4, 6, 8$
> 3. Identify where $M$ is maximum
>
> **Answers:**
> 1. $R_A = R_B = 24\ \mathrm{kN}$; $V(x) = 24 - 6x$; $M(x) = 24x - 3x^2$
> 2. $V$: 24, 12, 0, −12, −24; $M$: 0, 36, 48, 36, 0
> 3. $M_{max} = 48\ \mathrm{kN \cdot m}$ at $x = 4\ \mathrm{m}$ (where $V = 0$)

### I. What You Now Know

The shear and moment along a beam are functions of position. Polynomials are the mathematical language for those functions. The degree of the polynomial tells you the shape of the diagram; the formula gives the exact value at any point.

| Function | Formula | Shape | Engineering use |
|---------|---------|-------|----------------|
| $V(x)$ — SS UDL | $wL/2 - wx$ | Linear | Bar spacing, shear design |
| $M(x)$ — SS UDL | $wLx/2 - wx^2/2$ | Parabolic | Bar curtailment, peak moment |
| $M_{max}$ | $wL^2/8$ | At mid-span | Quick sizing |

<div style="page-break-after: always;"></div>

## Chapter 23 — Proportionality: How Span Controls Deflection

### A. Achievement

After this section you can predict — without re-running ETABS — how deflection changes when you alter span, section depth, load, or material stiffness, using the proportional relationships embedded in the elastic deflection formula.

### B. The Situation

A beam fails the <abbr title="[→ Ch17] vertical displacement of a beam under load, must be below L/360 or similar limit">deflection</abbr> check: $\delta = 32\ \mathrm{mm} > L/360 = 28\ \mathrm{mm}$. The engineer needs to fix it. Options: increase section depth, add a support, use a stiffer material. Which change has the most impact? Without proportional reasoning, each option demands a full re-run. With it, you can evaluate every option mentally in seconds.

### C. The Intuition

Two quantities are **directly proportional** if doubling one doubles the other. They are **inversely proportional** if doubling one halves the other. A **power law** says that if one quantity scales by factor $f$, another scales by $f^n$.

The elastic deflection formula for a simply supported beam under uniform load:
$$\delta_{max} = \frac{5wL^4}{384EI}$$

Every quantity in this formula appears at a specific power:

| Change | Effect on $\delta$ |
|--------|------------------|
| Load $w$ doubles | $\delta$ doubles ($\propto w^1$) |
| Span $L$ doubles | $\delta$ multiplies by $2^4 = 16$ ($\propto L^4$) |
| Section depth $h$ doubles | $I \approx bh^3/12$ increases $8\times$, so $\delta$ reduces by $8\times$ ($\delta \propto 1/h^3$) |
| Material stiffness $E$ doubles | $\delta$ halves ($\propto 1/E$) |

Span has the most dramatic effect because it appears to the **fourth power**.

For a cantilever with point load $P$ at the tip:
$$\delta_{tip} = \frac{PL^3}{3EI}$$

Span here is cubed (not fourth power) because the loading pattern differs.

### D. Failure Case

A designer increases span from $6\ \mathrm{m}$ to $9\ \mathrm{m}$ (factor $1.5\times$) because a column is removed. They estimate deflection increases by $50\%$ (treating span as linear). The actual multiplier is $1.5^4 = 5.06$. The beam that previously deflected $8\ \mathrm{mm}$ now deflects $40.5\ \mathrm{mm}$ — five times more, not 1.5 times more. The design fails serviceability by a large margin.

### E. The Rule

Before touching the model, identify the power law for the quantity you are changing. For span and deflection: quartic ($L^4$). For depth and $I$: cubic ($h^3$). For everything else in the formula: first power. The answer to "what if I change X?" follows from raising the change factor to the appropriate power.

### F. The Formal Shorthand

$$\delta_{SS} = \frac{5wL^4}{384EI} \qquad \delta_{cant} = \frac{PL^3}{3EI}$$

Scaling rule: $\dfrac{\delta_2}{\delta_1} = \dfrac{w_2}{w_1} \cdot \left(\dfrac{L_2}{L_1}\right)^4 \cdot \dfrac{I_1}{I_2}$

For a rectangular section, $I = bh^3/12$, so $I_2/I_1 = (h_2/h_1)^3$ if width is constant.

### G. Full Worked Example

**Problem.** A beam deflects $\delta_1 = 12\ \mathrm{mm}$. The span increases from $L_1 = 6\ \mathrm{m}$ to $L_2 = 9\ \mathrm{m}$, and the depth increases from $h_1 = 400\ \mathrm{mm}$ to $h_2 = 600\ \mathrm{mm}$. Same width, same load/m, same material. Find the new deflection.

Span factor: $(9/6)^4 = 1.5^4 = 5.0625$
Depth factor: $(600/400)^3 = 1.5^3 = 3.375$; so $I_2/I_1 = 3.375$, meaning $\delta \propto 1/I$ decreases by factor $3.375$.

$$\delta_2 = 12 \times 5.0625 \times \frac{1}{3.375} = 12 \times 1.5 = 18\ \mathrm{mm}$$

Interpretation: the longer span demands more, but the deeper beam compensates. Net result: 50% more deflection. Still may fail serviceability — check against $L_2/360 = 9000/360 = 25\ \mathrm{mm}$.

### H. Practice Task

> **Scenario:** A cantilever carries $P = 20\ \mathrm{kN}$ at its tip. $L = 4\ \mathrm{m}$, $\delta = 10\ \mathrm{mm}$. Redesign to achieve $\delta \leq 5\ \mathrm{mm}$ by changing depth only (constant width, constant load).
>
> **Tasks:**
> 1. By what factor must $I$ increase?
> 2. By what factor must depth $h$ increase?
> 3. If original $h = 300\ \mathrm{mm}$, what depth is needed?
>
> **Answers:**
> 1. $I$ must double ($\delta \propto 1/I$, target factor = 2)
> 2. $h^3$ must double: $h_2/h_1 = 2^{1/3} = 1.26$
> 3. New depth = $300 \times 1.26 = 378\ \mathrm{mm}$ → use $400\ \mathrm{mm}$

### I. What You Now Know

Proportional reasoning lets you answer "what if?" questions without a full re-run. The quartic span exponent in $\delta \propto L^4$ is the single most important scaling relationship in beam design — a 20% longer span produces 2× more deflection.

| Relationship | Exponent | Rule of thumb |
|-------------|---------|--------------|
| $\delta$ vs $L$ | 4 | Doubling span → 16× deflection |
| $\delta$ vs $h$ (depth) | −3 | Doubling depth → ⅛ deflection |
| $\delta$ vs $w$ | 1 | Doubling load → 2× deflection |
| $\delta$ vs $E$ | −1 | Doubling stiffness → ½ deflection |

<div style="page-break-after: always;"></div>

## Chapter 24 — Exponential Functions: Time-Dependent Structural Behavior

### A. Achievement

After this section you can identify whether a time-varying structural quantity follows exponential growth or decay, evaluate an exponential function at a given time, and recognize where ETABS accounts for time-dependent material behavior.

### B. The Situation

A concrete slab is cast and you want to start loading it during construction. The design specifies $f'_c = 30\ \mathrm{MPa}$ at 28 days. Concrete gains strength rapidly at first, then slower and slower over time — an exponential-like curve. Without understanding this curve, you cannot answer whether 7-day strength is 50% or 80% of 28-day — and the wrong assumption risks cracking or collapse during construction.

### C. The Intuition

An exponential function has the variable as the exponent: $y = a \cdot b^x$ or $y = a \cdot e^{kx}$.

Small input changes produce large output changes at high values. The key characteristic: each equal-time step multiplies the quantity by the same factor.

> **Real-world analogy:** Folding paper doubles the thickness every fold. After 30 folds, the stack is 100 km high. That is exponential growth.

For structural engineering, exponentials describe time-dependent processes:
- **Concrete creep:** deformation approaches an asymptote as $\varepsilon(t) = \varepsilon_\infty(1 - e^{-t/\tau})$
- **Damped vibration:** amplitude decays as $A(t) = A_0\, e^{-\zeta\omega t}$
- **Fatigue:** each load cycle reduces remaining life multiplicatively

The <abbr title="[→ Ch3] rules for order of operations">exponent rules</abbr> from Chapter 3 apply here — $e^{-kt}$ means $e$ raised to the power $(-kt)$, not $(e^{-k}) \times t$.

### D. Failure Case

A creep analysis shows deformation reaching $12\ \mathrm{mm}$ at 100 days. An engineer assumes linear behavior: at 200 days, deformation = $24\ \mathrm{mm}$.

Actual: $\varepsilon(t) = \varepsilon_\infty(1 - e^{-t/\tau})$ with $\tau = 150$ days.
$\varepsilon(100) = \varepsilon_\infty \cdot 0.487$, so $\varepsilon_\infty = 12/0.487 = 24.6\ \mathrm{mm}$.
$\varepsilon(200) = 24.6(1 - e^{-200/150}) = 24.6(1 - 0.264) = 18.1\ \mathrm{mm}$ — not 24 mm.

Assuming linearity overstates long-term deflection by 33%, causing unnecessary (and expensive) remediation.

### E. The Rule

When a process slows as it approaches a limit (creep, temperature equalization, settling cracks), the curve is exponential decay toward an asymptote — not linear. When a process accelerates with no limit in sight, use exponential growth. If each equal-time interval multiplies by a fixed factor, the behavior is exponential.

### F. The Formal Shorthand

$$y = a \cdot e^{kx} \qquad (k > 0: \text{growth}, \quad k < 0: \text{decay})$$
$$\text{Creep: } \varepsilon(t) = \varepsilon_\infty\left(1 - e^{-t/\tau}\right) \quad (\tau = \text{time constant})$$
$$\text{Damping: } A(t) = A_0\, e^{-\zeta \omega t}$$

### G. Full Worked Example

**Problem — Concrete creep.** Long-term creep strain approaches $\varepsilon_\infty = 0.0012$. Time constant $\tau = 200$ days. Find creep strain at $t = 100$ and $t = 500$ days.

At $t = 100$:
$$\varepsilon(100) = 0.0012(1 - e^{-100/200}) = 0.0012(1 - e^{-0.5}) = 0.0012(1 - 0.6065) = 0.000472$$

39% of ultimate creep has occurred.

At $t = 500$:
$$\varepsilon(500) = 0.0012(1 - e^{-500/200}) = 0.0012(1 - e^{-2.5}) = 0.0012(1 - 0.082) = 0.001102$$

92% of ultimate creep. Beyond this point the curve is nearly flat — further time adds very little deformation.

### H. Practice Task

> **Scenario:** A floor vibrates with initial amplitude $A_0 = 8\ \mathrm{mm}$. The damping constant gives $A(t) = 8 \cdot e^{-0.3t}$ (t in seconds). Find amplitude at $t = 3\ \mathrm{s}$ and $t = 10\ \mathrm{s}$.
>
> **Answers:**
> - $A(3) = 8 e^{-0.9} = 8 \times 0.407 = 3.26\ \mathrm{mm}$
> - $A(10) = 8 e^{-3.0} = 8 \times 0.050 = 0.40\ \mathrm{mm}$
>
> The amplitude becomes negligible after ~10 s.

### I. What You Now Know

Exponential functions model time-dependent behavior in concrete and vibration. The time constant $\tau$ tells you how quickly the process reaches its limit — after $5\tau$, it is more than 99% complete.

| Curve | Formula | Engineering use |
|-------|---------|----------------|
| Growth | $a \cdot e^{kt}$, $k > 0$ | Bacteria, crack propagation |
| Decay | $a \cdot e^{-kt}$ | Damping, shrinkage |
| Asymptotic | $\varepsilon_\infty(1 - e^{-t/\tau})$ | Creep, consolidation |

<div style="page-break-after: always;"></div>

## Chapter 25 — Logarithms: Reading S-N Curves and Response Spectra

### A. Achievement

After this section you can read a log-scale plot (S-N fatigue curve, seismic response spectrum) correctly, convert between log scale and linear scale, and use a given log equation to solve for an unknown exponent or cycle count.

### B. The Situation

An S-N curve for a steel bolted connection is plotted on log-log axes. The x-axis runs from $10^4$ to $10^8$ cycles; the y-axis shows stress range. A connection is designed for a stress range of $100\ \mathrm{MPa}$. You read the graph and find the number of allowable cycles. But equal distances on the horizontal axis do not represent equal numbers of cycles — a halfway position corresponds to a geometric mean, not an arithmetic one. Misreading the scale gives a 50× error in fatigue life.

### C. The Intuition

A logarithm answers: "what power do I need to put on this base to get this number?" If $10^3 = 1000$, then $\log_{10}(1000) = 3$.

> **Real-world analogy:** Earthquake magnitude. Each step up the Richter scale represents 10× more energy. A magnitude-7 quake releases 10× the energy of a magnitude-6, and 100× the energy of a magnitude-5.

Logarithms appear wherever quantities span many orders of magnitude and equal ratios are more meaningful than equal differences:
- S-N fatigue curves (thousands to billions of cycles)
- Seismic response spectra (period axis)
- Soil consolidation settlement (log-time method)

Logarithms also undo exponentials — so if the <abbr title="[→ Ch24] y = a·e^(kt) — quantity multiplied by a fixed factor each time step">exponential</abbr> is the forward model, the logarithm inverts it to find the unknown exponent.

### D. Failure Case

On a log-scale S-N plot, a point appears visually halfway between $N = 10^4$ and $N = 10^8$ on the x-axis. An engineer treats the scale as linear and reads $N \approx 50{,}010{,}000$. The correct reading: halfway on a log scale means $10^{(4+8)/2} = 10^6 = 1{,}000{,}000$ cycles. The linear misread is 50× too high — the fatigue life is vastly overstated.

### E. The Rule

On a log axis, equal visual distances represent equal ratios, not equal differences. The midpoint between $10^a$ and $10^b$ is $10^{(a+b)/2}$ — the geometric mean. Always check whether a plot axis is linear or logarithmic before reading values.

### F. The Formal Shorthand

$$\log_b x = y \;\Leftrightarrow\; b^y = x \qquad \log_{10} 1000 = 3 \qquad \ln e = 1$$

**Log rules:**
$$\log(xy) = \log x + \log y \qquad \log(x/y) = \log x - \log y \qquad \log(x^n) = n\log x$$

S-N fatigue: $\log N = C - m \log \Delta\sigma$ (typical form; $C$ and $m$ from material class).

### G. Full Worked Example

**Problem — S-N fatigue.** Steel detail class has $\log N = 12 - 3 \log \Delta\sigma$. Stress range $\Delta\sigma = 80\ \mathrm{MPa}$. Find allowable cycles.

$$\log N = 12 - 3 \log(80) = 12 - 3(1.903) = 12 - 5.709 = 6.291$$
$$N = 10^{6.291} = 1.955 \times 10^6 \approx 2{,}000{,}000\ \text{cycles}$$

**Problem — Solve for stress range at $N = 10^7$ cycles:**
$$6.291 = \log N \text{ at } 80\ \text{MPa}$$

At $N = 10^7$: $7 = 12 - 3\log\Delta\sigma$ → $3\log\Delta\sigma = 5$ → $\log\Delta\sigma = 1.667$ → $\Delta\sigma = 10^{1.667} = 46.4\ \mathrm{MPa}$.

### H. Practice Task

> **Scenario:** Two earthquakes: M = 6.0 and M = 7.5. Energy ratio: $E_2/E_1 = 10^{1.5(M_2 - M_1)}$. Find the energy ratio.
>
> **Answer:** $E_2/E_1 = 10^{1.5 \times 1.5} = 10^{2.25} = 178$
>
> A magnitude-7.5 earthquake releases about 178 times the energy of a magnitude-6.0.

### I. What You Now Know

Logarithms are the language of multiplicative scales. Reading a log axis requires treating equal spacings as equal ratios. Fatigue life, seismic intensity, and sound pressure are all naturally measured in log units.

| Concept | Formula | Use |
|---------|---------|-----|
| Log definition | $\log_b x = y \Leftrightarrow b^y = x$ | Convert between log and linear |
| Log midpoint | $10^{(a+b)/2}$ | Read mid-axis on log plot |
| S-N curve | $\log N = C - m\log\Delta\sigma$ | Fatigue life prediction |
| Inverse of $e^x$ | $\ln(e^x) = x$ | Solve for unknown exponent |

<div style="page-break-after: always;"></div>

## Chapter 26 — Matrices: Why ETABS Can Solve Indeterminate Structures

### A. Achievement

After this section you can interpret $[K]\{d\} = \{F\}$ as a system of simultaneous equilibrium equations, solve a 2×2 example by hand, and explain why a propped cantilever requires a compatibility equation that equilibrium alone cannot provide.

### B. The Situation

A two-story frame has four unknown displacements. Each of the four <abbr title="[→ Ch8] ΣFx = 0, ΣFy = 0, ΣM = 0 at every joint">equilibrium</abbr> equations involves multiple displacements simultaneously — you cannot solve them one at a time. You need to solve all four together. This is a matrix equation. ETABS assembles and solves matrices with tens of thousands of rows — doing in milliseconds what would take months by hand.

Chapter 9 introduced propped cantilevers and continuous beams as **statically indeterminate** — more unknowns than equilibrium equations. The stiffness matrix is the key that unlocks them.

### C. The Intuition

A matrix is a grid of numbers. The **stiffness matrix** $[K]$ collects every member's resistance into one object. The displacement vector $\{d\}$ stacks all joint displacements. The load vector $\{F\}$ stacks all applied forces. The matrix equation

$$[K]\{d\} = \{F\}$$

is the whole-structure equilibrium statement written compactly.

**Why compatibility matters:** A simple spring gives $F = k \cdot d$. A propped cantilever has *two* unknown reactions but only two equilibrium equations ($\Sigma F_y = 0$ and $\Sigma M = 0$) — three unknowns, two equations. The third equation comes from **compatibility**: the deflection at the prop is zero (or known). Combining equilibrium with compatibility produces the extra equation needed.

For a propped cantilever of length $L$ with point load $P$ at distance $a$ from the fixed end, the prop reaction $R_B$ (from compatibility + equilibrium) is:
$$R_B = \frac{Pa^2(3L - a)}{2L^3}$$

This formula cannot be derived from equilibrium alone. It requires equating deflection at the prop (from the load) to zero. The stiffness matrix performs this bookkeeping automatically for any size structure.

### D. Failure Case

An engineer tries to solve a propped cantilever with equilibrium only:

$\Sigma F_y = 0$: $R_A + R_B = P$ → one equation, two unknowns.
$\Sigma M_A = 0$: $M_A + P \cdot a - R_B \cdot L = 0$ → still two unknowns.

The system is under-determined. Without compatibility, no unique answer exists. Guessing that $R_B = P/2$ (assuming symmetry that does not exist for an off-center load) gives the wrong reactions. The bending moment diagram is then wrong, and member sizing is based on incorrect demand.

### E. The Rule

Equilibrium gives three equations in 2D. Any structure with more than three unknown reactions is **statically indeterminate**. Solving it requires additional equations from deformation compatibility. The stiffness method provides these automatically via the matrix equation $[K]\{d\} = \{F\}$.

### F. The Formal Shorthand

$$[K]\{d\} = \{F\} \qquad \Leftrightarrow \qquad \{d\} = [K]^{-1}\{F\}$$

Matrix size = (number of DOF) × (number of DOF). A 5-story, 4-bay 3D building may have 50,000+ equations.

**Propped cantilever prop reaction:**
$$R_B = \frac{Pa^2(3L - a)}{2L^3}$$

### G. Full Worked Example

**Part 1 — 2×2 matrix solve.**

Two springs in series: $k_1 = 1000\ \mathrm{kN/m}$ (fixed to ground → joint 1), $k_2 = 500\ \mathrm{kN/m}$ (joint 1 → joint 2). Forces: $F_1 = 0$, $F_2 = 10\ \mathrm{kN}$.

Stiffness matrix:
$$[K] = \begin{bmatrix} k_1 + k_2 & -k_2 \\ -k_2 & k_2 \end{bmatrix} = \begin{bmatrix} 1500 & -500 \\ -500 & 500 \end{bmatrix}$$

Equations:
$$1500\,d_1 - 500\,d_2 = 0 \quad \Rightarrow \quad d_2 = 3\,d_1$$
$$-500\,d_1 + 500\,d_2 = 10 \quad \Rightarrow \quad 1000\,d_1 = 10 \quad \Rightarrow \quad d_1 = 0.010\ \mathrm{m}$$
$$d_2 = 0.030\ \mathrm{m}$$

**Part 2 — Propped cantilever.**

$L = 6\ \mathrm{m}$, $P = 40\ \mathrm{kN}$ at $a = 4\ \mathrm{m}$ from fixed end.

$$R_B = \frac{40 \times 4^2 \times (18 - 4)}{2 \times 216} = \frac{40 \times 16 \times 14}{432} = \frac{8960}{432} = 20.74\ \mathrm{kN}$$

From equilibrium: $R_A = 40 - 20.74 = 19.26\ \mathrm{kN}$.
Fixed-end moment: $M_A = 40(4) - 20.74(6) = 160 - 124.4 = 35.6\ \mathrm{kN \cdot m}$.

### H. Practice Task

> **Scenario:** 2-spring system with $k_1 = 800\ \mathrm{kN/m}$ and $k_2 = 400\ \mathrm{kN/m}$. Forces $F_1 = 5\ \mathrm{kN}$, $F_2 = -3\ \mathrm{kN}$.
>
> **Tasks:**
> 1. Write $[K]$
> 2. Write and solve the two equations for $d_1$ and $d_2$
>
> **Answers:**
> $[K] = \begin{bmatrix} 1200 & -400 \\ -400 & 400 \end{bmatrix}$;
> equations: $1200d_1 - 400d_2 = 5$, $-400d_1 + 400d_2 = -3$;
> adding: $800d_1 = 2$ → $d_1 = 0.0025\ \mathrm{m}$;
> $d_2 = (-3 + 400 \times 0.0025)/400 = (-3+1)/400 = -0.005\ \mathrm{m}$

### I. What You Now Know

The stiffness matrix is the mathematical heart of every structural analysis program. It converts the question "what are all the displacements?" into a single matrix equation. Compatibility — the physical requirement that connected parts move consistently — provides the extra equations that equilibrium alone cannot supply.

| Concept | Meaning | ETABS equivalent |
|---------|---------|-----------------|
| $[K]$ stiffness matrix | All member stiffnesses assembled | Built during model definition |
| $\{d\}$ displacement vector | All joint displacements | Output: joint displacements |
| $\{F\}$ load vector | All applied forces | Load cases |
| Compatibility | Deformations must be consistent | Embedded in $[K]$ formulation |
| Indeterminate | More unknowns than equilibrium provides | Requires full $[K]\{d\}=\{F\}$ |

<div style="page-break-after: always;"></div>

## Chapter 27 — Sequences, Series, and Limits: Cumulative Loads and FEM Convergence

### A. Achievement

After this section you can compute cumulative column axial loads story by story using an arithmetic series, and perform a mesh-convergence study in ETABS to confirm that a finite-element result is reliable.

### B. The Situation

**Part 1:** A 10-story building has identical floors each carrying $200\ \mathrm{kN}$ per column. How much does the ground-floor column carry? The pattern is simple — but what about checking each story's column? Doing this separately 10 times is tedious; an arithmetic series gives the formula once for all stories.

**Part 2:** You model a flat plate slab with a $1\ \mathrm{m}$ mesh and get $M_{max} = 76\ \mathrm{kN \cdot m}$ at a column. Should you trust this result, or is the mesh too coarse? The answer comes from the mathematical concept of a **limit** — and from running a convergence study.

### C. The Intuition

**Sequences and series:** A sequence is a list ($200, 400, 600, \ldots$). A series is the running sum ($200, 400, 600, \ldots$). For uniform floor loads, the axial load in a column at floor $n$ from the top is the sum of all floors above — an arithmetic series.

**Limits:** The finite element method divides a continuous structure into small elements. Each element approximates the real behavior. As elements become smaller, the FE solution approaches the exact mathematical answer — a limiting value. A convergence study shows this approach explicitly.

> **Real-world analogy for limits:** Walking halfway to a wall, then halfway again, repeatedly. You never touch the wall, but in the limit you arrive there. The wall is the converged FE result.

### D. Failure Case

A structural engineer is told the ground-floor column carries 15 stories of load. They compute $15 \times 300 = 4{,}500\ \mathrm{kN}$ correctly. But they also need to check intermediate columns — the 5th-floor column carries 10 stories, the 10th-floor column carries 5 stories. Doing this ad-hoc for 15 stories requires 15 separate sums. The arithmetic series formula gives all of them instantly.

For the FEM failure case: a slab-column connection modeled with a $1\ \mathrm{m}$ mesh gives $M = 76\ \mathrm{kN \cdot m}$; a $0.25\ \mathrm{m}$ mesh gives $M = 104\ \mathrm{kN \cdot m}$. The engineer who trusted the first mesh under-reinforced the slab by 27%.

### E. The Rule

**Sequences:** When a fixed amount is added at each step, use the arithmetic series formula to find any partial sum. **Limits/convergence:** A single FE result is not reliable unless you have verified it is consistent with a finer mesh. Run at least two mesh densities; accept the result when further refinement changes it by less than 2–5%.

### F. The Formal Shorthand

**Arithmetic sequence:** $a_n = a_1 + (n-1)d$

**Sum of $n$ terms:** $S_n = \dfrac{n}{2}(a_1 + a_n)$

**Limit notation:**
$$\lim_{h \to 0} f(h) = L \quad \text{(the function approaches } L \text{ as the step size shrinks)}$$

**Calculus connection** (no calculus course needed — just the result):
$$V(x) = \frac{dM}{dx} \quad \Rightarrow \quad \text{where } V = 0 \text{, } M \text{ is maximum}$$

This is why the shear diagram crossing zero marks the peak of the <abbr title="[→ Ch11] BMD — diagram of internal bending moment along a beam">BMD</abbr> — it was a memorized rule in Chapter 11, and now it is a taught consequence of the derivative being zero at a maximum.

### G. Full Worked Example

**Part 1 — Arithmetic series for story loads.**

10-story building, $P_{floor} = 200\ \mathrm{kN}$ per column per floor.

The axial load in the column at story $n$ (counting $n = 1$ at top) is:
$$P_n = n \times 200\ \mathrm{kN}$$

| Story from top | Axial load |
|----------------|-----------|
| 1 | 200 kN |
| 3 | 600 kN |
| 5 | 1000 kN |
| 10 (ground) | 2000 kN |

Ground-floor column: $S_{10} = \frac{10}{2}(200 + 2000) = 5 \times 2200 = 11{,}000\ \mathrm{kN}$? Wait — this would be correct only if loads accumulate non-uniformly. For the simpler case of $P_n = 200n$, the ground-floor load is simply $10 \times 200 = 2{,}000\ \mathrm{kN}$. The series formula applies when you need the *total load on a column that supports a group of differing stories* — for example, if floor loads vary: $P_1 = 150$, $P_2 = 180$, $P_3 = 200$, ... kN per story, then the base column carries $\sum P_i$.

For uniform loads, the column at story $n$ from the top carries $n \times P_{floor}$ — a sequence, not requiring the sum formula. The sum formula is needed when floor loads differ.

**Part 2 — Mesh convergence study.**

FE mesh convergence for slab-column moment:

| Mesh size (m) | $M_{max}$ (kN·m) |
|--------------|-----------------|
| 2.0 | 58 |
| 1.0 | 76 |
| 0.5 | 96 |
| 0.25 | 104 |
| 0.125 | 106 |

The result is converging toward approximately $106\ \mathrm{kN \cdot m}$. The difference between the last two meshes is $(106-104)/104 = 1.9\%$ — below the 2–5% threshold, so $106\ \mathrm{kN \cdot m}$ is the design value.

The $1\ \mathrm{m}$ mesh result ($76\ \mathrm{kN \cdot m}$) is 28% below the converged value — too unconservative for design.

### H. Practice Task

> **Part A:** A 6-story building has floor loads (per column) varying as: 150, 160, 170, 180, 190, 200 kN from top to bottom. Find the total axial load in the ground-floor column.
>
> **Answer:** $S = 150 + 160 + 170 + 180 + 190 + 200 = 1050\ \mathrm{kN}$ (or arithmetic series: $n=6$, $a_1=150$, $a_6=200$, $S = 6/2 \times 350 = 1050\ \mathrm{kN}$)
>
> **Part B:** A simply supported one-way slab ($L = 5\ \mathrm{m}$, 200 mm thick) is modeled in ETABS with 1 m mesh. Deflection = $\delta = 8.4\ \mathrm{mm}$. Refine to 0.5 m: $\delta = 8.1\ \mathrm{mm}$. Refine to 0.25 m: $\delta = 8.05\ \mathrm{mm}$. Is the result converged?
>
> **Answer:** Change from 0.5 m to 0.25 m: $(8.1 - 8.05)/8.1 = 0.6\%$ — well below 5%. The 0.25 m result is converged. Accept $\delta \approx 8.05\ \mathrm{mm}$.

### I. What You Now Know

Sequences and series give compact formulas for cumulative quantities like story axial loads. Limits formalize the convergence of FEM results — and explain why the BMD peak occurs where the SFD crosses zero. Together they complete the mathematical toolkit for reading and trusting ETABS output.

| Concept | Formula | Engineering use |
|---------|---------|----------------|
| Arithmetic sequence | $a_n = a_1 + (n-1)d$ | Story-by-story load pattern |
| Arithmetic series sum | $S_n = n(a_1 + a_n)/2$ | Total accumulated axial load |
| Limit | $\lim_{h\to 0} f(h) = L$ | FEM convergence |
| Derivative/shear rule | $V = dM/dx$ | Peak of BMD at $V = 0$ |
| Convergence study | Run 2+ mesh densities | Verify FE accuracy |

<div style="page-break-after: always;"></div>

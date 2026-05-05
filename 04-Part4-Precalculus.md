# PART 4 — PRECALCULUS FOR STRUCTURAL ENGINEERS

> Welcome to Part 4. With algebra, statics, and geometry behind you, you can now describe individual quantities precisely. Precalculus extends this to *relationships* between quantities — functions and their behavior. You'll learn the polynomial behind every bending moment diagram, the proportionality at the heart of beam design, the exponential math of concrete creep, the logarithms underlying seismic curves, and the matrices ETABS uses internally to solve every model.

<div style="page-break-after: always;"></div>

## Chapter 26 — Polynomials and the Bending Moment Equation

### A. Achievement

After this section you can recognize that the bending moment along a simply-supported beam under uniform load is a quadratic polynomial, evaluate $M(x)$ at any point, and identify the maximum moment and its location.

### B. The Situation

You are designing reinforcement for a beam. The moment is not the same everywhere along the beam — it varies. You need to know not just the peak value ($M_{max}$ at mid-span) but also the moment at any location $x$ to decide where to cut off bars. The function $M(x)$ is a polynomial, and understanding its shape tells you where the beam needs the most reinforcement.

### C. The Intuition

A polynomial is built from $x^0, x^1, x^2, x^3, \ldots$ — each multiplied by a coefficient. The **degree** is the biggest exponent. Linear polynomials are degree 1 (straight line); quadratic are degree 2 (parabola); cubic are degree 3 (S-curve).

In structural engineering, polynomial functions describe shear and moment along a beam. Recognizing the degree tells you the diagram's shape.


For a simply supported beam with a uniform load $w$ over span $L$:

- Shear force: $V(x) = \frac{wL}{2} - wx$ — degree 1 (linear)
- Bending moment: $M(x) = \frac{wL}{2}x - \frac{w}{2}x^2$ — degree 2 (parabolic)
- Deflection shape is often described by higher-degree polynomials; exact deflection formulas are introduced only when needed.

For this chapter, the key pattern is enough: a uniform load gives a linear shear diagram and a quadratic moment diagram. Chapter 33 explains the calculus bridge that connects the two diagrams.


**Formulas and Derivations**


**Adding polynomials.** Combine like terms (same exponent).
$(3x^2 + 2x) + (x^2 - 5) = 4x^2 + 2x - 5$

**Multiplying.**
$(x + 2)(x - 3) = x^2 - 3x + 2x - 6 = x^2 - x - 6$

**Factoring** (reverse of multiplying).
$x^2 - x - 6 = (x - 3)(x + 2)$

**Worked example.** $M(x) = 30x - 5x^2$. Find roots (where $M = 0$).

Factor: $x(30 - 5x) = 0$ → $x = 0$ or $x = 6$. The moment is zero at supports.


**Full Worked Examples**


**Problem.** A simply supported beam $L = 10\ \mathrm{m}$ carries $w = 8\ \mathrm{kN/m}$. Write $V(x)$ and $M(x)$, evaluate at $x = 0, 2.5, 5, 7.5, 10$, and identify the maximum moment.

Reactions: $R_A = R_B = 40$ kN.

$V(x) = 40 - 8x$
$M(x) = 40x - 4x^2$

| $x$ | $V$ | $M$ |
|-----|-----|-----|
| 0 | 40 | 0 |
| 2.5 | 20 | 75 |
| 5 | 0 | 100 |
| 7.5 | −20 | 75 |
| 10 | −40 | 0 |

Maximum at $x = 5$: $M_{\max} = 100\ \mathrm{kN \cdot m}$ (= $wL^2/8 = 8 \cdot 100/8$ ✓).


**ETABS Connection**


ETABS plots these polynomials as diagrams. Linear shear gives a straight line; parabolic moment gives a smooth curve.

> **Try it in ETABS 22:**
> 1. Build the 10 m beam, $w = 8\ \mathrm{kN/m}$
> 2. **Display > Show Frame Forces > Shear 2-2** — confirm linear, $V = \pm 40$ at supports
> 3. **Display > Show Frame Forces > Moment 3-3** — confirm parabola peaking at 100 kN·m
> 4. Deflection shapes are discussed separately after the force diagrams are understood

### D. Failure Case

A designer needs to know the moment at $x = 6$ m on a 10 m beam. Knowing $M_{max} = wL^2/8$ only, they assume the parabola is symmetric and compute $M(6) = M_{max} \cdot (1 - (6-5)^2/25) = M_{max} \cdot 0.96$ — close but wrong for this approach. The correct value uses the polynomial directly: $M(6) = 40(6) - 4(36) = 240 - 144 = 96\ \mathrm{kN \cdot m}$, while $M_{max} = 100\ \mathrm{kN \cdot m}$. The ratio is 0.96 — but this coincidence only holds for symmetric loading. For a non-symmetric problem, the polynomial approach is the only reliable one.

1. **Mixing up shear (linear) with moment (parabolic).** They're plotted on different diagrams; never confuse the shapes.
2. **Forgetting that maximum moment occurs where the shear diagram crosses zero.** Chapter 33 explains the calculus reason; the diagram rule is enough for this chapter.
3. **Not closing parentheses in computer formulas.** Many engineers swap $-w/2 \cdot x^2$ for $-w/2 x^2$ — algebraically the same but easily mistyped.

### E. The Rule

The shear force $V(x)$ along a simply-supported beam under UDL is a degree-1 polynomial (straight line); the bending moment $M(x)$ is a degree-2 polynomial (parabola). You can evaluate both at any point $x$ simply by substituting into the formula.

### F. The Formal Shorthand

$$V(x) = \frac{wL}{2} - wx \qquad M(x) = \frac{wL}{2}x - \frac{w}{2}x^2$$

$V = 0$ (and $M$ is maximum) at $x = L/2$. Roots of $M(x)$: at $x = 0$ and $x = L$.

### G. Full Worked Example

See the $L = 10\ \mathrm{m}$, $w = 8\ \mathrm{kN/m}$ worked example embedded in the Intuition section above.

### H. Practice Task — Simply Supported Polynomial Table

> **Scenario:** A simply supported beam has $L = 8\ \mathrm{m}$ and $w = 6\ \mathrm{kN/m}$. Its reaction at each end is $R = wL/2 = 24\ \mathrm{kN}$. Use $V(x)=24-6x$ and $M(x)=24x-3x^2$.
>
> **Tasks:**
> 1. Evaluate $V(x)$ and $M(x)$ at $x=0,2,4,6,8$
> 2. Identify where $M$ is largest
> 3. Sketch the straight shear line and parabolic moment curve

> **Worked Solution:**
>
> | $x$ | $V(x)$ | $M(x)$ |
> |-----|--------|--------|
> | 0 | 24 | 0 |
> | 2 | 12 | 36 |
> | 4 | 0 | 48 |
> | 6 | -12 | 36 |
> | 8 | -24 | 0 |
>
> Maximum moment is $48\ \mathrm{kN\cdot m}$ at mid-span where shear crosses zero.
>
> **ETABS:** Build the same simply supported beam, apply UDL, run analysis, and compare the SFD/BMD values.

### I. What You Now Know

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Polynomial degree | Determines diagram shape | Visual check | Frame Forces diagrams |
| $V(x)$ for SS UDL | $wL/2 - wx$ | Linear shear | Shear 2-2 |
| $M(x)$ for SS UDL | $wLx/2 - wx^2/2$ | Parabolic moment | Moment 3-3 |
| Max moment | $wL^2/8$ at mid-span | Quick design | Peak of BMD |

<div style="page-break-after: always;"></div>

## Chapter 27 — Rational Functions and Proportionality: How Span Controls Deflection

### A. Achievement

After this section you can predict — without recalculating — how deflection changes when span, stiffness, or load changes, using the proportionality rules in the elastic deflection formula.

### B. The Situation

A beam passes the strength check (moment demand < moment capacity) but fails the deflection check: $\delta = 32\ \mathrm{mm} > L/360 = 28\ \mathrm{mm}$. The engineer needs to fix it. Options: increase $I$ (deeper section), decrease $L$ (add support), or accept a higher-stiffness material. Which change has the most effect? Without understanding proportionality, every option requires a full recalculation. With it, you can reason directly: $\delta \propto L^4/I$ means halving $L$ cuts deflection by 16×.

### C. The Intuition

Two quantities are **directly proportional** if their ratio is constant: $y/x = k$. They are **inversely proportional** if their product is constant: $xy = k$. Many structural relationships are proportionalities — understanding them lets you predict how a result changes when an input changes, without redoing the whole calculation.


| Quantity | Proportional to | Reason |
|---------|-----------------|--------|
| Stress $\sigma$ | $\propto P$ (force) | $\sigma = P/A$ |
| Stress $\sigma$ | $\propto 1/A$ (area) | $\sigma = P/A$ |
| Beam deflection $\delta$ | $\propto w$ (load) | More load ⇒ more deflection |
| Beam deflection $\delta$ | $\propto L^4$ (span) | Span has a very strong effect |
| Beam deflection $\delta$ | $\propto 1/I$ | Larger moment of inertia ⇒ less deflection |
| Beam deflection $\delta$ | $\propto 1/E$ | Stiffer material ⇒ less deflection |

Here **deflection** means vertical movement of a beam under load. This chapter first uses deflection for scaling, then introduces two common exact elastic formulas. The most striking scaling is **$\delta \propto L^4$**: doubling span multiplies deflection by 16.

Now that Part 3 has introduced moment of inertia $I$ and Chapter 16 introduced modulus $E$, the common elastic deflection formulas can be used responsibly:

| Beam and load | Maximum deflection |
|---------------|--------------------|
| Simply supported beam, uniform load $w$ | $\delta_{max} = \dfrac{5wL^4}{384EI}$ |
| Cantilever, point load $P$ at free end | $\delta_{tip} = \dfrac{PL^3}{3EI}$ |

Where:
- $w$ = load per length
- $P$ = point load
- $L$ = span or cantilever length
- $E$ = modulus of elasticity
- $I$ = moment of inertia

These formulas explain the proportionality table above. For example, in the simply supported formula, $L^4$ appears in the numerator, so span has a very strong effect. $E$ and $I$ appear in the denominator, so stiffer material or a stiffer section reduces deflection.


**Formulas and Derivations**


**Direct proportion:** $y = kx$ → if $x$ scales by $f$, $y$ scales by $f$.

**Inverse proportion:** $y = k/x$ → if $x$ scales by $f$, $y$ scales by $1/f$.

**Power law:** $y = kx^n$ → if $x$ scales by $f$, $y$ scales by $f^n$.

**Worked example.** A beam deflects 5 mm under load. If span doubles, by what factor does deflection grow?

Since $\delta \propto L^4$, doubling $L$ multiplies $\delta$ by $2^4 = 16$. New deflection ≈ $80$ mm.

**Exact formula example.** A simply supported steel beam has $w = 8\ \mathrm{kN/m}$, $L = 6\ \mathrm{m}$, $E = 200{,}000\ \mathrm{MPa}$, and $I = 8.0 \times 10^8\ \mathrm{mm^4}$. Find maximum deflection.

Use consistent units: $w = 8\ \mathrm{N/mm}$, $L = 6000\ \mathrm{mm}$, $E = 200{,}000\ \mathrm{N/mm^2}$.

$$\delta_{max} = \dfrac{5wL^4}{384EI} = \dfrac{5(8)(6000^4)}{384(200{,}000)(8.0 \times 10^8)} = 8.44\ \mathrm{mm}$$

This is the full calculation that earlier chapters only previewed qualitatively.


**Full Worked Examples**


**Problem.** A 6 m beam deflects 8 mm. Span is increased to 9 m (factor 1.5×) with the same beam, same load per length. Predict the new deflection.

$\delta_{new}/\delta_{old} = (L_{new}/L_{old})^4 = 1.5^4 = 5.0625$
$\delta_{new} = 8 \times 5.0625 = 40.5\ \mathrm{mm}$

**Problem.** Same beam, original 6 m span, but you double the moment of inertia (deeper beam). Predict deflection.

$\delta \propto 1/I$ → factor 1/2 → new deflection = 4 mm.

These shortcuts let you size members in seconds.


**ETABS Connection**


ETABS will compute exact deflections — but proportional reasoning before running ETABS lets you predict whether a design change moves the answer the right direction and by roughly how much. After running, proportionality also helps you sanity-check the result.

> **Try it in ETABS 22:**
> 1. Run a model; note max deflection
> 2. Modify section depth (which scales $I$ by some factor)
> 3. Re-run; verify the new deflection follows the predicted proportional change

### D. Failure Case

A beam fails the deflection check. The engineer doubles the span ($L \to 2L$) to allow for a mid-support — wait, that would increase deflection. Instead, they propose a deeper section ($h \to 2h$, doubling the depth, which makes $I$ approximately 8× larger). Deflection ratio: $\delta_{new}/\delta_{old} = 1/8 = 12.5\%$. The check now passes. An engineer who does not know $\delta \propto 1/I$ and $I \propto h^3$ would need a full ETABS re-run to discover this result.

1. **Treating $L$ linearly when it's quartic.** Doubling span \neq\ doubling deflection.
2. **Mixing $E$ and $I$ scaling.** They're independent factors in $\delta \propto 1/(EI)$.
3. **Forgetting the load also scales.** If span doubles AND $w$ stays per-meter, the total load also doubles — additional factor.

### E. The Rule

Before running a full recalculation, identify the proportionality. For span: $\delta \propto L^4$. For depth: $I \propto h^3$, so $\delta \propto 1/h^3$. For load: $\delta \propto w$. Multiply the known result by the ratio of changed quantities raised to the appropriate power.

### F. The Formal Shorthand

$$\delta_{SS} = \frac{5wL^4}{384EI} \qquad \delta_{cant} = \frac{PL^3}{3EI}$$

$$\frac{\delta_2}{\delta_1} = \left(\frac{L_2}{L_1}\right)^4 \cdot \frac{I_1}{I_2} \cdot \frac{w_2}{w_1}$$

### G. Full Worked Example

See the proportionality table and the 5 m vs 7 m beam comparison embedded in the Intuition section above.

### H. Practice Task — Compare Two Beam Designs

> **Scenario:** Original: $L = 5$ m, $h = 400$ mm, $\delta = 6$ mm. New: $L = 7$ m, $h = 600$ mm. Same width, same load per meter, same material. Predict $\delta_{new}$.
>
> **Worked Solution:**
>
> Span ratio: $7/5 = 1.4$. $L^4$ factor: $1.4^4 = 3.842$
> Depth ratio: $600/400 = 1.5$. $I$ factor: $1.5^3 = 3.375$. So $1/I$ factor: $1/3.375 = 0.296$.
> Combined: $\delta_{new} = 6 \times 3.842 \times 0.296 = 6.83\ \mathrm{mm}$
>
> **ETABS:** Build both beams, compare actual deflections — within a few percent.

### I. What You Now Know

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Direct proportion | $y \propto x$ | Stress vs load, deflection vs load | Result scaling |
| Inverse proportion | $y \propto 1/x$ | Stress vs area, deflection vs stiffness | — |
| Span effect | $\delta \propto L^4$ | Span-doubles ⇒ 16× δ | Show Deformed Shape |
| Inertia effect | $\delta \propto 1/I$ | Beam depth choice | Section properties |
| SS UDL deflection | $5wL^4/(384EI)$ | Exact serviceability check | Deformed shape/table output |
| Cantilever tip deflection | $PL^3/(3EI)$ | Exact cantilever check | Deformed shape/table output |

<div style="page-break-after: always;"></div>

## Chapter 28 — Exponential Functions: Time-Dependent Structural Behavior

### A. Achievement

After this section you can identify whether a time-varying structural quantity (concrete strength gain, creep deformation, damping amplitude) follows exponential growth or decay, and read the relevant curve to estimate a value at a given time.

### B. The Situation

A concrete slab is cast and you need to start loading it for construction. The design specifies $f'_c = 30\ \mathrm{MPa}$ at 28 days. After 7 days, how strong is the concrete? The strength gain follows an exponential-like curve. Without understanding the shape of exponential growth, you can't answer whether 7-day strength is 50% or 80% of 28-day strength — and the wrong assumption risks construction overload cracking.

### C. The Intuition

An exponential function has the variable as the exponent. Small input changes can produce huge output changes — exponentials grow (or decay) rapidly.

> **Real-world analogy:** Folding paper. Each fold doubles the thickness. After 30 folds, the stack is over 100 km tall. That is exponential growth.


In structural engineering, exponentials describe time-dependent behavior:
- **Concrete strength gain:** $f_c(t) = f_{c,28} \cdot \frac{t}{4 + 0.85 t}$ (a related curve)
- **Creep deformation:** $\varepsilon_{creep}(t) = \varepsilon_\infty (1 - e^{-t/\tau})$
- **Fatigue cycles to failure:** stress vs cycles often a power law (S-N curve), but cycle damage often modeled with exponentials
- **Damped vibration:** amplitude decays as $A_0 e^{-\zeta \omega t}$


**Formulas and Derivations**


General form: $y = a \cdot b^x$ where $a$ = initial value, $b$ = growth factor.

For natural exponential: $y = a \cdot e^{kx}$ where $e \approx 2.71828$.
- $k > 0$: growth
- $k < 0$: decay

**Worked example.** Bacteria triple every hour. Starting at 100, find population after 5 hours.
$N(t) = 100 \cdot 3^t$ → $N(5) = 100 \cdot 243 = 24{,}300$.

**Worked example (decay).** A vibration amplitude $A_0 = 10$ mm decays with $\zeta = 0.05$ at frequency $\omega = 10$ rad/s. Amplitude after $t = 1$ s:
$A = 10 \cdot e^{-0.05 \cdot 10 \cdot 1} = 10 \cdot e^{-0.5} = 10 \cdot 0.6065 = 6.07\ \mathrm{mm}$


**Full Worked Examples**


**Problem (concrete creep).** Long-term creep deformation approaches a final value $\varepsilon_\infty = 0.001$. The time constant is $\tau = 200$ days. Find creep strain at $t = 100$ days.

$\varepsilon(100) = 0.001 (1 - e^{-100/200}) = 0.001 (1 - e^{-0.5}) = 0.001 (1 - 0.6065) = 0.001 \cdot 0.3935 = 0.000394$

So 39% of ultimate creep has occurred at 100 days.


**ETABS Connection**


ETABS supports time-dependent material modeling for creep and shrinkage. **Define > Materials > Modify/Show > Time Dependent Properties** lets you specify the creep coefficient curve (often based on ACI or CEB-FIP, which use exponential / power-law forms).

> **Try it in ETABS 22:**
> 1. **Define > Materials > Concrete > Modify/Show**
> 2. Click **Time Dependent Properties**
> 3. Select ACI 209R-92 or CEB-FIP MC90 — both internally use exponential-style creep curves
> 4. Run a staged construction analysis to see creep effects accumulate over time

### D. Failure Case

A creep analysis shows deformation reaching 12 mm after 100 days. An engineer assumes linear behavior: after 200 days, deformation = 24 mm. But creep follows $\varepsilon(t) = \varepsilon_{\infty}(1 - e^{-t/\tau})$, which approaches an asymptote. After 200 days, the deformation is closer to 14 mm — not 24 mm. Assuming linearity when the function is exponential overstates long-term deformation, potentially causing unnecessary remediation.

1. **Confusing $b^x$ with $x^b$.** Exponential vs power; very different functions.
2. **Sign of decay exponent.** $e^{-kt}$ decays toward 0; $e^{+kt}$ explodes upward.
3. **Forgetting initial value.** $a$ scales the entire curve; without it the answer is off by orders of magnitude.

### E. The Rule

An exponential function $y = a \cdot e^{kx}$ grows or decays at a rate proportional to the current value. It has a constant ratio between successive equal intervals. If the rate of change looks constant, use linear. If it looks like "each period multiplies by a fixed factor," use exponential.

### F. The Formal Shorthand

$$y = a \cdot e^{kx} \quad (k > 0: \text{growth},\ k < 0: \text{decay}) \qquad y = a \cdot e^{-t/\tau} \quad (\tau = \text{time constant})$$

### G. Full Worked Example

See the concrete strength and damped vibration examples embedded in the Intuition section above.

### H. Practice Task — Vibration Amplitude Decay

> **Scenario:** A floor vibrates with initial amplitude 5 mm. Damping constant gives decay factor $0.92$ per cycle (each cycle, amplitude drops to 92%). After how many cycles is amplitude < 1 mm?
>
> **Worked Solution:**
>
> $A(n) = 5 \cdot 0.92^n < 1$
> $0.92^n < 0.2$
> Taking logs (Chapter 29): $n \cdot \log 0.92 < \log 0.2$ → $n > \log 0.2 / \log 0.92 = -0.699 / -0.0362 = 19.3$
> Need 20 cycles.
>
> **ETABS:** Run **Time History Analysis** → plot acceleration response → confirm exponential decay envelope.

### I. What You Now Know

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Exponential growth | $y = a \cdot b^x$, $b > 1$ | Strength gain over time | Time-dependent material |
| Exponential decay | $y = a \cdot e^{-kt}$ | Creep, vibration damping | Damping ratio settings |
| Natural exponential | $y = a \cdot e^{kx}$ | Continuous processes | — |

<div style="page-break-after: always;"></div>

## Chapter 29 — Logarithms: Reading S-N Curves and Response Spectra

### A. Achievement

After this section you can read a log-scale plot (S-N curve, response spectrum) correctly, convert between log scale and linear scale, and use a given log equation to solve for an unknown exponent or cycle count.

### B. The Situation

An S-N (stress vs. cycles) fatigue curve for steel is plotted on log-log axes. The x-axis shows $10^4$ to $10^8$ cycles; the y-axis shows stress range. A connection is designed for a stress range of $100\ \mathrm{MPa}$. Reading the allowable number of cycles from the plot requires understanding logarithmic scaling — where equal distances on the axis represent multiplication, not addition.

### C. The Intuition

A logarithm answers the question: "what exponent do I need to put on this base to get this number?" If $10^2 = 100$, then $\log_{10} 100 = 2$.

> **Real-world analogy:** The Richter scale for earthquake magnitude is logarithmic. A magnitude-7 quake releases 10× the energy of magnitude-6, and 100× the energy of magnitude-5.


Logarithms appear wherever quantities span many orders of magnitude:
- Earthquake magnitudes (Richter scale)
- Sound levels (decibels)
- Soil consolidation (settlement vs log time)
- Fatigue (S-N curves often plotted log-log)
- Response spectrum diagrams (period axis often log scale)


**Formulas and Derivations**


**Definitions:**
- $\log_{10} x$ = "log base 10 of x" = power of 10 that gives x
- $\ln x$ = $\log_e x$ = "natural log of x"

**Inverse of exponential:** $\log_b (b^x) = x$ and $b^{\log_b x} = x$.

**Log rules:**
- $\log(ab) = \log a + \log b$
- $\log(a/b) = \log a - \log b$
- $\log(a^n) = n \log a$

**Common values to know:**
- $\log_{10} 1 = 0$
- $\log_{10} 10 = 1$
- $\log_{10} 100 = 2$
- $\log_{10} 1000 = 3$
- $\ln 1 = 0$
- $\ln e = 1$
- $\ln 10 \approx 2.303$

**Worked example.** Solve $10^x = 500$ for $x$.
$x = \log_{10} 500 = \log_{10}(5 \cdot 100) = \log 5 + 2 = 0.699 + 2 = 2.699$


**Full Worked Examples**


**Problem (decibels).** A noise source has sound pressure $p = 0.5\ \mathrm{Pa}$. Reference is $p_0 = 2 \times 10^{-5}\ \mathrm{Pa}$. Find sound level in dB.

$L = 20 \log_{10}(p/p_0) = 20 \log_{10}(0.5 / 0.00002) = 20 \log_{10}(25{,}000) = 20 \cdot 4.398 = 87.96\ \mathrm{dB}$

**Problem (S-N curve).** Steel fatigue life $N$ at stress range $\Delta\sigma$ follows $\log N = 12 - 3 \log \Delta\sigma$. Find $N$ for $\Delta\sigma = 100\ \mathrm{MPa}$.

$\log N = 12 - 3 \log 100 = 12 - 6 = 6$ → $N = 10^6 = 1{,}000{,}000$ cycles.


**ETABS Connection**


ETABS plots response spectra on log-log axes (period vs spectral acceleration). Reading these correctly requires understanding logs.

> **Try it in ETABS 22:**
> 1. **Define > Functions > Response Spectrum** → choose ASCE 7-22
> 2. The plot has logarithmic period axis (T)
> 3. A doubling of period corresponds to a fixed spacing on the log axis — not a fixed proportional spacing on a linear axis

### D. Failure Case

On a log-scale S-N plot, a point at $N = 10^6$ cycles looks halfway between $10^4$ and $10^8$. An engineer reading the axis treats it linearly: "halfway between 10,000 and 100,000,000 is 50,010,000." The actual value is $10^6 = 1{,}000{,}000$ — not 50 million. Misreading a log axis by ignoring the logarithmic spacing leads to a 50× error in estimated fatigue life.

1. **Confusing $\log$ and $\ln$.** Default base in scientific contexts is often $e$ (natural); in engineering codes often 10. Read the context.
2. **Log of negative or zero.** $\log 0 = -\infty$; $\log(-x)$ is undefined for real numbers.
3. **Mishandling the log of a sum.** $\log(a + b) \neq \log a + \log b$.

### E. The Rule

A log scale turns multiplication into addition. On a log-scale axis, equal visual distances represent equal multiplying factors, not equal additions. To read a value at a halfway point between $10^4$ and $10^8$, take the geometric mean: $\sqrt{10^4 \cdot 10^8} = 10^6$.

### F. The Formal Shorthand

$$\log_b(xy) = \log_b x + \log_b y \qquad \log_b(x^n) = n \log_b x \qquad \ln x = \log_e x$$

### G. Full Worked Example

See the S-N curve and Richter scale examples embedded in the Intuition section above.

### H. Practice Task — Earthquake Energy Ratio

> **Scenario:** Two earthquakes: M=6.0 and M=7.5. Energy ratio $E_2/E_1 = 10^{1.5(M_2 - M_1)}$. Find energy ratio.
>
> **Worked Solution:**
>
> $E_2/E_1 = 10^{1.5 \cdot 1.5} = 10^{2.25} = 177.8$ → 7.5 magnitude releases ~178× the energy of 6.0.
>
> **ETABS:** Although ETABS doesn't compute energy directly, the spectral acceleration scaling between magnitudes propagates into seismic load magnitudes — a 7.5 design region produces roughly an order-of-magnitude larger seismic forces than a 6.0 region.

### I. What You Now Know

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Logarithm | $\log_b x = y \Leftrightarrow b^y = x$ | Many-orders-of-magnitude data | Response spectrum axis |
| dB | $L = 20\log(p/p_0)$ | Sound, vibration | Vibration analysis output |
| S-N curve | $\log N = a - b \log \Delta\sigma$ | Fatigue life | Manual / external |

<div style="page-break-after: always;"></div>

## Chapter 30 — Matrices: Why ETABS Can Solve Indeterminate Structures

### A. Achievement

After this section you can interpret $[K]\{d\} = \{F\}$ as a system of simultaneous equations, solve a 2×2 example by hand, and understand why matrix size grows with model complexity.

### B. The Situation

A two-story frame has four unknown displacements and four equilibrium equations. The equilibrium equations contain combinations of unknowns — each equation involves multiple displacements. You cannot solve them one at a time; they must be solved simultaneously. This is a matrix equation. ETABS assembles and solves matrices with thousands of rows — doing what would take months by hand.

### C. The Intuition

A matrix is a grid of numbers organized in rows and columns. ETABS's entire numerical engine is built on matrices — the **stiffness matrix** $[K]$ relates joint displacements $\{d\}$ to applied forces $\{F\}$ through:
$$[K]\{d\} = \{F\}$$

For a 5-story building, this matrix has thousands of rows and columns. Solving it is the "Run Analysis" step.


A simple spring: $F = k \cdot d$. One spring has one stiffness and one displacement. A real structure has thousands of joints, each with up to 6 DOFs, all connected by elements with their own stiffnesses. Stacking all these one-spring relations into a matrix equation is exactly the **stiffness method** — the foundation of every structural analysis software.


**Formulas and Derivations**


**A 2×2 matrix:**
$A = \begin{bmatrix} 2 & 3 \\ 1 & 4 \end{bmatrix}$

**Addition** (same dimensions only): add corresponding elements.
$\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} + \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix} = \begin{bmatrix} 6 & 8 \\ 10 & 12 \end{bmatrix}$

**Scalar multiplication:** multiply every element.
$3 \cdot \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} = \begin{bmatrix} 3 & 6 \\ 9 & 12 \end{bmatrix}$

**Matrix multiplication** (rows × columns):
$\begin{bmatrix} a & b \\ c & d \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} ax + by \\ cx + dy \end{bmatrix}$

**Worked example.**
$\begin{bmatrix} 2 & 3 \\ 1 & 4 \end{bmatrix} \begin{bmatrix} 5 \\ 6 \end{bmatrix} = \begin{bmatrix} 2(5) + 3(6) \\ 1(5) + 4(6) \end{bmatrix} = \begin{bmatrix} 28 \\ 29 \end{bmatrix}$


**Full Worked Examples**


**Problem.** A 2-DOF system: two springs in line, joints 1 and 2. Spring 1 (between ground and joint 1) has $k_1 = 1000\ \mathrm{kN/m}$. Spring 2 (between joints 1 and 2) has $k_2 = 500\ \mathrm{kN/m}$. Apply forces $F_1 = 0, F_2 = 10\ \mathrm{kN}$. Find displacements $d_1, d_2$.

The stiffness matrix:
$[K] = \begin{bmatrix} k_1 + k_2 & -k_2 \\ -k_2 & k_2 \end{bmatrix} = \begin{bmatrix} 1500 & -500 \\ -500 & 500 \end{bmatrix}$

Equation: $[K]\{d\} = \{F\}$:
$\begin{bmatrix} 1500 & -500 \\ -500 & 500 \end{bmatrix} \begin{bmatrix} d_1 \\ d_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 10 \end{bmatrix}$

By inverting (or just solving the two equations):
$1500 d_1 - 500 d_2 = 0$ → $d_2 = 3 d_1$
$-500 d_1 + 500 d_2 = 10$ → $-500 d_1 + 1500 d_1 = 10$ → $d_1 = 10/1000 = 0.01\ \mathrm{m}$
Then $d_2 = 0.03\ \mathrm{m}$.

This trivial 2×2 example is the seed of all structural analysis software.

**Reintroducing indeterminate beams.** Chapter 14 identified propped cantilevers and continuous beams as **indeterminate** because they have more unknown reactions than the three 2D equilibrium equations can solve. The missing ingredient is not another force-balance equation; it is **compatibility**: connected parts of the structure must deform together.

The stiffness method handles this by solving for displacements first:

$$[K]\{d\} = \{F\}$$

Once ETABS finds the displacement vector $\{d\}$, it computes reactions and member forces. That is why ETABS can solve:
- A propped cantilever, where the prop force depends on beam stiffness.
- A two-span continuous beam, where the middle support moment depends on how both spans deform together.

For a common special case, a propped cantilever of length $L$ with point load $P$ at distance $a$ from the fixed end has prop reaction:

$$R_B = \dfrac{Pa^2(3L-a)}{2L^3}$$

This formula is not from equilibrium alone. It comes from combining equilibrium with deformation compatibility. That is the same logic the stiffness matrix applies automatically to more complicated buildings.

**Worked example.** A propped cantilever has $L = 6\ \mathrm{m}$ and $P = 40\ \mathrm{kN}$ at $a = 4\ \mathrm{m}$ from the fixed end.

$$R_B = \dfrac{40(4^2)(3(6)-4)}{2(6^3)} = \dfrac{40(16)(14)}{432} = 20.74\ \mathrm{kN}$$

After $R_B$ is known, the remaining fixed-end vertical reaction and fixed-end moment can be found using equilibrium. The key lesson is sequencing: equilibrium identifies the unknowns, deformation compatibility supplies the extra equation, and the stiffness method scales that idea to full models.


**ETABS Connection**


When you click **Analyze > Run Analysis**, ETABS:
1. Builds the global stiffness matrix $[K]$ (potentially 10,000s of equations)
2. Builds the load vector $\{F\}$
3. Solves $\{d\} = [K]^{-1}\{F\}$ for displacements
4. Back-computes member forces from displacements

Every result you see — reactions, member forces, deflections — descends from this single matrix operation.

> **Try it in ETABS 22:**
> 1. After running analysis, **File > Show Output Files > Analysis Log**
> 2. Look for "Number of equations" or "Matrix factorization" — these are the stiffness matrix metrics
> 3. A 5-story 4-bay building typically has ~10,000–50,000 equations

### D. Failure Case

An engineer has three equations relating three unknown displacements but tries to solve them one at a time: "Fix joint 1's displacement first." But each equation has all three unknowns — fixing one requires knowing the others. You cannot solve coupled equations sequentially. This is why ETABS solves the entire $[K]\{d\} = \{F\}$ system at once as a matrix equation.

1. **Multiplying matrices in wrong order.** $[A][B] \neq [B][A]$ in general.
2. **Trying to add matrices of different sizes.** Forbidden.
3. **Not checking if matrix is invertible.** A singular stiffness matrix means the structure is unstable (a mechanism). ETABS will throw an error.

### E. The Rule

The stiffness method assembles every member's stiffness contribution into a global stiffness matrix $[K]$. Solving $[K]\{d\} = \{F\}$ simultaneously gives all joint displacements. You cannot split the matrix equation into scalar equations and solve them one at a time — the coupling is the whole point.

### F. The Formal Shorthand

$$[K]\{d\} = \{F\} \quad \Leftrightarrow \quad \{d\} = [K]^{-1}\{F\}$$

$$\text{Size of } [K] = \#\text{DOF} \times \#\text{DOF} \quad (\text{grows with model complexity})$$

### G. Full Worked Example

See the 2-spring system example in the Practice Task below, and the Intuition section above.

### H. Practice Task — Hand-Solve a 2×2 System

> **Scenario:** A 2-spring, 2-joint system with $k_1 = 800$, $k_2 = 400\ \mathrm{kN/m}$. Apply $F_1 = 5\ \mathrm{kN}$ at joint 1, $F_2 = -3\ \mathrm{kN}$ at joint 2. Find $d_1, d_2$.
>
> **Worked Solution:**
>
> $[K] = \begin{bmatrix} 1200 & -400 \\ -400 & 400 \end{bmatrix}$, $\{F\} = \begin{bmatrix} 5 \\ -3 \end{bmatrix}$
>
> Equations: $1200 d_1 - 400 d_2 = 5$ and $-400 d_1 + 400 d_2 = -3$
>
> Add: $800 d_1 = 2$ → $d_1 = 0.0025\ \mathrm{m}$
> Substitute: $-400(0.0025) + 400 d_2 = -3$ → $400 d_2 = -2$ → $d_2 = -0.005\ \mathrm{m}$
>
> **ETABS:** Build a 2-element 1D model with these stiffnesses, apply forces, run analysis, verify displacements.

### I. What You Now Know

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Matrix-vector product | $[K]\{d\} = \{F\}$ | Whole-structure analysis | Internal solver |
| Stiffness matrix | $[K]$ from element stiffnesses | Building model | Built automatically |
| Matrix solve | $\{d\} = [K]^{-1}\{F\}$ | Find displacements | Run Analysis |
| Compatibility | Connected displacements match | Indeterminate beams | Stiffness method |

<div style="page-break-after: always;"></div>

## Chapter 31 — Vectors in 3D: Moments About a Point in Space

### A. Achievement

After this section you can compute the 3D moment vector $\vec{M} = \vec{r} \times \vec{F}$ for a force at a position in 3D space, and interpret the result in terms of which axes it bends about.

### B. The Situation

A column base connection resists a vertical load of $-100\ \mathrm{kN}$ and a horizontal force of $+50\ \mathrm{kN}$ in X, both applied at the top of the column 5 m above the base. The resulting moment at the base is not just one number — it's a vector with separate components about X, Y, and Z axes. ETABS reports M2, M3, and torsion separately for exactly this reason.

### C. The Intuition

3D structural models live in $(x, y, z)$ space. Every force, displacement, and member orientation is a 3D vector. Two new operations — **dot product** and **cross product** — give you angles and perpendicular directions, which are essential when working in 3D.


- Dot product gives the **angle between two vectors** and the **projection of one onto another**.
- Cross product gives a **vector perpendicular to both** — used to compute moment vectors $\vec{M} = \vec{r} \times \vec{F}$.

ETABS distinguishes between **global** axes (X, Y, Z, fixed for the whole model) and **local** axes (1, 2, 3, attached to each member). Rotations between them use these vector operations.


**Formulas and Derivations**


**Dot product:**
$\vec{A} \cdot \vec{B} = A_x B_x + A_y B_y + A_z B_z = |A||B|\cos\theta$

**Cross product:**
$\vec{A} \times \vec{B} = (A_y B_z - A_z B_y,\ A_z B_x - A_x B_z,\ A_x B_y - A_y B_x)$

The result is a vector perpendicular to both $\vec{A}$ and $\vec{B}$, with magnitude $|A||B|\sin\theta$.

**Worked example.** $\vec{A} = (1, 2, 3)$, $\vec{B} = (4, 5, 6)$.

Dot product: $1 \cdot 4 + 2 \cdot 5 + 3 \cdot 6 = 4 + 10 + 18 = 32$

Magnitudes: $|A| = \sqrt{14} \approx 3.742$; $|B| = \sqrt{77} \approx 8.775$

Angle: $\cos\theta = 32 / (3.742 \cdot 8.775) = 0.974$ → $\theta = 12.93°$.


**Full Worked Examples**


**Problem.** A force $\vec{F} = (0, 0, -10)\ \mathrm{kN}$ acts at the tip of a cantilever whose tip is at position $\vec{r} = (3, 0, 0)\ \mathrm{m}$ from the fixed end. Find the moment vector at the fixed end.

$\vec{M} = \vec{r} \times \vec{F} = (3, 0, 0) \times (0, 0, -10)$

Using the formula:
$M_x = 0 \cdot (-10) - 0 \cdot 0 = 0$
$M_y = 0 \cdot 0 - 3 \cdot (-10) = 30$
$M_z = 3 \cdot 0 - 0 \cdot 0 = 0$

$\vec{M} = (0, 30, 0)\ \mathrm{kN \cdot m}$ — a moment about the global Y-axis, magnitude 30. This matches $F \cdot L = 10 \cdot 3 = 30\ \mathrm{kN \cdot m}$ from Chapter 12.


**ETABS Connection**


ETABS uses local axes 1 (along member length), 2, 3 (perpendicular). When you assign a section, axis 3 is typically the strong axis (depth direction). A column rotated 90° has its strong axis swapped with its weak axis — bending response changes drastically.

> **Try it in ETABS 22:**
> 1. Select a column → **Assign > Frame > Local Axes** → set Angle = 0° vs 90°
> 2. Run analysis with same loads
> 3. Compare drift / moments — they reflect bending about a different principal axis

### D. Failure Case

A load of $(20, 0, -50)\ \mathrm{kN}$ is applied at a point $(0, 3, 6)\ \mathrm{m}$ from the column base. An engineer computes "the moment" as $50 \times 6 = 300\ \mathrm{kN \cdot m}$ treating it as a 2D scalar problem. But in 3D, the 20 kN horizontal force also creates a moment about the vertical axis, and the moment about the horizontal axis gets both force components. The full cross-product gives three separate moment components, each needed for connection design.

1. **Confusing local and global axes.** A column's local axis 1 is along its length (vertical for typical column); global Z is also vertical, but the directions only coincide for vertical columns.
2. **Right-hand rule reversed.** Cross product direction matters. Curl right-hand fingers from $\vec{A}$ to $\vec{B}$; thumb points in the direction of $\vec{A} \times \vec{B}$.

### E. The Rule

In 3D, the moment of a force $\vec{F}$ about a point is $\vec{M} = \vec{r} \times \vec{F}$. The cross product produces a vector perpendicular to both $\vec{r}$ and $\vec{F}$, with three components. You need all three to design the base plate, anchor bolts, and connection welds.

### F. The Formal Shorthand

$$\vec{A} \cdot \vec{B} = A_x B_x + A_y B_y + A_z B_z \qquad |\vec{A} \cdot \vec{B}| = |\vec{A}||\vec{B}|\cos\theta$$

$$\vec{r} \times \vec{F} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ r_x & r_y & r_z \\ F_x & F_y & F_z \end{vmatrix} = \bigl(r_y F_z - r_z F_y,\ r_z F_x - r_x F_z,\ r_x F_y - r_y F_x\bigr)$$

### G. Full Worked Example

See the 3D moment computation and the cross-product derivation embedded in the Intuition section above.

### H. Practice Task — Verify a Reaction Moment

> **Scenario:** A 4 m horizontal cantilever, fixed at origin, free at $(4, 0, 0)$ m, carries a tip load $(0, -5, -10)$ kN (i.e., 5 kN sideways in -Y, 10 kN down in -Z). Find the moment vector at the fixed end.
>
> **Worked Solution:**
>
> $\vec{r} = (4, 0, 0)$, $\vec{F} = (0, -5, -10)$
> $\vec{M} = \vec{r} \times \vec{F}$:
> $M_x = 0 \cdot (-10) - 0 \cdot (-5) = 0$
> $M_y = 0 \cdot 0 - 4 \cdot (-10) = 40$
> $M_z = 4 \cdot (-5) - 0 \cdot 0 = -20$
> $\vec{M} = (0, 40, -20)\ \mathrm{kN \cdot m}$
>
> **ETABS:** Build the cantilever, apply both load components at tip, read fixed-end reactions $M_2 = 40$, $M_3 = -20$ (or signs per convention).

### I. What You Now Know

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Dot product | $\vec{A}\cdot\vec{B} = \|A\|\|B\|\cos\theta$ | Angle between vectors | — |
| Cross product | $\vec{A}\times\vec{B}$ | Moment from force × arm | Joint Reactions Mx, My, Mz |
| Local vs global axes | 1,2,3 vs X,Y,Z | Member orientation | Frame Local Axes assignment |

<div style="page-break-after: always;"></div>

## Chapter 32 — Sequences and Series: Column Axial Loads Story by Story

### A. Achievement

After this section you can compute the cumulative axial load at each story in a multi-story column using an arithmetic series, and verify the pattern in ETABS by checking column axial forces at each level.

### B. The Situation

A 10-story building has identical floor loads of $200\ \mathrm{kN}$ per column per floor. How much does the column at the ground floor carry? The answer is 10 × 200 = 2{,}000 kN. But what about each intermediate floor? You need the cumulative sum at every story. This is an arithmetic series — and knowing the formula saves you from summing manually every time.

### C. The Intuition

A sequence is a list. A series is the running sum of that list. They give compact notation for cumulative behavior — like the total axial load in a column at the bottom story (sum of every floor above).


A column at the ground floor carries everything above it. Story 1 column carries 1 floor's load. Story 5 column at the top carries... 0 floors above (just its own roof load). The cumulative axial loads form an arithmetic sequence going downward.


**Formulas and Derivations**


**Arithmetic sequence:** $a_n = a_1 + (n-1) d$
**Sum of $n$ terms:** $S_n = \frac{n}{2}(2 a_1 + (n-1)d) = \frac{n}{2}(a_1 + a_n)$

**Geometric sequence:** $a_n = a_1 \cdot r^{n-1}$
**Sum of $n$ terms:** $S_n = a_1 \cdot \frac{1 - r^n}{1 - r}$ (for $r \neq 1$)

**Worked example.** Find the sum $1 + 2 + 3 + \ldots + 100$ (arithmetic, $a_1 = 1, d = 1, n = 100$).

$S = 100/2 \cdot (1 + 100) = 50 \cdot 101 = 5050$.


**Full Worked Examples**


**Problem.** A 10-story building has identical floors with floor load $P_{floor} = 200\ \mathrm{kN}$ per column. Find the cumulative axial load in each story's column.

| Story (from top) | Cumulative load |
|------------------|-----------------|
| 10 | $200$ |
| 9 | $400$ |
| 8 | $600$ |
| ... | ... |
| 1 | $2000$ |

The sequence is arithmetic: $a_n = 200n$ where $n$ counts floors above plus the one being supported.

The base column carries $S_{10} = 200 \cdot 10 = 2000$ kN — ten times the per-floor load. This is why lower-story columns are bigger.


**ETABS Connection**


ETABS shows axial force in columns at each story. **Display > Show Frame Forces > Axial** — values increase linearly going down the column line.

> **Try it in ETABS 22:**
> 1. Build a 10-story building, identical floors, gravity-only load
> 2. Run analysis
> 3. Click any vertical column line, **Display Frame Forces > Axial**
> 4. The values at each story should match an arithmetic sequence — verifying load accumulation

### D. Failure Case

A structural engineer is told the ground-floor column carries 15 stories of load. They estimate: "Each floor is 300 kN, so the column carries $15 \times 300 = 4{,}500\ \mathrm{kN}$." Correct. But they also need the load at the 10th floor column (carrying 5 stories), the 5th floor column (carrying 10 stories), and so on, to check intermediate columns. Doing this ad-hoc requires 15 separate calculations. An arithmetic series gives the formula $P_n = (\text{num stories above}) \times 300$ immediately.

1. **Off-by-one errors.** Counting floors: is roof "floor 0" or "floor 10"? Define and stay consistent.
2. **Arithmetic vs geometric confusion.** Ask: "is each term added or multiplied?"
3. **Sum formula plugged with wrong $n$.** Use the count of terms, not the highest term.

### E. The Rule

When a fixed amount is added (or subtracted) at each step, the sequence is arithmetic and the total is found with the sum formula. For a building with equal floor loads, the cumulative axial load at story $n$ from the top is an arithmetic series.

### F. The Formal Shorthand

$$a_n = a_1 + (n-1)d \qquad S_n = \frac{n}{2}(a_1 + a_n) = \frac{n(2a_1 + (n-1)d)}{2}$$

$$\text{(geometric: } a_n = a_1 r^{n-1},\ S_n = a_1\frac{1-r^n}{1-r}\text{)}$$

### G. Full Worked Example

See the 10-story column load example embedded in the Intuition section above.

### H. Practice Task — Cumulative Self-Weight

> **Scenario:** A 6-story building. Each story column has self-weight $W_{col} = 10\ \mathrm{kN}$ (its own self-weight, ignoring story-load). Find total self-weight contribution to the ground-floor column.
>
> **Worked Solution:**
>
> The ground column supports its own weight + 5 columns above = $6 \cdot 10 = 60\ \mathrm{kN}$ (or treat as $\sum 10$ over 6 terms = $60$).
>
> If load also accumulates from story dead/live loads, sum those too.
>
> **ETABS:** Verify by reading axial at base of column.

### I. What You Now Know

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Arithmetic sequence | $a_n = a_1 + (n-1)d$ | Cumulative loads | Axial force diagram |
| Sum of arithmetic | $S = n(a_1 + a_n)/2$ | Total story loads | Manual sum |
| Geometric sequence | $a_n = a_1 r^{n-1}$ | Tapering, wind profile | Wind pressure code |

<div style="page-break-after: always;"></div>

## Chapter 33 — Limits: Why ETABS Results Converge with Mesh Refinement

### A. Achievement

After this section you can explain why ETABS mesh refinement improves accuracy, perform a basic convergence study by running two mesh densities, and accept results when the difference falls below a tolerance.

### B. The Situation

You run an ETABS slab analysis with automatic meshing. The maximum moment at a column is $M = 85\ \mathrm{kN \cdot m}$. You refine the mesh and re-run: the result changes to $92\ \mathrm{kN \cdot m}$. A third refinement gives $93\ \mathrm{kN \cdot m}$. The result is converging: the limit is approximately $93\ \mathrm{kN \cdot m}$. Without understanding convergence, you wouldn't know whether to trust the 85 or the 93 as the design value.

### C. The Intuition

A limit answers: "what value does $f(x)$ approach as $x$ approaches some value?" Sometimes the function is undefined at the target value but the limit still exists.

> **Real-world analogy:** Walking halfway to a wall, then halfway again, then halfway again — you never touch the wall, but in the limit you arrive there. The wall is the "limit value."


ETABS uses the **finite element method (FEM)**. The continuous structure is broken into thousands of small elements. Each element approximates the real behavior. As elements get smaller, the FE solution converges to the exact mathematical solution — a limiting process.

This means:
- Coarse mesh → approximate, fast
- Fine mesh → accurate, slow
- A **convergence study** (running with progressively finer meshes) confirms results are reliable.


**Formulas and Derivations**


Notation: $\lim_{x \to a} f(x) = L$ means as $x$ gets close to $a$, $f(x)$ gets close to $L$.

**Worked example.** $f(x) = x^2$. $\lim_{x \to 3} x^2 = 9$ (just plug in if continuous).

**Less trivial.** $f(x) = \dfrac{x^2 - 9}{x - 3}$ at $x = 3$ is $0/0$ — undefined. But:
$\dfrac{x^2 - 9}{x - 3} = \dfrac{(x-3)(x+3)}{x-3} = x + 3$ for $x \neq 3$
$\lim_{x \to 3} (x + 3) = 6$

The function approaches 6 even though it's not defined at 3.

**Calculus bridge — why shear and moment are linked.** A derivative is a limit of slopes over smaller and smaller intervals:

$$\dfrac{dM}{dx} = \lim_{\Delta x \to 0}\dfrac{M(x+\Delta x)-M(x)}{\Delta x}$$

For beam diagrams, this slope of the moment diagram is the shear force:

$$V = \dfrac{dM}{dx}$$

You do not need to take a full calculus course to use the practical result:
- If $V$ is positive, $M$ is increasing.
- If $V$ is negative, $M$ is decreasing.
- If $V=0$, $M$ has a local peak or valley.

**Worked example.** From Chapter 26, $M(x)=40x-4x^2$ for a simply supported beam with uniform load. The derivative is:

$$\dfrac{dM}{dx}=40-8x$$

So $V(x)=40-8x$. At $x=5\ \mathrm{m}$, $V=0$, and Chapter 26 found the maximum moment at that same location. This reintroduces the earlier diagram rule as a taught idea rather than a memorized shortcut.


**Full Worked Examples**


**Mesh convergence.** Suppose a slab's maximum deflection is computed with progressively finer meshes:

| Mesh size | $\delta_{\max}$ (mm) |
|-----------|----------------------|
| 2.0 m | 14.2 |
| 1.0 m | 11.8 |
| 0.5 m | 11.0 |
| 0.25 m | 10.8 |
| 0.125 m | 10.75 |

The values approach 10.7-10.8 mm — the **converged solution**. Going to finer meshes barely changes the answer; that's the limit.


**ETABS Connection**


In **Assign > Area Object Mesh Options**, you set how finely ETABS subdivides slabs and walls. Coarser meshes converge to lower accuracy; finer meshes give better but slower results.

> **Try it in ETABS 22:**
> 1. Build a slab; assign coarse mesh (say 2 m max element size); run analysis; note max displacement
> 2. **Assign > Area Object Mesh Options** — refine to 0.5 m; re-run
> 3. Refine to 0.25 m; re-run
> 4. Plot results vs mesh size — they should converge to a stable value

### D. Failure Case

An engineer models a flat plate slab in ETABS with a $1\ \mathrm{m}$ mesh and gets $M_{max} = 76\ \mathrm{kN \cdot m}$ at a column. They use that value for design. A colleague with experience knows that a $1\ \mathrm{m}$ mesh for a slab-column connection is far too coarse — the stress concentration near the column requires a much finer mesh. Running at $0.25\ \mathrm{m}$ gives $M_{max} = 104\ \mathrm{kN \cdot m}$. The original engineer under-designed the top reinforcement by 27%.

1. **Trusting a single mesh.** Always do a convergence study for unfamiliar geometry.
2. **Mistaking convergence for correctness.** Wrong boundary conditions converge to a wrong answer.
3. **Over-refining.** Beyond a certain point, the gain is negligible and computation time explodes.

### E. The Rule

FEM results converge toward the exact solution as mesh size decreases. A result is trusted when further refinement changes it by less than a tolerance (typically 2–5%). Always verify with at least two mesh densities when modeling stress concentrations or irregular geometry.

### F. The Formal Shorthand

$$\lim_{x \to a} f(x) = L \qquad \text{(the function approaches } L \text{ as } x \text{ approaches } a)$$

$$\lim_{h \to 0} \frac{f(x+h)-f(x)}{h} = f'(x) \qquad \text{(basis of FEM element refinement)}$$

### G. Full Worked Example

See the slab mesh convergence scenario in the Situation section above and the Practice Task below.

### H. Practice Task — Mesh Convergence

> **Scenario:** A simply supported one-way slab 4 m × 6 m, 200 mm thick, $w = 5\ \mathrm{kPa}$. Run with three mesh sizes. Confirm the deflection converges.
>
> **Tasks:**
> 1. Build the slab once
> 2. Run with mesh size 1 m, 0.5 m, 0.25 m
> 3. Plot $\delta_{\max}$ vs mesh size
> 4. Identify the converged value
>
> **ETABS Workflow:**
> 1. Same model, **Assign > Area Object Mesh Options** for each run
> 2. Tabulate $\delta$ for each
> 3. The plot should flatten — that flat value is your converged answer

### I. What You Now Know

| Concept | Notation | Engineering Use | ETABS Location |
|---------|----------|----------------|----------------|
| Limit | $\lim_{x\to a} f(x)$ | Approach a value | — |
| Convergence | Stable result as mesh refines | FE verification | Mesh Options |
| FEM | Discretization of continuum | Whole-model analysis | Built into ETABS |

<div style="page-break-after: always;"></div>

> **End of Part 4.** You now have the precalculus toolkit a structural engineer uses: polynomial moment equations, proportional reasoning for fast estimates, exponential and logarithmic models for time-dependent and many-orders-of-magnitude phenomena, matrix notation for the stiffness method, 3D vector products for moments and axes, sequences for cumulative loads, and limits as the foundation of finite element analysis. In Part 5 — the largest and most practical part — we put all of this to work in ETABS 22.

<div style="page-break-after: always;"></div>

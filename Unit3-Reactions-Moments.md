# Unit 3 — Reactions, Moments, and Internal Forces

> A beam must do two things to survive: stay in place and stay in one piece. This unit gives you both tools. You will choose the correct support model for any physical connection, find the exact reaction at each support (even when the load is off-center), and trace the internal forces along the beam to find the cross-section that is working hardest.

<div style="page-break-after: always;"></div>

## Chapter 9 — Support Conditions and Finding Reactions

### A. Achievement

After this section you can identify the support type for any physical connection (pin, roller, or fixed), state how many reactions it provides, and find both reactions for a simply-supported beam with a point load at any position.

### B. The Situation

A beam spans 6 m. A load of $P = 60\ \mathrm{kN}$ lands $2\ \mathrm{m}$ from the left end. You know from <abbr title="[→ Ch8] ΣFy = 0 — all upward forces equal all downward forces">vertical equilibrium</abbr> that $R_A + R_B = 60\ \mathrm{kN}$. But that is one equation with two unknowns. Infinitely many pairs satisfy it: $(10, 50)$, $(30, 30)$, $(40, 20)$ — all add to 60. Which pair is physically correct?

The answer depends on the moment balance, which depends on the span and the load's position. And moment balance depends on the support type — because a fixed support resists rotation, which adds a third unknown.

Before writing any equilibrium equation, you must choose the correct support model.

### C. The Intuition

Every support stops some type of motion. When a support stops a motion, it generates a reaction force (or moment) in the direction of that blocked motion — this is Newton's Third Law: the support pushes back exactly as hard as the structure pushes on it.

There are three basic support types in 2D structural work:

<figure class="structural-diagram" aria-label="Three structural support types: pin, roller, and fixed">
<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
  <!-- === PIN SUPPORT (left) === -->
  <!-- beam connection point -->
  <circle cx="100" cy="50" r="6" fill="#2563eb"/>
  <!-- triangle body -->
  <polygon points="100,50 70,110 130,110" class="sd-support"/>
  <!-- ground line + hatching -->
  <line x1="55" y1="110" x2="145" y2="110" class="sd-beam" stroke-width="3"/>
  <line x1="55" y1="116" x2="67" y2="110" class="sd-ground"/>
  <line x1="70" y1="116" x2="82" y2="110" class="sd-ground"/>
  <line x1="85" y1="116" x2="97" y2="110" class="sd-ground"/>
  <line x1="100" y1="116" x2="112" y2="110" class="sd-ground"/>
  <line x1="115" y1="116" x2="127" y2="110" class="sd-ground"/>
  <line x1="130" y1="116" x2="142" y2="110" class="sd-ground"/>
  <!-- Reaction arrows -->
  <line x1="100" y1="140" x2="100" y2="120" class="sd-force-up" stroke-width="2.5"/>
  <polygon points="100,112 95,122 105,122" class="sd-arrow-up"/>
  <line x1="76" y1="50" x2="62" y2="50" class="sd-force-h" stroke-width="2.5"/>
  <polygon points="54,50 64,45 64,55" class="sd-arrow-h"/>
  <!-- Labels -->
  <text x="100" y="30" text-anchor="middle" class="sd-title">PIN</text>
  <text x="100" y="160" text-anchor="middle" class="sd-label-bold">R_V + R_H</text>
  <text x="100" y="175" text-anchor="middle" class="sd-label">2 reactions</text>
  <text x="100" y="190" text-anchor="middle" class="sd-label">Blocks H &amp; V, free to rotate</text>

  <!-- === ROLLER SUPPORT (center) === -->
  <!-- beam connection point -->
  <circle cx="300" cy="50" r="6" fill="#2563eb"/>
  <!-- triangle body -->
  <polygon points="300,50 270,100 330,100" class="sd-support"/>
  <!-- circle wheel -->
  <ellipse cx="285" cy="112" rx="9" ry="9" class="sd-support"/>
  <ellipse cx="315" cy="112" rx="9" ry="9" class="sd-support"/>
  <!-- ground line + hatching -->
  <line x1="255" y1="121" x2="345" y2="121" class="sd-beam" stroke-width="3"/>
  <line x1="255" y1="127" x2="267" y2="121" class="sd-ground"/>
  <line x1="270" y1="127" x2="282" y2="121" class="sd-ground"/>
  <line x1="285" y1="127" x2="297" y2="121" class="sd-ground"/>
  <line x1="300" y1="127" x2="312" y2="121" class="sd-ground"/>
  <line x1="315" y1="127" x2="327" y2="121" class="sd-ground"/>
  <line x1="330" y1="127" x2="342" y2="121" class="sd-ground"/>
  <!-- Reaction arrow (vertical only) -->
  <line x1="300" y1="150" x2="300" y2="130" class="sd-force-up" stroke-width="2.5"/>
  <polygon points="300,122 295,132 305,132" class="sd-arrow-up"/>
  <!-- Labels -->
  <text x="300" y="30" text-anchor="middle" class="sd-title">ROLLER</text>
  <text x="300" y="170" text-anchor="middle" class="sd-label-bold">R_V only</text>
  <text x="300" y="185" text-anchor="middle" class="sd-label">1 reaction</text>
  <text x="300" y="200" text-anchor="middle" class="sd-label">Blocks V, free H &amp; rotation</text>

  <!-- === FIXED SUPPORT (right) === -->
  <!-- wall -->
  <rect x="480" y="20" width="18" height="110" class="sd-support-fixed"/>
  <line x1="480" y1="20" x2="468" y2="32" class="sd-ground"/>
  <line x1="480" y1="35" x2="468" y2="47" class="sd-ground"/>
  <line x1="480" y1="50" x2="468" y2="62" class="sd-ground"/>
  <line x1="480" y1="65" x2="468" y2="77" class="sd-ground"/>
  <line x1="480" y1="80" x2="468" y2="92" class="sd-ground"/>
  <line x1="480" y1="95" x2="468" y2="107" class="sd-ground"/>
  <line x1="480" y1="110" x2="468" y2="122" class="sd-ground"/>
  <!-- beam stub -->
  <line x1="498" y1="50" x2="560" y2="50" class="sd-beam" stroke-width="4"/>
  <!-- Reaction arrows -->
  <line x1="520" y1="80" x2="520" y2="62" class="sd-force-up" stroke-width="2.5"/>
  <polygon points="520,54 515,64 525,64" class="sd-arrow-up"/>
  <line x1="558" y1="50" x2="540" y2="50" class="sd-force-h" stroke-width="2.5"/>
  <polygon points="532,50 542,45 542,55" class="sd-arrow-h"/>
  <!-- Moment arc -->
  <path d="M 545 30 A 20 20 0 0 1 565 50" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
  <polygon points="565,50 558,44 562,54" fill="#7c3aed"/>
  <!-- Labels -->
  <text x="520" y="18" text-anchor="middle" class="sd-title">FIXED</text>
  <text x="520" y="110" text-anchor="middle" class="sd-label-bold">R_V + R_H + M</text>
  <text x="520" y="125" text-anchor="middle" class="sd-label">3 reactions</text>
  <text x="520" y="140" text-anchor="middle" class="sd-label">Blocks H, V &amp; rotation</text>
</svg>
</figure>

A **simply supported beam** is pin at one end + roller at the other: $2 + 1 = 3$ reactions. With three equilibrium equations ($\Sigma F_x = 0$, $\Sigma F_y = 0$, $\Sigma M = 0$), three unknowns can be found — the structure is **statically determinate**.

A **cantilever** (fixed end + free end): 3 reactions at the fixed end, 0 at the free end = 3 total. Also determinate.

A **propped cantilever** (fixed + roller): $3 + 1 = 4$ unknowns, only 3 equations → not solvable by equilibrium alone. This is a **statically indeterminate** structure — ETABS solves it using the stiffness method introduced in Chapter 22.

### D. Failure Case

A structural engineer models all column bases as **pins** in a 5-story reinforced concrete building. The column-to-pile-cap connections are actually monolithic concrete — the reinforcement is continuous, the joint cannot rotate freely. In the real structure, the fixed bases provide moment resistance and lateral stiffness. The pinned model has nearly zero lateral stiffness in the columns, so the model assigns nearly all the wind load to the core walls. Story drift is underestimated by 30%. After the building is built, it sways more than the code allows under wind.

Choosing pin vs. fixed changes not just one number — it changes the entire load distribution, stiffness, and deflection throughout the structure.

### E. The Rule

Count the reactions first: each blocked direction of motion generates one reaction. If the total equals 3 in 2D, use equilibrium to solve. If more than 3, you need software. Model the connection the way it actually behaves physically — not the way that makes the math simpler.

### F. The Formal Shorthand

| Support | Blocks | Reactions (2D) | Count |
|---------|--------|----------------|-------|
| Roller | V only | $R_V$ | 1 |
| Pin | H + V | $R_H,\, R_V$ | 2 |
| Fixed | H + V + rotation | $H,\, V,\, M$ | 3 |
| Free end | nothing | — | 0 |

**Reaction formulas for a simply-supported beam**, span $L$, point load $P$ at distance $a$ from the left:

$$R_B = \frac{P \cdot a}{L} \qquad R_A = P - R_B = \frac{P(L-a)}{L}$$

These come from $\Sigma M_A = 0$ (Chapter 10 derives them formally). For now, apply them as tools.

For two loads $P_1$ at $a_1$ and $P_2$ at $a_2$:
$$R_B = \frac{P_1 a_1 + P_2 a_2}{L} \qquad R_A = P_1 + P_2 - R_B$$

The unit check: $[kN \cdot m] / [m] = [kN]\ \checkmark$

### G. Full Worked Example — Asymmetric Beam Reactions

**Problem.** Span $L = 6\ \mathrm{m}$, simply supported (pin left, roller right). Point load $P = 60\ \mathrm{kN}$ at $a = 2\ \mathrm{m}$ from the left. Find $R_A$ and $R_B$.

**Step 1 — Identify support type:**
Pin at A (2 reactions: $R_{Ah}$ and $R_{Av}$) + Roller at B (1 reaction: $R_B$). Total = 3 unknowns.

**Step 2 — Horizontal equilibrium** (no horizontal loads):
$$\Sigma F_x = 0: \quad R_{Ah} = 0$$

**Step 3 — Apply moment reaction formula:**
$$R_B = \frac{P \cdot a}{L} = \frac{60 \times 2}{6} = 20\ \mathrm{kN}$$

**Step 4 — Vertical equilibrium:**
$$R_A = P - R_B = 60 - 20 = 40\ \mathrm{kN}$$

**Step 5 — Verify:**
Take moments about B: $R_A \times 6 = P \times (6 - 2) = 60 \times 4 = 240$. So $R_A = 40\ \mathrm{kN}\ \checkmark$

**Physical sense check:** The load sits at $1/3$ of the span from A, closer to A. So A carries more — $40\ \mathrm{kN}$ vs $20\ \mathrm{kN}$. ✓

**ETABS verification:** Build the 6 m beam, pin at left, roller at right, point load 60 kN at 2 m from left. Run analysis → Display > Show Tables > Joint Reactions. Should read $R_A = 40\ \mathrm{kN}$, $R_B = 20\ \mathrm{kN}$.

### H. Practice Task

> **Scenario:** A 8 m simply-supported beam carries two point loads: $P_1 = 30\ \mathrm{kN}$ at $a_1 = 2\ \mathrm{m}$ from left and $P_2 = 50\ \mathrm{kN}$ at $a_2 = 5\ \mathrm{m}$ from left.
>
> **Tasks:**
> 1. Identify support type and count reactions
> 2. Apply $\Sigma F_x = 0$
> 3. Find $R_B$ using the load-position formula
> 4. Find $R_A$ from vertical balance
> 5. Verify by taking moments about B
>
> **Answers:**
> 1. Pin + roller = 3 reactions; determinate
> 2. $R_{Ah} = 0$ (no horizontal loads)
> 3. $R_B = (30 \times 2 + 50 \times 5)/8 = (60 + 250)/8 = 310/8 = 38.75\ \mathrm{kN}$
> 4. $R_A = 80 - 38.75 = 41.25\ \mathrm{kN}$
> 5. $R_A \times 8 = 30(8-2) + 50(8-5) = 180 + 150 = 330$; $R_A = 330/8 = 41.25\ \mathrm{kN}\ \checkmark$

### I. What You Now Know

Support type determines how many reactions exist. Three reactions in 2D means the problem is solvable by equilibrium alone. The reaction formula $R_B = Pa/L$ comes from rotational balance — Chapter 10 derives it formally.

| Support | Reactions | Determinacy | Physical Example |
|---------|-----------|-------------|-----------------|
| Roller | 1 | Need others | Bridge bearing on expansion joint |
| Pin | 2 | Need a roller partner | Truss chord connections |
| Fixed | 3 | Determinate alone if paired with free end | Column base in concrete |
| Pin + Roller | 3 total | Determinate | Simply supported beam |

<div style="page-break-after: always;"></div>

## Chapter 10 — Moments: Rotational Balance

### A. Achievement

After this section you can find both support reactions for a simply-supported beam with a point load at any position using moment equilibrium, and compute the fixed-end moment for a cantilever.

### B. The Situation

From Chapter 8, <abbr title="[→ Ch8] ΣFy = 0 — the signed sum of vertical forces must equal zero">vertical equilibrium</abbr> gives $R_A + R_B = P$ — but not the individual values unless the beam is symmetric. From Chapter 9, the reaction formula $R_B = Pa/L$ exists, but where does it come from?

It comes from the condition that the beam also must not rotate. This chapter derives that condition and shows how to apply it.

### C. The Intuition

A moment is a force's tendency to cause rotation. The further the force is from the pivot point, the greater the rotational tendency.

> Hold a wrench. Push near the bolt head — it barely budges. Push at the end of the handle — it turns easily. Same force, different distance, totally different effect. The rotational effect of a force is its **moment**.

To cause zero rotation, the clockwise moments must exactly cancel the counterclockwise moments. This is the moment equilibrium condition: $\Sigma M = 0$.

The moment of a force about a pivot is:
$$M = F \times d_\perp$$

where $d_\perp$ is the **perpendicular** distance from the force's line of action to the pivot. For a vertical force and a horizontal beam, this is just the horizontal distance.

Sign convention: choose once. Counterclockwise (CCW) positive is common.

<figure class="structural-diagram" aria-label="Moment sign convention: clockwise negative, counterclockwise positive">
<svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg">
  <!-- Left: Clockwise (negative) moment -->
  <!-- Beam -->
  <line x1="40" y1="80" x2="220" y2="80" class="sd-beam" stroke-width="4"/>
  <!-- Pivot marker at A -->
  <polygon points="40,80 20,110 60,110" class="sd-support"/>
  <line x1="15" y1="110" x2="65" y2="110" class="sd-beam" stroke-width="2"/>
  <text x="40" y="128" text-anchor="middle" class="sd-label-bold">A</text>
  <!-- Downward force at right -->
  <line x1="200" y1="40" x2="200" y2="78" class="sd-force-down" stroke-width="3"/>
  <polygon points="200,80 195,70 205,70" class="sd-arrow-down"/>
  <text x="200" y="32" text-anchor="middle" class="sd-label-red">F ↓</text>
  <!-- Dimension arrow -->
  <line x1="40" y1="95" x2="200" y2="95" class="sd-dim"/>
  <polygon points="40,95 50,91 50,99" fill="#64748b"/>
  <polygon points="200,95 190,91 190,99" fill="#64748b"/>
  <text x="120" y="108" text-anchor="middle" class="sd-label">d</text>
  <!-- CW rotation arc -->
  <path d="M 80 60 A 40 40 0 0 1 120 40" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <polygon points="120,40 112,48 124,50" fill="#dc2626"/>
  <!-- Label -->
  <text x="130" y="145" text-anchor="middle" class="sd-label-red">Clockwise = NEGATIVE</text>
  <text x="130" y="158" text-anchor="middle" class="sd-label-red">M = −F × d</text>

  <!-- Divider -->
  <line x1="280" y1="20" x2="280" y2="140" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="6 4"/>

  <!-- Right: Counter-clockwise (positive) moment -->
  <!-- Beam -->
  <line x1="300" y1="80" x2="540" y2="80" class="sd-beam" stroke-width="4"/>
  <!-- Pivot marker at A -->
  <polygon points="300,80 280,110 320,110" class="sd-support"/>
  <line x1="275" y1="110" x2="325" y2="110" class="sd-beam" stroke-width="2"/>
  <text x="300" y="128" text-anchor="middle" class="sd-label-bold">A</text>
  <!-- Upward force at right -->
  <line x1="500" y1="78" x2="500" y2="40" class="sd-force-up" stroke-width="3"/>
  <polygon points="500,38 495,48 505,48" class="sd-arrow-up"/>
  <text x="500" y="32" text-anchor="middle" class="sd-label-green">F ↑</text>
  <!-- Dimension arrow -->
  <line x1="300" y1="95" x2="500" y2="95" class="sd-dim"/>
  <polygon points="300,95 310,91 310,99" fill="#64748b"/>
  <polygon points="500,95 490,91 490,99" fill="#64748b"/>
  <text x="400" y="108" text-anchor="middle" class="sd-label">d</text>
  <!-- CCW rotation arc -->
  <path d="M 380 40 A 40 40 0 0 0 420 60" fill="none" stroke="#15803d" stroke-width="2.5"/>
  <polygon points="420,60 416,48 428,52" fill="#15803d"/>
  <!-- Label -->
  <text x="420" y="145" text-anchor="middle" class="sd-label-green">Counter-clockwise = POSITIVE</text>
  <text x="420" y="158" text-anchor="middle" class="sd-label-green">M = +F × d</text>
</svg>
</figure>

### D. Failure Case

A floor beam carries a uniform dead load $w = 8\ \mathrm{kN/m}$ over $L = 6\ \mathrm{m}$. The total force is $W = 48\ \mathrm{kN}$, acting at the right end of the beam (the designer takes moments using the span as the lever arm):

$$R_A = \frac{W \times L}{L} = \frac{48 \times 6}{6} = 48\ \mathrm{kN}$$

That gives $R_A = 48\ \mathrm{kN}$ and $R_B = 0$. This is obviously wrong — both supports should carry load from a uniform load.

The error: the resultant of a uniform load acts at the **centroid** of the load, which is at $L/2 = 3\ \mathrm{m}$, not at $L = 6\ \mathrm{m}$. Using $L/2$ gives:

$$R_A \times L = W \times \frac{L}{2} \quad\Rightarrow\quad R_A = \frac{W}{2} = 24\ \mathrm{kN} \quad R_B = 24\ \mathrm{kN}$$

Moment arms for distributed loads always go to the centroid.

### E. The Rule

Moment = force × perpendicular distance to the pivot. For distributed loads, replace the load with its resultant acting at the centroid. Sum all moments; set the sum to zero. Solve for the unknown.

### F. The Formal Shorthand

$$M = F \cdot d_\perp \qquad \Sigma M_{\text{any point}} = 0$$

For a simply-supported beam, span $L$, single point load $P$ at distance $a$ from A:

Taking moments about A ($\Sigma M_A = 0$, CCW+):
$$R_B \cdot L - P \cdot a = 0 \quad\Rightarrow\quad R_B = \frac{P \cdot a}{L}$$

This is the formula from Chapter 9 — now derived.

For a UDL $w$ over the full span, resultant $W = wL$ acting at $L/2$:
$$R_B = \frac{wL \cdot (L/2)}{L} = \frac{wL}{2}$$

This confirms the symmetry result from Chapter 8 by a different method.

**Units check:** $[kN] \times [m] = [kN \cdot m]$; dividing by $[m]$ gives $[kN]\ \checkmark$

### G. Full Worked Example — Reactions for Asymmetric Two-Load Beam

**Problem.** Simply-supported, $L = 8\ \mathrm{m}$, pin at A, roller at B. Two loads: $P_1 = 40\ \mathrm{kN}$ at $x = 2\ \mathrm{m}$; $P_2 = 20\ \mathrm{kN}$ at $x = 6\ \mathrm{m}$.

**FBD:**
<figure class="structural-diagram" aria-label="Simply-supported beam: P1=40kN at 2m, P2=20kN at 6m, L=8m">
<svg viewBox="0 0 520 120" xmlns="http://www.w3.org/2000/svg">
  <!-- P1 load -->
  <line x1="165" y1="16" x2="165" y2="46" class="sd-force-down" stroke-width="3"/>
  <polygon points="165,48 160,38 170,38" class="sd-arrow-down"/>
  <text x="128" y="14" class="sd-label-red">P₁ = 40 kN</text>
  <!-- P2 load -->
  <line x1="365" y1="16" x2="365" y2="46" class="sd-force-down" stroke-width="3"/>
  <polygon points="365,48 360,38 370,38" class="sd-arrow-down"/>
  <text x="328" y="14" class="sd-label-red">P₂ = 20 kN</text>
  <!-- Beam -->
  <rect x="80" y="48" width="360" height="12" rx="2" class="sd-beam-fill"/>
  <!-- Pin A -->
  <polygon points="80,60 64,80 96,80" class="sd-support"/>
  <!-- Roller B -->
  <circle cx="440" cy="72" r="8" class="sd-support"/>
  <!-- RA -->
  <line x1="80" y1="80" x2="80" y2="70" class="sd-force-up" stroke-width="2.5"/>
  <polygon points="80,68 75,78 85,78" class="sd-arrow-up"/>
  <text x="60" y="96" class="sd-label-green">R_A</text>
  <!-- RB -->
  <line x1="440" y1="80" x2="440" y2="70" class="sd-force-up" stroke-width="2.5"/>
  <polygon points="440,68 435,78 445,78" class="sd-arrow-up"/>
  <text x="428" y="96" class="sd-label-green">R_B</text>
  <!-- Dimension marks -->
  <text x="165" y="64" text-anchor="middle" class="sd-label" style="fill:#f59e0b">2m</text>
  <text x="365" y="64" text-anchor="middle" class="sd-label" style="fill:#f59e0b">6m</text>
  <text x="260" y="108" text-anchor="middle" class="sd-label" style="fill:#64748b">L = 8 m</text>
</svg>
</figure>

**Step 1 — Take moments about A** (CCW+):
$$\Sigma M_A = 0: \quad R_B \times 8 - P_1 \times 2 - P_2 \times 6 = 0$$
$$8 R_B = 40(2) + 20(6) = 80 + 120 = 200$$
$$R_B = 25\ \mathrm{kN}$$

**Step 2 — Vertical balance:**
$$R_A = (P_1 + P_2) - R_B = 60 - 25 = 35\ \mathrm{kN}$$

**Step 3 — Verify** by taking moments about B:
$$R_A \times 8 = P_1(8-2) + P_2(8-6) = 40(6) + 20(2) = 240 + 40 = 280$$
$$R_A = 280/8 = 35\ \mathrm{kN}\ \checkmark$$

**ETABS verification:** Joint reactions should show $35\ \mathrm{kN}$ at A and $25\ \mathrm{kN}$ at B.

### H. Practice Task

> **Scenario:** A cantilever beam $L = 3\ \mathrm{m}$, fixed at the left end, free at the right. A point load $P = 18\ \mathrm{kN}$ acts at the free end. Find the vertical reaction and moment reaction at the fixed support.
>
> **Tasks:**
> 1. Draw the FBD, label the three reactions at the fixed end
> 2. Apply $\Sigma F_y = 0$
> 3. Apply $\Sigma M_A = 0$ to find the fixed-end moment
> 4. Verify by checking the moment about the free end
>
> **Answers:**
> 1. FBD: $V_A$ (up), $H_A$ (right, = 0), $M_A$ (CCW reaction moment)
> 2. $V_A = P = 18\ \mathrm{kN}$; $H_A = 0$
> 3. $\Sigma M_A = 0$: $M_A - P \times L = 0$; $M_A = 18 \times 3 = 54\ \mathrm{kN \cdot m}$ (CCW)
> 4. Moment about free end: $M_A - V_A \times L = 54 - 18 \times 3 = 0\ \checkmark$

### I. What You Now Know

The moment equation is the second independent condition that, combined with vertical balance, uniquely determines both reactions for any simply-supported beam. Taking moments about one support eliminates that support's reaction from the equation, leaving one unknown to solve.

| Formula | Meaning | Use |
|---------|---------|-----|
| $M = F \cdot d_\perp$ | Rotational effect of a force | Derive reaction formulas |
| $\Sigma M_A = 0$ | No net rotation about A | Find $R_B$ |
| $R_B = Pa/L$ | Reaction from off-center point load | Quick reaction calculation |
| $M_{fixed} = PL$ | Fixed-end moment in cantilever | Column base design |

<div style="page-break-after: always;"></div>

## Chapter 11 — Shear Force and Bending Moment Along a Beam

### A. Achievement

After this section you can compute the shear force and bending moment at any cross-section of a simply-supported beam, draw the complete SFD and BMD, and read off the maximum values that govern the design.

### B. The Situation

You know the reactions. You know the maximum moment ($M_{max} = wL^2/8$ at mid-span). But the beam's cross-section is the same everywhere along the span. Does every cross-section need to resist $M_{max}$? No — the moment varies along the beam. At the supports it is zero; at mid-span it peaks. Knowing the moment at every section tells you where the beam is working hardest and where reinforcement can be safely reduced.

### C. The Intuition

Imagine cutting the beam at any point $x$ and pulling apart the two halves. For the left half to remain in <abbr title="[→ Ch8] ΣFy = 0 and ΣM = 0 — all forces and moments cancel">equilibrium</abbr>, internal forces at the cut face must balance all external forces on the left half. Those internal forces are:

- **Shear force $V$**: the vertical force at the cut (balances the net vertical force on the left half)
- **Bending moment $M$**: the moment at the cut (balances the net moment on the left half about the cut)

<figure class="structural-diagram" aria-label="Section cut on a uniformly loaded simply-supported beam showing internal forces V and M">
<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg">
  <!-- UDL arrows -->
  <text x="280" y="16" text-anchor="middle" class="sd-label-red">w (uniform load)</text>
  <line x1="100" y1="24" x2="100" y2="42" class="sd-force-down" stroke-width="2"/>
  <polygon points="100,44 96,35 104,35" class="sd-arrow-down"/>
  <line x1="145" y1="24" x2="145" y2="42" class="sd-force-down" stroke-width="2"/>
  <polygon points="145,44 141,35 149,35" class="sd-arrow-down"/>
  <line x1="190" y1="24" x2="190" y2="42" class="sd-force-down" stroke-width="2"/>
  <polygon points="190,44 186,35 194,35" class="sd-arrow-down"/>
  <line x1="280" y1="24" x2="280" y2="42" class="sd-force-down" stroke-width="2"/>
  <polygon points="280,44 276,35 284,35" class="sd-arrow-down"/>
  <line x1="370" y1="24" x2="370" y2="42" class="sd-force-down" stroke-width="2"/>
  <polygon points="370,44 366,35 374,35" class="sd-arrow-down"/>
  <line x1="415" y1="24" x2="415" y2="42" class="sd-force-down" stroke-width="2"/>
  <polygon points="415,44 411,35 419,35" class="sd-arrow-down"/>
  <line x1="460" y1="24" x2="460" y2="42" class="sd-force-down" stroke-width="2"/>
  <polygon points="460,44 456,35 464,35" class="sd-arrow-down"/>
  <!-- Beam -->
  <rect x="80" y="44" width="400" height="14" rx="2" class="sd-beam-fill"/>
  <!-- Pin support A -->
  <polygon points="80,58 64,78 96,78" class="sd-support"/>
  <text x="80" y="94" text-anchor="middle" class="sd-label-bold">A</text>
  <!-- Roller support B -->
  <circle cx="480" cy="70" r="8" class="sd-support"/>
  <text x="480" y="94" text-anchor="middle" class="sd-label-bold">B</text>
  <!-- Reactions -->
  <line x1="80" y1="94" x2="80" y2="82" class="sd-force-up" stroke-width="2.5"/>
  <polygon points="80,80 75,90 85,90" class="sd-arrow-up"/>
  <text x="60" y="112" class="sd-label-green">R_A</text>
  <line x1="480" y1="94" x2="480" y2="82" class="sd-force-up" stroke-width="2.5"/>
  <polygon points="480,80 475,90 485,90" class="sd-arrow-up"/>
  <text x="468" y="112" class="sd-label-green">R_B</text>
  <!-- Cut line -->
  <line x1="280" y1="32" x2="280" y2="110" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="6 3"/>
  <text x="288" y="30" class="sd-label" style="fill:#f59e0b;font-weight:700">CUT</text>
  <!-- Internal V at cut (left face) -->
  <line x1="280" y1="58" x2="280" y2="80" class="sd-force-down" stroke-width="2.5"/>
  <polygon points="280,82 275,72 285,72" class="sd-arrow-down"/>
  <text x="288" y="82" class="sd-label-red">V</text>
  <!-- Internal M at cut -->
  <path d="M 264 58 A 16 16 0 0 0 280 74" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
  <polygon points="280,74 272,74 276,64" fill="#7c3aed"/>
  <text x="248" y="94" class="sd-label" style="fill:#7c3aed;font-weight:700">M</text>
  <!-- Labels -->
  <text x="180" y="130" text-anchor="middle" class="sd-label">Left half: equilibrium gives</text>
  <text x="180" y="144" text-anchor="middle" class="sd-label-accent">ΣFy=0 → V = R_A − (load on left)</text>
  <text x="180" y="158" text-anchor="middle" class="sd-label-accent">ΣM_cut=0 → M = R_A·x − ...</text>
</svg>
</figure>

Apply $\Sigma F_y = 0$ to the left half: $V = R_A - (\text{load on left half})$.
Apply $\Sigma M_{cut} = 0$: $M = R_A \cdot x - (\text{moment of load on left half about cut})$.

Do this at every $x$ from 0 to $L$ and you build the **Shear Force Diagram (SFD)** and **Bending Moment Diagram (BMD)**.

**Key pattern for a simply-supported beam under uniform load:**
- The shear diagram is a straight line (linear — first-<abbr title="[→ Ch3] polynomial degree = highest exponent — degree 1 is a straight line, degree 2 is a parabola">degree polynomial</abbr>) that starts positive at A and ends negative at B, crossing zero at mid-span
- The moment diagram is a parabola (second-degree polynomial) that starts and ends at zero, peaks at mid-span

### D. Failure Case

A student draws the BMD as a triangle — connecting the two zero values at the supports to the peak at mid-span with straight lines. At the quarter-span point ($x = L/4$), the triangle gives $M = M_{max}/2$. The actual parabolic formula gives $M(L/4) = \frac{wL}{2} \cdot \frac{L}{4} - \frac{w}{2} \cdot \frac{L^2}{16} = \frac{wL^2}{8} \cdot \frac{3}{4} = 0.75\, M_{max}$.

The triangle underestimates the moment at $x = L/4$ by 25%. A beam designed with reinforcement cut off at the quarter-point based on the triangular diagram would be under-reinforced at that cross-section.

The moment diagram under UDL is a **parabola**, not a triangle. The shape matters for every decision about bar cutoffs and splice locations.

### E. The Rule

Cut at position $x$. Take the simpler side (usually the side with fewer forces). Apply vertical equilibrium and moment equilibrium to that cut segment. The shear $V(x)$ is a polynomial of one degree higher than the load distribution; the moment $M(x)$ is one degree higher still. Peak moment occurs where $V = 0$.

### F. The Formal Shorthand

For a simply-supported beam, span $L$, uniform load $w$ (reactions $R_A = R_B = wL/2$):

$$V(x) = \frac{wL}{2} - wx \qquad M(x) = \frac{wL}{2}x - \frac{w}{2}x^2$$

$V = 0$ at $x = L/2$; maximum moment there:

$$M_{max} = \frac{wL^2}{8}$$

This uses <abbr title="[→ Ch3] evaluate exponents first, then multiply, then divide">order of operations</abbr>: $L^2$ first.

For a concentrated point load $P$ at $a$ from A (reactions from Chapter 9/10):

$$V(x) = \begin{cases} R_A & 0 < x < a \\ R_A - P & a < x < L \end{cases}$$

$$M(x) = \begin{cases} R_A \cdot x & 0 \leq x \leq a \\ R_A \cdot x - P(x - a) & a \leq x \leq L \end{cases}$$

Peak moment at $x = a$: $M_{max} = R_A \cdot a = \frac{P \cdot a(L-a)}{L}$

### G. Full Worked Example — Complete SFD and BMD

**Problem.** Simply-supported beam, $L = 8\ \mathrm{m}$, $w = 12\ \mathrm{kN/m}$. Draw the SFD and BMD; evaluate at $x = 0, 2, 4, 6, 8$ m.

**Reactions:** $R_A = R_B = 12 \times 8 / 2 = 48\ \mathrm{kN}$

**Shear values** $V(x) = 48 - 12x$:

| $x$ (m) | $V(x)$ (kN) |
|---------|------------|
| 0 | +48 |
| 2 | +24 |
| 4 | 0 |
| 6 | −24 |
| 8 | −48 |

**Moment values** $M(x) = 48x - 6x^2$:

| $x$ (m) | $M(x)$ (kN·m) |
|---------|--------------|
| 0 | 0 |
| 2 | 72 |
| 4 | 96 |
| 6 | 72 |
| 8 | 0 |

**SFD sketch:** straight diagonal from $+48$ at $x=0$ to $-48$ at $x=8$, crossing zero at $x=4$.
**BMD sketch:** smooth parabola from $0$ at $x=0$, peaking at $96\ \mathrm{kN \cdot m}$ at $x=4$, back to $0$ at $x=8$.

**Confirmation:** $M_{max} = wL^2/8 = 12 \times 64/8 = 96\ \mathrm{kN \cdot m}\ \checkmark$

**ETABS:** Display > Show Frame Forces > Moment 3-3 should show a smooth parabola peaking at $\approx 96\ \mathrm{kN \cdot m}$ at mid-span. Shear 2-2 should show a straight line from $+48$ to $-48$.

### H. Practice Task

> **Scenario:** A cantilever beam, $L = 5\ \mathrm{m}$, fixed at left, free at right. UDL $w = 10\ \mathrm{kN/m}$.
>
> **Tasks:**
> 1. Find the fixed-end reactions (vertical force and moment)
> 2. Write $V(x)$ and $M(x)$ by cutting at $x$ from the free end (rightward)
> 3. Evaluate at $x = 0, 1, 2, 3, 4, 5\ \mathrm{m}$ (measuring from fixed end)
> 4. Sketch SFD and BMD; identify maxima
>
> **Answers:**
> 1. $V_{fixed} = wL = 50\ \mathrm{kN}$; $M_{fixed} = wL^2/2 = 125\ \mathrm{kN \cdot m}$
> 2. From free end, distance to cut = $(L - x)$: $V(x) = w(L-x)$; $M(x) = -w(L-x)^2/2$
> 3. At $x=0$ (fixed): $V=50, M=-125$; at $x=5$ (free): $V=0, M=0$; at $x=2.5$: $V=25, M=-31.25$
> 4. SFD linear from 50 at fixed to 0 at free; BMD parabola from $-125$ at fixed to $0$ at free

### I. What You Now Know

The SFD and BMD are not just pictures — they are mathematical functions of position $x$. The peak of the BMD is where the SFD crosses zero. Every design decision about how much reinforcement to put where, and where to cut it off, comes from reading the BMD accurately.

| Diagram | Shape under UDL | Formula | Maximum |
|---------|----------------|---------|---------|
| SFD | Linear | $V = wL/2 - wx$ | $wL/2$ at supports |
| BMD (SS) | Parabola | $M = wLx/2 - wx^2/2$ | $wL^2/8$ at mid-span |
| BMD (cantilever) | Parabola | $M = -w(L-x)^2/2$ | $wL^2/2$ at fixed end |

<div style="page-break-after: always;"></div>

## Chapter 12 — Demand vs. Capacity: Is the Member Strong Enough?

### A. Achievement

After this section you can check a beam against three separate design limits — moment, shear, and deflection — compute a demand/capacity ratio for each, and identify which limit governs the design.

### B. The Situation

A steel beam has been selected. Its moment capacity is $M_c = 120\ \mathrm{kN \cdot m}$, shear capacity $V_c = 75\ \mathrm{kN}$, and deflection limit $\delta_{allow} = L/360$. The demand from the factored loads is $M_d = 120\ \mathrm{kN \cdot m}$, $V_d = 60\ \mathrm{kN}$, deflection $\delta_d = 61.5\ \mathrm{mm}$.

Two of these three checks pass. One fails badly — 2.77 times over the limit. Which one, and what would you change?

Without checking all three, a designer can select a beam that passes the obvious moment check but cracks under service load, sags visibly, or fails in shear.

### C. The Intuition

A structural check is always a comparison: is what the loads demand less than what the member can supply?

Think of the demand/capacity (D/C) ratio as a percentage-of-limit. A D/C of 0.80 means you're using 80% of the member's capacity — a reasonable margin remains. A D/C of 1.00 means you're exactly at the limit. A D/C of 1.20 means you've exceeded the limit by 20% — failure.

Every independent failure mode needs its own D/C check. Moment and shear can both cause failure; deflection causes a different kind of problem (serviceability — the floor bounces, plaster cracks, people feel uncomfortable). All three must be checked. The highest ratio governs.

### D. Failure Case

A beam with $w = 25\ \mathrm{kN/m}$, $L = 6\ \mathrm{m}$. The moment check: $M_d = wL^2/8 = 112.5\ \mathrm{kN \cdot m}$, $M_c = 130\ \mathrm{kN \cdot m}$ → ratio $0.87$ — passes. The designer skips shear. Actual shear demand: $V_d = wL/2 = 75\ \mathrm{kN}$. Shear capacity: $V_c = 65\ \mathrm{kN}$. Ratio: $75/65 = 1.15$ — fails by 15%. The beam would fail in shear shortly after construction, even though the moment check passed.

Each failure mode is independent. Passing one tells you nothing about the others.

### E. The Rule

Write every design requirement as an inequality: demand ≤ capacity. Express each as a ratio $D/C \leq 1.0$. Check every independent failure mode. The highest ratio governs — it controls the required member size.

### F. The Formal Shorthand

$$\text{D/C ratio} = \frac{\text{demand}}{\text{capacity}} \leq 1.0$$

Inequality rules — applying the same <abbr title="[→ Ch7] do the same operation to both sides to keep the balance">balance principle</abbr> as equation rearrangement:

| Operation | Result |
|-----------|--------|
| Add/subtract same value | Inequality direction unchanged |
| Multiply/divide by positive | Unchanged |
| Multiply/divide by negative | **Direction flips** |

Example: $-2x \leq 8 \Rightarrow x \geq -4$ (divided both sides by $-2$; direction flipped).

**Standard design checks for a beam:**

| Check | Demand | Capacity symbol |
|-------|--------|----------------|
| Flexure | $M_d = w_u L^2/8$ | $M_c$ or $\phi M_n$ |
| Shear | $V_d = w_u L/2$ | $V_c$ or $\phi V_n$ |
| Deflection | $\delta_d = 5wL^4/(384EI)$ | $\delta_{allow} = L/360$ (typical) |

The deflection formula uses the **service** load (unfactored), not the factored design load.

### G. Full Worked Example — Three-Check Beam Design Verification

**Problem.** A simply-supported steel beam spans $L = 8\ \mathrm{m}$. Factored load: $w_u = 15\ \mathrm{kN/m}$. Service load: $w_{service} = 11\ \mathrm{kN/m}$. Section properties: $M_c = 120\ \mathrm{kN \cdot m}$, $V_c = 75\ \mathrm{kN}$, $I = 65 \times 10^6\ \mathrm{mm^4}$, $E = 200{,}000\ \mathrm{MPa}$.

**Check 1 — Flexure:**
$$M_d = \frac{15 \times 64}{8} = 120\ \mathrm{kN \cdot m}$$
$$\text{D/C} = \frac{120}{120} = 1.00 \quad \checkmark \text{(exactly at limit)}$$

**Check 2 — Shear:**
$$V_d = \frac{15 \times 8}{2} = 60\ \mathrm{kN}$$
$$\text{D/C} = \frac{60}{75} = 0.80 \quad \checkmark$$

**Check 3 — Deflection** (using service load, <abbr title="[→ Ch3] evaluate exponents before multiplying — L⁴ first">PEMDAS</abbr>: $L^4$ first):
$$\delta_{allow} = \frac{L}{360} = \frac{8000}{360} = 22.2\ \mathrm{mm}$$

$$\delta_d = \frac{5 w L^4}{384 E I}$$

Convert to consistent units: $w = 11\ \mathrm{kN/m} = 11\ \mathrm{N/mm}$; $L = 8000\ \mathrm{mm}$; $E = 200{,}000\ \mathrm{N/mm^2}$; $I = 65 \times 10^6\ \mathrm{mm^4}$.

$$L^4 = 8000^4 = 4.096 \times 10^{15}\ \mathrm{mm^4}$$
$$\text{Numerator} = 5 \times 11 \times 4.096 \times 10^{15} = 2.253 \times 10^{17}$$
$$\text{Denominator} = 384 \times 200{,}000 \times 65 \times 10^6 = 4.992 \times 10^{15}$$
$$\delta_d = \frac{2.253 \times 10^{17}}{4.992 \times 10^{15}} = 45.1\ \mathrm{mm}$$

$$\text{D/C} = \frac{45.1}{22.2} = 2.03 \quad \text{✗ FAIL}$$

**Summary:**

| Check | Demand | Capacity | D/C | Result |
|-------|--------|----------|-----|--------|
| Flexure | 120 kN·m | 120 kN·m | 1.00 | ✓ |
| Shear | 60 kN | 75 kN | 0.80 | ✓ |
| **Deflection** | **45.1 mm** | **22.2 mm** | **2.03** | **✗ FAIL** |

**Governing check: deflection.** To fix: increase $I$ (deeper section or wider flange). Doubling $I$ would halve the deflection → D/C $\approx 1.0$.

### H. Practice Task

> **Scenario:** Beam: $L = 6\ \mathrm{m}$, $w_u = 18\ \mathrm{kN/m}$ (factored), $w_{service} = 13\ \mathrm{kN/m}$. Capacities: $M_c = 85\ \mathrm{kN \cdot m}$, $V_c = 55\ \mathrm{kN}$. Deflection limit: $L/360 = 16.7\ \mathrm{mm}$. Section: $I = 35 \times 10^6\ \mathrm{mm^4}$, $E = 200{,}000\ \mathrm{MPa}$.
>
> **Tasks:**
> 1. Compute $M_d$, $V_d$, $\delta_d$
> 2. Compute D/C for each
> 3. Which check governs?
>
> **Answers:**
> 1. $M_d = 18(36)/8 = 81\ \mathrm{kN \cdot m}$; $V_d = 18(6)/2 = 54\ \mathrm{kN}$; $\delta_d = 5(13)(6000)^4/(384 \times 200000 \times 35 \times 10^6)$: numerator = $5 \times 13 \times 1.296 \times 10^{15} = 8.42 \times 10^{16}$; denominator = $384 \times 200000 \times 35 \times 10^6 = 2.688 \times 10^{15}$; $\delta_d = 31.3\ \mathrm{mm}$
> 2. Flexure: $81/85 = 0.95$; Shear: $54/55 = 0.98$; Deflection: $31.3/16.7 = 1.88$
> 3. Deflection governs (1.88). Shear is close to the limit (0.98). Need a section with larger $I$.

### I. What You Now Know

Every structural design ends with a series of D/C ratios. All must be ≤ 1.0. The highest ratio governs the selection. ETABS's Design menu produces exactly this table — color-coded so green (pass) and red (fail) are immediately visible.

| Check | Formula | Unit | Governs when |
|-------|---------|------|-------------|
| Flexure | $M_d/M_c$ | dimensionless | Longer spans, heavier loads |
| Shear | $V_d/V_c$ | dimensionless | Short spans, concentrated loads |
| Deflection | $\delta_d/\delta_{allow}$ | dimensionless | Shallow sections, long spans |

<div style="page-break-after: always;"></div>

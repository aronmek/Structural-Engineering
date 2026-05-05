# Unit 2 — Forces and How They Travel

> A building stands still. This unit explains why — and what the engineer must calculate to confirm it. You will name every kind of force that acts on a structure, trace how those forces travel from slab to soil, isolate any part of the structure on a diagram, and write the equations that prove the structure is in balance.

<div style="page-break-after: always;"></div>

## Chapter 5 — What Forces Act on a Building

### A. Achievement

After this section you can identify every type of force acting on a floor beam, assign the correct unit to each one, and compute the total downward force on the beam.

### B. The Situation

An architect hands you a floor plan. The beam is 6 m long. Above it sits a 200 mm concrete slab. The building will be used as an office. Before any check can begin, you need a complete list of what is pushing down on this beam — every gram of slab, every person who will ever stand on that floor, every piece of furniture.

The problem is not that the loads are hard to compute. The problem is that they come in different forms with different units, and if you try to add them before converting, you get a number that means nothing.

### C. The Intuition

A force is a push or a pull. To fully describe any force you need three things:

1. **Magnitude** — how big is it? (in Newtons or kilonewtons)
2. **Direction** — which way does it point? (up, down, sideways)
3. **Point of application** — where exactly does it act?

Change any one of those three and you have a physically different force, even if the number is the same. A 10 kN push downward in the middle of a beam is completely different from a 10 kN push downward at the end.

Gravity forces from building loads always point downward. Their size comes from mass and Earth's gravitational pull. Earth accelerates any mass toward it at $g = 9.81\ \mathrm{m/s^2}$:

$$W = m \cdot g$$

A 1 m² area of concrete slab 200 mm thick:
- Volume = $1 \times 0.2 = 0.2\ \mathrm{m^3}$
- Mass = $0.2 \times 2500\ \mathrm{kg/m^3} = 500\ \mathrm{kg}$
- Weight = $500 \times 9.81 = 4905\ \mathrm{N} \approx 5\ \mathrm{kN}$

So the slab exerts about $5\ \mathrm{kN}$ per square meter on whatever supports it — this is $5\ \mathrm{kPa}$.

Building loads come in four physical shapes:

- **Point load $P$ [kN]** — a force concentrated at one location: a column landing on a beam, a large machine bolted to a slab.
- **Line load $w$ [kN/m]** — a force spread continuously along a length: a wall sitting on a beam, or the result of converting a slab area load to a beam load.
- **Area load $q$ [kPa = kN/m²]** — a force spread over a surface: floor live load, snow on a roof.
- **Body force / self-weight** — the structure's own weight, distributed throughout its volume.

Structural engineers classify these loads into categories because different categories require different safety factors and behave differently in combinations:

| Category | Symbol | Source | Certainty |
|----------|--------|--------|-----------|
| Dead load | DL | Structural self-weight, finishes, fixed equipment | High — doesn't change |
| Live load | LL | People, furniture, contents | Moderate — varies with use |
| Wind load | WL | Wind pressure on building faces | Variable — modeled statistically |
| Seismic load | EQ | Inertial force from ground motion | Rare but potentially large |

### D. Failure Case

A designer trying to find the total load on a beam adds up the loads without converting units first:

$$q_{slab} + w_{wall} = 5\ \mathrm{kPa} + 4\ \mathrm{kN/m} = 9\ \text{?}$$

The $9$ is meaningless — kPa and kN/m have different dimensions. The area load must first be multiplied by the beam's <abbr title="[→ Ch6] The width of slab whose load flows to a given beam — half the clear distance to each adjacent beam">tributary width</abbr> to get kN/m, then the two line loads can be added. Skipping this step causes an error in the total load and every downstream calculation.

### E. The Rule

Identify every load by type and assign it the correct unit. Convert all area loads to line loads by multiplying by the tributary width. Only then add them — because you can only add quantities with the same unit.

### F. The Formal Shorthand

$$W = m \cdot g \qquad [\mathrm{kg}] \times [\mathrm{m/s^2}] = [\mathrm{N}]$$

$$w\ [\mathrm{kN/m}] = q\ [\mathrm{kPa}] \times b_{\mathrm{trib}}\ [\mathrm{m}]$$

<abbr title="[→ Ch4] write the unit next to every number; cancel units like algebra; mismatch = error">Units</abbr> must travel with every number. A load expressed as $5\ \mathrm{kPa}$ without a tributary width is not yet a line load, no matter how many other operations you perform on it.

**Load path** describes how forces travel from point of origin to foundation:

```
    People, furniture (Live Load)
              ↓
           SLAB (picks up area loads, distributes to beams)
              ↓
          BEAMS (collect line loads, transfer to columns)
              ↓
         COLUMNS (axial compression, pass load to foundations)
              ↓
        FOUNDATIONS (spread load to soil)
              ↓
            SOIL (final destination)
```

Every layer converts the load from the unit of the layer above to a more concentrated form below.

### G. Full Worked Example — Floor Beam Force Inventory

**Problem.** A 6 m office floor beam has a tributary width of $b_{\mathrm{trib}} = 3\ \mathrm{m}$. Loads:
- Slab self-weight: 200 mm concrete at $25\ \mathrm{kN/m^3}$
- Floor finish: $1.5\ \mathrm{kPa}$
- Partition allowance: $1.0\ \mathrm{kPa}$
- Office live load: $3.0\ \mathrm{kPa}$
- Beam self-weight: $2.5\ \mathrm{kN/m}$ (from member schedule)

Identify each force, convert to kN/m, and compute total downward load.

**Step 1 — Slab self-weight:**
$$q_{slab} = 25 \times 0.200 = 5.0\ \mathrm{kPa} \quad\Rightarrow\quad w_{slab} = 5.0 \times 3 = 15.0\ \mathrm{kN/m}$$

**Step 2 — Finish:**
$$w_{finish} = 1.5 \times 3 = 4.5\ \mathrm{kN/m}$$

**Step 3 — Partitions:**
$$w_{part} = 1.0 \times 3 = 3.0\ \mathrm{kN/m}$$

**Step 4 — Live load:**
$$w_{LL} = 3.0 \times 3 = 9.0\ \mathrm{kN/m}$$

**Step 5 — Beam self-weight:**
$$w_{sw} = 2.5\ \mathrm{kN/m} \quad\text{(already a line load)}$$

**Step 6 — Total line load:**
$$w_{total} = 15.0 + 4.5 + 3.0 + 9.0 + 2.5 = 34.0\ \mathrm{kN/m}$$

**Step 7 — Total downward force:**
$$F_{total} = w_{total} \times L = 34.0 \times 6 = 204\ \mathrm{kN}$$

The two supports together must push upward with $204\ \mathrm{kN}$ to keep this beam in place. Chapter 8 shows how to find each support's contribution.

**Sanity estimate:** $\approx 34 \times 6 = 204\ \mathrm{kN}$ — a 6 m beam in a 3 m wide strip carrying ~5 kPa self-weight plus live load should be on the order of 100–300 kN. Plausible.

### H. Practice Task

> **Scenario:** A 5 m long roof beam, tributary width $2.0\ \mathrm{m}$:
> - Roof slab: 150 mm concrete
> - Waterproofing and finishes: $0.5\ \mathrm{kPa}$
> - Roof live load: $1.5\ \mathrm{kPa}$ (maintenance access)
> - Beam self-weight: $1.8\ \mathrm{kN/m}$
>
> **Tasks:**
> 1. List each load type and category (DL or LL)
> 2. Convert all area loads to line loads
> 3. Find the total line load in kN/m
> 4. Find the total downward force in kN
>
> **Answers:**
> 1. Slab = DL; finishes = DL; live = LL; self-weight = DL
> 2. Slab: $25 \times 0.15 = 3.75\ \mathrm{kPa} \Rightarrow 3.75 \times 2 = 7.5\ \mathrm{kN/m}$; Finishes: $0.5 \times 2 = 1.0\ \mathrm{kN/m}$; Live: $1.5 \times 2 = 3.0\ \mathrm{kN/m}$; SW = 1.8 kN/m
> 3. $w = 7.5 + 1.0 + 3.0 + 1.8 = 13.3\ \mathrm{kN/m}$
> 4. $F = 13.3 \times 5 = 66.5\ \mathrm{kN}$

### I. What You Now Know

Forces have type, magnitude, direction, and location. Area loads must be converted to line loads before they can be combined with other line loads. The load path runs from slab to beam to column to foundation.

| Concept | Formula | Unit | Engineering Use |
|---------|---------|------|----------------|
| Weight | $W = mg$ | N or kN | Converting mass to force |
| Area to line load | $w = q \times b_{\mathrm{trib}}$ | kN/m | Beam load calculation |
| Point load | $P$ | kN | Column, concentrated force |
| Load path | slab → beam → column → foundation | — | Tracing force flow |

Chapter 6 explains how to find the tributary width correctly from the floor geometry.

<div style="page-break-after: always;"></div>

## Chapter 6 — Tributary Areas and Load Accumulation

### A. Achievement

After this section you can compute the factored design line load on any interior floor beam — correctly identifying each beam's tributary width, converting each load component to kN/m, and applying the code-required load combination.

### B. The Situation

A floor has five parallel beams, evenly spaced at 3 m centres, spanning 8 m. Each beam carries a different share of the floor load — the outer beams carry half as much as the inner ones. You need to know exactly which strip of floor "belongs to" each beam before you can compute any load.

### C. The Intuition

Picture a field with rain falling uniformly. Each ditch collects the rainwater from the strip of ground between it and its neighboring ditches. The water flows to whichever ditch is closest. A structural beam works the same way: the floor load flows to the nearest beam. The strip from which a beam collects load is called its **tributary width**.

```
      Beam 1      Beam 2       Beam 3       Beam 4
        |            |            |            |
        |<--1.5 m--->|<--1.5 m--->|<--1.5 m--->|
              ^            ^            ^
         b_trib=3m    b_trib=3m    b_trib=3m
         (Beam 2)    (Beam 3)     (Beam 4)
```

Interior beams (2, 3, 4) each own 1.5 m of slab on each side = 3 m total. The edge beams (1 and 5 in a real 5-beam layout) own only 1.5 m on one side = 1.5 m.

Once you know the tributary width, the conversion from area load to line load is the <abbr title="[→ Ch2] rate × quantity gives the total — multiply load intensity by the width it covers">scaling</abbr> operation from Chapter 2:

$$w\ [\mathrm{kN/m}] = q\ [\mathrm{kPa}] \times b_{\mathrm{trib}}\ [\mathrm{m}]$$

**Why safety factors?** The code applies load factors because loads are not known with certainty. The actual live load on a floor on any given day could be higher than the code value. A factor of 1.6 on live load means: "design as if the live load is 60% larger than our best estimate, because people might exceed our estimate." The factor on dead load (1.2) is smaller because permanent loads are known more precisely.

### D. Failure Case

A designer computes the total area dead load as $DL_{area} = 5\ \mathrm{kPa}$, applies the factor immediately: $1.2 \times 5 = 6\ \mathrm{kPa}$, and adds the factored live load: $1.6 \times 3 = 4.8\ \mathrm{kPa}$, getting $10.8\ \mathrm{kPa}$. Then multiplies by tributary width: $10.8 \times 3 = 32.4\ \mathrm{kN/m}$.

This is accidentally correct for a simple case with no self-weight line load. But when the beam carries an additional self-weight of $3\ \mathrm{kN/m}$ (which has no tributary width), the approach breaks. The correct method:

- $w_{DL,area} = 5 \times 3 = 15\ \mathrm{kN/m}$ plus $w_{sw} = 3\ \mathrm{kN/m}$ → $w_{DL,total} = 18\ \mathrm{kN/m}$
- $w_{LL} = 3 \times 3 = 9\ \mathrm{kN/m}$
- Factored: $1.2(18) + 1.6(9) = 21.6 + 14.4 = 36.0\ \mathrm{kN/m}$

The shortcut gives $32.4 + 1.2(3) = 36.0$ only if you remember to add the factored self-weight separately — easy to miss.

### E. The Rule

Convert each load type separately from area load (kPa) to line load (kN/m) by multiplying by the tributary width. Add line loads by category (total DL, total LL). Then apply the load combination factors. This order prevents errors when some loads have tributary widths and others don't.

### F. The Formal Shorthand

$$b_{\mathrm{trib}} = \frac{s_{\mathrm{left}}}{2} + \frac{s_{\mathrm{right}}}{2}$$

where $s_{\mathrm{left}}$ and $s_{\mathrm{right}}$ are the beam spacings to the left and right neighbors.

$$w_u = 1.2\,w_{DL} + 1.6\,w_{LL} \qquad \text{(gravity combination, ASCE 7)}$$

Other combinations apply when wind or seismic loads govern:
- $1.2\,DL + 1.0\,LL + 1.0\,WL$
- $0.9\,DL + 1.0\,WL$ (wind uplift on a light roof)

**Maximum factored moment for UDL:**
$$M_{\max} = \frac{w_u L^2}{8}$$

This formula uses the <abbr title="[→ Ch3] evaluate exponents before multiplying — L² first, then × w, then ÷ 8">order of operations</abbr> from Chapter 3: compute $L^2$ first.

### G. Full Worked Example — Office Floor Interior Beam

**Problem.** An office floor bay is $5\ \mathrm{m} \times 8\ \mathrm{m}$ (width × span). Interior beams are spaced at $5\ \mathrm{m}$ centres (so only one beam at mid-width). Loads:
- Slab: 200 mm concrete ($25\ \mathrm{kN/m^3}$)
- Superimposed DL: finishes $1.5\ \mathrm{kPa}$ + partitions $1.0\ \mathrm{kPa}$
- Live load: $3.0\ \mathrm{kPa}$ (office)
- Beam self-weight: $3.5\ \mathrm{kN/m}$

Find the factored design line load $w_u$ and maximum moment $M_{\max}$ for the $L = 8\ \mathrm{m}$ span.

**Step 1 — Tributary width:**
Beam is at the center of a $5\ \mathrm{m}$ wide bay with edge beams on each side:
$$b_{\mathrm{trib}} = \frac{5}{2} + \frac{5}{2} = 5.0\ \mathrm{m}$$
(Interior beams collecting from both sides of a 5 m bay each own 2.5 m + 2.5 m = 5 m total.)

**Step 2 — Slab self-weight as area load:**
$$q_{slab} = 25 \times 0.200 = 5.0\ \mathrm{kPa}$$

**Step 3 — Total area dead load:**
$$q_{DL} = 5.0 + 1.5 + 1.0 = 7.5\ \mathrm{kPa}$$

**Step 4 — Convert to line loads:**
$$w_{DL,area} = 7.5 \times 5.0 = 37.5\ \mathrm{kN/m}$$
$$w_{DL} = 37.5 + 3.5 = 41.0\ \mathrm{kN/m}$$
$$w_{LL} = 3.0 \times 5.0 = 15.0\ \mathrm{kN/m}$$

**Step 5 — Factored combination:**
$$w_u = 1.2(41.0) + 1.6(15.0) = 49.2 + 24.0 = 73.2\ \mathrm{kN/m}$$

**Step 6 — Maximum moment:**
$$M_{\max} = \frac{w_u L^2}{8} = \frac{73.2 \times 64}{8} = \frac{4684.8}{8} = 585.6\ \mathrm{kN \cdot m}$$

**Sanity check:** $\approx 70 \times 64 / 8 = 560\ \mathrm{kN \cdot m}$. Close enough — factor-of-10 error would show as $\approx 56$ or $\approx 5600$, neither of which matches, so the calculation passes the <abbr title="[→ Ch4] round to nearest power of 10, compute fast — catches 10× errors before they reach a drawing">order-of-magnitude test</abbr>.

### H. Practice Task

> **Scenario:** A residential floor (apartment building). Beam spacing: 3.6 m. Slab: 180 mm concrete. Finishes: $1.0\ \mathrm{kPa}$. Partitions: $0.5\ \mathrm{kPa}$. Live load: $2.0\ \mathrm{kPa}$. Beam self-weight: $2.0\ \mathrm{kN/m}$. Span: $L = 6\ \mathrm{m}$. Interior beam.
>
> **Tasks:**
> 1. Find the tributary width
> 2. Compute $w_{DL}$ and $w_{LL}$ in kN/m
> 3. Compute $w_u = 1.2DL + 1.6LL$
> 4. Find $M_{\max}$
>
> **Answers:**
> 1. $b_{\mathrm{trib}} = 3.6/2 + 3.6/2 = 3.6\ \mathrm{m}$
> 2. $q_{DL} = 25(0.18) + 1.0 + 0.5 = 4.5 + 1.5 = 6.0\ \mathrm{kPa}$; $w_{DL} = 6.0 \times 3.6 + 2.0 = 21.6 + 2.0 = 23.6\ \mathrm{kN/m}$; $w_{LL} = 2.0 \times 3.6 = 7.2\ \mathrm{kN/m}$
> 3. $w_u = 1.2(23.6) + 1.6(7.2) = 28.32 + 11.52 = 39.84\ \mathrm{kN/m}$
> 4. $M_{\max} = 39.84 \times 36 / 8 = 1434.2 / 8 = 179.3\ \mathrm{kN \cdot m}$

### I. What You Now Know

Tributary width defines which load belongs to which beam. Load factors convert characteristic loads to design loads. The combination $1.2DL + 1.6LL$ is the standard gravity design check. Chapter 7 shows how to draw the FBD of this loaded beam to set up the equations that find each support force.

| Concept | Formula | Engineering Use |
|---------|---------|----------------|
| Tributary width | $b_{\mathrm{trib}} = s_{left}/2 + s_{right}/2$ | How much slab load a beam collects |
| Area→line | $w = q \times b_{\mathrm{trib}}$ | Convert kPa to kN/m |
| Gravity combo | $w_u = 1.2DL + 1.6LL$ | Design load for member sizing |
| Max moment | $M_{\max} = w_u L^2/8$ | Initial beam selection |

<div style="page-break-after: always;"></div>

## Chapter 7 — Free Body Diagrams: Isolating the Problem

### A. Achievement

After this section you can draw a complete Free Body Diagram for a loaded beam and rearrange any structural formula to solve for the unknown variable — finding a required beam depth, a maximum allowable span, or a minimum cross-sectional area.

### B. The Situation

You have a beam with a known total load. You need to find out how much each support pushes back. You also need to find the minimum required moment capacity, and from that, figure out what depth of section is needed. There are several unknowns in that chain, and the formulas aren't written with your particular unknown on the left side.

Two tools solve this. The first is a picture — the Free Body Diagram — that shows everything acting on the beam. The second is algebra — the ability to rearrange any formula until the unknown stands alone.

### C. The Intuition

**The FBD idea.** Draw the beam in space, cut free from everything around it. Replace every physical connection with the force that connection exerts. An engineer who draws the FBD properly has already solved half the problem: once every force is visible on the diagram, writing the equations is mechanical.

Draw the FBD like this:
1. Sketch just the beam — no supports, no neighboring structure
2. Show all downward loads as arrows with labels and magnitudes
3. Show every support as an upward arrow with an unknown label ($R_A$, $R_B$)
4. Write the dimensions: span, load positions

```
           w = 34.0 kN/m (uniform load, downward)
           ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓
    ────────────────────────────────
    ^                              ^
   R_A                            R_B
    |<──────────── L = 6 m ──────>|
```

**The rearrangement idea.** A structural formula is a balance — both sides always equal each other, like a perfectly level scale. To find an unknown, you do the same operation to both sides until the unknown stands alone.

Formula: $\sigma = P/A$. You know $\sigma = 5000\ \mathrm{kN/m^2}$ and $P = 600\ \mathrm{kN}$. Find $A$.

The formula says $\sigma$ equals $P$ divided by $A$. To get $A$ alone on the right, multiply both sides by $A$: $\sigma A = P$. Then divide both sides by $\sigma$: $A = P/\sigma = 600/5000 = 0.12\ \mathrm{m^2}$.

No tricks. Just keeping the balance, and undoing what is in the way.

### D. Failure Case

An engineer skips the FBD and works entirely from memory. The beam has a $40\ \mathrm{kN/m}$ load over $6\ \mathrm{m}$. The engineer recalls "reactions are half the total load each" — which is only true for a symmetric setup.

If the load is not centered, or if there is also a point load at one end, the "half-each" assumption is wrong. The correct answer requires writing the equations from the FBD. Without the diagram, critical asymmetry is invisible.

### E. The Rule

Draw the FBD before writing any equation. Label every force — both knowns and unknowns. Write the equation for each condition. Then rearrange the equation until the unknown is the subject.

### F. The Formal Shorthand

**FBD construction steps:**
1. Sketch the free body alone
2. Apply all external loads (magnitude, direction, location)
3. Show support forces as arrows in their anticipated direction, labeled $R_A$, $R_B$, etc.
4. Label all dimensions

**Formula rearrangement rules:**

| Operation | How to undo it |
|-----------|---------------|
| Divided by $x$ | Multiply both sides by $x$ |
| Multiplied by $x$ | Divide both sides by $x$ |
| Added $x$ | Subtract $x$ from both sides |
| Subtracted $x$ | Add $x$ to both sides |
| Squared ($x^2$) | Take square root $\sqrt{\ }$ of both sides |

**Example chain:** Rearrange $M = wL^2/8$ for $L$.

$$M = \frac{wL^2}{8} \quad\xrightarrow{\times 8}\quad 8M = wL^2 \quad\xrightarrow{\div w}\quad \frac{8M}{w} = L^2 \quad\xrightarrow{\sqrt{\ }}\quad L = \sqrt{\frac{8M}{w}}$$

<abbr title="[→ Ch4] write the unit next to every number; the result's unit follows automatically from the algebra">Units</abbr> travel through every rearrangement step. If $M$ is in kN·m and $w$ in kN/m, then $8M/w$ has units $\mathrm{kN \cdot m} / (\mathrm{kN/m}) = \mathrm{m^2}$, so $L = \sqrt{\mathrm{m^2}} = \mathrm{m}$. This confirms the rearrangement is correct.

### G. Full Worked Example — FBD to Reactions to Section Sizing

**Problem.** The beam from Chapter 6 (G): $w_u = 73.2\ \mathrm{kN/m}$, $L = 8\ \mathrm{m}$, simply supported (symmetric). 

**Part 1 — Draw the FBD:**
```
      w_u = 73.2 kN/m
      ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓
  ─────────────────────────────
  ^                           ^
  R_A                        R_B
  |<─────── L = 8 m ────────>|
```

**Part 2 — Find the reactions:**

By symmetry, $R_A = R_B$. Using vertical force balance:
$$R_A + R_B = w_u \times L = 73.2 \times 8 = 585.6\ \mathrm{kN}$$
$$R_A = R_B = 585.6 / 2 = 292.8\ \mathrm{kN}$$

**Part 3 — Find the required moment capacity:**
$$M_{\max} = \frac{w_u L^2}{8} = \frac{73.2 \times 64}{8} = 585.6\ \mathrm{kN \cdot m}$$

**Part 4 — Rearrange for required section modulus:**

The bending stress formula is $\sigma = M \cdot c / I = M/S$ where $S = I/c$ is the section modulus. The steel yield stress limit gives $S_{\min} = M/f_y$.

For a steel beam with $f_y = 250\ \mathrm{MPa} = 250\ \mathrm{kN/cm^2}$:
$$S_{\min} = \frac{M}{f_y} = \frac{585.6\ \mathrm{kN \cdot m}}{250\ \mathrm{kN/cm^2}} = \frac{58560\ \mathrm{kN \cdot cm}}{250\ \mathrm{kN/cm^2}} = 234.2\ \mathrm{cm^3}$$

This tells the engineer to select a steel section with $S \geq 234\ \mathrm{cm^3}$ from the section tables.

### H. Practice Task

> **Scenario:** A beam spans $L = 6\ \mathrm{m}$, symmetric, with a uniform factored load $w_u = 45\ \mathrm{kN/m}$ and an additional point load $P = 30\ \mathrm{kN}$ at mid-span.
>
> **Tasks:**
> 1. Draw and label the FBD
> 2. Find the total downward load
> 3. Use symmetry to find $R_A$ and $R_B$
> 4. Rearrange $M = wL^2/8$ for $w$ and find what uniform load alone would produce the same total moment
>
> **Answers:**
> 1. FBD: beam with $w_u = 45\ \mathrm{kN/m}$ (uniform) + $P = 30\ \mathrm{kN}$ at center; $R_A$ and $R_B$ up at ends
> 2. $F_{total} = 45(6) + 30 = 270 + 30 = 300\ \mathrm{kN}$
> 3. $R_A = R_B = 300/2 = 150\ \mathrm{kN}$
> 4. $w = 8M/L^2$; combined moment from UDL: $M_{UDL} = 45(36)/8 = 202.5\ \mathrm{kN \cdot m}$; midspan point load adds $M_{point} = PL/4 = 30(6)/4 = 45\ \mathrm{kN \cdot m}$; total $M = 247.5\ \mathrm{kN \cdot m}$; equivalent $w = 8(247.5)/36 = 55\ \mathrm{kN/m}$

### I. What You Now Know

The FBD makes every force visible. Formula rearrangement finds any unknown by keeping the equation balanced. These two tools unlock every later chapter — every time a formula is used to find an unknown, this chapter's method applies.

| Concept | Method | Engineering Use |
|---------|--------|----------------|
| FBD | Sketch + label all forces | Set up equilibrium equations |
| Formula rearrangement | Undo operations one at a time | Solve for any unknown |
| Reaction (symmetric) | $R = \text{Total}/2$ | Quick check |
| Reaction (general) | Requires Chapter 9 (moment equilibrium) | Asymmetric loading |

Chapter 8 provides the formal equilibrium equations that every FBD leads to.

<div style="page-break-after: always;"></div>

## Chapter 8 — Equilibrium: The Condition Every Structure Must Satisfy

### A. Achievement

After this section you can verify that a given set of support reactions correctly satisfies vertical and horizontal force balance — and solve for both reactions when the beam is symmetric — using $\Sigma F_y = 0$ and $\Sigma F_x = 0$.

### B. The Situation

A beam carries loads and stays perfectly still. The supports must be pushing back with exactly the right forces. If they push too little, the beam falls. If they push too much — well, that can't happen in a real structure; the loads simply are what they are, and the supports must match them exactly.

The engineering question is: what is that exact amount?

### C. The Intuition

Newton's First Law: an object at rest stays at rest if and only if no unbalanced force acts on it. A building at rest has been at rest since it was built. Therefore, every force on it — at every point, in every direction — is exactly balanced by other forces. This is **static equilibrium**.

Think of a perfectly level balance scale. Add a weight on one side and something on the other side must match it exactly or the scale tips. A structural beam is that scale, with loads on one side of the balance and support reactions on the other.

Balance applies separately in every direction:
- **Vertical:** all upward forces must equal all downward forces
- **Horizontal:** all leftward forces must equal all rightward forces
- **Rotational:** the beam must also not spin — this requires moment equilibrium, taught in Chapter 10

The <abbr title="[→ Ch1] positive = chosen direction, negative = opposite; the signed sum tells whether anything is left over">signed number</abbr> idea from Chapter 1 makes this precise: choose up as positive, then $+R_A + R_B - w \cdot L = 0$ says "upward forces cancel downward forces exactly."

### D. Failure Case

A $6\ \mathrm{m}$ beam carries $P = 60\ \mathrm{kN}$ at $x = 2\ \mathrm{m}$ from the left end. An engineer "feels" the answer: the left support is closer to the load, so it carries more — guess $R_A = 50\ \mathrm{kN}$, $R_B = 10\ \mathrm{kN}$.

Check: $50 + 10 = 60\ \mathrm{kN}\ \checkmark$ — vertical balance satisfied. So the guess passes the only equation the engineer checked.

But Chapter 10's moment equation gives: $R_A = P(L - a)/L = 60(4)/6 = 40\ \mathrm{kN}$, $R_B = Pa/L = 60(2)/6 = 20\ \mathrm{kN}$. The guess was wrong by $10\ \mathrm{kN}$ on each support. For a non-symmetric beam, vertical force balance alone is insufficient; there is only one correct answer and it requires the moment equation.

For a **symmetric** beam, however, vertical balance is all you need — because symmetry provides the second condition $R_A = R_B$ directly.

### E. The Rule

Write $\Sigma F_y = 0$ and $\Sigma F_x = 0$ and solve the equations. For a symmetric beam, symmetry ($R_A = R_B$) provides the second condition. For any non-symmetric beam, a third equation — moment equilibrium — is needed (Chapter 10).

### F. The Formal Shorthand

$$\Sigma F_x = 0: \quad \text{sum of horizontal forces} = 0$$
$$\Sigma F_y = 0: \quad \text{sum of vertical forces} = 0$$

Choose the sign convention once: **up is positive**, right is positive. Apply consistently.

For a symmetric simply-supported beam with total load $W$:
$$R_A + R_B = W \quad \text{and} \quad R_A = R_B \quad \Rightarrow \quad R_A = R_B = \frac{W}{2}$$

For a beam with multiple vertical loads $P_1, P_2, \ldots$ acting downward:
$$\Sigma F_y = 0: \quad R_A + R_B - P_1 - P_2 - \cdots = 0$$

This gives one equation in two unknowns. The second equation comes from either symmetry or moment equilibrium.

### G. Full Worked Example — Symmetric Beam with UDL and Point Load

**Problem.** A simply-supported symmetric beam spans $L = 10\ \mathrm{m}$. It carries:
- Uniform factored load $w_u = 25\ \mathrm{kN/m}$ (dead + live, factored)
- Centred point load $P = 40\ \mathrm{kN}$ at $x = 5\ \mathrm{m}$

Draw the FBD, write vertical equilibrium, solve for $R_A$ and $R_B$.

**FBD:**
```
   P = 40 kN
       |           w_u = 25 kN/m
       v    ↓ ↓ ↓ ↓ v ↓ ↓ ↓ ↓ ↓
   ────────────────────────────────
   ^                              ^
  R_A                            R_B
   |<──────────── 10 m ─────────>|
```

**Step 1 — Total downward load:**
$$W = w_u L + P = 25 \times 10 + 40 = 250 + 40 = 290\ \mathrm{kN}$$

**Step 2 — Vertical equilibrium:**
$$\Sigma F_y = 0: \quad R_A + R_B - 290 = 0 \quad \Rightarrow \quad R_A + R_B = 290\ \mathrm{kN}$$

**Step 3 — Symmetry** (both load distributions are centered on the span):
$$R_A = R_B = 290 / 2 = 145\ \mathrm{kN}$$

**Step 4 — Check:**
$$\Sigma F_y = 145 + 145 - 250 - 40 = 0\ \checkmark$$

Each support must provide exactly $145\ \mathrm{kN}$ upward. ETABS joint reactions should confirm this value after analysis.

### H. Practice Task

> **Scenario:** A symmetric floor beam: $L = 8\ \mathrm{m}$, $w_u = 30\ \mathrm{kN/m}$, plus two identical point loads $P = 20\ \mathrm{kN}$ each, placed symmetrically at $x = 2\ \mathrm{m}$ and $x = 6\ \mathrm{m}$.
>
> **Tasks:**
> 1. Find total downward load
> 2. Apply $\Sigma F_y = 0$
> 3. Invoke symmetry
> 4. Check by writing $\Sigma F_y$ with explicit signs
>
> **Answers:**
> 1. $W = 30(8) + 20 + 20 = 240 + 40 = 280\ \mathrm{kN}$
> 2. $R_A + R_B = 280\ \mathrm{kN}$
> 3. $R_A = R_B = 140\ \mathrm{kN}$
> 4. $\Sigma F_y = +140 + 140 - 240 - 20 - 20 = 280 - 280 = 0\ \checkmark$

### I. What You Now Know

Equilibrium is the one condition every standing structure satisfies: all forces sum to zero. Vertical force balance gives one equation. For symmetric beams, that is sufficient. For general beams, Chapter 10 (moments) provides the second equation needed to find both reactions.

| Equation | Meaning | When sufficient |
|----------|---------|----------------|
| $\Sigma F_y = 0$ | Vertical forces cancel | Always required |
| $\Sigma F_x = 0$ | Horizontal forces cancel | When lateral loads exist |
| Symmetry: $R_A = R_B$ | Loads are centered | Symmetric spans only |
| $\Sigma M = 0$ | Rotational balance | Required for asymmetric beams (Chapter 10) |

<div style="page-break-after: always;"></div>

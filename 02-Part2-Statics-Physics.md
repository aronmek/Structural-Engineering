# PART 2 — STATICS AND PHYSICS FOR STRUCTURAL ENGINEERS

> Welcome to Part 2. You already used the core statics idea once in Chapter A1: upward and downward forces can be treated as signed quantities, and a still beam has a signed sum of zero. This part now gives that idea its full engineering vocabulary: forces, supports, moments, loads, stress, and load paths.

<div style="page-break-after: always;"></div>

## Chapter 10 — Forces, Loads, and the Free Body Diagram

### A. Achievement

After this section you can draw a complete Free Body Diagram for a floor beam — identifying every load type, converting area loads to line loads, computing the total downward force, and labeling support reaction placeholders.

### B. The Situation

A 6 m floor beam in an office building supports a concrete slab above it. Before you can check whether the beam is strong enough, you need to know exactly what is pushing down on it and how much. Several things are acting: the slab's own weight, floor finishes, partitions, and live load from people. They have different units (kPa, kN/m³, kN/m) and spread over area or length differently.

The first step is always the same: draw the object in isolation with every force shown as an arrow. That drawing is the Free Body Diagram (FBD). Without it, you will miss loads, confuse directions, and make errors before any math begins.

### C. The Intuition

A force is a push or a pull. To fully describe it you need three things: how big (magnitude), which way (direction), and where it acts (point of application). Change any one of those three and you have a physically different force — even with the same number.

Forces from gravity always point downward. Their size comes from mass ($m$) and Earth's pull ($g = 9.81\ \mathrm{m/s^2}$): $W = mg$. This converts a code value in kg/m² to a design force in kPa.

### D. Failure Case

A designer skips the FBD and goes directly to a formula. The beam carries slab self-weight ($5\ \mathrm{kPa}$) and live load ($3\ \mathrm{kPa}$) over a tributary width of $3\ \mathrm{m}$. The designer adds $5 + 3 = 8$ and calls it the line load: $8\ \mathrm{kN/m}$.

Actual line load: $8\ \mathrm{kPa} \times 3\ \mathrm{m} = 24\ \mathrm{kN/m}$ — three times larger. The FBD would have made the multiplication by tributary width visible and required.

### E. The Rule

Draw the FBD first. Label every load with magnitude and direction. Convert area loads to line loads by multiplying by tributary width. Mark support forces as upward arrows with unknown values — those are solved by equilibrium in Chapter 11.

### F. The Formal Shorthand

$$W = m \cdot g \qquad w\ [\mathrm{kN/m}] = q\ [\mathrm{kPa}] \times b_{\mathrm{trib}}\ [\mathrm{m}]$$

**Force types:**

| Type | Symbol | Units | Source |
|------|--------|-------|--------|
| Point load | $P$ | kN | Column or concentrated force |
| Line load | $w$ | kN/m | Area load × tributary width |
| Area load | $q$ | kPa | Floor live load, slab self-weight |
| Self-weight | $w_{sw}$ | kN/m | Member's own weight per length |

**Load classification:** Dead load (DL) = permanent; Live load (LL) = variable; Wind/Seismic = lateral, code-specified. Design combines them with factors: $1.2\,\mathrm{DL} + 1.6\,\mathrm{LL}$ is the most common gravity combination.

**Load path:** loads travel from where applied down to foundations: slab → beams → columns → foundations → soil.

Now we give the push or pull its engineering name: **force**.

To fully describe a force you need three things:

1. **How big** is it? (magnitude)
2. **Which way** does it point? (direction)
3. **Where** is it applied? (point of application)

A 10 kN force pushing down on the roof is completely different from a 10 kN force pulling sideways on a wall. Same magnitude — different physical effect. The signed-number idea from Chapter A1 handles one straight line of direction; this chapter adds the rest of the description: where the force acts and what type of load it is.

> **Real-world analogy:** Pushing a shopping cart. The force you apply has size (how hard), direction (forward, sideways), and a point (the handle). Push the cart on its corner and it spins; push at the handle and it rolls — same magnitude, different effect, all because of point and direction.



**Mass vs. weight.** Mass is the amount of stuff in an object — it doesn't change whether you're on Earth or the Moon. Weight is the force of gravity pulling on that mass. Earth's gravity is $g = 9.81\ \mathrm{m/s^2}$.

$$W = m \cdot g$$

A person with mass $m = 70\ \mathrm{kg}$ has weight:
$W = 70 \times 9.81 = 686.7\ \mathrm{N} = 0.687\ \mathrm{kN}$

**Why this matters:** Structural engineers work with forces (Newtons, kN), not masses (kilograms). When a code says "live load = 250 kg/m²", you must multiply by $g$ to get the force load: $250 \times 9.81 = 2452.5\ \mathrm{N/m^2} \approx 2.5\ \mathrm{kPa}$.

**Types of forces in structures:**

```
Point load (P):              Distributed load (w):
                             
       P                       w  (kN/m, evenly spread)
       |                       ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓
       v                     ────────────────────
   ────┬────                 
       ^
   one location              spread along a length
```

| Type | Symbol | Units | Example |
|------|--------|-------|---------|
| Point load | $P$ | kN | A column landing on a beam |
| Line load | $w$ | kN/m | Wall sitting on a beam |
| Area load | $q$ | kN/m² (= kPa) | Floor live load |
| Self-weight | (auto) | kN | Structure's own weight |

**The Free Body Diagram (FBD).** This is the single most important drawing tool in statics. You isolate one body and draw every force acting *on* it as an arrow. At this stage, focus on applied forces and support forces. The formal support-reaction vocabulary is introduced in Chapter 11 and support types are introduced in Chapter 14.


**Formulas and Derivations**


Every force is a **vector**: it has both magnitude and direction. You already used the one-line version of this in Chapter A1 when up was positive and down was negative. We will study full two-dimensional vectors in Chapter 21. For now, treat a force as an arrow with:

- a number (the magnitude, in kN)
- an arrowhead pointing in the direction
- a starting point (the point of application)

To draw an FBD:

1. Sketch the body alone
2. Draw all applied loads as arrows in their actual directions
3. Draw any obvious support force arrows, such as a table pushing upward
4. Label every known arrow with its magnitude


**Full Worked Examples**


**Problem.** A 5 m member has:
- A uniform downward load from self-weight: $w_{sw} = 5\ \mathrm{kN/m}$
- A uniform downward load from finishes: $w_{ff} = 2\ \mathrm{kN/m}$
- A uniform downward live load: $w_{ll} = 8\ \mathrm{kN/m}$
- A point load $P = 30\ \mathrm{kN}$ at the middle

Draw the applied-load part of the FBD and compute total downward load.

```
                          P = 30 kN
                              |
                              v
        Total w = 15 kN/m  ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓
                          ──────┬──────────
                          |<──── 5 m ─────>|
```

Total distributed load: $w = 5 + 2 + 8 = 15\ \mathrm{kN/m}$
Total distributed force: $w \times L = 15 \times 5 = 75\ \mathrm{kN}$
Plus point load: $30\ \mathrm{kN}$
Total downward: $105\ \mathrm{kN}$

The formal support reactions needed to hold this member are explained in Chapter 11. For now, the force skill is identifying the loads, giving each one the correct type and unit, and summing the downward load that must later be balanced.


**ETABS Connection**


Forces are entered in ETABS through several menus, each matching a physical type:

| Force Type | ETABS Menu |
|-----------|-----------|
| Point load on a joint | Assign > Joint Loads > Forces |
| Point load on a frame | Assign > Frame Loads > Point |
| Distributed line load on a frame | Assign > Frame Loads > Distributed |
| Area load on a slab | Assign > Area Loads > Uniform |
| Self-weight | Set in load pattern multiplier |

> **Try it in ETABS 22:**
> 1. Create a 5 m horizontal frame object
> 2. **Define > Load Patterns** — add "DL" (Self Weight Multiplier = 1)
> 3. **Assign > Frame Loads > Distributed** — select the beam, apply $w = 7\ \mathrm{kN/m}$ in DL (this represents finishes)
> 4. Add "LL" load pattern with multiplier 0
> 5. **Assign > Frame Loads > Distributed** — apply $w = 8\ \mathrm{kN/m}$ in LL
> 6. **Assign > Frame Loads > Point** — apply $P = 30\ \mathrm{kN}$ at mid-span in LL
> 7. Do not solve it yet; this task is only about entering the forces in the correct directions

### G. Full Worked Example

1. **Confusing kg and kN.** Self-weight code values often appear as "kg/m²" — multiply by 9.81 and divide by 1000 to get kPa.
2. **Mixing the object and the forces.** The FBD should make force arrows easy to see; support details come later.
3. **Missing self-weight.** The structure weighs something even before any external load — always include it.

### H. Practice Task — Floor Beam Load FBD

> **Scenario:** A 6 m long floor beam supports:
> - A 200 mm thick concrete slab tributary 2.5 m wide
> - Floor finish: $1.0\ \mathrm{kPa}$
> - Live load: $3.0\ \mathrm{kPa}$
> - Self-weight of the beam itself: 4 kN/m
>
> **Tasks:**
> 1. Convert each area load to a line load on the beam (kN/m)
> 2. Sum to find total $w$
> 3. Draw the applied downward loads on an FBD
> 4. Compute total downward load on the beam

> **Worked Solution:**
>
> **Slab self-weight:** $25\ \mathrm{kN/m^3} \times 0.2\ \mathrm{m} = 5\ \mathrm{kPa}$
> $w_{slab} = 5\ \mathrm{kPa} \times 2.5\ \mathrm{m} = 12.5\ \mathrm{kN/m}$
>
> **Finishes:** $1.0 \times 2.5 = 2.5\ \mathrm{kN/m}$
>
> **Live:** $3.0 \times 2.5 = 7.5\ \mathrm{kN/m}$
>
> **Beam self-weight:** $4\ \mathrm{kN/m}$ (already given as line load)
>
> **Total:** $w = 12.5 + 2.5 + 7.5 + 4 = 26.5\ \mathrm{kN/m}$
>
> **Total downward load:** $26.5 \times 6 = 159\ \mathrm{kN}$
>
> Chapter 11 explains how upward support forces balance this downward total.

### I. What You Now Know

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Weight | $W = mg$ | Convert mass to force | Material weight per unit volume |
| Point load | $P$ in kN | Concentrated force | Assign > Frame Loads > Point |
| Distributed load | $w$ in kN/m | Spread along a member | Assign > Frame Loads > Distributed |
| Area load | $q$ in kPa | Spread over a slab | Assign > Area Loads > Uniform |
| Free Body Diagram | A sketch | Starting point of every problem | (drawn by the engineer) |

<div style="page-break-after: always;"></div>

## Chapter 11 — Equilibrium: Balancing Forces

### A. Achievement

After this section you can verify that a given set of support reactions correctly balances all applied loads on a beam, and compute unknown reactions for symmetric loading using $\Sigma F_y = 0$.

### B. The Situation

A beam carries loads but stays still. Something must be pushing back. That push-back comes from the supports — and it must be exactly the right magnitude and direction, or the beam moves, tilts, or falls. The question is: how much does each support push back?

### C. The Intuition

A building doesn't move. That simple fact is the entire foundation of structural engineering. If a building is not moving, every force pushing on it must be exactly balanced by an equal force pushing back. This perfect balance is called **static equilibrium**.

> **Real-world analogy:** A book sitting on a table. Gravity pulls down on the book. The table pushes up with exactly the same force. Net force = zero, so the book doesn't accelerate. That is equilibrium.



**Newton's First Law:** An object at rest remains at rest unless an unbalanced force acts on it.

A building is at rest. Therefore, the forces on it must be balanced. In this chapter we balance forces:
- All horizontal forces sum to zero: $\Sigma F_x = 0$
- All vertical forces sum to zero: $\Sigma F_y = 0$

Rotational balance uses moments and is introduced in Chapter 12.

**Newton's Third Law:** For every action, there is an equal and opposite reaction.

When a beam rests on a column, the beam pushes the column down. The column pushes the beam up with **exactly the same magnitude**. This is why supports have **reactions** — they react to the loads applied to them.

**A note on signs.** Choose a positive direction at the start of every problem and stick to it. Common conventions:
- Up is positive for vertical forces
- Right is positive for horizontal forces


**Formulas and Derivations**


The force equilibrium equations:

$$\Sigma F_x = 0 \quad \Sigma F_y = 0$$

In this chapter, we use these equations only for force balance. Moment equilibrium is next.

**Worked example.** A box weighing $W = 200\ \mathrm{N}$ sits on a frictionless surface. A horizontal cable pulls right with $F_1 = 50\ \mathrm{N}$. Another horizontal cable pulls left with $F_2$. The surface pushes up with $N$. Find $F_2$ and $N$ for equilibrium.

```
            N (up)
            ^
            |
F2 <────[ BOX ]────> F1 = 50 N
            |
            v
            W = 200 N
```

$\Sigma F_x = 0$: $F_1 - F_2 = 0$ → $F_2 = 50\ \mathrm{N}$
$\Sigma F_y = 0$: $N - W = 0$ → $N = 200\ \mathrm{N}$


**Full Worked Examples**


**Problem.** A beam carries a point load $P = 60\ \mathrm{kN}$ at mid-span and is supported symmetrically at both ends. Find $R_A$ and $R_B$ using force balance and symmetry.

```
              P = 60 kN
                  |
                  v
        A ───────┴─────────── B
        ^                     ^
        RA                    RB
        |<──── 6 m ────────>|
```

**Step 1 — Vertical equilibrium ($\Sigma F_y = 0$):**
Take up as positive:
$R_A + R_B - 60 = 0$ → $R_A + R_B = 60\ \mathrm{kN}$

**Step 2 — Use symmetry:**
The load is exactly centered and the supports are identical, so both supports carry the same force: $R_A = R_B$.

**Step 3 — Split the total:**
$R_A = R_B = 60/2 = 30\ \mathrm{kN}$.

Non-symmetric beams require moment equilibrium, which is taught in Chapter 12.


**ETABS Connection**


ETABS solves force balance and rotational balance at every joint of every model. In this chapter, use ETABS reactions only to verify vertical force balance.

> **Try it in ETABS 22:**
> 1. Create a 6 m simply supported beam, apply $P = 60\ \mathrm{kN}$ at mid-span
> 2. Run analysis (F5)
> 3. **Display > Show Tables > Joint Reactions**
> 4. Confirm both reactions = $30\ \mathrm{kN}$
> 5. Sum vertical reactions: $30 + 30 = 60\ \mathrm{kN}$ = applied load → vertical equilibrium ✓
> 6. Moment checks come in Chapter 12

### D. Failure Case

A 6 m beam carries $P = 60\ \mathrm{kN}$ at $x = 2\ \mathrm{m}$ from the left end. An engineer applies force balance: $R_A + R_B = 60\ \mathrm{kN}$. Then, guessing by feel, assigns $R_A = 40\ \mathrm{kN}$ and $R_B = 20\ \mathrm{kN}$. The beam doesn't care about feel — only the actual lever-arm distances matter. The unique correct answer ($R_A = 50\ \mathrm{kN}$, $R_B = 10\ \mathrm{kN}$) requires moment equilibrium from Chapter 12. Force balance alone gives one equation for two unknowns; it is insufficient for any non-trivially symmetric beam.

1. **Wrong sign convention.** Mixing up up/down. Pick once and stay consistent.
2. **Forgetting horizontal equilibrium.** With horizontal loads (wind), you must also satisfy $\Sigma F_x = 0$.
3. **Trying to solve non-symmetric supports with force balance alone.** You need Chapter 12's moment equilibrium for that.

### E. The Rule

An object in static equilibrium has all forces summing to zero in every direction. Vertical force balance alone uniquely solves only when symmetry collapses two unknowns into one. Most real beams need a second equation: moment equilibrium.

### F. The Formal Shorthand

$$\Sigma F_x = 0 \qquad \Sigma F_y = 0$$

For a symmetric beam with total load $W$: $R_A = R_B = W/2$. For any other case, pair this with $\Sigma M = 0$ from Chapter 12.

### G. Full Worked Example

See the worked examples embedded in the Intuition section above (box on frictionless surface; symmetric beam with mid-span load).

### H. Practice Task — Symmetric Beam Force Balance

> **Scenario:** A symmetric beam carries a centered point load $P = 40\ \mathrm{kN}$ and a uniform load $w = 6\ \mathrm{kN/m}$ over $L = 10\ \mathrm{m}$.
>
> **Tasks:**
> 1. Compute total load
> 2. Apply $\Sigma F_y = 0$
> 3. Use symmetry to solve for $R_A$ and $R_B$

> **Worked Solution:**
>
> **Total downward load:** $W_{total} = P + wL = 40 + 6(10) = 100\ \mathrm{kN}$
>
> **Force balance:** $R_A + R_B = 100\ \mathrm{kN}$
>
> **Symmetry:** $R_A = R_B = 50\ \mathrm{kN}$

### I. What You Now Know

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Vertical force equilibrium | $\Sigma F_y = 0$ | Sum of vertical forces | Joint Reactions |
| Horizontal force equilibrium | $\Sigma F_x = 0$ | Sum of horizontal forces | Joint Reactions (lateral) |
| Newton's First Law | rest stays at rest | Justifies static analysis | Foundation of solver |
| Newton's Third Law | equal & opposite | Why supports react | Reaction display |

<div style="page-break-after: always;"></div>

## Chapter 12 — Moments: Rotational Balance

### A. Achievement

After this section you can find both support reactions for a simply-supported beam with a point load at any position — not just at mid-span — by applying rotational balance ($\Sigma M = 0$) in addition to vertical force balance.

### B. The Situation

Vertical force balance alone ($R_A + R_B = P$) has infinitely many solutions when the load is not at the center. To pin down the unique answer, you need a second independent condition: the beam must also not rotate. That rotational condition is the moment equation.

### C. The Intuition

A moment is a force that tends to cause rotation. The further the force is from the pivot, the greater its rotational effect.

> **Real-world analogy:** Opening a heavy door. Push near the hinge — it barely moves. Push far from the hinge — it swings open easily. Same force, different distance from pivot, totally different rotational effect. That is moment.



A door handle is placed far from the hinge for a reason: greater distance means greater moment per unit force. A wrench works the same way. So does a seesaw. So does a beam under load — the load creates moments around the supports.

**Definition.** Moment of a force about a point:
$$M = F \times d$$
where $d$ is the **perpendicular** distance from the line of action of $F$ to the pivot.

**Sign convention** (for 2D problems): pick one direction as positive (commonly counterclockwise).

```
   F                                F
   |                                ^
   v                                |
───┴─── (pivot at left)         ────┴─── (pivot at left)
   |<-d->|                         |<-d->|
                                
Clockwise (negative) moment   Counterclockwise (positive) moment
M = -F·d                      M = +F·d
```


**Formulas and Derivations**


For a single force $F$ acting at perpendicular distance $d$ from a pivot:

$$M = F \cdot d$$

Units: $[\mathrm{kN}] \times [\mathrm{m}] = [\mathrm{kN \cdot m}]$, or $[\mathrm{N}] \times [\mathrm{mm}] = [\mathrm{N \cdot mm}]$.

For multiple forces, sum the moments:
$$\Sigma M_{\text{about a point}} = M_1 + M_2 + M_3 + \ldots$$

Be careful with signs. CW = negative, CCW = positive (or as you define).

**Worked example.** A horizontal beam is pinned at A. A vertical force $F = 100\ \mathrm{N}$ acts downward at $d = 0.5\ \mathrm{m}$ from A. Find the moment about A.

The force tends to rotate the beam clockwise (right end goes down).
$M_A = -F \cdot d = -100 \times 0.5 = -50\ \mathrm{N \cdot m}$ (clockwise)

If a second force of $200\ \mathrm{N}$ pulls upward at $d = 0.3\ \mathrm{m}$:
That force creates counterclockwise rotation (right end goes up).
$M_2 = +200 \times 0.3 = +60\ \mathrm{N \cdot m}$ (CCW)

$\Sigma M_A = -50 + 60 = +10\ \mathrm{N \cdot m}$ (net CCW)

For equilibrium, $\Sigma M_A$ must equal zero — a third force or moment is needed.


**Full Worked Examples**


**Problem.** A cantilever beam of length $L = 4\ \mathrm{m}$ is fixed at A. A point load $P = 25\ \mathrm{kN}$ acts downward at the free end. Find the moment reaction at A.

```
A (fixed)               P = 25 kN
|////|                       |
|////|                       v
|////├────────────────────────
|////|<──────── 4 m ────────>|
```

The fixed support resists vertical force, horizontal force, AND moment.

$\Sigma M_A = 0$: $M_A + P \cdot L = 0$ — wait, sign carefully.

If $P$ acts downward at distance $L$ from A, it creates a clockwise moment = $-P \cdot L = -25 \times 4 = -100\ \mathrm{kN \cdot m}$.

For equilibrium, the reaction moment at A must be $+100\ \mathrm{kN \cdot m}$ (counterclockwise) to cancel.

$M_A = +100\ \mathrm{kN \cdot m}$

This is the **fixed-end moment**, and it must be transferred into the column or wall the cantilever is attached to.


**ETABS Connection**


ETABS computes moments at every section of every member. The bending moment diagram (BMD) is the visualization. Each value on the BMD is the result of $M = F \times d$ summed over every load on the relevant side of the section.

> **Try it in ETABS 22:**
> 1. Create a horizontal cantilever 4 m long, fixed at left, free at right
> 2. Apply $P = 25\ \mathrm{kN}$ downward at the free end
> 3. Run analysis
> 4. **Display > Show Tables > Joint Reactions**
> 5. At the fixed support, look at the **M3 reaction** — it should be $\approx 100\ \mathrm{kN \cdot m}$ (sign depends on ETABS convention)
> 6. **Display > Show Frame Forces > Moment 3-3** — the BMD goes linearly from 0 at free end to $\pm 100\ \mathrm{kN \cdot m}$ at the support

### D. Failure Case

A UDL $w = 10\ \mathrm{kN/m}$ over $L = 6\ \mathrm{m}$ has resultant $W = 60\ \mathrm{kN}$. An engineer takes moments about the left support using the full span as the lever arm: $M = 60 \times 6 = 360\ \mathrm{kN \cdot m}$. The correct value is $M = 60 \times 3 = 180\ \mathrm{kN \cdot m}$ — because the resultant acts at the centroid ($L/2 = 3\ \mathrm{m}$), not at the right end. Using the end-to-end distance doubled the computed moment.

1. **Using diagonal distance instead of perpendicular.** The lever arm is always the perpendicular distance from the line of action to the pivot.
2. **Sign confusion.** State your convention explicitly at problem start.
3. **Forgetting that distributed load creates moment too.** A UDL $w$ over length $L$ acts at its centroid (mid-length) with total force $w \cdot L$.

### E. The Rule

The moment of a force about a point is $M = F \times d$ where $d$ is the perpendicular distance. For distributed loads, replace the load with its resultant acting at its centroid. State the sign convention once at the start and never change it mid-problem.

### F. The Formal Shorthand

$$M = F \cdot d \qquad \Sigma M_A = 0 \quad \Rightarrow \quad R_B = \frac{\sum(P_i \cdot a_i)}{L}$$

For a point load $P$ at distance $a$ from $A$: $R_B = Pa/L$, $R_A = P(L-a)/L$. For a UDL $w$ over the full span: $R_B = wL/2$.

### G. Full Worked Example

See the worked examples embedded in the Intuition section above (cantilever fixed-end moment; eccentric column load).

### H. Practice Task — Eccentric Column Load

> **Scenario:** A vertical column carries an axial load $P = 200\ \mathrm{kN}$, but the load is offset by $e = 50\ \mathrm{mm}$ from the column's center (eccentric loading). Find the bending moment $M$ this eccentricity creates at the base.
>
> **Tasks:**
> 1. Identify the lever arm
> 2. Compute $M = P \cdot e$
> 3. Evaluate engineering significance
> 4. Verify in ETABS

> **Worked Solution:**
>
> $M = P \cdot e = 200\ \mathrm{kN} \times 0.05\ \mathrm{m} = 10\ \mathrm{kN \cdot m}$
>
> **Significance:** Even a small eccentricity (5 cm) on a 200 kN column produces a 10 kN·m bending moment — meaning the column must be designed for combined axial + bending, not pure axial. This is why ETABS uses P-M interaction diagrams for column design.
>
> **ETABS Verification:**
> 1. Build a column 3 m tall, fixed at base
> 2. Apply the load via a small rigid extension that places the force 50 mm to one side of the centroid (or apply a moment $M = 10\ \mathrm{kN \cdot m}$ + axial $P = 200\ \mathrm{kN}$ directly at the top)
> 3. Run analysis; **Display > Show Frame Forces > Moment 3-3** — confirm $M_{\text{base}} = 10\ \mathrm{kN \cdot m}$

### I. What You Now Know

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Moment | $M = F \cdot d$ | Rotational effect of a force | Frame moment 3-3 |
| Sign convention | CCW = +, CW = − | Consistent calculation | Defined in solver |
| Fixed-end moment | $M_A = P \cdot L$ (cantilever) | Cantilever support reaction | Joint Reactions M3 |
| Eccentricity moment | $M = P \cdot e$ | Off-center axial load | P-M Interaction |

<div style="page-break-after: always;"></div>

## Chapter 13 — Load Types, Tributary Areas, and Combinations

### A. Achievement

After this section you can compute the factored design line load on an interior floor beam — combining slab self-weight, finishes, and live load with the correct tributary width and load combination factors.

### B. The Situation

A beam does not know how the code categorizes its load. It only responds to force. But the engineer must categorize loads to apply the right safety factors, to know which loads act simultaneously, and to apply code-specified values for live load. A beam that passes gravity checks might still fail if the wind load combination governs.

### C. The Intuition

Buildings carry many different kinds of loads. The structural engineer's first job is to identify, quantify, and apply each one — and then check the structure against all relevant **combinations** of these loads.

> **Real-world analogy:** Think of stacking groceries on a shelf:
> - **Dead load** = the shelf itself (always there)
> - **Live load** = the groceries (change daily)
> - **Wind load** = wind pushing the shelf sideways
> - **Seismic load** = the shelf shaking during an earthquake



**Dead load (DL)** is the permanent weight of the structure plus anything fixed to it: slabs, beams, columns, walls, ceilings, finishes, mechanical equipment.

**Live load (LL)** is the variable weight from occupants and contents — people, furniture, movable equipment. Because it varies, codes specify a value based on the building's intended use:

| Occupancy | Live load (typical) |
|-----------|---------------------|
| Residential | 1.5–2.0 kPa |
| Office | 2.5–3.0 kPa |
| Retail | 4.0 kPa |
| Storage | 5.0–10.0 kPa |
| Garage (cars) | 2.5 kPa |

**Wind load (WL)** is the lateral pressure wind exerts on building faces. It depends on wind speed, building shape, and surrounding terrain. Code formulas convert wind speed to pressure.

**Seismic load (EQ)** is an inertial force — when the ground shakes, the building (because of its mass) tends to stay put, but the foundation moves. The result is an apparent horizontal force on the building proportional to its mass.

**Load path.** All loads must travel from where they're applied down to the foundation:

```
   Live load on slab
         |
         v
       SLAB ────────┐
         |          v
         v       BEAMS
      BEAMS         |
         |          v
         v      COLUMNS
      COLUMNS       |
         |          v
         v   FOUNDATIONS
      FOUNDS        |
         |          v
         v        SOIL
        SOIL
```

**Tributary area.** A single beam doesn't carry load from the entire floor — only from the strip of slab that "belongs" to it.

```
          ┌────────────────────┐
          │   Slab tributary   │
          │   to this beam     │
          ├────────────────────┤
          │     2.5 m wide     │
          │     ↓ ↓ ↓ ↓ ↓     │
          ├──────BEAM──────────┤
          │     ↑ ↑ ↑ ↑ ↑     │
          │     2.5 m wide     │
          │   Slab tributary   │
          │   to this beam     │
          └────────────────────┘
```

If the slab carries $q\ [\mathrm{kPa}]$ and the beam's tributary width is $b_{trib}\ [\mathrm{m}]$:
$$w_{beam} = q \cdot b_{trib} \quad [\mathrm{kN/m}]$$


**Formulas and Derivations**


**Converting area load to line load:**
$$w\ [\mathrm{kN/m}] = q\ [\mathrm{kPa}] \times b_{trib}\ [\mathrm{m}]$$

**Load combinations** (typical, ASCE 7-style):

| Combination | Purpose |
|-------------|---------|
| $1.4 DL$ | Dead load alone |
| $1.2 DL + 1.6 LL$ | Gravity (most common) |
| $1.2 DL + 1.0 LL + 1.0 WL$ | Gravity + wind |
| $0.9 DL + 1.0 WL$ | Wind uplift on light roofs |
| $1.2 DL + 1.0 LL + 1.0 EQ$ | Gravity + earthquake |

The factors (1.2, 1.6, 0.9, etc.) are **load factors** — they account for uncertainty in each load's magnitude.


**Full Worked Examples**


**Problem.** A 5×5 m office floor bay has slab thickness 200 mm, finishes 1.5 kPa, partitions 1.0 kPa, live load 3.0 kPa. The interior beam at mid-bay has a tributary width of 2.5 m. Find the factored line load on the beam.

**Solution:**

**Compute area dead load:**
- Slab: $25\ \mathrm{kN/m^3} \times 0.2\ \mathrm{m} = 5\ \mathrm{kPa}$
- Finishes: $1.5\ \mathrm{kPa}$
- Partitions: $1.0\ \mathrm{kPa}$
- Total $DL_{area} = 7.5\ \mathrm{kPa}$

**Compute beam line loads:**
- $w_{DL} = 7.5 \times 2.5 = 18.75\ \mathrm{kN/m}$
- $w_{LL} = 3.0 \times 2.5 = 7.5\ \mathrm{kN/m}$

**Factored combination $1.2DL + 1.6LL$:**
$w_u = 1.2 \times 18.75 + 1.6 \times 7.5 = 22.5 + 12.0 = 34.5\ \mathrm{kN/m}$

This is the line load to use for ultimate-strength design.


**ETABS Connection**


ETABS handles all four load types with separate **load patterns**:

| Pattern | Purpose | Definition |
|---------|---------|-----------|
| DL | Dead | Self Weight Multiplier = 1.0 |
| SDL | Superimposed Dead | Multiplier = 0; manually applied |
| LL | Live | Multiplier = 0; manually applied |
| WL | Wind | Defined via wind code (ASCE 7) |
| EQ | Seismic | Response spectrum or static lateral |

Combinations are defined separately under **Define > Load Combinations**.

> **Try it in ETABS 22:**
> 1. **Define > Load Patterns** — add DL (Dead, mult=1), SDL (Super Dead, mult=0), LL (Live, mult=0)
> 2. **Define > Load Combinations > Add New Combo** — name "Combo1: 1.2DL+1.6LL"
> 3. Add scale factors: DL × 1.2, SDL × 1.2, LL × 1.6
> 4. Click OK
> 5. After running analysis, **Display > Show Tables > Frame Forces** — choose this combo to see factored member forces

### D. Failure Case

A 5 m beam with $DL_{area} = 5\ \mathrm{kPa}$ and $LL_{area} = 3\ \mathrm{kPa}$, tributary width $b = 3\ \mathrm{m}$. An engineer applies load factors directly to area loads: $w_u = (1.2 \times 5 + 1.6 \times 3) \times 3 = 10.8 \times 3 = 32.4\ \mathrm{kN/m}$ — accidentally correct here. But for a beam with two dead load sources (slab DL = 5 kPa and a separate beam self-weight = 4 kN/m), the combined approach fails because self-weight has no tributary multiplication. Only converting each source separately, then factoring, handles mixed load types without error.

1. **Forgetting partitions or finishes.** Code-mandated additions even if architectural drawings don't show them.
2. **Wrong tributary width.** For continuous slab on multiple beams, tributary widths go to half the distance to the adjacent beam on each side.
3. **Skipping load combinations.** Designing for unfactored $DL + LL$ is unsafe — code requires factored combinations.

### E. The Rule

Convert each area load to a line load separately by multiplying by the beam's tributary width. Then factor using the appropriate load combination. Never apply factors to area loads and multiply by tributary width in one step when multiple load types are present.

### F. The Formal Shorthand

$$w\ [\mathrm{kN/m}] = q\ [\mathrm{kPa}] \times b_{\mathrm{trib}}\ [\mathrm{m}] \qquad w_u = 1.2\,w_{DL} + 1.6\,w_{LL}$$

### G. Full Worked Example

See the 5-bay office floor beam example embedded in the Intuition section above ($w_u = 34.5\ \mathrm{kN/m}$).

### H. Practice Task — Apartment Floor Beam

> **Scenario:** An apartment floor has a 180 mm slab, finishes 1.0 kPa, partitions 1.0 kPa, live load 2.0 kPa. A beam supports a tributary width of 3.5 m and spans 6 m. Find the factored line load and maximum moment.
>
> **Tasks:**
> 1. Compute area DL and LL
> 2. Convert to line loads
> 3. Apply $1.2DL + 1.6LL$
> 4. Compute $M_{\max} = w_u L^2 / 8$
> 5. Verify in ETABS

> **Worked Solution:**
>
> **Area dead load:**
> $25 \times 0.18 + 1.0 + 1.0 = 4.5 + 1.0 + 1.0 = 6.5\ \mathrm{kPa}$
>
> **Line loads:**
> $w_{DL} = 6.5 \times 3.5 = 22.75\ \mathrm{kN/m}$
> $w_{LL} = 2.0 \times 3.5 = 7.0\ \mathrm{kN/m}$
>
> **Factored:** $w_u = 1.2(22.75) + 1.6(7.0) = 27.3 + 11.2 = 38.5\ \mathrm{kN/m}$
>
> **Maximum moment:** $M_{\max} = w_u L^2 / 8 = 38.5 \times 36 / 8 = 173.25\ \mathrm{kN \cdot m}$
>
> **ETABS Verification:** Build the 6 m beam, apply DL=22.75 and LL=7.0 kN/m, define combo 1.2D+1.6L, run analysis, read $M_{\max}$ should be ~173 kN·m at mid-span.

### I. What You Now Know

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Dead load | Self-weight + finishes | Permanent loads | DL load pattern |
| Live load | From code occupancy table | Variable loads | LL load pattern |
| Tributary load | $w = q \cdot b_{trib}$ | Area→line conversion | Manual, then assigned |
| Factored combo | $1.2DL + 1.6LL$ | Ultimate design check | Define > Load Combos |
| Max moment (UDL) | $M_{max} = w_u L^2/8$ | Initial sizing | Moment 3-3 diagram |

<div style="page-break-after: always;"></div>

## Chapter 14 — Support Conditions and Reactions

### A. Achievement

After this section you can identify the correct support model for a given physical connection (pin, roller, or fixed), state how many reactions it provides, and determine whether a beam is statically determinate before solving it.

### B. The Situation

A beam is designed for a total downward load of 60 kN. You model it as simply supported and find reactions of 30 kN each. But what if both ends are actually bolted rigidly to columns — making them fixed supports? A fixed support also resists rotation, adding moment reactions that change the internal forces entirely. Choosing the wrong support model means designing for the wrong forces.

### C. The Intuition

Every structure ultimately rests on something: a foundation, the ground, another structure. The way a member meets its support determines what kind of forces the support can apply back. Three idealized support types cover almost all everyday structural work.

> **Real-world analogy:** Three ways to hold a stick:
> - **Pin** = grip with two fingers (can rotate but can't move)
> - **Roller** = balance on a marble (can roll horizontally and rotate)
> - **Fixed** = embed in concrete (can't move or rotate)



A support's job is to prevent motion. Each direction of motion that is prevented requires the support to apply a corresponding reaction force (or moment). Newton's Third Law: if the support stops the structure from moving down, the support pushes up.

```
PIN SUPPORT                ROLLER SUPPORT             FIXED SUPPORT
                                                       
   ┴                          ┴                         ┴
  /│\                        /O\                       │││││
 / │ \                      ─────                      │////│
                                                       │////│
Stops H + V motion        Stops V only              Stops H + V + rotation
2 reactions               1 reaction                  3 reactions
```

| Support | Stops H? | Stops V? | Stops Rotation? | # of Reactions |
|---------|----------|----------|-----------------|---------------|
| Pin | Yes | Yes | No | 2 |
| Roller | No | Yes | No | 1 |
| Fixed | Yes | Yes | Yes | 3 |
| Free end | No | No | No | 0 |

A **simply supported beam** is pin + roller (3 reactions total — a determinate system in 2D).
A **cantilever** is fixed + free (3 reactions — also determinate).
A **propped cantilever** is fixed + roller (4 reactions — one degree statically indeterminate).


**Formulas and Derivations**


The number of equilibrium equations available in 2D is 3 ($\Sigma F_x$, $\Sigma F_y$, $\Sigma M$). If the number of unknown reactions equals 3, the structure is **statically determinate** — solvable using equilibrium alone. If reactions exceed 3, it is **indeterminate**. Indeterminate structures require deformation ideas and software methods introduced later, so this chapter only identifies them.

**Worked example.** Identify the support reactions for a 5 m cantilever with $P = 10\ \mathrm{kN}$ at the free end.

3 reactions at the fixed support: $H_A$, $V_A$, $M_A$.
$\Sigma F_x = 0$: $H_A = 0$
$\Sigma F_y = 0$: $V_A - 10 = 0$ → $V_A = 10\ \mathrm{kN}$ (upward)
$\Sigma M_A = 0$: $M_A - 10 \times 5 = 0$ → $M_A = 50\ \mathrm{kN \cdot m}$ (CCW)


**Full Worked Examples**


**Problem.** A 6 m beam carries $P = 40\ \mathrm{kN}$ at $x = 4\ \mathrm{m}$ from left. Compare the support unknowns if the beam is:
(a) simply supported (pin at left, roller at right)
(b) propped cantilever (fixed at left, roller at right)

**Case (a) — simply supported:**
Unknowns: horizontal reaction at the pin, vertical reaction at the pin, vertical reaction at the roller. Three unknowns, so a 2D simply supported beam is determinate.

**Case (b) — propped cantilever:**
Unknowns: horizontal reaction, vertical reaction, and moment at the fixed end, plus vertical reaction at the roller. Four unknowns, so equilibrium alone is not enough. ETABS can solve it because it also accounts for member stiffness and deformation.


**ETABS Connection**


In ETABS, you set support conditions per joint by specifying which **degrees of freedom** are restrained. A joint has 6 DOFs in 3D (U1, U2, U3 for translations + R1, R2, R3 for rotations).

| Support | Restraints to check |
|---------|---------------------|
| Pin (2D) | U1, U2, U3 |
| Roller (vertical) | U3 only |
| Fixed (full) | All 6 |
| Free | None |

> **Try it in ETABS 22:**
> 1. Select a base joint
> 2. **Assign > Joint > Restraints**
> 3. The dialog has 6 checkboxes — check the corresponding DOFs:
>    - For a pin: check U1, U2, U3 (no rotational restraint)
>    - For a fixed base: check all 6
>    - For a roller (vertical only): check only U3
> 4. Click OK; the support symbol on the joint updates accordingly

### D. Failure Case

An engineer models all column bases in a 5-story concrete building as pins (no moment restraint) to simplify the model. Running a lateral analysis, ETABS assigns nearly all the lateral load to the core walls — the columns contribute almost zero lateral stiffness. After construction, the building sways more than predicted under wind. The monolithic column-to-pile-cap connections are in practice fixed, providing stiffness the model ignored. The difference between pin and fixed base changes story drift by 20–40% and alters the column's bending moment entirely.

1. **Confusing pin and fixed.** A pin allows rotation; a fixed support resists rotation. Fixed = embedded in concrete; pin = a hinge connection.
2. **Mismodeling rollers.** A roller resists only the perpendicular direction. Modeling all column bases as rollers makes the building laterally unstable.
3. **Over-restraining.** Adding unnecessary restraints introduces artificial forces. Only restrain what is physically restrained.

### E. The Rule

Each restrained direction of motion generates one reaction force or moment. Count the restraints to count the unknowns. If three or fewer unknowns exist in 2D, the structure is determinate; if four or more, it is indeterminate and requires software.

### F. The Formal Shorthand

| Support | Restraints | Reactions (2D) |
|---------|------------|----------------|
| Roller | 1 | V |
| Pin | 2 | H + V |
| Fixed | 3 | H + V + M |

Determinate: total reactions = 3. Indeterminate: total reactions > 3.

### G. Full Worked Example

See the pin-vs-roller worked example and the cantilever example embedded in the Intuition section above.

### H. Practice Task — Choosing the Right Support

> **Scenario:** You are modeling the base of an interior column in a 5-story concrete building. The column is cast monolithically with a large pile cap. Should this base be modeled as fixed or pinned, and what reactions will appear?
>
> **Tasks:**
> 1. Decide: fixed or pinned?
> 2. List the reactions
> 3. Compare to the alternative — what changes if you used a pin?
> 4. Verify in ETABS

> **Worked Solution:**
>
> A monolithic concrete column-to-pile-cap connection is **fixed** in practice — the rebar is continuous, the joint is rigid, rotation is prevented.
>
> **Fixed reactions (3 in 2D, 6 in 3D):** axial force $P$, two shears, two bending moments, and torsion.
>
> **If pinned instead:** moments at the base = 0; the building's lateral stiffness drops dramatically; story drift increases; column moments above the base shift upward.
>
> **ETABS Verification:**
> 1. **Assign > Joint > Restraints** at base — try fixed (all 6 boxes checked) — run analysis — note the moment reactions M2, M3
> 2. Reassign as pinned (only U1, U2, U3) — run again — moment reactions now zero, displacements at top of building higher
> 3. The contrast demonstrates why support modeling is critical

### I. What You Now Know

| Concept | Reactions | Engineering Use | ETABS Location |
|---------|-----------|----------------|----------------|
| Pin | H + V | Beam-to-column hinge | U1, U2, U3 restrained |
| Roller | V only | Bridge bearing | U3 only |
| Fixed | H + V + M | Column base, monolithic conn | All 6 restrained |
| Free | none | Cantilever tip | No restraints |

<div style="page-break-after: always;"></div>

## Chapter 15 — Internal Forces: Axial, Shear, and Bending Moment Diagrams

### A. Achievement

After this section you can draw the shear force diagram (SFD) and bending moment diagram (BMD) for a simply-supported beam under uniform load, and read off the maximum values that govern the design.

### B. The Situation

The external loads and reactions on a beam are now known. But what is happening *inside* the beam? The beam must carry those forces across its length — and if the material can't handle what's inside, the beam fails. Those internal effects — axial force, shear, and bending moment — are what actually cause a beam to break, buckle, or crack.

### C. The Intuition

When loads act on a beam, internal forces develop inside the beam to keep it in equilibrium. These internal forces are what cause stress, strain, and ultimately failure. There are three kinds:

1. **Axial force ($N$)** — along the length
2. **Shear force ($V$)** — perpendicular to the length
3. **Bending moment ($M$)** — causes curvature

> **Real-world analogy:** Pinch a stick of chalk between two fingers. Pulling = tension (axial). Pressing in = compression (axial). Sliding fingers past each other = shear. Bending the chalk by twisting your wrists = moment.



Imagine a beam under load. If you cut it at any point and look at the exposed face:

- The two halves still must be in equilibrium
- Whatever forces and moments acted on one half must be balanced by internal forces and moments at the cut

These internal effects are not optional — they are demanded by equilibrium. They exist whether or not we draw them.

```
Before cut:                    After imagined cut at section X:
                              
P↓                                P↓
A───────X──────B               A──────X            X──────B
^              ^               ^     N→         ←N        ^
RA            RB              RA    V↑         V↓        RB
                                    M↺          M↻
                              
                           Left side: balanced by      Right side: balanced
                           internal forces N, V, M     by equal & opposite
```

**Sign conventions** (most common):
- $N$: tension positive
- $V$: positive if it tends to rotate the cut clockwise on the left segment
- $M$: positive if it causes sagging (compression on top, tension on bottom)


**Formulas and Derivations**


**The section cut method:** to find $N$, $V$, $M$ at any point $x$:

1. Imagine cutting the member at $x$
2. Take one side (whichever has fewer forces is easier)
3. Apply equilibrium ($\Sigma F$ and $\Sigma M$) to that side
4. Solve for $N$, $V$, $M$ at the cut

**Worked example.** A simply supported beam $L = 6\ \mathrm{m}$ has a uniform load $w = 10\ \mathrm{kN/m}$. Find $V$ and $M$ at $x = 2\ \mathrm{m}$ from left.

**Step 1 — Reactions:** $R_A = R_B = wL/2 = 30\ \mathrm{kN}$

**Step 2 — Cut at $x = 2$, look at left segment.** It has $R_A = 30$ kN up at $x=0$, and a UDL $w = 10$ kN/m over the 2 m to the cut (total = 20 kN, acting at 1 m from cut).

**Step 3 — Apply equilibrium to left segment:**

$\Sigma F_y = 0$: $R_A - w \cdot x - V = 0$ → $V = R_A - wx = 30 - 10 \times 2 = 10\ \mathrm{kN}$

$\Sigma M_{cut} = 0$ (taking moments about the cut, CCW+):
$M = R_A \cdot x - w \cdot x \cdot (x/2) = 30 \times 2 - 10 \times 2 \times 1 = 60 - 20 = 40\ \mathrm{kN \cdot m}$

**General formulas for simply supported UDL beam:**
$$V(x) = \dfrac{wL}{2} - wx \qquad M(x) = \dfrac{wL}{2}x - \dfrac{w}{2}x^2$$

$V$ is linear (straight line), zero at mid-span. $M$ is quadratic (parabola), peak at mid-span.


**Full Worked Examples**


**Problem.** Draw the SFD and BMD for a simply supported beam $L = 8\ \mathrm{m}$ with $w = 12\ \mathrm{kN/m}$.

**Reactions:** $R_A = R_B = 12 \times 8 / 2 = 48\ \mathrm{kN}$

**Shear values:**
- At $x = 0$: $V = +48\ \mathrm{kN}$
- At $x = 4$: $V = 48 - 12(4) = 0\ \mathrm{kN}$
- At $x = 8$: $V = 48 - 12(8) = -48\ \mathrm{kN}$

**Moment values:**
- At $x = 0$: $M = 0$
- At $x = 4$: $M_{max} = 48(4) - 6(16) = 192 - 96 = 96\ \mathrm{kN \cdot m}$
- At $x = 8$: $M = 0$

```
SFD (kN):
  +48
   │\
   │ \
   │  \
   │   \
0──┼────●────────  (zero at x = 4)
   │     \
   │      \
   │       \
            \
             -48

BMD (kN·m):
        96 (peak at x = 4)
       ╱─╲
      ╱   ╲
     ╱     ╲
    ╱       ╲
   ╱         ╲
  0────────────0
```

The shear is linear (straight diagonal), the moment is parabolic (smooth curve).


**ETABS Connection**


ETABS computes $N$, $V$, and $M$ at every section of every member and plots them as colored diagrams. The bending moment diagram is the visual function $M(x)$.

> **Try it in ETABS 22:**
> 1. Build the 8 m beam with $w = 12\ \mathrm{kN/m}$
> 2. Run analysis
> 3. **Display > Show Frame Forces > Moment 3-3** — observe the parabola, peaking at $\approx 96\ \mathrm{kN \cdot m}$
> 4. **Display > Show Frame Forces > Shear 2-2** — observe the linear diagram going from $+48$ to $-48$
> 5. **Display > Show Frame Forces > Axial** — for this beam, axial = 0
> 6. Right-click the beam → "Show Member Force Diagram" to see exact values at any section

### D. Failure Case

A student draws the bending moment diagram for a simply-supported beam under UDL by connecting the support moments (both zero) to the mid-span value with straight diagonal lines — making a triangle. The actual BMD is a parabola. At $x = L/4$, the triangle gives $M = M_{max}/2$, but the parabola gives $M = 0.75\, M_{max}$. Designing for a triangular BMD underestimates the moment by 25% at the quarter-span points. For a beam with steel distributed along its length, this leads to insufficient bar lengths.

1. **Confusing shear and bending moment diagrams.** Shear is linear under UDL; moment is parabolic.
2. **Wrong sign convention on the cut.** Always state your convention. The trick is consistency.
3. **Forgetting that peak moment occurs where the shear diagram crosses zero.** Where $V = 0$, $dM/dx = 0$ — that is the maximum moment location.

### E. The Rule

For any cross-section: internal forces are whatever is needed to keep the cut segment in equilibrium. Cut, choose the simpler side, and apply $\Sigma F = 0$ and $\Sigma M = 0$. The shear diagram and moment diagram are just plots of those values as $x$ moves along the span.

### F. The Formal Shorthand

| Beam / Load | $V(x)$ | $M(x)$ | Peak moment |
|-------------|--------|---------|-------------|
| SS + UDL $w$ | $wL/2 - wx$ | $wLx/2 - wx^2/2$ | $M_{max}=wL^2/8$ at $x=L/2$ |
| Cantilever + UDL $w$ | $w(L-x)$ | $-w(L-x)^2/2$ | $M_{max}=wL^2/2$ at $x=0$ |

Shear is linear under UDL; moment is parabolic. Shear crosses zero where moment is maximum.

### G. Full Worked Example

See the 8 m beam worked example (SS + UDL, SFD and BMD fully drawn) embedded in the Intuition section above.

### H. Practice Task — Cantilever SFD and BMD

> **Scenario:** A cantilever beam $L = 4\ \mathrm{m}$ is fixed at the left and free at the right. It carries a UDL $w = 8\ \mathrm{kN/m}$ over its entire length.
>
> **Tasks:**
> 1. Find reactions at the fixed end
> 2. Compute $V(x)$ and $M(x)$
> 3. Sketch SFD and BMD
> 4. Identify maxima
> 5. Verify in ETABS

> **Worked Solution:**
>
> **Reactions at fixed end A:**
> Total downward = $8 \times 4 = 32\ \mathrm{kN}$
> $V_A = 32\ \mathrm{kN}$ (upward)
> $M_A$: total UDL acts at $x = 2$ m from A → $M_A = 32 \times 2 = 64\ \mathrm{kN \cdot m}$ (CCW reaction)
>
> **Cut at $x$ from fixed end, looking left:**
> $V(x) = V_A - wx = 32 - 8x$
> $M(x) = -V_A \cdot x + (wx \cdot x/2) + M_A$
>
> Cleaner approach — cut at $x$, look right (to free end):
> Distance from cut to free end = $L - x$
> Length of UDL on right segment = $L - x$, total force $= w(L-x)$, centroid at $(L-x)/2$ from cut
> $V(x) = w(L - x)$ (downward on the right segment, pushing the cut surface)
> Sign by convention: $V(x) = w(L - x)$
> $M(x) = -w(L-x)^2/2$ (hogging — negative)
>
> At $x = 0$ (fixed): $M = -w L^2/2 = -8 \times 16/2 = -64\ \mathrm{kN \cdot m}$ (hogging — tension on top)
> At $x = L$ (free): $M = 0$
>
> **Maxima:** $|M|_{max} = 64\ \mathrm{kN \cdot m}$ at fixed end; $|V|_{max} = 32\ \mathrm{kN}$ at fixed end.
>
> **ETABS Verification:**
> 1. Build cantilever, fixed left, free right, length 4 m, UDL 8 kN/m
> 2. **Display > Show Frame Forces > Shear 2-2** — peak at fixed end = 32 kN
> 3. **Display > Show Frame Forces > Moment 3-3** — peak at fixed end = 64 kN·m

### I. What You Now Know

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Axial force | $N$ at section | Column design | Show Frame Forces > Axial |
| Shear force | $V(x)$ | Stirrup design | Show Frame Forces > Shear 2-2 |
| Bending moment | $M(x)$ | Longitudinal reinf. design | Show Frame Forces > Moment 3-3 |
| SS beam UDL max | $M_{max} = wL^2/8$ | Quick check | Peak of BMD |
| Cantilever UDL max | $M_{max} = wL^2/2$ | Cantilever design | Peak at fixed end |

<div style="page-break-after: always;"></div>

## Chapter 16 — Stress and Strain: What's Happening Inside the Material

### A. Achievement

After this section you can check whether the extreme-fiber bending stress in a beam exceeds the allowable stress — given the bending moment, section depth, and moment of inertia — and apply the same stress framework to axial members (columns, tie rods).

### B. The Situation

You have computed $M = 96\ \mathrm{kN \cdot m}$ at mid-span of a beam. The beam is made of steel with allowable stress $f_{allow} = 165\ \mathrm{MPa}$. Is the material safe? The question is not about the force — it's about how that force is spread across the cross-section area. Force per unit area is stress, and stress is what the material actually feels. Too much stress breaks it.

### C. The Intuition

Stress is force concentrated. Strain is the deformation that results. Together, they describe how a material responds to load.

> **Real-world analogy:** Pushing a thumbtack vs. pushing a pencil eraser into a wall with the same force. Same force — but the thumbtack's tiny area means enormous stress, easily piercing the wall. Stress is what damages a material, not raw force.

### D. Failure Case

A designer checks a beam by verifying that the bending moment $M = 96\ \mathrm{kN \cdot m}$ is below the beam's listed "moment capacity" of $120\ \mathrm{kN \cdot m}$. The check passes: $96 < 120$. But the moment capacity was listed for a *different* section \u2014 one with $I = 75{,}000\ \mathrm{cm^4}$ instead of the actual $I = 45{,}000\ \mathrm{cm^4}$. The actual bending stress is $165\ \mathrm{MPa}$ — exceeding the allowable $150\ \mathrm{MPa}$. Checking $M < M_{cap}$ only works if the capacity was computed for the actual section. The stress formula makes the section dependence explicit and catches errors the moment comparison hides.

### E. The Rule

Stress is force divided by the area that resists it. For axial forces it is uniform; for bending it varies linearly — zero at the neutral axis, maximum at the outer fiber. Always state what stress you are computing (axial, bending, shear), which formula applies, and what the allowable stress is before substituting numbers.

### F. The Formal Shorthand

| Stress type | Formula | Units |
|-------------|---------|-------|
| Axial (uniform) | $\sigma = P/A$ | MPa = N/mm² |
| Bending (at fiber $y$ from N.A.) | $\sigma = My/I$ | MPa |
| Bending (extreme fiber) | $\sigma_{max} = Mc/I = M/S$ | MPa |
| Hooke's Law | $\sigma = E\varepsilon$ | \u2014 |
| Elongation | $\Delta L = PL/(AE)$ | mm |

where $c$ = distance from neutral axis to extreme fiber, $S = I/c$ = section modulus, $I$ = moment of inertia (computed in Chapter 20).

### G. Full Worked Examples

**The Physics of Stress**

When a force is applied to a member, two things happen simultaneously:
1. The material develops internal **stress** (force per area resisting the applied load)
2. The material **strains** (deforms slightly)

For most engineering materials, in the **elastic range**, stress and strain are linearly proportional. Push twice as hard → it deforms twice as much. The constant of proportionality is the material's **elastic modulus** $E$.

This is **Hooke's Law:**
$$\sigma = E \cdot \varepsilon$$

When $\sigma$ exceeds the **yield stress** $F_y$, the material no longer recovers — it has permanently deformed. Designs almost always keep $\sigma$ below $F_y$ (often well below, with safety factors).

**Worked Example 1 — Steel Tie Rod (Axial Stress)**

1. Stress: $\sigma = P/A = 15{,}000 / 100 = 150\ \mathrm{MPa}$ ✓ ($< F_y = 250$, elastic)
2. Strain: $\varepsilon = \sigma / E = 150 / 200{,}000 = 0.00075$ (i.e., 0.075%)
3. Elongation: $\Delta L = \varepsilon \cdot L_0 = 0.00075 \times 2{,}000 = 1.5\ \mathrm{mm}$

The 2-meter rod stretches 1.5 mm under load — small, elastic, fully recoverable when the load is removed.

**Worked Example 2 — Concrete Column (Axial Shortening)**

**Problem.** A short concrete column 400 × 400 mm and 3 m tall carries an axial load $P = 1{,}500\ \mathrm{kN}$. Concrete $E = 32{,}000\ \mathrm{MPa}$. Compute stress, strain, and shortening.

**Solution:**
- $A = 400 \times 400 = 160{,}000\ \mathrm{mm^2}$
- Stress: $\sigma = 1{,}500{,}000 / 160{,}000 = 9.375\ \mathrm{MPa}$ ✓ ($< f'_c = 30$, well within capacity)
- Strain: $\varepsilon = 9.375 / 32{,}000 = 0.000293$
- Shortening: $\Delta L = 0.000293 \times 3{,}000 = 0.879\ \mathrm{mm}$

A 3 m tall concrete column shortens by less than 1 mm under 1,500 kN — explains why we don't visually notice settlement.

**ETABS Connection**

ETABS uses Hooke's Law internally. When you define a material (Define > Materials), the value of $E$ you enter is exactly the elastic modulus from $\sigma = E\varepsilon$. ETABS then computes elongations, deflections, and reactions based on this constant.

> **Try it in ETABS 22:**
> 1. **Define > Materials > Add New Material > Concrete**
> 2. Enter $f'_c = 30\ \mathrm{MPa}$, weight = 25 kN/m³
> 3. ETABS auto-computes $E_c \approx 4{,}700\sqrt{f'_c} = 4{,}700 \sqrt{30} \approx 25{,}750\ \mathrm{MPa}$ (or you can override)
> 4. **Define > Materials > Add Steel** — $F_y = 350$, $E = 200{,}000\ \mathrm{MPa}$
> 5. Run any analysis — every displacement uses these $E$ values via Hooke's Law

### H. Practice Tasks

> **Tip:** The three most common unit mistakes in stress: (1) confusing $E$ for steel (200,000 MPa) and concrete (~30,000 MPa); (2) treating strain as having units (it is dimensionless); (3) mixing N and kN in $\Delta L = PL/AE$.

> **Scenario:** A 3 m steel tie rod, area $A = 314\ \mathrm{mm^2}$ (20 mm diameter), carries $P = 80\ \mathrm{kN}$. Steel $E = 200{,}000\ \mathrm{MPa}$, $F_y = 350\ \mathrm{MPa}$. Find stress, strain, elongation, and check yield.
>
> **Worked Solution:**
>
> $\sigma = 80{,}000 / 314 = 254.78\ \mathrm{MPa}$ ✓ ($< 350$, elastic)
> $\varepsilon = 254.78 / 200{,}000 = 0.001274$
> $\Delta L = 0.001274 \times 3{,}000 = 3.82\ \mathrm{mm}$
> Demand/capacity ratio = $254.78 / 350 = 0.728$ — safe
>
> **ETABS Verification:** Build a vertical truss element 3 m, A = 314 mm², apply 80 kN axial. Run analysis. Read the elongation in the deformed shape — it should be ~3.8 mm.

### I. What You Now Know

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Normal stress | $\sigma = P/A$ | Axial member check | Internal stress check |
| Strain | $\varepsilon = \Delta L/L$ | Deformation per length | Deformed shape |
| Hooke's Law | $\sigma = E\varepsilon$ | Material law | E in Define > Materials |
| Elongation | $\Delta L = PL/AE$ | Member shortening/stretching | Deformed shape |

<div style="page-break-after: always;"></div>

### J. Bending Stress: When Axial Thinking Isn’t Enough

Axial stress assumes force is uniformly distributed across the area: $\sigma = P/A$. But when a beam bends, the stress is *not* uniform — it varies across the depth of the section.

> **Real-world analogy:** Bend a thick eraser. The bottom stretches; the top compresses. The middle stays the same length — that's the neutral axis.



The full bending-stress formula uses a geometry property called **moment of inertia**. Chapter 20 teaches that property and then performs the exact calculation. This chapter focuses on the physical pattern first:

- Larger bending moment means larger bending stress.
- Stress is zero at the neutral axis.
- Stress is largest at the farthest top or bottom fiber.
- Deeper sections usually reduce bending stress because more material is farther from the neutral axis.

Stress varies linearly across the section:

```
        +σ_max  (compression)
       ────────
       ─────
       ────
       ─── ← neutral axis (σ = 0)
       ────
       ─────
       ──────
       ────────
       -σ_max  (tension)
```

The maximum stress occurs at the top and bottom faces — that's why $c = h/2$ for a rectangle (half the depth).

**Bending Stress Trends**

| Change | Bending stress trend |
|--------|----------------------|
| Moment doubles | Stress doubles |
| Same moment, deeper section | Stress decreases |
| Same section, larger moment | Stress increases |

**Worked example.** Beam A and Beam B have the same section. Beam A has bending moment $M = 40\ \mathrm{kN \cdot m}$, and Beam B has $M = 80\ \mathrm{kN \cdot m}$. Which has larger bending stress?

Beam B has twice the moment, so it has twice the bending stress. Chapter 20 turns this proportional idea into an exact stress calculation.

**Bending Stress vs. Section Depth**

**Problem.** Two rectangular beams carry the same bending moment. Beam A is shallow. Beam B is deeper. Which one will usually have lower bending stress?

Beam B. A deeper section spreads material farther from the neutral axis, which makes the beam more effective in bending. Chapter 20 gives the geometry formula that turns this idea into numbers.

**ETABS: Locating Critical Bending Stress**

ETABS shows bending moment diagrams before it shows design requirements. At this stage, use the moment diagram to locate where bending stress will be largest: where the bending moment is largest.

> **Try it in ETABS 22:**
> 1. **Display > Show Frame Forces > Moment 3-3** — find where $M$ is largest
> 2. Mark that location as the place bending stress will be most critical
> 3. Continue to Chapter 20 for the exact $Mc/I$ stress calculation after $I$ is taught

**Practice Task — Locate Critical Bending Region**

> **Scenario:** A beam's bending moment diagram has values: 0 kN·m at the left support, 60 kN·m at quarter-span, 95 kN·m at mid-span, 60 kN·m at three-quarter-span, and 0 kN·m at the right support.
>
> **Worked Solution:**
>
> The largest moment is 95 kN·m at mid-span, so the largest bending stress will occur at mid-span. The top and bottom fibers at that section are the critical locations.

| Concept | Formula | Engineering Use |
|---------|---------|----------------|
| Bending stress pattern | Zero at neutral axis, max at outer fibers | Beam design |
| Full formula | $\sigma = Mc/I$ after $I$ in Chapter 20 | Quantitative stress check |
| Maximum stress location | Outer fiber, $c = h/2$ | Where to check |

<div style="page-break-after: always;"></div>

> **End of Part 2.** You now understand how forces work, how supports react, how internal forces develop in beams, and how stress distributes through a cross-section. In Part 3 you'll build the geometric tools — areas, centroids, moments of inertia, vectors, and trigonometry — that turn these concepts into precise calculations.

<div style="page-break-after: always;"></div>

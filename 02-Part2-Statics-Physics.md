# PART 2 — STATICS AND PHYSICS FOR STRUCTURAL ENGINEERS

> Welcome to Part 2. You now know enough algebra to read and rearrange formulas, solve simple systems, and use units correctly. We will now use those tools to describe the physical world: how forces act on structures, how supports react, and how loads travel through a building. Every chapter from here onward describes something you can picture in real life.

<div style="page-break-after: always;"></div>

## Chapter 10 — What Is a Force?

### A. Word Bank

| Word | Pronunciation | Plain English Meaning | Used In |
|------|---------------|----------------------|---------|
| **Force** | "FORS" | A push or a pull | $F = 10\ \mathrm{kN}$ |
| **Magnitude** | "MAG-nih-tood" | The size of a force, ignoring direction | "10 kN" alone |
| **Direction** | "dih-REK-shun" | Which way the force acts | "Downward" |
| **Line of action** | — | The infinite straight line along which the force acts | Used to find moment arm |
| **Newton** | "NOO-ton" | The SI unit of force | $1\ \mathrm{N} = 1\ \mathrm{kg \cdot m/s^2}$ |
| **kilonewton** | "KIL-oh-NOO-ton" | 1000 Newtons | Standard structural force unit |
| **Gravity** | "GRAV-ih-tee" | The pull of the Earth on every mass | $g = 9.81\ \mathrm{m/s^2}$ |
| **Weight** | "WAYT" | The force of gravity on a mass | $W = mg$ |
| **Mass** | "MASS" | How much matter an object contains | Measured in kg |
| **Point load** | — | A force concentrated at one location | A column on a beam |
| **Distributed load** | — | A force spread over a length or area | Slab self-weight |
| **Support force** | — | A force supplied by something holding an object | Table pushing up on book |
| **Free Body Diagram (FBD)** | — | A drawing of an object showing every force on it | Every problem starts here |

### B. Concept Introduction

A force is a push or a pull. That's it. But to fully describe a force you need three things:

1. **How big** is it? (magnitude)
2. **Which way** does it point? (direction)
3. **Where** is it applied? (point of application)

A 10 kN force pushing down on the roof is completely different from a 10 kN force pulling sideways on a wall. Same magnitude — different physical effect.

> **Real-world analogy:** Pushing a shopping cart. The force you apply has size (how hard), direction (forward, sideways), and a point (the handle). Push the cart on its corner and it spins; push at the handle and it rolls — same magnitude, different effect, all because of point and direction.

### C. The Physics Behind It

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

### D. The Math

Every force is a **vector**: it has both magnitude and direction. We will study vectors in detail in Chapter 21. For now, treat a force as an arrow with:

- a number (the magnitude, in kN)
- an arrowhead pointing in the direction
- a starting point (the point of application)

To draw an FBD:

1. Sketch the body alone
2. Draw all applied loads as arrows in their actual directions
3. Draw any obvious support force arrows, such as a table pushing upward
4. Label every known arrow with its magnitude

### E. Structural Engineering Application

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

The upward support forces needed to hold this member are explained in Chapter 11. For now, the force skill is identifying and summing the downward loads.

### F. ETABS Connection

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

### G. Common Mistakes

1. **Confusing kg and kN.** Self-weight code values often appear as "kg/m²" — multiply by 9.81 and divide by 1000 to get kPa.
2. **Mixing the object and the forces.** The FBD should make force arrows easy to see; support details come later.
3. **Missing self-weight.** The structure weighs something even before any external load — always include it.

### H. Chapter Practice Task — Floor Beam Load FBD

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

### I. Chapter Summary Table

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Weight | $W = mg$ | Convert mass to force | Material weight per unit volume |
| Point load | $P$ in kN | Concentrated force | Assign > Frame Loads > Point |
| Distributed load | $w$ in kN/m | Spread along a member | Assign > Frame Loads > Distributed |
| Area load | $q$ in kPa | Spread over a slab | Assign > Area Loads > Uniform |
| Free Body Diagram | A sketch | Starting point of every problem | (drawn by the engineer) |

<div style="page-break-after: always;"></div>

## Chapter 11 — Equilibrium and the Sum of Forces

### A. Word Bank

| Word | Pronunciation | Plain English Meaning | Used In |
|------|---------------|----------------------|---------|
| **Equilibrium** | "ee-kwih-LIB-ree-um" | Perfect balance — nothing moves | $\Sigma F = 0$ |
| **Static** | "STAT-ik" | Not moving | Statics = study of non-moving structures |
| **Sum** | "SUM" | Total of all values added together | $\Sigma F$ |
| **Sigma** | "SIG-mah" | Greek letter $\Sigma$ meaning "sum of" | $\Sigma F_y$ |
| **Resultant** | "rih-ZUL-tant" | The single net force when many forces combine | When forces don't balance |
| **Net force** | "NET FORS" | Sum of all forces (= resultant) | If 0, equilibrium |
| **Reaction** | "ree-AK-shun" | The force a support pushes back with | $R_A$, $R_B$ |
| **Newton's First Law** | — | Object at rest stays at rest if forces balance | The basis of statics |
| **Newton's Third Law** | — | Every force has equal & opposite reaction | Why supports push back |

### B. Concept Introduction

A building doesn't move. That simple fact is the entire foundation of structural engineering. If a building is not moving, every force pushing on it must be exactly balanced by an equal force pushing back. This perfect balance is called **static equilibrium**.

> **Real-world analogy:** A book sitting on a table. Gravity pulls down on the book. The table pushes up with exactly the same force. Net force = zero, so the book doesn't accelerate. That is equilibrium.

### C. The Physics Behind It

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

### D. The Math

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

### E. Structural Engineering Application

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

### F. ETABS Connection

ETABS solves force balance and rotational balance at every joint of every model. In this chapter, use ETABS reactions only to verify vertical force balance.

> **Try it in ETABS 22:**
> 1. Create a 6 m simply supported beam, apply $P = 60\ \mathrm{kN}$ at mid-span
> 2. Run analysis (F5)
> 3. **Display > Show Tables > Joint Reactions**
> 4. Confirm both reactions = $30\ \mathrm{kN}$
> 5. Sum vertical reactions: $30 + 30 = 60\ \mathrm{kN}$ = applied load → vertical equilibrium ✓
> 6. Moment checks come in Chapter 12

### G. Common Mistakes

1. **Wrong sign convention.** Mixing up up/down. Pick once and stay consistent.
2. **Forgetting horizontal equilibrium.** With horizontal loads (wind), you must also satisfy $\Sigma F_x = 0$.
3. **Trying to solve non-symmetric supports with force balance alone.** You need Chapter 12's moment equilibrium for that.

### H. Chapter Practice Task — Symmetric Beam Force Balance

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

### I. Chapter Summary Table

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Vertical force equilibrium | $\Sigma F_y = 0$ | Sum of vertical forces | Joint Reactions |
| Horizontal force equilibrium | $\Sigma F_x = 0$ | Sum of horizontal forces | Joint Reactions (lateral) |
| Newton's First Law | rest stays at rest | Justifies static analysis | Foundation of solver |
| Newton's Third Law | equal & opposite | Why supports react | Reaction display |

<div style="page-break-after: always;"></div>

## Chapter 12 — Moments (Rotational Forces)

### A. Word Bank

| Word | Pronunciation | Plain English Meaning | Used In |
|------|---------------|----------------------|---------|
| **Moment** | "MOH-ment" | A force that causes rotation | $M = F \times d$ |
| **Torque** | "TORK" | Same idea, used in mechanics | $\tau$ |
| **Lever arm** | "LEH-ver ARM" | The perpendicular distance from force to pivot | $d$ |
| **Pivot** | "PIH-vot" | The point about which rotation tends to happen | A support |
| **Clockwise** | "KLOK-wize" | Rotating in the direction clock hands move | CW, often negative |
| **Counterclockwise** | "KOWN-ter-KLOK-wize" | Opposite of clockwise | CCW, often positive |
| **Couple** | "KUP-ul" | Two equal opposite parallel forces — a pure moment | Wrench-like effect |
| **Bending moment** | "BEND-ing MOH-ment" | Internal moment causing a beam to curve | $M(x)$ on a beam |

### B. Concept Introduction

A moment is a force that tends to cause rotation. The further the force is from the pivot, the greater its rotational effect.

> **Real-world analogy:** Opening a heavy door. Push near the hinge — it barely moves. Push far from the hinge — it swings open easily. Same force, different distance from pivot, totally different rotational effect. That is moment.

### C. The Physics Behind It

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

### D. The Math

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

### E. Structural Engineering Application

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

### F. ETABS Connection

ETABS computes moments at every section of every member. The bending moment diagram (BMD) is the visualization. Each value on the BMD is the result of $M = F \times d$ summed over every load on the relevant side of the section.

> **Try it in ETABS 22:**
> 1. Create a horizontal cantilever 4 m long, fixed at left, free at right
> 2. Apply $P = 25\ \mathrm{kN}$ downward at the free end
> 3. Run analysis
> 4. **Display > Show Tables > Joint Reactions**
> 5. At the fixed support, look at the **M3 reaction** — it should be $\approx 100\ \mathrm{kN \cdot m}$ (sign depends on ETABS convention)
> 6. **Display > Show Frame Forces > Moment 3-3** — the BMD goes linearly from 0 at free end to $\pm 100\ \mathrm{kN \cdot m}$ at the support

### G. Common Mistakes

1. **Using diagonal distance instead of perpendicular.** The lever arm is always the perpendicular distance from the line of action to the pivot.
2. **Sign confusion.** State your convention explicitly at problem start.
3. **Forgetting that distributed load creates moment too.** A UDL $w$ over length $L$ acts at its centroid (mid-length) with total force $w \cdot L$.

### H. Chapter Practice Task — Eccentric Column Load

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

### I. Chapter Summary Table

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Moment | $M = F \cdot d$ | Rotational effect of a force | Frame moment 3-3 |
| Sign convention | CCW = +, CW = − | Consistent calculation | Defined in solver |
| Fixed-end moment | $M_A = P \cdot L$ (cantilever) | Cantilever support reaction | Joint Reactions M3 |
| Eccentricity moment | $M = P \cdot e$ | Off-center axial load | P-M Interaction |

<div style="page-break-after: always;"></div>

## Chapter 13 — Types of Loads in Structural Engineering

### A. Word Bank

| Word | Pronunciation | Plain English Meaning | Used In |
|------|---------------|----------------------|---------|
| **Dead load (DL)** | — | Permanent weight | Structure, finishes, walls |
| **Live load (LL)** | — | Variable weight (people, furniture) | Set by code |
| **Wind load (WL)** | — | Pressure from wind | Lateral (sideways) on building |
| **Seismic load (EQ)** | "SICE-mik" | Inertial force from earthquake | Lateral (sideways) on building |
| **Superimposed dead load (SDL)** | "soo-per-im-POZED" | Dead load added on top of structure | Floor finish, partitions |
| **Tributary area** | "TRIB-yoo-teh-ree" | Area of floor whose load goes to one member | Used to convert area load to line load |
| **Load path** | — | Route loads take from where applied to ground | Slab→beam→column→foundation |
| **Load combination** | — | Code-required factored sum of multiple loads | $1.2DL + 1.6LL$ |

### B. Concept Introduction

Buildings carry many different kinds of loads. The structural engineer's first job is to identify, quantify, and apply each one — and then check the structure against all relevant **combinations** of these loads.

> **Real-world analogy:** Think of stacking groceries on a shelf:
> - **Dead load** = the shelf itself (always there)
> - **Live load** = the groceries (change daily)
> - **Wind load** = wind pushing the shelf sideways
> - **Seismic load** = the shelf shaking during an earthquake

### C. The Physics Behind It

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

### D. The Math

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

### E. Structural Engineering Application

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

### F. ETABS Connection

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

### G. Common Mistakes

1. **Forgetting partitions or finishes.** Code-mandated additions even if architectural drawings don't show them.
2. **Wrong tributary width.** For continuous slab on multiple beams, tributary widths usually go to half the distance to the adjacent beam on each side.
3. **Skipping load combinations.** Designing for $DL + LL$ unfactored is unsafe — code requires factored combos.

### H. Chapter Practice Task — Apartment Floor Beam

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

### I. Chapter Summary Table

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Dead load | Self-weight + finishes | Permanent loads | DL load pattern |
| Live load | From code occupancy table | Variable loads | LL load pattern |
| Tributary load | $w = q \cdot b_{trib}$ | Area→line conversion | Manual, then assigned |
| Factored combo | $1.2DL + 1.6LL$ | Ultimate design check | Define > Load Combos |
| Max moment (UDL) | $M_{max} = w_u L^2/8$ | Initial sizing | Moment 3-3 diagram |

<div style="page-break-after: always;"></div>

## Chapter 14 — Support Conditions

### A. Word Bank

| Word | Pronunciation | Plain English Meaning | Used In |
|------|---------------|----------------------|---------|
| **Pin support** | — | Resists translation, allows rotation | 2 reactions: H, V |
| **Roller support** | — | Resists vertical only, allows horizontal & rotation | 1 reaction: V |
| **Fixed support** | — | Resists everything: H, V, and moment | 3 reactions |
| **Cantilever** | "KAN-tih-lee-ver" | Beam fixed at one end, free at the other | Diving board |
| **Hinge** | "HINJ" | A connection that allows rotation | Like a door hinge |
| **Restraint** | "rih-STRAYNT" | Something preventing motion | Each restraint = one reaction |
| **Degree of freedom** | "free-dum" | A direction in which motion is possible | 6 in 3D, 3 in 2D per joint |
| **Simply supported** | — | Pin + roller, the simplest beam | Single span |
| **Propped cantilever** | "PROPT" | Fixed at one end + roller at the other | Hybrid |

### B. Concept Introduction

Every structure ultimately rests on something: a foundation, the ground, another structure. The way a member meets its support determines what kind of forces the support can apply back. Three idealized support types cover almost all everyday structural work.

> **Real-world analogy:** Three ways to hold a stick:
> - **Pin** = grip with two fingers (can rotate but can't move)
> - **Roller** = balance on a marble (can roll horizontally and rotate)
> - **Fixed** = embed in concrete (can't move or rotate)

### C. The Physics Behind It

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

### D. The Math

The number of equilibrium equations available in 2D is 3 ($\Sigma F_x$, $\Sigma F_y$, $\Sigma M$). If the number of unknown reactions equals 3, the structure is **statically determinate** — solvable using equilibrium alone. If reactions exceed 3, it is **indeterminate**. Indeterminate structures require deformation ideas and software methods introduced later, so this chapter only identifies them.

**Worked example.** Identify the support reactions for a 5 m cantilever with $P = 10\ \mathrm{kN}$ at the free end.

3 reactions at the fixed support: $H_A$, $V_A$, $M_A$.
$\Sigma F_x = 0$: $H_A = 0$
$\Sigma F_y = 0$: $V_A - 10 = 0$ → $V_A = 10\ \mathrm{kN}$ (upward)
$\Sigma M_A = 0$: $M_A - 10 \times 5 = 0$ → $M_A = 50\ \mathrm{kN \cdot m}$ (CCW)

### E. Structural Engineering Application

**Problem.** A 6 m beam carries $P = 40\ \mathrm{kN}$ at $x = 4\ \mathrm{m}$ from left. Compare the support unknowns if the beam is:
(a) simply supported (pin at left, roller at right)
(b) propped cantilever (fixed at left, roller at right)

**Case (a) — simply supported:**
Unknowns: horizontal reaction at the pin, vertical reaction at the pin, vertical reaction at the roller. Three unknowns, so a 2D simply supported beam is determinate.

**Case (b) — propped cantilever:**
Unknowns: horizontal reaction, vertical reaction, and moment at the fixed end, plus vertical reaction at the roller. Four unknowns, so equilibrium alone is not enough. ETABS can solve it because it also accounts for member stiffness and deformation.

### F. ETABS Connection

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

### G. Common Mistakes

1. **Confusing pin and fixed.** A pin allows rotation; a fixed support resists rotation. Visually, fixed = embedded in wall; pin = a hinge connection.
2. **Mismodeling rollers.** A roller resists only the perpendicular direction. Modeling all column bases as rollers makes the building unstable laterally.
3. **Over-restraining.** Adding unnecessary restraints can cause "phantom" forces. Only restrain what is physically restrained.

### H. Chapter Practice Task — Choosing the Right Support

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

### I. Chapter Summary Table

| Concept | Reactions | Engineering Use | ETABS Location |
|---------|-----------|----------------|----------------|
| Pin | H + V | Beam-to-column hinge | U1, U2, U3 restrained |
| Roller | V only | Bridge bearing | U3 only |
| Fixed | H + V + M | Column base, monolithic conn | All 6 restrained |
| Free | none | Cantilever tip | No restraints |

<div style="page-break-after: always;"></div>

## Chapter 15 — Internal Forces: Axial, Shear, and Bending Moment

### A. Word Bank

| Word | Pronunciation | Plain English Meaning | Used In |
|------|---------------|----------------------|---------|
| **Axial force** | "AK-see-ul" | Force along the length of a member | $N$ or $P$ |
| **Tension** | "TEN-shun" | Pulling force | $+N$ |
| **Compression** | "kom-PRESH-un" | Pushing force | $-N$ |
| **Shear force** | "SHEER" | Sideways internal force | $V$ |
| **Bending moment** | — | Internal moment causing curvature | $M$ |
| **Section cut** | — | Imaginary slice through a member to expose internal forces | Method to find $V, M$ |
| **SFD** | — | Shear Force Diagram | Plot of $V$ along member |
| **BMD** | — | Bending Moment Diagram | Plot of $M$ along member |
| **Sagging** | "SAG-ing" | Beam bending downward in the middle | Positive M (typical convention) |
| **Hogging** | "HOG-ing" | Beam bending upward in the middle | Negative M (over supports) |

### B. Concept Introduction

When loads act on a beam, internal forces develop inside the beam to keep it in equilibrium. These internal forces are what cause stress, strain, and ultimately failure. There are three kinds:

1. **Axial force ($N$)** — along the length
2. **Shear force ($V$)** — perpendicular to the length
3. **Bending moment ($M$)** — causes curvature

> **Real-world analogy:** Pinch a stick of chalk between two fingers. Pulling = tension (axial). Pressing in = compression (axial). Sliding fingers past each other = shear. Bending the chalk by twisting your wrists = moment.

### C. The Physics Behind It

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

### D. The Math

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

### E. Structural Engineering Application

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

### F. ETABS Connection

ETABS computes $N$, $V$, and $M$ at every section of every member and plots them as colored diagrams. The bending moment diagram is the visual function $M(x)$.

> **Try it in ETABS 22:**
> 1. Build the 8 m beam with $w = 12\ \mathrm{kN/m}$
> 2. Run analysis
> 3. **Display > Show Frame Forces > Moment 3-3** — observe the parabola, peaking at $\approx 96\ \mathrm{kN \cdot m}$
> 4. **Display > Show Frame Forces > Shear 2-2** — observe the linear diagram going from $+48$ to $-48$
> 5. **Display > Show Frame Forces > Axial** — for this beam, axial = 0
> 6. Right-click the beam → "Show Member Force Diagram" to see exact values at any section

### G. Common Mistakes

1. **Confusing shear and bending moment diagrams.** Shear is linear under UDL; moment is parabolic.
2. **Wrong sign convention on the cut.** Always state your convention. The trick is consistency.
3. **Forgetting that peak moment occurs where the shear diagram crosses zero.** The calculus explanation comes later; for now, remember this as a diagram rule.

### H. Chapter Practice Task — Cantilever SFD and BMD

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

### I. Chapter Summary Table

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Axial force | $N$ at section | Column design | Show Frame Forces > Axial |
| Shear force | $V(x)$ | Stirrup design | Show Frame Forces > Shear 2-2 |
| Bending moment | $M(x)$ | Longitudinal reinf. design | Show Frame Forces > Moment 3-3 |
| SS beam UDL max | $M_{max} = wL^2/8$ | Quick check | Peak of BMD |
| Cantilever UDL max | $M_{max} = wL^2/2$ | Cantilever design | Peak at fixed end |

<div style="page-break-after: always;"></div>

## Chapter 16 — Stress and Strain

### A. Word Bank

| Word | Pronunciation | Plain English Meaning | Used In |
|------|---------------|----------------------|---------|
| **Stress** | "STRESS" | Force per unit area | $\sigma$, MPa |
| **Strain** | "STRAYN" | Fractional deformation | $\varepsilon$, dimensionless |
| **Normal stress** | "NOR-mul" | Stress perpendicular to a surface | Tension/compression |
| **Shear stress** | "SHEER" | Stress parallel to a surface | $\tau$ |
| **Elastic modulus** | "ee-LAS-tik MOD-yoo-lus" | Material stiffness; stress per unit strain | $E$ |
| **Young's modulus** | "YUNGZ" | Same as elastic modulus | $E$ |
| **Yield stress** | "YEELD" | Stress at which material permanently deforms | $F_y$ |
| **Hooke's Law** | "HOOK" | Stress is proportional to strain (elastic range) | $\sigma = E \varepsilon$ |
| **Elongation** | "ee-long-GAY-shun" | Increase in length | $\Delta L$ |

### B. Concept Introduction

Stress is force concentrated. Strain is the deformation that results. Together, they describe how a material responds to load.

> **Real-world analogy:** Pushing a thumbtack vs. pushing a pencil eraser into a wall with the same force. Same force — but the thumbtack's tiny area means enormous stress, easily piercing the wall. Stress is what damages a material, not raw force.

### C. The Physics Behind It

When a force is applied to a member, two things happen simultaneously:
1. The material develops internal **stress** (force per area resisting the applied load)
2. The material **strains** (deforms slightly)

For most engineering materials, in the **elastic range**, stress and strain are linearly proportional. Push twice as hard → it deforms twice as much. The constant of proportionality is the material's **elastic modulus** $E$.

This is **Hooke's Law:**
$$\sigma = E \cdot \varepsilon$$

When $\sigma$ exceeds the **yield stress** $F_y$, the material no longer recovers — it has permanently deformed. Designs almost always keep $\sigma$ below $F_y$ (often well below, with safety factors).

### D. The Math

**Normal stress:**
$$\sigma = \dfrac{P}{A} \qquad [\mathrm{N/mm^2 = MPa}]$$

**Strain:**
$$\varepsilon = \dfrac{\Delta L}{L_0} \qquad [\mathrm{dimensionless}]$$

**Hooke's Law:**
$$\sigma = E \cdot \varepsilon \qquad \mathrm{or} \qquad \varepsilon = \dfrac{\sigma}{E}$$

Combining: elongation
$$\Delta L = \dfrac{P \cdot L}{A \cdot E}$$

**Typical material values:**

| Material | E (MPa) | $F_y$ (MPa) | $F_u$ (MPa) |
|----------|---------|-------------|-------------|
| Structural steel A36 | 200,000 | 250 | 400 |
| Structural steel S355 | 200,000 | 355 | 510 |
| Concrete C30 | ~32,000 | n/a | $f'_c = 30$ |
| Aluminum 6061-T6 | 70,000 | 240 | 290 |
| Timber (softwood) | ~10,000 | varies | varies |

**Worked example.** A steel rod of length $L = 2{,}000\ \mathrm{mm}$, area $A = 100\ \mathrm{mm^2}$ carries $P = 15{,}000\ \mathrm{N}$. Find the stress, strain, and elongation. ($E = 200{,}000\ \mathrm{MPa}$.)

1. Stress: $\sigma = P/A = 15{,}000 / 100 = 150\ \mathrm{MPa}$ ✓ ($< F_y = 250$, elastic)
2. Strain: $\varepsilon = \sigma / E = 150 / 200{,}000 = 0.00075$ (i.e., 0.075%)
3. Elongation: $\Delta L = \varepsilon \cdot L_0 = 0.00075 \times 2{,}000 = 1.5\ \mathrm{mm}$

The 2-meter rod stretches 1.5 mm under load — small, elastic, fully recoverable when the load is removed.

### E. Structural Engineering Application

**Problem.** A short concrete column 400 × 400 mm and 3 m tall carries an axial load $P = 1{,}500\ \mathrm{kN}$. Concrete $E = 32{,}000\ \mathrm{MPa}$. Compute stress, strain, and shortening.

**Solution:**
- $A = 400 \times 400 = 160{,}000\ \mathrm{mm^2}$
- Stress: $\sigma = 1{,}500{,}000 / 160{,}000 = 9.375\ \mathrm{MPa}$ ✓ ($< f'_c = 30$, well within capacity)
- Strain: $\varepsilon = 9.375 / 32{,}000 = 0.000293$
- Shortening: $\Delta L = 0.000293 \times 3{,}000 = 0.879\ \mathrm{mm}$

A 3 m tall concrete column shortens by less than 1 mm under 1,500 kN — explains why we don't visually notice settlement.

### F. ETABS Connection

ETABS uses Hooke's Law internally. When you define a material (Define > Materials), the value of $E$ you enter is exactly the elastic modulus from $\sigma = E\varepsilon$. ETABS then computes elongations, deflections, and reactions based on this constant.

> **Try it in ETABS 22:**
> 1. **Define > Materials > Add New Material > Concrete**
> 2. Enter $f'_c = 30\ \mathrm{MPa}$, weight = 25 kN/m³
> 3. ETABS auto-computes $E_c \approx 4{,}700\sqrt{f'_c} = 4{,}700 \sqrt{30} \approx 25{,}750\ \mathrm{MPa}$ (or you can override)
> 4. **Define > Materials > Add Steel** — $F_y = 350$, $E = 200{,}000\ \mathrm{MPa}$
> 5. Run any analysis — every displacement uses these $E$ values via Hooke's Law

### G. Common Mistakes

1. **Confusing $E$ for steel and concrete.** Steel ≈ 200,000 MPa; concrete ≈ 30,000 MPa. Order of magnitude difference.
2. **Forgetting that strain is dimensionless.** It's a ratio. Don't add units.
3. **Mixing N and kN in $\Delta L = PL/AE$.** Keep all in consistent units before substituting.

### H. Chapter Practice Task — Tie Rod Elongation

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

### I. Chapter Summary Table

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Normal stress | $\sigma = P/A$ | Axial member check | Internal stress check |
| Strain | $\varepsilon = \Delta L/L$ | Deformation per length | Deformed shape |
| Hooke's Law | $\sigma = E\varepsilon$ | Material law | E in Define > Materials |
| Elongation | $\Delta L = PL/AE$ | Member shortening/stretching | Deformed shape |

<div style="page-break-after: always;"></div>

## Chapter 17 — Bending Stress in Beams

### A. Word Bank

| Word | Pronunciation | Plain English Meaning | Used In |
|------|---------------|----------------------|---------|
| **Bending stress** | — | Stress in a beam from bending | Tension/compression from curvature |
| **Flexural stress** | "FLEX-yoo-rul" | Same as bending stress | $\sigma_b$ |
| **Neutral axis** | "NOO-trul" | Line through cross-section where stress = 0 | At centroid |
| **Section modulus** | — | A section property used in the full bending-stress formula | Chapter 20/advanced design |
| **Fiber** | "FY-ber" | A thin horizontal strip of cross-section | Outermost = max stress |
| **Sagging** | — | Beam curving like a smile | Positive M |
| **Hogging** | — | Beam curving like a frown | Negative M |

### B. Concept Introduction

When a beam bends, one face stretches (tension) and the opposite face compresses. The horizontal line through the centroid where stress is zero is called the **neutral axis**. Stress varies linearly from this line — zero at the axis, maximum at the top or bottom face.

> **Real-world analogy:** Bend a thick eraser. The bottom stretches; the top compresses. The middle stays the same length — that's the neutral axis.

### C. The Physics Behind It

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

### D. The Math

In this chapter, use proportional comparisons instead of the full formula:

| Change | Bending stress trend |
|--------|----------------------|
| Moment doubles | Stress doubles |
| Same moment, deeper section | Stress decreases |
| Same section, larger moment | Stress increases |

**Worked example.** Beam A and Beam B have the same section. Beam A has bending moment $M = 40\ \mathrm{kN \cdot m}$, and Beam B has $M = 80\ \mathrm{kN \cdot m}$. Which has larger bending stress?

Beam B has twice the moment, so it has twice the bending stress. Chapter 20 turns this proportional idea into an exact stress calculation.

### E. Structural Engineering Application

**Problem.** Two rectangular beams carry the same bending moment. Beam A is shallow. Beam B is deeper. Which one will usually have lower bending stress?

Beam B. A deeper section spreads material farther from the neutral axis, which makes the beam more effective in bending. Chapter 20 gives the geometry formula that turns this idea into numbers.

### F. ETABS Connection

ETABS shows bending moment diagrams before it shows design requirements. At this stage, use the moment diagram to locate where bending stress will be largest: where the bending moment is largest.

> **Try it in ETABS 22:**
> 1. **Display > Show Frame Forces > Moment 3-3** — find where $M$ is largest
> 2. Mark that location as the place bending stress will be most critical
> 3. Continue to Chapter 20 for the exact $Mc/I$ stress calculation after $I$ is taught

### G. Common Mistakes

1. **Thinking bending stress is uniform.** It is zero near the neutral axis and largest at the outer fibers.
2. **Looking only at force and ignoring moment.** Bending stress follows bending moment, not just total load.
3. **Using the formula before the geometry is ready.** Use this chapter for the stress pattern, then Chapter 20 for the exact formula.

### H. Chapter Practice Task — Locate Critical Bending Region

> **Scenario:** A beam's bending moment diagram has values: 0 kN·m at the left support, 60 kN·m at quarter-span, 95 kN·m at mid-span, 60 kN·m at three-quarter-span, and 0 kN·m at the right support.
>
> **Worked Solution:**
>
> The largest moment is 95 kN·m at mid-span, so the largest bending stress will occur at mid-span. The top and bottom fibers at that section are the critical locations.

### I. Chapter Summary Table

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Bending stress pattern | Zero at neutral axis, max at outer fibers | Beam design | Moment diagram + design output |
| Full formula | Introduced after $I$ in Chapter 20 | Quantitative stress check | Section Properties |
| Maximum stress location | Outer fiber, $c = h/2$ | Where to check | Top/bottom of section |

<div style="page-break-after: always;"></div>

> **End of Part 2.** You now understand how forces work, how supports react, how internal forces develop in beams, and how stress distributes through a cross-section. In Part 3 you'll build the geometric tools — areas, centroids, moments of inertia, vectors, and trigonometry — that turn these concepts into precise calculations.

<div style="page-break-after: always;"></div>

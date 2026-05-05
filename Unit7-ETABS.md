# Unit 7 — ETABS Workflow

> This unit puts every previous concept to work inside ETABS 22. You will build, load, analyze, and design a real building model — going from a blank screen to a complete set of design output. Each chapter is a hands-on step. Open ETABS 22 and follow along.

<div style="page-break-after: always;"></div>

## Chapter 28 — Interface and Setup

### A. Achievement

After this section you can create a new ETABS model file with the correct grid, story heights, units, and design codes for a given building specification.

### B. The Situation

You have the architect's floor plan for a 10-story office building: 5 bays of 8 m in X, 4 bays of 6 m in Y, stories 1–2 at 4.5 m and stories 3–10 at 3.2 m. Before placing a single element, you need a correctly configured file. Wrong units at this stage propagate errors through every subsequent step — every force, every section, every load will be in the wrong units and the model will give numerically plausible but physically wrong results.

### C. The Intuition

ETABS stores everything in a single model database file (`.edb`). The **grid** defines where elements can be placed. The **story data** defines floor elevations. The unit system chosen here applies to all subsequent input — change it later only with extreme care.

The grid stores only geometric coordinates. Until you draw elements, nothing structural exists. Setting the grid correctly costs 5 minutes; fixing a wrong grid after a full model is built costs hours.

### D. Failure Case

An engineer builds an entire model with units set to kN and mm, not realizing that the design code plug-in expects kN and m. Every <abbr title="[→ Ch4] track units through every calculation — wrong units are a common source of 10× errors">unit</abbr> conversion is internal and hidden. Column capacity output is checked against code limits in m-based units, but the model stiffness is in kN/mm. All stiffness values are effectively $1{,}000\times$ larger than intended. The model predicts essentially zero deflection; the design "passes" on a model that does not represent the real structure.

### E. The Rule

Set units to **kN, m, °C** at model creation. Never change them after building begins. The same unit system must apply to all material properties, section dimensions, and loads.

### F. The Formal Shorthand

$$\text{Total plan length} = N_{bays} \times L_{bay} \qquad \text{Total height} = \sum_{i=1}^{N} h_i$$

### G. Full Worked Example

**Tutorial building setup:**
1. **File > New Model**. Set units: kN, m, °C (top-right of dialog).
2. Set design codes: ACI 318-19, ASCE 7-22 (or local equivalents).
3. Custom Grid: X = 4 bays × 6 m; Y = 3 bays × 5 m.
4. Custom Story Data: 5 stories. Story 1 = 4.5 m. Stories 2–5 = 3.5 m.
5. Click OK. Save as `Tutorial-Building.edb`.

**Verify:** In elevation view, story heights should read 4.5 m (Story 1), then 3.5 m (Stories 2–5). In plan view, bay spacing should read 6 m and 5 m in the two directions.

### H. Practice Task

> **Scenario:** Create a model: X = 5 bays × 7.5 m, Y = 4 bays × 6 m, 8 floors, ground = 4.0 m, others = 3.2 m. Save as `Office-Tutorial.edb`.
>
> **Answer:** Total X = 37.5 m; total Y = 24 m; total height = 4.0 + 7 × 3.2 = 26.4 m. Verify in 3D view.

### I. What You Now Know

| Setting | Value | ETABS Location |
|---------|-------|---------------|
| Units | kN, m, °C | Top-right of New Model dialog |
| Grid | Bay spacing in X and Y | Custom Grid Spacing |
| Stories | Height per floor | Custom Story Data |
| Design code | ACI 318 / ASCE 7 | Options > Design Preferences |

<div style="page-break-after: always;"></div>

## Chapter 29 — Defining Materials

### A. Achievement

After this section you can define all required materials (concrete, rebar, structural steel) in ETABS with correct $f'_c$, $f_y$, $E$, and density values, and verify that ETABS computes the right concrete modulus.

### B. The Situation

You start placing columns in ETABS before defining materials. ETABS assigns a default concrete — whose $E_c$ may not match your specified $f'_c$. The columns are effectively made of a different material than the drawings specify. <abbr title="[→ Ch16] E = σ/ε — the ratio of stress to strain, controlling stiffness">Modulus of elasticity</abbr> directly controls <abbr title="[→ Ch17] vertical displacement of a beam or column under load">deflection</abbr> and natural period — both wrong if $E_c$ is wrong.

### C. The Intuition

Materials are the physical properties ETABS uses to compute stiffness, strength, and self-weight. Every element you draw will be assigned one of the materials you define here. Before placing elements, establish the material library.

Three properties matter most:
- **$E$** (modulus) — controls stiffness and deflection
- **$f'_c$ / $f_y$ / $F_y$** — controls capacity (strength design)
- **Density** — controls self-weight loads added automatically

### D. Failure Case

An engineer uses a default concrete with $E_c = 28{,}500\ \mathrm{MPa}$ when the specification requires C30 ($E_c = 4700\sqrt{30} = 25{,}742\ \mathrm{MPa}$). The model is 11% stiffer than the real structure. Predicted <abbr title="[→ Ch17] δ_max = 5wL⁴/384EI — vertical displacement of a beam under load">deflections</abbr> are 11% too low and the natural period is slightly too short. The model appears to pass drift checks with less margin than the real building has — but drift is unconservative.

### E. The Rule

Define materials before defining sections. Verify that ETABS computes $E_c$ from your specified $f'_c$ using:
$$E_c = 4700\sqrt{f'_c}\ \mathrm{(MPa, ACI\ 318)}$$

### F. The Formal Shorthand

$$E_c = 4700\sqrt{f'_c}\ \mathrm{MPa} \qquad E_s = 200{,}000\ \mathrm{MPa} \qquad \gamma_c = 25\ \mathrm{kN/m^3}$$

### G. Full Worked Example — Define C30, B500, S355

1. **Define > Material Properties > Add New Material**
2. **C30 concrete:** $f'_c = 30\ \mathrm{MPa}$; weight/volume = 25 kN/m³; ETABS auto-computes $E_c = 25{,}742\ \mathrm{MPa}$.
3. **B500 rebar:** $f_y = 500\ \mathrm{MPa}$; $E_s = 200{,}000\ \mathrm{MPa}$.
4. **S355 steel (if needed):** $F_y = 355\ \mathrm{MPa}$; $F_u = 510\ \mathrm{MPa}$.
5. Click OK. **Define > Material Properties > Show All** — verify all three appear.

### H. Practice Task

> **Scenario:** Define three concrete grades: C25 ($f'_c = 25$), C30 ($f'_c = 30$), C40 ($f'_c = 40$) MPa. Compute $E_c$ for each and verify in ETABS.
>
> **Answers:** $E_c$ = 23,500 / 25,742 / 29,725 MPa respectively.

### I. What You Now Know

| Material | Key property | Formula | ETABS Location |
|---------|-------------|---------|---------------|
| Concrete | $f'_c$, $E_c$ | $E_c = 4700\sqrt{f'_c}$ | Define > Material Properties |
| Rebar | $f_y = 500$ MPa | — | Define > Material Properties |
| Structural steel | $F_y$, $F_u$ | — | Define > Material Properties |

<div style="page-break-after: always;"></div>

## Chapter 30 — Defining Section Properties

### A. Achievement

After this section you can define rectangular concrete frame sections and slab/wall sections in ETABS, link them to the correct materials, and understand how section dimensions control stiffness.

### B. The Situation

Two beams carry the same load over the same span. One is 300 × 600 mm; the other is 250 × 500 mm. Their <abbr title="[→ Ch17] δ ∝ 1/I — deflection is inversely proportional to moment of inertia">deflections</abbr> differ by $(600/500)^3 \approx 1.73\times$ because the <abbr title="[→ Ch15] I = bh³/12 — resistance to bending based on cross-sectional shape">moment of inertia</abbr> depends on depth cubed. If you assign the wrong section in ETABS, every deflection, every period, and every force distribution is wrong.

### C. The Intuition

A section property ties a material + a geometric shape into the data ETABS needs to compute stiffness. The same C30 concrete can make a 300×600 mm beam or a 500×500 mm column — they behave differently because their $I$ values differ.

For slabs, the element type matters as much as the dimensions: **Membrane** carries only in-plane forces and has no bending stiffness. **Shell-thin** carries both in-plane and out-of-plane — required for any slab that bends under gravity load.

### D. Failure Case

A slab section is defined as type **Membrane** instead of **Shell-thin**. The slab appears in the model and delivers gravity loads to the beams, but ETABS reports zero moment in the slab itself. The slab design output shows zero required reinforcement in the slab. The engineer submits the design: the slab is unreinforced for flexure and will crack severely under service load.

### E. The Rule

For slabs and walls: use **Shell-thin** to capture both in-plane and out-of-plane behavior. **Membrane** is appropriate only for diaphragm-only modeling where slab bending is deliberately ignored. For frame sections: enter dimensions accurately — ETABS computes $A$ and $I$ from them.

### F. The Formal Shorthand

$$A = bh \qquad I = \frac{bh^3}{12} \qquad S = \frac{bh^2}{6}$$

$$A_{s,min} = 0.01 A_g \ (\text{ACI 318 column}) \qquad A_{s,max} = 0.08 A_g$$

### G. Full Worked Example

**Define tutorial-building sections:**

| Section | Type | Dimensions | Material |
|---------|------|------------|---------|
| C-50x50 | Column | 500 × 500 mm | C30 + B500 |
| B-30x60 | Beam | 300 × 600 mm | C30 + B500 |
| S-180 | Slab | 180 mm thick | C30 + B500 |

1. **Define > Section Properties > Frame Sections > Add New Property > Concrete Rectangular**
2. Name: `C-50x50`; depth = 0.50 m; width = 0.50 m; Material = C30; rebar B500; cover 40 mm; 8Ø20 bars.
3. Repeat for `B-30x60`: 0.30 × 0.60 m, beam type.
4. **Define > Section Properties > Slab Sections > Add** → name `S-180`, type **Shell-thin**, thickness 0.18 m.

### H. Practice Task

> **Scenario:** Define C-60x60 and C-50x50 columns, B-30x60 and B-25x50 beams, S-200 slab (200 mm Shell-thin), W-300 wall (300 mm Shell-thin).
>
> **Answer:** Repeat the steps above for each. Verify with **Define > Section Properties > Show All Sections** — should show 6 entries.

### I. What You Now Know

| Section type | ETABS type | Use case |
|-------------|-----------|---------|
| Column / beam | Concrete Rectangular | Gravity + lateral frame members |
| Slab | Shell-thin | Floor bending + diaphragm |
| Wall | Shell-thin | Shear wall (in-plane + out-of-plane) |
| Slab (diaphragm only) | Membrane | Diaphragm stiffness, no bending — only for special cases |

<div style="page-break-after: always;"></div>

## Chapter 31 — Building the Structural Model

### A. Achievement

After this section you can build a complete structural model by placing columns, beams, and slabs on the grid, replicating elements across all floors, assigning base restraints, and assigning rigid diaphragms.

### B. The Situation

An engineer draws all the beams first, then tries to connect them to columns — but the columns at those grid intersections haven't been drawn. ETABS analysis returns zero column forces everywhere: the load path is broken. <abbr title="[→ Ch5] force must travel through connected elements from where it is applied to where it is resisted">Forces must travel through a connected path</abbr> from slab to beam to column to foundation. A floating beam carries no reactions.

### C. The Intuition

The load path from Chapter 5 must be physically drawn as connected elements in ETABS. Elements connect at **joints** (nodes). If two elements share a joint, loads can transfer between them. If they miss by even a millimeter, ETABS creates two separate joints and no load transfers.

Draw elements snapped to grid intersections. Use **Quick Draw** tools for speed — they snap automatically. Always replicate rather than re-drawing the same elements story by story.

### D. Failure Case

A beam is drawn 50 mm off the column centerline (a click error). ETABS creates a new joint 50 mm from the column. The beam is effectively disconnected. Under lateral load, the story that should be tied by moment connections has almost no lateral stiffness. Story drift is 3× higher than expected. The design passes with the wrong forces because the stiffness model is wrong.

### E. The Rule

Draw → check connectivity → replicate → assign restraints → assign diaphragms. Every element must share joints with its connected elements. After building, confirm via **Display > Show Tables > Connectivity**: every element endpoint should appear as a shared joint.

### F. The Formal Shorthand

$$\text{Rigid diaphragm: all joints at floor } i \text{ have the same in-plane translation and rotation}$$
$$\text{Fixed base: } u_x = u_y = u_z = \theta_x = \theta_y = \theta_z = 0$$

### G. Full Worked Example

**Build the 5-story tutorial building:**

1. **Plan view, Story 1.** Quick Draw Columns → click every grid intersection → section C-50x50. (20 columns.)
2. Quick Draw Beams → click along all grid lines → B-30x60 interior, B-25x50 perimeter.
3. Quick Draw Floors/Walls → click each bay → S-180. (12 bays.)
4. **Edit > Select All** → **Edit > Replicate > Story** → Stories 2–5.
5. **Plan view, Base.** Select all base joints → **Assign > Joint > Restraints** → Fixed (all 6 DOFs).
6. Each floor: select all slabs → **Assign > Shell > Diaphragm** → New rigid diaphragm (D1 through D5, one per story).
7. **File > Save.**

### H. Practice Task

> **Scenario:** Complete the full tutorial building following the steps above. Then:
> 1. Check 3D view — should show a complete 5-story frame with floor plates.
> 2. Try **Display > Show Tables > Connectivity** — confirm no orphan joints.
> 3. Intentionally draw one beam 0.1 m off-grid; re-run and observe the effect on that floor's moment.

### I. What You Now Know

| Step | Tool | Purpose |
|------|------|---------|
| Draw columns | Quick Draw Columns | Vertical load path |
| Draw beams | Quick Draw Beams | Horizontal framing |
| Draw slabs | Quick Draw Floors | Floor system |
| Replicate | Edit > Replicate | Repeat across stories |
| Base restraints | Assign > Joint > Restraints | Connect to ground |
| Diaphragm | Assign > Shell > Diaphragm | Link floor joints |

<div style="page-break-after: always;"></div>

## Chapter 32 — Applying Loads

### A. Achievement

After this section you can define load patterns (DL, LL, seismic), apply self-weight, surface loads on slabs, and point/line loads on beams, and set up ASCE 7-22 load combinations.

### B. The Situation

A model runs with only self-weight applied. Maximum column axial force is 3,000 kN. The engineer accepts this for design. But live load alone would add another 1,800 kN — a 60% increase. The design passes on an incomplete load model. Missing load patterns lead directly to under-designed members.

Loads are organized in three layers that ETABS separates deliberately:
- **Load patterns** — named sources: "DL", "LL", "EQX"
- **Load cases** — how each pattern is analyzed: static, modal, response spectrum
- **Load combinations** — code-factored sums: $1.2D + 1.6L$

### C. The Intuition

Load patterns collect unfactored loads. Load cases solve them. Load combinations apply code factors for design. You must complete all three layers before running a complete design check.

The most dangerous mistake at this stage: setting self-weight multiplier > 0 on more than one load pattern. Then self-weight is counted twice, inflating all reactions and forces.

### D. Failure Case

The self-weight multiplier is accidentally set to 1 on both the DL and LL patterns (a common copy-paste error when duplicating patterns). Total building weight is doubled. Column axial forces are 2× too high; seismic mass is also doubled; the design produces over-designed sections. More dangerously, if the model is used for seismic force calculation, the doubled mass produces doubled seismic forces — an incorrect safety margin that may hide underperformance.

### E. The Rule

Exactly one load pattern carries self-weight (multiplier = 1). All others have multiplier = 0. Apply unfactored loads to patterns; let combinations apply the code factors. Always use **Define > Load Combinations > Add Default Design Combos** rather than entering combinations manually.

### F. The Formal Shorthand

ASCE 7-22 strength design combinations (basic):
$$1.4D \qquad 1.2D + 1.6L \qquad 1.2D + 1.0E + 0.5L \qquad 0.9D + 1.0E$$

### G. Full Worked Example

1. **Define > Load Patterns:** Add DL (Dead, self-weight multiplier = **1**), LL (Live, 0), EQX (Seismic, 0), EQY (Seismic, 0).
2. **Apply finishes:** Select all slabs → **Assign > Shell Loads > Uniform** → Pattern = DL → 1.5 kPa.
3. **Apply live load:** Same → Pattern = LL → 2.4 kPa (roof: 1.0 kPa).
4. **Define > Load Cases:** Review auto-generated cases. For seismic, configure EQX with response spectrum.
5. **Define > Load Combinations > Add Default Design Combos** → ACI/ASCE → OK.

### H. Practice Task

> **Scenario:** Define for the tutorial building: DL with 1.5 kPa finishes, LL = 2.4 kPa typical / 1.0 kPa roof, and seismic EQX/EQY (ASCE 7-22, $S_S = 1.5g$, $S_1 = 0.6g$, Site Class D, $R = 8$).
>
> **Answer:** Set EQX as ASCE 7 auto-lateral; enter seismic parameters via **Define > Load Patterns > [EQX] > Modify Lateral Load**. Run default combos. Verify combo list shows $1.4D$, $1.2D+1.6L$, etc.

### I. What You Now Know

| Concept | Rule | ETABS Location |
|---------|------|---------------|
| Self-weight | Only 1 pattern with multiplier = 1 | Define > Load Patterns |
| Slab UDL | Unfactored kPa | Assign > Shell Loads > Uniform |
| Load case | Static or response spectrum | Define > Load Cases |
| Combinations | Use default design combos | Define > Load Combinations |

<div style="page-break-after: always;"></div>

## Chapter 33 — Running the Analysis

### A. Achievement

After this section you can run a linear static and modal analysis in ETABS, confirm the run log shows no errors, and verify the fundamental period against the ASCE 7 code approximation.

### B. The Situation

You click **Analyze > Run Analysis** and get: "Analysis failed — model instability detected at joint 47." Or the analysis succeeds but reports $T_1 = 4.2\ \mathrm{s}$ for a 5-story building. The code estimate is $T_a \approx 0.65\ \mathrm{s}$. Something is badly wrong, but where? 

Understanding what ETABS solves — the <abbr title="[→ Ch26] [K]{d} = {F} — the global stiffness equation ETABS solves for all displacements simultaneously">stiffness matrix equation</abbr> — tells you where to look when it fails.

### C. The Intuition

ETABS assembles $[K]$ from all element stiffnesses, builds $\{F\}$ from all loads, and solves $[K]\{d\} = \{F\}$. If any element is disconnected or if the structure can move without any stiffness resisting it, $[K]$ is singular — the matrix equation has no unique solution. That is "model instability."

For modal analysis, ETABS additionally solves the eigenvalue problem to find natural periods. The first period $T_1$ is the key sanity check: it must be in the range predicted by code formulas.

### D. Failure Case

$T_1 = 4.2\ \mathrm{s}$ for a 5-story RC building. Code estimate: $T_a = 0.047 \times 18.5^{0.9} = 0.656\ \mathrm{s}$. The ratio is 6.4×. Root cause: the diaphragm was not assigned to Story 3. That floor's joints are not tied together. ETABS computes a very flexible lateral response for Story 3 — essentially a soft story with near-zero lateral stiffness. The lateral force distribution from this model is meaningless. Design proceeds on wrong forces.

### E. The Rule

After every run: (1) check the run log for errors, (2) compare $T_1$ to $T_a = C_t h_n^x$, (3) verify cumulative mass participation > 90% in X and Y. If any check fails, do not proceed to results or design.

### F. The Formal Shorthand

$$T_a = C_t h_n^x \quad \text{(RC moment frame: } C_t = 0.0466,\ x = 0.9\text{)}$$

For 5-story RC frame, $h_n = 4.5 + 4(3.5) = 18.5\ \mathrm{m}$:
$$T_a = 0.0466 \times 18.5^{0.9} = 0.0466 \times 14.08 = 0.656\ \mathrm{s}$$

ETABS computed $T_1$ should be in the range $1.0$–$1.5\ \times T_a$ for a bare concrete frame.

$$\text{Mass participation requirement: } \sum \Gamma_i^2 \ge 0.90 \text{ in each lateral direction}$$

### G. Full Worked Example

1. **Define > Mass Source** → DL + 0.25 LL.
2. **Define > Load Cases > Modal** → set **12 modes** minimum.
3. **Analyze > Run Analysis** (F5) → watch log — "Complete" with zero errors.
4. **Display > Show Tables > Modal Information > Modal Periods** → read $T_1$.
5. Compare to $T_a = 0.656\ \mathrm{s}$. Expect $T_1 \approx 1.0$–$1.3\ \mathrm{s}$ for bare frame.
6. Check cumulative mass participation: X and Y should both reach > 90% by mode 12.

### H. Practice Task

> **Scenario:** Run the tutorial building with 6 modes. Check mass participation. Then increase to 18 modes. Report the difference in cumulative mass participation.
>
> **Expected:** 6 modes likely captures 60–75% mass participation; 18 modes captures 85–95%. This demonstrates why more modes are needed.

### I. What You Now Know

| Check | Target | Where to Find |
|-------|--------|--------------|
| Run log | Zero errors | Analyze > Run Analysis log |
| $T_1$ | Near $T_a$ (±50%) | Show Tables > Modal Periods |
| Mass participation | > 90% in X and Y | Modal Information table |
| Pre-run | Diaphragm, restraints, mass source | Assign and Define menus |

<div style="page-break-after: always;"></div>

## Chapter 34 — Reading and Interpreting Results

### A. Achievement

After this section you can navigate ETABS output to read beam and column forces, check deflections and story drifts, perform a global <abbr title="[→ Ch8] ΣFx = 0, ΣFy = 0, ΣM = 0">equilibrium</abbr> check, and verify key results against hand estimates.

### B. The Situation

Analysis runs successfully. The maximum beam moment shown in ETABS is $M = 240\ \mathrm{kN \cdot m}$. A quick hand check: span 7 m, tributary width 3 m, $w = (5.0 + 2.4) \times 3 = 22.2\ \mathrm{kN/m}$, $M = wL^2/8 = 22.2 \times 49/8 = 136\ \mathrm{kN \cdot m}$. The ETABS number is 76% higher — which may be legitimate in a continuous frame (continuity adds hogging moments at supports), or may indicate a load entry error. You need to know which.

### C. The Intuition

ETABS produces two kinds of output: **diagrams** (visual — <abbr title="[→ Ch11] diagram of internal bending moment along a beam">bending moment diagram</abbr>, deflected shape, stress contours) and **tables** (numerical, exportable to spreadsheets). The most important first check is global equilibrium: total reactions must equal total applied loads. If that doesn't work, nothing else does.

### D. Failure Case

An engineer reads beam moments under the **DL-only** load case and decides the beam passes design. Under DL alone, $M_{max} = 65\ \mathrm{kN \cdot m}$. Under the design envelope combination $1.2D + 1.6L$, the correct demand is $M_{max} = 142\ \mathrm{kN \cdot m}$ — more than double. Designing from a single load case instead of the envelope understimates demand by 54%.

### E. The Rule

Check in this order: (1) global equilibrium — sum of reactions equals sum of applied loads; (2) story drifts under lateral; (3) member forces under the governing design combination (the envelope, not individual cases).

### F. The Formal Shorthand

$$\text{Story drift ratio: } \delta_i = \frac{\Delta_i - \Delta_{i-1}}{h_{story}} \le \delta_{allow} \quad (\text{ASCE 7: 0.020 for SMF})$$

$$\text{D/C: } \frac{M_u}{\phi M_n} \le 1.0, \quad \frac{P_u}{\phi P_n} \le 1.0, \quad \text{etc.}$$

### G. Full Worked Example

**Equilibrium check (most important first):**
1. **Display > Show Tables > Analysis > Joint Output > Reactions** → filter for combo = 1.0 DL.
2. Sum the FZ column. Compare to expected total dead weight.

Expected dead weight: slab area = $24 \times 15 = 360\ \mathrm{m^2}$, 5 stories. Slab DL = $0.18 \times 25 = 4.5\ \mathrm{kPa}$. Finishes = $1.5\ \mathrm{kPa}$. Total DL from slabs = $6.0 \times 360 \times 5 = 10{,}800\ \mathrm{kN}$ (slabs alone). Add frame self-weight (~5–10% more). Target: ~11,000–12,000 kN total. If ETABS sum matches this, equilibrium is verified.

**Story drift check:**
3. **Display > Show Tables > Story Output > Story Drifts** → look at max drift for EQX.
4. Check: max < $h_{story}/250 = 3500/250 = 14\ \mathrm{mm}$.

**Member forces:**
5. **Display > Show Forces/Stresses > Frames > Moment 3-3** → choose envelope combo $1.2DL + 1.6LL$.
6. Identify the maximum beam and column moments.

### H. Practice Task

> **Scenario:** For the tutorial building, perform the equilibrium check. Is the sum of FZ reactions within 2% of your estimated total dead weight?
>
> **Expected:** Yes, if the model is correct. A >5% discrepancy means a missing load pattern or double-counted self-weight.

### I. What You Now Know

| Check | Method | Target | ETABS Location |
|-------|--------|--------|---------------|
| Global equilibrium | Sum FZ reactions vs. hand estimate | Within 2% | Show Tables > Reactions |
| Story drift | Max story drift / h | < code limit | Show Tables > Story Drifts |
| Member demand | Worst combo envelope | Governs design | Show Forces/Stresses |
| Single-case danger | Always use the envelope | D/C from envelope only | Load Combinations |

<div style="page-break-after: always;"></div>

## Chapter 35 — Design in ETABS

### A. Achievement

After this section you can run RC and steel design checks in ETABS, read <abbr title="[→ Ch12] demand/capacity ratio — demand ÷ capacity ≤ 1.0 for a member to pass">D/C ratios</abbr>, identify the governing limit state and load combination for a failed member, and determine which model change will resolve the overstress.

### B. The Situation

ETABS design check shows a column highlighted red with D/C = 1.15. Demand exceeds capacity by 15%. Is it bending, axial, or combined $P$-$M$ that controls? What combination governs? Does increasing the section size fix it, or is the problem excessive lateral force requiring a wall? Reading the design detail correctly is necessary before making any change — the wrong fix wastes time and can make other members worse.

### C. The Intuition

ETABS design checks every member for all applicable limit states (bending, shear, axial, combined P-M interaction) across all load combinations. It reports D/C ratios colored by severity: green (< 0.9), yellow (0.9–1.0), red (> 1.0). ETABS does not fix problems — reporting is its only design output. Fixing is your decision.

For concrete columns, ETABS computes an interaction diagram (the $P$-$M$ envelope) and checks whether the demand point $(P_u, M_u)$ falls inside. Outside = failure. The interaction diagram's shape explains why increasing reinforcement helps for moment-controlled failure but not for compression-controlled failure.

### D. Failure Case

An engineer sees a red column and increases the reinforcement ratio from 1% to 4%. The column is still red. The failure mode is a combination of very high axial force from gravity (approaching the pure compression limit $0.80 \phi P_0$) and a large moment from seismic. The fix needed is not more rebar — it is a larger column cross-section, which increases both $P_0$ and $M_n$ simultaneously.

Increasing rebar alone raises only $M_n$; it barely affects the compression limit when compression already governs. Only understanding the interaction diagram reveals this.

### E. The Rule

Before changing anything: read the design detail to identify (1) the governing limit state (bending, shear, axial, combined), (2) the governing load combination, and (3) whether the failure is force-controlled or displacement-controlled. Then make the change that targets the root cause.

### F. The Formal Shorthand

$$\text{D/C} = \frac{\text{demand}}{\text{capacity}} = \frac{M_u}{\phi M_n} \quad \text{or} \quad \frac{P_u}{\phi P_n} \quad \text{or} \quad \frac{V_u}{\phi V_n}$$

$$P\text{-}M \text{ interaction (simplified upper bound): } \frac{P_u}{\phi P_n} + \frac{8}{9}\frac{M_u}{\phi M_n} \le 1.0 \quad \text{(AISC H1)}$$

### G. Full Worked Example

**Run RC concrete design on the tutorial building:**
1. **Design > Concrete Frame Design > Set Design Code** → ACI 318-19.
2. **Design > Concrete Frame Design > Start Design/Check** → ETABS runs all members against all combinations.
3. **Display > Design Info > Demand/Capacity Ratio (D/C)** → color map shows problem members.
4. Click a red column → **Design > Concrete Frame Design > Display Design Info > Column Details** → reads: "Governing combo = 1.2DL+1.0EQX+0.5LL; Failure: P-M interaction, D/C = 1.15; $P_u = 3{,}200\ \mathrm{kN}$, $M_{u,3} = 280\ \mathrm{kN \cdot m}$."
5. Fix: increase column to 600×600 mm. Re-run design. D/C should drop to < 1.0.

### H. Practice Task

> **Scenario:** After running design on the tutorial building, find the member with the highest D/C. Report: which member, which limit state, which combination. Then propose one change and predict (qualitatively) its effect.
>
> **Expected:** The ground-floor corner column under combined seismic + gravity will likely have the highest D/C. Increasing section size or adding shear walls will reduce it.

### I. What You Now Know

| Output | Meaning | Fix |
|--------|---------|-----|
| D/C < 1.0, green | Passes | No action |
| D/C > 1.0, red | Fails | Increase section or stiffness |
| P-M controls | Combined axial + bending | Increase section |
| Shear controls | Insufficient transverse ties | Add stirrups / ties |
| Governing combo | The worst-case factored load | Target that load path |

<div style="page-break-after: always;"></div>

## Chapter 36 — Complete Worked Example: 5-Story RC Building

### A. Achievement

After this section you will have built, analyzed, and designed a complete 5-story reinforced concrete office building in ETABS from a blank screen — integrating every skill from Chapters 28–35.

### B. The Situation

You have a structural brief: 5-story office building, RC frame with seismic loading, complete analysis and design required. This chapter is the full end-to-end walkthrough. Every numbered step refers back to the chapter where the technique was taught.

### C. The Intuition

The order matters: setup → materials → sections → geometry → loads → analysis → results check → design. Each step depends on the previous one. Skipping or reordering steps is the most common source of errors that are hard to trace later.

**Project specification:**
- Grid: 4 bays × 6 m in X (24 m), 3 bays × 5 m in Y (15 m)
- Stories: Story 1 = 4.5 m, Stories 2–5 = 3.5 m each (total height 18.5 m)
- Materials: C30 concrete, B500 rebar
- Sections: C-50x50 columns, B-30x60 interior beams, B-25x50 perimeter beams, S-180 slab
- Loads: DL = self-weight + 1.5 kPa finishes; LL = 2.4 kPa typical / 1.0 kPa roof
- Seismic: ASCE 7-22, $S_S = 1.5g$, $S_1 = 0.6g$, Site Class D, $R = 8$
- Design code: ACI 318-19

### D. Failure Case

Building the model out of order — for example, applying loads before defining sections, or running design before verifying equilibrium — produces results where errors from early steps silently invalidate later steps. Always run the sanity checks at Steps 7–8 before proceeding to design.

### E. The Rule

Build in order: grid → materials → sections → geometry → loads → analysis → verify → design. Before moving to design, the equilibrium check and period check must both pass.

### F. The Formal Shorthand

| Step | Key check |
|------|----------|
| Setup | Total height = $\sum h_{story}$ |
| Materials | $E_c = 4700\sqrt{f'_c}$; density = 25 kN/m³ |
| Analysis | $T_1$ near $T_a$; mass participation > 90% |
| Equilibrium | $\sum R_z = \sum W_{applied}$ within 2% |
| Drift | Max story drift < $h_{sx}/250$ |

### G. Full Worked Example

**Step 1 — Setup.** File > New Model. Units: kN, m, °C. Codes: ACI 318-19, ASCE 7-22. Grid: X = 4×6 m, Y = 3×5 m. Stories: 5; Story 1 = 4.5 m, others = 3.5 m. Save as `Tutorial-5StoryRC.edb`.

**Step 2 — Materials.** Define C30 ($f'_c = 30$ MPa, 25 kN/m³) and B500 ($f_y = 500$ MPa).

**Step 3 — Sections.** Define C-50x50, B-30x60, B-25x50, S-180 (Shell-thin).

**Step 4 — Build geometry.** Draw 20 columns at all grid intersections on Story 1 → replicate to Story 5. Draw beams along all gridlines. Draw slabs in all bays. Fixed restraints at all base joints. Rigid diaphragms D1–D5 at each story.

**Step 5 — Loads.** Patterns: DL (multiplier 1), LL, EQX, EQY. Slab finishes 1.5 kPa on DL. LL 2.4 kPa typical, 1.0 kPa roof. Configure seismic: $S_S = 1.5g$, $S_1 = 0.6g$, Site D, $R = 8$, $I_e = 1.0$. Mass Source: DL + 0.25 LL. Load Combinations: Add Default Design Combos (ACI/ASCE).

**Step 6 — Run analysis.** Modal case: 12 modes. Analyze > Run Analysis (F5). Check log: zero errors.

**Step 7 — Verify.** Modal period $T_1$: expect 1.0–1.3 s. Mass participation > 90% by mode 12. Sum FZ reactions for 1.0 DL: expect ~11,000–12,500 kN. Max story drift under EQX: < 14 mm.

**Step 8 — Design.** Design > Concrete Frame Design > Start Design. Display D/C ratios. Identify highest D/C members. For any D/C > 1.0, increase section size and re-run.

**Expected sanity ranges:**

| Quantity | Expected range |
|----------|---------------|
| $T_1$ | 1.0–1.3 s |
| Total DL reaction | 11,000–13,000 kN |
| Max story drift EQX | < 14 mm |
| Base shear EQX | 10–15% of total weight |
| Max ground column $A_s$ | 4,000–6,000 mm² |

### H. Practice Task

> **Deliverables:** Build the complete tutorial building following Steps 1–8. Produce:
> 1. The `.edb` model file
> 2. A one-paragraph summary stating $T_1$, base shear EQX, max story drift, total DL reaction, max column $A_s$
> 3. A screenshot of the deformed shape under EQX
>
> Use the expected ranges above as a sanity check on your own results.

### I. What You Now Know

The 8-step order above is the full workflow. Every future project follows this same sequence. Variations (steel vs RC, wind vs seismic, flat plate vs frame) change only the contents of each step — the step order and the verification checks remain the same.

<div style="page-break-after: always;"></div>

## Chapter 37 — Common ETABS Mistakes and How to Fix Them

### A. Achievement

After this section you can diagnose and fix the ten most common ETABS modeling errors: instabilities, wrong units, missing loads, incorrect supports, mesh problems, and design misconfigurations.

### B. The Situation

This chapter is a reference, not a tutorial. Return to it whenever a result looks wrong. Every symptom in the table below maps to a specific cause with a specific fix. Work through them systematically rather than guessing.

### C. The Intuition

ETABS errors fall into four categories:
1. **Geometry problems** — disconnected elements, missing supports
2. **Property problems** — wrong units, missing materials or sections
3. **Load problems** — missing patterns, wrong directions, no combinations
4. **Analysis/design problems** — instability, wrong code, missing mass source

The most important meta-principle: **ETABS will dutifully solve a wrong model.** Analysis completes without error on a model with doubled self-weight, missing diaphragms, or wrong design code. No warning is issued. Your judgment — enforced through systematic sanity checks — is the only filter.

### D. Failure Case

The ultimate failure is trusting ETABS output without verification. Analysis runs, design runs, numbers appear, and the engineer submits. But no equilibrium check was done. No period check was done. The self-weight multiplier was set on both DL and LL patterns (2× gravity). The model was "correct" in ETABS's view — it just modeled a building made of twice-heavy concrete. All column sizes were over-designed; the seismic mass was wrong; the period was wrong; the lateral forces were wrong.

### E. The Rule

Every analysis session must include, at minimum: period check, mass participation check, and equilibrium check. These take 5 minutes. They catch 90% of critical modeling errors before they reach the design output.

### F. Diagnostic Table

| Symptom | Most Likely Cause | Fix |
|---------|------------------|-----|
| "Structure is unstable" | Missing base restraints; mechanism in geometry | Assign fixed supports at all base joints |
| $T_1 \gg T_a$ (e.g., 5 s for 5-story) | Diaphragm missing on one floor | Assign rigid diaphragm to all floors |
| $\sum R_z \ne \sum W_{applied}$ | Self-weight multiplier on multiple patterns | Set multiplier = 1 only on DL pattern |
| Mass participation < 90% | Too few modes requested | Increase modes to 24 or 36 |
| Huge drift under lateral | Soft story; under-sized columns | Add shear walls; re-size columns |
| "OS" on every column | Wrong design code or reinforcement grade | Check Options > Design Preferences |
| Beams have huge axial force | Slab membrane action locked in beams | Often a model artifact; consult experienced engineer |
| Slab shows zero moment | Slab section type = Membrane | Change to Shell-thin |
| Zero reactions at beam ends | Beam not connected to column | Snap to grid; check connectivity |
| Design D/C looks too low (<0.1) | Wrong load combinations or factored loads | Re-check Define > Load Combinations |

### G. Full Worked Example

**Deliberate-break exercise** (build diagnostic instinct):
1. Save your completed tutorial model as `Tutorial-broken.edb`.
2. Remove all restraints from one base column. Re-run. Observe: "instability" error or unrealistic displacement at that joint.
3. Restore restraints. Delete the diaphragm on Story 3. Re-run. Observe: $T_1$ changes; Story 3 behaves like a soft story.
4. Restore diaphragm. Set LL self-weight multiplier = 1. Re-run. Observe: $\sum R_z$ approximately doubles.
5. Restore to 0. Reduce modes to 3. Re-run. Observe: mass participation stops at ~50%; dynamic results unreliable.
6. Restore to 12 modes. All checks pass again.

This exercise takes 20 minutes and builds more diagnostic instinct than any text description.

### H. Practice Task

> **Scenario:** A colleague sends you a model where the ground-floor columns show D/C > 1.5 everywhere. Before changing any section, run the three sanity checks (period, mass participation, equilibrium). Report what you find.
>
> **Expected workflow:**
> 1. Check period — if $T_1$ is near expected, lateral analysis is probably OK
> 2. Check mass participation — if < 90%, seismic forces are unreliable
> 3. Check equilibrium — if $\sum R_z$ is 2× expected, self-weight is double-counted → fix load pattern, re-run, re-check D/C

### I. What You Now Know

The three mandatory checks — period, mass participation, equilibrium — are the minimum before trusting any ETABS output. Beyond these, read the Diagnostic Table whenever a result is suspicious. Fix one issue at a time; re-run after each fix.

| Check | What it catches | Time required |
|-------|----------------|--------------|
| Period vs. $T_a$ | Stiffness errors, missing diaphragms | 2 min |
| Mass participation | Too few modes, missing mass | 1 min |
| $\sum R_z$ vs. hand estimate | Double-counted loads, missing loads | 3 min |
| Equilibrium: beam hand-check | Load magnitude errors | 5 min |

<div style="page-break-after: always;"></div>

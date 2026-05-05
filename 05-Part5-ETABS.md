# PART 5 — ETABS PRACTICAL GUIDE

> Welcome to Part 5 — the practical heart of this book. Everything you've learned (algebra, statics, geometry, trig, precalculus) now becomes the language you use to build, run, and interpret an ETABS 22 model. We start with the interface and end with a complete worked 5-story RC building plus a troubleshooting reference. Open ETABS 22 and follow along; this part is meant to be done at the keyboard.

<div style="page-break-after: always;"></div>

## Chapter 34 — ETABS Interface and Setup

### A. Achievement

After this section you can create a new ETABS model from scratch with the correct grid spacing, story heights, units, and design codes for a given building specification.

### B. The Situation

You have the architect's floor plan for a 10-story office building: 5 bays of 8 m in X, 4 bays of 6 m in Y, stories 1–2 at 4.5 m and stories 3–10 at 3.2 m. Before placing a single column, you need a correctly configured ETABS model file — wrong units or story heights at this stage propagate errors through every step that follows.

### C. The Intuition

ETABS is a database-driven program. Everything you place — columns, loads, sections — is stored in a model database file (.edb). The **grid** and **stories** define the scaffolding that organizes all subsequent work. Units, design codes, and story heights must be set correctly here and are tedious to change later.


Nothing physical yet — but the choices made here (units, grid spacing, story heights) propagate through the entire analysis. A wrong unit setting can produce numerically correct but physically meaningless results.


**Formulas and Derivations**


Grid spacing arithmetic. If you have 5 bays of 6 m each, total length = 30 m. Story counts: a 5-story building with 4 m floors and a 5 m ground story = 5 + 16 = 21 m total height.


**Full Worked Examples**


**Setting up a new model:**

1. **File > New Model** — opens template dialog
2. Choose units: kN, m, °C (consistent SI)
3. Set design codes (ACI 318-19, AISC 360-22, ASCE 7-22, or local equivalents)
4. Define grid: number of bays in X, Y; bay spacing
5. Define stories: number, height per story
6. Click OK — ETABS generates an empty model with grid only


**ETABS Mini-Task**


> **Mini-Task: Build your first empty model.**
>
> 1. **File > New Model**
> 2. Set units to kN, m, °C (top-right of dialog)
> 3. Use **Custom Grid Spacing**: X = 4 bays × 6 m, Y = 3 bays × 5 m
> 4. Use **Custom Story Data**: 5 stories, story 1 = 4.5 m, stories 2–5 = 3.5 m each
> 5. Click OK
> 6. Verify: in 3D view you should see the grid; in plan view the bays; in elevation the story heights
> 7. **File > Save As** → name it "Tutorial-Building.edb"

### D. Failure Case

An engineer builds an entire model in kN and mm (a common combination in some offices), not realizing that their design code plug-in expects kN and m. Every stiffness value entered is correct for the unit, but load combinations and design capacity formulas interpret stiffness values as if they were in kN/m instead of kN/mm. The model runs without errors, but column capacity is off by a factor of 1{,}000.

1. **Inconsistent units.** Mixing kN with mm and MPa requires care; mixing kN-m with kN-mm leads to errors of 1000×.
2. **Wrong design code.** Codes affect load combinations, capacity formulas, and detailing.
3. **Forgetting to save.** ETABS does not auto-save. Save early, save often, save as new versions.

### E. The Rule

Set units to kN, m, °C at model creation and never change them. The same model unit system must be used for all material properties, section dimensions, and loads. Before saving, verify: File > Display Units matches your intent.

### F. The Formal Shorthand

$$\text{Total plan length} = N_{bays} \times L_{bay} \qquad \text{Total height} = \sum_{i=1}^{N} h_i$$

Story labels: Story 1 is the lowest above grade. Base is the foundation level. Elevation view shows the cumulative height profile.

### G. Full Worked Example

See the ETABS Mini-Task walkthrough and the setup steps in the Intuition section above.

### H. Practice Task — Custom Grid Office Building

> **Scenario:** Create a model with the grid: X = 5 bays of 7.5 m, Y = 4 bays of 6 m. Stories: 8 floors, ground = 4.0 m, others = 3.2 m. Save as "Office-Tutorial.edb".
>
> **Worked Solution:** Follow steps above with these inputs. After save, take a screenshot of the 3D view and the elevation view to verify story heights are right.

### I. What You Now Know

| Concept | Setting | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Units | kN, m, °C | All inputs | Top-right corner; File > Initialize |
| Grid | X, Y bay spacing | Element placement | Edit Story and Grid System Data |
| Stories | Number + heights | Vertical layout | Define > Story Data |
| Code | ACI / AISC / ASCE | Design rules | Options > Preferences |

<div style="page-break-after: always;"></div>

## Chapter 35 — Defining Materials

### A. Achievement

After this section you can define all required materials (concrete, rebar, and structural steel) for an RC building in ETABS, with correct $f'_c$, $f_y$, $E$, and density values.

### B. The Situation

You start placing columns in ETABS but haven't defined materials yet. ETABS assigns a default material — but its $E_c$ may not match your specified concrete strength. The columns in the model are effectively made of a different material than what you specified on the drawings, giving wrong stiffness and wrong deflection calculations throughout the entire analysis.

### C. The Intuition

Materials are the physical properties ETABS uses to compute how stiff, how strong, and how heavy each element is. Every beam, column, and slab you draw will be assigned one of the materials you define here. Before placing any element, you tell ETABS what it is made of.


Material properties drive:
- **Stiffness** ($E$) → how much the building deflects
- **Strength** ($f'_c, f_y, F_y$) → capacity checks
- **Self-weight** (density) → gravity loads added automatically


**Formulas and Derivations**


Concrete modulus (ACI): $E_c = 4700 \sqrt{f'_c}\ \mathrm{MPa}$
For $f'_c = 30\ \mathrm{MPa}$: $E_c = 4700 \sqrt{30} = 4700 \cdot 5.477 = 25{,}742\ \mathrm{MPa}$

Steel modulus: $E_s = 200{,}000\ \mathrm{MPa}$ (constant for all structural steel).


**Full Worked Examples**


Typical properties to use in your tutorial model:

| Material | $f'_c$ or $F_y$ | $E$ | Density |
|----------|-----------------|-----|---------|
| Concrete C30/37 | $f'_c = 30$ MPa | 25,742 MPa | 25 kN/m³ |
| Rebar B500 | $f_y = 500$ MPa | 200,000 MPa | 78.5 kN/m³ |
| Steel S355 | $F_y = 355$ MPa | 200,000 MPa | 78.5 kN/m³ |


**ETABS Mini-Task**


> **Mini-Task: Define concrete and rebar.**
>
> 1. **Define > Material Properties**
> 2. Click **Add New Material** → choose region/standard (e.g., Eurocode, ACI)
> 3. **Concrete C30**: name "C30", $f'_c = 30$ MPa, weight per unit volume = 25 kN/m³, $E$ auto-computed
> 4. **Rebar B500**: name "B500", $f_y = f_u = 500$ MPa
> 5. **Steel S355** (optional): name "S355", $F_y = 355$, $F_u = 510$ MPa
> 6. OK to close

### D. Failure Case

An engineer models an RC building. All columns show $E_c = 28{,}500\ \mathrm{MPa}$ (corresponding to C25 concrete). But the design specifies C30: $E_c = 4700\sqrt{30} = 25{,}743\ \mathrm{MPa}$. The model uses a higher stiffness than the real structure, predicting smaller deflections and a shorter period. The design appears to pass the drift check, but the real building deflects more and may fail.

1. **Using "concrete" without specifying $f'_c$.** ETABS defaults may not match your design code expectations.
2. **Forgetting to set rebar.** Concrete sections need both concrete + rebar materials defined before you can design.
3. **Wrong density.** If you set 0, no self-weight; if you double it, gravity loads double.

### E. The Rule

Define materials before defining sections. Concrete needs: $f'_c$, $E_c$, density (24–25 kN/m³), Poisson's ratio (0.2). Rebar needs: $f_y$, $E_s = 200{,}000\ \mathrm{MPa}$. Always verify $E_c$ is computed from your specified $f'_c$.

### F. The Formal Shorthand

$$E_c = 4700\sqrt{f'_c}\ (\mathrm{MPa,\ ACI\ 318}) \qquad E_s = 200{,}000\ \mathrm{MPa}$$

$$\text{Self-weight load per unit volume} = \rho \cdot g \qquad (\text{set density in material, ETABS applies automatically})$$

### G. Full Worked Example

See the ETABS Mini-Task (defining C30, B500, S355) embedded in the Intuition section above.

### H. Practice Task — Material Library

> **Scenario:** Define three concrete grades (C25, C30, C40) and two steel grades (B500 rebar, S355 structural).
>
> **Worked Solution:** Repeat the Mini-Task with each. Verify by **Define > Material Properties > Show All** — should list 5 materials.

### I. What You Now Know

| Concept | Property | Engineering Use | ETABS Location |
|---------|----------|----------------|----------------|
| Concrete | $f'_c$, $E$ | Capacity, stiffness | Define > Material |
| Rebar | $f_y$ | Reinforcement strength | Define > Material |
| Steel | $F_y$, $F_u$ | Member capacity | Define > Material |

<div style="page-break-after: always;"></div>

## Chapter 36 — Defining Section Properties

### A. Achievement

After this section you can define frame sections (columns and beams) and slab sections in ETABS, link them to materials, and understand how section dimensions directly control stiffness.

### B. The Situation

Two beams carry the same load over the same span. One is 250 mm × 500 mm (B-25x50), the other is 300 mm × 600 mm (B-30x60). Their deflections differ by $(600/500)^3 \approx 1.73\times$. The difference lives entirely in the section property $I = bh^3/12$. If you assign the wrong section in ETABS, every deflection check, every period estimate, and every force distribution in the model will be wrong.

### C. The Intuition

A section property ties together a material + a geometric shape to give ETABS all the information it needs to compute stiffness. The same concrete material (C30) can make a 300×600 mm beam or a 500×500 mm column — they behave very differently because their shapes differ.


Section properties control:
- **Bending stiffness** $EI$ → deflection, period
- **Axial stiffness** $EA$ → axial deformation
- **Shear capacity** → shear design
- **Self-weight per length** = density × area


**Formulas and Derivations**


For a rectangular concrete section $b \times h$:
- Area $A = bh$
- Moment of inertia $I_x = bh^3/12$ (Chapter 20)
- Section modulus $S_x = I_x / (h/2) = bh^2/6$

For $b = 300$ mm, $h = 600$ mm:
$A = 180{,}000\ \mathrm{mm^2} = 0.18\ \mathrm{m^2}$
$I_x = 300 \cdot 600^3 / 12 = 5.4 \times 10^9\ \mathrm{mm^4}$


**Full Worked Examples**


Tutorial-building sections:

| Section name | Type | Material | Dimensions | Reinforcement |
|--------------|------|----------|------------|---------------|
| C-50x50 | Column | C30 | 500×500 mm | 8Ø20 longitudinal, Ø8/200 ties |
| B-30x60 | Beam | C30 | 300×600 mm | Auto |
| S-180 | Slab | C30 | 180 mm | Auto |
| W-250 | Wall | C30 | 250 mm | Auto |


**ETABS Mini-Task**


> **Mini-Task: Define sections.**
>
> 1. **Define > Section Properties > Frame Sections**
> 2. **Add New Property** > **Concrete Rectangular** > set name "C-50x50", depth = 0.50, width = 0.50, material = C30, rebar = B500, cover 40 mm, set 8Ø20 corner+intermediate bars
> 3. Repeat for "B-30x60" beam: 0.30 × 0.60, set as beam
> 4. **Define > Section Properties > Slab Sections** → "S-180", thickness 180 mm, type = Shell-thin (or Membrane for simple two-way slab)
> 5. **Define > Section Properties > Wall Sections** → "W-250", thickness 250 mm

### D. Failure Case

A slab section is defined as type **Membrane** instead of **Shell-thin**. Membrane elements carry only in-plane (diaphragm) forces — they have no out-of-plane (bending) stiffness. The slab appears in the model and carries gravity loads to the beams, but ETABS reports zero moment in the slab itself. No two-way flexure is captured. The slab design output shows no required reinforcement. The engineer accepts this and submits: the slab is unreinforced for flexure.

1. **Forgetting cover.** Default cover may differ from your code.
2. **Using "membrane" when you need "shell".** Membrane has no out-of-plane stiffness — wrong for slabs that bend!
3. **Wrong axis orientation.** A 300×600 column oriented wrong has weak-axis bending where you wanted strong-axis.

### E. The Rule

For slabs: use **Shell-thin** to capture both in-plane and out-of-plane behavior. For shear walls: use **Shell-thin**. Membrane-only is appropriate only for diaphragm-only modeling. Frame sections (beams/columns): define dimensions accurately — ETABS computes $A$, $I$ from them.

### F. The Formal Shorthand

$$I = \frac{bh^3}{12} \qquad A_g = bh \qquad S = \frac{I}{h/2} = \frac{bh^2}{6}$$

$$A_s^{min,col} = 0.01 A_g \quad (\text{ACI 318}) \qquad A_s^{max,col} = 0.08 A_g$$

### G. Full Worked Example

See the ETABS Mini-Task (defining C-50x50, B-30x60, S-180) and the section stiffness calculations in the Intuition section above.

### H. Practice Task — Section Catalog

> **Scenario:** For an 8-story office, define: Columns C-60x60 (ground), C-50x50 (upper); Beams B-30x60 (interior), B-25x50 (perimeter); Slab S-200; Wall W-300.
>
> **Worked Solution:** Use the Mini-Task pattern for each. Verify with **Define > Section Properties > Show All Sections**.

### I. What You Now Know

| Concept | Property | Engineering Use | ETABS Location |
|---------|----------|----------------|----------------|
| Frame section | Beam/column | Bending, axial | Define > Frame Sections |
| Slab section | Floor | Two-way / one-way | Define > Slab Sections |
| Wall section | Shear wall | Lateral resistance | Define > Wall Sections |

<div style="page-break-after: always;"></div>

## Chapter 37 — Building the Structural Model

### A. Achievement

After this section you can build a complete structural model by placing columns, beams, slabs, and walls on the grid, replicating elements across floors, and assigning support restraints at the base.

### B. The Situation

An engineer places all the beams first, then tries to connect them to columns — but forgot to draw the columns at those grid intersections. The model shows all beams floating unconnected. ETABS analysis will give every beam zero reactions at its ends, and column forces of zero everywhere: a completely meaningless result. Geometry must be connected to carry load.

### C. The Intuition

ETABS models are built from three element types: **frames** (beams, columns, braces — 1D elements placed between two joints), **area objects** (slabs, walls — 2D elements bounded by joints), and **joints** (nodes where elements meet). Drawing means placing these objects at grid intersections; connectivity is what makes loads flow from slab to beam to column to foundation.


Each element brings its physics:
- Columns: axial + bending + shear
- Beams: bending + shear + (sometimes axial)
- Slabs: out-of-plane bending + in-plane membrane (diaphragm)
- Walls: in-plane shear (primary) + out-of-plane bending

Restraints define how the building is connected to the ground — usually fixed or pinned at the base.


**Formulas and Derivations**


The model's degrees of freedom (DOFs) drive the size of $[K]$. For a 5-story 4×3-bay building:
- Joints per story: $5 \times 4 = 20$
- Stories: 6 (including ground)
- Total joints: 120
- DOFs per joint: 6 (3 trans + 3 rot)
- Total DOFs: 720 (before diaphragm reduction)


**Full Worked Examples**


**Order of operations** for the tutorial model:

1. **Draw columns** at every grid intersection on Story 1
2. **Replicate columns** vertically through all stories
3. **Draw beams** along grid lines on each floor
4. **Draw slabs** as rectangular areas filling each bay
5. **Draw walls** (if any) along selected grid lines
6. **Assign restraints** to base joints (fully fixed)
7. **Assign rigid diaphragm** to each floor


**ETABS Mini-Task**


> **Mini-Task: Build a 1-story prototype.**
>
> 1. **Plan view** of Story 1
> 2. **Draw > Draw Frames/Cables/Tendons > Quick Draw Columns** — click each grid intersection. Select section "C-50x50".
> 3. **Draw > Draw Frames/Cables/Tendons > Quick Draw Beams** — click each grid line; section "B-30x60".
> 4. **Draw > Draw Floor/Slab > Quick Draw Floors/Walls** — click each bay; section "S-180".
> 5. Switch to elevation; you should see columns and a slab at story 1.
> 6. Select all (Ctrl+A) → **Edit > Replicate > Story** → repeat for stories 2–5.
> 7. **Plan view of Base** → select all base joints → **Assign > Joint > Restraints** → choose Fixed (all 6 DOFs).
> 8. Select all slabs at each story → **Assign > Shell > Diaphragm** → New > "D1" (rigid).
> 9. **File > Save**.

### D. Failure Case

An engineer draws beams on Story 2 but positions them at one grid line to the right of the columns on Story 1 — a click error. The beam-column joint looks connected in plan view but the beam is actually 50 mm off the column centerline. ETABS creates a new joint 50 mm away and a very short stiff link. The model runs, but the column carries no moment from that beam. The drift under lateral load is 3× higher than expected because the moment frame frame is broken.

1. **Missing joints.** Beams not connected to columns (drawn slightly off the grid intersection) act as floating elements.
2. **Skipping diaphragm assignment.** Without a rigid diaphragm, later lateral-analysis results can become misleading.
3. **Forgetting base restraints.** Without supports, the model is unstable; ETABS will warn.

### E. The Rule

Every load must have an unbroken path from point of application to ground: slab → beam → column → foundation. Always draw elements snapped to grid intersections. After drawing, verify connectivity: **Display > Show Tables > Connectivity** should show every element endpoint at a shared joint.

### F. The Formal Shorthand

$$\text{Rigid diaphragm: } u_i = u_0 - y_i\theta_z,\quad v_i = v_0 + x_i\theta_z \qquad \text{(all floor joints move together)}$$

$$\text{Fixed base: } u = v = w = \theta_x = \theta_y = \theta_z = 0 \text{ at every foundation joint}$$

### G. Full Worked Example

See the ETABS Mini-Task (draw columns, replicate, beams, slabs, diaphragm) embedded in the Intuition section above.

### H. Practice Task — Build the Tutorial Building

> **Scenario:** Following the Mini-Task pattern, complete the tutorial 5-story building with all columns, beams, slabs, base fixed, and rigid diaphragms on every floor.
>
> **Worked Solution:** Save the file as `Tutorial-Building.edb`. After completion:
> - 3D view: should show a complete 5-story bare frame with floor plates
> - Use **View > Set Display Options** to toggle nodes, members, supports
> - **Display > Show Tables > Connectivity** to confirm all elements connect to the grid

### I. What You Now Know

| Concept | Action | Engineering Use | ETABS Location |
|---------|--------|----------------|----------------|
| Draw columns | Grid intersections | Vertical load path | Draw menu |
| Draw beams | Along grid lines | Horizontal members | Draw menu |
| Slabs | Floor areas | Diaphragm + gravity | Draw Floor/Slab |
| Restraints | At base joints | Connect to ground | Assign > Joint > Restraints |
| Diaphragm | Floor-level constraint | Tie joints rigidly | Assign > Shell > Diaphragm |

<div style="page-break-after: always;"></div>

## Chapter 38 — Applying Loads

### A. Achievement

After this section you can define load patterns (DL, LL, seismic), apply self-weight, surface loads on slabs, and point/line loads on beams, and set up ASCE 7-22 load combinations correctly.

### B. The Situation

A model runs with only self-weight applied. The maximum column axial force is 3{,}000 kN and the engineer accepts this for design. But the live load alone would add another 1{,}800 kN — a 60% increase. Missing load patterns give passing design checks on a structure that would fail under real occupancy. Incomplete load definition is one of the most dangerous modeling errors.

### C. The Intuition

Loads are organized in three layers: **Load patterns** (named sources of load — "DL", "LL", "EQX"), **Load cases** (how to analyze each pattern — statically, modally), and **Load combinations** (code-mandated factored sums like $1.2D + 1.6L$). Loads don't go into ETABS in one step — you build them up through all three layers.


- **Dead load**: gravity × material density × volume
- **Live load**: gravity × occupancy load (per code, e.g., 2.4 kPa for office)
- **Wind**: dynamic pressure $q = \frac{1}{2}\rho v^2$ converted to surface pressures
- **Seismic**: inertia $F = m \cdot a$ where $a$ comes from response spectrum × design factors


**Formulas and Derivations**


Code load combinations (ASCE 7):
- $1.4D$
- $1.2D + 1.6L$
- $1.2D + 1.0L + 1.0E$
- $0.9D + 1.0E$

For a column with $D = 500$ kN, $L = 200$ kN, $E = 100$ kN:
- $1.4D = 700$
- $1.2D + 1.6L = 920$
- $1.2D + 1.0L + 1.0E = 900$ (or $700$ if $E$ negative)
- $0.9D + 1.0E = 450 + 100 = 550$ (or $350$)

Design uses the worst case: 920 kN.


**Full Worked Examples**


For the tutorial building (office occupancy):

| Pattern | Type | Magnitude |
|---------|------|-----------|
| DL | Dead | Self-weight (auto) + 1.5 kPa finishes |
| LL | Live | 2.4 kPa typical floors, 1.0 kPa roof |
| EQX | Seismic X | Per response spectrum |
| EQY | Seismic Y | Per response spectrum |
| WX | Wind X | Per code wind speed |
| WY | Wind Y | Per code wind speed |


**ETABS Mini-Task**


> **Mini-Task: Define and apply loads.**
>
> 1. **Define > Load Patterns** → add: DL (Dead, self weight multiplier 1), LL (Live, 0), EQX (Seismic, auto-lateral = ASCE 7 / IBC), EQY (Seismic Y)
> 2. **Apply finishes:** select all slabs, **Assign > Shell Loads > Uniform** → DL = 1.5 kPa
> 3. **Apply live load:** select all slabs, **Assign > Shell Loads > Uniform** → LL = 2.4 kPa
> 4. **Define > Load Cases** → review auto-generated cases (DL, LL static; EQX, EQY)
> 5. **Define > Load Combinations** → **Add Default Design Combos** → choose ACI/ASCE → ETABS generates standard $1.4D$, $1.2D + 1.6L$, etc.
> 6. Save.

### D. Failure Case

A model has self-weight set as a multiplier on both the DL pattern and the LL pattern (a common accident when copying load patterns). The total gravity load on the structure is doubled. Analysis runs without errors. Column axial forces are 2× the real value, and the seismic mass is inflated. The design passes (larger demands, but larger capacity sections chosen by auto-select), but the building is seriously over-designed — and if the mass is wrong, the seismic forces are also wrong.

1. **Setting self-weight multiplier on multiple patterns.** Only ONE pattern should include self-weight (typically DL with multiplier 1). Otherwise weight is double-counted.
2. **Wrong load units.** Applying 2.4 in a model with kN-mm gives 2.4 kN/mm² instead of kN/m².
3. **Missing live load reduction.** For large tributary areas, codes allow LL reduction; not modeling it can be conservative — but applying without code basis is wrong.

### E. The Rule

Exactly one load pattern carries self-weight (multiplier = 1). All other patterns have multiplier = 0. Apply unfactored loads to patterns; let combinations apply the code factors. Define combinations using **Add Default Design Combos** to avoid manual entry errors.

### F. The Formal Shorthand

$$\text{ASCE 7-22 strength combinations (basic):}$$
$$1.4D \qquad 1.2D + 1.6L \qquad 1.2D + 1.0E + 0.5L \qquad 0.9D + 1.0E$$

$$\text{Total DL} = w_{slab} \cdot A_{floor} \cdot N_{floors} + w_{finishes} \cdot A_{floor} \cdot N_{floors} + W_{frame}$$

### G. Full Worked Example

See the ETABS Mini-Task (define DL/LL/EQX, apply 1.5 kPa, seismic parameters) embedded in the Intuition section above.

### H. Practice Task — Define Full Load Set

> **Scenario:** For the tutorial building, set up DL with 1.5 kPa finishes, LL = 2.4 kPa typical, 1.0 kPa roof, and seismic EQX/EQY using ASCE 7-22 with $S_S = 1.5g$, $S_1 = 0.6g$, Site Class D, $R = 8$ (special moment frame).
>
> **Worked Solution:** Define patterns; apply slab loads at each story; configure auto-seismic by **Define > Load Patterns > [EQX] > Modify Lateral Load** with ASCE 7 parameters. Run **Define > Load Combinations > Add Default Design Combos**.

### I. What You Now Know

| Concept | Setting | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Load pattern | DL, LL, etc. | Source of load | Define > Load Patterns |
| Slab UDL | kPa surface load | Floor finishes/live | Assign > Shell Loads > Uniform |
| Load case | Static, modal, RS | Analysis method | Define > Load Cases |
| Combinations | $1.2D + 1.6L$ etc. | Design | Define > Load Combinations |

<div style="page-break-after: always;"></div>

## Chapter 39 — Running the Analysis

### A. Achievement

After this section you can run a linear static analysis and a modal analysis in ETABS, confirm the run log shows no errors, and verify the fundamental period against the code approximation formula.

### B. The Situation

You click **Analyze > Run Analysis** and ETABS reports: "Analysis failed — model instability detected." The run log shows "Structure is unstable at joint 47." Without knowing what instability means and how to read the run log, you cannot fix it. Then, even when analysis succeeds, how do you know the $T_1 = 1.4\ \mathrm{s}$ period ETABS reports is correct and not a sign of a stiffness mistake?

### C. The Intuition

ETABS analysis solves the global stiffness equation $[K]\{d\} = \{F\}$ (Chapter 30) for every load case. For modal analysis it also solves the eigenvalue problem to find natural periods. The solver checks geometry, supports, and connectivity before it starts — that's where instability errors appear. Your job: set the mass source correctly, request enough modes, then verify that periods are physically sensible.


The matrix equation $[K]\{d\} = \{F\}$ from Chapter 30 is solved. For modal/dynamic analysis, ETABS also solves a vibration problem to find natural frequencies and mode shapes. The advanced eigenvalue math is handled by the software; your task here is to set the mass source, request enough modes, and check whether the reported periods make physical sense.


**Formulas and Derivations**


Periods. For a building of height $h_n$ (m), code estimate (ASCE 7):
- Steel moment frame: $T_a = 0.072 h_n^{0.8}$
- Concrete moment frame: $T_a = 0.047 h_n^{0.9}$

For tutorial building $h_n = 4.5 + 4 \cdot 3.5 = 18.5$ m, RC MRF:
$T_a = 0.047 \cdot 18.5^{0.9} = 0.047 \cdot 13.95 = 0.656\ \mathrm{s}$

ETABS will report a similar (slightly larger) computed period from the actual model.


**Full Worked Examples**


**Pre-run checklist:**
1. Mass source defined (typically DL + reductions per code)
2. Diaphragm assigned to every floor
3. Base restraints assigned
4. Sufficient modes requested (until cumulative mass participation > 90% per direction)
5. P-Delta enabled for buildings > 4 stories or where required by code


**ETABS Mini-Task**


> **Mini-Task: Configure and run.**
>
> 1. **Define > Mass Source** → DL + 0.25 LL (or per code)
> 2. **Define > Load Cases > Modal** → set 12 modes (good starting number)
> 3. **Analyze > Set Active Degrees of Freedom** → for typical 3D building, set XY+RZ as primary lateral DOFs
> 4. **Analyze > Run Analysis** (F5)
> 5. Watch the log for warnings/errors
> 6. After completion: **Display > Show Tables > Modal Information > Modal Periods and Frequencies**
> 7. **Display > Show Mode Shapes** to visualize modes 1, 2, 3

### D. Failure Case

An engineer runs analysis and reads $T_1 = 4.2\ \mathrm{s}$ for a 5-story building. The code approximation gives $T_a = C_t h_n^x = 0.0466 \times 18.5^{0.9} = 0.65\ \mathrm{s}$. The computed period is 6.5× the estimate. The engineer proceeds to seismic design anyway. The underlying cause: diaphragm was not assigned on Story 3, breaking the lateral load path. The seismic mass is distributed but the stiffness is not — producing an artificial soft story at Story 3 with enormous displacement. The lateral force distribution from ETABS is meaningless.

1. **Too few modes.** Stopping at 6 modes when 12 are needed → mass participation < 90%, dynamic results unreliable.
2. **Wrong mass source.** Including full LL inflates mass; excluding self-weight underestimates it.
3. **Skipping P-Delta.** For tall or slender frames, ignoring P-Delta can underpredict drift by 20%+.

### E. The Rule

After every analysis run: (1) check for errors in the run log, (2) check modal periods against $T_a = C_t h_n^x$, (3) verify mass participation > 90% in X and Y. If any check fails, do not proceed to results or design.

### F. The Formal Shorthand

$$T_a = C_t h_n^x \quad (\text{ASCE 7: RC moment frame: } C_t = 0.0466,\ x = 0.9)$$

$$\text{Mass participation} = \sum_{i=1}^{n} \Gamma_i^2 / M_{total} \ge 0.90 \quad \text{(require 90\% in X and Y)}$$

### G. Full Worked Example

See the ETABS Mini-Task (Analyze > Run, read modal period table) embedded in the Intuition section above.

### H. Practice Task — Period Check

> **Scenario:** Run modal analysis on the tutorial building. Compare ETABS-computed $T_1$ to the code estimate $T_a = 0.656\ \mathrm{s}$.
>
> **Worked Solution:** ETABS-computed period is typically 1.4× to 1.8× $T_a$ for a bare frame (since code formulas include nonstructural stiffness contributions). Expected: $T_1 \approx 1.0$–$1.3\ \mathrm{s}$. If much larger (say > 2 s), investigate — likely missing fixity, missing diaphragm, or unrealistic section.

### I. What You Now Know

| Concept | Setting | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| Run analysis | F5 | Solve full model | Analyze menu |
| Modes | 12+ for typical | Dynamic analysis | Define > Load Cases > Modal |
| Mass source | DL + 0.25 LL | Inertia | Define > Mass Source |
| P-Delta | Enable for tall | Second-order effects | Analyze > Run Analysis Options |

<div style="page-break-after: always;"></div>

## Chapter 40 — Reading and Interpreting Results

### A. Achievement

After this section you can navigate ETABS output to read beam/column forces, check deflections and story drifts, perform a global equilibrium check, and verify that key results match hand estimates.

### B. The Situation

Analysis runs successfully. The maximum beam moment shown in ETABS is $M = 240\ \mathrm{kN \cdot m}$. Is this correct? A hand check: beam span 7 m, tributary width 3 m, $w = (5+3) \times 3 = 24\ \mathrm{kN/m}$, $M = wL^2/8 = 24 \times 49/8 = 147\ \mathrm{kN \cdot m}$. The ETABS number is 63% higher — which might be explained by moment redistribution in a continuous frame, or might indicate a load error. Without this check, a modeling mistake goes directly to design.

### C. The Intuition

ETABS produces two kinds of output: **diagrams** (visual — moment diagrams, deflected shapes, stress contours) and **tables** (numerical — exportable to Excel). Every analysis session should start with the equilibrium check: do total applied loads equal total reactions? If yes, the model is in global equilibrium. If no, something is wrong.


Newton's third law: every applied load equals the sum of reactions. ETABS reports both; their match is the simplest correctness check. Drift limits (typically $\le h/200$ to $h/400$ depending on code/use) ensure occupant comfort and damage control.


**Formulas and Derivations**


For a 5-story building with story height 3.5 m, drift limit 0.020 (2%):
$\Delta_{max,allowed} = 0.020 \cdot 3500 = 70\ \mathrm{mm}$ per story

If ETABS reports max story drift = 0.015 (1.5%), that's $52.5\ \mathrm{mm}$ → OK.


**Full Worked Examples**


**Output verification workflow:**

1. **Display > Show Tables > Joint Reactions** → sum vertical reactions, compare to total weight
2. **Display > Show Tables > Story Drift** → check < limit
3. **Display > Show Forces/Stresses > Frames** → review BMD, SFD, axial diagrams
4. **Design > Concrete Frame Design > Display Design Info > Longitudinal Reinforcement** → for concrete buildings


**ETABS Mini-Task**


> **Mini-Task: Verify and interpret.**
>
> 1. **Display > Show Tables > Analysis > Joint Output > Reactions** → sum FZ for combo 1.0DL → should equal total dead weight
> 2. **Display > Show Tables > Story Output > Story Drifts** → check Max-Drift columns; flag any > h/250
> 3. **Display > Show Forces/Stresses > Frames > Moment 3-3** → for combo $1.2DL + 1.6LL$ → identify max moment column and beam
> 4. **Display > Show Deformed Shape** → for EQX → confirm building leans in X direction with no kinks

### D. Failure Case

An engineer checks the beam moment diagram under DL-only and reads $M_{max} = 65\ \mathrm{kN \cdot m}$ and decides the beam passes design. But the governing combination is $1.2DL + 1.6LL + 0.5S$. Under that combination the moment is $M_{max} = 142\ \mathrm{kN \cdot m}$ — more than double. Reading a single load case instead of the design envelope leads to a 54% under-estimate of demand.

1. **Reading raw forces, not the envelope.** Always view results under the worst combination, not just DL.
2. **Ignoring sign conventions.** Compression negative or positive depends on settings.
3. **Eyeballing displacements.** ETABS exaggerates the deformed shape by a scale factor — read tabular values, not the picture.

### E. The Rule

Always verify the global equilibrium first: $\sum R_z = \sum W_{applied}$ under the $1.0 DL$ case. Then check drift under the seismic combination. Then examine member forces under the design envelope (worst combination). In that order, not the reverse.

### F. The Formal Shorthand

$$\text{Drift ratio: } \delta_i = (\Delta_i - \Delta_{i-1})/h_{story} \le \delta_{allow} \qquad (\text{ASCE 7: }0.020\ \text{for SMF, 0.015 for OMRF})$$

$$\text{D/C ratio: } \text{D/C} = M_u/\phi M_n \le 1.0 \qquad \text{Check all: bending, shear, axial, combined}$$

### G. Full Worked Example

See the equilibrium check and drift check calculations in the Situation section and Practice Task below.

### H. Practice Task — Equilibrium Check + Drift Check

> **Scenario:** For the tutorial building, verify (a) total vertical reaction = total DL + LL, (b) max story drift under EQX < $h_{sx}/250$.
>
> **Worked Solution:**
> Total weight ≈ slabs + beams + columns + finishes + LL (per combo).
> If slab area = 24 × 15 = 360 m², 5 stories, slab DL ≈ 0.18 × 25 = 4.5 kPa, finishes 1.5 kPa → 6 kPa × 360 × 5 = 10,800 kN slabs alone.
> Sum reactions in ETABS table — should match within 1%.
> Drift under EQX: read max value; check < 3500/250 = 14 mm.

### I. What You Now Know

| Concept | What to Check | Engineering Use | ETABS Location |
|---------|--------------|----------------|----------------|
| Reactions | Sum = total weight | Equilibrium | Show Tables > Joint Reactions |
| Drift | Story drift < limit | Serviceability | Show Tables > Story Drifts |
| Member forces | Diagrams + envelopes | Design | Show Forces/Stresses |
| D/C ratio | < 1.0 | Member adequacy | Design menu |

<div style="page-break-after: always;"></div>

## Chapter 41 — Design in ETABS

### A. Achievement

After this section you can run RC and steel design checks in ETABS, read demand-to-capacity (D/C) ratios, identify which load combination and limit state control a failed member, and know what design parameter to change to resolve overstress.

### B. The Situation

ETABS design check shows a column highlighted red with $\text{C/D} = 1.15$. Demand exceeds capacity by 15%. The engineer needs to know: Is it bending, axial, or combined $P$-$M$ that controls? What is the governing load combination? Does increasing the section size help, or is the problem a lateral load issue requiring wall stiffness changes? Without reading the design detail output correctly, the engineer makes the wrong change.

### C. The Intuition

Design in ETABS checks every member for all limit states (bending, shear, axial, combined) across every load combination. It reports the **demand-to-capacity ratio** $\text{D/C} = \text{demand}/\text{capacity}$. Values above 1.0 mean the element fails. Values close to 1.0 are technically passing but leave little margin. ETABS does not fix problems — it only reports them; fixing is your job.


Capacity must exceed demand. For concrete columns, ETABS compares the analysis forces against a column capacity envelope called an interaction diagram. For steel beams, ETABS compares required bending strength to available bending strength and accounts for unbraced length where the selected code requires it.


**Formulas and Derivations**


Concrete beam, simplified:
$\phi M_n = \phi A_s f_y (d - a/2)$
$a = A_s f_y / (0.85 f'_c b)$

For $b = 300$, $d = 540$, $A_s = 1500\ \mathrm{mm^2}$ (≈ 5Ø20), $f_y = 500$, $f'_c = 30$, $\phi = 0.9$:
$a = 1500 \cdot 500 / (0.85 \cdot 30 \cdot 300) = 750{,}000 / 7650 = 98\ \mathrm{mm}$
$\phi M_n = 0.9 \cdot 1500 \cdot 500 \cdot (540 - 49) = 0.9 \cdot 1500 \cdot 500 \cdot 491$
$= 331{,}425{,}000\ \mathrm{N \cdot mm} = 331\ \mathrm{kN \cdot m}$


**Full Worked Examples**


ETABS computes $\phi M_n$ per code automatically — your job is to (a) provide correct material/section data, (b) set the right code, (c) review the output.


**ETABS Mini-Task**


> **Mini-Task: Run concrete design.**
>
> 1. **Design > Concrete Frame Design > Select Design Combo** → choose strength combos
> 2. **Design > Concrete Frame Design > Start Design / Check** of Structure
> 3. **Design > Concrete Frame Design > Display Design Info** → choose **Longitudinal Reinforcement** (for required $A_s$)
> 4. View elements color-coded by reinforcement amount
> 5. Click any beam/column to see detailed design report
> 6. For shear: re-run with **Display > Shear Reinforcement**

### D. Failure Case

An engineer runs RC design and the heaviest-loaded ground floor column shows $A_s^{req} = 1{,}200\ \mathrm{mm^2}$. The gross area is $500 \times 500 = 250{,}000\ \mathrm{mm^2}$. The reinforcement ratio is $\rho = 1{,}200/250{,}000 = 0.0048 = 0.48\%$. ACI 318 minimum is 1%. ETABS reports it as "OK" — but the engineer increased column size for seismic performance, and the capacity-based detailing minimum was silently violated because the ETABS design preference was set to "no seismic" instead of "special moment frame." The connection design and detailing are for the wrong ductility category.

1. **Designing without re-running analysis after section changes.** Stale results.
2. **Ignoring the "OS" (over-stressed) flag.** Red elements need bigger sections or more reinforcement.
3. **Trusting design output without checking detailing.** ETABS gives required $A_s$; you must still pick bar sizes that fit, satisfy spacing, and provide minimum steel per code.

### E. The Rule

After changing any section size or material, re-run analysis before reading design results — stiffness has changed, so forces have changed. Design is the last step, not an intermediate one.

### F. The Formal Shorthand

$$\phi M_n = \phi A_s f_y\left(d - \frac{a}{2}\right) \qquad a = \frac{A_s f_y}{0.85 f'_c b}$$

$$\rho_{min} = 0.01,\ \rho_{max} = 0.08 \quad \text{(ACI 318 columns)} \qquad \text{D/C} = \frac{P_u/\phi P_n + M_u/\phi M_n}{1.0} \le 1.0$$

### G. Full Worked Example

See the column design calculation and the ETABS Mini-Task embedded in the Intuition section above.

### H. Practice Task — Design the Tutorial Building

> **Scenario:** Run concrete design for all members of the tutorial building. Identify any over-stressed elements. Report the heaviest reinforcement column.
>
> **Worked Solution:** Run **Start Design/Check**. Use **Display Design Info** → flag any failing elements. Use **Display > Show Tables > Concrete Frame Design > Summary** to find the column with maximum longitudinal $A_s$.

### I. What You Now Know

| Concept | Output | Engineering Use | ETABS Location |
|---------|--------|----------------|----------------|
| Concrete frame design | $A_s$ required | Reinforcement | Design > Concrete Frame Design |
| Steel frame design | Pass/fail + section | Member sizing | Design > Steel Frame Design |
| Interaction | $P$-$M$ envelope | Column adequacy | Display Design Info |

<div style="page-break-after: always;"></div>

## Chapter 42 — Complete Worked Example: 5-Story RC Building

### A. Achievement

After this section you will have built, analyzed, and designed a complete 5-story reinforced concrete office building in ETABS from a blank screen — integrating every skill from Chapters 34–41.

### B. The Situation

You have been given a structural brief: a 5-story office building, RC frame, seismic zone, client wants analysis and RC design completed. This chapter is the full walkthrough. Every step refers back to the chapter where that skill was taught.

### C. The Intuition

A complete model ties together: grid (Ch34), materials (Ch35), sections (Ch36), geometry (Ch37), loads (Ch38), analysis (Ch39), results check (Ch40), and design (Ch41). Follow the steps in order — skipping a step or doing them out of order is the most common source of modeling errors.

**Project Specification**

- **Geometry:** 4 bays × 6 m in X (24 m), 3 bays × 5 m in Y (15 m), 5 stories: ground 4.5 m + 4 stories 3.5 m each (total height 18.5 m)
- **Material:** C30 concrete, B500 rebar
- **Sections:** Columns C-50x50, Beams B-30x60 (interior) and B-25x50 (perimeter), Slab S-180
- **Loads:** DL = self + 1.5 kPa finishes; LL = 2.4 kPa typical, 1.0 kPa roof; Seismic per ASCE 7-22, $S_S = 1.5g$, $S_1 = 0.6g$, Site Class D, $R = 8$
- **Code:** ACI 318-19 design, ASCE 7-22 loads

### E. The Rule

Build in order: grid and stories → materials → sections → geometry → loads → analysis → results check → design. Each step depends on the last. Skipping or reordering causes downstream errors that are hard to trace.

### F. The Formal Shorthand

| Step | Key Check |
|------|----------|
| Setup | Grid total = $N_{bays} \times L_{bay}$; total height = $\sum h_{story}$ |
| Materials | $E_c = 4700\sqrt{f'_c}$ (MPa); density = 25 kN/m³ (concrete) |
| Analysis | $T_1^{code} \approx 0.1N$ (RC); base shear $V_b = C_s W$ |
| Equilibrium | $\sum R_z = \sum W_{applied}$ |
| Drift | $\Delta_{story}/h_{story} \le 0.020$ (ASCE 7 RC SMF) |

### G. Full Worked Example

**Step 1 — Setup.**
- File > New Model. Units kN, m, °C. Codes: ACI 318-19, ASCE 7-22.
- Custom grid: X = 4×6 m, Y = 3×5 m. Stories: 5. Story 1 = 4.5 m, others = 3.5 m. Save as `Tutorial-5StoryRC.edb`.

**Step 2 — Materials.**
- C30: $f'_c = 30$ MPa, density 25 kN/m³.
- B500: $f_y = 500$ MPa.

**Step 3 — Sections.**
- C-50x50 (column 500×500 with 8Ø20 + Ø8/200 ties)
- B-30x60 (beam 300×600)
- B-25x50 (beam 250×500)
- S-180 (slab 180 mm shell-thin)

**Step 4 — Build geometry.**
- Plan Story 1: draw columns at all 5×4 = 20 grid intersections.
- Replicate columns to Story 5.
- Draw beams along all gridlines on each story (interior B-30x60, perimeter B-25x50).
- Draw slabs filling each bay on stories 1–5.
- Plan Base: select all base joints → Assign > Joint > Restraints > Fixed.
- Select all slabs each story → Assign > Shell > Diaphragm > New (rigid). Use D1, D2, D3, D4, D5.

**Step 5 — Loads.**
- Define patterns: DL (self-weight × 1), LL, EQX (seismic, ASCE 7), EQY (seismic Y).
- Apply slab finishes 1.5 kPa to all slabs in DL.
- Apply LL: 2.4 kPa stories 1–4, 1.0 kPa roof slab.
- Configure EQX/EQY auto-seismic: $S_S = 1.5g$, $S_1 = 0.6g$, Site D, $R = 8$, $I_e = 1.0$.
- Define Mass Source: DL + 0.25 LL.
- Define Load Combinations > Add Default Design Combos > ACI/ASCE.

**Step 6 — Analysis.**
- Define > Load Cases > Modal: 12 modes.
- Analyze > Run Analysis (F5).

**Step 7 — Results review.**
- Display > Show Tables > Modal Periods. Expected $T_1 \approx 1.0$–$1.3$ s.
- Display > Show Tables > Story Drifts. For each story, check max drift < $h_{sx}/250$ (i.e., < 14 mm at 3.5 m floors).
- Display > Show Tables > Joint Reactions. Sum FZ for 1.0 DL ≈ total dead weight (self + finishes ≈ 11{,}000–13{,}000 kN ballpark).
- Display > Show Forces/Stresses > Frames > Moment 3-3 under combo 1.2DL+1.6LL.

**Step 8 — Design.**
- Design > Concrete Frame Design > Start Design.
- Display > Design Info > Longitudinal Reinforcement.
- Identify the heaviest-reinforced column (likely a ground-floor corner or perimeter column under combined seismic + gravity).
- Identify any over-stressed members; if any, increase section size and re-run.

**Step 9 — Documentation.**
- File > Print Tables > include input + design summaries.
- Save final `.edb`.

**Expected Results (sanity ranges)**

| Quantity | Expected Range |
|----------|---------------|
| $T_1$ | 1.0–1.3 s |
| Total DL reaction | ~11,000–13,000 kN |
| Max story drift (EQX) | < 14 mm (h/250) |
| Base shear EQX | ~10–15% of total weight |
| Max column $A_s$ (ground floor) | 4000–6000 mm² |


**ETABS Connection**


This chapter *is* the ETABS connection. The point is that every menu path you've practiced in Chapters 34–41 is used end-to-end here.

### D. Failure Case

1. **Skipping diaphragms.** Lateral results become nonsense.
2. **Wrong seismic parameters.** $S_S$, $S_1$, Site Class — these are read from a code map; using defaults gives meaningless seismic forces.
3. **Failing to converge mass participation > 90%.** Re-run with more modes.

### H. Practice Task — Build It Yourself

> **Scenario:** Following Steps 1–9 above, build the entire tutorial 5-story RC building.
>
> **Deliverables:**
> 1. The `.edb` file
> 2. A one-page summary: $T_1$, base shear EQX, max story drift, total DL reaction, max column $A_s$
> 3. A screenshot of the deformed shape under EQX

### I. What You Now Know

The full step list above is the summary. Tape Step 1–9 to your monitor.

<div style="page-break-after: always;"></div>

## Chapter 43 — Common ETABS Mistakes and How to Fix Them

### A. Achievement

After this section you can diagnose and fix the ten most common ETABS modeling errors: instabilities, wrong units, missing loads, incorrect supports, mesh problems, and design misconfigurations.

### B. The Situation

Analysis runs, but all column forces are zero. Or: results look fine but deflections are 100× larger than expected. Or: design gives every member a D/C < 0.1 (suspiciously low). Each symptom has a specific cause with a specific fix. This chapter is a reference you return to every time something goes wrong.

### C. The Intuition

ETABS errors fall into four categories: **geometry problems** (disconnected elements, missing supports), **property problems** (wrong units, missing materials or sections), **load problems** (missing patterns, wrong directions, no combinations), and **analysis/design problems** (instabilities, wrong code, missing mass source). Work through the categories in order.

**Common Issues:**

**Issue 1: "Structure is unstable."**
- *Cause:* Missing supports / restraints; mechanism in geometry; release pattern that disconnects an element.
- *Fix:* In Plan view of Base, verify all base joints have restraints assigned. Check for orphan joints. Use Show Reactions colored by Restraint to spot missing supports.

**Issue 2: First mode period is enormous (e.g., > 5 s for a 5-story building).**
- *Cause:* Diaphragm not assigned; columns not connected to beams; section properties dramatically off.
- *Fix:* Verify diaphragm at each floor. **Display > Show Section Cuts > Connectivity** for stray elements. Check section dimensions.

**Issue 3: Reactions don't sum to applied load.**
- *Cause:* Self-weight multiplier set on multiple patterns; missing loads; load applied to wrong combo.
- *Fix:* Check **Define > Load Patterns** — only ONE pattern (typically DL) should have self-weight multiplier 1; others 0. Recompute by hand for one combo.

**Issue 4: Mass participation < 90%.**
- *Cause:* Too few modes requested.
- *Fix:* **Define > Load Cases > Modal** — increase modes to 24, 36, or more for tall buildings.

**Issue 5: Drift is huge under seismic.**
- *Cause:* Soft story; missing shear walls; columns under-sized; P-Delta not enabled.
- *Fix:* Add lateral system (shear walls, braced bays). Enable P-Delta. Re-size columns.

**Issue 6: Concrete design says "OS" (over-stressed) on every column.**
- *Cause:* Wrong code, wrong rebar grade, wrong $\phi$ factors, undersized sections, or auto-design combos missing.
- *Fix:* Verify Design Code in **Options > Design Preferences**. Verify section reinforcement was specified. Try larger column.

**Issue 7: Beams have huge axial force.**
- *Cause:* Beam connected to slab as part of diaphragm — axial force "stuck" in beam due to membrane locking.
- *Fix:* Use **Frame > Auto Lateral Loads > Output > Section Forces** to confirm; or set frame "Auto Hinge" to release axial; usually a model artifact, not a real concern unless very large.

**Issue 8: Modal results show modes with no movement.**
- *Cause:* Mass not properly distributed (only at certain joints).
- *Fix:* Check Mass Source, ensure DL contributes mass; verify diaphragm spans all relevant joints.

### E. The Rule

When a result looks wrong, work through the four categories in order: geometry → properties → loads → analysis/design. Fix one issue at a time, re-run, and re-check. Never try to fix multiple suspected causes simultaneously — you won't know which fix resolved the problem.

### F. The Formal Shorthand

When in doubt, do these hand checks:
- Total DL reaction ≈ slab DL × area × stories + finishes × area × stories + frame self-weight (small fraction)
- Period (RC frame): $T_1 \approx 0.1 \cdot N_{stories}$ → 5-story ≈ 0.5–0.7 s code estimate, 1.0–1.3 s computed
- Base shear seismic: $V_b \approx C_s \cdot W$ where $C_s$ ≈ 0.05–0.20 for typical zones

### G. Full Worked Example

When a model behaves oddly, before changing anything, do this:
1. Save a backup
2. Hand-compute the simplest sanity check above
3. Compare to ETABS output
4. The discrepancy tells you where to look


**ETABS Connection**


Every issue above maps to a specific menu path:
- Restraints → **Assign > Joint > Restraints**
- Mass source → **Define > Mass Source**
- Diaphragms → **Assign > Shell > Diaphragm**
- Modes → **Define > Load Cases > Modal**
- Design code → **Options > Design Preferences**

### D. Failure Case

The biggest meta-mistake: **trusting ETABS output without sanity checking**. Software will dutifully solve a wrong model. Your judgment, not ETABS, is the final filter.

### H. Practice Task — Diagnose a Broken Model

> **Scenario:** Take your completed tutorial building and intentionally break one thing at a time. Re-run after each break and observe the symptom:
> 1. Remove all restraints from one base column
> 2. Delete the diaphragm from one story
> 3. Set self-weight multiplier on both DL *and* LL
> 4. Reduce modes to 3
>
> **Worked Solution:** Document each symptom in a journal:
> - (1) "Structure is unstable" error or huge displacement at unrestrained joint
> - (2) Floor flexes weirdly; modal periods change for that floor
> - (3) Reactions ~2× expected
> - (4) Mass participation < 60%; dynamic results unreliable
>
> Then restore each correctly. This builds debugging instinct.

### I. What You Now Know

| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| "Unstable" | Missing restraints | Add base fixity |
| Huge $T_1$ | No diaphragm | Add rigid diaphragm |
| Wrong reactions | Self-weight on multiple patterns | Set multiplier = 1 only on DL |
| Low mass participation | Too few modes | Increase to 24+ |
| Huge drift | Soft story / under-sized | Add walls; re-size |
| OS on every member | Wrong code/material | Recheck preferences |

<div style="page-break-after: always;"></div>

# Closing — Where to Go Next

You have built, analyzed, and designed a real 5-story reinforced concrete building from a foundation of arithmetic and algebra. From here:

1. **Repeat the Chapter 42 example** with different geometries (taller, irregular plan, with shear walls). Each repetition deepens your intuition.
2. **Add steel structures.** Most of the workflow is the same; only material, sections, and design code differ.
3. **Add nonlinear analysis** — pushover, time history. Master linear static first; ETABS treats nonlinear as a layered extension.
4. **Read the codes** (ACI 318, AISC 360, ASCE 7) cover-to-cover. ETABS implements these — knowing them lets you verify ETABS instead of trusting blindly.
5. **Sit with experienced engineers.** Ask why they chose what they chose. Patterns that took years to build can be transferred in conversation.

Engineering is not memorization. It is the slow accumulation of judgment, built on a foundation you now possess.

Good luck. Keep your hand calculations. They will outlive any software version.

<div style="page-break-after: always;"></div>

# Appendix A — ETABS 22 Quick Menu Reference

| Task | Menu Path |
|------|-----------|
| New model | File > New Model |
| Set units | Top-right of dialog or File > Initialize |
| Define material | Define > Material Properties |
| Define section (frame) | Define > Section Properties > Frame Sections |
| Define section (slab) | Define > Section Properties > Slab Sections |
| Define section (wall) | Define > Section Properties > Wall Sections |
| Draw column | Draw > Quick Draw Columns |
| Draw beam | Draw > Quick Draw Beams |
| Draw slab | Draw > Quick Draw Floors/Walls |
| Restraints | Assign > Joint > Restraints |
| Diaphragm | Assign > Shell > Diaphragm |
| Load patterns | Define > Load Patterns |
| Slab UDL | Assign > Shell Loads > Uniform |
| Mass source | Define > Mass Source |
| Modal case | Define > Load Cases > Modal |
| Combinations | Define > Load Combinations |
| Run analysis | Analyze > Run Analysis (F5) |
| Show reactions | Display > Show Tables > Joint Reactions |
| Show drifts | Display > Show Tables > Story Drifts |
| Show forces | Display > Show Forces/Stresses > Frames |
| Concrete design | Design > Concrete Frame Design > Start Design/Check |
| Steel design | Design > Steel Frame Design > Start Design/Check |
| Show design info | Design > [Frame Design] > Display Design Info |

<div style="page-break-after: always;"></div>

# Appendix B — Useful Formulas Cheat Sheet

**Statics**
- $\Sigma F_x = 0,\ \Sigma F_y = 0,\ \Sigma M = 0$
- Simply supported UDL: $R = wL/2$, $M_{\max} = wL^2/8$, $V_{\max} = wL/2$
- Cantilever tip-load $P$: $M_{fix} = PL$, $\delta_{tip} = PL^3/(3EI)$
- Cantilever UDL: $M_{fix} = wL^2/2$, $\delta_{tip} = wL^4/(8EI)$
- Simply supported UDL deflection: $\delta_{mid} = 5wL^4/(384EI)$

**Stress / Strain**
- $\sigma = P/A$ axial
- $\sigma = My/I$ bending
- $\tau = VQ/(Ib)$ shear (or $\tau \approx 1.5 V/A$ for rectangle)
- $\varepsilon = \sigma/E$
- $\delta = PL/(AE)$ axial elongation

**Geometry**
- Rectangle: $A = bh$, $I = bh^3/12$
- Circle: $A = \pi r^2$, $I = \pi r^4/4$
- Parallel axis: $I = I_c + A d^2$

**Concrete (ACI)**
- $E_c = 4700\sqrt{f'_c}$ MPa
- Min flexural steel: $A_{s,\min} = 1.4 b d / f_y$ (or $0.25 \sqrt{f'_c}\, bd / f_y$)

**Seismic (simplified)**
- $T_a$ (RC MRF) = $0.047 h_n^{0.9}$ s
- $V_b = C_s W$
- $C_s = S_{DS}/(R/I_e)$ (capped/floored per code)

**Drift limits** (typical)
- Office: $h_{sx}/200$ to $h_{sx}/400$
- Hospital, critical: tighter

<div style="page-break-after: always;"></div>

# Appendix C — Self-Study Schedule (Suggested)

Suggested 12-week schedule (adjust to your pace; spend longer on Part 5 if needed):

| Week | Cover | Goal |
|------|-------|------|
| 1 | Front matter + Ch 1–4 | Algebra refresh |
| 2 | Ch 5–9 | Functions, quadratics |
| 3 | Ch 10–13 | Forces, equilibrium, moments, loads |
| 4 | Ch 14–17 | Supports, internal forces, stress, bending |
| 5 | Ch 18–21 | Areas, centroids, $I$, vectors |
| 6 | Ch 22–25 | Trig + coordinate geometry |
| 7 | Ch 26–29 | Polynomials, proportionality, exp, log |
| 8 | Ch 30–33 | Matrices, 3D vectors, sequences, limits |
| 9 | Ch 34–36 | ETABS interface, materials, sections |
| 10 | Ch 37–39 | Build, load, analyze |
| 11 | Ch 40–41 | Results + design |
| 12 | Ch 42–43 + review | Full worked example + troubleshooting |

After Week 12: re-do Chapter 42 with a different geometry. Then build a real project with supervision.

<div style="page-break-after: always;"></div>

# End of Book

> *"Structures stand because the math works. The math works because someone, once, derived it carefully. Your job, every day, is to be that someone — at least for the parts of every project where doubt arises."*

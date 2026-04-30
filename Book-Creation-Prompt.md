# Book Creation Prompt: From Arithmetic to Structural Engineering

Create a comprehensive self-study book titled:

**"From Arithmetic to Structural Engineering: A Complete Math and ETABS Guide"**

---

## Target Reader

Someone who knows basic arithmetic (addition, subtraction, multiplication, division, fractions, percentages) but has no algebra or engineering background.

**Goal:** Reach confident, practical understanding of precalculus AND be able to use ETABS for everyday structural engineering tasks.

---

## Book Structure

Organize into 5 Parts:

- **PART 1** — ALGEBRA FOR STRUCTURAL ENGINEERS
- **PART 2** — STATICS AND PHYSICS FOR STRUCTURAL ENGINEERS
- **PART 3** — GEOMETRY AND TRIGONOMETRY FOR STRUCTURAL ENGINEERS
- **PART 4** — PRECALCULUS FOR STRUCTURAL ENGINEERS
- **PART 5** — ETABS FROM ZERO TO PRACTICAL USE

---

## Writing Rules for Every Chapter

### KNOWLEDGE-BUILDING RULE

- Track what the reader has already had defined, explained, and practiced. A term is not considered explained merely because it appeared in a word bank or sentence.
- Do not use a concept inside a worked example until it has been explained with physical meaning and at least one worked example.
- If an early chapter needs to mention a later idea, label it as a preview and do not require the reader to calculate with it yet.
- Arithmetic and algebra chapters should use measurement, layout, cost, area, volume, and simple capacity examples before statics concepts are taught.
- Do not use forces, reactions, stress, bending moment, shear, deflection, moment of inertia, DCR, or ETABS design output as required knowledge before their teaching chapters.

For every topic, include ALL of the following sections IN ORDER:

---

### SECTION A — WORD BANK

At the very beginning of every chapter, list every new noun, math term, physics term, or technical name introduced in that chapter.

For each word provide:

1. **The word** in bold
2. **How to pronounce it** — written out phonetically in plain English syllables (no IPA symbols). Examples:
   - *Coefficient* → "co-ih-FISH-ent"
   - *Pythagorean* → "pih-THAG-oh-REE-an"
   - *Equilibrium* → "ee-kwih-LIB-ree-um"
   - *Shear* → "SHEER" (rhymes with "hear")
   - *Sigma* → "SIG-mah"
   - *Moment* → "MOH-ment"
3. **A one-sentence plain English definition** — as if explaining to a 12-year-old
4. **Where it appears** — which formula or context uses this word

Format every Word Bank as a table:

| Word | Pronunciation | Plain English Meaning | Used In |
|------|---------------|----------------------|---------|
| Coefficient | "co-ih-FISH-ent" | A number that multiplies a variable | 3x + 5 — the 3 is the coefficient |
| ... | ... | ... | ... |

---

### SECTION B — CONCEPT INTRODUCTION

- Plain English explanation, no jargon
- One real-world analogy a non-engineer would relate to
- If the concept comes from physics, explain the physics first before introducing the math

---

### SECTION C — THE PHYSICS BEHIND IT

Include this section whenever the chapter involves force, weight, pressure, motion, equilibrium, or material behavior.

- Explain what is physically happening in the real world before writing any formula
- Cover statics specifically wherever it applies:
  - **What is statics?** The study of objects that are NOT moving — where all forces balance out perfectly. Structural engineering is almost entirely statics: buildings do not move, so every force must be balanced by an equal and opposite force.
  - **Newton's First Law** — An object at rest stays at rest when forces are balanced. This is the foundation of every structural calculation.
  - **Newton's Third Law** — Every force has an equal and opposite reaction. When a beam pushes down on a column, the column pushes back up with the same force.
  - **Equilibrium** — The condition where all forces AND all moments (rotational forces) sum to zero. Written as: ΣF = 0 and ΣM = 0
  - **Free Body Diagram (FBD)** — A sketch that shows one object in isolation with all forces drawn as arrows. Every structural calculation starts here.
  - Show a fully worked statics example when relevant (e.g., finding support reactions for a simply supported beam)
- State all units: Newtons [N], kilonewtons [kN], kilopascals [kPa], megapascals [MPa]
- Relate all physics back to what a structural engineer does on a daily basis

---

### SECTION D — THE MATH

- State the formula or rule clearly in symbolic form first
- Break down every symbol: name, pronunciation, meaning, and engineering unit
- Work through a pure math example step by step — every operation on its own line
- Never skip steps. Never say "simplifying we get." Write out every intermediate line explicitly.

---

### SECTION E — STRUCTURAL ENGINEERING APPLICATION

- Show exactly where this math appears in a real structural engineering problem
- Use a real scenario: beam, column, slab, truss, connection, or footing
- Solve completely with real numbers — show every step and every unit
- Explain what the final answer MEANS physically (e.g., "This means the beam deflects 12 mm at mid-span — less than the code limit of L/300 = 20 mm, so it passes.")
- Include a simple ASCII-art diagram of the problem setup wherever possible

---

### SECTION F — ETABS CONNECTION

This section appears in EVERY chapter throughout the entire book, not only in Part 5.

- Name the specific ETABS 22 menu, dialog, or output display that corresponds to this concept
- Explain what the input field is mathematically asking for
- Describe what the ETABS output looks like and how to read it
- If ETABS automates this calculation, explain WHAT it calculates and WHERE the result appears
- Always give the exact menu path, e.g.: Define > Section Properties > Frame Sections > Add New Property

End every ETABS Connection with an **ETABS Mini-Task**:

> **Try it in ETABS 22:**
> 1. Open ETABS 22
> 2. Go to [exact menu path]
> 3. Enter the value you just calculated: [value with units]
> 4. Click [button name]
> 5. You should see [describe what appears on screen]
> 6. This result represents [connect back to the math or physics just learned]

---

### SECTION G — COMMON MISTAKES

List 2–4 typical mistakes beginners make on this specific topic:
- Describe the mistake clearly
- Show what goes wrong numerically
- Show the correct approach step by step

---

### SECTION H — CHAPTER PRACTICE TASK

At the end of every chapter, provide ONE complete practical structural engineering task requiring the reader to apply everything from that chapter.

Format:

> **Chapter Practice Task — [Descriptive Title]**
>
> **Scenario:** [Realistic structural engineering situation with context]
>
> **Given information:** [All known values listed with units]
>
> **Your tasks:**
> 1. [Calculation step using this chapter's math]
> 2. [Application to the structural scenario]
> 3. [ETABS step: enter this into ETABS and verify the result]
>
> **Full worked solution:** [Every arithmetic step shown — nothing skipped]
>
> **ETABS Verification:** [Exact step-by-step instructions to replicate and verify this in ETABS 22, with menu paths]

---

### SECTION I — CHAPTER SUMMARY TABLE

Close every chapter with a summary table:

| Concept | Formula | Engineering Use | ETABS Location |
|---------|---------|----------------|----------------|
| ... | ... | ... | ... |

---

## PART 1 — ALGEBRA FOR STRUCTURAL ENGINEERS

### Chapter 1: Variables and Expressions
- **Word Bank:** variable, expression, constant, coefficient, substitute, evaluate
- What a variable is — think of it as an unknown load not yet measured
- Substituting known values to find an answer
- Engineering use: F = m × a and σ = P / A
- Physics connection: What is a load? What is a force? Why do we represent them as letters?
- ETABS connection: Every input field in ETABS is asking you to replace a variable with a real number

### Chapter 2: Linear Equations (One Variable)
- **Word Bank:** equation, linear, solve, isolate, balance, inverse operation
- Solving for an unknown using the balance principle: what you do to one side, do to the other
- Engineering use: Given σ = 5 MPa and A = 200 mm², find the force P
- Physics: This is how we find any single unknown force in a structure
- ETABS connection: ETABS solves millions of these simultaneously; understanding one helps you read results

### Chapter 3: Rearranging Formulas
- **Word Bank:** rearrange, isolate, transpose, subject of the formula
- Pronunciation: transpose = "tranz-POZE"
- Moving any term to find any unknown in any formula
- Engineering use: σ = P/A rearranged to P = σ × A, then to A = P / σ
- **This is the single most-used algebra skill in daily structural engineering work**
- ETABS connection: When ETABS reports stress, you rearrange to back-calculate the force — this skill is used constantly

### Chapter 4: Units and Dimensional Analysis
- **Word Bank:** unit, dimension, conversion factor, kilonewton, megapascal, Pascal, Newton, meter, millimeter
- Pronunciation emphasis: kilo = "KIL-oh", Pascal = "PASS-kal", Newton = "NOO-ton", mega = "MEG-ah", kilo = "KIL-oh"
- How units multiply and cancel exactly like variables
- Essential conversions: kN → N (×1000), m → mm (×1000), kPa → MPa (÷1000), kN/m² = kPa
- Engineering use: Load = 5 [kPa] × 20 [m²] = 100 [kN] — show every unit cancellation step
- ETABS connection: Edit > Preferences > Units — always set units BEFORE starting any model; wrong units are the most dangerous ETABS mistake

### Chapter 5: Systems of Equations
- **Word Bank:** simultaneous, system, eliminate, substitute, unknown, equilibrium equations
- Pronunciation: simultaneous = "sy-mul-TAY-nee-us"
- Two equations, two unknowns — substitution and elimination methods fully worked
- Physics: Static equilibrium produces exactly these equations: ΣFx = 0 and ΣFy = 0
- Engineering use: Use algebra on layout, spacing, and other already-explained quantities; support reactions wait until statics
- ETABS connection: ETABS later solves many simultaneous equations internally, but this chapter should not require reaction knowledge

### Chapter 6: Quadratic Equations
- **Word Bank:** quadratic, parabola, coefficient, discriminant, roots, vertex
- Pronunciation: quadratic = "kwod-RAT-ik", discriminant = "dis-KRIM-ih-nant", parabola = "pah-RAB-oh-lah"
- Factoring, completing the square, quadratic formula — all three methods
- Engineering use: Use parabolas for already-explained geometry such as arch/camber height; bending moment equations wait until statics and precalculus
- ETABS connection: Later, ETABS diagrams use these same polynomial shapes

### Chapter 7: Inequalities
- **Word Bank:** inequality, demand, capacity, demand-capacity ratio, threshold, limit state, compliance
- Pronunciation: inequality = "in-ee-KWOL-ih-tee"
- Solving and graphing inequalities — what ≤ and ≥ mean mathematically
- Engineering use: Every structural check is an inequality — Applied ≤ Allowable
- Demand/capacity ratio: ratio = demand / capacity — must be ≤ 1.0
- ETABS connection: ETABS design results later display similar ratios; this chapter should use generic limits first

### Chapter 8: Exponents and Powers
- **Word Bank:** exponent, power, base, squared, cubed, root, square root
- Pronunciation: exponent = "EX-poh-nent"
- Rules: multiply powers (add exponents), divide (subtract), power of a power (multiply)
- Engineering use: Column area = side² for square sections; volume uses cubed units
- ETABS connection: Later, moment of inertia also uses powers, but do not require it before Chapter 20

### Chapter 9: Introduction to Functions
- **Word Bank:** function, input, output, domain, range, graph, dependent variable, independent variable
- A function is a rule: one input in, one output out — every time, no exceptions
- Engineering use: δ(P) = deflection as a function of applied load P; σ(y) = stress as a function of depth y
- ETABS connection: Every diagram ETABS draws — moment, shear, deflection — is a function plotted visually; the x-axis is position along the member, the y-axis is the function value

---

## PART 2 — STATICS AND PHYSICS FOR STRUCTURAL ENGINEERS

This part is dedicated entirely to the physics that underlies all structural engineering. It must be thorough, patient, and deeply connected to both hand calculations and ETABS.

### Chapter 10: What Is a Force?
- **Word Bank:** force, magnitude, direction, line of action, point of application, Newton, kilonewton, gravity, weight, mass, vector arrow
- Pronunciation: magnitude = "MAG-nih-tood", Newton = "NOO-ton"
- Force is a push or a pull. It has a size (magnitude) and a direction. Without both, it is not a force.
- Weight vs. mass: mass is measured in kg; weight is a force = mass × 9.81 m/s² measured in Newtons or kN
- Example: A person with mass 80 kg exerts a weight force of 80 × 9.81 = 784.8 N ≈ 0.785 kN on the floor
- Types of forces in structures:
  - Point load: a single concentrated force at one location [kN]
  - Distributed load: force spread over a length [kN/m] or over an area [kPa]
  - Self-weight: the structure's own weight pulling downward
  - Reaction: a force from a support pushing back against the structure
- How to draw a force: an arrow showing direction; its length represents magnitude
- Free Body Diagram (FBD): isolate the object; draw every force acting ON it as an arrow with a label
- ETABS connection: Define > Load Patterns — every load type in ETABS is one of the force categories above; Assign > Frame Loads > Distributed or Point for applying them

### Chapter 11: Equilibrium and the Sum of Forces
- **Word Bank:** equilibrium, resultant, net force, static equilibrium, sigma (Σ), reaction, balance
- Pronunciation: equilibrium = "ee-kwih-LIB-ree-um", sigma = "SIG-mah", resultant = "rih-ZUL-tant"
- Static equilibrium: the structure is not moving, so all forces must cancel out perfectly
- ΣFx = 0: the sum of all horizontal forces equals zero
- ΣFy = 0: the sum of all vertical forces equals zero
- Newton's First Law: an object at rest stays at rest when forces are balanced — this law justifies every structural calculation
- Newton's Third Law: every force has an equal and opposite reaction — this is why supports push back upward when loads push down
- Step-by-step worked example: find both support reactions for a 6 m simply supported beam carrying a 30 kN point load at 2 m from the left support
  - Draw FBD with reactions RA (left) and RB (right)
  - Apply ΣFy = 0: RA + RB = 30 kN
  - Apply ΣM about left support = 0: RB × 6 = 30 × 2 → RB = 10 kN
  - Substitute back: RA = 30 − 10 = 20 kN
  - Check: RA + RB = 20 + 10 = 30 kN ✓
- ETABS connection: Analyze > Display > Show Support/Joint Reactions — ETABS solves these same equilibrium equations automatically; you can verify any reaction by checking it equals what your hand calculation gives

### Chapter 12: Moments (Rotational Forces)
- **Word Bank:** moment, torque, lever arm, clockwise, counterclockwise, bending moment, couple, pivot
- Pronunciation: moment = "MOH-ment", torque = "TORK", lever = "LEH-ver", counterclockwise = "KOWN-ter-KLOK-wize"
- A moment is a force that causes rotation around a point. It is not a spinning force — it is the tendency to rotate.
- Formula: M = F × d
  - M = moment [kN·m or N·mm]
  - F = force [kN or N]
  - d = perpendicular distance from the line of action of the force to the pivot point [m or mm]
- Real-world analogy: a door handle is placed far from the hinge because the greater the distance d, the less force F is needed to achieve the same moment M
- Sign convention: define counterclockwise (CCW) as positive, clockwise (CW) as negative — and state this at the start of every problem
- ΣM = 0: for rotational equilibrium, moments must also balance — a structure that rotates is not in equilibrium
- Step-by-step: find reactions for a 10 m beam with a 50 kN/m uniform distributed load using ΣM = 0
- ETABS connection: The bending moment diagram in ETABS (Display > Show Frame Forces > Moment) shows the value of M at every cross-section along a member; these are all M = F × d results

### Chapter 13: Types of Loads in Structural Engineering
- **Word Bank:** dead load, live load, wind load, seismic load, point load, distributed load, line load, area load, tributary area, load path, superimposed dead load
- Pronunciation: tributary = "TRIB-yoo-teh-ree", seismic = "SICE-mik", superimposed = "soo-per-im-POZED"
- Dead load (DL): permanent weight — self-weight of the structure, floor finishes, raised floors, partition walls, permanent equipment
- Live load (LL): variable, occupancy-based — people, furniture, movable equipment; value set by building code based on occupancy type
- Wind load (WL): lateral pressure from wind acting on the building faces and roof
- Seismic load (EQ): inertial force caused by earthquake ground movement — acts horizontally
- Load path: the route loads travel from where they are applied down to the ground:
  - Slab → Secondary beams → Primary beams → Columns → Foundations → Soil
- Tributary area: the floor area whose load flows to a single structural member
  - Example: a 5 m × 5 m column grid → each interior column has a tributary area of 5 × 5 = 25 m²
- Math: Beam line load w [kN/m] = Area load q [kPa] × Tributary width [m]
- ETABS connection: Define > Load Patterns — add DL, LL, WL, EQ; Assign > Frame Loads > Distributed for beam loads; Assign > Area Loads > Uniform for slab loads

### Chapter 14: Support Conditions
- **Word Bank:** pin support, roller support, fixed support, reaction, degree of freedom, restraint, hinge, cantilever, simply supported, propped
- Pronunciation: cantilever = "KAN-tih-lee-ver", hinge = "HINJ", restraint = "rih-STRAYNT"
- Pin support: resists horizontal and vertical forces; allows rotation freely → provides 2 reactions (Rx, Ry)
- Roller support: resists only vertical force; allows horizontal movement and rotation → provides 1 reaction (Ry only)
- Fixed support: resists horizontal force, vertical force, AND moment; allows no movement and no rotation → provides 3 reactions (Rx, Ry, M)
- Free end: no resistance to anything → 0 reactions (but the member can deflect and rotate here)
- How to identify each type from a drawing: pin = triangle point down on a circle; roller = triangle on wheels; fixed = embedded into a wall
- Step-by-step FBDs for: simply supported beam (pin + roller), cantilever (fixed + free), propped cantilever (fixed + roller)
- ETABS connection: Assign > Joint > Restraints — each checkbox (U1, U2, U3, R1, R2, R3) corresponds to one degree of freedom; fixing U3 (vertical) is a roller; fixing U2+U3 is a pin; fixing all six is a fixed support

### Chapter 15: Internal Forces — Axial, Shear, and Bending Moment
- **Word Bank:** axial force, shear force, bending moment, tension, compression, internal force, section cut, normal force
- Pronunciation: axial = "AK-see-ul", shear = "SHEER", tension = "TEN-shun", compression = "kom-PRESH-un"
- Internal forces are what happen INSIDE a structural member as a result of the loads applied to it
- Axial force (N or P): acts along the length of the member — compression (pushes in) or tension (pulls out)
  - Columns mostly carry compression. Cables and ties carry tension.
- Shear force (V): acts perpendicular to the member axis — like scissors trying to slide one part past another
- Bending moment (M): tries to curve the member; causes tension on one face and compression on the other
- The section cut method: to find internal forces at any point, cut the member at that point, isolate one side, and apply equilibrium
- Step-by-step: draw the Shear Force Diagram (SFD) and Bending Moment Diagram (BMD) for a 6 m simply supported beam with uniform load w = 10 kN/m
  - RA = RB = wL/2 = 10 × 6 / 2 = 30 kN
  - V(x) = 30 − 10x [kN] — linear, zero at x = 3 m
  - M(x) = 30x − 10x²/2 [kN·m] — parabolic, maximum at x = 3 m: M = 30×3 − 10×9/2 = 90 − 45 = 45 kN·m
- ETABS connection: Display > Show Frame Forces — select Axial, Shear 2-2, or Moment 3-3 to see these diagrams; the numbers displayed at any point are the N, V, or M values at that section

### Chapter 16: Stress and Strain
- **Word Bank:** stress, strain, normal stress, shear stress, elastic modulus, Young's modulus, deformation, yield stress, ultimate stress, Hooke's Law
- Pronunciation: modulus = "MOD-yoo-lus", elastic = "ee-LAS-tik", yield = "YEELD", Hooke = "HOOK"
- Stress: how concentrated a force is across an area. σ = P / A
  - Units: N/mm² = MPa (megapascals) — this is the standard unit of stress in structural engineering
  - Example: P = 500 kN on a 200 mm × 200 mm column → A = 200 × 200 = 40,000 mm² → σ = 500,000 N / 40,000 mm² = 12.5 MPa
- Strain: how much a material deforms compared to its original length. ε = ΔL / L (dimensionless — no units)
- Elastic modulus (E): material stiffness — how much stress is needed to cause a given strain. E = σ / ε
  - Structural steel: E = 200,000 MPa (very stiff)
  - Normal concrete: E ≈ 30,000 MPa (less stiff than steel)
- Hooke's Law: σ = E × ε — stress and strain are proportional within the elastic range (before yielding)
- Yield stress (Fy): the stress at which steel permanently deforms — typically 250, 350, or 500 MPa
- ETABS connection: Define > Materials > Add New Material — every value entered here (E, Fy, f'c) is a material law constant used in ETABS's internal stress calculations

### Chapter 17: Bending Stress in Beams
- **Word Bank:** bending stress, flexural stress, neutral axis, moment of inertia, section modulus, fiber, curvature, sagging, hogging
- Pronunciation: flexural = "FLEX-yoo-rul", inertia = "in-ER-shuh", sagging = "SAG-ing", hogging = "HOG-ing"
- Bending stress formula: σ = M × c / I
  - M = bending moment at the cross-section [N·mm or kN·m — must convert to consistent units]
  - c = distance from the neutral axis to the outermost fiber [mm]
  - I = moment of inertia of the cross-section [mm⁴]
- Neutral axis: the horizontal line through the centroid where bending stress = zero; tension below, compression above (sagging beam)
- Why deeper beams are more efficient: I grows with h³, so doubling depth multiplies I by 8 — and halves the stress for the same moment
- Section modulus: S = I / c — combines I and c into one section property for direct stress calculation: σ = M / S
- Step-by-step: a 200 mm wide × 400 mm deep rectangular concrete beam carries M = 60 kN·m
  - I = bh³/12 = 200 × 400³ / 12 = 1,066,666,667 mm⁴ ≈ 1.067 × 10⁹ mm⁴
  - c = h/2 = 400/2 = 200 mm
  - M = 60 kN·m = 60 × 10⁶ N·mm
  - σ = M × c / I = (60 × 10⁶ × 200) / (1.067 × 10⁹) = 11.24 MPa
- ETABS connection: Design > Concrete Frame Design — ETABS uses this bending stress calculation to determine how much steel reinforcement is required; the moment M it uses is taken directly from the bending moment diagram

---

## PART 3 — GEOMETRY AND TRIGONOMETRY FOR STRUCTURAL ENGINEERS

### Chapter 18: Areas and Perimeters
- **Word Bank:** area, perimeter, rectangle, circle, trapezoid, composite section, I-section, flange, web, cross-section
- Pronunciation: trapezoid = "TRAP-eh-zoyd", composite = "kom-POZ-it", flange = "FLANJ", perimeter = "peh-RIM-ih-ter"
- Areas of: rectangle (b × h), triangle (½ × b × h), circle (π × r²), trapezoid (½ × (a+b) × h)
- Composite area: split into simple shapes, calculate each area, add them; or subtract a shape from a larger one (hollow sections)
- Engineering use: cross-section area A is the denominator in the stress formula σ = P/A — bigger area = lower stress
- ETABS connection: Define > Section Properties > Frame Sections — the b and h you enter ARE the rectangle dimensions; ETABS automatically calculates A and I from them (verify by clicking Section Properties button)

### Chapter 19: Centroids
- **Word Bank:** centroid, neutral axis, composite centroid, weighted average, symmetry, first moment of area
- Pronunciation: centroid = "SEN-troyd"
- Centroid: the geometric center of a shape — where it would balance perfectly on a pin
- For symmetric shapes (rectangle, circle): centroid is at the geometric midpoint
- Composite centroid formula: ȳ = Σ(Aᵢ × yᵢ) / ΣAᵢ — a weighted average of each sub-area's centroid
- Engineering use: the centroid of a beam cross-section is where the neutral axis sits — the line of zero bending stress
- Step-by-step: find the centroid of a T-shaped beam (flange + web)
- ETABS connection: Section Designer (Define > Section Properties > Frame Sections > Section Designer) — after drawing a cross-section, click "Calculate" and ETABS reports the centroid coordinates (ȳ, z̄)

### Chapter 20: Moment of Inertia (Second Moment of Area)
- **Word Bank:** moment of inertia, second moment of area, parallel axis theorem, strong axis, weak axis, radius of gyration
- Pronunciation: inertia = "in-ER-shuh", gyration = "jy-RAY-shun"
- I = bh³/12 for a rectangle about its own centroidal axis (horizontal bending)
- Parallel axis theorem: I_total = I_centroid + A × d²
  - d = distance from the sub-area's own centroid to the overall centroid
  - Use this whenever a sub-shape is NOT centered on the overall neutral axis
- Step-by-step: calculate I for a T-section (flange 400 mm × 100 mm, web 150 mm × 300 mm)
  - Find centroid first (Chapter 19)
  - Apply parallel axis theorem to each part
  - Sum the results
- Engineering use: I controls bending stiffness and completes the quantitative bending-stress check deferred from Chapter 17
- ETABS connection: Frame Section properties dialog shows I33 (bending about major/strong axis) and I22 (minor/weak axis) — these ARE the I values you calculated; verify your hand calculation against ETABS output

### Chapter 21: Vectors
- **Word Bank:** vector, scalar, magnitude, direction, component, resultant, unit vector, horizontal component, vertical component
- Pronunciation: scalar = "SKAY-ler", resultant = "rih-ZUL-tant", component = "kom-POH-nent"
- Scalar: a number with magnitude only (temperature 25°C, mass 80 kg)
- Vector: a number with magnitude AND direction
- Adding vectors by already-given components first: Rx = Fx1 + Fx2, Ry = Fy1 + Fy2; angle-to-component trig waits until Chapter 22
- Resultant magnitude: R = √(Rx² + Ry²)
- Engineering use: resolve a 10 kN load applied at 45° into horizontal (Fx) and vertical (Fy) components
- ETABS connection: Local axes (1, 2, 3) vs global axes (X, Y, Z) — every load entered in ETABS is a vector with a direction; when you assign a load in the "Z" direction, you are specifying the vertical component of a force vector

### Chapter 22: Right Triangle Trigonometry
- **Word Bank:** sine, cosine, tangent, hypotenuse, opposite side, adjacent side, angle, SOH-CAH-TOA, inverse sine, degrees, radians
- Pronunciation: sine = "SINE", cosine = "KOH-sine", tangent = "TAN-jent", hypotenuse = "hy-POT-en-yoos", trigonometry = "trig-oh-NOM-ih-tree"
- SOH: sin(θ) = Opposite / Hypotenuse
- CAH: cos(θ) = Adjacent / Hypotenuse
- TOA: tan(θ) = Opposite / Adjacent
- Common angle values to memorize (as a table: 0°, 30°, 45°, 60°, 90°)
- Engineering use: a 15 kN inclined force at 30° above horizontal
  - Fx = 15 × cos(30°) = 15 × 0.866 = 12.99 kN (horizontal)
  - Fy = 15 × sin(30°) = 15 × 0.500 = 7.50 kN (vertical)
- ETABS connection: Assign > Frame Loads — ETABS expects load components in the global X, Y, Z directions; you must resolve inclined loads using trig BEFORE entering them; ETABS does not resolve angles for you

### Chapter 23: The Pythagorean Theorem
- **Word Bank:** Pythagorean theorem, hypotenuse, right angle, legs of a triangle
- Pronunciation: Pythagorean = "pih-THAG-oh-REE-an", theorem = "THEE-oh-rem"
- a² + b² = c² where c is always the hypotenuse (side opposite the right angle)
- Engineering use: length of a diagonal brace in a rectangular frame with known height H and width W: L = √(H² + W²)
- Engineering use: resultant of a horizontal and vertical force: R = √(Fx² + Fy²)
- ETABS connection: ETABS reports member lengths automatically in the frame properties — verify a diagonal member's length using this theorem from its start and end node coordinates

### Chapter 24: Trigonometry for Non-Right Triangles
- **Word Bank:** sine rule, cosine rule, oblique triangle, included angle
- Pronunciation: oblique = "oh-BLEEK"
- Sine rule: a/sin(A) = b/sin(B) = c/sin(C) — use when you know one side and all angles, or two sides and one non-included angle
- Cosine rule: c² = a² + b² − 2ab·cos(C) — use when you know two sides and the included angle, or all three sides
- Engineering use: finding unknown member lengths and angles in a truss where the triangles are not right-angled
- ETABS connection: Truss geometry setup — node coordinates in ETABS define these triangles; verifying member lengths and angles by hand using these rules before modeling confirms the geometry is correct

### Chapter 25: Coordinate Geometry
- **Word Bank:** coordinate, x-axis, y-axis, z-axis, origin, Cartesian, distance formula, midpoint, slope, grid intersection
- Pronunciation: Cartesian = "kar-TEE-zhun", coordinate = "koh-OR-dih-nut"
- Plotting points in 2D (x, y) and 3D (x, y, z)
- Distance between two points: d = √((x₂−x₁)² + (y₂−y₁)²)
- Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2)
- Slope of a line: m = (y₂−y₁)/(x₂−x₁)
- Engineering use: every node in a structural model has (x, y, z) coordinates; column grid intersections are coordinate pairs; member length uses the distance formula
- ETABS connection: Edit > Grid Data — setting up column grids IS coordinate geometry; every joint ETABS creates has coordinates you can inspect via Edit > Interactive Database Editing > Joints

---

## PART 4 — PRECALCULUS FOR STRUCTURAL ENGINEERS

### Chapter 26: Polynomials and the Bending Moment Equation
- **Word Bank:** polynomial, term, degree, leading coefficient, parabola, roots of a polynomial, factor
- Pronunciation: polynomial = "pol-ee-NOH-mee-ul"
- A polynomial is an expression with one variable raised to whole-number powers: ax² + bx + c
- Adding, multiplying, and factoring polynomials
- Engineering use: the bending moment equation along a uniformly loaded beam is a polynomial:
  M(x) = (wL/2)·x − (w/2)·x² — second degree (quadratic)
  - At x = 0: M = 0 (left support, no moment)
  - At x = L/2: M = wL²/8 (maximum, at mid-span)
  - At x = L: M = 0 (right support)
- ETABS connection: the parabolic bending moment diagram ETABS draws IS this polynomial plotted; knowing the shape lets you spot errors — a straight-line diagram where a curve is expected signals a missing load

### Chapter 27: Rational Functions and Proportionality
- **Word Bank:** proportion, directly proportional, inversely proportional, ratio, varies as, power law
- Direct proportion: if load doubles, stress doubles (σ ∝ P, because σ = P/A with A constant)
- Inverse proportion: if area doubles, stress halves (σ ∝ 1/A)
- Key structural proportionality relationships:
  - Deflection δ ∝ L³ — doubling span multiplies deflection by 8×
  - Deflection δ ∝ 1/I — doubling I halves deflection
  - Deflection δ ∝ 1/E — stiffer material = less deflection
- ETABS use: understanding why increasing beam depth (and thus I) has a dramatic effect; proportionality lets you estimate results before running ETABS and sanity-check after

### Chapter 28: Exponential Functions
- **Word Bank:** exponential, base, exponent, growth factor, decay factor, asymptote, e (Euler's number)
- Pronunciation: exponential = "ex-poh-NEN-shul", asymptote = "AS-im-tote", Euler = "OY-ler"
- y = a × bˣ where b > 1 is growth and 0 < b < 1 is decay
- Engineering use: concrete compressive strength gain over time; creep deformation under sustained load; fatigue life under cyclic loading (each cycle of stress reduces remaining life exponentially)
- ETABS connection: time-dependent material properties for concrete (creep and shrinkage coefficients) are defined using exponential relationships

### Chapter 29: Logarithms
- **Word Bank:** logarithm, log, natural logarithm, ln, base-10 logarithm, inverse function, order of magnitude
- Pronunciation: logarithm = "LOG-ah-rith-um", natural = "NACH-uh-rul"
- Logarithm is the inverse of an exponent: if 10² = 100 then log₁₀(100) = 2
- Log rules: log(a × b) = log(a) + log(b); log(aⁿ) = n·log(a); log(a/b) = log(a) − log(b)
- Natural log (ln): base is e ≈ 2.718; used in advanced structural equations
- Engineering use: seismic hazard curves plotted on log-log axes; soil consolidation equations; log-log design charts in structural codes; sound transmission loss in dB
- ETABS connection: response spectrum functions for seismic analysis are defined on period-acceleration axes which are often displayed on log-log scales

### Chapter 30: Matrices (Basic)
- **Word Bank:** matrix, matrices, row, column, element, square matrix, identity matrix, stiffness matrix, displacement vector, force vector
- Pronunciation: matrix = "MAY-triks", matrices = "MAY-trih-seez"
- What a matrix is: a rectangular grid of numbers organized in rows and columns
- Matrix addition: add corresponding elements (same dimensions required)
- Matrix multiplication: 2×2 example worked fully step by step — row times column, then sum
- The stiffness equation: [K]{d} = {F}
  - [K] = stiffness matrix — represents how stiff each connection in the structure is
  - {d} = displacement vector — how much each joint moves (what we want to find)
  - {F} = force vector — the applied loads (what we know)
  - Solving for {d}: {d} = [K]⁻¹{F}
- This equation is what ETABS solves every single time you click "Run Analysis" — with potentially hundreds of thousands of simultaneous equations
- ETABS connection: Analyze > Run Analysis — the solver log that appears shows ETABS factoring [K] and solving for {d}; understanding this makes every ETABS result comprehensible rather than mysterious

### Chapter 31: Introduction to Vectors in 3D
- **Word Bank:** three-dimensional, z-axis, dot product, cross product, local axis, global axis, right-hand rule
- Pronunciation: perpendicular = "per-pen-DIK-yoo-ler"
- Extending 2D (x, y) vectors to 3D (x, y, z)
- Dot product: A·B = AxBx + AyBy + AzBz — gives a scalar; used to find the angle between two directions
- Cross product: A×B — gives a vector perpendicular to both A and B; used to compute moment vectors in 3D
- Engineering use: 3D moment vectors in space frames; finding the angle between two inclined members
- ETABS connection: global axes (X, Y, Z) are fixed to the building; local axes (1, 2, 3) rotate with each member; a column's local axis 1 is along its length, 2 and 3 are its two bending axes; rotate a column assignment and watch local axis 2 and 3 swap in the section assignment dialog

### Chapter 32: Sequences and Series
- **Word Bank:** sequence, series, term, arithmetic sequence, common difference, geometric sequence, common ratio, cumulative sum
- Pronunciation: arithmetic (noun/adjective for sequences) = "ar-ith-MET-ik", geometric = "jee-oh-MET-rik"
- Arithmetic sequence: each term increases by a constant amount (common difference d)
  - nth term: aₙ = a₁ + (n−1)d
- Geometric sequence: each term multiplies by a constant ratio (common ratio r)
  - nth term: aₙ = a₁ × rⁿ⁻¹
- Engineering use: cumulative axial load in a column building upward from the roof
  - Roof column: carries 1 floor × load per floor
  - Level below: carries 2 floors × load per floor
  - Ground floor column: carries n floors × load per floor
  - This is an arithmetic series — column size increases with each floor going down
- ETABS connection: Display > Show Frame Forces > Axial — select different floors and read the axial force in a column; confirm it increases linearly downward as predicted by the arithmetic series

### Chapter 33: Limits — Conceptual Introduction
- **Word Bank:** limit, approach, converge, diverge, infinity, finite element, numerical method, mesh, discretization
- Pronunciation: converge = "kon-VERJ", diverge = "dy-VERJ", discretization = "dis-kree-tih-ZAY-shun"
- A limit is the value a function approaches as its input gets closer and closer to some number
- Intuitive example: as the mesh of a finite element model gets finer and finer, the answer gets closer and closer to the exact mathematical solution — but never requires infinite elements
- Why this matters to engineers: calculus (derivatives and integrals) is built on limits; ETABS uses numerical methods that are the practical implementation of limits
- Finite element method (FEM): the theoretical basis of ETABS — the structure is divided into small elements; the behavior of each is approximated; the solution converges toward the true answer as elements get smaller
- ETABS connection: Analyze > Set Analysis Options > Auto-Mesh — ETABS automatically divides area objects (slabs) into mesh elements; refining this mesh is the practical act of taking a limit to get a more accurate answer

---

## PART 5 — ETABS PRACTICAL GUIDE (ETABS Version 22)

For every step:
- Provide the exact menu path
- Explain what each input field means mathematically (with reference to the relevant Part 1–4 chapter)
- Describe what to expect as output and how to interpret it

### Chapter 34: ETABS Interface and Setup
- Main window panels: 3D view, plan view, elevation view, model explorer, status bar
- Global coordinate system: X = East (right), Y = North (up-on-plan), Z = Vertical (up)
- Units setup: Edit > Preferences > Units — set BEFORE anything else (recommended: kN, m for most buildings)
- Grid setup: Define > Grid System — entering grid line spacings is coordinate geometry from Chapter 25
- Story data: Define > Story Data — entering floor heights

### Chapter 35: Defining Materials
- Concrete: f'c [MPa], Ec [MPa], unit weight [kN/m³], Poisson's ratio
- Steel: Fy [MPa], Fu [MPa], E = 200,000 MPa, unit weight
- Menu: Define > Materials > Add New Material
- Math connection: E is from Hooke's Law (Chapter 16); Fy is the yield threshold (Chapter 7 — an inequality: σ ≤ Fy)
- After adding a material, click "Modify/Show Material" and verify the values against your reference code

### Chapter 36: Defining Section Properties
- Concrete rectangular beam: enter b (width) [mm] and h (depth) [mm] → ETABS computes A, I33, I22 using Chapter 18–20 formulas
- Concrete column: rectangular or circular
- Steel frame: select from built-in section database (W-shapes, HSS, angles, channels)
- Custom shape: Section Designer → draw the cross-section manually → click Calculate to get A, centroid, I
- Menu: Define > Section Properties > Frame Sections > Add New Property
- Verify by hand: compare ETABS I33 to your Chapter 20 calculation — they must agree

### Chapter 37: Building the Structural Model
- Draw columns: Draw > Draw Column Objects — click each grid intersection
- Draw beams: Draw > Draw Beam Objects — click start node then end node on each grid line
- Draw slabs: Draw > Draw Floor Objects — click around the perimeter of each floor bay
- Story replication: Edit > Replicate — copy a complete floor to all stories at once
- Check connectivity: Edit > Check Model — ETABS identifies floating nodes, duplicate elements, and missing connections; fix all warnings before running analysis

### Chapter 38: Applying Loads
- Dead load pattern: Define > Load Patterns > add "DL" (type = Dead, Self Weight Multiplier = 1.0)
  - The Self Weight Multiplier = 1.0 tells ETABS to automatically calculate and apply the weight of every element using its material unit weight and section area — no manual input needed
- Live load pattern: Define > Load Patterns > add "LL" (type = Live, Self Weight Multiplier = 0)
- Apply beam loads: Assign > Frame Loads > Distributed — enter w [kN/m] (this is the tributary load from Chapter 13)
- Apply slab loads: Assign > Area Loads > Uniform — enter q [kPa]
- Wind and seismic: Define > Load Cases — select Wind or Response Spectrum and enter code parameters
- Load combinations: Define > Load Combinations — enter factored combinations, e.g., 1.2DL + 1.6LL (linear algebra, Chapter 5)

### Chapter 39: Running the Analysis
- Check model first: Analyze > Check Model — resolve all errors
- Set options: Analyze > Set Analysis Options — typically use default settings for linear static analysis
- Run: Analyze > Run Analysis (keyboard shortcut F5)
- The solver log shows ETABS forming and factoring [K] (Chapter 30); a successful run ends with "Analysis complete — no errors"
- Any warning messages should be investigated before reading results

### Chapter 40: Reading and Interpreting Results
- Deformed shape: Display > Show Deformed Shape — visual representation of the displacement vector {d} from Chapter 30
- Bending moment diagram: Display > Show Frame Forces > Moment 3-3 — the parabolic curves from Chapter 26; click any point on a member to read M at that section
- Shear force diagram: Display > Show Frame Forces > Shear 2-2 — the linear diagrams from Chapter 15
- Axial force: Display > Show Frame Forces > Axial — cumulative column loads from Chapter 32
- Support reactions: Display > Show Joint Reactions — verify equilibrium: sum of all vertical reactions must equal total applied vertical load (Chapter 11)
- Story drift: Display > Story Response Plots > Displacement — divide lateral displacement by story height; code limit is typically H/400 to H/500 depending on the code

### Chapter 41: Design in ETABS
- Concrete beam design: Design > Concrete Frame Design > Start Design/Check
  - ETABS outputs required longitudinal steel area As [mm²] at top and bottom of each section
  - It uses M from the moment diagram and section-capacity checks to determine how much steel is needed
- Concrete column design: Design > Concrete Frame Design > Display Design Info > Longitudinal Reinforcing
  - P-M interaction diagram: a closed curve showing every safe combination of axial load P and bending moment M; the design point (P_demand, M_demand) must fall INSIDE the curve
- Steel design: Design > Steel Frame Design > Start Design
  - Unity checks: ratio = Demand / Capacity ≤ 1.0 (inequality from Chapter 7)
- Print design report: File > Print Tables > Steel/Concrete Frame Design

### Chapter 42: Complete Worked Example — 5-Story Reinforced Concrete Building
Problem statement: 5-story office building, 5-bay × 4-bay column grid, 4 m story heights, 5 m column spacing in both directions, concrete C30, steel B500.

- **Step 1** — Grid and story setup (Chapter 34): create 6 grid lines in X at 5 m spacing, 5 grid lines in Y at 5 m spacing; 5 stories at 4 m each
- **Step 2** — Define material C30 (Chapter 35): f'c = 30 MPa, Ec = 32,000 MPa, unit weight = 25 kN/m³
- **Step 3** — Define beam 300×600 and column 500×500 sections (Chapter 36); calculate I33 by hand for each and verify against ETABS
- **Step 4** — Draw the model (Chapter 37): draw all columns and beams; add 200 mm flat slab; replicate to all stories
- **Step 5** — Apply loads (Chapter 38): DL = 4 kPa (superimposed), LL = 3 kPa; calculate tributary beam load by hand: w = (4+3) × 2.5 = 17.5 kN/m; enter this and compare to ETABS's result
- **Step 6** — Define load combination 1.2DL + 1.6LL (Chapter 38)
- **Step 7** — Run analysis (Chapter 39): check model first, resolve warnings, run
- **Step 8** — Read max moment beam (Chapter 40): click the critical beam; read M_max; verify by hand using M = wL²/8 = 17.5 × 5² / 8 = 54.7 kN·m; compare to ETABS
- **Step 9** — Calculate bending stress by hand after Chapters 17, 19, and 20 have supplied M, c, and I; compare the hand check to ETABS design output
- **Step 10** — Check story drift (Chapter 40): read lateral displacement at roof under wind; calculate drift ratio; compare to code limit
- **Step 11** — Run concrete design (Chapter 41); read required reinforcement for the critical beam and column
- **Final summary table:** max beam M, max column N, max mid-span deflection, max story drift ratio, critical beam demand/capacity ratio, critical column P-M ratio

### Chapter 43: Common ETABS Mistakes and How to Fix Them
- **Wrong units:** modeling in kN/m but material E entered in N/mm² — stress results are 1,000,000× off; fix by rechecking Edit > Preferences > Units before any data entry
- **Floating nodes:** a beam drawn slightly off a column's node — Check Model identifies these; use Edit > Merge Joints to fix
- **Missing self-weight:** DL load pattern has Self Weight Multiplier = 0 — column axial loads are underestimated; fix: edit load pattern and set multiplier to 1.0
- **Missing load combinations:** analysis runs but design shows no results — Define > Load Combinations was skipped; add combinations and re-run design
- **Local vs global axis confusion:** member section rotated 90°; bending is occurring about the wrong axis; fix: Assign > Frame Section > Local Axis rotation
- **Incorrect end releases:** beam modeled as fixed when it should be pinned — moment diagram shows moments at supports that should be zero; fix: Assign > Frame Releases > set M3 release at the appropriate end
- **Mesh too coarse for slab:** slab deflection results inaccurate; fix: Assign > Area Object Mesh Options > set maximum element size to span/10

---

## Formatting Rules

- All formulas shown in symbolic form first, then immediately with numbers substituted — never one without the other
- Engineering units in square brackets after every quantity: P = 500 [kN], A = 40,000 [mm²], σ = 12.5 [MPa]
- Every arithmetic step on its own line — never say "simplifying we get," "it follows that," "clearly," "obviously," or "just"
- Word Bank table at the start of every chapter — no exceptions
- Callout boxes used throughout:
  - **"Key Engineering Insight"** — the physical meaning behind the math result
  - **"ETABS Tip"** — a specific immediate action in ETABS
  - **"Pronunciation Note"** — for words with non-obvious pronunciation
  - **"Physics Corner"** — when a physical law is the foundation of what follows
- Chapter Practice Task at the end of every chapter with full worked solution and ETABS verification steps
- Chapter Summary Table closing every chapter: Concept | Formula | Engineering Use | ETABS Location
- Cross-references in both directions: "This I value was calculated in Chapter 20" and "This formula is used again in Chapter 36"

---

## Tone

- Friendly, patient, and never condescending
- Assume the reader is intelligent but has had no formal math or engineering education beyond arithmetic
- Never use the words: "obviously," "simply," "just," "trivially," "as we know," or "it is clear that"
- When introducing a difficult concept say: "This looks complicated. Let's slow down and build it up one piece at a time."
- Celebrate milestones: at the start of each new Part, briefly list what the reader has already mastered and explain exactly how it will be used in the chapters ahead

---

## What to Know Before Creating the Book

### 1. Scope Is Large
Arithmetic → precalculus → statics → structural engineering → ETABS is a 400–600 page journey. Generate one chapter at a time iteratively.

### 2. ETABS Is Version-Sensitive
Target **ETABS 22**. Note differences from versions 20 and 21 where menu paths have changed.

### 3. The Correct Learning Order Is: Math → Physics → Engineering → ETABS
Never introduce a structural concept before the math that underpins it. Never introduce an ETABS feature before the concept it implements.

### 4. Calculus Is Not Required for Day-to-Day ETABS Work
ETABS performs the calculus internally. Precalculus is fully sufficient to set up models, apply loads correctly, and interpret all output results.

### 5. Every Formula Must Be Bilingual
Symbolic form first, then real numbers with units immediately after — always both, never one without the other.

### 6. Pronunciation Is a Real and Hidden Barrier
Many readers have encountered these terms in writing but never heard them spoken. Phonetic guides in the Word Bank remove a silent obstacle to confidence and professional fluency.


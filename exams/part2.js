/* Part 2 — Statics & Physics (Chapters 10–17) */

E('chapter-10-what-is-a-force', 'Chapter 10 — What Is a Force?', 'Part 2', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'A force is:', o: ['Mass × velocity','Mass × acceleration','Energy/time','Pressure × volume'], a: 1, e: 'Newton II: F = ma.' },
    { q: 'SI unit of force is:', o: ['kg','N','Pa','J'], a: 1, e: 'Newton.' },
    { q: 'Weight of 1000 kg mass (g = 9.81): W = ?', n: 9810, t: 1, e: 'mg = 1000·9.81.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'A force is fully described by:', o: ['Magnitude only','Direction only','Magnitude, direction, and point of application','Mass'], a: 2, e: 'Vector quantity with line of action.' },
    { q: 'Two downward loads, 3 and 4 kN. Total downward load:', n: 7, t: 0, e: 'Same direction, so add them.' },
    { q: 'A 500 N force arrow points downward. Its magnitude is:', n: 500, t: 0, e: 'Magnitude is the size of the force.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'External forces include:', o: ['Internal stresses','Applied loads and weight','Material properties','Section dimensions'], a: 1, e: 'Chapter 10 focuses on applied forces and weight.' },
    { q: 'Newton III states action and reaction are:', o: ['Equal in magnitude, same direction','Equal in magnitude, opposite direction','Different magnitudes','Always zero'], a: 1, e: 'Equal and opposite.' },
    { q: 'Two downward forces 500 N and 250 N total:', n: 750, t: 1, e: 'Same direction, so add them.' },
  ]},
]);

E('chapter-11-equilibrium-and-the-sum-of-forces', 'Chapter 11 — Equilibrium and the Sum of Forces', 'Part 2', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'In this chapter, force equilibrium uses:', o: ['ΣF_x and ΣF_y','ΣM only','Σσ only','ΣE only'], a: 0, e: 'Chapter 11 balances forces; moments come next.' },
    { q: 'ΣF_y = 0 with applied −60 kN. Reactions sum:', n: 60, t: 0, e: 'Reactions balance applied loads.' },
    { q: 'Equilibrium implies acceleration is:', n: 0, t: 0, e: 'Static body: a = 0.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'For symmetric loading on identical supports, the two vertical reactions are:', o: ['Equal','Always zero','Opposite signs','Unrelated'], a: 0, e: 'Symmetry splits the vertical load equally.' },
    { q: 'Non-symmetric support reactions generally need:', o: ['Moment equilibrium from Chapter 12','Only counting terms','No equations','Percentages'], a: 0, e: 'Moment equilibrium is introduced in Chapter 12.' },
    { q: 'For a simply supported beam with central P, reactions are each:', o: ['P','P/2','P/4','2P'], a: 1, e: 'Symmetric loading → equal reactions of P/2.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'A centered 30 kN load on two identical supports gives each support:', n: 15, t: 0.1, e: 'Symmetry: 30/2 = 15 kN.' },
    { q: 'A symmetric beam has total downward load 80 kN. Each support force = ?', n: 40, t: 0.1, e: '80/2 = 40 kN.' },
    { q: 'If vertical loads sum to 120 kN downward, vertical reactions must sum to:', n: 120, t: 0, e: 'Force balance requires equal upward total.' },
  ]},
]);

E('chapter-12-moments-rotational-forces', 'Chapter 12 — Moments (Rotational Forces)', 'Part 2', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Moment = force × ?', o: ['Mass','Perpendicular distance','Time','Area'], a: 1, e: 'Lever-arm distance.' },
    { q: 'A 50 N force at 0.4 m perpendicular distance: M = ?', n: 20, t: 0, e: '50 × 0.4.' },
    { q: 'Sign convention (typical): counter-clockwise is:', o: ['Negative','Positive','Zero','Undefined'], a: 1, e: 'CCW = positive (right-hand rule).' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'A 100 N force has perpendicular distance 0.5 m from the pivot. M = ?', n: 50, t: 0.1, e: 'Moment = force × perpendicular distance = 100 × 0.5.' },
    { q: 'A couple (two equal opposite forces 0.3 m apart, 80 N each):', n: 24, t: 0, e: '80 · 0.3 = 24 N·m, independent of pivot.' },
    { q: 'Moment about a point on the line of action of the force is:', n: 0, t: 0, e: 'Zero arm.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'Beam: pin at A, roller at B (L = 4 m). Point load 20 kN at 1 m from A. R_B = ?', n: 5, t: 0.1, e: 'ΣM_A: 4 R_B = 20·1 → R_B = 5.' },
    { q: 'A bending moment causes a member to tend to:', o: ['Rotate or bend','Change color','Lose units','Become area'], a: 0, e: 'Moment is rotational tendency.' },
    { q: 'Maximum moment in a simply supported UDL beam occurs at:', o: ['Supports','Quarter-points','Midspan','Cantilever tip'], a: 2, e: 'Symmetric loading → midspan max.' },
  ]},
]);

E('chapter-13-types-of-loads-in-structural-engineering', 'Chapter 13 — Types of Loads in Structural Engineering', 'Part 2', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Self-weight of a structure is classified as:', o: ['Live load','Dead load','Wind load','Seismic load'], a: 1, e: 'Permanent → dead.' },
    { q: 'Furniture and occupants are:', o: ['Dead load','Live load','Wind load','Seismic'], a: 1, e: 'Variable in nature.' },
    { q: 'Wind, seismic, and snow are categorized as:', o: ['Dead','Live','Environmental','Internal'], a: 2, e: 'Driven by environment.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'A UDL of 5 kN/m over 6 m beam total = ?', n: 30, t: 0, e: 'w·L = 5·6.' },
    { q: 'Concrete slab 150 mm thick × 25 kN/m³ density: dead load = ?', n: 3.75, t: 0.01, e: '0.150 × 25 = 3.75 kPa.' },
    { q: 'A point load is also called a:', o: ['Concentrated load','Distributed load','Moment load','Pressure load'], a: 0, e: 'Concentrated at a point.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'ASCE LRFD combo 1.2D + 1.6L: factored load with D = 4 kPa, L = 2 kPa = ?', n: 8.0, t: 0.1, e: '1.2·4 + 1.6·2 = 4.8 + 3.2 = 8.0.' },
    { q: 'Triangular load (max w₀, length L) total = ?', o: ['w₀L','w₀L/2','w₀L/3','2 w₀L'], a: 1, e: 'Area of triangle = ½·w₀·L.' },
    { q: 'For triangular load on a beam, resultant acts at:', o: ['Mid-length','1/3 from heavy end (centroid)','1/4 from heavy end','At the apex'], a: 1, e: 'Centroid of right triangle.' },
  ]},
]);

E('chapter-14-support-conditions', 'Chapter 14 — Support Conditions', 'Part 2', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'A pin support resists:', o: ['Vertical only','Horizontal only','Both H and V (no moment)','H, V, and moment'], a: 2, e: 'Two reactions, no moment.' },
    { q: 'A roller support resists:', o: ['One reaction (perpendicular to surface)','Two reactions','Three reactions','None'], a: 0, e: 'Single perpendicular reaction.' },
    { q: 'A fixed support has how many reactions in 2D?', n: 3, t: 0, e: 'H, V, and moment.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'Total unknown reactions for pin + roller (typical simply supported beam):', n: 3, t: 0, e: '2 + 1 = 3.' },
    { q: 'A cantilever has:', o: ['Pin + roller','Two pins','One fixed support','Two rollers'], a: 2, e: 'Single fixed end.' },
    { q: 'Determinacy: equations (3) vs unknowns (3) →', o: ['Indeterminate','Determinate','Mechanism','Unstable'], a: 1, e: 'Equal → determinate.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'A propped cantilever (fixed + roller) has unknowns:', n: 4, t: 0, e: '3 + 1 = 4.' },
    { q: 'Degree of static indeterminacy of propped cantilever (planar):', n: 1, t: 0, e: '4 − 3 = 1.' },
    { q: 'In ETABS, defining a column base as "Fixed" means:', o: ['Pinned','Free to rotate','No translations or rotations','Roller'], a: 2, e: 'All 6 DOFs restrained.' },
  ]},
]);

E('chapter-15-internal-forces-axial-shear-and-bending-moment', 'Chapter 15 — Internal Forces: Axial, Shear, and Bending Moment', 'Part 2', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Three internal forces in a beam are axial, shear, and:', o: ['Pressure','Bending moment','Density','Strain'], a: 1, e: 'N, V, M.' },
    { q: 'For a simply supported UDL beam, the shear diagram shape is linear. True/False (1=True, 0=False):', n: 1, t: 0, e: 'Uniform load gives a straight shear diagram in this book.' },
    { q: 'In a simply supported UDL beam, V at midspan is:', n: 0, t: 0, e: 'Symmetric load → V = 0 at center.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'For w = 4 kN/m, L = 6 m simply supported beam, V_max = ?', n: 12, t: 0, e: 'wL/2 = 12.' },
    { q: 'For same beam, M_max = ?', n: 18, t: 0.1, e: 'wL²/8 = 144/8 = 18.' },
    { q: 'For a cantilever (length L) with tip load P, M at the support is:', o: ['0','P','P·L','P·L/2'], a: 2, e: '|M| = P·L at fixed end.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'In a shear diagram, max moment occurs where shear:', o: ['Is max','Is min','Crosses zero','Is constant'], a: 2, e: 'Use the diagram rule: zero shear marks peak moment.' },
    { q: 'A truss member has only:', o: ['Bending','Axial force','Shear','Torsion'], a: 1, e: 'Two-force member: pure axial.' },
    { q: 'Axial force N (kN) on column with three floors, each transferring 50 kN. Total at base = ?', n: 150, t: 0, e: '3 × 50 = 150.' },
  ]},
]);

E('chapter-16-stress-and-strain', 'Chapter 16 — Stress and Strain', 'Part 2', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'σ = ?', o: ['F · A','F / A','A / F','F − A'], a: 1, e: 'Stress = force per area.' },
    { q: 'Strain ε is:', o: ['Force/area','ΔL / L (dimensionless)','Stress × area','Force × length'], a: 1, e: 'Relative deformation.' },
    { q: 'Hooke\'s law: σ = ?', o: ['E + ε','E · ε','ε / E','E − ε'], a: 1, e: 'Linear elastic relation.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'P = 100 kN, A = 0.005 m². σ (kPa) = ?', n: 20000, t: 1, e: '100/0.005 = 20,000 kPa = 20 MPa.' },
    { q: 'Steel E = 200 GPa, σ = 100 MPa. Strain ε (×10⁻³) = ?', n: 0.5, t: 0.01, e: 'ε = 100/200000 = 0.0005.' },
    { q: 'Bar: P = 50 kN, L = 2 m, A = 0.0005 m², E = 200 GPa. Elongation (mm):', n: 1.0, t: 0.05, e: 'δ = PL/AE = 50000·2/(0.0005·2e11) = 0.001 m.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'Yield stress f_y for typical mild steel ≈', o: ['25 MPa','250 MPa','2500 MPa','25000 MPa'], a: 1, e: '~250 MPa for mild steel.' },
    { q: 'Stiffness AE/L of a tie has units of:', o: ['Pa','N','N/m','m²'], a: 2, e: 'Force per unit length = stiffness.' },
    { q: 'Doubling the area A while keeping P constant:', o: ['Doubles σ','Halves σ','Quarters σ','No change'], a: 1, e: 'σ inversely proportional to A.' },
  ]},
]);

E('chapter-17-bending-stress-in-beams', 'Chapter 17 — Bending Stress in Beams', 'Part 2', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Bending stress is zero at the:', o: ['Neutral axis','Extreme fibre','Support only','Load only'], a: 0, e: 'The neutral axis has zero bending stress.' },
    { q: 'Maximum bending stress occurs at:', o: ['Neutral axis','Outer fibers','Mid-depth only','Anywhere'], a: 1, e: 'Stress is largest farthest from the neutral axis.' },
    { q: 'Larger bending moment generally means bending stress:', o: ['Decreases','Increases','Becomes zero','Is unrelated'], a: 1, e: 'Stress grows with moment.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'Same section: Beam A has M = 50, Beam B has M = 100. Beam B stress is:', o: ['Half','Same','Double','Zero'], a: 2, e: 'Same section and double moment gives double stress.' },
    { q: 'Same moment: a deeper beam usually has bending stress that is:', o: ['Lower','Higher','Always zero','Unchanged'], a: 0, e: 'Depth spreads material farther from the neutral axis.' },
    { q: 'Where should you look for critical bending stress on a moment diagram?', o: ['Largest moment','Smallest label','Only supports','Only left end'], a: 0, e: 'Largest moment gives the critical region.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'For a beam, increasing depth usually makes bending stress:', o: ['Lower','Higher','Same','Undefined'], a: 0, e: 'Deeper sections are more efficient in bending.' },
    { q: 'I-shaped sections place material:', o: ['Near neutral axis (efficient)','Far from neutral axis (efficient)','Uniformly','Randomly'], a: 1, e: 'Far material maximizes I for given weight.' },
    { q: 'The full numeric bending-stress formula is taught after:', o: ['Moment of inertia','Before forces','Before area','Never'], a: 0, e: 'Chapter 20 supplies the needed geometry property.' },
  ]},
]);

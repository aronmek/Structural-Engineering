/* Part 2 — Statics & Physics (Chapters 10–17) */

E('chapter-10-what-is-a-force', 'Chapter 10 — What Is a Force?', 'Part 2', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'A force is:', o: ['Mass × velocity','Mass × acceleration','Energy/time','Pressure × volume'], a: 1, e: 'Newton II: F = ma.' },
    { q: 'SI unit of force is:', o: ['kg','N','Pa','J'], a: 1, e: 'Newton.' },
    { q: 'Weight of 1000 kg mass (g = 9.81): W = ?', n: 9810, t: 1, e: 'mg = 1000·9.81.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'A force is fully described by:', o: ['Magnitude only','Direction only','Magnitude, direction, and point of application','Mass'], a: 2, e: 'Vector quantity with line of action.' },
    { q: 'Two forces at right angles, 3 and 4 kN. Resultant magnitude:', n: 5, t: 0, e: '√(9+16) = 5.' },
    { q: 'A 500 N force at 30° has horizontal component:', n: 433.0, t: 1, e: '500·cos30° ≈ 433.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'External forces include:', o: ['Internal stresses','Loads, reactions, weight','Material properties','Section dimensions'], a: 1, e: 'Loads and reactions are external.' },
    { q: 'Newton III states action and reaction are:', o: ['Equal in magnitude, same direction','Equal in magnitude, opposite direction','Different magnitudes','Always zero'], a: 1, e: 'Equal and opposite.' },
    { q: 'Vertical component of 500 N at 30° above horizontal:', n: 250, t: 1, e: '500·sin30° = 250.' },
  ]},
]);

E('chapter-11-equilibrium-and-the-sum-of-forces', 'Chapter 11 — Equilibrium and the Sum of Forces', 'Part 2', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'For 2D equilibrium, the three equations are ΣF_x, ΣF_y, and:', o: ['ΣF_z','ΣM','Σσ','ΣE'], a: 1, e: 'Sum of moments = 0.' },
    { q: 'ΣF_y = 0 with applied −60 kN. Reactions sum:', n: 60, t: 0, e: 'Reactions balance applied loads.' },
    { q: 'Equilibrium implies acceleration is:', n: 0, t: 0, e: 'Static body: a = 0.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'Beam pin at A, roller at B; how many unknown reactions total?', n: 3, t: 0, e: 'Pin (2) + roller (1).' },
    { q: 'Choosing moment center at a support eliminates that support\'s reaction because:', o: ['It is zero','Its moment arm is zero','It vanishes by symmetry','It is internal'], a: 1, e: 'Force passes through center → no moment.' },
    { q: 'For a simply supported beam with central P, reactions are each:', o: ['P','P/2','P/4','2P'], a: 1, e: 'Symmetric loading → equal reactions of P/2.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'A beam (L = 6 m) carries P = 30 kN at 2 m from A. R_B = ?', n: 10, t: 0.1, e: 'ΣM_A = 6 R_B − 30·2 = 0 → R_B = 10.' },
    { q: 'For the same beam, R_A = ?', n: 20, t: 0.1, e: 'R_A = 30 − 10 = 20.' },
    { q: 'A determinate planar structure has reactions = 3. If unknowns = 4, the structure is:', o: ['Unstable','Determinate','Once indeterminate','Mechanism'], a: 2, e: 'One redundant reaction.' },
  ]},
]);

E('chapter-12-moments-rotational-forces', 'Chapter 12 — Moments (Rotational Forces)', 'Part 2', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Moment = force × ?', o: ['Mass','Perpendicular distance','Time','Area'], a: 1, e: 'Lever-arm distance.' },
    { q: 'A 50 N force at 0.4 m perpendicular distance: M = ?', n: 20, t: 0, e: '50 × 0.4.' },
    { q: 'Sign convention (typical): counter-clockwise is:', o: ['Negative','Positive','Zero','Undefined'], a: 1, e: 'CCW = positive (right-hand rule).' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'A 100 N force at 30° from a 0.5 m arm: M = ?', n: 25, t: 0.1, e: '100 · 0.5 · sin30° = 25.' },
    { q: 'A couple (two equal opposite forces 0.3 m apart, 80 N each):', n: 24, t: 0, e: '80 · 0.3 = 24 N·m, independent of pivot.' },
    { q: 'Moment about a point on the line of action of the force is:', n: 0, t: 0, e: 'Zero arm.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'Beam: pin at A, roller at B (L = 4 m). Point load 20 kN at 1 m from A. R_B = ?', n: 5, t: 0.1, e: 'ΣM_A: 4 R_B = 20·1 → R_B = 5.' },
    { q: 'Bending moment is the integral of:', o: ['Slope','Shear','Stress','Curvature'], a: 1, e: 'M = ∫V dx.' },
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
    { q: 'Shear V is the integral of distributed load (with sign). True/False (1=True, 0=False):', n: 1, t: 0, e: 'dV/dx = −w → integrate.' },
    { q: 'In a simply supported UDL beam, V at midspan is:', n: 0, t: 0, e: 'Symmetric load → V = 0 at center.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'For w = 4 kN/m, L = 6 m simply supported beam, V_max = ?', n: 12, t: 0, e: 'wL/2 = 12.' },
    { q: 'For same beam, M_max = ?', n: 18, t: 0.1, e: 'wL²/8 = 144/8 = 18.' },
    { q: 'For a cantilever (length L) with tip load P, M at the support is:', o: ['0','P','P·L','P·L/2'], a: 2, e: '|M| = P·L at fixed end.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'In a shear diagram, max moment occurs where shear:', o: ['Is max','Is min','Crosses zero','Is constant'], a: 2, e: 'dM/dx = V; V = 0 → max M.' },
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
    { q: 'Flexure formula σ = ?', o: ['M / (c·I)','M·c / I','I / (M·c)','M·I / c'], a: 1, e: 'σ = Mc/I.' },
    { q: 'I for rectangle b × h about its centroidal horizontal axis = ?', o: ['bh / 12','bh² / 6','bh³ / 12','b³h / 12'], a: 2, e: 'Standard formula.' },
    { q: 'Maximum bending stress occurs at:', o: ['Neutral axis','Extreme fibre','Mid-depth','Web'], a: 1, e: 'σ ∝ y; max at y = c.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'Rectangle b = 0.3 m, h = 0.6 m. I (m⁴) = ?', n: 0.0054, t: 0.0001, e: '0.3·0.216/12 = 0.0054.' },
    { q: 'Same section, M = 100 kN·m, c = 0.3 m. σ (kPa) = ?', n: 5555.6, t: 5, e: 'M·c/I = 100·0.3/0.0054 ≈ 5555.6.' },
    { q: 'Section modulus S = I/c. For above: S = ?', n: 0.018, t: 0.0005, e: '0.0054/0.3 = 0.018 m³.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'For a beam, doubling depth h (rectangle): σ_max becomes:', o: ['Half','1/4','Same','Double'], a: 1, e: 'σ = M·(h/2)/(bh³/12) = 6M/(bh²); h doubled → σ ¼.' },
    { q: 'I-shaped sections place material:', o: ['Near neutral axis (efficient)','Far from neutral axis (efficient)','Uniformly','Randomly'], a: 1, e: 'Far material maximizes I for given weight.' },
    { q: 'Plastic section modulus Z is generally:', o: ['Smaller than S','Equal to S','Larger than S','Negative'], a: 2, e: 'Z > S; ratio is shape factor.' },
  ]},
]);

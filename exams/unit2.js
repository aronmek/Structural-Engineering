/* Unit 2 — Forces and How They Travel (Chapters 5–8)
   3 sets × 3 questions per chapter = 9 questions per chapter.
   Chapters draw on: Part 2 (Ch10, Ch11, Ch13) plus new content for Ch6 and Ch7.
*/

E('chapter-5-what-forces-act-on-a-building', 'Chapter 5 — What Forces Act on a Building', 'Unit 2', [
  { id: 'A', title: 'Set A — Force fundamentals', questions: [
    { q: 'A force is:', o: ['Mass × velocity', 'Mass × acceleration', 'Energy/time', 'Pressure × volume'], a: 1,
      e: 'Newton II: F = ma.' },
    { q: 'SI unit of force is:', o: ['kg', 'N', 'Pa', 'J'], a: 1, e: 'Newton.' },
    { q: 'Self-weight of a structure is classified as:', o: ['Live load', 'Dead load', 'Wind load', 'Seismic load'], a: 1,
      e: 'Permanent → dead.' },
  ]},
  { id: 'B', title: 'Set B — Load types', questions: [
    { q: 'Furniture and occupants are:', o: ['Dead load', 'Live load', 'Wind load', 'Seismic'], a: 1,
      e: 'Variable in nature.' },
    { q: 'Wind, seismic, and snow are categorized as:', o: ['Dead', 'Live', 'Environmental', 'Internal'], a: 2,
      e: 'Driven by environment.' },
    { q: 'A UDL of 5 kN/m over 6 m beam total = ?', n: 30, t: 0, e: 'w·L = 5·6.' },
  ]},
  { id: 'C', title: 'Set C — Load combinations', questions: [
    { q: 'ASCE LRFD combo 1.2D + 1.6L: factored load with D = 4 kPa, L = 2 kPa = ?', n: 8.0, t: 0.1,
      e: '1.2·4 + 1.6·2 = 4.8 + 3.2 = 8.0 kPa.' },
    { q: 'Concrete slab 150 mm thick × 25 kN/m³ density: dead load = ?', n: 3.75, t: 0.01,
      e: '0.150 × 25 = 3.75 kPa.' },
    { q: 'A point load on a floor is also called a:', o: ['Concentrated load', 'Distributed load', 'Moment load', 'Pressure load'], a: 0,
      e: 'Concentrated at a point.' },
  ]},
]);

E('chapter-6-tributary-areas-and-load-accumulation', 'Chapter 6 — Tributary Areas and Load Accumulation', 'Unit 2', [
  { id: 'A', title: 'Set A — Tributary area basics', questions: [
    { q: 'A beam on a 6 m × 5 m bay collects load from half the bay on each side. Tributary width = ?', n: 5, t: 0,
      e: 'Full bay width = 5 m; the beam collects the full bay width in this case (edge-to-edge).' },
    { q: 'An interior beam on a 6 m × 5 m grid has tributary width (half-bay each side). Trib. width = ?', n: 5, t: 0,
      e: '2.5 m each side × 2 = 5 m.' },
    { q: 'Floor DL = 4.5 kPa, trib. width = 3 m. Line load on beam = ?', n: 13.5, t: 0.1,
      e: '4.5 × 3 = 13.5 kN/m.' },
  ]},
  { id: 'B', title: 'Set B — Load accumulation', questions: [
    { q: 'Total load on a beam of length 6 m carrying 12 kN/m = ?', n: 72, t: 0,
      e: '12 × 6 = 72 kN.' },
    { q: 'A column supports beams from 4 bays each contributing 18 kN. Column load = ?', n: 72, t: 0,
      e: '4 × 18 = 72 kN.' },
    { q: 'Tributary area for a corner column on a 6 × 6 m grid = ?', n: 9, t: 0,
      e: '(6/2) × (6/2) = 3 × 3 = 9 m².' },
  ]},
  { id: 'C', title: 'Set C — Multi-storey accumulation', questions: [
    { q: 'An interior column on a 6 × 6 m grid with 3 floors at 5 kPa. Column load = ?', n: 540, t: 1,
      e: '36 m² × 5 kPa × 3 = 540 kN.' },
    { q: 'Trib. area of edge beam (one bay side only) on 6 × 8 m bay, 6 m direction. Trib. area = ?', n: 24, t: 0,
      e: '4 m trib. width (half of 8 m) × 6 m length = 24 m².' },
    { q: 'As loads travel from slab → beam → column → foundation, they:', o: [
        'Stay the same', 'Accumulate (grow)', 'Decrease', 'Reverse sign'], a: 1,
      e: 'Each level collects all loads above it.' },
  ]},
]);

E('chapter-7-free-body-diagrams-isolating-the-problem', 'Chapter 7 — Free Body Diagrams: Isolating the Problem', 'Unit 2', [
  { id: 'A', title: 'Set A — FBD concepts', questions: [
    { q: 'A free body diagram shows:', o: [
        'Only internal stresses', 'The isolated body with all external forces acting on it',
        'Section properties', 'Material specifications'], a: 1,
      e: 'An FBD isolates the body and shows all applied forces and reactions.' },
    { q: 'When you cut through a member to make an FBD, you replace the cut with:', o: [
        'Nothing', 'Internal forces (N, V, M) on the cut face',
        'Material properties', 'Support reactions only'], a: 1,
      e: 'The cut face must show the internal forces that were holding the removed portion.' },
    { q: 'Newton\'s third law says action and reaction forces are:', o: [
        'Equal in magnitude, same direction', 'Equal in magnitude, opposite direction',
        'Different magnitudes', 'Both zero'], a: 1,
      e: 'Equal and opposite — the force a support exerts on the beam is equal and opposite to the force the beam exerts on the support.' },
  ]},
  { id: 'B', title: 'Set B — Drawing FBDs', questions: [
    { q: 'A simply supported beam carries a central load P. How many external forces act on the FBD?', n: 3, t: 0,
      e: 'One applied load + two support reactions = 3 external forces.' },
    { q: 'A cantilever with tip load P has support reactions at the fixed end. How many reaction components in 2D?', n: 3, t: 0,
      e: 'H, V, and moment reaction = 3 components.' },
    { q: 'On an FBD, the weight of the beam itself acts at:', o: [
        'The left support', 'The centroid (midspan for uniform beam)', 'The right support', 'The top fibre'], a: 1,
      e: 'Self-weight acts at the centroid of the member.' },
  ]},
  { id: 'C', title: 'Set C — FBD applications', questions: [
    { q: 'A beam is 6 m long, pin at A, roller at B. A 30 kN downward load acts at 2 m from A. ΣM_A = 0: R_B × 6 = 30 × 2. R_B = ?', n: 10, t: 0,
      e: 'R_B = 60/6 = 10 kN.' },
    { q: 'For the same beam, R_A = ?', n: 20, t: 0,
      e: 'ΣF_y = 0: R_A + 10 - 30 = 0 → R_A = 20 kN.' },
    { q: 'If you forget to include a force on an FBD, the equilibrium equations will:', o: [
        'Still balance correctly', 'Give wrong reactions', 'Have no effect', 'Always give zero'], a: 1,
      e: 'Missing forces mean the wrong equilibrium is solved.' },
  ]},
]);

E('chapter-8-equilibrium-the-condition-every-structure-must-satisfy', 'Chapter 8 — Equilibrium: The Condition Every Structure Must Satisfy', 'Unit 2', [
  { id: 'A', title: 'Set A — Force equilibrium', questions: [
    { q: 'ΣF_y = 0 with applied −60 kN. Reactions must sum to:', n: 60, t: 0,
      e: 'Reactions balance applied loads.' },
    { q: 'Equilibrium implies acceleration is:', n: 0, t: 0, e: 'Static body: a = 0.' },
    { q: 'For a simply supported beam with central load P, each reaction = ?', o: ['P', 'P/2', 'P/4', '2P'], a: 1,
      e: 'Symmetric loading → equal reactions of P/2.' },
  ]},
  { id: 'B', title: 'Set B — Moment equilibrium', questions: [
    { q: 'Beam: pin at A, roller at B (L = 4 m). Point load 20 kN at 1 m from A. R_B = ?', n: 5, t: 0.1,
      e: 'ΣM_A: 4 R_B = 20·1 → R_B = 5 kN.' },
    { q: 'For the same beam R_A = ?', n: 15, t: 0,
      e: 'ΣF_y = 0: R_A + 5 = 20 → R_A = 15 kN.' },
    { q: 'A centered 30 kN load on two identical supports gives each support (kN):', n: 15, t: 0.1,
      e: 'Symmetry: 30/2 = 15 kN.' },
  ]},
  { id: 'C', title: 'Set C — Complete equilibrium checks', questions: [
    { q: 'ΣM_A = 0: R_B × 6 = 60 × 2. R_B = ?', n: 20, t: 0, e: '120/6 = 20 kN.' },
    { q: 'For the same beam, R_A = ?', n: 40, t: 0, e: 'ΣF_y: R_A + 20 = 60 → R_A = 40 kN.' },
    { q: 'After solving reactions, you should always verify by checking:', o: [
        'ΣF_y = 0 and ΣM = 0', 'Only one equilibrium equation', 'Material properties', 'Section shape'], a: 0,
      e: 'Always check both force and moment equilibrium.' },
  ]},
]);

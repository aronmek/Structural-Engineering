/* Unit 3 — Reactions, Moments, and Internal Forces (Chapters 9–12)
   3 sets × 3 questions per chapter = 9 questions per chapter.
   Chapters draw on: Part 2 (Ch12, Ch14, Ch15) plus new content for Ch12 D/C.
*/

E('chapter-9-support-conditions-and-finding-reactions', 'Chapter 9 — Support Conditions and Finding Reactions', 'Unit 3', [
  { id: 'A', title: 'Set A — Support types', questions: [
    { q: 'A pin support resists:', o: ['Vertical only', 'Horizontal only', 'Both H and V (no moment)', 'H, V, and moment'], a: 2,
      e: 'Two reactions, no moment.' },
    { q: 'A roller support resists:', o: ['One reaction (perpendicular to surface)', 'Two reactions', 'Three reactions', 'None'], a: 0,
      e: 'Single perpendicular reaction.' },
    { q: 'A fixed support has how many reactions in 2D?', n: 3, t: 0, e: 'H, V, and moment.' },
  ]},
  { id: 'B', title: 'Set B — Determinacy', questions: [
    { q: 'Total unknown reactions for pin + roller (typical simply supported beam):', n: 3, t: 0,
      e: '2 + 1 = 3.' },
    { q: 'A cantilever has:', o: ['Pin + roller', 'Two pins', 'One fixed support', 'Two rollers'], a: 2,
      e: 'Single fixed end.' },
    { q: 'Determinacy: equations (3) vs unknowns (3) →', o: ['Indeterminate', 'Determinate', 'Mechanism', 'Unstable'], a: 1,
      e: 'Equal → determinate.' },
  ]},
  { id: 'C', title: 'Set C — Finding reactions', questions: [
    { q: 'A propped cantilever (fixed + roller) has unknowns:', n: 4, t: 0, e: '3 + 1 = 4.' },
    { q: 'Degree of static indeterminacy of propped cantilever (planar):', n: 1, t: 0, e: '4 − 3 = 1.' },
    { q: 'In ETABS, defining a column base as "Fixed" means:', o: ['Pinned', 'Free to rotate', 'No translations or rotations', 'Roller'], a: 2,
      e: 'All 6 DOFs restrained.' },
  ]},
]);

E('chapter-10-moments-rotational-balance', 'Chapter 10 — Moments: Rotational Balance', 'Unit 3', [
  { id: 'A', title: 'Set A — Moment basics', questions: [
    { q: 'Moment = force × ?', o: ['Mass', 'Perpendicular distance', 'Time', 'Area'], a: 1,
      e: 'Lever-arm distance.' },
    { q: 'A 50 N force at 0.4 m perpendicular distance: M = ?', n: 20, t: 0, e: '50 × 0.4.' },
    { q: 'Sign convention (typical): counter-clockwise is:', o: ['Negative', 'Positive', 'Zero', 'Undefined'], a: 1,
      e: 'CCW = positive (right-hand rule).' },
  ]},
  { id: 'B', title: 'Set B — Calculating moments', questions: [
    { q: 'A 100 N force has perpendicular distance 0.5 m from the pivot. M = ?', n: 50, t: 0.1,
      e: 'Moment = force × perpendicular distance = 100 × 0.5.' },
    { q: 'A couple (two equal opposite forces 0.3 m apart, 80 N each): M = ?', n: 24, t: 0,
      e: '80 · 0.3 = 24 N·m, independent of pivot.' },
    { q: 'Moment about a point on the line of action of the force is:', n: 0, t: 0, e: 'Zero arm.' },
  ]},
  { id: 'C', title: 'Set C — Moments in structural problems', questions: [
    { q: 'Beam: pin at A, roller at B (L = 4 m). Point load 20 kN at 1 m from A. R_B = ?', n: 5, t: 0.1,
      e: 'ΣM_A: 4 R_B = 20·1 → R_B = 5 kN.' },
    { q: 'A bending moment causes a member to tend to:', o: ['Rotate or bend', 'Change colour', 'Lose units', 'Become area'], a: 0,
      e: 'Moment is rotational tendency.' },
    { q: 'Maximum moment in a simply supported UDL beam occurs at:', o: ['Supports', 'Quarter-points', 'Midspan', 'Cantilever tip'], a: 2,
      e: 'Symmetric loading → midspan max.' },
  ]},
]);

E('chapter-11-shear-force-and-bending-moment-along-a-beam', 'Chapter 11 — Shear Force and Bending Moment Along a Beam', 'Unit 3', [
  { id: 'A', title: 'Set A — SFD and BMD basics', questions: [
    { q: 'Three internal forces in a beam are axial, shear, and:', o: ['Pressure', 'Bending moment', 'Density', 'Strain'], a: 1,
      e: 'N, V, M.' },
    { q: 'For a simply supported UDL beam, the shear diagram shape is:', o: ['Parabolic', 'Linear (straight)', 'Constant', 'Stepped'], a: 1,
      e: 'Uniform load gives a straight shear diagram.' },
    { q: 'In a simply supported UDL beam, V at midspan is:', n: 0, t: 0,
      e: 'Symmetric load → V = 0 at centre.' },
  ]},
  { id: 'B', title: 'Set B — Calculating V and M', questions: [
    { q: 'For w = 4 kN/m, L = 6 m simply supported beam, V_max = ?', n: 12, t: 0,
      e: 'wL/2 = 12 kN.' },
    { q: 'For same beam, M_max = ?', n: 18, t: 0.1,
      e: 'wL²/8 = 4·36/8 = 18 kN·m.' },
    { q: 'For a cantilever (length L) with tip load P, M at the support is:', o: ['0', 'P', 'P·L', 'P·L/2'], a: 2,
      e: '|M| = P·L at fixed end.' },
  ]},
  { id: 'C', title: 'Set C — Reading diagrams', questions: [
    { q: 'In a shear diagram, max moment occurs where shear:', o: ['Is max', 'Is min', 'Crosses zero', 'Is constant'], a: 2,
      e: 'Use the diagram rule: zero shear marks peak moment.' },
    { q: 'A truss member has only:', o: ['Bending', 'Axial force', 'Shear', 'Torsion'], a: 1,
      e: 'Two-force member: pure axial.' },
    { q: 'Axial force N on column with three floors, each transferring 50 kN. Total at base = ?', n: 150, t: 0,
      e: '3 × 50 = 150 kN.' },
  ]},
]);

E('chapter-12-demand-vs-capacity-is-the-member-strong-enough', 'Chapter 12 — Demand vs. Capacity: Is the Member Strong Enough?', 'Unit 3', [
  { id: 'A', title: 'Set A — D/C ratio basics', questions: [
    { q: 'The demand-to-capacity ratio D/C is defined as:', o: ['Capacity / Demand', 'Demand / Capacity', 'Demand × Capacity', 'Capacity − Demand'], a: 1,
      e: 'D/C = demand ÷ capacity. A ratio ≤ 1.0 means the member can carry the load.' },
    { q: 'A D/C of 0.85 means:', o: ['Member fails', '85% utilised (acceptable)', 'Overdesigned', 'Indeterminate'], a: 1,
      e: 'D/C < 1.0 means the member has reserve capacity.' },
    { q: 'A D/C of 1.10 means:', o: ['Member passes', 'Member fails — demand exceeds capacity', 'Marginal pass', 'Safe with factors'], a: 1,
      e: 'D/C > 1.0 → capacity is exceeded.' },
  ]},
  { id: 'B', title: 'Set B — Applying the ratio', questions: [
    { q: 'A beam has M_demand = 80 kN·m, M_capacity = 100 kN·m. D/C = ?', n: 0.8, t: 0.01,
      e: '80 / 100 = 0.80.' },
    { q: 'A column has axial capacity 500 kN. ETABS gives N_demand = 480 kN. D/C = ?', n: 0.96, t: 0.01,
      e: '480 / 500 = 0.96 < 1 → acceptable.' },
    { q: 'Doubling the section capacity while keeping demand constant:', o: ['Doubles D/C', 'Halves D/C', 'No change', 'Quadruples D/C'], a: 1,
      e: 'D/C is inversely proportional to capacity.' },
  ]},
  { id: 'C', title: 'Set C — Engineering judgement', questions: [
    { q: 'A D/C of 1.0 means:', o: ['Well within capacity', 'Exactly at the limit — no reserve', 'Certain failure', 'Overdesigned'], a: 1,
      e: 'Exactly at limit; no remaining safety margin beyond the load factor already applied.' },
    { q: 'A member with D/C = 0.50 is:', o: ['Overstressed', 'Has 50% of capacity used — significantly over-designed', 'Failing', 'At limit'], a: 1,
      e: 'Half the capacity is used; the section may be too large.' },
    { q: 'ETABS colour-codes members red when D/C > 1. This indicates:', o: [
        'A style choice', 'A design failure requiring a larger section', 'Acceptable result', 'Rounding artefact'], a: 1,
      e: 'Red members need resizing or redistribution.' },
  ]},
]);

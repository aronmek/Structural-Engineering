/* Unit 5 — Geometry, Angles, and 3D Space (Chapters 18–21)
   3 sets × 3 questions per chapter = 9 questions per chapter.
   Chapters draw on: Part 3 (Ch21–25) and Part 4 (Ch31).
*/

E('chapter-18-resolving-diagonal-forces', 'Chapter 18 — Resolving Diagonal Forces', 'Unit 5', [
  { id: 'A', title: 'Set A — sin / cos / tan', questions: [
    { q: 'sin 30° = ?', n: 0.5, t: 0.001, e: '½.' },
    { q: 'cos 60° = ?', n: 0.5, t: 0.001, e: '½.' },
    { q: 'tan 45° = ?', n: 1, t: 0.001, e: '1.' },
  ]},
  { id: 'B', title: 'Set B — Resolving components', questions: [
    { q: 'A 200 N force pulled at 25° above horizontal: vertical component (N):', n: 84.5, t: 0.5,
      e: '200 sin 25° ≈ 84.5.' },
    { q: 'Same force, horizontal component (N):', n: 181.3, t: 0.5,
      e: '200 cos 25° ≈ 181.3.' },
    { q: 'Hypotenuse of a 3-4 right triangle:', n: 5, t: 0, e: '√(9+16) = 5.' },
  ]},
  { id: 'C', title: 'Set C — Engineering applications', questions: [
    { q: 'Truss diagonal at 30° supports vertical 20 kN. Force in diagonal (kN):', n: 40, t: 0.5,
      e: '20 / sin 30° = 40 kN.' },
    { q: 'Resolve cable T = 100 kN at 45°: horizontal component (kN):', n: 70.7, t: 0.5,
      e: '100 cos 45° ≈ 70.7.' },
    { q: 'Roof slope rises 1 m per 4 m horizontal. Pitch angle (deg):', n: 14.04, t: 0.1,
      e: 'tan⁻¹(1/4) ≈ 14°.' },
  ]},
]);

E('chapter-19-truss-geometry-non-right-triangles', 'Chapter 19 — Truss Geometry: Non-Right Triangles', 'Unit 5', [
  { id: 'A', title: 'Set A — Law of Sines and Cosines', questions: [
    { q: 'Law of Sines: a/sinA = ?', o: ['b/sinB', 'b·sinB', 'sinB/b', 'a·sinA'], a: 0, e: 'Equal ratios.' },
    { q: 'Law of Cosines for c: c² = a² + b² − ?', o: ['ab', '2ab cosC', 'ab sinC', '2ab sinC'], a: 1,
      e: 'Standard form.' },
    { q: 'Sum of interior angles in any triangle (deg):', n: 180, t: 0, e: '180°.' },
  ]},
  { id: 'B', title: 'Set B — Solving oblique triangles', questions: [
    { q: 'a = 5, b = 7, C = 60°. c ≈ ?', n: 6.245, t: 0.01,
      e: '√(25+49−2·35·0.5) = √39 ≈ 6.245.' },
    { q: 'For a triangle with A = 30°, B = 60°, then C = ?', n: 90, t: 0, e: '180 − 90.' },
    { q: 'A = 30°, a = 10. b at B = 60° ≈ ?', n: 17.32, t: 0.05,
      e: '10·sin60°/sin30° ≈ 17.32.' },
  ]},
  { id: 'C', title: 'Set C — Engineering geometry', questions: [
    { q: 'A truss panel with non-right geometry typically requires:', o: ['Pythagoras only', 'Law of Sines/Cosines', 'Calculus', 'Matrix inversion'], a: 1,
      e: 'For oblique triangles.' },
    { q: 'When given SAS (two sides, included angle), use:', o: ['Law of Sines', 'Law of Cosines', 'Pythagoras', 'Tangent'], a: 1,
      e: 'Cosine rule.' },
    { q: 'When given AAS or ASA (two angles and a side), use:', o: ['Law of Sines', 'Law of Cosines', 'Pythagoras', 'Tangent'], a: 0,
      e: 'Sine rule is sufficient.' },
  ]},
]);

E('chapter-20-coordinate-geometry-locating-joints-and-members-in-3d', 'Chapter 20 — Coordinate Geometry: Locating Joints and Members in 3D', 'Unit 5', [
  { id: 'A', title: 'Set A — Distance and midpoint', questions: [
    { q: 'Distance from (0,0) to (3,4):', n: 5, t: 0, e: 'Pythagoras.' },
    { q: 'Midpoint of (2, 4) and (6, 10):', o: ['(3, 6)', '(4, 7)', '(8, 14)', '(2, 7)'], a: 1,
      e: 'Average components.' },
    { q: 'Slope through (1, 2) and (3, 8):', n: 3, t: 0, e: '(8−2)/(3−1).' },
  ]},
  { id: 'B', title: 'Set B — Lines and equations', questions: [
    { q: 'Line through (0, 0) with slope −1: y = ?', o: ['x', '−x', 'x−1', 'x+1'], a: 1, e: 'y = −x.' },
    { q: 'Distance from (1, 1) to (4, 5):', n: 5, t: 0.01, e: '√(9+16).' },
    { q: 'Two parallel beams have slopes:', o: ['Different', 'Equal', 'Opposite', 'Reciprocal'], a: 1,
      e: 'Parallel ↔ same slope.' },
  ]},
  { id: 'C', title: 'Set C — Structural geometry', questions: [
    { q: 'Geometry of a structural model is described in:', o: ['Local coordinates only', 'Global X, Y, Z', 'Polar only', 'Cylindrical'], a: 1,
      e: 'Global Cartesian frame.' },
    { q: 'Perpendicular slopes multiply to:', n: -1, t: 0, e: 'Property of perpendicular lines.' },
    { q: 'In ETABS, X and Y are typically:', o: ['Vertical', 'Horizontal plan dimensions', 'Time axes', 'Force axes'], a: 1,
      e: 'Plan dimensions.' },
  ]},
]);

E('chapter-21-3d-moments-cross-products-and-local-axes', 'Chapter 21 — 3D Moments: Cross Products and Local Axes', 'Unit 5', [
  { id: 'A', title: 'Set A — 3D vectors', questions: [
    { q: 'Magnitude of (1, 2, 2):', n: 3, t: 0.01, e: '√(1+4+4).' },
    { q: 'Number of components in a 3D vector:', n: 3, t: 0, e: 'x, y, z.' },
    { q: 'Unit vector along x is:', o: ['(0, 1, 0)', '(1, 0, 0)', '(0, 0, 1)', '(1, 1, 1)'], a: 1,
      e: 'Definition.' },
  ]},
  { id: 'B', title: 'Set B — Dot and cross products', questions: [
    { q: 'Dot product (1, 2, 3) · (4, 0, −1):', n: 1, t: 0, e: '4 + 0 − 3.' },
    { q: 'Cross product gives a vector:', o: ['Parallel to inputs', 'Perpendicular to both', 'Zero always', 'Same magnitude as inputs'], a: 1,
      e: 'Right-hand rule.' },
    { q: 'Vectors are orthogonal if dot product equals:', n: 0, t: 0, e: 'cos θ = 0.' },
  ]},
  { id: 'C', title: 'Set C — Axes and moments in 3D', questions: [
    { q: 'In ETABS, Z axis usually points:', o: ['North', 'East', 'Up', 'Down'], a: 2,
      e: 'Convention: vertical up.' },
    { q: 'Moment vector direction follows:', o: ['Left-hand rule', 'Right-hand rule', 'Random', 'Top-down'], a: 1,
      e: 'Standard convention.' },
    { q: 'Local axis 2 of a beam typically refers to:', o: ['Strong (major) bending axis', 'Weak (minor) bending axis', 'Axial direction', 'Torsion'], a: 0,
      e: 'Axis 2 is the major bending axis in ETABS.' },
  ]},
]);

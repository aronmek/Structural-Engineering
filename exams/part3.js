/* Part 3 — Geometry & Trigonometry (Chapters 18–25) */

E('chapter-18-areas-and-perimeters', 'Chapter 18 — Areas and Perimeters', 'Part 3', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Area of a 4 × 6 rectangle:', n: 24, t: 0, e: 'b·h.' },
    { q: 'Area of triangle base 5, height 3:', n: 7.5, t: 0.01, e: '½·b·h.' },
    { q: 'Area of circle radius 2:', n: 12.566, t: 0.01, e: 'πr² ≈ 12.566.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'Perimeter of 5 × 8 rectangle:', n: 26, t: 0, e: '2(b+h).' },
    { q: 'Circumference of circle radius 3:', n: 18.85, t: 0.05, e: '2πr ≈ 18.85.' },
    { q: 'Trapezoid (parallel sides 4, 6; height 5) area:', n: 25, t: 0.01, e: '½·(4+6)·5.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'Floor 12 × 18 m at 5 kPa: total load (kN):', n: 1080, t: 1, e: '12·18·5 = 1080.' },
    { q: 'A circular column 0.4 m diameter has area:', n: 0.1257, t: 0.001, e: 'π(0.2)² ≈ 0.1257 m².' },
    { q: 'For tributary area of 6 × 5 m and dead 4 kPa: P = ?', n: 120, t: 1, e: '30·4 = 120 kN.' },
  ]},
]);

E('chapter-19-centroids', 'Chapter 19 — Centroids', 'Part 3', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Centroid of a rectangle is at:', o: ['A corner','Midpoint of a side','Geometric center','At base'], a: 2, e: 'By symmetry.' },
    { q: 'Centroid of a triangle from base is at height fraction:', n: 0.3333, t: 0.005, e: 'h/3.' },
    { q: 'Centroid of a semicircle (radius r) above the diameter is at:', o: ['r/2','3r/4','4r/(3π)','r/π'], a: 2, e: 'Standard result.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'Two-rectangle section: A1 = 100 mm² at y=10, A2 = 200 mm² at y=40. ȳ = ?', n: 30, t: 0.5, e: '(100·10+200·40)/300 = 9000/300 = 30.' },
    { q: 'Composite shapes: holes are treated as:', o: ['Add area','Subtract area','Ignore','Doubled'], a: 1, e: 'Negative area for holes.' },
    { q: 'Centroid lies on any axis of:', o: ['Asymmetry','Symmetry','Tangency','Curvature'], a: 1, e: 'Symmetry forces centroid onto the axis.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'Plastic neutral axis of an I-section divides area into two:', o: ['Halves by depth','Halves by area','Halves by weight','Quarter sections'], a: 1, e: 'PNA = equal-area axis.' },
    { q: 'For an unsymmetric section, σ_top and σ_bottom are:', o: ['Always equal','Generally different','Always zero','Equal in magnitude'], a: 1, e: 'Different y distances → different σ.' },
    { q: 'Why locate the centroid before computing I?', o: ['Aesthetics','I is needed about the centroidal axis','Stability','Cost'], a: 1, e: 'Composite-section I is computed about the overall centroidal axis.' },
  ]},
]);

E('chapter-20-moment-of-inertia-second-moment-of-area', 'Chapter 20 — Moment of Inertia (Second Moment of Area)', 'Part 3', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'I of rectangle b × h:', o: ['bh/12','bh²/6','bh³/12','b³h/12'], a: 2, e: 'Centroidal I.' },
    { q: 'I of solid circle radius r:', o: ['πr²','πr⁴/4','πr⁴/2','2πr'], a: 1, e: 'I = πr⁴/4.' },
    { q: 'Units of I:', o: ['m','m²','m³','m⁴'], a: 3, e: 'Length to the 4th.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'Parallel-axis theorem: I_axis = I_c + ?', o: ['A','A·d','A·d²','d²/A'], a: 2, e: '+ A·d² where d is offset.' },
    { q: 'Rectangle 0.2 × 0.4 m. I (m⁴):', n: 0.001067, t: 0.00001, e: '0.2·0.064/12 ≈ 0.001067.' },
    { q: 'Doubling h in a rectangle changes I by factor:', n: 8, t: 0, e: 'h³.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'For an I-section, most material should be:', o: ['Near neutral axis','Away from neutral axis','At neutral axis only','Equally distributed'], a: 1, e: 'Maximize d² contribution.' },
    { q: 'Section modulus S = I/c is used because:', o: ['σ = M·S','σ = M/S','σ = S·c','σ = S/I'], a: 1, e: 'σ_max = M/S.' },
    { q: 'For M = 80×10⁶ N·mm, c = 300 mm, I = 5.4×10⁹ mm⁴, σ ≈ MPa:', n: 4.44, t: 0.02, e: 'σ = Mc/I = 4.44 N/mm² = 4.44 MPa.' },
  ]},
]);

E('chapter-21-vectors', 'Chapter 21 — Vectors', 'Part 3', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'A vector has:', o: ['Magnitude only','Direction only','Magnitude and direction','Mass'], a: 2, e: 'Definition.' },
    { q: 'A vector has components (3, 4). Its x-component is:', n: 3, t: 0, e: 'The first component is x.' },
    { q: 'Sum of (1, 2) and (3, −2):', o: ['(4, 0)','(2, 0)','(4, 4)','(2, 4)'], a: 0, e: 'Component-wise.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'Force A has Fx = 30, Force B has Fx = -10. Resultant Fx = ?', n: 20, t: 0.5, e: '30 + (-10) = 20.' },
    { q: 'Force A has Fy = 20, Force B has Fy = 15. Resultant Fy = ?', n: 35, t: 0.5, e: '20 + 15 = 35.' },
    { q: 'Component addition means add:', o: ['X with X and Y with Y','X with Y','Only magnitudes','Only angles'], a: 0, e: 'Keep components separated by axis.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'Reaction vector R = (R_x, R_y). If R_x = 3, the x-component is:', n: 3, t: 0, e: 'Read the x-component directly.' },
    { q: 'Direction signs matter because vectors have:', o: ['Magnitude only','Direction as well as magnitude','No units','No axes'], a: 1, e: 'A vector includes direction.' },
    { q: 'Sum of x-components: 86.6 − 50 = ?', n: 36.6, t: 1, e: 'Subtract the x-components.' },
  ]},
]);

E('chapter-22-right-triangle-trigonometry', 'Chapter 22 — Right Triangle Trigonometry', 'Part 3', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'sin30° = ?', n: 0.5, t: 0.001, e: '½.' },
    { q: 'cos60° = ?', n: 0.5, t: 0.001, e: '½.' },
    { q: 'tan45° = ?', n: 1, t: 0.001, e: '1.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'A 5 m ladder at 70° to ground reaches what height?', n: 4.7, t: 0.05, e: '5 sin70° ≈ 4.70.' },
    { q: 'A 200 N force pulled at 25° above horizontal: vertical component:', n: 84.5, t: 0.5, e: '200 sin25° ≈ 84.5.' },
    { q: 'Same force, horizontal component:', n: 181.3, t: 0.5, e: '200 cos25° ≈ 181.3.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'Truss diagonal at 30° supports vertical 20 kN. Force in diagonal:', n: 40, t: 0.5, e: '20 / sin30°.' },
    { q: 'Roof slope rises 1 m per 4 m horizontal. Pitch angle (deg):', n: 14.04, t: 0.1, e: 'tan⁻¹(1/4) ≈ 14°.' },
    { q: 'Resolve cable T = 100 kN at 45°: horizontal component:', n: 70.7, t: 0.5, e: '100 cos45°.' },
  ]},
]);

E('chapter-23-the-pythagorean-theorem', 'Chapter 23 — The Pythagorean Theorem', 'Part 3', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Hypotenuse of 3-4 right triangle:', n: 5, t: 0, e: '√25.' },
    { q: 'Leg with hypotenuse 13 and other leg 12:', n: 5, t: 0, e: '√(169−144).' },
    { q: 'Pythagoras applies to:', o: ['Any triangle','Right triangles only','Equilateral','Obtuse'], a: 1, e: 'Right triangle theorem.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'Magnitude of vector (5, 12):', n: 13, t: 0, e: '√(25+144).' },
    { q: 'Truss diagonal across 3 × 4 panel:', n: 5, t: 0, e: '√(9+16).' },
    { q: 'Roof slope length: rise 2, run 5:', n: 5.385, t: 0.01, e: '√29 ≈ 5.385.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'A 6 m brace from origin to (4, h) is 6 long. h = ?', n: 4.472, t: 0.01, e: '√(36−16) ≈ 4.472.' },
    { q: 'Pythagoras + tan⁻¹ produces (magnitude, angle) of:', o: ['Distance','Vector','Stress','Mass'], a: 1, e: 'Vector polar form.' },
    { q: 'For (x, y) = (3, 4): magnitude × cos(angle) gives:', n: 3, t: 0.01, e: '|v| cosθ = x.' },
  ]},
]);

E('chapter-24-trigonometry-for-non-right-triangles', 'Chapter 24 — Trigonometry for Non-Right Triangles', 'Part 3', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Law of Sines: a/sinA = ?', o: ['b/sinB','b·sinB','sinB/b','a·sinA'], a: 0, e: 'Equal ratios.' },
    { q: 'Law of Cosines for c: c² = a² + b² − ?', o: ['ab','2ab cosC','ab sinC','2ab sinC'], a: 1, e: 'Standard form.' },
    { q: 'Sum of interior angles in any triangle (deg):', n: 180, t: 0, e: '180°.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'a = 5, b = 7, C = 60°. c ≈ ?', n: 6.245, t: 0.01, e: '√(25+49−2·35·0.5) = √39.' },
    { q: 'For a triangle with A = 30°, B = 60°, then C = ?', n: 90, t: 0, e: '180 − 90.' },
    { q: 'A=30°, a=10. b at B=60°:', n: 17.32, t: 0.05, e: '10·sin60°/sin30° ≈ 17.32.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'A truss panel with non-right geometry typically requires:', o: ['Pythagoras only','Law of Sines/Cosines','Calculus','Matrix inversion'], a: 1, e: 'For oblique triangles.' },
    { q: 'When given SAS, use:', o: ['Sines','Cosines','Pythagoras','Tangent'], a: 1, e: 'Cosine law.' },
    { q: 'When given AAS or ASA, use:', o: ['Sines','Cosines','Pythagoras','Tangent'], a: 0, e: 'Sine law sufficient.' },
  ]},
]);

E('chapter-25-coordinate-geometry', 'Chapter 25 — Coordinate Geometry', 'Part 3', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Distance from (0,0) to (3,4):', n: 5, t: 0, e: 'Pythagoras.' },
    { q: 'Midpoint of (2, 4) and (6, 10):', o: ['(3, 6)','(4, 7)','(8, 14)','(2, 7)'], a: 1, e: 'Average components.' },
    { q: 'Slope through (1, 2) and (3, 8):', n: 3, t: 0, e: '(8−2)/(3−1).' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'Equation of line slope 2, y-intercept 3 in y = mx + b form. m = ?', n: 2, t: 0, e: 'm = 2.' },
    { q: 'Line through (0, 0) with slope −1: y = ?', o: ['x','−x','x−1','x+1'], a: 1, e: 'y = −x.' },
    { q: 'Distance from (1, 1) to (4, 5):', n: 5, t: 0.01, e: '√(9+16).' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'Geometry of a structural model is described in:', o: ['Local coordinates only','Global X, Y, Z','Polar only','Cylindrical'], a: 1, e: 'Global Cartesian frame.' },
    { q: 'Two parallel beams have slopes:', o: ['Different','Equal','Opposite','Reciprocal'], a: 1, e: 'Parallel ↔ same slope.' },
    { q: 'Perpendicular slopes multiply to:', n: -1, t: 0, e: 'Property of perpendicular lines.' },
  ]},
]);

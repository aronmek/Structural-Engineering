/* Unit 4 — Cross-Section Shape and Material Behaviour (Chapters 13–17)
   3 sets × 3 questions per chapter = 9 questions per chapter.
   Chapters draw on: Part 3 (Ch18–20) and Part 2 (Ch16–17).
*/

E('chapter-13-areas-and-perimeters-of-structural-cross-sections', 'Chapter 13 — Areas and Perimeters of Structural Cross-Sections', 'Unit 4', [
  { id: 'A', title: 'Set A — Basic areas', questions: [
    { q: 'Area of a 4 × 6 rectangle:', n: 24, t: 0, e: 'b·h.' },
    { q: 'Area of triangle base 5, height 3:', n: 7.5, t: 0.01, e: '½·b·h.' },
    { q: 'Area of circle radius 2:', n: 12.566, t: 0.01, e: 'πr² ≈ 12.566.' },
  ]},
  { id: 'B', title: 'Set B — Perimeters and composite shapes', questions: [
    { q: 'Perimeter of 5 × 8 rectangle:', n: 26, t: 0, e: '2(b+h).' },
    { q: 'Circumference of circle radius 3:', n: 18.85, t: 0.05, e: '2πr ≈ 18.85.' },
    { q: 'Trapezoid (parallel sides 4 and 6; height 5) area:', n: 25, t: 0.01, e: '½·(4+6)·5.' },
  ]},
  { id: 'C', title: 'Set C — Engineering applications', questions: [
    { q: 'Floor 12 × 18 m at 5 kPa: total load (kN):', n: 1080, t: 1, e: '12·18·5 = 1080.' },
    { q: 'A circular column 0.4 m diameter has area (m²):', n: 0.1257, t: 0.001, e: 'π(0.2)² ≈ 0.1257 m².' },
    { q: 'For tributary area 6 × 5 m and dead load 4 kPa: P = ?', n: 120, t: 1, e: '30·4 = 120 kN.' },
  ]},
]);

E('chapter-14-centroid-finding-the-neutral-axis', 'Chapter 14 — Centroid: Finding the Neutral Axis', 'Unit 4', [
  { id: 'A', title: 'Set A — Centroid basics', questions: [
    { q: 'Centroid of a rectangle is at:', o: ['A corner', 'Midpoint of a side', 'Geometric centre', 'At base'], a: 2,
      e: 'By symmetry.' },
    { q: 'Centroid of a triangle from base is at height fraction:', n: 0.3333, t: 0.005, e: 'h/3.' },
    { q: 'Centroid lies on any axis of:', o: ['Asymmetry', 'Symmetry', 'Tangency', 'Curvature'], a: 1,
      e: 'Symmetry forces the centroid onto the axis.' },
  ]},
  { id: 'B', title: 'Set B — Composite sections', questions: [
    { q: 'Two-rectangle section: A₁ = 100 mm² at ȳ=10, A₂ = 200 mm² at ȳ=40. ȳ_composite = ?', n: 30, t: 0.5,
      e: '(100·10 + 200·40) / 300 = 9000/300 = 30.' },
    { q: 'Composite shapes: holes are treated as:', o: ['Add area', 'Subtract area', 'Ignore', 'Doubled'], a: 1,
      e: 'Negative area for holes.' },
    { q: 'For an unsymmetric section, σ_top and σ_bottom are:', o: ['Always equal', 'Generally different', 'Always zero', 'Equal in magnitude'], a: 1,
      e: 'Different y distances → different σ.' },
  ]},
  { id: 'C', title: 'Set C — Engineering significance', questions: [
    { q: 'The plastic neutral axis of an I-section divides area into two:', o: ['Halves by depth', 'Halves by area', 'Halves by weight', 'Quarter sections'], a: 1,
      e: 'PNA = equal-area axis.' },
    { q: 'Why locate the centroid before computing I?', o: ['Aesthetics', 'I is computed about the centroidal axis', 'Stability', 'Cost'], a: 1,
      e: 'Composite-section I is computed about the overall centroidal axis.' },
    { q: 'A symmetric I-section has its neutral axis at:', o: ['The top flange', 'Mid-depth', 'The bottom flange', 'The web edge'], a: 1,
      e: 'Symmetry places the neutral axis at mid-depth.' },
  ]},
]);

E('chapter-15-moment-of-inertia-how-shape-controls-bending-stiffness', 'Chapter 15 — Moment of Inertia: How Shape Controls Bending Stiffness', 'Unit 4', [
  { id: 'A', title: 'Set A — I formulae', questions: [
    { q: 'I of rectangle b × h about centroidal axis:', o: ['bh/12', 'bh²/6', 'bh³/12', 'b³h/12'], a: 2, e: 'Centroidal I.' },
    { q: 'I of solid circle radius r:', o: ['πr²', 'πr⁴/4', 'πr⁴/2', '2πr'], a: 1, e: 'I = πr⁴/4.' },
    { q: 'Units of I:', o: ['m', 'm²', 'm³', 'm⁴'], a: 3, e: 'Length to the 4th.' },
  ]},
  { id: 'B', title: 'Set B — Parallel-axis theorem', questions: [
    { q: 'Parallel-axis theorem: I_axis = I_c + ?', o: ['A', 'A·d', 'A·d²', 'd²/A'], a: 2,
      e: '+ A·d² where d is the offset distance.' },
    { q: 'Rectangle 0.2 × 0.4 m. I (m⁴):', n: 0.001067, t: 0.00001,
      e: '0.2·0.064/12 ≈ 0.001067.' },
    { q: 'Doubling h in a rectangle changes I by factor:', n: 8, t: 0, e: 'hᶟ → factor of 2³ = 8.' },
  ]},
  { id: 'C', title: 'Set C — Bending stress', questions: [
    { q: 'For an I-section, most material should be placed:', o: ['Near neutral axis', 'Away from neutral axis', 'At neutral axis only', 'Equally distributed'], a: 1,
      e: 'Maximise d² contribution.' },
    { q: 'Section modulus S = I/c is used because:', o: ['σ = M·S', 'σ = M/S', 'σ = S·c', 'σ = S/I'], a: 1,
      e: 'σ_max = M/S.' },
    { q: 'For M = 80×10⁶ N·mm, c = 300 mm, I = 5.4×10⁹ mm⁴, σ ≈ MPa:', n: 4.44, t: 0.02,
      e: 'σ = Mc/I = 4.44 N/mm² = 4.44 MPa.' },
  ]},
]);

E('chapter-16-stress-and-strain-what-happens-inside-the-material', 'Chapter 16 — Stress and Strain: What Happens Inside the Material', 'Unit 4', [
  { id: 'A', title: 'Set A — Definitions', questions: [
    { q: 'σ = ?', o: ['F · A', 'F / A', 'A / F', 'F − A'], a: 1, e: 'Stress = force per area.' },
    { q: 'Strain ε is:', o: ['Force/area', 'ΔL / L (dimensionless)', 'Stress × area', 'Force × length'], a: 1,
      e: 'Relative deformation.' },
    { q: "Hooke's law: σ = ?", o: ['E + ε', 'E · ε', 'ε / E', 'E − ε'], a: 1, e: 'Linear elastic relation.' },
  ]},
  { id: 'B', title: 'Set B — Calculating stress and strain', questions: [
    { q: 'P = 100 kN, A = 0.005 m². σ (kPa) = ?', n: 20000, t: 1,
      e: '100/0.005 = 20,000 kPa = 20 MPa.' },
    { q: 'Steel E = 200 GPa, σ = 100 MPa. Strain ε (×10⁻³) = ?', n: 0.5, t: 0.01,
      e: 'ε = 100/200000 = 0.0005.' },
    { q: 'Bar: P = 50 kN, L = 2 m, A = 0.0005 m², E = 200 GPa. Elongation (mm):', n: 1.0, t: 0.05,
      e: 'δ = PL/AE = 50000·2/(0.0005·2×10¹¹) = 0.001 m = 1.0 mm.' },
  ]},
  { id: 'C', title: 'Set C — Engineering properties', questions: [
    { q: 'Yield stress f_y for typical mild steel ≈', o: ['25 MPa', '250 MPa', '2500 MPa', '25000 MPa'], a: 1,
      e: '~250 MPa for mild steel.' },
    { q: 'Stiffness AE/L of a tie has units of:', o: ['Pa', 'N', 'N/m', 'm²'], a: 2,
      e: 'Force per unit length = stiffness.' },
    { q: 'Doubling the area A while keeping P constant:', o: ['Doubles σ', 'Halves σ', 'Quarters σ', 'No change'], a: 1,
      e: 'σ inversely proportional to A.' },
  ]},
]);

E('chapter-17-deflection-how-span-and-section-control-sag', 'Chapter 17 — Deflection: How Span and Section Control Sag', 'Unit 4', [
  { id: 'A', title: 'Set A — Deflection concepts', questions: [
    { q: 'Bending stress is zero at the:', o: ['Neutral axis', 'Extreme fibre', 'Support only', 'Load only'], a: 0,
      e: 'The neutral axis has zero bending stress.' },
    { q: 'For a simply supported UDL beam, midspan deflection δ = 5wL⁴/(384EI). Doubling L changes δ by factor:', n: 16, t: 0,
      e: 'L⁴ means factor = 2⁴ = 16.' },
    { q: 'Increasing I (moment of inertia) makes deflection:', o: ['Larger', 'Smaller', 'Unchanged', 'Zero always'], a: 1,
      e: 'δ ∝ 1/I — larger I reduces deflection.' },
  ]},
  { id: 'B', title: 'Set B — Calculating deflection', questions: [
    { q: 'For w = 4 kN/m, L = 6 m, E = 200 GPa, I = 0.001 m⁴. δ_max (mm) ≈ ?', n: 0.338, t: 0.01,
      e: 'δ = 5·4·6⁴/(384·2×10⁸·0.001) = 5·4·1296/(384·2×10⁵) ≈ 0.000338 m = 0.338 mm.' },
    { q: 'A deeper beam usually has bending stress and deflection that are:', o: ['Higher', 'Lower', 'Same', 'Undefined'], a: 1,
      e: 'Depth increases I, reducing both σ and δ.' },
    { q: 'Where should you look for critical bending stress on a moment diagram?', o: ['Largest moment', 'Smallest label', 'Only supports', 'Only left end'], a: 0,
      e: 'Largest moment gives the critical region.' },
  ]},
  { id: 'C', title: 'Set C — Code limits and design', questions: [
    { q: 'Typical code deflection limit for a beam under service loads is L divided by:', o: ['10', '100', '360', '10000'], a: 2,
      e: 'Common limit: L/360 for floors, L/240 for roofs.' },
    { q: 'I-shaped sections place material far from the neutral axis because:', o: ['Easier to manufacture', 'Maximises I for a given weight', 'Minimises weight only', 'Required by code'], a: 1,
      e: 'Far material maximises I — more efficient in bending.' },
    { q: 'For a beam of span 6 m with deflection limit L/360, allowed deflection (mm) = ?', n: 16.7, t: 0.5,
      e: '6000/360 ≈ 16.7 mm.' },
  ]},
]);

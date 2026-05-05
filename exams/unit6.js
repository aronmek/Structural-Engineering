/* Unit 6 — Time, Cycles, Convergence, and the Matrix Method (Chapters 22–27)
   3 sets × 3 questions per chapter = 9 questions per chapter.
   Chapters draw on: Part 4 (Ch26–33).
*/

E('chapter-22-polynomials-and-the-bending-moment-equation', 'Chapter 22 — Polynomials and the Bending Moment Equation', 'Unit 6', [
  { id: 'A', title: 'Set A — Polynomial basics', questions: [
    { q: 'Degree of x³ + 2x² − 5:', n: 3, t: 0, e: 'Highest power.' },
    { q: 'Constant term of 4x² − 3x + 7:', n: 7, t: 0, e: 'Term without x.' },
    { q: 'A bending moment polynomial M(x) for a UDL beam is of degree:', n: 2, t: 0,
      e: 'Quadratic in x.' },
  ]},
  { id: 'B', title: 'Set B — Evaluating and factoring', questions: [
    { q: 'Multiply (x + 2)(x + 3): coefficient of x:', n: 5, t: 0, e: '2 + 3.' },
    { q: 'Roots of x² − 5x + 6 = 0: smaller root:', n: 2, t: 0, e: '(x−2)(x−3).' },
    { q: 'For UDL beam M(x) = wx(L−x)/2, M(0) = ?', n: 0, t: 0, e: 'At support.' },
  ]},
  { id: 'C', title: 'Set C — Engineering applications', questions: [
    { q: 'For w = 4, L = 6, M(x) at x = 3 (midspan):', n: 18, t: 0.1,
      e: '4·3·3/2 = 18 kN·m.' },
    { q: 'M(x) for cantilever with tip load P at x measured from tip: M(x) = ?', o: ['P', '−P·x', '+P·x', 'PL'], a: 1,
      e: 'Linear in x.' },
    { q: 'For M(x) = 40x − 4x², the associated shear expression dM/dx is:', o: ['40−8x', '40x', '−4x²', 'x²'], a: 0,
      e: 'Differentiate with respect to x.' },
  ]},
]);

E('chapter-23-proportionality-how-span-controls-deflection', 'Chapter 23 — Proportionality: How Span Controls Deflection', 'Unit 6', [
  { id: 'A', title: 'Set A — Direct and inverse proportion', questions: [
    { q: 'σ = P/A: σ is _______ proportional to A.', o: ['Directly', 'Inversely', 'Quadratically', 'Not'], a: 1,
      e: 'σ increases when A decreases.' },
    { q: 'σ = P/A: σ is ________ proportional to P.', o: ['Directly', 'Inversely', 'Quadratically', 'Not'], a: 0,
      e: 'σ increases when P increases.' },
    { q: 'In δ = PL/(AE), δ is inversely proportional to:', o: ['L', 'P', 'AE', 'E only'], a: 2,
      e: 'Larger AE → smaller δ.' },
  ]},
  { id: 'B', title: 'Set B — Scaling rules', questions: [
    { q: 'Midspan deflection δ = 5wL⁴/(384EI). If L doubles, δ changes by factor:', n: 16, t: 0,
      e: 'L⁴ → 2⁴ = 16.' },
    { q: 'If EI triples and all else stays constant, deflection:', o: ['Triples', 'Halves', 'Reduces to one-third', 'No change'], a: 2,
      e: 'δ ∝ 1/(EI).' },
    { q: 'Making EI very large makes δ ≈', o: ['Very large', 'Very small', 'Constant', 'Negative'], a: 1,
      e: 'Large EI → small δ.' },
  ]},
  { id: 'C', title: 'Set C — Engineering decisions', questions: [
    { q: 'A beam spans 8 m. Doubling the span to 16 m while keeping w and EI constant changes deflection by factor:', n: 16, t: 0,
      e: '2⁴ = 16.' },
    { q: 'In ETABS, increasing column area uniformly:', o: ['Doubles stress', 'Reduces stress', 'Has no effect', 'Removes loads'], a: 1,
      e: 'σ = P/A; larger A → smaller σ.' },
    { q: 'σ = P/A: if P is constant and A is halved, σ:', o: ['Halves', 'Stays same', 'Doubles', 'Quadruples'], a: 2,
      e: 'Inverse: halving A doubles σ.' },
  ]},
]);

E('chapter-24-exponential-functions-time-dependent-structural-behavior', 'Chapter 24 — Exponential Functions: Time-Dependent Structural Behavior', 'Unit 6', [
  { id: 'A', title: 'Set A — Exponential basics', questions: [
    { q: 'Form of an exponential function:', o: ['x²', 'aˣ', 'a·x', 'x/a'], a: 1, e: 'Variable in exponent.' },
    { q: 'eˣ at x = 0 = ?', n: 1, t: 0, e: 'e⁰ = 1.' },
    { q: 'Approx e ≈', o: ['1.41', '2.72', '3.14', '5'], a: 1, e: 'e ≈ 2.71828.' },
  ]},
  { id: 'B', title: 'Set B — Exponent rules', questions: [
    { q: '2³ × 2⁴ = 2^?', n: 7, t: 0, e: 'Add exponents.' },
    { q: '5⁰ = ?', n: 1, t: 0, e: 'Anything to power 0.' },
    { q: 'Doubling each step (2ⁿ for n = 0..3): values:', o: ['1, 2, 3, 4', '1, 2, 4, 8', '0, 2, 4, 6', '1, 2, 4, 6'], a: 1,
      e: 'Powers of 2.' },
  ]},
  { id: 'C', title: 'Set C — Time-dependent behaviour', questions: [
    { q: 'Free-vibration decay envelope is typically:', o: ['Linear', 'Exponential', 'Polynomial', 'Constant'], a: 1,
      e: 'A·e^(−ζωt).' },
    { q: 'A 5% damping ratio ζ = 0.05 affects vibration decay:', o: ['Slower than 10%', 'Faster than 1%', 'Same as 10%', 'No effect'], a: 1,
      e: 'Higher ζ → faster decay.' },
    { q: 'Concrete creep under sustained load grows:', o: ['Instantly to maximum', 'Exponentially over time', 'Linearly forever', 'Only under live loads'], a: 1,
      e: 'Creep is a time-dependent exponential-like process.' },
  ]},
]);

E('chapter-25-logarithms-reading-s-n-curves-and-response-spectra', 'Chapter 25 — Logarithms: Reading S-N Curves and Response Spectra', 'Unit 6', [
  { id: 'A', title: 'Set A — Log basics', questions: [
    { q: 'log₁₀(100) = ?', n: 2, t: 0, e: '10² = 100.' },
    { q: 'log_b(b) = ?', n: 1, t: 0, e: 'By definition.' },
    { q: 'ln(e) = ?', n: 1, t: 0, e: 'log_e(e) = 1.' },
  ]},
  { id: 'B', title: 'Set B — Log rules', questions: [
    { q: 'log(ab) = ?', o: ['log a + log b', 'log a · log b', 'log a − log b', '(log a)·b'], a: 0,
      e: 'Product rule.' },
    { q: 'log(aⁿ) = ?', o: ['n + log a', 'n · log a', 'aⁿ', 'log n + log a'], a: 1,
      e: 'Power rule.' },
    { q: 'Solve 2ˣ = 8. x = ?', n: 3, t: 0, e: '2³ = 8.' },
  ]},
  { id: 'C', title: 'Set C — Engineering charts', questions: [
    { q: 'An earthquake response spectrum often uses:', o: ['Linear axes', 'Log axes (one or both)', 'Polar axes', 'None'], a: 1,
      e: 'Log-log helps cover wide ranges of period and spectral acceleration.' },
    { q: 'An S-N (fatigue) curve plots stress amplitude vs number of cycles on:', o: ['Linear scales', 'Log scales', 'Polar scales', 'Time scales'], a: 1,
      e: 'Log scales linearise the relationship and span many decades of N.' },
    { q: 'Solve 10ˣ = 1000. x = ?', n: 3, t: 0, e: '10³.' },
  ]},
]);

E('chapter-26-matrices-why-etabs-can-solve-indeterminate-structures', 'Chapter 26 — Matrices: Why ETABS Can Solve Indeterminate Structures', 'Unit 6', [
  { id: 'A', title: 'Set A — Matrix basics', questions: [
    { q: 'A 3×2 matrix has how many entries?', n: 6, t: 0, e: 'rows × cols.' },
    { q: 'An identity matrix has on its main diagonal:', o: ['0', '1', '−1', 'random'], a: 1,
      e: 'Definition.' },
    { q: 'Two matrices are conformable for multiplication if cols of first =', o: ['rows of second', 'cols of second', 'rows of first', 'sum of dims'], a: 0,
      e: 'Inner dimensions match.' },
  ]},
  { id: 'B', title: 'Set B — Matrix operations', questions: [
    { q: 'Add [1,2;3,4] + [5,6;7,8]: top-left entry:', n: 6, t: 0, e: '1+5.' },
    { q: 'Multiply scalar 2 by [1,2;3,4]: bottom-right entry:', n: 8, t: 0, e: '2·4.' },
    { q: 'Transpose of [1,2,3] (1×3) is a:', o: ['1×3', '3×1', '3×3', '1×1'], a: 1, e: 'Swap dims.' },
  ]},
  { id: 'C', title: 'Set C — Stiffness matrix', questions: [
    { q: 'In FEM, [K]{u} = {F} relates:', o: ['Mass and accel', 'Stiffness, displacement, force', 'Stress and strain', 'Density and volume'], a: 1,
      e: 'Global stiffness equation.' },
    { q: '[K] is typically:', o: ['Asymmetric', 'Symmetric (small-disp linear elasticity)', 'Random', 'Diagonal'], a: 1,
      e: 'For linear elastic.' },
    { q: 'A propped cantilever is solved by matrix methods because it needs:', o: ['Compatibility', 'Colour settings', 'Rounding only', 'No supports'], a: 0,
      e: 'Indeterminate structures need deformation compatibility.' },
  ]},
]);

E('chapter-27-sequences-series-and-limits-cumulative-loads-and-fem-convergence', 'Chapter 27 — Sequences, Series, and Limits: Cumulative Loads and FEM Convergence', 'Unit 6', [
  { id: 'A', title: 'Set A — Sequences and series', questions: [
    { q: 'Arithmetic sequence 2, 5, 8, 11 has common difference:', n: 3, t: 0, e: 'a_(n+1) − a_n.' },
    { q: 'Geometric sequence 2, 6, 18, 54 has ratio:', n: 3, t: 0, e: 'a_(n+1)/a_n.' },
    { q: 'Sum 1+2+3+...+10:', n: 55, t: 0, e: 'n(n+1)/2.' },
  ]},
  { id: 'B', title: 'Set B — Limits', questions: [
    { q: 'lim_{x→2} (x + 3) = ?', n: 5, t: 0, e: 'Direct substitution.' },
    { q: 'lim_{x→∞} 1/x = ?', n: 0, t: 0, e: '1/x → 0.' },
    { q: 'lim_{x→3} (x²−9)/(x−3) = ?', n: 6, t: 0,
      e: '(x+3)(x−3)/(x−3) → x+3 → 6.' },
  ]},
  { id: 'C', title: 'Set C — FEM convergence and cumulative loads', questions: [
    { q: 'In FEM, refining mesh size h → 0 ideally gives:', o: ['Worse results', 'Convergence to exact solution', 'No effect', 'Divergence'], a: 1,
      e: 'Convergence.' },
    { q: 'Column axial load accumulates over 5 identical floors each contributing 60 kN. Total at base = ?', n: 300, t: 0,
      e: '5 × 60 = 300 kN — a geometric-like series of equal terms.' },
    { q: 'V = dM/dx relies on:', o: ['Algebra only', 'Calculus / limits', 'Geometry', 'Statistics'], a: 1,
      e: 'Derivative as a limit definition.' },
  ]},
]);

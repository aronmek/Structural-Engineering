/* Part 4 — Precalculus (Chapters 26–33) */

E('chapter-26-polynomials-and-the-bending-moment-equation', 'Chapter 26 — Polynomials and the Bending Moment Equation', 'Part 4', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Degree of x³ + 2x² − 5:', n: 3, t: 0, e: 'Highest power.' },
    { q: 'Constant term of 4x² − 3x + 7:', n: 7, t: 0, e: 'Term without x.' },
    { q: 'A bending moment polynomial M(x) for UDL is of degree:', n: 2, t: 0, e: 'Quadratic in x.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'Multiply (x + 2)(x + 3): coefficient of x:', n: 5, t: 0, e: '2 + 3.' },
    { q: 'Roots of x² − 5x + 6: smaller root:', n: 2, t: 0, e: '(x−2)(x−3).' },
    { q: 'For UDL beam M(x) = wx(L−x)/2, M(0) = ?', n: 0, t: 0, e: 'At support.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'For w=4, L=6, M(x) at x = 3 (midspan):', n: 18, t: 0.1, e: '4·3·3/2 = 18.' },
    { q: 'M(x) for cantilever with tip P at x measured from tip: M(x) = ?', o: ['P','−P·x','+P·x','PL'], a: 1, e: 'Linear in x.' },
    { q: 'Why the bending equation is a polynomial:', o: ['Loads are polynomial-distributed','Convention only','Random','Stiffness'], a: 0, e: 'Integrating polynomial loads yields polynomial moments.' },
  ]},
]);

E('chapter-27-rational-functions-and-proportionality', 'Chapter 27 — Rational Functions and Proportionality', 'Part 4', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'σ = P/A: σ is _______ proportional to A.', o: ['Directly','Inversely','Quadratically','Not'], a: 1, e: 'σ ↑ when A ↓.' },
    { q: 'σ = P/A: σ is ________ proportional to P.', o: ['Directly','Inversely','Quadratically','Not'], a: 0, e: 'σ ↑ when P ↑.' },
    { q: 'In δ = PL/(AE), δ is inversely proportional to:', o: ['L','P','AE','E only'], a: 2, e: 'δ ∝ 1/(AE).' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'Compute σ = 100/0.005 (kPa):', n: 20000, t: 1, e: '20 MPa = 20000 kPa.' },
    { q: 'If A doubles in σ = P/A, σ becomes:', o: ['Doubles','Halves','Quadruples','Same'], a: 1, e: 'Inverse proportionality.' },
    { q: 'If E quadruples in δ = PL/(AE), δ becomes:', o: ['×4','×2','×½','×¼'], a: 3, e: '1/E factor.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'Vertical asymptote of f(x) = 1/(x−2) is at x = ?', n: 2, t: 0, e: 'Denominator zero.' },
    { q: 'For δ = 5wL⁴/(384EI), making EI very large makes δ ≈', o: ['Very large','Very small','Constant','Negative'], a: 1, e: 'Large EI → small δ.' },
    { q: 'In ETABS, increasing column area uniformly:', o: ['Doubles stress','Reduces stress','Has no effect','Removes loads'], a: 1, e: 'σ = P/A inverse.' },
  ]},
]);

E('chapter-28-exponential-functions', 'Chapter 28 — Exponential Functions', 'Part 4', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Form of exponential function:', o: ['x²','aˣ','a·x','x/a'], a: 1, e: 'Variable in exponent.' },
    { q: '2³ × 2⁴ = 2^?', n: 7, t: 0, e: 'Add exponents.' },
    { q: 'eˣ at x = 0 = ?', n: 1, t: 0, e: 'e⁰ = 1.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: '5⁰ = ?', n: 1, t: 0, e: 'Anything to power 0.' },
    { q: 'Doubling each step (e.g., 2ⁿ for n = 0..3): values:', o: ['1, 2, 3, 4','1, 2, 4, 8','0, 2, 4, 6','1, 2, 4, 6'], a: 1, e: 'Powers of 2.' },
    { q: 'Approx e ≈', o: ['1.41','2.72','3.14','5'], a: 1, e: 'e ≈ 2.71828.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'Free-vibration decay envelope is typically:', o: ['Linear','Exponential','Polynomial','Constant'], a: 1, e: 'A·e^(−ζωt).' },
    { q: 'A 5% damping ratio ζ = 0.05 affects decay:', o: ['Slower','Faster','None','Reverses'], a: 1, e: 'Higher ζ → faster decay.' },
    { q: 'Exponential growth doubling time depends on:', o: ['Only base value','Growth rate constant','Initial slope','Average'], a: 1, e: 'ln(2)/r.' },
  ]},
]);

E('chapter-29-logarithms', 'Chapter 29 — Logarithms', 'Part 4', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'log₁₀(100) = ?', n: 2, t: 0, e: '10² = 100.' },
    { q: 'log_b(b) = ?', n: 1, t: 0, e: 'By definition.' },
    { q: 'ln(e) = ?', n: 1, t: 0, e: 'log_e(e) = 1.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'log(ab) = ?', o: ['log a + log b','log a · log b','log a − log b','(log a)·b'], a: 0, e: 'Product rule.' },
    { q: 'log(aⁿ) = ?', o: ['n + log a','n · log a','aⁿ','log n + log a'], a: 1, e: 'Power rule.' },
    { q: 'Solve 2ˣ = 8. x = ?', n: 3, t: 0, e: '2³ = 8.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'A response spectrum in earthquake engineering often uses:', o: ['Linear axes','Log axes (one or both)','Polar axes','None'], a: 1, e: 'Log-log helps cover wide ranges.' },
    { q: 'pH = −log[H⁺]. If [H⁺] = 10⁻⁴, pH = ?', n: 4, t: 0, e: '−log(10⁻⁴).' },
    { q: 'Solve 10ˣ = 1000. x = ?', n: 3, t: 0, e: '10³.' },
  ]},
]);

E('chapter-30-matrices-basic', 'Chapter 30 — Matrices (Basic)', 'Part 4', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'A 3×2 matrix has how many entries?', n: 6, t: 0, e: 'rows × cols.' },
    { q: 'Identity matrix has on its main diagonal:', o: ['0','1','−1','random'], a: 1, e: 'Definition.' },
    { q: 'Two matrices are conformable for multiplication if cols of first = ?', o: ['rows of second','cols of second','rows of first','sum of dims'], a: 0, e: 'Inner dimensions match.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'Add [1,2;3,4] + [5,6;7,8]: top-left entry of result:', n: 6, t: 0, e: '1+5.' },
    { q: 'Multiply scalar 2 by [1,2;3,4]: bottom-right entry:', n: 8, t: 0, e: '2·4.' },
    { q: 'Transpose of [1,2,3] (1×3) is a:', o: ['1×3','3×1','3×3','1×1'], a: 1, e: 'Swap dims.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'In FEM, [K]{u} = {F} relates:', o: ['Mass and accel','Stiffness, displacement, force','Stress and strain','Density and volume'], a: 1, e: 'Stiffness equation.' },
    { q: '[K] is typically:', o: ['Asymmetric','Symmetric (small-disp linear elasticity)','Random','Diagonal'], a: 1, e: 'For linear elastic.' },
    { q: 'Solving for {u} requires:', o: ['Inverse (or factorization) of K','Multiplication only','Eigenvalues','Determinant only'], a: 0, e: '{u} = K⁻¹{F}.' },
  ]},
]);

E('chapter-31-introduction-to-vectors-in-3d', 'Chapter 31 — Introduction to Vectors in 3D', 'Part 4', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Magnitude of (1, 2, 2):', n: 3, t: 0.01, e: '√(1+4+4).' },
    { q: 'Number of components in a 3D vector:', n: 3, t: 0, e: 'x, y, z.' },
    { q: 'Unit vector along x is:', o: ['(0, 1, 0)','(1, 0, 0)','(0, 0, 1)','(1, 1, 1)'], a: 1, e: 'Definition.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'Dot product (1, 2, 3) · (4, 0, −1):', n: 1, t: 0, e: '4 + 0 − 3.' },
    { q: 'Cross product gives a vector:', o: ['Parallel to inputs','Perpendicular to both','Zero always','Same magnitude as inputs'], a: 1, e: 'Right-hand rule.' },
    { q: 'Vectors orthogonal if dot product equals:', n: 0, t: 0, e: 'cosθ = 0.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'In ETABS, X, Y are typically:', o: ['Vertical','Horizontal','Time axes','Force axes'], a: 1, e: 'Plan dimensions.' },
    { q: 'Z axis usually points:', o: ['North','East','Up','Down'], a: 2, e: 'Convention: vertical up.' },
    { q: 'Moment vector direction follows:', o: ['Left-hand rule','Right-hand rule','Random','Top-down'], a: 1, e: 'Standard convention.' },
  ]},
]);

E('chapter-32-sequences-and-series', 'Chapter 32 — Sequences and Series', 'Part 4', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Arithmetic sequence 2, 5, 8, 11 has common difference:', n: 3, t: 0, e: 'a_(n+1) − a_n.' },
    { q: 'Geometric sequence 2, 6, 18, 54 has ratio:', n: 3, t: 0, e: 'a_(n+1)/a_n.' },
    { q: 'Sum of 1+2+3+...+10:', n: 55, t: 0, e: 'n(n+1)/2.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'Sum 1+2+...+100:', n: 5050, t: 0, e: '100·101/2.' },
    { q: 'Geometric sum 1+2+4+8+16:', n: 31, t: 0, e: '2⁵−1.' },
    { q: '5th term of arithmetic seq starting 7 with d = 4:', n: 23, t: 0, e: '7 + 4·4.' },
  ]},
]);

E('chapter-33-limits-conceptual-introduction', 'Chapter 33 — Limits — Conceptual Introduction', 'Part 4', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'lim_{x→2} (x + 3) = ?', n: 5, t: 0, e: 'Direct substitution.' },
    { q: 'lim_{x→0} sin(x)/x = ?', n: 1, t: 0, e: 'Standard limit.' },
    { q: 'lim_{x→∞} 1/x = ?', n: 0, t: 0, e: '1/x → 0.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'lim_{x→3} (x²−9)/(x−3) = ?', n: 6, t: 0, e: '(x+3)(x−3)/(x−3) → x+3 → 6.' },
    { q: 'A vertical asymptote indicates a limit that is:', o: ['Finite','Infinite','Zero','Undefined and discontinuous'], a: 1, e: 'Tends to ±∞.' },
    { q: 'Derivative as a limit definition uses:', o: ['Δx → 1','Δx → 0','Δx → ∞','Δx = constant'], a: 1, e: 'Tangent slope.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'In FEM, refining mesh size h → 0 ideally gives:', o: ['Worse results','Convergence to exact solution','No effect','Divergence'], a: 1, e: 'Convergence.' },
    { q: 'Moment as derivative of shear M\' = V relies on:', o: ['Algebra only','Calculus / limits','Geometry','Statistics'], a: 1, e: 'Calculus link.' },
    { q: 'A limit may exist even if the function value at the point:', o: ['Always equals it','Is undefined','Is negative','Is zero'], a: 1, e: 'Limit ≠ value of f at that point sometimes.' },
  ]},
]);

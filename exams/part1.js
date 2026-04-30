/* Part 1 — Algebra Foundations (Chapters 1–9) */

E('chapter-1-variables-and-expressions', 'Chapter 1 — Variables and Expressions', 'Part 1', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Evaluate 3x + 4 when x = 5.', n: 19, t: 0, e: '3·5+4 = 19.' },
    { q: 'Which is a coefficient in 7y − 3?', o: ['7','y','−3','y−3'], a: 0, e: 'Coefficient is the numeric multiplier of the variable.' },
    { q: 'Like terms among 3x², 4x, −5x², 2y are:', o: ['3x² and 4x','3x² and −5x²','4x and 2y','−5x² and 2y'], a: 1, e: 'Like terms have the same variable and exponent.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'Simplify 2x + 3 + 4x − 5. Coefficient of x = ?', n: 6, t: 0, e: '2x+4x = 6x; constants 3−5 = −2.' },
    { q: 'Distribute 3(2x − 4). The constant term is:', o: ['−12','−4','+4','+12'], a: 0, e: '3·(−4) = −12.' },
    { q: 'For a beam moment M = wL²/8 with w = 5, L = 4: M = ?', n: 10, t: 0, e: '5·16/8 = 10.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'A reaction R_A = (wL/2) + P/2 with w=4, L=6, P=20: R_A = ?', n: 22, t: 0, e: '12 + 10 = 22.' },
    { q: 'Stress σ = P/A + Mc/I has how many terms?', n: 2, t: 0, e: 'Two: P/A and Mc/I (sum).' },
    { q: 'Doubling x in 5x doubles the result. This holds because of:', o: ['Distributive property','Linearity (proportionality)','Order of operations','Pythagoras'], a: 1, e: 'The expression is linear in x.' },
  ]},
]);

E('chapter-2-linear-equations-one-variable', 'Chapter 2 — Linear Equations (One Variable)', 'Part 1', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Solve 2x + 5 = 13. x = ?', n: 4, t: 0, e: '2x = 8 → x = 4.' },
    { q: 'Solve 3(x − 2) = 9. x = ?', n: 5, t: 0, e: 'x − 2 = 3 → x = 5.' },
    { q: 'Solve x/4 = 7. x = ?', n: 28, t: 0, e: 'Multiply both sides by 4.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'Solve 5x − 3 = 2x + 9. x = ?', n: 4, t: 0, e: '3x = 12 → x = 4.' },
    { q: 'Solve −2(x + 1) = 6. x = ?', n: -4, t: 0, e: 'x + 1 = −3 → x = −4.' },
    { q: 'Solve (x − 1)/2 = (x + 1)/3. x = ?', n: 5, t: 0, e: '3(x−1) = 2(x+1) → 3x−3 = 2x+2 → x = 5.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'Beam length L solves 200 = 50·L. L = ?', n: 4, t: 0, e: 'L = 200/50 = 4 m.' },
    { q: 'Reaction R: ΣM_A = 0 → R·6 − 30·3 = 0. R = ?', n: 15, t: 0, e: 'R = 90/6 = 15.' },
    { q: 'A linear equation in 1 unknown has:', o: ['No solution','Exactly one solution (typically)','Infinite solutions','Two solutions'], a: 1, e: 'Generally one unique solution.' },
  ]},
]);

E('chapter-3-rearranging-formulas', 'Chapter 3 — Rearranging Formulas', 'Part 1', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Solve A = πr² for r. r = ?', o: ['A/π','√(A/π)','πA','A²/π'], a: 1, e: 'Divide by π then square-root.' },
    { q: 'F = ma → a = ?', o: ['F·m','F/m','m/F','F+m'], a: 1, e: 'Divide by m.' },
    { q: 'σ = P/A → A = ?', o: ['σ·P','P/σ','σ/P','P−σ'], a: 1, e: 'Cross-multiply.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'V = (1/3)π r²h → h = ?', o: ['3V/(πr²)','V/(3πr²)','V·r²/3','πr²/3V'], a: 0, e: 'Multiply by 3, divide by πr².' },
    { q: 'σ = Mc/I → I = ?', o: ['σM/c','Mc/σ','σc/M','M/(σc)'], a: 1, e: 'Cross-multiply: I = Mc/σ.' },
    { q: 'For δ = PL/(AE), solving for A gives:', o: ['PL/(δE)','δE/(PL)','P/(δLE)','PLE/δ'], a: 0, e: 'Cross-multiply and isolate A.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'Rearranging y = mx + b for x: x = ?', o: ['(y−b)/m','y/m − b','m(y−b)','(y+b)/m'], a: 0, e: 'Subtract b, divide by m.' },
    { q: 'A formula must keep:', o: ['Same units','Same numeric value only','Whole numbers','Always positive results'], a: 0, e: 'Units must remain consistent through any rearrangement.' },
    { q: 'wL²/8 = M → L = ?', o: ['√(8M/w)','8M/w','M/(8w)','(M·w)/8'], a: 0, e: 'L² = 8M/w → L = √(8M/w).' },
  ]},
]);

E('chapter-4-units-and-dimensional-analysis', 'Chapter 4 — Units and Dimensional Analysis', 'Part 1', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Convert 1500 mm to m.', n: 1.5, t: 0, e: '1500 / 1000.' },
    { q: '1 kN = how many N?', n: 1000, t: 0, e: 'Kilo = 1000.' },
    { q: '1 MPa = how many kPa?', n: 1000, t: 0, e: 'Mega/kilo factor = 1000.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'Force has units of:', o: ['kg','N = kg·m/s²','m/s','Pa'], a: 1, e: 'F = ma → kg·m/s² = newton.' },
    { q: 'Stress has units of:', o: ['N','Pa = N/m²','N·m','m²'], a: 1, e: 'Stress = force per area.' },
    { q: 'Convert 25 kN/m to N/m.', n: 25000, t: 0, e: 'Multiply by 1000.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'σ = P/A with P = 50 kN, A = 1000 mm². σ in MPa = ?', n: 50, t: 0.1, e: '50 kN / 1000 mm² = 50 N/mm² = 50 MPa.' },
    { q: 'In dimensional analysis, both sides of an equation must have:', o: ['Same numeric value','Same units (dimensions)','Same number of variables','Same sign'], a: 1, e: 'Units must match.' },
    { q: 'A density of 2400 kg/m³ × (g = 9.81 m/s²) gives:', o: ['Pressure','Weight density (N/m³)','Force','Volume'], a: 1, e: 'kg/m³ × m/s² = N/m³ (weight density).' },
  ]},
]);

E('chapter-5-systems-of-equations', 'Chapter 5 — Systems of Equations', 'Part 1', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Solve x + y = 10, x − y = 4. x = ?', n: 7, t: 0, e: 'Add: 2x = 14 → x = 7.' },
    { q: 'For the same system, y = ?', n: 3, t: 0, e: 'y = 10 − 7 = 3.' },
    { q: 'A system with two parallel non-identical lines has:', o: ['One solution','Infinite solutions','No solution','Two solutions'], a: 2, e: 'Parallel lines never meet.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'Solve 2x + 3y = 12, x = 3. y = ?', n: 2, t: 0, e: '6 + 3y = 12 → y = 2.' },
    { q: 'Solve 3x + 2y = 16 and x − y = 2. x = ?', n: 4, t: 0, e: 'x = y + 2; 3(y+2) + 2y = 16 → 5y = 10 → y = 2 → x = 4.' },
    { q: 'For the same system, y = ?', n: 2, t: 0, e: 'See above.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'A 2-support beam with 2 unknown reactions and 2 equilibrium equations is:', o: ['Indeterminate','Determinate','Mechanism','Unstable'], a: 1, e: 'Equations match unknowns.' },
    { q: 'ΣF_y = 0: R_A + R_B = 60. ΣM_A = 0: 6 R_B = 60·2. R_B = ?', n: 20, t: 0, e: 'R_B = 120/6 = 20.' },
    { q: 'For the same beam, R_A = ?', n: 40, t: 0, e: 'R_A = 60 − 20 = 40.' },
  ]},
]);

E('chapter-6-quadratic-equations', 'Chapter 6 — Quadratic Equations', 'Part 1', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Solve x² = 49. Positive root x = ?', n: 7, t: 0, e: '√49 = 7.' },
    { q: 'Solve x² − 5x + 6 = 0. Smaller root = ?', n: 2, t: 0, e: '(x−2)(x−3) = 0.' },
    { q: 'For the same equation, larger root = ?', n: 3, t: 0, e: 'See above.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'Discriminant of ax²+bx+c is:', o: ['b² − 4ac','b² + 4ac','2a','−b/(2a)'], a: 0, e: 'b² − 4ac.' },
    { q: 'If discriminant < 0, real roots:', o: ['Two distinct','One repeated','None','Three'], a: 2, e: 'Negative discriminant → no real roots.' },
    { q: 'Solve x² + 4x − 5 = 0 (positive root).', n: 1, t: 0, e: '(x+5)(x−1) = 0.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'Bending stress σ varies as Mc/I. Doubling I:', o: ['Doubles σ','Halves σ','Quarters σ','No effect'], a: 1, e: 'σ inversely proportional to I.' },
    { q: 'A quadratic moment curve M(x) = wx(L−x)/2 reaches max at x = ?', o: ['0','L/4','L/2','L'], a: 2, e: 'Symmetric parabola peaks at midspan.' },
    { q: 'For w = 4, L = 8, max M = wL²/8 = ?', n: 32, t: 0, e: '4·64/8 = 32.' },
  ]},
]);

E('chapter-7-inequalities', 'Chapter 7 — Inequalities', 'Part 1', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'Solve 2x + 4 > 10.', o: ['x > 3','x > 7','x < 3','x ≥ 3'], a: 0, e: '2x > 6 → x > 3.' },
    { q: 'Solve −3x ≥ 9.', o: ['x ≥ −3','x ≤ −3','x ≥ 3','x ≤ 3'], a: 1, e: 'Divide by negative flips inequality.' },
    { q: 'A code limit |δ| ≤ L/360 with L = 360 gives δ ≤ ?', n: 1, t: 0, e: '360/360 = 1 (unit length).' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'Solve 3 ≤ 2x − 1 ≤ 9.', o: ['1 ≤ x ≤ 5','2 ≤ x ≤ 5','1 ≤ x ≤ 4','2 ≤ x ≤ 4'], a: 1, e: 'Add 1: 4 ≤ 2x ≤ 10 → 2 ≤ x ≤ 5.' },
    { q: 'A serviceability check: actual deflection 18 mm, limit 20 mm. Status:', o: ['Fails','Passes','Indeterminate','Fails marginally'], a: 1, e: '18 ≤ 20 → passes.' },
    { q: 'A demand-to-capacity ratio D/C ≤ 1.0 means:', o: ['Element fails','Element acceptable','Overdesigned','Indeterminate'], a: 1, e: 'D/C ≤ 1 indicates capacity sufficient.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'D/C = 1.05 implies:', o: ['Pass','Fail (overstressed)','Marginal','OK with safety factor'], a: 1, e: '>1 means demand exceeds capacity.' },
    { q: 'Multiplying both sides of an inequality by −2:', o: ['Keeps direction','Doubles direction','Reverses direction','Removes inequality'], a: 2, e: 'Negative factor flips ≤ to ≥.' },
    { q: 'For span L = 4800 mm, drift limit L/250 = ?', n: 19.2, t: 0.1, e: '4800/250 = 19.2 mm.' },
  ]},
]);

E('chapter-8-exponents-and-powers', 'Chapter 8 — Exponents and Powers', 'Part 1', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'x² · x³ = x^?', n: 5, t: 0, e: 'Add exponents.' },
    { q: 'x⁰ = ?', n: 1, t: 0, e: 'Any nonzero number to power 0 is 1.' },
    { q: 'x⁻² = ?', o: ['−x²','1/x²','−1/x²','x²'], a: 1, e: 'Negative exponent means reciprocal.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: '(2x²)³ = ?', o: ['8x⁶','6x⁵','2x⁶','8x⁵'], a: 0, e: '2³ = 8; (x²)³ = x⁶.' },
    { q: 'I = b·h³/12. If h doubles, I changes by factor:', n: 8, t: 0, e: '2³ = 8.' },
    { q: 'PL³/(48EI). If L is halved, deflection becomes:', o: ['Half','1/4','1/8','1/16'], a: 2, e: '(½)³ = 1/8.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'x^(1/2) means:', o: ['Square','Square root','Reciprocal','Halve'], a: 1, e: 'Fractional exponent 1/2 = √.' },
    { q: 'Steel E = 2×10¹¹ Pa. As GPa:', n: 200, t: 0, e: '2×10¹¹ Pa = 200 GPa.' },
    { q: 'I_section ∝ h³ implies sensitivity to depth is:', o: ['Linear','Quadratic','Cubic','Constant'], a: 2, e: 'Cubic — small depth increases yield large I.' },
  ]},
]);

E('chapter-9-introduction-to-functions', 'Chapter 9 — Introduction to Functions', 'Part 1', [
  { id: 'A', title: 'Set A', questions: [
    { q: 'For f(x) = 2x + 3, f(4) = ?', n: 11, t: 0, e: '2·4+3.' },
    { q: 'A function maps each input to:', o: ['Many outputs','Exactly one output','No output','Two outputs'], a: 1, e: 'Definition of function.' },
    { q: 'Domain of f(x) = √x is:', o: ['All reals','x ≥ 0','x > 0','x ≤ 0'], a: 1, e: 'Square root requires non-negative input.' },
  ]},
  { id: 'B', title: 'Set B', questions: [
    { q: 'Slope of y = 3x + 2 is:', n: 3, t: 0, e: 'Coefficient of x.' },
    { q: 'A vertical line test failure means a relation is:', o: ['Function','Not a function','Linear','Quadratic'], a: 1, e: 'Crossing twice = multiple outputs per input.' },
    { q: 'For f(x) = x², f(−3) = ?', n: 9, t: 0, e: 'Squaring negative gives positive.' },
  ]},
  { id: 'C', title: 'Set C', questions: [
    { q: 'M(x) = wx(L−x)/2 is a function of:', o: ['Position only (given w,L)','Time','Material','Section'], a: 0, e: 'Internal moment depends on x along span.' },
    { q: 'σ(M) = Mc/I is a function of:', o: ['M','c','I','All of the above'], a: 3, e: 'Multivariable; primary input typically M.' },
    { q: 'Deflection δ(L) = 5wL⁴/(384EI) — δ is sensitive to:', o: ['L (4th power)','E (linear)','w (linear)','c'], a: 0, e: 'L⁴ dominates sensitivity.' },
  ]},
]);

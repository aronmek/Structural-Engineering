/* Part 1 — Algebra Foundations (Chapters 1–6)
   3 sets x 3 questions per chapter = 9 questions per chapter.
   Archive structure: Ch1 (Formulas-Variables-Equations-Rearranging), Ch2 (Units),
   Ch3 (Systems), Ch4 (Quadratics), Ch5 (Inequalities+DC), Ch6 (Functions+Power).
*/

E('chapter-1-formulas-are-sentences-variables-equations-and-rearranging', 'Chapter 1 — Formulas Are Sentences: Variables, Equations, and Rearranging', 'Part 1', [
  { id: 'A', title: 'Set A — Reading and evaluating formulas', questions: [
    { q: 'Evaluate sigma = P/A for P = 450 kN, A = 0.09 m2. Stress = ? kN/m2', n: 5000, t: 0,
      e: '450 / 0.09 = 5000 kN/m2. Dividing load by area gives stress.' },
    { q: 'Rearrange sigma = P/A to solve for P. P = ?', o: ['sigma/A', 'sigma x A', 'A/sigma', 'sigma + A'], a: 1,
      e: 'Multiply both sides by A: sigma x A = P. Keep the balance and undo what is in the way.' },
    { q: 'Rearrange sigma = P/A to solve for A. A = ?', o: ['sigma x P', 'P/sigma', 'sigma/P', 'P + sigma'], a: 1,
      e: 'Divide both sides by sigma: A = P/sigma.' },
  ]},
  { id: 'B', title: 'Set B — Solving for unknowns', questions: [
    { q: 'Rearrange M = wL2/8 for L. L = ?', o: ['sqrt(8M/w)', '8M/w', 'M/(8w)', '(M x w)/8'], a: 0,
      e: 'L2 = 8M/w, so L = sqrt(8M/w). Undo the division, then undo the square.' },
    { q: 'Find L when M = 100 kN m and w = 12.5 kN/m using L = sqrt(8M/w). L = ? m', n: 8, t: 0,
      e: '8 x 100 / 12.5 = 64. sqrt(64) = 8 m.' },
    { q: 'Rearrange R = wL/2 for w. w = ?', o: ['2R/L', 'RL/2', 'R/(2L)', '2L/R'], a: 0,
      e: 'Multiply both sides by 2: 2R = wL. Divide by L: w = 2R/L.' },
  ]},
  { id: 'C', title: 'Set C — Formula rearranging in context', questions: [
    { q: 'Layout formula: L = ns + 2e. Rearrange for s. s = ?', o: ['(L - 2e)/n', 'L - 2en', 'n/(L - 2e)', 'L/n + 2e'], a: 0,
      e: 'Subtract 2e from both sides: L - 2e = ns. Divide by n: s = (L - 2e)/n.' },
    { q: 'For L = 32 m, n = 5, e = 1 m in s = (L - 2e)/n. s = ? m', n: 6, t: 0,
      e: '(32 - 2) / 5 = 30 / 5 = 6 m.' },
    { q: 'A column with A = 0.09 m2 and sigma_allow = 5000 kN/m2. Max load P = ? kN', n: 450, t: 0,
      e: 'P = sigma x A = 5000 x 0.09 = 450 kN.' },
  ]},
]);

E('chapter-2-numbers-need-labels-units-and-dimensional-analysis', 'Chapter 2 — Numbers Need Labels: Units and Dimensional Analysis', 'Part 1', [
  { id: 'A', title: 'Set A — Unit conversions', questions: [
    { q: 'Convert 1500 mm to m.', n: 1.5, t: 0,
      e: '1500 / 1000 = 1.5 m.' },
    { q: '1 kN = how many N?', n: 1000, t: 0,
      e: 'Kilo = 1000.' },
    { q: '1 MPa = how many kPa?', n: 1000, t: 0,
      e: 'Mega/kilo factor = 1000.' },
  ]},
  { id: 'B', title: 'Set B — Dimensional consistency', questions: [
    { q: 'Concrete density 2500 kg/m3. Unit weight in kN/m3 (multiply by g = 9.81 m/s2, divide by 1000) = ?', n: 24.525, t: 0.1,
      e: '2500 x 9.81 / 1000 = 24.525 kN/m3. Always convert density to unit weight for load calcs.' },
    { q: 'Verify sigma = P/A: P in kN, A in m2. Units of sigma = ?', o: ['kN', 'kN/m2 = kPa', 'm2', 'kN x m2'], a: 1,
      e: 'kN / m2 = kPa. Units confirm the formula is correct.' },
    { q: 'Slab thickness 200 mm = 0.2 m. Unit weight 25 kN/m3. Slab self-weight = ? kPa', n: 5.0, t: 0.05,
      e: '25 kN/m3 x 0.2 m = 5.0 kN/m2 = 5.0 kPa. Units: kN/m3 x m = kN/m2.' },
  ]},
  { id: 'C', title: 'Set C — Engineering unit problems', questions: [
    { q: 'Convert 250 MPa to kPa.', n: 250000, t: 0,
      e: '250 MPa x 1000 = 250,000 kPa.' },
    { q: 'A moment M = wL2/8 with w in kN/m and L in m. Units of M = ?', o: ['kN', 'kN/m', 'kN m', 'kPa'], a: 2,
      e: 'kN/m x m2 = kN m. Units check confirms the formula structure.' },
    { q: 'Convert 0.045 m2 to mm2.', n: 45000, t: 0,
      e: '0.045 m2 x (1000 mm/m)2 = 0.045 x 1,000,000 = 45,000 mm2.' },
  ]},
]);

E('chapter-3-two-unknowns-two-conditions-systems-of-equations', 'Chapter 3 — Two Unknowns, Two Conditions: Systems of Equations', 'Part 1', [
  { id: 'A', title: 'Set A — Solving two-equation systems', questions: [
    { q: 'Solve x + y = 10, x - y = 4. x = ?', n: 7, t: 0,
      e: 'Add the two equations: 2x = 14, so x = 7.' },
    { q: 'For the same system, y = ?', n: 3, t: 0,
      e: 'y = 10 - 7 = 3.' },
    { q: 'A system with two parallel non-identical lines has:', o: [
        'One solution', 'Infinite solutions', 'No solution', 'Two solutions'], a: 2,
      e: 'Parallel lines never meet, so no pair satisfies both equations.' },
  ]},
  { id: 'B', title: 'Set B — Beam reactions', questions: [
    { q: 'Beam reactions: RA + RB = 60 kN (1). Taking moments about A: 6 RB = 60 x 2 = 120. RB = ? kN', n: 20, t: 0,
      e: 'From moment equation: RB = 120 / 6 = 20 kN.' },
    { q: 'For the same beam, RA = ? kN', n: 40, t: 0,
      e: 'RA = 60 - 20 = 40 kN.' },
    { q: 'Why do two supports need two equilibrium equations (not just one force balance)?', o: [
        'More equations means more accuracy', 'One force equation with two unknowns has infinitely many solutions', 'To cancel units', 'The second equation is optional'], a: 1,
      e: 'One equation, two unknowns: infinitely many pairs satisfy RA + RB = 60. The rotation equation gives the unique split.' },
  ]},
  { id: 'C', title: 'Set C — Two-load beam', questions: [
    { q: 'Span 8 m, load P = 48 kN at 3 m from A. RB = ? kN (moment about A)', n: 18, t: 0,
      e: 'RB x 8 = 48 x 3 = 144. RB = 144/8 = 18 kN.' },
    { q: 'For the same beam, RA = ? kN', n: 30, t: 0,
      e: 'RA = 48 - 18 = 30 kN.' },
    { q: 'Two loads on span 8 m: P1 = 30 kN at 2 m, P2 = 20 kN at 6 m. RB = ? kN', n: 22.5, t: 0.1,
      e: 'RB x 8 = 30 x 2 + 20 x 6 = 60 + 120 = 180. RB = 180/8 = 22.5 kN.' },
  ]},
]);

E('chapter-4-when-span-is-squared-quadratic-equations', 'Chapter 4 — When Span Is Squared: Quadratic Equations', 'Part 1', [
  { id: 'A', title: 'Set A — Solving pure quadratics (no L term)', questions: [
    { q: 'M = wL2/8 = 120 kN m, w = 15 kN/m. L = ? m', n: 8, t: 0,
      e: 'L2 = 8 x 120 / 15 = 64. L = sqrt(64) = 8 m.' },
    { q: 'Solve x2 = 49. Positive root x = ?', n: 7, t: 0,
      e: 'sqrt(49) = 7.' },
    { q: 'Discriminant of ax2 + bx + c = 0 is:', o: ['b2 - 4ac', 'b2 + 4ac', '2a', '-b/(2a)'], a: 0,
      e: 'b2 - 4ac. If negative, no real solutions.' },
  ]},
  { id: 'B', title: 'Set B — Quadratic formula', questions: [
    { q: 'Solve x2 + 4x - 5 = 0 (positive root). x = ?', n: 1, t: 0,
      e: '(x+5)(x-1) = 0. Positive root is x = 1.' },
    { q: 'Solve 2L2 - 3L - 20 = 0 (positive root). L = ?', n: 4, t: 0,
      e: 'Quadratic formula: L = (3 +/- sqrt(9 + 160)) / 4 = (3 +/- 13) / 4. Positive root: L = 4.' },
    { q: 'If discriminant < 0, real roots:', o: ['Two distinct', 'One repeated', 'None', 'Three'], a: 2,
      e: 'Negative discriminant means no real solutions - no span satisfies the conditions.' },
  ]},
  { id: 'C', title: 'Set C — Span-capacity engineering', questions: [
    { q: 'Beam w = 18 kN/m, M_allow = 144 kN m. Max span from L = sqrt(8 x M/w) = ? m', n: 8, t: 0,
      e: 'L = sqrt(8 x 144 / 18) = sqrt(64) = 8 m.' },
    { q: 'Treating wL2/8 = M as if L appeared to the first power gives L = 8M/w. For w=15, M=120: wrong L = ?', n: 64, t: 0,
      e: '8 x 120 / 15 = 64. That is 64 m, not 8 m. The error is ignoring the L2.' },
    { q: 'A quadratic M(x) = wx(L-x)/2 reaches maximum at x = ?', o: ['0', 'L/4', 'L/2', 'L'], a: 2,
      e: 'Symmetric parabola peaks at midspan x = L/2.' },
  ]},
]);

E('chapter-5-checking-a-design-inequalities-and-demandcapacity-ratios', 'Chapter 5 — Checking a Design: Inequalities and Demand/Capacity Ratios', 'Part 1', [
  { id: 'A', title: 'Set A — Inequality rules', questions: [
    { q: 'Solve 2x + 4 > 10.', o: ['x > 3', 'x > 7', 'x < 3', 'x >= 3'], a: 0,
      e: '2x > 6, x > 3.' },
    { q: 'Solve -3x >= 9.', o: ['x >= -3', 'x <= -3', 'x >= 3', 'x <= 3'], a: 1,
      e: 'Divide by negative: flip the inequality. x <= -3.' },
    { q: 'D/C = 1.05 implies:', o: ['Pass', 'Fail - demand exceeds capacity', 'Marginal', 'OK with safety factor'], a: 1,
      e: 'D/C > 1.0 means demand exceeds capacity - the element fails.' },
  ]},
  { id: 'B', title: 'Set B — D/C ratios', questions: [
    { q: 'Moment demand Md = 120 kN m, capacity Mc = 120 kN m. D/C ratio = ?', n: 1.0, t: 0,
      e: '120 / 120 = 1.0. The element is exactly at its limit.' },
    { q: 'Shear demand Vd = 60 kN, capacity Vc = 75 kN. D/C ratio = ?', n: 0.80, t: 0.01,
      e: '60 / 75 = 0.80. Passes.' },
    { q: 'Beam: Md = 95 kN m (Mc = 110) and Vd = 45 kN (Vc = 50). Which check governs?', o: [
        'Moment (D/C = 0.864)', 'Shear (D/C = 0.900)', 'Neither - both pass', 'Both equally'], a: 1,
      e: 'Shear D/C = 0.90 is higher than moment D/C = 0.864. Shear governs.' },
  ]},
  { id: 'C', title: 'Set C — Multiple checks', questions: [
    { q: 'A beam passes moment check (D/C = 0.85) but fails deflection check (D/C = 1.3). The design:', o: [
        'Passes (moment is more important)', 'Fails (deflection governs)', 'Needs more analysis', 'Passes with a factor of safety'], a: 1,
      e: 'Every check must pass independently. D/C > 1 for deflection means the design fails.' },
    { q: 'Solve 3x - 9 >= 0. Minimum value of x = ?', n: 3, t: 0,
      e: '3x >= 9, x >= 3. Minimum is x = 3.' },
    { q: 'A drift limit of L/250 with story height L = 4800 mm. Limit = ? mm', n: 19.2, t: 0.1,
      e: '4800 / 250 = 19.2 mm.' },
  ]},
]);

E('chapter-6-how-one-quantity-drives-another-functions-and-power-relationships', 'Chapter 6 — How One Quantity Drives Another: Functions and Power Relationships', 'Part 1', [
  { id: 'A', title: 'Set A — Scaling rules for power functions', questions: [
    { q: 'Moment M = wL2/8. If L doubles (ratio r = 2), M changes by factor:', n: 4, t: 0,
      e: 'L appears squared. 2 squared = 4. M quadruples.' },
    { q: 'Deflection d = 5wL4 / (384EI). If L increases by factor 1.5, d changes by factor:', n: 5.0625, t: 0.1,
      e: '1.5 to the power 4 = 5.0625. A 50% span increase gives 5x the deflection.' },
    { q: 'Deflection at L = 5 m is 4 mm. Find deflection at L = 8 m (d scales as L4):', n: 26.2, t: 0.5,
      e: 'r = 8/5 = 1.6. 1.6^4 = 6.5536. 4 x 6.5536 = 26.2 mm.' },
  ]},
  { id: 'B', title: 'Set B — Functions and sensitivity', questions: [
    { q: 'For f(x) = 2x + 3, f(4) = ?', n: 11, t: 0,
      e: '2 x 4 + 3 = 11.' },
    { q: 'A function maps each input to:', o: ['Many outputs', 'Exactly one output', 'No output', 'Two outputs'], a: 1,
      e: 'Definition of function: one output per input.' },
    { q: 'I_section proportional to h3. If depth doubles, I changes by factor:', n: 8, t: 0,
      e: '2 cubed = 8. Small depth increases yield large I gains.' },
  ]},
  { id: 'C', title: 'Set C — Engineering scaling', questions: [
    { q: 'Moment M proportional to w (first power). If w doubles, M changes by factor:', n: 2, t: 0,
      e: 'Linear relationship: double the input, double the output.' },
    { q: 'Deflection at L = 6 m is 8 mm. Find deflection at L = 9 m (d scales as L4):', n: 40.5, t: 1.0,
      e: 'r = 9/6 = 1.5. 1.5^4 = 5.0625. 8 x 5.0625 = 40.5 mm.' },
    { q: 'Steel E = 2 x 10^11 Pa. Concrete Ec = 3 x 10^10 Pa. Steel is how many times stiffer?', n: 6.67, t: 0.1,
      e: '2 x 10^11 / 3 x 10^10 = 20/3 = 6.67 times stiffer.' },
  ]},
]);

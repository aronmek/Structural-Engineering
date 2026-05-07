/* Part 0 — Engineering Number Sense (Chapters A1–A4)
   3 sets × 3 questions per chapter = 9 questions per chapter.
*/

E('chapter-a1-direction-balance-and-signed-numbers', 'Chapter A1 — Direction, Balance, and Signed Numbers', 'Part 0', [
  { id: 'A', title: 'Set A — Signed force balance', questions: [
    { q: 'If up is positive, a 10 kN downward point load is written as:', o: ['+10 kN', '-10 kN', '0 kN', '10 kN upward'], a: 1,
      e: 'The sign records direction. Down is opposite the chosen positive direction, so the load is -10 kN.' },
    { q: 'Support forces +6 kN and +4 kN act with a downward load -10 kN. What is the signed sum?', n: 0, t: 0,
      e: '+6 + 4 - 10 = 0 kN, so the vertical forces balance.' },
    { q: 'If total support is +9 kN and the load is -10 kN, the signed sum means:', o: [
        'There is 1 kN net upward force', 'There is 1 kN net downward force', 'The beam is balanced', 'The force magnitude disappeared'], a: 1,
      e: '+9 - 10 = -1 kN. The negative sign says the leftover force is downward.' },
  ]},
  { id: 'B', title: 'Set B — Magnitude and direction', questions: [
    { q: 'What is |-18 kN|?', n: 18, t: 0,
      e: 'Absolute value removes direction and keeps size. The magnitude is 18 kN.' },
    { q: 'Which statement is balanced?', o: [
        '+5 - 7 = -2 kN', '+8 - 8 = 0 kN', '+12 + 3 = 15 kN', '-4 - 4 = -8 kN'], a: 1,
      e: 'A signed vertical sum of zero means nothing is left over.' },
    { q: 'Why is 10 + 6 + 4 not enough to check a beam with one downward 10 kN load and two upward supports?', o: [
        'It uses too many numbers', 'It loses the up/down directions', 'It should use meters', 'It proves the beam is balanced'], a: 1,
      e: 'Magnitude-only addition counts size but cannot show whether opposite directions cancel.' },
  ]},
  { id: 'C', title: 'Set C — Engineering checks', questions: [
    { q: 'A beam has supports +7 kN and +5 kN with a load -12 kN. Signed sum = ?', n: 0, t: 0,
      e: '+7 + 5 - 12 = 0 kN, so it balances.' },
    { q: 'A beam has supports +6 kN and +5 kN with a load -12 kN. Signed sum = ?', n: -1, t: 0,
      e: '+6 + 5 - 12 = -1 kN, leaving 1 kN downward.' },
    { q: 'A support reaction shown as +14 kN means:', o: [
        '14 kN downward', '14 kN upward using the chosen convention', 'No force', '14 kN of bending moment'], a: 1,
      e: 'The positive sign points in the chosen positive direction, which this chapter takes as upward.' },
  ]},
]);

E('chapter-a2-scaling-quantities-multiplication-division-fractions-and-percentages', 'Chapter A2 — Scaling Quantities: Multiplication, Division, Fractions, and Percentages', 'Part 0', [
  { id: 'A', title: 'Set A — Per means multiply', questions: [
    { q: 'Floor area load is 3.5 kPa and beam tributary width is 4 m. Line load = ? kN/m', n: 14, t: 0,
      e: '3.5 kN/m2 x 4 m = 14 kN/m. "Per square meter" means multiply by the area dimension.' },
    { q: 'A load of 60 kN is distributed over 20 m2. Area load = ? kPa', n: 3, t: 0,
      e: '60 / 20 = 3 kPa. Division reverses multiplication to find the rate.' },
    { q: 'Line load 25 kN/m along a beam 8 m long. Total load = ? kN', n: 200, t: 0,
      e: '25 kN/m x 8 m = 200 kN. Rate x length = total.' },
  ]},
  { id: 'B', title: 'Set B — Fractions and percentages', questions: [
    { q: '3/8 + 1/4 (give as decimal)', n: 0.625, t: 0.001,
      e: 'Common denominator 8: 3/8 + 2/8 = 5/8 = 0.625.' },
    { q: '5/6 / (10/3) (give as decimal)', n: 0.25, t: 0.001,
      e: '5/6 x 3/10 = 15/60 = 1/4 = 0.25.' },
    { q: 'Live load of 3.5 kPa with a 20% code reduction. Reduced live load = ? kPa', n: 2.8, t: 0.01,
      e: '3.5 x (1 - 0.20) = 3.5 x 0.80 = 2.8 kPa.' },
  ]},
  { id: 'C', title: 'Set C — Engineering load calculation', questions: [
    { q: '(-4)(-6) = ?', n: 24, t: 0,
      e: 'Same signs = positive. Flipping direction twice returns to the original direction (from A1).' },
    { q: 'DL = 4.5 kPa, LL = 2.5 kPa, tributary width = 3.5 m. Line load = ? kN/m', n: 24.5, t: 0.1,
      e: '(4.5 + 2.5) x 3.5 = 7.0 x 3.5 = 24.5 kN/m.' },
    { q: 'A load factor of 140% applied to 30 kN/m gives a factored load of ? kN/m', n: 42, t: 0,
      e: '140% = 1.40 as decimal. 30 x 1.40 = 42 kN/m.' },
  ]},
]);

E('chapter-a3-powers-roots-and-reading-a-formula-correctly', 'Chapter A3 — Powers, Roots, and Reading a Formula Correctly', 'Part 0', [
  { id: 'A', title: 'Set A — Evaluating M = wL2/8', questions: [
    { q: 'Compute M = wL2/8 for w = 12 kN/m, L = 6 m. M = ? kN m', n: 54, t: 0.1,
      e: 'L2 = 36. 12 x 36 = 432. 432 / 8 = 54 kN m. NOT (12 x 6)2 / 8 = 648.' },
    { q: 'In M = wL2/8, which operation comes first?', o: [
        'Multiply w x L', 'Square L (compute L2)', 'Divide by 8', 'Add w + L'], a: 1,
      e: 'PEMDAS: exponents come before multiplication. Square L first, then multiply by w, then divide by 8.' },
    { q: 'Compute M = wL2/8 for w = 15 kN/m, L = 6 m. M = ? kN m', n: 67.5, t: 0.1,
      e: 'L2 = 36. 15 x 36 = 540. 540 / 8 = 67.5 kN m.' },
  ]},
  { id: 'B', title: 'Set B — PEMDAS and power rules', questions: [
    { q: '2 + 3 x 4 = ?', n: 14, t: 0,
      e: 'Multiplication before addition: 3 x 4 = 12 first. Then 2 + 12 = 14.' },
    { q: 'x5 times x3 = x to the power n. n = ?', n: 8, t: 0,
      e: 'Multiply same-base powers by adding exponents: 5 + 3 = 8.' },
    { q: '(-3)2 = ?', n: 9, t: 0,
      e: 'Parentheses first: the base is -3. (-3) x (-3) = +9.' },
  ]},
  { id: 'C', title: 'Set C — Scientific notation and applications', questions: [
    { q: 'Steel elastic modulus E = 200 GPa = 2 x 10 to the power n Pa. n = ?', n: 11, t: 0,
      e: '200 x 10^9 = 2 x 10^11 Pa.' },
    { q: 'Square column 350 mm x 350 mm. Cross-sectional area = ? mm2', n: 122500, t: 0,
      e: '350 x 350 = 122,500 mm2.' },
    { q: 'The value -32 (without parentheses) equals:', o: ['+9', '-9', '6', '-6'], a: 1,
      e: 'Without parentheses, the exponent applies to 3 only: -(3 squared) = -9. Compare: (-3)2 = +9.' },
  ]},
]);

E('chapter-a4-estimation-how-to-know-whether-an-answer-makes-sense', 'Chapter A4 — Estimation: How to Know Whether an Answer Makes Sense', 'Part 0', [
  { id: 'A', title: 'Set A — Rounding and significant figures', questions: [
    { q: 'Round 7.4836 to 3 significant figures.', n: 7.48, t: 0.001,
      e: 'The 4th sig fig is 3 (less than 5): round down. Answer: 7.48.' },
    { q: 'How many significant figures does 0.00420 have?', n: 3, t: 0,
      e: 'Leading zeros do not count; trailing zero after decimal does. The sig figs are 4, 2, 0 = 3.' },
    { q: 'A result from inputs accurate to 2 sig figs should be reported to:', o: [
        '6 decimal places', '4 significant figures', '2 significant figures', '1 decimal place'], a: 2,
      e: 'Report as many sig figs as the least precise input, which is 2 here.' },
  ]},
  { id: 'B', title: 'Set B — Order-of-magnitude estimation', questions: [
    { q: 'Estimate total dead load: 3 stories, 15 m x 12 m floor, 5 kPa per floor. Total = ? kN', n: 2700, t: 100,
      e: '5 x (15 x 12) x 3 = 5 x 180 x 3 = 2700 kN.' },
    { q: 'ETABS reports 4,850 kN. Your hand estimate is 4,900 kN. Difference about 1%. Action:', o: [
        'Reject the ETABS result', 'Accept - these agree within engineering tolerance', 'Re-run with finer mesh', 'Halve the load'], a: 1,
      e: '1% difference is within normal tolerance. Accept and proceed.' },
    { q: 'ETABS reports 48,500 kN but your hand estimate gives 4,850 kN. This suggests:', o: [
        'Acceptable variance', 'A factor-of-10 input or unit error in the model', 'Software rounding', 'Normal scatter'], a: 1,
      e: 'A factor of 10 discrepancy always indicates an error - misplaced decimal, wrong unit, or double-counted load.' },
  ]},
  { id: 'C', title: 'Set C — Sanity-checking results', questions: [
    { q: 'Compute M = wL2/8 for w = 22 kN/m, L = 8 m. M = ? kN m', n: 176, t: 1,
      e: '8 squared = 64. 22 x 64 = 1408. 1408 / 8 = 176 kN m.' },
    { q: 'A designer reports stress = 124.6748 MPa from inputs accurate to 3 sig figs. Best reporting:', o: [
        '124.6748 MPa', '124.7 MPa', '125 MPa', '130 MPa'], a: 2,
      e: '3 sig figs gives 125 MPa. The inputs do not justify 7-digit precision.' },
    { q: 'Rounding intermediate calculation steps repeatedly and trusting the final result exactly:', o: [
        'Improves accuracy by eliminating noise', 'Accumulates small errors and reduces accuracy', 'Has no effect', 'Is required by codes'], a: 1,
      e: 'Round at the end. Keep extra digits in intermediate steps to avoid cumulative bias.' },
  ]},
]);

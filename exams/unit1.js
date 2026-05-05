/* Unit 1 — Engineering Number Sense (Chapters 1–4)
   3 sets × 3 questions per chapter = 9 questions per chapter.
   Chapters draw on: Part 0 (A1–A7) and Part 1 (Ch4 units).
*/

E('chapter-1-direction-sign-and-balance-in-structures', 'Chapter 1 — Direction, Sign, and Balance in Structures', 'Unit 1', [
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
        'It uses too many numbers', 'It loses the up/down directions', 'It should use metres', 'It proves the beam is balanced'], a: 1,
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

E('chapter-2-scaling-how-size-changes-everything', 'Chapter 2 — Scaling: How Size Changes Everything', 'Unit 1', [
  { id: 'A', title: 'Set A — Multiplication, division, and scaling', questions: [
    { q: 'A rectangular pad is 4 m by 6 m. Area = ?', n: 24, t: 0,
      e: 'Area = length × width = 4 × 6.' },
    { q: 'A line load of 4 kN/m over 6 m. Total load = ?', n: 24, t: 0,
      e: 'Total = rate × length = 4 × 6.' },
    { q: '(-4)(-9) = ?', n: 36, t: 0,
      e: 'Same signs → positive.' },
  ]},
  { id: 'B', title: 'Set B — Fractions in engineering', questions: [
    { q: '2/5 + 1/4 (as decimal) = ?', n: 0.65, t: 0.01,
      e: 'LCD 20: 8/20 + 5/20 = 13/20 = 0.65.' },
    { q: '(5/6) ÷ (10/3) = ? (decimal)', n: 0.25, t: 0.01,
      e: '5/6 × 3/10 = 15/60 = 1/4 = 0.25.' },
    { q: 'A 12 m member is split into thirds. One third = ?', n: 4, t: 0,
      e: '12 / 3 = 4 m.' },
  ]},
  { id: 'C', title: 'Set C — Percentages and load factors', questions: [
    { q: 'Convert 7% to decimal.', n: 0.07, t: 0,
      e: 'Divide by 100: 7/100 = 0.07.' },
    { q: 'Live load reduction of 15% on LL = 200 kN gives reduced LL = ?', n: 170, t: 0,
      e: '200 × 0.85 = 170 kN.' },
    { q: 'Load combo 1.2D + 1.6L: factored load with D = 4 kPa, L = 2 kPa = ?', n: 8.0, t: 0.1,
      e: '1.2·4 + 1.6·2 = 4.8 + 3.2 = 8.0 kPa.' },
  ]},
]);

E('chapter-3-powers-and-roots-in-structural-formulas', 'Chapter 3 — Powers and Roots in Structural Formulas', 'Unit 1', [
  { id: 'A', title: 'Set A — Powers and roots', questions: [
    { q: '5³ = ?', n: 125, t: 0, e: '5×5×5 = 125.' },
    { q: 'Compute √144.', n: 12, t: 0, e: '12² = 144.' },
    { q: 'Compute I = bh³/12 for b = 0.3 m, h = 0.6 m. I (m⁴) = ?', n: 0.0054, t: 0.0001,
      e: '0.3 × 0.216 / 12 = 0.0054 m⁴.' },
  ]},
  { id: 'B', title: 'Set B — Power rules and formulas', questions: [
    { q: 'Simplify x⁵ · x³ (give exponent only).', n: 8, t: 0,
      e: 'Add exponents: 5+3 = 8 → x⁸.' },
    { q: '2 + 3 × 4 = ?', n: 14, t: 0,
      e: 'Multiply first: 3×4=12, then 2+12=14.' },
    { q: '3² + 4 × 5 = ?', n: 29, t: 0,
      e: 'Exponent first (9), then multiply (20), then add: 29.' },
  ]},
  { id: 'C', title: 'Set C — Engineering formula evaluation', questions: [
    { q: 'Compute wL²/8 for w = 5, L = 6. Result = ?', n: 22.5, t: 0.1,
      e: '5 × 36 / 8 = 180/8 = 22.5.' },
    { q: 'Steel modulus is E = 200 GPa. As Pa, E = 2 × 10ⁿ Pa. n = ?', n: 11, t: 0,
      e: '200×10⁹ = 2×10¹¹ Pa.' },
    { q: 'Which is the safest way to type a*L^2/8 without ambiguity?', o: [
        'a*L^2/8', '(a*L^2)/8', 'a*L*L/8', 'Both b and c'], a: 3,
      e: 'Both explicit-parenthesis and explicit-multiplication forms eliminate ambiguity.' },
  ]},
]);

E('chapter-4-numbers-need-labels-units-and-estimation', 'Chapter 4 — Numbers Need Labels: Units and Estimation', 'Unit 1', [
  { id: 'A', title: 'Set A — Unit conversions', questions: [
    { q: 'Convert 1500 mm to m.', n: 1.5, t: 0, e: '1500 / 1000.' },
    { q: '1 kN = how many N?', n: 1000, t: 0, e: 'Kilo = 1000.' },
    { q: '1 MPa = how many kPa?', n: 1000, t: 0, e: 'Mega/kilo factor = 1000.' },
  ]},
  { id: 'B', title: 'Set B — Rounding and significant figures', questions: [
    { q: 'Round 7.4836 to 2 decimal places.', n: 7.48, t: 0.001,
      e: 'Look at 3rd dp (3): round down.' },
    { q: 'How many significant figures does 0.00420 have?', n: 3, t: 0,
      e: 'Leading zeros do not count; trailing zero after decimal does. 4, 2, 0 = 3 sig figs.' },
    { q: 'σ = P/A with P = 50 kN, A = 1000 mm². σ in MPa = ?', n: 50, t: 0.1,
      e: '50 kN / 1000 mm² = 50 N/mm² = 50 MPa.' },
  ]},
  { id: 'C', title: 'Set C — Engineering estimation', questions: [
    { q: 'ETABS reports 482.317 kN; hand estimate was 480 kN. Best to report:', o: [
        '482.317 kN', '482 kN', '480.000 kN', '500 kN'], a: 1,
      e: '3 sf is sensible engineering precision; the inputs do not justify 6 sf.' },
    { q: 'Hand estimate of total dead load: 5-story building, 360 m² floor at 6 kPa:', n: 10800, t: 200,
      e: '6 × 360 × 5 = 10,800 kN.' },
    { q: 'When intermediate calculations are rounded too early, final answers are:', o: [
        'More accurate', 'Cumulatively biased / less accurate', 'Faster, no harm', 'Closer to ETABS'], a: 1,
      e: 'Round at the end; keep extra digits in intermediate steps.' },
  ]},
]);

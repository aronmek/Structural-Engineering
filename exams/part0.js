/* Part 0 — Arithmetic Foundations (Chapters A1–A8)
   3 sets × 3 questions per chapter = 9 questions per chapter.
*/

E('chapter-a1-numbers-and-the-number-line', 'Chapter A1 — Numbers and the Number Line', 'Part 0', [
  { id: 'A', title: 'Set A — Basics', questions: [
    { q: 'Which of the following is smaller?', o: ['-2', '-7', '0', '+1'], a: 1,
      e: 'On the number line, more negative is further left, hence smaller. -7 < -2 < 0 < 1.' },
    { q: 'What is |−9|?', n: 9, t: 0,
      e: 'Absolute value = distance from 0, always non-negative. |−9| = 9.' },
    { q: 'A measurement change reported as −12 mm means:', o: [
        'Smaller magnitude than +12 mm', 'A decrease of 12 mm', 'A measurement error', 'Always compression'], a: 1,
      e: 'The sign gives direction of change; the magnitude is 12 mm.' },
  ]},
  { id: 'B', title: 'Set B — Mixed', questions: [
    { q: 'Order from smallest to largest: −3.5, 0.5, −7, 2', o: [
        '−7, −3.5, 0.5, 2', '0.5, 2, −3.5, −7', '−3.5, −7, 0.5, 2', '2, 0.5, −3.5, −7'], a: 0,
      e: 'Smallest is most negative.' },
    { q: 'Which set does √2 belong to?', o: [
        'Integer', 'Rational', 'Irrational', 'Natural'], a: 2,
      e: '√2 cannot be written as a fraction of two integers, so it is irrational.' },
    { q: 'Compute |0|', n: 0, t: 0,
      e: 'Distance from 0 to 0 is 0.' },
  ]},
  { id: 'C', title: 'Set C — Engineering', questions: [
    { q: 'A floor elevation change of +20 mm typically means:', o: [
        'Moved upward', 'Moved downward', 'No movement', 'Area increased'], a: 0,
      e: 'Positive and negative signs track direction once a convention is chosen.' },
    { q: 'A coordinate z = −3 m on a building model means:', o: [
        '3 m above ground', '3 m below ground (basement)', 'Distance from origin only', 'An error'], a: 1,
      e: 'Negative z indicates a position below the reference (ground level).' },
    { q: 'If an allowed level change is |change| ≤ 20 mm, which change FAILS?', o: [
        '15 mm', '−18 mm', '−22 mm', '+20 mm'], a: 2,
      e: '|−22| = 22 > 20, so it exceeds the limit.' },
  ]},
]);

E('chapter-a2-addition-and-subtraction', 'Chapter A2 — Addition and Subtraction', 'Part 0', [
  { id: 'A', title: 'Set A — Sign rules', questions: [
    { q: '−4 + (−7) = ?', n: -11, t: 0,
      e: 'Same sign: add magnitudes (4+7=11) and keep sign (negative).' },
    { q: '−9 + 4 = ?', n: -5, t: 0,
      e: 'Different signs: subtract magnitudes (9−4=5) and keep sign of larger (−).' },
    { q: '7 − (−3) = ?', n: 10, t: 0,
      e: 'Subtracting a negative is adding the positive: 7 + 3 = 10.' },
  ]},
  { id: 'B', title: 'Set B — Multi-term', questions: [
    { q: '5 − 3 + 8 − 2 = ?', n: 8, t: 0,
      e: 'Work left to right: 5−3=2, +8=10, −2=8.' },
    { q: '12.4 − 5.07 + 0.6 = ?', n: 7.93, t: 0.01,
      e: 'Align decimal points carefully: 12.40 − 5.07 = 7.33, +0.60 = 7.93.' },
    { q: 'Which equals −10 − (−4)?', o: ['−14', '−6', '+6', '+14'], a: 1,
      e: '−10 + 4 = −6.' },
  ]},
  { id: 'C', title: 'Set C — Engineering arithmetic', questions: [
    { q: 'Signed level changes (mm): +25, −40, +20, −8. Sum = ?', n: -3, t: 0,
      e: '25 − 40 + 20 − 8 = −3 mm.' },
    { q: 'A bay length is changed by −60 mm, then +25 mm. Net change = ?', n: -35, t: 0,
      e: '−60 + 25 = −35 mm.' },
    { q: 'Floor area demands per zone: 120, 80, 60, 40, 20 m². Total = ?', n: 320, t: 0,
      e: 'Add the areas: 320 m².' },
  ]},
]);

E('chapter-a3-multiplication-and-division', 'Chapter A3 — Multiplication and Division', 'Part 0', [
  { id: 'A', title: 'Set A — Sign rules', questions: [
    { q: '(−6)(7) = ?', n: -42, t: 0,
      e: 'Different signs → negative.' },
    { q: '(−4)(−9) = ?', n: 36, t: 0,
      e: 'Same signs → positive.' },
    { q: '−48 ÷ −6 = ?', n: 8, t: 0,
      e: 'Same signs → positive.' },
  ]},
  { id: 'B', title: 'Set B — Decimals', questions: [
    { q: '0.4 × 0.25 = ?', n: 0.1, t: 0.001,
      e: 'Decimal places: 1+2 = 3. 4×25 = 100 → 0.100 = 0.1.' },
    { q: '6 ÷ 0.5 = ?', n: 12, t: 0,
      e: 'Dividing by ½ is multiplying by 2.' },
    { q: 'Which expression is undefined?', o: ['0/5', '5/0', '0/0', 'Both b and c'], a: 3,
      e: 'Division by zero is undefined; 0/0 is also undefined (indeterminate).' },
  ]},
  { id: 'C', title: 'Set C — Engineering arithmetic', questions: [
    { q: 'A rectangular pad is 4 m by 6 m. Area = ?', n: 24, t: 0,
      e: 'Area = length × width = 4 × 6.' },
    { q: 'A line load value is 4 units/m over 6 m. Total units = ?', n: 24, t: 0,
      e: 'Total = rate × length = 4 × 6.' },
    { q: 'If a quantity doubles and all else stays the same, the product:', o: [
        'Halves', 'Stays same', 'Doubles', 'Quadruples'], a: 2,
      e: 'Multiplication by 2 doubles the product.' },
  ]},
]);

E('chapter-a4-fractions', 'Chapter A4 — Fractions', 'Part 0', [
  { id: 'A', title: 'Set A — Operations', questions: [
    { q: '2/5 + 1/4 (as decimal) = ?', n: 0.65, t: 0.01,
      e: 'LCD 20: 8/20 + 5/20 = 13/20 = 0.65.' },
    { q: '3/4 − 1/6 = ? (decimal)', n: 0.5833, t: 0.01,
      e: 'LCD 12: 9/12 − 2/12 = 7/12 ≈ 0.583.' },
    { q: '(2/3) × (9/8) = ? (decimal)', n: 0.75, t: 0.01,
      e: '18/24 = 3/4 = 0.75.' },
  ]},
  { id: 'B', title: 'Set B — Division & reducing', questions: [
    { q: '(5/6) ÷ (10/3) = ? (decimal)', n: 0.25, t: 0.01,
      e: '5/6 × 3/10 = 15/60 = 1/4 = 0.25.' },
    { q: 'Reduce 18/24 to lowest terms (decimal):', n: 0.75, t: 0.01,
      e: 'Divide both by 6: 3/4 = 0.75.' },
    { q: '2 1/3 as an improper fraction equals (decimal):', n: 2.333, t: 0.01,
      e: '(2·3+1)/3 = 7/3 ≈ 2.333.' },
  ]},
  { id: 'C', title: 'Set C — Engineering', questions: [
    { q: 'A layout has 8 equal spaces over 24 m. Each space = ?', n: 3, t: 0,
      e: '24 / 8 = 3 m.' },
    { q: 'One third of a 9 m height is:', n: 3, t: 0,
      e: '9 × 1/3 = 3 m.' },
    { q: 'A 12 m member is split into thirds. One third = ?', n: 4, t: 0,
      e: '12 / 3 = 4 m.' },
  ]},
]);

E('chapter-a5-decimals-and-percentages', 'Chapter A5 — Decimals and Percentages', 'Part 0', [
  { id: 'A', title: 'Set A — Conversions', questions: [
    { q: 'Convert 0.075 to a percentage. Answer in % (no symbol).', n: 7.5, t: 0,
      e: 'Multiply by 100: 0.075 × 100 = 7.5%.' },
    { q: 'Convert 7% to decimal.', n: 0.07, t: 0,
      e: 'Divide by 100: 7/100 = 0.07.' },
    { q: '12% of 250 = ?', n: 30, t: 0,
      e: '0.12 × 250 = 30.' },
  ]},
  { id: 'B', title: 'Set B — Increase / decrease', questions: [
    { q: 'Increase 80 by 15%. Result = ?', n: 92, t: 0,
      e: '80 × 1.15 = 92.' },
    { q: 'Decrease 200 by 20%. Result = ?', n: 160, t: 0,
      e: '200 × 0.80 = 160.' },
    { q: 'Apply 20% off, then 10% off, to $100. Final = ?', n: 72, t: 0.01,
      e: '100 × 0.80 × 0.90 = 72 (NOT $70).' },
  ]},
  { id: 'C', title: 'Set C — Engineering', questions: [
    { q: 'Live load reduction of 15% on LL = 200 kN gives reduced LL = ?', n: 170, t: 0,
      e: '200 × 0.85 = 170 kN.' },
    { q: 'Load combo 1.2D + 1.6L means dead load is multiplied by:', o: ['0.12', '0.20', '1.2', '12'], a: 2,
      e: 'Decimal form is multiplier; 1.2 = 120%.' },
    { q: 'A reinforcement ratio of 0.5% as a decimal is:', n: 0.005, t: 0,
      e: '0.5 ÷ 100 = 0.005.' },
  ]},
]);

E('chapter-a6-powers-roots-and-scientific-notation', 'Chapter A6 — Powers, Roots, and Scientific Notation', 'Part 0', [
  { id: 'A', title: 'Set A — Powers & roots', questions: [
    { q: '5³ = ?', n: 125, t: 0, e: '5×5×5 = 125.' },
    { q: 'Compute √144.', n: 12, t: 0, e: '12² = 144.' },
    { q: '(−2)⁴ = ?', n: 16, t: 0, e: 'Even exponent → positive: 2⁴ = 16.' },
  ]},
  { id: 'B', title: 'Set B — Power rules', questions: [
    { q: 'Simplify x⁵ · x³ (give exponent only).', n: 8, t: 0,
      e: 'Add exponents: 5+3 = 8 → x⁸.' },
    { q: 'Simplify (y²)⁴ (give exponent only).', n: 8, t: 0,
      e: 'Multiply exponents: 2×4 = 8 → y⁸.' },
    { q: 'z⁷ / z⁴ = z^? Give exponent only.', n: 3, t: 0,
      e: 'Subtract exponents: 7−4 = 3.' },
  ]},
  { id: 'C', title: 'Set C — Scientific notation & engineering', questions: [
    { q: '4,500,000 in scientific notation is 4.5 × 10ⁿ. n = ?', n: 6, t: 0,
      e: 'Move decimal 6 places left.' },
    { q: 'Compute I = b·h³/12 for b = 0.3 m, h = 0.6 m. I (m⁴) = ?', n: 0.0054, t: 0.0001,
      e: '0.3 × 0.216 / 12 = 0.0054 m⁴.' },
    { q: 'Steel modulus is E = 200 GPa. As Pa, E = 2 × 10ⁿ Pa. n = ?', n: 11, t: 0,
      e: '200×10⁹ = 2×10¹¹ Pa.' },
  ]},
]);

E('chapter-a7-order-of-operations-pemdas', 'Chapter A7 — Order of Operations (PEMDAS)', 'Part 0', [
  { id: 'A', title: 'Set A — Basics', questions: [
    { q: '2 + 3 × 4 = ?', n: 14, t: 0,
      e: 'Multiply first: 3×4=12, then 2+12=14.' },
    { q: '(2 + 3) × 4 = ?', n: 20, t: 0,
      e: 'Parentheses first.' },
    { q: '3² + 4 × 5 = ?', n: 29, t: 0,
      e: 'Exponent first (9), then multiply (20), then add: 29.' },
  ]},
  { id: 'B', title: 'Set B — Mixed', questions: [
    { q: '(12 − 4·2) / 2 = ?', n: 2, t: 0,
      e: 'Top: 12 − 8 = 4. 4/2 = 2.' },
    { q: '10 − 6 ÷ 2 + 4 = ?', n: 11, t: 0,
      e: 'Divide first: 6/2=3. Then left to right: 10−3+4 = 11.' },
    { q: 'Which value is correct for −3²?', o: ['−9', '+9', '6', '−6'], a: 0,
      e: 'Without parentheses, exponent before negation: −(3²) = −9.' },
  ]},
  { id: 'C', title: 'Set C — Engineering formulas', questions: [
    { q: 'Compute aL²/8 for a = 5, L = 6. Result = ?', n: 22.5, t: 0.1,
      e: '5 × 36 / 8 = 180/8 = 22.5.' },
    { q: 'Compute ab³/(3cd) as a generic formula with a = 10, b = 2, c = 200, d = 0.0001. Result = ?', n: 1333.33, t: 0.5,
      e: 'This is formula-substitution practice: 10·8 / (3·200·0.0001) = 80/0.06 ≈ 1333.33.' },
    { q: 'In a software formula, a*L^2/8 may be ambiguous. The safest equivalent is:', o: [
        'a*L^2/8', '(a*L^2)/8', 'a*L*L/8', 'Both b and c'], a: 3,
      e: 'Both explicit-parenthesis and explicit-multiplication forms eliminate ambiguity.' },
  ]},
]);

E('chapter-a8-estimation-rounding-and-significant-figures', 'Chapter A8 — Estimation, Rounding, and Significant Figures', 'Part 0', [
  { id: 'A', title: 'Set A — Rounding', questions: [
    { q: 'Round 7.4836 to 2 decimal places.', n: 7.48, t: 0.001,
      e: 'Look at 3rd dp (3): round down.' },
    { q: 'Round 7.4836 to 3 significant figures.', n: 7.48, t: 0.001,
      e: '4th sig fig is 3 → round down to 7.48.' },
    { q: 'How many significant figures does 0.00420 have?', n: 3, t: 0,
      e: 'Leading zeros do not count; trailing zero after decimal does. 4, 2, 0 = 3 sig figs.' },
  ]},
  { id: 'B', title: 'Set B — Sig figs in arithmetic', questions: [
    { q: '3.21 × 4.5: how many sig figs should the answer keep?', n: 2, t: 0,
      e: 'Limited by 4.5 (2 sf).' },
    { q: 'Estimate wL²/8 with w ≈ 6 kN/m, L ≈ 5 m (1 sig fig).', n: 19, t: 1,
      e: '6 × 25 / 8 = 18.75 ≈ 19 kN·m.' },
    { q: 'ETABS reports 482.317 kN; hand estimate was 480 kN. Best to report:', o: [
        '482.317 kN', '482 kN', '480.000 kN', '500 kN'], a: 1,
      e: '3 sf is sensible engineering precision; the inputs do not justify 6 sf.' },
  ]},
  { id: 'C', title: 'Set C — Sanity-check', questions: [
    { q: 'Hand estimate of total dead load on a 5-story 360 m² floor at 6 kPa:', n: 10800, t: 200,
      e: '6 × 360 × 5 = 10,800 kN.' },
    { q: 'ETABS reports 11,200 kN; the hand estimate gives 10,800 kN. Discrepancy ≈ 4%. Action:', o: [
        'Reject ETABS output', 'Accept and report', 'Re-do model', 'Halve the load'], a: 1,
      e: 'Within typical 5–10% tolerance for back-of-envelope; accept.' },
    { q: 'When intermediate calculations are rounded too early, final answers are typically:', o: [
        'More accurate', 'Cumulatively biased / less accurate', 'Faster to compute, no harm', 'Closer to ETABS'], a: 1,
      e: 'Round at the end; keep extra digits in intermediate steps.' },
  ]},
]);

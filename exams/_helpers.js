/* exams/_helpers.js — runs first (filename _ sorts before letters)
   Provides a tiny helper E() so each part file is concise.
   Each chapter exam: 3 sets, ~3 questions per set (mix of MCQ + numeric).
   Question shapes:
     MCQ:     { q:'…', o:['opt1','opt2',…], a:correctIndex, e:'explanation' }
     Numeric: { q:'…', n:correctNumber, t:tolerance, e:'explanation' }
*/
window.E = function (slug, title, part, sets) {
  window.SeExamData[slug] = { title: title, part: part, sets: sets };
};

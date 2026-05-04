import type { Chapter } from './content';

export type MathGlossaryEntry = {
  keys: string[];
  symbol: string;
  pronounce: string;
  name: string;
  desc: string;
  slug: string;
};

const mathEntries: MathGlossaryEntry[] = [
  { keys: ['\\sigma', '\\sigma_b'], symbol: 'sigma', pronounce: 'sigma', name: 'Stress', desc: 'Stress measures force intensity inside a material or cross-section.', slug: 'chapter-16-stress-and-strain' },
  { keys: ['\\Sigma'], symbol: 'capital sigma', pronounce: 'capital sigma', name: 'Summation Symbol', desc: 'Capital sigma means sum the listed forces, moments, or terms.', slug: 'chapter-11-equilibrium-and-the-sum-of-forces' },
  { keys: ['\\Delta', '\\Delta x', '\\Delta y', '\\Delta L'], symbol: 'capital delta', pronounce: 'capital delta', name: 'Change In', desc: 'Capital delta means a difference or change, such as a change in position or length.', slug: 'chapter-16-stress-and-strain' },
  { keys: ['\\pi'], symbol: 'pi', pronounce: 'pi', name: 'Pi', desc: 'Pi is the circle constant, about 3.14159, used for circle area and circumference.', slug: 'chapter-18-areas-and-perimeters' },
  { keys: ['\\theta'], symbol: 'theta', pronounce: 'theta', name: 'Angle', desc: 'Theta is commonly used for an angle in trigonometry and force components.', slug: 'chapter-22-right-triangle-trigonometry' },
  { keys: ['I', 'I_{total}', 'I_{centroidal}', 'I_c'], symbol: 'I', pronounce: 'capital I', name: 'Second Moment of Area', desc: 'I measures how cross-sectional area is spread from the bending axis.', slug: 'chapter-20-moment-of-inertia-second-moment-of-area' },
  { keys: ['A', 'A_i', 'A_s', 'A_c'], symbol: 'A', pronounce: 'capital A', name: 'Cross-Sectional Area', desc: 'Area of the section or part being counted. Area units are squared length units.', slug: 'chapter-18-areas-and-perimeters' },
  { keys: ['M', 'M(x)'], symbol: 'M', pronounce: 'capital M', name: 'Bending Moment', desc: 'Internal rotational effect in a member, usually reported in kN m or N mm.', slug: 'chapter-15-internal-forces-axial-shear-and-bending-moment' },
  { keys: ['P'], symbol: 'P', pronounce: 'capital P', name: 'Axial Load or Point Force', desc: 'A concentrated force or a force along the member axis.', slug: 'chapter-10-what-is-a-force' },
  { keys: ['L'], symbol: 'L', pronounce: 'capital L', name: 'Span Length', desc: 'Clear or center-to-center length of a member or bay.', slug: 'chapter-27-rational-functions-and-proportionality' },
  { keys: ['w'], symbol: 'w', pronounce: 'lowercase w', name: 'Distributed Load', desc: 'Load spread along a length. Total load is found by multiplying by length.', slug: 'chapter-13-types-of-loads-in-structural-engineering' },
  { keys: ['E'], symbol: 'E', pronounce: 'capital E', name: "Young's Modulus", desc: 'A material stiffness value used in stress, strain, and deflection formulas.', slug: 'chapter-16-stress-and-strain' },
];

const sortedEntries = mathEntries.flatMap(entry => entry.keys.map(key => ({ entry, key }))).sort((left, right) => right.key.length - left.key.length);

function chapterOrdinal(slug: string, chapters: Chapter[]) {
  return chapters.findIndex(chapter => chapter.slug === slug);
}

function entryIsAvailable(entry: MathGlossaryEntry, currentSlug: string, chapters: Chapter[]) {
  const taughtAt = chapterOrdinal(entry.slug, chapters);
  const currentAt = chapterOrdinal(currentSlug, chapters);
  if (taughtAt < 0 || currentAt < 0) return true;
  return currentAt >= taughtAt;
}

function normalizeLatex(value: string) {
  return value
    .replace(/\\left|\\right/g, '')
    .replace(/\\mathrm\{([^}]*)\}/g, '$1')
    .replace(/\\text\{([^}]*)\}/g, '$1')
    .replace(/[{}\s]/g, '')
    .replace(/[·×]/g, '*')
    .toLowerCase();
}

export function findMathEntries(latex: string, currentSlug: string, chapters: Chapter[]) {
  const normalizedLatex = normalizeLatex(latex || '');
  const matches: MathGlossaryEntry[] = [];
  const seen = new Set<MathGlossaryEntry>();

  for (const { entry, key } of sortedEntries) {
    if (matches.length >= 4) break;
    if (seen.has(entry) || !entryIsAvailable(entry, currentSlug, chapters)) continue;
    const normalizedKey = normalizeLatex(key);
    if (!latex.includes(key) && !normalizedLatex.includes(normalizedKey)) continue;
    seen.add(entry);
    matches.push(entry);
  }

  return matches;
}
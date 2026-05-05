import front from '../00-Front-Matter.md?raw';
import unit1 from '../Unit1-Number-Sense.md?raw';
import unit2 from '../Unit2-Forces.md?raw';
import unit3 from '../Unit3-Reactions-Moments.md?raw';
import unit4 from '../Unit4-CrossSection.md?raw';
import unit5 from '../Unit5-Geometry-Trig.md?raw';
import unit6 from '../Unit6-Advanced-Math.md?raw';
import unit7 from '../Unit7-ETABS.md?raw';
import part0 from '../00b-Part0-Arithmetic.md?raw';
import part1 from '../01-Part1-Algebra.md?raw';
import part2 from '../02-Part2-Statics-Physics.md?raw';
import part3 from '../03-Part3-Geometry-Trig.md?raw';
import part4 from '../04-Part4-Precalculus.md?raw';
import part5 from '../05-Part5-ETABS.md?raw';

export type BookFile = {
  id: string;
  title: string;
  part: string;
  markdown: string;
};

export type Chapter = {
  fileId: string;
  fileTitle: string;
  part: string;
  slug: string;
  title: string;
  level: number;
};

export const bookFiles: BookFile[] = [
  { id: 'front', title: 'Front Matter', part: 'Start', markdown: front },
  { id: 'unit1', title: 'Unit 1 — Engineering Number Sense', part: 'Unit 1', markdown: unit1 },
  { id: 'unit2', title: 'Unit 2 — Forces and How They Travel', part: 'Unit 2', markdown: unit2 },
  { id: 'unit3', title: 'Unit 3 — Reactions, Moments, and Internal Forces', part: 'Unit 3', markdown: unit3 },
  { id: 'unit4', title: 'Unit 4 — Cross-Section Shape and Material Behavior', part: 'Unit 4', markdown: unit4 },
  { id: 'unit5', title: 'Unit 5 — Geometry, Angles, and 3D Space', part: 'Unit 5', markdown: unit5 },
  { id: 'unit6', title: 'Unit 6 — Time, Cycles, Convergence, and the Matrix Method', part: 'Unit 6', markdown: unit6 },
  { id: 'unit7', title: 'Unit 7 — ETABS Workflow', part: 'Unit 7', markdown: unit7 },
  { id: 'part0', title: 'Part 0 — Arithmetic Foundations', part: 'Part 0', markdown: part0 },
  { id: 'part1', title: 'Part 1 — Algebra', part: 'Part 1', markdown: part1 },
  { id: 'part2', title: 'Part 2 — Statics & Physics', part: 'Part 2', markdown: part2 },
  { id: 'part3', title: 'Part 3 — Geometry & Trigonometry', part: 'Part 3', markdown: part3 },
  { id: 'part4', title: 'Part 4 — Precalculus', part: 'Part 4', markdown: part4 },
  { id: 'part5', title: 'Part 5 — ETABS Practical Guide', part: 'Part 5', markdown: part5 },
];

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 80);
}

export function stripMarkdown(value: string) {
  return value
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\$+/g, '')
    .replace(/\*\*/g, '')
    .replace(/__/g, '')
    .replace(/<[^>]+>/g, '')
    .trim();
}

export function buildChapterIndex(files = bookFiles): Chapter[] {
  const chapters: Chapter[] = [];
  for (const file of files) {
    const matches = file.markdown.matchAll(/^(#{1,3})\s+(.+)$/gm);
    for (const match of matches) {
      const level = match[1].length;
      if (level > 2) continue;
      const title = stripMarkdown(match[2]);
      chapters.push({
        fileId: file.id,
        fileTitle: file.title,
        part: file.part,
        slug: slugify(title),
        title,
        level,
      });
    }
  }
  return chapters;
}

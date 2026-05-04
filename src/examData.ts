import part0Source from '../exams/part0.js?raw';
import part1Source from '../exams/part1.js?raw';
import part2Source from '../exams/part2.js?raw';
import part3Source from '../exams/part3.js?raw';
import part4Source from '../exams/part4.js?raw';
import part5Source from '../exams/part5.js?raw';

export type ExamQuestion = {
  q: string;
  e?: string;
  o?: string[];
  a?: number;
  n?: number;
  t?: number;
};

export type ExamSet = {
  id: string;
  title: string;
  questions: ExamQuestion[];
};

export type ExamDefinition = {
  title: string;
  part: string;
  sets: ExamSet[];
};

const examDefinitions: Record<string, ExamDefinition> = {};

function registerExam(slug: string, title: string, part: string, sets: ExamSet[]) {
  examDefinitions[slug] = { title, part, sets };
}

const examSources = [part0Source, part1Source, part2Source, part3Source, part4Source, part5Source];

for (const source of examSources) {
  const loadExamPart = new Function('E', `"use strict";\n${source}`) as (register: typeof registerExam) => void;
  loadExamPart(registerExam);
}

export { examDefinitions };
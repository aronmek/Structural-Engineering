import unit1Source from '../exams/unit1.js?raw';
import unit2Source from '../exams/unit2.js?raw';
import unit3Source from '../exams/unit3.js?raw';
import unit4Source from '../exams/unit4.js?raw';
import unit5Source from '../exams/unit5.js?raw';
import unit6Source from '../exams/unit6.js?raw';
import unit7Source from '../exams/unit7.js?raw';
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

const examSources = [unit1Source, unit2Source, unit3Source, unit4Source, unit5Source, unit6Source, unit7Source, part0Source, part1Source, part2Source, part3Source, part4Source, part5Source];

for (const source of examSources) {
  const loadExamPart = new Function('E', `"use strict";\n${source}`) as (register: typeof registerExam) => void;
  loadExamPart(registerExam);
}

export { examDefinitions };
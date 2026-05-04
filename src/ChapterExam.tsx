import { useEffect, useMemo, useState } from 'react';
import { examDefinitions, type ExamDefinition, type ExamQuestion, type ExamSet } from './examData';

type Props = {
  slug: string;
};

type StoredSetProgress = {
  attempts: Array<{ score: number; total: number; pct: number; answers: Record<number, string> }>;
  best: number;
  bestPct: number;
};

type StoredExamProgress = Record<string, Record<string, StoredSetProgress>>;

type GradedResult = {
  score: number;
  total: number;
  pct: number;
  correctness: boolean[];
};

const storageKey = 'book.exam.v1';

function loadProgress(): StoredExamProgress {
  try {
    const raw = sessionStorage.getItem(storageKey);
    return raw ? JSON.parse(raw) as StoredExamProgress : {};
  } catch {
    return {};
  }
}

function saveProgress(progress: StoredExamProgress) {
  try {
    sessionStorage.setItem(storageKey, JSON.stringify(progress));
  } catch {
    // Session storage may be blocked in some browser modes; exams still work without saved progress.
  }
}

function recordAttempt(slug: string, setId: string, score: number, total: number, answers: Record<number, string>) {
  const progress = loadProgress();
  progress[slug] = progress[slug] || {};
  progress[slug][setId] = progress[slug][setId] || { attempts: [], best: 0, bestPct: 0 };
  const pct = total ? Math.round((100 * score) / total) : 0;
  progress[slug][setId].attempts.push({ score, total, pct, answers });
  if (pct > progress[slug][setId].bestPct) {
    progress[slug][setId].bestPct = pct;
    progress[slug][setId].best = score;
  }
  saveProgress(progress);
  return progress;
}

function isMultipleChoice(question: ExamQuestion) {
  return Array.isArray(question.o) && typeof question.a === 'number';
}

function isNumeric(question: ExamQuestion) {
  return typeof question.n === 'number';
}

function answerText(question: ExamQuestion) {
  if (isMultipleChoice(question)) return question.o?.[question.a ?? -1] ?? '';
  if (isNumeric(question)) return String(question.n);
  return '';
}

function gradeQuestion(question: ExamQuestion, answer: string | undefined) {
  if (isMultipleChoice(question)) return Number(answer) === question.a;
  if (!isNumeric(question)) return false;
  const parsed = Number.parseFloat((answer || '').replace(',', '.'));
  if (!Number.isFinite(parsed)) return false;
  const tolerance = question.t ?? (Math.abs(question.n || 0) * 0.01 || 0.01);
  return Math.abs(parsed - (question.n || 0)) <= tolerance;
}

function firstSetId(exam: ExamDefinition | undefined) {
  return exam?.sets[0]?.id || '';
}

export function ChapterExam({ slug }: Props) {
  const exam = examDefinitions[slug];
  const [activeSetId, setActiveSetId] = useState(() => firstSetId(exam));
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [gradedResult, setGradedResult] = useState<GradedResult | null>(null);
  const [progress, setProgress] = useState<StoredExamProgress>(() => loadProgress());

  useEffect(() => {
    setActiveSetId(firstSetId(exam));
    setAnswers({});
    setGradedResult(null);
    setProgress(loadProgress());
  }, [exam, slug]);

  const activeSet = useMemo(() => exam?.sets.find(set => set.id === activeSetId) || exam?.sets[0], [activeSetId, exam]);

  if (!exam || !activeSet) return null;

  function selectSet(set: ExamSet) {
    setActiveSetId(set.id);
    setAnswers({});
    setGradedResult(null);
  }

  function updateAnswer(questionIndex: number, value: string) {
    setAnswers(current => ({ ...current, [questionIndex]: value }));
  }

  function gradeActiveSet() {
    if (!activeSet) return;
    const correctness = activeSet.questions.map((question, questionIndex) => gradeQuestion(question, answers[questionIndex]));
    const score = correctness.filter(Boolean).length;
    const total = activeSet.questions.length;
    const pct = total ? Math.round((100 * score) / total) : 0;
    setGradedResult({ score, total, pct, correctness });
    setProgress(recordAttempt(slug, activeSet.id, score, total, answers));
  }

  function retake() {
    setAnswers({});
    setGradedResult(null);
  }

  return (
    <section className="exam" aria-label="Chapter exam">
      <div className="exam-head">
        <div>
          <span className="eyebrow">Chapter check</span>
          <h3>Chapter Exam</h3>
        </div>
        <span className="exam-badge">3 sets · auto-graded</span>
      </div>
      <p className="exam-desc">Choose a set, answer every question, then submit. Explanations appear after grading, and your best score is saved for this browser session.</p>

      <div className="exam-sets" role="tablist" aria-label="Exam sets">
        {exam.sets.map(set => {
          const setProgress = progress[slug]?.[set.id];
          const meta = setProgress ? `Best: ${setProgress.bestPct}% · Attempts: ${setProgress.attempts.length}` : 'Not attempted';
          return (
            <button
              className={set.id === activeSet.id ? 'exam-set active' : 'exam-set'}
              key={set.id}
              onClick={() => selectSet(set)}
              role="tab"
              aria-selected={set.id === activeSet.id}
            >
              <span>{set.title}</span>
              <small>{meta}</small>
            </button>
          );
        })}
      </div>

      <div className="exam-quiz">
        {activeSet.questions.map((question, questionIndex) => {
          const selectedAnswer = answers[questionIndex];
          const correct = gradedResult?.correctness[questionIndex] ?? false;
          return (
            <div className={gradedResult ? `exam-question graded ${correct ? 'correct' : 'wrong'}` : 'exam-question'} key={`${activeSet.id}-${questionIndex}`}>
              <div className="exam-question-number">Question {questionIndex + 1} of {activeSet.questions.length}</div>
              <div className="exam-question-text">{question.q}</div>
              {isMultipleChoice(question) && question.o?.map((option, optionIndex) => {
                const optionValue = String(optionIndex);
                const isSelected = selectedAnswer === optionValue;
                const isCorrectOption = gradedResult && optionIndex === question.a;
                const isWrongSelection = gradedResult && isSelected && optionIndex !== question.a;
                return (
                  <label className={`exam-option${isSelected ? ' selected' : ''}${isCorrectOption ? ' correct-option' : ''}${isWrongSelection ? ' wrong-option' : ''}`} key={option}>
                    <input
                      checked={isSelected}
                      disabled={Boolean(gradedResult)}
                      name={`exam-${slug}-${activeSet.id}-${questionIndex}`}
                      onChange={() => updateAnswer(questionIndex, optionValue)}
                      type="radio"
                      value={optionValue}
                    />
                    <span>{option}</span>
                  </label>
                );
              })}
              {isNumeric(question) && (
                <input
                  aria-label={`Question ${questionIndex + 1} numeric answer`}
                  className={`exam-number${gradedResult ? (correct ? ' correct-number' : ' wrong-number') : ''}`}
                  disabled={Boolean(gradedResult)}
                  inputMode="decimal"
                  onChange={event => updateAnswer(questionIndex, event.target.value)}
                  placeholder="Numeric answer"
                  type="text"
                  value={selectedAnswer || ''}
                />
              )}
              {gradedResult && (
                <div className="exam-explanation">
                  <strong>{correct ? 'Correct.' : 'Incorrect.'}</strong> Answer: <strong>{answerText(question)}</strong>. {question.e || ''}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="exam-actions">
        {!gradedResult && <button className="exam-button" onClick={gradeActiveSet}>Submit Answers</button>}
        {gradedResult && <button className="exam-button secondary" onClick={retake}>Retake</button>}
        {gradedResult && (
          <div className={gradedResult.pct >= 70 ? 'exam-result pass' : 'exam-result fail'} aria-live="polite">
            <strong>{gradedResult.pct >= 70 ? 'Passed' : 'Review needed'}</strong>
            <span>Score: {gradedResult.score} / {gradedResult.total} ({gradedResult.pct}%)</span>
          </div>
        )}
      </div>
    </section>
  );
}
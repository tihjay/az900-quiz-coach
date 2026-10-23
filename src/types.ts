export interface Question {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string;
  accent: string;
  questions: Question[];
}

export type QuizState = 'topics' | 'quiz' | 'results';

export interface AnswerRecord {
  questionId: string;
  selectedIndex: number;
  correct: boolean;
}

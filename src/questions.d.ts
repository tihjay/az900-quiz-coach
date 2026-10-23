declare module '@/questions' {
  interface QuestionItem {
    topic: string;
    question: string;
    options: string[];
    answer: number;
    explanation: string;
  }
  const questions: QuestionItem[];
  export default questions;
}

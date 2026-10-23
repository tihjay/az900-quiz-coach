import { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { topics } from '@/questionAdapter';
import { loadScores, saveScore, type ScoreMap } from '@/scoreTracker';
import type { Topic, QuizState, AnswerRecord } from '@/types';
import TopicSelection from '@/components/TopicSelection';
import Quiz from '@/components/Quiz';
import QuizResults from '@/components/QuizResults';

function App() {
  const [quizState, setQuizState] = useState<QuizState>('topics');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [allScores, setAllScores] = useState<ScoreMap>(() => loadScores());

  const handleSelectTopic = (topic: Topic) => {
    setSelectedTopic(topic);
    setAnswers([]);
    setQuizState('quiz');
  };

  const handleQuizComplete = (finalAnswers: AnswerRecord[]) => {
    setAnswers(finalAnswers);
    if (selectedTopic) {
      const correctCount = finalAnswers.filter((a) => a.correct).length;
      const updated = saveScore(selectedTopic, correctCount);
      setAllScores(updated);
    }
    setQuizState('results');
  };

  const handleExit = () => {
    setSelectedTopic(null);
    setAnswers([]);
    setQuizState('topics');
  };

  const handleRestart = () => {
    setAnswers([]);
    setQuizState('quiz');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={handleExit}
              className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1 -m-1"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 shadow-sm">
                <GraduationCap className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <div className="text-left">
                <h1 className="text-sm font-semibold text-gray-900 leading-tight">
                  AZ-900 Practice Tool
                </h1>
                <p className="text-xs text-gray-400 leading-tight">Unofficial</p>
              </div>
            </button>

            {quizState !== 'topics' && selectedTopic && (
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                  {selectedTopic.title}
                </span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 py-8 sm:py-12 lg:py-16">
        {quizState === 'topics' && (
          <TopicSelection topics={topics} onSelectTopic={handleSelectTopic} />
        )}
        {quizState === 'quiz' && selectedTopic && (
          <Quiz
            topic={selectedTopic}
            onExit={handleExit}
            onComplete={handleQuizComplete}
          />
        )}
        {quizState === 'results' && selectedTopic && (
          <QuizResults
            topic={selectedTopic}
            answers={answers}
            allScores={allScores}
            onRestart={handleRestart}
            onBackToTopics={handleExit}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-gray-400 text-center leading-relaxed">
            Unofficial AZ-900 Practice Tool · Not affiliated with or endorsed by Microsoft ·
            For educational use only
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

import { useState } from 'react';
import { CheckCircle2, XCircle, ArrowRight, ArrowLeft, RotateCcw, X } from 'lucide-react';
import type { Topic, AnswerRecord } from '@/types';

interface QuizProps {
  topic: Topic;
  onExit: () => void;
  onComplete: (answers: AnswerRecord[]) => void;
}

export default function Quiz({ topic, onExit, onComplete }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);

  const question = topic.questions[currentIndex];
  const total = topic.questions.length;
  const progress = ((currentIndex + (showExplanation ? 1 : 0)) / total) * 100;
  const correctCount = answers.filter((a) => a.correct).length;

  const handleSelect = (index: number) => {
    if (showExplanation) return;
    setSelectedIndex(index);
  };

  const handleSubmit = () => {
    if (selectedIndex === null) return;
    const correct = selectedIndex === question.correctIndex;
    const record: AnswerRecord = {
      questionId: question.id,
      selectedIndex,
      correct,
    };
    setAnswers([...answers, record]);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedIndex(null);
      setShowExplanation(false);
    } else {
      onComplete([...answers]);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedIndex(null);
    setAnswers([]);
    setShowExplanation(false);
  };

  const getOptionStyle = (index: number) => {
    if (!showExplanation) {
      if (selectedIndex === index) {
        return 'border-blue-600 bg-blue-50 ring-2 ring-blue-200';
      }
      return 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50';
    }
    if (index === question.correctIndex) {
      return 'border-emerald-500 bg-emerald-50';
    }
    if (index === selectedIndex && index !== question.correctIndex) {
      return 'border-red-400 bg-red-50';
    }
    return 'border-gray-200 bg-white opacity-60';
  };

  const getOptionIcon = (index: number) => {
    if (!showExplanation) return null;
    if (index === question.correctIndex) {
      return <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />;
    }
    if (index === selectedIndex && index !== question.correctIndex) {
      return <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />;
    }
    return null;
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onExit}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
        >
          <X className="w-4 h-4" />
          Exit Quiz
        </button>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100">
          <span className="text-sm font-semibold text-gray-700">
            Score: {correctCount}
          </span>
          <span className="text-sm text-gray-400">/ {total}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Question {currentIndex + 1} of {total}
          </span>
          <span className="text-sm text-gray-500">
            {Math.round(progress)}% complete
          </span>
        </div>
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-snug mb-6">
          {question.question}
        </h2>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={showExplanation}
              className={`w-full text-left flex items-start gap-3 p-4 rounded-xl border-2 transition-all duration-200 focus:outline-none disabled:cursor-default ${getOptionStyle(index)}`}
            >
              <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold flex-shrink-0 mt-0.5 ${
                showExplanation && index === question.correctIndex
                  ? 'bg-emerald-500 text-white'
                  : showExplanation && index === selectedIndex && index !== question.correctIndex
                  ? 'bg-red-400 text-white'
                  : selectedIndex === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {String.fromCharCode(65 + index)}
              </span>
              <span className="text-sm sm:text-base text-gray-800 leading-relaxed flex-1">
                {option}
              </span>
              {getOptionIcon(index)}
            </button>
          ))}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className={`mt-6 p-5 rounded-xl border ${
            selectedIndex === question.correctIndex
              ? 'bg-emerald-50 border-emerald-200'
              : 'bg-blue-50 border-blue-200'
          }`}>
            <div className="flex items-start gap-3">
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                selectedIndex === question.correctIndex
                  ? 'bg-emerald-500'
                  : 'bg-blue-500'
              }`}>
                {selectedIndex === question.correctIndex ? (
                  <CheckCircle2 className="w-5 h-5 text-white" />
                ) : (
                  <XCircle className="w-5 h-5 text-white" />
                )}
              </div>
              <div>
                <p className={`text-sm font-semibold mb-1 ${
                  selectedIndex === question.correctIndex
                    ? 'text-emerald-800'
                    : 'text-blue-800'
                }`}>
                  {selectedIndex === question.correctIndex ? 'Correct!' : 'Not quite — here\'s why:'}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {question.explanation}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
          {showExplanation ? (
            <>
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Restart
              </button>
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {currentIndex < total - 1 ? 'Next Question' : 'See Results'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={onExit}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Topics
              </button>
              <button
                onClick={handleSubmit}
                disabled={selectedIndex === null}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Submit Answer
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

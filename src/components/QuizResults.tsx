import { CheckCircle2, XCircle, RotateCcw, Home, Trophy, Target, FileCheck, TrendingUp, AlertCircle, BookOpen } from 'lucide-react';
import type { Topic, AnswerRecord } from '@/types';
import type { ScoreMap } from '@/scoreTracker';
import { getWeakestTopic } from '@/scoreTracker';

interface QuizResultsProps {
  topic: Topic;
  answers: AnswerRecord[];
  allScores: ScoreMap;
  onRestart: () => void;
  onBackToTopics: () => void;
}

type PerformanceTier = {
  label: string;
  message: string;
  gradient: string;
  ringColor: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  icon: typeof Trophy;
};

function getPerformance(percentage: number): PerformanceTier {
  if (percentage >= 90) {
    return {
      label: 'Exam Ready',
      message: 'You have a strong grasp of this topic. You are well prepared for the AZ-900 exam in this area.',
      gradient: 'from-emerald-500 to-emerald-600',
      ringColor: '#10b981',
      badgeBg: 'bg-emerald-50',
      badgeText: 'text-emerald-700',
      badgeBorder: 'border-emerald-200',
      icon: Trophy,
    };
  }
  if (percentage >= 70) {
    return {
      label: 'Good Progress',
      message: 'You are on the right track. Review the questions you missed and you will be exam ready.',
      gradient: 'from-blue-500 to-blue-600',
      ringColor: '#3b82f6',
      badgeBg: 'bg-blue-50',
      badgeText: 'text-blue-700',
      badgeBorder: 'border-blue-200',
      icon: TrendingUp,
    };
  }
  return {
    label: 'Keep Practicing',
    message: 'Do not get discouraged. Study the explanations below, retake the quiz, and you will improve.',
    gradient: 'from-amber-500 to-amber-600',
    ringColor: '#f59e0b',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-700',
    badgeBorder: 'border-amber-200',
    icon: Target,
  };
}

export default function QuizResults({ topic, answers, allScores, onRestart, onBackToTopics }: QuizResultsProps) {
  const total = topic.questions.length;
  const correctCount = answers.filter((a) => a.correct).length;
  const incorrectCount = total - correctCount;
  const percentage = Math.round((correctCount / total) * 100);
  const tier = getPerformance(percentage);
  const TierIcon = tier.icon;

  const weakestTopic = getWeakestTopic(allScores);
  const sortedScores = Object.values(allScores).sort((a, b) => b.percentage - a.percentage);

  function getScoreBarColor(pct: number): string {
    if (pct >= 90) return 'bg-emerald-500';
    if (pct >= 70) return 'bg-blue-500';
    return 'bg-amber-500';
  }

  function getScoreTextColor(pct: number): string {
    if (pct >= 90) return 'text-emerald-600';
    if (pct >= 70) return 'text-blue-600';
    return 'text-amber-600';
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Score card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-10 text-center mb-8">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.gradient} mb-6 shadow-md`}>
          <TierIcon className="w-8 h-8 text-white" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-1">
          Quiz Complete
        </h1>
        <p className="text-sm text-gray-500 mb-8">{topic.title}</p>

        {/* Score ring */}
        <div className="relative inline-flex items-center justify-center mb-8">
          <svg className="w-40 h-40 -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="52" fill="none" stroke="#e5e7eb" strokeWidth="10" />
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke={tier.ringColor}
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 52}`}
              strokeDashoffset={`${2 * Math.PI * 52 * (1 - percentage / 100)}`}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-gray-900">{percentage}%</span>
            <span className="text-xs text-gray-500 mt-1">Percentage Score</span>
          </div>
        </div>

        {/* Performance tier badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${tier.badgeBg} ${tier.badgeBorder} mb-6`}>
          <TierIcon className={`w-4 h-4 ${tier.badgeText}`} />
          <span className={`text-sm font-semibold ${tier.badgeText}`}>{tier.label}</span>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed max-w-md mx-auto mb-8">
          {tier.message}
        </p>

        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-2">
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-4 sm:p-5">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-100 mx-auto mb-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{correctCount}</div>
            <div className="text-xs text-gray-500 mt-0.5">Correct</div>
          </div>
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-4 sm:p-5">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 mx-auto mb-2">
              <FileCheck className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{total}</div>
            <div className="text-xs text-gray-500 mt-0.5">Total Answered</div>
          </div>
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-4 sm:p-5">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-red-100 mx-auto mb-2">
              <XCircle className="w-5 h-5 text-red-400" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{incorrectCount}</div>
            <div className="text-xs text-gray-500 mt-0.5">Incorrect</div>
          </div>
        </div>

        {/* Final score line */}
        <p className="text-sm font-medium text-gray-700 mt-4">
          Final Score: <span className="text-gray-900">{correctCount} / {total}</span>
        </p>
      </div>

      {/* Topic score breakdown */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">All Topic Scores</h2>
        <p className="text-sm text-gray-500 mb-5">Your latest score for each topic you have attempted.</p>

        {sortedScores.length > 0 ? (
          <div className="space-y-4">
            {sortedScores.map((s) => {
              const isWeakest = weakestTopic?.topicId === s.topicId;
              return (
                <div
                  key={s.topicId}
                  className={`rounded-xl border p-4 transition-all ${
                    isWeakest
                      ? 'border-amber-300 bg-amber-50/60'
                      : 'border-gray-200 bg-gray-50/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {isWeakest && (
                        <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      )}
                      <span className="text-sm font-semibold text-gray-800">{s.topicTitle}</span>
                      {isWeakest && (
                        <span className="text-xs font-medium text-amber-600 bg-amber-100 rounded-full px-2 py-0.5">
                          Weakest
                        </span>
                      )}
                    </div>
                    <span className={`text-sm font-bold ${getScoreTextColor(s.percentage)}`}>
                      {s.percentage}%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ease-out ${getScoreBarColor(s.percentage)}`}
                      style={{ width: `${s.percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1.5">
                    {s.correctCount} / {s.total} correct
                  </p>
                </div>
              );
            })}

            {weakestTopic && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 border border-blue-200">
                <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-blue-900">
                    Recommended: Focus on {weakestTopic.topicTitle}
                  </p>
                  <p className="text-sm text-blue-700 leading-relaxed mt-0.5">
                    This is your lowest scoring topic at {weakestTopic.percentage}%. Review the explanations for the questions you missed, then retake this quiz to improve your score before attempting the AZ-900 exam.
                  </p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <p className="text-sm text-gray-400">No scores recorded yet. Complete a quiz to see your progress.</p>
        )}
      </div>

      {/* Review section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-5">Review Answers</h2>
        <div className="space-y-5">
          {topic.questions.map((q, i) => {
            const answer = answers[i];
            const isCorrect = answer?.correct;
            return (
              <div key={q.id} className="border-b border-gray-100 pb-5 last:border-b-0 last:pb-0">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
                    isCorrect ? 'bg-emerald-100' : 'bg-red-100'
                  }`}>
                    {isCorrect ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-500" />
                    )}
                  </div>
                  <p className="text-sm font-medium text-gray-900 leading-relaxed pt-0.5">
                    {i + 1}. {q.question}
                  </p>
                </div>

                <div className="ml-10 space-y-2">
                  {!isCorrect && answer && (
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-bold text-red-500 bg-red-50 rounded px-1.5 py-0.5 mt-0.5">Your answer</span>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {q.options[answer.selectedIndex]}
                      </p>
                    </div>
                  )}
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 rounded px-1.5 py-0.5 mt-0.5">Correct</span>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      {q.options[q.correctIndex]}
                    </p>
                  </div>
                  <div className="flex items-start gap-2 pt-1">
                    <span className="text-xs font-bold text-gray-400 bg-gray-50 rounded px-1.5 py-0.5 mt-0.5">Explanation</span>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {q.explanation}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          onClick={onRestart}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <RotateCcw className="w-4 h-4" />
          Restart Quiz
        </button>
        <button
          onClick={onBackToTopics}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 text-sm font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
        >
          <Home className="w-4 h-4" />
          Choose Another Topic
        </button>
      </div>
    </div>
  );
}

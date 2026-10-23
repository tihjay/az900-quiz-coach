import { Cloud, Server, ShieldCheck, Receipt, Gauge, ArrowRight, CheckCircle2, Zap, Layers, TrendingUp } from 'lucide-react';
import type { Topic } from '@/types';

interface TopicSelectionProps {
  topics: Topic[];
  onSelectTopic: (topic: Topic) => void;
}

const iconMap: Record<string, typeof Cloud> = {
  Cloud,
  Server,
  ShieldCheck,
  Receipt,
  Gauge,
};

const accentMap: Record<string, { bg: string; border: string; text: string; hoverBg: string; gradient: string }> = {
  sky: {
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    text: 'text-sky-700',
    hoverBg: 'hover:border-sky-400',
    gradient: 'from-sky-500 to-sky-600',
  },
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
    hoverBg: 'hover:border-blue-400',
    gradient: 'from-blue-500 to-blue-600',
  },
  emerald: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
    hoverBg: 'hover:border-emerald-400',
    gradient: 'from-emerald-500 to-emerald-600',
  },
  amber: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-700',
    hoverBg: 'hover:border-amber-400',
    gradient: 'from-amber-500 to-amber-600',
  },
  violet: {
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    text: 'text-violet-700',
    hoverBg: 'hover:border-violet-400',
    gradient: 'from-violet-500 to-violet-600',
  },
};

const features = [
  {
    icon: Zap,
    title: 'Instant Feedback',
    description: 'Get immediate explanations after every question so you learn from each answer in real time.',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: Layers,
    title: 'Topic-Based Questions',
    description: 'Practice by AZ-900 domain — cloud concepts, architecture, services, and security — at your own pace.',
    gradient: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: TrendingUp,
    title: 'Readiness Tracking',
    description: 'Your scores are saved per topic, so you can see your progress and focus on what needs work.',
    gradient: 'from-amber-500 to-amber-600',
  },
];

export default function TopicSelection({ topics, onSelectTopic }: TopicSelectionProps) {
  const totalQuestions = topics.reduce((sum, t) => sum + t.questions.length, 0);

  const scrollToTopics = () => {
    const el = document.getElementById('topic-grid');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <div className="text-center pt-4 sm:pt-8 mb-14 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
          <CheckCircle2 className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-700">{totalQuestions} Practice Questions</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-4">
          AZ-900 Quiz Coach
        </h1>
        <p className="text-lg sm:text-xl text-gray-500 font-medium max-w-xl mx-auto leading-relaxed mb-10">
          Unofficial AZ-900 Practice Tool
        </p>

        <button
          onClick={scrollToTopics}
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white text-base font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 hover:shadow-lg hover:shadow-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Start Quiz
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 sm:mb-20">
        {features.map((f) => {
          const FeatureIcon = f.icon;
          return (
            <div
              key={f.title}
              className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} mb-5 shadow-sm`}>
                <FeatureIcon className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {f.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Topic grid */}
      <div id="topic-grid" className="scroll-mt-24">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight mb-3">
            Choose a Topic to Practice
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Select from the core AZ-900 domains below. Each quiz provides instant feedback and detailed
            explanations to help you learn as you go.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => {
            const Icon = iconMap[topic.icon] ?? Cloud;
            const accent = accentMap[topic.accent] ?? accentMap.blue;
            return (
              <button
                key={topic.id}
                onClick={() => onSelectTopic(topic)}
                className={`group text-left bg-white rounded-2xl border-2 ${accent.border} ${accent.hoverBg} p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${accent.gradient} mb-5 shadow-sm`}>
                  <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700">
                  {topic.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {topic.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className={`text-sm font-medium ${accent.text}`}>
                    {topic.questions.length} questions
                  </span>
                  <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${accent.text} group-hover:gap-2.5 transition-all`}>
                    Start
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-xs text-gray-400 max-w-xl mx-auto leading-relaxed">
          This is an independent study aid and is not affiliated with, endorsed by, or sponsored by
          Microsoft. AZ-900 is a trademark of Microsoft Corporation.
        </p>
      </div>
    </div>
  );
}

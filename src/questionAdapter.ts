import questions from '@/questions';
import type { Topic, Question } from '@/types';

interface RawQuestion {
  topic: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

interface TopicMeta {
  id: string;
  title: string;
  description: string;
  icon: string;
  accent: string;
}

const topicMeta: Record<string, TopicMeta> = {
  'Cloud Concepts': {
    id: 'cloud-concepts',
    title: 'Cloud Concepts',
    description: 'Understand cloud models, shared responsibility, consumption-based pricing, and the benefits of cloud computing.',
    icon: 'Cloud',
    accent: 'sky',
  },
  'Azure Architecture': {
    id: 'azure-architecture',
    title: 'Azure Architecture',
    description: 'Explore core Azure architectural components including regions, availability zones, resource groups, and ARM.',
    icon: 'Server',
    accent: 'blue',
  },
  'Azure Services': {
    id: 'azure-services',
    title: 'Azure Services',
    description: 'Learn about key Azure services including compute, storage, databases, and serverless offerings.',
    icon: 'Gauge',
    accent: 'emerald',
  },
  'Security and Governance': {
    id: 'security-governance',
    title: 'Security and Governance',
    description: 'Master identity, access management, encryption, compliance, and governance tools in Azure.',
    icon: 'ShieldCheck',
    accent: 'amber',
  },
};

const rawQuestions = questions as unknown as RawQuestion[];

const grouped = rawQuestions.reduce<Record<string, RawQuestion[]>>((acc, q) => {
  if (!acc[q.topic]) acc[q.topic] = [];
  acc[q.topic].push(q);
  return acc;
}, {});

export const topics: Topic[] = Object.keys(grouped).map((topicName) => {
  const meta = topicMeta[topicName] ?? {
    id: topicName.toLowerCase().replace(/\s+/g, '-'),
    title: topicName,
    description: '',
    icon: 'Cloud',
    accent: 'blue',
  };

  const mappedQuestions: Question[] = grouped[topicName].map((q, i) => ({
    id: `${meta.id}-${i}`,
    question: q.question,
    options: q.options,
    correctIndex: q.answer,
    explanation: q.explanation,
  }));

  return {
    id: meta.id,
    title: meta.title,
    description: meta.description,
    icon: meta.icon,
    accent: meta.accent,
    questions: mappedQuestions,
  };
});

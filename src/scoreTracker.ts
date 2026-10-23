import type { Topic } from '@/types';

export interface TopicScore {
  topicId: string;
  topicTitle: string;
  percentage: number;
  correctCount: number;
  total: number;
  timestamp: number;
}

export type ScoreMap = Record<string, TopicScore>;

const STORAGE_KEY = 'az900-topic-scores';

export function loadScores(): ScoreMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as ScoreMap;
  } catch {
    return {};
  }
}

export function saveScore(topic: Topic, correctCount: number): ScoreMap {
  const scores = loadScores();
  const total = topic.questions.length;
  const percentage = Math.round((correctCount / total) * 100);
  scores[topic.id] = {
    topicId: topic.id,
    topicTitle: topic.title,
    percentage,
    correctCount,
    total,
    timestamp: Date.now(),
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
  } catch {
    // ignore storage errors
  }
  return scores;
}

export function getWeakestTopic(scores: ScoreMap): TopicScore | null {
  const entries = Object.values(scores);
  if (entries.length === 0) return null;
  return entries.reduce((min, s) => (s.percentage < min.percentage ? s : min), entries[0]);
}

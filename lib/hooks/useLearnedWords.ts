'use client';

import { useState, useEffect, useCallback } from 'react';

const storageKey = (topicId: string) => `ef-learned-${topicId}`;

export function useLearnedWords(topicId: string, totalWords: number) {
  const [learned, setLearned] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey(topicId));
      if (raw) setLearned(new Set(JSON.parse(raw) as string[]));
    } catch {
      // ignore
    }
  }, [topicId]);

  const toggle = useCallback((wordKey: string) => {
    setLearned((prev) => {
      const next = new Set(prev);
      if (next.has(wordKey)) {
        next.delete(wordKey);
      } else {
        next.add(wordKey);
      }
      try {
        localStorage.setItem(storageKey(topicId), JSON.stringify([...next]));
      } catch {
        // ignore
      }
      return next;
    });
  }, [topicId]);

  const reset = useCallback(() => {
    setLearned(new Set());
    try {
      localStorage.removeItem(storageKey(topicId));
    } catch {
      // ignore
    }
  }, [topicId]);

  return { learned, toggle, reset, learnedCount: learned.size, totalWords };
}

export function getLearnedCount(topicId: string): number {
  if (typeof window === 'undefined') return 0;
  try {
    const raw = localStorage.getItem(storageKey(topicId));
    if (!raw) return 0;
    return (JSON.parse(raw) as string[]).length;
  } catch {
    return 0;
  }
}

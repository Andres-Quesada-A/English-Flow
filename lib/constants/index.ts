import type { LevelId, Achievement } from '../types';

// ===== Points System =====

export const POINTS = {
  EXERCISE_CORRECT_FIRST: 10,
  EXERCISE_CORRECT_SECOND: 5,
  EXERCISE_CORRECT_THIRD: 2,
  LESSON_COMPLETE: 50,
  UNIT_COMPLETE: 200,
  LEVEL_COMPLETE: 1000,
  STREAK_7_DAYS: 100,
  STREAK_30_DAYS: 500,
  PERFECT_LESSON: 25,
} as const;

// ===== Level Information =====

export const LEVELS: Record<LevelId, { name: string; fullName: string; description: string; color: string }> = {
  a1: {
    name: 'A1',
    fullName: 'Beginner',
    description: 'Start from zero. Learn basic greetings, numbers, and simple phrases.',
    color: 'var(--level-a1)',
  },
  a2: {
    name: 'A2',
    fullName: 'Elementary',
    description: 'Build on basics. Master everyday situations and simple conversations.',
    color: 'var(--level-a2)',
  },
  b1: {
    name: 'B1',
    fullName: 'Intermediate',
    description: 'Expand your skills. Handle most travel situations and express opinions.',
    color: 'var(--level-b1)',
  },
  b2: {
    name: 'B2',
    fullName: 'Upper-Intermediate',
    description: 'Refine your English. Discuss complex topics with fluency and accuracy.',
    color: 'var(--level-b2)',
  },
};

// ===== Achievements =====

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first-steps',
    name: 'First Steps',
    description: 'Complete your first lesson',
    icon: '🌟',
  },
  {
    id: 'bookworm',
    name: 'Bookworm',
    description: 'Complete 10 lessons',
    icon: '📚',
  },
  {
    id: 'dedicated-learner',
    name: 'Dedicated Learner',
    description: 'Complete 50 lessons',
    icon: '🎓',
  },
  {
    id: 'on-fire',
    name: 'On Fire',
    description: 'Maintain a 7-day streak',
    icon: '🔥',
  },
  {
    id: 'unstoppable',
    name: 'Unstoppable',
    description: 'Maintain a 30-day streak',
    icon: '💪',
  },
  {
    id: 'perfect-score',
    name: 'Perfect Score',
    description: 'Complete a lesson without any mistakes',
    icon: '🎯',
  },
  {
    id: 'perfectionist',
    name: 'Perfectionist',
    description: 'Get 10 perfect lessons',
    icon: '✨',
  },
  {
    id: 'unit-master',
    name: 'Unit Master',
    description: 'Complete an entire unit',
    icon: '🏅',
  },
  {
    id: 'level-a1',
    name: 'A1 Champion',
    description: 'Complete the A1 level',
    icon: '🏆',
  },
  {
    id: 'level-a2',
    name: 'A2 Champion',
    description: 'Complete the A2 level',
    icon: '🏆',
  },
  {
    id: 'level-b1',
    name: 'B1 Champion',
    description: 'Complete the B1 level',
    icon: '🏆',
  },
  {
    id: 'level-b2',
    name: 'B2 Champion',
    description: 'Complete the B2 level',
    icon: '🏆',
  },
  {
    id: 'vocabulary-100',
    name: 'Word Collector',
    description: 'Learn 100 vocabulary words',
    icon: '📖',
  },
  {
    id: 'vocabulary-500',
    name: 'Vocabulary Master',
    description: 'Learn 500 vocabulary words',
    icon: '📕',
  },
  {
    id: 'early-bird',
    name: 'Early Bird',
    description: 'Practice before 8 AM',
    icon: '🌅',
  },
  {
    id: 'night-owl',
    name: 'Night Owl',
    description: 'Practice after 10 PM',
    icon: '🦉',
  },
  {
    id: 'weekend-warrior',
    name: 'Weekend Warrior',
    description: 'Practice on both Saturday and Sunday',
    icon: '⚔️',
  },
  {
    id: 'xp-1000',
    name: 'Rising Star',
    description: 'Earn 1,000 XP',
    icon: '⭐',
  },
  {
    id: 'xp-5000',
    name: 'Shining Star',
    description: 'Earn 5,000 XP',
    icon: '🌟',
  },
  {
    id: 'xp-10000',
    name: 'Superstar',
    description: 'Earn 10,000 XP',
    icon: '💫',
  },
];

// ===== Storage Keys =====

export const STORAGE_KEYS = {
  USER_PROGRESS: 'englishflow_progress',
  USER_SETTINGS: 'englishflow_settings',
} as const;

// ===== Navigation =====

export const NAV_ITEMS = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'Learn', href: '/levels', icon: 'book' },
  { label: 'Practice', href: '/practice', icon: 'target' },
  { label: 'Profile', href: '/profile', icon: 'user' },
] as const;

// ===== Default User Progress =====

export const DEFAULT_USER_PROGRESS: Omit<import('../types').UserProgress, 'createdAt' | 'lastUpdated'> = {
  currentLevel: 'a1',
  currentUnit: null,
  currentLesson: null,
  totalXP: 0,
  streak: {
    current: 0,
    longest: 0,
    lastActivityDate: '',
  },
  achievements: [],
  lessons: {},
  failedExercises: [],
  settings: {
    theme: 'system',
    hasCompletedOnboarding: false,
  },
};

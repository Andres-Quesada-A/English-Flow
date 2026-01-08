import { STORAGE_KEYS, DEFAULT_USER_PROGRESS } from '../constants';
import type { UserProgress } from '../types';

// Check if we're in browser
const isBrowser = typeof window !== 'undefined';

// Get user progress from localStorage
export function getUserProgress(): UserProgress | null {
  if (!isBrowser) return null;

  try {
    const stored = localStorage.getItem(STORAGE_KEYS.USER_PROGRESS);
    if (!stored) return null;
    return JSON.parse(stored) as UserProgress;
  } catch (error) {
    console.error('Error reading user progress:', error);
    return null;
  }
}

// Save user progress to localStorage
export function saveUserProgress(progress: UserProgress): void {
  if (!isBrowser) return;

  try {
    const updated = {
      ...progress,
      lastUpdated: Date.now(),
    };
    localStorage.setItem(STORAGE_KEYS.USER_PROGRESS, JSON.stringify(updated));
  } catch (error) {
    console.error('Error saving user progress:', error);
  }
}

// Initialize user progress with defaults
export function initializeUserProgress(): UserProgress {
  const now = Date.now();
  const progress: UserProgress = {
    ...DEFAULT_USER_PROGRESS,
    createdAt: now,
    lastUpdated: now,
  };
  saveUserProgress(progress);
  return progress;
}

// Get or create user progress
export function getOrCreateUserProgress(): UserProgress {
  const existing = getUserProgress();
  if (existing) return existing;
  return initializeUserProgress();
}

// Reset user progress
export function resetUserProgress(): UserProgress {
  if (isBrowser) {
    localStorage.removeItem(STORAGE_KEYS.USER_PROGRESS);
  }
  return initializeUserProgress();
}

// Update streak
export function updateStreak(progress: UserProgress): UserProgress {
  const today = new Date().toISOString().split('T')[0];
  const lastActivity = progress.streak.lastActivityDate;

  if (lastActivity === today) {
    // Already practiced today
    return progress;
  }

  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

  let newStreak: typeof progress.streak;

  if (lastActivity === yesterday) {
    // Continuing streak
    newStreak = {
      current: progress.streak.current + 1,
      longest: Math.max(progress.streak.longest, progress.streak.current + 1),
      lastActivityDate: today,
    };
  } else if (!lastActivity) {
    // First time
    newStreak = {
      current: 1,
      longest: 1,
      lastActivityDate: today,
    };
  } else {
    // Streak broken
    newStreak = {
      current: 1,
      longest: progress.streak.longest,
      lastActivityDate: today,
    };
  }

  return {
    ...progress,
    streak: newStreak,
  };
}

// Add XP
export function addXP(progress: UserProgress, amount: number): UserProgress {
  return {
    ...progress,
    totalXP: progress.totalXP + amount,
  };
}

// Unlock achievement
export function unlockAchievement(progress: UserProgress, achievementId: string): UserProgress {
  if (progress.achievements.includes(achievementId)) {
    return progress;
  }

  return {
    ...progress,
    achievements: [...progress.achievements, achievementId],
  };
}

// Check and unlock achievements based on progress
export function checkAchievements(progress: UserProgress): UserProgress {
  let updated = { ...progress };
  const completedLessons = Object.values(progress.lessons).filter(l => l.completed).length;
  const perfectLessons = Object.values(progress.lessons).filter(l => l.perfectScore).length;

  // First Steps
  if (completedLessons >= 1) {
    updated = unlockAchievement(updated, 'first-steps');
  }

  // Bookworm
  if (completedLessons >= 10) {
    updated = unlockAchievement(updated, 'bookworm');
  }

  // Dedicated Learner
  if (completedLessons >= 50) {
    updated = unlockAchievement(updated, 'dedicated-learner');
  }

  // On Fire
  if (progress.streak.current >= 7) {
    updated = unlockAchievement(updated, 'on-fire');
  }

  // Unstoppable
  if (progress.streak.current >= 30) {
    updated = unlockAchievement(updated, 'unstoppable');
  }

  // Perfect Score
  if (perfectLessons >= 1) {
    updated = unlockAchievement(updated, 'perfect-score');
  }

  // Perfectionist
  if (perfectLessons >= 10) {
    updated = unlockAchievement(updated, 'perfectionist');
  }

  // XP Achievements
  if (progress.totalXP >= 1000) {
    updated = unlockAchievement(updated, 'xp-1000');
  }
  if (progress.totalXP >= 5000) {
    updated = unlockAchievement(updated, 'xp-5000');
  }
  if (progress.totalXP >= 10000) {
    updated = unlockAchievement(updated, 'xp-10000');
  }

  return updated;
}

// Export/Import progress for backup
export function exportProgress(): string | null {
  if (!isBrowser) return null;

  const progress = getUserProgress();
  if (!progress) return null;

  return JSON.stringify(progress, null, 2);
}

export function importProgress(jsonString: string): boolean {
  if (!isBrowser) return false;

  try {
    const progress = JSON.parse(jsonString) as UserProgress;

    // Validate required fields
    if (
      typeof progress.currentLevel !== 'string' ||
      typeof progress.totalXP !== 'number' ||
      typeof progress.streak !== 'object'
    ) {
      return false;
    }

    saveUserProgress(progress);
    return true;
  } catch {
    return false;
  }
}

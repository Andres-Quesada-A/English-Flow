'use client';

import { useState, useEffect, useCallback } from 'react';
import type { UserProgress, LessonProgress, LevelId } from '../types';
import {
  getOrCreateUserProgress,
  saveUserProgress,
  updateStreak,
  addXP,
  checkAchievements,
  resetUserProgress,
} from '../utils/storage';
import { POINTS } from '../constants';

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load progress on mount
  useEffect(() => {
    const loaded = getOrCreateUserProgress();
    setProgress(loaded);
    setIsLoading(false);
  }, []);

  // Save progress whenever it changes
  useEffect(() => {
    if (progress) {
      saveUserProgress(progress);
    }
  }, [progress]);

  // Complete onboarding
  const completeOnboarding = useCallback(() => {
    setProgress((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        settings: {
          ...prev.settings,
          hasCompletedOnboarding: true,
        },
      };
    });
  }, []);

  // Set current level
  const setCurrentLevel = useCallback((levelId: LevelId) => {
    setProgress((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        currentLevel: levelId,
      };
    });
  }, []);

  // Complete a lesson
  const completeLesson = useCallback((
    lessonId: string,
    score: number,
    totalExercises: number,
    exercisesCorrect: number
  ) => {
    setProgress((prev) => {
      if (!prev) return prev;

      const perfectScore = exercisesCorrect === totalExercises;

      // Calculate XP
      let xpEarned = POINTS.LESSON_COMPLETE;
      if (perfectScore) {
        xpEarned += POINTS.PERFECT_LESSON;
      }

      // Update lesson progress
      const lessonProgress: LessonProgress = {
        lessonId,
        completed: true,
        score,
        exercisesCompleted: exercisesCorrect,
        totalExercises,
        perfectScore,
        completedAt: Date.now(),
      };

      let updated: UserProgress = {
        ...prev,
        lessons: {
          ...prev.lessons,
          [lessonId]: lessonProgress,
        },
      };

      // Update streak
      updated = updateStreak(updated);

      // Add XP
      updated = addXP(updated, xpEarned);

      // Check achievements
      updated = checkAchievements(updated);

      return updated;
    });
  }, []);

  // Add exercise XP
  const addExerciseXP = useCallback((attempts: number) => {
    setProgress((prev) => {
      if (!prev) return prev;

      let xp: number = POINTS.EXERCISE_CORRECT_FIRST;
      if (attempts === 2) {
        xp = POINTS.EXERCISE_CORRECT_SECOND;
      } else if (attempts >= 3) {
        xp = POINTS.EXERCISE_CORRECT_THIRD;
      }

      return addXP(prev, xp);
    });
  }, []);

  // Record failed exercise
  const recordFailedExercise = useCallback((exerciseId: string, lessonId: string) => {
    setProgress((prev) => {
      if (!prev) return prev;

      // Check if already recorded
      const exists = prev.failedExercises.some(
        (e) => e.exerciseId === exerciseId && e.lessonId === lessonId
      );

      if (exists) {
        // Update attempts
        return {
          ...prev,
          failedExercises: prev.failedExercises.map((e) =>
            e.exerciseId === exerciseId && e.lessonId === lessonId
              ? { ...e, attempts: e.attempts + 1, timestamp: Date.now() }
              : e
          ),
        };
      }

      return {
        ...prev,
        failedExercises: [
          ...prev.failedExercises,
          {
            exerciseId,
            lessonId,
            correct: false,
            attempts: 1,
            timestamp: Date.now(),
          },
        ],
      };
    });
  }, []);

  // Remove failed exercise (when mastered)
  const removeFailedExercise = useCallback((exerciseId: string) => {
    setProgress((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        failedExercises: prev.failedExercises.filter(
          (e) => e.exerciseId !== exerciseId
        ),
      };
    });
  }, []);

  // Reset all progress
  const reset = useCallback(() => {
    const newProgress = resetUserProgress();
    setProgress(newProgress);
  }, []);

  // Get lesson progress
  const getLessonProgress = useCallback((lessonId: string): LessonProgress | null => {
    if (!progress) return null;
    return progress.lessons[lessonId] || null;
  }, [progress]);

  // Check if lesson is completed
  const isLessonCompleted = useCallback((lessonId: string): boolean => {
    if (!progress) return false;
    return progress.lessons[lessonId]?.completed || false;
  }, [progress]);

  return {
    progress,
    isLoading,
    completeOnboarding,
    setCurrentLevel,
    completeLesson,
    addExerciseXP,
    recordFailedExercise,
    removeFailedExercise,
    getLessonProgress,
    isLessonCompleted,
    reset,
  };
}

export default useProgress;

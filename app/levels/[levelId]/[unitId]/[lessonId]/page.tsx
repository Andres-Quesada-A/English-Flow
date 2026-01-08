'use client';

import { use, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/layout';
import { Card, Button, ProgressBar } from '@/components/ui';
import { ExerciseWrapper, ExerciseRenderer, LessonComplete } from '@/components/exercises';
import { XIcon, ChevronLeftIcon } from '@/components/icons';
import { useProgress } from '@/lib/hooks';
import { getExercisesForLesson } from '@/lib/data/sample-exercises';
import { LEVELS, POINTS } from '@/lib/constants';
import { calculatePercentage, getLevelGradientClass } from '@/lib/utils';
import type { LevelId, Exercise } from '@/lib/types';

interface PageProps {
  params: Promise<{ levelId: string; unitId: string; lessonId: string }>;
}

export default function LessonPage({ params }: PageProps) {
  const { levelId, unitId, lessonId } = use(params);
  const router = useRouter();
  const { progress, isLoading, completeLesson, addExerciseXP, recordFailedExercise } = useProgress();

  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [exerciseResults, setExerciseResults] = useState<{ correct: boolean; attempts: number }[]>([]);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const validLevelId = levelId as LevelId;
  const level = LEVELS[validLevelId];
  const exercises = getExercisesForLesson(`${unitId}-${lessonId}`);
  const currentExercise = exercises[currentExerciseIndex];

  const handleAnswer = useCallback((isCorrect: boolean, attempts: number) => {
    // Record the result
    const newResults = [...exerciseResults, { correct: isCorrect, attempts }];
    setExerciseResults(newResults);

    // Add XP for correct answer
    if (isCorrect) {
      addExerciseXP(attempts);
    } else {
      // Record failed exercise for review
      recordFailedExercise(currentExercise.id, `${unitId}-${lessonId}`);
    }

    // Move to next exercise after delay
    setTimeout(() => {
      if (currentExerciseIndex < exercises.length - 1) {
        setCurrentExerciseIndex(currentExerciseIndex + 1);
      } else {
        // Lesson complete
        const correctCount = newResults.filter(r => r.correct).length;
        const score = calculatePercentage(correctCount, exercises.length);
        const isPerfect = correctCount === exercises.length;

        // Calculate XP
        let xpEarned = POINTS.LESSON_COMPLETE;
        if (isPerfect) {
          xpEarned += POINTS.PERFECT_LESSON;
        }

        // Save progress
        completeLesson(`${unitId}-${lessonId}`, score, exercises.length, correctCount);

        setLessonCompleted(true);
      }
    }, 1500);
  }, [currentExerciseIndex, exercises.length, exerciseResults, addExerciseXP, recordFailedExercise, currentExercise?.id, unitId, lessonId, completeLesson]);

  const handleContinue = () => {
    router.push(`/levels/${validLevelId}/${unitId}`);
  };

  const handleRetry = () => {
    setCurrentExerciseIndex(0);
    setExerciseResults([]);
    setLessonCompleted(false);
  };

  const handleExit = () => {
    if (exerciseResults.length > 0 && !lessonCompleted) {
      setShowExitConfirm(true);
    } else {
      router.push(`/levels/${validLevelId}/${unitId}`);
    }
  };

  if (!level) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-2">Lesson not found</h1>
          <Button onClick={() => router.push('/levels')}>Go to Levels</Button>
        </div>
      </div>
    );
  }

  if (isLoading || !progress) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-text-secondary">Loading...</div>
      </div>
    );
  }

  // Calculate lesson stats
  const correctCount = exerciseResults.filter(r => r.correct).length;
  const progressPercent = calculatePercentage(currentExerciseIndex, exercises.length);
  const score = calculatePercentage(correctCount, exercises.length);
  const isPerfect = correctCount === exercises.length;

  // Calculate XP earned
  let xpEarned = POINTS.LESSON_COMPLETE;
  exerciseResults.forEach(r => {
    if (r.correct) {
      if (r.attempts === 1) xpEarned += POINTS.EXERCISE_CORRECT_FIRST;
      else if (r.attempts === 2) xpEarned += POINTS.EXERCISE_CORRECT_SECOND;
      else xpEarned += POINTS.EXERCISE_CORRECT_THIRD;
    }
  });
  if (isPerfect) xpEarned += POINTS.PERFECT_LESSON;

  return (
    <div className="min-h-screen bg-background">
      {/* Simple Header for Lesson */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          {/* Exit button */}
          <button
            onClick={handleExit}
            className="p-2 -ml-2 text-text-secondary hover:text-text-primary transition-colors"
          >
            <XIcon size={24} />
          </button>

          {/* Progress bar */}
          <div className="flex-1 mx-4 max-w-md">
            <ProgressBar
              value={lessonCompleted ? 100 : progressPercent}
              max={100}
              variant={validLevelId}
              size="sm"
            />
          </div>

          {/* Exercise count */}
          <span className="text-sm text-text-secondary">
            {lessonCompleted ? exercises.length : currentExerciseIndex + 1}/{exercises.length}
          </span>
        </div>
      </header>

      <main className="pt-14 pb-8 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-2xl mx-auto px-4 py-8">
          {lessonCompleted ? (
            <LessonComplete
              score={score}
              totalExercises={exercises.length}
              correctExercises={correctCount}
              xpEarned={xpEarned}
              isPerfect={isPerfect}
              onContinue={handleContinue}
              onRetry={score < 100 ? handleRetry : undefined}
            />
          ) : currentExercise ? (
            <div className="animate-fade-in" key={currentExercise.id}>
              <ExerciseWrapper
                currentQuestion={currentExerciseIndex + 1}
                totalQuestions={exercises.length}
                instruction={currentExercise.instruction}
                hint={currentExercise.hint}
                showHint={exerciseResults.filter(r => !r.correct).length > 0}
              >
                <ExerciseRenderer
                  exercise={currentExercise}
                  onAnswer={handleAnswer}
                />
              </ExerciseWrapper>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-text-secondary">No exercises found</p>
            </div>
          )}
        </div>
      </main>

      {/* Exit Confirmation Modal */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowExitConfirm(false)}
          />
          <Card padding="lg" className="relative w-full max-w-sm animate-scale-in">
            <h2 className="text-xl font-bold text-text-primary mb-2">
              Leave Lesson?
            </h2>
            <p className="text-text-secondary mb-6">
              Your progress in this lesson will be lost. Are you sure you want to leave?
            </p>
            <div className="flex gap-3">
              <Button
                variant="secondary"
                fullWidth
                onClick={() => setShowExitConfirm(false)}
              >
                Stay
              </Button>
              <Button
                variant="error"
                fullWidth
                onClick={() => router.push(`/levels/${validLevelId}/${unitId}`)}
              >
                Leave
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

'use client';

import Link from 'next/link';
import { Header, BottomNav, Sidebar } from '@/components/layout';
import { Card, Button } from '@/components/ui';
import { TargetIcon, RefreshIcon, BookIcon, ChevronRightIcon } from '@/components/icons';
import { useProgress } from '@/lib/hooks';
import { LEVELS } from '@/lib/constants';
import { getLevelGradientClass } from '@/lib/utils';
import type { LevelId } from '@/lib/types';

export default function PracticePage() {
  const { progress, isLoading } = useProgress();

  if (isLoading || !progress) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-text-secondary">Loading...</div>
      </div>
    );
  }

  const failedExercisesCount = progress.failedExercises.length;

  return (
    <div className="min-h-screen bg-background">
      <Header progress={progress} />
      <Sidebar currentLevel={progress.currentLevel} />

      <main className="pt-16 pb-20 md:pb-8 md:pl-64">
        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-text-primary mb-1">
              Practice Mode
            </h1>
            <p className="text-text-secondary">
              Reinforce your learning with targeted practice
            </p>
          </div>

          {/* Practice Options */}
          <div className="space-y-4 mb-8">
            {/* Review Mistakes */}
            <Card
              variant={failedExercisesCount > 0 ? 'interactive' : 'default'}
              padding="lg"
              className={failedExercisesCount === 0 ? 'opacity-50' : ''}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-error/10 flex items-center justify-center">
                  <RefreshIcon size={28} className="text-error" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-text-primary">Review Mistakes</h2>
                  <p className="text-sm text-text-secondary">
                    Practice exercises you got wrong
                  </p>
                  <p className="text-xs text-text-muted mt-1">
                    {failedExercisesCount} exercises to review
                  </p>
                </div>
                {failedExercisesCount > 0 && (
                  <ChevronRightIcon size={24} className="text-text-muted" />
                )}
              </div>
            </Card>

            {/* Quick Practice */}
            <Card variant="interactive" padding="lg">
              <Link href="/practice/quick" className="block">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-success/10 flex items-center justify-center">
                    <TargetIcon size={28} className="text-success" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-text-primary">Quick Practice</h2>
                    <p className="text-sm text-text-secondary">
                      Random mix of exercises from your current level
                    </p>
                    <p className="text-xs text-text-muted mt-1">
                      10 exercises, ~5 minutes
                    </p>
                  </div>
                  <ChevronRightIcon size={24} className="text-text-muted" />
                </div>
              </Link>
            </Card>
          </div>

          {/* Practice by Level */}
          <h2 className="text-lg font-semibold text-text-primary mb-4">Practice by Level</h2>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {(Object.keys(LEVELS) as LevelId[]).map((levelId) => {
              const level = LEVELS[levelId];
              const levelOrder: LevelId[] = ['a1', 'a2', 'b1', 'b2'];
              const currentLevelIndex = levelOrder.indexOf(progress.currentLevel);
              const thisLevelIndex = levelOrder.indexOf(levelId);
              const isLocked = thisLevelIndex > currentLevelIndex;

              return (
                <Card
                  key={levelId}
                  variant={isLocked ? 'default' : 'interactive'}
                  padding="md"
                  className={isLocked ? 'opacity-50' : ''}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg ${isLocked ? 'bg-border' : getLevelGradientClass(levelId)} flex items-center justify-center`}>
                      <span className="text-white font-bold">{level.name}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-text-primary">{level.fullName}</h3>
                      <p className="text-xs text-text-secondary">Practice all topics</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Info */}
          <Card padding="md" className="bg-primary/5 border-primary/20">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <BookIcon size={16} className="text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-text-primary mb-1">Practice Tips</h3>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>Review your mistakes regularly to reinforce learning</li>
                  <li>Quick practice helps maintain your streak</li>
                  <li>Try to practice a little every day for best results</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

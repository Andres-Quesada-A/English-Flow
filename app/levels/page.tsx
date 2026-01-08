'use client';

import Link from 'next/link';
import { Header, BottomNav, Sidebar } from '@/components/layout';
import { Card, ProgressBar } from '@/components/ui';
import { ChevronRightIcon, LockIcon } from '@/components/icons';
import { useProgress } from '@/lib/hooks';
import { LEVELS } from '@/lib/constants';
import { getLevelGradientClass } from '@/lib/utils';
import type { LevelId } from '@/lib/types';

const levelOrder: LevelId[] = ['a1', 'a2', 'b1', 'b2'];

export default function LevelsPage() {
  const { progress, isLoading } = useProgress();

  if (isLoading || !progress) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-text-secondary">Loading...</div>
      </div>
    );
  }

  const currentLevelIndex = levelOrder.indexOf(progress.currentLevel);

  return (
    <div className="min-h-screen bg-background">
      <Header progress={progress} />
      <Sidebar currentLevel={progress.currentLevel} />

      <main className="pt-16 pb-20 md:pb-8 md:pl-64">
        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-text-primary mb-1">
              Learning Levels
            </h1>
            <p className="text-text-secondary">
              Master each level to unlock the next one
            </p>
          </div>

          {/* Levels Grid */}
          <div className="space-y-4">
            {levelOrder.map((levelId, index) => {
              const level = LEVELS[levelId];
              const isCurrent = progress.currentLevel === levelId;
              const isLocked = index > currentLevelIndex;
              const isCompleted = index < currentLevelIndex;
              const progressPercent = isCurrent ? 30 : isCompleted ? 100 : 0;

              return (
                <Link
                  key={levelId}
                  href={isLocked ? '#' : `/levels/${levelId}`}
                  className={isLocked ? 'cursor-not-allowed' : ''}
                  onClick={(e) => isLocked && e.preventDefault()}
                >
                  <Card
                    variant={isLocked ? 'default' : 'interactive'}
                    padding="lg"
                    className={`
                      ${isCurrent ? 'ring-2 ring-primary' : ''}
                      ${isLocked ? 'opacity-60' : ''}
                    `}
                  >
                    <div className="flex items-center gap-4">
                      {/* Level Badge */}
                      <div
                        className={`
                          w-16 h-16 rounded-xl flex items-center justify-center relative
                          ${isLocked ? 'bg-border' : getLevelGradientClass(levelId)}
                        `}
                      >
                        {isLocked ? (
                          <LockIcon size={24} className="text-text-muted" />
                        ) : (
                          <span className="text-white text-2xl font-bold">{level.name}</span>
                        )}
                        {isCompleted && (
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Level Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h2 className="text-lg font-semibold text-text-primary">
                            {level.name} - {level.fullName}
                          </h2>
                          {isCurrent && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                              Current
                            </span>
                          )}
                          {isCompleted && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-success/10 text-success">
                              Completed
                            </span>
                          )}
                          {isLocked && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-border text-text-muted">
                              Locked
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-text-secondary mb-3">
                          {level.description}
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="flex-1">
                            <ProgressBar
                              value={progressPercent}
                              max={100}
                              variant={isLocked ? 'default' : levelId}
                              size="sm"
                            />
                          </div>
                          <span className="text-sm font-medium text-text-secondary">
                            {progressPercent}%
                          </span>
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-xs text-text-muted">
                          <span>12 units</span>
                          <span>180 lessons</span>
                          <span>1800+ exercises</span>
                        </div>
                      </div>

                      {/* Arrow */}
                      {!isLocked && (
                        <ChevronRightIcon size={24} className="text-text-muted" />
                      )}
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Info Card */}
          <Card padding="md" className="mt-8 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-text-primary mb-1">Progressive Learning</h3>
                <p className="text-sm text-text-secondary">
                  Complete each level to unlock the next one. Each level builds upon the previous,
                  ensuring you have a solid foundation before moving on to more advanced topics.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

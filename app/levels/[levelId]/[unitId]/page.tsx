'use client';

import { use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header, BottomNav, Sidebar } from '@/components/layout';
import { Card, ProgressBar, Button } from '@/components/ui';
import { ChevronLeftIcon, ChevronRightIcon, LockIcon, CheckIcon, PlayIcon } from '@/components/icons';
import { useProgress } from '@/lib/hooks';
import { LEVELS } from '@/lib/constants';
import { getLevelGradientClass } from '@/lib/utils';
import { getUnitById } from '@/lib/data';
import type { LevelId } from '@/lib/types';

interface PageProps {
  params: Promise<{ levelId: string; unitId: string }>;
}

export default function UnitPage({ params }: PageProps) {
  const { levelId, unitId } = use(params);
  const router = useRouter();
  const { progress, isLoading, isLessonCompleted } = useProgress();

  const validLevelId = levelId as LevelId;
  const level = LEVELS[validLevelId];
  const unit = getUnitById(unitId);

  if (!level || !unit) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-2">Unit not found</h1>
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

  // Get unit number from unitId
  const unitNumber = parseInt(unitId.split('-u')[1]) || 1;
  const lessons = unit.lessons;
  const totalExercises = lessons.reduce((sum, l) => sum + l.exercises.length, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header progress={progress} />
      <Sidebar currentLevel={progress.currentLevel} />

      <main className="pt-16 pb-20 md:pb-8 md:pl-64">
        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
            <Link href="/levels" className="hover:text-text-primary">Levels</Link>
            <ChevronRightIcon size={14} />
            <Link href={`/levels/${validLevelId}`} className="hover:text-text-primary">
              {level.name}
            </Link>
            <ChevronRightIcon size={14} />
            <span className="text-text-primary">Unit {unitNumber}</span>
          </div>

          {/* Unit Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className={`w-14 h-14 rounded-xl ${getLevelGradientClass(validLevelId)} flex items-center justify-center`}>
              <span className="text-white text-3xl">{unit.icon || '📚'}</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm text-text-muted">Unit {unitNumber}</span>
              </div>
              <h1 className="text-2xl font-bold text-text-primary">
                {unit.title}
              </h1>
              <p className="text-text-secondary">
                {unit.description}
              </p>
            </div>
          </div>

          {/* Progress Overview */}
          <Card padding="md" className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-text-secondary">Unit Progress</span>
              <span className="text-sm font-medium text-text-primary">0%</span>
            </div>
            <ProgressBar value={0} max={100} variant={validLevelId} size="md" />
            <div className="flex items-center justify-between mt-3 text-xs text-text-muted">
              <span>{lessons.length} lessons</span>
              <span>{totalExercises} exercises</span>
              <span>~{Math.ceil(totalExercises / 10)} hours</span>
            </div>
          </Card>

          {/* Lessons List */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-text-primary">Lessons</h2>
            <span className="text-sm text-text-muted">0/{lessons.length} completed</span>
          </div>

          <div className="space-y-2">
            {lessons.map((lesson, index) => {
              const lessonFullId = lesson.id;
              const completed = isLessonCompleted(lessonFullId);
              // LESSON LOCK DISABLED - All lessons accessible
              // const isLocked = index > 0 && !isLessonCompleted(`${unitId}-l${index}`);
              // const isCurrent = index === 0 || (index > 0 && isLessonCompleted(`${unitId}-l${index}`));
              const isLocked = false;
              const isCurrent = false;

              // Extract lesson number from id (e.g., 'a1-u1-l1' -> 'l1')
              const lessonSlug = lesson.id.split('-').pop() || `l${index + 1}`;

              return (
                <Link
                  key={lesson.id}
                  href={`/levels/${validLevelId}/${unitId}/${lessonSlug}`}
                  // href={isLocked ? '#' : `/levels/${validLevelId}/${unitId}/${lesson.id}`}
                  // onClick={(e) => isLocked && e.preventDefault()}
                  // className={isLocked ? 'cursor-not-allowed' : ''}
                >
                  <Card
                    variant="interactive"
                    padding="sm"
                    // variant={isLocked ? 'default' : 'interactive'}
                    // className={`
                    //   ${isLocked ? 'opacity-50' : ''}
                    //   ${isCurrent && !completed ? 'ring-2 ring-primary' : ''}
                    // `}
                  >
                    <div className="flex items-center gap-3">
                      {/* Lesson Number/Status */}
                      <div
                        className={`
                          w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0
                          ${completed
                            ? 'bg-success text-white'
                            : 'bg-primary text-white'
                          }
                        `}
                      >
                        {completed ? (
                          <CheckIcon size={18} />
                        ) : (
                          index + 1
                        )}
                      </div>

                      {/* Lesson Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-text-primary text-sm truncate">
                          {lesson.title}
                        </h3>
                        <p className="text-xs text-text-secondary truncate">
                          {lesson.description}
                        </p>
                      </div>

                      {/* Exercise Count & Arrow */}
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs text-text-muted">
                          {lesson.exercises.length} exercises
                        </span>
                        <ChevronRightIcon size={18} className="text-text-muted" />
                        {/* LOCK LOGIC DISABLED
                        {!isLocked && (
                          isCurrent && !completed ? (
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                              <PlayIcon size={14} className="text-white ml-0.5" />
                            </div>
                          ) : (
                            <ChevronRightIcon size={18} className="text-text-muted" />
                          )
                        )}
                        */}
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Start Button */}
          <div className="mt-8">
            <Button
              fullWidth
              size="lg"
              onClick={() => {
                const firstLessonSlug = lessons[0]?.id.split('-').pop() || 'l1';
                router.push(`/levels/${validLevelId}/${unitId}/${firstLessonSlug}`);
              }}
              rightIcon={<PlayIcon size={20} />}
            >
              Start Learning
            </Button>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

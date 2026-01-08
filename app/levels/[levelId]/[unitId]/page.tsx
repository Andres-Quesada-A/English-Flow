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
import type { LevelId } from '@/lib/types';

// Sample lessons data (will be replaced with real data in Phase 3)
const SAMPLE_LESSONS = [
  { id: 'l1', title: 'Hello and Goodbye', description: 'Learn basic greetings in English', exercisesCount: 10 },
  { id: 'l2', title: 'Nice to Meet You', description: 'Introducing yourself to others', exercisesCount: 10 },
  { id: 'l3', title: 'How Are You?', description: 'Asking and answering about feelings', exercisesCount: 10 },
  { id: 'l4', title: 'Good Morning, Afternoon, Evening', description: 'Time-based greetings', exercisesCount: 10 },
  { id: 'l5', title: 'See You Later', description: 'Different ways to say goodbye', exercisesCount: 10 },
  { id: 'l6', title: 'Please and Thank You', description: 'Basic polite expressions', exercisesCount: 10 },
  { id: 'l7', title: 'Excuse Me and Sorry', description: 'Apologizing and getting attention', exercisesCount: 10 },
  { id: 'l8', title: 'Yes and No', description: 'Affirmative and negative responses', exercisesCount: 10 },
  { id: 'l9', title: 'I Don\'t Understand', description: 'Asking for clarification', exercisesCount: 10 },
  { id: 'l10', title: 'Can You Help Me?', description: 'Requesting assistance', exercisesCount: 10 },
  { id: 'l11', title: 'What\'s Your Name?', description: 'Asking for information', exercisesCount: 10 },
  { id: 'l12', title: 'Where Are You From?', description: 'Talking about origins', exercisesCount: 10 },
  { id: 'l13', title: 'Formal vs Informal Greetings', description: 'Register and context', exercisesCount: 10 },
  { id: 'l14', title: 'Greetings in Context', description: 'Real-world scenarios', exercisesCount: 10 },
  { id: 'l15', title: 'Unit Review', description: 'Practice everything you learned', exercisesCount: 15 },
];

interface PageProps {
  params: Promise<{ levelId: string; unitId: string }>;
}

export default function UnitPage({ params }: PageProps) {
  const { levelId, unitId } = use(params);
  const router = useRouter();
  const { progress, isLoading, isLessonCompleted } = useProgress();

  const validLevelId = levelId as LevelId;
  const level = LEVELS[validLevelId];

  if (!level) {
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
              <span className="text-white text-3xl">👋</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm text-text-muted">Unit {unitNumber}</span>
              </div>
              <h1 className="text-2xl font-bold text-text-primary">
                Greetings & Introductions
              </h1>
              <p className="text-text-secondary">
                Hello, goodbye, my name is, nice to meet you
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
              <span>15 lessons</span>
              <span>150 exercises</span>
              <span>~2 hours</span>
            </div>
          </Card>

          {/* Lessons List */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-text-primary">Lessons</h2>
            <span className="text-sm text-text-muted">0/15 completed</span>
          </div>

          <div className="space-y-2">
            {SAMPLE_LESSONS.map((lesson, index) => {
              const lessonFullId = `${unitId}-${lesson.id}`;
              const completed = isLessonCompleted(lessonFullId);
              const isLocked = index > 0 && !isLessonCompleted(`${unitId}-l${index}`);
              const isCurrent = index === 0 || (index > 0 && isLessonCompleted(`${unitId}-l${index}`));

              return (
                <Link
                  key={lesson.id}
                  href={isLocked ? '#' : `/levels/${validLevelId}/${unitId}/${lesson.id}`}
                  onClick={(e) => isLocked && e.preventDefault()}
                  className={isLocked ? 'cursor-not-allowed' : ''}
                >
                  <Card
                    variant={isLocked ? 'default' : 'interactive'}
                    padding="sm"
                    className={`
                      ${isLocked ? 'opacity-50' : ''}
                      ${isCurrent && !completed ? 'ring-2 ring-primary' : ''}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      {/* Lesson Number/Status */}
                      <div
                        className={`
                          w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0
                          ${completed
                            ? 'bg-success text-white'
                            : isLocked
                              ? 'bg-border text-text-muted'
                              : 'bg-primary text-white'
                          }
                        `}
                      >
                        {completed ? (
                          <CheckIcon size={18} />
                        ) : isLocked ? (
                          <LockIcon size={16} />
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
                          {lesson.exercisesCount} exercises
                        </span>
                        {!isLocked && (
                          isCurrent && !completed ? (
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                              <PlayIcon size={14} className="text-white ml-0.5" />
                            </div>
                          ) : (
                            <ChevronRightIcon size={18} className="text-text-muted" />
                          )
                        )}
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
              onClick={() => router.push(`/levels/${validLevelId}/${unitId}/l1`)}
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

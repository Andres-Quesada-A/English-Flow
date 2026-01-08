'use client';

import { use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header, BottomNav, Sidebar } from '@/components/layout';
import { Card, ProgressBar, Button } from '@/components/ui';
import { ChevronLeftIcon, ChevronRightIcon, LockIcon, CheckIcon } from '@/components/icons';
import { useProgress } from '@/lib/hooks';
import { LEVELS } from '@/lib/constants';
import { getLevelGradientClass } from '@/lib/utils';
import type { LevelId } from '@/lib/types';

// Sample units data (will be replaced with real data in Phase 3)
const UNITS_DATA: Record<LevelId, Array<{ id: string; title: string; description: string; lessonsCount: number; icon: string }>> = {
  a1: [
    { id: 'a1-u1', title: 'Greetings & Introductions', description: 'Hello, goodbye, my name is, nice to meet you', lessonsCount: 15, icon: '👋' },
    { id: 'a1-u2', title: 'The Alphabet & Numbers', description: 'A-Z pronunciation, numbers 0-100', lessonsCount: 15, icon: '🔢' },
    { id: 'a1-u3', title: 'Personal Information', description: 'Name, age, nationality, occupation', lessonsCount: 15, icon: '📋' },
    { id: 'a1-u4', title: 'Family & Relationships', description: 'Family members, possessive adjectives', lessonsCount: 15, icon: '👨‍👩‍👧‍👦' },
    { id: 'a1-u5', title: 'Colors & Adjectives', description: 'Basic colors, size, shape, descriptions', lessonsCount: 15, icon: '🎨' },
    { id: 'a1-u6', title: 'Days, Months & Time', description: 'Days of week, months, telling time', lessonsCount: 15, icon: '📅' },
    { id: 'a1-u7', title: 'Food & Drinks', description: 'Common foods, meals, ordering', lessonsCount: 15, icon: '🍕' },
    { id: 'a1-u8', title: 'Home & Furniture', description: 'Rooms, furniture, prepositions', lessonsCount: 15, icon: '🏠' },
    { id: 'a1-u9', title: 'Clothes & Shopping', description: 'Clothing items, sizes, prices', lessonsCount: 15, icon: '👕' },
    { id: 'a1-u10', title: 'Body Parts & Health', description: 'Body vocabulary, health expressions', lessonsCount: 15, icon: '💪' },
    { id: 'a1-u11', title: 'Weather & Seasons', description: 'Weather conditions, seasons', lessonsCount: 15, icon: '☀️' },
    { id: 'a1-u12', title: 'Verbs: To Be & To Have', description: 'Present simple, affirmative, negative', lessonsCount: 15, icon: '📝' },
  ],
  a2: [
    { id: 'a2-u1', title: 'Daily Routines', description: 'Present simple, adverbs of frequency', lessonsCount: 15, icon: '⏰' },
    { id: 'a2-u2', title: 'Jobs & Workplaces', description: 'Occupations, workplaces, responsibilities', lessonsCount: 15, icon: '💼' },
    { id: 'a2-u3', title: 'Transportation', description: 'Vehicles, directions, buying tickets', lessonsCount: 15, icon: '🚗' },
    { id: 'a2-u4', title: 'Places in Town', description: 'Buildings, giving directions', lessonsCount: 15, icon: '🏙️' },
    { id: 'a2-u5', title: 'Hobbies & Free Time', description: 'Activities, sports, likes/dislikes', lessonsCount: 15, icon: '⚽' },
    { id: 'a2-u6', title: 'Past Simple: Regular', description: '-ed endings, time expressions', lessonsCount: 15, icon: '📖' },
    { id: 'a2-u7', title: 'Past Simple: Irregular', description: 'Common irregular verbs, questions', lessonsCount: 15, icon: '📚' },
    { id: 'a2-u8', title: 'Comparatives', description: 'Comparing things, -er/more', lessonsCount: 15, icon: '⚖️' },
    { id: 'a2-u9', title: 'Superlatives', description: 'The best, the most, rankings', lessonsCount: 15, icon: '🏆' },
    { id: 'a2-u10', title: 'Future: Going To', description: 'Plans, intentions, predictions', lessonsCount: 15, icon: '🎯' },
    { id: 'a2-u11', title: 'Future: Will', description: 'Promises, offers, decisions', lessonsCount: 15, icon: '🔮' },
    { id: 'a2-u12', title: 'Modal Verbs Basic', description: 'Can, could, must, should', lessonsCount: 15, icon: '💡' },
  ],
  b1: [
    { id: 'b1-u1', title: 'Present Perfect', description: 'Experience, recent past, ever/never', lessonsCount: 15, icon: '✨' },
    { id: 'b1-u2', title: 'Present Perfect vs Past', description: 'When to use each, time expressions', lessonsCount: 15, icon: '🔄' },
    { id: 'b1-u3', title: 'Continuous Tenses', description: 'Present, past, future continuous', lessonsCount: 15, icon: '⏳' },
    { id: 'b1-u4', title: 'Conditionals: Zero & First', description: 'If clauses, real situations', lessonsCount: 15, icon: '🌡️' },
    { id: 'b1-u5', title: 'Conditionals: Second', description: 'Unreal present, imaginary situations', lessonsCount: 15, icon: '💭' },
    { id: 'b1-u6', title: 'Passive Voice', description: 'Present and past passive', lessonsCount: 15, icon: '🔧' },
    { id: 'b1-u7', title: 'Reported Speech', description: 'Say/tell, tense changes', lessonsCount: 15, icon: '💬' },
    { id: 'b1-u8', title: 'Relative Clauses', description: 'Who, which, that, where', lessonsCount: 15, icon: '🔗' },
    { id: 'b1-u9', title: 'Phrasal Verbs I', description: 'Common separable/inseparable', lessonsCount: 15, icon: '🚀' },
    { id: 'b1-u10', title: 'Connectors & Linking', description: 'Although, however, therefore', lessonsCount: 15, icon: '🔀' },
    { id: 'b1-u11', title: 'Gerunds & Infinitives', description: 'Verb patterns, -ing vs to', lessonsCount: 15, icon: '📐' },
    { id: 'b1-u12', title: 'Articles & Quantifiers', description: 'A/an/the, some/any, much/many', lessonsCount: 15, icon: '📊' },
  ],
  b2: [
    { id: 'b2-u1', title: 'Perfect Tenses Advanced', description: 'Present/past/future perfect continuous', lessonsCount: 15, icon: '🎓' },
    { id: 'b2-u2', title: 'Conditionals: Third', description: 'Past unreal, regrets, mixed', lessonsCount: 15, icon: '🔙' },
    { id: 'b2-u3', title: 'Advanced Passive', description: 'All tenses passive, causative', lessonsCount: 15, icon: '⚙️' },
    { id: 'b2-u4', title: 'Modals of Deduction', description: 'Must be, can\'t be, might have', lessonsCount: 15, icon: '🔍' },
    { id: 'b2-u5', title: 'Wish & Regret', description: 'Wish + past, if only', lessonsCount: 15, icon: '🌟' },
    { id: 'b2-u6', title: 'Inversion', description: 'Negative adverbs, formal English', lessonsCount: 15, icon: '🔃' },
    { id: 'b2-u7', title: 'Phrasal Verbs II', description: 'Advanced, multiple meanings', lessonsCount: 15, icon: '📈' },
    { id: 'b2-u8', title: 'Collocations', description: 'Common word partnerships', lessonsCount: 15, icon: '🤝' },
    { id: 'b2-u9', title: 'Idiomatic Expressions', description: 'Common idioms, figurative language', lessonsCount: 15, icon: '🎭' },
    { id: 'b2-u10', title: 'Formal vs Informal', description: 'Register, tone, appropriate use', lessonsCount: 15, icon: '👔' },
    { id: 'b2-u11', title: 'Advanced Connectors', description: 'Complex linking, academic writing', lessonsCount: 15, icon: '📝' },
    { id: 'b2-u12', title: 'Review & Integration', description: 'All grammar, comprehensive practice', lessonsCount: 15, icon: '🎯' },
  ],
};

interface PageProps {
  params: Promise<{ levelId: string }>;
}

export default function LevelPage({ params }: PageProps) {
  const { levelId } = use(params);
  const router = useRouter();
  const { progress, isLoading } = useProgress();

  const validLevelId = levelId as LevelId;
  const level = LEVELS[validLevelId];
  const units = UNITS_DATA[validLevelId] || [];

  if (!level) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-2">Level not found</h1>
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

  const levelOrder: LevelId[] = ['a1', 'a2', 'b1', 'b2'];
  const currentLevelIndex = levelOrder.indexOf(progress.currentLevel);
  const thisLevelIndex = levelOrder.indexOf(validLevelId);
  const isLocked = thisLevelIndex > currentLevelIndex;

  if (isLocked) {
    return (
      <div className="min-h-screen bg-background">
        <Header progress={progress} />
        <Sidebar currentLevel={progress.currentLevel} />

        <main className="pt-16 pb-20 md:pb-8 md:pl-64">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-2xl bg-border flex items-center justify-center mx-auto mb-6">
                <LockIcon size={40} className="text-text-muted" />
              </div>
              <h1 className="text-2xl font-bold text-text-primary mb-2">Level Locked</h1>
              <p className="text-text-secondary mb-6">
                Complete {LEVELS[progress.currentLevel].fullName} to unlock this level
              </p>
              <Button onClick={() => router.push(`/levels/${progress.currentLevel}`)}>
                Go to Current Level
              </Button>
            </div>
          </div>
        </main>

        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header progress={progress} />
      <Sidebar currentLevel={progress.currentLevel} />

      <main className="pt-16 pb-20 md:pb-8 md:pl-64">
        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Back Button */}
          <Link
            href="/levels"
            className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary mb-6"
          >
            <ChevronLeftIcon size={16} />
            Back to Levels
          </Link>

          {/* Level Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className={`w-16 h-16 rounded-xl ${getLevelGradientClass(validLevelId)} flex items-center justify-center`}>
              <span className="text-white text-2xl font-bold">{level.name}</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-text-primary">
                {level.name} - {level.fullName}
              </h1>
              <p className="text-text-secondary">{level.description}</p>
            </div>
          </div>

          {/* Progress Overview */}
          <Card padding="md" className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-text-secondary">Level Progress</span>
              <span className="text-sm font-medium text-text-primary">30%</span>
            </div>
            <ProgressBar value={30} max={100} variant={validLevelId} size="md" />
            <div className="flex items-center justify-between mt-3 text-xs text-text-muted">
              <span>12 units</span>
              <span>180 lessons</span>
              <span>1800+ exercises</span>
            </div>
          </Card>

          {/* Units List */}
          <h2 className="text-lg font-semibold text-text-primary mb-4">Units</h2>
          <div className="space-y-3">
            {units.map((unit, index) => {
              const isUnitLocked = index > 0; // For now, only first unit is unlocked
              const isUnitCompleted = false;
              const unitProgress = index === 0 ? 50 : 0;

              return (
                <Link
                  key={unit.id}
                  href={isUnitLocked ? '#' : `/levels/${validLevelId}/${unit.id}`}
                  onClick={(e) => isUnitLocked && e.preventDefault()}
                  className={isUnitLocked ? 'cursor-not-allowed' : ''}
                >
                  <Card
                    variant={isUnitLocked ? 'default' : 'interactive'}
                    padding="md"
                    className={isUnitLocked ? 'opacity-60' : ''}
                  >
                    <div className="flex items-center gap-4">
                      {/* Unit Number/Icon */}
                      <div
                        className={`
                          w-12 h-12 rounded-lg flex items-center justify-center text-2xl
                          ${isUnitLocked ? 'bg-border' : isUnitCompleted ? 'bg-success/10' : 'bg-primary/10'}
                        `}
                      >
                        {isUnitLocked ? (
                          <LockIcon size={20} className="text-text-muted" />
                        ) : isUnitCompleted ? (
                          <CheckIcon size={20} className="text-success" />
                        ) : (
                          unit.icon
                        )}
                      </div>

                      {/* Unit Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-xs font-medium text-text-muted">
                            Unit {index + 1}
                          </span>
                          {!isUnitLocked && unitProgress > 0 && unitProgress < 100 && (
                            <span className="text-xs px-1.5 py-0.5 rounded bg-primary/10 text-primary">
                              In Progress
                            </span>
                          )}
                        </div>
                        <h3 className="font-medium text-text-primary truncate">{unit.title}</h3>
                        <p className="text-sm text-text-secondary truncate">{unit.description}</p>
                        {!isUnitLocked && (
                          <div className="flex items-center gap-2 mt-2">
                            <ProgressBar
                              value={unitProgress}
                              max={100}
                              variant={validLevelId}
                              size="sm"
                              className="flex-1"
                            />
                            <span className="text-xs text-text-muted w-8">{unitProgress}%</span>
                          </div>
                        )}
                      </div>

                      {/* Arrow or Lock */}
                      {!isUnitLocked && (
                        <ChevronRightIcon size={20} className="text-text-muted shrink-0" />
                      )}
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

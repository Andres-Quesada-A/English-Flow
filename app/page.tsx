'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Header, BottomNav, Sidebar } from '@/components/layout';
import { Card, ProgressBar } from '@/components/ui';
import {
  FlameIcon,
  ZapIcon,
  ArrowRightIcon,
  BookIcon,
  TargetIcon,
  TrophyIcon,
  ChevronRightIcon
} from '@/components/icons';
import { useProgress } from '@/lib/hooks';
import { LEVELS, ACHIEVEMENTS } from '@/lib/constants';
import { getLevelGradientClass } from '@/lib/utils';
import type { LevelId } from '@/lib/types';

export default function HomePage() {
  const router = useRouter();
  const { progress, isLoading } = useProgress();

  // Redirect to welcome if not onboarded
  useEffect(() => {
    if (!isLoading && progress && !progress.settings.hasCompletedOnboarding) {
      router.push('/welcome');
    }
  }, [isLoading, progress, router]);

  if (isLoading || !progress) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-text-secondary">Loading...</div>
      </div>
    );
  }

  if (!progress.settings.hasCompletedOnboarding) {
    return null;
  }

  const currentLevel = LEVELS[progress.currentLevel];
  const completedLessons = Object.values(progress.lessons).filter(l => l.completed).length;
  const unlockedAchievements = ACHIEVEMENTS.filter(a => progress.achievements.includes(a.id));

  return (
    <div className="min-h-screen bg-background">
      <Header progress={progress} />
      <Sidebar currentLevel={progress.currentLevel} />

      <main className="pt-16 pb-20 md:pb-8 md:pl-64">
        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-text-primary mb-1">
              Welcome back!
            </h1>
            <p className="text-text-secondary">
              Continue your English learning journey
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card padding="md" className="text-center">
              <FlameIcon
                size={28}
                className={`mx-auto mb-2 ${progress.streak.current > 0 ? 'text-warning' : 'text-text-muted'}`}
              />
              <p className="text-2xl font-bold text-text-primary">{progress.streak.current}</p>
              <p className="text-xs text-text-secondary">Day Streak</p>
            </Card>
            <Card padding="md" className="text-center">
              <ZapIcon size={28} className="mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold text-text-primary">{progress.totalXP.toLocaleString()}</p>
              <p className="text-xs text-text-secondary">Total XP</p>
            </Card>
            <Card padding="md" className="text-center">
              <BookIcon size={28} className="mx-auto mb-2 text-success" />
              <p className="text-2xl font-bold text-text-primary">{completedLessons}</p>
              <p className="text-xs text-text-secondary">Lessons</p>
            </Card>
            <Card padding="md" className="text-center">
              <TrophyIcon size={28} className="mx-auto mb-2 text-warning" />
              <p className="text-2xl font-bold text-text-primary">{unlockedAchievements.length}</p>
              <p className="text-xs text-text-secondary">Achievements</p>
            </Card>
          </div>

          {/* Current Level */}
          <Card variant="interactive" padding="lg" className="mb-6">
            <Link href={`/levels/${progress.currentLevel}`} className="block">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl ${getLevelGradientClass(progress.currentLevel)} flex items-center justify-center`}>
                  <span className="text-white text-xl font-bold">{currentLevel.name}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="font-semibold text-text-primary">{currentLevel.fullName}</h2>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      Current Level
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary mb-3">{currentLevel.description}</p>
                  <ProgressBar
                    value={30}
                    max={100}
                    variant={progress.currentLevel}
                    size="sm"
                  />
                  <p className="text-xs text-text-muted mt-1">30% complete</p>
                </div>
                <ChevronRightIcon size={24} className="text-text-muted" />
              </div>
            </Link>
          </Card>

          {/* Quick Actions */}
          <h2 className="text-lg font-semibold text-text-primary mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link href={`/levels/${progress.currentLevel}`}>
              <Card variant="interactive" padding="md" className="h-full">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookIcon size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-text-primary">Continue Learning</h3>
                    <p className="text-sm text-text-secondary">Pick up where you left off</p>
                  </div>
                  <ArrowRightIcon size={20} className="text-text-muted" />
                </div>
              </Card>
            </Link>

            <Link href="/practice">
              <Card variant="interactive" padding="md" className="h-full">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                    <TargetIcon size={24} className="text-success" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-text-primary">Quick Practice</h3>
                    <p className="text-sm text-text-secondary">Random exercises to review</p>
                  </div>
                  <ArrowRightIcon size={20} className="text-text-muted" />
                </div>
              </Card>
            </Link>
          </div>

          {/* All Levels */}
          <h2 className="text-lg font-semibold text-text-primary mb-4">All Levels</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(Object.keys(LEVELS) as LevelId[]).map((levelId) => {
              const level = LEVELS[levelId];
              const isCurrent = progress.currentLevel === levelId;
              const progressPercent = levelId === progress.currentLevel ? 30 :
                                      levelId < progress.currentLevel ? 100 : 0;

              return (
                <Link key={levelId} href={`/levels/${levelId}`}>
                  <Card
                    variant="interactive"
                    padding="md"
                    className={isCurrent ? 'ring-2 ring-primary' : ''}
                  >
                    <div className={`w-10 h-10 rounded-lg ${getLevelGradientClass(levelId)} flex items-center justify-center mb-3`}>
                      <span className="text-white font-bold">{level.name}</span>
                    </div>
                    <h3 className="font-medium text-text-primary text-sm">{level.fullName}</h3>
                    <div className="mt-2">
                      <ProgressBar
                        value={progressPercent}
                        max={100}
                        variant={levelId}
                        size="sm"
                      />
                    </div>
                    <p className="text-xs text-text-muted mt-1">{progressPercent}%</p>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Recent Achievements */}
          {unlockedAchievements.length > 0 && (
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-text-primary">Recent Achievements</h2>
                <Link href="/achievements" className="text-sm text-primary hover:underline">
                  View all
                </Link>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {unlockedAchievements.slice(0, 5).map((achievement) => (
                  <Card key={achievement.id} padding="md" className="flex-shrink-0 text-center min-w-[120px]">
                    <span className="text-3xl">{achievement.icon}</span>
                    <p className="text-sm font-medium text-text-primary mt-2">{achievement.name}</p>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

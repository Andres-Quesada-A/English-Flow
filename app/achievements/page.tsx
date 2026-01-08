'use client';

import { Header, BottomNav, Sidebar } from '@/components/layout';
import { Card, ProgressBar } from '@/components/ui';
import { useProgress } from '@/lib/hooks';
import { ACHIEVEMENTS } from '@/lib/constants';

export default function AchievementsPage() {
  const { progress, isLoading } = useProgress();

  if (isLoading || !progress) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-text-secondary">Loading...</div>
      </div>
    );
  }

  const unlockedCount = progress.achievements.length;
  const totalCount = ACHIEVEMENTS.length;
  const percentage = Math.round((unlockedCount / totalCount) * 100);

  // Group achievements by category
  const categories = [
    {
      name: 'Learning Progress',
      achievements: ACHIEVEMENTS.filter(a =>
        ['first-steps', 'bookworm', 'dedicated-learner', 'unit-master'].includes(a.id)
      ),
    },
    {
      name: 'Streaks',
      achievements: ACHIEVEMENTS.filter(a =>
        ['on-fire', 'unstoppable', 'weekend-warrior', 'early-bird', 'night-owl'].includes(a.id)
      ),
    },
    {
      name: 'Perfection',
      achievements: ACHIEVEMENTS.filter(a =>
        ['perfect-score', 'perfectionist'].includes(a.id)
      ),
    },
    {
      name: 'Levels',
      achievements: ACHIEVEMENTS.filter(a =>
        a.id.startsWith('level-')
      ),
    },
    {
      name: 'XP Milestones',
      achievements: ACHIEVEMENTS.filter(a =>
        a.id.startsWith('xp-')
      ),
    },
    {
      name: 'Vocabulary',
      achievements: ACHIEVEMENTS.filter(a =>
        a.id.startsWith('vocabulary-')
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header progress={progress} />
      <Sidebar currentLevel={progress.currentLevel} />

      <main className="pt-16 pb-20 md:pb-8 md:pl-64">
        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-text-primary mb-1">
              Achievements
            </h1>
            <p className="text-text-secondary">
              Collect badges as you learn and progress
            </p>
          </div>

          {/* Progress Overview */}
          <Card padding="lg" className="mb-8">
            <div className="text-center mb-4">
              <p className="text-4xl font-bold text-text-primary">{unlockedCount}/{totalCount}</p>
              <p className="text-text-secondary">achievements unlocked</p>
            </div>
            <ProgressBar value={percentage} max={100} variant="primary" size="lg" showLabel />
          </Card>

          {/* Achievement Categories */}
          {categories.map((category) => (
            <div key={category.name} className="mb-8">
              <h2 className="text-lg font-semibold text-text-primary mb-4">{category.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {category.achievements.map((achievement) => {
                  const isUnlocked = progress.achievements.includes(achievement.id);

                  return (
                    <Card
                      key={achievement.id}
                      padding="md"
                      className={!isUnlocked ? 'opacity-50' : ''}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`
                            w-14 h-14 rounded-xl flex items-center justify-center text-3xl
                            ${isUnlocked ? 'bg-warning/10' : 'bg-border'}
                          `}
                        >
                          {isUnlocked ? achievement.icon : '🔒'}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-text-primary">{achievement.name}</h3>
                          <p className="text-sm text-text-secondary">{achievement.description}</p>
                        </div>
                        {isUnlocked && (
                          <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Motivation */}
          {unlockedCount < totalCount && (
            <Card padding="md" className="bg-primary/5 border-primary/20">
              <div className="text-center">
                <p className="text-text-primary font-medium mb-1">
                  Keep going! You&apos;re doing great!
                </p>
                <p className="text-sm text-text-secondary">
                  Complete more lessons and maintain your streak to unlock more achievements.
                </p>
              </div>
            </Card>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

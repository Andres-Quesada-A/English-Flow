'use client';

import { useState } from 'react';
import { Header, BottomNav, Sidebar } from '@/components/layout';
import { Card, Button, ProgressBar } from '@/components/ui';
import { ConfirmModal } from '@/components/ui/Modal';
import {
  FlameIcon,
  ZapIcon,
  BookIcon,
  TrophyIcon,
  SettingsIcon,
  RefreshIcon
} from '@/components/icons';
import { useProgress } from '@/lib/hooks';
import { LEVELS, ACHIEVEMENTS } from '@/lib/constants';
import { getLevelGradientClass, formatRelativeTime } from '@/lib/utils';

export default function ProfilePage() {
  const { progress, isLoading, reset } = useProgress();
  const [showResetModal, setShowResetModal] = useState(false);

  if (isLoading || !progress) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-text-secondary">Loading...</div>
      </div>
    );
  }

  const completedLessons = Object.values(progress.lessons).filter(l => l.completed).length;
  const perfectLessons = Object.values(progress.lessons).filter(l => l.perfectScore).length;
  const unlockedAchievements = ACHIEVEMENTS.filter(a => progress.achievements.includes(a.id));
  const currentLevel = LEVELS[progress.currentLevel];

  const handleReset = () => {
    reset();
    setShowResetModal(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header progress={progress} />
      <Sidebar currentLevel={progress.currentLevel} />

      <main className="pt-16 pb-20 md:pb-8 md:pl-64">
        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-text-primary mb-1">
              Your Profile
            </h1>
            <p className="text-text-secondary">
              Track your progress and achievements
            </p>
          </div>

          {/* Current Level */}
          <Card padding="lg" className="mb-6">
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 rounded-xl ${getLevelGradientClass(progress.currentLevel)} flex items-center justify-center`}>
                <span className="text-white text-2xl font-bold">{currentLevel.name}</span>
              </div>
              <div>
                <p className="text-sm text-text-muted mb-1">Current Level</p>
                <h2 className="text-xl font-bold text-text-primary">{currentLevel.fullName}</h2>
                <p className="text-sm text-text-secondary">{currentLevel.description}</p>
              </div>
            </div>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card padding="md" className="text-center">
              <ZapIcon size={28} className="mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold text-text-primary">{progress.totalXP.toLocaleString()}</p>
              <p className="text-xs text-text-secondary">Total XP</p>
            </Card>
            <Card padding="md" className="text-center">
              <FlameIcon
                size={28}
                className={`mx-auto mb-2 ${progress.streak.current > 0 ? 'text-warning' : 'text-text-muted'}`}
              />
              <p className="text-2xl font-bold text-text-primary">{progress.streak.current}</p>
              <p className="text-xs text-text-secondary">Current Streak</p>
            </Card>
            <Card padding="md" className="text-center">
              <BookIcon size={28} className="mx-auto mb-2 text-success" />
              <p className="text-2xl font-bold text-text-primary">{completedLessons}</p>
              <p className="text-xs text-text-secondary">Lessons Done</p>
            </Card>
            <Card padding="md" className="text-center">
              <TrophyIcon size={28} className="mx-auto mb-2 text-warning" />
              <p className="text-2xl font-bold text-text-primary">{unlockedAchievements.length}</p>
              <p className="text-xs text-text-secondary">Achievements</p>
            </Card>
          </div>

          {/* Detailed Stats */}
          <h2 className="text-lg font-semibold text-text-primary mb-4">Statistics</h2>
          <Card padding="md" className="mb-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Longest Streak</span>
                <span className="font-medium text-text-primary">{progress.streak.longest} days</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Perfect Lessons</span>
                <span className="font-medium text-text-primary">{perfectLessons}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Exercises to Review</span>
                <span className="font-medium text-text-primary">{progress.failedExercises.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Member Since</span>
                <span className="font-medium text-text-primary">
                  {formatRelativeTime(progress.createdAt)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Last Activity</span>
                <span className="font-medium text-text-primary">
                  {progress.streak.lastActivityDate || 'Never'}
                </span>
              </div>
            </div>
          </Card>

          {/* Achievements Preview */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-text-primary">Achievements</h2>
            <span className="text-sm text-text-muted">
              {unlockedAchievements.length}/{ACHIEVEMENTS.length}
            </span>
          </div>
          <Card padding="md" className="mb-8">
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
              {ACHIEVEMENTS.slice(0, 12).map((achievement) => {
                const isUnlocked = progress.achievements.includes(achievement.id);
                return (
                  <div
                    key={achievement.id}
                    className={`text-center ${!isUnlocked ? 'opacity-30' : ''}`}
                    title={`${achievement.name}: ${achievement.description}`}
                  >
                    <span className="text-3xl">{achievement.icon}</span>
                    <p className="text-xs text-text-secondary mt-1 truncate">{achievement.name}</p>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Settings */}
          <h2 className="text-lg font-semibold text-text-primary mb-4">Settings</h2>
          <Card padding="md">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <SettingsIcon size={20} className="text-text-muted" />
                  <div>
                    <p className="font-medium text-text-primary">Theme</p>
                    <p className="text-sm text-text-secondary">Follow system settings</p>
                  </div>
                </div>
                <span className="text-sm text-text-muted capitalize">{progress.settings.theme}</span>
              </div>

              <hr className="border-border" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <RefreshIcon size={20} className="text-error" />
                  <div>
                    <p className="font-medium text-text-primary">Reset Progress</p>
                    <p className="text-sm text-text-secondary">Start over from the beginning</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowResetModal(true)}
                  className="text-error border-error hover:bg-error hover:text-white"
                >
                  Reset
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <BottomNav />

      <ConfirmModal
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        onConfirm={handleReset}
        title="Reset Progress?"
        message="This will delete all your progress, XP, and achievements. This action cannot be undone."
        confirmText="Reset Everything"
        cancelText="Cancel"
        variant="error"
      />
    </div>
  );
}

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui';
import { GlobeIcon, BookIcon, TargetIcon, TrophyIcon, ArrowRightIcon, CheckIcon } from '@/components/icons';
import { LEVELS } from '@/lib/constants';
import { useProgress } from '@/lib/hooks';
import type { LevelId } from '@/lib/types';

const features = [
  {
    icon: BookIcon,
    title: '4 Complete Levels',
    description: 'From beginner (A1) to upper-intermediate (B2)',
  },
  {
    icon: TargetIcon,
    title: '10 Exercise Types',
    description: 'Multiple choice, fill blanks, translations, and more',
  },
  {
    icon: TrophyIcon,
    title: 'Gamification',
    description: 'Earn XP, maintain streaks, unlock achievements',
  },
];

export default function WelcomePage() {
  const router = useRouter();
  const { completeOnboarding, setCurrentLevel } = useProgress();
  const [step, setStep] = useState<'intro' | 'level-select'>('intro');
  const [selectedLevel, setSelectedLevel] = useState<LevelId | null>(null);

  const handleStart = () => {
    setStep('level-select');
  };

  const handleLevelSelect = (levelId: LevelId) => {
    setSelectedLevel(levelId);
  };

  const handleConfirm = () => {
    if (selectedLevel) {
      setCurrentLevel(selectedLevel);
      completeOnboarding();
      router.push('/');
    }
  };

  if (step === 'level-select') {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <div className="flex-1 max-w-2xl mx-auto px-4 py-12 flex flex-col">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-text-primary mb-2">
              Choose Your Level
            </h1>
            <p className="text-text-secondary">
              Select the level that best matches your current English skills.
              You can always change this later.
            </p>
          </div>

          {/* Level Cards */}
          <div className="flex-1 space-y-4">
            {(Object.keys(LEVELS) as LevelId[]).map((levelId) => {
              const level = LEVELS[levelId];
              const isSelected = selectedLevel === levelId;

              return (
                <button
                  key={levelId}
                  onClick={() => handleLevelSelect(levelId)}
                  className={`
                    w-full p-4 rounded-xl border-2 text-left transition-all duration-200
                    ${isSelected
                      ? 'border-primary bg-primary/5'
                      : 'border-border bg-surface hover:border-primary/50'
                    }
                  `}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`
                        w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg
                        ${levelId === 'a1' ? 'gradient-a1' : ''}
                        ${levelId === 'a2' ? 'gradient-a2' : ''}
                        ${levelId === 'b1' ? 'gradient-b1' : ''}
                        ${levelId === 'b2' ? 'gradient-b2' : ''}
                      `}
                    >
                      {level.name}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-text-primary">
                          {level.fullName}
                        </h3>
                        {isSelected && (
                          <CheckIcon size={20} className="text-primary" />
                        )}
                      </div>
                      <p className="text-sm text-text-secondary mt-1">
                        {level.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Recommendation */}
          <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-sm text-text-secondary">
              <span className="font-medium text-primary">Recommendation:</span> If you&apos;re
              just starting to learn English, choose <strong>A1 - Beginner</strong>.
              You&apos;ll learn the fundamentals step by step.
            </p>
          </div>

          {/* Continue Button */}
          <div className="mt-8">
            <Button
              fullWidth
              size="lg"
              disabled={!selectedLevel}
              onClick={handleConfirm}
              rightIcon={<ArrowRightIcon size={20} />}
            >
              Start Learning
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 max-w-2xl mx-auto px-4 py-12 flex flex-col">
        {/* Logo & Title */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6">
            <GlobeIcon size={40} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-text-primary mb-2">
            English<span className="text-primary">Flow</span>
          </h1>
          <p className="text-lg text-text-secondary">
            Learn English step by step
          </p>
        </div>

        {/* Features */}
        <div className="flex-1 space-y-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-surface rounded-xl border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <feature.icon size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-text-primary mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Preview */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center p-4 bg-surface rounded-xl border border-border">
            <p className="text-2xl font-bold text-primary">48</p>
            <p className="text-xs text-text-secondary">Units</p>
          </div>
          <div className="text-center p-4 bg-surface rounded-xl border border-border">
            <p className="text-2xl font-bold text-primary">720+</p>
            <p className="text-xs text-text-secondary">Lessons</p>
          </div>
          <div className="text-center p-4 bg-surface rounded-xl border border-border">
            <p className="text-2xl font-bold text-primary">7200+</p>
            <p className="text-xs text-text-secondary">Exercises</p>
          </div>
        </div>

        {/* CTA */}
        <Button
          fullWidth
          size="lg"
          onClick={handleStart}
          rightIcon={<ArrowRightIcon size={20} />}
        >
          Get Started
        </Button>

        <p className="text-center text-sm text-text-muted mt-4">
          Free forever. No account required.
        </p>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui';
import { TrophyIcon, StarIcon, ZapIcon, CheckIcon, ArrowRightIcon } from '@/components/icons';

interface LessonCompleteProps {
  score: number;
  totalExercises: number;
  correctExercises: number;
  xpEarned: number;
  isPerfect: boolean;
  onContinue: () => void;
  onRetry?: () => void;
}

export function LessonComplete({
  score,
  totalExercises,
  correctExercises,
  xpEarned,
  isPerfect,
  onContinue,
  onRetry,
}: LessonCompleteProps) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isPerfect) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  }, [isPerfect]);

  const getScoreMessage = () => {
    if (score === 100) return "Perfect! Amazing work!";
    if (score >= 80) return "Great job! Keep it up!";
    if (score >= 60) return "Good effort! Practice makes perfect.";
    return "Keep practicing! You'll get better.";
  };

  const getScoreColor = () => {
    if (score >= 80) return 'text-success';
    if (score >= 60) return 'text-warning';
    return 'text-error';
  };

  return (
    <div className="w-full max-w-md mx-auto text-center animate-scale-in">
      {/* Confetti effect for perfect score */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-20px',
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              <div
                className={`w-3 h-3 ${
                  ['bg-primary', 'bg-success', 'bg-warning', 'bg-error'][Math.floor(Math.random() * 4)]
                }`}
                style={{
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Trophy/Star Icon */}
      <div className="mb-6">
        {isPerfect ? (
          <div className="w-24 h-24 mx-auto rounded-full bg-warning/20 flex items-center justify-center animate-bounce">
            <TrophyIcon size={48} className="text-warning" />
          </div>
        ) : score >= 60 ? (
          <div className="w-24 h-24 mx-auto rounded-full bg-success/20 flex items-center justify-center">
            <StarIcon size={48} className="text-success" />
          </div>
        ) : (
          <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
            <CheckIcon size={48} className="text-primary" />
          </div>
        )}
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-text-primary mb-2">
        Lesson Complete!
      </h1>
      <p className="text-text-secondary mb-8">
        {getScoreMessage()}
      </p>

      {/* Score */}
      <div className="bg-surface border border-border rounded-2xl p-6 mb-6">
        <div className="text-5xl font-bold mb-2 transition-all">
          <span className={getScoreColor()}>{score}%</span>
        </div>
        <p className="text-text-secondary">
          {correctExercises} of {totalExercises} correct
        </p>
      </div>

      {/* XP Earned */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <ZapIcon size={24} className="text-primary" />
        <span className="text-xl font-semibold text-text-primary">
          +{xpEarned} XP
        </span>
      </div>

      {/* Stars */}
      <div className="flex justify-center gap-2 mb-8">
        {[1, 2, 3].map((star) => {
          const filled = (star === 1 && score >= 33) ||
                        (star === 2 && score >= 66) ||
                        (star === 3 && score === 100);
          return (
            <div
              key={star}
              className={`transition-all duration-300 ${
                filled ? 'scale-100' : 'scale-75 opacity-30'
              }`}
              style={{ animationDelay: `${star * 0.2}s` }}
            >
              <StarIcon
                size={40}
                className={filled ? 'text-warning fill-warning' : 'text-border'}
              />
            </div>
          );
        })}
      </div>

      {/* Buttons */}
      <div className="space-y-3">
        <Button
          fullWidth
          size="lg"
          onClick={onContinue}
          rightIcon={<ArrowRightIcon size={20} />}
        >
          Continue
        </Button>

        {score < 100 && onRetry && (
          <Button
            fullWidth
            size="lg"
            variant="outline"
            onClick={onRetry}
          >
            Try Again
          </Button>
        )}
      </div>
    </div>
  );
}

export default LessonComplete;

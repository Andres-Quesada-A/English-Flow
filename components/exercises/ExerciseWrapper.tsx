'use client';

import { type ReactNode } from 'react';
import { Card } from '@/components/ui';

interface ExerciseWrapperProps {
  currentQuestion: number;
  totalQuestions: number;
  instruction: string;
  hint?: string;
  showHint?: boolean;
  children: ReactNode;
}

export function ExerciseWrapper({
  currentQuestion,
  totalQuestions,
  instruction,
  hint,
  showHint = false,
  children,
}: ExerciseWrapperProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress indicator */}
      <div className="flex items-center justify-between mb-4 text-sm">
        <span className="text-text-secondary">
          Question {currentQuestion} of {totalQuestions}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: totalQuestions }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i < currentQuestion
                  ? 'bg-primary'
                  : i === currentQuestion - 1
                    ? 'bg-primary'
                    : 'bg-border'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Exercise Card */}
      <Card padding="lg" className="animate-fade-in">
        {/* Instruction */}
        <p className="text-lg font-medium text-text-primary mb-6">
          {instruction}
        </p>

        {/* Exercise Content */}
        <div className="mb-6">
          {children}
        </div>

        {/* Hint */}
        {hint && showHint && (
          <div className="mt-4 p-3 bg-warning/10 border border-warning/20 rounded-lg">
            <p className="text-sm text-warning">
              <span className="font-medium">Hint:</span> {hint}
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}

export default ExerciseWrapper;

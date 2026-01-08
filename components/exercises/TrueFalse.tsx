'use client';

import { useState } from 'react';
import { CheckIcon, XIcon } from '@/components/icons';
import type { TrueFalseExercise } from '@/lib/types';

interface TrueFalseProps {
  exercise: TrueFalseExercise;
  onAnswer: (isCorrect: boolean, attempts: number) => void;
  disabled?: boolean;
}

export function TrueFalse({ exercise, onAnswer, disabled = false }: TrueFalseProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSelect = (answer: boolean) => {
    if (disabled || showResult) return;
    setSelectedAnswer(answer);
  };

  const handleCheck = () => {
    if (selectedAnswer === null || showResult) return;

    const correct = selectedAnswer === exercise.correctAnswer;
    const newAttempts = attempts + 1;

    setAttempts(newAttempts);
    setIsCorrect(correct);
    setShowResult(true);

    setTimeout(() => {
      onAnswer(correct, newAttempts);
    }, 1500);
  };

  const getButtonStyle = (value: boolean) => {
    const baseStyles = `
      flex-1 p-6 rounded-xl border-2 transition-all duration-200
      flex flex-col items-center gap-2
    `;

    if (showResult) {
      if (value === exercise.correctAnswer) {
        return `${baseStyles} border-success bg-success/10`;
      }
      if (value === selectedAnswer && !isCorrect) {
        return `${baseStyles} border-error bg-error/10 animate-shake`;
      }
      return `${baseStyles} border-border bg-surface opacity-50`;
    }

    if (selectedAnswer === value) {
      return `${baseStyles} border-primary bg-primary/5`;
    }

    return `${baseStyles} border-border bg-surface hover:border-primary/50 hover:bg-primary/5 cursor-pointer`;
  };

  return (
    <div className="space-y-6">
      {/* Statement */}
      <div className="p-6 bg-surface border border-border rounded-xl">
        <p className="text-xl text-text-primary text-center font-medium">
          &ldquo;{exercise.statement}&rdquo;
        </p>
      </div>

      {/* True/False Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => handleSelect(true)}
          disabled={disabled || showResult}
          className={getButtonStyle(true)}
        >
          <div className={`
            w-12 h-12 rounded-full flex items-center justify-center
            ${showResult && exercise.correctAnswer === true
              ? 'bg-success'
              : showResult && selectedAnswer === true && !isCorrect
                ? 'bg-error'
                : selectedAnswer === true
                  ? 'bg-primary'
                  : 'bg-success/20'
            }
          `}>
            <CheckIcon size={24} className={
              showResult || selectedAnswer === true ? 'text-white' : 'text-success'
            } />
          </div>
          <span className={`
            text-lg font-semibold
            ${showResult && exercise.correctAnswer === true
              ? 'text-success'
              : showResult && selectedAnswer === true && !isCorrect
                ? 'text-error'
                : selectedAnswer === true
                  ? 'text-primary'
                  : 'text-text-primary'
            }
          `}>
            True
          </span>
        </button>

        <button
          onClick={() => handleSelect(false)}
          disabled={disabled || showResult}
          className={getButtonStyle(false)}
        >
          <div className={`
            w-12 h-12 rounded-full flex items-center justify-center
            ${showResult && exercise.correctAnswer === false
              ? 'bg-success'
              : showResult && selectedAnswer === false && !isCorrect
                ? 'bg-error'
                : selectedAnswer === false
                  ? 'bg-primary'
                  : 'bg-error/20'
            }
          `}>
            <XIcon size={24} className={
              showResult || selectedAnswer === false ? 'text-white' : 'text-error'
            } />
          </div>
          <span className={`
            text-lg font-semibold
            ${showResult && exercise.correctAnswer === false
              ? 'text-success'
              : showResult && selectedAnswer === false && !isCorrect
                ? 'text-error'
                : selectedAnswer === false
                  ? 'text-primary'
                  : 'text-text-primary'
            }
          `}>
            False
          </span>
        </button>
      </div>

      {/* Check Button */}
      {!showResult && (
        <button
          onClick={handleCheck}
          disabled={selectedAnswer === null || disabled}
          className={`
            w-full py-3 px-6 rounded-lg font-medium transition-all duration-200
            ${selectedAnswer !== null
              ? 'bg-primary text-white hover:bg-primary-dark'
              : 'bg-border text-text-muted cursor-not-allowed'
            }
          `}
        >
          Check Answer
        </button>
      )}

      {/* Explanation */}
      {showResult && exercise.explanation && (
        <div className={`
          p-4 rounded-lg
          ${isCorrect ? 'bg-success/10 border border-success/20' : 'bg-primary/10 border border-primary/20'}
        `}>
          <p className="text-sm text-text-secondary">
            <span className="font-medium text-text-primary">Explanation:</span> {exercise.explanation}
          </p>
        </div>
      )}
    </div>
  );
}

export default TrueFalse;

'use client';

import { useState } from 'react';
import { CheckIcon, XIcon } from '@/components/icons';
import type { ContextCompletionExercise } from '@/lib/types';

interface ContextCompletionProps {
  exercise: ContextCompletionExercise;
  onAnswer: (isCorrect: boolean, attempts: number) => void;
  disabled?: boolean;
}

export function ContextCompletion({ exercise, onAnswer, disabled = false }: ContextCompletionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (optionIndex: number) => {
    if (disabled || showResult) return;
    setSelectedAnswer(optionIndex);
  };

  const handleCheck = () => {
    if (selectedAnswer === null || showResult) return;

    const isCorrect = selectedAnswer === exercise.correctAnswer;
    const newAttempts = attempts + 1;

    setAttempts(newAttempts);
    setShowResult(true);

    setTimeout(() => {
      onAnswer(isCorrect, newAttempts);
    }, 1500);
  };

  const isCorrect = showResult && selectedAnswer === exercise.correctAnswer;
  const isWrong = showResult && selectedAnswer !== exercise.correctAnswer;

  return (
    <div className="space-y-6">
      {/* Context text */}
      <div className="p-6 bg-surface border border-border rounded-xl">
        <p className="text-lg text-text-primary leading-relaxed whitespace-pre-line">
          {exercise.context}
        </p>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {exercise.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrectOption = index === exercise.correctAnswer;

          return (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={disabled || showResult}
              className={`
                w-full p-4 rounded-xl text-left transition-all duration-200
                flex items-center gap-3 border-2
                ${!showResult
                  ? isSelected
                    ? 'border-primary bg-primary/10 text-text-primary'
                    : 'border-border hover:border-primary/50 hover:bg-surface'
                  : isCorrectOption
                    ? 'border-success bg-success/10 text-success'
                    : isSelected
                      ? 'border-error bg-error/10 text-error'
                      : 'border-border opacity-50'
                }
              `}
            >
              <span
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center font-medium shrink-0
                  ${!showResult
                    ? isSelected
                      ? 'bg-primary text-white'
                      : 'bg-border text-text-secondary'
                    : isCorrectOption
                      ? 'bg-success text-white'
                      : isSelected
                        ? 'bg-error text-white'
                        : 'bg-border text-text-secondary'
                  }
                `}
              >
                {showResult && isCorrectOption ? (
                  <CheckIcon size={16} />
                ) : showResult && isSelected && !isCorrectOption ? (
                  <XIcon size={16} />
                ) : (
                  String.fromCharCode(65 + index)
                )}
              </span>
              <span className="flex-1 text-text-primary">{option}</span>
            </button>
          );
        })}
      </div>

      {/* Result feedback */}
      {showResult && (
        <div className={`p-4 rounded-lg ${isCorrect ? 'bg-success/10 border border-success' : 'bg-error/10 border border-error'}`}>
          <div className="flex items-center gap-2">
            {isCorrect ? (
              <>
                <CheckIcon size={20} className="text-success" />
                <span className="text-success font-medium">Correct!</span>
              </>
            ) : (
              <>
                <XIcon size={20} className="text-error" />
                <span className="text-error font-medium">
                  Incorrect. The correct answer is: {exercise.options[exercise.correctAnswer]}
                </span>
              </>
            )}
          </div>
        </div>
      )}

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
        <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
          <p className="text-sm text-text-secondary">
            <span className="font-medium text-text-primary">Explanation:</span> {exercise.explanation}
          </p>
        </div>
      )}
    </div>
  );
}

export default ContextCompletion;

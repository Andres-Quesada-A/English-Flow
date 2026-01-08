'use client';

import { useState } from 'react';
import { CheckIcon, XIcon } from '@/components/icons';
import type { MultipleChoiceExercise } from '@/lib/types';

interface MultipleChoiceProps {
  exercise: MultipleChoiceExercise;
  onAnswer: (isCorrect: boolean, attempts: number) => void;
  disabled?: boolean;
}

export function MultipleChoice({ exercise, onAnswer, disabled = false }: MultipleChoiceProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSelect = (index: number) => {
    if (disabled || showResult) return;
    setSelectedOption(index);
  };

  const handleCheck = () => {
    if (selectedOption === null || showResult) return;

    const correct = selectedOption === exercise.correctAnswer;
    const newAttempts = attempts + 1;

    setAttempts(newAttempts);
    setIsCorrect(correct);
    setShowResult(true);

    // Small delay before calling onAnswer to show feedback
    setTimeout(() => {
      onAnswer(correct, newAttempts);
    }, 1500);
  };

  const getOptionStyles = (index: number) => {
    const baseStyles = `
      w-full p-4 rounded-lg border-2 text-left transition-all duration-200
      flex items-center gap-3
    `;

    if (showResult) {
      if (index === exercise.correctAnswer) {
        return `${baseStyles} border-success bg-success/10 text-success`;
      }
      if (index === selectedOption && !isCorrect) {
        return `${baseStyles} border-error bg-error/10 text-error animate-shake`;
      }
      return `${baseStyles} border-border bg-surface text-text-muted opacity-50`;
    }

    if (selectedOption === index) {
      return `${baseStyles} border-primary bg-primary/5 text-text-primary`;
    }

    return `${baseStyles} border-border bg-surface text-text-primary hover:border-primary/50 hover:bg-primary/5 cursor-pointer`;
  };

  return (
    <div className="space-y-4">
      {/* Question */}
      <p className="text-xl text-text-primary font-medium mb-6">
        {exercise.question}
      </p>

      {/* Options */}
      <div className="space-y-3">
        {exercise.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            disabled={disabled || showResult}
            className={getOptionStyles(index)}
          >
            <span className={`
              w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium shrink-0
              ${showResult && index === exercise.correctAnswer
                ? 'bg-success text-white'
                : showResult && index === selectedOption && !isCorrect
                  ? 'bg-error text-white'
                  : selectedOption === index
                    ? 'bg-primary text-white'
                    : 'bg-border-light text-text-secondary'
              }
            `}>
              {showResult && index === exercise.correctAnswer ? (
                <CheckIcon size={16} />
              ) : showResult && index === selectedOption && !isCorrect ? (
                <XIcon size={16} />
              ) : (
                String.fromCharCode(65 + index)
              )}
            </span>
            <span className="flex-1">{option}</span>
          </button>
        ))}
      </div>

      {/* Check Button */}
      {!showResult && (
        <button
          onClick={handleCheck}
          disabled={selectedOption === null || disabled}
          className={`
            w-full mt-6 py-3 px-6 rounded-lg font-medium transition-all duration-200
            ${selectedOption !== null
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
          mt-4 p-4 rounded-lg
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

export default MultipleChoice;

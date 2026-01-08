'use client';

import { useState } from 'react';
import { CheckIcon, XIcon, RefreshIcon } from '@/components/icons';
import type { WordOrderExercise } from '@/lib/types';

interface WordOrderProps {
  exercise: WordOrderExercise;
  onAnswer: (isCorrect: boolean, attempts: number) => void;
  disabled?: boolean;
}

export function WordOrder({ exercise, onAnswer, disabled = false }: WordOrderProps) {
  const [selectedWords, setSelectedWords] = useState<number[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const availableWords = exercise.words
    .map((word, index) => ({ word, index }))
    .filter((_, idx) => !selectedWords.includes(idx));

  const handleSelectWord = (index: number) => {
    if (disabled || showResult) return;
    setSelectedWords([...selectedWords, index]);
  };

  const handleRemoveWord = (position: number) => {
    if (disabled || showResult) return;
    setSelectedWords(selectedWords.filter((_, idx) => idx !== position));
  };

  const handleReset = () => {
    if (disabled || showResult) return;
    setSelectedWords([]);
  };

  const handleCheck = () => {
    if (selectedWords.length !== exercise.words.length || showResult) return;

    const correct = selectedWords.every((wordIndex, position) =>
      wordIndex === exercise.correctOrder[position]
    );
    const newAttempts = attempts + 1;

    setAttempts(newAttempts);
    setIsCorrect(correct);
    setShowResult(true);

    setTimeout(() => {
      onAnswer(correct, newAttempts);
    }, 1500);
  };

  const getCorrectSentence = () => {
    return exercise.correctOrder.map(idx => exercise.words[idx]).join(' ');
  };

  return (
    <div className="space-y-6">
      {/* Selected words area */}
      <div className="min-h-[60px] p-4 border-2 border-dashed border-border rounded-lg bg-surface">
        {selectedWords.length === 0 ? (
          <p className="text-text-muted text-center">
            Click on the words below to form a sentence
          </p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {selectedWords.map((wordIndex, position) => (
              <button
                key={`selected-${position}`}
                onClick={() => handleRemoveWord(position)}
                disabled={disabled || showResult}
                className={`
                  px-4 py-2 rounded-lg font-medium transition-all duration-200
                  ${showResult
                    ? isCorrect
                      ? 'bg-success text-white'
                      : wordIndex === exercise.correctOrder[position]
                        ? 'bg-success text-white'
                        : 'bg-error text-white animate-shake'
                    : 'bg-primary text-white hover:bg-primary-dark cursor-pointer'
                  }
                `}
              >
                {exercise.words[wordIndex]}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Available words */}
      <div className="flex flex-wrap gap-2 justify-center">
        {availableWords.map(({ word, index }) => (
          <button
            key={`available-${index}`}
            onClick={() => handleSelectWord(index)}
            disabled={disabled || showResult}
            className="px-4 py-2 rounded-lg font-medium bg-border-light text-text-primary
                       hover:bg-primary/10 hover:text-primary transition-all duration-200
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {word}
          </button>
        ))}
      </div>

      {/* Reset button */}
      {selectedWords.length > 0 && !showResult && (
        <button
          onClick={handleReset}
          disabled={disabled}
          className="flex items-center gap-2 mx-auto text-sm text-text-secondary hover:text-text-primary"
        >
          <RefreshIcon size={16} />
          Reset
        </button>
      )}

      {/* Show correct answer if wrong */}
      {showResult && !isCorrect && (
        <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
          <p className="text-sm text-text-secondary mb-1">Correct answer:</p>
          <p className="text-lg font-medium text-success">{getCorrectSentence()}</p>
        </div>
      )}

      {/* Check Button */}
      {!showResult && (
        <button
          onClick={handleCheck}
          disabled={selectedWords.length !== exercise.words.length || disabled}
          className={`
            w-full py-3 px-6 rounded-lg font-medium transition-all duration-200
            ${selectedWords.length === exercise.words.length
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

export default WordOrder;

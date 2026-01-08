'use client';

import { useState, useRef, useEffect } from 'react';
import { CheckIcon, XIcon } from '@/components/icons';
import { checkAnswer } from '@/lib/utils';
import type { FillBlankExercise } from '@/lib/types';

interface FillInBlankProps {
  exercise: FillBlankExercise;
  onAnswer: (isCorrect: boolean, attempts: number) => void;
  disabled?: boolean;
}

export function FillInBlank({ exercise, onAnswer, disabled = false }: FillInBlankProps) {
  const [userAnswer, setUserAnswer] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current && !disabled) {
      inputRef.current.focus();
    }
  }, [disabled]);

  // Split sentence into parts around the blank
  const parts = exercise.question.split('___');
  const beforeBlank = parts[0] || '';
  const afterBlank = parts[1] || '';

  const handleCheck = () => {
    if (!userAnswer.trim() || showResult) return;

    const correct = checkAnswer(userAnswer, exercise.correctAnswer, exercise.acceptableAnswers);
    const newAttempts = attempts + 1;

    setAttempts(newAttempts);
    setIsCorrect(correct);
    setShowResult(true);

    setTimeout(() => {
      onAnswer(correct, newAttempts);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCheck();
    }
  };

  return (
    <div className="space-y-6">
      {/* Sentence with blank */}
      <div className="text-xl text-text-primary leading-relaxed">
        <span>{beforeBlank}</span>
        <span className="inline-flex items-center mx-1">
          {showResult ? (
            <span
              className={`
                inline-flex items-center gap-2 px-3 py-1 rounded-lg font-medium
                ${isCorrect
                  ? 'bg-success/10 text-success border border-success'
                  : 'bg-error/10 text-error border border-error'
                }
              `}
            >
              {isCorrect ? userAnswer : exercise.correctAnswer}
              {isCorrect ? <CheckIcon size={16} /> : <XIcon size={16} />}
            </span>
          ) : (
            <input
              ref={inputRef}
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={disabled || showResult}
              placeholder="Type your answer"
              className={`
                w-40 px-3 py-1 border-b-2 bg-transparent text-center font-medium
                focus:outline-none transition-colors
                ${userAnswer
                  ? 'border-primary text-text-primary'
                  : 'border-text-muted text-text-muted'
                }
              `}
              autoComplete="off"
              autoCapitalize="off"
              spellCheck="false"
            />
          )}
        </span>
        <span>{afterBlank}</span>
      </div>

      {/* Show wrong answer if incorrect */}
      {showResult && !isCorrect && (
        <div className="flex items-center gap-2 text-error">
          <XIcon size={18} />
          <span className="text-sm">
            Your answer: <span className="font-medium line-through">{userAnswer}</span>
          </span>
        </div>
      )}

      {/* Check Button */}
      {!showResult && (
        <button
          onClick={handleCheck}
          disabled={!userAnswer.trim() || disabled}
          className={`
            w-full py-3 px-6 rounded-lg font-medium transition-all duration-200
            ${userAnswer.trim()
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

export default FillInBlank;

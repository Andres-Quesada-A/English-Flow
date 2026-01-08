'use client';

import { useState, useRef, useEffect } from 'react';
import { CheckIcon, XIcon } from '@/components/icons';
import { checkAnswer } from '@/lib/utils';
import type { TranslationExercise } from '@/lib/types';

interface TranslationProps {
  exercise: TranslationExercise;
  onAnswer: (isCorrect: boolean, attempts: number) => void;
  disabled?: boolean;
}

export function Translation({ exercise, onAnswer, disabled = false }: TranslationProps) {
  const [userAnswer, setUserAnswer] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current && !disabled) {
      textareaRef.current.focus();
    }
  }, [disabled]);

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

  return (
    <div className="space-y-6">
      {/* Source text (Spanish) */}
      <div className="p-6 bg-surface border border-border rounded-xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">🇪🇸</span>
          <span className="text-sm text-text-muted">Spanish</span>
        </div>
        <p className="text-xl text-text-primary font-medium">
          {exercise.question}
        </p>
      </div>

      {/* Arrow */}
      <div className="flex justify-center">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Translation input (English) */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🇬🇧</span>
          <span className="text-sm text-text-muted">Translate to English</span>
        </div>

        {showResult ? (
          <div className={`
            p-4 rounded-xl border-2
            ${isCorrect
              ? 'border-success bg-success/10'
              : 'border-error bg-error/10'
            }
          `}>
            <div className="flex items-start gap-2">
              {isCorrect ? (
                <CheckIcon size={20} className="text-success mt-0.5" />
              ) : (
                <XIcon size={20} className="text-error mt-0.5" />
              )}
              <div className="flex-1">
                <p className={`font-medium ${isCorrect ? 'text-success' : 'text-error'}`}>
                  {isCorrect ? 'Correct!' : 'Your answer:'}
                </p>
                {!isCorrect && (
                  <p className="text-error line-through">{userAnswer}</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <textarea
            ref={textareaRef}
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            disabled={disabled || showResult}
            placeholder="Type your translation in English..."
            className="w-full p-4 border-2 border-border rounded-xl bg-surface text-text-primary
                       placeholder:text-text-muted resize-none h-24
                       focus:outline-none focus:border-primary transition-colors"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck="false"
          />
        )}
      </div>

      {/* Show correct answer if wrong */}
      {showResult && !isCorrect && (
        <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
          <p className="text-sm text-text-secondary mb-1">Correct translation:</p>
          <p className="text-lg font-medium text-success">{exercise.correctAnswer}</p>
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
          Check Translation
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

export default Translation;

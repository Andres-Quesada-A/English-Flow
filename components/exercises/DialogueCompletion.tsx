'use client';

import { useState } from 'react';
import { CheckIcon, XIcon } from '@/components/icons';
import type { DialogueCompletionExercise } from '@/lib/types';

interface DialogueCompletionProps {
  exercise: DialogueCompletionExercise;
  onAnswer: (isCorrect: boolean, attempts: number) => void;
  disabled?: boolean;
}

export function DialogueCompletion({ exercise, onAnswer, disabled = false }: DialogueCompletionProps) {
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

    setTimeout(() => {
      onAnswer(correct, newAttempts);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Dialogue */}
      <div className="space-y-3">
        {exercise.dialogue.map((line, index) => {
          const isBlankLine = line.isBlank;
          const speakerColor = line.speaker === 'A' ? 'bg-primary' : 'bg-success';
          const bubbleColor = line.speaker === 'A'
            ? 'bg-primary/5 border-primary/20'
            : 'bg-success/5 border-success/20';

          return (
            <div
              key={index}
              className={`flex gap-3 ${line.speaker === 'B' ? 'flex-row-reverse' : ''}`}
            >
              {/* Speaker avatar */}
              <div className={`w-10 h-10 rounded-full ${speakerColor} flex items-center justify-center shrink-0`}>
                <span className="text-white font-bold">{line.speaker}</span>
              </div>

              {/* Speech bubble */}
              <div
                className={`
                  flex-1 max-w-[80%] p-4 rounded-2xl border
                  ${isBlankLine
                    ? showResult
                      ? isCorrect
                        ? 'bg-success/10 border-success'
                        : 'bg-error/10 border-error'
                      : 'bg-warning/5 border-warning/20 border-dashed'
                    : bubbleColor
                  }
                  ${line.speaker === 'B' ? 'rounded-tr-none' : 'rounded-tl-none'}
                `}
              >
                {isBlankLine ? (
                  showResult ? (
                    <div className="flex items-center gap-2">
                      {isCorrect ? (
                        <CheckIcon size={18} className="text-success" />
                      ) : (
                        <XIcon size={18} className="text-error" />
                      )}
                      <span className={`font-medium ${isCorrect ? 'text-success' : 'text-error'}`}>
                        {exercise.options[showResult ? exercise.correctAnswer : selectedOption!]}
                      </span>
                    </div>
                  ) : (
                    <p className="text-warning font-medium">
                      {selectedOption !== null
                        ? exercise.options[selectedOption]
                        : 'Select an answer below...'}
                    </p>
                  )
                ) : (
                  <p className="text-text-primary">{line.text}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Options */}
      {!showResult && (
        <div className="space-y-2">
          <p className="text-sm text-text-muted text-center mb-3">
            Choose the best response:
          </p>
          {exercise.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={disabled || showResult}
              className={`
                w-full p-4 rounded-lg border-2 text-left transition-all duration-200
                ${selectedOption === index
                  ? 'border-primary bg-primary/5 text-primary'
                  : 'border-border bg-surface text-text-primary hover:border-primary/50'
                }
              `}
            >
              <div className="flex items-center gap-3">
                <span className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                  ${selectedOption === index
                    ? 'bg-primary text-white'
                    : 'bg-border-light text-text-secondary'
                  }
                `}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1">{option}</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Show wrong answer */}
      {showResult && !isCorrect && (
        <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
          <p className="text-sm text-text-secondary mb-1">Correct answer:</p>
          <p className="font-medium text-success">{exercise.options[exercise.correctAnswer]}</p>
        </div>
      )}

      {/* Check Button */}
      {!showResult && (
        <button
          onClick={handleCheck}
          disabled={selectedOption === null || disabled}
          className={`
            w-full py-3 px-6 rounded-lg font-medium transition-all duration-200
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

export default DialogueCompletion;

'use client';

import { useState } from 'react';
import { CheckIcon, XIcon } from '@/components/icons';
import { shuffleArray } from '@/lib/utils';
import type { MatchingExercise } from '@/lib/types';

interface MatchingProps {
  exercise: MatchingExercise;
  onAnswer: (isCorrect: boolean, attempts: number) => void;
  disabled?: boolean;
}

export function Matching({ exercise, onAnswer, disabled = false }: MatchingProps) {
  // Shuffle right side options
  const [shuffledRight] = useState(() =>
    shuffleArray(exercise.pairs.map((p, i) => ({ text: p.right, originalIndex: i })))
  );

  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [matches, setMatches] = useState<Map<number, number>>(new Map());
  const [attempts, setAttempts] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [results, setResults] = useState<Map<number, boolean>>(new Map());

  const handleLeftClick = (index: number) => {
    if (disabled || showResult || matches.has(index)) return;
    setSelectedLeft(selectedLeft === index ? null : index);
  };

  const handleRightClick = (shuffledIndex: number) => {
    if (disabled || showResult || selectedLeft === null) return;

    // Check if this right item is already matched
    const isRightMatched = Array.from(matches.values()).includes(shuffledIndex);
    if (isRightMatched) return;

    // Create the match
    const newMatches = new Map(matches);
    newMatches.set(selectedLeft, shuffledIndex);
    setMatches(newMatches);
    setSelectedLeft(null);
  };

  const handleCheck = () => {
    if (matches.size !== exercise.pairs.length || showResult) return;

    const newResults = new Map<number, boolean>();
    let allCorrect = true;

    matches.forEach((shuffledRightIndex, leftIndex) => {
      const correctRightIndex = shuffledRight[shuffledRightIndex].originalIndex;
      const isCorrect = leftIndex === correctRightIndex;
      newResults.set(leftIndex, isCorrect);
      if (!isCorrect) allCorrect = false;
    });

    const newAttempts = attempts + 1;

    setAttempts(newAttempts);
    setResults(newResults);
    setShowResult(true);

    setTimeout(() => {
      onAnswer(allCorrect, newAttempts);
    }, 1500);
  };

  const getLeftItemStyle = (index: number) => {
    const isMatched = matches.has(index);
    const isSelected = selectedLeft === index;

    if (showResult) {
      const isCorrect = results.get(index);
      if (isCorrect) {
        return 'border-success bg-success/10 text-success';
      } else {
        return 'border-error bg-error/10 text-error';
      }
    }

    if (isMatched) {
      return 'border-primary bg-primary/10 text-primary';
    }

    if (isSelected) {
      return 'border-primary bg-primary/5 text-primary ring-2 ring-primary';
    }

    return 'border-border bg-surface text-text-primary hover:border-primary/50 cursor-pointer';
  };

  const getRightItemStyle = (shuffledIndex: number) => {
    const isMatched = Array.from(matches.values()).includes(shuffledIndex);
    const originalIndex = shuffledRight[shuffledIndex].originalIndex;

    if (showResult) {
      // Find which left item matched with this right item
      let matchedLeftIndex: number | null = null;
      matches.forEach((rightIdx, leftIdx) => {
        if (rightIdx === shuffledIndex) {
          matchedLeftIndex = leftIdx;
        }
      });

      if (matchedLeftIndex !== null) {
        const isCorrect = matchedLeftIndex === originalIndex;
        if (isCorrect) {
          return 'border-success bg-success/10 text-success';
        } else {
          return 'border-error bg-error/10 text-error';
        }
      }
    }

    if (isMatched) {
      return 'border-primary bg-primary/10 text-primary';
    }

    if (selectedLeft !== null && !isMatched) {
      return 'border-border bg-surface text-text-primary hover:border-primary/50 cursor-pointer';
    }

    return 'border-border bg-surface text-text-primary';
  };

  return (
    <div className="space-y-6">
      <p className="text-center text-text-secondary mb-4">
        Click an item on the left, then click its match on the right
      </p>

      {/* Matching columns */}
      <div className="grid grid-cols-2 gap-4">
        {/* Left column */}
        <div className="space-y-3">
          {exercise.pairs.map((pair, index) => (
            <button
              key={`left-${index}`}
              onClick={() => handleLeftClick(index)}
              disabled={disabled || showResult || matches.has(index)}
              className={`
                w-full p-4 rounded-lg border-2 text-left transition-all duration-200
                flex items-center gap-2
                ${getLeftItemStyle(index)}
              `}
            >
              <span className="flex-1">{pair.left}</span>
              {showResult && (
                results.get(index)
                  ? <CheckIcon size={18} className="text-success" />
                  : <XIcon size={18} className="text-error" />
              )}
            </button>
          ))}
        </div>

        {/* Right column */}
        <div className="space-y-3">
          {shuffledRight.map((item, shuffledIndex) => (
            <button
              key={`right-${shuffledIndex}`}
              onClick={() => handleRightClick(shuffledIndex)}
              disabled={disabled || showResult || selectedLeft === null}
              className={`
                w-full p-4 rounded-lg border-2 text-left transition-all duration-200
                ${getRightItemStyle(shuffledIndex)}
              `}
            >
              {item.text}
            </button>
          ))}
        </div>
      </div>

      {/* Match count */}
      <p className="text-center text-sm text-text-muted">
        {matches.size} of {exercise.pairs.length} matched
      </p>

      {/* Check Button */}
      {!showResult && (
        <button
          onClick={handleCheck}
          disabled={matches.size !== exercise.pairs.length || disabled}
          className={`
            w-full py-3 px-6 rounded-lg font-medium transition-all duration-200
            ${matches.size === exercise.pairs.length
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

export default Matching;

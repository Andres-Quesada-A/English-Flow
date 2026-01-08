'use client';

import { useState } from 'react';
import { CheckIcon, XIcon } from '@/components/icons';
import { shuffleArray } from '@/lib/utils';
import type { CategorizationExercise } from '@/lib/types';

interface CategorizationProps {
  exercise: CategorizationExercise;
  onAnswer: (isCorrect: boolean, attempts: number) => void;
  disabled?: boolean;
}

export function Categorization({ exercise, onAnswer, disabled = false }: CategorizationProps) {
  // Shuffle items initially
  const [shuffledItems] = useState(() => shuffleArray([...exercise.items]));
  const [categorizedItems, setCategorizedItems] = useState<Record<number, string[]>>(() => {
    const initial: Record<number, string[]> = {};
    exercise.categories.forEach((_, idx) => {
      initial[idx] = [];
    });
    return initial;
  });
  const [attempts, setAttempts] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [results, setResults] = useState<Record<string, boolean>>({});

  // Get uncategorized items
  const categorizedTexts = Object.values(categorizedItems).flat();
  const uncategorizedItems = shuffledItems.filter(
    item => !categorizedTexts.includes(item.text)
  );

  const handleDrop = (categoryIndex: number, text: string) => {
    if (disabled || showResult) return;

    // Remove from any existing category
    const newCategorized = { ...categorizedItems };
    Object.keys(newCategorized).forEach(key => {
      newCategorized[parseInt(key)] = newCategorized[parseInt(key)].filter(t => t !== text);
    });

    // Add to new category
    newCategorized[categoryIndex] = [...newCategorized[categoryIndex], text];
    setCategorizedItems(newCategorized);
  };

  const handleRemove = (categoryIndex: number, text: string) => {
    if (disabled || showResult) return;

    const newCategorized = { ...categorizedItems };
    newCategorized[categoryIndex] = newCategorized[categoryIndex].filter(t => t !== text);
    setCategorizedItems(newCategorized);
  };

  const handleCheck = () => {
    const totalCategorized = Object.values(categorizedItems).flat().length;
    if (totalCategorized !== exercise.items.length || showResult) return;

    const newResults: Record<string, boolean> = {};
    let allCorrect = true;

    Object.entries(categorizedItems).forEach(([categoryIdx, texts]) => {
      texts.forEach(text => {
        const item = exercise.items.find(i => i.text === text);
        if (item) {
          // Compare category name (string) with the category at index
          const expectedCategory = exercise.categories[parseInt(categoryIdx)];
          const isCorrect = item.category === expectedCategory;
          newResults[text] = isCorrect;
          if (!isCorrect) allCorrect = false;
        }
      });
    });

    const newAttempts = attempts + 1;

    setAttempts(newAttempts);
    setResults(newResults);
    setShowResult(true);

    setTimeout(() => {
      onAnswer(allCorrect, newAttempts);
    }, 1500);
  };

  const allCategorized = uncategorizedItems.length === 0;

  return (
    <div className="space-y-6">
      {/* Uncategorized items */}
      {uncategorizedItems.length > 0 && (
        <div className="p-4 bg-surface border border-border rounded-xl">
          <p className="text-sm text-text-muted mb-3">Drag items to categories:</p>
          <div className="flex flex-wrap gap-2">
            {uncategorizedItems.map((item) => (
              <div
                key={item.text}
                className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium cursor-move
                           hover:bg-primary/20 transition-colors"
                draggable
                onDragStart={(e) => e.dataTransfer.setData('text', item.text)}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {exercise.categories.map((category, categoryIdx) => (
          <div
            key={categoryIdx}
            className={`
              p-4 rounded-xl border-2 min-h-[150px]
              ${showResult ? 'border-border' : 'border-dashed border-border'}
            `}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const text = e.dataTransfer.getData('text');
              if (text) handleDrop(categoryIdx, text);
            }}
          >
            <h3 className="font-semibold text-text-primary mb-3">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {categorizedItems[categoryIdx].map((text) => {
                const isCorrect = results[text];
                const item = exercise.items.find(i => i.text === text);
                const correctCategory = item ? item.category : '';

                return (
                  <div
                    key={text}
                    onClick={() => !showResult && handleRemove(categoryIdx, text)}
                    className={`
                      px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5
                      ${showResult
                        ? isCorrect
                          ? 'bg-success/10 text-success border border-success'
                          : 'bg-error/10 text-error border border-error'
                        : 'bg-primary text-white cursor-pointer hover:bg-primary-dark'
                      }
                    `}
                    title={showResult && !isCorrect ? `Should be in: ${correctCategory}` : undefined}
                  >
                    {text}
                    {showResult && (
                      isCorrect
                        ? <CheckIcon size={14} />
                        : <XIcon size={14} />
                    )}
                  </div>
                );
              })}
              {categorizedItems[categoryIdx].length === 0 && !showResult && (
                <p className="text-text-muted text-sm italic">Drop items here</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Click to categorize (mobile-friendly alternative) */}
      {uncategorizedItems.length > 0 && !showResult && (
        <div className="text-center text-sm text-text-muted">
          <p>Or click an item and then click a category:</p>
          <div className="flex justify-center gap-2 mt-2">
            {exercise.categories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (uncategorizedItems.length > 0) {
                    handleDrop(idx, uncategorizedItems[0].text);
                  }
                }}
                className="px-3 py-1 text-xs rounded bg-border text-text-secondary hover:bg-border-light"
              >
                Add to {category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Check Button */}
      {!showResult && (
        <button
          onClick={handleCheck}
          disabled={!allCategorized || disabled}
          className={`
            w-full py-3 px-6 rounded-lg font-medium transition-all duration-200
            ${allCategorized
              ? 'bg-primary text-white hover:bg-primary-dark'
              : 'bg-border text-text-muted cursor-not-allowed'
            }
          `}
        >
          Check Answers
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

export default Categorization;

'use client';

import { useState, useCallback } from 'react';
import { SpeakerIcon, CheckIcon, RefreshIcon, ChevronRightIcon } from '@/components/icons';
import { Button } from '@/components/ui';
import { speakText, getPhonetic } from '@/lib/utils/phonetics';
import type { VocabularyWord } from '@/lib/data/vocabulary';

interface FlashcardModeProps {
  words: VocabularyWord[];
  topicId: string;
  onExit: () => void;
}

type CardStatus = 'know' | 'review';

export function FlashcardMode({ words, topicId, onExit }: FlashcardModeProps) {
  const [deck, setDeck] = useState<VocabularyWord[]>(words);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [results, setResults] = useState<Map<number, CardStatus>>(new Map());
  const [isFinished, setIsFinished] = useState(false);

  const current = deck[currentIndex];
  const phonetic = current ? getPhonetic(current.english) : null;
  const total = deck.length;
  const progress = currentIndex;
  const progressPct = total > 0 ? Math.round((progress / total) * 100) : 0;

  const handleFlip = useCallback(() => {
    if (!isFlipped) setIsFlipped(true);
  }, [isFlipped]);

  const handleMark = useCallback((status: CardStatus) => {
    const newResults = new Map(results);
    newResults.set(currentIndex, status);
    setResults(newResults);
    setIsFlipped(false);

    if (currentIndex + 1 >= deck.length) {
      setIsFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  }, [currentIndex, deck.length, results]);

  const handleReviewAgain = useCallback(() => {
    const reviewWords = deck.filter((_, i) => results.get(i) === 'review');
    if (reviewWords.length === 0) return;
    setDeck(reviewWords);
    setCurrentIndex(0);
    setIsFlipped(false);
    setResults(new Map());
    setIsFinished(false);
  }, [deck, results]);

  const handleRestart = useCallback(() => {
    setDeck(words);
    setCurrentIndex(0);
    setIsFlipped(false);
    setResults(new Map());
    setIsFinished(false);
  }, [words]);

  const knownCount = [...results.values()].filter((s) => s === 'know').length;
  const reviewCount = [...results.values()].filter((s) => s === 'review').length;

  if (isFinished) {
    const reviewList = deck.filter((_, i) => results.get(i) === 'review');
    const scorePct = total > 0 ? Math.round((knownCount / total) * 100) : 0;

    return (
      <div className="flex flex-col items-center gap-6 py-8 px-2">
        <div className="text-center">
          <div className="text-5xl mb-3">
            {scorePct >= 80 ? '🎉' : scorePct >= 50 ? '💪' : '📚'}
          </div>
          <h2 className="text-2xl font-bold text-text-primary mb-1">
            {scorePct >= 80 ? 'Excellent!' : scorePct >= 50 ? 'Good progress!' : 'Keep practicing!'}
          </h2>
          <p className="text-text-secondary text-sm">
            You knew <span className="font-semibold text-success">{knownCount}</span> of{' '}
            <span className="font-semibold">{total}</span> words
          </p>
        </div>

        <div className="w-full max-w-sm bg-surface border border-border rounded-2xl p-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-success font-medium">✓ I know it — {knownCount}</span>
            <span className="text-warning font-medium">↺ Review — {reviewCount}</span>
          </div>
          <div className="w-full bg-border-light rounded-full h-2.5 overflow-hidden">
            <div
              className="h-full bg-success rounded-full transition-all duration-500"
              style={{ width: `${scorePct}%` }}
            />
          </div>
        </div>

        {reviewList.length > 0 && (
          <div className="w-full max-w-sm">
            <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 px-1">
              Words to review
            </p>
            <div className="bg-surface border border-border rounded-xl divide-y divide-border overflow-hidden">
              {reviewList.map((w, i) => (
                <div key={i} className="flex items-center justify-between px-4 py-2.5 gap-3">
                  <span className="text-sm font-medium text-text-primary">{w.english}</span>
                  <span className="text-sm text-primary">{w.spanish}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
          {reviewList.length > 0 && (
            <Button variant="primary" className="flex-1" onClick={handleReviewAgain}>
              Review {reviewCount} words again
            </Button>
          )}
          <Button variant="outline" className="flex-1" onClick={handleRestart}>
            Start over
          </Button>
          <Button variant="ghost" className="flex-1" onClick={onExit}>
            Back to list
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 py-4">
      {/* Header */}
      <div className="w-full flex items-center justify-between gap-4">
        <button
          onClick={onExit}
          className="text-sm text-text-muted hover:text-primary transition-colors"
        >
          ← Exit
        </button>
        <span className="text-sm text-text-secondary font-medium">
          {currentIndex + 1} / {total}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-border-light rounded-full h-1.5 overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Card */}
      <div
        className="w-full max-w-sm cursor-pointer select-none"
        style={{ perspective: '1000px' }}
        onClick={handleFlip}
      >
        <div
          className="relative w-full transition-transform duration-500"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            minHeight: '260px',
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 bg-surface border-2 border-border rounded-2xl flex flex-col items-center justify-center gap-3 px-6 py-8 shadow-sm"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
              English
            </p>
            <p className="text-3xl font-bold text-text-primary text-center leading-tight">
              {current?.english}
            </p>
            {phonetic && (
              <p className="text-sm text-primary/70 font-mono">{phonetic}</p>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (current) speakText(current.english);
              }}
              className="p-2 rounded-full text-text-muted hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="Listen to pronunciation"
            >
              <SpeakerIcon size={20} />
            </button>
            <p className="text-xs text-text-muted mt-2">Tap to reveal translation</p>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 bg-primary/5 border-2 border-primary/30 rounded-2xl flex flex-col items-center justify-center gap-3 px-6 py-8 shadow-sm"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <p className="text-xs font-semibold text-primary/70 uppercase tracking-wider">
              Spanish
            </p>
            <p className="text-2xl font-bold text-primary text-center leading-tight">
              {current?.spanish}
            </p>
            {current?.example && (
              <p className="text-sm text-text-secondary italic text-center leading-relaxed mt-1">
                &ldquo;{current.example}&rdquo;
              </p>
            )}
            {current?.example2 && (
              <p className="text-sm text-text-secondary italic text-center leading-relaxed">
                &ldquo;{current.example2}&rdquo;
              </p>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (current) speakText(current.english);
              }}
              className="p-2 rounded-full text-text-muted hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="Listen to pronunciation"
            >
              <SpeakerIcon size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Action buttons — only shown after flip */}
      <div className="w-full max-w-sm flex gap-3">
        {isFlipped ? (
          <>
            <button
              onClick={() => handleMark('review')}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-warning/50 text-warning font-semibold text-sm hover:bg-warning/10 transition-colors"
            >
              <RefreshIcon size={16} />
              Review
            </button>
            <button
              onClick={() => handleMark('know')}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-success/50 text-success font-semibold text-sm hover:bg-success/10 transition-colors"
            >
              <CheckIcon size={16} />
              I know it
            </button>
          </>
        ) : (
          <button
            onClick={handleFlip}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            Reveal <ChevronRightIcon size={16} />
          </button>
        )}
      </div>

      {/* Score tally */}
      <div className="flex gap-6 text-sm">
        <span className="text-success font-medium">✓ {knownCount} known</span>
        <span className="text-warning font-medium">↺ {reviewCount} to review</span>
      </div>
    </div>
  );
}

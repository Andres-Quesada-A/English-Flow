'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header, BottomNav, Sidebar } from '@/components/layout';
import { Card, Button } from '@/components/ui';
import { ChevronLeftIcon, ChevronRightIcon, SpeakerIcon, PlayIcon, CheckIcon, ExternalLinkIcon } from '@/components/icons';
import { useProgress } from '@/lib/hooks';
import { useLearnedWords } from '@/lib/hooks/useLearnedWords';
import { allVocabularyTopics } from '@/lib/data/vocabulary';
import { getPhonetic, speakText, inglesComUrl } from '@/lib/utils/phonetics';
import { FlashcardMode } from '@/components/vocabulary/FlashcardMode';

interface Props {
  params: Promise<{ topicId: string }>;
}

export default function VocabularyTopicPage({ params }: Props) {
  const { topicId } = use(params);
  const { progress } = useProgress();
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [showExample, setShowExample] = useState(false);
  const [revealedWords, setRevealedWords] = useState<Set<string>>(new Set());
  const [flashcardMode, setFlashcardMode] = useState(false);
  const { learned, toggle: toggleLearned, reset: resetLearned, learnedCount } = useLearnedWords(topicId, 0);

  const topic = allVocabularyTopics.find((t) => t.id === topicId);
  if (!topic) notFound();

  const topicIndex = allVocabularyTopics.findIndex((t) => t.id === topicId);
  const prevTopic = topicIndex > 0 ? allVocabularyTopics[topicIndex - 1] : null;
  const nextTopic = topicIndex < allVocabularyTopics.length - 1 ? allVocabularyTopics[topicIndex + 1] : null;

  const totalWords = topic.sections.reduce((s, sec) => s + sec.words.length, 0);

  const toggleReveal = (wordKey: string) => {
    setRevealedWords((prev) => {
      const next = new Set(prev);
      if (next.has(wordKey)) {
        next.delete(wordKey);
      } else {
        next.add(wordKey);
      }
      return next;
    });
  };

  const currentSections = activeSection !== null
    ? [topic.sections[activeSection]]
    : topic.sections;

  const flashcardWords = currentSections.flatMap((s) => s.words);

  return (
    <div className="min-h-screen bg-background">
      <Header progress={progress ?? undefined} />
      <Sidebar currentLevel={progress?.currentLevel} />

      <main className="pt-16 pb-20 md:pb-8 md:pl-64">
        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Back link */}
          <Link
            href="/vocabulary"
            className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-primary mb-4 transition-colors"
          >
            <ChevronLeftIcon size={16} />
            Vocabulario
          </Link>

          {/* Topic header */}
          <div className="mb-6">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{topic.emoji}</span>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-xs text-text-muted font-medium uppercase tracking-wider">
                      Unidad {topic.unitNumber}
                    </p>
                    <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${
                      topic.level === 'A1' ? 'bg-level-a1/15 text-level-a1' :
                      topic.level === 'A2' ? 'bg-level-a2/15 text-level-a2' :
                      topic.level === 'B1' ? 'bg-level-b1/15 text-level-b1' :
                      'bg-level-b2/15 text-level-b2'
                    }`}>
                      {topic.level}
                    </span>
                  </div>
                  <h1 className="text-2xl font-bold text-text-primary">{topic.title}</h1>
                </div>
              </div>
              <button
                onClick={() => setFlashcardMode(true)}
                className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-white text-xs font-semibold hover:bg-primary/90 transition-colors mt-1"
              >
                <PlayIcon size={12} />
                Flashcards
              </button>
            </div>
            <div className="flex items-center gap-3 mt-1">
              <p className="text-text-secondary text-sm">
                {totalWords} palabras · {topic.sections.length} secciones
              </p>
              {learnedCount > 0 && (
                <span className="text-xs text-success font-medium">
                  · {learnedCount}/{totalWords} aprendidas
                </span>
              )}
            </div>
            {learnedCount > 0 && (
              <div className="mt-2 w-full bg-border-light rounded-full h-1.5 overflow-hidden">
                <div
                  className="h-full bg-success rounded-full transition-all duration-500"
                  style={{ width: `${Math.round((learnedCount / totalWords) * 100)}%` }}
                />
              </div>
            )}
          </div>

          {/* Flashcard mode */}
          {flashcardMode && (
            <FlashcardMode
              words={flashcardWords}
              topicId={topic.id}
              onExit={() => setFlashcardMode(false)}
            />
          )}

          {/* List mode */}
          {!flashcardMode && (
            <>
              {/* Section filter */}
              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  onClick={() => setActiveSection(null)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    activeSection === null
                      ? 'bg-primary text-white'
                      : 'bg-surface border border-border text-text-secondary hover:border-primary hover:text-primary'
                  }`}
                >
                  Todas
                </button>
                {topic.sections.map((section, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSection(activeSection === idx ? null : idx)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      activeSection === idx
                        ? 'bg-primary text-white'
                        : 'bg-surface border border-border text-text-secondary hover:border-primary hover:text-primary'
                    }`}
                  >
                    {section.title.split('(')[0].trim()}
                  </button>
                ))}
              </div>

          {/* Vocabulary sections */}
          {currentSections.map((section, sIdx) => (
            <div key={sIdx} className="mb-6">
              <h2 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-3 px-1">
                {section.title}
              </h2>
              <Card padding="none" className="overflow-hidden">
                <div className="divide-y divide-border">
                  {section.words.map((word, wIdx) => {
                    const wordKey = `${sIdx}-${wIdx}`;
                    const isRevealed = revealedWords.has(wordKey);
                    const isLearned = learned.has(wordKey);
                    const phonetic = getPhonetic(word.english);
                    return (
                      <div
                        key={wIdx}
                        className={`flex items-center gap-2 px-4 py-3 hover:bg-border-light transition-colors group ${isLearned ? 'opacity-60' : ''}`}
                      >
                        <button
                          onClick={(e) => { e.stopPropagation(); toggleLearned(wordKey); }}
                          className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                            isLearned
                              ? 'bg-success border-success text-white'
                              : 'border-border hover:border-success'
                          }`}
                          aria-label={isLearned ? 'Marcar como no aprendida' : 'Marcar como aprendida'}
                        >
                          {isLearned && <CheckIcon size={11} />}
                        </button>

                        <button
                          onClick={() => toggleReveal(wordKey)}
                          className="flex-1 text-left min-w-0"
                        >
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <p className="font-medium text-text-primary text-sm">{word.english}</p>
                                <button
                                  onClick={(e) => { e.stopPropagation(); speakText(word.english); }}
                                  className="shrink-0 p-1 rounded-full text-text-muted hover:text-primary hover:bg-primary/10 transition-colors"
                                  aria-label={`Escuchar pronunciación de "${word.english}"`}
                                >
                                  <SpeakerIcon size={13} />
                                </button>
                                <a
                                  href={inglesComUrl(word.english)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="shrink-0 p-1 rounded-full text-text-muted hover:text-primary hover:bg-primary/10 transition-colors"
                                  aria-label={`Ver "${word.english}" en inglés.com (pronunciación, ejemplos y sinónimos)`}
                                  title="Ver en inglés.com: pronunciación, ejemplos y sinónimos"
                                >
                                  <ExternalLinkIcon size={13} />
                                </a>
                              </div>
                              {phonetic && (
                                <p className="text-xs text-primary/60 font-mono mt-0.5">{phonetic}</p>
                              )}
                              {word.example && (
                                <p className="text-xs text-text-muted mt-0.5 italic">{word.example}</p>
                              )}
                              {word.example2 && (
                                <p className="text-xs text-text-muted mt-0.5 italic">{word.example2}</p>
                              )}
                            </div>
                            <div className="shrink-0 sm:text-right">
                              {isRevealed ? (
                                <p className="text-sm text-primary font-medium sm:text-right">{word.spanish}</p>
                              ) : (
                                <p className="text-xs text-text-muted group-hover:text-primary transition-colors">
                                  Ver traducción
                                </p>
                              )}
                            </div>
                          </div>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          ))}

              {/* Reset progress */}
              {learnedCount > 0 && (
                <div className="flex justify-end mb-4">
                  <button
                    onClick={resetLearned}
                    className="text-xs text-text-muted hover:text-error transition-colors"
                  >
                    Reiniciar progreso
                  </button>
                </div>
              )}

              {/* Example text */}
              {topic.exampleText && (
                <div className="mb-6">
                  <button
                    onClick={() => setShowExample(!showExample)}
                    className="w-full text-left"
                  >
                    <Card variant="interactive" padding="md">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">✍️</span>
                          <h2 className="font-semibold text-text-primary">Texto de ejemplo</h2>
                        </div>
                        <div className="flex items-center gap-2">
                          {showExample && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                const plain = topic.exampleText!.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\*([^*]+)\*/g, '$1');
                                speakText(plain);
                              }}
                              className="p-1.5 rounded-full text-text-muted hover:text-primary hover:bg-primary/10 transition-colors"
                              aria-label="Escuchar texto de ejemplo"
                            >
                              <SpeakerIcon size={16} />
                            </button>
                          )}
                          <ChevronRightIcon
                            size={20}
                            className={`text-text-muted transition-transform ${showExample ? 'rotate-90' : ''}`}
                          />
                        </div>
                      </div>
                      {showExample && (
                        <div className="mt-4 pt-4 border-t border-border">
                          <div className="text-sm text-text-secondary leading-relaxed whitespace-pre-line">
                            {topic.exampleText.split(/\*\*([^*]+)\*\*/).map((part, i) =>
                              i % 2 === 1 ? (
                                <strong key={i} className="text-text-primary font-semibold">
                                  {part}
                                </strong>
                              ) : (
                                <span key={i}>{part}</span>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </Card>
                  </button>
                </div>
              )}
            </>
          )}

          {/* Navigation */}
          <div className="flex justify-between gap-4 pt-4 border-t border-border">
            {prevTopic ? (
              <Link href={`/vocabulary/${prevTopic.id}`} className="flex-1">
                <Card variant="interactive" padding="md">
                  <div className="flex items-center gap-2">
                    <ChevronLeftIcon size={18} className="text-text-muted shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-text-muted">Anterior</p>
                      <p className="text-sm font-medium text-text-primary truncate">
                        {prevTopic.emoji} {prevTopic.title}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
            {nextTopic ? (
              <Link href={`/vocabulary/${nextTopic.id}`} className="flex-1">
                <Card variant="interactive" padding="md">
                  <div className="flex items-center justify-end gap-2">
                    <div className="min-w-0 text-right">
                      <p className="text-xs text-text-muted">Siguiente</p>
                      <p className="text-sm font-medium text-text-primary truncate">
                        {nextTopic.emoji} {nextTopic.title}
                      </p>
                    </div>
                    <ChevronRightIcon size={18} className="text-text-muted shrink-0" />
                  </div>
                </Card>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

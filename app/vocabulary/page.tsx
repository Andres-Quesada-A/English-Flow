'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Header, BottomNav, Sidebar } from '@/components/layout';
import { Card } from '@/components/ui';
import { useProgress } from '@/lib/hooks';
import { allVocabularyTopics, vocabularyCategories } from '@/lib/data/vocabulary';

function highlight(text: string, query: string): React.ReactNode {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-primary/20 text-primary rounded px-0.5">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
}

export default function VocabularyPage() {
  const { progress } = useProgress();
  const [query, setQuery] = useState('');

  const totalWords = allVocabularyTopics.reduce(
    (sum, topic) => sum + topic.sections.reduce((s, sec) => s + sec.words.length, 0),
    0
  );

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];

    const results: { topicId: string; topicTitle: string; topicEmoji: string; english: string; spanish: string; example?: string }[] = [];

    for (const topic of allVocabularyTopics) {
      for (const section of topic.sections) {
        for (const word of section.words) {
          if (
            word.english.toLowerCase().includes(q) ||
            word.spanish.toLowerCase().includes(q) ||
            (word.example && word.example.toLowerCase().includes(q))
          ) {
            results.push({
              topicId: topic.id,
              topicTitle: topic.title,
              topicEmoji: topic.emoji,
              english: word.english,
              spanish: word.spanish,
              example: word.example,
            });
            if (results.length >= 30) break;
          }
        }
        if (results.length >= 30) break;
      }
      if (results.length >= 30) break;
    }

    return results;
  }, [query]);

  const isSearching = query.trim().length >= 2;

  return (
    <div className="min-h-screen bg-background">
      <Header progress={progress ?? undefined} />
      <Sidebar currentLevel={progress?.currentLevel} />

      <main className="pt-16 pb-20 md:pb-8 md:pl-64">
        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-text-primary mb-1">Vocabulario</h1>
            <p className="text-text-secondary">
              {allVocabularyTopics.length} temas · {totalWords.toLocaleString()} palabras
            </p>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar palabras en inglés o español..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-border bg-surface text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors"
                aria-label="Clear search"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>

          {/* Search results */}
          {isSearching && (
            <div className="mb-8">
              {searchResults.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-4xl mb-3">🔍</p>
                  <p className="text-text-secondary text-sm">
                    No results for <span className="font-medium text-text-primary">&ldquo;{query}&rdquo;</span>
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-xs text-text-muted font-medium uppercase tracking-wider mb-3 px-1">
                    {searchResults.length}{searchResults.length === 30 ? '+' : ''} resultado{searchResults.length !== 1 ? 's' : ''} para &ldquo;{query}&rdquo;
                  </p>
                  <Card padding="none" className="overflow-hidden">
                    <div className="divide-y divide-border">
                      {searchResults.map((result, i) => (
                        <Link key={i} href={`/vocabulary/${result.topicId}`}>
                          <div className="px-4 py-3 hover:bg-border-light transition-colors">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-text-primary text-sm">
                                  {highlight(result.english, query)}
                                </p>
                                <p className="text-sm text-primary mt-0.5">
                                  {highlight(result.spanish, query)}
                                </p>
                                {result.example && (
                                  <p className="text-xs text-text-muted italic mt-0.5 line-clamp-1">
                                    {highlight(result.example, query)}
                                  </p>
                                )}
                              </div>
                              <div className="shrink-0 text-right">
                                <span className="text-xs text-text-muted">
                                  {result.topicEmoji} {result.topicTitle}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </Card>
                </>
              )}
            </div>
          )}

          {/* Stats bar — hidden while searching */}
          {!isSearching && (
            <>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <Card padding="md" className="text-center">
                  <p className="text-2xl font-bold text-primary">{allVocabularyTopics.length}</p>
                  <p className="text-xs text-text-secondary">Temas</p>
                </Card>
                <Card padding="md" className="text-center">
                  <p className="text-2xl font-bold text-success">{totalWords.toLocaleString()}</p>
                  <p className="text-xs text-text-secondary">Palabras</p>
                </Card>
                <Card padding="md" className="text-center">
                  <p className="text-2xl font-bold text-warning">{vocabularyCategories.length}</p>
                  <p className="text-xs text-text-secondary">Categorías</p>
                </Card>
              </div>

              {/* Categories */}
              {vocabularyCategories.map((category) => {
                const topics = allVocabularyTopics.filter((t) => t.category === category.id);
                if (topics.length === 0) return null;

                return (
                  <div key={category.id} className="mb-8">
                    <h2 className="text-lg font-semibold text-text-primary mb-3 flex items-center gap-2">
                      <span>{category.emoji}</span>
                      <span>{category.title}</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {topics.map((topic) => {
                        const wordCount = topic.sections.reduce((s, sec) => s + sec.words.length, 0);
                        return (
                          <Link key={topic.id} href={`/vocabulary/${topic.id}`}>
                            <Card variant="interactive" padding="md" className="h-full">
                              <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-2xl">{topic.emoji}</span>
                                  <span className="text-xs text-text-muted font-medium">
                                    U{topic.unitNumber}
                                  </span>
                                </div>
                                <h3 className="text-sm font-semibold text-text-primary leading-tight">
                                  {topic.title}
                                </h3>
                                <p className="text-xs text-text-muted">
                                  {wordCount} palabras · {topic.sections.length} secciones
                                </p>
                              </div>
                            </Card>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

'use client';

import Link from 'next/link';
import { Header, BottomNav, Sidebar } from '@/components/layout';
import { Card } from '@/components/ui';
import { useProgress } from '@/lib/hooks';
import { allVocabularyTopics, vocabularyCategories } from '@/lib/data/vocabulary';

export default function VocabularyPage() {
  const { progress } = useProgress();

  const totalWords = allVocabularyTopics.reduce(
    (sum, topic) => sum + topic.sections.reduce((s, sec) => s + sec.words.length, 0),
    0
  );

  return (
    <div className="min-h-screen bg-background">
      <Header progress={progress ?? undefined} />
      <Sidebar currentLevel={progress?.currentLevel} />

      <main className="pt-16 pb-20 md:pb-8 md:pl-64">
        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-text-primary mb-1">Vocabulario</h1>
            <p className="text-text-secondary">
              {allVocabularyTopics.length} temas · {totalWords.toLocaleString()} palabras
            </p>
          </div>

          {/* Stats bar */}
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
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

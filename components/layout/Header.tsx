'use client';

import Link from 'next/link';
import { FlameIcon, ZapIcon } from '@/components/icons';
import type { UserProgress } from '@/lib/types';

interface HeaderProps {
  progress?: UserProgress | null;
}

export function Header({ progress }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
            <GlobeIconSmall />
          </div>
          <span className="text-xl font-bold text-text-primary">
            English<span className="text-primary">Flow</span>
          </span>
        </Link>

        {/* Stats */}
        {progress && (
          <div className="flex items-center gap-4">
            {/* Streak */}
            <div className="flex items-center gap-1.5 text-sm">
              <FlameIcon
                size={20}
                className={progress.streak.current > 0 ? 'text-warning' : 'text-text-muted'}
              />
              <span className="font-semibold text-text-primary">
                {progress.streak.current}
              </span>
            </div>

            {/* XP */}
            <div className="flex items-center gap-1.5 text-sm">
              <ZapIcon size={20} className="text-primary" />
              <span className="font-semibold text-text-primary">
                {progress.totalXP.toLocaleString()} XP
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function GlobeIconSmall() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export default Header;

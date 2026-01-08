'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon, BookIcon, TargetIcon, UserIcon, TrophyIcon } from '@/components/icons';
import { LEVELS } from '@/lib/constants';
import type { LevelId } from '@/lib/types';

const mainNavItems = [
  { label: 'Home', href: '/', icon: HomeIcon },
  { label: 'Learn', href: '/levels', icon: BookIcon },
  { label: 'Practice', href: '/practice', icon: TargetIcon },
  { label: 'Achievements', href: '/achievements', icon: TrophyIcon },
  { label: 'Profile', href: '/profile', icon: UserIcon },
];

interface SidebarProps {
  currentLevel?: LevelId;
}

export function Sidebar({ currentLevel }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col fixed left-0 top-16 bottom-0 w-64 bg-surface border-r border-border overflow-y-auto">
      <nav className="flex-1 p-4">
        {/* Main Navigation */}
        <div className="space-y-1">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href));
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg
                  transition-colors duration-200
                  ${isActive
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-text-secondary hover:bg-border-light hover:text-text-primary'
                  }
                `}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Levels Section */}
        <div className="mt-8">
          <h3 className="px-3 text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
            Levels
          </h3>
          <div className="space-y-1">
            {(Object.keys(LEVELS) as LevelId[]).map((levelId) => {
              const level = LEVELS[levelId];
              const isActive = pathname.includes(`/levels/${levelId}`);
              const isCurrent = currentLevel === levelId;

              return (
                <Link
                  key={levelId}
                  href={`/levels/${levelId}`}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-lg
                    transition-colors duration-200
                    ${isActive
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-text-secondary hover:bg-border-light hover:text-text-primary'
                    }
                  `}
                >
                  <span
                    className={`
                      w-6 h-6 rounded text-xs font-bold
                      flex items-center justify-center text-white
                      ${levelId === 'a1' ? 'gradient-a1' : ''}
                      ${levelId === 'a2' ? 'gradient-a2' : ''}
                      ${levelId === 'b1' ? 'gradient-b1' : ''}
                      ${levelId === 'b2' ? 'gradient-b2' : ''}
                    `}
                  >
                    {level.name}
                  </span>
                  <span className="flex-1">{level.fullName}</span>
                  {isCurrent && (
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <p className="text-xs text-text-muted text-center">
          EnglishFlow v1.0
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;

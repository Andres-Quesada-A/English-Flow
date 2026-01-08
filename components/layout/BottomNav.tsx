'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon, BookIcon, TargetIcon, UserIcon } from '@/components/icons';

const navItems = [
  { label: 'Home', href: '/', icon: HomeIcon },
  { label: 'Learn', href: '/levels', icon: BookIcon },
  { label: 'Practice', href: '/practice', icon: TargetIcon },
  { label: 'Profile', href: '/profile', icon: UserIcon },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-surface border-t border-border md:hidden">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href ||
            (item.href !== '/' && pathname.startsWith(item.href));
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex flex-col items-center justify-center gap-1 px-4 py-2
                transition-colors duration-200
                ${isActive
                  ? 'text-primary'
                  : 'text-text-muted hover:text-text-secondary'
                }
              `}
            >
              <Icon size={24} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNav;

'use client';

import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import type { BadgeVariant } from '@/lib/types';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-border-light text-text-secondary',
  success: 'bg-success-light text-success',
  error: 'bg-error-light text-error',
  warning: 'bg-warning-light text-warning',
  primary: 'bg-primary-light/20 text-primary',
  a1: 'bg-level-a1/20 text-level-a1',
  a2: 'bg-level-a2/20 text-level-a2',
  b1: 'bg-level-b1/20 text-level-b1',
  b2: 'bg-level-b2/20 text-level-b2',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
  lg: 'px-3 py-1.5 text-base',
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', size = 'md', children, className = '', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={`inline-flex items-center font-medium rounded-full ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;

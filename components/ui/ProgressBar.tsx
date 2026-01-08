'use client';

import { forwardRef, type HTMLAttributes } from 'react';

interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'a1' | 'a2' | 'b1' | 'b2';
  showLabel?: boolean;
  animated?: boolean;
}

const sizeStyles = {
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-4',
};

const variantStyles = {
  default: 'bg-primary',
  primary: 'bg-primary',
  success: 'bg-success',
  warning: 'bg-warning',
  error: 'bg-error',
  a1: 'bg-level-a1',
  a2: 'bg-level-a2',
  b1: 'bg-level-b1',
  b2: 'bg-level-b2',
};

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      value,
      max = 100,
      size = 'md',
      variant = 'default',
      showLabel = false,
      animated = true,
      className = '',
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
      <div ref={ref} className={`w-full ${className}`} {...props}>
        {showLabel && (
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-text-secondary">Progress</span>
            <span className="text-sm font-medium text-text-primary">{Math.round(percentage)}%</span>
          </div>
        )}
        <div
          className={`w-full bg-border-light rounded-full overflow-hidden ${sizeStyles[size]}`}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        >
          <div
            className={`h-full rounded-full ${variantStyles[variant]} ${
              animated ? 'transition-all duration-500 ease-out' : ''
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
);

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;

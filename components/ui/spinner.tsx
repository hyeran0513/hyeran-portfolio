'use client';

import { cn } from '@/lib/utils';

type SpinnerProps = {
  size?: 'sm' | 'md' | 'lg'; // 크기
  className?: string; // 클래스명
};

export default function Spinner({ size = 'md', className }: SpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div
      className={cn(
        'border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin',
        sizeClasses[size],
        className,
      )}
    />
  );
}

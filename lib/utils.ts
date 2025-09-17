import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// className들을 조건부 결합
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// className들을 조건부 결합
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// GSAP
export const importGsap = async () => {
  if (typeof window === 'undefined') return null;
  const mod = await import('gsap');
  return mod.gsap || mod.default || (mod as unknown as any);
};

// ScrollTrigger
export const importScrollTrigger = async (gsapInstance?: any) => {
  if (typeof window === 'undefined') return null;
  const gsapLib = gsapInstance || (await importGsap());
  if (!gsapLib) return null;
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  if (!gsapLib.core?.globals?.().ScrollTrigger) {
    gsapLib.registerPlugin(ScrollTrigger);
  }
  return { gsap: gsapLib, ScrollTrigger } as const;
};

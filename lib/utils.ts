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
  return mod.gsap || mod.default || (mod as unknown as { gsap: unknown });
};

// ScrollTrigger
export const importScrollTrigger = async (gsapInstance?: unknown) => {
  if (typeof window === 'undefined') return null;
  const gsapLib = gsapInstance || (await importGsap());
  if (!gsapLib) return null;
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!(gsapLib as any).core?.globals?.().ScrollTrigger) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (gsapLib as any).registerPlugin(ScrollTrigger);
  }
  return { 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gsap: gsapLib as any, 
    ScrollTrigger 
  } as const;
};

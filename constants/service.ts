// Prefer explicit public URL; fallback to Vercel-provided URL if present
const RAW_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || '';

// Normalize to absolute URL with protocol so Next.js metadataBase is valid
export const SERVICE_URL = RAW_SITE_URL
  ? (RAW_SITE_URL.startsWith('http') ? RAW_SITE_URL : `https://${RAW_SITE_URL}`)
  : '';
export const SERVICE_NAME = '김혜란 포트폴리오';
export const SERVICE_DESCRIPTION = 'Next.js, tailwind css로 만든 김혜란 포트폴리오입니다.';
export const EMAIL = 'hr_0513@naver.com';
export const GITHUB_URL = 'https://github.com/hyeran0513';

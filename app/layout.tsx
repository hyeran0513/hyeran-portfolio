import type { Metadata } from 'next';
import localFont from "next/font/local";
import './globals.css';
import { SERVICE_URL, SERVICE_NAME, SERVICE_DESCRIPTION } from '@/constants/service';

const FAVICON_URL = "/svg/favicon.svg";
const OG_IMAGE_URL = "/images/og.png";

const pretendard = localFont({
  src: [
    {
      path: "./fonts/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  metadataBase: SERVICE_URL ? new URL(SERVICE_URL) : undefined,
  title: SERVICE_NAME,
  description: SERVICE_DESCRIPTION,
  icons: {
    icon: [
      {
        url: FAVICON_URL,
        type: "image/svg+xml",
      },
    ],
    shortcut: FAVICON_URL,
    apple: FAVICON_URL,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SERVICE_URL || undefined,
    siteName: SERVICE_NAME,
    title: SERVICE_NAME,
    description: SERVICE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: SERVICE_NAME,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable}`}>{children}</body>
    </html>
  );
}

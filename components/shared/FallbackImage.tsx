'use client';

import Image, { ImageProps } from 'next/image';
import { useState, useMemo } from 'react';
import Spinner from '@/components/ui/spinner';

type FallbackImageProps = Omit<ImageProps, 'src'> & {
  src: string; // 이미지 소스
  fallbackSrc?: string; // 폴백 이미지 소스
  loading?: 'lazy' | 'eager';
  showLoading?: boolean; // 로딩 표시 여부
};

export default function FallbackImage({
  src,
  fallbackSrc = '/images/no_image.png',
  alt,
  className,
  fill,
  priority = false,
  loading = 'eager',
  showLoading = true,
  ...rest
}: FallbackImageProps) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const actualSrc = useMemo(() => (error ? fallbackSrc : src), [error, fallbackSrc, src]);

  return (
    <>
      {isLoading && !error && !priority && showLoading && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse flex items-center justify-center z-10">
          <Spinner size="md" />
        </div>
      )}
      <Image
        {...rest}
        alt={alt}
        src={actualSrc}
        className={className}
        fill={fill}
        priority={priority}
        loading={loading}
        onError={() => setError(true)}
        onLoad={() => setIsLoading(false)}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </>
  );
}

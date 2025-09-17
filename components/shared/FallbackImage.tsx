'use client';

import Image, { ImageProps } from 'next/image';
import { useState, useMemo } from 'react';
import Spinner from '@/components/ui/spinner';

type FallbackImageProps = Omit<ImageProps, 'src'> & {
  src: string; // 이미지 소스
  fallbackSrc?: string; // 폴백 이미지 소스
};

export default function FallbackImage({
  src,
  fallbackSrc = '/images/no_image.png',
  alt,
  className,
  fill,
  ...rest
}: FallbackImageProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const actualSrc = useMemo(() => (error ? fallbackSrc : src), [error, fallbackSrc, src]);

  return (
    <>
      {loading && !error && (
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
        onError={() => setError(true)}
        onLoad={() => setLoading(false)}
        onLoadingComplete={() => setLoading(false)}
      />
    </>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import FallbackImage from '@/components/shared/FallbackImage';

const CarrotCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const node = cursorRef.current;
    if (!node) return;

    // 커서 이동
    const move = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      tlRef.current = gsap.to(node, {
        x,
        y,
        duration: 0.15,
        ease: 'power3.out',
        overwrite: true,
      });
    };

    // 커서 표시
    const show = () => gsap.to(node, { autoAlpha: 1, duration: 0.2 });

    // 커서 숨기기
    const hide = () => gsap.to(node, { autoAlpha: 0, duration: 0.2 });

    // 커서 이동 이벤트 등록
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseenter', show);
    window.addEventListener('mouseleave', hide);

    // 커서 숨기기 이벤트 등록
    const html = document.documentElement;
    const prevCursor = html.style.cursor;
    html.style.cursor = 'none';

    return () => {
      // 커서 이동 이벤트 제거
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseenter', show);
      window.removeEventListener('mouseleave', hide);
      tlRef.current?.kill();
      html.style.cursor = prevCursor;
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
      style={{ width: 32, height: 32 }}
    >
      <FallbackImage
        src="/images/deco/carrot.png"
        alt="당근 커서"
        width={32}
        height={32}
        className="select-none"
        style={{ imageRendering: 'auto' }}
      />
    </div>
  );
};

export default CarrotCursor;

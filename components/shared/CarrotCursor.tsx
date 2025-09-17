'use client';

import { useEffect, useRef, useState } from 'react';
import FallbackImage from '@/components/shared/FallbackImage';

const CarrotCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const node = cursorRef.current;
    if (!node) return;

    // 커서 이동
    const move = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      node.style.transform = `translate(${x}px, ${y}px)`;

      // 마우스 위치에서 호버 가능한 요소 확인
      const elementBelow = document.elementFromPoint(x, y);
      if (elementBelow) {
        const isHoverable = elementBelow.closest('.cursor-pointer') !== null;
        setIsHovering(isHoverable);
      }
    };

    // 커서 표시
    const show = () => {
      node.style.opacity = '1';
    };

    // 커서 숨기기
    const hide = () => {
      node.style.opacity = '0';
    };

    // 커서 이동 이벤트 등록
    window.addEventListener('mousemove', move, { passive: true });
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
        src={isHovering ? '/images/deco/carrot_hover.png' : '/images/deco/carrot.png'}
        alt="당근 커서"
        width={32}
        height={32}
        className="select-none transition-all duration-200 ease-in-out"
        style={{ imageRendering: 'auto' }}
      />
    </div>
  );
};

export default CarrotCursor;

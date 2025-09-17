'use client';

import { useRef, useState, useEffect, useCallback } from 'react';

const EyeTracking = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pupilOffset, setPupilOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // 마우스 움직일 때
  const handleWindowMouseMove = useCallback((e: MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const distance = Math.hypot(dx, dy) || 1;
    const maxOffset = 8;
    
    setPupilOffset({ 
      x: (dx / distance) * maxOffset, 
      y: (dy / distance) * maxOffset 
    });
  }, []);

  const handleWindowMouseLeave = useCallback(() => {
    setPupilOffset({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleWindowMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleWindowMouseLeave, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('mouseleave', handleWindowMouseLeave);
    };
  }, [handleWindowMouseMove, handleWindowMouseLeave]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      {/* 왼쪽 눈동자 */}
      <div className="absolute left-1/2 top-[113.35px] -translate-x-[60px] w-[34px] h-[34px] rounded-full z-20">
        <div
          className="absolute left-1/2 top-1/2 w-[25px] h-[29px] rounded-full bg-black transition-transform duration-150 ease-out"
          style={{
            transform: `translate(calc(-50% + ${pupilOffset.x}px), calc(-50% + ${pupilOffset.y}px))`,
          }}
        />
      </div>
      
      {/* 오른쪽 눈동자 */}
      <div className="absolute left-1/2 top-[113.35px] translate-x-[40px] w-[34px] h-[34px] rounded-full z-20">
        <div
          className="absolute left-1/2 top-1/2 w-[25px] h-[29px] rounded-full bg-black transition-transform duration-150 ease-out"
          style={{
            transform: `translate(calc(-50% + ${pupilOffset.x}px), calc(-50% + ${pupilOffset.y}px))`,
          }}
        />
      </div>
    </div>
  );
};

export default EyeTracking;

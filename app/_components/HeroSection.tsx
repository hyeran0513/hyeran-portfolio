'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { importScrollTrigger } from '@/lib/utils';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [pupilOffset, setPupilOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // 마우스 움직일 때
  useEffect(() => {
    const handleWindowMouseMove = (e: MouseEvent) => {
      const container = sectionRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.hypot(dx, dy) || 1;
      const maxOffset = 8;
      setPupilOffset({ x: (dx / distance) * maxOffset, y: (dy / distance) * maxOffset });
    };

    // 마우스 떠날 때
    const handleWindowMouseLeave = () => {
      setPupilOffset({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleWindowMouseMove);
    window.addEventListener('mouseleave', handleWindowMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('mouseleave', handleWindowMouseLeave);
    };
  }, []);

  useEffect(() => {
    let ctx: any;
    (async () => {
      const mod = await importScrollTrigger();
      if (!mod || !sectionRef.current) return;
      const { gsap } = mod;
      ctx = gsap.context(() => {
        const triggerTarget = sectionRef.current!;
        gsap.from('.hero-title', {
          scrollTrigger: {
            trigger: triggerTarget,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
          y: 30,
          autoAlpha: 0,
          duration: 0.6,
          ease: 'power3.out',
        });

        gsap.from('.hero-bg', {
          scrollTrigger: {
            trigger: triggerTarget,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
          scale: 0.9,
          autoAlpha: 0,
          duration: 0.8,
          ease: 'power3.out',
        });

        gsap.from('.hero-character', {
          scrollTrigger: {
            trigger: triggerTarget,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
          y: 40,
          autoAlpha: 0,
          duration: 0.7,
          ease: 'power3.out',
        });

        gsap.from('.hero-star', {
          scrollTrigger: {
            trigger: triggerTarget,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
          y: -10,
          autoAlpha: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power3.out',
        });
      }, sectionRef);
    })();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section className="bg-primary tablet:h-[630px] h-[500px]">
      <div
        ref={sectionRef}
        className="max-w-[1200px] mx-auto h-full relative flex justify-center pt-[94px] overflow-hidden"
      >
        {/* 텍스트 */}
        <div className="hero-title text-white web:hero-1 tablet:hero-2 hero-3 text-center relative z-20">
          김혜란 프론트엔드 <br /> 포트폴리오
        </div>

        {/* 캐릭터 배경 */}
        <div className="hero-bg absolute left-1/2 -translate-x-1/2 -bottom-[340px] w-[756px] h-[756px] rounded-full bg-[#828BD6] z-0 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[524px] h-[524px] rounded-full bg-[#9AA1DF]"></div>
        </div>

        <div className="hero-character w-[399px] h-[219px] aspect-[399/219] absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          {/* 캐릭터 */}
          <Image src="/images/deco/deco_character.png" alt="캐릭터" fill className="object-cover" />

          {/* 눈동자 */}
          <div className="pointer-events-none">
            <div className="absolute left-1/2 top-[113.35px] -translate-x-[60px] w-[34px] h-[34px] rounded-full bg-white z-20">
              <div
                className="absolute left-1/2 top-1/2 w-[25px] h-[29px] rounded-full bg-black"
                style={{
                  transform: `translate(calc(-50% + ${pupilOffset.x}px), calc(-50% + ${pupilOffset.y}px))`,
                }}
              />
            </div>
            <div className="absolute left-1/2 top-[113.35px] translate-x-[40px] w-[34px] h-[34px] rounded-full bg-white z-20">
              <div
                className="absolute left-1/2 top-1/2 w-[25px] h-[29px] rounded-full bg-black"
                style={{
                  transform: `translate(calc(-50% + ${pupilOffset.x}px), calc(-50% + ${pupilOffset.y}px))`,
                }}
              />
            </div>
          </div>
        </div>

        {/* 별 */}
        <div className="hero-star absolute tablet:right-[120px] right-[16px] top-[140px] w-[40px] h-[40px] animate-twinkle z-10 pointer-events-none">
          <Image
            src="/images/deco/deco_outline_white_star.png"
            alt="outline white star"
            fill
            className="object-contain"
          />
        </div>

        {/* 별 */}
        <div className="hero-star absolute right-[60px] top-[220px] w-[28px] h-[28px] animate-twinkle [animation-delay:.6s] z-10 pointer-events-none">
          <Image
            src="/images/deco/deco_white_star.png"
            alt="white star"
            fill
            className="object-contain"
          />
        </div>

        {/* 별 */}
        <div className="hero-star absolute tablet:left-[80px] left-[16px] top-[200px] w-[32px] h-[32px] animate-twinkle [animation-delay:1.1s] z-10 pointer-events-none">
          <Image
            src="/images/deco/deco_yellow_star.png"
            alt="yellow star"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

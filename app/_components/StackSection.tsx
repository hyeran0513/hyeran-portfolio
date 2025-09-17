'use client';

import { STACKS } from '@/constants/stack';
import CircularProgress from '@/components/shared/CircularProgress';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { importScrollTrigger } from '@/lib/utils';

const StackSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    (async () => {
      const mod = await importScrollTrigger();
      if (!mod || !sectionRef.current) return;
      const { gsap } = mod;
      ctx = gsap.context(() => {
        gsap.from('.stack-heading', {
          scrollTrigger: {
            trigger: '.stack-heading',
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
          y: 24,
          autoAlpha: 0,
          duration: 0.6,
          ease: 'power3.out',
        });
        gsap.from('.stack-card', {
          scrollTrigger: {
            trigger: '.stack-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
          y: 24,
          autoAlpha: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: 'power3.out',
        });
      }, sectionRef);
    })();
    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section id="stack" className="bg-background-secondary">
      <div
        ref={sectionRef}
        className="max-w-[1200px] mx-auto web:p-[64px] tablet:py-[64px] tablet:px-[32px] py-[48px] px-[16px] flex flex-col tablet:gap-[48px] gap-[24px]"
      >
        {/* 제목 */}
        <h2 className="stack-heading tablet:heading-2 heading-3">스택</h2>

        <div className="stack-grid grid tablet:grid-cols-4 grid-cols-2 tablet:gap-[24px] gap-[16px]">
          {STACKS.map((item) => {
            return (
              <div
                key={item.name}
                className="stack-card bg-white p-[24px] rounded-[8px] flex tablet:flex-row flex-col gap-[24px] justify-between items-center shadow-sm"
              >
                <div className="flex flex-col items-center gap-[4px]">
                  {/* 스택 로고 */}
                  <Image src={item.logo} alt={item.name} width={40} height={40} />

                  {/* 스택 이름 */}
                  <p className="body-3 text-text-secondary">{item.name}</p>
                </div>

                {/* 진행률 */}
                <CircularProgress percent={item.percent} size={80} strokeWidth={12} innerSize={60}>
                  <span className="heading-6 text-text-secondary">{item.percent}%</span>
                </CircularProgress>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StackSection;

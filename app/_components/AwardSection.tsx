'use client';

import { useEffect, useRef } from 'react';
import { AWARDS } from '@/constants/award';
import { cn } from '@/lib/utils';
import { importScrollTrigger } from '@/lib/utils';

const AwardSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx: any;
    (async () => {
      const mod = await importScrollTrigger();
      if (!mod || !sectionRef.current) return;
      const { gsap } = mod;
      ctx = gsap.context(() => {
        gsap.from('.award-heading', {
          scrollTrigger: {
            trigger: '.award-heading',
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
          y: 24,
          autoAlpha: 0,
          duration: 0.6,
          ease: 'power3.out',
        });
        gsap.from('.award-card', {
          scrollTrigger: {
            trigger: '.award-grid',
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
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section id="awards" className="bg-background-secondary">
      <div
        ref={sectionRef}
        className="max-w-[1200px] mx-auto web:p-[64px] tablet:py-[64px] tablet:px-[32px] py-[48px] px-[16px] flex flex-col tablet:gap-[48px] gap-[24px]"
      >
        {/* 제목 */}
        <h2 className="award-heading tablet:heading-2 heading-3">상장/자격증</h2>

        <div className="award-grid grid tablet:grid-cols-4 grid-cols-1 gap-[24px]">
          {AWARDS.map((item) => (
            <div
              key={`${item.title}-${item.period}`}
              className="award-card bg-white rounded-[8px] p-[24px] flex flex-col gap-[24px] justify-between shadow-sm"
            >
              {/* 타입 */}
              <div
                className={cn(
                  'self-start inline-block py-[6px] px-[8px] rounded-full body-4 text-white',
                  item.type === 'award' ? 'bg-primary' : 'bg-secondary',
                )}
              >
                {item.type === 'award' ? '상장' : '자격증'}
              </div>

              <div className="flex flex-col gap-[8px]">
                {/* 제목 */}
                <p className="heading-5">{item.title}</p>

                {/* 기간 */}
                <p className="body-3 text-text-secondary">{item.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardSection;

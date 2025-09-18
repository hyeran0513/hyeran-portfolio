'use client';

import Image from 'next/image';
import { ACTIVITIES } from '@/constants/activity';
import { useEffect, useRef } from 'react';
import { importScrollTrigger } from '@/lib/utils';

const ActicitySection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    (async () => {
      const mod = await importScrollTrigger();
      if (!mod || !sectionRef.current) return;
      const { gsap } = mod;
      ctx = gsap.context(() => {
        gsap.from('.activity-heading', {
          scrollTrigger: {
            trigger: '.activity-heading',
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
          y: 24,
          autoAlpha: 0,
          duration: 0.6,
          ease: 'power3.out',
        });
        gsap.from('.activity-card', {
          scrollTrigger: {
            trigger: '.activity-grid',
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
    <section
      id="activities"
      ref={sectionRef}
      className="max-w-[1200px] mx-auto web:p-[64px] tablet:py-[64px] tablet:px-[32px] py-[48px] px-[16px] flex flex-col tablet:gap-[48px] gap-[24px]"
    >
      {/* 제목 */}
      <h2 className="activity-heading tablet:heading-2 heading-3 word-break-keep">활동</h2>

      <div className="activity-grid grid tablet:grid-cols-4 grid-cols-1 gap-[24px]">
        {ACTIVITIES.map((item) => (
          <div
            key={`${item.title}-${item.period}`}
            className="activity-card bg-background-secondary rounded-[8px] p-[24px] flex flex-col justify-between tablet:aspect-square shadow-sm"
          >
            {/* 로고 */}
            <div className="ml-auto size-[60px] bg-white rounded-full overflow-hidden">
              <Image src={item.logo} alt={item.title} width={60} height={60} />
            </div>

            <div className="flex flex-col gap-[8px]">
              {/* 제목 */}
              <p className="heading-5 word-break-keep">{item.title}</p>

              {/* 설명 */}
              <p className="body-3 text-text-secondary whitespace-pre-line word-break-keep">
                {item.description}
              </p>

              {/* 기간 */}
              <p className="body-3 text-text-secondary word-break-keep">{item.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActicitySection;

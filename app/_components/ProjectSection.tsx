'use client';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { PROJECTS } from '@/constants/project';
import ProjectModal from './ProjectModal';
import { useEffect, useRef } from 'react';
import { importScrollTrigger } from '@/lib/utils';
import FallbackImage from '@/components/shared/FallbackImage';

const ProjectSection = () => {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const selected = useMemo(() => PROJECTS.find((p) => p.key === openKey), [openKey]);

  useEffect(() => {
    let ctx: any;
    (async () => {
      const mod = await importScrollTrigger();
      if (!mod || !sectionRef.current) return;
      const { gsap } = mod;
      ctx = gsap.context(() => {
        gsap.from('.project-heading', {
          scrollTrigger: {
            trigger: '.project-heading',
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
          y: 24,
          autoAlpha: 0,
          duration: 0.6,
          ease: 'power3.out',
        });

        gsap.from('.project-card', {
          scrollTrigger: {
            trigger: '.project-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
          y: 24,
          autoAlpha: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
        });
      }, sectionRef);
    })();
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="max-w-[1200px] mx-auto web:p-[64px] tablet:py-[64px] tablet:px-[32px] py-[48px] px-[16px] flex flex-col tablet:gap-[48px] gap-[24px]"
    >
      {/* 제목 */}
      <div className="flex flex-col gap-[16px]">
        <h2 className="project-heading tablet:heading-2 heading-3">프로젝트</h2>
      </div>

      <div className="project-grid grid tablet:grid-cols-3 grid-cols-1 tablet:gap-[48px] gap-[24px]">
        {PROJECTS.map((p) => (
          <div
            key={p.key}
            className="project-card flex flex-col gap-[24px] cursor-pointer"
            onClick={() => setOpenKey(p.key)}
          >
            {/* 썸네일 */}
            <div className="rounded-[12px] overflow-hidden relative aspect-[325.33/220]">
              <FallbackImage src={p.thumbnail} alt={p.name} fill className="object-cover" />
            </div>

            <div className="px-[12px] flex flex-col gap-[12px]">
              {/* 제목 */}
              <p className="heading-3">{p.name}</p>

              {/* 설명 */}
              <p className="body-2 line-clamp-2 text-text-secondary">{p.description}</p>

              {/* 태그 */}
              <div className="flex flex-wrap gap-[4px]">
                {p.tags.map((tag) => (
                  <div key={tag} className="bg-background-secondary rounded-[4px] p-[8px] body-3">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 프로젝트 모달 */}
      <ProjectModal project={selected} open={!!selected} onClose={() => setOpenKey(null)} />
    </section>
  );
};

export default ProjectSection;

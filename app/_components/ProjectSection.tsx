import Image from 'next/image';
import { PROJECTS } from '@/constants/project';

const ProjectSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-[64px] flex flex-col gap-[48px]">
      {/* 제목 */}
      <div className="flex flex-col gap-[16px]">
        <h2 className="heading-2">프로젝트</h2>
      </div>

      <div className="grid grid-cols-3 gap-[48px]">
        {PROJECTS.map((p) => (
          <div key={p.key} className="flex flex-col gap-[24px]">
            {/* 썸네일 */}
            <div className="rounded-[12px] overflow-hidden relative aspect-[325.33/220]">
              <Image src={p.thumbnail} alt={p.name} fill className="object-cover" />
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
    </div>
  );
};

export default ProjectSection;

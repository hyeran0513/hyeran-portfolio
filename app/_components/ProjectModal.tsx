'use client';

import Modal from '@/components/ui/modal';
import InfoRow from './InfoRow';
import PreviewGallery from './PreviewGallery';

type Project = {
  key: string; // 프로젝트 키
  type: string; // 프로젝트 타입
  name: string; // 프로젝트 이름
  period?: string; // 기간
  members?: string; // 인원
  description: string; // 설명
  url?: string; // 링크
  images?: ReadonlyArray<{ src: string; label?: string }>; // 이미지
  reflection?: string; // 느낀점
};

export default function ProjectModal({
  project,
  open,
  onClose,
}: {
  project: Project | undefined | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!project) return null;
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={project.name}
      label={project.type}
      footer={
        project.url ? (
          <div className="flex items-center justify-end gap-[8px]">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="body-3 px-[12px] py-[8px] rounded-[8px] bg-primary text-white hover:opacity-90 cursor-pointer"
            >
              프로젝트로 이동하기
            </a>
          </div>
        ) : null
      }
    >
      <div className="flex flex-col tablet:gap-[48px] gap-[24px]">
        {/* 기간, 인원 */}
        <div className="grid tablet:grid-cols-2 grid-cols-1 gap-[12px]">
          <InfoRow label="기간" value={project.period} />
          <InfoRow label="인원" value={project.members} />
        </div>

        {/* 프로젝트 정보 */}
        <section className="flex flex-col gap-[8px]">
          <h4 className="heading-4">프로젝트 정보</h4>
          <p className="body-2 whitespace-pre-line text-text-secondary">{project.description}</p>
        </section>

        {/* 느낀점 */}
        {project.reflection ? (
          <section className="flex flex-col gap-[8px]">
            <h4 className="heading-4">느낀점</h4>
            <p className="body-2 whitespace-pre-line text-text-secondary">{project.reflection}</p>
          </section>
        ) : null}

        {/* 화면 미리보기 */}
        {project.images?.length ? (
          <section className="flex flex-col gap-[8px]">
            <h4 className="heading-4">화면 미리보기</h4>
            <PreviewGallery images={project.images} />
          </section>
        ) : null}
      </div>
    </Modal>
  );
}

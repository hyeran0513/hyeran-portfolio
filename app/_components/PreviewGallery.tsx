'use client';

import { useState } from 'react';
import Modal from '@/components/ui/modal';
import FallbackImage from '@/components/shared/FallbackImage';
import { Search } from 'lucide-react';

type PreviewImage = {
  src: string; // 이미지
  label?: string; // 라벨
};

export default function PreviewGallery({ images }: { images: ReadonlyArray<PreviewImage> }) {
  const [zoomSrc, setZoomSrc] = useState<string | null>(null);
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="grid tablet:grid-cols-2 grid-cols-1 gap-[12px]">
        {images.map((img) => (
          <button
            key={img.src}
            className="relative rounded-[8px] overflow-hidden border border-border-primary group cursor-pointer"
            onClick={() => setZoomSrc(img.src)}
          >
            {/* 이미지 */}
            <div className="aspect-[16/10] relative">
              <FallbackImage
                src={img.src}
                alt={img.label || '미리보기'}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* 돋보기 아이콘 */}
            <div className="absolute top-[8px] right-[8px] w-[32px] h-[32px] bg-black/80 rounded-[6px] flex items-center justify-center z-20 shadow-lg">
              <Search size={16} className="text-white" />
            </div>

            {/* 라벨 */}
            {img.label ? (
              <span className="absolute left-[8px] bottom-[8px] body-3 bg-black/60 text-white rounded-[6px] px-[8px] py-[4px] z-10">
                {img.label}
              </span>
            ) : null}
          </button>
        ))}
      </div>

      {/* 확대 보기 */}
      <Modal open={!!zoomSrc} onClose={() => setZoomSrc(null)} fullScreen>
        {zoomSrc ? (
          <div className="relative w-full h-full">
            <FallbackImage
              src={zoomSrc}
              alt="확대 이미지"
              fill
              className="object-contain bg-black"
            />
          </div>
        ) : null}
      </Modal>
    </div>
  );
}

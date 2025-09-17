'use client';

import { X } from 'lucide-react';
import { ReactNode } from 'react';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const MobileSidebar = ({ isOpen, onClose, children }: MobileSidebarProps) => {
  return (
    <div
      className={
        isOpen ? 'tablet:hidden fixed inset-0 z-[1100] bg-black/40 backdrop-blur-[1px]' : 'hidden'
      }
      onClick={onClose}
    >
      <aside
        className={
          isOpen
            ? 'absolute right-0 top-0 h-full w-[76vw] max-w-[320px] bg-white shadow-2xl p-[16px] flex flex-col gap-[8px] translate-x-0 transition-transform duration-200'
            : 'absolute right-0 top-0 h-full w-[76vw] max-w-[320px] bg-white shadow-2xl p-[16px] flex flex-col gap-[8px] translate-x-full transition-transform duration-200'
        }
        role="dialog"
        aria-modal="true"
        aria-label="모바일 메뉴"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-[8px]">
          {/* 제목 */}
          <div className="heading-4">메뉴</div>

          {/* 닫기 버튼 */}
          <button
            aria-label="메뉴 닫기"
            className="rounded-[8px] p-[6px] hover:bg-background-secondary focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={onClose}
          >
            <X size={16} />
          </button>
        </div>
        {children}
      </aside>
    </div>
  );
};

export default MobileSidebar;

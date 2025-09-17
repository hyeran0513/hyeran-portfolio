'use client';

import React from 'react';
import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

type ModalProps = {
  open: boolean; // 열림 여부
  onClose: () => void; // 닫기
  title?: string; // 제목
  label?: string; // 라벨
  footer?: ReactNode; // 하단 액션들
  children: ReactNode; // 바디 콘텐츠
  fullScreen?: boolean; // 전체 화면 여부
};

function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    const html = document.documentElement;
    const body = document.body;

    const scrollY = window.scrollY;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyPosition = body.style.position;
    const prevBodyTop = body.style.top;
    const prevBodyWidth = body.style.width;
    const prevBodyPaddingRight = body.style.paddingRight;

    const scrollbarWidth = window.innerWidth - html.clientWidth;

    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.position = prevBodyPosition;
      body.style.top = prevBodyTop;
      body.style.width = prevBodyWidth;
      body.style.paddingRight = prevBodyPaddingRight;
      window.scrollTo(0, scrollY);
    };
  }, [locked]);
}

export default function Modal({
  open,
  onClose,
  title,
  label,
  footer,
  children,
  fullScreen,
}: ModalProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  // 바디 스크롤 잠금
  useBodyScrollLock(open);

  // ESC 키로 닫기
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  // 열렸을 때 포커스
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => dialogRef.current?.focus(), 0);
      return () => clearTimeout(timer);
    }
  }, [open]);

  if (typeof window === 'undefined') return null;
  const container = document.body;
  if (!open) return null;

  return createPortal(
    <div
      ref={overlayRef}
      aria-hidden
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 backdrop-blur-[1px]"
      onMouseDown={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        className={
          fullScreen
            ? 'bg-black text-white rounded-none shadow-none w-screen h-screen max-w-none max-h-none overflow-hidden flex flex-col'
            : 'bg-white dark:bg-background-primary text-text-primary rounded-[12px] shadow-xl w-[92vw] tablet:w-[800px] max-w-[1000px] max-h-[86vh] overflow-hidden flex flex-col'
        }
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div
          className={
            fullScreen
              ? 'flex items-center justify-between gap-[12px] p-[16px]'
              : 'flex items-center justify-between gap-[12px] p-[16px] border-b border-border-primary'
          }
        >
          {/* 제목, 라벨 */}
          <div className="flex items-center gap-[8px] min-w-0">
            {title ? <h3 className="heading-3 truncate">{title}</h3> : null}
            {label ? (
              <span
                className={
                  fullScreen
                    ? 'shrink-0 body-3 rounded-[6px] px-[8px] py-[4px] bg-white/10'
                    : 'shrink-0 bg-background-secondary text-text-secondary body-3 rounded-[6px] px-[8px] py-[4px]'
                }
              >
                {label}
              </span>
            ) : null}
          </div>

          {/* 닫기 버튼 */}
          <button
            aria-label="닫기"
            className={
              fullScreen
                ? 'rounded-[8px] p-[6px] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white'
                : 'rounded-[8px] p-[6px] hover:bg-background-secondary focus:outline-none focus:ring-2 focus:ring-primary'
            }
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-[16px] overflow-auto flex-1">{children}</div>

        {/* 푸터 */}
        {footer ? (
          <div className="p-[16px] border-t border-border-primary bg-background-secondary/30">
            {footer}
          </div>
        ) : null}
      </div>
    </div>,
    container,
  );
}

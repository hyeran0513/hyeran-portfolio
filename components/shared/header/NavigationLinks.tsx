'use client';

import Link from 'next/link';

interface NavigationLinksProps {
  isMobile?: boolean; // 모바일 여부
  onLinkClick?: () => void; // 링크 클릭 시 호출
}

const NavigationLinks = ({ isMobile = false, onLinkClick }: NavigationLinksProps) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const isTabletUp =
        typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches;
      const headerHeight = isTabletUp ? 96 : 56;
      const rect = targetElement.getBoundingClientRect();
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = currentScroll + rect.top - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }

    if (onLinkClick) {
      onLinkClick();
    }
  };

  const linkClass = isMobile
    ? 'px-[8px] py-[6px] block hover:bg-background-secondary rounded-[4px] transition-colors cursor-pointer'
    : 'px-[8px] hover:bg-background-secondary rounded-[4px] transition-colors cursor-pointer';

  return (
    <>
      <Link
        href="#projects"
        className={`${linkClass} word-break-keep`}
        onClick={(e) => handleLinkClick(e, 'projects')}
      >
        프로젝트
      </Link>
      <Link
        href="#stack"
        className={`${linkClass} word-break-keep`}
        onClick={(e) => handleLinkClick(e, 'stack')}
      >
        스택
      </Link>
      <Link
        href="#activities"
        className={`${linkClass} word-break-keep`}
        onClick={(e) => handleLinkClick(e, 'activities')}
      >
        활동
      </Link>
      <Link
        href="#awards"
        className={`${linkClass} word-break-keep`}
        onClick={(e) => handleLinkClick(e, 'awards')}
      >
        상장/자격증
      </Link>
    </>
  );
};

export default NavigationLinks;

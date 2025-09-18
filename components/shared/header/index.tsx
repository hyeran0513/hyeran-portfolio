'use client';

import { useEffect, useState } from 'react';
import HamburgerButton from './HamburgerButton';
import MobileSidebar from './MobileSidebar';
import NavigationLinks from './NavigationLinks';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMenuOpen]);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-[100] border-b border-border-primary bg-white">
        <div className="max-w-[1200px] mx-auto tablet:h-[96px] h-[56px] web:px-[64px] tablet:px-[32px] px-[16px] flex justify-between items-center">
          {/* 로고 */}
          <div className="heading-3 word-break-keep">Hyeran&apos;s Portfolio</div>

          {/* 데스크톱/태블릿 GNB */}
          <nav className="hidden tablet:flex gap-[8px] items-center" aria-label="주요 메뉴">
            <NavigationLinks />
          </nav>

          {/* 모바일 햄버거 버튼 */}
          <HamburgerButton onClick={() => setIsMenuOpen(true)} />
        </div>

        {/* 모바일 사이드바 */}
        <MobileSidebar isOpen={isMenuOpen} onClose={handleMenuClose}>
          <nav className="flex flex-col gap-[4px]" aria-label="모바일 메뉴">
            <NavigationLinks isMobile={true} onLinkClick={handleMenuClose} />
          </nav>
        </MobileSidebar>
      </header>

      {/* 고정 헤더 높이만큼 */}
      <div className="tablet:h-[96px] h-[56px]" aria-hidden></div>
    </>
  );
};

export default Header;

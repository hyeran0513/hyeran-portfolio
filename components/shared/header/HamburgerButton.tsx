'use client';

import { Menu } from 'lucide-react';

interface HamburgerButtonProps {
  onClick: () => void;
}

const HamburgerButton = ({ onClick }: HamburgerButtonProps) => {
  return (
    <button
      aria-label="메뉴 열기"
      className="tablet:hidden inline-flex items-center justify-center w-[40px] h-[40px] rounded-[8px] hover:bg-background-secondary focus:outline-none focus:ring-2 focus:ring-primary"
      onClick={onClick}
    >
      <Menu size={20} />
    </button>
  );
};

export default HamburgerButton;

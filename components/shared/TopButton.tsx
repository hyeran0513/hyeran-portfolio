'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // 스크롤 위치가 300px 이상일 때 버튼 표시
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // 푸터가 화면에 보이는지 확인
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // 푸터가 화면 하단에서 20px 이내에 있으면 푸터가 보이는 것으로 간주
        setIsFooterVisible(footerRect.top <= windowHeight - 20);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('resize', toggleVisibility);

    // 초기 실행
    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // 푸터가 보이면 푸터 위에, 안 보이면 화면 하단에 배치
  const buttonPosition = isFooterVisible ? 'bottom-[140px]' : 'bottom-[32px]';

  return (
    <button
      onClick={scrollToTop}
      className={`fixed ${buttonPosition} right-[32px] z-50 bg-white border border-border-primary rounded-full p-[12px] shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
      }`}
      aria-label="맨 위로 이동"
    >
      <ChevronUp className="w-[20px] h-[20px] text-gray-700" />
    </button>
  );
};

export default TopButton;

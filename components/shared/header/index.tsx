import Link from 'next/link';

const Header = () => {
  return (
    <header className="border-b border-border-primary bg-white">
      <div className="max-w-[1200px] mx-auto h-[96px] web:px-[64px] tablet:px-[32px] px-[16px] flex justify-between items-center">
        {/* 로고 */}
        <div className="heading-3">Hyeran&apos;s Portfolio</div>

        {/* GNB */}
        <div className="flex gap-[8px]">
          <Link href="/" className="px-[8px]">
            프로젝트
          </Link>
          <Link href="/" className="px-[8px]">
            스택
          </Link>
          <Link href="/" className="px-[8px]">
            활동
          </Link>
          <Link href="/" className="px-[8px]">
            상장
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

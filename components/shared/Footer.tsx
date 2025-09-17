import { GITHUB_URL, EMAIL } from '@/constants/service';

const Footer = () => {
  return (
    <footer className="border-t border-border-primary h-[118px]">
      <div className="max-w-[1200px] mx-auto web:px-[64px] tablet:px-[32px] px-[16px] h-full flex justify-between items-center">
        {/* 저작권 */}
        <p className="body-3">© 2025 김혜란. All rights reserved.</p>

        <div className="flex items-center gap-[48px]">
          {/* 깃허브 */}
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="body-3 cursor-pointer">
            GitHub
          </a>

          {/* 이메일 */}
          <a href={`mailto:${EMAIL}`} className="body-3 cursor-pointer">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

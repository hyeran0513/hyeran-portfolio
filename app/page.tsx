import HeroSection from './_components/HeroSection';
import ProjectSection from './_components/ProjectSection';
import StackSection from './_components/StackSection';
import ActicitySection from './_components/ActicitySection';
import AwardSection from './_components/AwardSection';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/header';
import TopButton from '@/components/shared/TopButton';

export default function Home() {
  return (
    <div>
      {/* 헤더 */}
      <Header />

      <main>
        {/* 히어로 */}
        <HeroSection />

        {/* 프로젝트 */}
        <ProjectSection />

        {/* 스택 */}
        <StackSection />

        {/* 활동 */}
        <ActicitySection />

        {/* 상장/자격증 */}
        <AwardSection />
      </main>

      {/* 푸터 */}
      <Footer />

      {/* 탑 버튼 */}
      <TopButton />
    </div>
  );
}

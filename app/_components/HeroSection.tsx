import FallbackImage from '@/components/shared/FallbackImage';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#EFE9F5] via-[#EAEEF9] to-[#EFEFF9]">
      <div className="flex justify-between items-center tablet:flex-row flex-col max-w-[1200px] mx-auto web:p-[64px] tablet:py-[64px] tablet:px-[32px] py-[48px] px-[16px] tablet:h-[500px] h-[440px]">
        <h1 className="word-break-keep hero-3 text-center tablet:text-left">
          {/* 난초 문구 */}
          <span className="text-primary">난초</span>

          {/* 난초 이미지 */}
          <FallbackImage
            src="/images/deco/flower.png"
            alt="난초 이미지"
            width={40}
            height={40}
            className="inline-block align-middle ml-[6px] -mt-[4px] opacity-90"
            showLoading={false}
          />

          {/* 나머지 문구 */}
          <span> 같은 </span>
          <span className="text-primary">프론트엔드 개발자</span>
          <span>, </span>
          <br className="hidden tablet:block" />
          <span className="text-primary">김혜란</span>
          <span>입니다.</span>
        </h1>

        {/* 히어로 캐릭터 */}
        <FallbackImage
          src="/images/deco/hero_character.png"
          alt="히어로 캐릭터"
          width={400}
          height={400}
          showLoading={false}
        />
      </div>
    </section>
  );
};

export default HeroSection;

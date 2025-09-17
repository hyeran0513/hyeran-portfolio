import FallbackImage from '@/components/shared/FallbackImage';
import EyeTracking from './EyeTracking';

const HeroSection = () => {
  return (
    <section className="bg-primary tablet:h-[630px] h-[500px]">
      <div className="max-w-[1200px] mx-auto h-full relative flex justify-center pt-[94px] overflow-hidden">
        {/* 텍스트 */}
        <div className="hero-title text-white web:hero-1 tablet:hero-2 hero-3 text-center relative z-20">
          김혜란 프론트엔드 <br /> 포트폴리오
        </div>

        {/* 캐릭터 배경 */}
        <div className="hero-bg absolute left-1/2 -translate-x-1/2 -bottom-[340px] w-[756px] h-[756px] rounded-full bg-[#828BD6] z-0 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[524px] h-[524px] rounded-full bg-[#9AA1DF]"></div>
        </div>

        <div className="hero-character w-[399px] h-[219px] aspect-[399/219] absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          {/* 캐릭터 */}
          <FallbackImage
            src="/images/deco/deco_character.png"
            alt="캐릭터"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* 눈동자 */}
          <EyeTracking />
        </div>

        {/* 별 */}
        <div className="hero-star absolute tablet:right-[120px] right-[16px] top-[140px] w-[40px] h-[40px] animate-twinkle z-10 pointer-events-none">
          <FallbackImage
            src="/images/deco/deco_outline_white_star.png"
            alt="outline white star"
            fill
            className="object-contain"
            loading="lazy"
          />
        </div>

        {/* 별 */}
        <div className="hero-star absolute right-[60px] top-[220px] w-[28px] h-[28px] animate-twinkle [animation-delay:.6s] z-10 pointer-events-none">
          <FallbackImage
            src="/images/deco/deco_white_star.png"
            alt="white star"
            fill
            className="object-contain"
            loading="lazy"
          />
        </div>

        {/* 별 */}
        <div className="hero-star absolute tablet:left-[80px] left-[16px] top-[200px] w-[32px] h-[32px] animate-twinkle [animation-delay:1.1s] z-10 pointer-events-none">
          <FallbackImage
            src="/images/deco/deco_yellow_star.png"
            alt="yellow star"
            fill
            className="object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
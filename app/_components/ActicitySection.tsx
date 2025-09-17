import Image from 'next/image';
import { ACTIVITIES } from '@/constants/activity';

const ActicitySection = () => {
  return (
    <div className="max-w-[1200px] mx-auto web:p-[64px] tablet:py-[64px] tablet:px-[32px] py-[48px] px-[16px] flex flex-col tablet:gap-[48px] gap-[24px]">
      {/* 제목 */}
      <h2 className="tablet:heading-2 heading-3">활동</h2>

      <div className="grid tablet:grid-cols-4 grid-cols-1 gap-[24px]">
        {ACTIVITIES.map((item) => (
          <div
            key={`${item.title}-${item.period}`}
            className="bg-background-secondary rounded-[8px] p-[24px] flex flex-col justify-between tablet:aspect-square shadow-sm"
          >
            {/* 로고 */}
            <div className="ml-auto size-[60px] bg-white rounded-full overflow-hidden">
              <Image src={item.logo} alt={item.title} width={60} height={60} />
            </div>

            <div className="flex flex-col gap-[8px]">
              {/* 제목 */}
              <p className="heading-5">{item.title}</p>

              {/* 설명 */}
              <p className="body-3 text-text-secondary whitespace-pre-line">{item.description}</p>

              {/* 기간 */}
              <p className="body-3 text-text-secondary">{item.period}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActicitySection;

import Image from 'next/image';
import { ACTIVITIES } from '@/constants/activity';

const ActicitySection = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-[64px] flex flex-col gap-[48px]">
      {/* 제목 */}
      <h2 className="heading-2">활동</h2>

      <div className="grid grid-cols-4 gap-[24px]">
        {ACTIVITIES.map((item) => (
          <div
            key={`${item.title}-${item.period}`}
            className="bg-background-secondary rounded-[8px] p-[24px] flex flex-col justify-between aspect-square shadow-sm"
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

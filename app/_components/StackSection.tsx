import Image from 'next/image';
import { STACKS } from '@/constants/stack';
import CircularProgress from '@/components/ui/CircularProgress';

const StackSection = () => {
  return (
    <div className="bg-background-secondary">
      <div className="max-w-[1200px] mx-auto web:p-[64px] tablet:py-[64px] tablet:px-[32px] py-[48px] px-[16px] flex flex-col tablet:gap-[48px] gap-[24px]">
        {/* 제목 */}
        <h2 className="tablet:heading-2 heading-3">스택</h2>

        <div className="grid tablet:grid-cols-4 grid-cols-2 tablet:gap-[24px] gap-[16px]">
          {STACKS.map((item) => {
            return (
              <div
                key={item.name}
                className="bg-white p-[24px] rounded-[8px] flex tablet:flex-row flex-col gap-[24px] justify-between items-center shadow-sm"
              >
                <div className="flex flex-col items-center gap-[4px]">
                  {/* 스택 로고 */}
                  <Image src={item.logo} alt={item.name} width={40} height={40} />

                  {/* 스택 이름 */}
                  <p className="body-3 text-text-secondary">{item.name}</p>
                </div>

                {/* 진행률 */}
                <CircularProgress percent={item.percent} size={80} strokeWidth={12} innerSize={60}>
                  <span className="heading-6 text-text-secondary">{item.percent}%</span>
                </CircularProgress>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StackSection;

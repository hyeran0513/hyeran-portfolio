import Image from 'next/image';
import { STACKS } from '@/constants/stack';
import CircularProgress from '@/components/ui/CircularProgress';

const StackSection = () => {
  return (
    <div className="bg-background-secondary">
      <div className="max-w-[1200px] mx-auto p-[64px] flex flex-col gap-[48px]">
        {/* 제목 */}
        <h2 className="heading-2">스택</h2>

        <div className="grid grid-cols-4 gap-[24px]">
          {STACKS.map((item) => {
            return (
              <div
                key={item.name}
                className="bg-white p-[24px] rounded-[8px] flex justify-between items-center shadow-sm"
              >
                <div className="flex flex-col gap-[4px]">
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

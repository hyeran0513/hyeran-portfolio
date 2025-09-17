import { AWARDS } from '@/constants/award';
import { cn } from '@/lib/utils';

const AwardSection = () => {
  return (
    <div className="bg-background-secondary">
      <div className="max-w-[1200px] mx-auto web:p-[64px] tablet:py-[64px] tablet:px-[32px] py-[48px] px-[16px] flex flex-col tablet:gap-[48px] gap-[24px]">
        {/* 제목 */}
        <h2 className="tablet:heading-2 heading-3">상장/자격증</h2>

        <div className="grid tablet:grid-cols-4 grid-cols-1 gap-[24px]">
          {AWARDS.map((item) => (
            <div
              key={`${item.title}-${item.period}`}
              className="bg-white rounded-[8px] p-[24px] flex flex-col gap-[24px] justify-between shadow-sm"
            >
              {/* 타입 */}
              <div
                className={cn(
                  'self-start inline-block py-[6px] px-[8px] rounded-full body-4 text-white',
                  item.type === 'award' ? 'bg-primary' : 'bg-secondary',
                )}
              >
                {item.type === 'award' ? '상장' : '자격증'}
              </div>

              <div className="flex flex-col gap-[8px]">
                {/* 제목 */}
                <p className="heading-5">{item.title}</p>

                {/* 기간 */}
                <p className="body-3 text-text-secondary">{item.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardSection;

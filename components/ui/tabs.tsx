'use client';

import { cn } from '@/lib/utils';

interface TabItem {
  value: string; // 탭의 값
  label: string; // 탭의 라벨
}

interface TabsProps {
  items: TabItem[]; // 탭의 아이템
  value: string; // 탭의 값
  onValueChange: (value: string) => void; // 탭의 값 변경
  className?: string; // 탭의 클래스
}

const Tabs = ({ items, value, onValueChange, className }: TabsProps) => {
  return (
    <div className={cn('flex gap-[8px]', className)}>
      {items.map((item) => (
        <button
          key={item.value}
          onClick={() => onValueChange(item.value)}
          className={cn(
            'px-[16px] py-[8px] rounded-[8px] body-2 transition-all duration-200',
            value === item.value
              ? 'bg-primary text-white'
              : 'bg-background-secondary text-text-secondary hover:bg-background-tertiary hover:text-text-primary',
          )}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;

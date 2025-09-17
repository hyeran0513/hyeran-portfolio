'use client';

type Props = {
  label: string; // 라벨
  value?: string; // 값
};

export default function InfoRow({ label, value }: Props) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-[8px]">
      <span className="body-3 text-text-secondary shrink-0 w-[56px]">{label}</span>
      <span className="body-2">{value}</span>
    </div>
  );
}

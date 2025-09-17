import React from 'react';

type CircularProgressProps = {
  percent: number; // 진행률
  size?: number; // 외부 크기
  strokeWidth?: number; // 트랙 너비
  trackColor?: string; // 트랙 색상
  progressColor?: string; // 진행률 색상
  innerSize?: number; // 내부 크기
  children?: React.ReactNode; // 자식 요소
  className?: string; // 클래스 이름
};

const CircularProgress: React.FC<CircularProgressProps> = ({
  percent,
  size = 80,
  strokeWidth = 12,
  trackColor = '#F1F1F1',
  progressColor = '#7680D5',
  innerSize = 60,
  children,
  className,
}) => {
  const clamped = Math.max(0, Math.min(100, percent));
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - clamped / 100);

  return (
    <div
      className={`relative grid place-items-center rounded-full`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="block">
        {/* 트랙 */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
        />

        {/* 진행률 */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={progressColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          transform={`rotate(-90 ${center} ${center})`}
        />
      </svg>

      {/* 내부 요소 */}
      <div className="absolute inset-0 grid place-items-center">
        <div
          className={`grid place-items-center rounded-full bg-white ${className ?? ''}`}
          style={{ width: innerSize, height: innerSize }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;

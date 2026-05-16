import * as React from 'react';
import { cn } from '@/lib/utils';

interface DogAvatarProps extends React.SVGProps<SVGSVGElement> {
  variant?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: number;
}

const palette = ['#E8B547', '#C8765B', '#F4B8A8', '#B8D4C4', '#1F3A2E', '#F5EFE6'];
const outline = '#1F3A2E';

export function DogAvatar({ variant = 1, size = 80, className, ...props }: DogAvatarProps) {
  const fill = palette[variant - 1];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block rounded-full', className)}
      {...props}
    >
      <circle cx="40" cy="40" r="40" fill={variant === 6 ? '#1F3A2E' : '#F5EFE6'} />
      <g transform="translate(0, 4)">
        {(variant === 1 || variant === 3 || variant === 5) && (
          <ellipse cx="40" cy="58" rx="20" ry="14" fill={fill} stroke={outline} strokeWidth="1.5" />
        )}
        <ellipse cx="40" cy="38" rx="18" ry="16" fill={fill} stroke={outline} strokeWidth="1.5" />
        {variant === 1 && (
          <>
            <ellipse
              cx="24"
              cy="32"
              rx="6"
              ry="10"
              fill={fill}
              stroke={outline}
              strokeWidth="1.5"
              transform="rotate(-20 24 32)"
            />
            <ellipse
              cx="56"
              cy="32"
              rx="6"
              ry="10"
              fill={fill}
              stroke={outline}
              strokeWidth="1.5"
              transform="rotate(20 56 32)"
            />
          </>
        )}
        {variant === 2 && (
          <>
            <polygon
              points="24,28 22,12 32,24"
              fill={fill}
              stroke={outline}
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <polygon
              points="56,28 58,12 48,24"
              fill={fill}
              stroke={outline}
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </>
        )}
        {variant === 3 && (
          <>
            <polygon
              points="22,28 20,14 30,24"
              fill={fill}
              stroke={outline}
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <ellipse
              cx="56"
              cy="32"
              rx="5"
              ry="9"
              fill={fill}
              stroke={outline}
              strokeWidth="1.5"
              transform="rotate(25 56 32)"
            />
          </>
        )}
        {variant === 4 && (
          <>
            <circle cx="24" cy="26" r="6" fill={fill} stroke={outline} strokeWidth="1.5" />
            <circle cx="56" cy="26" r="6" fill={fill} stroke={outline} strokeWidth="1.5" />
          </>
        )}
        {variant === 5 && (
          <>
            <ellipse cx="26" cy="26" rx="5" ry="6" fill={fill} stroke={outline} strokeWidth="1.5" />
            <ellipse cx="54" cy="26" rx="5" ry="6" fill={fill} stroke={outline} strokeWidth="1.5" />
          </>
        )}
        {variant === 6 && (
          <>
            <polygon
              points="22,28 20,12 32,24"
              fill={fill}
              stroke={outline}
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <polygon
              points="58,28 60,12 48,24"
              fill={fill}
              stroke={outline}
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <ellipse cx="32" cy="40" rx="6" ry="5" fill="#2A2A2A" />
          </>
        )}
        <ellipse cx="40" cy="38" rx="18" ry="16" fill={fill} stroke={outline} strokeWidth="1.5" />
        <circle cx="33" cy="38" r="2.2" fill={outline} />
        <circle cx="47" cy="38" r="2.2" fill={outline} />
        <circle cx="33.6" cy="37.3" r="0.8" fill="#FAFAFA" />
        <circle cx="47.6" cy="37.3" r="0.8" fill="#FAFAFA" />
        <ellipse cx="40" cy="46" rx="3" ry="2" fill={outline} />
        {variant === 2 ? (
          <path
            d="M36 50 Q 40 56 44 50 L 44 53 Q 40 58 36 53 Z"
            fill="#F4B8A8"
            stroke={outline}
            strokeWidth="1"
          />
        ) : (
          <path
            d="M36 49 Q 40 53 44 49"
            stroke={outline}
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        )}
      </g>
    </svg>
  );
}

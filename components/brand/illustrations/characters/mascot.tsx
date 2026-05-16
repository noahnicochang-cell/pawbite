import * as React from 'react';
import { cn } from '@/lib/utils';

interface MascotProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'sitting' | 'peeking' | 'happy' | 'sleepy';
  size?: number;
  bodyColor?: string;
  outlineColor?: string;
}

export function Mascot({
  variant = 'sitting',
  size = 200,
  bodyColor = '#E8B547',
  outlineColor = '#1F3A2E',
  className,
  ...props
}: MascotProps) {
  if (variant === 'peeking') {
    return (
      <svg
        width={size}
        height={size * 0.5}
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('inline-block', className)}
        {...props}
      >
        <ellipse cx="100" cy="70" rx="55" ry="40" fill={bodyColor} />
        <ellipse cx="100" cy="60" rx="42" ry="32" fill={bodyColor} />
        <ellipse
          cx="65"
          cy="50"
          rx="14"
          ry="22"
          fill={bodyColor}
          stroke={outlineColor}
          strokeWidth="2.5"
        />
        <ellipse
          cx="135"
          cy="50"
          rx="14"
          ry="22"
          fill={bodyColor}
          stroke={outlineColor}
          strokeWidth="2.5"
        />
        <ellipse
          cx="100"
          cy="60"
          rx="42"
          ry="32"
          fill={bodyColor}
          stroke={outlineColor}
          strokeWidth="2.5"
        />
        <circle cx="85" cy="62" r="4" fill={outlineColor} />
        <circle cx="115" cy="62" r="4" fill={outlineColor} />
        <circle cx="86.5" cy="60.5" r="1.5" fill="#FAFAFA" />
        <circle cx="116.5" cy="60.5" r="1.5" fill="#FAFAFA" />
        <ellipse cx="100" cy="74" rx="5" ry="3.5" fill={outlineColor} />
        <path
          d="M92 80 Q 100 88 108 80"
          stroke={outlineColor}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (variant === 'happy') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('inline-block', className)}
        {...props}
      >
        <ellipse
          cx="100"
          cy="150"
          rx="55"
          ry="40"
          fill={bodyColor}
          stroke={outlineColor}
          strokeWidth="2.5"
        />
        <path
          d="M150 130 Q 175 110 175 95 Q 170 100 160 110 Z"
          fill={bodyColor}
          stroke={outlineColor}
          strokeWidth="2.5"
        />
        <ellipse
          cx="100"
          cy="90"
          rx="48"
          ry="42"
          fill={bodyColor}
          stroke={outlineColor}
          strokeWidth="2.5"
        />
        <ellipse
          cx="58"
          cy="78"
          rx="16"
          ry="28"
          fill={bodyColor}
          stroke={outlineColor}
          strokeWidth="2.5"
          transform="rotate(-25 58 78)"
        />
        <ellipse
          cx="142"
          cy="78"
          rx="16"
          ry="28"
          fill={bodyColor}
          stroke={outlineColor}
          strokeWidth="2.5"
          transform="rotate(25 142 78)"
        />
        <path
          d="M78 88 Q 84 82 90 88"
          stroke={outlineColor}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M110 88 Q 116 82 122 88"
          stroke={outlineColor}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <ellipse cx="100" cy="102" rx="6" ry="4" fill={outlineColor} />
        <path
          d="M92 112 Q 100 124 108 112 L 108 118 Q 100 128 92 118 Z"
          fill="#F4B8A8"
          stroke={outlineColor}
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (variant === 'sleepy') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('inline-block', className)}
        {...props}
      >
        <ellipse
          cx="100"
          cy="130"
          rx="70"
          ry="50"
          fill={bodyColor}
          stroke={outlineColor}
          strokeWidth="2.5"
        />
        <ellipse
          cx="65"
          cy="110"
          rx="35"
          ry="30"
          fill={bodyColor}
          stroke={outlineColor}
          strokeWidth="2.5"
        />
        <ellipse
          cx="50"
          cy="95"
          rx="12"
          ry="20"
          fill={bodyColor}
          stroke={outlineColor}
          strokeWidth="2.5"
          transform="rotate(-30 50 95)"
        />
        <path
          d="M55 110 Q 62 106 70 110"
          stroke={outlineColor}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <ellipse cx="42" cy="118" rx="4" ry="3" fill={outlineColor} />
        <text x="120" y="60" fontSize="16" fontFamily="serif" fontWeight="bold" fill={outlineColor}>
          z
        </text>
        <text x="135" y="48" fontSize="20" fontFamily="serif" fontWeight="bold" fill={outlineColor}>
          z
        </text>
        <text x="155" y="35" fontSize="26" fontFamily="serif" fontWeight="bold" fill={outlineColor}>
          Z
        </text>
      </svg>
    );
  }

  // Default: sitting
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      {...props}
    >
      <ellipse
        cx="100"
        cy="150"
        rx="50"
        ry="38"
        fill={bodyColor}
        stroke={outlineColor}
        strokeWidth="2.5"
      />
      <path
        d="M148 130 Q 168 115 170 100 Q 160 105 152 118 Z"
        fill={bodyColor}
        stroke={outlineColor}
        strokeWidth="2.5"
      />
      <ellipse
        cx="100"
        cy="90"
        rx="45"
        ry="40"
        fill={bodyColor}
        stroke={outlineColor}
        strokeWidth="2.5"
      />
      <ellipse
        cx="62"
        cy="80"
        rx="14"
        ry="25"
        fill={bodyColor}
        stroke={outlineColor}
        strokeWidth="2.5"
      />
      <ellipse
        cx="138"
        cy="80"
        rx="14"
        ry="25"
        fill={bodyColor}
        stroke={outlineColor}
        strokeWidth="2.5"
      />
      <ellipse cx="83" cy="88" rx="5" ry="6" fill={outlineColor} />
      <ellipse cx="117" cy="88" rx="5" ry="6" fill={outlineColor} />
      <circle cx="85" cy="86" r="1.8" fill="#FAFAFA" />
      <circle cx="119" cy="86" r="1.8" fill="#FAFAFA" />
      <ellipse cx="100" cy="105" rx="6" ry="4" fill={outlineColor} />
      <path
        d="M90 115 Q 100 122 110 115"
        stroke={outlineColor}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <rect
        x="80"
        y="170"
        width="10"
        height="20"
        rx="5"
        fill={bodyColor}
        stroke={outlineColor}
        strokeWidth="2.5"
      />
      <rect
        x="110"
        y="170"
        width="10"
        height="20"
        rx="5"
        fill={bodyColor}
        stroke={outlineColor}
        strokeWidth="2.5"
      />
    </svg>
  );
}

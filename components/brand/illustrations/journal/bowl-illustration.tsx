import * as React from 'react';
import { cn } from '@/lib/utils';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function BowlIllustration({ size = 160, className, ...props }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      {...props}
    >
      {/* Floor shadow */}
      <ellipse cx="80" cy="125" rx="55" ry="8" fill="#1F3A2E" opacity="0.12" />
      {/* Bowl back rim */}
      <ellipse cx="80" cy="92" rx="50" ry="10" fill="#1F3A2E" opacity="0.25" />
      {/* Bowl body */}
      <path
        d="M 30 92 Q 80 130 130 92 L 125 115 Q 80 145 35 115 Z"
        fill="#C8765B"
        stroke="#1F3A2E"
        strokeWidth="2.5"
      />
      {/* Food chunks */}
      <circle cx="62" cy="90" r="9" fill="#E8B547" stroke="#1F3A2E" strokeWidth="1.5" />
      <circle cx="80" cy="86" r="7" fill="#E8B547" stroke="#1F3A2E" strokeWidth="1.5" />
      <circle cx="97" cy="90" r="9" fill="#E8B547" stroke="#1F3A2E" strokeWidth="1.5" />
      <circle cx="72" cy="83" r="5" fill="#F4B8A8" stroke="#1F3A2E" strokeWidth="1.5" />
      <circle cx="90" cy="83" r="5" fill="#F4B8A8" stroke="#1F3A2E" strokeWidth="1.5" />
      {/* Steam */}
      <path
        d="M 65 70 Q 68 65 65 58 Q 62 51 65 44"
        stroke="#1F3A2E"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M 80 75 Q 84 68 80 60 Q 76 53 80 45"
        stroke="#1F3A2E"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M 95 70 Q 98 65 95 58 Q 92 51 95 44"
        stroke="#1F3A2E"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

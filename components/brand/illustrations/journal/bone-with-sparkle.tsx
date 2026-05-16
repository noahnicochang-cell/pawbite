import * as React from 'react';
import { cn } from '@/lib/utils';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function BoneWithSparkle({ size = 160, className, ...props }: Props) {
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
      {/* Bone (diagonal) */}
      <g transform="translate(80 80) rotate(-25) translate(-80 -80)">
        {/* Left knobs */}
        <circle cx="40" cy="68" r="18" fill="#F5EFE6" stroke="#1F3A2E" strokeWidth="2.5" />
        <circle cx="40" cy="92" r="18" fill="#F5EFE6" stroke="#1F3A2E" strokeWidth="2.5" />
        {/* Right knobs */}
        <circle cx="120" cy="68" r="18" fill="#F5EFE6" stroke="#1F3A2E" strokeWidth="2.5" />
        <circle cx="120" cy="92" r="18" fill="#F5EFE6" stroke="#1F3A2E" strokeWidth="2.5" />
        {/* Middle stem */}
        <rect
          x="40"
          y="68"
          width="80"
          height="24"
          fill="#F5EFE6"
          stroke="#1F3A2E"
          strokeWidth="2.5"
        />
        {/* Clean up internal lines */}
        <line x1="42" y1="68" x2="118" y2="68" stroke="#F5EFE6" strokeWidth="3" />
        <line x1="42" y1="92" x2="118" y2="92" stroke="#F5EFE6" strokeWidth="3" />
      </g>
      {/* Sparkles around it */}
      <g fill="#E8B547">
        <path d="M 30 30 L 33 38 L 41 41 L 33 44 L 30 52 L 27 44 L 19 41 L 27 38 Z" />
        <path d="M 130 35 L 132 40 L 137 42 L 132 44 L 130 49 L 128 44 L 123 42 L 128 40 Z" />
        <path d="M 125 130 L 127 134 L 131 136 L 127 138 L 125 142 L 123 138 L 119 136 L 123 134 Z" />
      </g>
      <circle cx="50" cy="135" r="2" fill="#C8765B" />
      <circle cx="140" cy="115" r="2" fill="#C8765B" />
    </svg>
  );
}

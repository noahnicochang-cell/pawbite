import * as React from 'react';
import { cn } from '@/lib/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

export function DashedArrow({ width = 80, height = 40, className, ...props }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="4 4"
      strokeLinecap="round"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      {...props}
    >
      <path d="M5 5 Q 35 5, 50 20 T 72 32" />
      <path d="M68 28 L 72 32 L 65 33" strokeDasharray="0" fill="currentColor" />
    </svg>
  );
}

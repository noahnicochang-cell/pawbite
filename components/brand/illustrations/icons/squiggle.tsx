import * as React from 'react';
import { cn } from '@/lib/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
}

export function Squiggle({ width = 120, className, ...props }: IconProps) {
  return (
    <svg
      width={width}
      height={12}
      viewBox="0 0 120 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      {...props}
    >
      <path d="M2 6 Q 15 1, 30 6 T 60 6 T 90 6 T 118 6" />
    </svg>
  );
}

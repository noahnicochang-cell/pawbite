import * as React from 'react';
import { cn } from '@/lib/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function Stethoscope({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      {...props}
    >
      <path d="M6 3v6a4 4 0 0 0 8 0V3" />
      <path d="M10 13v3a4 4 0 0 0 8 0v-2" />
      <circle cx="18" cy="11" r="2.5" fill="currentColor" />
    </svg>
  );
}

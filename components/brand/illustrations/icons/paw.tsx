import * as React from 'react';
import { cn } from '@/lib/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function Paw({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      {...props}
    >
      <ellipse cx="7" cy="8" rx="2" ry="2.5" />
      <ellipse cx="12" cy="6" rx="2" ry="2.5" />
      <ellipse cx="17" cy="8" rx="2" ry="2.5" />
      <ellipse cx="4" cy="13" rx="1.8" ry="2.2" />
      <ellipse cx="20" cy="13" rx="1.8" ry="2.2" />
      <path d="M12 11c-3 0-5 3-5 6 0 2 1 4 5 4s5-2 5-4c0-3-2-6-5-6z" />
    </svg>
  );
}

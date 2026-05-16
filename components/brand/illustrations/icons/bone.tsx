import * as React from 'react';
import { cn } from '@/lib/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function Bone({ size = 24, className, ...props }: IconProps) {
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
      <path d="M5.5 6.5c-1.5 0-2.5 1-2.5 2.5s1 2.5 2.5 2.5c.5 0 1 .5 1 1s-.5 1-1 1c-1.5 0-2.5 1-2.5 2.5s1 2.5 2.5 2.5 2.5-1 2.5-2.5c.5 0 1-.5 1-1l7-7c0-.5.5-1 1-1 0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5-1 2.5-2.5 2.5c-.5 0-1 .5-1 1s.5 1 1 1c1.5 0 2.5 1 2.5 2.5s-1 2.5-2.5 2.5-2.5-1-2.5-2.5c-.5 0-1-.5-1-1l-7 7c0 .5-.5 1-1 1 0 1.5-1 2.5-2.5 2.5z" />
    </svg>
  );
}

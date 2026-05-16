import * as React from 'react';
import { cn } from '@/lib/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  withHeart?: boolean;
}

export function Shield({ size = 24, withHeart = false, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      {withHeart && (
        <path
          d="M12 15s-3-2-3-4c0-1 1-2 2-2 1 0 1.5.5 2 1 .5-.5 1-1 2-1 1 0 2 1 2 2 0 2-3 4-3 4z"
          fill="currentColor"
        />
      )}
    </svg>
  );
}

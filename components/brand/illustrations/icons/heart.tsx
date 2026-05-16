import * as React from 'react';
import { cn } from '@/lib/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function Heart({ size = 24, className, ...props }: IconProps) {
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
      <path d="M12 21s-7.5-4.5-9.5-9C1.5 9 3 5.5 6.5 5.5c2 0 3.5 1 5.5 3 2-2 3.5-3 5.5-3 3.5 0 5 3.5 4 6.5-2 4.5-9.5 9-9.5 9z" />
    </svg>
  );
}

import * as React from 'react';
import { cn } from '@/lib/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function USFactoryBadge({ size = 32, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      {...props}
    >
      <circle cx="16" cy="16" r="14" fill="#F5EFE6" stroke="#1F3A2E" strokeWidth="1.5" />
      <rect x="9" y="14" width="14" height="9" fill="#C8765B" />
      <polygon points="9,14 16,9 23,14" fill="#1F3A2E" />
      <rect x="14" y="17" width="4" height="6" fill="#F5EFE6" />
      <text x="16" y="29" textAnchor="middle" fontSize="3.5" fontWeight="bold" fill="#1F3A2E">
        USA
      </text>
    </svg>
  );
}

import * as React from 'react';
import { cn } from '@/lib/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function Mailbox({ size = 64, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      {...props}
    >
      <rect x="14" y="22" width="36" height="22" rx="11" fill="#C8765B" />
      <rect x="14" y="22" width="36" height="22" rx="11" stroke="#1F3A2E" strokeWidth="2" />
      <rect x="30" y="44" width="4" height="14" fill="#1F3A2E" />
      <path d="M44 28 L44 34 L52 34 L52 30 Z" fill="#E8B547" stroke="#1F3A2E" strokeWidth="2" />
      <circle cx="22" cy="33" r="2" fill="#1F3A2E" />
      <rect
        x="26"
        y="30"
        width="14"
        height="6"
        rx="1"
        fill="#F5EFE6"
        stroke="#1F3A2E"
        strokeWidth="1.5"
      />
    </svg>
  );
}

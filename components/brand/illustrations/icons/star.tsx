import * as React from 'react';
import { cn } from '@/lib/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  variant?: 'clean' | 'hand-drawn';
}

export function Star({ size = 24, variant = 'clean', className, ...props }: IconProps) {
  if (variant === 'hand-drawn') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('inline-block', className)}
        style={{ transform: `rotate(${Math.random() * 8 - 4}deg)` }}
        {...props}
      >
        <path
          d="M12 3.2c.3 0 .6.2.7.5l2 5c.1.2.3.4.5.4l5.4.4c.7 0 .9.8.4 1.2l-4.1 3.4c-.2.1-.3.4-.2.6l1.3 5.2c.2.6-.5 1.1-1 .8l-4.5-2.8c-.2-.1-.5-.1-.7 0l-4.5 2.8c-.5.3-1.2-.2-1-.8l1.3-5.2c.1-.2 0-.5-.2-.6L3.3 10.7c-.5-.4-.3-1.2.4-1.2l5.4-.4c.2 0 .4-.2.5-.4l2-5c.1-.3.4-.5.7-.5z"
          fill="currentColor"
        />
      </svg>
    );
  }
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
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

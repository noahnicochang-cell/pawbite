import * as React from 'react';
import { cn } from '@/lib/utils';

interface CalloutPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'caveat' | 'clean';
  color?: 'warmyellow' | 'terracotta' | 'mint' | 'pinky';
  rotation?: number;
}

const colors = {
  warmyellow: 'bg-warmyellow text-forest',
  terracotta: 'bg-terracotta text-cream',
  mint: 'bg-mint text-forest',
  pinky: 'bg-pinky text-forest',
};

export function CalloutPill({
  variant = 'caveat',
  color = 'warmyellow',
  rotation = -3,
  className,
  children,
  ...props
}: CalloutPillProps) {
  return (
    <span
      className={cn(
        'inline-block rounded-full px-4 py-1.5 shadow-stack-sm',
        colors[color],
        variant === 'caveat'
          ? 'font-hand text-xl'
          : 'font-sans text-xs font-semibold uppercase tracking-wider',
        className,
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
      {...props}
    >
      {children}
    </span>
  );
}

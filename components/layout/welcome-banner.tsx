import * as React from 'react';
import { Bone } from '@/components/brand/illustrations/icons/bone';
import { cn } from '@/lib/utils';

interface WelcomeBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  show?: boolean;
}

export function WelcomeBanner({ show = true, className, ...props }: WelcomeBannerProps) {
  if (!show) return null;
  return (
    <div
      className={cn(
        'w-full bg-terracotta px-4 py-2 text-center text-xs font-medium text-cream md:text-sm',
        className,
      )}
      {...props}
    >
      <span className="inline-flex items-center gap-2">
        <Bone size={14} className="text-cream/80" />
        Welcome offer: 30% off your first order + free shipping. Code{' '}
        <span className="font-bold tracking-wider">WELCOME</span>
      </span>
    </div>
  );
}

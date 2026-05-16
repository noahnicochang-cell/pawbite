import * as React from 'react';
import { cn } from '@/lib/utils';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function ClockIllustration({ size = 160, className, ...props }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      {...props}
    >
      {/* Clock body */}
      <circle cx="80" cy="85" r="55" fill="#F5EFE6" stroke="#1F3A2E" strokeWidth="2.5" />
      {/* Inner ring */}
      <circle cx="80" cy="85" r="48" fill="none" stroke="#1F3A2E" strokeWidth="1" opacity="0.3" />
      {/* Tick marks at 12, 3, 6, 9 */}
      <line
        x1="80"
        y1="35"
        x2="80"
        y2="42"
        stroke="#1F3A2E"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="130"
        y1="85"
        x2="123"
        y2="85"
        stroke="#1F3A2E"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="80"
        y1="135"
        x2="80"
        y2="128"
        stroke="#1F3A2E"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="30"
        y1="85"
        x2="37"
        y2="85"
        stroke="#1F3A2E"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Smaller ticks at 1, 2, 4, 5, 7, 8, 10, 11 */}
      {[30, 60, 120, 150, 210, 240, 300, 330].map((deg) => {
        const rad = ((deg - 90) * Math.PI) / 180;
        const x1 = 80 + Math.cos(rad) * 50;
        const y1 = 85 + Math.sin(rad) * 50;
        const x2 = 80 + Math.cos(rad) * 46;
        const y2 = 85 + Math.sin(rad) * 46;
        return (
          <line
            key={deg}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#1F3A2E"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.5"
          />
        );
      })}
      {/* Hour hand (points to ~2) */}
      <line
        x1="80"
        y1="85"
        x2="105"
        y2="65"
        stroke="#C8765B"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Minute hand (points to ~10) */}
      <line
        x1="80"
        y1="85"
        x2="58"
        y2="55"
        stroke="#1F3A2E"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Center */}
      <circle cx="80" cy="85" r="5" fill="#1F3A2E" />
      {/* Top knob */}
      <rect x="76" y="22" width="8" height="10" rx="2" fill="#1F3A2E" />
      {/* Little legs at bottom */}
      <line
        x1="55"
        y1="138"
        x2="50"
        y2="148"
        stroke="#1F3A2E"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="105"
        y1="138"
        x2="110"
        y2="148"
        stroke="#1F3A2E"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

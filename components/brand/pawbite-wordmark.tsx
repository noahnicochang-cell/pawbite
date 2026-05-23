import { cn } from '@/lib/utils';

interface PawBiteWordmarkProps {
  className?: string;
  pawColor?: string;
}

/**
 * The PawBite wordmark with a paw print replacing the dot on the lowercase 'i'.
 * Uses dotless ı (U+0131) under the paw so the natural dot doesn't show through.
 * Inherits font from parent — wrap in font-display to use Bagel Fat One.
 */
export function PawBiteWordmark({ className, pawColor = 'currentColor' }: PawBiteWordmarkProps) {
  return (
    <span className={cn('font-display inline-flex items-baseline tracking-tight', className)}>
      PawB
      <span className="relative inline-block">
        <span aria-hidden>ı</span>
        <span className="sr-only">i</span>
        <svg
          aria-hidden
          viewBox="0 0 24 22"
          className="absolute left-1/2 top-[0.05em] h-[0.42em] w-[0.42em] -translate-x-1/2"
          fill={pawColor}
        >
          <ellipse cx="12" cy="15" rx="6" ry="5" />
          <ellipse cx="3" cy="7" rx="2.5" ry="3" />
          <ellipse cx="9" cy="3" rx="2.5" ry="3" />
          <ellipse cx="15" cy="3" rx="2.5" ry="3" />
          <ellipse cx="21" cy="7" rx="2.5" ry="3" />
        </svg>
      </span>
      te
    </span>
  );
}

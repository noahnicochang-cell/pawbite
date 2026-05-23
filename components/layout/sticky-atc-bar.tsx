'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface StickyATCBarProps {
  show?: boolean;
}

export function StickyATCBar({ show = true }: StickyATCBarProps) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (!show) return;
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [show]);

  if (!show) return null;

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-30 transition-transform duration-300',
        visible ? 'translate-y-0' : 'translate-y-full',
      )}
    >
      <div className="border-t border-cream/15 bg-forest text-cream shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.4)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <Badge variant="warmyellow" className="hidden text-forest sm:inline-flex">
              Pre-launch
            </Badge>
            <div className="min-w-0">
              <div className="truncate text-xs font-semibold text-cream">
                Reserve your spot — 30% off forever
              </div>
              <div className="text-xs text-cream/70">
                Daily probiotic chews · $30/month · ships at launch
              </div>
            </div>
          </div>
          <Button variant="primary" size="md" asChild className="bg-warmyellow text-forest hover:bg-warmyellow/90">
            <Link href="/quiz">Join the waitlist</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface BuyButtonProps {
  label?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function BuyButton({ label = 'SHOP NOW — $38.99', className, size = 'lg' }: BuyButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleBuy() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/checkout', { method: 'POST' });
      const data = await res.json();
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        setError('Could not start checkout. Try again.');
        setLoading(false);
      }
    } catch {
      setError('Could not start checkout. Try again.');
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-start gap-1">
      <Button
        variant="primary"
        size={size}
        className={className}
        onClick={handleBuy}
        disabled={loading}
      >
        {loading ? 'Opening checkout…' : label}
      </Button>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}

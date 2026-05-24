'use client';

import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield } from '@/components/brand/illustrations/icons/shield';
import type { ProductDetail } from '@/data/products-detail';
import { cn } from '@/lib/utils';

export function PdpHero({ product }: { product: ProductDetail }) {
  const [subscribe, setSubscribe] = React.useState(true);
  const price = subscribe ? product.subPrice : product.retailPrice;
  const savings = product.retailPrice - product.subPrice;

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
      {/* Real product photo — same tin used on the homepage hero,
          with soft royal-blue radial halo for visual weight */}
      <div className="relative mx-auto flex w-full max-w-md flex-col items-center justify-center">
        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-0 -z-0 mx-auto h-[420px] w-[420px] rounded-full blur-3xl"
            style={{
              background:
                'radial-gradient(closest-side, rgba(30,64,175,0.10), rgba(30,64,175,0) 70%)',
            }}
          />
          <div className="absolute -left-2 top-6 z-10">
            <Badge variant="forest" className="text-[11px] tracking-[0.24em] font-semibold">
              ★ BESTSELLER
            </Badge>
          </div>
          <Image
            src="/product/pawbite-tin.png"
            alt={`${product.name} — PawBite Pet Probiotic Chews tin`}
            width={1024}
            height={1024}
            priority
            className="relative h-auto w-[420px] max-w-full drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Info column — Epilogue editorial typography to match homepage */}
      <div className="flex flex-col gap-4">
        {/* Mono micro-caption replaces the gray ' • ' line */}
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-navy/60 sm:text-xs">
          Vet-formulated · 90-day guarantee · 5B CFU
        </p>

        <h1 className="font-editorial text-balance text-4xl font-extrabold leading-[0.95] tracking-tight text-navy md:text-5xl lg:text-6xl">
          {product.name}
        </h1>

        {/* Tagline — Fraunces italic accent matching homepage 'chews' style */}
        <p className="font-serif fraunces-soft italic text-2xl font-bold text-terracotta md:text-3xl">
          {product.tagline}
        </p>

        <p className="font-editorial text-base leading-relaxed text-navy/80 md:text-lg">
          {product.longDescription}
        </p>

        {/* Buy box */}
        <div className="mt-2 rounded-2xl border border-navy/15 bg-mist-soft p-5">
          <div className="mb-4 flex gap-2">
            <button
              type="button"
              onClick={() => setSubscribe(true)}
              className={cn(
                'flex-1 rounded-full border-2 px-4 py-2 font-editorial text-sm font-bold uppercase tracking-wide transition-all',
                subscribe
                  ? 'border-terracotta bg-terracotta text-mist'
                  : 'border-navy/20 bg-transparent text-navy hover:border-navy',
              )}
            >
              Subscribe — save 20%
            </button>
            <button
              type="button"
              onClick={() => setSubscribe(false)}
              className={cn(
                'flex-1 rounded-full border-2 px-4 py-2 font-editorial text-sm font-bold uppercase tracking-wide transition-all',
                !subscribe
                  ? 'border-navy bg-navy text-mist'
                  : 'border-navy/20 bg-transparent text-navy hover:border-navy',
              )}
            >
              One-time
            </button>
          </div>

          <div className="mb-3 flex items-baseline gap-3">
            <span className="font-editorial text-5xl font-black text-navy">
              ${price.toFixed(price % 1 === 0 ? 0 : 2)}
            </span>
            {subscribe && (
              <>
                <span className="font-editorial text-base text-navy/60 line-through">
                  ${product.retailPrice}
                </span>
                <Badge variant="warmyellow" className="text-navy">
                  Save ${savings.toFixed(0)}/mo
                </Badge>
              </>
            )}
          </div>

          <p className="mb-4 font-editorial text-xs text-navy/70">
            {subscribe
              ? 'Ships every 30 days · Free shipping · Skip / swap / pause anytime.'
              : 'One-time delivery · Free shipping over $40.'}
          </p>

          <Button variant="primary" size="lg" className="w-full" disabled>
            Pre-order — coming soon
          </Button>
        </div>

        <div className="flex items-center gap-3 pt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-navy/70">
          <Shield size={16} className="text-terracotta" />
          <span>90-day guarantee · Free ship $40+ · Vet-formulated</span>
        </div>
      </div>
    </div>
  );
}

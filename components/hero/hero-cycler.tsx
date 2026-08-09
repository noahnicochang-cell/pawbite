'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { BuyButton } from '@/components/buy-button';

const SKUS = [
  {
    badge: 'PRE-ORDER · CB-01',
    lines: ['CALMING', 'chews', 'FOR DOGS.'],
    tagline: 'Adaptogens, not sedation.',
    body: 'L-theanine + ashwagandha + chamomile. Soft-baked chews that take the edge off — no CBD, no melatonin, no sedatives.',
    price: '$24.99',
    details: '90 soft chews · Ships Aug 31 · Free US shipping',
    image: '/product/calming-tin-label.png',
    alt: 'PawBite Calming Chews tin',
    live: true,
    accentColor: '#D9654A',
    bgTint: '#FAE8E4',
  },
  {
    badge: 'PRE-ORDER · PB-01',
    lines: ['GUT HEALTH', 'probiotic', 'FOR DOGS.'],
    tagline: 'Real probiotics, named strains, no flash.',
    body: '2-strain Bacillus probiotic — named strains, verified CFUs. The daily supplement your dog actually needs.',
    price: '$24.99',
    details: '90 soft chews · Ships Oct 30 · Free US shipping',
    image: '/product/probiotic-tin-label.png',
    alt: 'PawBite Probiotic Chews tin',
    live: true,
    accentColor: '#5B9E2F',
    bgTint: '#EAF5DB',
  },
  {
    badge: 'PRE-ORDER · JM-01',
    lines: ['JOINT +', 'mobility', 'FOR DOGS.'],
    tagline: "Built for the dog who's still sharp.",
    body: "Glucosamine + chondroitin + green-lipped mussel. Built for the senior dog who's still in the game.",
    price: '$24.99',
    details: '90 soft chews · Ships Dec 30 · Free US shipping',
    image: '/product/joint-tin-label.png',
    alt: 'PawBite Joint + Mobility Chews tin',
    live: true,
    accentColor: '#E07B2B',
    bgTint: '#FBF0E5',
  },
];

const INTERVAL = 7000;

export function HeroCycler() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActive((i) => (i + 1) % SKUS.length);
        setFading(false);
      }, 500);
    }, INTERVAL);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const section = document.getElementById('hero-section');
    if (section) {
      section.style.transition = 'background-color 700ms ease-in-out';
      section.style.backgroundColor = SKUS[active].bgTint;
    }
  }, [active]);

  const sku = SKUS[active];

  return (
    <div className="grid gap-8 py-4 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12 lg:py-6">
      {/* Text column */}
      <div
        className="space-y-5 transition-opacity duration-500"
        style={{ opacity: fading ? 0 : 1 }}
      >
        <Badge variant="forest" className="text-[11px] tracking-[0.28em] font-semibold text-cream">
          {sku.badge}
        </Badge>

        <h1 className="font-sans text-5xl uppercase leading-[0.9] tracking-tighter text-charcoal sm:text-6xl lg:text-7xl xl:text-8xl">
          <span className="block font-extrabold">{sku.lines[0]}</span>
          <span className="block font-serif fraunces-soft italic font-bold" style={{ color: sku.accentColor }}>{sku.lines[1]}</span>
          <span className="block font-extrabold">{sku.lines[2]}</span>
        </h1>

        <p className="font-editorial text-base uppercase tracking-[0.24em] text-forest font-bold sm:text-lg">
          {sku.tagline}
        </p>

        <p className="max-w-lg text-base leading-relaxed text-charcoal font-editorial font-semibold">
          {sku.body}
        </p>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <BuyButton className="rounded-full bg-forest px-8 py-4 text-cream hover:bg-forest/90" />
          <span className="font-sans text-sm uppercase tracking-[0.22em] text-forest">
            {sku.details}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="text-2xl font-mono tracking-[0.15em] text-terracotta">★★★★★</span>
          <span className="font-mono text-sm uppercase tracking-[0.24em] text-forest">
            4.9 · 8,420 happy tails
          </span>
        </div>

        {/* Dot nav */}
        <div className="flex gap-2 pt-1">
          {SKUS.map((s, i) => (
            <button
              key={i}
              onClick={() => { setFading(true); setTimeout(() => { setActive(i); setFading(false); }, 300); }}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: i === active ? '24px' : '8px',
                backgroundColor: i === active ? s.accentColor : 'rgba(45,80,22,0.25)',
              }}
              aria-label={`View SKU ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Image column */}
      <div
        className="relative mx-auto flex w-full max-w-lg items-center justify-center transition-opacity duration-500"
        style={{ opacity: fading ? 0 : 1 }}
      >
        {/* Soft halo — color matches the active SKU */}
        <div
          aria-hidden
          className="absolute inset-0 -z-0 mx-auto rounded-full blur-3xl opacity-70"
          style={{ background: `radial-gradient(closest-side, ${sku.accentColor}33, transparent 70%)` }}
        />
        {sku.live && (
          <div className="absolute -left-2 top-6 z-10">
            <Badge variant="forest" className="text-[11px] tracking-[0.24em] font-semibold">
              ★ BESTSELLER
            </Badge>
          </div>
        )}
        <Image
          src={sku.image}
          alt={sku.alt}
          width={560}
          height={640}
          priority
          className="relative h-auto w-full max-w-[400px]"
        />
      </div>
    </div>
  );
}

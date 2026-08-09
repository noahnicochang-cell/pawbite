import * as React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { PawBiteWordmark } from '@/components/brand/pawbite-wordmark';

const linkColumns = [
  {
    title: 'Shop',
    links: [
      { href: '/products/calming-chews', label: 'Calming Chews' },
      { href: '/products/daily-probiotic', label: 'Probiotic Chews' },
      { href: '/products/hip-and-joint', label: 'Joint + Mobility' },
      { href: '/merch', label: 'Merch' },
      { href: '/quiz', label: 'Take the quiz' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { href: '/learn', label: 'Articles' },
      { href: '/concerns', label: 'Concerns' },
      { href: '/breeds', label: 'By breed' },
      { href: '/ingredients', label: 'Ingredients' },
      { href: '/science', label: 'The science' },
    ],
  },
  {
    title: 'Help',
    links: [
      { href: '/shipping', label: 'Shipping' },
      { href: '/returns', label: 'Returns' },
      { href: '/perks', label: 'Subscriber perks' },
      { href: 'mailto:help@pawbite.com', label: 'Contact us' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { href: '/about', label: 'About PawBite' },
      { href: '/vets', label: 'Our vets' },
      { href: '/reviews', label: 'Reviews' },
      { href: 'https://instagram.com/pawbite', label: 'Instagram', external: true },
      { href: 'https://www.tiktok.com/@pawbite.nyc', label: 'TikTok', external: true },
    ],
  },
];

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest pb-10 pt-20 text-cream">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="fraunces-soft mb-3 text-4xl font-bold text-cream md:text-5xl">
            Subscribe &amp; save <span className="italic text-warmyellow">20%</span>.
          </h2>
          <p className="mx-auto max-w-md text-sm text-cream/80">
            Plus free shipping on every order. Skip, swap, or cancel in one click — no calls, no
            fees.
          </p>
          <Button variant="light" size="md" className="mt-6" asChild>
            <Link href="/products">Browse the line</Link>
          </Button>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {linkColumns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 font-display text-lg text-warmyellow">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={'external' in link && link.external ? '_blank' : undefined}
                      rel={'external' in link && link.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-cream/85 transition-colors hover:text-warmyellow"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-cream/15 pt-8 md:flex-row md:items-center">
          <div>
            <PawBiteWordmark className="mb-1 text-2xl text-cream" pawColor="#E8B547" />
            <p className="font-sans text-sm tracking-[0.18em] uppercase text-warmyellow">
              Made in New York, NY
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <Link
              href="https://instagram.com/pawbite"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PawBite on Instagram"
              className="text-cream/60 transition-colors hover:text-warmyellow"
            >
              <InstagramIcon />
            </Link>
            <Link
              href="https://www.tiktok.com/@pawbite.nyc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PawBite on TikTok"
              className="text-cream/60 transition-colors hover:text-warmyellow"
            >
              <TikTokIcon />
            </Link>
          </div>

          <div className="flex flex-col gap-2 text-xs text-cream/60 md:items-end">
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-cream">Privacy</Link>
              <Link href="/terms" className="hover:text-cream">Terms</Link>
              <Link href="/editorial" className="hover:text-cream">Editorial policy</Link>
            </div>
            <p>© {new Date().getFullYear()} PawBite. Vet-formulated. Dog-approved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

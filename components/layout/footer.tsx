import * as React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { PawBiteWordmark } from '@/components/brand/pawbite-wordmark';

const linkColumns = [
  {
    title: 'Shop',
    links: [
      { href: '/products/daily-probiotic', label: 'Daily Probiotic' },
      { href: '/products/hip-and-joint', label: 'Hip + Joint' },
      { href: '/products/daily-duo', label: 'The Daily Duo' },
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
      { href: '/perks', label: 'Subscriber perks' },
    ],
  },
];

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
          <div className="flex flex-col gap-2 text-xs text-cream/60 md:items-end">
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-cream">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-cream">
                Terms
              </Link>
              <Link href="/editorial" className="hover:text-cream">
                Editorial policy
              </Link>
            </div>
            <p>© {new Date().getFullYear()} PawBite. Vet-formulated. Dog-approved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

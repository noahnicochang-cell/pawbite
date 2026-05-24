'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { PawBiteWordmark } from '@/components/brand/pawbite-wordmark';

const navLinks = [
  { href: '/products', label: 'Shop' },
  { href: '/quiz', label: 'Quiz' },
  { href: '/learn', label: 'Learn' },
  { href: '/about', label: 'About' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-white/95 text-navy backdrop-blur-sm">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <PawBiteWordmark className="text-5xl leading-none text-navy" pawColor="#E97757" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy transition-colors hover:text-terracotta"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="primary" size="sm" asChild className="hidden md:inline-flex">
              <Link href="/quiz">Take the quiz</Link>
            </Button>
            <button
              className="p-2 text-navy md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="flex flex-col gap-2 border-t border-navy/10 pb-4 pt-3 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-sm font-medium text-navy"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="primary" size="sm" asChild className="mt-2 w-full">
              <Link href="/quiz" onClick={() => setMobileOpen(false)}>
                Take the quiz
              </Link>
            </Button>
          </nav>
        )}
      </Container>
    </header>
  );
}

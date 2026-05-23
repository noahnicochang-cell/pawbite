import Link from 'next/link';
import type { Metadata } from 'next';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { CalloutPill } from '@/components/brand/illustrations/callout-pill';

export const metadata: Metadata = {
  title: 'Lost the scent — page not found',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Section background="cream" spacing="loose">
      <Container size="narrow" className="text-center">
        <CalloutPill variant="caveat" color="warmyellow" rotation={-3} className="mb-4">
          404 —
        </CalloutPill>

        <h1 className="fraunces-soft mb-4 text-balance text-4xl font-bold leading-tight md:text-5xl">
          Lost the scent.
        </h1>

        <p className="mx-auto mb-8 max-w-md text-lg leading-relaxed text-charcoal">
          The page you were looking for doesn&apos;t exist. Maybe the link is old, or maybe Lola ate
          it. Try one of these instead.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button variant="primary" size="lg" asChild>
            <Link href="/">Back to home</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/products">Shop the line</Link>
          </Button>
        </div>

        <div className="mt-12 text-sm text-charcoal/70">
          <p className="mb-2">Or pick a place to start:</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link href="/learn" className="text-terracotta underline-offset-4 hover:underline">
              Learn
            </Link>
            <Link href="/breeds" className="text-terracotta underline-offset-4 hover:underline">
              By breed
            </Link>
            <Link href="/concerns" className="text-terracotta underline-offset-4 hover:underline">
              By concern
            </Link>
            <Link href="/quiz" className="text-terracotta underline-offset-4 hover:underline">
              Take the quiz
            </Link>
            <Link href="/about" className="text-terracotta underline-offset-4 hover:underline">
              About PawBite
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

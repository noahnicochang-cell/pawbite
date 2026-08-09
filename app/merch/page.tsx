import type { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { PawBiteWordmark } from '@/components/brand/pawbite-wordmark';
import { merchItems, type MerchStatus } from '@/data/merch';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Merch',
  description: 'PawBite merch. Bowls, collars, caps, and more — designed for dogs with taste.',
  alternates: { canonical: `${SITE_URL}/merch` },
};

const statusConfig: Record<MerchStatus, { label: string; pill: string; btn: string; btnClass: string }> = {
  'coming-soon': {
    label: 'Coming Soon',
    pill: 'bg-warmyellow/20 text-navy',
    btn: 'Notify Me',
    btnClass: 'border-forest text-forest hover:bg-forest hover:text-cream',
  },
  'waitlist': {
    label: 'Join Waitlist',
    pill: 'bg-terracotta/15 text-terracotta',
    btn: 'Join Waitlist',
    btnClass: 'bg-terracotta text-cream border-terracotta hover:bg-terracotta/90',
  },
  'sold-out': {
    label: 'Sold Out',
    pill: 'bg-charcoal/10 text-charcoal/60',
    btn: 'Sold Out',
    btnClass: 'opacity-40 cursor-not-allowed border-charcoal/30 text-charcoal/40',
  },
};

export default function MerchPage() {
  return (
    <>
      <Section className="bg-mist-soft py-0 pt-10 pb-4">
        <Container>
          <div className="text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="font-editorial text-xs font-semibold uppercase tracking-[0.3em] text-charcoal/40">The</span>
              <PawBiteWordmark className="h-8 md:h-10 text-forest" />
              <span className="font-editorial text-xs font-semibold uppercase tracking-[0.3em] text-charcoal/40">Store</span>
            </div>
            <h1 className="fraunces-soft mb-4 text-balance text-4xl font-bold md:text-5xl">
              Gear for good dogs.
            </h1>
            <p className="mx-auto max-w-md text-base leading-relaxed text-charcoal/80">
              Everything is either dropping soon or joining the waitlist. Join the list and you'll hear first — plus 20% off when it goes live.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="cream" spacing="default">
        <Container>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {merchItems.map((item) => {
              const cfg = statusConfig[item.status];
              return (
                <div key={item.slug} className="group flex flex-col items-center text-center">
                  {/* Image */}
                  <div className="relative mb-5 flex h-64 w-full items-end justify-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={400}
                      className={`h-full w-auto object-contain transition-transform duration-300 group-hover:-translate-y-1 ${item.status === 'sold-out' ? 'opacity-50 grayscale' : ''}`}
                      style={{ clipPath: 'inset(0 0 8% 0)' }}
                    />
                    {/* Status pill */}
                    <div className={`absolute right-2 top-2 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-semibold ${cfg.pill}`}>
                      {cfg.label}
                    </div>
                  </div>

                  {/* Text */}
                  <h2 className="fraunces-soft mb-1 text-xl font-bold text-forest">{item.name}</h2>
                  {item.price && (
                    <p className="mb-2 font-mono text-sm tracking-wider text-charcoal/50">{item.price}</p>
                  )}
                  <p className="mb-4 max-w-[240px] text-sm leading-relaxed text-charcoal/70">
                    {item.description}
                  </p>

                  <Button
                    variant="outline"
                    size="md"
                    className={`rounded-full px-6 ${cfg.btnClass}`}
                    disabled={item.status === 'sold-out'}
                    asChild={item.status !== 'sold-out'}
                  >
                    {item.status === 'sold-out' ? (
                      <span>{cfg.btn}</span>
                    ) : (
                      <a href={`mailto:hello@pawbite.com?subject=Waitlist: ${item.name}`}>
                        {cfg.btn}
                      </a>
                    )}
                  </Button>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}

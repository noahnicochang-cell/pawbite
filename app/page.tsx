import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Canister } from '@/components/brand/canister';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';

export default function HomePage() {
  return (
    <>
      <style>{`@keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }`}</style>

      <Section className="bg-forest py-0">
        <Container className="grid gap-12 py-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-center lg:py-16">
          <div className="space-y-8">
            <Badge variant="warmyellow" className="text-[11px] tracking-[0.28em] font-semibold text-forest">
              NEW RELEASE · PB-01
            </Badge>

            <div className="space-y-5">
              <h1 className="font-sans text-5xl font-bold uppercase leading-tight tracking-tight text-cream sm:text-6xl lg:text-7xl">
                <span className="block">PROBIOTIC</span>
                <span className="block font-serif fraunces-soft italic text-5xl text-warmyellow sm:text-6xl lg:text-7xl">chews</span>
                <span className="block">FOR DOGS.</span>
              </h1>
              <p className="font-sans text-base uppercase tracking-[0.24em] text-cream/80 sm:text-lg">
                One bite. Real gut support.
              </p>
            </div>

            <p className="max-w-2xl text-base leading-7 text-cream/85 font-sans">
              7-strain targeted probiotic protocol, clinically formulated to support your dog&apos;s gut health.
            </p>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button variant="primary" size="lg" className="rounded-full bg-cream px-8 py-4 text-forest hover:bg-cream/90">
                SHOP NOW — $30
              </Button>
              <span className="font-sans text-sm uppercase tracking-[0.22em] text-cream/70">
                30-day supply · Free US shipping
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-cream">
              <span className="text-2xl font-mono tracking-[0.15em] text-warmyellow">★★★★★</span>
              <span className="font-mono text-sm uppercase tracking-[0.24em] text-cream/80">
                4.9 · 8,420 happy tails
              </span>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-md flex-col items-center justify-center gap-6">
            <div className="relative w-full rounded-[32px] border border-cream/15 bg-cream p-6 shadow-soft">
              <div className="absolute left-0 top-0 ml-3 -translate-y-1">
                <Badge variant="warmyellow" className="text-[11px] tracking-[0.24em] font-semibold text-forest">
                  ★ BESTSELLER
                </Badge>
              </div>
              <div className="absolute right-0 top-0 mr-3 -translate-y-1">
                <Badge variant="forest" className="text-[11px] tracking-[0.24em] font-semibold">
                  $30 / MONTH
                </Badge>
              </div>
              <div className="flex justify-center pt-8">
                <Canister name="Gut Blend" tagline="Daily probiotic" bandColor="forest" size="lg" />
              </div>
            </div>
            <Button variant="outline" size="sm" className="rounded-full border-cream px-10 py-3 text-cream hover:bg-cream/10">
              GUT
            </Button>
          </div>
        </Container>

        <div className="overflow-hidden border-t border-cream/15 py-5">
          <div
            className="flex min-w-full animate-[marquee_18s_linear_infinite] whitespace-nowrap text-sm uppercase tracking-[0.22em] text-cream/80"
            style={{ gap: '1.75rem' }}
          >
            <span className="inline-block pr-8">
              GMP CERTIFIED · FDA REGISTERED · NSF AUDITED · ISO 9001 · GRAIN FREE · THIRD-PARTY VERIFIED · 30-DAY GUARANTEE
            </span>
            <span className="inline-block pr-8">
              GMP CERTIFIED · FDA REGISTERED · NSF AUDITED · ISO 9001 · GRAIN FREE · THIRD-PARTY VERIFIED · 30-DAY GUARANTEE
            </span>
          </div>
        </div>
      </Section>

      {/* Brand statement — Maev-style giant italic wordmark */}
      <section className="relative overflow-hidden bg-forest">
        <div className="flex min-h-[70vh] items-center justify-center px-4 py-24 sm:py-32">
          <h2
            className="fraunces-soft text-cream italic leading-[0.85] tracking-tight text-center"
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontSize: 'clamp(6rem, 28vw, 26rem)',
              fontWeight: 500,
            }}
          >
            pawbite
          </h2>
        </div>
        <div className="border-t border-cream/15 px-4 py-6 text-center">
          <p className="font-sans text-xs uppercase tracking-[0.32em] text-cream/80">
            real food. real strains. real dogs.
          </p>
        </div>
      </section>
    </>
  );
}

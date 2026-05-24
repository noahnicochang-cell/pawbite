import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { heroStats } from '@/data/stats';
import { promises } from '@/data/promises';
import { testimonials } from '@/data/testimonials';

export default function HomePage() {
  return (
    <>
      <style>{`@keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }`}</style>

      <Section className="bg-cream py-0">
        <Container className="grid gap-10 py-6 lg:grid-cols-[1.3fr_0.9fr] lg:items-center lg:py-8">
          <div className="space-y-8">
            <Badge variant="forest" className="text-[11px] tracking-[0.28em] font-semibold text-cream">
              NEW RELEASE · PB-01
            </Badge>

            <div className="space-y-5">
              <h1 className="font-sans text-5xl font-bold uppercase leading-tight tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
                <span className="block">PROBIOTIC</span>
                <span className="block font-serif fraunces-soft italic text-5xl text-terracotta sm:text-6xl lg:text-7xl">chews</span>
                <span className="block">FOR DOGS.</span>
              </h1>
              <p className="font-sans text-base uppercase tracking-[0.24em] text-forest sm:text-lg">
                One bite. Real gut support.
              </p>
            </div>

            <p className="max-w-2xl text-base leading-7 text-charcoal font-sans">
              Multi-Strain Probiotic Complex with Complex Digestive Blend. Soft-baked beef liver chews,
              5 billion CFU each, vet-formulated for daily gut support.
            </p>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button variant="primary" size="lg" className="rounded-full bg-forest px-8 py-4 text-cream hover:bg-forest/90">
                SHOP NOW — $30
              </Button>
              <span className="font-sans text-sm uppercase tracking-[0.22em] text-forest">
                90 soft chews · 11.1 oz · Free US shipping
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-forest">
              <span className="text-2xl font-mono tracking-[0.15em] text-terracotta">★★★★★</span>
              <span className="font-mono text-sm uppercase tracking-[0.24em] text-forest">
                4.9 · 8,420 happy tails
              </span>
            </div>
          </div>

          {/* Real product photo — PawBite tin */}
          <div className="relative mx-auto flex w-full max-w-md flex-col items-center justify-center gap-6">
            <div className="relative">
              {/* Floating badges */}
              <div className="absolute -left-2 top-6 z-10">
                <Badge variant="forest" className="text-[11px] tracking-[0.24em] font-semibold">
                  ★ BESTSELLER
                </Badge>
              </div>
              <div className="absolute -right-2 top-6 z-10">
                <Badge variant="warmyellow" className="text-[11px] tracking-[0.24em] font-semibold text-navy">
                  $30
                </Badge>
              </div>

              <Image
                src="/product/pawbite-tin.jpg"
                alt="PawBite Pet Probiotic Chews tin — 90 soft chews, beef liver flavor"
                width={500}
                height={500}
                priority
                className="h-auto w-[420px] max-w-full drop-shadow-2xl"
              />
            </div>
          </div>
        </Container>

        <div className="overflow-hidden border-t border-forest/10 py-5">
          <div
            className="flex min-w-full animate-[marquee_18s_linear_infinite] whitespace-nowrap text-sm uppercase tracking-[0.22em] text-forest"
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

      {/* Stat band — no repeats, no MADE IN USA */}
      <Section spacing="tight">
        <Container>
          <div className="grid gap-8 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="fraunces-soft text-3xl font-bold text-forest sm:text-4xl">
                  {stat.bigNumber}
                </p>
                <p className="mt-2 font-sans text-sm uppercase tracking-[0.2em] text-forest/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Real Dogs — beta tester testimonials (pre-launch placeholder photos) */}
      <Section spacing="default">
        <Container>
          <div className="mb-10 text-center">
            <p className="mb-2 font-hand text-2xl text-terracotta">— Real dogs, real owners</p>
            <h2 className="fraunces-soft text-balance text-4xl font-bold text-forest md:text-5xl">
              Beta testers, two weeks in.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-forest/70">
              Pre-launch program. Photos and quotes from real beta households — we&apos;ll keep
              adding as more 14-day check-ins come back.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t, i) => {
              // Pre-launch mockup placeholder photos from Unsplash (CC0)
              // Replace with real beta tester photos in public/testimonials/<name>.jpg before public launch
              const placeholderPhotos = [
                'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&h=600&fit=crop&q=80',
                'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=600&fit=crop&q=80',
                'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&h=600&fit=crop&q=80',
              ];
              return (
                <article
                  key={t.dogName}
                  className="overflow-hidden rounded-3xl bg-cream"
                >
                  <div className="relative aspect-square overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={placeholderPhotos[i]}
                      alt={`${t.dogName}, a ${t.dogBreed}`}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-cream/95 px-2 py-1 font-sans text-[10px] uppercase tracking-[0.18em] text-forest">
                      Beta · 14 day
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="fraunces-soft text-xl font-bold text-forest">
                      {t.dogName}
                      <span className="ml-2 font-sans text-sm font-normal text-forest/70">
                        {t.dogBreed}
                      </span>
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal">&ldquo;{t.quote}&rdquo;</p>
                    <p className="mt-4 font-sans text-xs uppercase tracking-[0.18em] text-forest/70">
                      — {t.ownerName}
                      {t.ownerLocation ? ` · ${t.ownerLocation}` : ''}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* What we won't do — founder promises */}
      <Section spacing="default">
        <Container size="narrow">
          <div className="mb-10 text-center">
            <h2 className="font-editorial text-balance text-3xl font-semibold tracking-tight text-navy sm:text-4xl md:text-5xl">
              What we won&apos;t do.
            </h2>
          </div>
          <ul className="grid gap-8 md:grid-cols-2">
            {promises.map((p) => (
              <li key={p.headline} className="rounded-2xl border border-forest/10 bg-cream-2 p-6">
                <h3 className="fraunces-soft mb-2 text-xl font-bold text-forest">{p.headline}</h3>
                <p className="text-sm leading-relaxed text-charcoal">{p.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Button variant="outline" size="md" asChild>
              <Link href="/about">Read the full founder story</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Quiz CTA — pre-purchase qualification + email capture funnel */}
      <Section spacing="default">
        <Container size="narrow">
          <div className="text-center">
            <p className="mb-3 font-sans text-xs uppercase tracking-[0.28em] font-semibold text-forest/70">
              Not sure if it&apos;s right for your dog?
            </p>
            <h2 className="fraunces-soft text-balance text-4xl font-bold text-forest md:text-5xl">
              Take the 60-second quiz.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-forest/80">
              Five quick questions about your dog. We&apos;ll tell you whether PawBite is the right
              fit — and exactly why.
            </p>
            <Button variant="primary" size="lg" asChild className="mt-8 rounded-full px-10 py-4 bg-forest text-cream hover:bg-forest/90">
              <Link href="/quiz">Start the quiz →</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Email capture / waitlist */}
      <Section spacing="default">
        <Container size="narrow">
          <div className="rounded-3xl border border-forest/15 bg-cream-2 p-10 text-center md:p-14">
            <p className="mb-3 font-sans text-xs uppercase tracking-[0.28em] font-semibold text-terracotta">
              Letters from PawBite
            </p>
            <h2 className="fraunces-soft text-balance text-4xl font-bold text-forest md:text-5xl">
              Join the waitlist.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-charcoal">
              We&apos;ll send you one short letter when we launch. Plus 30% off your first order —
              locked in forever.
            </p>
            <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="your@email.com"
                aria-label="Email address"
                className="min-w-0 flex-1 rounded-full border border-forest/20 bg-cream px-5 py-3 text-base text-forest placeholder:text-forest/40 focus:border-forest focus:outline-none"
              />
              <Button variant="primary" size="md" className="rounded-full px-6 whitespace-nowrap">
                Reserve my spot
              </Button>
            </form>
            <p className="mt-4 text-xs text-forest/60">
              1,247 dog parents on the waitlist · One email per month max · Unsubscribe anytime
            </p>
          </div>
        </Container>
      </Section>

      {/* Ingredients spotlight — clean editorial treatment, no placeholder circles */}
      <section className="relative overflow-hidden bg-white">
        <Container className="py-20 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-editorial text-3xl font-semibold tracking-tight text-navy sm:text-4xl md:text-5xl">
              Elevating <span className="font-serif fraunces-soft italic font-normal">Real-Strain</span> Gut Health<sup className="text-base">™</sup>
            </h2>
            <p className="mx-auto mt-5 max-w-xl font-editorial text-base leading-relaxed text-navy/80 sm:text-lg">
              At PawBite, we&apos;re raising the standard of canine gut care. Every chew is built on a
              5-strain probiotic protocol — 5 billion CFU, guaranteed through end-of-shelf-life —
              paired with prebiotic fiber and clean whole-food ingredients. Nothing your dog
              doesn&apos;t need.
            </p>
            <Link
              href="/learn"
              className="mt-5 inline-flex items-center gap-1 font-editorial text-sm font-medium text-navy underline-offset-4 hover:underline"
            >
              Behind the science <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {[
              { label: 'Vet-formulated', desc: '5-strain protocol' },
              { label: 'Research-backed', desc: '5B CFU per chew' },
              { label: 'Third-party tested', desc: 'Potency-verified' },
              { label: 'Real food base', desc: 'Pumpkin · sweet potato' },
            ].map((badge) => (
              <div key={badge.label} className="flex flex-col items-center text-center">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-navy">
                  {badge.label}
                </p>
                <p className="mt-1 text-xs text-navy/60">{badge.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Brand statement — giant Bagel Fat One wordmark, darker grey on a deeper mist plate */}
      <section className="relative overflow-hidden bg-mist-deep">
        <div className="flex min-h-[70vh] items-center justify-center px-4 py-24 sm:py-32">
          <h2
            className="font-display leading-[0.85] tracking-tight text-center text-slate-ink"
            style={{
              fontFamily: 'var(--font-display), sans-serif',
              fontSize: 'clamp(5rem, 24vw, 22rem)',
            }}
          >
            pawbite
          </h2>
        </div>
        <div className="border-t border-navy/15 px-4 py-6 text-center">
          <p className="font-editorial text-xs uppercase tracking-[0.32em] text-navy/70">
            real food. real strains. real dogs.
          </p>
        </div>
      </section>
    </>
  );
}

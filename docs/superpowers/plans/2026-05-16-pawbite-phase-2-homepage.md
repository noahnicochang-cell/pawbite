# PawBite — Phase 2: Homepage Implementation Plan

> **For agentic workers:** Use superpowers:subagent-driven-development to execute. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Take the static HTML mockup at `designs/08-hybrid-favorite.html` and rebuild it as the live home page at `/` using the Phase 1 components. All 13 sections, componentized, mobile + desktop responsive.

**Architecture:** Each homepage section becomes its own React component in `components/sections/`. Sections compose existing Phase 1 components (Mascot, DogAvatar, Canister, Blob, CalloutPill, Button, Section, Container, etc.). Mock data (testimonials, blog teasers, product summaries) lives in `data/` and is statically imported — Shopify/CMS integration arrives in later phases. The home page itself (`app/page.tsx`) is pure assembly — sections stack vertically.

**Tech stack:** Same as Phase 1 (Next.js 14 + Tailwind + TypeScript + React 18 server components by default).

**Spec reference:** `docs/superpowers/specs/2026-05-06-pawbite-site-design.md` Section 6 — "Homepage design (Design 8 hybrid — locked)".

**Design reference (source of truth):** `designs/08-hybrid-favorite.html`. When in doubt about a section's exact composition, copy, or spacing, look there.

---

## Sections to build (already done in Phase 1 are skipped)

| Section | Status |
|---|---|
| 1. Welcome banner | DONE (Phase 1) |
| 2. Sticky nav | DONE (Phase 1) |
| 3. **Hero — founder polaroid + note + trust stats + CTAs** | NEW |
| 4. **Trust strip — 5 illustrated badges** | NEW |
| 5. **"What we won't do" — 4 promises** | NEW |
| 6. **"Made with weird amounts of love" — illustrated scene with callouts** | NEW |
| 7. **4-stat band — 5B CFU / 5 strains / 90 days / 10K dogs** | NEW |
| 8. **Product showcase — 3 rotated cards on blobs, bundle prominent** | NEW |
| 9. **Before/after testimonials — DogAvatar + bar charts + long quotes** | NEW |
| 10. **From the journal — 3 blog teaser cards with custom SVG thumbnails** | NEW |
| 11. **Newsletter — illustrated mailbox + email form** | NEW |
| 12. Footer | DONE (Phase 1) |
| 13. Sticky bottom ATC bar | DONE (Phase 1) |

9 new section components + supporting data + 3 new SVG illustrations + home page assembly = 14 tasks.

---

## File Structure (additions for Phase 2)

```
/components/sections/
  hero.tsx                       Section 3 — founder hero
  trust-strip.tsx                Section 4
  promises.tsx                   Section 5
  love-section.tsx               Section 6 (illustrated scene)
  stat-band.tsx                  Section 7
  product-showcase.tsx           Section 8
  testimonials.tsx               Section 9
  journal-teaser.tsx             Section 10
  newsletter.tsx                 Section 11

/components/brand/illustrations/scenes/
  dog-chew-scene.tsx             Used in love-section (illustrated dog + canisters)

/components/brand/illustrations/journal/
  bowl-illustration.tsx          Blog thumbnail
  bone-with-sparkle.tsx          Blog thumbnail
  clock-illustration.tsx         Blog thumbnail

/data/
  products.ts                    Daily, Hip+Joint, Duo summary data
  testimonials.ts                3 long-form story-style quotes
  journal.ts                     3 blog teaser entries
  trust-badges.ts                5 trust badge entries
  promises.ts                    4 founder promises
  stats.ts                       4 hero stats (CFU/strains/days/dogs)

/app/page.tsx                    REPLACED — assembles all sections
```

---

## Tasks

### Task 1: Set up section + data scaffolding

**Files:**
- Create: `components/sections/` directory
- Create: `data/` directory
- Create: `data/products.ts`
- Create: `data/testimonials.ts`
- Create: `data/journal.ts`
- Create: `data/trust-badges.ts`
- Create: `data/promises.ts`
- Create: `data/stats.ts`

- [ ] **Step 1: Create data files**

`/Users/christosi/Desktop/pawbite claude/data/products.ts`:
```typescript
export type Product = {
  slug: string;
  name: string;
  shortName: string;
  bandColor: 'warmyellow' | 'terracotta' | 'mint' | 'forest';
  blobColor: 'warmyellow' | 'terracotta' | 'mint' | 'pinky';
  countLabel: string;
  tagline: string;
  oneLineDescription: string;
  retailPrice: number;
  subPrice: number;
  badge?: string;
};

export const products: Product[] = [
  {
    slug: 'daily-probiotic',
    name: 'Daily Probiotic',
    shortName: 'Daily',
    bandColor: 'warmyellow',
    blobColor: 'warmyellow',
    countLabel: '30 SOFT CHEWS',
    tagline: 'probiotic + prebiotic',
    oneLineDescription: '5 strains. 5 billion CFUs. The one your dog eats every day.',
    retailPrice: 32,
    subPrice: 26,
  },
  {
    slug: 'hip-and-joint',
    name: 'Hip + Joint',
    shortName: 'Hip+Joint',
    bandColor: 'terracotta',
    blobColor: 'pinky',
    countLabel: '60 SOFT CHEWS',
    tagline: 'glucosamine + chondroitin',
    oneLineDescription:
      'Glucosamine, chondroitin, MSM, green-lipped mussel, turmeric. Built to keep moving.',
    retailPrice: 38,
    subPrice: 30,
  },
  {
    slug: 'daily-duo',
    name: 'The Daily Duo',
    shortName: 'Duo',
    bandColor: 'mint',
    blobColor: 'mint',
    countLabel: '2 PRODUCTS',
    tagline: 'both, every day',
    oneLineDescription: 'Daily Probiotic + Hip + Joint. Save 32% when you bundle and subscribe.',
    retailPrice: 70,
    subPrice: 47.6,
    badge: 'Save 32%',
  },
];

export const dailyProbiotic = products[0];
export const hipAndJoint = products[1];
export const dailyDuo = products[2];
```

`/Users/christosi/Desktop/pawbite claude/data/testimonials.ts`:
```typescript
export type Testimonial = {
  dogName: string;
  dogBreed: string;
  ownerName: string;
  ownerLocation: string;
  avatarVariant: 1 | 2 | 3 | 4 | 5 | 6;
  quote: string;
  beforeAfter?: {
    metric: string;
    before: number;
    after: number;
    days: number;
  };
};

export const testimonials: Testimonial[] = [
  {
    dogName: 'Bella',
    dogBreed: 'Rescue mix, 7 yo',
    ownerName: 'Maya R.',
    ownerLocation: 'Brooklyn, NY',
    avatarVariant: 1,
    quote:
      "When we adopted Bella she'd been through three different probiotics with no improvement. PawBite is the first one that genuinely worked — within a couple of weeks her stool was firm and the gas was gone. I love that I can read the ingredient list without Googling things.",
    beforeAfter: { metric: 'Stool quality', before: 2, after: 9, days: 14 },
  },
  {
    dogName: 'Otis',
    dogBreed: 'Golden Retriever, 9 yo',
    ownerName: 'Marcus T.',
    ownerLocation: 'Austin, TX',
    avatarVariant: 2,
    quote:
      "Otis was getting slow on his morning walks. Two weeks on Hip + Joint and he's back to jumping on the couch like he's two. The duck flavor is the only chew he doesn't side-eye.",
    beforeAfter: { metric: 'Mobility', before: 4, after: 8, days: 21 },
  },
  {
    dogName: 'Pickle',
    dogBreed: 'French Bulldog, 4 yo',
    ownerName: 'Priya S.',
    ownerLocation: 'Chicago, IL',
    avatarVariant: 4,
    quote:
      "We've tried every probiotic the vet recommended. PawBite is the only one that actually fixed Pickle's gas situation — which, if you've lived with a frenchie, you know is life-changing. The Daily Duo gets here on the same day every month and we never run out.",
    beforeAfter: { metric: 'Gas + bloating', before: 3, after: 9, days: 30 },
  },
];
```

`/Users/christosi/Desktop/pawbite claude/data/journal.ts`:
```typescript
export type JournalEntry = {
  slug: string;
  category: string;
  title: string;
  readMin: number;
  reviewedBy: string;
  illustration: 'bowl' | 'bone' | 'clock';
};

export const journalEntries: JournalEntry[] = [
  {
    slug: 'signs-your-dog-needs-a-probiotic',
    category: 'Gut health',
    title: 'Signs your dog needs a probiotic',
    readMin: 6,
    reviewedBy: 'Dr. M. Hayes, DVM',
    illustration: 'bowl',
  },
  {
    slug: 'how-long-until-joint-chews-start-working',
    category: 'Hip + joint',
    title: 'How long until joint chews start working?',
    readMin: 4,
    reviewedBy: 'Dr. M. Hayes, DVM',
    illustration: 'bone',
  },
  {
    slug: 'is-my-dogs-poop-normal-color-chart',
    category: 'Gut health',
    title: "Is my dog's poop normal? A color guide",
    readMin: 5,
    reviewedBy: 'Dr. M. Hayes, DVM',
    illustration: 'clock',
  },
];
```

`/Users/christosi/Desktop/pawbite claude/data/trust-badges.ts`:
```typescript
export type TrustBadge = {
  label: string;
  iconKey: 'stethoscope' | 'star' | 'shield' | 'paw' | 'us-factory';
  bgColor: 'warmyellow' | 'terracotta' | 'mint' | 'pinky' | 'cream';
};

export const trustBadges: TrustBadge[] = [
  { label: 'Vet-formulated', iconKey: 'stethoscope', bgColor: 'warmyellow' },
  { label: '10,000+ reviews', iconKey: 'star', bgColor: 'pinky' },
  { label: '90-day guarantee', iconKey: 'shield', bgColor: 'mint' },
  { label: 'Free ship $40+', iconKey: 'paw', bgColor: 'terracotta' },
  { label: 'Made in USA', iconKey: 'us-factory', bgColor: 'cream' },
];
```

`/Users/christosi/Desktop/pawbite claude/data/promises.ts`:
```typescript
export type Promise = {
  headline: string;
  body: string;
};

export const promises: Promise[] = [
  {
    headline: "We won't use fillers.",
    body: "If it's on the label, it's there because it does something. We don't pad chews with maltodextrin or 'flavoring agents.'",
  },
  {
    headline: "We won't make claims we can't back up.",
    body: "Every strain we list cites a real study. No vague 'supports immune health' fluff.",
  },
  {
    headline: "We won't lock you into anything.",
    body: 'Subscriptions can be skipped, paused, or canceled in one click. No phone calls, no cancellation fees.',
  },
  {
    headline: "We won't sell your data.",
    body: "We don't share, sell, or rent your email. Period.",
  },
];
```

`/Users/christosi/Desktop/pawbite claude/data/stats.ts`:
```typescript
export type HeroStat = {
  bigNumber: string;
  label: string;
};

export const heroStats: HeroStat[] = [
  { bigNumber: '5 BILLION', label: 'CFUs per chew' },
  { bigNumber: '5 STRAINS', label: 'all third-party tested' },
  { bigNumber: '90 DAYS', label: 'money-back guarantee' },
  { bigNumber: '10,000+', label: 'five-star dog parents' },
];
```

- [ ] **Step 2: Verify type-check + format + commit**

```bash
cd "/Users/christosi/Desktop/pawbite claude" && source ~/.nvm/nvm.sh && nvm use
npm run type-check && npm run format
git add data/
git commit -m "feat(data): add mock data sources for homepage sections"
```

---

### Task 2: Build new SVG illustrations needed for Phase 2

**Files:**
- Create: `components/brand/illustrations/scenes/dog-chew-scene.tsx`
- Create: `components/brand/illustrations/journal/bowl-illustration.tsx`
- Create: `components/brand/illustrations/journal/bone-with-sparkle.tsx`
- Create: `components/brand/illustrations/journal/clock-illustration.tsx`
- Modify: `components/brand/illustrations/index.ts` (add exports)

- [ ] **Step 1: Reference Design 8 mockup for source SVG**

Read `/Users/christosi/Desktop/pawbite claude/designs/08-hybrid-favorite.html` and search for the "Made with weird amounts of love" section + the journal blog thumbnails. Port those SVG markups into React component shells.

- [ ] **Step 2: Each illustration follows this shell pattern**

Example (`bowl-illustration.tsx`):
```typescript
import * as React from 'react';
import { cn } from '@/lib/utils';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function BowlIllustration({ size = 160, className, ...props }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      {...props}
    >
      {/* Bowl */}
      <ellipse cx="80" cy="120" rx="50" ry="10" fill="#1F3A2E" opacity="0.15" />
      <path
        d="M 30 95 Q 80 130 130 95 L 125 110 Q 80 140 35 110 Z"
        fill="#C8765B"
        stroke="#1F3A2E"
        strokeWidth="2"
      />
      {/* Food chunks */}
      <circle cx="65" cy="92" r="8" fill="#E8B547" stroke="#1F3A2E" strokeWidth="1.5" />
      <circle cx="80" cy="88" r="6" fill="#E8B547" stroke="#1F3A2E" strokeWidth="1.5" />
      <circle cx="95" cy="92" r="7" fill="#E8B547" stroke="#1F3A2E" strokeWidth="1.5" />
      {/* Steam */}
      <path d="M 70 75 Q 73 70 70 65 Q 67 60 70 55" stroke="#1F3A2E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 85 78 Q 88 73 85 68 Q 82 63 85 58" stroke="#1F3A2E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}
```

For `bone-with-sparkle.tsx` and `clock-illustration.tsx`, follow the same shell pattern. The exact illustrative content can be adapted from the mockup — keep them at 160×160 viewBox, monoline style, brand colors.

For `dog-chew-scene.tsx`, this is bigger — pulled from the "Made with weird amounts of love" section of the mockup. Should be ~400×300 viewBox with an illustrated dog + two canisters + a chew on the floor. Use Mascot-style proportions.

- [ ] **Step 3: Update `components/brand/illustrations/index.ts` barrel**

Append to the existing file:
```typescript
export { DogChewScene } from './scenes/dog-chew-scene';
export { BowlIllustration } from './journal/bowl-illustration';
export { BoneWithSparkle } from './journal/bone-with-sparkle';
export { ClockIllustration } from './journal/clock-illustration';
```

- [ ] **Step 4: Verify on `/dev/illustrations`**

Add the new components to the existing `/dev/illustrations` page so they render and you can eyeball them. Add a new `<Group title="Phase 2 illustrations">` block with one `<Item>` per new illustration.

- [ ] **Step 5: Verify + commit**

```bash
npm run type-check && npm run format
git add components/brand/illustrations/ app/dev/illustrations/page.tsx
git commit -m "feat(brand): add Phase 2 illustrations (dog scene + 3 journal thumbnails)"
```

---

### Task 3: Build `<HeroSection>`

**File:** `/Users/christosi/Desktop/pawbite claude/components/sections/hero.tsx`

Per Design 8, the hero is the brand's soul. It's a 2-column desktop / stacked mobile layout:
- LEFT: Founder polaroid (Unsplash placeholder) with playful tape + squiggle decorations + caption
- RIGHT: Caveat eyebrow + giant Fraunces SOFT headline + body paragraph + Caveat signature + 4.9★ trust row + 2 CTAs + trust line

Reference: Hero section in `designs/08-hybrid-favorite.html`.

- [ ] **Step 1: Read the hero section in the mockup**

```bash
grep -n -A 200 "A note from our founder" designs/08-hybrid-favorite.html | head -250
```

Study the layout, copy, and visual treatment.

- [ ] **Step 2: Build the component**

```typescript
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { TapeAccent } from '@/components/brand/illustrations/decor/tape-accent';
import { Squiggle } from '@/components/brand/illustrations/icons/squiggle';
import { Star } from '@/components/brand/illustrations/icons/star';
import { CalloutPill } from '@/components/brand/illustrations/callout-pill';

export function HeroSection() {
  return (
    <Section background="cream" spacing="loose">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Founder polaroid */}
          <div className="relative mx-auto w-full max-w-sm">
            <div
              className="relative rounded-sm bg-white p-3 pb-12 shadow-soft"
              style={{ transform: 'rotate(-3deg)' }}
            >
              <div className="absolute -top-4 left-6 z-10">
                <TapeAccent width={80} color="warmyellow" rotation={-8} />
              </div>
              <div className="absolute -top-2 right-4 z-10">
                <Squiggle width={80} className="text-terracotta" />
              </div>
              <Image
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1200&q=80"
                alt="Sam and Theo"
                width={400}
                height={500}
                className="h-auto w-full"
                priority
              />
              <p className="mt-3 text-center font-sans text-sm italic text-charcoal/70">
                Sam and Theo, 2023.
              </p>
            </div>
          </div>

          {/* Right: Founder note */}
          <div className="flex flex-col gap-6">
            <p className="font-hand text-2xl text-terracotta">— A note from our founder</p>
            <h1 className="fraunces-soft text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              I started PawBite because my dog Theo&apos;s gut was a wreck.
            </h1>
            <p className="max-w-prose text-lg leading-relaxed text-charcoal">
              Theo had been on three different kibbles, four different probiotics, and a
              rotating cast of vet visits. Most dog supplements I tried were either junk-food
              chews with ingredient lists I couldn&apos;t pronounce, or sterile-looking clinical
              brands made by people who&apos;d clearly never owned a sick dog. So I started
              PawBite to be the brand I wished existed when Theo needed it. Two products.
              Vet-formulated. Made by humans who actually own dogs.
            </p>
            <p className="font-hand text-2xl text-terracotta">— Sam Whitlock, founder</p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={20} className="text-warmyellow" />
                ))}
              </div>
              <span className="text-sm font-medium text-charcoal">
                4.9 average from 10,000+ dog parents
              </span>
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button variant="primary" size="lg" asChild>
                <Link href="/products">Shop our two essentials →</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/quiz">Take the quiz</Link>
              </Button>
            </div>

            <p className="text-sm text-charcoal/70">
              Vet-formulated • 90-day guarantee • Free shipping over $40
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
```

- [ ] **Step 3: Add `images.unsplash.com` to `next.config.mjs` remote patterns**

Edit `next.config.mjs`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
```

- [ ] **Step 4: Verify + commit**

```bash
npm run type-check && npm run format
git add components/sections/hero.tsx next.config.mjs
git commit -m "feat(home): add HeroSection — founder polaroid + note + trust stats"
```

---

### Task 4: Build `<TrustStrip>`

**File:** `/Users/christosi/Desktop/pawbite claude/components/sections/trust-strip.tsx`

5 illustrated badges in a horizontal row. Reads from `data/trust-badges.ts`.

```typescript
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Stethoscope } from '@/components/brand/illustrations/icons/stethoscope';
import { Star } from '@/components/brand/illustrations/icons/star';
import { Shield } from '@/components/brand/illustrations/icons/shield';
import { Paw } from '@/components/brand/illustrations/icons/paw';
import { USFactoryBadge } from '@/components/brand/illustrations/icons/us-factory-badge';
import { trustBadges } from '@/data/trust-badges';
import { cn } from '@/lib/utils';

const iconMap = {
  stethoscope: Stethoscope,
  star: Star,
  shield: Shield,
  paw: Paw,
  'us-factory': USFactoryBadge,
} as const;

const bgClasses = {
  warmyellow: 'bg-warmyellow',
  terracotta: 'bg-terracotta',
  mint: 'bg-mint',
  pinky: 'bg-pinky',
  cream: 'bg-cream border border-forest/15',
} as const;

const iconColor = {
  warmyellow: 'text-forest',
  terracotta: 'text-cream',
  mint: 'text-forest',
  pinky: 'text-forest',
  cream: 'text-forest',
} as const;

export function TrustStrip() {
  return (
    <Section background="offwhite" spacing="tight">
      <Container>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
          {trustBadges.map((b) => {
            const Icon = iconMap[b.iconKey];
            return (
              <div key={b.label} className="flex flex-col items-center gap-3 text-center">
                <div
                  className={cn(
                    'flex h-16 w-16 items-center justify-center rounded-full',
                    bgClasses[b.bgColor],
                  )}
                >
                  <Icon size={28} className={iconColor[b.bgColor]} />
                </div>
                <span className="text-sm font-semibold text-forest">{b.label}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
```

- [ ] **Verify + commit**

```bash
npm run type-check && npm run format
git add components/sections/trust-strip.tsx
git commit -m "feat(home): add TrustStrip with 5 illustrated badges"
```

---

### Task 5: Build `<PromisesSection>` ("What we won't do")

**File:** `/Users/christosi/Desktop/pawbite claude/components/sections/promises.tsx`

```typescript
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Squiggle } from '@/components/brand/illustrations/icons/squiggle';
import { promises } from '@/data/promises';

export function PromisesSection() {
  return (
    <Section background="mint" spacing="default">
      <Container size="narrow">
        <div className="text-center">
          <h2 className="fraunces-soft mb-4 text-balance text-4xl font-bold md:text-5xl">
            What we won&apos;t do.
          </h2>
          <div className="mb-12 flex justify-center">
            <Squiggle width={140} className="text-terracotta" />
          </div>
        </div>

        <ul className="space-y-8">
          {promises.map((p) => (
            <li key={p.headline} className="flex gap-5">
              <span className="font-hand mt-1 flex-shrink-0 text-3xl text-terracotta">✓</span>
              <div>
                <h3 className="fraunces-soft mb-1 text-xl font-bold text-forest md:text-2xl">
                  {p.headline}
                </h3>
                <p className="text-base leading-relaxed text-charcoal">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
```

- [ ] **Verify + commit**

```bash
npm run type-check && npm run format
git add components/sections/promises.tsx
git commit -m "feat(home): add PromisesSection — 4 founder commitments"
```

---

### Task 6: Build `<LoveSection>` ("Made with weird amounts of love")

**File:** `/Users/christosi/Desktop/pawbite claude/components/sections/love-section.tsx`

This section is the brand personality moment — a big illustrated dog scene with hand-drawn Caveat callouts pointing to features. Uses `<DogChewScene>` from Task 2.

```typescript
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { DogChewScene } from '@/components/brand/illustrations/scenes/dog-chew-scene';
import { CalloutPill } from '@/components/brand/illustrations/callout-pill';
import { DashedArrow } from '@/components/brand/illustrations/icons/dashed-arrow';

export function LoveSection() {
  return (
    <Section background="cream" spacing="default">
      <Container>
        <div className="text-center mb-12">
          <h2 className="fraunces-soft mb-3 text-balance text-4xl font-bold md:text-5xl">
            Made with weird amounts of love.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-charcoal">
            We sweat the ingredient list so you don&apos;t have to. Here&apos;s what goes into
            every chew — and what stays out.
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl rounded-3xl border-2 border-forest/15 bg-offwhite p-8 md:p-12">
          <div className="flex justify-center">
            <DogChewScene />
          </div>

          {/* Callouts */}
          <div className="pointer-events-none absolute left-2 top-12 hidden md:block">
            <CalloutPill variant="caveat" color="warmyellow" rotation={-8}>
              5 strains!
            </CalloutPill>
            <div className="ml-4 mt-1">
              <DashedArrow className="text-terracotta" width={60} height={30} />
            </div>
          </div>

          <div className="pointer-events-none absolute right-2 top-10 hidden md:block">
            <CalloutPill variant="caveat" color="pinky" rotation={6}>
              Vet-approved
            </CalloutPill>
          </div>

          <div className="pointer-events-none absolute bottom-20 left-4 hidden md:block">
            <CalloutPill variant="caveat" color="mint" rotation={-4}>
              No fillers
            </CalloutPill>
          </div>

          <div className="pointer-events-none absolute bottom-16 right-4 hidden md:block">
            <CalloutPill variant="caveat" color="terracotta" rotation={5}>
              Tail-wag tested
            </CalloutPill>
          </div>

          {/* Mobile callouts as a horizontal scroll */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:hidden">
            <CalloutPill variant="caveat" color="warmyellow">5 strains!</CalloutPill>
            <CalloutPill variant="caveat" color="pinky" rotation={4}>Vet-approved</CalloutPill>
            <CalloutPill variant="caveat" color="mint" rotation={-3}>No fillers</CalloutPill>
            <CalloutPill variant="caveat" color="terracotta" rotation={2}>Tail-wag tested</CalloutPill>
          </div>
        </div>
      </Container>
    </Section>
  );
}
```

- [ ] **Verify + commit**

```bash
npm run type-check && npm run format
git add components/sections/love-section.tsx
git commit -m "feat(home): add LoveSection with illustrated dog scene + Caveat callouts"
```

---

### Task 7: Build `<StatBand>`

**File:** `/Users/christosi/Desktop/pawbite claude/components/sections/stat-band.tsx`

4-stat horizontal grid on warm yellow. Reads from `data/stats.ts`.

```typescript
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Sparkle } from '@/components/brand/illustrations/icons/sparkle';
import { Heart } from '@/components/brand/illustrations/icons/heart';
import { Shield } from '@/components/brand/illustrations/icons/shield';
import { Star } from '@/components/brand/illustrations/icons/star';
import { heroStats } from '@/data/stats';

const icons = [Sparkle, Heart, Shield, Star];

export function StatBand() {
  return (
    <Section background="warmyellow" spacing="default">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {heroStats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <div key={stat.bigNumber} className="text-center">
                <Icon size={28} className="mx-auto mb-3 text-forest" />
                <div className="fraunces-soft text-balance text-3xl font-bold leading-none text-forest md:text-4xl">
                  {stat.bigNumber}
                </div>
                <div className="mt-2 text-xs uppercase tracking-wider text-forest/70">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
```

- [ ] **Verify + commit**

```bash
npm run type-check && npm run format
git add components/sections/stat-band.tsx
git commit -m "feat(home): add StatBand — 4 stat callouts on warm yellow"
```

---

### Task 8: Build `<ProductShowcase>`

**File:** `/Users/christosi/Desktop/pawbite claude/components/sections/product-showcase.tsx`

3 product cards in "What Theo takes daily" framing. Daily Duo is bigger and centered. Each card has a Blob backdrop and a rotated Canister.

```typescript
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Canister } from '@/components/brand/canister';
import { Blob } from '@/components/brand/illustrations/decor/blob';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import { cn } from '@/lib/utils';

const rotations = ['-rotate-2', 'rotate-0', 'rotate-2'];

export function ProductShowcase() {
  return (
    <Section background="cream" spacing="default">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="fraunces-soft mb-3 text-balance text-4xl font-bold md:text-5xl">
            What Theo takes daily.
          </h2>
          <p className="mx-auto max-w-xl text-lg text-charcoal">
            Two products. Both daily. The Duo is what most subscribers go with.
          </p>
        </div>

        <div className="grid items-end gap-8 md:grid-cols-3">
          {products.map((p, i) => {
            const isFeatured = p.slug === 'daily-duo';
            return (
              <Link
                href={`/products/${p.slug}`}
                key={p.slug}
                className={cn(
                  'group relative block rounded-3xl bg-offwhite p-6 transition-transform duration-200 hover:-translate-y-1',
                  isFeatured && 'border-2 border-terracotta md:scale-105',
                  rotations[i],
                )}
              >
                {p.badge && (
                  <Badge
                    variant="warmyellow"
                    className="absolute -right-2 -top-2 z-10 rotate-3 shadow-stack-sm"
                  >
                    {p.badge}
                  </Badge>
                )}

                {/* Blob background + canister */}
                <div className="relative mb-6 flex h-56 items-center justify-center">
                  <Blob
                    variant={(((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6)}
                    color={p.blobColor}
                    className="absolute inset-0 h-full w-full"
                  />
                  <Canister
                    name={p.shortName}
                    bandColor={p.bandColor}
                    countLabel={p.countLabel}
                    tagline={p.tagline}
                    size="md"
                    className="relative z-10"
                  />
                </div>

                <div className="text-center">
                  <h3 className="fraunces-soft mb-2 text-2xl font-bold text-forest">{p.name}</h3>
                  <p className="mb-4 min-h-[3rem] text-sm leading-relaxed text-charcoal">
                    {p.oneLineDescription}
                  </p>

                  <div className="mb-4 flex items-baseline justify-center gap-2">
                    <span className="text-2xl font-bold text-terracotta">
                      ${p.subPrice.toFixed(p.subPrice % 1 === 0 ? 0 : 2)}
                    </span>
                    <span className="text-sm text-charcoal/60 line-through">
                      ${p.retailPrice}
                    </span>
                    <span className="text-xs text-charcoal/70">/ mo</span>
                  </div>

                  <Button variant="primary" size="md" className="w-full" asChild>
                    <span>Add to cart</span>
                  </Button>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
```

- [ ] **Verify + commit**

```bash
npm run type-check && npm run format
git add components/sections/product-showcase.tsx
git commit -m "feat(home): add ProductShowcase — 3 rotated cards with blobs and bundle math"
```

---

### Task 9: Build `<TestimonialsSection>`

**File:** `/Users/christosi/Desktop/pawbite claude/components/sections/testimonials.tsx`

3 long-form testimonials with DogAvatar + bar charts (Day 1 → Day 14/21/30) + verified-buyer badges.

```typescript
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { DogAvatar } from '@/components/brand/illustrations/characters/dog-avatar';
import { Star } from '@/components/brand/illustrations/icons/star';
import { Badge } from '@/components/ui/badge';
import { testimonials } from '@/data/testimonials';

function BeforeAfterBars({
  metric,
  before,
  after,
  days,
}: {
  metric: string;
  before: number;
  after: number;
  days: number;
}) {
  return (
    <div className="rounded-2xl bg-offwhite p-4 text-sm">
      <div className="mb-2 font-semibold text-forest">{metric}</div>
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="w-14 text-xs text-charcoal/70">Day 1</span>
          <div className="h-3 flex-1 rounded-full bg-forest/10">
            <div
              className="h-3 rounded-full bg-terracotta/40"
              style={{ width: `${before * 10}%` }}
            />
          </div>
          <span className="w-6 text-xs font-mono text-charcoal">{before}/10</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-14 text-xs text-charcoal/70">Day {days}</span>
          <div className="h-3 flex-1 rounded-full bg-forest/10">
            <div
              className="h-3 rounded-full bg-terracotta"
              style={{ width: `${after * 10}%` }}
            />
          </div>
          <span className="w-6 text-xs font-mono text-charcoal">{after}/10</span>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <Section background="cream-2" spacing="default">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="fraunces-soft mb-3 text-balance text-4xl font-bold md:text-5xl">
            Real dogs. Real differences.
          </h2>
          <p className="text-lg text-charcoal">10,000+ five-star reviews. Here are three.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.dogName}
              className="flex flex-col rounded-3xl border border-forest/10 bg-cream p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <DogAvatar variant={t.avatarVariant} size={56} />
                <div>
                  <div className="font-semibold text-forest">
                    {t.dogName} <span className="font-normal text-charcoal/60">·</span>{' '}
                    {t.ownerName}
                  </div>
                  <div className="text-xs text-charcoal/70">{t.dogBreed}</div>
                </div>
              </div>

              <div className="mb-3 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="text-terracotta" />
                ))}
                <Badge variant="soft" className="ml-2 normal-case">
                  Verified buyer
                </Badge>
              </div>

              <p className="mb-4 flex-1 text-sm leading-relaxed text-charcoal">{t.quote}</p>

              {t.beforeAfter && (
                <BeforeAfterBars
                  metric={t.beforeAfter.metric}
                  before={t.beforeAfter.before}
                  after={t.beforeAfter.after}
                  days={t.beforeAfter.days}
                />
              )}

              <div className="mt-3 text-xs text-charcoal/60">{t.ownerLocation}</div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
```

- [ ] **Verify + commit**

```bash
npm run type-check && npm run format
git add components/sections/testimonials.tsx
git commit -m "feat(home): add TestimonialsSection with DogAvatar + before/after bars"
```

---

### Task 10: Build `<JournalTeaser>`

**File:** `/Users/christosi/Desktop/pawbite claude/components/sections/journal-teaser.tsx`

3 blog teaser cards using custom SVG thumbnails from Task 2.

```typescript
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { BowlIllustration } from '@/components/brand/illustrations/journal/bowl-illustration';
import { BoneWithSparkle } from '@/components/brand/illustrations/journal/bone-with-sparkle';
import { ClockIllustration } from '@/components/brand/illustrations/journal/clock-illustration';
import { Button } from '@/components/ui/button';
import { journalEntries } from '@/data/journal';

const illustrationMap = {
  bowl: BowlIllustration,
  bone: BoneWithSparkle,
  clock: ClockIllustration,
} as const;

const bgRotation = ['bg-pinky', 'bg-mint', 'bg-warmyellow'];

export function JournalTeaser() {
  return (
    <Section background="cream" spacing="default">
      <Container>
        <div className="mb-12 flex flex-col items-end justify-between gap-4 md:flex-row md:items-baseline">
          <h2 className="fraunces-soft text-4xl italic text-forest md:text-5xl">
            From the journal.
          </h2>
          <Link
            href="/learn"
            className="text-sm font-semibold text-terracotta underline-offset-4 hover:underline"
          >
            All articles →
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {journalEntries.map((entry, i) => {
            const Illo = illustrationMap[entry.illustration];
            return (
              <Link
                href={`/learn/${entry.slug}`}
                key={entry.slug}
                className="group block overflow-hidden rounded-2xl border border-forest/10 bg-offwhite transition-transform hover:-translate-y-1"
              >
                <div
                  className={`flex h-44 items-center justify-center ${bgRotation[i % bgRotation.length]}`}
                >
                  <Illo size={140} />
                </div>
                <div className="p-6">
                  <div className="mb-2 text-xs uppercase tracking-wider text-terracotta">
                    {entry.category} · {entry.readMin} min read
                  </div>
                  <h3 className="fraunces-soft mb-3 text-xl font-bold leading-tight text-forest group-hover:text-terracotta">
                    {entry.title}
                  </h3>
                  <p className="text-xs text-charcoal/60">Reviewed by {entry.reviewedBy}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
```

- [ ] **Verify + commit**

```bash
npm run type-check && npm run format
git add components/sections/journal-teaser.tsx
git commit -m "feat(home): add JournalTeaser with 3 illustrated blog cards"
```

---

### Task 11: Build `<NewsletterSection>`

**File:** `/Users/christosi/Desktop/pawbite claude/components/sections/newsletter.tsx`

Mailbox illustration + email form. "Letters from PawBite" framing per spec.

```typescript
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Mailbox } from '@/components/brand/illustrations/icons/mailbox';
import { Button } from '@/components/ui/button';

export function NewsletterSection() {
  return (
    <Section background="warmyellow" spacing="default">
      <Container size="narrow">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="flex justify-center">
            <Mailbox size={180} />
          </div>

          <div>
            <p className="mb-2 font-hand text-3xl text-terracotta">Stay in the loop.</p>
            <h2 className="fraunces-soft mb-4 text-3xl font-bold leading-tight text-forest md:text-4xl">
              Letters from PawBite.
            </h2>
            <p className="mb-6 text-charcoal">
              A short letter once a month: what we&apos;ve learned about dog nutrition, what
              we&apos;re testing in our lab, and the occasional photo of Theo. No spam, no sales
              pressure.
            </p>

            <form className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@email.com"
                className="flex-1 rounded-full border-2 border-forest/15 bg-cream px-5 py-3 text-sm text-forest placeholder:text-forest/40 focus:border-terracotta focus:outline-none"
              />
              <Button type="submit" variant="primary" size="md">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}
```

- [ ] **Verify + commit**

```bash
npm run type-check && npm run format
git add components/sections/newsletter.tsx
git commit -m "feat(home): add NewsletterSection — mailbox + Letters from PawBite form"
```

---

### Task 12: Assemble the home page

**File:** `/Users/christosi/Desktop/pawbite claude/app/page.tsx` (replace contents)

```typescript
import { HeroSection } from '@/components/sections/hero';
import { TrustStrip } from '@/components/sections/trust-strip';
import { PromisesSection } from '@/components/sections/promises';
import { LoveSection } from '@/components/sections/love-section';
import { StatBand } from '@/components/sections/stat-band';
import { ProductShowcase } from '@/components/sections/product-showcase';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { JournalTeaser } from '@/components/sections/journal-teaser';
import { NewsletterSection } from '@/components/sections/newsletter';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <PromisesSection />
      <LoveSection />
      <StatBand />
      <ProductShowcase />
      <TestimonialsSection />
      <JournalTeaser />
      <NewsletterSection />
    </>
  );
}
```

- [ ] **Run full build to verify everything composes**

```bash
npm run type-check && npm run lint && npm run test:run && npm run build
```

All must pass.

- [ ] **Commit**

```bash
git add app/page.tsx
git commit -m "feat(home): assemble Design 8 hybrid homepage — all 13 sections live"
```

---

### Task 13: Mobile responsive QA pass

**Files:** None (verification + small fixes)

- [ ] **Start dev server and inspect on mobile width**

```bash
npm run dev
```

Open `http://localhost:3000`. Use DevTools to set viewport to 375px wide. Walk through every section:
- Hero: 1-column stack, polaroid centered, copy below
- Trust strip: 2-column grid (4-5 items wrap)
- Promises: single column, generous spacing
- Love section: callouts collapse to a flex-wrap row below the illustration (mobile pattern is already in the code)
- Stat band: 2x2 grid
- Product showcase: 1-column stack, Duo card no scale up
- Testimonials: 1-column stack
- Journal: 1-column stack
- Newsletter: stacked

If anything breaks, fix the responsive utilities in the relevant section file.

- [ ] **Commit any responsive fixes**

```bash
git add -A
git commit -m "fix(home): responsive tweaks on mobile QA pass"
```

(If no fixes needed, skip this step.)

---

### Task 14: Tag Phase 2 + push

- [ ] **Tag**

```bash
git tag -a phase-2-homepage -m "Phase 2 complete: Design 8 hybrid homepage live with all 13 sections"
```

- [ ] **Update README status**

Edit the Status section to:
```markdown
## Status

**Phase 2 complete** — Design 8 hybrid homepage is live with all 13 sections componentized and responsive. Production build passes.

Phase 3 next: product catalog + PDPs (Daily, Hip + Joint, Daily Duo) + Shopify Storefront API.
```

- [ ] **Commit + push**

```bash
git add README.md
git commit -m "docs: mark Phase 2 complete"
git push origin main
git push origin refs/tags/phase-2-homepage:refs/tags/phase-2-homepage
```

Vercel auto-rebuilds on push to main.

---

## End of Phase 2 plan.

**Deliverable:** Live homepage at `pawbite.vercel.app` matching the Design 8 hybrid mockup with all 13 sections built as reusable React components. Mobile + desktop responsive. Production build passes. Tagged `phase-2-homepage`.

**Next phase:** Phase 3 — Product catalog page + 3 PDPs + Shopify Storefront API integration.

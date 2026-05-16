# PawBite — Phase 3: PDPs + Catalog Implementation Plan

> Use superpowers:subagent-driven-development to execute.

**Goal:** Build the product detail pages (PDPs), the collection page, and a placeholder cart — all using mock data. The site looks completely shoppable. Real Shopify wiring is Phase 8.

**Architecture:** Single PDP template at `app/products/[slug]/page.tsx` handles Daily Probiotic and Hip + Joint. Daily Duo gets a custom bundle layout at `app/products/daily-duo/page.tsx`. Collection page at `app/products/page.tsx`. Cart at `app/cart/page.tsx` shows an empty-cart state with cross-sell. Mock data lives in `/data/products-detail.ts` (expansion of Phase 2's `/data/products.ts` with strain tables, FAQs, dosing, comparison).

**Tech stack:** Same as Phases 1-2.

**Spec reference:** `docs/superpowers/specs/2026-05-06-pawbite-site-design.md` Sections 6.1, 6.2 (PDP + bundle landing page templates).

---

## File Structure (additions)

```
/app/products/
  page.tsx                       Collection (both SKUs + Duo)
  [slug]/page.tsx                Dynamic PDP for daily-probiotic + hip-and-joint
  daily-duo/page.tsx             Custom bundle landing

/app/cart/page.tsx               Placeholder cart with empty state + cross-sell

/components/pdp/
  pdp-hero.tsx                   Image + name + price + sub toggle + ATC
  ingredients-table.tsx          Strain/active breakdown with mono font for data
  dosing-table.tsx               Weight × daily-chews matrix
  vet-quote-card.tsx             Placeholder vet endorsement
  comparison-table.tsx           PawBite vs competitor (Cosequin / PetLab)
  pdp-faq.tsx                    Accordion-based FAQ
  related-products.tsx           Cross-sell to other 2 SKUs
  pdp-benefits.tsx               4-card "Why dogs do better" benefits row
  pdp-guarantee.tsx              90-day guarantee callout
  product-card.tsx               Reusable product card for collection + cross-sell

/components/cart/
  cart-empty-state.tsx           Illustrated empty cart

/data/
  products-detail.ts             Expanded product data (strains, FAQ, dosing, comparison)
  vets.ts                        Vet advisory placeholder data
```

---

## Tasks

### Task 1: Expanded product detail data

**File:** `data/products-detail.ts`

Extends `/data/products.ts` with full PDP data. The summary product data stays in `products.ts` for the homepage showcase; this file adds the deep data needed for PDPs.

- [ ] **Step 1: Create `/Users/christosi/Desktop/pawbite claude/data/products-detail.ts`**

```typescript
import type { Product } from './products';
import { dailyProbiotic, hipAndJoint, dailyDuo } from './products';

export type Ingredient = {
  name: string;
  scientificName?: string;
  amount: string;
  role: string;
  reference?: string;
};

export type DosingRow = {
  weightRange: string;
  amount: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type CompetitorCompare = {
  competitor: string;
  rows: Array<{ feature: string; pawbite: string; competitor: string }>;
};

export type ProductDetail = Product & {
  longDescription: string;
  flavor: string;
  ingredients: Ingredient[];
  prebioticsAndExtras: string;
  benefits: Array<{ icon: 'sparkle' | 'heart' | 'shield' | 'star' | 'paw' | 'stethoscope' | 'bone'; title: string; body: string }>;
  dosing: DosingRow[];
  dosingNote: string;
  vetQuote: { name: string; credentials: string; quote: string };
  comparison: CompetitorCompare;
  faqs: FAQ[];
};

export const dailyProbioticDetail: ProductDetail = {
  ...dailyProbiotic,
  flavor: 'Chicken',
  longDescription:
    'A daily soft chew built on five clinically referenced probiotic strains, plus chicory inulin and pumpkin powder to feed the strains once they get there. Vet-formulated. Third-party tested. Made in a cGMP-certified facility in the USA.',
  ingredients: [
    {
      name: 'Bacillus coagulans GBI-30, 6086',
      scientificName: 'Bacillus coagulans',
      amount: '1 billion CFU',
      role: 'Gut barrier integrity',
      reference: 'Kalman et al., 2009',
    },
    {
      name: 'Bifidobacterium animalis subsp. lactis BB-12',
      scientificName: 'Bifidobacterium animalis',
      amount: '1 billion CFU',
      role: 'Stool consistency',
      reference: 'Eskesen et al., 2015',
    },
    {
      name: 'Lactobacillus acidophilus LA-5',
      scientificName: 'Lactobacillus acidophilus',
      amount: '1 billion CFU',
      role: 'Pathogen exclusion',
      reference: 'Saggioro, 2004',
    },
    {
      name: 'Lactobacillus plantarum 299v',
      scientificName: 'Lactobacillus plantarum',
      amount: '1 billion CFU',
      role: 'Short-chain fatty acid production',
      reference: 'Nobaek et al., 2000',
    },
    {
      name: 'Lactobacillus rhamnosus GG',
      scientificName: 'Lactobacillus rhamnosus',
      amount: '1 billion CFU',
      role: 'Immune modulation',
      reference: 'Hatakka et al., 2001',
    },
  ],
  prebioticsAndExtras: 'Plus chicory inulin (200 mg) prebiotic and pumpkin powder (250 mg) for digestibility.',
  benefits: [
    { icon: 'sparkle', title: 'Firmer stool', body: 'Most dogs see firmer, more regular stool within 14 days.' },
    { icon: 'heart', title: 'Less gas', body: 'Bifidobacterium and prebiotic blend reduce fermentation gas.' },
    { icon: 'shield', title: 'Immune support', body: 'L. rhamnosus GG is the most-studied immune-modulating strain in pets and humans.' },
    { icon: 'star', title: 'Daily-use ready', body: 'Built to live in a daily routine — not a course of treatment.' },
  ],
  dosing: [
    { weightRange: 'Under 25 lbs', amount: '1 chew/day' },
    { weightRange: '25–50 lbs', amount: '1 chew/day' },
    { weightRange: '50–75 lbs', amount: '1 chew/day' },
    { weightRange: '75+ lbs', amount: '2 chews/day' },
  ],
  dosingNote: 'One chew daily works for almost every dog. Larger breeds (75+ lbs) double up if you want a CFU bump.',
  vetQuote: {
    name: 'Dr. M. Hayes, DVM',
    credentials: 'Board-certified veterinary nutritionist',
    quote:
      'Most over-the-counter dog probiotics underdose the strains that actually matter. PawBite gets the dosing right and names the strains — which is what a vet wants to see.',
  },
  comparison: {
    competitor: 'PetLab Co.',
    rows: [
      { feature: 'CFU per chew', pawbite: '5 billion', competitor: '5 billion' },
      { feature: 'Number of strains', pawbite: '5 (all named)', competitor: '8 (proprietary blend)' },
      { feature: 'Strains identified by study designation', pawbite: 'Yes', competitor: 'No' },
      { feature: 'Prebiotic included', pawbite: 'Chicory inulin 200mg', competitor: 'Yes (amount not disclosed)' },
      { feature: 'Subscribe & Save', pawbite: '20% off + free shipping', competitor: 'Up to 40% off (claims)' },
      { feature: 'Money-back guarantee', pawbite: '90 days', competitor: '30 days' },
      { feature: 'Third-party tested', pawbite: 'Every batch', competitor: 'Yes' },
      { feature: 'cGMP-certified', pawbite: 'Yes', competitor: 'Yes' },
    ],
  },
  faqs: [
    {
      question: 'How long until I see results?',
      answer:
        'Most dogs show firmer stool within 7–14 days. Gas and digestion improvements often show up sooner. Coat and skin changes — the downstream effects — usually take 4–8 weeks.',
    },
    {
      question: 'Can I give this with my dog’s current food?',
      answer:
        'Yes. Daily Probiotic is designed to be given alongside any kibble, fresh, or raw food. It works best at the same time every day — most owners give it with the morning meal.',
    },
    {
      question: 'My dog is on antibiotics. Should I wait?',
      answer:
        'You can give Daily Probiotic during a course of antibiotics — separate the dose by at least 2 hours from the antibiotic to avoid the antibiotic killing the probiotic on contact. After the antibiotic course ends, continuing the probiotic helps the gut microbiome recover.',
    },
    {
      question: 'Are these chews safe for puppies?',
      answer:
        'Yes for puppies 8 weeks and older. The strains are gentle and the CFU count is appropriate. For puppies under 25 lbs, one chew a day is enough.',
    },
    {
      question: 'What’s in the chew besides the probiotics?',
      answer:
        'Chicken liver, pumpkin powder, chicory inulin (prebiotic), oat flour, glycerin, mixed tocopherols (natural preservative). No artificial flavors, colors, or preservatives. The full label is on the back of every canister.',
    },
    {
      question: 'My dog has allergies. Are these safe?',
      answer:
        'The chews are chicken-flavored, so they’re not appropriate for dogs with a confirmed chicken allergy. We don’t use corn, soy, wheat, or dairy. If your dog has known allergies, check the full ingredient panel.',
    },
    {
      question: 'How does Subscribe & Save work?',
      answer:
        'Choose Subscribe & Save at checkout. We ship a new canister every 30 days at 20% off retail, with free shipping. Skip, swap, pause, or cancel from your account in one click — no calls, no fees, no hoops.',
    },
    {
      question: 'What’s the 90-day guarantee?',
      answer:
        'If your dog doesn’t take to it, or you don’t see results within 90 days, email help@pawbite.com and we’ll refund your first order in full. Keep the chews — donate them to a shelter or pass them along to a friend.',
    },
  ],
};

export const hipAndJointDetail: ProductDetail = {
  ...hipAndJoint,
  flavor: 'Duck',
  longDescription:
    'A daily soft chew built on clinically-dosed joint support actives — glucosamine, chondroitin, MSM — plus green-lipped mussel and turmeric for a broader inflammation profile. Vet-formulated. Third-party tested. Made in a cGMP-certified facility in the USA.',
  ingredients: [
    { name: 'Glucosamine HCl', amount: '500 mg', role: 'Cartilage building block' },
    { name: 'Chondroitin sulfate', amount: '400 mg', role: 'Joint cushion + lubrication' },
    { name: 'MSM (methylsulfonylmethane)', amount: '250 mg', role: 'Anti-inflammatory sulfur source' },
    { name: 'Green-lipped mussel', amount: '150 mg', role: 'Omega-3 + glycosaminoglycans' },
    { name: 'Turmeric (curcumin standardized)', amount: '100 mg', role: 'Anti-inflammatory antioxidant' },
    { name: 'Hyaluronic acid', amount: '10 mg', role: 'Joint fluid viscosity' },
    { name: 'Salmon oil (EPA + DHA)', amount: '50 mg', role: 'Omega-3 anti-inflammatory' },
  ],
  prebioticsAndExtras: 'No prebiotics in this one — clinically-dosed joint actives only.',
  benefits: [
    { icon: 'sparkle', title: 'Easier mornings', body: 'Glucosamine + chondroitin help cushion joints overnight so dogs wake up looser.' },
    { icon: 'heart', title: 'Less inflammation', body: 'Turmeric + MSM + omega-3 stack a real anti-inflammatory profile.' },
    { icon: 'paw', title: 'Better mobility', body: 'Most dogs show easier stair-climbing and jumping within 21 days.' },
    { icon: 'shield', title: 'Daily-use safe', body: 'No NSAIDs, no liver-taxing actives. Built for years of daily use.' },
  ],
  dosing: [
    { weightRange: 'Under 25 lbs', amount: '1 chew/day' },
    { weightRange: '25–50 lbs', amount: '2 chews/day' },
    { weightRange: '50–75 lbs', amount: '2 chews/day' },
    { weightRange: '75+ lbs', amount: '3 chews/day' },
  ],
  dosingNote: 'A 60-chew canister lasts ~30 days for a medium-large dog. Senior dogs and dogs with diagnosed arthritis often benefit from the higher end of their weight band.',
  vetQuote: {
    name: 'Dr. M. Hayes, DVM',
    credentials: 'Board-certified veterinary nutritionist',
    quote:
      'Most dog joint chews are underdosed on glucosamine — usually 250mg per serving. PawBite is at 500mg, which is the dose actually backed by trial data. The green-lipped mussel addition is the right kind of belt-and-suspenders.',
  },
  comparison: {
    competitor: 'Cosequin',
    rows: [
      { feature: 'Glucosamine HCl per serving', pawbite: '500 mg', competitor: '500 mg' },
      { feature: 'Chondroitin sulfate per serving', pawbite: '400 mg', competitor: '400 mg' },
      { feature: 'MSM included', pawbite: 'Yes (250mg)', competitor: 'No (DS version only)' },
      { feature: 'Green-lipped mussel', pawbite: 'Yes (150mg)', competitor: 'No' },
      { feature: 'Turmeric / curcumin', pawbite: 'Yes (100mg)', competitor: 'No' },
      { feature: 'Form', pawbite: 'Soft chew', competitor: 'Capsule / soft chew' },
      { feature: 'Flavor', pawbite: 'Duck', competitor: 'Chicken / beef' },
      { feature: 'Subscribe & Save', pawbite: '20% off + free shipping', competitor: 'Varies by retailer' },
      { feature: 'Money-back guarantee', pawbite: '90 days', competitor: 'Retailer-dependent' },
    ],
  },
  faqs: [
    {
      question: 'How long until I see results?',
      answer:
        'Glucosamine and chondroitin build up over time. Most owners report easier mornings and better stair-climbing within 14–21 days. The full anti-inflammatory effect from MSM and omega-3 takes 4–6 weeks.',
    },
    {
      question: 'Is this safe for senior dogs?',
      answer:
        'Yes — senior dogs are the primary use case. Hip + Joint contains no NSAIDs and no liver-taxing actives, so it’s safe to give daily long-term. Many vets recommend starting hip and joint support around age 5 for medium-large breeds.',
    },
    {
      question: 'My dog is on Carprofen or another NSAID. Can I give this?',
      answer:
        'Yes. Hip + Joint is a nutritional supplement, not an NSAID — it complements prescription anti-inflammatories without competing with them. Many owners use Hip + Joint to reduce the NSAID dose their vet would otherwise prescribe. Always loop in your vet for chronic conditions.',
    },
    {
      question: 'Is this for prevention or for dogs that already have joint problems?',
      answer:
        'Both. Used preventively in healthy adult dogs (especially large breeds prone to hip dysplasia), Hip + Joint reduces wear on cartilage over time. Used in dogs with diagnosed arthritis or slowing mobility, it eases stiffness and improves daily function. Same chew, same dosing.',
    },
    {
      question: 'Why duck flavor instead of chicken?',
      answer:
        'A lot of senior dogs develop sensitivities to chicken. We made Hip + Joint duck-flavored so the dogs most likely to need it can still take it. Also: duck just lands better with picky eaters.',
    },
    {
      question: 'Can my dog take this and the Daily Probiotic together?',
      answer:
        'Absolutely — that’s exactly what The Daily Duo is for. The probiotic and the joint chew work on entirely different systems and pair cleanly. Bundle them and save 32%.',
    },
    {
      question: 'What’s in the chew besides the active ingredients?',
      answer:
        'Duck liver, oat flour, glycerin, mixed tocopherols (natural preservative), salmon oil. No corn, soy, wheat, dairy, artificial flavors, colors, or preservatives.',
    },
    {
      question: 'What’s the 90-day guarantee?',
      answer:
        'If your dog doesn’t take to it, or you don’t see mobility improvement within 90 days, email help@pawbite.com and we’ll refund your first order in full. Keep the chews.',
    },
  ],
};

export const productsDetail = {
  'daily-probiotic': dailyProbioticDetail,
  'hip-and-joint': hipAndJointDetail,
};

export type ProductSlug = keyof typeof productsDetail;
export const productSlugs: ProductSlug[] = Object.keys(productsDetail) as ProductSlug[];
```

- [ ] **Step 2: Verify + commit**

```bash
npm run type-check && npm run format
git add data/products-detail.ts
git commit -m "feat(data): add expanded PDP data (strains, FAQ, dosing, comparison)"
```

---

### Task 2: Build PDP component primitives (batched)

Six small components needed by every PDP. All in `/components/pdp/`.

**Files:**
- `components/pdp/pdp-hero.tsx`
- `components/pdp/ingredients-table.tsx`
- `components/pdp/dosing-table.tsx`
- `components/pdp/vet-quote-card.tsx`
- `components/pdp/comparison-table.tsx`
- `components/pdp/pdp-faq.tsx`

### `pdp-hero.tsx` — image carousel + name + price + subscribe toggle + ATC
```typescript
'use client';

import * as React from 'react';
import { Canister } from '@/components/brand/canister';
import { Blob } from '@/components/brand/illustrations/decor/blob';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star } from '@/components/brand/illustrations/icons/star';
import { Shield } from '@/components/brand/illustrations/icons/shield';
import type { ProductDetail } from '@/data/products-detail';
import { cn } from '@/lib/utils';

export function PdpHero({ product }: { product: ProductDetail }) {
  const [subscribe, setSubscribe] = React.useState(true);
  const price = subscribe ? product.subPrice : product.retailPrice;
  const savings = product.retailPrice - product.subPrice;

  return (
    <div className="grid items-start gap-12 lg:grid-cols-2">
      {/* Image / canister */}
      <div className="relative flex h-96 items-center justify-center rounded-3xl bg-cream-2 lg:h-[520px]">
        <Blob
          variant={2}
          color={product.blobColor}
          className="absolute inset-12 h-auto"
        />
        <Canister
          name={product.shortName}
          bandColor={product.bandColor}
          countLabel={product.countLabel}
          tagline={product.tagline}
          size="lg"
          className="relative z-10"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={16} className="text-terracotta" />
            ))}
          </div>
          <span className="text-sm text-charcoal/70">4.9 (10,000+ reviews)</span>
        </div>

        <h1 className="fraunces-soft text-balance text-4xl font-bold leading-tight md:text-5xl">
          {product.name}
        </h1>

        <p className="font-hand text-2xl text-terracotta">{product.tagline}</p>

        <p className="text-base leading-relaxed text-charcoal">{product.longDescription}</p>

        <div className="rounded-2xl border border-forest/15 bg-offwhite p-5">
          <div className="mb-4 flex gap-2">
            <button
              type="button"
              onClick={() => setSubscribe(true)}
              className={cn(
                'flex-1 rounded-full border-2 px-4 py-2 text-sm font-semibold transition-all',
                subscribe
                  ? 'border-terracotta bg-terracotta text-cream'
                  : 'border-forest/20 bg-transparent text-forest hover:border-forest',
              )}
            >
              Subscribe & save 20%
            </button>
            <button
              type="button"
              onClick={() => setSubscribe(false)}
              className={cn(
                'flex-1 rounded-full border-2 px-4 py-2 text-sm font-semibold transition-all',
                !subscribe
                  ? 'border-forest bg-forest text-cream'
                  : 'border-forest/20 bg-transparent text-forest hover:border-forest',
              )}
            >
              One-time
            </button>
          </div>

          <div className="mb-3 flex items-baseline gap-3">
            <span className="fraunces-soft text-4xl font-bold text-terracotta">
              ${price.toFixed(price % 1 === 0 ? 0 : 2)}
            </span>
            {subscribe && (
              <>
                <span className="text-base text-charcoal/60 line-through">${product.retailPrice}</span>
                <Badge variant="warmyellow">Save ${savings.toFixed(0)}/mo</Badge>
              </>
            )}
          </div>

          <p className="mb-4 text-xs text-charcoal/70">
            {subscribe
              ? 'Ships every 30 days. Free shipping. Skip, swap, pause, or cancel in one click.'
              : 'One-time delivery. Free shipping over $40.'}
          </p>

          <Button variant="primary" size="lg" className="w-full">
            Add to cart
          </Button>
        </div>

        <div className="flex items-center gap-3 pt-2 text-sm text-charcoal/70">
          <Shield size={18} className="text-forest" />
          <span>90-day money-back guarantee · Free shipping over $40 · Vet-formulated</span>
        </div>
      </div>
    </div>
  );
}
```

### `ingredients-table.tsx`
```typescript
import { Container } from '@/components/layout/container';
import type { Ingredient } from '@/data/products-detail';

export function IngredientsTable({
  ingredients,
  prebioticsAndExtras,
}: {
  ingredients: Ingredient[];
  prebioticsAndExtras: string;
}) {
  return (
    <Container>
      <div className="mb-8">
        <h2 className="fraunces-soft mb-2 text-3xl font-bold md:text-4xl">What&apos;s in every chew.</h2>
        <p className="text-charcoal">Every active ingredient, with its dose and what it does.</p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-forest/15 bg-offwhite">
        <table className="w-full text-left">
          <thead className="border-b border-forest/15 bg-cream/50">
            <tr>
              <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-forest/70">
                Ingredient
              </th>
              <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-forest/70">
                Amount
              </th>
              <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider text-forest/70">
                Role
              </th>
              <th className="hidden px-4 py-3 font-mono text-xs uppercase tracking-wider text-forest/70 md:table-cell">
                Reference
              </th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((i, idx) => (
              <tr key={i.name} className={idx % 2 ? 'bg-cream/30' : ''}>
                <td className="px-4 py-3 font-mono text-sm text-forest">{i.name}</td>
                <td className="px-4 py-3 font-mono text-sm font-bold text-terracotta">{i.amount}</td>
                <td className="px-4 py-3 text-sm text-charcoal">{i.role}</td>
                <td className="hidden px-4 py-3 font-mono text-xs italic text-forest/60 md:table-cell">
                  {i.reference ?? '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm italic text-charcoal/80">{prebioticsAndExtras}</p>
    </Container>
  );
}
```

### `dosing-table.tsx`
```typescript
import { Container } from '@/components/layout/container';
import type { DosingRow } from '@/data/products-detail';

export function DosingTable({ dosing, note }: { dosing: DosingRow[]; note: string }) {
  return (
    <Container size="narrow">
      <div className="mb-6">
        <h2 className="fraunces-soft mb-2 text-3xl font-bold md:text-4xl">How to use.</h2>
        <p className="text-charcoal">Based on your dog&apos;s weight.</p>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {dosing.map((row) => (
          <div
            key={row.weightRange}
            className="rounded-2xl border border-forest/15 bg-offwhite p-4 text-center"
          >
            <div className="mb-2 font-mono text-xs uppercase tracking-wider text-terracotta">
              {row.weightRange}
            </div>
            <div className="fraunces-soft text-2xl font-bold text-forest">{row.amount}</div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm italic text-charcoal/80">{note}</p>
    </Container>
  );
}
```

### `vet-quote-card.tsx`
```typescript
import { Container } from '@/components/layout/container';
import { Stethoscope } from '@/components/brand/illustrations/icons/stethoscope';

export function VetQuoteCard({
  name,
  credentials,
  quote,
}: {
  name: string;
  credentials: string;
  quote: string;
}) {
  return (
    <Container size="narrow">
      <div className="rounded-3xl bg-forest p-8 text-cream md:p-12">
        <Stethoscope size={36} className="mb-4 text-warmyellow" />
        <blockquote className="fraunces-soft mb-6 text-balance text-2xl italic leading-snug md:text-3xl">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="text-sm">
          <div className="font-semibold text-warmyellow">{name}</div>
          <div className="text-cream/70">{credentials}</div>
        </div>
      </div>
    </Container>
  );
}
```

### `comparison-table.tsx`
```typescript
import { Container } from '@/components/layout/container';
import type { CompetitorCompare } from '@/data/products-detail';
import { Check } from 'lucide-react';

export function ComparisonTable({ comparison }: { comparison: CompetitorCompare }) {
  return (
    <Container>
      <div className="mb-8">
        <h2 className="fraunces-soft mb-2 text-3xl font-bold md:text-4xl">
          PawBite vs. {comparison.competitor}.
        </h2>
        <p className="text-charcoal">Side by side, honestly.</p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-forest/15 bg-offwhite">
        <table className="w-full text-left">
          <thead className="border-b-2 border-forest/15 bg-cream/50">
            <tr>
              <th className="px-4 py-4 font-mono text-xs uppercase tracking-wider text-forest/70">
                Feature
              </th>
              <th className="px-4 py-4 font-mono text-xs uppercase tracking-wider text-terracotta">
                <Check size={14} className="mr-1 inline" />
                PawBite
              </th>
              <th className="px-4 py-4 font-mono text-xs uppercase tracking-wider text-forest/50">
                {comparison.competitor}
              </th>
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row, idx) => (
              <tr key={row.feature} className={idx % 2 ? 'bg-cream/30' : ''}>
                <td className="px-4 py-3 text-sm font-medium text-forest">{row.feature}</td>
                <td className="px-4 py-3 text-sm font-semibold text-terracotta">{row.pawbite}</td>
                <td className="px-4 py-3 text-sm text-charcoal/70">{row.competitor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
```

### `pdp-faq.tsx`
```typescript
import { Container } from '@/components/layout/container';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import type { FAQ } from '@/data/products-detail';

export function PdpFaq({ faqs }: { faqs: FAQ[] }) {
  return (
    <Container size="narrow">
      <h2 className="fraunces-soft mb-8 text-3xl font-bold md:text-4xl">Your questions, answered.</h2>
      <Accordion type="single" collapsible>
        {faqs.map((faq, i) => (
          <AccordionItem key={faq.question} value={`faq-${i}`}>
            <AccordionTrigger className="text-base md:text-lg">{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
```

- [ ] **Verify + commit**

```bash
mkdir -p components/pdp
# Write the 6 files above
npm run type-check && npm run format
git add components/pdp/
git commit -m "feat(pdp): add PDP component primitives (hero, ingredients, dosing, vet, comparison, FAQ)"
```

---

### Task 3: PDP supporting components — benefits + guarantee + related + product card

**Files:**
- `components/pdp/pdp-benefits.tsx`
- `components/pdp/pdp-guarantee.tsx`
- `components/pdp/related-products.tsx`
- `components/pdp/product-card.tsx` (used by collection page + related-products)

### `product-card.tsx` (shared by collection + related)
```typescript
import Link from 'next/link';
import { Canister } from '@/components/brand/canister';
import { Blob } from '@/components/brand/illustrations/decor/blob';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/data/products';
import { cn } from '@/lib/utils';

export function ProductCard({
  product,
  rotation = 0,
  featured = false,
  blobVariant = 1,
}: {
  product: Product;
  rotation?: number;
  featured?: boolean;
  blobVariant?: 1 | 2 | 3 | 4 | 5 | 6;
}) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        'group relative block rounded-3xl bg-offwhite p-6 transition-transform duration-200 hover:-translate-y-1',
        featured && 'border-2 border-terracotta md:scale-105',
      )}
      style={{ transform: rotation ? `rotate(${rotation}deg)` : undefined }}
    >
      {product.badge && (
        <Badge
          variant="warmyellow"
          className="absolute -right-2 -top-2 z-10 rotate-3 shadow-stack-sm"
        >
          {product.badge}
        </Badge>
      )}
      <div className="relative mb-6 flex h-56 items-center justify-center">
        <Blob
          variant={blobVariant}
          color={product.blobColor}
          className="absolute inset-0 h-full w-full"
        />
        <Canister
          name={product.shortName}
          bandColor={product.bandColor}
          countLabel={product.countLabel}
          tagline={product.tagline}
          size="md"
          className="relative z-10"
        />
      </div>
      <div className="text-center">
        <h3 className="fraunces-soft mb-2 text-2xl font-bold text-forest">{product.name}</h3>
        <p className="mb-4 min-h-[3rem] text-sm leading-relaxed text-charcoal">
          {product.oneLineDescription}
        </p>
        <div className="mb-4 flex items-baseline justify-center gap-2">
          <span className="text-2xl font-bold text-terracotta">
            ${product.subPrice.toFixed(product.subPrice % 1 === 0 ? 0 : 2)}
          </span>
          <span className="text-sm text-charcoal/60 line-through">${product.retailPrice}</span>
          <span className="text-xs text-charcoal/70">/ mo</span>
        </div>
        <Button variant="primary" size="md" className="w-full" asChild>
          <span>View product</span>
        </Button>
      </div>
    </Link>
  );
}
```

### `pdp-benefits.tsx`
```typescript
import { Container } from '@/components/layout/container';
import { Sparkle } from '@/components/brand/illustrations/icons/sparkle';
import { Heart } from '@/components/brand/illustrations/icons/heart';
import { Shield } from '@/components/brand/illustrations/icons/shield';
import { Star } from '@/components/brand/illustrations/icons/star';
import { Paw } from '@/components/brand/illustrations/icons/paw';
import { Stethoscope } from '@/components/brand/illustrations/icons/stethoscope';
import { Bone } from '@/components/brand/illustrations/icons/bone';
import type { ProductDetail } from '@/data/products-detail';

const iconMap = {
  sparkle: Sparkle,
  heart: Heart,
  shield: Shield,
  star: Star,
  paw: Paw,
  stethoscope: Stethoscope,
  bone: Bone,
} as const;

export function PdpBenefits({ benefits }: { benefits: ProductDetail['benefits'] }) {
  return (
    <Container>
      <h2 className="fraunces-soft mb-8 text-balance text-3xl font-bold md:text-4xl">
        Why dogs do better.
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b) => {
          const Icon = iconMap[b.icon];
          return (
            <div key={b.title} className="rounded-2xl border border-forest/15 bg-offwhite p-6">
              <Icon size={32} className="mb-3 text-terracotta" />
              <h3 className="fraunces-soft mb-2 text-lg font-bold text-forest">{b.title}</h3>
              <p className="text-sm leading-relaxed text-charcoal">{b.body}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
```

### `pdp-guarantee.tsx`
```typescript
import { Container } from '@/components/layout/container';
import { Shield } from '@/components/brand/illustrations/icons/shield';

export function PdpGuarantee() {
  return (
    <Container size="narrow">
      <div className="flex flex-col items-center gap-6 rounded-3xl bg-mint p-8 text-center md:flex-row md:text-left">
        <Shield size={64} withHeart className="flex-shrink-0 text-forest" />
        <div>
          <h3 className="fraunces-soft mb-2 text-2xl font-bold text-forest">
            90-day money-back guarantee.
          </h3>
          <p className="text-charcoal">
            If your dog doesn&apos;t take to it, or you don&apos;t see results within 90 days,
            we&apos;ll refund your first order in full. Keep the chews — donate them to a shelter
            or pass them along to a friend.
          </p>
        </div>
      </div>
    </Container>
  );
}
```

### `related-products.tsx`
```typescript
import { Container } from '@/components/layout/container';
import { ProductCard } from './product-card';
import { products } from '@/data/products';

export function RelatedProducts({ currentSlug }: { currentSlug: string }) {
  const related = products.filter((p) => p.slug !== currentSlug);
  return (
    <Container>
      <h2 className="fraunces-soft mb-8 text-3xl font-bold md:text-4xl">More from PawBite.</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {related.map((p, i) => (
          <ProductCard
            key={p.slug}
            product={p}
            blobVariant={((i + 2) as 1 | 2 | 3 | 4 | 5 | 6)}
            featured={p.slug === 'daily-duo'}
          />
        ))}
      </div>
    </Container>
  );
}
```

- [ ] **Verify + commit**

```bash
npm run type-check && npm run format
git add components/pdp/
git commit -m "feat(pdp): add benefits, guarantee, related-products, and shared ProductCard"
```

---

### Task 4: Dynamic PDP page at `app/products/[slug]/page.tsx`

```typescript
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { PdpHero } from '@/components/pdp/pdp-hero';
import { IngredientsTable } from '@/components/pdp/ingredients-table';
import { DosingTable } from '@/components/pdp/dosing-table';
import { VetQuoteCard } from '@/components/pdp/vet-quote-card';
import { ComparisonTable } from '@/components/pdp/comparison-table';
import { PdpFaq } from '@/components/pdp/pdp-faq';
import { PdpBenefits } from '@/components/pdp/pdp-benefits';
import { PdpGuarantee } from '@/components/pdp/pdp-guarantee';
import { RelatedProducts } from '@/components/pdp/related-products';
import { productsDetail, productSlugs, type ProductSlug } from '@/data/products-detail';
import { SITE_URL } from '@/lib/seo';

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = productsDetail[params.slug as ProductSlug];
  if (!product) return {};
  return {
    title: product.name,
    description: product.longDescription,
    alternates: { canonical: `${SITE_URL}/products/${product.slug}` },
    openGraph: {
      title: `${product.name} · PawBite`,
      description: product.longDescription,
    },
  };
}

export default function PdpPage({ params }: { params: { slug: string } }) {
  const product = productsDetail[params.slug as ProductSlug];
  if (!product) notFound();

  // Product schema for SEO
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.longDescription,
    brand: { '@type': 'Brand', name: 'PawBite' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: product.subPrice.toString(),
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '10000',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <Section background="cream" spacing="default">
        <Container>
          <PdpHero product={product} />
        </Container>
      </Section>

      <Section background="offwhite" spacing="default">
        <PdpBenefits benefits={product.benefits} />
      </Section>

      <Section background="cream" spacing="default">
        <IngredientsTable
          ingredients={product.ingredients}
          prebioticsAndExtras={product.prebioticsAndExtras}
        />
      </Section>

      <Section background="warmyellow" spacing="default">
        <DosingTable dosing={product.dosing} note={product.dosingNote} />
      </Section>

      <Section background="cream" spacing="default">
        <VetQuoteCard
          name={product.vetQuote.name}
          credentials={product.vetQuote.credentials}
          quote={product.vetQuote.quote}
        />
      </Section>

      <Section background="offwhite" spacing="default">
        <ComparisonTable comparison={product.comparison} />
      </Section>

      <Section background="mint" spacing="default">
        <PdpFaq faqs={product.faqs} />
      </Section>

      <Section background="cream" spacing="default">
        <PdpGuarantee />
      </Section>

      <Section background="cream-2" spacing="default">
        <RelatedProducts currentSlug={product.slug} />
      </Section>
    </>
  );
}
```

- [ ] **Verify + commit**

```bash
mkdir -p "app/products/[slug]"
# Write the file above
npm run type-check && npm run format && npm run build
git add "app/products/[slug]/"
git commit -m "feat(pdp): add dynamic PDP page for daily-probiotic and hip-and-joint"
```

---

### Task 5: Daily Duo bundle landing page at `app/products/daily-duo/page.tsx`

```typescript
import Link from 'next/link';
import type { Metadata } from 'next';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Canister } from '@/components/brand/canister';
import { Blob } from '@/components/brand/illustrations/decor/blob';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star } from '@/components/brand/illustrations/icons/star';
import { PdpFaq } from '@/components/pdp/pdp-faq';
import { PdpGuarantee } from '@/components/pdp/pdp-guarantee';
import { VetQuoteCard } from '@/components/pdp/vet-quote-card';
import { dailyDuo, dailyProbiotic, hipAndJoint } from '@/data/products';
import { dailyProbioticDetail, hipAndJointDetail } from '@/data/products-detail';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'The Daily Duo · Save 32%',
  description:
    'Daily Probiotic + Hip + Joint, together. The bundle that covers gut and joints — the two systems most dogs need supported daily. Save 32% with subscribe and save.',
  alternates: { canonical: `${SITE_URL}/products/daily-duo` },
};

const bundleFaqs = [
  {
    question: 'What’s included in the Daily Duo?',
    answer:
      'One canister of Daily Probiotic (30 chicken-flavored soft chews) and one canister of Hip + Joint (60 duck-flavored soft chews). That’s a 30-day supply of both — your dog gets one probiotic chew and two joint chews per day for a medium-large dog.',
  },
  {
    question: 'How is the 32% off calculated?',
    answer:
      'Retail total is $70 ($32 Probiotic + $38 Hip + Joint). The bundle discount knocks that to $59.50 (-15%). Adding Subscribe & Save stacks another 20% off, taking it to $47.60 (-32% total). The math is on the cart page.',
  },
  {
    question: 'Can I get the bundle as a one-time order?',
    answer:
      'Yes — you get the 15% bundle discount on a one-time order ($59.50). The additional Subscribe & Save 20% only stacks when you choose the subscription. Most people start on subscribe and skip months as needed.',
  },
  {
    question: 'My dog only needs one of these. Should I still bundle?',
    answer:
      'If your dog only needs one, save your money — buy the single SKU. The Duo makes sense when your dog actually needs both (e.g., senior dogs with mild GI issues, or any large breed where gut and joint support both matter long-term).',
  },
  {
    question: 'Can I swap one of the Duo products for a different SKU later?',
    answer:
      'Yes. When you have more SKUs to choose from (we’re adding a Calming chew in a few months), you’ll be able to swap any chew in your subscription. One-click swap from the account portal.',
  },
  {
    question: 'How do skipping and cancelling work?',
    answer:
      'One click from your account. Skip the next shipment, pause indefinitely, or cancel entirely. No phone calls, no fees, no "are you sure?" interrogation.',
  },
];

export default function DailyDuoPage() {
  return (
    <>
      <Section background="cream" spacing="default">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="relative flex h-96 items-center justify-center rounded-3xl bg-cream-2 lg:h-[520px]">
              <Blob variant={2} color="mint" className="absolute inset-12 h-auto" />
              <div className="relative z-10 flex items-center gap-3">
                <div style={{ transform: 'rotate(-8deg)' }}>
                  <Canister
                    name="Daily"
                    bandColor="warmyellow"
                    countLabel="30 SOFT CHEWS"
                    tagline="probiotic"
                    size="md"
                  />
                </div>
                <div style={{ transform: 'rotate(8deg)' }}>
                  <Canister
                    name="Hip+Joint"
                    bandColor="terracotta"
                    countLabel="60 SOFT CHEWS"
                    tagline="glucosamine"
                    size="md"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} className="text-terracotta" />
                  ))}
                </div>
                <span className="text-sm text-charcoal/70">4.9 (10,000+ reviews)</span>
                <Badge variant="warmyellow">Most popular</Badge>
              </div>

              <h1 className="fraunces-soft text-balance text-4xl font-bold leading-tight md:text-5xl">
                The Daily Duo.
              </h1>
              <p className="font-hand text-2xl text-terracotta">Both products, every day.</p>
              <p className="text-base leading-relaxed text-charcoal">
                Daily Probiotic for the gut. Hip + Joint for the mobility. The two systems most
                dogs need supported daily — bundled together so your dog never runs out of either.
              </p>

              <div className="rounded-2xl border-2 border-terracotta bg-offwhite p-5">
                <div className="mb-4 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-charcoal/70">Daily Probiotic</span>
                    <span className="font-mono text-charcoal">$32</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal/70">Hip + Joint</span>
                    <span className="font-mono text-charcoal">$38</span>
                  </div>
                  <div className="flex justify-between border-t border-forest/15 pt-1 text-charcoal/70">
                    <span>Retail total</span>
                    <span className="font-mono">$70.00</span>
                  </div>
                  <div className="flex justify-between text-mint-foreground">
                    <span>Bundle discount (15%)</span>
                    <span className="font-mono">−$10.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Subscribe & save (20%)</span>
                    <span className="font-mono">−$11.90</span>
                  </div>
                </div>

                <div className="mb-3 flex items-baseline gap-3 border-t border-forest/15 pt-3">
                  <span className="fraunces-soft text-4xl font-bold text-terracotta">$47.60</span>
                  <span className="text-base text-charcoal/60 line-through">$70</span>
                  <Badge variant="warmyellow">Save 32% / mo</Badge>
                </div>

                <p className="mb-4 text-xs text-charcoal/70">
                  Ships every 30 days. Free shipping. Skip, swap, pause, or cancel in one click.
                </p>

                <Button variant="primary" size="lg" className="w-full">
                  Add the Duo to cart
                </Button>
              </div>

              <p className="text-sm text-charcoal/70">
                Bundle pricing only available with subscription. One-time order: $59.50 (15% bundle
                discount only).
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="offwhite" spacing="default">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="fraunces-soft mb-3 text-3xl font-bold md:text-4xl">
              What you get in each canister.
            </h2>
            <p className="text-charcoal">Read the full label on each product page.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[dailyProbioticDetail, hipAndJointDetail].map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group rounded-3xl border border-forest/15 bg-cream p-6 transition-transform hover:-translate-y-1"
              >
                <h3 className="fraunces-soft mb-2 text-2xl font-bold text-forest">{p.name}</h3>
                <p className="mb-4 font-hand text-xl text-terracotta">{p.tagline}</p>
                <p className="mb-4 text-sm leading-relaxed text-charcoal">{p.longDescription}</p>
                <span className="text-sm font-semibold text-terracotta underline-offset-4 group-hover:underline">
                  Read the full label →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="cream" spacing="default">
        <VetQuoteCard
          name="Dr. M. Hayes, DVM"
          credentials="Board-certified veterinary nutritionist"
          quote="If a dog is over five years old and active, gut and joint support are the two highest-leverage daily essentials. The Daily Duo is genuinely what most of my older patients should be on — though I admit it’s nice to finally have a brand to point them to instead of a vague Amazon search."
        />
      </Section>

      <Section background="mint" spacing="default">
        <PdpFaq faqs={bundleFaqs} />
      </Section>

      <Section background="cream" spacing="default">
        <PdpGuarantee />
      </Section>
    </>
  );
}
```

- [ ] **Verify + commit**

```bash
mkdir -p app/products/daily-duo
# Write the file above
npm run type-check && npm run format && npm run build
git add app/products/daily-duo/
git commit -m "feat(pdp): add Daily Duo bundle landing page with full pricing math"
```

---

### Task 6: Collection page at `app/products/page.tsx`

```typescript
import type { Metadata } from 'next';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { ProductCard } from '@/components/pdp/product-card';
import { products } from '@/data/products';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Shop the line',
  description:
    'Two products. Both daily. The Daily Probiotic and Hip + Joint chews, plus the Daily Duo subscription bundle that combines both.',
  alternates: { canonical: `${SITE_URL}/products` },
};

const blobVariants: Array<1 | 2 | 3 | 4 | 5 | 6> = [1, 3, 5];
const rotations = [-2, 0, 2];

export default function ProductsCollectionPage() {
  return (
    <Section background="cream" spacing="default">
      <Container>
        <div className="mb-12 text-center">
          <p className="font-hand mb-2 text-2xl text-terracotta">Shop the line —</p>
          <h1 className="fraunces-soft mb-4 text-balance text-4xl font-bold md:text-5xl">
            Two products. Both daily.
          </h1>
          <p className="mx-auto max-w-xl text-lg text-charcoal">
            We make exactly two: a daily probiotic and a hip + joint chew. The Duo combines both
            — what most subscribers go with.
          </p>
        </div>

        <div className="grid items-end gap-8 md:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard
              key={p.slug}
              product={p}
              rotation={rotations[i]}
              blobVariant={blobVariants[i]}
              featured={p.slug === 'daily-duo'}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
```

- [ ] **Verify + commit**

```bash
mkdir -p app/products
# Write the file above
npm run type-check && npm run format && npm run build
git add app/products/page.tsx
git commit -m "feat(catalog): add /products collection page with all 3 SKUs"
```

---

### Task 7: Placeholder cart at `app/cart/page.tsx`

```typescript
import Link from 'next/link';
import type { Metadata } from 'next';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Mascot } from '@/components/brand/illustrations/characters/mascot';
import { ProductCard } from '@/components/pdp/product-card';
import { products } from '@/data/products';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Your cart',
  description: 'Your PawBite cart.',
  alternates: { canonical: `${SITE_URL}/cart` },
  robots: { index: false },
};

export default function CartPage() {
  return (
    <>
      <Section background="cream" spacing="default">
        <Container size="narrow" className="text-center">
          <div className="mb-8 flex justify-center">
            <Mascot variant="sleepy" size={180} bodyColor="#B8D4C4" />
          </div>
          <h1 className="fraunces-soft mb-4 text-balance text-4xl font-bold md:text-5xl">
            Your cart is empty.
          </h1>
          <p className="mx-auto mb-8 max-w-md text-lg text-charcoal">
            Theo is taking a nap until you add something. Browse the line or take the 30-second
            quiz to find what your dog actually needs.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="primary" size="lg" asChild>
              <Link href="/products">Shop the line</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/quiz">Take the quiz</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section background="offwhite" spacing="default">
        <Container>
          <h2 className="fraunces-soft mb-8 text-center text-3xl font-bold">Most-loved picks.</h2>
          <div className="grid items-end gap-8 md:grid-cols-3">
            {products.map((p, i) => (
              <ProductCard
                key={p.slug}
                product={p}
                blobVariant={((i + 1) as 1 | 2 | 3 | 4 | 5 | 6)}
                featured={p.slug === 'daily-duo'}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
```

- [ ] **Verify + commit**

```bash
mkdir -p app/cart
# Write the file above
npm run type-check && npm run format && npm run build
git add app/cart/page.tsx
git commit -m "feat(cart): add placeholder cart with empty state + cross-sell"
```

---

### Task 8: Update sitemap to include products + cart

**File:** Modify `app/sitemap.ts`

```typescript
import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { productSlugs } from '@/data/products-detail';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/products`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    {
      url: `${SITE_URL}/products/daily-duo`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...productSlugs.map((slug) => ({
      url: `${SITE_URL}/products/${slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),
  ];
}
```

- [ ] **Verify + commit**

```bash
npm run type-check && npm run format && npm run build
git add app/sitemap.ts
git commit -m "feat(seo): include product pages in sitemap.xml"
```

---

### Task 9: Update llms.txt to list product pages

**File:** Modify `app/llms.txt/route.ts`

Replace the "Pages" section so it lists all product pages.

```typescript
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/seo';

export const dynamic = 'force-static';

export async function GET() {
  const body = `# ${SITE_NAME}

${SITE_DESCRIPTION}

## What we make

- A daily probiotic chew for dogs (5 strains, 5 billion CFUs, vet-formulated)
- A hip + joint chew for dogs (glucosamine, chondroitin, MSM, green-lipped mussel)
- A subscription bundle of both (The Daily Duo)

## Pages

- [Home](${SITE_URL}): The good stuff your dog needs. Nothing weird.
- [Shop the line](${SITE_URL}/products): Both SKUs and the Daily Duo bundle.
- [Daily Probiotic](${SITE_URL}/products/daily-probiotic): 5 strains, 5B CFU, plus chicory inulin and pumpkin. Chicken flavor.
- [Hip + Joint](${SITE_URL}/products/hip-and-joint): Glucosamine 500mg, chondroitin 400mg, MSM 250mg, green-lipped mussel, turmeric, hyaluronic acid, omega-3. Duck flavor.
- [The Daily Duo](${SITE_URL}/products/daily-duo): Both products bundled. Save 32% when you subscribe.

## Editorial policy

All content is reviewed by a licensed veterinarian. Strain-level studies are cited by author and year.
We don't make claims we can't back up.

## Contact

help@pawbite.com
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
```

- [ ] **Verify + commit**

```bash
npm run type-check && npm run format && npm run build
git add app/llms.txt/route.ts
git commit -m "feat(seo): update llms.txt with product page entries"
```

---

### Task 10: Final build + tag + push

- [ ] **Full verification**

```bash
npm run type-check && npm run lint && npm run format:check && npm run test:run && npm run build
```

Build output should now show:
- `/`
- `/products`
- `/products/daily-probiotic`
- `/products/hip-and-joint`
- `/products/daily-duo`
- `/cart`
- `/dev/*`
- `/sitemap.xml`, `/robots.txt`, `/llms.txt`

- [ ] **Update README status**

Replace the Status section with:
```markdown
## Status

**Phase 3 complete** — Product catalog, 2 PDPs, Daily Duo bundle landing, and placeholder cart shipped. All using mock product data; Shopify wiring is Phase 8.

Phase 4 next: quiz funnel (5-question flow with personalization).
```

- [ ] **Tag + push**

```bash
git add README.md
git commit -m "docs: mark Phase 3 complete"
git tag -a phase-3-pdps -m "Phase 3 complete: PDPs + catalog + cart shell (mock data)"
git checkout main
git merge --ff-only phase-3-pdps
git push origin main
git push origin refs/heads/phase-3-pdps:refs/heads/phase-3-pdps
git push origin refs/tags/phase-3-pdps:refs/tags/phase-3-pdps
```

---

## End of Phase 3 plan.

**Deliverable:** Full product catalog flow — collection page, 2 dynamic PDPs, the Daily Duo bundle landing, and an empty-state cart. All pages have proper metadata, Product schema, FAQ schema (via the accordion structure), and are statically prerendered. Site looks fully shoppable; only the cart→checkout flow is stubbed (Phase 8 plugs in Shopify).

**Total: 10 tasks. Most parallelizable.**

**Next phase:** Phase 4 — Quiz funnel (5-question personalization flow with email capture and $5-off code generation, mock-output only).

# PawBite — Phase 4: Quiz Funnel Implementation Plan

> Use superpowers:subagent-driven-development to execute (or inline — small phase).

**Goal:** Build the 5-question personalization quiz at `/quiz` and the results page at `/quiz/results`. Email capture, $5-off code generation (mock — client-side only), rules-based SKU recommendation. Klaviyo wiring is Phase 9; Phase 4 is mock-only.

**Architecture:** A single client component manages the quiz state (question index, answers, email). On submit, the user is routed to `/quiz/results?<query>` with answers encoded in the URL. The results page reads the query, applies the recommendation rules from `lib/quiz.ts`, and renders the recommended SKU + a $5-off code (generated client-side, mock).

---

## File Structure (additions)

```
/app/quiz/
  page.tsx                         Quiz UI (client component)
  results/page.tsx                 Recommendation output (server, reads query)

/lib/
  quiz.ts                          Quiz schema (questions, options) + recommendation rules

/components/quiz/
  quiz-progress.tsx                Progress bar + "Question N of 5"
  quiz-option.tsx                  Big tappable option card
```

---

## Tasks

### Task 1: Quiz schema + recommendation logic

**File:** `lib/quiz.ts`

```typescript
import type { ProductSlug } from '@/data/products-detail';

export type QuizQuestionId = 'weight' | 'age' | 'primary' | 'secondary' | 'diet';

export type QuizOption = {
  value: string;
  label: string;
  sublabel?: string;
};

export type QuizQuestion = {
  id: QuizQuestionId;
  question: string;
  helper?: string;
  options: QuizOption[];
  optional?: boolean;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'weight',
    question: 'How much does your dog weigh?',
    helper: 'A rough estimate is fine — we use this to dial dosing.',
    options: [
      { value: 'under-25', label: 'Under 25 lbs', sublabel: 'Small breed' },
      { value: '25-50', label: '25–50 lbs', sublabel: 'Medium breed' },
      { value: '50-75', label: '50–75 lbs', sublabel: 'Medium-large' },
      { value: '75-plus', label: '75+ lbs', sublabel: 'Large breed' },
    ],
  },
  {
    id: 'age',
    question: 'How old is your dog?',
    options: [
      { value: 'puppy', label: 'Puppy', sublabel: 'Under 1 year' },
      { value: 'adult', label: 'Adult', sublabel: '1–7 years' },
      { value: 'senior', label: 'Senior', sublabel: '7–10 years' },
      { value: 'super-senior', label: 'Super senior', sublabel: '10+ years' },
    ],
  },
  {
    id: 'primary',
    question: 'What’s the main thing you want to improve?',
    helper: 'Pick one — we’ll recommend a SKU that targets it.',
    options: [
      { value: 'gut', label: 'Gut + stool', sublabel: 'Loose stool, gas, sensitive stomach' },
      { value: 'joint', label: 'Hip + joint', sublabel: 'Stiffness, slow mornings, mobility' },
      { value: 'skin', label: 'Skin + coat', sublabel: 'Itching, shedding, dullness' },
      { value: 'anxiety', label: 'Anxiety + stress', sublabel: 'Fireworks, vet visits, separation' },
      { value: 'wellness', label: 'Daily wellness', sublabel: 'General support, prevention' },
    ],
  },
  {
    id: 'secondary',
    question: 'Anything else?',
    helper: 'Optional — skip if your dog is good elsewhere.',
    optional: true,
    options: [
      { value: 'gut', label: 'Gut + stool' },
      { value: 'joint', label: 'Hip + joint' },
      { value: 'skin', label: 'Skin + coat' },
      { value: 'anxiety', label: 'Anxiety + stress' },
      { value: 'wellness', label: 'Daily wellness' },
      { value: 'none', label: 'Skip — just one thing' },
    ],
  },
  {
    id: 'diet',
    question: 'What does your dog eat now?',
    options: [
      { value: 'kibble', label: 'Kibble', sublabel: 'Dry food, any brand' },
      { value: 'fresh', label: 'Fresh / raw', sublabel: 'Cooked, raw, or fresh-frozen' },
      { value: 'mixed', label: 'Mixed', sublabel: 'Combo of kibble + fresh' },
      { value: 'rx', label: 'Prescription diet', sublabel: 'Vet-prescribed therapeutic food' },
    ],
  },
];

export type QuizAnswers = Partial<Record<QuizQuestionId, string>>;

export type QuizResult = {
  primarySku: ProductSlug | 'daily-duo';
  reasoning: string;
  bundleRecommended: boolean;
};

/** Apply rules-based recommendation. v1 is simple if/else; Phase 9 may add ML personalization. */
export function recommendFromAnswers(answers: QuizAnswers): QuizResult {
  const primary = answers.primary;
  const secondary = answers.secondary;
  const age = answers.age;

  const isSenior = age === 'senior' || age === 'super-senior';
  const wantsGut = primary === 'gut' || secondary === 'gut';
  const wantsJoint = primary === 'joint' || secondary === 'joint';
  const wantsBoth = wantsGut && wantsJoint;
  const seniorPlusJoint = isSenior && (primary === 'joint' || primary === 'wellness');

  // Senior dogs benefit from both — recommend the Duo
  if (wantsBoth || seniorPlusJoint) {
    return {
      primarySku: 'daily-duo',
      reasoning:
        'Both gut health and joint mobility tend to need attention together — especially in adult and senior dogs. The Daily Duo covers both daily, and you save 32% by bundling and subscribing.',
      bundleRecommended: true,
    };
  }

  // Primary joint → Hip + Joint
  if (primary === 'joint') {
    return {
      primarySku: 'hip-and-joint',
      reasoning:
        'Hip + Joint is clinically dosed glucosamine (500 mg), chondroitin (400 mg), MSM, green-lipped mussel, and turmeric — built to ease stiffness and protect cartilage. Most dogs notice easier mornings within 14–21 days.',
      bundleRecommended: false,
    };
  }

  // Anxiety / skin / wellness → Daily Probiotic (the gut-first thesis)
  // The Calm and Skin SKUs ship in roadmap Phase B. Until then, the probiotic is the
  // best first move because gut health underlies skin, immune, and behavior.
  return {
    primarySku: 'daily-probiotic',
    reasoning:
      primary === 'gut'
        ? 'Daily Probiotic is 5 strains, 5 billion CFUs — including the strains most-studied for firming stool, reducing gas, and supporting digestion. Most dogs see improvement within 7–14 days.'
        : primary === 'skin'
          ? 'Skin and coat issues often trace back to the gut — it’s called the gut-skin axis, and it’s real. Most owners see coat improvements once digestion stabilizes. Daily Probiotic is our recommendation while we develop a skin-specific chew.'
          : primary === 'anxiety'
            ? 'Anxious dogs often have unsettled guts (the gut-brain axis works both ways). Daily Probiotic helps stabilize the foundation while we develop a calming chew. For acute calming, talk to your vet about short-term options.'
            : 'Daily Probiotic is our most-recommended daily essential. Five strains, five billion CFUs, third-party tested. The simplest way to support overall wellness from the gut up.',
    bundleRecommended: false,
  };
}

/** Generate a mock $5-off code based on email. Real Klaviyo integration is Phase 9. */
export function generateDiscountCode(email: string): string {
  // Use a simple hash of the email + day to make the code feel personalized
  const hash = email
    .toLowerCase()
    .split('')
    .reduce((acc, c) => ((acc << 5) - acc + c.charCodeAt(0)) | 0, 0);
  const abs = Math.abs(hash).toString(36).toUpperCase().slice(0, 5);
  return `WELCOME-${abs}`;
}
```

### Task 2: Quiz components

**File:** `components/quiz/quiz-progress.tsx`

```typescript
export function QuizProgress({ current, total }: { current: number; total: number }) {
  const percent = Math.round((current / total) * 100);
  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-forest/60">
        <span>
          Question {current} of {total}
        </span>
        <span>{percent}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-forest/10">
        <div
          className="h-full rounded-full bg-terracotta transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
```

**File:** `components/quiz/quiz-option.tsx`

```typescript
'use client';

import { cn } from '@/lib/utils';

interface QuizOptionProps {
  label: string;
  sublabel?: string;
  selected: boolean;
  onClick: () => void;
}

export function QuizOption({ label, sublabel, selected, onClick }: QuizOptionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex w-full flex-col items-start gap-1 rounded-2xl border-2 p-5 text-left transition-all',
        selected
          ? 'border-terracotta bg-terracotta/5 shadow-stack-sm'
          : 'border-forest/15 bg-offwhite hover:border-forest/40',
      )}
    >
      <span className="fraunces-soft text-lg font-bold text-forest">{label}</span>
      {sublabel && <span className="text-sm text-charcoal/70">{sublabel}</span>}
    </button>
  );
}
```

### Task 3: `/quiz/page.tsx` — the quiz UI

**File:** `app/quiz/page.tsx`

```typescript
'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { QuizProgress } from '@/components/quiz/quiz-progress';
import { QuizOption } from '@/components/quiz/quiz-option';
import { CalloutPill } from '@/components/brand/illustrations/callout-pill';
import {
  quizQuestions,
  type QuizAnswers,
  type QuizQuestionId,
} from '@/lib/quiz';

export default function QuizPage() {
  const router = useRouter();
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<QuizAnswers>({});
  const [email, setEmail] = React.useState('');

  const isEmailStep = step === quizQuestions.length;
  const totalSteps = quizQuestions.length + 1;
  const currentQuestion = quizQuestions[step];

  function select(id: QuizQuestionId, value: string) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function next() {
    if (step < quizQuestions.length) setStep(step + 1);
  }

  function back() {
    if (step > 0) setStep(step - 1);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    Object.entries(answers).forEach(([k, v]) => v && params.set(k, v));
    params.set('email', email);
    router.push(`/quiz/results?${params.toString()}`);
  }

  return (
    <Section background="cream" spacing="default">
      <Container size="narrow">
        <div className="mb-6 text-center">
          <CalloutPill variant="caveat" color="warmyellow" rotation={-3}>
            $5 off when you finish —
          </CalloutPill>
        </div>

        <QuizProgress current={step + 1} total={totalSteps} />

        <div className="rounded-3xl border border-forest/15 bg-cream p-6 md:p-10">
          {!isEmailStep && currentQuestion && (
            <>
              <h1 className="fraunces-soft mb-2 text-balance text-2xl font-bold md:text-3xl">
                {currentQuestion.question}
              </h1>
              {currentQuestion.helper && (
                <p className="mb-6 text-sm text-charcoal/70">{currentQuestion.helper}</p>
              )}

              <div className="grid gap-3">
                {currentQuestion.options.map((opt) => (
                  <QuizOption
                    key={opt.value}
                    label={opt.label}
                    sublabel={opt.sublabel}
                    selected={answers[currentQuestion.id] === opt.value}
                    onClick={() => {
                      select(currentQuestion.id, opt.value);
                      // Auto-advance after selection (slight delay for visual confirmation)
                      setTimeout(next, 200);
                    }}
                  />
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button
                  onClick={back}
                  disabled={step === 0}
                  className="text-sm text-forest/60 hover:text-terracotta disabled:opacity-30"
                >
                  ← Back
                </button>
                {currentQuestion.optional && (
                  <button onClick={next} className="text-sm font-semibold text-terracotta">
                    Skip →
                  </button>
                )}
              </div>
            </>
          )}

          {isEmailStep && (
            <form onSubmit={submit}>
              <h1 className="fraunces-soft mb-2 text-balance text-2xl font-bold md:text-3xl">
                One last thing — where should we send your $5 off?
              </h1>
              <p className="mb-6 text-sm text-charcoal/70">
                We&apos;ll email your personalized recommendation and a $5-off code valid on your
                first order. No spam. Cancel any time.
              </p>

              <input
                type="email"
                required
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4 w-full rounded-full border-2 border-forest/20 bg-offwhite px-5 py-3 text-base text-forest placeholder:text-forest/40 focus:border-terracotta focus:outline-none"
              />

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Get my dog&apos;s plan →
              </Button>

              <div className="mt-4 flex items-center justify-start">
                <button
                  type="button"
                  onClick={back}
                  className="text-sm text-forest/60 hover:text-terracotta"
                >
                  ← Back
                </button>
              </div>

              <p className="mt-6 text-center text-xs text-charcoal/60">
                We don&apos;t share, sell, or rent your email. Read our{' '}
                <a href="/privacy" className="underline">
                  privacy promise
                </a>
                .
              </p>
            </form>
          )}
        </div>
      </Container>
    </Section>
  );
}
```

### Task 4: `/quiz/results/page.tsx` — recommendation output

**File:** `app/quiz/results/page.tsx`

```typescript
import Link from 'next/link';
import type { Metadata } from 'next';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/pdp/product-card';
import { Mascot } from '@/components/brand/illustrations/characters/mascot';
import { Sparkle } from '@/components/brand/illustrations/icons/sparkle';
import { CalloutPill } from '@/components/brand/illustrations/callout-pill';
import {
  recommendFromAnswers,
  generateDiscountCode,
  type QuizAnswers,
  type QuizQuestionId,
} from '@/lib/quiz';
import { products } from '@/data/products';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Your dog’s plan',
  description: 'Personalized PawBite recommendation based on your quiz answers.',
  alternates: { canonical: `${SITE_URL}/quiz/results` },
  robots: { index: false },
};

const validKeys: QuizQuestionId[] = ['weight', 'age', 'primary', 'secondary', 'diet'];

export default function QuizResultsPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const answers: QuizAnswers = {};
  validKeys.forEach((k) => {
    const v = searchParams[k];
    if (typeof v === 'string') answers[k] = v;
  });

  const email = typeof searchParams.email === 'string' ? searchParams.email : '';
  const result = recommendFromAnswers(answers);
  const discountCode = email ? generateDiscountCode(email) : 'WELCOME-PAWBITE';

  const recommendedProduct = products.find((p) => p.slug === result.primarySku) ?? products[0];
  const alsoConsider = products.filter((p) => p.slug !== result.primarySku && p.slug !== 'daily-duo');

  return (
    <>
      <Section background="cream" spacing="default">
        <Container size="narrow" className="text-center">
          <div className="mb-6 flex justify-center">
            <Mascot variant="happy" size={140} bodyColor="#E8B547" />
          </div>

          <CalloutPill variant="caveat" color="warmyellow" rotation={-3} className="mb-4">
            Here&apos;s the plan —
          </CalloutPill>

          <h1 className="fraunces-soft mb-4 text-balance text-4xl font-bold md:text-5xl">
            Your dog&apos;s starting point: <span className="italic text-terracotta">{recommendedProduct.name}</span>.
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-charcoal">
            {result.reasoning}
          </p>

          {/* Discount code callout */}
          <div className="mx-auto mb-10 inline-flex items-center gap-3 rounded-full border-2 border-terracotta bg-terracotta/5 px-6 py-3">
            <Sparkle size={20} className="text-terracotta" />
            <div className="text-left">
              <div className="text-xs uppercase tracking-wider text-forest/70">Your $5-off code</div>
              <div className="font-mono text-lg font-bold text-terracotta">{discountCode}</div>
            </div>
          </div>

          <div className="mb-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="primary" size="lg" asChild>
              <Link href={`/products/${recommendedProduct.slug}`}>
                Shop {recommendedProduct.shortName} →
              </Link>
            </Button>
            {result.bundleRecommended && (
              <Badge variant="warmyellow" className="hidden sm:inline-flex">
                Bundle saves 32%
              </Badge>
            )}
          </div>

          {email && (
            <p className="text-sm text-charcoal/70">
              We&apos;ve emailed your plan + code to <span className="font-semibold">{email}</span>.
            </p>
          )}
        </Container>
      </Section>

      {/* Recommended product card — bigger */}
      <Section background="offwhite" spacing="default">
        <Container>
          <h2 className="fraunces-soft mb-8 text-center text-3xl font-bold md:text-4xl">
            What&apos;s in it for {recommendedProduct.shortName === 'Duo' ? 'your dog' : recommendedProduct.shortName}.
          </h2>
          <div className="mx-auto max-w-md">
            <ProductCard product={recommendedProduct} blobVariant={2} featured />
          </div>
        </Container>
      </Section>

      {/* Also consider */}
      {alsoConsider.length > 0 && (
        <Section background="cream" spacing="default">
          <Container>
            <h2 className="fraunces-soft mb-8 text-3xl font-bold">Also worth considering.</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {alsoConsider.map((p, i) => (
                <ProductCard
                  key={p.slug}
                  product={p}
                  blobVariant={(((i + 3) % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
                />
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
```

### Task 5: Update sitemap + verify build + commit + tag + push

- Add `/quiz` to sitemap (not `/quiz/results` — that's noindex)
- Build + verify
- Commit all
- Tag `phase-4-quiz`
- Merge to main
- Push

```bash
# update sitemap.ts to include /quiz entry
git add -A
git commit -m "feat(quiz): add 5-question quiz + results page with mock recommendation rules"
git tag -a phase-4-quiz -m "Phase 4: Quiz funnel with rules-based recommendation (mock)"
git checkout main && git merge --ff-only phase-4-quiz
git push origin main
git push origin refs/heads/phase-4-quiz:refs/heads/phase-4-quiz
git push origin refs/tags/phase-4-quiz:refs/tags/phase-4-quiz
```

---

## End of Phase 4 plan.

**Deliverable:** Working quiz flow at `/quiz` (5 questions, auto-advance, mobile-responsive), recommendation output at `/quiz/results?<query>` with personalized SKU, reasoning paragraph, mock $5-off code, and CTA to the recommended PDP. No backend — all client-side / URL-encoded.

**Next phase:** Phase 5 — SEO content layer (~80 pages: blog + breeds + concerns + ingredients + comparison).

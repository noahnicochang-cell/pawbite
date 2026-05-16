import Link from 'next/link';
import type { Metadata } from 'next';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { breedPages } from '@/data/breed-pages';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Supplements by breed',
  description:
    'Breed-specific supplement guidance for 25 popular dog breeds. Common health concerns, dosing notes, and product recommendations — reviewed by a licensed veterinarian.',
  alternates: { canonical: `${SITE_URL}/breeds` },
};

const sizeColor = {
  small: 'pinky',
  medium: 'warmyellow',
  large: 'mint',
  giant: 'soft',
} as const;

export default function BreedsHub() {
  return (
    <Section background="cream" spacing="default">
      <Container>
        <div className="mb-12 text-center">
          <p className="mb-2 font-hand text-2xl text-terracotta">Supplements by breed —</p>
          <h1 className="fraunces-soft mb-4 text-balance text-4xl font-bold md:text-5xl">
            What your dog actually needs.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-charcoal">
            Different breeds, different concerns. We&apos;ve mapped 25 popular breeds to the
            supplement essentials most relevant to each.
          </p>
        </div>

        {breedPages.length === 0 ? (
          <p className="text-center text-charcoal/60">Breed guides coming soon.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {breedPages.map((breed) => (
              <Link
                key={breed.slug}
                href={`/breeds/${breed.slug}`}
                className="group block rounded-2xl border border-forest/15 bg-offwhite p-5 transition-transform hover:-translate-y-1"
              >
                <div className="mb-2 flex items-center gap-2">
                  <Badge variant={sizeColor[breed.size]}>{breed.size}</Badge>
                </div>
                <h2 className="fraunces-soft mb-2 text-lg font-bold text-forest group-hover:text-terracotta">
                  {breed.breedName}
                </h2>
                <p className="text-xs text-charcoal/70">{breed.weightRange}</p>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ContentPage, faqPageSchema, articleSchema } from '@/components/content/content-page';
import { breedPageBySlug, breedPageSlugs } from '@/data/breed-pages';
import { SITE_URL } from '@/lib/seo';

export function generateStaticParams() {
  return breedPageSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const breed = breedPageBySlug(params.slug);
  if (!breed) return {};
  return {
    title: `${breed.breedName} supplements — what to know about gut and joint health`,
    description: breed.tldr,
    alternates: { canonical: `${SITE_URL}/breeds/${breed.slug}` },
  };
}

export default function BreedPage({ params }: { params: { slug: string } }) {
  const breed = breedPageBySlug(params.slug);
  if (!breed) notFound();

  const title = `Supplements for ${breed.breedName}s.`;

  // Prepend a "Quick facts" section with breed-specific data
  const quickFactsBody = [
    `**Size:** ${breed.size.charAt(0).toUpperCase() + breed.size.slice(1)}`,
    `**Typical weight:** ${breed.weightRange}`,
    `**Typical lifespan:** ${breed.lifespanRange}`,
    `**Common health concerns:** ${breed.commonHealthConcerns.join(', ')}`,
    '',
    `**Dosing note:** ${breed.dosingNote}`,
  ].join('\n\n');

  const sections = [
    { heading: `Quick facts for ${breed.breedName}s.`, body: quickFactsBody },
    ...breed.sections,
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title,
              description: breed.tldr,
              byline: breed.byline,
              url: `${SITE_URL}/breeds/${breed.slug}`,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(breed.faqs)),
        }}
      />
      <ContentPage
        category={`${breed.size.charAt(0).toUpperCase() + breed.size.slice(1)} breed`}
        hubLink={{ href: '/breeds', label: 'All breeds' }}
        title={title}
        tldr={breed.tldr}
        byline={breed.byline}
        sections={sections}
        faqs={breed.faqs}
        recommendsProduct={breed.recommendsProduct}
        recommendsContext={breed.reasonForRecommendation}
      />
    </>
  );
}

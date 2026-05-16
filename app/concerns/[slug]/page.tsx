import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ContentPage, faqPageSchema, articleSchema } from '@/components/content/content-page';
import { concernPageBySlug, concernPageSlugs } from '@/data/concern-pages';
import { SITE_URL } from '@/lib/seo';

export function generateStaticParams() {
  return concernPageSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const concern = concernPageBySlug(params.slug);
  if (!concern) return {};
  return {
    title: `${concern.concernName}: signs, causes, and what helps`,
    description: concern.tldr,
    alternates: { canonical: `${SITE_URL}/concerns/${concern.slug}` },
  };
}

export default function ConcernPage({ params }: { params: { slug: string } }) {
  const concern = concernPageBySlug(params.slug);
  if (!concern) notFound();

  const title = concern.concernName;

  // Prepend a "Signs to watch" section with the concern-specific checklist
  const signsBody = [
    "Here's what owners report most often:",
    '',
    concern.signs.map((s) => `- ${s}`).join('\n'),
  ].join('\n');

  const causesBody = concern.commonCauses
    .map((c) => `**${c.cause}.** ${c.explanation}`)
    .join('\n\n');

  const sections = [
    { heading: 'Signs to watch for.', body: signsBody },
    { heading: 'Common causes.', body: causesBody },
    ...concern.sections,
    { heading: 'When to see your vet.', body: concern.whenToSeeVet },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title,
              description: concern.tldr,
              byline: concern.byline,
              url: `${SITE_URL}/concerns/${concern.slug}`,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(concern.faqs)),
        }}
      />
      <ContentPage
        category="Concern"
        hubLink={{ href: '/concerns', label: 'All concerns' }}
        title={title}
        tldr={concern.tldr}
        byline={concern.byline}
        sections={sections}
        faqs={concern.faqs}
        recommendsProduct={concern.recommendsProduct}
        recommendsContext={concern.reasonForRecommendation}
      />
    </>
  );
}

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ContentPage, faqPageSchema, articleSchema } from '@/components/content/content-page';
import { ContentDataTable } from '@/components/content/content-data-table';
import { vsPageBySlug, vsPageSlugs } from '@/data/vs-pages';
import { SITE_URL } from '@/lib/seo';

export function generateStaticParams() {
  return vsPageSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const vs = vsPageBySlug(params.slug);
  if (!vs) return {};
  return {
    title: `PawBite vs ${vs.competitorName} — head-to-head comparison`,
    description: vs.tldr,
    alternates: { canonical: `${SITE_URL}/vs/${vs.slug}` },
  };
}

export default function VsPage({ params }: { params: { slug: string } }) {
  const vs = vsPageBySlug(params.slug);
  if (!vs) notFound();

  const title = `PawBite vs ${vs.competitorName}.`;

  const whenSection = [
    { heading: `When ${vs.competitorName} makes sense.`, body: vs.whenCompetitorMakesSense },
    { heading: 'When PawBite makes sense.', body: vs.whenPawbiteMakesSense },
  ];

  const sections = [...whenSection, ...vs.sections];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title,
              description: vs.tldr,
              byline: vs.byline,
              url: `${SITE_URL}/vs/${vs.slug}`,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(vs.faqs)),
        }}
      />
      <ContentPage
        category={`vs ${vs.competitorName}`}
        hubLink={{ href: '/vs', label: 'All comparisons' }}
        title={title}
        tldr={vs.tldr}
        byline={vs.byline}
        sections={sections}
        faqs={vs.faqs}
        recommendsProduct={vs.recommendsProduct}
        recommendsContext={vs.whenPawbiteMakesSense}
        extra={
          <ContentDataTable
            table={{
              caption: 'Side-by-side comparison',
              headers: ['Feature', 'PawBite', vs.competitorName],
              rows: vs.comparisonRows.map((r) => [r.feature, r.pawbite, r.competitor]),
            }}
          />
        }
      />
    </>
  );
}

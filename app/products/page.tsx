import type { Metadata } from 'next';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { ProductCard } from '@/components/pdp/product-card';
import { products } from '@/data/products';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Shop the line',
  description:
    'Three formulas, all daily. Calming Chews, Daily Probiotic, and Hip + Joint — plus the Daily Duo subscription bundle.',
  alternates: { canonical: `${SITE_URL}/products` },
};

const blobVariants: Array<1 | 2 | 3 | 4 | 5 | 6> = [1, 3, 5];
const rotations = [0, 0, 0];

export default function ProductsCollectionPage() {
  return (
    <Section background="cream" spacing="default">
      <Container>
        <div className="mb-12 text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.32em] font-medium text-terracotta">Shop the line</p>
          <h1 className="font-editorial mb-4 text-balance text-4xl font-black tracking-tight md:text-5xl">
            Three formulas. <span className="fraunces-soft text-terracotta">All science-backed.</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg text-charcoal">
            Calming Chews are live now. Probiotic and Joint + Mobility drop Oct 30 and Dec 30.
          </p>
        </div>

        <div className="grid items-end gap-8 md:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard
              key={p.slug}
              product={p}
              rotation={rotations[i]}
              blobVariant={blobVariants[i]}
              featured={p.slug === 'calming-chews'}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

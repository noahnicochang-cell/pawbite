import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { productSlugs } from '@/data/products-detail';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/quiz`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
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

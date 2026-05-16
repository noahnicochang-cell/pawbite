import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { productSlugs } from '@/data/products-detail';
import { blogPostSlugs } from '@/data/blog-posts';
import { breedPageSlugs } from '@/data/breed-pages';
import { concernPageSlugs } from '@/data/concern-pages';
import { ingredientPageSlugs } from '@/data/ingredient-pages';
import { vsPageSlugs } from '@/data/vs-pages';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    // Top-level
    { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/quiz`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },

    // Commerce
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

    // Content hubs
    { url: `${SITE_URL}/learn`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/breeds`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/concerns`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    {
      url: `${SITE_URL}/ingredients`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    { url: `${SITE_URL}/vs`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Content pages
    ...blogPostSlugs().map((slug) => ({
      url: `${SITE_URL}/learn/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...breedPageSlugs().map((slug) => ({
      url: `${SITE_URL}/breeds/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...concernPageSlugs().map((slug) => ({
      url: `${SITE_URL}/concerns/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...ingredientPageSlugs().map((slug) => ({
      url: `${SITE_URL}/ingredients/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    })),
    ...vsPageSlugs().map((slug) => ({
      url: `${SITE_URL}/vs/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  return entries;
}

import type {
  ContentSection,
  ContentSource,
  ContentFAQ,
  DataTable,
  ContentByline,
  ProductRecommendation,
} from './content-schema';

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  readMin: number;
  tldr: string;
  byline: ContentByline;
  sections: ContentSection[];
  dataTable?: DataTable;
  sources: ContentSource[];
  faqs: ContentFAQ[];
  recommendsProduct: ProductRecommendation;
  recommendsContext: string;
};

/**
 * Filled in by Phase 5 content writer agent (blog).
 * 15 entries total per the spec.
 */
export const blogPosts: BlogPost[] = [];

export const blogPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);
export const blogPostSlugs = (): string[] => blogPosts.map((p) => p.slug);

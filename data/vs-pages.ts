import type {
  ContentSection,
  ContentFAQ,
  ContentByline,
  ProductRecommendation,
} from './content-schema';

export type VsComparisonRow = {
  feature: string;
  pawbite: string;
  competitor: string;
};

export type VsPage = {
  slug: string;
  competitorName: string;
  competitorTagline: string;
  productCategories: string[];
  tldr: string;
  byline: ContentByline;
  comparisonRows: VsComparisonRow[];
  whenCompetitorMakesSense: string;
  whenPawbiteMakesSense: string;
  sections: ContentSection[];
  recommendsProduct: ProductRecommendation;
  faqs: ContentFAQ[];
};

/**
 * Filled in by Phase 5 content writer agent (vs comparisons).
 * 4 entries total.
 */
export const vsPages: VsPage[] = [];

export const vsPageBySlug = (slug: string): VsPage | undefined =>
  vsPages.find((v) => v.slug === slug);
export const vsPageSlugs = (): string[] => vsPages.map((v) => v.slug);

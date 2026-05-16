import type {
  ContentSection,
  ContentFAQ,
  ContentByline,
  ProductRecommendation,
} from './content-schema';

export type ConcernCause = {
  cause: string;
  explanation: string;
};

export type ConcernPage = {
  slug: string;
  concernName: string;
  tldr: string;
  signs: string[];
  commonCauses: ConcernCause[];
  byline: ContentByline;
  sections: ContentSection[];
  whenToSeeVet: string;
  recommendsProduct: ProductRecommendation;
  reasonForRecommendation: string;
  faqs: ContentFAQ[];
};

/**
 * Filled in by Phase 5 content writer agent (concerns).
 * 10 entries total.
 */
export const concernPages: ConcernPage[] = [];

export const concernPageBySlug = (slug: string): ConcernPage | undefined =>
  concernPages.find((c) => c.slug === slug);
export const concernPageSlugs = (): string[] => concernPages.map((c) => c.slug);

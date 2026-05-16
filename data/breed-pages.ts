import type {
  ContentSection,
  ContentFAQ,
  ContentByline,
  ProductRecommendation,
} from './content-schema';

export type BreedSize = 'small' | 'medium' | 'large' | 'giant';

export type BreedPage = {
  slug: string;
  breedName: string;
  size: BreedSize;
  weightRange: string;
  lifespanRange: string;
  tldr: string;
  commonHealthConcerns: string[];
  byline: ContentByline;
  sections: ContentSection[];
  recommendsProduct: ProductRecommendation;
  reasonForRecommendation: string;
  dosingNote: string;
  faqs: ContentFAQ[];
};

/**
 * Filled in by Phase 5 content writer agent (breeds).
 * 25 entries total.
 */
export const breedPages: BreedPage[] = [];

export const breedPageBySlug = (slug: string): BreedPage | undefined =>
  breedPages.find((b) => b.slug === slug);
export const breedPageSlugs = (): string[] => breedPages.map((b) => b.slug);

import type {
  ContentSection,
  ContentSource,
  ContentFAQ,
  ContentByline,
  ProductRecommendation,
} from './content-schema';

export type IngredientCategory =
  | 'probiotic'
  | 'prebiotic'
  | 'joint'
  | 'omega'
  | 'herbal'
  | 'amino-acid'
  | 'mineral'
  | 'other';

export type IngredientDose = {
  smallDog: string;
  mediumDog: string;
  largeDog: string;
};

export type IngredientPage = {
  slug: string;
  ingredientName: string;
  scientificName?: string;
  category: IngredientCategory;
  tldr: string;
  whatItIs: string;
  howItWorks: string;
  typicalDose: IngredientDose;
  safetyNotes: string;
  byline: ContentByline;
  sections: ContentSection[];
  sources: ContentSource[];
  inProducts: Array<'daily-probiotic' | 'hip-and-joint'>;
  recommendsProduct: ProductRecommendation;
  faqs: ContentFAQ[];
};

/**
 * Filled in by Phase 5 content writer agent (ingredients).
 * 20 entries total.
 */
export const ingredientPages: IngredientPage[] = [];

export const ingredientPageBySlug = (slug: string): IngredientPage | undefined =>
  ingredientPages.find((i) => i.slug === slug);
export const ingredientPageSlugs = (): string[] => ingredientPages.map((i) => i.slug);

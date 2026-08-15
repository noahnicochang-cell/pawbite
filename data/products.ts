export type Product = {
  slug: string;
  name: string;
  shortName: string;
  bandColor: 'warmyellow' | 'terracotta' | 'mint' | 'forest';
  blobColor: 'warmyellow' | 'terracotta' | 'mint' | 'pinky';
  countLabel: string;
  tagline: string;
  oneLineDescription: string;
  retailPrice: number;
  subPrice: number;
  badge?: string;
  image?: string;
  accentColor?: string;
  comingSoon?: string;
};

export const products: Product[] = [
  {
    slug: 'calming-chews',
    name: 'Calming Chews',
    shortName: 'Calming',
    bandColor: 'terracotta',
    blobColor: 'pinky',
    countLabel: '80 SOFT CHEWS',
    tagline: 'Adaptogens, not sedation.',
    oneLineDescription: 'L-theanine + ashwagandha + chamomile. No CBD, no melatonin.',
    retailPrice: 24.99,
    subPrice: 24.99,
    badge: 'Pre-order',
    image: '/product/calming-tin-label.png',
    accentColor: '#D9654A',
    comingSoon: 'Aug 31',
  },
  {
    slug: 'daily-probiotic',
    name: 'Probiotic Chews',
    shortName: 'Probiotic',
    bandColor: 'warmyellow',
    blobColor: 'warmyellow',
    countLabel: '80 SOFT CHEWS',
    tagline: 'Real probiotics, named strains, no flash.',
    oneLineDescription: '5 named strains. 5 billion CFU + prebiotics. The daily gut anchor.',
    retailPrice: 24.99,
    subPrice: 24.99,
    badge: 'Pre-order',
    image: '/product/probiotic-tin-label.png',
    accentColor: '#5B9E2F',
    comingSoon: 'Oct 30',
  },
  {
    slug: 'hip-and-joint',
    name: 'Hip + Joint',
    shortName: 'Joint',
    bandColor: 'terracotta',
    blobColor: 'pinky',
    countLabel: '50 SOFT CHEWS',
    tagline: "Built for the dog who's still sharp.",
    oneLineDescription:
      'Glucosamine + chondroitin + green-lipped mussel. Senior dog support done right.',
    retailPrice: 24.99,
    subPrice: 24.99,
    badge: 'Pre-order',
    image: '/product/joint-tin-label.png',
    accentColor: '#E07B2B',
    comingSoon: 'Dec 30',
  },
];

export const calmingChews = products[0];
export const dailyProbiotic = products[1];
export const hipAndJoint = products[2];

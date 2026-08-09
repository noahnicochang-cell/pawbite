export type MerchStatus = 'coming-soon' | 'sold-out' | 'waitlist';

export type MerchItem = {
  slug: string;
  name: string;
  description: string;
  image: string;
  status: MerchStatus;
  price?: string;
};

export const merchItems: MerchItem[] = [
  {
    slug: 'dog-bowl',
    name: 'The PawBite Bowl',
    description: 'Stainless steel. Rubber non-slip base. Embossed logo. Built to last longer than the kibble inside it.',
    image: '/product/merch-bowl-label.png',
    status: 'coming-soon',
    price: '$34',
  },
  {
    slug: 'long-sleeve',
    name: 'Logo Long-Sleeve',
    description: 'Butter yellow. Heavy cotton. Repeating mascot sleeve print. The one you\'ll wear to the dog park and then never take off.',
    image: '/product/merch-shirt-label.png',
    status: 'waitlist',
    price: '$58',
  },
  {
    slug: 'dog-cap',
    name: 'The Dog Cap',
    description: 'For dogs, not humans. Embroidered logo, ear holes, adjustable strap. Your dog deserves a hat.',
    image: '/product/merch-cap-label.png',
    status: 'waitlist',
    price: '$28',
  },
  {
    slug: 'leather-collar',
    name: 'Leather Collar + Charm',
    description: 'Full-grain leather. Silver hardware. Die-cut PawBite logo charm. The last collar you\'ll buy.',
    image: '/product/merch-collar-label.png',
    status: 'coming-soon',
    price: '$48',
  },
  {
    slug: 'chew-toy',
    name: 'The Chew Toy',
    description: 'Natural rubber. Spiky texture for gum stimulation. PawBite logo molded in. Something to destroy that isn\'t your furniture.',
    image: '/product/merch-toy-label.png',
    status: 'coming-soon',
    price: '$18',
  },
  {
    slug: 'dog-house',
    name: 'The Kennel',
    description: 'Solid wood. Corrugated roof. PawBite logo on the face. A proper house for a proper dog.',
    image: '/product/merch-kennel-label.png',
    status: 'sold-out',
    price: '$280',
  },
];

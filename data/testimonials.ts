export type Testimonial = {
  dogName: string;
  dogBreed: string;
  ownerName: string;
  ownerLocation: string;
  avatarVariant: 1 | 2 | 3 | 4 | 5 | 6;
  photo: string;
  quote: string;
  beforeAfter?: {
    metric: string;
    before: number;
    after: number;
    days: number;
  };
};

export const testimonials: Testimonial[] = [
  {
    dogName: 'Penny',
    dogBreed: 'Mini Dachshund, 4 yo',
    ownerName: 'Sarah L.',
    ownerLocation: 'Upper East Side, NYC',
    avatarVariant: 1,
    photo: '/dogs/dog-1-dachshund.jpg',
    quote:
      "Penny's stomach was a disaster on city walks — every block was a guessing game. Two weeks on PawBite and we made it from 86th to Central Park without an incident. Game changer for a Manhattan dog.",
    beforeAfter: { metric: 'Stool quality', before: 2, after: 9, days: 14 },
  },
  {
    dogName: 'Domino',
    dogBreed: 'Dalmatian, 3 yo',
    ownerName: 'Mae K.',
    ownerLocation: 'Chinatown, NYC',
    avatarVariant: 2,
    photo: '/dogs/dog-2-dalmatian.jpg',
    quote:
      "Dalmatians have notoriously sensitive guts — Domino was on a prescription probiotic that cost twice as much and worked half as well. PawBite is now the only thing in his bowl I don't worry about.",
    beforeAfter: { metric: 'Gas + bloating', before: 3, after: 9, days: 21 },
  },
  {
    dogName: 'Rio',
    dogBreed: 'Vizsla, 5 yo',
    ownerName: 'James P.',
    ownerLocation: 'West Village, NYC',
    avatarVariant: 4,
    photo: '/dogs/dog-3-vizsla.jpg',
    quote:
      "Rio is a 50-lb anxious vizsla who used to throw up on every car ride. The duo of PawBite + a calming chew before trips? No vomiting in 3 weeks. My back seat thanks you.",
    beforeAfter: { metric: 'Travel anxiety', before: 4, after: 8, days: 21 },
  },
];

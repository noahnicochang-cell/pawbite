/**
 * Dogs + Owners marquee for /about page.
 *
 * Only photos where a human is visible in the frame go here.
 *
 * To add a new dog+owner shot:
 *   1. Save to /public/dogs/dog-XX-<descriptor>.jpg
 *   2. Add entry below
 */

export type OwnerDog = {
  src: string;
  dogName: string;
  ownerName: string;
  neighborhood: string;
};

export const ownerDogs: OwnerDog[] = [
  {
    src: '/dogs/dog-08-treat-time.jpg',
    dogName: 'Cleo',
    ownerName: 'Maya',
    neighborhood: 'Greenpoint',
  },
  {
    src: '/dogs/dog-09-denim-kiss.jpg',
    dogName: 'Marlon',
    ownerName: 'Jake',
    neighborhood: 'LES',
  },
  {
    src: '/dogs/dog-10-weimaraner.jpg',
    dogName: 'Greta',
    ownerName: 'Sam',
    neighborhood: 'Cobble Hill',
  },
  {
    src: '/dogs/dog-01-gray-scruffy.jpg',
    dogName: 'Otis',
    ownerName: 'Priya & Tom',
    neighborhood: 'UES',
  },
  {
    src: '/dogs/dog-05-fluffy-trio.jpg',
    dogName: 'Wally + Crew',
    ownerName: 'The Lin Family',
    neighborhood: 'Tribeca',
  },
];

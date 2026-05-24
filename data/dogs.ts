/**
 * The PawBite Wall — rotating dog photo marquee.
 *
 * To add a new dog:
 *   1. Save the photo to /public/dogs/dog-XX-<descriptor>.jpg (square crop)
 *   2. Add a new entry below with src + name + neighborhood
 *
 * Aim for 8+ dogs for a smooth-looking marquee loop.
 */

export type WallDog = {
  src: string;
  name: string;
  neighborhood: string;
};

export const wallDogs: WallDog[] = [
  { src: '/dogs/dog-01-gray-scruffy.jpg', name: 'Otis', neighborhood: 'UES' },
  { src: '/dogs/dog-02-yellow-lab.jpg', name: 'Banjo', neighborhood: 'Bushwick' },
  { src: '/dogs/dog-03-yawning-podenco.jpg', name: 'Pico', neighborhood: 'West Village' },
  { src: '/dogs/dog-04-pug.jpg', name: 'Dumpling', neighborhood: 'Chinatown' },
];

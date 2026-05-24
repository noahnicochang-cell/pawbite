/**
 * The PawBite Wall — rotating dog photo marquee.
 *
 * To add a new dog:
 *   1. Save the photo to /public/dogs/dog-XX-<descriptor>.jpg (square crop)
 *   2. Add a new entry below with src + name + neighborhood
 *
 * Aim for 8+ dogs for a smooth-looking marquee loop. We have 14.
 */

export type WallDog = {
  src: string;
  name: string;
  neighborhood: string;
};

export const wallDogs: WallDog[] = [
  { src: '/dogs/dog-08-treat-time.jpg', name: 'Cleo', neighborhood: 'Greenpoint' },
  { src: '/dogs/dog-14-shepherd-shades.jpg', name: 'Maverick', neighborhood: 'LIC' },
  { src: '/dogs/dog-12-fisheye-dachshunds.jpg', name: 'Frankie & Hank', neighborhood: 'Bushwick' },
  { src: '/dogs/dog-01-gray-scruffy.jpg', name: 'Otis', neighborhood: 'UES' },
  { src: '/dogs/dog-06-poodle-couch.jpg', name: 'Prince', neighborhood: 'NoHo' },
  { src: '/dogs/dog-04-pug.jpg', name: 'Dumpling', neighborhood: 'Chinatown' },
  { src: '/dogs/dog-09-denim-kiss.jpg', name: 'Marlon', neighborhood: 'LES' },
  { src: '/dogs/dog-05-fluffy-trio.jpg', name: 'Wally & Crew', neighborhood: 'Tribeca' },
  { src: '/dogs/dog-11-sunglasses-laptop.jpg', name: 'Tofu', neighborhood: 'DUMBO' },
  { src: '/dogs/dog-02-yellow-lab.jpg', name: 'Banjo', neighborhood: 'Bushwick' },
  { src: '/dogs/dog-10-weimaraner.jpg', name: 'Greta', neighborhood: 'Cobble Hill' },
  { src: '/dogs/dog-13-yawning-golden.jpg', name: 'Goose', neighborhood: 'Park Slope' },
  { src: '/dogs/dog-03-yawning-podenco.jpg', name: 'Pico', neighborhood: 'West Village' },
  { src: '/dogs/dog-07-grass-petting.jpg', name: 'Henry', neighborhood: 'Prospect Heights' },
];

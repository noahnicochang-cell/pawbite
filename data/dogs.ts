/**
 * The PawBite Wall — rotating dog photo marquee (homepage).
 *
 * Drop a new dog into /public/dogs/dog-XX-<descriptor>.jpg
 * and add an entry below — the marquee auto-extends.
 */

export type WallDog = {
  src: string;
  name: string;
  neighborhood: string;
};

export const wallDogs: WallDog[] = [
  // Lead with the treat-time + dachshund-stampede shots — strongest first impression
  { src: '/dogs/dog-08-treat-time.jpg', name: 'Cleo', neighborhood: 'Greenpoint' },
  { src: '/dogs/dog-26-dachshund-stampede.jpg', name: 'The 24', neighborhood: 'SoHo' },
  { src: '/dogs/dog-30-cafe-scarf.jpg', name: 'Yuzu', neighborhood: 'Midtown' },
  { src: '/dogs/dog-14-shepherd-shades.jpg', name: 'Maverick', neighborhood: 'LIC' },
  { src: '/dogs/dog-17-saint-laurent.jpg', name: 'The Pack', neighborhood: 'SoHo' },
  { src: '/dogs/dog-12-fisheye-dachshunds.jpg', name: 'Frankie & Hank', neighborhood: 'Bushwick' },
  { src: '/dogs/dog-29-pitbull-kiss.jpg', name: 'Bear', neighborhood: 'Williamsburg' },
  { src: '/dogs/dog-25-leather-dalmatian.jpg', name: 'Spot', neighborhood: 'LES' },
  { src: '/dogs/dog-01-gray-scruffy.jpg', name: 'Otis', neighborhood: 'UES' },
  { src: '/dogs/dog-19-crosswalk-hug.jpg', name: 'Atlas', neighborhood: 'NoLita' },
  { src: '/dogs/dog-06-poodle-couch.jpg', name: 'Prince', neighborhood: 'NoHo' },
  { src: '/dogs/dog-04-pug.jpg', name: 'Dumpling', neighborhood: 'Chinatown' },
  { src: '/dogs/dog-31-blue-sweater.jpg', name: 'Miso', neighborhood: 'East Village' },
  { src: '/dogs/dog-23-pink-glasses.jpg', name: 'Twins', neighborhood: 'West Village' },
  { src: '/dogs/dog-22-doodle-piggyback.jpg', name: 'Teddy', neighborhood: 'Carroll Gardens' },
  { src: '/dogs/dog-09-denim-kiss.jpg', name: 'Marlon', neighborhood: 'LES' },
  { src: '/dogs/dog-05-fluffy-trio.jpg', name: 'Wally & Crew', neighborhood: 'Tribeca' },
  { src: '/dogs/dog-28-overhead-dachshunds.jpg', name: 'Morning Crew', neighborhood: 'Park Slope' },
  { src: '/dogs/dog-11-sunglasses-laptop.jpg', name: 'Tofu', neighborhood: 'DUMBO' },
  { src: '/dogs/dog-33-popcorn-dalmatian.jpg', name: 'Margot', neighborhood: 'Boerum Hill' },
  { src: '/dogs/dog-02-yellow-lab.jpg', name: 'Banjo', neighborhood: 'Bushwick' },
  { src: '/dogs/dog-21-wine-dachshund.jpg', name: 'Vito', neighborhood: 'NoLita' },
  { src: '/dogs/dog-10-weimaraner.jpg', name: 'Greta', neighborhood: 'Cobble Hill' },
  { src: '/dogs/dog-15-newspaper-golden.jpg', name: 'Sundance', neighborhood: 'Greenpoint' },
  { src: '/dogs/dog-32-new-yorker.jpg', name: 'Beans', neighborhood: 'LES' },
  { src: '/dogs/dog-13-yawning-golden.jpg', name: 'Goose', neighborhood: 'Park Slope' },
  { src: '/dogs/dog-20-pomeranian-plane.jpg', name: 'Peanut', neighborhood: 'JFK→LAX' },
  { src: '/dogs/dog-27-rich-dog.jpg', name: 'Coco', neighborhood: 'UWS' },
  { src: '/dogs/dog-03-yawning-podenco.jpg', name: 'Pico', neighborhood: 'West Village' },
  { src: '/dogs/dog-18-lion-costume.jpg', name: 'Simba', neighborhood: 'West Village' },
  { src: '/dogs/dog-24-cafe-wine.jpg', name: 'Olive', neighborhood: 'NoLita' },
  { src: '/dogs/dog-16-bowl-dalmatian.jpg', name: 'Domino', neighborhood: 'Brooklyn Heights' },
  { src: '/dogs/dog-07-grass-petting.jpg', name: 'Henry', neighborhood: 'Prospect Heights' },
];

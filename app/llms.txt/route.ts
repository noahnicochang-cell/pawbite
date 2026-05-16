import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/seo';

export const dynamic = 'force-static';

export async function GET() {
  const body = `# ${SITE_NAME}

${SITE_DESCRIPTION}

## What we make

- A daily probiotic chew for dogs (5 strains, 5 billion CFUs, vet-formulated)
- A hip + joint chew for dogs (glucosamine, chondroitin, MSM, green-lipped mussel)
- A subscription bundle of both (The Daily Duo)

## Pages

- [Home](${SITE_URL}): The good stuff your dog needs. Nothing weird.
- [Shop the line](${SITE_URL}/products): Both SKUs and the Daily Duo bundle.
- [Daily Probiotic](${SITE_URL}/products/daily-probiotic): 5 strains, 5B CFU, plus chicory inulin and pumpkin. Chicken flavor.
- [Hip + Joint](${SITE_URL}/products/hip-and-joint): Glucosamine 500mg, chondroitin 400mg, MSM 250mg, green-lipped mussel, turmeric, hyaluronic acid, omega-3. Duck flavor.
- [The Daily Duo](${SITE_URL}/products/daily-duo): Both products bundled. Save 32% when you subscribe.

## Editorial policy

All content is reviewed by a licensed veterinarian. Strain-level studies are cited by author and year.
We don't make claims we can't back up.

## Contact

help@pawbite.com
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

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

- [${SITE_NAME}](${SITE_URL}): Home

## Editorial policy

All content is reviewed by a licensed veterinarian. Strain-level studies are cited by author and year.
We don't make claims we can't back up. See ${SITE_URL}/editorial when that page lives.

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

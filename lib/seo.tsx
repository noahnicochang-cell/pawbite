export const SITE_NAME = 'PawBite';
export const SITE_DESCRIPTION =
  'The good stuff your dog needs. Nothing weird. Vet-formulated daily chews built for the essentials — gut and joints, done right.';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pawbite.vercel.app';
export const ORG_LEGAL_NAME = 'PawBite Inc.';
export const ORG_LOCATION = 'Hudson Valley, NY';

/** JSON-LD: Organization */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    legalName: ORG_LEGAL_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/og-default.png`,
    description: SITE_DESCRIPTION,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hudson Valley',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'help@pawbite.com',
      availableLanguage: 'en',
    },
    sameAs: [
      // Populate as social handles are claimed
    ],
  };
}

/** JSON-LD: WebSite (enables Sitelinks search box) */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/learn?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/** Render JSON-LD into a script tag — safe for use in server components */
export function JsonLd({ data }: { data: object }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

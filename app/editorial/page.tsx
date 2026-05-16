import type { Metadata } from 'next';
import { LegalPage } from '@/components/content/legal-page';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Editorial policy',
  description:
    'How PawBite chooses ingredients, reviews articles, cites sources, and handles corrections — our editorial process.',
  alternates: { canonical: `${SITE_URL}/editorial` },
};

export default function EditorialPage() {
  return (
    <LegalPage
      title="Editorial policy."
      lastUpdated="May 16, 2026"
      intro="Every article on pawbite.com is reviewed by a licensed veterinarian. We cite peer-reviewed studies by author and year. We don't make claims we can't back up. Here's how the whole pipeline works."
      sections={[
        {
          heading: 'How we choose ingredients.',
          body: `Every ingredient in a PawBite product has to pass four checks:

**1. Real evidence in dogs.** Not just "studied in humans and probably works in dogs." Specifically, we want at least one peer-reviewed canine trial or strong inferential data from a closely related mammalian model.

**2. Clinically meaningful dose.** A lot of supplements include trendy ingredients at homeopathic doses just to put them on the label. We dose at the level the trial data supports — or we don't include the ingredient at all.

**3. Safety profile for daily long-term use.** Many adult dogs are on PawBite for years. Anything that's safe for a 30-day course but not for years gets cut.

**4. Palatability.** If a dog won't eat it, it doesn't matter how good the science is. Every formula goes through taste-test rounds with real dogs of varying pickiness levels.`,
        },
        {
          heading: 'Who reviews our content.',
          body: `All articles, breed pages, concern pages, and ingredient pages are reviewed by **Dr. M. Hayes, DVM** — a board-certified veterinary nutritionist. The byline on every page shows the publish date and the most recent review date.

When the science updates (e.g., a new strain trial publishes, a dose recommendation changes), we re-review the affected pages and update the review date.

Dr. Hayes is an editorial reviewer, not a treating clinician. Our content is general information, not specific veterinary advice for your dog. If you have a specific health question, ask your vet.`,
        },
        {
          heading: 'How we cite sources.',
          body: `We cite peer-reviewed research by author and year. Where possible, we link to the original journal article. We do not cite blog posts, marketing materials, manufacturer claims, or non-peer-reviewed sources as evidence.

We use a footnote-style numbered list at the bottom of every article. If we say "5 billion CFU is the clinically useful range for probiotics in dogs," we'll have a citation behind that claim.

When we describe a mechanism (e.g., how a probiotic strain colonizes the gut), we use language that's careful about what's established vs. what's still being studied. We don't claim certainty we don't have.`,
        },
        {
          heading: 'Conflict-of-interest disclosure.',
          body: `PawBite is a commercial dog supplement brand. Every article we publish is on a topic where we sell a relevant product. That's the conflict.

We manage it by:

- Recommending products at the end of an article rather than every other paragraph
- Being honest in our competitor comparisons (we name where competitors do something well)
- Linking to evidence even when the evidence supports a competitor's formulation
- Disclosing in this page that everything we publish has commercial intent

If we ever review a category where we don't sell something (e.g., a CBD article), we'll note that we're not selling and what we'd recommend if you wanted to try one.`,
        },
        {
          heading: 'Corrections policy.',
          body: `If we get something wrong, we fix it and note the correction at the bottom of the article. We don't quietly edit and pretend.

If you spot an error — whether a misquoted study, a wrong dose, a stale recommendation, or anything else — email help@pawbite.com with the URL and what's wrong. We'll get back to you within a week.

For minor typos and formatting, we just fix and move on. For substantive corrections (a changed claim, an updated number, a removed statement), we add a "Correction" line dated with what changed.`,
        },
        {
          heading: 'How we handle AI.',
          body: `We use AI tools to help with research synthesis, first-draft writing, image generation for non-product art, and editorial review prep. Every page that ships is read end-to-end and edited by a human before publication.

We do not let an AI write content that goes live unreviewed. We do not generate fake studies, fabricate quotes, or invent statistics. When we use a chart or table, it's based on real data we can point to.

We allow our content to be cited by AI search engines (ChatGPT, Claude, Perplexity, Gemini). Our robots.txt explicitly allows their crawlers. That's the bet: if our content is honest and well-cited, AI engines will use it as a source instead of competing brands' marketing material.`,
        },
      ]}
      contactNote="Spotted an error? Have a study we should cite? Email help@pawbite.com."
    />
  );
}

import type { Metadata } from 'next';
import { LegalPage } from '@/components/content/legal-page';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Terms of service',
  description: 'The rules of the road for shopping at pawbite.com.',
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of service."
      lastUpdated="May 16, 2026"
      intro="When you buy from PawBite, subscribe to a chew, take our quiz, or read an article, these are the rules. We've tried to keep them short and human-readable. Counsel will polish them before launch."
      sections={[
        {
          heading: 'Who we are.',
          body: 'PawBite is operated by PawBite Inc., a US company based in New York, NY. Our products are intended for adult dogs and are nutritional supplements — not medications, not treatments for diagnosed disease, not a substitute for veterinary care.',
        },
        {
          heading: 'Orders and pricing.',
          body: `All prices on pawbite.com are in US dollars. We reserve the right to correct obvious pricing errors before charging your card (e.g., if a chew is listed for $3 instead of $30, we'll cancel that order and let you reorder at the correct price).

Subscriptions auto-renew at the cadence you select (30, 45, or 60 days). The price at the time you signed up is locked in unless we send you 30 days notice of a change. You can skip, pause, or cancel from your account in one click.

We do not honor competitor promotional codes. We do not price-match. Our prices are what they are.`,
        },
        {
          heading: 'Shipping and delivery.',
          body: `We ship to the contiguous 48 states + Alaska + Hawaii. Currently no international shipping; Canada is on the roadmap.

Standard shipping is free on orders $40+. Below that, $5 flat shipping. Subscription orders always ship free regardless of subtotal.

Typical transit time is 3-7 business days. We don't promise a delivery date because we use multiple carriers and routing varies.

If your package arrives damaged or doesn't arrive at all, email help@pawbite.com and we'll send a replacement at no charge.`,
        },
        {
          heading: 'Returns and the 90-day guarantee.',
          body: `If you're not satisfied for any reason within 90 days of your first order, email help@pawbite.com and we'll refund the order in full. You don't need to ship the chews back — donate them or pass them along. We trust you.

The 90-day guarantee applies to your first order with us (whether one-time or first subscription shipment). Subsequent subscription shipments are covered by our standard return policy: if a chew arrives damaged or your dog has a sudden negative reaction, email us within 14 days and we'll work it out.

We do not accept returns of opened canisters for any reason other than the guarantee scenarios above. This is for the safety of other dogs — we cannot resell or redonate opened product.`,
        },
        {
          heading: 'Health and veterinary disclaimers.',
          body: `**PawBite products are nutritional supplements, not drugs.** They are not approved by the FDA to treat, prevent, cure, or diagnose any disease.

If your dog has a chronic condition, is on prescription medication, has had recent surgery, is pregnant, or is under 8 weeks old — talk to your vet before starting any supplement.

If your dog has a sudden adverse reaction to a PawBite chew, stop giving the chew and contact your vet. Then email help@pawbite.com — we want to know.

Our content is reviewed by a licensed veterinarian for accuracy, but it is general information and not specific medical advice for your dog. We are not a substitute for a vet who has examined your dog.`,
        },
        {
          heading: 'Acceptable use.',
          body: `Don't scrape the site at high rates. Don't try to break the checkout. Don't impersonate us or our team. Don't post defamatory content about us or other customers. Don't use any of our images, copy, or product photography in your own commercial materials without written permission.

If you violate any of these, we may suspend or terminate your account, cancel pending orders, or pursue legal remedies — depending on severity.`,
        },
        {
          heading: 'Intellectual property.',
          body: 'The PawBite name, logo, brand assets, illustrations, photography, copy, and product designs are owned by PawBite Inc. and protected by US trademark, copyright, and trade dress laws. You may not copy, modify, or resell our materials without written permission.',
        },
        {
          heading: 'Limitation of liability.',
          body: "To the maximum extent allowed by law, PawBite Inc.'s total liability for any single order or subscription cycle is limited to the amount you paid for that order. We are not liable for indirect, incidental, or consequential damages. This does not limit any rights you have under product-safety or consumer-protection laws that cannot be waived.",
        },
        {
          heading: 'Governing law.',
          body: 'These terms are governed by the laws of the State of New York, without regard to conflict-of-laws principles. Any dispute will be heard in courts in New York County, New York.',
        },
        {
          heading: 'Changes to these terms.',
          body: 'We may update these terms when our practices change. Material changes get 30 days notice via email to current subscribers and a banner on the site. The "Last updated" date at the top of this page is the source of truth.',
        },
      ]}
      contactNote="Email help@pawbite.com. We'll respond within one business day."
    />
  );
}

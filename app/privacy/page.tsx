import type { Metadata } from 'next';
import { LegalPage } from '@/components/content/legal-page';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description:
    "What PawBite collects, why, and what we do with it. Short version: we don't sell, share, or rent your data.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy."
      lastUpdated="May 16, 2026"
      intro="Short version: we collect the minimum we need to run a subscription business, we never sell or rent your data, and you can ask for your information to be deleted at any time. The rest of this page is the long version."
      sections={[
        {
          heading: 'What we collect.',
          body: `**Account data:** name, email, shipping address, billing information (handled by our payment processor — we never see your full card number).

**Order data:** what you bought, when, at what price, and where it shipped.

**Behavioral data:** which pages you visited on pawbite.com, which links you clicked, and where you came from (referrer). Collected via cookies and basic analytics (Vercel Analytics; eventually PostHog and GA4).

**Customer support data:** any messages you send to help@pawbite.com.

**Newsletter / quiz data:** the email you enter on the quiz or newsletter forms, plus your quiz answers if you complete the quiz.

We do not collect: your phone number, your social security number, your dog's medical records, or any health information about you personally.`,
        },
        {
          heading: 'Why we collect it.',
          body: `**To ship your orders.** Address + payment + order data are the minimum to fulfill a transaction.

**To run subscriptions.** We need to know what you're subscribed to, when the next shipment is due, and how to charge you for it.

**To send the emails you asked for.** The welcome series, the monthly Letters from PawBite, the shipping confirmations.

**To improve the site.** Behavioral data helps us figure out which pages confuse people and which articles are useful.

**To answer support questions.** Customer support messages get kept long enough to follow up and to train new team members.`,
        },
        {
          heading: 'What we never do.',
          body: `We never sell your data to anyone, ever.

We never share your email with other brands or "marketing partners."

We never rent our subscriber list.

We never use your information to train a third-party AI model.

We never combine your data with data brokers' profiles to do "lookalike" targeting on people who haven't bought from us.

If any of that ever changes — which it won't — we'll email every customer first.`,
        },
        {
          heading: 'Cookies and tracking.',
          body: `We use first-party cookies for the basic site to work (cart, account login). We use analytics cookies to count pageviews and understand which pages are useful. We do not use ad-network retargeting pixels in our owned ad accounts. If you visit pawbite.com after clicking a Meta or Google ad, those platforms know about that click (they always do), but we don't actively retarget you afterward through pixel-based audiences.

You can disable cookies in your browser — the site will still mostly work, but the cart and account features may behave oddly.`,
        },
        {
          heading: 'Your rights.',
          body: `You can email us at help@pawbite.com and ask us to:

- Show you everything we have on you.
- Delete your account and all associated data.
- Stop sending you marketing emails (also: every email has a one-click unsubscribe link).
- Export your data in a portable format.

We'll respond within 30 days. California, EU, and UK residents have additional statutory rights under CCPA/GDPR; the same email gets you those too.`,
        },
        {
          heading: 'Third parties we use.',
          body: `**Shopify** — payment processing, cart, checkout.

**Klaviyo** (post-Phase 9) — transactional and marketing email.

**Vercel** — site hosting and basic analytics.

**Stamped** (post-Phase 9) — verified reviews.

**Help Scout** (post-Phase 9) — customer support inbox.

Each of these has their own privacy policy and we hold them contractually to GDPR/CCPA-equivalent standards. None of them get more data than they need to perform their function.`,
        },
        {
          heading: 'Children.',
          body: 'PawBite is for adults buying for their dogs. We do not knowingly collect data from anyone under 18. If you believe we have, email help@pawbite.com and we will delete it.',
        },
        {
          heading: 'Changes to this policy.',
          body: 'We will update this page when our practices change. Material changes get an email to every current subscriber and a banner on the site for 30 days. The "Last updated" date at the top of this page is always the truth.',
        },
      ]}
      contactNote="Email help@pawbite.com. We respond within one business day."
    />
  );
}

import type { Product } from './products';
import { calmingChews, dailyProbiotic, hipAndJoint } from './products';

export type Ingredient = {
  name: string;
  scientificName?: string;
  amount: string;
  role: string;
  reference?: string;
};

export type DosingRow = {
  weightRange: string;
  amount: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type CompetitorCompare = {
  competitor: string;
  rows: Array<{ feature: string; pawbite: string; competitor: string }>;
};

export type ProductDetail = Product & {
  longDescription: string;
  flavor: string;
  ingredients: Ingredient[];
  prebioticsAndExtras: string;
  benefits: Array<{
    icon: 'sparkle' | 'heart' | 'shield' | 'star' | 'paw' | 'stethoscope' | 'bone';
    title: string;
    body: string;
  }>;
  dosing: DosingRow[];
  dosingNote: string;
  vetQuote: { name: string; credentials: string; quote: string };
  comparison: CompetitorCompare;
  faqs: FAQ[];
};

export const calmingChewsDetail: ProductDetail = {
  ...calmingChews,
  flavor: 'Peanut Butter',
  longDescription:
    'A daily soft chew built on three evidence-backed adaptogens — L-theanine, ashwagandha, and chamomile — that work with your dog\'s nervous system, not against it. No CBD, no melatonin, no sedatives. Vet-formulated. Third-party tested.',
  ingredients: [
    { name: 'L-theanine', amount: '100 mg', role: 'Alpha-wave promotion / stress reduction' },
    { name: 'Organic chamomile', amount: '100 mg', role: 'Soothing without sedation' },
    { name: 'Ashwagandha root extract', amount: '50 mg', role: 'Cortisol reduction' },
    { name: 'Bacillus coagulans', amount: '1 billion CFU', role: 'Gut–brain axis support' },
  ],
  prebioticsAndExtras:
    'No sedatives, no CBD, no melatonin. Adaptogens plus a probiotic strain for gut–brain support.',
  benefits: [
    { icon: 'sparkle', title: 'Takes the edge off', body: 'Works on anxiety triggers — storms, travel, separation — without drugging your dog.' },
    { icon: 'heart', title: 'No next-day fog', body: 'Adaptogens don\'t accumulate. Your dog wakes up sharp, not groggy.' },
    { icon: 'shield', title: 'Safe daily use', body: 'No pharmaceutical calming agents. Built for years of daily use.' },
    { icon: 'star', title: 'Works within 30 min', body: 'L-theanine peaks fast. Give 30 min before a trigger when you know one\'s coming.' },
  ],
  dosing: [
    { weightRange: 'Up to 11 lbs (5 kg)', amount: '1 chew/day' },
    { weightRange: '12–22 lbs (6–10 kg)', amount: '2 chews/day' },
    { weightRange: '23–44 lbs (11–20 kg)', amount: '3 chews/day' },
    { weightRange: 'Over 44 lbs (20+ kg)', amount: '4 chews/day' },
  ],
  dosingNote: 'Give daily for best results. For acute anxiety events (storms, vet visits), give 30 minutes before.',
  vetQuote: {
    name: 'Dr. M. Hayes, DVM',
    credentials: 'Board-certified veterinary nutritionist',
    quote: 'L-theanine is the most-studied calming compound for dogs after CBD — and unlike CBD it has zero psychoactive risk and no drug interaction concerns. PawBite gets the dose right.',
  },
  comparison: {
    competitor: 'Finn Calming Chews',
    rows: [
      { feature: 'L-theanine per chew', pawbite: '100 mg', competitor: '75 mg' },
      { feature: 'Ashwagandha included', pawbite: 'Yes (50 mg root extract)', competitor: 'No' },
      { feature: 'CBD', pawbite: 'None', competitor: 'None' },
      { feature: 'Melatonin', pawbite: 'None', competitor: 'None' },
      { feature: 'Third-party tested', pawbite: 'Every batch', competitor: 'Yes' },
      { feature: 'Subscribe & Save', pawbite: '20% off + free shipping', competitor: '20% off' },
      { feature: 'Money-back guarantee', pawbite: '90 days', competitor: '30 days' },
    ],
  },
  faqs: [
    { question: 'How is this different from CBD calming chews?', answer: 'CBD is a cannabinoid that acts on the endocannabinoid system — it\'s unregulated, dosing is inconsistent, and it can interact with medications. L-theanine and ashwagandha are amino acids and adaptogenic herbs with decades of safety data in dogs and humans. No regulation gray area, no drug interactions.' },
    { question: 'Will these make my dog sleepy?', answer: 'No. L-theanine promotes relaxed alertness — alpha-wave activity — not sedation. Ashwagandha lowers cortisol without inducing sleep. Your dog will be calmer but just as sharp.' },
    { question: 'How long until I see results?', answer: 'L-theanine peaks within 30–60 minutes for acute effects. Ashwagandha\'s cortisol-lowering effect builds over 2–4 weeks of daily use. Most owners report noticeable calm within the first week.' },
    { question: 'Can I give these before a vet visit or thunderstorm?', answer: 'Yes — give 30 minutes before a known trigger. The L-theanine component is fast-acting enough to be useful for acute events.' },
    { question: 'Do these contain any allergens?', answer: 'Calming Chews are peanut butter flavored and contain a peanut butter base. If your dog has a known nut sensitivity, talk to your vet before giving them. No corn, soy, wheat, or dairy.' },
    { question: 'What\'s the 90-day guarantee?', answer: 'If your dog doesn\'t take to it, or you don\'t see results within 90 days, email help@pawbite.com and we\'ll refund your first order in full. Keep the chews.' },
  ],
};

export const dailyProbioticDetail: ProductDetail = {
  ...dailyProbiotic,
  flavor: 'Chicken',
  longDescription:
    'A daily soft chew built on five named probiotic strains at 5 billion CFU, plus chicory inulin and pumpkin powder to feed the strains once they get there. Vet-formulated. Third-party tested.',
  ingredients: [
    {
      name: 'Bacillus coagulans',
      scientificName: 'Bacillus coagulans',
      amount: '1 billion CFU',
      role: 'Gut barrier integrity',
    },
    {
      name: 'Bifidobacterium animalis subsp. lactis',
      scientificName: 'Bifidobacterium animalis',
      amount: '1 billion CFU',
      role: 'Stool consistency',
    },
    {
      name: 'Lactobacillus acidophilus',
      scientificName: 'Lactobacillus acidophilus',
      amount: '1 billion CFU',
      role: 'Pathogen exclusion',
    },
    {
      name: 'Lactobacillus plantarum',
      scientificName: 'Lactobacillus plantarum',
      amount: '1 billion CFU',
      role: 'Short-chain fatty acid production',
    },
    {
      name: 'Lactobacillus rhamnosus',
      scientificName: 'Lactobacillus rhamnosus',
      amount: '1 billion CFU',
      role: 'Immune modulation',
    },
  ],
  prebioticsAndExtras:
    'Plus chicory inulin (200 mg) prebiotic and pumpkin powder (250 mg) for digestibility.',
  benefits: [
    {
      icon: 'sparkle',
      title: 'Firmer stool',
      body: 'Most dogs see firmer, more regular stool within 14 days.',
    },
    {
      icon: 'heart',
      title: 'Less gas',
      body: 'Bifidobacterium and prebiotic blend reduce fermentation gas.',
    },
    {
      icon: 'shield',
      title: 'Immune support',
      body: 'L. rhamnosus is among the most-studied immune-modulating species in pets and humans.',
    },
    {
      icon: 'star',
      title: 'Daily-use ready',
      body: 'Built to live in a daily routine — not a course of treatment.',
    },
  ],
  dosing: [
    { weightRange: 'Up to 11 lbs (5 kg)', amount: '1 chew/day' },
    { weightRange: '12–22 lbs (6–10 kg)', amount: '2 chews/day' },
    { weightRange: '23–44 lbs (11–20 kg)', amount: '3 chews/day' },
    { weightRange: '45–88 lbs (21–40 kg)', amount: '4 chews/day' },
    { weightRange: 'Over 88 lbs (40+ kg)', amount: '5 chews/day' },
  ],
  dosingNote:
    'Dose by weight, daily, with or without food. Most owners give it with the morning meal.',
  vetQuote: {
    name: 'Dr. M. Hayes, DVM',
    credentials: 'Board-certified veterinary nutritionist',
    quote:
      'Most over-the-counter dog probiotics underdose the strains that actually matter. PawBite gets the dosing right and names the strains — which is what a vet wants to see.',
  },
  comparison: {
    competitor: 'PetLab Co.',
    rows: [
      { feature: 'CFU per chew', pawbite: '5 billion', competitor: '5 billion' },
      {
        feature: 'Number of strains',
        pawbite: '5 (all named)',
        competitor: '8 (proprietary blend)',
      },
      { feature: 'All strains named on label', pawbite: 'Yes', competitor: 'No (proprietary blend)' },
      {
        feature: 'Prebiotic included',
        pawbite: 'Chicory inulin 200mg',
        competitor: 'Yes (amount not disclosed)',
      },
      {
        feature: 'Subscribe & Save',
        pawbite: '20% off + free shipping',
        competitor: 'Up to 40% off (claims)',
      },
      { feature: 'Money-back guarantee', pawbite: '90 days', competitor: '30 days' },
      { feature: 'Third-party tested', pawbite: 'Every batch', competitor: 'Yes' },
      { feature: 'cGMP-certified', pawbite: 'Yes', competitor: 'Yes' },
    ],
  },
  faqs: [
    {
      question: 'How long until I see results?',
      answer:
        'Most dogs show firmer stool within 7–14 days. Gas and digestion improvements often show up sooner. Coat and skin changes — the downstream effects — usually take 4–8 weeks.',
    },
    {
      question: 'Can I give this with my dog’s current food?',
      answer:
        'Yes. Daily Probiotic is designed to be given alongside any kibble, fresh, or raw food. It works best at the same time every day — most owners give it with the morning meal.',
    },
    {
      question: 'My dog is on antibiotics. Should I wait?',
      answer:
        'You can give Daily Probiotic during a course of antibiotics — separate the dose by at least 2 hours from the antibiotic to avoid the antibiotic killing the probiotic on contact. After the antibiotic course ends, continuing the probiotic helps the gut microbiome recover.',
    },
    {
      question: 'Are these chews safe for puppies?',
      answer:
        'Yes for puppies 8 weeks and older. The strains are gentle and the CFU count is appropriate. Dose by current weight using the chart above.',
    },
    {
      question: 'What’s in the chew besides the probiotics?',
      answer:
        'Chicken liver, pumpkin powder, chicory inulin (prebiotic), oat flour, glycerin, mixed tocopherols (natural preservative). No artificial flavors, colors, or preservatives. The full label is on the back of every canister.',
    },
    {
      question: 'My dog has allergies. Are these safe?',
      answer:
        'The chews are chicken-flavored, so they’re not appropriate for dogs with a confirmed chicken allergy. We don’t use corn, soy, wheat, or dairy. If your dog has known allergies, check the full ingredient panel.',
    },
    {
      question: 'How does Subscribe & Save work?',
      answer:
        'Choose Subscribe & Save at checkout. We ship a new canister every 30 days at 20% off retail, with free shipping. Skip, swap, pause, or cancel from your account in one click — no calls, no fees, no hoops.',
    },
    {
      question: 'What’s the 90-day guarantee?',
      answer:
        'If your dog doesn’t take to it, or you don’t see results within 90 days, email help@pawbite.com and we’ll refund your first order in full. Keep the chews — donate them to a shelter or pass them along to a friend.',
    },
  ],
};

export const hipAndJointDetail: ProductDetail = {
  ...hipAndJoint,
  flavor: 'Duck',
  longDescription:
    'A daily soft chew built on seven joint-support actives — glucosamine, chondroitin, MSM — plus green-lipped mussel and turmeric for a broader inflammation profile. Vet-formulated. Third-party tested.',
  ingredients: [
    { name: 'Glucosamine HCl', amount: '320 mg', role: 'Cartilage building block' },
    { name: 'Chondroitin sulfate', amount: '225 mg', role: 'Joint cushion + lubrication' },
    {
      name: 'MSM (methylsulfonylmethane)',
      amount: '160 mg',
      role: 'Anti-inflammatory sulfur source',
    },
    { name: 'Green-lipped mussel', amount: '150 mg', role: 'Omega-3 + glycosaminoglycans' },
    {
      name: 'Turmeric extract (95% curcumin)',
      amount: '100 mg',
      role: 'Anti-inflammatory antioxidant',
    },
    { name: 'Hyaluronic acid', amount: '10 mg', role: 'Joint fluid viscosity' },
    { name: 'Salmon oil (EPA + DHA)', amount: '50 mg', role: 'Omega-3 anti-inflammatory' },
  ],
  prebioticsAndExtras: 'No prebiotics in this one — clinically-dosed joint actives only.',
  benefits: [
    {
      icon: 'sparkle',
      title: 'Easier mornings',
      body: 'Glucosamine + chondroitin help cushion joints overnight so dogs wake up looser.',
    },
    {
      icon: 'heart',
      title: 'Less inflammation',
      body: 'Turmeric + MSM + omega-3 stack a real anti-inflammatory profile.',
    },
    {
      icon: 'paw',
      title: 'Better mobility',
      body: 'Most dogs show easier stair-climbing and jumping within 21 days.',
    },
    {
      icon: 'shield',
      title: 'Daily-use safe',
      body: 'No NSAIDs, no liver-taxing actives. Built for years of daily use.',
    },
  ],
  dosing: [
    { weightRange: 'Up to 11 lbs (5 kg)', amount: '1 chew/day' },
    { weightRange: '12–22 lbs (6–10 kg)', amount: '1 chew/day' },
    { weightRange: '23–44 lbs (11–20 kg)', amount: '1 chew/day' },
    { weightRange: 'Over 44 lbs (20+ kg)', amount: '1 chew/day' },
  ],
  dosingNote:
    'One chew a day at every weight — the 4 g chew is dosed so you do not have to scale. A 50-chew tin lasts about 7 weeks.',
  vetQuote: {
    name: 'Dr. M. Hayes, DVM',
    credentials: 'Board-certified veterinary nutritionist',
    quote:
      'What matters in a joint chew is the whole stack, not one headline number. PawBite pairs glucosamine and chondroitin with MSM, green-lipped mussel, and turmeric — five actives with canine evidence behind them — in a single daily chew. That combination is the right kind of belt-and-suspenders.',
  },
  comparison: {
    competitor: 'Cosequin',
    rows: [
      { feature: 'Glucosamine HCl per serving', pawbite: '320 mg', competitor: '500 mg' },
      { feature: 'Chondroitin sulfate per serving', pawbite: '225 mg', competitor: '400 mg' },
      { feature: 'MSM included', pawbite: 'Yes (160mg)', competitor: 'No (DS version only)' },
      { feature: 'Green-lipped mussel', pawbite: 'Yes (150mg)', competitor: 'No' },
      { feature: 'Turmeric / curcumin', pawbite: 'Yes (100mg)', competitor: 'No' },
      { feature: 'Form', pawbite: 'Soft chew', competitor: 'Capsule / soft chew' },
      { feature: 'Flavor', pawbite: 'Duck', competitor: 'Chicken / beef' },
      {
        feature: 'Subscribe & Save',
        pawbite: '20% off + free shipping',
        competitor: 'Varies by retailer',
      },
      { feature: 'Money-back guarantee', pawbite: '90 days', competitor: 'Retailer-dependent' },
    ],
  },
  faqs: [
    {
      question: 'How long until I see results?',
      answer:
        'Glucosamine and chondroitin build up over time. Most owners report easier mornings and better stair-climbing within 14–21 days. The full anti-inflammatory effect from MSM and omega-3 takes 4–6 weeks.',
    },
    {
      question: 'Is this safe for senior dogs?',
      answer:
        'Yes — senior dogs are the primary use case. Hip + Joint contains no NSAIDs and no liver-taxing actives, so it’s safe to give daily long-term. Many vets recommend starting hip and joint support around age 5 for medium-large breeds.',
    },
    {
      question: 'My dog is on Carprofen or another NSAID. Can I give this?',
      answer:
        'Yes. Hip + Joint is a nutritional supplement, not an NSAID — it complements prescription anti-inflammatories without competing with them. Many owners use Hip + Joint to reduce the NSAID dose their vet would otherwise prescribe. Always loop in your vet for chronic conditions.',
    },
    {
      question: 'Is this for prevention or for dogs that already have joint problems?',
      answer:
        'Both. Used preventively in healthy adult dogs (especially large breeds prone to hip dysplasia), Hip + Joint reduces wear on cartilage over time. Used in dogs with diagnosed arthritis or slowing mobility, it eases stiffness and improves daily function. Same chew, same dosing.',
    },
    {
      question: 'Why duck flavor instead of chicken?',
      answer:
        'A lot of senior dogs develop sensitivities to chicken. We made Hip + Joint duck-flavored so the dogs most likely to need it can still take it. Also: duck just lands better with picky eaters.',
    },
    {
      question: 'Can my dog take this and the Daily Probiotic together?',
      answer:
        'Absolutely — that’s exactly what The Daily Duo is for. The probiotic and the joint chew work on entirely different systems and pair cleanly. Bundle them and save 32%.',
    },
    {
      question: 'What’s in the chew besides the active ingredients?',
      answer:
        'Duck liver, oat flour, glycerin, mixed tocopherols (natural preservative), salmon oil. No corn, soy, wheat, dairy, artificial flavors, colors, or preservatives.',
    },
    {
      question: 'What’s the 90-day guarantee?',
      answer:
        'If your dog doesn’t take to it, or you don’t see mobility improvement within 90 days, email help@pawbite.com and we’ll refund your first order in full. Keep the chews.',
    },
  ],
};

export const productsDetail = {
  'calming-chews': calmingChewsDetail,
  'daily-probiotic': dailyProbioticDetail,
  'hip-and-joint': hipAndJointDetail,
};

export type ProductSlug = keyof typeof productsDetail;
export const productSlugs: ProductSlug[] = Object.keys(productsDetail) as ProductSlug[];

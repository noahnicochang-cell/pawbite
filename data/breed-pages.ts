import type {
  ContentSection,
  ContentFAQ,
  ContentByline,
  ProductRecommendation,
} from './content-schema';

export type BreedSize = 'small' | 'medium' | 'large' | 'giant';

export type BreedPage = {
  slug: string;
  breedName: string;
  size: BreedSize;
  weightRange: string;
  lifespanRange: string;
  tldr: string;
  commonHealthConcerns: string[];
  byline: ContentByline;
  sections: ContentSection[];
  recommendsProduct: ProductRecommendation;
  reasonForRecommendation: string;
  dosingNote: string;
  faqs: ContentFAQ[];
};

const standardByline: ContentByline = {
  author: 'PawBite editorial team',
  reviewedBy: 'Dr. M. Hayes, DVM',
  publishedDate: '2026-04-01',
  updatedDate: '2026-05-15',
};

/**
 * Filled in by Phase 5 content writer agent (breeds).
 * 25 entries total.
 */
export const breedPages: BreedPage[] = [
  {
    slug: 'labrador-retriever',
    breedName: 'Labrador Retriever',
    size: 'large',
    weightRange: '55-80 lbs',
    lifespanRange: '10-12 years',
    tldr: 'Labrador Retrievers are large, food-motivated, and prone to both hip dysplasia and food-sensitivity-related GI upset, which makes the Daily Duo (probiotic plus hip and joint together) the most common recommendation. Start joint support around age 4 to 5 to protect cartilage before symptoms appear.',
    commonHealthConcerns: [
      'Hip and elbow dysplasia',
      'Cruciate ligament tears',
      'Food-sensitivity-related loose stool',
      'Obesity-driven joint wear',
      'Gas and bloating from fast eating',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Labrador Retrievers',
        body: 'The Lab is the most-diagnosed breed for hip dysplasia in the United States. Their build, weight, and famous love of food put structural strain on the hips and elbows that shows up as stiffness by middle age. They also carry one of the higher rates of cruciate ligament rupture among large breeds.\n\nOn the gut side, Labs are notorious for fast eating, food motivation that bypasses self-control, and sensitivity to protein changes. Loose stool when switching kibble, gas after a stolen meal, and intermittent diarrhea are routine vet complaints. Their digestive tract is not delicate, but it is busy.',
      },
      {
        heading: 'What supplements help',
        body: 'For Labs, joint support is the headline. Glucosamine and chondroitin at clinical doses slow cartilage breakdown, and adding MSM and omega-3 builds a real anti-inflammatory floor that NSAIDs cannot match on a daily basis. The Hip and Joint chew is built for exactly this size dog.\n\nA daily probiotic alongside it handles the other half of the Lab problem. Firmer stool, less gas, and a steadier response to diet changes make life easier for the dog and the floor. Most Lab owners end up running the Daily Duo because the two issues are independent and both worth solving.',
      },
      {
        heading: 'When to start',
        body: 'Start the probiotic any time, including puppyhood. Start hip and joint support by age 4 or 5, not when limping appears. Cartilage damage is cumulative, and supplementation is far more useful as prevention than as repair. Labs that start joint chews in early middle age routinely stay loose and active years longer than Labs whose owners wait for symptoms.',
      },
      {
        heading: 'Diet considerations',
        body: 'Keep your Lab lean. Every pound of body weight above ideal is roughly four pounds of pressure across each hip joint. The single biggest favor you can do their joints is portion control. A probiotic helps stool quality through diet transitions, but it will not undo the joint impact of an overweight dog.',
      },
    ],
    recommendsProduct: 'daily-duo',
    reasonForRecommendation:
      'Labs sit at the intersection of two PawBite use cases: joint protection for a hip-dysplasia-prone large breed, and a sensitive digestive tract that benefits from a daily probiotic. The Daily Duo bundles both and works out cheaper than buying them separately.',
    dosingNote:
      'A 70 lb Lab takes 1 Daily Probiotic chew per day plus 2 Hip and Joint chews per day. Labs over 75 lbs go to 2 probiotic chews and 3 joint chews daily.',
    faqs: [
      {
        question: 'When should I start joint supplements for my Lab?',
        answer:
          'By age 4 to 5, before any limping or stiffness. Hip dysplasia and cartilage wear are progressive, and the supplements work better as prevention than as repair. Younger Labs with confirmed dysplasia on X-ray should start sooner.',
      },
      {
        question: 'My Lab has chronic loose stool. Is a probiotic enough?',
        answer:
          'Often yes, especially if the loose stool tracks with diet transitions, treats, or stress. Most Labs see firmer stool within 14 days of starting a daily probiotic. If diarrhea is severe, bloody, or longer than 48 hours, see your vet to rule out parasites or pancreatitis first.',
      },
      {
        question: 'Can I give Daily Duo to a Lab puppy?',
        answer:
          'The Daily Probiotic is safe from 8 weeks of age. The Hip and Joint chew is safe for puppies, but most vets recommend waiting until the growth plates close around 12 to 18 months before starting it as a routine, since rapid-growth puppies have very different joint needs.',
      },
      {
        question: 'My Lab is already on Carprofen. Should I still give Hip and Joint?',
        answer:
          'Yes. Hip and Joint is a nutritional supplement and complements prescription NSAIDs without competing with them. A lot of Lab owners use it to reduce the NSAID dose their vet would otherwise prescribe. Loop in your vet for chronic arthritis cases.',
      },
      {
        question: 'My Lab is overweight. Will supplements help his joints?',
        answer:
          'They help, but the biggest joint favor is weight loss. Every extra pound is roughly four pounds of pressure on each hip. Supplements work best alongside portion control. Hip and Joint can ease the discomfort while you get the weight off.',
      },
    ],
  },
  {
    slug: 'golden-retriever',
    breedName: 'Golden Retriever',
    size: 'large',
    weightRange: '55-75 lbs',
    lifespanRange: '10-12 years',
    tldr: 'Golden Retrievers are large, joint-vulnerable, and live with one of the higher rates of food allergy and skin sensitivity of any popular breed, which makes the Daily Duo the right starting point. Start joint chews around age 4 and keep the probiotic running for life to support skin and coat from the inside.',
    commonHealthConcerns: [
      'Hip and elbow dysplasia',
      'Food allergies and atopic skin issues',
      'Ear infections tied to gut and immune health',
      'Cruciate ligament injury',
      'Senior arthritis',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Golden Retrievers',
        body: 'Goldens carry a heavy joint burden. Hip and elbow dysplasia rates are among the highest of any breed, and torn cruciate ligaments are common past middle age. By age 8, most Goldens show some measurable joint stiffness, even the ones still happy to fetch.\n\nThe other half of the Golden story is skin and coat. Food sensitivities, environmental allergies, and recurring ear infections are constant themes in the breed. A lot of that traces back to gut and immune health, which is why probiotics belong in the picture and not just on a joint supplement.',
      },
      {
        heading: 'What supplements help',
        body: 'Hip and Joint covers the structural side. Glucosamine, chondroitin, MSM, and omega-3 at real clinical doses give a Golden the daily anti-inflammatory floor their joints need. The green-lipped mussel and turmeric in PawBite are particularly useful for the lower-grade chronic inflammation that drives both joint and skin issues.\n\nDaily Probiotic supports the immune system from the gut up. About 70 percent of the immune system lives in the gut wall, and a settled microbiome helps with skin flares, ear infections, and the diet-driven loose stool Goldens are known for. Most owners run both.',
      },
      {
        heading: 'When to start',
        body: 'Begin the probiotic in puppyhood or whenever the dog comes home. Start Hip and Joint by age 4 at the latest. Goldens that get joint support before symptoms appear typically retain mobility longer and need lower NSAID doses in their senior years. Waiting until limping shows up is a slower fix.',
      },
    ],
    recommendsProduct: 'daily-duo',
    reasonForRecommendation:
      'Goldens carry both the joint risk of a large breed and the immune and skin sensitivities that respond to probiotic support. The Daily Duo addresses both axes at once, and the bundle pricing means it costs less than picking up the two chews separately.',
    dosingNote:
      'A 65 lb Golden takes 1 Daily Probiotic chew and 2 Hip and Joint chews per day. Larger males over 75 lbs go to 2 probiotic chews and 3 joint chews.',
    faqs: [
      {
        question: 'My Golden has itchy skin. Can a probiotic really help?',
        answer:
          'Often, yes. A lot of canine itch traces back to gut barrier dysfunction and immune signaling, both of which probiotics influence. The skin and coat improvements show up later than the stool improvements, usually 4 to 8 weeks in. If your dog has confirmed environmental allergies, the probiotic is supportive but not a replacement for vet-directed treatment.',
      },
      {
        question: 'When should a Golden start hip and joint support?',
        answer:
          'By age 4 if the dog is structurally sound, earlier if hip dysplasia is confirmed on X-ray. Goldens have such a high baseline joint risk that vets often recommend earlier preventive use than they would for a smaller breed.',
      },
      {
        question: 'My Golden gets recurring ear infections. Is this related?',
        answer:
          'It can be. Recurring otitis is often a symptom of allergic skin disease, which is often gut-linked. A daily probiotic plus a clean diet and proper ear hygiene can reduce flare frequency. Chronic, severe ear cases still need a vet.',
      },
      {
        question: 'Can my Golden take Hip and Joint with their thyroid medication?',
        answer:
          'Yes. Hip and Joint does not interact with levothyroxine or other common thyroid medications. Give them as your vet directed.',
      },
      {
        question: 'My senior Golden is slowing down. Is it too late to start?',
        answer:
          'No. Hip and Joint works at any age. Senior Goldens often show meaningful mobility improvement in the first 3 to 4 weeks. Pair it with weight management and your vet may be able to dial down NSAID doses.',
      },
    ],
  },
  {
    slug: 'french-bulldog',
    breedName: 'French Bulldog',
    size: 'small',
    weightRange: '20-28 lbs',
    lifespanRange: '10-12 years',
    tldr: 'French Bulldogs are small, brachycephalic, and famously sensitive in the gut and skin, which makes a Daily Probiotic the single most useful supplement for the breed. Add joint support if your Frenchie has IVDD risk or is carrying extra weight.',
    commonHealthConcerns: [
      'Food allergies and dietary sensitivity',
      'Chronic loose stool and flatulence',
      'Skin fold dermatitis tied to immune health',
      'Intervertebral disc disease (IVDD)',
      'Hip dysplasia in some lines',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for French Bulldogs',
        body: 'Frenchies have one of the most reactive digestive systems of any popular breed. Chronic loose stool, intermittent diarrhea, food allergies, and aggressive flatulence are the defining quality-of-life complaints from owners. A surprising amount of skin and ear trouble traces back to the same place.\n\nOn the structural side, the breed carries elevated IVDD risk because of their short backs and stocky build. Some lines also show up with hip dysplasia, even though Frenchies are not a true large breed. Their lifespan is decent for the size, so long-term supplementation pays off.',
      },
      {
        heading: 'What supplements help',
        body: 'Daily Probiotic is the foundation. The five named strains in PawBite cover stool consistency, fermentation gas, and immune modulation, which are the three things Frenchie owners complain about most. Most dogs show firmer stool within 14 days, and a noticeable reduction in gas is usually the first thing owners notice in week one.\n\nFor Frenchies with diagnosed back issues, suspected IVDD, or signs of joint stiffness in middle age, the Hip and Joint chew adds glucosamine and anti-inflammatory support. Most healthy Frenchies do fine on probiotic alone for the first several years.',
      },
      {
        heading: 'When to start',
        body: 'Start the probiotic at any age. It is genuinely useful for Frenchie puppies during diet transitions and useful for adults dealing with chronic GI noise. Reassess joint support around age 5 to 6, or sooner if the dog is overweight or has confirmed disc problems.',
      },
      {
        heading: 'Diet considerations',
        body: 'A lot of Frenchie GI trouble is novel-protein responsive. If chicken-based food causes flares, talk to your vet about a duck, fish, or limited-ingredient option. A probiotic gives the microbiome a steadier baseline through diet trials, which is exactly when GI symptoms tend to spike.',
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      'The single most consistent quality-of-life complaint from Frenchie owners is GI sensitivity, gas, and intermittent loose stool. A daily probiotic at proper CFU and strain dosing addresses all three. Joint support becomes the next priority if back or hip issues emerge.',
    dosingNote:
      'A 25 lb Frenchie takes 1 Daily Probiotic chew per day. If you add Hip and Joint, 25 to 50 lb dogs take 2 joint chews per day.',
    faqs: [
      {
        question: 'My Frenchie has terrible gas. Will a probiotic fix it?',
        answer:
          'Probably. Most Frenchie gas comes from fast eating, brachycephalic air swallowing, and unbalanced gut flora. A daily probiotic targets the third one directly, and the prebiotic blend in PawBite reduces fermentation gas. Most owners notice less gas in the first week or two.',
      },
      {
        question: 'My Frenchie has chronic loose stool. Is it food allergies?',
        answer:
          'Possibly. The fastest cheap test is a 30-day probiotic trial. If stool firms up within 2 weeks, the gut just needed rebalancing. If it does not, a vet-supervised elimination diet to rule out a specific protein allergy is the next step.',
      },
      {
        question: 'Are PawBite chews safe for brachycephalic dogs?',
        answer:
          'Yes. The chews are soft, breakable, and easy to eat. For very flat-faced dogs, break the chew into smaller pieces and mix into food if your dog tends to inhale rather than chew.',
      },
      {
        question: 'My Frenchie has IVDD. Should I avoid joint chews?',
        answer:
          'No, the opposite. Hip and Joint supports cartilage and reduces general inflammation, both of which are relevant for IVDD dogs. It is not a substitute for vet-directed care, but it pairs with it cleanly.',
      },
      {
        question: 'Can I give a chicken-flavored probiotic to a chicken-allergic Frenchie?',
        answer:
          'No. The PawBite probiotic chew is chicken-flavored and is not appropriate for confirmed chicken allergies. Hip and Joint is duck-flavored if you need an alternative protein profile.',
      },
    ],
  },
  {
    slug: 'poodle',
    breedName: 'Poodle',
    size: 'medium',
    weightRange: '40-70 lbs (Standard), 15-20 lbs (Miniature), under 10 lbs (Toy)',
    lifespanRange: '12-15 years',
    tldr: 'Poodles are long-lived, intelligent, and generally healthy, but Standards carry real hip and bloat risk while Miniatures and Toys lean GI-sensitive. For Standards, recommend the Daily Duo. For Miniatures and Toys, start with Daily Probiotic and add joint support in later years.',
    commonHealthConcerns: [
      'Hip dysplasia (especially Standards)',
      'Bloat and gastric torsion (Standards)',
      'Food and environmental allergies',
      'Patellar luxation (Toys and Miniatures)',
      'Senior cognitive and joint changes',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Poodles',
        body: 'The breed runs three sizes with different problems. Standard Poodles deal with hip dysplasia and a serious bloat risk because of their deep chests. Miniatures and Toys avoid the big joint issues but pick up patellar luxation and dental crowding. All three sizes show up with food sensitivities and environmental allergies more often than the average breed.\n\nPoodles are also one of the longest-lived popular breeds, especially the smaller sizes. That long timeline means daily supplementation pays off more than it does for shorter-lived breeds. Senior cognitive changes and gradual mobility loss are the main quality-of-life issues in old Poodles.',
      },
      {
        heading: 'What supplements help',
        body: 'For Standard Poodles, the Daily Duo is the natural fit. Hip and Joint addresses the hip dysplasia risk, and Daily Probiotic supports the gut and skin issues that the breed runs into. The probiotic has a side benefit for any deep-chested breed: a settled gut produces less fermentation gas, which is one variable in bloat risk.\n\nFor Miniatures and Toys, the probiotic does most of the heavy lifting through middle age. Joint chews become worth adding around age 7 to 8 when patellar issues and senior stiffness begin to show. Both sizes benefit from the long-lived breed math: years of preventive use pays back in mobility.',
      },
      {
        heading: 'When to start',
        body: 'Probiotic from any age. Hip and Joint for Standards by age 4 to 5. Miniatures and Toys around age 7 or earlier if patellar luxation or arthritis is diagnosed. Long-lived breeds reward early starts.',
      },
    ],
    recommendsProduct: 'daily-duo',
    reasonForRecommendation:
      'Standard Poodles need both joint protection and the immune and gut benefits of a daily probiotic. The Duo covers both at one price point. For smaller Poodle varieties, switch to the standalone Daily Probiotic until joint support becomes relevant in their senior years.',
    dosingNote:
      'Standard Poodle (55 lbs): 1 probiotic chew plus 2 joint chews daily. Miniature (16 lbs): 1 probiotic chew daily, 1 joint chew if needed. Toy (8 lbs): 1 probiotic chew, 1 joint chew if needed.',
    faqs: [
      {
        question: 'Does breed size change which supplement I should use?',
        answer:
          'Yes. Standard Poodles are large dogs and benefit from hip and joint support from middle age forward. Miniature and Toy Poodles can usually run probiotic-only until their senior years, then add joint support if patellar or arthritis issues emerge.',
      },
      {
        question: 'My Standard Poodle has a deep chest. Should I worry about bloat?',
        answer:
          'Yes, every Standard Poodle owner should know the signs of bloat. The probiotic helps reduce fermentation gas, which is one input among many, but it is not a bloat preventative. Feed multiple small meals, avoid heavy exercise right after eating, and learn the symptoms.',
      },
      {
        question: 'My Toy Poodle is skipping on her back leg. Is that patellar luxation?',
        answer:
          'Often yes, especially in the small Poodle varieties. Get a vet diagnosis. Hip and Joint supports cartilage and reduces inflammation in patellar cases, but advanced grades sometimes need surgical correction.',
      },
      {
        question: 'Poodles live a long time. Are these chews safe for daily long-term use?',
        answer:
          'Yes. Neither the probiotic nor the joint chew contains NSAIDs or liver-taxing actives, which is exactly why they are built for daily long-term use. Long-lived breeds get more value from these chews, not less.',
      },
      {
        question: 'My Poodle has allergies. Is the chew safe?',
        answer:
          'The probiotic is chicken-flavored and the joint chew is duck-flavored. Check both panels against your dog’s known allergens. PawBite does not use corn, soy, wheat, or dairy.',
      },
    ],
  },
  {
    slug: 'bulldog',
    breedName: 'Bulldog',
    size: 'medium',
    weightRange: '40-55 lbs',
    lifespanRange: '8-10 years',
    tldr: 'English Bulldogs combine the joint risk of a heavy stocky breed with the GI and skin sensitivity of a brachycephalic, which makes the Daily Duo the best fit. Their shorter lifespan means early, consistent supplementation pays back faster.',
    commonHealthConcerns: [
      'Hip and elbow dysplasia',
      'Chronic food allergies and skin issues',
      'Loose stool and flatulence',
      'Cruciate ligament tears',
      'Skin fold dermatitis',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Bulldogs',
        body: 'The Bulldog is a structural challenge. Their build puts heavy load on the front end, and hip and elbow dysplasia rates are higher than average even though they are not a giant breed. Cruciate ligament tears are common, especially in dogs that carry extra weight.\n\nDigestively, Bulldogs are famously gassy, often with chronic loose stool and recurring food allergies. Skin fold dermatitis is its own well-known issue, and a lot of that traces back to gut and immune health. Their shorter average lifespan means the daily quality-of-life issues hit harder, sooner.',
      },
      {
        heading: 'What supplements help',
        body: 'Daily Probiotic handles the gas, loose stool, and immune side of the Bulldog story. Bifidobacterium and the prebiotic blend specifically target fermentation gas, which is the symptom most Bulldog owners want fixed. Stool firmness usually improves within 2 weeks.\n\nHip and Joint covers the structural risk. Bulldogs are not large dogs, but the joint load and inflammation they live with calls for clinically dosed glucosamine and chondroitin. The omega-3 and turmeric in the chew also help with the chronic low-grade inflammation that shows up in skin and ears.',
      },
      {
        heading: 'Senior considerations',
        body: 'Bulldogs age fast. By 6 or 7, most show meaningful slowing. Starting both chews by age 3 to 4 means the active ingredients are already doing their work when stiffness shows up. Waiting until obvious symptoms means starting from behind, which is a tougher win.',
      },
    ],
    recommendsProduct: 'daily-duo',
    reasonForRecommendation:
      'Bulldogs are one of the few breeds where both axes are equally important from the start. The structural joint load and the GI sensitivity are independent problems and both reward daily support. The Duo bundle works out cheaper than buying the two chews separately.',
    dosingNote: 'A 50 lb Bulldog takes 1 Daily Probiotic chew and 2 Hip and Joint chews per day.',
    faqs: [
      {
        question: 'My Bulldog has constant gas. Will a probiotic actually help?',
        answer:
          'It usually does. Bulldogs swallow air because of their flat face, but a meaningful share of the gas is microbial fermentation. The Bifidobacterium strain plus prebiotic in PawBite targets exactly that. Most owners notice less gas in the first 1 to 2 weeks.',
      },
      {
        question: 'When should I start joint chews for a Bulldog?',
        answer:
          'By age 3 to 4 unless joint issues are already showing. Bulldogs age fast and the structural load on their joints is real from the start. Earlier is better than later.',
      },
      {
        question: 'My Bulldog has chronic skin and ear problems. Can supplements help?',
        answer:
          'They can support the underlying picture. A daily probiotic helps the gut and immune system, which feeds into skin and ear health. The omega-3 and turmeric in Hip and Joint adds anti-inflammatory benefit. Neither replaces vet care for active infections, but they reduce flare frequency.',
      },
      {
        question: 'My Bulldog has food allergies. Is the chew safe?',
        answer:
          'The probiotic is chicken-flavored and the joint chew is duck-flavored. If your Bulldog has a chicken allergy, skip the probiotic and stick with Hip and Joint, or talk to your vet about alternatives. PawBite does not use corn, soy, wheat, or dairy.',
      },
      {
        question: 'My Bulldog has had cruciate surgery. Should he still take Hip and Joint?',
        answer:
          'Yes, and your vet will likely encourage it. Post-surgical dogs benefit from cartilage support and anti-inflammatory ingredients to slow wear on the opposite knee, which is the more common second injury.',
      },
    ],
  },
  {
    slug: 'german-shepherd',
    breedName: 'German Shepherd',
    size: 'large',
    weightRange: '65-90 lbs',
    lifespanRange: '9-13 years',
    tldr: 'German Shepherds are one of the most joint-vulnerable popular breeds in the world, with elevated rates of hip dysplasia, degenerative myelopathy, and exocrine pancreatic insufficiency. The Daily Duo is the standard recommendation, starting young.',
    commonHealthConcerns: [
      'Hip and elbow dysplasia',
      'Degenerative myelopathy',
      'Exocrine pancreatic insufficiency',
      'Chronic loose stool and IBD',
      'Bloat and gastric torsion',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for German Shepherds',
        body: 'The Shepherd lives near the top of every hip dysplasia statistic. Their angulated rear and large frame mean joint wear starts early and progresses. Degenerative myelopathy, a slow spinal disease, is also overrepresented in the breed and changes how you think about senior care.\n\nOn the gut side, German Shepherds are famously sensitive. Chronic loose stool, IBD, and exocrine pancreatic insufficiency are diagnosed in this breed more often than almost any other large dog. The deep chest also means bloat is a constant background risk.',
      },
      {
        heading: 'What supplements help',
        body: 'Hip and Joint is essentially required for German Shepherds. Clinical glucosamine and chondroitin doses slow cartilage breakdown, and the omega-3, turmeric, and MSM stack reduces the chronic inflammation that drives both joint pain and neurological progression. Many vets recommend Shepherds start joint support younger than they would for other breeds, sometimes by age 2 to 3.\n\nDaily Probiotic supports the well-known GI sensitivity. Five named strains at proper CFU help firm stool, reduce gas, and steady the microbiome through diet changes. Shepherds with confirmed EPI need enzyme replacement from a vet, but probiotics pair with that treatment cleanly.',
      },
      {
        heading: 'When to start',
        body: 'Start the probiotic young, even in puppyhood. Start Hip and Joint by age 3 at the latest, earlier for dogs with confirmed dysplasia. The earlier the joint support runs, the more cartilage you preserve. With a breed this vulnerable to joint failure, late starts cost mobility you cannot get back.',
      },
    ],
    recommendsProduct: 'daily-duo',
    reasonForRecommendation:
      'German Shepherds have the highest combined joint and gut risk profile of any popular working breed. The Daily Duo covers both at once. Few breeds benefit more from preventive daily supplementation.',
    dosingNote:
      'An 80 lb Shepherd takes 2 Daily Probiotic chews and 3 Hip and Joint chews per day. Shepherds under 75 lbs take 1 probiotic and 2 joint chews.',
    faqs: [
      {
        question: 'My Shepherd has chronic diarrhea. Could it be EPI?',
        answer:
          'Possibly. Exocrine pancreatic insufficiency is overrepresented in German Shepherds. The diagnostic is a TLI blood test from your vet. If EPI is confirmed, your dog needs prescription pancreatic enzymes. A daily probiotic supports the microbiome alongside that treatment but is not a substitute for it.',
      },
      {
        question: 'When should I start joint supplements for a German Shepherd?',
        answer:
          'By age 2 to 3, which is younger than most breeds. The hip dysplasia rate in Shepherds is so high that vets often recommend earlier preventive use. Dogs with confirmed dysplasia on X-ray should start immediately.',
      },
      {
        question: 'My Shepherd has degenerative myelopathy. Will joint chews help?',
        answer:
          'DM is a neurological disease, not a joint disease, so Hip and Joint will not slow it. But many DM dogs benefit from the anti-inflammatory support and from cartilage protection in the joints that are now bearing weird load. Discuss specifics with your vet.',
      },
      {
        question: 'My Shepherd has a deep chest. Bloat risk?',
        answer:
          'Yes. Every deep-chested Shepherd owner should know the bloat symptoms. The probiotic reduces fermentation gas but is not a bloat preventative. Feed smaller meals, avoid exercise around feeding, and learn the warning signs.',
      },
      {
        question: 'My working Shepherd is high-drive. Is daily supplementation still useful?',
        answer:
          'Especially useful. High-drive working dogs put extra mechanical load on hips and joints. Hip and Joint preserves cartilage so the working career lasts longer. The probiotic helps with the stress-related GI flares that working dogs are prone to.',
      },
    ],
  },
  {
    slug: 'dachshund',
    breedName: 'Dachshund',
    size: 'small',
    weightRange: '11-32 lbs',
    lifespanRange: '12-16 years',
    tldr: 'Dachshunds are long-lived, long-spined, and famously back-vulnerable, so Hip and Joint is the most useful single supplement for the breed. Add probiotic if your Dachshund has food sensitivities or stress-driven GI flares.',
    commonHealthConcerns: [
      'Intervertebral disc disease (IVDD)',
      'Patellar luxation',
      'Obesity-related joint strain',
      'Dental disease',
      'Anal gland issues',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Dachshunds',
        body: 'IVDD is the defining health risk of the breed. Their elongated spine puts disc material under constant load, and somewhere around 25 percent of Dachshunds will have a clinically significant disc episode in their lifetime. Patellar luxation is also common, and any extra weight makes both problems worse fast.\n\nThe rest of the Dachshund medical picture is comparatively gentle. Dental disease is common because of small jaws, and anal gland issues come up. Most Dachshunds live 12 to 16 years, which is a long timeline for supplements to do real work.',
      },
      {
        heading: 'What supplements help',
        body: 'Hip and Joint is the priority. Glucosamine, chondroitin, and the omega-3 and turmeric stack support disc and joint health, and the anti-inflammatory profile is genuinely useful for IVDD-prone dogs. Hip and Joint is not a cure for an active disc episode, but it can reduce the rate of recurrent flares and support recovery between events.\n\nDaily Probiotic is the right add-on for Dachshunds with chronic loose stool, food allergies, or stress-driven GI symptoms. Some Dachshunds are gut-perfect their whole lives; others have weekly issues. The probiotic is a high-value addition for the second group.',
      },
      {
        heading: 'When to start',
        body: 'Start Hip and Joint by age 3 to 4, earlier if there is any disc history in the dog or the line. Long-spined breeds get more value from years of consistent joint and disc support than from short emergency-only courses.',
      },
      {
        heading: 'Diet considerations',
        body: 'Weight is everything for a Dachshund. Even half a pound of extra weight is a real load on the spine. The single most useful thing for IVDD prevention is portion control. Supplements support a healthy weight regimen, they do not replace it.',
      },
    ],
    recommendsProduct: 'hip-and-joint',
    reasonForRecommendation:
      'Hip and Joint supports the spine and the structural joints that take constant load in this breed. The omega-3 and turmeric add real anti-inflammatory benefit relevant to disc health. Probiotic is a useful add-on for GI-sensitive individuals.',
    dosingNote:
      'A 16 lb Dachshund takes 1 Hip and Joint chew per day. Miniature Dachshunds under 11 lbs can take half a chew if your vet prefers a lower starting dose.',
    faqs: [
      {
        question: 'Can supplements prevent IVDD?',
        answer:
          'They reduce inflammation and support cartilage, but they cannot rewrite Dachshund anatomy. The biggest IVDD risk reducers are weight management, avoiding jumping off high furniture, and using a ramp. Hip and Joint pairs with those habits as a supportive layer.',
      },
      {
        question: 'My Dachshund had an IVDD episode. What now?',
        answer:
          'Work closely with your vet on acute care. Long-term, Hip and Joint is a reasonable daily layer to support recovery and reduce flare frequency. Keep him lean, no jumping, use ramps. Probiotics also help if he is on prednisone, which often disrupts gut flora.',
      },
      {
        question: 'My Dachshund is overweight. What is the priority?',
        answer:
          'Weight loss. Every ounce off his frame is meaningful protection for his spine. Hip and Joint supports him while you cut portions, but the weight is the main lever.',
      },
      {
        question: 'How do I dose Hip and Joint for a small Dachshund?',
        answer:
          'Dogs under 25 lbs take 1 chew per day. For a miniature Dachshund under 11 lbs, your vet may prefer half a chew to start. The chews break cleanly along the score line.',
      },
      {
        question: 'Are PawBite chews safe for senior Dachshunds?',
        answer:
          'Yes. Both chews are NSAID-free and built for long-term daily use. Many senior Dachshunds run both the probiotic and Hip and Joint comfortably for years.',
      },
    ],
  },
  {
    slug: 'beagle',
    breedName: 'Beagle',
    size: 'medium',
    weightRange: '20-30 lbs',
    lifespanRange: '12-15 years',
    tldr: 'Beagles are food-motivated, long-lived, and prone to weight-driven joint problems and GI flares from eating things they should not. The Daily Probiotic is the natural first move; add joint support around age 6 to 7 or sooner for overweight dogs.',
    commonHealthConcerns: [
      'Obesity-driven hip and joint wear',
      'Loose stool from scavenging',
      'Food allergies',
      'Ear infections tied to floppy ears',
      'Hypothyroidism',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Beagles',
        body: 'Beagles will eat what they find, which is the source of most of their GI problems. Loose stool, gas, and intermittent vomiting from kitchen counter raids are routine for the breed. They also pick up food allergies more often than the average mid-size dog, often manifesting as itchy skin and recurring ear infections.\n\nStructurally, Beagles are sound but vulnerable to weight gain. They are food-motivated to the point of self-harm, and extra pounds load the hips and back. A Beagle at the right weight stays mobile through old age. An overweight Beagle starts showing joint stiffness by 7 or 8.',
      },
      {
        heading: 'What supplements help',
        body: 'Daily Probiotic handles the most consistent quality-of-life issue: GI noise from a dog whose appetite outruns his judgment. Firmer stool, less gas, and a more resilient response to dietary indiscretion are exactly what the five named strains and prebiotic blend deliver.\n\nFor middle-aged or overweight Beagles, Hip and Joint is a worthy add. Glucosamine, chondroitin, and the anti-inflammatory profile slow the joint wear that weight tends to drive. Healthy lean Beagles can wait on joint support until later in life.',
      },
      {
        heading: 'When to start',
        body: 'Probiotic from any age. Hip and Joint by age 6 to 7 for healthy Beagles, earlier for overweight dogs or any dog with confirmed dysplasia or arthritis. Long-lived breeds like Beagles reward years of consistent supplementation.',
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      'The dominant Beagle complaint is GI noise from a busy mouth and a sensitive gut. A daily probiotic addresses stool quality, gas, and immune support, which is most of the breed-specific problem. Joint support is a useful add for older or overweight dogs.',
    dosingNote:
      'A 25 lb Beagle takes 1 Daily Probiotic chew per day. If joint support is added, 25 to 50 lb dogs take 2 Hip and Joint chews per day.',
    faqs: [
      {
        question: 'My Beagle eats anything off the floor. Will a probiotic help?',
        answer:
          'It will not stop the scavenging, but it makes the resulting GI upset less frequent and less severe. Beagles on a daily probiotic recover faster from dietary indiscretion and have firmer baseline stool. It is not a license for counter raids, but it cushions the impact.',
      },
      {
        question: 'My Beagle is overweight. Should I start joint support now?',
        answer:
          'Yes, and lean him out at the same time. Weight loss is the bigger lever, but Hip and Joint supports his hips while you reduce portions. Most owners notice noticeably better mobility within a few weeks once both are in motion.',
      },
      {
        question: 'My Beagle has chronic ear infections. Is this gut-related?',
        answer:
          'It can be. Recurring otitis is often allergic in origin, and a lot of allergic skin disease has a gut component. A daily probiotic plus appropriate ear cleaning and vet treatment reduces flare frequency in many dogs. Severe or persistent cases still need vet workup.',
      },
      {
        question: 'Is the chew flavor a concern for a food-motivated Beagle?',
        answer:
          'The opposite. Beagles take the chews readily. The bigger risk with a food-motivated dog is leaving the canister accessible. Keep it out of reach.',
      },
      {
        question: 'Can a senior Beagle take both chews?',
        answer:
          'Yes, that is the Daily Duo. Senior Beagles often benefit from both the GI support and the joint protection. The chews are NSAID-free and built for long-term daily use.',
      },
    ],
  },
  {
    slug: 'rottweiler',
    breedName: 'Rottweiler',
    size: 'large',
    weightRange: '80-135 lbs',
    lifespanRange: '8-10 years',
    tldr: 'Rottweilers are giant, joint-vulnerable, and have one of the shortest lifespans of any popular breed, which means early preventive supplementation matters more, not less. The Daily Duo is the right starting point, with joint dosing at the upper end of the band.',
    commonHealthConcerns: [
      'Hip and elbow dysplasia',
      'Osteosarcoma risk',
      'Cruciate ligament injury',
      'Bloat and gastric torsion',
      'Senior arthritis',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Rottweilers',
        body: 'Rotts carry a heavy joint load and live with elevated rates of hip and elbow dysplasia, cruciate ligament tears, and senior arthritis. Bloat is a real risk because of their deep chests. Osteosarcoma is also overrepresented in the breed, which is one of several reasons their average lifespan is shorter than other large breeds.\n\nGastrointestinally, Rotts are not as sensitive as some giant breeds, but loose stool from diet changes and stress is still routine. Bloat risk reduction includes managing fermentation gas and eating habits, which probiotics help with.',
      },
      {
        heading: 'What supplements help',
        body: 'Hip and Joint is the structural foundation. Rotts at full size carry massive load through their joints, and the clinical doses of glucosamine, chondroitin, and MSM in PawBite are dosed for exactly this weight class. The omega-3 and turmeric stack adds genuine anti-inflammatory floor for a breed that needs it.\n\nDaily Probiotic supports gut, immune, and skin health and reduces fermentation gas, which is one input among many for bloat risk reduction. Many vets recommend probiotic plus joint for any giant breed from young adulthood.',
      },
      {
        heading: 'When to start',
        body: 'Probiotic from puppyhood. Hip and Joint by age 2 to 3, which is earlier than for most breeds, because Rotts mature into their joint risk fast and have a shorter window. Waiting for symptoms is starting from behind.',
      },
    ],
    recommendsProduct: 'daily-duo',
    reasonForRecommendation:
      'Rotts have the joint risk of a giant breed and the practical need for daily GI and immune support to handle their stress-prone digestive system. The Daily Duo addresses both at proper dosing for the weight class.',
    dosingNote:
      'A 100 lb Rottweiler takes 2 Daily Probiotic chews and 3 Hip and Joint chews per day. Females at 80 lbs may stay on 1 probiotic and 3 joint chews; check the schedule against your dog’s actual weight.',
    faqs: [
      {
        question: 'When should I start joint chews for a Rottweiler?',
        answer:
          'By age 2 to 3, sooner if dysplasia is confirmed. Rotts have such elevated baseline joint risk and a shorter lifespan that earlier preventive supplementation makes more sense than later reactive use.',
      },
      {
        question: 'My Rott has a deep chest. Bloat risk?',
        answer:
          'Yes. Every Rottweiler owner should know the bloat signs and have an emergency vet plan. The probiotic reduces fermentation gas, which is one variable, but it is not a bloat preventative. Feed smaller meals, avoid exercise around eating, learn the symptoms.',
      },
      {
        question: 'My Rott is post-cruciate-surgery. Should he take Hip and Joint?',
        answer:
          'Yes. Post-cruciate dogs benefit from cartilage support and anti-inflammatory ingredients to slow wear on the opposite knee, which is the more common second injury. Coordinate with your vet for any prescription medications.',
      },
      {
        question: 'My Rott is on Carprofen for arthritis. Can he take Hip and Joint?',
        answer:
          'Yes. Hip and Joint is a nutritional supplement and complements prescription NSAIDs. Many owners use it to reduce the NSAID dose their vet would otherwise prescribe long-term. Talk to your vet about the specific combination.',
      },
      {
        question: 'How much chew does a giant Rottweiler need?',
        answer:
          'Dogs over 75 lbs take 2 probiotic chews and 3 Hip and Joint chews per day. A 60-chew Hip and Joint canister lasts about 20 days at that dosing, which is why most giant breed owners subscribe.',
      },
    ],
  },
  {
    slug: 'pointer',
    breedName: 'Pointer',
    size: 'large',
    weightRange: '45-75 lbs',
    lifespanRange: '12-15 years',
    tldr: 'Pointers are athletic, lean, and structurally one of the healthier large breeds, which makes the Daily Probiotic a clean fit for routine wellness. Add joint support around age 7 to 8 or earlier for working dogs.',
    commonHealthConcerns: [
      'Hip dysplasia (lower rate than other large breeds)',
      'Working-dog joint wear',
      'Hypothyroidism',
      'Mild food sensitivities',
      'Skin issues from environmental exposure',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Pointers',
        body: 'Pointers are athletic and lean, and their structural health is well above the large-breed average. Hip dysplasia rates exist but sit below most retrievers and shepherds. Their main joint risk comes from a working life: high-mileage running, jumping, and field work that loads cartilage over years.\n\nGastrointestinally, the breed is mostly steady. Some lines pick up mild food sensitivities or seasonal skin issues. Hypothyroidism is the most common endocrine issue and is unrelated to gut or joint supplementation.',
      },
      {
        heading: 'What supplements help',
        body: 'Daily Probiotic is the general-wellness baseline. Five named strains support steady stool, immune function, and skin and coat health, which is what most healthy adult Pointers actually need. Most dogs see firmer stool within 14 days and improvements in coat shine within 4 to 8 weeks.\n\nHip and Joint becomes worth adding for working Pointers, field trial dogs, or any Pointer over age 7 to 8. The mechanical wear of high-mileage running adds up, and preventive joint support extends the working career and the comfortable retirement.',
      },
      {
        heading: 'When to start',
        body: 'Probiotic from any age. Hip and Joint by age 7 to 8 for pet Pointers, earlier for working dogs or those with confirmed dysplasia. Long-lived athletic breeds reward years of consistent supplementation.',
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      'Pointers are structurally healthy for a large breed and do not need joint support from young adulthood the way Labs or Shepherds do. A daily probiotic covers general wellness, gut, and coat health, which is what the breed actually needs. Joint support becomes useful in middle age or for working dogs.',
    dosingNote:
      'A 60 lb Pointer takes 1 Daily Probiotic chew per day. If joint support is added, 50 to 75 lb dogs take 2 Hip and Joint chews per day.',
    faqs: [
      {
        question: 'My Pointer is a working dog. Should he start joint support earlier?',
        answer:
          'Yes. High-mileage working dogs accumulate cartilage wear faster than pet dogs of the same breed. Starting Hip and Joint by age 4 to 5 protects the working career and the eventual retirement years.',
      },
      {
        question: 'My Pointer is structurally sound. Does he need a probiotic?',
        answer:
          'Even structurally sound dogs benefit. A probiotic supports immune function, skin, and steady stool quality through diet changes, travel, and stress. Most owners notice firmer stool and a shinier coat within a couple of months.',
      },
      {
        question: 'My Pointer has seasonal skin flares. Will a probiotic help?',
        answer:
          'Often partially. A lot of allergic skin disease has a gut component, and probiotics support the immune side. Severe or persistent flares still need vet workup, but a daily probiotic typically reduces flare frequency in mild to moderate cases.',
      },
      {
        question: 'Are the chews safe to give before a hunting trip?',
        answer:
          'Yes. Daily Probiotic specifically supports stool consistency through travel, novel water, and stress, which are exactly the things that derail hunting trips. Start it a few weeks before the season, not the day before.',
      },
      {
        question: 'When should a senior Pointer start joint support?',
        answer:
          'By age 7 to 8 for healthy Pointers, earlier if any stiffness or working-dog joint wear is evident. Pointers tend to age gracefully, but cartilage benefits from preventive support before symptoms show.',
      },
    ],
  },
  {
    slug: 'yorkshire-terrier',
    breedName: 'Yorkshire Terrier',
    size: 'small',
    weightRange: '4-7 lbs',
    lifespanRange: '13-16 years',
    tldr: 'Yorkies are tiny, long-lived, and famously gut-sensitive, with patellar luxation and dental disease as the other consistent issues. Daily Probiotic is the highest-value daily supplement; add Hip and Joint in middle age if patellar or arthritis problems emerge.',
    commonHealthConcerns: [
      'Sensitive stomach and chronic diarrhea',
      'Hypoglycemia in toy-sized individuals',
      'Patellar luxation',
      'Dental disease',
      'Tracheal collapse',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Yorkshire Terriers',
        body: 'Yorkies have one of the most reactive digestive tracts of any small breed. Chronic loose stool, intermittent diarrhea, and food sensitivities are the most consistent owner complaints. Their small size also means tiny GI upsets become real problems fast, including dehydration and hypoglycemia in very small individuals.\n\nStructurally, patellar luxation is the most common orthopedic issue, and dental disease is essentially universal because of their small jaws. Tracheal collapse is another well-known issue in the breed. Yorkies typically live 13 to 16 years, which is a long window for daily supplementation to pay off.',
      },
      {
        heading: 'What supplements help',
        body: 'Daily Probiotic is the foundation. The five named strains in PawBite are dosed appropriately for a small body and target stool consistency, gas, and immune support directly. Most Yorkies see firmer, more regular stool within 2 weeks of starting.\n\nHip and Joint becomes worth adding around age 7 to 8, sooner if patellar luxation is diagnosed or if any stiffness shows up. The dose at this size is 1 chew per day, which is gentle and easy to give. Long-lived breeds get more value from years of joint support, not less.',
      },
      {
        heading: 'When to start',
        body: 'Probiotic from any age. Hip and Joint around age 7 to 8 for healthy Yorkies, earlier if patellar grading or stiffness is already present. Tiny breeds are easy to underdose with adult-sized supplements; PawBite splits cleanly along the score line for very small Yorkies if your vet prefers half a chew.',
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      'The dominant Yorkie complaint is chronic GI sensitivity, and the breed lives long enough that a daily probiotic pays back over many years. Joint support becomes a useful add in middle age, but probiotic is the high-value primary supplement.',
    dosingNote:
      'A 5 lb Yorkie takes 1 Daily Probiotic chew per day. If your vet prefers a lower starting dose, break the chew in half along the score line.',
    faqs: [
      {
        question: 'My Yorkie has chronic loose stool. Will a probiotic fix it?',
        answer:
          'Often yes. Most Yorkies see firmer stool within 14 days of starting a daily probiotic. If diarrhea is severe, bloody, or longer than 48 hours, see your vet first to rule out parasites, pancreatitis, or other acute causes.',
      },
      {
        question: 'How do I dose a 4 lb Yorkie?',
        answer:
          'One chew per day, or half a chew if your vet prefers a lower starting dose. The chews break cleanly along the score line. Match with a meal so the chew is taken with food.',
      },
      {
        question: 'My Yorkie is skipping on her back leg. Is that patellar luxation?',
        answer:
          'Often yes. Patellar luxation is the most common orthopedic issue in the breed. Get a vet diagnosis for grading. Hip and Joint supports cartilage and reduces inflammation, which helps mild to moderate cases. Advanced grades may need surgical correction.',
      },
      {
        question: 'Are the chews safe for a senior Yorkie on medications?',
        answer:
          'The probiotic and Hip and Joint chews do not interact with most common medications, but always tell your vet what your dog is taking. Both chews are NSAID-free and built for long-term daily use even in senior dogs.',
      },
      {
        question: 'My Yorkie is picky. Will she eat the chew?',
        answer:
          'Most Yorkies take the chicken-flavored probiotic readily. Some picky individuals do better when the chew is broken into pieces and mixed with food. For an absolute refusal, the 90-day guarantee covers a full refund.',
      },
    ],
  },
  {
    slug: 'boxer',
    breedName: 'Boxer',
    size: 'large',
    weightRange: '55-80 lbs',
    lifespanRange: '10-12 years',
    tldr: 'Boxers are athletic, joint-vulnerable, and live with elevated rates of GI issues and chronic colitis, which puts the Daily Duo at the center of the recommendation. Start joint support by age 4 and probiotic at any age.',
    commonHealthConcerns: [
      'Hip dysplasia and elbow dysplasia',
      'Chronic colitis (Boxer colitis)',
      'Cruciate ligament injury',
      'Cardiomyopathy (unrelated to supplements)',
      'Senior arthritis',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Boxers',
        body: 'Boxers are a deceptively athletic large breed with a real joint load. Hip dysplasia, cruciate tears, and senior arthritis are routine. They are also one of the few breeds with a named GI condition: Boxer colitis, also called histiocytic ulcerative colitis, which is overrepresented in young Boxers and presents as chronic bloody mucus diarrhea.\n\nBoxer cardiomyopathy is the major heart issue in the breed and is genetic, not nutritional. Supplements do not address it, but they do not interfere with cardiac care either.',
      },
      {
        heading: 'What supplements help',
        body: 'Daily Probiotic supports the GI baseline that is so often disrupted in the breed. Five named strains at proper CFU help firm stool and modulate the immune response in the gut. Probiotics are not a treatment for diagnosed histiocytic colitis, which needs antibiotics, but they are useful for the everyday GI noise that Boxers run into.\n\nHip and Joint covers the structural side. Clinical doses of glucosamine, chondroitin, MSM, omega-3, and turmeric give a Boxer the daily anti-inflammatory floor their joints benefit from. Start by age 4 to preserve cartilage before symptoms show.',
      },
      {
        heading: 'When to start',
        body: 'Probiotic from any age. Hip and Joint by age 4 at the latest. Boxers age into joint issues fast, and the supplementation is far more useful as prevention than as repair.',
      },
    ],
    recommendsProduct: 'daily-duo',
    reasonForRecommendation:
      'Boxers sit at the intersection of joint risk and chronic GI sensitivity. The Daily Duo addresses both at proper dosing for the weight class, and the bundle works out cheaper than buying the two chews separately.',
    dosingNote:
      'A 65 lb Boxer takes 1 Daily Probiotic chew and 2 Hip and Joint chews per day. Larger males at 75+ lbs go to 2 probiotic chews and 3 joint chews.',
    faqs: [
      {
        question: 'My Boxer has chronic bloody diarrhea. Is this Boxer colitis?',
        answer:
          'Possibly. Histiocytic ulcerative colitis is overrepresented in young Boxers and presents exactly that way. It needs vet diagnosis and antibiotic treatment, not probiotics alone. After diagnosis and treatment, a daily probiotic supports microbiome recovery.',
      },
      {
        question: 'When should I start joint chews for a Boxer?',
        answer:
          'By age 4 at the latest. Boxers carry real joint load from a young age and the early start preserves cartilage. Earlier if dysplasia is confirmed on X-ray.',
      },
      {
        question: 'My Boxer has heart disease. Can he take supplements?',
        answer:
          'Yes. Neither chew interacts with common cardiac medications. Boxer cardiomyopathy is genetic and is treated by your vet. Supplements support gut and joint health alongside that care.',
      },
      {
        question: 'My Boxer is on antibiotics for colitis. Should I wait on the probiotic?',
        answer:
          'You can give the probiotic during the antibiotic course, separated by at least 2 hours from the antibiotic so the medication does not kill the probiotic on contact. Continuing after the course helps the gut recover.',
      },
      {
        question: 'My senior Boxer is slowing down. Is it too late to start joint support?',
        answer:
          'Not at all. Hip and Joint works at any age. Senior Boxers often show meaningful mobility improvement in the first 3 to 4 weeks. Pair with weight management and a vet check for any prescription needs.',
      },
    ],
  },
  {
    slug: 'doodle',
    breedName: 'Doodle (Goldendoodle / Labradoodle)',
    size: 'large',
    weightRange: '45-90 lbs',
    lifespanRange: '10-15 years',
    tldr: 'Doodles inherit the joint risk of their retriever parent and the gut and skin sensitivity of their Poodle side, which makes the Daily Duo the right starting point. Start probiotic early and joint support by age 4 to 5.',
    commonHealthConcerns: [
      'Hip and elbow dysplasia',
      'Food allergies and atopic skin issues',
      'Ear infections',
      'Coat-related skin sensitivity',
      'Senior arthritis',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Doodles',
        body: 'Doodles inherit from both parent breeds. The retriever side brings hip dysplasia, cruciate risk, and the broad joint vulnerability of any large dog. The Poodle side adds elevated rates of allergies, sensitive skin, and ear infections. Most Doodles end up with at least one issue from each column over the course of their lives.\n\nTheir wavy or curly coat traps moisture and debris, which contributes to skin and ear issues. Coat care is meaningful for skin health in this breed group, and so is gut and immune support from a daily probiotic.',
      },
      {
        heading: 'What supplements help',
        body: 'Hip and Joint addresses the retriever-side joint load. Clinical doses of glucosamine, chondroitin, MSM, and omega-3 protect cartilage and reduce daily inflammation. Start by age 4 to 5 to get ahead of symptoms.\n\nDaily Probiotic supports the immune and gut sensitivity from the Poodle side. About 70 percent of immune function lives in the gut, and a settled microbiome reduces skin flares, ear infections, and intermittent loose stool. Most Doodle owners run both, which is the Daily Duo.',
      },
      {
        heading: 'When to start',
        body: 'Probiotic from any age, including the early weeks at home after a stressful transition. Hip and Joint by age 4 to 5 to preserve cartilage. With Doodles often living 12 to 15 years, the math on long-term supplementation is strongly in favor of starting early.',
      },
    ],
    recommendsProduct: 'daily-duo',
    reasonForRecommendation:
      'Doodles inherit both axes of risk from their parent breeds: large-dog joint load from the retriever, and gut and immune sensitivity from the Poodle. The Daily Duo addresses both at one price point and works out cheaper than buying the chews separately.',
    dosingNote:
      'A 60 lb Doodle takes 1 Daily Probiotic chew and 2 Hip and Joint chews per day. Doodles over 75 lbs go to 2 probiotic chews and 3 joint chews.',
    faqs: [
      {
        question: 'My Doodle has constant ear infections. Is this gut-related?',
        answer:
          'Often partially. Recurring otitis is frequently allergic in origin, and a meaningful share of allergic skin disease has a gut component. A daily probiotic plus proper ear hygiene and your vet’s treatment plan reduces flare frequency in many cases.',
      },
      {
        question: 'When should I start joint chews for a Doodle?',
        answer:
          'By age 4 to 5, earlier if dysplasia is confirmed on X-ray. Doodles inherit retriever-grade joint risk and benefit from preventive use rather than waiting for limping.',
      },
      {
        question: 'My Doodle has itchy skin. Will supplements help?',
        answer:
          'Often partially. The probiotic supports gut and immune function, which feeds into skin health. The omega-3 and turmeric in Hip and Joint add anti-inflammatory benefit. Neither replaces vet care for active allergies, but they reduce baseline flare frequency.',
      },
      {
        question: 'Is the chew safe for a Doodle with a chicken allergy?',
        answer:
          'The probiotic is chicken-flavored and not appropriate for confirmed chicken allergies. Hip and Joint is duck-flavored. Check both panels against known allergens before starting.',
      },
      {
        question: 'My Doodle is a puppy. When can I start supplements?',
        answer:
          'The probiotic is safe from 8 weeks. Most vets recommend waiting on Hip and Joint until growth plates close around 12 to 18 months in larger Doodles, since rapid-growth puppies have different joint needs than adults.',
      },
    ],
  },
  {
    slug: 'great-dane',
    breedName: 'Great Dane',
    size: 'giant',
    weightRange: '110-175 lbs',
    lifespanRange: '7-10 years',
    tldr: 'Great Danes are giant, short-lived, and live with severe joint load and bloat risk from day one, which makes the Daily Duo essentially required. Start joint support in young adulthood at the upper-end dosing.',
    commonHealthConcerns: [
      'Hip and elbow dysplasia',
      'Bloat and gastric torsion',
      'Dilated cardiomyopathy',
      'Wobbler syndrome (cervical spinal issues)',
      'Severe senior arthritis',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Great Danes',
        body: 'The Dane is one of the most structurally challenged breeds in the world. Their size means every joint takes massive load, and hip and elbow dysplasia rates are high. Wobbler syndrome, a cervical spinal condition, is also overrepresented and shows up as neck pain and rear-end weakness.\n\nBloat is the single biggest acute risk for the breed. Deep-chested giant breeds have the highest gastric dilatation and volvulus rates of any dog group, and Danes are at the top of the list. Dilated cardiomyopathy is the major heart issue and is largely genetic.\n\nAverage lifespan is 7 to 10 years, one of the shortest among popular breeds, which means daily quality-of-life support matters even more, not less.',
      },
      {
        heading: 'What supplements help',
        body: 'Hip and Joint is essentially required. Clinical glucosamine, chondroitin, and MSM at proper giant-breed doses (3 chews per day at this weight) plus omega-3 and turmeric give a Dane the daily anti-inflammatory floor their joints need. The dose is the dose; underdosing a giant breed wastes the supplement.\n\nDaily Probiotic supports digestion and reduces fermentation gas, which is one variable in bloat risk. Two chews per day at this weight. Probiotics are not a bloat preventative on their own, but they belong in the daily picture for any giant breed.',
      },
      {
        heading: 'When to start',
        body: 'Probiotic from puppyhood. Hip and Joint by age 1.5 to 2 once growth plates are closed. Danes mature into their joint risk almost immediately, and waiting for symptoms means starting from far behind on a breed whose timeline is already short.',
      },
    ],
    recommendsProduct: 'daily-duo',
    reasonForRecommendation:
      'Great Danes have the highest joint load of any common breed and elevated GI risk from their deep-chest anatomy. The Daily Duo addresses both at the upper dosing band that giant breeds need.',
    dosingNote:
      'A 140 lb Great Dane takes 2 Daily Probiotic chews and 3 Hip and Joint chews per day. Underdosing is the most common giant-breed supplement mistake.',
    faqs: [
      {
        question: 'How much chew does a Great Dane need?',
        answer:
          'Dogs over 75 lbs take 2 probiotic chews and 3 Hip and Joint chews per day. A 60-chew Hip and Joint canister lasts about 20 days at that dosing. Most Dane owners subscribe to keep up.',
      },
      {
        question: 'When should I start joint support for a Dane?',
        answer:
          'By 18 to 24 months once growth plates are closed. Danes mature into joint risk faster than other breeds and have shorter lifespans, so early preventive use makes more sense than waiting.',
      },
      {
        question: 'My Dane has a deep chest. Bloat risk?',
        answer:
          'Among the highest of any breed. Every Dane owner should know the bloat signs and have an emergency vet plan. Many Dane owners also do prophylactic gastropexy surgery. The probiotic reduces fermentation gas but is not a bloat preventative.',
      },
      {
        question: 'My young Dane has wobbler syndrome. Will joint chews help?',
        answer:
          'Wobbler is a spinal disease, not a joint disease, so Hip and Joint will not fix it. But many Wobbler dogs benefit from the anti-inflammatory support and from cartilage protection in joints now bearing weird loads. Discuss specifics with your vet.',
      },
      {
        question: 'My Dane is 7 and slowing down. Is it too late?',
        answer:
          'Not at all. Senior Danes often show meaningful mobility improvement within 3 to 4 weeks of starting Hip and Joint. The chew is NSAID-free and built for long-term daily use. Pair with weight management and your vet may be able to dial down NSAID doses.',
      },
    ],
  },
  {
    slug: 'siberian-husky',
    breedName: 'Siberian Husky',
    size: 'large',
    weightRange: '35-60 lbs',
    lifespanRange: '12-15 years',
    tldr: 'Huskies are athletic, long-lived for a working breed, and structurally healthier than most large dogs, with mild GI sensitivity and ophthalmic concerns as the main issues. Daily Probiotic is the right first move; add Hip and Joint around age 7 to 8 or for working dogs.',
    commonHealthConcerns: [
      'Mild food sensitivities',
      'Eye conditions (cataracts, corneal dystrophy)',
      'Hip dysplasia (lower than most large breeds)',
      'Hypothyroidism',
      'Zinc-responsive dermatosis',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Siberian Huskies',
        body: 'Huskies are structurally one of the healthier large breeds. Hip dysplasia exists but at lower rates than retrievers or shepherds. Their main breed-specific issues are ophthalmic: juvenile cataracts and corneal dystrophy are overrepresented. Zinc-responsive dermatosis is another well-known issue.\n\nGastrointestinally, Huskies are mostly steady but can be picky and run mild food sensitivities. Their high-mileage working background means joint wear is a real factor for any Husky doing serious work, sledding, or skijoring, even if pet Huskies stay structurally sound longer than other large breeds.',
      },
      {
        heading: 'What supplements help',
        body: 'Daily Probiotic is the wellness foundation. Five named strains support steady stool through diet changes, immune function, and coat health, which is what most pet Huskies need. The breed is famously low body fat and lean muscle, and coat shine is a meaningful health marker that probiotics support over a few months.\n\nHip and Joint becomes worth adding for working Huskies, athletic sport dogs, or any Husky over age 7 to 8. The clinical anti-inflammatory ingredients support the joints under load from years of running.',
      },
      {
        heading: 'When to start',
        body: 'Probiotic from any age. Hip and Joint around age 7 to 8 for pet Huskies, earlier for working or sport dogs. Huskies live long for a large breed, and the math on years of consistent supplementation pays off.',
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      'Huskies are structurally healthier than most large breeds and do not need joint support from young adulthood. A daily probiotic covers general wellness, gut sensitivity, and coat health, which is what the breed actually benefits from. Add Hip and Joint in middle age or for working dogs.',
    dosingNote:
      'A 50 lb Husky takes 1 Daily Probiotic chew per day. If joint support is added, 25 to 75 lb dogs take 2 Hip and Joint chews per day.',
    faqs: [
      {
        question: 'My Husky is picky. Will he eat the chew?',
        answer:
          'Most Huskies take the chicken-flavored probiotic and duck-flavored joint chew readily, but some picky individuals do better when the chew is broken into pieces and mixed with food. For an absolute refusal, the 90-day guarantee covers a full refund.',
      },
      {
        question: 'My working Husky runs a lot. Should I start joint support earlier?',
        answer:
          'Yes. High-mileage sled and skijoring dogs accumulate cartilage wear faster than pet Huskies. Starting Hip and Joint by age 4 to 5 protects the working career and the comfortable retirement.',
      },
      {
        question: 'Are PawBite chews safe alongside thyroid medication?',
        answer:
          'Yes. Neither chew interacts with levothyroxine or other thyroid medications. Give them as your vet directed.',
      },
      {
        question: 'My Husky has bad shedding. Will a probiotic help his coat?',
        answer:
          'Huskies shed; that is structural and a probiotic will not change it. But coat shine and skin health, which are downstream of gut health, often improve over a couple of months on a daily probiotic.',
      },
      {
        question: 'When should a senior Husky start joint support?',
        answer:
          'By age 7 to 8 for healthy Huskies, sooner if any stiffness or working-dog joint wear is evident. Huskies stay athletic longer than most large breeds but still benefit from preventive joint support before symptoms.',
      },
    ],
  },
  {
    slug: 'australian-shepherd',
    breedName: 'Australian Shepherd',
    size: 'medium',
    weightRange: '40-65 lbs',
    lifespanRange: '12-15 years',
    tldr: 'Aussies are athletic, work-driven, and structurally healthier than the average large breed, with hip dysplasia and food sensitivities as the consistent issues. The Daily Probiotic is a strong fit for general wellness; add joint support by age 5 to 6 for working dogs.',
    commonHealthConcerns: [
      'Hip dysplasia',
      'Food and environmental allergies',
      'MDR1 drug sensitivity (genetic)',
      'Working-dog joint wear',
      'Senior arthritis',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Australian Shepherds',
        body: 'Aussies are athletic, sharp, and structurally healthier than the average large or near-large breed. Hip dysplasia exists in the breed but at lower rates than retrievers or shepherds. The single most important genetic issue is MDR1, a drug sensitivity that affects how Aussies respond to certain prescription medications. It does not affect supplement use.\n\nFood allergies and environmental atopic skin issues are common, especially in show and pet lines. Working Aussies tend to be structurally sound but accumulate joint wear from high-mileage herding and agility work.',
      },
      {
        heading: 'What supplements help',
        body: 'Daily Probiotic supports the immune and gut sensitivity that drives a lot of the skin and stool complaints in the breed. Five named strains at proper CFU help firm stool, modulate immune signaling, and feed into coat and skin health. Most Aussies show firmer stool within 2 weeks.\n\nHip and Joint adds clinical joint support for working dogs and middle-aged or senior Aussies. Glucosamine, chondroitin, and the omega-3 and turmeric stack reduce daily inflammation and slow cartilage wear. Most pet Aussies do well on probiotic alone through young adulthood.',
      },
      {
        heading: 'When to start',
        body: 'Probiotic from any age. Hip and Joint by age 5 to 6 for healthy pet Aussies, earlier for high-mileage working or sport dogs. The breed lives 12 to 15 years on average, which makes preventive use mathematically very worthwhile.',
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      'Aussies are structurally healthier than the average breed and do not need joint support from young adulthood. The daily probiotic addresses the gut and skin sensitivity that drives most owner complaints. Add Hip and Joint in middle age or earlier for working dogs.',
    dosingNote:
      'A 55 lb Aussie takes 1 Daily Probiotic chew per day. If joint support is added, 50 to 75 lb dogs take 2 Hip and Joint chews per day.',
    faqs: [
      {
        question: 'My Aussie has MDR1 sensitivity. Are PawBite chews safe?',
        answer:
          'Yes. MDR1 is a prescription drug sensitivity, not a nutritional one. Neither the probiotic nor Hip and Joint contains the medications affected by MDR1. Always tell your vet about MDR1 status when prescription medications are discussed.',
      },
      {
        question: 'My Aussie has itchy skin. Will a probiotic help?',
        answer:
          'Often partially. A lot of allergic skin disease has a gut component, and probiotics support the immune side. Severe or persistent flares still need vet workup. Most owners notice less itching within a couple of months.',
      },
      {
        question: 'My agility Aussie runs hard. When should joint support start?',
        answer:
          'By age 4 to 5 for high-mileage sport and herding dogs. The mechanical wear of repetitive jumping and tight turns accumulates faster than in a pet dog. Earlier is better for working careers.',
      },
      {
        question: 'My Aussie has food allergies. Is the chew safe?',
        answer:
          'The probiotic is chicken-flavored and the joint chew is duck-flavored. Check both panels against known allergens. PawBite does not use corn, soy, wheat, or dairy.',
      },
      {
        question: 'When should a senior Aussie start joint support?',
        answer:
          'By age 6 to 7 if any stiffness shows up, or as preventive use from age 5 to 6. Aussies tend to stay athletic into old age, but cartilage benefits from preventive support before symptoms.',
      },
    ],
  },
  {
    slug: 'cavalier-king-charles-spaniel',
    breedName: 'Cavalier King Charles Spaniel',
    size: 'small',
    weightRange: '13-18 lbs',
    lifespanRange: '9-14 years',
    tldr: 'Cavaliers are small, affectionate, and live with two breed-defining conditions: mitral valve disease and syringomyelia. Supplements do not treat either directly, but the Daily Probiotic supports immune and gut health that feeds into overall quality of life. Joint support is useful in seniors.',
    commonHealthConcerns: [
      'Mitral valve disease (MVD)',
      'Syringomyelia',
      'Patellar luxation',
      'Mild food sensitivities',
      'Ear infections',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Cavaliers',
        body: 'Two conditions define the breed. Mitral valve disease, a progressive heart condition, affects most Cavaliers by middle age and is the most common cause of death in the breed. Syringomyelia, a neurological condition involving fluid pockets in the spinal cord, is also overrepresented and presents as head and neck pain.\n\nNeither condition is treated by nutritional supplements. Both need vet-directed care. The supportive supplement picture for Cavaliers is therefore about general wellness: gut, immune, skin, and joint health to support the dog through whatever else they are dealing with.',
      },
      {
        heading: 'What supplements help',
        body: 'Daily Probiotic supports the gut and immune health that feeds into skin, ears, and steady stool. Cavaliers are not famously gut-sensitive, but mild food sensitivities and ear infections are common. A settled microbiome reduces the frequency of those everyday issues.\n\nHip and Joint becomes worth adding in middle age or for any Cavalier with patellar luxation. The clinical glucosamine and chondroitin doses support cartilage, and the omega-3 has cardiovascular benefit that is supportive in a breed prone to heart disease.',
      },
      {
        heading: 'When to start',
        body: 'Probiotic from any age. Hip and Joint around age 7 or earlier if patellar luxation is diagnosed. Discuss any chronic condition supplementation with your vet, especially around mitral valve disease management.',
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      'Neither breed-defining Cavalier condition is treated by supplements directly. The Daily Probiotic supports the wider quality-of-life picture: gut, immune, skin, and coat. Add Hip and Joint in middle age for joint and cartilage support.',
    dosingNote:
      'A 16 lb Cavalier takes 1 Daily Probiotic chew per day. If joint support is added, dogs under 25 lbs take 1 Hip and Joint chew per day.',
    faqs: [
      {
        question: 'My Cavalier has mitral valve disease. Are supplements safe?',
        answer:
          'Neither chew interacts with common cardiac medications, but always tell your vet what supplements you are giving. The omega-3 in Hip and Joint has supportive cardiovascular benefit, but it is not a treatment for MVD. Stay coordinated with your cardiology vet.',
      },
      {
        question: 'My Cavalier has syringomyelia. Will supplements help?',
        answer:
          'Syringomyelia is a structural neurological condition, and supplements do not treat it. The anti-inflammatory profile in Hip and Joint may be supportive for general comfort, but discuss specifics with your vet. The breed needs vet-directed neurological care.',
      },
      {
        question: 'When should a Cavalier start joint support?',
        answer:
          'Around age 7 for healthy Cavaliers, or sooner if patellar luxation is diagnosed. The breed is not joint-vulnerable the way larger dogs are, but cartilage support helps in later years.',
      },
      {
        question: 'My Cavalier has chronic ear infections. Will a probiotic help?',
        answer:
          'Often partially. Recurring otitis is frequently allergic or gut-linked. A daily probiotic plus proper ear hygiene and vet care reduces flare frequency in many dogs.',
      },
      {
        question: 'How do I dose Hip and Joint for a small Cavalier?',
        answer:
          'Dogs under 25 lbs take 1 chew per day. For very small individuals, your vet may prefer half a chew to start. The chews break cleanly along the score line.',
      },
    ],
  },
  {
    slug: 'mini-schnauzer',
    breedName: 'Miniature Schnauzer',
    size: 'small',
    weightRange: '11-20 lbs',
    lifespanRange: '12-15 years',
    tldr: 'Mini Schnauzers are small, long-lived, and most known for pancreatitis risk and elevated triglycerides, which makes a low-fat diet the central health intervention. Daily Probiotic supports digestion; Hip and Joint becomes useful in middle age.',
    commonHealthConcerns: [
      'Pancreatitis',
      'Hyperlipidemia (elevated triglycerides)',
      'Bladder stones',
      'Diabetes',
      'Atopic skin issues',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Miniature Schnauzers',
        body: 'The defining health concern in the breed is pancreatitis. Mini Schnauzers are uniquely prone to high triglycerides, which is the major risk factor for pancreatitis flares. A low-fat diet is essentially mandatory in the breed, and any high-fat treat or table food can trigger an acute episode.\n\nBladder stones, diabetes, and skin issues are also overrepresented. Structurally, the breed is reasonably sound. They live 12 to 15 years on average, which is a long window for daily support.',
      },
      {
        heading: 'What supplements help',
        body: 'Daily Probiotic supports the gut microbiome and steady stool consistency, both of which are useful in a breed managing chronic pancreatitis risk. Probiotics also support recovery from acute pancreatitis episodes after vet treatment. The chews are low in fat and appropriate for the breed.\n\nHip and Joint becomes worth adding in middle age for general cartilage support. The breed is not heavily joint-vulnerable, but the omega-3 has cardiovascular and inflammatory benefit, and senior Mini Schnauzers benefit from the daily anti-inflammatory floor.',
      },
      {
        heading: 'Diet considerations',
        body: 'Fat is the variable. Discuss any treats and supplements with your vet if your Mini Schnauzer has a pancreatitis history. PawBite chews are appropriate for routine use, but every Mini Schnauzer with diagnosed pancreatitis needs an individualized diet plan.',
      },
      {
        heading: 'When to start',
        body: 'Probiotic from any age. Hip and Joint around age 7 to 8 for general wellness in this long-lived breed.',
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      'The breed’s central health issue is pancreatitis risk, where a stable gut microbiome supports digestion and recovery. The probiotic chew is low-fat and appropriate for routine use in this breed. Joint support is a useful add in middle age.',
    dosingNote:
      'A 16 lb Mini Schnauzer takes 1 Daily Probiotic chew per day. If joint support is added, dogs under 25 lbs take 1 Hip and Joint chew per day.',
    faqs: [
      {
        question: 'My Mini Schnauzer has had pancreatitis. Are chews safe?',
        answer:
          'PawBite chews are low in fat and appropriate for most Mini Schnauzers, but every dog with a pancreatitis history needs an individualized plan. Show the ingredient panel to your vet before starting.',
      },
      {
        question: 'My Mini Schnauzer has high triglycerides. Will supplements help?',
        answer:
          'Diet management is the main lever for triglycerides. The omega-3 in Hip and Joint has supportive cardiovascular benefit, but it does not replace a low-fat diet. Discuss with your vet.',
      },
      {
        question: 'My Mini Schnauzer has bladder stones. Is the chew safe?',
        answer:
          'Discuss with your vet, especially if your dog is on a prescription urinary diet. The chews are low in oxalate-related ingredients but specific cases vary.',
      },
      {
        question: 'When should a Mini Schnauzer start joint support?',
        answer:
          'Around age 7 to 8 for general wellness, sooner if patellar issues or stiffness emerge. The breed is not heavily joint-vulnerable but benefits from preventive cartilage support in later years.',
      },
      {
        question: 'My Mini Schnauzer is itchy. Will a probiotic help?',
        answer:
          'Often partially. Atopic skin disease is common in the breed and has a gut and immune component. A daily probiotic reduces baseline flare frequency in many dogs, but severe cases need vet workup.',
      },
    ],
  },
  {
    slug: 'shih-tzu',
    breedName: 'Shih Tzu',
    size: 'small',
    weightRange: '9-16 lbs',
    lifespanRange: '10-16 years',
    tldr: 'Shih Tzus are small, brachycephalic, and live with chronic skin, eye, and dental issues, plus moderate GI sensitivity. The Daily Probiotic is the high-value primary supplement; add joint support in middle age if patellar or hip problems emerge.',
    commonHealthConcerns: [
      'Atopic skin and ear infections',
      'Brachycephalic airway syndrome',
      'Dental disease',
      'Patellar luxation',
      'Eye problems (corneal ulcers, dry eye)',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Shih Tzus',
        body: 'Shih Tzus carry the typical brachycephalic concerns: airway issues, dental crowding, and eye sensitivity from prominent eyes. Atopic skin disease and recurring ear infections are the most common chronic quality-of-life issues, and a lot of that traces back to gut and immune health.\n\nStructurally, the breed is mostly sound but patellar luxation is overrepresented. They live 10 to 16 years, which is a long window for daily support to pay off in skin and coat quality as well as joint preservation.',
      },
      {
        heading: 'What supplements help',
        body: 'Daily Probiotic addresses the skin, ear, and gut sensitivity that defines the breed. Five named strains and the prebiotic blend support the immune system from the gut up, which feeds into the skin and ear issues that drive most owner complaints. Most dogs see firmer stool within 2 weeks and improvements in coat and skin within 4 to 8 weeks.\n\nHip and Joint becomes useful in middle age or sooner if patellar luxation is diagnosed. Glucosamine and chondroitin support cartilage and the anti-inflammatory profile helps with chronic low-grade inflammation.',
      },
      {
        heading: 'When to start',
        body: 'Probiotic from any age. Hip and Joint around age 7 to 8 for healthy Shih Tzus, sooner if patellar issues or stiffness appear. Long-lived small breeds reward years of consistent supplementation.',
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      'The dominant Shih Tzu complaints are skin, ear, and gut sensitivity, all of which respond to immune and microbiome support. A daily probiotic is the high-value primary supplement for the breed. Joint support becomes a useful add in middle age.',
    dosingNote:
      'A 12 lb Shih Tzu takes 1 Daily Probiotic chew per day. If joint support is added, dogs under 25 lbs take 1 Hip and Joint chew per day.',
    faqs: [
      {
        question: 'My Shih Tzu has chronic skin issues. Will a probiotic help?',
        answer:
          'Often partially. A lot of atopic skin disease has a gut and immune component, and probiotics support the immune side. Skin improvements are downstream and usually show up 4 to 8 weeks in. Severe or persistent cases still need vet workup.',
      },
      {
        question: 'My Shih Tzu has recurring ear infections. Is this gut-related?',
        answer:
          'Often partially. Recurring otitis is frequently allergic in origin, and allergic skin disease has a gut component. A daily probiotic plus proper ear hygiene and your vet’s treatment plan reduces flare frequency in many dogs.',
      },
      {
        question: 'Is the chew safe for a brachycephalic Shih Tzu?',
        answer:
          'Yes. The chews are soft and breakable. For very flat-faced individuals, break the chew into smaller pieces so the dog chews rather than inhales.',
      },
      {
        question: 'My Shih Tzu has dental disease. Should I still give chews?',
        answer:
          'Yes. The chews are soft and do not require heavy chewing. They are not a dental chew and do not replace dental cleanings, but they are appropriate for dogs with periodontal disease.',
      },
      {
        question: 'When should a senior Shih Tzu start joint support?',
        answer:
          'Around age 7 to 8 for general wellness, sooner if patellar luxation or stiffness shows up. The breed lives long enough that years of joint support pay back.',
      },
    ],
  },
  {
    slug: 'bernese-mountain-dog',
    breedName: 'Bernese Mountain Dog',
    size: 'giant',
    weightRange: '70-115 lbs',
    lifespanRange: '7-10 years',
    tldr: 'Berners are giant, gentle, and live with one of the shortest lifespans of any popular breed due to heavy cancer and joint risk. The Daily Duo is essentially required, and early supplementation matters more, not less, because the timeline is short.',
    commonHealthConcerns: [
      'Hip and elbow dysplasia',
      'Osteosarcoma and other cancers',
      'Cruciate ligament injury',
      'Bloat',
      'Severe senior arthritis',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Bernese Mountain Dogs',
        body: 'The Berner is one of the most heartbreaking breeds in terms of average lifespan, with elevated rates of multiple cancers driving the median to about 7 to 9 years. On the structural side, hip and elbow dysplasia rates are high, and cruciate tears are common past middle age.\n\nGastrointestinally, the breed is not famously sensitive, but the deep chest means bloat is a real background risk. Berners are gentle and slow-aging on the personality side, which can mask early joint stiffness from their owners.',
      },
      {
        heading: 'What supplements help',
        body: 'Hip and Joint is essentially required. Clinical glucosamine, chondroitin, MSM, omega-3, and turmeric at giant-breed doses give a Berner the daily anti-inflammatory floor their joints need. The breed has so much joint load that underdosing is the most common mistake.\n\nDaily Probiotic supports immune health and reduces fermentation gas, which is one variable in bloat risk. Probiotics are not a cancer preventative, but immune support has general value in a breed that runs heavy oncologic risk.',
      },
      {
        heading: 'When to start',
        body: 'Probiotic from puppyhood. Hip and Joint by age 1.5 to 2 once growth plates close. With a 7 to 9 year average lifespan, every year of preventive supplementation matters. Waiting for symptoms gives back time the breed does not have.',
      },
    ],
    recommendsProduct: 'daily-duo',
    reasonForRecommendation:
      'Berners carry the highest joint load of any popular working breed and live the shortest lives. The Daily Duo at giant-breed dosing addresses both joint and immune support. Few breeds benefit more from early, consistent supplementation.',
    dosingNote:
      'A 100 lb Bernese takes 2 Daily Probiotic chews and 3 Hip and Joint chews per day. Underdosing a giant breed is the most common supplement mistake.',
    faqs: [
      {
        question: 'When should I start joint support for a Berner?',
        answer:
          'By 18 to 24 months once growth plates close. The breed has elevated dysplasia rates and a short average lifespan, which makes early preventive use more important than for other large breeds.',
      },
      {
        question: 'My Berner has cancer treatment scheduled. Can he take supplements?',
        answer:
          'Talk to your oncology vet. Most supplements are safe alongside chemotherapy, but some may interact with specific protocols. The omega-3 and antioxidant profile in Hip and Joint has general supportive value but should be coordinated with the oncology team.',
      },
      {
        question: 'My Berner has a deep chest. Bloat risk?',
        answer:
          'Yes. Every Berner owner should know bloat signs and have an emergency vet plan. The probiotic reduces fermentation gas, which is one variable, but it is not a bloat preventative.',
      },
      {
        question: 'How much chew does a Berner need?',
        answer:
          'Dogs over 75 lbs take 2 probiotic chews and 3 Hip and Joint chews per day. Most Berner owners subscribe because the dosing adds up.',
      },
      {
        question: 'My senior Berner is slowing down. Is it too late?',
        answer:
          'No. Senior Berners often show meaningful mobility improvement within 3 to 4 weeks of starting Hip and Joint. Pair with weight management and your vet may be able to dial down prescription anti-inflammatories.',
      },
    ],
  },
  {
    slug: 'boston-terrier',
    breedName: 'Boston Terrier',
    size: 'small',
    weightRange: '12-25 lbs',
    lifespanRange: '11-15 years',
    tldr: 'Boston Terriers are small, brachycephalic, and live with chronic GI sensitivity, allergies, and eye issues. The Daily Probiotic is the highest-value daily supplement for the breed; joint support is a useful add in middle age.',
    commonHealthConcerns: [
      'Chronic flatulence and loose stool',
      'Brachycephalic airway syndrome',
      'Food and environmental allergies',
      'Patellar luxation',
      'Eye problems (corneal ulcers, cataracts)',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Boston Terriers',
        body: 'Bostons are one of the gassiest small breeds, and the joke is well-earned. Chronic flatulence, intermittent loose stool, and food sensitivities are the most consistent owner complaints. A meaningful share traces back to brachycephalic air swallowing, but a real share is microbial fermentation that responds well to probiotic support.\n\nStructurally, patellar luxation is the main orthopedic concern. Eye issues are common because of their prominent eyes. The breed lives 11 to 15 years on average, which is a long window for daily support.',
      },
      {
        heading: 'What supplements help',
        body: 'Daily Probiotic is the high-value supplement for the breed. Bifidobacterium and the prebiotic blend in PawBite specifically target fermentation gas, which is the symptom most Boston owners want fixed. Stool firmness usually improves within 2 weeks, and gas reduction often shows up in the first week.\n\nHip and Joint becomes worth adding in middle age or sooner if patellar luxation is diagnosed. Glucosamine and chondroitin support cartilage at a gentle daily dose appropriate for the size class.',
      },
      {
        heading: 'When to start',
        body: 'Probiotic from any age. Hip and Joint around age 7 to 8 for general wellness, sooner if patellar issues show up.',
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      'The defining Boston quality-of-life issue is gas and GI sensitivity, both of which respond directly to a daily probiotic at proper strain dosing. Joint support is a useful add in middle age, but the probiotic is the breed-specific high-impact pick.',
    dosingNote:
      'A 20 lb Boston takes 1 Daily Probiotic chew per day. If joint support is added, dogs under 25 lbs take 1 Hip and Joint chew per day.',
    faqs: [
      {
        question: 'My Boston has terrible gas. Will a probiotic actually help?',
        answer:
          'Yes, usually noticeably. The Bifidobacterium strain and prebiotic blend in PawBite target fermentation gas directly. Most owners notice less gas in the first week or two.',
      },
      {
        question: 'My Boston has chronic loose stool. Is it food allergies?',
        answer:
          'Possibly. The cheapest first test is a 30-day probiotic trial. If stool firms up within 2 weeks, the microbiome just needed rebalancing. If not, a vet-supervised elimination diet to rule out a specific allergy is the next step.',
      },
      {
        question: 'Are the chews safe for a brachycephalic Boston?',
        answer:
          'Yes. The chews are soft and breakable. For dogs that tend to inhale, break the chew into smaller pieces so the dog chews rather than swallows whole.',
      },
      {
        question: 'My Boston has allergies. Is the chew safe?',
        answer:
          'The probiotic is chicken-flavored and the joint chew is duck-flavored. Check both panels against known allergens. PawBite does not use corn, soy, wheat, or dairy.',
      },
      {
        question: 'When should a senior Boston start joint support?',
        answer:
          'Around age 7 to 8 for general wellness, sooner if patellar luxation or stiffness shows up. The breed lives long enough that years of joint support pay back.',
      },
    ],
  },
  {
    slug: 'pomeranian',
    breedName: 'Pomeranian',
    size: 'small',
    weightRange: '3-7 lbs',
    lifespanRange: '12-16 years',
    tldr: 'Pomeranians are tiny, long-lived, and most prone to dental disease, tracheal collapse, and patellar luxation. The Daily Probiotic supports immune and coat health; Hip and Joint becomes useful in middle age for patellar and arthritis support.',
    commonHealthConcerns: [
      'Dental disease',
      'Tracheal collapse',
      'Patellar luxation',
      'Hypoglycemia in very small individuals',
      'Alopecia X (coat loss)',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Pomeranians',
        body: 'Poms are tiny and live a long time, often 12 to 16 years. Dental disease is universal because of their small jaws. Tracheal collapse is the major airway issue. Patellar luxation is the dominant orthopedic concern.\n\nGastrointestinally, the breed is generally steady but small body size means small GI upsets become real problems fast, including dehydration and hypoglycemia in very small individuals. Alopecia X, a hormonal coat loss issue, is overrepresented in the breed but is unrelated to gut or joint supplementation.',
      },
      {
        heading: 'What supplements help',
        body: 'Daily Probiotic supports immune function, steady stool, and coat health. The breed is not famously sensitive, but a daily probiotic adds resilience through diet changes and stress. Coat shine improvements often show up 4 to 8 weeks into supplementation, which matters for a breed known for its coat.\n\nHip and Joint becomes worth adding for any Pom with patellar luxation or in middle age. The dose at this size is 1 chew per day, which is gentle and easy to give. Long-lived tiny breeds get more value from years of consistent joint support, not less.',
      },
      {
        heading: 'When to start',
        body: 'Probiotic from any age. Hip and Joint around age 7 to 8 for healthy Poms, earlier for any dog with diagnosed patellar luxation. For very small Poms, your vet may prefer half a chew to start.',
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      'The dominant Pom complaints (dental, tracheal collapse, patellar) are not primarily supplement-treatable, so the daily picture is general wellness. A daily probiotic supports immune, gut, and coat health, which is what the breed actually benefits from. Joint support becomes useful in middle age.',
    dosingNote:
      'A 5 lb Pomeranian takes 1 Daily Probiotic chew per day. For very small individuals under 4 lbs, break the chew in half. Hip and Joint dose for dogs under 25 lbs is 1 chew per day.',
    faqs: [
      {
        question: 'How do I dose for a tiny 3 lb Pom?',
        answer:
          'One chew per day, or half a chew if your vet prefers a lower starting dose. The chews break cleanly along the score line. Give with food.',
      },
      {
        question: 'My Pom is skipping on her back leg. Is that patellar luxation?',
        answer:
          'Often yes. Get a vet diagnosis for grading. Hip and Joint supports cartilage and reduces inflammation, which helps mild to moderate cases. Advanced grades may need surgical correction.',
      },
      {
        question: 'My Pom has tracheal collapse. Are chews safe?',
        answer:
          'Yes. The chews are soft and do not affect the trachea. Tracheal collapse is treated by your vet and managed with harness use, weight control, and sometimes medication.',
      },
      {
        question: 'My Pom has Alopecia X. Will supplements help his coat?',
        answer:
          'Alopecia X is hormonal and the coat loss is not primarily a gut or skin barrier issue. A daily probiotic supports skin and coat in general, but Alopecia X needs vet workup and sometimes specific treatment.',
      },
      {
        question: 'When should a senior Pom start joint support?',
        answer:
          'Around age 7 to 8 for general wellness, sooner if patellar luxation or stiffness shows up. Tiny breeds live long enough that years of joint support pay back in mobility.',
      },
    ],
  },
  {
    slug: 'havanese',
    breedName: 'Havanese',
    size: 'small',
    weightRange: '7-13 lbs',
    lifespanRange: '13-16 years',
    tldr: 'Havanese are small, long-lived, and structurally healthier than many small breeds, with mild allergies and patellar luxation as the most common issues. Daily Probiotic supports gut and coat health; joint support is a useful add in middle age.',
    commonHealthConcerns: [
      'Patellar luxation',
      'Hip dysplasia (some lines)',
      'Mild food and environmental allergies',
      'Dental disease',
      'Cataracts',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Havanese',
        body: 'Havanese are one of the healthier small breeds. Patellar luxation is the dominant orthopedic concern, and some lines show hip dysplasia. Mild allergies and atopic skin issues come up but are typically less severe than in some other small breeds.\n\nDental disease is common because of small jaws. Cataracts are overrepresented in the breed. The Havanese lives 13 to 16 years on average, which is a long timeline for daily supplementation to do real work.',
      },
      {
        heading: 'What supplements help',
        body: 'Daily Probiotic supports immune function, steady stool, and skin and coat health. The Havanese coat is a defining feature of the breed, and gut health feeds directly into coat shine and skin health over a few months.\n\nHip and Joint becomes worth adding in middle age or sooner if patellar luxation is diagnosed. The dose at this size is gentle and the chew is well-tolerated. Long-lived breeds reward years of consistent joint support.',
      },
      {
        heading: 'When to start',
        body: 'Probiotic from any age. Hip and Joint around age 7 to 8 for healthy Havanese, sooner for any dog with patellar luxation diagnosis or stiffness.',
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      'Havanese are structurally healthier than many small breeds and do not need joint support from young adulthood. The probiotic addresses gut, skin, and coat health, which is what the breed actually benefits from. Add joint support in middle age or earlier for patellar cases.',
    dosingNote:
      'A 10 lb Havanese takes 1 Daily Probiotic chew per day. If joint support is added, dogs under 25 lbs take 1 Hip and Joint chew per day.',
    faqs: [
      {
        question: 'My Havanese has a beautiful coat. Will a probiotic help maintain it?',
        answer:
          'Coat shine and skin health are downstream of gut health. Most Havanese owners notice improvements in coat over 4 to 8 weeks on a daily probiotic. Brushing and diet matter too, but a probiotic supports the underlying biology.',
      },
      {
        question: 'My Havanese is skipping on her back leg. Patellar luxation?',
        answer:
          'Often yes. Get a vet diagnosis for grading. Hip and Joint supports cartilage and reduces inflammation in mild to moderate cases. Advanced grades may need surgical correction.',
      },
      {
        question: 'My Havanese has mild allergies. Will a probiotic help?',
        answer:
          'Often partially. Allergic skin disease has a gut and immune component, and probiotics support the immune side. Most owners notice less itching within a couple of months. Severe cases still need vet workup.',
      },
      {
        question: 'Is the chew safe for a senior Havanese on medications?',
        answer:
          'Both chews are NSAID-free and built for long-term daily use. They do not interact with most common medications, but tell your vet what your dog is taking.',
      },
      {
        question: 'When should a Havanese start joint support?',
        answer:
          'Around age 7 to 8 for general wellness, sooner if patellar luxation or stiffness shows up. The breed lives long enough that years of joint support pay back.',
      },
    ],
  },
  {
    slug: 'shetland-sheepdog',
    breedName: 'Shetland Sheepdog',
    size: 'small',
    weightRange: '15-25 lbs',
    lifespanRange: '12-14 years',
    tldr: 'Shelties are small, athletic, and one of the healthier herding breeds, with MDR1 sensitivity and skin issues as the most common concerns. Daily Probiotic is the right first move; add joint support in middle age or for working dogs.',
    commonHealthConcerns: [
      'MDR1 drug sensitivity (genetic)',
      'Hip dysplasia (low rate)',
      'Skin and coat issues',
      'Hypothyroidism',
      'Collie eye anomaly',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Shetland Sheepdogs',
        body: 'Shelties are sharp, athletic, and structurally healthier than many small to mid-size breeds. Hip dysplasia rates exist but are low. The defining genetic issue is MDR1 drug sensitivity, which affects how Shelties respond to certain prescription medications but does not affect supplement use.\n\nSkin and coat issues come up, often tied to mild food sensitivities or environmental allergies. Hypothyroidism is the most common endocrine concern. Collie eye anomaly is a known ophthalmic issue in the breed.',
      },
      {
        heading: 'What supplements help',
        body: 'Daily Probiotic supports the immune and skin sensitivity that drives most owner complaints. The five named strains help firm stool, modulate immune signaling, and feed into the breed’s coat quality. Most Shelties show firmer stool within 2 weeks and coat improvements within 4 to 8 weeks.\n\nHip and Joint becomes worth adding for agility or sport Shelties, or any dog in middle age. The clinical doses of glucosamine and the omega-3 anti-inflammatory profile slow cartilage wear and support working careers.',
      },
      {
        heading: 'When to start',
        body: 'Probiotic from any age. Hip and Joint around age 6 to 7 for pet Shelties, earlier for high-mileage sport dogs. Long-lived small herding breeds reward consistent supplementation.',
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      'Shelties are structurally healthier than many breeds and do not need joint support from young adulthood. The daily probiotic addresses the skin and gut sensitivity that drives most complaints. Joint support becomes useful in middle age or for working dogs.',
    dosingNote:
      'A 20 lb Sheltie takes 1 Daily Probiotic chew per day. If joint support is added, dogs under 25 lbs take 1 Hip and Joint chew per day.',
    faqs: [
      {
        question: 'My Sheltie has MDR1 sensitivity. Are chews safe?',
        answer:
          'Yes. MDR1 is a prescription drug sensitivity, not a nutritional one. Neither chew contains medications affected by MDR1. Always tell your vet about MDR1 status when prescriptions are discussed.',
      },
      {
        question: 'My Sheltie has itchy skin. Will a probiotic help?',
        answer:
          'Often partially. Allergic skin disease has a gut and immune component, and probiotics support the immune side. Most owners notice less itching within a couple of months. Severe cases still need vet workup.',
      },
      {
        question: 'My agility Sheltie runs hard. When should joint support start?',
        answer:
          'By age 4 to 5 for high-mileage sport dogs. The mechanical wear of jumping and tight turns accumulates faster than in a pet dog. Earlier is better for working careers.',
      },
      {
        question: 'Are chews safe with thyroid medication?',
        answer:
          'Yes. Neither chew interacts with levothyroxine or other thyroid medications. Give them as your vet directed.',
      },
      {
        question: 'When should a senior Sheltie start joint support?',
        answer:
          'Around age 6 to 7 for general wellness, sooner if any stiffness emerges. Shelties stay athletic into old age but benefit from preventive cartilage support.',
      },
    ],
  },
  {
    slug: 'brittany',
    breedName: 'Brittany',
    size: 'medium',
    weightRange: '30-40 lbs',
    lifespanRange: '12-14 years',
    tldr: 'Brittanys are athletic, lean, and one of the healthiest popular breeds, with hip dysplasia and seizures as the most consistent issues. Daily Probiotic is the natural fit for general wellness; joint support is worth adding for working dogs or in middle age.',
    commonHealthConcerns: [
      'Hip dysplasia (low to moderate rate)',
      'Epilepsy',
      'Hypothyroidism',
      'Working-dog joint wear',
      'Mild allergies in some lines',
    ],
    byline: standardByline,
    sections: [
      {
        heading: 'Common health concerns for Brittanys',
        body: 'Brittanys are one of the healthier popular breeds. Hip dysplasia exists at low to moderate rates, generally below most retrievers. Epilepsy is the most well-known breed-specific neurological issue. Hypothyroidism comes up. Most Brittanys live 12 to 14 years and stay structurally sound through middle age.\n\nGastrointestinally, the breed is mostly steady. Some lines pick up mild food sensitivities or seasonal skin issues. Working Brittanys, which the breed is bred for, accumulate joint wear from years of field work that shows up in middle age.',
      },
      {
        heading: 'What supplements help',
        body: 'Daily Probiotic is the wellness baseline. Five named strains support steady stool, immune function, and coat health, which is what most pet Brittanys actually need. The chew is also useful around travel, novel water, and the stress of hunting trips.\n\nHip and Joint becomes worth adding for working Brittanys, field trial dogs, or any Brittany past age 7 to 8. The clinical anti-inflammatory ingredients support cartilage in joints under high-mileage load.',
      },
      {
        heading: 'When to start',
        body: 'Probiotic from any age. Hip and Joint around age 7 to 8 for pet Brittanys, earlier for working or sport dogs. Long-lived athletic breeds reward years of consistent supplementation.',
      },
    ],
    recommendsProduct: 'daily-probiotic',
    reasonForRecommendation:
      'Brittanys are structurally healthier than the average sporting breed and do not need joint support from young adulthood. The daily probiotic covers general wellness, gut sensitivity, and coat health. Joint support is a useful add for working dogs or in middle age.',
    dosingNote:
      'A 35 lb Brittany takes 1 Daily Probiotic chew per day. If joint support is added, 25 to 50 lb dogs take 2 Hip and Joint chews per day.',
    faqs: [
      {
        question: 'My Brittany has epilepsy. Are supplements safe?',
        answer:
          'Yes. Neither chew interacts with common anti-seizure medications. The omega-3 in Hip and Joint has supportive neurological value but is not a treatment for epilepsy. Coordinate with your vet for any chronic condition.',
      },
      {
        question: 'My working Brittany hunts every weekend. When should joint support start?',
        answer:
          'By age 4 to 5 for high-mileage working dogs. The mechanical wear of running birdy ground accumulates faster than in a pet dog. Earlier is better for working careers.',
      },
      {
        question: 'My Brittany has mild seasonal allergies. Will a probiotic help?',
        answer:
          'Often partially. Allergic skin disease has a gut and immune component, and probiotics support the immune side. Most owners notice reduced flare frequency within a couple of months.',
      },
      {
        question: 'My Brittany travels with me. Will the probiotic help with travel stomach?',
        answer:
          'Yes, that is one of the highest-value use cases. Travel stress, novel water, and diet changes are exactly what derails the gut. Start the probiotic a few weeks before a trip, not the day before.',
      },
      {
        question: 'When should a senior Brittany start joint support?',
        answer:
          'Around age 7 to 8 for general wellness, sooner if any stiffness or working-dog joint wear is evident. Brittanys age gracefully but cartilage benefits from preventive support before symptoms.',
      },
    ],
  },
];

export const breedPageBySlug = (slug: string): BreedPage | undefined =>
  breedPages.find((b) => b.slug === slug);
export const breedPageSlugs = (): string[] => breedPages.map((b) => b.slug);

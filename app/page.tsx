import { HeroSection } from '@/components/sections/hero';
import { TrustStrip } from '@/components/sections/trust-strip';
import { PromisesSection } from '@/components/sections/promises';
import { LoveSection } from '@/components/sections/love-section';
import { StatBand } from '@/components/sections/stat-band';
import { ProductShowcase } from '@/components/sections/product-showcase';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { JournalTeaser } from '@/components/sections/journal-teaser';
import { NewsletterSection } from '@/components/sections/newsletter';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <PromisesSection />
      <LoveSection />
      <StatBand />
      <ProductShowcase />
      <TestimonialsSection />
      <JournalTeaser />
      <NewsletterSection />
    </>
  );
}

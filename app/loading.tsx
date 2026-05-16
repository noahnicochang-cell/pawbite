import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { Mascot } from '@/components/brand/illustrations/characters/mascot';

/**
 * Default loading state — shown briefly during navigation while a server component renders.
 * Dynamic routes (e.g., /quiz/results) inherit this if they don't define their own loading.tsx.
 */
export default function Loading() {
  return (
    <Section background="cream" spacing="loose">
      <Container size="narrow" className="text-center">
        <div className="flex justify-center">
          <div className="animate-pulse-soft">
            <Mascot variant="sitting" size={140} bodyColor="#E8B547" />
          </div>
        </div>
        <p className="mt-6 font-hand text-2xl text-terracotta">Fetching the good stuff —</p>
      </Container>
    </Section>
  );
}

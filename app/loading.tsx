import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';

/**
 * Default loading state — shown briefly during navigation while a server component renders.
 */
export default function Loading() {
  return (
    <Section background="cream" spacing="loose">
      <Container size="narrow" className="text-center">
        <div className="flex justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-2 border-forest/20 border-t-forest" />
        </div>
        <p className="mt-6 font-sans text-sm uppercase tracking-[0.24em] text-forest/70">
          Loading
        </p>
      </Container>
    </Section>
  );
}

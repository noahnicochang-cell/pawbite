import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Squiggle } from '@/components/brand/illustrations/icons/squiggle';
import { promises } from '@/data/promises';

export function PromisesSection() {
  return (
    <Section background="mint" spacing="default">
      <Container size="narrow">
        <div className="text-center">
          <h2 className="fraunces-soft mb-4 text-balance text-4xl font-bold md:text-5xl">
            What we won&apos;t do.
          </h2>
          <div className="mb-12 flex justify-center">
            <Squiggle width={140} className="text-terracotta" />
          </div>
        </div>

        <ul className="space-y-8">
          {promises.map((p) => (
            <li key={p.headline} className="flex gap-5">
              <span className="mt-1 flex-shrink-0 font-hand text-3xl text-terracotta">✓</span>
              <div>
                <h3 className="fraunces-soft mb-1 text-xl font-bold text-forest md:text-2xl">
                  {p.headline}
                </h3>
                <p className="text-base leading-relaxed text-charcoal">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

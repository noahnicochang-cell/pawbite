import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Sparkle } from '@/components/brand/illustrations/icons/sparkle';
import { Heart } from '@/components/brand/illustrations/icons/heart';
import { Shield } from '@/components/brand/illustrations/icons/shield';
import { Star } from '@/components/brand/illustrations/icons/star';
import { heroStats } from '@/data/stats';

const icons = [Sparkle, Heart, Shield, Star];

export function StatBand() {
  return (
    <Section background="warmyellow" spacing="default">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {heroStats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <div key={stat.bigNumber} className="text-center">
                <Icon size={28} className="mx-auto mb-3 text-forest" />
                <div className="fraunces-soft text-balance text-3xl font-bold leading-none text-forest md:text-4xl">
                  {stat.bigNumber}
                </div>
                <div className="mt-2 text-xs uppercase tracking-wider text-forest/70">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

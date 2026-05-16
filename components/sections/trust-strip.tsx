import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Stethoscope } from '@/components/brand/illustrations/icons/stethoscope';
import { Star } from '@/components/brand/illustrations/icons/star';
import { Shield } from '@/components/brand/illustrations/icons/shield';
import { Paw } from '@/components/brand/illustrations/icons/paw';
import { USFactoryBadge } from '@/components/brand/illustrations/icons/us-factory-badge';
import { trustBadges } from '@/data/trust-badges';
import { cn } from '@/lib/utils';

const iconMap = {
  stethoscope: Stethoscope,
  star: Star,
  shield: Shield,
  paw: Paw,
  'us-factory': USFactoryBadge,
} as const;

const bgClasses = {
  warmyellow: 'bg-warmyellow',
  terracotta: 'bg-terracotta',
  mint: 'bg-mint',
  pinky: 'bg-pinky',
  cream: 'bg-cream border border-forest/15',
} as const;

const iconColor = {
  warmyellow: 'text-forest',
  terracotta: 'text-cream',
  mint: 'text-forest',
  pinky: 'text-forest',
  cream: 'text-forest',
} as const;

export function TrustStrip() {
  return (
    <Section background="offwhite" spacing="tight">
      <Container>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
          {trustBadges.map((b) => {
            const Icon = iconMap[b.iconKey];
            return (
              <div key={b.label} className="flex flex-col items-center gap-3 text-center">
                <div
                  className={cn(
                    'flex h-16 w-16 items-center justify-center rounded-full',
                    bgClasses[b.bgColor],
                  )}
                >
                  <Icon size={28} className={iconColor[b.bgColor]} />
                </div>
                <span className="text-sm font-semibold text-forest">{b.label}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

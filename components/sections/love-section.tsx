import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { DogChewScene } from '@/components/brand/illustrations/scenes/dog-chew-scene';
import { CalloutPill } from '@/components/brand/illustrations/callout-pill';
import { DashedArrow } from '@/components/brand/illustrations/icons/dashed-arrow';

export function LoveSection() {
  return (
    <Section background="cream" spacing="default">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="fraunces-soft mb-3 text-balance text-4xl font-bold md:text-5xl">
            Made with weird amounts of love.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-charcoal">
            We sweat the ingredient list so you don&apos;t have to. Here&apos;s what goes into every
            chew — and what stays out.
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl rounded-3xl border-2 border-forest/15 bg-offwhite p-8 md:p-12">
          <div className="flex justify-center">
            <DogChewScene />
          </div>

          {/* Desktop callouts */}
          <div className="pointer-events-none absolute left-2 top-12 hidden md:block">
            <CalloutPill variant="caveat" color="warmyellow" rotation={-8}>
              5 strains!
            </CalloutPill>
            <div className="ml-4 mt-1">
              <DashedArrow className="text-terracotta" width={60} height={30} />
            </div>
          </div>

          <div className="pointer-events-none absolute right-2 top-10 hidden md:block">
            <CalloutPill variant="caveat" color="pinky" rotation={6}>
              Vet-approved
            </CalloutPill>
          </div>

          <div className="pointer-events-none absolute bottom-20 left-4 hidden md:block">
            <CalloutPill variant="caveat" color="mint" rotation={-4}>
              No fillers
            </CalloutPill>
          </div>

          <div className="pointer-events-none absolute bottom-16 right-4 hidden md:block">
            <CalloutPill variant="caveat" color="terracotta" rotation={5}>
              Tail-wag tested
            </CalloutPill>
          </div>

          {/* Mobile callouts */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:hidden">
            <CalloutPill variant="caveat" color="warmyellow">
              5 strains!
            </CalloutPill>
            <CalloutPill variant="caveat" color="pinky" rotation={4}>
              Vet-approved
            </CalloutPill>
            <CalloutPill variant="caveat" color="mint" rotation={-3}>
              No fillers
            </CalloutPill>
            <CalloutPill variant="caveat" color="terracotta" rotation={2}>
              Tail-wag tested
            </CalloutPill>
          </div>
        </div>
      </Container>
    </Section>
  );
}

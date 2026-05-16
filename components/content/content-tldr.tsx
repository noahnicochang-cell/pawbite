import { Sparkle } from '@/components/brand/illustrations/icons/sparkle';

export function ContentTldr({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 rounded-2xl border-l-4 border-terracotta bg-warmyellow/15 p-6">
      <div className="mb-2 flex items-center gap-2">
        <Sparkle size={16} className="text-terracotta" />
        <span className="font-mono text-xs uppercase tracking-wider text-forest/70">
          Quick answer
        </span>
      </div>
      <p className="fraunces-soft text-balance text-lg italic leading-relaxed text-forest md:text-xl">
        {children}
      </p>
    </div>
  );
}

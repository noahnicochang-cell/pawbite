import Image from 'next/image';
import Link from 'next/link';
import { Canister } from '@/components/brand/canister';
import { Button } from '@/components/ui/button';
import type { Product } from '@/data/products';
import { cn } from '@/lib/utils';

export function ProductCard({
  product,
  featured = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  rotation: _rotation = 0,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  blobVariant: _blobVariant = 1,
}: {
  product: Product;
  featured?: boolean;
  rotation?: number;
  blobVariant?: 1 | 2 | 3 | 4 | 5 | 6;
}) {
  const accent = product.accentColor ?? '#2D5016';

  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        'group relative flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1',
        featured && 'md:scale-105',
      )}
    >
      {/* Product image — no border, no shadow, no badge */}
      <div className="mb-5 flex h-64 w-full items-end justify-center">
        {product.image ? (
          <Image
            src={product.image}
            alt={`${product.name} tin`}
            width={400}
            height={400}
            className="h-full w-auto object-contain object-top"
            style={{ clipPath: 'inset(0 0 12% 0)' }}
          />
        ) : (
          <Canister
            name={product.shortName}
            bandColor={product.bandColor}
            countLabel={product.countLabel}
            tagline={product.tagline}
            size="md"
          />
        )}
      </div>

      {/* Text block */}
      <h3 className="fraunces-soft mb-1 text-2xl font-bold text-forest">{product.name}</h3>
      <p className="mb-3 max-w-[200px] text-sm leading-relaxed text-charcoal/70">
        {product.oneLineDescription}
      </p>

      {/* Price + ship */}
      <div className="mb-4 flex items-center gap-2">
        <span className="font-display text-2xl font-bold" style={{ color: accent }}>
          ${product.subPrice.toFixed(2)}
        </span>
        {product.comingSoon && (
          <span className="rounded-full bg-charcoal/8 px-2 py-0.5 text-[11px] uppercase tracking-[0.18em] text-charcoal/50">
            Ships {product.comingSoon}
          </span>
        )}
      </div>

      <Button
        variant="outline"
        size="md"
        className="w-full max-w-[200px] rounded-full border-forest font-mono text-xs tracking-[0.18em] uppercase text-forest group-hover:bg-forest group-hover:text-cream"
      >
        Pre-order →
      </Button>
    </Link>
  );
}

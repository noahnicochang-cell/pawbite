import { NextResponse } from 'next/server';
import { createCheckout } from '@/lib/shopify';

const VARIANT_ID = process.env.SHOPIFY_VARIANT_ID!;

export async function POST() {
  try {
    const variantGid = VARIANT_ID.startsWith('gid://')
      ? VARIANT_ID
      : `gid://shopify/ProductVariant/${VARIANT_ID}`;

    const checkoutUrl = await createCheckout(variantGid, 1);
    return NextResponse.json({ checkoutUrl });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Checkout error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

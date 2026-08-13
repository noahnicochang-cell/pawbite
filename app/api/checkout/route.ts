import { NextResponse } from 'next/server';
import { createCheckout, getFirstVariantId } from '@/lib/shopify';

const VARIANT_ID = process.env.SHOPIFY_VARIANT_ID;
const PRODUCT_HANDLE = process.env.SHOPIFY_PRODUCT_HANDLE ?? 'calming-chews-for-dogs';

export async function POST() {
  try {
    let variantGid: string;

    if (VARIANT_ID) {
      variantGid = VARIANT_ID.startsWith('gid://')
        ? VARIANT_ID
        : `gid://shopify/ProductVariant/${VARIANT_ID}`;
    } else {
      variantGid = await getFirstVariantId(PRODUCT_HANDLE);
    }

    const checkoutUrl = await createCheckout(variantGid, 1);
    return NextResponse.json({ checkoutUrl });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Checkout error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

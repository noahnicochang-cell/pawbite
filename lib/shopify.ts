const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN!;
const SHOPIFY_STOREFRONT_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;
const API_VERSION = '2024-10';

// Headless-channel private tokens (shpat_*) authenticate with a different header
// than public Storefront tokens. Sending the wrong one returns 401.
function authHeader(): Record<string, string> {
  return SHOPIFY_STOREFRONT_TOKEN?.startsWith('shpat_')
    ? { 'Shopify-Storefront-Private-Token': SHOPIFY_STOREFRONT_TOKEN }
    : { 'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN };
}

async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const res = await fetch(
    `https://${SHOPIFY_STORE_DOMAIN}/api/${API_VERSION}/graphql.json`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify({ query, variables }),
    }
  );

  if (!res.ok) throw new Error(`Shopify API error: ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data as T;
}

const GET_PRODUCT_VARIANT = `
  query GetProductVariant($handle: String!) {
    productByHandle(handle: $handle) {
      variants(first: 1) {
        edges {
          node { id }
        }
      }
    }
  }
`;

export async function getFirstVariantId(productHandle: string): Promise<string> {
  const data = await shopifyFetch<{
    productByHandle: { variants: { edges: { node: { id: string } }[] } } | null;
  }>(GET_PRODUCT_VARIANT, { handle: productHandle });

  const id = data.productByHandle?.variants?.edges?.[0]?.node?.id;
  if (!id) throw new Error(`Product not found: ${productHandle}`);
  return id;
}

const CREATE_CART = `
  mutation CartCreate($variantId: ID!, $quantity: Int!) {
    cartCreate(input: {
      lines: [{ merchandiseId: $variantId, quantity: $quantity }]
    }) {
      cart {
        id
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export async function createCheckout(variantId: string, quantity = 1): Promise<string> {
  const data = await shopifyFetch<{
    cartCreate: { cart: { checkoutUrl: string }; userErrors: { message: string }[] };
  }>(CREATE_CART, { variantId, quantity });

  if (data.cartCreate.userErrors.length > 0) {
    throw new Error(data.cartCreate.userErrors[0].message);
  }

  return data.cartCreate.cart.checkoutUrl;
}

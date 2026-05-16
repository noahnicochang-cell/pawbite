# PawBite

A new DTC dog supplement brand. Launching with 2 SKUs: a daily probiotic chew and a hip + joint chew, with a subscription bundle (The Daily Duo).

## Status

Pre-implementation. Design locked. Implementation plan pending (via `superpowers:writing-plans`).

## Repository layout

```
designs/                              7 homepage design directions + 1 locked hybrid (Design 8) + index viewer
docs/superpowers/specs/               Locked design spec document
```

## Locked design

Design 8 (the hybrid combining Designs 4 + 6 + 7).

Open in browser:

```bash
open "designs/index.html"
```

The hybrid is featured at the top of the index.

## Source of truth

Single spec document containing every locked decision (brand, products, IA, page templates, tech stack, content scope, schema, imagery rules):

```
docs/superpowers/specs/2026-05-06-pawbite-site-design.md
```

## Tech stack (locked, per spec Section 13)

- Next.js 14+ App Router
- Tailwind CSS + shadcn/ui patterns
- Shopify (Storefront API + native checkout)
- Skio (subscriptions) — pending operator confirmation
- Klaviyo (email + SMS)
- Stamped (reviews) — pending operator confirmation
- Vercel (hosting)
- Help Scout (customer support)

## Pre-launch ops (not blocking the build)

- Acquire `pawbite.com` (currently parked on atom.com)
- Real product photography (once product in hand)
- Real founder identity + bio
- Vet advisory board (2–3 DVMs)
- cGMP + NASC certification verification
- Legal review (ToS, privacy, Prop 65, FDA disclaimers)

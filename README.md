# CL360 Prompt Engine™

Premium AI prompt-code platform for CareerLift360 LLC. The app helps entrepreneurs, healthcare admin professionals, content creators, and music marketers generate optimized prompts, browse reusable prompt codes, and prepare workflows for AI platforms including ChatGPT, Claude, Gemini, and Codex.

## Tech Stack

- React
- Vite
- TailwindCSS
- Static deployment ready for Render
- Supabase Auth for user accounts
- Progressive Web App support
- Capacitor iOS and Android mobile packaging

## Quick Start

```bash
npm install
npm run dev
```

Local development runs through Vite. The default local URL is usually `http://localhost:5173/`.

## Production Build

```bash
npm run build
npm run preview
```

`npm run build` generates the production-ready static output in `dist/`.

## Environment Setup

Copy `.env.example` to `.env.local` for local development:

```bash
cp .env.example .env.local
```

Only use `VITE_` variables for client-safe public values. Never place Stripe secret keys, webhook secrets, PHI, or private credentials in Vite client environment variables.

For Supabase user accounts, set:

```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_public_key
```

Saved dashboard prompts use a Supabase `saved_prompts` table with row-level security. See `docs/DEPLOYMENT.md` for the SQL schema and policies.

For Stripe checkout, either set a secure backend endpoint:

```bash
VITE_STRIPE_CHECKOUT_ENDPOINT=https://your-api.example.com/api/stripe/checkout
```

Or set Stripe-hosted Payment Links:

```bash
VITE_STRIPE_STARTER_PAYMENT_LINK=https://buy.stripe.com/...
VITE_STRIPE_PROFESSIONAL_PAYMENT_LINK=https://buy.stripe.com/...
VITE_STRIPE_ENTERPRISE_PAYMENT_LINK=https://buy.stripe.com/...
```

Do not expose `STRIPE_SECRET_KEY` in this frontend app.

## Deployment

Render configuration is included in `render.yaml`.

- Build command: `npm install && npm run build`
- Publish directory: `dist`
- Node version: `22`

Detailed deployment notes are in `docs/DEPLOYMENT.md`.

Latest production build verification is recorded in `docs/BUILD_VERIFICATION.md`.

PWA installation notes are in `docs/PWA.md`.

Capacitor mobile deployment notes are in `docs/MOBILE.md`.

## Folder Structure

```text
src/
  admin/        Admin expansion notes and future protected views
  components/   Reusable UI components
  data/         Prompt category and prompt-code catalog
  features/     Product sections grouped by domain
  services/     Stripe and future API integration placeholders
  types/        Shared domain shape notes
  utils/        Browser utilities
docs/           Deployment and operational documentation
public/         Static public assets
```

## Compliance Positioning

CL360 Prompt Engine™ is an educational prompt-code tool. It does not provide medical, legal, or financial advice, does not guarantee income, and should not be used to process PHI.

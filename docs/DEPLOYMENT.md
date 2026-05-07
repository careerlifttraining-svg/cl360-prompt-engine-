# Deployment Guide

## GitHub

1. Create a new GitHub repository.
2. Add this project folder to git.
3. Commit the source files, `package-lock.json`, `.env.example`, and `render.yaml`.
4. Do not commit `node_modules`, `dist`, `.npm-cache`, portable Node folders, logs, or local `.env` files.

## Local Verification

```bash
npm install
npm run build
npm run preview
```

The production build should complete and output compiled files to `dist/`.

## Render Static Site

1. In Render, create a new Static Site from the GitHub repository.
2. Use `npm install && npm run build` as the build command.
3. Use `dist` as the publish directory.
4. Set `NODE_VERSION` to `22`.
5. Add public Vite environment variables from `.env.example` as needed.

## Supabase Auth

Create a Supabase project and enable email/password authentication under Authentication settings. Add these Render environment variables:

```text
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-public-key
```

Use only the public anon key in the frontend. Do not expose the Supabase service role key in Vite or Render static site variables.

Create the saved prompts table in Supabase SQL Editor:

```sql
create table if not exists public.saved_prompts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  prompt text not null,
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.saved_prompts enable row level security;

create policy "Users can read their own saved prompts"
on public.saved_prompts
for select
to authenticated
using (auth.uid() = user_id);

create policy "Users can insert their own saved prompts"
on public.saved_prompts
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "Users can delete their own saved prompts"
on public.saved_prompts
for delete
to authenticated
using (auth.uid() = user_id);
```

## Environment Variables

Only expose client-safe values with the `VITE_` prefix. Do not place Stripe secret keys, webhook secrets, private API keys, customer records, PHI, or sensitive business data in Vite environment variables.

## Stripe Checkout

Stripe Checkout has two supported frontend paths:

1. **Recommended production path:** set `VITE_STRIPE_CHECKOUT_ENDPOINT` to a secure backend endpoint that creates Checkout Sessions with your Stripe secret key.
2. **Static-site fallback:** set Stripe-hosted Payment Links for each plan.

Frontend variables:

```text
VITE_STRIPE_CHECKOUT_ENDPOINT=https://your-api.example.com/api/stripe/checkout
VITE_STRIPE_STARTER_PRICE_ID=price_REPLACE_STARTER
VITE_STRIPE_PROFESSIONAL_PRICE_ID=price_REPLACE_PROFESSIONAL
VITE_STRIPE_ENTERPRISE_PRICE_ID=price_REPLACE_ENTERPRISE
VITE_STRIPE_STARTER_PAYMENT_LINK=https://buy.stripe.com/REPLACE_STARTER
VITE_STRIPE_PROFESSIONAL_PAYMENT_LINK=https://buy.stripe.com/REPLACE_PROFESSIONAL
VITE_STRIPE_ENTERPRISE_PAYMENT_LINK=https://buy.stripe.com/REPLACE_ENTERPRISE
```

Backend endpoint contract:

```http
POST /api/stripe/checkout
Content-Type: application/json
```

Request body:

```json
{
  "planKey": "professional",
  "priceId": "price_...",
  "lookupKey": "cl360_professional_monthly",
  "customerEmail": "customer@example.com",
  "successUrl": "https://your-site.com/?checkout=success#account",
  "cancelUrl": "https://your-site.com/?checkout=cancelled#pricing"
}
```

Response body:

```json
{
  "url": "https://checkout.stripe.com/c/session_..."
}
```

The backend must own the Stripe secret key and create the Checkout Session in `subscription` mode. Never expose `STRIPE_SECRET_KEY` in this Vite app.

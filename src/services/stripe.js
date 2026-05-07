export const stripePlans = {
  starter: {
    key: "starter",
    name: "Starter",
    lookupKey: "cl360_starter_monthly",
    priceId: import.meta.env.VITE_STRIPE_STARTER_PRICE_ID,
    paymentLink: import.meta.env.VITE_STRIPE_STARTER_PAYMENT_LINK,
  },
  professional: {
    key: "professional",
    name: "Professional",
    lookupKey: "cl360_professional_monthly",
    priceId: import.meta.env.VITE_STRIPE_PROFESSIONAL_PRICE_ID,
    paymentLink: import.meta.env.VITE_STRIPE_PROFESSIONAL_PAYMENT_LINK,
  },
  enterprise: {
    key: "enterprise",
    name: "Enterprise",
    lookupKey: "cl360_enterprise_monthly",
    priceId: import.meta.env.VITE_STRIPE_ENTERPRISE_PRICE_ID,
    paymentLink: import.meta.env.VITE_STRIPE_ENTERPRISE_PAYMENT_LINK,
  },
};

const checkoutEndpoint = import.meta.env.VITE_STRIPE_CHECKOUT_ENDPOINT;
const publicSiteUrl = import.meta.env.VITE_PUBLIC_SITE_URL || window.location.origin;

export function getStripePlan(planKey) {
  return stripePlans[planKey] ?? null;
}

export function hasStripeCheckout(planKey) {
  const plan = getStripePlan(planKey);
  return Boolean(plan && (checkoutEndpoint || plan.paymentLink));
}

export async function startStripeCheckout({ planKey, customerEmail }) {
  const plan = getStripePlan(planKey);

  if (!plan) {
    throw new Error(`Unknown Stripe plan: ${planKey}`);
  }

  if (checkoutEndpoint) {
    const response = await fetch(checkoutEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        planKey,
        priceId: plan.priceId,
        lookupKey: plan.lookupKey,
        customerEmail,
        successUrl: `${publicSiteUrl}/?checkout=success#account`,
        cancelUrl: `${publicSiteUrl}/?checkout=cancelled#pricing`,
      }),
    });

    if (!response.ok) {
      throw new Error("Stripe checkout could not be started. Please try again.");
    }

    const data = await response.json();

    if (!data.url) {
      throw new Error("Stripe checkout endpoint did not return a checkout URL.");
    }

    window.location.assign(data.url);
    return;
  }

  if (plan.paymentLink) {
    const url = new URL(plan.paymentLink);

    if (customerEmail) {
      url.searchParams.set("prefilled_email", customerEmail);
    }

    window.location.assign(url.toString());
    return;
  }

  throw new Error("Stripe checkout is not configured yet.");
}

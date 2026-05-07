export const stripePlans = {
  starter: {
    name: "Starter",
    lookupKey: "cl360_starter_monthly",
    priceId: "price_REPLACE_WITH_STRIPE_ID",
  },
  pro: {
    name: "Pro",
    lookupKey: "cl360_pro_monthly",
    priceId: "price_REPLACE_WITH_STRIPE_ID",
  },
  enterprise: {
    name: "Enterprise",
    lookupKey: "cl360_enterprise_custom",
    priceId: "price_REPLACE_WITH_STRIPE_ID",
  },
};

export async function createCheckoutSession(planKey) {
  const plan = stripePlans[planKey];

  if (!plan) {
    throw new Error(`Unknown Stripe plan: ${planKey}`);
  }

  // Replace with a call to your backend, for example:
  // POST /api/stripe/checkout { priceId: plan.priceId }
  return {
    status: "placeholder",
    plan,
    message: "Stripe Checkout backend endpoint is not connected yet.",
  };
}

import { useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import { useAuth } from "../../context/AuthContext";
import { hasStripeCheckout, startStripeCheckout } from "../../services/stripe";

const plans = [
  {
    key: "starter",
    name: "Starter",
    price: "$9",
    description: "Essential prompt-code access for solo builders getting started.",
    cta: "Start Starter",
    features: [
      "Core CL360 prompt-code library",
      "Category search and filtering",
      "Copy-ready prompts",
      "PDF export for saved workflows",
    ],
  },
  {
    key: "professional",
    name: "Professional",
    price: "$29",
    description: "Advanced workflows for entrepreneurs, creators, and operators.",
    cta: "Upgrade to Professional",
    features: [
      "Everything in Starter",
      "Prompt Generator workflow builder",
      "Business automation and content codes",
      "Healthcare admin and music marketing packs",
    ],
    featured: true,
  },
  {
    key: "enterprise",
    name: "Enterprise",
    price: "$99",
    description: "Premium prompt-code systems for teams, agencies, and admin-heavy workflows.",
    cta: "Start Enterprise",
    features: [
      "Everything in Professional",
      "Team-ready prompt library structure",
      "Custom code pack expansion path",
      "Admin and Stripe integration readiness",
    ],
  },
];

export default function PricingPlaceholder() {
  const { user } = useAuth();
  const [activePlan, setActivePlan] = useState("");
  const [message, setMessage] = useState("");

  async function handleCheckout(plan) {
    setMessage("");
    setActivePlan(plan.key);

    try {
      await startStripeCheckout({
        planKey: plan.key,
        customerEmail: user?.email,
      });
    } catch (error) {
      setMessage(error.message || "Stripe checkout is unavailable right now.");
      setActivePlan("");
    }
  }

  return (
    <section id="pricing" className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Monthly Pricing"
          title="Founding user access plans."
          description="Beta access gives early adopters a clear path into CL360 as new prompt-code features, dashboards, and workflow tools are tested weekly."
        />
        {message ? (
          <p className="mt-5 rounded-md border border-amber-300/25 bg-amber-300/10 p-4 text-sm leading-6 text-amber-50">
            {message}
          </p>
        ) : null}

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`glass-card glass-card-hover rounded-lg p-6 ${
                plan.featured
                  ? "border-clblue-300/50 shadow-glow"
                  : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-black text-white">{plan.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{plan.description}</p>
                </div>
                {plan.featured ? (
                  <span className="rounded-md bg-white px-2.5 py-1 text-xs font-black text-ink shadow-[0_0_20px_rgba(255,255,255,0.18)]">
                    FOUNDING
                  </span>
                ) : null}
              </div>
              <p className="mt-6 text-4xl font-black text-white">
                {plan.price}
                <span className="text-base font-semibold text-slate-400">/month</span>
              </p>
              <p className="mt-2 inline-flex rounded-md border border-clblue-300/25 bg-clblue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-clblue-100">
                {hasStripeCheckout(plan.key) ? "Beta checkout ready" : "Beta access opening soon"}
              </p>
              <ul className="mt-6 grid gap-3 text-sm text-slate-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-clblue-300 shadow-[0_0_14px_rgba(117,194,255,0.65)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => handleCheckout(plan)}
                disabled={activePlan === plan.key}
                className="mt-6 min-h-11 w-full rounded-md border border-clblue-300/35 bg-clblue-500/15 px-4 text-sm font-bold text-white/90 shadow-[0_0_22px_rgba(22,140,255,0.14)] transition duration-300 hover:-translate-y-0.5 hover:border-clblue-300/60 hover:bg-clblue-500/20 disabled:cursor-not-allowed disabled:opacity-70"
                title="Start secure Stripe Checkout."
              >
                {activePlan === plan.key ? "Opening Stripe..." : plan.cta}
              </button>
              <p className="mt-3 text-center text-xs leading-5 text-slate-500">
                Secure checkout powered by Stripe as paid access opens.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

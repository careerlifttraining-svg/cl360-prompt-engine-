import SectionHeader from "../../components/SectionHeader";

const plans = [
  {
    name: "Starter",
    price: "$9",
    description: "Essential prompt-code access for solo builders getting started.",
    cta: "Start With Starter",
    features: [
      "Core CL360 prompt-code library",
      "Category search and filtering",
      "Copy-ready prompts",
      "PDF export for saved workflows",
    ],
  },
  {
    name: "Professional",
    price: "$29",
    description: "Advanced workflows for entrepreneurs, creators, and operators.",
    cta: "Choose Professional",
    features: [
      "Everything in Starter",
      "Prompt Generator workflow builder",
      "Business automation and content codes",
      "Healthcare admin and music marketing packs",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "Premium prompt-code systems for teams, agencies, and admin-heavy workflows.",
    cta: "Request Enterprise",
    features: [
      "Everything in Professional",
      "Team-ready prompt library structure",
      "Custom code pack expansion path",
      "Admin and Stripe integration readiness",
    ],
  },
];

export default function PricingPlaceholder() {
  return (
    <section id="pricing" className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Monthly Pricing"
          title="Choose your CL360 prompt-code tier."
          description="Simple monthly access for a premium AI prompt-code tool. Stripe checkout labels are in place and ready to connect when payment keys are available."
        />

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
                    BEST
                  </span>
                ) : null}
              </div>
              <p className="mt-6 text-4xl font-black text-white">
                {plan.price}
                <span className="text-base font-semibold text-slate-400">/month</span>
              </p>
              <p className="mt-2 inline-flex rounded-md border border-clblue-300/25 bg-clblue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-clblue-100">
                Stripe integration coming soon
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
                disabled
                className="mt-6 min-h-11 w-full rounded-md border border-clblue-300/35 bg-clblue-500/15 px-4 text-sm font-bold text-white/80 shadow-[0_0_22px_rgba(22,140,255,0.14)] transition duration-300 hover:border-clblue-300/60 hover:bg-clblue-500/20"
                title="Connect this button to Stripe Checkout when payment keys are ready."
              >
                {plan.cta}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

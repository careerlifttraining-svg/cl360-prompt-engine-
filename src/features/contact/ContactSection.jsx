import SectionHeader from "../../components/SectionHeader";

const contactOptions = [
  {
    label: "Partnerships",
    value: "Prompt-code licensing, education bundles, and CL360 rollout support.",
  },
  {
    label: "Enterprise",
    value: "Team-ready prompt libraries, admin workflows, and private code-pack planning.",
  },
  {
    label: "Support",
    value: "Questions about pricing, platform fit, deployment, or future Stripe access.",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeader
          eyebrow="Contact"
          title="Bring CL360 into your workflow."
          description="Use CL360 Prompt Engine™ for premium AI prompt systems, content workflows, healthcare admin education, and music marketing execution."
        />

        <div className="glass-card rounded-lg p-5 sm:p-6">
          <div className="grid gap-3 sm:grid-cols-3">
            {contactOptions.map((option) => (
              <div
                key={option.label}
                className="rounded-md border border-white/10 bg-black/25 p-4 transition duration-300 hover:-translate-y-1 hover:border-clblue-300/35 hover:bg-white/[0.06]"
              >
                <h3 className="text-sm font-black uppercase tracking-[0.18em] text-clblue-300">
                  {option.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{option.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-3 rounded-md border border-clblue-300/20 bg-clblue-500/10 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold text-white">CareerLift360 LLC</p>
              <p className="mt-1 text-sm text-slate-300">
                Ready for custom prompt-code packs, team workflows, or deployment support.
              </p>
            </div>
            <a className="premium-button min-h-11 text-sm" href="mailto:hello@careerlift360.com">
              Contact CL360
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

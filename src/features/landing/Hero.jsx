const proofPoints = [
  "Paid prompt-code library",
  "Built for revenue workflows",
  "Copy, customize, deploy",
];

const audienceCards = [
  {
    label: "Entrepreneurs",
    value:
      "Launch offers, automate SOPs, sharpen decisions, and turn rough ideas into usable AI workflows.",
  },
  {
    label: "Healthcare Admin",
    value:
      "Create non-clinical admin prompts for intake summaries, claims follow-up, scheduling, and documentation support.",
  },
  {
    label: "Content Creators",
    value:
      "Build repeatable content systems for authority posts, offer explainers, scripts, captions, and campaign planning.",
  },
  {
    label: "Music Marketers",
    value:
      "Plan release campaigns, fan funnels, promo calendars, and audience messaging without starting from a blank page.",
  },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20"
    >
      <div className="blue-grid pointer-events-none absolute inset-x-0 top-0 h-[34rem]" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-clblue-500/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clblue-300 sm:text-sm">
            CareerLift360 LLC AI Prompt-Code Platform
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.98] text-white drop-shadow-[0_0_28px_rgba(22,140,255,0.2)] sm:text-6xl lg:text-7xl">
            CL360 Prompt Engine&trade;
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-slate-300 sm:text-xl">
            A paid prompt-code system for entrepreneurs, healthcare admin professionals,
            content creators, and music marketers who want faster execution, cleaner AI
            outputs, and reusable workflows they can trust.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {proofPoints.map((point) => (
              <span
                key={point}
                className="rounded-md border border-clblue-300/25 bg-clblue-500/10 px-3 py-2 text-sm font-semibold text-clblue-50 shadow-[0_0_22px_rgba(22,140,255,0.12)] backdrop-blur"
              >
                {point}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#generator"
              className="premium-button"
            >
              Build My Prompt
            </a>
            <a
              href="#library"
              className="secondary-button"
            >
              View Prompt Codes
            </a>
          </div>
        </div>

        <div className="print-panel glass-card glass-card-hover relative overflow-hidden rounded-lg p-4">
          <div className="absolute right-8 top-8 h-28 w-28 rounded-full bg-clblue-500/20 blur-3xl" />
          <div className="relative rounded-md border border-clblue-300/20 bg-ink/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Premium Engine
                </p>
                <p className="mt-1 text-lg font-bold text-white">Monetizable AI workflows</p>
              </div>
              <span className="rounded-md border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-200">
                PRO
              </span>
            </div>
            <div className="mt-5 grid gap-3">
              {audienceCards.map((item, index) => (
                <div
                  key={item.label}
                  className="rounded-md border border-white/10 bg-white/[0.045] px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-clblue-300/30 hover:bg-white/[0.075]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-slate-100">{item.label}</span>
                    <span className="text-xs font-semibold text-clblue-300">
                      CL360-{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

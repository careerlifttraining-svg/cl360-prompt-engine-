const ctaStats = [
  { label: "Prompt categories", value: "6" },
  { label: "AI platforms", value: "4" },
  { label: "Starter plan", value: "$9" },
];

export default function ConversionCta() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass-card relative overflow-hidden rounded-lg p-5 sm:p-8">
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-clblue-500/20 blur-3xl" />
          <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-clblue-300">
                Premium prompt-code engine
              </p>
              <h2 className="mt-3 text-2xl font-black leading-tight text-white sm:text-4xl">
                Turn every AI session into a repeatable workflow.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
                Generate platform-specific prompts, browse proven prompt-code patterns,
                save your best outputs, and upgrade when you are ready for a full CL360
                workflow library.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a className="premium-button" href="#pricing">
                Compare Plans
              </a>
              <a className="secondary-button" href="#account">
                Create Account
              </a>
            </div>
          </div>

          <div className="relative mt-6 grid gap-3 sm:grid-cols-3">
            {ctaStats.map((stat) => (
              <div key={stat.label} className="rounded-md border border-white/10 bg-black/25 p-4">
                <p className="text-3xl font-black text-white">{stat.value}</p>
                <p className="mt-1 text-sm font-semibold text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

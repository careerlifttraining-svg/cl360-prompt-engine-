const navItems = [
  { label: "Account", href: "#account" },
  { label: "Generator", href: "#generator" },
  { label: "Library", href: "#library" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/82 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-2xl no-print">
      <nav className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="CL360 home">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-clblue-300/50 bg-clblue-500/15 text-sm font-black text-white shadow-glow transition hover:scale-105">
              CL
            </span>
            <span className="min-w-0">
              <span className="block truncate text-xs font-semibold uppercase tracking-[0.22em] text-silver sm:text-sm sm:tracking-[0.28em]">
                CareerLift360 LLC
              </span>
              <span className="block truncate text-sm font-bold text-white sm:text-base">
                CL360 Prompt Engine&trade;
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-4 py-2 text-sm font-semibold text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#generator"
            className="inline-flex min-h-11 shrink-0 items-center rounded-md bg-white px-3 text-sm font-black text-ink shadow-[0_0_26px_rgba(255,255,255,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-clblue-100 sm:px-4"
          >
            Start
          </a>
        </div>

        <div className="touch-scroll mt-3 flex gap-2 overflow-x-auto pb-1 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 shrink-0 items-center rounded-md border border-white/10 bg-white/[0.06] px-4 text-sm font-bold text-slate-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

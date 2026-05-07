const navItems = [
  { label: "Generator", href: "#generator" },
  { label: "Library", href: "#library" },
  { label: "Pricing", href: "#pricing" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/75 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-2xl no-print">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="CL360 home">
          <span className="flex h-11 w-11 items-center justify-center rounded-md border border-clblue-300/50 bg-clblue-500/15 text-sm font-black text-white shadow-glow transition hover:scale-105">
            CL
          </span>
          <span>
            <span className="block text-xs font-semibold uppercase tracking-[0.28em] text-silver sm:text-sm">
              CareerLift360 LLC
            </span>
            <span className="block text-base font-bold text-white">CL360 Prompt Engine&trade;</span>
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
          href="#pricing"
          className="hidden min-h-10 items-center rounded-md bg-white px-4 text-sm font-black text-ink shadow-[0_0_26px_rgba(255,255,255,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-clblue-100 sm:inline-flex"
        >
          Unlock Pro
        </a>
      </nav>
    </header>
  );
}

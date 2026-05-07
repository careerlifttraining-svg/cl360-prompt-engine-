import NavBar from "./components/NavBar";
import PricingPlaceholder from "./features/checkout/PricingPlaceholder";
import PromptGenerator from "./features/generator/PromptGenerator";
import Hero from "./features/landing/Hero";
import LegalPages from "./features/legal/LegalPages";
import PromptLibrary from "./features/library/PromptLibrary";

export default function App() {
  return (
    <div className="min-h-screen text-white">
      <NavBar />
      <main>
        <Hero />
        <PromptGenerator />
        <PromptLibrary />
        <PricingPlaceholder />
        <LegalPages />
      </main>
      <footer className="border-t border-white/10 bg-black/20 px-4 py-8 text-center text-sm text-slate-400 backdrop-blur sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <p>© 2026 CareerLift360 LLC. CL360 Prompt Engine™.</p>
          <nav className="flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-[0.18em]">
            <a className="transition hover:text-white" href="#privacy-policy">
              Privacy Policy
            </a>
            <a className="transition hover:text-white" href="#terms-of-use">
              Terms of Use
            </a>
            <a className="transition hover:text-white" href="#disclaimer">
              Disclaimer
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

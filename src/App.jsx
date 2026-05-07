import NavBar from "./components/NavBar";
import PricingPlaceholder from "./features/checkout/PricingPlaceholder";
import ContactSection from "./features/contact/ContactSection";
import AuthSection from "./features/auth/AuthSection";
import PromptGenerator from "./features/generator/PromptGenerator";
import ConversionCta from "./features/landing/ConversionCta";
import Hero from "./features/landing/Hero";
import LegalPages from "./features/legal/LegalPages";
import PromptLibrary from "./features/library/PromptLibrary";
import WaitlistSection from "./features/waitlist/WaitlistSection";
import { contactLinks, mailto } from "./data/contactLinks";

export default function App() {
  return (
    <div className="min-h-screen text-white">
      <NavBar />
      <main>
        <Hero />
        <ConversionCta />
        <PromptGenerator />
        <PromptLibrary />
        <PricingPlaceholder />
        <WaitlistSection />
        <AuthSection />
        <ContactSection />
        <LegalPages />
      </main>
      <footer className="border-t border-white/10 bg-black/25 px-4 py-8 text-center text-sm text-slate-400 backdrop-blur sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-[1fr_auto] md:items-center md:text-left">
          <div>
            <p className="text-base font-black text-white">CareerLift360 LLC</p>
            <p className="mt-1">© 2026 CareerLift360 LLC. CL360 Prompt Engine™.</p>
            <div className="mt-3 grid gap-1 text-sm font-semibold">
              <a className="break-all text-clblue-300 transition hover:text-white" href={mailto(contactLinks.supportEmail, "CL360 Business Support")}>
                {contactLinks.supportLabel}: {contactLinks.supportEmail}
              </a>
              <a className="break-all text-clblue-300 transition hover:text-white" href={mailto(contactLinks.creativeEmail, "CL360 Music and Creative Inquiry")}>
                {contactLinks.creativeLabel}: {contactLinks.creativeEmail}
              </a>
              <div className="mt-2 flex flex-wrap gap-2">
                {contactLinks.socials.map((social) => (
                  <a
                    key={social.label}
                    className="rounded-md border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs font-bold text-clblue-300 transition hover:border-clblue-300/40 hover:text-white"
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
            <p className="mt-2 max-w-xl text-xs leading-5 text-slate-500">
              Educational AI prompt-code tool. No medical, legal, or financial advice.
              No PHI processing. No guarantee of income or business results.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] md:justify-end">
            <a className="transition hover:text-white" href="#generator">
              Generator
            </a>
            <a className="transition hover:text-white" href="#library">
              Library
            </a>
            <a className="transition hover:text-white" href="#pricing">
              Pricing
            </a>
            <a className="transition hover:text-white" href="#account">
              Account
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
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

import SectionHeader from "../../components/SectionHeader";
import { legalPages } from "./legalContent";

export default function LegalPages() {
  return (
    <section id="legal" className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Legal"
          title="Policies and disclaimers."
          description="Plain-language usage boundaries for CL360 Prompt Engine™ as an educational AI prompt-code tool."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {legalPages.map((page) => (
            <article key={page.id} id={page.id} className="glass-card rounded-lg p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-clblue-300">
                Updated {page.updated}
              </p>
              <h3 className="mt-3 text-2xl font-black text-white">{page.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{page.intro}</p>

              <div className="mt-6 grid gap-4">
                {page.sections.map((section) => (
                  <div
                    key={section.heading}
                    className="rounded-md border border-white/10 bg-black/25 p-4"
                  >
                    <h4 className="text-sm font-bold text-white">{section.heading}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{section.body}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

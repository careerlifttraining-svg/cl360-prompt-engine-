import SectionHeader from "../../components/SectionHeader";
import { contactLinks, mailto } from "../../data/contactLinks";

const contactOptions = [
  {
    label: "Business / Beta Support",
    value: "Use this for business, beta support, platform questions, and founding user access.",
    email: contactLinks.supportEmail,
    subject: "CL360 Beta Feedback",
  },
  {
    label: "Platform Inquiries",
    value: "Use this for CL360 dashboard access, prompt-code platform questions, and support.",
    email: contactLinks.supportEmail,
    subject: "CL360 Platform Inquiry",
  },
  {
    label: "Music / Creative",
    value: "Use this for music marketing, creative inquiries, artist campaigns, and partnerships.",
    email: contactLinks.creativeEmail,
    subject: "CL360 Music and Creative Inquiry",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeader
          eyebrow="Feedback"
          title="Submit feedback as a founding user."
          description="CL360 Prompt Engine™ is in beta access. Early adopters can help shape prompt-code categories, dashboard tools, and weekly feature testing."
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
                <a
                  className="mt-4 inline-flex break-all text-sm font-bold text-clblue-300 transition hover:text-white"
                  href={mailto(option.email, option.subject)}
                >
                  {option.email}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-3 rounded-md border border-clblue-300/20 bg-clblue-500/10 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold text-white">CareerLift360 LLC</p>
              <p className="mt-1 text-sm text-slate-300">
                Request founding user access, submit beta feedback, or ask about custom
                prompt-code packs.
              </p>
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
            </div>
            <a
              className="premium-button min-h-11 text-sm"
              href={mailto(contactLinks.supportEmail, "CL360 Beta Feedback")}
            >
              Submit Feedback
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import { contactLinks, mailto } from "../../data/contactLinks";

const industries = [
  "Healthcare Admin",
  "Music Marketing",
  "Content Creation",
  "Business Automation",
  "Social Media",
  "Entrepreneurship",
  "Other",
];

const storageKey = "cl360_beta_waitlist";

function getStoredSubmissions() {
  try {
    return JSON.parse(window.localStorage.getItem(storageKey) || "[]");
  } catch {
    return [];
  }
}

export default function WaitlistSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [industry, setIndustry] = useState(industries[0]);
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const submission = {
      id: crypto.randomUUID?.() || `${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      industry,
      createdAt: new Date().toISOString(),
    };

    const submissions = getStoredSubmissions();
    const withoutDuplicate = submissions.filter(
      (item) => item.email.toLowerCase() !== submission.email.toLowerCase(),
    );

    window.localStorage.setItem(
      storageKey,
      JSON.stringify([submission, ...withoutDuplicate].slice(0, 100)),
    );

    setStatus("You are on the CL360 beta waitlist. We will notify you when premium features launch.");
    setName("");
    setEmail("");
    setIndustry(industries[0]);
  }

  return (
    <section id="waitlist" className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeader
          eyebrow="Beta Waitlist"
          title="Get notified when premium features launch."
          description="Join the CL360 early adopter list for updates on saved dashboards, premium prompt-code packs, Stripe access, and weekly beta features."
        />

        <form onSubmit={handleSubmit} className="glass-card rounded-lg p-5 sm:p-6">
          <div className="grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-200">Name</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="panel-input"
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-200">Email</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="panel-input"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-200">Industry</span>
              <select
                value={industry}
                onChange={(event) => setIndustry(event.target.value)}
                className="panel-input"
              >
                {industries.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
          </div>

          <button type="submit" className="premium-button mt-5 w-full">
            Join Beta Waitlist
          </button>

          <p className="mt-3 text-center text-xs leading-5 text-slate-500">
            Stored locally for now. No PHI, sensitive records, or private client data.
          </p>

          {status ? (
            <p className="mt-4 rounded-md border border-emerald-300/25 bg-emerald-400/10 p-3 text-sm leading-6 text-emerald-50">
              {status}
            </p>
          ) : null}

          <div className="mt-5 rounded-md border border-white/10 bg-black/20 p-4 text-sm leading-6 text-slate-300">
            <p className="font-bold text-white">Beta access and support</p>
            <a className="mt-2 block break-all font-bold text-clblue-300 transition hover:text-white" href={mailto(contactLinks.supportEmail, "CL360 Beta Waitlist")}>
              {contactLinks.supportLabel}: {contactLinks.supportEmail}
            </a>
            <a className="mt-1 block break-all font-bold text-clblue-300 transition hover:text-white" href={mailto(contactLinks.creativeEmail, "CL360 Music and Creative Inquiry")}>
              {contactLinks.creativeLabel}: {contactLinks.creativeEmail}
            </a>
            <div className="mt-3 flex flex-wrap gap-2">
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
        </form>
      </div>
    </section>
  );
}

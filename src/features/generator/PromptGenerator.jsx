import { useMemo, useState } from "react";
import CopyButton from "../../components/CopyButton";
import SectionHeader from "../../components/SectionHeader";

const industries = [
  "Healthcare Admin",
  "Music Marketing",
  "Content Creation",
  "Business Automation",
  "Social Media",
];

const goals = [
  "Create a campaign plan",
  "Write high-converting copy",
  "Build an automation workflow",
  "Summarize and organize information",
  "Generate strategic ideas",
  "Create a reusable SOP",
];

const promptStyles = ["Viral", "Executive", "Persuasive", "Technical", "Educational"];

const aiPlatforms = ["ChatGPT", "Claude", "Gemini", "Codex"];

const platformGuidance = {
  ChatGPT: "Use clear role framing, step-by-step reasoning instructions, and a polished final answer format.",
  Claude: "Use detailed context, explicit constraints, and ask for careful analysis before concise recommendations.",
  Gemini: "Use multimodal-friendly structure, concise sections, and direct instructions for comparing options.",
  Codex: "Use implementation-focused instructions, file-aware steps, acceptance criteria, and verification commands.",
};

const styleGuidance = {
  Viral: "Make the output punchy, shareable, emotionally clear, and optimized for hooks, retention, and action.",
  Executive: "Make the output concise, strategic, boardroom-ready, and focused on priorities, risks, and decisions.",
  Persuasive: "Make the output conversion-focused with benefits, proof, objections, urgency, and a clear next step.",
  Technical: "Make the output precise, structured, constraint-aware, and easy to validate or implement.",
  Educational: "Make the output clear, teachable, example-rich, and organized for learning and retention.",
};

export default function PromptGenerator() {
  const [industry, setIndustry] = useState(industries[0]);
  const [goal, setGoal] = useState(goals[0]);
  const [promptStyle, setPromptStyle] = useState(promptStyles[1]);
  const [aiPlatform, setAiPlatform] = useState(aiPlatforms[0]);
  const [audience, setAudience] = useState("");
  const [context, setContext] = useState("");

  const generatedPrompt = useMemo(() => {
    return `You are using CL360 Prompt Engine™ to create an optimized prompt for ${aiPlatform}.

Role:
Act as a senior ${industry} AI workflow strategist.

Goal:
${goal}.

Target Audience:
${audience || "[define the audience, customer, patient admin group, fan segment, or internal team]"}.

Prompt Style:
${promptStyle}. ${styleGuidance[promptStyle]}

Platform Optimization:
${platformGuidance[aiPlatform]}

Context:
${context || "[add business details, source notes, constraints, examples, brand voice, compliance requirements, or desired deliverable]"}.

Task:
Create a production-ready prompt that helps the user accomplish the selected goal in the ${industry} industry.

Return:
1. Optimized prompt ready to paste into ${aiPlatform}.
2. Input fields the user should fill in before running it.
3. Recommended output format.
4. Quality checklist for judging the result.
5. One advanced CL360 variation for higher-quality output.
6. One caution or compliance note relevant to ${industry}.`;
  }, [aiPlatform, audience, context, goal, industry, promptStyle]);

  return (
    <section id="generator" className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Prompt Generator"
          title="Generate optimized prompts by industry and platform."
          description="Select the use case, prompt style, and AI platform, then generate a CL360 prompt tuned for the workflow."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <form className="print-panel glass-card rounded-lg p-5 sm:p-6">
            <div className="grid gap-4">
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

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-200">Goal</span>
                <select
                  value={goal}
                  onChange={(event) => setGoal(event.target.value)}
                  className="panel-input"
                >
                  {goals.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-200">Prompt Style</span>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {promptStyles.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setPromptStyle(item)}
                      className={`min-h-10 rounded-md border px-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${
                        promptStyle === item
                          ? "border-clblue-300 bg-clblue-500/25 text-white shadow-glow"
                          : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-clblue-300/40 hover:bg-white/[0.07]"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-200">AI Platform</span>
                <div className="grid grid-cols-2 gap-2">
                  {aiPlatforms.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setAiPlatform(item)}
                      className={`min-h-10 rounded-md border px-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${
                        aiPlatform === item
                          ? "border-clblue-300 bg-clblue-500/25 text-white shadow-glow"
                          : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-clblue-300/40 hover:bg-white/[0.07]"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-200">Audience</span>
                <input
                  value={audience}
                  onChange={(event) => setAudience(event.target.value)}
                  placeholder="Example: founders, clinic admins, fans, customers"
                  className="panel-input"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-200">Context</span>
                <textarea
                  value={context}
                  onChange={(event) => setContext(event.target.value)}
                  rows="5"
                  placeholder="Paste notes, constraints, examples, brand voice, or business details."
                  className="panel-input min-h-32 py-3"
                />
              </label>
            </div>
          </form>

          <div className="print-panel glass-card glass-card-hover rounded-lg border-clblue-300/20 p-5 sm:p-6">
            <div className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-clblue-300">
                  Generated Prompt
                </p>
                <h3 className="mt-1 text-xl font-bold text-white">CL360-ready output</h3>
              </div>
              <div className="flex gap-2 no-print">
                <CopyButton text={generatedPrompt} label="Copy Prompt" />
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex min-h-10 items-center justify-center rounded-md border border-white/15 bg-white/10 px-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/15 hover:shadow-glow"
                >
                  Export PDF
                </button>
              </div>
            </div>
            <pre className="mt-5 whitespace-pre-wrap rounded-md border border-white/10 bg-black/35 p-4 text-sm leading-7 text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              {generatedPrompt}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

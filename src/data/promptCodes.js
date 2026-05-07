export const categories = [
  "Thinking Codes",
  "Prompt Building Codes",
  "Content Codes",
  "Business Automation Codes",
  "Healthcare Admin Codes",
  "Music Marketing Codes",
];

export const promptCodes = [
  {
    id: "think-001",
    category: "Thinking Codes",
    title: "Decision Lens",
    code: "CL360-THINK-DECISION-LENS",
    outcome: "Compare options with tradeoffs, risks, and a recommendation.",
    prompt:
      "Act as a strategic advisor. Evaluate [decision] across cost, speed, quality, risk, and long-term leverage. Return a ranked recommendation with the strongest objection to your own answer.",
  },
  {
    id: "think-002",
    category: "Thinking Codes",
    title: "Root Cause Map",
    code: "CL360-THINK-ROOT-CAUSE",
    outcome: "Find deeper causes behind a blocker or recurring problem.",
    prompt:
      "Analyze [problem] using first principles. Separate symptoms from causes, identify the top three leverage points, and propose one low-risk next action.",
  },
  {
    id: "build-001",
    category: "Prompt Building Codes",
    title: "Prompt Architect",
    code: "CL360-BUILD-ARCHITECT",
    outcome: "Turn a rough request into a polished prompt.",
    prompt:
      "Transform this request into a clear production prompt: [request]. Include role, objective, inputs, constraints, format, quality bar, and edge cases.",
  },
  {
    id: "build-002",
    category: "Prompt Building Codes",
    title: "Output Spec Builder",
    code: "CL360-BUILD-OUTPUT-SPEC",
    outcome: "Create strict response formats for repeatable workflows.",
    prompt:
      "Design an output specification for [workflow]. Define sections, required fields, validation rules, tone, and examples of acceptable output.",
  },
  {
    id: "content-001",
    category: "Content Codes",
    title: "Authority Post",
    code: "CL360-CONTENT-AUTHORITY",
    outcome: "Draft clear thought-leadership content.",
    prompt:
      "Write a professional authority post about [topic] for [audience]. Use a sharp opening, practical insights, and a credible call to action without hype.",
  },
  {
    id: "content-002",
    category: "Content Codes",
    title: "Offer Explainer",
    code: "CL360-CONTENT-OFFER",
    outcome: "Explain a service or product in buyer-ready language.",
    prompt:
      "Explain [offer] to [target customer]. Cover the problem, promise, process, proof points, and next step in a concise SaaS-style tone.",
  },
  {
    id: "biz-001",
    category: "Business Automation Codes",
    title: "Workflow Builder",
    code: "CL360-AUTO-WORKFLOW",
    outcome: "Map a repeatable business process into automation steps.",
    prompt:
      "Map the workflow for [business process]. Identify triggers, inputs, tools, decision points, outputs, owners, and automation opportunities.",
  },
  {
    id: "biz-002",
    category: "Business Automation Codes",
    title: "SOP Generator",
    code: "CL360-AUTO-SOP",
    outcome: "Create a clean operating procedure.",
    prompt:
      "Create an SOP for [task]. Include purpose, scope, prerequisites, steps, quality checks, exception handling, and handoff notes.",
  },
  {
    id: "health-001",
    category: "Healthcare Admin Codes",
    title: "Patient Intake Summary",
    code: "CL360-HEALTH-INTAKE",
    outcome: "Summarize administrative intake notes.",
    prompt:
      "Summarize these healthcare admin intake notes: [notes]. Extract appointment context, missing information, follow-up tasks, and non-clinical admin risks.",
  },
  {
    id: "health-002",
    category: "Healthcare Admin Codes",
    title: "Claims Follow-Up Draft",
    code: "CL360-HEALTH-CLAIMS",
    outcome: "Draft payer or billing follow-up language.",
    prompt:
      "Draft a professional claims follow-up message for [claim situation]. Keep it administrative, concise, compliant, and focused on next documentation needed.",
  },
  {
    id: "music-001",
    category: "Music Marketing Codes",
    title: "Release Campaign",
    code: "CL360-MUSIC-RELEASE",
    outcome: "Plan a music release marketing sequence.",
    prompt:
      "Create a 30-day release campaign for [artist/song]. Include audience angle, content pillars, platform cadence, email/SMS ideas, and conversion goals.",
  },
  {
    id: "music-002",
    category: "Music Marketing Codes",
    title: "Fan Funnel",
    code: "CL360-MUSIC-FAN-FUNNEL",
    outcome: "Build a listener-to-fan conversion path.",
    prompt:
      "Design a fan funnel for [artist/genre]. Include discovery content, opt-in offer, nurture sequence, merch or ticket offer, and metrics to track.",
  },
];

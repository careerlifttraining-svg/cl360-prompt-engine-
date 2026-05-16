export function generatePrompt({ industry, goal, style, platform, audience }) {
  return `
You are using CL360 Prompt Engine™ to create an optimized prompt for ${platform || "ChatGPT"}.

Role:
Act as a senior ${industry || "business"} AI workflow strategist.

Goal:
${goal || "Create a clear, useful prompt."}

Target Audience:
${audience || "[define the audience, customer, patient admin group, fan segment, or internal team]"}

Prompt Style:
${style || "Executive"}. Make the output clear, strategic, structured, and ready to use.

Task:
Create a complete, high-quality prompt that includes:
1. Role
2. Context
3. Objective
4. Instructions
5. Output format
6. Constraints
7. Success criteria

Final Output:
Give me a copy-ready prompt that can be pasted directly into ${platform || "ChatGPT"}.
`;
}

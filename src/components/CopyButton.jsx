import { useState } from "react";
import { copyText } from "../utils/clipboard";

export default function CopyButton({ text, label = "Copy" }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const ok = await copyText(text);
    if (!ok) return;
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex min-h-10 items-center justify-center rounded-md border border-clblue-300/35 bg-clblue-500/10 px-4 text-sm font-bold text-clblue-50 shadow-[0_0_18px_rgba(22,140,255,0.12)] transition duration-300 hover:-translate-y-0.5 hover:border-clblue-300 hover:bg-clblue-500/20 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-clblue-300"
    >
      {copied ? "Copied" : label}
    </button>
  );
}

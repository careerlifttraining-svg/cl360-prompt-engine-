import CopyButton from "../../components/CopyButton";

export default function PromptCard({ item }) {
  return (
    <article className="print-panel glass-card glass-card-hover rounded-lg p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-clblue-300">
            {item.category}
          </p>
          <h3 className="mt-2 text-xl font-bold text-white">{item.title}</h3>
          <p className="mt-2 text-sm text-slate-300">{item.outcome}</p>
        </div>
        <span className="rounded-md border border-silver/20 bg-silver/10 px-3 py-1 text-xs font-bold text-silver shadow-[0_0_18px_rgba(216,222,233,0.08)]">
          {item.code}
        </span>
      </div>

      <p className="mt-5 rounded-md border border-white/10 bg-black/30 p-4 text-sm leading-7 text-slate-100">
        {item.prompt}
      </p>

      <div className="mt-4 flex flex-wrap gap-2 no-print">
        <CopyButton text={item.prompt} label="Copy Prompt" />
        <CopyButton text={item.code} label="Copy Code" />
      </div>
    </article>
  );
}

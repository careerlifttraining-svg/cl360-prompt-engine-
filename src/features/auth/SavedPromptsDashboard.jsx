import { useEffect, useState } from "react";
import CopyButton from "../../components/CopyButton";
import { deleteSavedPrompt, listSavedPrompts } from "../../services/savedPrompts";

export default function SavedPromptsDashboard({ user }) {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");

  async function loadPrompts() {
    if (!user?.id) return;

    setLoading(true);
    setStatus("");

    try {
      const rows = await listSavedPrompts(user.id);
      setPrompts(rows);
    } catch (error) {
      setStatus(error.message || "Could not load saved prompts.");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(promptId) {
    setStatus("");

    try {
      await deleteSavedPrompt({ userId: user.id, promptId });
      setPrompts((current) => current.filter((item) => item.id !== promptId));
    } catch (error) {
      setStatus(error.message || "Could not delete saved prompt.");
    }
  }

  useEffect(() => {
    loadPrompts();

    function handleSavedPrompt() {
      loadPrompts();
    }

    window.addEventListener("cl360:saved-prompt", handleSavedPrompt);
    return () => window.removeEventListener("cl360:saved-prompt", handleSavedPrompt);
  }, [user?.id]);

  return (
    <div className="mt-6 rounded-md border border-white/10 bg-black/20 p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-clblue-300">
            Dashboard
          </p>
          <h4 className="mt-1 text-xl font-black text-white">Saved Prompts</h4>
        </div>
        <button
          type="button"
          onClick={loadPrompts}
          className="inline-flex min-h-10 items-center justify-center rounded-md border border-white/15 bg-white/10 px-4 text-sm font-bold text-white transition hover:border-clblue-300/40 hover:bg-white/15"
        >
          Refresh
        </button>
      </div>

      {status ? (
        <p className="mt-4 rounded-md border border-amber-300/25 bg-amber-300/10 p-3 text-sm leading-6 text-amber-50">
          {status}
        </p>
      ) : null}

      {loading ? (
        <p className="mt-4 text-sm text-slate-300">Loading saved prompts...</p>
      ) : prompts.length ? (
        <div className="mt-4 grid gap-3">
          {prompts.map((item) => (
            <article key={item.id} className="rounded-md border border-white/10 bg-black/30 p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h5 className="text-base font-black text-white">{item.title}</h5>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">
                    {new Date(item.created_at).toLocaleString()}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <CopyButton text={item.prompt} label="Copy" />
                  <button
                    type="button"
                    onClick={() => handleDelete(item.id)}
                    className="inline-flex min-h-10 items-center justify-center rounded-md border border-white/15 bg-white/10 px-4 text-sm font-bold text-white transition hover:border-red-300/40 hover:bg-red-500/15"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <p className="mt-3 line-clamp-4 whitespace-pre-wrap text-sm leading-6 text-slate-300">
                {item.prompt}
              </p>
              {item.metadata ? (
                <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-clblue-100">
                  {["industry", "goal", "promptStyle", "aiPlatform"].map((key) =>
                    item.metadata[key] ? (
                      <span
                        key={key}
                        className="rounded-md border border-clblue-300/20 bg-clblue-500/10 px-2 py-1"
                      >
                        {item.metadata[key]}
                      </span>
                    ) : null,
                  )}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      ) : (
        <p className="mt-4 rounded-md border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300">
          No saved prompts yet. Generate a prompt below and select “Save to Dashboard.”
        </p>
      )}
    </div>
  );
}

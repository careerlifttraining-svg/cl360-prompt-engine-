import { useMemo, useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import { categories, promptCodes } from "../../data/promptCodes";
import CategorySidebar from "./CategorySidebar";
import PromptCard from "./PromptCard";

export default function PromptLibrary() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filteredCodes = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return promptCodes.filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const searchable = `${item.title} ${item.category} ${item.code} ${item.outcome} ${item.prompt}`.toLowerCase();
      const matchesSearch = !normalizedQuery || searchable.includes(normalizedQuery);
      return matchesCategory && matchesSearch;
    });
  }, [query, selectedCategory]);

  return (
    <section id="library" className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Prompt Code Library"
            title="Searchable CL360 code systems."
            description="Filter by category, search by use case, and copy reusable prompts or prompt codes into your workspace."
          />
          <div className="no-print w-full lg:max-w-md">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-200">Search library</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search codes, categories, outcomes..."
                className="panel-input min-h-12 px-4"
              />
            </label>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[280px_1fr]">
          <CategorySidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
            totalCount={promptCodes.length}
          />

          <div>
            <div className="mb-4 flex items-center justify-between gap-3 text-sm text-slate-300">
              <span>
                Showing <strong className="text-white">{filteredCodes.length}</strong> codes
              </span>
              <button
                type="button"
                onClick={() => window.print()}
                className="no-print inline-flex min-h-10 items-center justify-center rounded-md border border-white/15 bg-white/10 px-4 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/15 hover:shadow-glow"
              >
                Export Library PDF
              </button>
            </div>

            {filteredCodes.length ? (
              <div className="grid gap-4 xl:grid-cols-2">
                {filteredCodes.map((item) => (
                  <PromptCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="glass-card rounded-lg p-8 text-center text-slate-300">
                No prompt codes match that search.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

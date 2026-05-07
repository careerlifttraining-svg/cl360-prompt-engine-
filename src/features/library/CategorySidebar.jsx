export default function CategorySidebar({ categories, selectedCategory, onSelect, totalCount }) {
  return (
    <aside className="no-print glass-card rounded-lg p-3 lg:sticky lg:top-24 lg:self-start">
      <button
        type="button"
        onClick={() => onSelect("All")}
        className={`flex min-h-11 w-full items-center justify-between rounded-md px-3 text-left text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${
          selectedCategory === "All"
            ? "bg-clblue-500 text-white shadow-glow"
            : "text-slate-300 hover:bg-white/10 hover:text-white"
        }`}
      >
        <span>All Codes</span>
        <span>{totalCount}</span>
      </button>
      <div className="mt-2 grid gap-1">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => onSelect(category)}
            className={`min-h-11 rounded-md px-3 text-left text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${
              selectedCategory === category
                ? "bg-clblue-500/90 text-white shadow-glow"
                : "text-slate-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </aside>
  );
}

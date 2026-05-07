export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-clblue-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}

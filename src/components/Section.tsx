export default function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-24 scroll-mt-20">
      <div className="mb-12 flex flex-col gap-3">
        <span className="font-mono text-xs text-accent-2 uppercase tracking-widest">
          {eyebrow}
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

import Section from "./Section";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Work"
      title="Where I've shipped."
    >
      <ol className="relative border-l border-border ml-2">
        {experience.map((job, i) => (
          <li key={i} className="pl-8 pb-12 last:pb-0 relative">
            <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-gradient-to-tr from-violet-500 to-cyan-400 ring-4 ring-background" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-xl font-semibold">{job.company}</h3>
              <span className="font-mono text-xs text-muted">
                {job.period}
              </span>
            </div>
            <p className="text-sm text-accent-2 mt-1">{job.role}</p>
            {job.location ? (
              <p className="text-xs text-muted mt-0.5">{job.location}</p>
            ) : null}
            <ul className="mt-4 space-y-2 text-sm text-muted leading-relaxed">
              {job.bullets.map((b, j) => (
                <li key={j} className="flex gap-2">
                  <span className="text-accent">›</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}

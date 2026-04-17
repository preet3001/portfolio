import Section from "./Section";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I reach for.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((s) => (
          <div key={s.group} className="glass rounded-xl p-5">
            <h3 className="text-sm font-mono text-accent-2 mb-3">
              {s.group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((it) => (
                <span
                  key={it}
                  className="text-xs rounded-full border border-border bg-card/60 px-3 py-1.5"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

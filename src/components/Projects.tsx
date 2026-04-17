"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Section from "./Section";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className={`group relative rounded-2xl glass p-6 flex flex-col gap-3 hover:border-white/20 transition-all ${
              p.featured ? "md:col-span-1" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${p.name}`}
                  className="text-muted hover:text-foreground transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
            </div>
            <p className="text-sm text-muted leading-relaxed flex-1">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono uppercase tracking-wider rounded-full border border-border px-2 py-1 text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

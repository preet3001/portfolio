"use client";

import { useState } from "react";
import { Video, Mail } from "lucide-react";
import Section from "./Section";
import BookingModal from "./BookingModal";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./icons/Brand";

export default function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Section
        id="contact"
        eyebrow="Contact"
        title="Let's build something together."
      >
        <div className="rounded-3xl glass p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-64 w-64 bg-gradient-to-tr from-violet-500/30 to-cyan-400/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                Got an idea, a role, or just want to chat?
              </h3>
              <p className="text-muted leading-relaxed mb-6">
                Book a 30-minute call on Google Meet, or ping me by email or
                LinkedIn — whichever is easier.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <Video className="h-4 w-4" />
                  Book a Google Meet
                </button>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-card transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {profile.email}
                </a>
              </div>
            </div>

            <div className="flex md:flex-col gap-3 md:items-end">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:bg-card transition-colors"
              >
                <GithubIcon className="h-4 w-4" /> github.com/preet3001
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:bg-card transition-colors"
              >
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Section>

      <BookingModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

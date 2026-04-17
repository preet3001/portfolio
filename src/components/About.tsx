import Section from "./Section";
import { highlights } from "@/lib/data";
import { Sparkles } from "lucide-react";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Flutter engineer, super-app builder.">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            I&apos;ve spent the last ~5 years shipping cross-platform mobile
            apps in Flutter & Dart — from startup MVPs to super-app modules
            serving 30M+ users.
          </p>
          <p>
            At Adani Digital Labs, I led gamification in the Adani One app and
            built platform modules like the ICICI Co-Brand Credit Card flow,
            Pranaam meet-and-greet, Porter, Car Parking, and Hotel Booking.
          </p>
          <p>
            Now at Tutero, I&apos;m building AI-powered edtech — lesson
            generation, worksheets, and teacher workflows used by schools.
          </p>
          <p>
            Outside work: basketball, powerlifting, and a minor obsession with
            Neovim &amp; Tmux.
          </p>
        </div>

        <ul className="space-y-3">
          {highlights.map((h) => (
            <li
              key={h}
              className="flex gap-3 rounded-xl glass p-4 text-sm leading-relaxed"
            >
              <Sparkles className="h-4 w-4 text-accent-2 shrink-0 mt-0.5" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

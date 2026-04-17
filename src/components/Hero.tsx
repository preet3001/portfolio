"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import Image from "next/image";
import { bookingUrl, profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./icons/Brand";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-[1fr_auto] gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-muted w-fit rounded-full border border-border px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>.
            <br />
            I build <span className="gradient-text">mobile apps</span> that
            scale.
          </h1>
          <p className="text-lg text-muted max-w-xl leading-relaxed">
            {profile.summary}
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Book a Google Meet
            </a>
            <a
              href="#projects"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-card transition-colors"
            >
              View projects
            </a>
            <div className="flex items-center gap-2 ml-2">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full border border-border hover:bg-card transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full border border-border hover:bg-card transition-colors"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.socials.email}
                aria-label="Email"
                className="p-2 rounded-full border border-border hover:bg-card transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative floaty justify-self-center"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-violet-500/30 to-cyan-400/30 blur-2xl rounded-full" />
          <div className="relative h-48 w-48 md:h-60 md:w-60 rounded-full overflow-hidden ring-2 ring-white/10">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              sizes="240px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-foreground transition-colors"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}

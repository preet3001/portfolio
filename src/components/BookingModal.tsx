"use client";

import { useEffect } from "react";
import { X, Video } from "lucide-react";
import { bookingUrl, profile } from "@/lib/data";

export default function BookingModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const isConfigured =
    bookingUrl && bookingUrl !== "https://calendar.app.google/";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-3xl max-h-[85vh] rounded-2xl glass border border-white/10 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-tr from-violet-500/20 to-cyan-400/20 border border-white/10">
              <Video className="h-4 w-4 text-accent-2" />
            </div>
            <div>
              <h3 className="font-semibold">Book a Google Meet</h3>
              <p className="text-xs text-muted">
                Pick a time that works — we&apos;ll meet over Google Meet.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded-full hover:bg-card transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-auto">
          {isConfigured ? (
            <iframe
              src={bookingUrl}
              title="Booking calendar"
              className="w-full h-[70vh]"
              loading="lazy"
            />
          ) : (
            <div className="p-8 flex flex-col gap-4 text-sm text-muted leading-relaxed">
              <p>
                The booking calendar hasn&apos;t been wired up yet. Set
                <code className="mx-1 px-1.5 py-0.5 rounded bg-card border border-border font-mono text-xs">
                  NEXT_PUBLIC_BOOKING_URL
                </code>
                to a Google Calendar appointment schedule URL to embed it here.
              </p>
              <p>In the meantime, reach me directly:</p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={`mailto:${profile.email}?subject=Google%20Meet%20Request`}
                  className="rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Email {profile.email}
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border px-4 py-2 text-sm hover:bg-card transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

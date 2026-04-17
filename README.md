# Preet Singh — Portfolio

Modern portfolio site built with Next.js 16 (App Router), React 19, Tailwind CSS v4, Framer Motion, and lucide-react.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Book-a-meeting (Google Meet)

The Contact section opens a modal that embeds a Google Calendar **Appointment Schedule** in an iframe. Appointment Schedules create Google Meet links automatically.

1. Go to [calendar.google.com](https://calendar.google.com) → Create → **Appointment schedule**.
2. Configure availability. Under "Location and conferencing" set **Google Meet**.
3. Open the schedule page and copy the public booking URL (the one that starts with `https://calendar.app.google/...`).
4. Add it to `.env.local`:

   ```bash
   NEXT_PUBLIC_BOOKING_URL=https://calendar.app.google/xxxxxxxxxxxxxxxx
   ```

Without this env var, the modal falls back to an email CTA.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. In Project Settings → Environment Variables, add `NEXT_PUBLIC_BOOKING_URL`.
4. Deploy.

Build command and output are auto-detected.

## Structure

```
src/
├── app/
│   ├── layout.tsx       # root layout, fonts, metadata
│   ├── page.tsx         # assembles sections
│   └── globals.css      # theme tokens + utilities
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── BookingModal.tsx # Google Meet booking iframe
│   ├── Section.tsx
│   └── Footer.tsx
└── lib/
    └── data.ts          # resume & projects content
```

Edit `src/lib/data.ts` to update content.

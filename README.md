# Vansh Thapa — Portfolio v2

Rebuilt with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## What's inside

```
app/
  layout.tsx      Root layout, fonts, SEO metadata
  page.tsx        Assembles all sections
  globals.css     Base styles, design tokens, reduced-motion support
  sitemap.ts      Auto-generated sitemap
components/
  Nav.tsx
  Hero.tsx        Animated headline + live typing terminal
  About.tsx
  Projects.tsx    Featured case studies + secondary project grid
  Skills.tsx      Categorized tech stack
  Experience.tsx  Timeline
  Achievements.tsx
  Contact.tsx
  Footer.tsx
lib/
  data.ts         All real content (projects, skills, experience, links)
public/
  resume.pdf      <-- add your resume here, same filename
  robots.txt
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Add your resume file to `public/resume.pdf` (the Hero and Contact
   sections already link to `/resume.pdf`).

3. Add your project screenshots — currently `lib/data.ts` points at the
   images already hosted on your old site
   (`vansh-portfolio-051.vercel.app/projects/*.png`) so it works
   out of the box. Swap these for local files in `public/projects/`
   whenever convenient — just update the `image` field per project in
   `lib/data.ts`.

4. Run locally:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000`.

## Editing content

Everything text-based — project descriptions, skills, experience,
achievements, social links — lives in one file: `lib/data.ts`. You
should never need to touch component files just to update content.

## Deploying

Push this to a GitHub repo, then import it on
[vercel.com/new](https://vercel.com/new). Vercel auto-detects Next.js —
no config needed. Every push to `main` redeploys automatically.

## Notes

- Dark theme only, by design — palette is defined in
  `tailwind.config.ts` under `colors`.
- All animations respect `prefers-reduced-motion`.
- Update the `metadataBase` URL in `app/layout.tsx` and `app/sitemap.ts`
  if you ever move to a custom domain.

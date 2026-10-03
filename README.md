# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the Tulas International School homepage focusing on high conversion, fluid animations, and mobile responsiveness.

## Live Demo

- **Live URL:** Add your Vercel / Netlify link after deploy
- **Repository:** https://github.com/LakshmiSreekanth/tis-homepage-redesign

## Tech Stack

- **Framework:** React.js (Create React App / webpack — not Vite)
- **Styling:** Plain CSS (no Tailwind)
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Deployment:** Vercel or Netlify

## Standout Features Implemented

Three features only — each one is a short story you can explain in a review.

### 1. Dark / light theme

**Files:** `src/hooks/useTheme.js`, `src/components/animation/ThemeToggle.js`, `src/styles/variables.css`

How it works:

- `theme` state is `"light"` or `"dark"`.
- On change we set `data-theme` on `<html>` and save it in `localStorage`.
- CSS variables switch colors. The header button calls `toggleTheme()`.

What to say: “Theme is React state. CSS variables do the rest. Refresh keeps the choice because of localStorage.”

### 2. Scroll progress bar

**Files:** `src/hooks/useScrollProgress.js`, `src/components/animation/ScrollProgress.js`

How it works:

```
progress = window.scrollY / (pageHeight - windowHeight)
```

That value is `0` at the top and `1` at the bottom. The bar width is `progress * 100%`.

What to say: “One scroll listener. One formula. Width of a fixed bar.”

### 3. Scroll-triggered reveals

**File:** `src/components/animation/Reveal.js`

How it works:

- Framer Motion `whileInView` fades the block in when it enters the viewport.
- `viewport={{ once: true }}` so it does not replay on every scroll.
- Duration is `0.4s`. Optional `delay` staggers cards.

What to say: “Wrap a section in `<Reveal>`. It starts hidden, then animates once when you scroll to it.”

## Getting Started Locally

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/tis-homepage-redesign.git
cd tis-homepage-redesign
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm start
```

(`npm run dev` does the same thing.)

4. Open http://localhost:3000 in your browser.

## Build

```bash
npm run build
```

Output goes to `build/`. CRA uses webpack, not Vite.

## Component Architecture Overview

- `src/components/ui/` — Button, Badge, Card, BrandMark
- `src/components/layout/` — Navbar, Footer, MobileNav
- `src/components/sections/` — Hero, About, Academics, Sports, Campus, Voices, Testimonials, CTA
- `src/components/animation/` — ScrollProgress, ThemeToggle, Reveal
- `src/hooks/` — useScrollProgress, useTheme
- `src/data/siteContent.js` — nav, stats, copy pulled from tis.edu.in
- `src/styles/` — CSS variables and section styles

## Brand Identity Retained

Primary copy, admissions facts, sports list, parent quotes, and Dehradun contact details follow the official TIS site. Colors are a boarding-school navy / maroon / gold set rather than the current marketing page’s full visual system. Campus photos are Unsplash placeholders (not official TIS photography).

## Notes for reviewers

- Enquiry form is front-end only. It does not post to the school.
- Tested thinking: 375 / 768 / 1280 layouts via CSS breakpoints at 560, 640, 860, 980.

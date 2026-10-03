# Tulas International School (TIS) - Homepage Redesign

A modern, animated, high-converting redesign of the Tulas International School (TIS) homepage focusing on fluid micro-interactions, responsive architecture, and accessible dark/light theming.

## Live Demo & Links

- **Live URL:** [https://tis-homepage-redesign-green-seven.vercel.app](https://tis-homepage-redesign-green-seven.vercel.app)
- **Repository:** [https://github.com/LakshmiSreekanth/tis-homepage-redesign](https://github.com/LakshmiSreekanth/tis-homepage-redesign)

---

## Tech Stack

- **Framework:** React 18
- **Styling:** Modern Modular CSS (CSS Custom Properties, Flexbox, CSS Grid)
- **Animations:** Framer Motion & IntersectionObserver API
- **Icons:** React Icons (Material Design & Heroicons)
- **Deployment:** Vercel

---

## Standout Features Implemented

### 1. Animated Dark / Light Theme Switcher
- **Files:** `src/hooks/useTheme.js`, `src/components/animation/ThemeToggle.js`, `src/styles/variables.css`
- **Implementation:** Built using a custom `useTheme` hook with React Context API and `localStorage` persistence. Toggling theme updates the root `data-theme` attribute on `<html>`, enabling instant, GPU-smooth color swaps via CSS Custom Properties.

### 2. Scroll Progress Bar
- **Files:** `src/hooks/useScrollProgress.js`, `src/components/animation/ScrollProgress.js`
- **Implementation:** Tracks real-time scroll depth normalized across `window.scrollY / (scrollHeight - innerHeight)`. Renders a sleek gold progress bar fixed to the top viewport with dynamic width scaling.

### 3. Scroll-Triggered Reveal Animations
- **File:** `src/components/animation/Reveal.js`
- **Implementation:** Uses native browser `IntersectionObserver` with `threshold: 0.15` and Framer Motion hardware-accelerated transforms (`translateY` & `opacity`). Disconnects the observer upon entering the viewport to guarantee 60 FPS performance without CPU overhead.

---

## Getting Started Locally

1. **Clone the repository:**
```bash
git clone https://github.com/LakshmiSreekanth/tis-homepage-redesign.git
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

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## Production Build

```bash
npm run build
```
Creates an optimized production bundle in the `build/` directory ready for deployment.

---

## Component Architecture Overview

- `src/components/ui/` — Atomic UI components (`Button`, `Badge`, `Card`, `BrandMark`)
- `src/components/layout/` — Layout structure (`Navbar`, `Footer`, `MobileNav`)
- `src/components/sections/` — Core landing sections (`HeroSection`, `MarqueeStripe`, `AboutSection`, `AcademicsSection`, `SportsSection`, `CampusSection`, `VoicesSection`, `TestimonialsSection`, `CtaSection`)
- `src/components/animation/` — Animation wrappers (`Reveal`, `ScrollProgress`, `ThemeToggle`)
- `src/hooks/` — Custom hooks (`useScrollProgress`, `useTheme`)
- `src/data/siteContent.js` — Single source of truth for copy, navigation, facts, and testimonials
- `src/styles/` — Modular CSS architecture with design tokens

---

## Brand Identity & Design Standards

- **Core Identity:** Preserves official TIS copy, admissions facts, curriculum structure, sports disciplines, and contact details from [tis.edu.in](https://tis.edu.in/).
- **Color Palette:** Heritage boarding-school navy, regal gold, and deep maroon palette with warm paper background tones.
- **Responsiveness:** Fully responsive across Mobile (375px+), Tablet (768px+), and Desktop (1280px+).

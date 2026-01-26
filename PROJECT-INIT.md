# PROJECT-INIT.md

## Project Overview

### What are you building?
A marketing website for Volume Systems, an applied AI product and automation studio. Dark theme, minimal aesthetic, premium positioning comparable to Linear or Palantir.

### What problem does this solve?
Volume Systems needs a digital presence that conveys technical competence, calm authority, and premium positioning to attract serious operators seeking AI products and business systems.

### What does "done" look like?
- Production-quality homepage with all 5 sections
- 4 placeholder pages (Studio, Systems, About, Contact)
- Lighthouse scores 95+ across all categories
- Fully responsive (375px to 1440px+)
- Accessible (WCAG AA compliant)
- Deployed on Vercel
- "Feels elite" — subjective but the bar is Linear/Stripe/Vercel

---

## Technical Scope

### Platform/Technology
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel

### Core Features (V1)
1. Responsive homepage with: Nav, Hero, What We Build, How We Work, CTA, Footer
2. Noise/grain texture overlay
3. Subtle scroll animations
4. SEO optimization (meta, OG, structured data)
5. Placeholder pages for future content

### Out of Scope (for now)
- Contact form backend (using mailto/Calendly link)
- Blog/CMS integration
- Full content for non-homepage pages
- Analytics integration
- Custom font (GT America) — using Inter for now

---

## Constraints & Context

### Timeline
No hard deadline. Quality over speed. But efficient execution expected.

### Technical Constraints
- Must score 95+ on all Lighthouse categories
- Must support reduced-motion preferences
- Must work without JavaScript for core content (progressive enhancement)
- Mobile-first responsive

### User's Role
Provides input, approval, and feedback. Claude Code handles all implementation.

---

## Quality Priorities

**Ranked 1-5 (1 = most important):**

1. Visual quality — Must feel elite, not generic
2. Performance — Fast is premium
3. Code quality — Clean, maintainable, typed
4. Accessibility — WCAG AA minimum
5. SEO — Technically sound foundation

---

## Expert Domains Required

Selected domains:
- Frontend architecture (Next.js/React)
- Dark-theme UI design
- Motion/animation design
- Performance optimization
- Technical SEO

Additional expertise identified:
- Tailwind CSS configuration
- Framer Motion implementation
- Vercel deployment optimization

---

## Generated Persona Team

Based on this project, the following expert team was generated:

1. **Frontend Systems Architect** — Next.js 14 mastery, component architecture, TypeScript
2. **Dark-Theme UI Specialist** — Premium dark interfaces, depth, contrast, noise textures
3. **Motion & Interaction Designer** — Subtle Framer Motion, scroll reveals, micro-interactions
4. **Performance Engineer** — Core Web Vitals, Lighthouse optimization, load speed
5. **Technical SEO Architect** — Meta tags, structured data, semantic HTML

(Full details in TEAM.md)

---

## Design System Reference

### Colors
```
bg-primary:    #0A0A0A
bg-elevated:   #141414
bg-subtle:     #1A1A1A
text-primary:  #EDEDED
text-secondary:#888888
text-tertiary: #555555
accent:        #5B8A9A
accent-hover:  #6FA3B5
```

### Typography
- Primary: Inter (variable)
- Monospace: JetBrains Mono
- Wordmark: "VOLUME" — uppercase, medium, tracking -0.02em
- Labels: uppercase, tracking 0.08em, text-xs

### Spacing
- Base unit: 8px
- Section padding: 120px desktop / 80px tablet / 64px mobile
- Max content width: 1200px
- Gaps: 24-32px

### Animation
- Default: 200ms ease-out
- Scroll reveals: fade-up 20px, 400ms, 50ms stagger
- Noise overlay: 2-3% opacity

---

## Homepage Structure

1. **Nav** — VOLUME wordmark left, Studio/Systems links right, blur on scroll
2. **Hero** — "We build AI-powered products and systems that create leverage." + subline + 2 CTAs
3. **What We Build** — 3 cards: AI Products, Business Systems, Digital Infrastructure
4. **How We Work** — 3 numbered items: Product-first, System-level, Selective
5. **CTA** — "Ready to build something that compounds?" + single CTA
6. **Footer** — Wordmark, nav links, copyright

---

*This file documents project scope. Update if scope changes significantly.*

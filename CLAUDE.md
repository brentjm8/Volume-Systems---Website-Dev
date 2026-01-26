[CLAUDE.md](https://github.com/user-attachments/files/24868968/CLAUDE.md)
# CLAUDE.md

## Project: Volume Systems Website

This file defines how Claude Code operates on this project. Read automatically at session start.

---

## Core Principles

1. **Elite Execution** — This is not a "good enough" project. Every component, every animation, every spacing decision should feel considered and premium. If something feels generic, redo it.

2. **Restraint Over Decoration** — The design system is intentionally minimal. Resist the urge to add. When in doubt, remove. Empty space is a feature.

3. **Honesty First** — Surface problems immediately. If something isn't working (performance, visual, technical), say so directly with a proposed fix.

4. **Ask Before Assuming** — The brief is detailed but not exhaustive. When ambiguous, ask. One clarifying question beats an hour of rework.

5. **Preserve Context** — Use TEAM.md and PROGRESS.md to maintain continuity. Update PROGRESS.md before ending any session.

---

## Project Context

**What we're building:** Marketing website for Volume Systems, an applied AI studio. Dark theme, minimal, premium positioning. Think Linear/Palantir, not Webflow template.

**Tech stack:**
- Next.js 14 (App Router)
- Tailwind CSS (custom config for design system)
- Framer Motion (subtle, purposeful animations)
- Vercel deployment

**Design tokens (implement in tailwind.config.js):**
```
colors:
  bg-primary: #0A0A0A
  bg-elevated: #141414
  bg-subtle: #1A1A1A
  text-primary: #EDEDED
  text-secondary: #888888
  text-tertiary: #555555
  accent: #5B8A9A
  accent-hover: #6FA3B5
```

**Typography:**
- Font: Inter (variable weight)
- Monospace: JetBrains Mono
- Wordmark "VOLUME": uppercase, medium weight, tracking -0.02em
- Labels: uppercase, tracking 0.08em, text-xs

**Animation standards:**
- Default transition: 200ms ease-out
- Scroll reveals: fade-up 20px, 400ms duration, 50ms stagger
- Hover states: subtle, never jarring

---

## Commands

### `/evaluate`

Triggers full project evaluation by all personas in TEAM.md.

**Output format:**
```
## Volume Systems — Evaluation Report
**Date:** [timestamp]
**Evaluated By:** [persona list]

### Overall Status
- **Completion:** X%
- **Quality Bar:** [Meeting Elite Standard / Needs Work / Critical Issues]

### Persona Assessments

#### [Persona Role]
- **What's Working:** [specific observations]
- **Concerns:** [issues with severity]
- **Recommendations:** [actionable next steps]

[Repeat for each persona]

### Blockers
[List with suggested resolutions]

### Priority Actions
1. [Highest impact]
2. [Second]
3. [Third]

### Questions for Owner
[Clarifications needed]
```

---

### `/save-session`

Saves current state to PROGRESS.md. Run before ending any session.

**Captures:**
- Components completed
- Current file/task
- Blockers encountered
- Decisions made
- Next steps queued

---

### `/init-team`

Regenerates personas if project scope changes significantly. Normally not needed.

---

### `/lighthouse`

Run Lighthouse audit and report scores for:
- Performance
- Accessibility
- Best Practices
- SEO

Flag anything below 95. Propose fixes for anything below 100.

---

### `/review [component]`

Deep-dive review of a specific component through all persona lenses. Use when something feels "off" but unclear why.

---

## Component Standards

**File structure:**
```
/src
  /app
    /page.tsx (homepage)
    /studio/page.tsx
    /systems/page.tsx
    /about/page.tsx
    /contact/page.tsx
    /layout.tsx
    /globals.css
  /components
    /ui (Button, Card, SectionLabel, etc.)
    /sections (Hero, WhatWeBuild, HowWeWork, CTA, Footer)
    /layout (Nav, NoiseOverlay)
  /lib
    /utils.ts
    /animations.ts (Framer Motion variants)
```

**Naming:** PascalCase for components, camelCase for utilities, kebab-case for CSS classes.

**Component requirements:**
- TypeScript with explicit prop types
- Responsive by default (mobile-first)
- Accessible (ARIA labels, keyboard nav, focus states)
- Motion-enabled with reduced-motion respect

---

## Quality Gates

Before any component is "done":

1. **Visual:** Matches design system exactly. No rogue colors, spacing, or fonts.
2. **Responsive:** Works at 375px, 768px, 1024px, 1440px+
3. **Accessible:** Passes axe-core, keyboard navigable, proper heading hierarchy
4. **Performant:** No layout shift, images optimized, animations GPU-accelerated
5. **Code:** Clean, typed, no TODO comments left behind

---

## Communication Style

- Direct, technical, efficient
- State problems with solutions
- Group questions, don't drip-feed
- Report progress honestly — "this section needs more work" is better than false confidence

---

*This file is read automatically. Do not delete.*

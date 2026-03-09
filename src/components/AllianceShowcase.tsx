"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" } as const,
};

const transition = (delay = 0) => ({
  duration: 0.4,
  ease: "easeOut" as const,
  delay,
});

export function AllianceShowcase() {
  const features = [
    {
      name: "CSV Upload Wizard",
      desc: "Drag-drop CRM exports. Auto-detects columns via fuzzy matching. Handles messy, incomplete data gracefully.",
    },
    {
      name: "Ecosystem Mapping",
      desc: "Surfaces vendor overlap across your customer base. Identifies new partnership targets by opportunity potential.",
    },
    {
      name: "Partner Performance",
      desc: "Attribution metrics — sourced and influenced pipeline, won revenue, win rates, deal velocity, and health scoring for every partner.",
    },
    {
      name: "Health Scoring",
      desc: "0\u2013100 composite score with labels: High Performer, Stable, Underperforming, Dormant High-Potential.",
    },
    {
      name: "AI Insights Engine",
      desc: "Structured priorities, risks, and opportunities — grounded in computed metrics, not hallucinated. Scannable executive bullet format.",
    },
    {
      name: "Alliance Brief (PDF)",
      desc: "One-click export of an institutional-grade PDF. Executive summary, key metrics, partner performance, ecosystem opportunities, strategic priorities.",
    },
  ];

  const techStack = [
    { label: "Framework", value: "Next.js \u00B7 TypeScript" },
    { label: "Styling", value: "Tailwind CSS" },
    { label: "Database", value: "Prisma \u00B7 PostgreSQL" },
    { label: "Charts", value: "Recharts" },
    { label: "PDF Export", value: "Playwright" },
    { label: "AI Layer", value: "OpenAI-compatible API" },
  ];

  const hardeningItems = [
    "Auth-ready architecture",
    "Rate limiting",
    "Accessibility (ARIA)",
    "Batch data processing",
    "AI hallucination prevention",
    "Zod validation at all boundaries",
  ];

  return (
    <div className="space-y-0">
      {/* ===== HERO ===== */}
      <section className="pt-16 md:pt-24 pb-16 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Status badge */}
          <motion.div
            {...fadeUp}
            transition={transition(0.1)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-7"
          >
            <div className="w-[7px] h-[7px] rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs font-semibold text-amber-500 font-mono tracking-[0.04em]">
              V1 SHIP-READY
            </span>
          </motion.div>

          <motion.h2
            {...fadeUp}
            transition={transition(0.15)}
            className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-text-primary mb-6"
          >
            Alliance
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={transition(0.25)}
            className="text-lg md:text-xl text-text-secondary max-w-xl mb-4"
          >
            Know where to focus your ecosystem effort to drive revenue.
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={transition(0.35)}
            className="text-sm text-text-tertiary leading-relaxed max-w-lg"
          >
            Partnership intelligence for SaaS teams who need to prove ecosystem
            as a growth channel. Upload your CRM exports, get an interactive
            decision tool with AI-powered insights, and export a board-ready
            brief. No integrations required — just CSVs and clarity.
          </motion.p>
        </div>
      </section>

      {/* ===== THE PROBLEM ===== */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <motion.span
            {...fadeUp}
            transition={transition()}
            className="label text-text-tertiary"
          >
            The Problem
          </motion.span>
          <motion.h3
            {...fadeUp}
            transition={transition(0.05)}
            className="text-2xl md:text-3xl font-medium text-text-primary mt-4 mb-6 tracking-tight"
          >
            Partnership teams can&rsquo;t prove ecosystem as a growth channel
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[
              {
                num: "80%",
                label: "Time wrangling data",
                desc: "Partnership teams spend most of their time in spreadsheets and only 20% on actual strategy",
              },
              {
                num: "5\u201330",
                label: "Partners to manage",
                desc: "Series A\u2013C SaaS companies juggling partner relationships without a unified view of performance",
              },
              {
                num: "Zero",
                label: "Purpose-built tools",
                desc: "No tool exists to unify ecosystem overlap, partner performance, and strategic priorities in one place",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={transition(0.1 + i * 0.05)}
                className="bg-bg-elevated border border-white/5 p-6 rounded-sm hover:border-white/10 transition-colors duration-200"
              >
                <div className="text-sm font-semibold text-accent font-mono mb-1.5">
                  {item.num}
                </div>
                <div className="text-[15px] font-semibold text-text-primary mb-1.5">
                  {item.label}
                </div>
                <div className="text-[13px] text-text-tertiary leading-relaxed">
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOUR QUESTIONS ===== */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <motion.span
            {...fadeUp}
            transition={transition()}
            className="label text-text-tertiary"
          >
            Core Framework
          </motion.span>
          <motion.h3
            {...fadeUp}
            transition={transition(0.05)}
            className="text-2xl md:text-3xl font-medium text-text-primary mt-4 mb-2 tracking-tight"
          >
            Four questions every Head of Partnerships needs answered
          </motion.h3>
          <motion.p
            {...fadeUp}
            transition={transition(0.1)}
            className="text-sm text-text-tertiary leading-relaxed max-w-lg mb-8"
          >
            Alliance structures your CRM data around the decisions that actually
            matter — not vanity dashboards.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                question: "Which partners drive the most revenue?",
                answer:
                  "Pipeline attribution, won revenue, win rates, and deal velocity for every partner.",
              },
              {
                question: "Which partners are underperforming?",
                answer:
                  "Health scoring (0\u2013100) with labels that flag where to intervene or reactivate.",
              },
              {
                question:
                  "Which ecosystem vendors represent the biggest opportunity?",
                answer:
                  "Vendor overlap patterns across your customer base with suggested partnership targets.",
              },
              {
                question: "Where should I focus next quarter?",
                answer:
                  "AI-generated priorities, risks, and opportunities grounded in your actual metrics.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={transition(0.1 + i * 0.05)}
                className="bg-bg-elevated border border-white/5 p-6 rounded-sm hover:border-white/10 transition-colors duration-200"
              >
                <div className="text-[15px] font-semibold text-text-primary mb-2">
                  {item.question}
                </div>
                <div className="text-[13px] text-text-tertiary leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KEY CAPABILITIES ===== */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <motion.span
            {...fadeUp}
            transition={transition()}
            className="label text-text-tertiary"
          >
            Key Capabilities
          </motion.span>
          <motion.h3
            {...fadeUp}
            transition={transition(0.05)}
            className="text-2xl md:text-3xl font-medium text-text-primary mt-4 mb-2 tracking-tight"
          >
            From CSV upload to board-ready brief
          </motion.h3>
          <motion.p
            {...fadeUp}
            transition={transition(0.1)}
            className="text-sm text-text-tertiary leading-relaxed max-w-lg mb-7"
          >
            Upload three CSV files. Alliance handles the rest — fuzzy matching,
            vendor normalization, attribution, scoring, and strategic
            recommendations.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {features.map((f, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={transition(0.1 + i * 0.05)}
                className="flex items-start gap-3 px-4 py-3.5 rounded-sm bg-accent/5 border border-white/5"
              >
                <div className="w-2 h-2 rounded-full bg-accent shrink-0 mt-1.5 shadow-[0_0_6px_rgba(91,138,154,0.3)]" />
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-medium text-text-primary mb-0.5">
                    {f.name}
                  </div>
                  <div className="text-[12px] text-text-tertiary leading-relaxed">
                    {f.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUTCOMES ===== */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                headline: "< 30 min",
                label: "Time to Insight",
                desc: "From raw CRM exports to interactive dashboard with strategic recommendations",
                color: "text-accent",
              },
              {
                headline: "Zero",
                label: "Integrations Required",
                desc: "No API connections, no vendor setup. Just CSV files and clarity",
                color: "text-emerald-500",
              },
              {
                headline: "Board-Ready",
                label: "Alliance Brief",
                desc: "Institutional-grade PDF export that survives a board meeting — not a browser print",
                color: "text-amber-500",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={transition(0.1 + i * 0.05)}
                className="bg-bg-elevated border border-white/5 p-7 rounded-sm hover:border-white/10 transition-colors duration-200"
              >
                <div
                  className={`text-3xl font-medium tracking-tight mb-1 ${s.color}`}
                >
                  {s.headline}
                </div>
                <div className="label text-text-tertiary mb-2.5">
                  {s.label}
                </div>
                <div className="text-[13px] text-text-secondary leading-relaxed">
                  {s.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGY ===== */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <motion.span
            {...fadeUp}
            transition={transition()}
            className="label text-text-tertiary"
          >
            Technology
          </motion.span>
          <motion.h3
            {...fadeUp}
            transition={transition(0.05)}
            className="text-2xl md:text-3xl font-medium text-text-primary mt-4 mb-7 tracking-tight"
          >
            Full-stack, production-hardened
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {techStack.map((t, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={transition(0.05 + i * 0.05)}
                className="bg-bg-elevated border border-white/5 px-5 py-4 rounded-sm hover:border-white/10 transition-colors duration-200"
              >
                <div className="label text-text-tertiary mb-1.5">
                  {t.label}
                </div>
                <div className="text-sm font-medium text-text-primary">
                  {t.value}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hardening */}
          <motion.div
            {...fadeUp}
            transition={transition(0.15)}
            className="mt-6 bg-bg-elevated border border-white/5 p-6 rounded-sm"
          >
            <div className="label text-text-tertiary mb-3.5">
              Production Hardening
            </div>
            <div className="flex flex-wrap gap-2">
              {hardeningItems.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-accent/5 border border-accent/10 text-xs text-text-secondary font-mono"
                >
                  <span className="text-emerald-500 text-[10px]">
                    &#9679;
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            {...fadeUp}
            transition={transition()}
            className="bg-bg-elevated border border-white/5 rounded-sm p-10 md:p-12 text-center"
          >
            <div className="label text-text-tertiary mb-4">
              Built by Volume
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-text-primary tracking-tight leading-tight mb-4">
              Partnership intelligence, built to ship.
            </h3>
            <p className="text-[15px] text-text-secondary leading-relaxed max-w-lg mx-auto">
              Alliance is V1 complete and ready for demo and pilot. We build
              tools like this for operators who need clarity, not dashboards.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

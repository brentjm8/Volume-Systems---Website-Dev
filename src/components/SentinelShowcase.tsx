"use client";

import { useState, useEffect, useRef } from "react";
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

// --- Provenance Node ---
function ProvenanceNode({
  label,
  sublabel,
  icon,
  isActive,
  variant = "accent",
}: {
  label: string;
  sublabel: string;
  icon: string;
  isActive: boolean;
  variant?: "accent" | "amber" | "green";
}) {
  const colorMap = {
    accent: {
      border: "border-accent",
      text: "text-accent",
      bg: "bg-accent/10",
      shadow: "shadow-[0_0_20px_rgba(91,138,154,0.25)]",
    },
    amber: {
      border: "border-amber-500",
      text: "text-amber-500",
      bg: "bg-amber-500/10",
      shadow: "shadow-[0_0_20px_rgba(245,158,11,0.2)]",
    },
    green: {
      border: "border-emerald-500",
      text: "text-emerald-500",
      bg: "bg-emerald-500/10",
      shadow: "shadow-[0_0_20px_rgba(16,185,129,0.2)]",
    },
  };

  const colors = colorMap[variant];

  return (
    <div className="flex flex-col items-center gap-2.5">
      <div
        className={`w-14 h-14 rounded-[14px] flex items-center justify-center text-[22px] transition-all duration-400 ${
          isActive
            ? `${colors.bg} ${colors.border} ${colors.shadow}`
            : "bg-bg-elevated border-white/5"
        } border`}
      >
        {icon}
      </div>
      <div className="text-center">
        <div
          className={`text-xs font-semibold tracking-[0.05em] uppercase font-mono transition-colors duration-400 ${
            isActive ? colors.text : "text-text-secondary"
          }`}
        >
          {label}
        </div>
        <div className="text-[11px] text-text-tertiary font-mono mt-0.5">
          {sublabel}
        </div>
      </div>
    </div>
  );
}

// --- Connector Arrow ---
function Connector({ isActive }: { isActive: boolean }) {
  return (
    <div className="flex items-center px-0.5">
      <div
        className={`w-8 h-0.5 rounded-sm relative transition-all duration-400 ${
          isActive
            ? "bg-gradient-to-r from-accent to-emerald-500"
            : "bg-white/10"
        }`}
      >
        {isActive && (
          <div className="absolute -top-0.5 w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-travel" />
        )}
      </div>
      <div
        className={`w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent transition-colors duration-400 ${
          isActive ? "border-l-[6px] border-l-emerald-500" : "border-l-[6px] border-l-white/10"
        }`}
      />
    </div>
  );
}

// --- Compliance Rule Row ---
function ComplianceRule({
  rule,
  citation,
  index,
}: {
  rule: string;
  citation: string;
  index: number;
}) {
  return (
    <motion.div
      {...fadeUp}
      transition={transition(0.1 + index * 0.05)}
      className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg bg-accent/5 border border-white/5"
    >
      <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_6px_rgba(16,185,129,0.3)]" />
      <div className="flex-1 min-w-0">
        <div className="text-[13px] font-medium text-text-primary">
          {rule}
        </div>
        <div className="text-[11px] text-text-tertiary font-mono mt-px">
          {citation}
        </div>
      </div>
    </motion.div>
  );
}

// --- Main Component ---
export function SentinelShowcase() {
  const [activeChainStep, setActiveChainStep] = useState(-1);
  const [isChainVisible, setIsChainVisible] = useState(false);
  const chainRef = useRef<HTMLDivElement>(null);

  // Animate provenance chain on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsChainVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (chainRef.current) observer.observe(chainRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isChainVisible) return;
    const intervals = [0, 600, 1200, 1800, 2400, 3000];
    const timers = intervals.map((ms, i) =>
      setTimeout(() => setActiveChainStep(i), ms)
    );
    return () => timers.forEach(clearTimeout);
  }, [isChainVisible]);

  const complianceRules = [
    { rule: "Meter readings shown on bill", citation: "Cal. Civ. Code \u00A7 798.43(a)" },
    { rule: "CARE discount passed through 100%", citation: "Cal. Civ. Code \u00A7 798.43.1(c)" },
    { rule: "FERA discount passed through 100%", citation: "Cal. Civ. Code \u00A7 798.43.1(c)" },
    { rule: "Charges cannot exceed utility rates", citation: "Cal. Civ. Code \u00A7 798.40(a)" },
    { rule: "Utility charges separately itemized", citation: "Cal. Civ. Code \u00A7 798.41(a)" },
    { rule: "Billing agent disclosed", citation: "Cal. Civ. Code \u00A7 798.40(b)" },
    { rule: "Common area metering disclosed", citation: "Cal. Civ. Code \u00A7 798.43" },
    { rule: "Rate schedule referenced for audit", citation: "Internal audit requirement" },
  ];

  const techStack = [
    { label: "Backend", value: "Python \u00B7 FastAPI" },
    { label: "Database", value: "PostgreSQL 16 + RLS" },
    { label: "Frontend", value: "Next.js \u00B7 TypeScript" },
    { label: "AI Layer", value: "Claude API" },
    { label: "Auth", value: "Clerk JWKS + RBAC" },
    { label: "Infra", value: "Railway + Vercel" },
  ];

  const securityItems = [
    "Row-Level Security on all tenant tables",
    "Role-based access control (3 tiers)",
    "Append-only audit log",
    "7-year data retention",
    "Multi-tenant isolation at DB level",
    "JWT + JWKS verification",
  ];

  return (
    <div className="space-y-0">
      {/* ===== HERO ===== */}
      <section className="pt-32 md:pt-40 pb-16 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(0.1)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-7"
          >
            <div className="w-[7px] h-[7px] rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-emerald-500 font-mono tracking-[0.04em]">
              LIVE IN PRODUCTION
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(0.2)}
            className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-text-primary mb-6"
          >
            Sentinel
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(0.3)}
            className="text-lg md:text-xl text-text-secondary max-w-xl mb-4"
          >
            AI-powered utility compliance and billing engine for California
            manufactured housing operators.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition(0.4)}
            className="text-sm text-text-tertiary leading-relaxed max-w-lg"
          >
            Monitors regulatory tariff changes, extracts rates with confidence
            scoring, enforces 8 California compliance rules at bill issuance,
            and generates fully auditable utility bills — with every
            determination traceable to the original tariff document.
          </motion.p>
        </div>
      </section>

      {/* ===== PROBLEM / MARKET ===== */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <motion.span
            {...fadeUp}
            transition={transition()}
            className="label text-text-tertiary"
          >
            The Problem
          </motion.span>
          <motion.h2
            {...fadeUp}
            transition={transition(0.05)}
            className="text-2xl md:text-3xl font-medium text-text-primary mt-4 mb-6 tracking-tight"
          >
            Utility billing in manufactured housing is a compliance minefield
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[
              {
                num: "4,700+",
                label: "MH communities in California",
                desc: "Each navigating complex, jurisdiction-specific utility billing rules",
              },
              {
                num: "Cal. Civ. Code \u00A7798",
                label: "Mobilehome Residency Law",
                desc: "Mandates specific disclosures, rate limits, and billing practices",
              },
              {
                num: "6 IOUs + 100s of munis",
                label: "Overlapping rate structures",
                desc: "Tiered rates, baseline allocations, CARE/FERA discounts — each utility with its own tariff schedules and update cycles",
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

      {/* ===== PROVENANCE CHAIN ===== */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <motion.span
            {...fadeUp}
            transition={transition()}
            className="label text-text-tertiary"
          >
            Core Innovation
          </motion.span>
          <motion.h2
            {...fadeUp}
            transition={transition(0.05)}
            className="text-2xl md:text-3xl font-medium text-text-primary mt-4 mb-2 tracking-tight"
          >
            Full provenance chain
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={transition(0.1)}
            className="text-sm text-text-tertiary leading-relaxed max-w-lg mb-8"
          >
            Every billing determination is auditable back to the original tariff
            PDF. No other provider offers this level of transparency.
          </motion.p>

          {/* Chain visualization */}
          <div
            ref={chainRef}
            className="bg-bg-elevated border border-white/5 rounded-sm p-6 md:p-9 overflow-x-auto"
          >
            <div className="flex items-center justify-center gap-0 min-w-[700px]">
              <ProvenanceNode
                icon="&#128196;" label="Tariff PDF" sublabel="SHA-256 hashed"
                isActive={activeChainStep >= 0} variant="accent"
              />
              <Connector isActive={activeChainStep >= 1} />
              <ProvenanceNode
                icon="&#128269;" label="AI Extraction" sublabel="Confidence scored"
                isActive={activeChainStep >= 1} variant="accent"
              />
              <Connector isActive={activeChainStep >= 2} />
              <ProvenanceNode
                icon="&#10003;" label="Certified Rates" sublabel="Versioned"
                isActive={activeChainStep >= 2} variant="accent"
              />
              <Connector isActive={activeChainStep >= 3} />
              <ProvenanceNode
                icon="&#9878;" label="Rule Engine" sublabel="8 MRL rules"
                isActive={activeChainStep >= 3} variant="amber"
              />
              <Connector isActive={activeChainStep >= 4} />
              <ProvenanceNode
                icon="&#128203;" label="Compliant Bill" sublabel="Fully auditable"
                isActive={activeChainStep >= 4} variant="green"
              />
            </div>

            {/* Pipeline legend */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isChainVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 2 }}
              className="flex justify-between mt-7 pt-5 border-t border-white/5"
            >
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-sm bg-accent/15 border border-accent" />
                <span className="text-[11px] text-text-tertiary font-mono">
                  AI-assisted
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-sm bg-amber-500/10 border border-amber-500" />
                <span className="text-[11px] text-text-tertiary font-mono">
                  Deterministic
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500/10 border border-emerald-500" />
                <span className="text-[11px] text-text-tertiary font-mono">
                  Output
                </span>
              </div>
            </motion.div>
          </div>

          {/* Architecture principle callout */}
          <motion.div
            {...fadeUp}
            transition={transition(0.15)}
            className="mt-5 px-5 py-4 rounded-sm bg-amber-500/5 border border-amber-500/15 flex items-start gap-3"
          >
            <span className="text-base shrink-0 mt-px">&#9889;</span>
            <div>
              <div className="text-[13px] font-semibold text-amber-500 mb-1">
                Architecture Principle
              </div>
              <div className="text-[13px] text-text-secondary leading-relaxed">
                AI assists with research, monitoring, and extraction. Final
                compliance determinations and rate calculations use deterministic
                rule engines with explicit, auditable logic. No black-box
                compliance assertions — ever.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== COMPLIANCE RULES ===== */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <motion.span
            {...fadeUp}
            transition={transition()}
            className="label text-text-tertiary"
          >
            Compliance Engine
          </motion.span>
          <motion.h2
            {...fadeUp}
            transition={transition(0.05)}
            className="text-2xl md:text-3xl font-medium text-text-primary mt-4 mb-2 tracking-tight"
          >
            8 California MRL rules checked at issuance
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={transition(0.1)}
            className="text-sm text-text-tertiary leading-relaxed max-w-lg mb-7"
          >
            Every rule maps to a specific statute. Not &ldquo;our legal team
            reviewed it&rdquo; — the exact rule, the exact check, and the exact
            result.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-2.5">
            {complianceRules.map((r, i) => (
              <ComplianceRule
                key={i}
                rule={r.rule}
                citation={r.citation}
                index={i}
              />
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
                headline: "100%",
                label: "Audit Trail Coverage",
                desc: "Every billing determination traceable to its source tariff document",
                color: "text-emerald-500",
              },
              {
                headline: "Zero",
                label: "Black-Box Determinations",
                desc: "All compliance decisions made by deterministic rule engines with explicit logic",
                color: "text-amber-500",
              },
              {
                headline: "Full",
                label: "Provenance Chain",
                desc: "Bill \u2192 certified rates \u2192 extraction artifact \u2192 document version \u2192 original tariff PDF",
                color: "text-accent",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={transition(0.1 + i * 0.05)}
                className="bg-bg-elevated border border-white/5 p-7 rounded-sm hover:border-white/10 transition-colors duration-200"
              >
                <div className={`text-3xl font-medium tracking-tight mb-1 ${s.color}`}>
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
          <motion.h2
            {...fadeUp}
            transition={transition(0.05)}
            className="text-2xl md:text-3xl font-medium text-text-primary mt-4 mb-7 tracking-tight"
          >
            Built for enterprise compliance
          </motion.h2>

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

          {/* Security posture */}
          <motion.div
            {...fadeUp}
            transition={transition(0.15)}
            className="mt-6 bg-bg-elevated border border-white/5 p-6 rounded-sm"
          >
            <div className="label text-text-tertiary mb-3.5">
              Security Posture
            </div>
            <div className="flex flex-wrap gap-2">
              {securityItems.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-accent/5 border border-accent/10 text-xs text-text-secondary font-mono"
                >
                  <span className="text-emerald-500 text-[10px]">&#9679;</span>
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-text-primary tracking-tight leading-tight mb-4">
              Systems like this are what we build.
            </h2>
            <p className="text-[15px] text-text-secondary leading-relaxed max-w-lg mx-auto">
              Sentinel is available for licensing in regulated industries. We
              also build custom AI-powered compliance and operations systems for
              companies navigating complex regulatory environments.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

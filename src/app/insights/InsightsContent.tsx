"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { VUMeterDivider } from "@/components/VUMeterDivider";

export const posts = [
  {
    slug: "ai-tools-vs-ai-systems",
    title: "The Difference Between AI Tools and AI Systems",
    description:
      "Every company is buying AI tools right now. Few are building AI systems. That's the gap where competitive advantage lives.",
    date: "February 7, 2026",
    dateISO: "2026-02-07",
  },
  {
    slug: "what-is-geo",
    title: "What is GEO? The Complete Guide to Generative Engine Optimization",
    description:
      "GEO (Generative Engine Optimization) is the practice of optimizing your digital presence to be cited by AI search systems. Learn what it is, why it matters, and how to start.",
    date: "January 30, 2026",
    dateISO: "2026-01-30",
  },
  {
    slug: "why-ai-implementations-fail",
    title: "Why Most AI Implementations Fail (And How to Avoid It)",
    description:
      "Most AI implementations fail — not because of the technology, but because of how they're built and deployed. Here's what goes wrong and how to get it right.",
    date: "January 30, 2026",
    dateISO: "2026-01-30",
  },
  {
    slug: "seo-is-dead-long-live-seo",
    title: "SEO is Dead. Long Live SEO.",
    description:
      "SEO isn't dead — but the version most businesses are practicing is. Here's what's actually changing and what smart operators should do about it.",
    date: "January 30, 2026",
    dateISO: "2026-01-30",
  },
];

export function InsightsContent() {
  return (
    <>
      <Nav />
      <main className="pt-20 pb-32">
        {/* Hero */}
        <section className="py-20 md:py-28 px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-text-primary mb-6">
                Insights
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                className="text-lg md:text-xl text-text-secondary"
              >
                Thinking on AI systems, digital strategy, and building leverage.
              </motion.p>
            </div>
          </div>
        </section>

        <VUMeterDivider />

        {/* Posts Grid */}
        <section className="py-20 md:py-28 px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto w-full">
            <div className="space-y-6">
              {posts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: 0.1 + index * 0.05,
                  }}
                >
                  <Link
                    href={`/insights/${post.slug}`}
                    className="block bg-bg-elevated border border-white/5 p-8 rounded-sm group hover:border-white/10 transition-colors duration-200"
                  >
                    <time className="text-sm text-text-tertiary mb-3 block">
                      {post.date}
                    </time>
                    <h2 className="text-xl md:text-2xl font-medium text-text-primary mb-3 group-hover:text-accent transition-colors duration-200">
                      {post.title}
                    </h2>
                    <p className="text-text-secondary leading-relaxed">
                      {post.description}
                    </p>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

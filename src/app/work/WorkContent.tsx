"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { VUMeterDivider } from "@/components/VUMeterDivider";

const tags = ["AI Agent", "Compliance", "Healthcare"];

export function WorkContent() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-32 md:pt-40 pb-24 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Hero */}
          <div className="mb-16 md:mb-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-text-primary mb-6">
              Work
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              className="text-lg md:text-xl text-text-secondary max-w-xl"
            >
              Select projects from Volume Systems.
            </motion.p>
          </div>

          {/* Sentinel Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
          >
            <Link href="/studio" className="group block">
              <article className="bg-bg-elevated border border-white/5 rounded-sm p-8 md:p-10 hover:border-white/10 transition-colors duration-200">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="max-w-xl">
                    <span className="label text-text-tertiary block mb-4">
                      Volume Systems — Studio Product
                    </span>
                    <h2 className="text-2xl md:text-3xl font-medium text-text-primary mb-3 group-hover:text-accent transition-colors duration-200">
                      Sentinel
                    </h2>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      AI-powered compliance monitoring for Medicare Advantage
                      plans.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-3 py-1 rounded-sm bg-accent/5 border border-accent/10 text-xs text-text-secondary font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center text-text-tertiary group-hover:text-accent transition-colors duration-200 md:pt-8">
                    <span className="text-sm font-medium mr-2">
                      View project
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transform group-hover:translate-x-1 transition-transform duration-200"
                    >
                      <path
                        d="M6 3l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          </motion.div>

          <VUMeterDivider />

          {/* Coming soon note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-sm text-text-tertiary"
          >
            More projects coming soon.
          </motion.p>
        </div>
      </main>
      <Footer />
    </>
  );
}

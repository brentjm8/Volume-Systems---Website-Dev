"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-32 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-text-primary mb-6">
            We build AI-powered products and business systems that create leverage.
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="text-lg md:text-xl text-text-secondary max-w-xl mb-10"
          >
            Proprietary AI tools and high-impact business systems—designed for
            operators who want speed, clarity, and durable advantage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-bg-primary font-medium rounded-sm hover:bg-accent-hover transition-colors duration-200 focus-visible:outline-offset-2"
            >
              Start a conversation
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-6 py-3 border border-text-tertiary text-text-primary font-medium rounded-sm hover:border-text-secondary hover:bg-bg-elevated transition-all duration-200"
            >
              See our work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

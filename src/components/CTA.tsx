"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTA() {
  return (
    <section className="relative py-32 md:py-40 px-6 md:px-8 bg-bg-subtle overflow-hidden">
      <div className="relative max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-text-primary mb-8">
            Ready to build something that compounds?
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-bg-primary font-medium rounded-sm hover:bg-accent-hover transition-colors duration-200"
            >
              Get in touch
            </Link>
            <Link
              href="/insights"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/10 text-text-primary font-medium rounded-sm hover:border-white/20 hover:bg-bg-elevated transition-colors duration-200"
            >
              Read Our Thinking
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

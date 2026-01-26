"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "AI Products",
    description:
      "Custom AI applications that solve specific problems. From intelligent automation to generative interfaces, we build products that deliver measurable ROI.",
  },
  {
    title: "Business Systems",
    description:
      "End-to-end operational systems that connect data, automate workflows, and surface insights. Revenue engines, lead funnels, and scalable processes—built to grow with your organization.",
  },
  {
    title: "Digital Infrastructure",
    description:
      "The foundation layer: APIs, integrations, data pipelines, and platform architecture designed for long-term adaptability.",
  },
];

export function WhatWeBuild() {
  return (
    <section className="py-32 md:py-40 px-6 md:px-8 bg-bg-subtle">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="label text-text-tertiary mb-12"
        >
          What We Build
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              className="bg-bg-elevated border border-white/5 p-8 rounded-sm group hover:border-white/10 transition-colors duration-200"
            >
              <h3 className="text-xl font-medium text-text-primary mb-4 group-hover:text-accent transition-colors duration-200">
                {card.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

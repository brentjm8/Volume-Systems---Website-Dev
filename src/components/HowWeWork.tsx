"use client";

import { motion } from "framer-motion";
import { ChannelNumber } from "./ChannelNumber";

const items = [
  {
    number: "01",
    title: "Product-first",
    description:
      "We start with the outcome, not the technology. Every engagement begins with deep discovery to understand your specific context, constraints, and opportunities.",
  },
  {
    number: "02",
    title: "System-level",
    description:
      "Point solutions create technical debt. We design integrated systems that work together, sharing data and logic to multiply their individual value.",
  },
  {
    number: "03",
    title: "Selective",
    description:
      "We take on a limited number of engagements to ensure deep focus. Our best work comes from sustained partnership, not transactional projects.",
  },
];

export function HowWeWork() {
  return (
    <section className="py-32 md:py-40 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="label text-text-tertiary mb-12"
        >
          How We Work
        </motion.h2>

        <div className="space-y-12 md:space-y-16">
          {items.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-start"
            >
              <ChannelNumber number={parseInt(item.number)} />
              <div className="max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-medium text-text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

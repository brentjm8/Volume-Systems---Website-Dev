"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { VUMeterDivider } from "@/components/VUMeterDivider";

const whatWeBuildCards = [
  {
    title: "SEO",
    description:
      "Technical optimization and content strategy that drives organic search visibility.",
  },
  {
    title: "GEO",
    description:
      "Generative Engine Optimization. Get found in AI-powered search — ChatGPT, Perplexity, and the next generation of discovery.",
  },
  {
    title: "Lead Generation",
    description:
      "Custom lead engines that capture, qualify, and route prospects automatically.",
  },
  {
    title: "Digital Marketing",
    description:
      "AI-enhanced campaigns across paid and organic channels — strategy, execution, and optimization.",
  },
  {
    title: "Websites",
    description:
      "High-performance marketing sites built for speed, conversion, and scalability.",
  },
];

export default function DigitalPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center pt-20 pb-32 px-6 md:px-8 overflow-hidden">
          <div className="relative max-w-[1200px] mx-auto w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-text-primary mb-6">
                AI-powered growth. Visibility, traffic, and leads.
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                className="text-lg md:text-xl text-text-secondary max-w-xl"
              >
                We build the systems that get you found and drive acquisition —
                search, AI discovery, lead engines, and high-performance
                websites.
              </motion.p>
            </div>
          </div>
        </section>

        <VUMeterDivider />

        {/* What We Build Section */}
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whatWeBuildCards.map((card, index) => (
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

        <VUMeterDivider />

        {/* Why It Matters Section */}
        <section className="py-32 md:py-40 px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="label text-text-tertiary mb-12"
            >
              Why It Matters
            </motion.h2>

            <div className="max-w-2xl space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-xl md:text-2xl text-text-primary leading-relaxed"
              >
                Search is fragmenting. Traditional SEO still matters, but
                AI-powered discovery is rewriting the rules.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
                className="text-xl md:text-2xl text-text-primary leading-relaxed"
              >
                We build for both — so you&apos;re visible wherever your
                customers are looking.
              </motion.p>
            </div>
          </div>
        </section>

        <VUMeterDivider />

        {/* CTA Section */}
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
                Ready to grow?
              </h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent text-bg-primary font-medium rounded-sm hover:bg-accent-hover transition-colors duration-200"
                >
                  Start a Conversation →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

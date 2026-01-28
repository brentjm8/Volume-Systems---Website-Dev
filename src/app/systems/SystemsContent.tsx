"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { VUMeterDivider } from "@/components/VUMeterDivider";
import { ChannelNumber } from "@/components/ChannelNumber";

const whatWeBuildCards = [
  {
    title: "Data Infrastructure",
    description:
      "Aggregate, unify, and operationalize your data across platforms and sources.",
  },
  {
    title: "Custom AI Tools",
    description:
      "Internal tools that automate workflows, surface insights, or augment decision-making.",
  },
  {
    title: "Workflow Automations",
    description:
      "End-to-end process automation that eliminates manual work and reduces operational drag.",
  },
  {
    title: "Revenue Engines",
    description:
      "AI-powered systems for sales, marketing operations, and internal growth infrastructure.",
  },
];

const howWeWorkItems = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We map your operations, identify leverage points, and define what a successful system looks like.",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "We design the system — data flows, integrations, AI components, user interfaces.",
  },
  {
    number: "03",
    title: "Build & Deploy",
    description:
      "We build in sprints, deploy incrementally, and iterate based on real usage.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "We monitor, refine, and extend the system as your business evolves.",
  },
];

const whoItsFor = [
  "Operators who want speed and clarity",
  "Teams drowning in manual processes",
  "Businesses ready to invest in durable infrastructure",
];

export function SystemsContent() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center pt-20 pb-32 px-6 md:px-8 overflow-hidden">
          <div className="relative max-w-[1200px] mx-auto w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-text-primary">
                We design and deploy AI-powered systems inside real businesses.
              </h1>
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

            <div className="grid md:grid-cols-2 gap-6">
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

        {/* Simple Divider */}
        <div className="py-12 md:py-16 px-6 md:px-8">
          <hr
            className="max-w-[1200px] mx-auto border-0 h-px"
            style={{ backgroundColor: "rgba(26, 26, 26, 0.3)" }}
          />
        </div>

        {/* How We Work Section */}
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
              {howWeWorkItems.map((item, index) => (
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

        <VUMeterDivider />

        {/* Who It's For Section */}
        <section className="py-32 md:py-40 px-6 md:px-8 bg-bg-subtle">
          <div className="max-w-[1200px] mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="label text-text-tertiary mb-12"
            >
              Who It&apos;s For
            </motion.h2>

            <div className="space-y-6">
              {whoItsFor.map((statement, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: index * 0.05,
                  }}
                  className="text-xl md:text-2xl text-text-primary"
                >
                  {statement}
                </motion.p>
              ))}
            </div>
          </div>
        </section>

        <VUMeterDivider />

        {/* CTA Section */}
        <section className="relative py-32 md:py-40 px-6 md:px-8 overflow-hidden">
          <div className="relative max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-text-primary mb-8">
                Ready to build a system?
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

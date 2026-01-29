"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { VUMeterDivider } from "@/components/VUMeterDivider";
import { ChannelNumber } from "@/components/ChannelNumber";

const philosophyItems = [
  {
    number: 1,
    title: "Leverage over volume",
    description:
      "We take fewer projects and go deeper. Every engagement is chosen for impact, not revenue.",
  },
  {
    number: 2,
    title: "Systems over services",
    description:
      "We build infrastructure, not deliverables. Our work compounds—it doesn't expire.",
  },
  {
    number: 3,
    title: "Outcomes over outputs",
    description:
      "We measure success by what changes, not what ships. Real results, not busywork.",
  },
];

export function AboutContent() {
  return (
    <>
      <Nav />
      <main className="pt-20 pb-32">
        {/* Hero */}
        <section className="py-20 md:py-28 px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-text-primary mb-6">
                About
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                className="text-lg md:text-xl text-text-secondary"
              >
                Volume Systems is an applied AI studio. We build proprietary
                products and deploy high-leverage systems inside real businesses.
              </motion.p>
            </div>
          </div>
        </section>

        <VUMeterDivider />

        {/* Philosophy Section */}
        <section className="py-20 md:py-28 px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto w-full">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="label text-text-tertiary mb-12"
            >
              WHAT WE BELIEVE
            </motion.p>

            <div className="space-y-12 md:space-y-16">
              {philosophyItems.map((item, index) => (
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
                  <ChannelNumber number={item.number} />
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium text-text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-lg">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <hr className="border-t border-bg-subtle opacity-30" />
        </div>

        {/* CTA Section */}
        <section className="py-20 md:py-28 px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-medium text-text-primary mb-8">
                Want to work with us?
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-bg-primary font-medium rounded-sm hover:bg-accent-hover transition-colors duration-200"
              >
                Start a Conversation →
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

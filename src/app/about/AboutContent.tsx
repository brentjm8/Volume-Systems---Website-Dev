"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { VUMeterDivider } from "@/components/VUMeterDivider";
import { ChannelNumber } from "@/components/ChannelNumber";

const beliefItems = [
  {
    number: 1,
    title: "Leverage over volume",
    description:
      "We don't take on projects just to take them on. We selectively partner with operators who think about leverage the way we do — building systems that multiply effort rather than just adding more effort. Every engagement is part of Volume's story, and we're intentional about what we take on.",
  },
  {
    number: 2,
    title: "Systems over services",
    description:
      "We don't hand you a deliverable and disappear. We build infrastructure — proprietary systems designed as your competitive edge. Our work is tailored, not templated. When we build something, it's yours, and it's built to last.",
  },
  {
    number: 3,
    title: "Outcomes over outputs",
    description:
      "We work backwards from the change you want to create — not forward from a list of tasks. Our focus is impact: revenue unlocked, time reclaimed, decisions clarified. We measure success by what actually changes, not what we shipped.",
  },
];

const workWithList = [
  "Agencies that overpromise and underdeliver",
  "Wasted resources on guesswork solutions",
  "Revenue bogged down by manual workflows",
  "Decisions clouded by fragmented or cluttered data",
  "Fancy tools that never reach their potential",
  "Sales lost to slow processes",
  "Margin eaten by overhead that could be automated",
  "Knowing there's a bottleneck but not knowing the fix",
];

const notForList = [
  "Companies looking for the cheapest option",
  "Teams who want to hand off a task list without collaboration",
  "Organizations that aren't ready to invest in real infrastructure",
  "Anyone expecting overnight results without strategic commitment",
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

        {/* Why Volume Exists */}
        <section className="py-20 md:py-28 px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto w-full">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="label text-text-tertiary mb-12"
            >
              WHY VOLUME EXISTS
            </motion.p>

            <div className="max-w-3xl space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
                className="text-lg text-text-secondary"
              >
                Too many businesses are stuck — bottlenecked by manual processes,
                fragmented data, and systems that don&apos;t talk to each other.
                They&apos;ve wasted money on agencies that overpromised and
                underdelivered. They know something&apos;s broken but aren&apos;t
                sure how to fix it.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                className="text-lg text-text-secondary"
              >
                We started Volume Systems because we&apos;ve seen what happens
                when the right system is designed and placed strategically.
                Bottlenecks disappear. Revenue grows. Decisions get clearer. Teams
                move faster. The business compounds instead of grinds.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
                className="text-lg text-text-secondary"
              >
                We&apos;re not here to sell services. We&apos;re here to build
                infrastructure that creates leverage — the kind of competitive
                advantage that compounds over time.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Simple Divider */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <hr className="border-t border-bg-subtle opacity-30" />
        </div>

        {/* Who We Are */}
        <section className="py-20 md:py-28 px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto w-full">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="label text-text-tertiary mb-12"
            >
              WHO WE ARE
            </motion.p>

            <div className="max-w-3xl space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
                className="text-lg text-text-secondary"
              >
                We&apos;re business development, GTM, and product experts with
                nearly 40 years of combined experience across technology,
                software, SEO, retail branding, AI, and entrepreneurship.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                className="text-lg text-text-secondary"
              >
                We&apos;ve spent our careers building partnerships, ecosystems,
                and revenue systems that drive growth. We&apos;ve seen firsthand
                how intelligently designed systems can transform a business — and
                we&apos;ve made it our craft to build them.
              </motion.p>
            </div>
          </div>
        </section>

        <VUMeterDivider />

        {/* What We Believe */}
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
              {beliefItems.map((item, index) => (
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
                  <div className="max-w-2xl">
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

        {/* Simple Divider */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <hr className="border-t border-bg-subtle opacity-30" />
        </div>

        {/* Who We Work With */}
        <section className="py-20 md:py-28 px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto w-full">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="label text-text-tertiary mb-12"
            >
              WHO WE WORK WITH
            </motion.p>

            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
                className="text-lg text-text-primary mb-8"
              >
                Volume is for operators who are tired of:
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                className="space-y-3 mb-10"
              >
                {workWithList.map((item, index) => (
                  <li
                    key={index}
                    className="text-text-secondary text-lg flex items-start gap-3"
                  >
                    <span className="text-text-tertiary mt-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </motion.ul>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
                className="text-lg text-text-secondary"
              >
                If you&apos;ve felt the frustration of spinning your wheels — and
                you&apos;re ready to build something that actually works — we
                should talk.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Simple Divider */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <hr className="border-t border-bg-subtle opacity-30" />
        </div>

        {/* Who We're Not For */}
        <section className="py-20 md:py-28 px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto w-full">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="label text-text-tertiary mb-12"
            >
              WHO WE&apos;RE NOT FOR
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
              className="max-w-3xl space-y-3"
            >
              {notForList.map((item, index) => (
                <li
                  key={index}
                  className="text-text-secondary text-lg flex items-start gap-3"
                >
                  <span className="text-text-tertiary mt-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </section>

        <VUMeterDivider />

        {/* What Makes Us Different */}
        <section className="py-20 md:py-28 px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto w-full">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="label text-text-tertiary mb-12"
            >
              WHAT MAKES US DIFFERENT
            </motion.p>

            <div className="max-w-3xl space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
                className="text-lg text-text-secondary"
              >
                We&apos;re not an agency. We don&apos;t do retainers for
                retainer&apos;s sake. We don&apos;t pad timelines or deliverables.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                className="text-lg text-text-secondary"
              >
                We&apos;re builders. We design systems that become part of your
                operation — infrastructure that compounds value over time. We work
                with fewer clients, go deeper, and stay focused on outcomes.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
                className="text-lg text-text-secondary"
              >
                When we&apos;re done, you don&apos;t just have a
                &ldquo;solution.&rdquo; You have a durable advantage.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Simple Divider */}
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
                Ready to build something that compounds?
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

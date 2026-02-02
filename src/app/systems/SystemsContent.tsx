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

const systemsFaqs = [
  {
    question: "What kind of businesses need custom AI tools?",
    answer:
      "Any business with repetitive decisions, unstructured data, or processes that don't scale well with headcount. If your team is doing work that a well-designed system could handle faster and more consistently, custom AI tools are worth exploring.",
  },
  {
    question: "How is this different from buying off-the-shelf software?",
    answer:
      "Off-the-shelf tools are built for everyone. Custom systems are built for you — designed around your data, workflows, and goals. They become your proprietary competitive edge, not a commodity anyone can buy.",
  },
  {
    question: "What does data infrastructure actually include?",
    answer:
      "Data infrastructure includes the pipelines, integrations, warehouses, and access layers that allow your business to collect, unify, and use data from across your operations. It's the foundation that makes AI tools, automations, and analytics reliable.",
  },
  {
    question: "How long does a typical systems engagement take?",
    answer:
      "It depends on scope, but most engagements run 4-12 weeks from discovery to deployment. We scope carefully upfront so timelines are clear and realistic from day one.",
  },
  {
    question: "Do we need to replace our existing tools?",
    answer:
      "Rarely. Most of our work integrates with your existing stack — connecting systems that don't talk to each other, automating workflows between tools, and building new capabilities on top of what you already have.",
  },
  {
    question: "What happens after you build the system?",
    answer:
      "We build with ownership in mind. Every system is documented, the team is trained, and the infrastructure is designed to be maintainable. We're available for ongoing support, but the goal is for you to own and operate what we build.",
  },
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

        <VUMeterDivider />

        {/* What These Mean Section */}
        <section className="py-20 md:py-28 px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto w-full">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="label text-text-tertiary mb-12"
            >
              WHAT THESE MEAN
            </motion.p>

            <div className="max-w-3xl space-y-12">
              {/* What is Data Infrastructure? */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-4"
              >
                <h3 className="text-xl md:text-2xl font-medium text-text-primary">
                  What is Data Infrastructure?
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Data infrastructure is the foundation that allows businesses to
                  collect, store, unify, and operationalize their data across
                  platforms and sources. It includes pipelines, integrations,
                  warehouses, and the systems that make data accessible and
                  actionable for decision-making and automation.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Without solid data infrastructure, AI tools and automations have
                  nothing reliable to work with. It&apos;s the unglamorous but
                  critical layer that makes everything else possible.
                </p>
              </motion.div>

              {/* Divider */}
              <hr className="border-t border-bg-subtle opacity-30" />

              {/* What is Workflow Automation? */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
                className="space-y-4"
              >
                <h3 className="text-xl md:text-2xl font-medium text-text-primary">
                  What is Workflow Automation?
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Workflow automation is the use of technology to execute recurring
                  tasks and processes without manual intervention. This includes
                  everything from simple triggers and notifications to complex,
                  multi-step processes that span teams and systems.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Effective workflow automation eliminates manual bottlenecks,
                  reduces errors, and frees teams to focus on higher-value work.
                  When done well, it compounds — each automated process creates
                  capacity for the next.
                </p>
              </motion.div>

              {/* Divider */}
              <hr className="border-t border-bg-subtle opacity-30" />

              {/* What is a Revenue Engine? */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-xl md:text-2xl font-medium text-text-primary">
                  What is a Revenue Engine?
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  A revenue engine is an integrated system designed to drive
                  predictable, scalable growth. It connects sales, marketing, and
                  customer operations into a unified infrastructure — automating
                  lead flow, optimizing conversion, and surfacing the data needed
                  to make smart decisions.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Unlike disconnected tools or one-off campaigns, a revenue engine
                  is built to compound. It gets smarter and more efficient over
                  time.
                </p>
              </motion.div>

              {/* Divider */}
              <hr className="border-t border-bg-subtle opacity-30" />

              {/* What are Custom AI Tools? */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
                className="space-y-4"
              >
                <h3 className="text-xl md:text-2xl font-medium text-text-primary">
                  What are Custom AI Tools?
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Custom AI tools are purpose-built applications that use artificial
                  intelligence to solve specific business problems. Unlike
                  off-the-shelf software, they&apos;re designed around your
                  workflows, data, and goals — giving you capabilities your
                  competitors can&apos;t buy.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  These tools can automate complex decisions, surface insights from
                  unstructured data, augment human judgment, or create entirely new
                  efficiencies.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <VUMeterDivider />

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

        {/* Simple Divider */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <hr className="border-t border-bg-subtle opacity-30" />
        </div>

        {/* FAQ Section */}
        <section className="py-20 md:py-28 px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto w-full">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="label text-text-tertiary mb-12"
            >
              FREQUENTLY ASKED QUESTIONS
            </motion.p>

            <div className="max-w-3xl space-y-8">
              {systemsFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: index * 0.03,
                  }}
                  className="space-y-3"
                >
                  <h3 className="text-lg md:text-xl font-medium text-text-primary">
                    {faq.question}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                  {index < systemsFaqs.length - 1 && (
                    <hr className="border-t border-bg-subtle opacity-30 !mt-8" />
                  )}
                </motion.div>
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

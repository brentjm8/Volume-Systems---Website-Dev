"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { VUMeterDivider } from "@/components/VUMeterDivider";
import { glossaryTerms, type GlossaryTerm } from "./glossaryData";

export function GlossaryContent() {
  // Group terms by first letter
  const groupedTerms = glossaryTerms.reduce(
    (acc, term) => {
      const letter = term.term[0].toUpperCase();
      if (!acc[letter]) {
        acc[letter] = [];
      }
      acc[letter].push(term);
      return acc;
    },
    {} as Record<string, GlossaryTerm[]>
  );

  const letters = Object.keys(groupedTerms).sort();

  return (
    <>
      <Nav />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center pt-20 pb-16 px-6 md:px-8 overflow-hidden">
          <div className="relative max-w-[1200px] mx-auto w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-text-primary mb-6">
                Glossary
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                className="text-lg md:text-xl text-text-secondary max-w-xl"
              >
                Clear definitions for AI, systems, and digital growth
                terminology. A reference for operators building with modern
                technology.
              </motion.p>
            </div>
          </div>
        </section>

        <VUMeterDivider />

        {/* Quick Navigation */}
        <section className="py-8 px-6 md:px-8 bg-bg-subtle border-b border-white/5">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-wrap gap-2">
              {letters.map((letter) => (
                <a
                  key={letter}
                  href={`#${letter}`}
                  className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-accent hover:bg-bg-elevated rounded-sm transition-colors duration-200 font-mono text-sm"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Terms */}
        <section className="py-16 md:py-24 px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto">
            {letters.map((letter, letterIndex) => (
              <div key={letter} id={letter} className="mb-16 last:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex items-center gap-4 mb-8"
                >
                  <span className="text-4xl md:text-5xl font-medium text-accent font-mono">
                    {letter}
                  </span>
                  <hr className="flex-1 border-t border-bg-subtle opacity-30" />
                </motion.div>

                <div className="space-y-12">
                  {groupedTerms[letter].map((item, index) => (
                    <motion.article
                      key={item.slug}
                      id={item.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                        delay: index * 0.03,
                      }}
                      className="max-w-3xl scroll-mt-24"
                    >
                      <h2 className="text-xl md:text-2xl font-medium text-text-primary mb-4">
                        What is {item.term}?
                      </h2>
                      <div className="space-y-4">
                        {item.definition.map((paragraph, pIndex) => (
                          <p
                            key={pIndex}
                            className="text-lg text-text-secondary leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      {item.relatedLink && (
                        <Link
                          href={item.relatedLink.href}
                          className="inline-flex items-center mt-4 text-accent hover:text-accent-hover transition-colors duration-200"
                        >
                          {item.relatedLink.text} →
                        </Link>
                      )}
                      {index < groupedTerms[letter].length - 1 && (
                        <hr className="border-t border-bg-subtle opacity-30 mt-12" />
                      )}
                    </motion.article>
                  ))}
                </div>
              </div>
            ))}
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-text-primary mb-4">
                Ready to put these concepts to work?
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                We build the systems, tools, and infrastructure that turn ideas
                into operational reality.
              </p>

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
                  Start a Conversation →
                </Link>
                <Link
                  href="/systems"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/10 text-text-primary font-medium rounded-sm hover:border-white/20 hover:bg-bg-elevated transition-colors duration-200"
                >
                  Explore Systems
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

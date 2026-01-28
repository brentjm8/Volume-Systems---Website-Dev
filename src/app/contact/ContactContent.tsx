"use client";

import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export function ContactContent() {
  return (
    <>
      <Nav />
      <main className="min-h-screen flex items-center pt-20 pb-32 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-text-primary mb-6">
              Start a Conversation
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              className="text-lg md:text-xl text-text-secondary max-w-xl mb-8"
            >
              Tell us what you&apos;re building.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
              className="space-y-4"
            >
              <p className="text-text-secondary">
                Contact form coming soon. In the meantime, reach out directly.
              </p>
              <a
                href="mailto:hello@volumesystems.io"
                className="inline-flex items-center text-accent hover:text-accent-hover transition-colors duration-200 text-lg"
              >
                hello@volumesystems.io
              </a>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export function StudioContent() {
  return (
    <>
      <Nav />
      <main className="min-h-screen flex items-center pt-20 pb-32 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-text-primary mb-6">
              Studio
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              className="text-lg md:text-xl text-text-secondary max-w-xl mb-10"
            >
              Proprietary AI products. Coming soon.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-bg-primary font-medium rounded-sm hover:bg-accent-hover transition-colors duration-200"
              >
                Want early access? Start a Conversation →
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital | Volume Systems",
  description:
    "SEO and digital marketing capabilities that drive measurable growth.",
};

export default function DigitalPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-32 pb-24 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <span className="label text-text-tertiary block mb-6">Digital</span>
          <h1 className="text-4xl md:text-5xl font-medium text-text-primary mb-8">
            Digital
          </h1>
          <p className="text-lg text-text-secondary max-w-xl mb-10">
            SEO and digital marketing capabilities that drive measurable growth.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-bg-primary font-medium rounded-sm hover:bg-accent-hover transition-colors duration-200"
          >
            Get in touch
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

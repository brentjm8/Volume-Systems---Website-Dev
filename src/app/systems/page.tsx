import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Systems | Volume Systems",
  description:
    "The systems we build: AI products, business systems, and digital infrastructure.",
};

export default function SystemsPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-32 pb-24 px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <span className="label text-text-tertiary block mb-6">Systems</span>
          <h1 className="text-4xl md:text-5xl font-medium text-text-primary mb-8">
            Coming soon
          </h1>
          <p className="text-lg text-text-secondary max-w-xl">
            We&apos;re crafting this page. Check back soon to explore the
            systems we build.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

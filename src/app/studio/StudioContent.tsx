"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SentinelShowcase } from "@/components/SentinelShowcase";

export function StudioContent() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <SentinelShowcase />
      </main>
      <Footer />
    </>
  );
}

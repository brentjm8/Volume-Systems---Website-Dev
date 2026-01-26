import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { WhatWeBuild } from "@/components/WhatWeBuild";
import { HowWeWork } from "@/components/HowWeWork";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatWeBuild />
        <HowWeWork />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

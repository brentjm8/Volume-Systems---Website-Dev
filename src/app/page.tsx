import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { WhatWeBuild } from "@/components/WhatWeBuild";
import { HowWeWork } from "@/components/HowWeWork";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { VUMeterDivider } from "@/components/VUMeterDivider";
import { WaveformDivider } from "@/components/WaveformDivider";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <VUMeterDivider />
        <WhatWeBuild />
        <WaveformDivider />
        <HowWeWork />
        <VUMeterDivider showLabels={false} opacity={0.3} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

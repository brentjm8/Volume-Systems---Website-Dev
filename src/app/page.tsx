import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { WhatWeBuild } from "@/components/WhatWeBuild";
import { HowWeWork } from "@/components/HowWeWork";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { VUMeterDivider } from "@/components/VUMeterDivider";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <VUMeterDivider />
        <WhatWeBuild />
        <div className="py-12 md:py-16 px-6 md:px-8">
          <hr
            className="max-w-[1200px] mx-auto border-0 h-px"
            style={{ backgroundColor: "rgba(26, 26, 26, 0.3)" }}
          />
        </div>
        <HowWeWork />
        <VUMeterDivider showLabels={false} opacity={0.3} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

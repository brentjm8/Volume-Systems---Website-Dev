"use client";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SentinelShowcase } from "@/components/SentinelShowcase";
import { AllianceShowcase } from "@/components/AllianceShowcase";
import { VUMeterDivider } from "@/components/VUMeterDivider";

export function StudioContent() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <SentinelShowcase />
        <VUMeterDivider />
        <AllianceShowcase />
      </main>
      <Footer />
    </>
  );
}

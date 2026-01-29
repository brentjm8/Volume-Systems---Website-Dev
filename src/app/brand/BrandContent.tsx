"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const assets = [
  {
    name: "Logo 512px",
    file: "logo-512.png",
    dimensions: "512 × 512",
    width: 512,
    height: 512,
  },
  {
    name: "Logo 400px",
    file: "logo-400.png",
    dimensions: "400 × 400",
    width: 400,
    height: 400,
  },
  {
    name: "Logo 300px",
    file: "logo-300.png",
    dimensions: "300 × 300",
    width: 300,
    height: 300,
  },
  {
    name: "Favicon",
    file: "favicon-512.png",
    dimensions: "512 × 512",
    width: 512,
    height: 512,
  },
  {
    name: "LinkedIn Banner",
    file: "linkedin-banner.png",
    dimensions: "1128 × 191",
    width: 1128,
    height: 191,
  },
  {
    name: "Twitter Header",
    file: "twitter-header.png",
    dimensions: "1500 × 500",
    width: 1500,
    height: 500,
  },
];

export function BrandContent() {
  return (
    <>
      <Nav />
      <main className="pt-20 pb-32">
        {/* Hero */}
        <section className="py-20 md:py-28 px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-text-primary mb-6">
                Brand Assets
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                className="text-lg md:text-xl text-text-secondary"
              >
                Volume Systems brand resources.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Assets Grid */}
        <section className="py-12 md:py-16 px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {assets.map((asset, index) => (
                <motion.div
                  key={asset.file}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: 0.1 + index * 0.05,
                  }}
                  className="bg-bg-elevated border border-bg-subtle rounded-sm overflow-hidden"
                >
                  {/* Preview */}
                  <div className="relative aspect-video bg-bg-primary flex items-center justify-center p-4">
                    <Image
                      src={`/brand/${asset.file}`}
                      alt={asset.name}
                      width={asset.width}
                      height={asset.height}
                      className="max-w-full max-h-full w-auto h-auto object-contain"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="text-text-primary font-medium mb-1">
                      {asset.name}
                    </h3>
                    <p className="text-text-tertiary text-sm mb-4">
                      {asset.dimensions}
                    </p>
                    <a
                      href={`/brand/${asset.file}`}
                      download={asset.file}
                      className="inline-flex items-center justify-center px-4 py-2 bg-accent text-bg-primary text-sm font-medium rounded-sm hover:bg-accent-hover transition-colors duration-200"
                    >
                      Download
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Color Reference */}
        <section className="py-12 md:py-16 px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto w-full">
            <h2 className="text-2xl font-medium text-text-primary mb-8">
              Color Palette
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-20 rounded-sm bg-[#0A0A0A] border border-bg-subtle"></div>
                <p className="text-text-primary text-sm font-medium">Background</p>
                <p className="text-text-tertiary text-sm font-mono">#0A0A0A</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-sm bg-[#EDEDED]"></div>
                <p className="text-text-primary text-sm font-medium">Primary Text</p>
                <p className="text-text-tertiary text-sm font-mono">#EDEDED</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-sm bg-[#888888]"></div>
                <p className="text-text-primary text-sm font-medium">Secondary Text</p>
                <p className="text-text-tertiary text-sm font-mono">#888888</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-sm bg-[#5B8A9A]"></div>
                <p className="text-text-primary text-sm font-medium">Accent</p>
                <p className="text-text-tertiary text-sm font-mono">#5B8A9A</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

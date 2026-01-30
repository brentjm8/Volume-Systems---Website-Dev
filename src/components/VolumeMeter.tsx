"use client";

import { useEffect, useState } from "react";

export function VolumeMeter() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const segmentCount = 12;
  const segmentHeight = 8;
  const segmentGap = 3;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setPrefersReducedMotion(reducedMotion);

    if (reducedMotion) {
      setScrollProgress(0.5);
      return;
    }

    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate how many segments should be lit based on scroll progress
  const litSegments = Math.round(scrollProgress * segmentCount);

  // Total height calculation
  const totalHeight = segmentCount * segmentHeight + (segmentCount - 1) * segmentGap;

  return (
    <div
      className="fixed left-0 md:left-5 flex flex-col-reverse gap-[3px] pointer-events-none"
      style={{
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        height: `${totalHeight}px`,
      }}
      aria-hidden="true"
    >
      {Array.from({ length: segmentCount }, (_, i) => {
        const isLit = i < litSegments;
        // Segments closer to top get slightly brighter when lit
        const brightnessBoost = isLit ? 1 + (i / segmentCount) * 0.3 : 1;

        return (
          <div
            key={i}
            className="w-3 rounded-[1px]"
            style={{
              height: `${segmentHeight}px`,
              backgroundColor: isLit
                ? `rgba(91, 138, 154, ${0.7 * brightnessBoost})`
                : "rgba(255, 255, 255, 0.08)",
              transition: prefersReducedMotion
                ? "none"
                : "background-color 200ms ease-out",
              boxShadow: isLit
                ? `0 0 ${4 + i * 0.5}px rgba(91, 138, 154, ${0.3 * brightnessBoost})`
                : "none",
            }}
          />
        );
      })}
    </div>
  );
}

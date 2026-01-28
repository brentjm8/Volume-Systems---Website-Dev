"use client";

import { useEffect, useState } from "react";

export function DialRingsBackground() {
  const [opacity, setOpacity] = useState(0.05);

  // Ring configuration: 10 evenly spaced rings
  const ringCount = 10;
  const ringSpacing = 50; // px between rings
  const startRadius = 60; // smallest ring radius

  // Generate ring radii
  const rings = Array.from({ length: ringCount }, (_, i) => ({
    radius: startRadius + i * ringSpacing,
  }));

  const largestRadius = rings[rings.length - 1].radius; // ~510px radius = ~1020px diameter

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setOpacity(0.08); // Static 8% opacity
      return;
    }

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;

      // Interpolate between 5% and 12% based on scroll
      const newOpacity = 0.05 + scrollProgress * 0.07;
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SVG size needs to accommodate the largest ring from origin at bottom-right
  const svgSize = largestRadius * 2 + 100;

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    >
      <svg
        className="absolute"
        style={{
          bottom: 0,
          right: 0,
          width: svgSize,
          height: svgSize,
          transform: `translate(${largestRadius}px, ${largestRadius}px)`,
        }}
        viewBox={`0 0 ${svgSize} ${svgSize}`}
      >
        <g transform={`translate(${svgSize / 2}, ${svgSize / 2})`}>
          {rings.map((ring, i) => (
            <circle
              key={i}
              cx={0}
              cy={0}
              r={ring.radius}
              fill="none"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth={1}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

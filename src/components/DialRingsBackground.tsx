"use client";

import { useEffect, useState } from "react";

export function DialRingsBackground() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Ring configuration: 10 evenly spaced rings
  const ringCount = 10;
  const ringSpacing = 50; // px between rings
  const startRadius = 60; // smallest ring radius

  // Generate ring radii
  const rings = Array.from({ length: ringCount }, (_, i) => ({
    radius: startRadius + i * ringSpacing,
    index: i,
  }));

  const largestRadius = rings[rings.length - 1].radius;

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setScrollProgress(0.5); // Static middle value
      return;
    }

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity for each ring based on scroll and ring index
  // Outer rings (higher index) get more opacity boost from scrolling
  const getOpacity = (ringIndex: number) => {
    const baseOpacity = 0.08;
    const maxOpacity = 0.22;

    // Normalized position (0 = innermost, 1 = outermost)
    const ringPosition = ringIndex / (ringCount - 1);

    // Outer rings get more of the scroll-based boost
    // Inner rings stay closer to base, outer rings can reach max
    const scrollBoost = scrollProgress * (maxOpacity - baseOpacity) * ringPosition;

    return baseOpacity + scrollBoost;
  };

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
          {rings.map((ring) => (
            <circle
              key={ring.index}
              cx={0}
              cy={0}
              r={ring.radius}
              fill="none"
              stroke={`rgba(255, 255, 255, ${getOpacity(ring.index)})`}
              strokeWidth={1}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export function DialRingsBackground() {
  // TEMPORARY: High opacity for testing visibility (normally 0.015)
  const [opacity, setOpacity] = useState(0.18);
  const [isEnabled, setIsEnabled] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cursorBoostRef = useRef(0);
  const targetBoostRef = useRef(0);
  const animationRef = useRef<number>(0);

  // Ring configuration
  const originX = 100; // percentage from left (top-right corner)
  const originY = 0; // percentage from top
  const rings = [
    { radius: 80, strokeWidth: 1 },
    { radius: 140, strokeWidth: 1 },
    { radius: 220, strokeWidth: 1 },
    { radius: 320, strokeWidth: 1.5 },
    { radius: 440, strokeWidth: 1 },
    { radius: 580, strokeWidth: 1 },
    { radius: 740, strokeWidth: 1.5 },
    { radius: 920, strokeWidth: 1 },
  ];

  // Generate tick marks for outermost ring
  const tickCount = 36;
  const outerRadius = rings[rings.length - 1].radius;

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsEnabled(false);
      setOpacity(0.03); // Static 3% opacity
      return;
    }

    // Check for touch device
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    setIsTouchDevice(isTouch);
  }, []);

  // Scroll-based opacity
  useEffect(() => {
    if (!isEnabled) return;

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;

      // TEMPORARY: High opacity for testing (normally 0.015 + scrollProgress * 0.045)
      const baseOpacity = 0.15 + scrollProgress * 0.05;

      // Add cursor boost
      const totalOpacity = baseOpacity + cursorBoostRef.current;
      setOpacity(Math.min(totalOpacity, 0.25)); // TEMPORARY: Cap at 25%
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isEnabled]);

  // Cursor proximity effect (desktop only)
  const updateCursorBoost = useCallback(() => {
    // Smooth interpolation toward target
    cursorBoostRef.current += (targetBoostRef.current - cursorBoostRef.current) * 0.1;

    // Trigger scroll handler to update opacity
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
    // TEMPORARY: High opacity for testing (normally 0.015 + scrollProgress * 0.045)
    const baseOpacity = 0.15 + scrollProgress * 0.05;
    const totalOpacity = baseOpacity + cursorBoostRef.current;
    setOpacity(Math.min(totalOpacity, 0.25)); // TEMPORARY: Cap at 25%

    animationRef.current = requestAnimationFrame(updateCursorBoost);
  }, []);

  useEffect(() => {
    if (!isEnabled || isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate distance from cursor to origin point (top-right)
      const originPxX = window.innerWidth; // Right edge
      const originPxY = 0; // Top edge

      const dx = e.clientX - originPxX;
      const dy = e.clientY - originPxY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Within 400px: add boost up to 2.5%
      if (distance < 400) {
        const proximity = 1 - distance / 400;
        targetBoostRef.current = proximity * 0.025;
      } else {
        targetBoostRef.current = 0;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animationRef.current = requestAnimationFrame(updateCursorBoost);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isEnabled, isTouchDevice, updateCursorBoost]);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <svg
        className="absolute"
        style={{
          top: 0,
          right: 0,
          width: outerRadius * 2 + 100,
          height: outerRadius * 2 + 100,
          transform: `translate(${outerRadius}px, -${outerRadius}px)`,
          opacity,
          transition: isEnabled ? "none" : "opacity 0.2s ease-out",
        }}
        viewBox={`0 0 ${outerRadius * 2 + 100} ${outerRadius * 2 + 100}`}
      >
        <g
          transform={`translate(${outerRadius + 50}, ${outerRadius + 50})`}
        >
          {/* Concentric ring arcs */}
          {rings.map((ring, i) => {
            // Arc from 180° to 360° (bottom-left quadrant visible)
            const startAngle = Math.PI; // 180°
            const endAngle = Math.PI * 2; // 360°

            const x1 = Math.cos(startAngle) * ring.radius;
            const y1 = Math.sin(startAngle) * ring.radius;
            const x2 = Math.cos(endAngle) * ring.radius;
            const y2 = Math.sin(endAngle) * ring.radius;

            return (
              <path
                key={i}
                d={`M ${x1} ${y1} A ${ring.radius} ${ring.radius} 0 0 1 ${x2} ${y2}`}
                fill="none"
                stroke="#EDEDED"
                strokeWidth={ring.strokeWidth}
                strokeLinecap="round"
              />
            );
          })}

          {/* Tick marks on outermost ring */}
          {Array.from({ length: tickCount }).map((_, i) => {
            const angle = Math.PI + (i / tickCount) * Math.PI; // 180° to 360°
            const innerR = outerRadius - 8;
            const outerR = outerRadius + 2;

            // Only show every 3rd tick as longer
            const isLongTick = i % 3 === 0;
            const tickInner = isLongTick ? innerR - 4 : innerR;

            const x1 = Math.cos(angle) * tickInner;
            const y1 = Math.sin(angle) * tickInner;
            const x2 = Math.cos(angle) * outerR;
            const y2 = Math.sin(angle) * outerR;

            return (
              <line
                key={`tick-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#EDEDED"
                strokeWidth={isLongTick ? 1.5 : 0.75}
                strokeLinecap="round"
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}

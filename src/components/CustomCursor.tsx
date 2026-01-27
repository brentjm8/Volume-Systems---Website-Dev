"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const position = useRef<CursorPosition>({ x: 0, y: 0 });
  const targetPosition = useRef<CursorPosition>({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  // Check if device supports custom cursor
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Disable on touch devices
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isTouchDevice || prefersReducedMotion) {
      setIsEnabled(false);
      document.body.style.cursor = "";
      return;
    }

    setIsEnabled(true);
    document.body.style.cursor = "none";

    return () => {
      document.body.style.cursor = "";
    };
  }, []);

  // Lerp function for smooth animation
  const lerp = useCallback((start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  }, []);

  // Animation loop
  useEffect(() => {
    if (!isEnabled) return;

    const animate = () => {
      // Main cursor - smooth follow with easing
      position.current.x = lerp(position.current.x, targetPosition.current.x, 0.15);
      position.current.y = lerp(position.current.y, targetPosition.current.y, 0.15);

      // Apply transform (GPU-accelerated)
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isEnabled, lerp]);

  // Mouse move handler
  useEffect(() => {
    if (!isEnabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isEnabled, isVisible]);

  // Hover detection for interactive elements
  useEffect(() => {
    if (!isEnabled) return;

    const interactiveSelectors = "a, button, [role='button'], input, textarea, select, [tabindex]:not([tabindex='-1'])";

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest(interactiveSelectors)) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as Element;
      const relatedTarget = e.relatedTarget as Element | null;

      if (target.closest(interactiveSelectors)) {
        // Only set hovering false if we're not entering another interactive element
        if (!relatedTarget?.closest(interactiveSelectors)) {
          setIsHovering(false);
        }
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isEnabled]);

  // Hide cursor on interactive elements to avoid double cursor
  useEffect(() => {
    if (!isEnabled) return;

    const style = document.createElement("style");
    style.id = "custom-cursor-styles";
    style.textContent = `
      a, button, [role='button'], input, textarea, select, [tabindex]:not([tabindex='-1']) {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      const existingStyle = document.getElementById("custom-cursor-styles");
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  // Chevron dimensions - narrower and sharper
  const baseWidth = isHovering ? 14 : 11;
  const baseHeight = isHovering ? 16 : 14;
  const strokeWidth = 2;
  const rotation = -18; // Rotate left to point toward top-left like traditional cursor

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.15s ease-out",
      }}
    >
      <svg
        width={baseWidth}
        height={baseHeight}
        viewBox={`0 0 ${baseWidth} ${baseHeight}`}
        fill="none"
        className="transition-all duration-150 ease-out"
        style={{
          transformOrigin: `${baseWidth / 2}px ${strokeWidth / 2}px`,
          transform: `rotate(${rotation}deg)`,
          marginLeft: -baseWidth / 2,
          marginTop: 0,
          filter: isHovering
            ? "drop-shadow(0 0 6px rgba(237, 237, 237, 0.6))"
            : "drop-shadow(0 0 4px rgba(237, 237, 237, 0.3))",
        }}
      >
        <path
          d={`M ${strokeWidth / 2} ${baseHeight - strokeWidth / 2} L ${baseWidth / 2} ${strokeWidth / 2} L ${baseWidth - strokeWidth / 2} ${baseHeight - strokeWidth / 2}`}
          stroke="#EDEDED"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

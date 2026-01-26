"use client";

import { useEffect, useRef, useCallback } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
}

interface NetworkBackgroundProps {
  className?: string;
}

export function NetworkBackground({ className = "" }: NetworkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number>(0);
  const prefersReducedMotion = useRef(false);

  const getNodeCount = useCallback(() => {
    if (typeof window === "undefined") return 40;
    const width = window.innerWidth;
    if (width < 640) return 20; // Mobile
    if (width < 1024) return 35; // Tablet
    return 50; // Desktop
  }, []);

  const initNodes = useCallback(
    (width: number, height: number) => {
      const count = getNodeCount();
      const nodes: Node[] = [];

      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        nodes.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
        });
      }

      nodesRef.current = nodes;
    },
    [getNodeCount]
  );

  const drawNetwork = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      ctx.clearRect(0, 0, width, height);

      const nodes = nodesRef.current;
      const maxDistance = Math.min(width, height) * 0.3; // Increased connection range
      const accentColor = "91, 138, 154"; // #5B8A9A in RGB

      // Draw connections first (behind nodes)
      ctx.lineWidth = 1.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.15;
            ctx.strokeStyle = `rgba(${accentColor}, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        ctx.fillStyle = `rgba(${accentColor}, 0.20)`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    },
    []
  );

  const updateNodes = useCallback((width: number, height: number) => {
    const nodes = nodesRef.current;
    const wanderRadius = 60;

    for (const node of nodes) {
      // Gentle floating movement
      node.x += node.vx;
      node.y += node.vy;

      // Soft boundary - pull back toward base position
      const dx = node.x - node.baseX;
      const dy = node.y - node.baseY;
      const distFromBase = Math.sqrt(dx * dx + dy * dy);

      if (distFromBase > wanderRadius) {
        node.vx -= dx * 0.001;
        node.vy -= dy * 0.001;
      }

      // Add slight randomness to velocity
      node.vx += (Math.random() - 0.5) * 0.02;
      node.vy += (Math.random() - 0.5) * 0.02;

      // Dampen velocity
      node.vx *= 0.99;
      node.vy *= 0.99;

      // Keep within canvas bounds
      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;

      node.x = Math.max(0, Math.min(width, node.x));
      node.y = Math.max(0, Math.min(height, node.y));
    }
  }, []);

  useEffect(() => {
    // Check for reduced motion preference
    if (typeof window !== "undefined") {
      prefersReducedMotion.current = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.scale(dpr, dpr);

      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      initNodes(rect.width, rect.height);

      // Draw static version for reduced motion
      if (prefersReducedMotion.current) {
        drawNetwork(ctx, rect.width, rect.height);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    // Animation loop (only if motion is allowed)
    if (!prefersReducedMotion.current) {
      const animate = () => {
        const rect = canvas.getBoundingClientRect();
        updateNodes(rect.width, rect.height);
        drawNetwork(ctx, rect.width, rect.height);
        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initNodes, updateNodes, drawNetwork]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}

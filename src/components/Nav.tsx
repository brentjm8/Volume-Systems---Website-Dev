"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-out ${
        scrolled
          ? "bg-bg-primary/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="wordmark text-xl text-text-primary hover:text-accent transition-colors duration-200 flex items-center justify-center py-3 px-2 -mx-2"
          >
            Volume
          </Link>

          <div className="flex items-center">
            <Link
              href="/studio"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 flex items-center justify-center py-3 px-4"
            >
              Studio
            </Link>
            <Link
              href="/systems"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 flex items-center justify-center py-3 px-4"
            >
              Systems
            </Link>
            <Link
              href="/digital"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 flex items-center justify-center py-3 px-4"
            >
              Digital
            </Link>
            <Link
              href="/contact"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 flex items-center justify-center py-3 px-4"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

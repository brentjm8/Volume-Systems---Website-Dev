import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 md:px-8 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
          <Link
            href="/"
            className="wordmark text-xl text-text-primary hover:text-accent transition-colors duration-200 flex items-center py-3 px-2 -mx-2"
          >
            Volume
          </Link>

          <nav className="flex flex-wrap -mx-4">
            <Link
              href="/studio"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 flex items-center py-3 px-4"
            >
              Studio
            </Link>
            <Link
              href="/systems"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 flex items-center py-3 px-4"
            >
              Systems
            </Link>
            <Link
              href="/digital"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 flex items-center py-3 px-4"
            >
              Digital
            </Link>
            <Link
              href="/work"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 flex items-center py-3 px-4"
            >
              Work
            </Link>
            <Link
              href="/contact"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 flex items-center py-3 px-4"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="pt-8 border-t border-white/5">
          <p className="text-sm text-text-tertiary">
            &copy; {currentYear} Volume Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

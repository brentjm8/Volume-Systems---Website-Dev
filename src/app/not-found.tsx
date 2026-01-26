import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-8">
        <div className="text-center">
          <span className="label text-text-tertiary block mb-4">404</span>
          <h1 className="text-4xl md:text-5xl font-medium text-text-primary mb-6">
            Page not found
          </h1>
          <p className="text-lg text-text-secondary mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-bg-primary font-medium rounded-sm hover:bg-accent-hover transition-colors duration-200"
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

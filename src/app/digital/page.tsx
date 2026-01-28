import type { Metadata } from "next";
import { DigitalContent } from "./DigitalContent";

export const metadata: Metadata = {
  title: "Digital Growth",
  description:
    "AI-powered growth systems. SEO, GEO, lead generation, digital marketing, and high-performance websites.",
  openGraph: {
    title: "Digital Growth | Volume Systems",
    description:
      "AI-powered growth systems. SEO, GEO, lead generation, digital marketing, and high-performance websites.",
    url: "https://volumesystems.io/digital",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Volume Systems - Digital Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Growth | Volume Systems",
    description:
      "AI-powered growth systems. SEO, GEO, lead generation, digital marketing, and high-performance websites.",
  },
  alternates: {
    canonical: "https://volumesystems.io/digital",
  },
};

export default function DigitalPage() {
  return <DigitalContent />;
}

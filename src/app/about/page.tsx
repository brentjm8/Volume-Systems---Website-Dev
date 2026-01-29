import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Volume Systems is an applied AI studio. We build proprietary products and deploy high-leverage systems inside real businesses.",
  openGraph: {
    title: "About | Volume Systems",
    description:
      "Volume Systems is an applied AI studio. We build proprietary products and deploy high-leverage systems inside real businesses.",
    url: "https://volumesystems.io/about",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Volume Systems - About",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Volume Systems",
    description:
      "Volume Systems is an applied AI studio. We build proprietary products and deploy high-leverage systems inside real businesses.",
  },
  alternates: {
    canonical: "https://volumesystems.io/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}

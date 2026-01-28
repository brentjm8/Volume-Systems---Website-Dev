import type { Metadata } from "next";
import { SystemsContent } from "./SystemsContent";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "We design and deploy AI-powered systems inside real businesses — data infrastructure, custom AI tools, workflow automation, and revenue engines.",
  openGraph: {
    title: "Systems | Volume Systems",
    description:
      "We design and deploy AI-powered systems inside real businesses — data infrastructure, custom AI tools, workflow automation, and revenue engines.",
    url: "https://volumesystems.io/systems",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Volume Systems - Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Systems | Volume Systems",
    description:
      "We design and deploy AI-powered systems inside real businesses — data infrastructure, custom AI tools, workflow automation, and revenue engines.",
  },
  alternates: {
    canonical: "https://volumesystems.io/systems",
  },
};

export default function SystemsPage() {
  return <SystemsContent />;
}

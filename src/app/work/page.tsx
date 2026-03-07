import type { Metadata } from "next";
import { WorkContent } from "./WorkContent";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Select projects and case studies from Volume Systems. AI-powered systems built for real businesses.",
  openGraph: {
    title: "Work | Volume Systems",
    description:
      "Select projects and case studies from Volume Systems. AI-powered systems built for real businesses.",
    url: "https://volumesystems.io/work",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Volume Systems - Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work | Volume Systems",
    description:
      "Select projects and case studies from Volume Systems. AI-powered systems built for real businesses.",
  },
  alternates: {
    canonical: "https://volumesystems.io/work",
  },
};

export default function WorkPage() {
  return <WorkContent />;
}

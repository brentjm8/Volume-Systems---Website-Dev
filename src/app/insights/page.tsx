import type { Metadata } from "next";
import { InsightsContent } from "./InsightsContent";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Thinking on AI systems, digital strategy, and building leverage. Articles from Volume Systems.",
  openGraph: {
    title: "Insights | Volume Systems",
    description:
      "Thinking on AI systems, digital strategy, and building leverage. Articles from Volume Systems.",
    url: "https://volumesystems.io/insights",
  },
  twitter: {
    title: "Insights | Volume Systems",
    description:
      "Thinking on AI systems, digital strategy, and building leverage. Articles from Volume Systems.",
  },
  alternates: {
    canonical: "https://volumesystems.io/insights",
  },
};

export default function InsightsPage() {
  return <InsightsContent />;
}

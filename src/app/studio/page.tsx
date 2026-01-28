import type { Metadata } from "next";
import { StudioContent } from "./StudioContent";

export const metadata: Metadata = {
  title: "Studio",
  description: "Proprietary AI products built by Volume Systems.",
  openGraph: {
    title: "Studio | Volume Systems",
    description: "Proprietary AI products built by Volume Systems.",
    url: "https://volumesystems.io/studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Volume Systems - Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio | Volume Systems",
    description: "Proprietary AI products built by Volume Systems.",
  },
  alternates: {
    canonical: "https://volumesystems.io/studio",
  },
};

export default function StudioPage() {
  return <StudioContent />;
}

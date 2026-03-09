import type { Metadata } from "next";
import Script from "next/script";
import { StudioContent } from "./StudioContent";

const studioSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Volume Systems",
  url: "https://volumesystems.io",
  description:
    "Applied AI studio building proprietary products and high-leverage systems.",
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: "Sentinel",
        description:
          "AI-powered utility compliance and billing engine for California manufactured housing operators.",
        applicationCategory: "BusinessApplication",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: "Alliance",
        description:
          "Partnership intelligence dashboard that turns messy CRM exports into strategic clarity for SaaS teams.",
        applicationCategory: "BusinessApplication",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Proprietary AI products built by Volume Systems. Purpose-built tools for regulated industries, compliance, and operational infrastructure.",
  openGraph: {
    title: "Studio | Volume Systems",
    description:
      "Proprietary AI products built by Volume Systems. Purpose-built tools for regulated industries, compliance, and operational infrastructure.",
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
    description:
      "Proprietary AI products built by Volume Systems. Purpose-built tools for regulated industries, compliance, and operational infrastructure.",
  },
  alternates: {
    canonical: "https://volumesystems.io/studio",
  },
};

export default function StudioPage() {
  return (
    <>
      <Script
        id="studio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(studioSchema) }}
      />
      <StudioContent />
    </>
  );
}

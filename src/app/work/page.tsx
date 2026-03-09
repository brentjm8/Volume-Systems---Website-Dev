import type { Metadata } from "next";
import Script from "next/script";
import { WorkContent } from "./WorkContent";

const workSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Volume Systems Projects",
  description:
    "Select projects and case studies from Volume Systems.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "SoftwareApplication",
        name: "Sentinel",
        description:
          "AI-powered utility compliance and billing engine for California manufactured housing operators.",
        applicationCategory: "BusinessApplication",
        url: "https://volumesystems.io/studio#sentinel",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "SoftwareApplication",
        name: "Alliance",
        description:
          "Partnership intelligence dashboard that turns messy CRM exports into strategic clarity for SaaS teams.",
        applicationCategory: "BusinessApplication",
        url: "https://volumesystems.io/studio#alliance",
      },
    },
  ],
};

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
  return (
    <>
      <Script
        id="work-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workSchema) }}
      />
      <WorkContent />
    </>
  );
}

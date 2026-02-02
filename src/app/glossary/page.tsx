import type { Metadata } from "next";
import Script from "next/script";
import { GlossaryContent } from "./GlossaryContent";
import { glossaryTerms } from "./glossaryData";

// Generate DefinedTermSet schema for glossary
const glossarySchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Volume Systems Glossary",
  description:
    "Definitions for AI, business systems, and digital growth terminology.",
  url: "https://volumesystems.io/glossary",
  definedTerm: glossaryTerms.map((term) => ({
    "@type": "DefinedTerm",
    name: term.term,
    description: term.definition.join(" "),
    url: `https://volumesystems.io/glossary#${term.slug}`,
    inDefinedTermSet: "https://volumesystems.io/glossary",
  })),
};

export const metadata: Metadata = {
  title: "Glossary",
  description:
    "Clear definitions for AI, business systems, SEO, GEO, and digital growth terminology. A reference for operators building with modern technology.",
  openGraph: {
    title: "Glossary | Volume Systems",
    description:
      "Clear definitions for AI, business systems, SEO, GEO, and digital growth terminology. A reference for operators building with modern technology.",
    url: "https://volumesystems.io/glossary",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Volume Systems Glossary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glossary | Volume Systems",
    description:
      "Clear definitions for AI, business systems, SEO, GEO, and digital growth terminology.",
  },
  alternates: {
    canonical: "https://volumesystems.io/glossary",
  },
};

export default function GlossaryPage() {
  return (
    <>
      <Script
        id="glossary-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossarySchema) }}
      />
      <GlossaryContent />
    </>
  );
}

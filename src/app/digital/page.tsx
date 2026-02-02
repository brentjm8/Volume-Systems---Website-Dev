import type { Metadata } from "next";
import Script from "next/script";
import { DigitalContent } from "./DigitalContent";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does SEO take to show results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most businesses start seeing measurable improvements in 3-6 months, with compounding returns over time. SEO is infrastructure, not a campaign — the longer it runs, the stronger it gets.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between SEO and GEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO optimizes your content for traditional search engine rankings. GEO optimizes your content to be cited and recommended by AI-powered search systems like ChatGPT, Perplexity, and Google AI Overviews. Both are essential for modern discovery.",
      },
    },
    {
      "@type": "Question",
      name: "Do we need SEO if we already get leads from referrals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Referrals are powerful but unpredictable. SEO and GEO build a consistent, compounding pipeline of inbound discovery. They work alongside referrals, not instead of them.",
      },
    },
    {
      "@type": "Question",
      name: "What is Generative Engine Optimization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generative Engine Optimization (GEO) is the practice of structuring your digital presence so that AI systems cite your business as a source when answering relevant questions. It's the next evolution of search visibility.",
      },
    },
    {
      "@type": "Question",
      name: "How do you measure digital growth success?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We measure outcomes, not vanity metrics. That means qualified traffic, lead volume, conversion rates, and revenue impact — not just impressions or keyword rankings.",
      },
    },
    {
      "@type": "Question",
      name: "Do you run paid ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We focus exclusively on organic growth strategies — SEO, GEO, content, and lead generation systems. We build infrastructure that compounds, rather than campaigns that stop when spending stops.",
      },
    },
  ],
};

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
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DigitalContent />
    </>
  );
}

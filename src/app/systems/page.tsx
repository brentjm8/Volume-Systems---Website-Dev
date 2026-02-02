import type { Metadata } from "next";
import Script from "next/script";
import { SystemsContent } from "./SystemsContent";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What kind of businesses need custom AI tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any business with repetitive decisions, unstructured data, or processes that don't scale well with headcount. If your team is doing work that a well-designed system could handle faster and more consistently, custom AI tools are worth exploring.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from buying off-the-shelf software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Off-the-shelf tools are built for everyone. Custom systems are built for you — designed around your data, workflows, and goals. They become your proprietary competitive edge, not a commodity anyone can buy.",
      },
    },
    {
      "@type": "Question",
      name: "What does data infrastructure actually include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Data infrastructure includes the pipelines, integrations, warehouses, and access layers that allow your business to collect, unify, and use data from across your operations. It's the foundation that makes AI tools, automations, and analytics reliable.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical systems engagement take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on scope, but most engagements run 4-12 weeks from discovery to deployment. We scope carefully upfront so timelines are clear and realistic from day one.",
      },
    },
    {
      "@type": "Question",
      name: "Do we need to replace our existing tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rarely. Most of our work integrates with your existing stack — connecting systems that don't talk to each other, automating workflows between tools, and building new capabilities on top of what you already have.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after you build the system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build with ownership in mind. Every system is documented, the team is trained, and the infrastructure is designed to be maintainable. We're available for ongoing support, but the goal is for you to own and operate what we build.",
      },
    },
  ],
};

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
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SystemsContent />
    </>
  );
}

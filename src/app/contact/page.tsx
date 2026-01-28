import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with Volume Systems.",
  openGraph: {
    title: "Contact | Volume Systems",
    description: "Start a conversation with Volume Systems.",
    url: "https://volumesystems.io/contact",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Volume Systems - Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Volume Systems",
    description: "Start a conversation with Volume Systems.",
  },
  alternates: {
    canonical: "https://volumesystems.io/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}

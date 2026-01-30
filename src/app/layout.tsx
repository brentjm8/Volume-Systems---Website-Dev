import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { DialRingsBackground, VolumeMeter } from "@/components";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://volumesystems.io"),
  title: {
    default: "Volume Systems · AI-Powered Products and Business Systems",
    template: "%s | Volume Systems",
  },
  description:
    "We build AI-powered products and business systems that create leverage. Proprietary AI tools and high-impact systems for operators.",
  keywords: [
    "AI",
    "artificial intelligence",
    "software development",
    "AI products",
    "business systems",
    "digital infrastructure",
    "SEO",
    "automation",
  ],
  authors: [{ name: "Volume Systems" }],
  openGraph: {
    title: "Volume Systems · AI-Powered Products and Business Systems",
    description:
      "We build AI-powered products and business systems that create leverage. Proprietary AI tools and high-impact systems for operators.",
    url: "https://volumesystems.io",
    siteName: "Volume Systems",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Volume Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Volume Systems · AI-Powered Products and Business Systems",
    description:
      "We build AI-powered products and business systems that create leverage. Proprietary AI tools and high-impact systems for operators.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://volumesystems.io",
  },
  verification: {
    google: "GHZdCpWVXL1WY4GUg6WjZsqdhnJx_AbYjnAm1z7V6P0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <DialRingsBackground />
        <VolumeMeter />
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

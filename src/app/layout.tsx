import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components";

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
  title: "Volume Systems | Applied AI Studio",
  description:
    "We build AI-powered products and systems that create leverage. An applied AI studio focused on product-first, system-level solutions.",
  keywords: [
    "AI",
    "artificial intelligence",
    "software development",
    "AI products",
    "business systems",
    "digital infrastructure",
  ],
  authors: [{ name: "Volume Systems" }],
  openGraph: {
    title: "Volume Systems | Applied AI Studio",
    description:
      "We build AI-powered products and systems that create leverage.",
    type: "website",
    locale: "en_US",
    siteName: "Volume Systems",
  },
  twitter: {
    card: "summary_large_image",
    title: "Volume Systems | Applied AI Studio",
    description:
      "We build AI-powered products and systems that create leverage.",
  },
  robots: {
    index: true,
    follow: true,
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
        <div className="noise-overlay" aria-hidden="true" />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { BrandContent } from "./BrandContent";

export const metadata: Metadata = {
  title: "Brand Assets",
  description: "Volume Systems brand resources and downloadable assets.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BrandPage() {
  return <BrandContent />;
}

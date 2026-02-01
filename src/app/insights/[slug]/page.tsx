import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostContent } from "./PostContent";

type PostData = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  date: string;
  dateISO: string;
  content: React.ReactNode;
};

const posts: Record<string, PostData> = {
  "what-is-geo": {
    slug: "what-is-geo",
    title: "What is GEO? The Complete Guide to Generative Engine Optimization",
    metaTitle: "What is GEO? The Complete Guide to Generative Engine Optimization",
    description:
      "GEO (Generative Engine Optimization) is the practice of optimizing your digital presence to be cited by AI search systems. Learn what it is, why it matters, and how to start.",
    date: "January 30, 2026",
    dateISO: "2026-01-30",
    content: null,
  },
  "why-ai-implementations-fail": {
    slug: "why-ai-implementations-fail",
    title: "Why Most AI Implementations Fail (And How to Avoid It)",
    metaTitle: "Why Most AI Implementations Fail (And How to Avoid It)",
    description:
      "Most AI implementations fail — not because of the technology, but because of how they're built and deployed. Here's what goes wrong and how to get it right.",
    date: "January 30, 2026",
    dateISO: "2026-01-30",
    content: null,
  },
  "seo-is-dead-long-live-seo": {
    slug: "seo-is-dead-long-live-seo",
    title: "SEO is Dead. Long Live SEO.",
    metaTitle: "SEO is Dead. Long Live SEO.",
    description:
      "SEO isn't dead — but the version most businesses are practicing is. Here's what's actually changing and what smart operators should do about it.",
    date: "January 30, 2026",
    dateISO: "2026-01-30",
    content: null,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.metaTitle,
    description: post.description,
    openGraph: {
      title: `${post.metaTitle} | Volume Systems`,
      description: post.description,
      url: `https://volumesystems.io/insights/${post.slug}`,
      type: "article",
      publishedTime: post.dateISO,
    },
    twitter: {
      title: `${post.metaTitle} | Volume Systems`,
      description: post.description,
    },
    alternates: {
      canonical: `https://volumesystems.io/insights/${post.slug}`,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  return <PostContent slug={slug} title={post.title} date={post.date} />;
}

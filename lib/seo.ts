import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

const siteUrl = process.env.SITE_URL || "https://zhaohongyu.netlify.app";

type MetadataInput = {
  title?: string;
  description?: string;
  path?: string;
};

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/",
}: MetadataInput = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const url = new URL(path, siteUrl);

  return {
    metadataBase: new URL(siteUrl),
    title: fullTitle,
    description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteUrl }],
    keywords: [
      "Nathan Zhao",
      "Frontend Engineer",
      "React",
      "TypeScript",
      "Next.js",
      "Design Systems",
      "Portfolio",
    ],
    category: "technology",
    openGraph: {
      type: "website",
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} portfolio preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${siteUrl}/og-image.jpg`],
    },
  };
}

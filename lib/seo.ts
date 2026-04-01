import type { Metadata } from "next";

const siteName = "Ever Care";
const defaultDescription =
  "Ever Care provides compassionate home care, live-in care, respite care, and personalised support for families across Ghana.";
const defaultOgImage = "/images/founder-longer.png";

export function getBaseUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!siteUrl) {
    return new URL("http://localhost:3000");
  }

  return new URL(siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`);
}

export function absoluteUrl(path = "/") {
  return new URL(path, getBaseUrl()).toString();
}

export function buildMetadata({
  title,
  description = defaultDescription,
  path = "/",
  keywords = [],
}: {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      siteName,
      title,
      description,
      locale: "en_US",
      images: [
        {
          url: absoluteUrl(defaultOgImage),
          width: 1200,
          height: 630,
          alt: `${siteName} home care services`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(defaultOgImage)],
    },
  };
}

export const siteMetadata = {
  siteName,
  defaultDescription,
  defaultOgImage,
};

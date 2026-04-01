import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { absoluteUrl, buildMetadata, siteMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  ...buildMetadata({
    title: "Ever Care | Home Care Services in Ghana",
    description:
      "Ever Care provides compassionate home care, live-in care, respite care, and personalised support for families across Ghana.",
    path: "/",
    keywords: [
      "home care Ghana",
      "live-in care Ghana",
      "respite care Ghana",
      "elderly care Ghana",
      "domiciliary care Ghana",
      "Ever Care",
    ],
  }),
  title: {
    default: "Ever Care | Home Care Services in Ghana",
    template: "%s | Ever Care",
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/favicon.png?v=20260325",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon.png?v=20260325",
        type: "image/png",
      },
    ],
    shortcut: "/images/favicon.png?v=20260325",
    apple: "/images/favicon.png?v=20260325",
  },
  applicationName: "Ever Care",
  category: "healthcare",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Ever Care | Home Care Services in Ghana",
    description:
      "Ever Care provides compassionate home care, live-in care, respite care, and personalised support for families across Ghana.",
    url: absoluteUrl("/"),
    siteName: "Ever Care",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: absoluteUrl("/images/hand-holding.png"),
        width: 1200,
        height: 630,
        alt: "Ever Care | Home Care Services in Ghana",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeHealthCare",
    name: siteMetadata.siteName,
    description: siteMetadata.defaultDescription,
    areaServed: "Ghana",
    url: absoluteUrl("/"),
    logo: absoluteUrl("/images/logo-light.png"),
    image: absoluteUrl(siteMetadata.defaultOgImage),
    sameAs: [],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteMetadata.siteName,
    url: absoluteUrl("/"),
    description: siteMetadata.defaultDescription,
    inLanguage: "en-GH",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Hero from "@/components/Hero";
import WhyAimsSection from "@/components/WhyAimsSection";
import DifferenceSection from "@/components/DifferenceSection";
import ServicesShowcaseSection from "@/components/ServicesShowcaseSection";
import TestimonialHighlightsSection from "@/components/TestimonialHighlightsSection";
import ConsultationSection from "@/components/ConsultationSection";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Home Care Services in Ghana",
  description:
    "Discover home care, live-in care, and respite services from Ever Care. We are building a compassionate, personalised care service for families across Ghana.",
  path: "/",
  keywords: [
    "home care services Ghana",
    "elder care Ghana",
    "care agency Ghana",
    "respite support Ghana",
    "live-in care provider Ghana",
  ],
});

export default function Home() {
  const homePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeHealthCare",
    name: "Ever Care",
    url: absoluteUrl("/"),
    areaServed: "Ghana",
    description:
      "Ever Care offers home care, live-in care, respite care, and personalised support for families across Ghana.",
    serviceType: ["Home care", "Live-in care", "Respite care"],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }}
      />
      <Hero />
      <WhyAimsSection />
      <DifferenceSection />
      <ServicesShowcaseSection />
      <TestimonialHighlightsSection />
      <ConsultationSection />
    </main>
  );
}

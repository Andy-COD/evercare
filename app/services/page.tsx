import type { Metadata } from "next";
import styles from "./page.module.css";
import ServicesDomiciliaryIntro from "@/components/ServicesDomiciliaryIntro";
import ServicesLiveInCareSection from "@/components/ServicesLiveInCareSection";
import ServicesRespiteCareSection from "@/components/ServicesRespiteCareSection";
import Reveal from "@/components/Reveal";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Home Care, Live-In Care and Respite Services",
  description:
    "Explore Ever Care services including domiciliary home care, live-in care, and respite care for families seeking dependable support across Ghana.",
  path: "/services",
  keywords: [
    "domiciliary care Ghana",
    "live-in care Ghana",
    "respite care Ghana",
    "home support services Ghana",
  ],
});

export default function ServicesPage() {
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Home care services",
    provider: {
      "@type": "Organization",
      name: "Ever Care",
      url: absoluteUrl("/"),
    },
    areaServed: "Ghana",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Care services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Home care",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Live-in care",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Respite care",
          },
        },
      ],
    },
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <Reveal as="div" className={styles.heroContent}>
          <p className={styles.kicker}>✦ HOURLY CARE</p>
          <h1>
            Reliable and friendly home
            <br />
            care you can <em>trust.</em>
          </h1>
          <p>
            We all want to stay close to what we love our friends, family,
            pets, and the comfort of home.
          </p>
        </Reveal>
      </section>

      <ServicesDomiciliaryIntro />
      <ServicesLiveInCareSection />
      <ServicesRespiteCareSection />
    </main>
  );
}

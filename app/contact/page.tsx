import type { Metadata } from "next";
import ConsultationSection from "@/components/ConsultationSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Ever Care",
  description:
    "Book a free consultation with Ever Care and speak with our team about home care, live-in care, or respite support across Ghana.",
  path: "/contact",
  keywords: [
    "contact home care agency Ghana",
    "book care consultation Ghana",
    "Ever Care contact",
  ],
});

export default function ContactPage() {
  return (
    <main>
      <ConsultationSection />
    </main>
  );
}

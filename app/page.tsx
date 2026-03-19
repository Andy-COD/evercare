import Hero from "@/components/Hero";
import WhyAimsSection from "@/components/WhyAimsSection";
import DifferenceSection from "@/components/DifferenceSection";
import ServicesShowcaseSection from "@/components/ServicesShowcaseSection";
import TestimonialHighlightsSection from "@/components/TestimonialHighlightsSection";
import ConsultationSection from "@/components/ConsultationSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyAimsSection />
      <DifferenceSection />
      <ServicesShowcaseSection />
      <TestimonialHighlightsSection />
      <ConsultationSection />
    </main>
  );
}

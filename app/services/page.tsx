import styles from "./page.module.css";
import ServicesDomiciliaryIntro from "@/components/ServicesDomiciliaryIntro";
import ServicesLiveInCareSection from "@/components/ServicesLiveInCareSection";
import ServicesRespiteCareSection from "@/components/ServicesRespiteCareSection";

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
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
        </div>
      </section>

      <ServicesDomiciliaryIntro />
      <ServicesLiveInCareSection />
      <ServicesRespiteCareSection />
    </main>
  );
}

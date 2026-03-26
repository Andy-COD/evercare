import styles from "./ServicesDomiciliaryIntro.module.css";
import Reveal from "@/components/Reveal";

const domiciliaryServices = [
  "Assistance with self care deficit",
  "Regular medication assistance",
];

export default function ServicesDomiciliaryIntro() {
  return (
    <>
      <section className={styles.section}>
        <Reveal as="div" className={styles.imageCard} variant="left" />

        <Reveal as="div" className={styles.copy} variant="right" delay={100}>
          <h2>
            What is <em>domiciliary</em> <em>care?</em>
          </h2>
          <p>
            Domiciliary care is professional support delivered in your own
            home. It helps with day-to-day living, personal care, medication
            prompts, companionship, and routines, so people can stay safe,
            independent, and comfortable in familiar surroundings.
          </p>
        </Reveal>
      </section>

      <section id="coverage" className={styles.benefitsSection}>
        <Reveal as="div" className={styles.benefitsInner}>
          <h3>
            The benefits of<span>domiciliary care</span>
          </h3>
          <p className={styles.benefitsLead}>
            Working with us means your loved one can stay in the home they love
            and that alone makes a world of difference.
          </p>
          <div className={styles.benefitsDivider} />

          <div className={styles.benefitsGrid}>
            <Reveal as="div" className={`${styles.benefitImage} ${styles.benefitImageOne}`} delay={120} />
            <Reveal as="div" className={`${styles.benefitImage} ${styles.benefitImageTwo}`} delay={190} />
            <Reveal as="div" className={`${styles.benefitImage} ${styles.benefitImageThree}`} delay={260} />
            <Reveal as="div" className={`${styles.benefitImage} ${styles.benefitImageFour}`} delay={330} />
          </div>

          <p className={styles.benefitsText}>
            But it doesn&apos;t stop there. They also receive one-to-one care,
            help with daily tasks, support with bathing and meals,
            companionship, and someone to keep them socially connected. All
            while enjoying a safe, familiar environment proven to support better
            long-term well-being.
          </p>
          <p className={styles.benefitsText}>
            Simply put, they get everything they need to live a healthy,
            meaningful life at home.
          </p>

          <Reveal as="div" className={styles.serviceHighlight} delay={220}>
            <p className={styles.serviceLabel}>Included domiciliary services</p>
            <ul className={styles.serviceList}>
              {domiciliaryServices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </Reveal>
      </section>
    </>
  );
}

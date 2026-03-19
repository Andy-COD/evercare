import styles from "./ServicesDomiciliaryIntro.module.css";

export default function ServicesDomiciliaryIntro() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.imageCard} />

        <div className={styles.copy}>
          <h2>
            What is <em>domiciliary</em> <em>care?</em>
          </h2>
          <p>
            Domiciliary care is professional support delivered in your own
            home. It helps with day-to-day living, personal care, medication
            prompts, companionship, and routines, so people can stay safe,
            independent, and comfortable in familiar surroundings.
          </p>
        </div>
      </section>

      <section id="coverage" className={styles.benefitsSection}>
        <div className={styles.benefitsInner}>
          <h3>
            The benefits of<span>domiciliary care</span>
          </h3>
          <p className={styles.benefitsLead}>
            Working with us means your loved one can stay in the home they love
            and that alone makes a world of difference.
          </p>
          <div className={styles.benefitsDivider} />

          <div className={styles.benefitsGrid}>
            <div className={`${styles.benefitImage} ${styles.benefitImageOne}`} />
            <div className={`${styles.benefitImage} ${styles.benefitImageTwo}`} />
            <div className={`${styles.benefitImage} ${styles.benefitImageThree}`} />
            <div className={`${styles.benefitImage} ${styles.benefitImageFour}`} />
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
        </div>
      </section>
    </>
  );
}

import styles from "./WhyAimsSection.module.css";
import Reveal from "@/components/Reveal";

export default function WhyAimsSection() {
  return (
    <section className={styles.section}>
      <Reveal as="div" className={styles.headerWrap}>
        <p className={styles.kicker}>* WHY AIMS HOMECARE</p>
        <h2 className={styles.title}>
          Supporting you with dignity,
          <span>respect &amp; warmth</span>
        </h2>
        <p className={styles.subtitle}>
          We provide compassionate, reliable home-based care and live-in support,
          helping individuals stay safe, comfortable, and independent in the place
          they love most, their home.
        </p>
        <div className={styles.divider} />
      </Reveal>

      <Reveal as="div" className={styles.imagePanel} delay={120}>
        <div className={styles.cards}>
          <Reveal as="article" className={styles.card} delay={180}>
            <div className={styles.iconBox}>⏱</div>
            <h3>24/7 Person-Centred Support</h3>
            <p>
              We tailor each visit from hourly care to live-in support to your
              personal needs.
            </p>
          </Reveal>

          <Reveal as="article" className={styles.card} delay={260}>
            <div className={styles.cardTop}>
              <div className={styles.iconBox}>Q</div>
              <span className={styles.badge}>* GOOD</span>
            </div>
            <h3>QCQ Regulated</h3>
            <p>
              Over 20 years of reliable, CQC-regulated home care across Ghana.
            </p>
          </Reveal>

          <Reveal as="article" className={styles.card} delay={340}>
            <div className={styles.iconBox}>⌖</div>
            <h3>Covering All Areas Of Ghana</h3>
            <p>
              From Leatherhead to Dorking and Epsom, just give us a call to
              confirm.
            </p>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}

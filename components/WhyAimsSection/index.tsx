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
              <span className={styles.badge}>* NEW</span>
            </div>
            <h3>Thoughtful Beginnings</h3>
            <p>
              We are building our service with care, transparency, and a strong
              commitment to doing things well from the start.
            </p>
          </Reveal>

          <Reveal as="article" className={styles.card} delay={340}>
            <div className={styles.iconBox}>⌖</div>
            <h3>Covering All Areas Of Ghana</h3>
            <p>
              We are currently growing our coverage. Get in touch to confirm
              availability in your area.
            </p>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}

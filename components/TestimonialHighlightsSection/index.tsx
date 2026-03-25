import Image from "next/image";
import styles from "./TestimonialHighlightsSection.module.css";
import Reveal from "@/components/Reveal";

export default function TestimonialHighlightsSection() {
  return (
    <section className={styles.section}>
      <Reveal as="div" className={styles.headWrap}>
        <p className={styles.kicker}>TESTIMONIAL HIGHLIGHTS</p>
        <h2 className={styles.title}>
          Built with <span>families</span>
          <br />
          across Ghana
        </h2>
        <p className={styles.subtitle}>
          We&apos;re a new service shaped by compassion, reliability, and the kind
          of support families want to feel at home. From daily help to live-in
          care, we&apos;re building each experience with comfort, safety, and peace
          of mind in focus.
        </p>
        <div className={styles.divider} />

        <div className={styles.reviewPill}>✦ New care service, growing with every family we support</div>

        <div className={styles.trustRow}>
          <span className={styles.cqc}>Compassionate support</span>
          <span className={styles.people}>👨🏽 👨🏻 👩🏽 👩🏻</span>
          <span className={styles.stars}>★★★★★</span>
          <span className={styles.trustText}>Focused on earning trust one family at a time</span>
        </div>
      </Reveal>

      <div className={styles.cardsGrid}>
        <div className={styles.metricsCol}>
          <Reveal as="article" className={styles.metricCard} delay={120}>
            <h3>New</h3>
            <p>A growing service shaped with care and intention</p>
          </Reveal>

          <Reveal as="article" className={styles.metricCard} delay={200}>
            <h3>1:1</h3>
            <p>Personal support as we build meaningful relationships with every family.</p>
          </Reveal>
        </div>

        <Reveal as="article" className={styles.featureCard} delay={180}>
          <p className={styles.cardKicker}>PATIENT REVIEW</p>
          <h3>How Ever Care Home-care helped me achieve healthy goals</h3>
          <Image
            src="/images/elder-family.png"
            alt="Nurse speaking with older woman"
            loading="lazy"
            width={500}
            height={1000}
          />
          <span className={styles.cornerDot} />
        </Reveal>

        <Reveal as="article" className={styles.impactCard} delay={260}>
          <p className={styles.cardKicker}>IMPACT METRICS</p>
          <Image
            src="/images/child-care.png"
            alt="Older man and caregiver smiling"
            loading="lazy"
            width={500}
            height={500}
          />
          <div className={styles.overlay}>
            <h3>Early</h3>
            <p>Building a service families can feel confident choosing</p>
            <button type="button" aria-label="Play testimonial video">
              ▶
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Image from "next/image";
import styles from "./TestimonialHighlightsSection.module.css";

export default function TestimonialHighlightsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.headWrap}>
        <p className={styles.kicker}>TESTIMONIAL HIGHLIGHTS</p>
        <h2 className={styles.title}>
          Trusted by <span>families</span>
          <br />
          across Ghana
        </h2>
        <p className={styles.subtitle}>
          Families across Ghana rely on us for compassionate, reliable care that
          truly makes a difference. From daily support to full-time live-in care,
          our dedicated team is committed to delivering comfort, safety, and
          peace of mind right at home.
        </p>
        <div className={styles.divider} />

        <div className={styles.reviewPill}>✦ 9.7 Reviews on <em>homecare.co.uk</em></div>

        <div className={styles.trustRow}>
          <span className={styles.cqc}>CareQuality Commission</span>
          <span className={styles.people}>👨🏽 👨🏻 👩🏽 👩🏻</span>
          <span className={styles.stars}>★★★★★</span>
          <span className={styles.trustText}>Trusted by 2,000+ Customers</span>
        </div>
      </div>

      <div className={styles.cardsGrid}>
        <div className={styles.metricsCol}>
          <article className={styles.metricCard}>
            <h3>500+</h3>
            <p>Areas covered across Ghana</p>
          </article>

          <article className={styles.metricCard}>
            <h3>20+</h3>
            <p>Years of experience delivering high-quality domiciliary care across Ghana.</p>
          </article>
        </div>

        <article className={styles.featureCard}>
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
        </article>

        <article className={styles.impactCard}>
          <p className={styles.cardKicker}>IMPACT METRICS</p>
          <Image
            src="/images/child-care.png"
            alt="Older man and caregiver smiling"
            loading="lazy"
            width={500}
            height={500}
          />
          <div className={styles.overlay}>
            <h3>98%</h3>
            <p>Satisfaction Rate</p>
            <button type="button" aria-label="Play testimonial video">
              ▶
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}

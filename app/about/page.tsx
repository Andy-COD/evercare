import Image from "next/image";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.storySection}>
        <p className={styles.kicker}>✦ OUR STORY</p>
        <h1>
          A trusted care partner for
          <br />
          <span>families</span> across surrey
        </h1>

        <p className={styles.lead}>
          For more than <strong>2 years</strong>, we have supported families
          with reliable, CQC-regulated care built on compassion, respect, and
          professionalism. Our journey began with a simple mission to offer
          people the dignity of staying at home while receiving the care they
          deserve. Today, we continue that mission by delivering tailored
          support shaped around each person&apos;s needs, routines, and
          preferences.
        </p>

        <p className={styles.lead}>
          We believe great care starts with real people. No long call centre
          queues, no faceless systems. Just fast, effective support from a team
          that knows your name and understands your needs. When you call us, you
          speak directly to someone who can help, and your service starts
          quickly, often within days, not weeks.
        </p>

        <div className={styles.divider} />

        <div className={styles.mosaic}>
          <div
            className={`${styles.tile} ${styles.imageTile} ${styles.leftTop}`}
          >
            <Image
              width={1400}
              height={1400}
              src="/images/elder-family.png"
              alt="Older woman with family member smiling"
              className={styles.tileImage}
            />
          </div>
          <article className={`${styles.tile} ${styles.centerTop}`}>
            <div className={styles.wreathRow}>
              <span className={styles.wreath}>❦</span>
              <div>
                <p className={styles.years}>2+</p>
                <p className={styles.yearsLabel}>years</p>
              </div>
              <span className={styles.wreath}>❦</span>
            </div>
            <h2>OF EXCELLENCE</h2>
            <p>
              For over two decades, we&apos;ve been committed to delivering
              compassionate, reliable care that families can trust. Our
              long-standing experience ensures quality, and genuine support in
              every visit.
            </p>
          </article>
          <div
            className={`${styles.tile} ${styles.imageTile} ${styles.rightTop}`}
          >
            <Image
              width={1400}
              height={1400}
              src="/images/child-care.png"
              alt="Caregiver and elderly woman laughing together"
              className={styles.tileImage}
            />
          </div>
          <div
            className={`${styles.tile} ${styles.imageTile} ${styles.leftBottom}`}
          >
            <Image
              width={1400}
              height={1400}
              src="/images/tools.png"
              alt="Care worker supporting elderly woman at home"
              className={styles.tileImage}
            />
          </div>
          <div
            className={`${styles.tile} ${styles.imageTile} ${styles.centerBottom}`}
          >
            <Image
              width={1400}
              height={1400}
              src="/images/old-man.png"
              alt="Caregiver assisting elderly person in community setting"
              className={styles.tileImage}
            />
          </div>
          <div
            className={`${styles.tile} ${styles.imageTile} ${styles.rightBottom}`}
          >
            <Image
              width={1400}
              height={1400}
              src="/images/young-man.png"
              alt="Nurse helping a senior walk with support frame"
              className={styles.tileImage}
            />
          </div>
        </div>

        <section className={styles.founderSection}>
          <div className={styles.founderPortraitWrap}>
            <Image
              fill
              src="/images/founder.jpg"
              alt="Founder portrait"
              quality={100}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.founderPortrait}
            />
          </div>

          <div className={styles.founderCopy}>
            <p className={styles.kicker}>✦ FOUNDER BIO</p>
            <h2>
              Meet the heart behind
              <br />
              <span>Ever Care</span>
            </h2>
            <p className={styles.founderLead}>
              Ever Care was founded by a care professional who believed families
              deserved something better: thoughtful support, clear
              communication, and carers chosen with real intention.
            </p>
            <p className={styles.founderText}>
              After years of working closely with older adults and their loved
              ones, our founder saw how much difference consistent,
              compassionate home care could make. That experience shaped a
              service built around dignity, warmth, and personal connection
              rather than one-size-fits-all schedules.
            </p>
            <p className={styles.founderText}>
              Today, that same philosophy continues to guide every visit. We
              take time to listen, match each client carefully, and create
              support that feels reassuring, respectful, and genuinely human.
            </p>
            <div className={styles.founderSignature}>
              <strong>Linda S.</strong>
              <span>Founder, Ever Care</span>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

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
          For more than <strong>20 years</strong>, we have supported families with reliable,
          CQC-regulated care built on compassion, respect, and professionalism. Our journey began
          with a simple mission to offer people the dignity of staying at home while receiving the
          care they deserve. Today, we continue that mission by delivering tailored support shaped
          around each person&apos;s needs, routines, and preferences.
        </p>

        <p className={styles.lead}>
          We believe great care starts with real people. No long call centre queues, no faceless
          systems. Just fast, effective support from a team that knows your name and understands
          your needs. When you call us, you speak directly to someone who can help, and your
          service starts quickly, often within days, not weeks.
        </p>

        <div className={styles.divider} />

        <div className={styles.mosaic}>
          <div className={`${styles.tile} ${styles.imageTile} ${styles.leftTop}`}>
            <img
              src="https://images.unsplash.com/photo-1524515842789-2358e4bb77e4?auto=format&fit=crop&w=1400&q=80"
              alt="Older woman with family member smiling"
              className={styles.tileImage}
            />
          </div>
          <article className={`${styles.tile} ${styles.centerTop}`}>
            <div className={styles.wreathRow}>
              <span className={styles.wreath}>❦</span>
              <div>
                <p className={styles.years}>20</p>
                <p className={styles.yearsLabel}>years</p>
              </div>
              <span className={styles.wreath}>❦</span>
            </div>
            <h2>OF EXCELLENCE</h2>
            <p>
              For over two decades, we&apos;ve been committed to delivering compassionate, reliable
              care that families can trust. Our long-standing experience ensures quality, and
              genuine support in every visit.
            </p>
          </article>
          <div className={`${styles.tile} ${styles.imageTile} ${styles.rightTop}`}>
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1400&q=80"
              alt="Caregiver and elderly woman laughing together"
              className={styles.tileImage}
            />
          </div>
          <div className={`${styles.tile} ${styles.imageTile} ${styles.leftBottom}`}>
            <img
              src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1400&q=80"
              alt="Care worker supporting elderly woman at home"
              className={styles.tileImage}
            />
          </div>
          <div className={`${styles.tile} ${styles.imageTile} ${styles.centerBottom}`}>
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=1400&q=80"
              alt="Caregiver assisting elderly person in community setting"
              className={styles.tileImage}
            />
          </div>
          <div className={`${styles.tile} ${styles.imageTile} ${styles.rightBottom}`}>
            <img
              src="https://images.unsplash.com/photo-1576765608622-067973a79f53?auto=format&fit=crop&w=1400&q=80"
              alt="Nurse helping a senior walk with support frame"
              className={styles.tileImage}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";
import Reveal from "@/components/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Ever Care",
  description:
    "Learn more about Ever Care, our mission, and the compassionate approach behind our growing home care service for families across Ghana.",
  path: "/about",
  keywords: [
    "about Ever Care",
    "home care agency Ghana",
    "care team Ghana",
    "elderly care company Ghana",
  ],
});

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.storySection}>
        <Reveal as="p" className={styles.kicker}>
          ✦ OUR STORY
        </Reveal>
        <Reveal as="h1" delay={80}>
          A growing care partner for
          <br />
          <span>families</span> across Ghana
        </Reveal>

        <Reveal as="p" className={styles.lead} delay={140}>
          Ever Care is at the beginning of its journey, building a care service
          rooted in compassion, respect, and professionalism. We started with a
          simple mission: to help people remain at home with the dignity,
          reassurance, and support they deserve. As we grow, we&apos;re focused
          on offering thoughtful care shaped around each person&apos;s needs,
          routines, and preferences.
        </Reveal>

        <Reveal as="p" className={styles.lead} delay={220}>
          We believe great care starts with real people. No long call centre
          queues, no faceless systems. Just fast, effective support from a team
          that wants to know your name and understand your needs. When you call
          us, you speak directly to someone who can help and guide you through
          the next steps with clarity and care.
        </Reveal>

        <Reveal as="div" className={styles.divider} delay={260} />

        <div className={styles.mosaic}>
          <Reveal
            as="div"
            className={`${styles.tile} ${styles.imageTile} ${styles.leftTop}`}
            variant="left"
            delay={120}
          >
            <Image
              width={1400}
              height={1400}
              src="/images/elder-family.png"
              alt="Older woman with family member smiling"
              className={styles.tileImage}
            />
          </Reveal>
          <Reveal
            as="article"
            className={`${styles.tile} ${styles.centerTop}`}
            delay={180}
          >
            <div className={styles.wreathRow}>
              <span className={styles.wreath}>❦</span>
              <div>
                <p className={styles.years}>Starting Strong</p>
                {/* <p className={styles.yearsLabel}>starting strong</p> */}
              </div>
              <span className={styles.wreath}>❦</span>
            </div>
            <h2>OUR BEGINNING</h2>
            <p>
              We&apos;re in the early stages of building Ever Care with
              intention, warmth, and a deep commitment to providing dependable,
              compassionate support for every family we serve. Our vision is
              rooted in dignity, trust, and genuine human connection—ensuring
              that every individual feels seen, valued, and cared for in the
              comfort of their own home.
            </p>
          </Reveal>
          <Reveal
            as="div"
            className={`${styles.tile} ${styles.imageTile} ${styles.rightTop}`}
            variant="right"
            delay={240}
          >
            <Image
              width={1400}
              height={1400}
              src="/images/child-care.png"
              alt="Caregiver and elderly woman laughing together"
              className={styles.tileImage}
            />
          </Reveal>
          <Reveal
            as="div"
            className={`${styles.tile} ${styles.imageTile} ${styles.leftBottom}`}
            delay={160}
          >
            <Image
              width={1400}
              height={1400}
              src="/images/tools.png"
              alt="Care worker supporting elderly woman at home"
              className={styles.tileImage}
            />
          </Reveal>
          <Reveal
            as="div"
            className={`${styles.tile} ${styles.imageTile} ${styles.centerBottom}`}
            delay={220}
          >
            <Image
              width={1400}
              height={1400}
              src="/images/old-man.png"
              alt="Caregiver assisting elderly person in community setting"
              className={styles.tileImage}
            />
          </Reveal>
          <Reveal
            as="div"
            className={`${styles.tile} ${styles.imageTile} ${styles.rightBottom}`}
            delay={280}
          >
            <Image
              width={1400}
              height={1400}
              src="/images/young-man.png"
              alt="Nurse helping a senior walk with support frame"
              className={styles.tileImage}
            />
          </Reveal>
        </div>

        <section className={styles.founderSection}>
          <Reveal
            as="div"
            className={styles.founderPortraitWrap}
            variant="left"
          >
            <Image
              fill
              src="/images/founder-longer.png"
              alt="Founder portrait"
              quality={100}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.founderPortrait}
            />
          </Reveal>

          <Reveal
            as="div"
            className={styles.founderCopy}
            variant="right"
            delay={100}
          >
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
              As Ever Care begins to grow, that same philosophy guides every
              step. We take time to listen, match each client carefully, and
              create support that feels reassuring, respectful, and genuinely
              human.
            </p>
            <div className={styles.founderSignature}>
              <strong>Linda Siaw.</strong>
              <span>Founder, Ever Care</span>
            </div>
          </Reveal>
        </section>
      </section>
    </main>
  );
}

import styles from "./ServicesRespiteCareSection.module.css";
import Reveal from "@/components/Reveal";

const respitePoints = [
  {
    title: "Planned cover",
    text: "Reliable care during holidays, appointments, or regular rest periods for family carers.",
  },
  {
    title: "Emergency support",
    text: "Short-notice help when circumstances change and extra support is suddenly needed.",
  },
  {
    title: "Flexible visits",
    text: "From a few hours to several days, arranged around the level of help required.",
  },
];

export default function ServicesRespiteCareSection() {
  return (
    <section id="respite-care" className={styles.section}>
      <Reveal as="div" className={styles.inner}>
        <div className={styles.headingBlock}>
          <p className={styles.kicker}>✦ RESPITE CARE</p>
          <h2>
            Time to recharge, with
            <span>trusted respite care</span>
          </h2>
          <p className={styles.lead}>
            Respite care gives family carers room to rest while making sure
            their loved one continues to receive warm, dependable support. It
            can be arranged as short-term cover or regular relief, giving
            everyone confidence and continuity.
          </p>
          <div className={styles.divider} />
        </div>

        <div className={styles.contentGrid}>
          <Reveal as="div" className={styles.summaryCard} variant="left" delay={120}>
            <div className={styles.summaryImage} />
            <p>
              Whether you need a few hours to catch your breath or a longer
              period of cover, respite care keeps routines steady, reduces
              stress, and helps families sustain care with confidence.
            </p>
          </Reveal>

          <div className={styles.pointsColumn}>
            {respitePoints.map((point, index) => (
              <Reveal
                as="article"
                key={point.title}
                className={styles.pointCard}
                variant="right"
                delay={180 + index * 70}
              >
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

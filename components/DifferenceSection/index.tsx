import styles from "./DifferenceSection.module.css";
import Reveal from "@/components/Reveal";

const values = [
  {
    icon: "☺",
    title: "Compassion",
    body: "Support that is warm, patient, and truly human.",
  },
  {
    icon: "♡",
    title: "Care",
    body: "Reliable support you can trust.",
  },
  {
    icon: "✣",
    title: "Integrity",
    body: "Honest, transparent care you can rely on.",
  },
  {
    icon: "🤝",
    title: "Respect",
    body: "We treat you with the respect you deserve.",
  },
];

export default function DifferenceSection() {
  return (
    <section className={styles.section}>
      <Reveal as="div" className={styles.headWrap}>
        <p className={styles.kicker}>THE DIFFERENCE WE BRING</p>
        <h2 className={styles.title}>
          Your <span>well-being</span> is
          <br />
          our priority
        </h2>
        <p className={styles.subtitle}>
          We put your comfort, safety, and independence at the center of
          everything we do. Our focus is always on delivering the highest
          standard of support so you feel confident, respected, and truly cared
          for at home.
        </p>
        <div className={styles.divider} />
      </Reveal>

      <div className={styles.grid}>
        <Reveal as="article" className={styles.mediaCard} variant="left" delay={120}>
          <button className={styles.playButton} aria-label="Play video" type="button">
            ▶
          </button>
        </Reveal>

        <div className={styles.valueGrid}>
          {values.map((value, index) => (
            <Reveal
              as="article"
              key={value.title}
              className={styles.valueCard}
              variant="right"
              delay={160 + index * 70}
            >
              <span className={styles.icon}>{value.icon}</span>
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

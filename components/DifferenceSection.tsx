import styles from "./DifferenceSection.module.css";

const values = [
  {
    icon: "☺",
    title: "Compassion",
    body: "Support that's warm, patient, and truly human.",
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
      <div className={styles.headWrap}>
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
      </div>

      <div className={styles.grid}>
        <article className={styles.mediaCard}>
          <button className={styles.playButton} aria-label="Play video" type="button">
            ▶
          </button>
        </article>

        <div className={styles.valueGrid}>
          {values.map((value) => (
            <article key={value.title} className={styles.valueCard}>
              <span className={styles.icon}>{value.icon}</span>
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

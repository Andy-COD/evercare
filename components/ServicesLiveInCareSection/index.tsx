import styles from "./ServicesLiveInCareSection.module.css";

const supportPoints = [
  "A dedicated carer living in the home for consistent day and night reassurance.",
  "Support with personal care, meal preparation, medication prompts, and routines.",
  "Companionship that helps reduce loneliness and keeps daily life feeling familiar.",
  "Flexible care plans that adapt as needs change without leaving home.",
];

export default function ServicesLiveInCareSection() {
  return (
    <section id="live-in-care" className={styles.section}>
      <div className={styles.mediaCard} />

      <div className={styles.copy}>
        <p className={styles.kicker}>✦ LIVE-IN CARE</p>
        <h2>
          Full-time support with
          <br />
          comfort, continuity, and
          <br />
          <em>peace of mind</em>
        </h2>
        <p className={styles.lead}>
          Live-in care means a dedicated carer stays in the home, offering
          practical help and reassuring companionship throughout the day. It is
          ideal for people who want dependable support without leaving the
          place, routines, and memories that make home feel secure.
        </p>

        <div className={styles.pointGrid}>
          {supportPoints.map((point) => (
            <div key={point} className={styles.pointCard}>
              <span className={styles.pointIcon}>✦</span>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

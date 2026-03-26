import styles from "./ServicesLiveInCareSection.module.css";
import Reveal from "@/components/Reveal";

const supportPoints = [
  "A dedicated carer living in the home for consistent day and night reassurance.",
  "Support with personal care, meal preparation, medication prompts, and routines.",
  "Companionship that helps reduce loneliness and keeps daily life feeling familiar.",
  "Flexible care plans that adapt as needs change without leaving home.",
];

const featuredServices = ["Palliative care support", "Disability support"];

export default function ServicesLiveInCareSection() {
  return (
    <section id="live-in-care" className={styles.section}>
      <Reveal as="div" className={styles.mediaCard} variant="left" />

      <Reveal as="div" className={styles.copy} variant="right" delay={100}>
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
          {supportPoints.map((point, index) => (
            <Reveal key={point} className={styles.pointCard} delay={160 + index * 60}>
              <span className={styles.pointIcon}>✦</span>
              <p>{point}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className={styles.serviceHighlight} delay={420}>
          <p className={styles.serviceLabel}>Included live-in services</p>
          <ul className={styles.serviceList}>
            {featuredServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </Reveal>
      </Reveal>
    </section>
  );
}

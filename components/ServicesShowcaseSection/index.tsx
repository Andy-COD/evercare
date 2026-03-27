import styles from "./ServicesShowcaseSection.module.css";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const sections = [
  {
    titleMain: "Home",
    titleAccent: "care",
    chip: "HOME CARE SERVICES",
    description:
      "No matter your family needs, we provide compassionate, reliable, and personalized home care support that you can truly count on, every day and at every step of the way.",
    bullets: [
      "Hourly care",
      "Night care",
      "Respite care",
      "Health & wellbeing check",
      "Companionship care",
    ],
    image:
      "/images/hand-holding.png",
    imageAlt: "Carer assisting an older adult at home",
  },
  {
    titleMain: "Live-in",
    titleAccent: "care",
    chip: "LIVE-IN CARE SERVICES",
    description:
      "Live-in care provides full-time support from a dedicated carer who stays in your home, offering round-the-clock assistance, companionship, and peace of mind.",
    bullets: [
      "Live-in care",
      "Alternative to a care home",
      "Live-in care for couples",
      "Short term respite care",
    ],
    image:
      "/images/walk.png",
    imageAlt: "Carer supporting an elderly woman in a living room",
  },
];

export default function ServicesShowcaseSection() {
  return (
    <section id="services" className={styles.section}>
      <Reveal as="div" className={styles.headWrap}>
        <p className={styles.kicker}>OUR SERVICES</p>
        <h2 className={styles.title}>
          Care that fits
          <br />
          your <span>life</span>
        </h2>
        <p className={styles.subtitle}>
          From daily assistance to round-the-clock support, our services are
          tailored to your needs so you can feel safe, supported, and confident
          at home.
        </p>
      </Reveal>

      <div className={styles.listWrap}>
        {sections.map((service, index) => (
          <Reveal
            as="article"
            className={styles.serviceCard}
            key={service.chip}
            delay={120 + index * 90}
          >
            <div className={styles.content}>
              <div className={styles.titleRow}>
                <h3>
                  {service.titleMain} <span>{service.titleAccent}</span>
                </h3>
                <div className={styles.chipWrap}>
                  <span className={styles.chip}>✦ {service.chip}</span>
                  <span className={styles.arrow}>↗</span>
                </div>
              </div>

              <p className={styles.description}>{service.description}</p>

              <ul className={styles.bullets}>
                {service.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.imageWrap}>
              <Image src={service.image} alt={service.imageAlt} loading="lazy" width={500} height={500} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

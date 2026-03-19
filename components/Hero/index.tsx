import Link from "next/link";

export default function Hero() {
  return (
    <section className="homecare-hero">
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="fade-in delay-2">
          Ghana&apos;s most trusted <em>home care</em> agency
        </h1>
        <p className="hero-copy fade-in delay-3">
          Quality, compassion, and reliability trusted by families across Ghana
          for exceptional home care tailored to every need.
        </p>
        <div className="hero-actions fade-in delay-4">
          <Link href="/contact" className="btn btn-primary">
            Book an appointment
          </Link>
          <Link href="/services" className="btn btn-secondary">
            View services
          </Link>
        </div>
      </div>
    </section>
  );
}

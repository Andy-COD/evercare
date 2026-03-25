import Link from "next/link";

export default function Hero() {
  return (
    <section className="homecare-hero">
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="fade-in delay-2">
          Thoughtful <em>home care</em> support for families in Ghana
        </h1>
        <p className="hero-copy fade-in delay-3">
          We&apos;re just getting started, with a simple focus on compassionate,
          reliable support tailored to each family&apos;s needs.
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

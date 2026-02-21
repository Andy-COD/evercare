export default function Hero() {
  return (
    <section className="homecare-hero">
      <header className="homecare-nav">
        <div className="brand">
          <span className="brand-mark">❦</span>
          <span>Ever Care</span>
        </div>
        <nav className="menu">
          <a href="#!">Home</a>
          <a href="#!">About us</a>
          <a href="#!">Services +</a>
          <a href="#!">Contact us</a>
          <a href="#!">Check coverage ↗</a>
        </nav>
        <a className="call-pill" href="tel:+11234567890">
          <span className="call-icon">☎</span>
          <span>
            <strong>123 4567 890</strong>
            <small>CALL US</small>
          </span>
        </a>
      </header>

      <div className="hero-overlay" />

      <div className="hero-content">
        {/* <p className="review-pill fade-in delay-1">
          ✦ 9.7 homecare.co.uk Reviews
        </p> */}
        <h1 className="fade-in delay-2">
          Ghana&apos;s most trusted <em>home care</em> agency
        </h1>
        <p className="hero-copy fade-in delay-3">
          Quality, compassion, and reliability trusted by families across Ghana
          for exceptional home care tailored to every need.
        </p>
        <div className="hero-actions fade-in delay-4">
          <a href="#!" className="btn btn-primary">
            Book an appointment
          </a>
          <a href="#!" className="btn btn-secondary">
            View services
          </a>
        </div>

        {/* <div className="trust-row fade-in delay-4">
          <span className="cqc-pill">CareQuality Commission</span>
          <span className="avatars">
            <i>A</i>
            <i>B</i>
            <i>C</i>
            <i>D</i>
          </span>
          <span>Trusted by 2,000+ Customers</span>
        </div> */}
      </div>
    </section>
  );
}

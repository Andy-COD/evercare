"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function getRouteHeroElement(pathname: string): HTMLElement | null {
  if (pathname.startsWith("/about")) {
    return document.querySelector<HTMLElement>(".storySection");
  }

  return document.querySelector<HTMLElement>(".homecare-hero");
}

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const topOffset = 0;
    const heroInset = 22;
    const mobileBreakpoint = 820;
    let rafId = 0;

    const clearSticky = () => {
      nav.classList.remove("homecare-nav-main-sticky");
      nav.style.removeProperty("left");
      nav.style.removeProperty("top");
      nav.style.removeProperty("width");
    };

    const updateSticky = () => {
      rafId = 0;
      const hero = getRouteHeroElement(pathname);
      if (!hero) {
        clearSticky();
        return;
      }

      const heroRect = hero.getBoundingClientRect();
      const heroTop = window.scrollY + heroRect.top;
      const shouldStick = window.scrollY > heroTop;

      if (!shouldStick) {
        clearSticky();
        return;
      }

      const startLeft = heroRect.left + heroInset;
      const startWidth = heroRect.width - heroInset * 2;
      const endLeft = 0;
      const endWidth = window.innerWidth;
      const isMobile = window.innerWidth <= mobileBreakpoint;
      const progress = isMobile
        ? 1
        : Math.min(Math.max((window.scrollY - heroTop) / 180, 0), 1);
      const currentLeft = startLeft + (endLeft - startLeft) * progress;
      const currentWidth = startWidth + (endWidth - startWidth) * progress;

      nav.classList.add("homecare-nav-main-sticky");
      nav.style.left = `${currentLeft}px`;
      nav.style.top = `${topOffset}px`;
      nav.style.width = `${currentWidth}px`;
    };

    const onScrollOrResize = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateSticky);
    };

    updateSticky();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      clearSticky();
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [pathname]);

  return (
    <>
      <header ref={navRef} className="homecare-nav">
        <Link href="/" className="brand" aria-label="Ever Care home">
          <span className="brand-mark" aria-hidden="true">
            <Image
              className="brand-mark-image brand-mark-image-light"
              src="/images/favicon-light.png"
              alt=""
              width={36}
              height={36}
            />
            <Image
              className="brand-mark-image brand-mark-image-dark"
              src="/images/favicon-dark.png"
              alt=""
              width={36}
              height={36}
            />
          </span>
          <span>Ever Care</span>
        </Link>
        <nav className="menu">
          <Link href="/">Home</Link>
          <Link href="/about">About us</Link>
          <Link href="/services">Services +</Link>
          <Link href="/contact">Contact us</Link>
        </nav>
        <a className="call-pill" href="tel:+233202111606">
          <span className="call-icon">☎</span>
          <span>
            <strong>+233 202 111 606</strong>
            <small>CALL US</small>
          </span>
        </a>

        <button
          type="button"
          className="nav-burger"
          aria-label="Open navigation menu"
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div
        className={`mobile-drawer-backdrop${drawerOpen ? " mobile-drawer-backdrop-open" : ""}`}
        onClick={() => setDrawerOpen(false)}
      />
      <aside className={`mobile-drawer${drawerOpen ? " mobile-drawer-open" : ""}`}>
        <button
          type="button"
          className="mobile-drawer-close"
          aria-label="Close navigation menu"
          onClick={() => setDrawerOpen(false)}
        >
          <span />
          <span />
        </button>
        <div className="mobile-drawer-decor" aria-hidden>
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="mobile-drawer-panel">
          <nav className="mobile-drawer-nav">
            <a
              className="mobile-drawer-call-pill"
              href="tel:+233202111606"
              onClick={() => setDrawerOpen(false)}
            >
              <span className="call-icon">☎</span>
              <span>
                <strong>+233 202 111 606</strong>
                <small>CALL US</small>
              </span>
            </a>
            <Link href="/about" onClick={() => setDrawerOpen(false)}>
              About
            </Link>
            <Link href="/services" onClick={() => setDrawerOpen(false)}>
              Services
            </Link>
            <Link href="/contact" onClick={() => setDrawerOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
}

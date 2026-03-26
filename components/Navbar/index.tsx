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
  const [callModalOpen, setCallModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!callModalOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setCallModalOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [callModalOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateTheme = () => setIsDarkMode(mediaQuery.matches);

    updateTheme();
    mediaQuery.addEventListener("change", updateTheme);

    return () => {
      mediaQuery.removeEventListener("change", updateTheme);
    };
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    if (!isHomePage) {
      nav.classList.add("homecare-nav-main-sticky", "homecare-nav-page-fixed");
      nav.style.left = "0px";
      nav.style.top = "0px";
      nav.style.width = "100%";

      return () => {
        nav.classList.remove("homecare-nav-main-sticky", "homecare-nav-page-fixed");
        nav.style.removeProperty("left");
        nav.style.removeProperty("top");
        nav.style.removeProperty("width");
      };
    }

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
  }, [isHomePage, pathname]);

  return (
    <>
      <header ref={navRef} className="homecare-nav">
        <Link href="/" className="brand" aria-label="Ever Care home">
          <Image
            className={`brand-logo${isDarkMode ? " brand-logo-dark-mode" : ""}`}
            src={isDarkMode ? "/images/logo-dark.png" : "/images/logo-light.png"}
            alt="Ever Care"
            width={180}
            height={64}
            priority
          />
        </Link>
        <nav className="menu">
          <Link href="/">Home</Link>
          <Link href="/about">About us</Link>
          <Link href="/services">Services +</Link>
          <Link href="/contact">Contact us</Link>
        </nav>
        <button type="button" className="call-pill" onClick={() => setCallModalOpen(true)}>
          <span className="call-icon" aria-hidden="true">☎</span>
          <span className="call-pill-label">Call us</span>
        </button>

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
      {!isHomePage ? <div className="homecare-nav-spacer" aria-hidden="true" /> : null}

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
            <button
              type="button"
              className="mobile-drawer-call-pill"
              onClick={() => {
                setDrawerOpen(false);
                setCallModalOpen(true);
              }}
            >
              <span className="call-icon" aria-hidden="true">☎</span>
              <span className="call-pill-label">Call us</span>
            </button>
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

      {callModalOpen ? (
        <div
          className="call-modal-overlay"
          onClick={() => setCallModalOpen(false)}
          role="presentation"
        >
          <div
            className="call-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="call-modal-title"
            aria-describedby="call-modal-description"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="call-modal-badge">✦ CALL EVERCARE</div>
            <h3 id="call-modal-title">Choose a number to call</h3>
            <p id="call-modal-description">
              Select the line you&apos;d like to contact and your device will
              start the call.
            </p>

            <div className="call-modal-actions">
              <a className="call-option" href="tel:+233202111606">
                <span className="call-option-label">Call line 1</span>
                <strong>+233 202 111 606</strong>
              </a>
              <a className="call-option" href="tel:+233242542220">
                <span className="call-option-label">Call line 2</span>
                <strong>+233 242 542 220</strong>
              </a>
            </div>

            <button
              type="button"
              className="call-modal-close"
              onClick={() => setCallModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

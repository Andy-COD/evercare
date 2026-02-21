 "use client";

import { useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import WhyAimsSection from "@/components/WhyAimsSection";
import DifferenceSection from "@/components/DifferenceSection";

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    const hero = main.querySelector<HTMLElement>(".homecare-hero");
    const nav = main.querySelector<HTMLElement>(".homecare-nav");
    if (!hero || !nav) return;

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
  }, []);

  return (
    <main ref={mainRef}>
      <Hero />
      <WhyAimsSection />
      <DifferenceSection />
    </main>
  );
}

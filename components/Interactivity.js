"use client";

import { useEffect } from "react";

/**
 * Renders nothing — attaches all client-side behavior (theme toggle, mobile
 * nav, scroll progress, TOC scroll-spy) to the static markup that the server
 * component renders. Keeping this separate lets the article itself stay a
 * server component, so its HTML isn't shipped in the client bundle.
 */
export default function Interactivity() {
  useEffect(() => {
    const root = document.documentElement;

    /* ---------- Theme toggle ---------- */
    const themeToggle = document.getElementById("themeToggle");
    function onToggleTheme() {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("stt-theme", next);
      } catch (e) {}
    }
    themeToggle?.addEventListener("click", onToggleTheme);

    /* ---------- Mobile nav ---------- */
    const body = document.body;
    const menuBtn = document.getElementById("menuBtn");
    const scrim = document.getElementById("scrim");
    function closeNav() {
      body.classList.remove("nav-open");
      menuBtn?.setAttribute("aria-expanded", "false");
    }
    function onMenuClick() {
      const open = body.classList.toggle("nav-open");
      menuBtn?.setAttribute("aria-expanded", open ? "true" : "false");
    }
    menuBtn?.addEventListener("click", onMenuClick);
    scrim?.addEventListener("click", closeNav);
    const tocLinks = Array.prototype.slice.call(
      document.querySelectorAll(".toc a")
    );
    tocLinks.forEach((a) => a.addEventListener("click", closeNav));

    /* ---------- Scroll progress ---------- */
    const progress = document.getElementById("progress");
    function onScroll() {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      if (progress) {
        progress.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* ---------- TOC scroll-spy ---------- */
    const map = {};
    tocLinks.forEach((l) => {
      map[l.getAttribute("href").slice(1)] = l;
    });
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            tocLinks.forEach((l) => l.classList.remove("active"));
            if (map[en.target.id]) map[en.target.id].classList.add("active");
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => spy.observe(s));

    return () => {
      themeToggle?.removeEventListener("click", onToggleTheme);
      menuBtn?.removeEventListener("click", onMenuClick);
      scrim?.removeEventListener("click", closeNav);
      tocLinks.forEach((a) => a.removeEventListener("click", closeNav));
      window.removeEventListener("scroll", onScroll);
      spy.disconnect();
    };
  }, []);

  return null;
}

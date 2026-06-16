"use client";

import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const LOCALES = [
  { code: "en", label: "English", href: "/" },
  { code: "ru", label: "Русский", href: "/ru" },
  { code: "es", label: "Español", href: "/es" },
  { code: "zh", label: "中文", href: "/zh", hrefLang: "zh-CN" },
  { code: "de", label: "Deutsch", href: "/de" },
];

function isActive(pathname, href) {
  if (href === "/") {
    return (
      pathname === "/" ||
      !["/ru", "/es", "/zh", "/de"].some((p) => pathname.startsWith(p))
    );
  }
  return pathname.startsWith(href);
}

export default function LangSwitcher() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = LOCALES.find((l) => isActive(pathname, l.href)) || LOCALES[0];

  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Change language"
        aria-expanded={open}
        aria-haspopup="listbox"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
          background: "none",
          border: "1px solid var(--border)",
          borderRadius: "6px",
          padding: "5px 9px",
          fontSize: "12px",
          color: "var(--ink-soft)",
          cursor: "pointer",
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        {current.code.toUpperCase()}
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform 0.15s",
          }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Language"
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            right: 0,
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
            minWidth: "130px",
            overflow: "hidden",
            zIndex: 200,
          }}
        >
          {LOCALES.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <a
                key={l.code}
                href={l.href}
                hrefLang={l.hrefLang || l.code}
                role="option"
                aria-selected={active}
                onClick={() => setOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "9px 12px",
                  fontSize: "13px",
                  textDecoration: "none",
                  color: active ? "var(--accent)" : "var(--ink)",
                  fontWeight: active ? 600 : 400,
                  background: active ? "var(--surface-alt)" : "transparent",
                  transition: "background 0.1s",
                }}
                onMouseEnter={(e) => {
                  if (!active) e.currentTarget.style.background = "var(--surface-alt)";
                }}
                onMouseLeave={(e) => {
                  if (!active) e.currentTarget.style.background = "transparent";
                }}
              >
                {l.label}
                {active && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                )}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

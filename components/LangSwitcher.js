"use client";

import { usePathname } from "next/navigation";

const LOCALES = [
  { code: "en", label: "EN", href: "/" },
  { code: "ru", label: "RU", href: "/ru" },
  { code: "es", label: "ES", href: "/es" },
  { code: "zh", label: "中文", href: "/zh" },
  { code: "de", label: "DE", href: "/de" },
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
  return (
    <nav
      aria-label="Language"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "12px",
      }}
    >
      {LOCALES.map((l) => {
        const active = isActive(pathname, l.href);
        return (
          <a
            key={l.code}
            href={l.href}
            hrefLang={l.code === "zh" ? "zh-CN" : l.code}
            aria-current={active ? "true" : undefined}
            style={{
              textDecoration: "none",
              color: active ? "var(--accent)" : "var(--ink-faint)",
              fontWeight: active ? 600 : 400,
            }}
          >
            {l.label}
          </a>
        );
      })}
    </nav>
  );
}

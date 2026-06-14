"use client";

import { useEffect, useRef } from "react";

function fillRow(row) {
  const fill = row.querySelector(".bar-fill");
  const val = parseFloat(row.getAttribute("data-val"));
  const max = parseFloat(row.getAttribute("data-max"));
  const lo = row.getAttribute("data-lo");
  const hi = row.getAttribute("data-hi");
  if (lo && hi) {
    // range bar: position fill from lo to hi
    const loPct = (parseFloat(lo) / max) * 100;
    const hiPct = (parseFloat(hi) / max) * 100;
    fill.style.left = loPct + "%";
    fill.style.width = hiPct - loPct + "%";
  } else {
    fill.style.width = Math.min(100, (val / max) * 100) + "%";
  }
}

/**
 * Animated horizontal bar chart.
 *
 * @param {Object[]} rows  - { name, val, max, label, best?, muted?, lo?, hi? }
 * @param {number}   [threshold] - optional marker value (e.g. 500ms perception line)
 */
export default function Bars({ rows, threshold }) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.querySelectorAll(".bar-row").forEach((row, i) => {
              setTimeout(() => fillRow(row), i * 90);
            });
            obs.unobserve(en.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    obs.observe(container);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bars" ref={ref}>
      {rows.map((r, i) => {
        const cls =
          "bar-row" + (r.best ? " best" : "") + (r.muted ? " muted" : "");
        return (
          <div
            key={i}
            className={cls}
            data-val={r.val}
            data-max={r.max}
            {...(r.lo != null ? { "data-lo": r.lo } : {})}
            {...(r.hi != null ? { "data-hi": r.hi } : {})}
          >
            <div className="bar-label">
              <span className="name">{r.name}</span>
              <span className="val">{r.label}</span>
            </div>
            <div className="bar-track">
              {threshold != null ? (
                <div
                  className="threshold"
                  style={{ left: (threshold / r.max) * 100 + "%" }}
                />
              ) : null}
              <div className="bar-fill" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

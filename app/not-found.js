import Link from "next/link";

export const metadata = {
  title: "Page not found — Aurora Reviews",
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 24px",
        gap: "8px",
      }}
    >
      <p
        className="mono"
        style={{
          color: "var(--accent)",
          letterSpacing: ".1em",
          textTransform: "uppercase",
          fontSize: "13px",
          margin: 0,
        }}
      >
        Error 404
      </p>
      <h1 style={{ margin: "6px 0 4px" }}>This page wandered off.</h1>
      <p style={{ maxWidth: "46ch", color: "var(--ink-soft)" }}>
        The page you&apos;re looking for doesn&apos;t exist or has moved. Head back
        to the latest speech-to-text benchmark review.
      </p>
      <div className="cta-row" style={{ justifyContent: "center" }}>
        <Link className="btn btn-primary" href="/">
          Back to the review →
        </Link>
      </div>
    </div>
  );
}

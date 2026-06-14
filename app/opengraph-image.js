import { ImageResponse } from "next/og";

export const alt =
  "The State of Speech-to-Text in 2026 — English STT providers ranked by FLEURS Word Error Rate, by Aurora Reviews";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LEADERS = [
  { rank: "1", name: "ElevenLabs Scribe v2 Realtime", wer: "3.4%" },
  { rank: "2", name: "Alibaba Qwen3-ASR-Flash", wer: "3.5%" },
  { rank: "3", name: "AssemblyAI Universal-3 Pro", wer: "5.1%" },
];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f8f8fd",
          padding: "64px 72px",
          borderTop: "14px solid #4f46e5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: 2,
              color: "#4f46e5",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Independent Benchmark · 2026
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 700,
              color: "#1a1730",
              lineHeight: 1.05,
              marginTop: 18,
              maxWidth: 900,
            }}
          >
            The State of Speech-to-Text in 2026
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#474264",
              marginTop: 20,
              maxWidth: 880,
            }}
          >
            English STT providers ranked by FLEURS Word Error Rate
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {LEADERS.map((p) => (
            <div
              key={p.rank}
              style={{ display: "flex", alignItems: "center", fontSize: 30 }}
            >
              <div
                style={{
                  display: "flex",
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  backgroundColor: p.rank === "1" ? "#1f9d55" : "#eeeefb",
                  color: p.rank === "1" ? "#fff" : "#1a1730",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  marginRight: 20,
                }}
              >
                {p.rank}
              </div>
              <div style={{ display: "flex", color: "#1a1730", fontWeight: 600 }}>
                {p.name}
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: "auto",
                  color: "#1a1730",
                  fontWeight: 700,
                }}
              >
                {p.wer} WER
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            fontWeight: 600,
            color: "#1a1730",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 16,
              height: 16,
              borderRadius: 4,
              backgroundColor: "#4f46e5",
              marginRight: 14,
            }}
          />
          Aurora Reviews
        </div>
      </div>
    ),
    { ...size }
  );
}

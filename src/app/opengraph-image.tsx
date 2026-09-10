import { ImageResponse } from "next/og";

export const alt = "Covert Host — Private VPS hosting, paid in crypto";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #09090b 0%, #1e1b4b 100%)",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            borderRadius: 9999,
            border: "2px solid #6366f1",
            padding: "10px 32px",
            fontSize: 24,
            color: "#a5b4fc",
            marginBottom: 40,
          }}
        >
          No account. No ID. No logs.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: -2,
            marginBottom: 32,
          }}
        >
          Covert&nbsp;Host
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            color: "#a1a1aa",
            marginBottom: 56,
          }}
        >
          Private VPS hosting, paid in crypto
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#71717a" }}>
          BTC · XMR · USDT · 15+ coins · 9 locations
        </div>
      </div>
    ),
    { ...size }
  );
}

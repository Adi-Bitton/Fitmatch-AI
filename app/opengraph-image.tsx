import { ImageResponse } from "next/og";

export const alt = "FITMATCH AI — smart matching for fitness";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(650px 420px at 78% 12%, rgba(139,92,246,0.45), transparent 70%), radial-gradient(500px 400px at 15% 95%, rgba(201,242,78,0.10), transparent 70%), #0b0a0f",
          color: "#f4f3f7",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 34,
            letterSpacing: "-0.02em",
            fontWeight: 700,
          }}
        >
          <span>
            FIT<span style={{ color: "#a78bfa" }}>MATCH</span>
          </span>
          <span
            style={{
              border: "2px solid rgba(139,92,246,0.6)",
              borderRadius: 10,
              padding: "2px 12px",
              color: "#a78bfa",
              fontSize: 22,
            }}
          >
            AI
          </span>
        </div>

        <div
          style={{
            marginTop: 36,
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: 900,
            letterSpacing: "-0.02em",
          }}
        >
          The right coach — not the first one you find.
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            color: "#a9a6b6",
            maxWidth: 820,
          }}
        >
          An AI-powered questionnaire that matches you to the coach, group or
          studio that actually fits.
        </div>
      </div>
    ),
    { ...size },
  );
}

import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Catalyst Data Science — Data-Driven Product Development";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Tokens mirrored from app/globals.css :root
const ink = "#150E2E";
const onInk = "#F5F3FA";
const onInkMuted = "#A9A3C4";
const accent = "#F97316";
const highlight = "#FACC15";
const signal = "linear-gradient(100deg, #5B21B6 0%, #F97316 55%, #FACC15 100%)";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: ink,
          padding: "80px",
          position: "relative",
        }}
      >
        {/* the signal — brand gradient as data ink */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "10px",
            background: signal,
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "14px",
              background: signal,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "24px",
            }}
          >
            <span style={{ fontSize: "38px", fontWeight: 800, color: "white" }}>C</span>
          </div>
          <span style={{ fontSize: "34px", fontWeight: 700, color: onInk }}>
            Catalyst Data Science
          </span>
        </div>
        <div
          style={{
            fontSize: "78px",
            fontWeight: 800,
            color: onInk,
            lineHeight: 1.1,
            marginBottom: "28px",
            display: "flex",
          }}
        >
          Data-driven products,&nbsp;
          <span style={{ color: highlight }}>shipped.</span>
        </div>
        <div
          style={{
            fontSize: "28px",
            color: onInkMuted,
            maxWidth: "860px",
            lineHeight: 1.4,
            display: "flex",
          }}
        >
          Web, iOS, and Android applications with the intelligence designed in from
          the first commit.
        </div>
        <div
          style={{
            display: "flex",
            gap: "14px",
            marginTop: "48px",
          }}
        >
          {["Web", "iOS", "Android", "ML built in"].map((chip) => (
            <div
              key={chip}
              style={{
                padding: "12px 26px",
                borderRadius: "9999px",
                border: `2px solid ${chip === "ML built in" ? accent : "rgba(245,243,250,0.22)"}`,
                fontSize: "22px",
                fontWeight: 600,
                color: onInk,
                display: "flex",
              }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

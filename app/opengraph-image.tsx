import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Catalyst Data Science - eCommerce Analytics Consultancy";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #9333ea 0%, #f97316 50%, #eab308 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "24px",
            }}
          >
            <span style={{ fontSize: "40px", fontWeight: "bold", color: "white" }}>C</span>
          </div>
          <span style={{ fontSize: "36px", fontWeight: "bold", color: "#111" }}>
            Catalyst Data Science
          </span>
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "#111",
            lineHeight: 1.2,
            marginBottom: "24px",
          }}
        >
          Data that works{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #9333ea 0%, #f97316 50%, #eab308 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            for you.
          </span>
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#6b7280",
            maxWidth: "800px",
          }}
        >
          Cloud-based data management, analytics, and data science solutions for eCommerce businesses.
        </div>
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              padding: "12px 24px",
              borderRadius: "9999px",
              border: "2px solid #e5e7eb",
              fontSize: "20px",
              color: "#374151",
            }}
          >
            Snowflake Certified
          </div>
          <div
            style={{
              padding: "12px 24px",
              borderRadius: "9999px",
              border: "2px solid #e5e7eb",
              fontSize: "20px",
              color: "#374151",
            }}
          >
            Microsoft Fabric
          </div>
          <div
            style={{
              padding: "12px 24px",
              borderRadius: "9999px",
              border: "2px solid #e5e7eb",
              fontSize: "20px",
              color: "#374151",
            }}
          >
            GCP Specialists
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

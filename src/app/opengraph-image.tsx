import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
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
          justifyContent: "space-between",
          background: "#161618",
          color: "#f5f3f1",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              background: "#ff6b3d",
            }}
          />
          <span style={{ fontSize: 28, color: "#a1a1a6" }}>{site.brand}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span style={{ fontSize: 76, fontWeight: 600, letterSpacing: -2 }}>
            {site.name}
          </span>
          <span style={{ fontSize: 40, color: "#ff6b3d" }}>{site.role}</span>
        </div>

        <span style={{ fontSize: 26, color: "#a1a1a6" }}>
          React · Next.js · Node · TypeScript — {site.location}
        </span>
      </div>
    ),
    size,
  );
}

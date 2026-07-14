import { ImageResponse } from "next/og";

export const alt = "Tiffen Central - Authentic South Indian food in Perungudi, Chennai";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #003d2b 0%, #006044 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "64px",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#f3b21a",
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 8,
            textTransform: "uppercase",
          }}
        >
          Authentic South Indian
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: -3,
            marginTop: 28,
          }}
        >
          Tiffen Central
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.82)",
            display: "flex",
            fontSize: 32,
            marginTop: 26,
          }}
        >
          Perungudi · Chennai
        </div>
      </div>
    ),
    size,
  );
}

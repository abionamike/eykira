import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Eykira — Automating Business. Accelerating Growth. Empowering Success.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const ink = "#14121f";
const indigo = "#534ab7";
const orange = "#d85a30";
const muted = "#6b6879";
const border = "#e7e5ef";

export default async function Image() {
  const [logo, glyph] = await Promise.all([
    readFile(join(process.cwd(), "public/eykira.png")),
    readFile(join(process.cwd(), "public/glyph.png")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const glyphSrc = `data:image/png;base64,${glyph.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "white",
          backgroundImage: `linear-gradient(to right, ${border} 1px, transparent 1px), linear-gradient(to bottom, ${border} 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          position: "relative",
          fontFamily: "Geist",
        }}
      >
        {/* glows */}
        <div
          style={{
            position: "absolute",
            top: -180,
            left: -120,
            width: 620,
            height: 620,
            background: `radial-gradient(circle closest-side, rgba(83, 74, 183, 0.16), rgba(83, 74, 183, 0))`,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -220,
            right: -100,
            width: 640,
            height: 640,
            background: `radial-gradient(circle closest-side, rgba(216, 90, 48, 0.16), rgba(216, 90, 48, 0))`,
            display: "flex",
          }}
        />

        {/* brand glyph, right side */}
        <img
          src={glyphSrc}
          alt=""
          width={470}
          height={470}
          style={{
            position: "absolute",
            right: -20,
            top: 110,
            transform: "rotate(-8deg)",
            opacity: 0.92,
          }}
        />

        {/* content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 72px",
            width: "100%",
            height: "100%",
          }}
        >
          <img src={logoSrc} alt="" width={166} height={73} />

          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                fontSize: 63,
                color: ink,
                letterSpacing: -2.5,
                lineHeight: 1.12,
                margin: 0,
              }}
            >
              Automating Business.
            </p>
            <p
              style={{
                fontSize: 63,
                letterSpacing: -2.5,
                lineHeight: 1.12,
                margin: 0,
                backgroundImage: `linear-gradient(90deg, ${indigo}, ${orange})`,
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Accelerating Growth.
            </p>
            <p
              style={{
                fontSize: 63,
                color: ink,
                letterSpacing: -2.5,
                lineHeight: 1.12,
                margin: 0,
              }}
            >
              Empowering Success.
            </p>

            <div style={{ display: "flex", gap: 14, marginTop: 36 }}>
              {[
                { label: "AI Automation", dot: indigo },
                { label: "Marketplace", dot: orange },
                { label: "Ride-Sharing", dot: indigo },
              ].map((pill) => (
                <div
                  key={pill.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    border: `2px solid ${border}`,
                    background: "white",
                    borderRadius: 999,
                    padding: "10px 22px",
                    fontSize: 23,
                    color: ink,
                  }}
                >
                  <div
                    style={{
                      width: 11,
                      height: 11,
                      borderRadius: 999,
                      background: pill.dot,
                      display: "flex",
                    }}
                  />
                  {pill.label}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <p style={{ fontSize: 27, color: indigo, margin: 0 }}>eykira.com</p>
            <p style={{ fontSize: 22, color: muted, margin: 0 }}>
              Ontario, Canada · contact@eykira.com
            </p>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

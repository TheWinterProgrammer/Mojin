import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";

interface GlowRevealProps {
  text?: string;
}

export const GlowReveal: React.FC<GlowRevealProps> = ({
  text = "Mojin Studio",
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Phase 1: sweep reveal (0 → 50%)
  const sweepEnd = durationInFrames * 0.5;
  const sweepProgress = interpolate(frame, [0, sweepEnd], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Shine overlay position
  const shineX = interpolate(frame, [0, sweepEnd], [-100, 110], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Phase 2: breathe pulse (50% → 100%)
  const breathe =
    frame > sweepEnd
      ? 1 + Math.sin(((frame - sweepEnd) / fps) * 4) * 0.05
      : 1;

  const glowIntensity = interpolate(frame, [0, sweepEnd], [0, 20], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, system-ui, sans-serif",
        fontSize: 72,
        fontWeight: 800,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Base text (clipped by sweep) */}
      <div
        style={{
          background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          clipPath: `inset(0 ${(1 - sweepProgress) * 100}% 0 0)`,
          transform: `scale(${breathe})`,
          filter: `drop-shadow(0 0 ${glowIntensity}px #3b82f6)`,
        }}
      >
        {text}
      </div>

      {/* Shine overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: `${shineX}%`,
          width: 40,
          height: "100%",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
          transform: "skewX(-15deg)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface ParticleBurstProps {
  count?: number;
  colors?: string[];
}

export const ParticleBurst: React.FC<ParticleBurstProps> = ({
  count = 40,
  colors = ["#3b82f6", "#06b6d4", "#8b5cf6", "#ec4899"],
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const particles = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2 + (i * 0.3);
    const maxRadius = 200 + (i % 5) * 40;

    const radius =
      spring({ frame, fps, config: { stiffness: 80, damping: 15 } }) *
      maxRadius;

    const opacity = interpolate(
      frame,
      [durationInFrames * 0.6, durationInFrames],
      [1, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const size = 4 + (i % 4) * 3;
    const color = colors[i % colors.length];

    return { x, y, size, color, opacity };
  });

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            backgroundColor: p.color,
            opacity: p.opacity,
            transform: `translate(${p.x}px, ${p.y}px)`,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
};

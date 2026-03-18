import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface AnimatedCounterProps {
  from?: number;
  to?: number;
  prefix?: string;
  suffix?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from = 0,
  to = 100,
  prefix = "",
  suffix = "",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame,
    fps,
    config: { stiffness: 80, damping: 15 },
  });

  const value = interpolate(progress, [0, 1], [from, to]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: "center",
        fontFamily: "Inter, system-ui, sans-serif",
        color: "#fff",
      }}
    >
      <span style={{ fontSize: 28, opacity: 0.7, marginRight: 4 }}>
        {prefix}
      </span>
      <span
        style={{
          fontSize: 96,
          fontWeight: 800,
          letterSpacing: -2,
          background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {Math.round(value)}
      </span>
      <span style={{ fontSize: 28, opacity: 0.7, marginLeft: 4 }}>
        {suffix}
      </span>
    </div>
  );
};

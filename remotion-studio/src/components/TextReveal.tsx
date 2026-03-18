import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";

interface TextRevealProps {
  text?: string;
  color?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text = "Animate every pixel",
  color = "#ffffff",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const words = text.split(" ");
  const staggerDelay = 5;

  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        justifyContent: "center",
        flexWrap: "wrap",
        fontFamily: "Inter, system-ui, sans-serif",
        fontSize: 56,
        fontWeight: 700,
      }}
    >
      {words.map((word, i) => {
        const delay = i * staggerDelay;
        const opacity = interpolate(frame - delay, [0, fps * 0.4], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const translateY = interpolate(
          frame - delay,
          [0, fps * 0.4],
          [30, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );

        return (
          <span
            key={i}
            style={{
              opacity,
              transform: `translateY(${translateY}px)`,
              display: "inline-block",
              color,
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

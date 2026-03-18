import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";

interface MorphingTextProps {
  words?: string[];
}

export const MorphingText: React.FC<MorphingTextProps> = ({
  words = ["Create", "Animate", "Inspire", "Ship"],
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const framesPerWord = durationInFrames / words.length;
  const currentIndex = Math.min(
    Math.floor(frame / framesPerWord),
    words.length - 1
  );
  const localFrame = frame - currentIndex * framesPerWord;

  // Transition zone: first 30% of each word's duration
  const transitionFrames = framesPerWord * 0.3;

  const blur = interpolate(localFrame, [0, transitionFrames], [8, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(localFrame, [0, transitionFrames], [0.8, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacity = interpolate(localFrame, [0, transitionFrames], [0, 1], {
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
        fontSize: 80,
        fontWeight: 800,
        color: "#fff",
      }}
    >
      <span
        style={{
          filter: `blur(${blur}px)`,
          transform: `scale(${scale})`,
          opacity,
          display: "inline-block",
          background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {words[currentIndex]}
      </span>
    </div>
  );
};

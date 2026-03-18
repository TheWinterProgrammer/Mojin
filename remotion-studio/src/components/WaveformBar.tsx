import { useCurrentFrame, useVideoConfig } from "remotion";

interface WaveformBarProps {
  barCount?: number;
  barWidth?: number;
}

export const WaveformBar: React.FC<WaveformBarProps> = ({
  barCount = 20,
  barWidth = 12,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const time = frame / fps;

  const bars = Array.from({ length: barCount }, (_, i) => {
    const phase = (i / barCount) * Math.PI * 2;
    const height =
      30 + Math.abs(Math.sin(time * 3 + phase)) * 120 +
      Math.abs(Math.sin(time * 5 + phase * 1.5)) * 40;
    const t = i / (barCount - 1);

    return { height, t };
  });

  const gap = 6;
  const totalWidth = barCount * barWidth + (barCount - 1) * gap;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <svg width={totalWidth} height={200} viewBox={`0 0 ${totalWidth} 200`}>
        <defs>
          <linearGradient id="barGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        {bars.map((bar, i) => {
          const x = i * (barWidth + gap);
          const y = (200 - bar.height) / 2;
          return (
            <rect
              key={i}
              x={x}
              y={y}
              width={barWidth}
              height={bar.height}
              rx={barWidth / 2}
              fill="url(#barGrad)"
              opacity={0.7 + bar.t * 0.3}
            />
          );
        })}
      </svg>
    </div>
  );
};

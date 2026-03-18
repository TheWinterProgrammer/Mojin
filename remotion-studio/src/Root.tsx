import { Composition, Sequence } from "remotion";
import { AnimatedCounter } from "./components/AnimatedCounter";
import { TextReveal } from "./components/TextReveal";
import { ParticleBurst } from "./components/ParticleBurst";
import { WaveformBar } from "./components/WaveformBar";
import { GlowReveal } from "./components/GlowReveal";
import { MorphingText } from "./components/MorphingText";

const Showcase: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#0D0D14",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Sequence from={0} durationInFrames={50}>
        <AnimatedCounter from={0} to={2500} prefix="" suffix="+" />
      </Sequence>
      <Sequence from={50} durationInFrames={50}>
        <TextReveal text="Animate every pixel" />
      </Sequence>
      <Sequence from={100} durationInFrames={50}>
        <ParticleBurst />
      </Sequence>
      <Sequence from={150} durationInFrames={50}>
        <WaveformBar />
      </Sequence>
      <Sequence from={200} durationInFrames={50}>
        <GlowReveal text="Mojin Studio" />
      </Sequence>
      <Sequence from={250} durationInFrames={50}>
        <MorphingText words={["Create", "Animate", "Inspire", "Ship"]} />
      </Sequence>
    </div>
  );
};

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="Showcase"
      component={Showcase}
      durationInFrames={300}
      fps={30}
      width={1280}
      height={720}
    />
  );
};

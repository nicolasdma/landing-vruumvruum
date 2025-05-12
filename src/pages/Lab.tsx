import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import LabCard from "../components/LabCard";

const EXPERIMENTS = [
  {
    title: "Wormhole Tunnel",
    description: "A Three.js experiment blending GLSL noise, displacement mapping and interactivity. This is where creative coding meets performance-optimized frontend.",
    videoSrc: "/lab/wormhole.mp4",
    thumbnailSrc: "/lab/wormhole.png",
    url: "https://lab-threejs-wormhole.vercel.app/",
  },
  {
    title: "Stickers",
    description: "A Three.js experiment blending GLSL noise, displacement mapping and interactivity. This is where creative coding meets performance-optimized frontend.",
    videoSrc: "/lab/stickers.mp4",
    thumbnailSrc: "/lab/stickers.png",
    url: "https://dma-laboratory.vercel.app/",
  },
  {
    title: "Studio",
    description: "A Three.js experiment blending GLSL noise, displacement mapping and interactivity. This is where creative coding meets performance-optimized frontend.",
    videoSrc: "/lab/studio.mp4",
    thumbnailSrc: "/lab/studio.png",
    url: "https://studio-building.vercel.app/",
  },
];

const Lab = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-16 bg-black text-white">
      {/* Grid background */}
      <div className="absolute inset-0 bg-black dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_2px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_2px)] dark:bg-[size:80px_80px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Title Section */}
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-neutral-400 mb-2">
            vruumvruum.lab
          </p>
          <TextGenerateEffect
            words="👋 Hi there. You're on the experimental corner."
            className="text-3xl md:text-5xl font-bold leading-tight"
          />
          <p className="mt-4 text-lg text-neutral-400">
            Here you’ll find all kinds of 3D visuals, animations, shaders and
            creative development related stuff. Take a look at the examples
            below and don’t forget to leave a ⭐️ on the GitHub repo.
          </p>
        </div>

        {EXPERIMENTS.map((experiment, index) => (
          <LabCard
            title={experiment.title}
            description={experiment.description}
            videoSrc={experiment.videoSrc}
            thumbnailSrc={experiment.thumbnailSrc}
            url={experiment.url}
            index={index + 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Lab;

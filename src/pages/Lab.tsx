import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import LabCard from "../components/LabCard";

const EXPERIMENTS = [
  {
    title: "Wormhole Tunnel",
    description:
      "A Three.js experiment blending GLSL noise, displacement mapping and interactivity. This is where creative coding meets performance-optimized frontend.",
    videoSrc: "/lab/wormhole.mp4",
    thumbnailSrc: "/lab/wormhole.webp",
    url: "https://lab-threejs-wormhole.vercel.app/",
  },
  {
    title: "Stickers",
    description:
      "A Three.js experiment blending GLSL noise, displacement mapping and interactivity. This is where creative coding meets performance-optimized frontend.",
    videoSrc: "/lab/stickers.mp4",
    thumbnailSrc: "/lab/stickers.webp",
    url: "https://dma-laboratory.vercel.app/",
  },
  {
    title: "Studio",
    description:
      "A Three.js experiment blending GLSL noise, displacement mapping and interactivity. This is where creative coding meets performance-optimized frontend.",
    videoSrc: "/lab/studio.mp4",
    thumbnailSrc: "/lab/studio.webp",
    url: "https://studio-building.vercel.app/",
  },
  {
    title: "Phone model",
    description:
      "A Three.js experiment blending GLSL noise, displacement mapping and interactivity. This is where creative coding meets performance-optimized frontend.",
    videoSrc: "/lab/studio.mp4",
    thumbnailSrc: "/lab/apple.webp",
    url: "https://studio-building.vercel.app/",
  },
  {
    title: "Just a moto",
    description:
      "A Three.js experiment blending GLSL noise, displacement mapping and interactivity. This is where creative coding meets performance-optimized frontend.",
    videoSrc: "/lab/studio.mp4",
    thumbnailSrc: "/lab/moto.webp",
    url: "https://moto-model.vercel.app/",
  },
];

const Lab = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-white py-24 sm:py-32">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />
      
      {/* Blue Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none z-0 animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl space-y-6 mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-medium">
            vruumvruum.lab
          </p>
          <TextGenerateEffect
            words="👋 Hi there. You're on the experimental corner."
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400"
          />
          <p className="text-lg text-neutral-400 leading-relaxed">
            Here you'll find all kinds of 3D visuals, animations, shaders and
            creative development related stuff. Take a look at the examples
            below.
          </p>
        </div>

        {/* Experiments Grid */}
        <div className="space-y-8">
          {EXPERIMENTS.map((experiment, index) => (
            <div 
              key={index} 
              className="group relative bg-black/50 backdrop-blur-sm border border-neutral-800/50 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all duration-500"
            >
              <LabCard
                title={experiment.title}
                description={experiment.description}
                videoSrc={experiment.videoSrc}
                thumbnailSrc={experiment.thumbnailSrc}
                url={experiment.url}
                index={index + 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lab;

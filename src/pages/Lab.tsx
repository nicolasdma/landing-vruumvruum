import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import LabCard from "../components/LabCard";
import { useRef, useEffect } from "react";

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
      "Testing Three.js decal system with Drei and Fiber. The experiment focuses on attaching multiple geometries to a sphere's surface while maintaining the original mesh's topology. Each sticker follows the sphere's curvature without performance impact, even with multiple layers.",
    videoSrc: "/lab/stickers.mp4",
    thumbnailSrc: "/lab/stickers.webp",
    url: "https://dma-laboratory.vercel.app/",
  },
  {
    title: "Studio",
    description:
      "Blender model experiment with sound reactivity. The model is baked and optimized for web rendering, with camera position triggering different audio samples. Testing the limits of browser-based 3D with audio-visual synchronization.",
    videoSrc: "/lab/studio.mp4",
    thumbnailSrc: "/lab/studio.webp",
    url: "https://studio-building.vercel.app/",
  },
  {
    title: "Phone model",
    description:
      "iPhone 3D model test using Three.js material system. Experimenting with dynamic color changes and PBR materials in real-time. Testing performance optimization techniques for complex product visualization in the browser.",
    videoSrc: "/lab/studio.mp4",
    thumbnailSrc: "/lab/apple.webp",
    url: "https://apple-clone-lyart-eta.vercel.app/",
  },
  {
    title: "Just a moto",
    description:
      "Testing AI-generated 3D model integration with Three.js. The experiment explores automated model generation and optimization for web rendering, focusing on material quality and performance balance in the browser environment.",
    videoSrc: "/lab/studio.mp4",
    thumbnailSrc: "/lab/moto.webp",
    url: "https://moto-model.vercel.app/",
  },
];

const Lab = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Optimize scroll performance with will-change
  useEffect(() => {
    const node = containerRef.current;
    if (node) {
      node.style.willChange = "transform";
    }
    return () => {
      if (node) {
        node.style.willChange = "auto";
      }
    };
  }, []);

  return (
    <section className="relative w-full py-24 bg-black text-white">
      {/* Grid background */}
      <div className="absolute inset-0 bg-black dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_2px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_2px)] dark:bg-[size:80px_80px] pointer-events-none z-0" />

      <div ref={containerRef} className="relative top-20 z-10 max-w-7xl mx-auto space-y-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Title Section */}
        <div className="max-w-3xl relative">
          <p className="text-sm uppercase tracking-widest text-neutral-400 mb-2">
            vruumvruum.lab
          </p>
          <TextGenerateEffect
            words="👋 Hi there. You're on the experimental corner."
            className="text-3xl md:text-5xl font-bold leading-tight"
          />
          <p className="mt-4 text-lg text-neutral-400">
            Here you'll find all kinds of 3D visuals, animations, shaders and
            creative development related stuff. Take a look at the examples
            below
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative">
          {EXPERIMENTS.map((experiment, index) => (
            <div 
              key={index} 
              className="sticky bg-black border border-neutral-800 rounded-2xl my-4 top-[84px] sm:p-10 transform-gpu"
              style={{ 
                willChange: "transform",
                transform: "translateZ(0)"
              }}
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

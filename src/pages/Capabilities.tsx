/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Bvh, Center } from "@react-three/drei";

function Model(props: any) {
  const { nodes } = useGLTF(
    "/Infernal_Flamekeeper_0508023418_texture.glb"
  ) as any;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  );
}

interface CapabilityGroupProps {
  title: string;
  description: string;
  items: string[];
}

const CapabilityGroup = ({
  title,
  description,
  items,
}: CapabilityGroupProps) => (
  <div>
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-neutral-400 mb-6">{description}</p>
    <div className="flex flex-wrap gap-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="text-sm px-4 py-1.5 bg-neutral-900 text-white rounded-full border border-neutral-800 hover:border-white transition-colors duration-300"
        >
          {item}
        </div>
      ))}
    </div>
  </div>
);

const ExperienceSection = () => (
  <section className="relative w-full bg-black text-white py-24 sm:py-32 overflow-hidden">
    {/* Blue Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/20 blur-3xl rounded-full pointer-events-none z-0" />

    <div className="relative z-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-400">
          vruumvruum.web3
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
          Latest Drop
        </h2>
        <p className="text-base sm:text-lg text-neutral-500 max-w-xl">
          A glimpse into what’s taking shape right now. Built live, iterated
          fast, and grounded in real onchain experiments.
        </p>
      </div>

      {/* Project Block */}
      <div className="relative rounded-xl h-[70vh] mt-20 overflow-hidden border border-neutral-800 bg-neutral-950">
        {/* Background image */}
        <img
          src="/lab/valleyofguardians-full.png"
          alt="Valley of Guardians"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 z-0" />

        <a
          href="https://valleyofguardians.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_1.25fr] gap-12 items-center">
            {/* Text (shown second on small screens, first on md+) */}
            <div className="order-2 md:order-1 flex flex-col justify-between h-full bg-black/40 sm:p-8 rounded-xl">
              <div className="space-y-4">
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                  Valley of Guardians
                </p>
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                  A web3-native game with real-time wallet payments and onchain
                  rewards — fast, seamless, and fully decentralized.
                </p>
              </div>
              <p className="text-xs sm:text-sm text-blue-400 uppercase tracking-widest mt-6 pt-4 border-t border-neutral-800">
                Web3 · Onchain Payments · Edge Functions
              </p>
            </div>

            {/* Canvas (shown first on small screens, second on md+) */}
            <div className="order-1 md:order-2 w-full h-[50vh] sm:h-[60vh] md:h-[70vh]">
              <Canvas camera={{ fov: 50, position: [0, 0, 1.3] }}>
                <Bvh>
                  <Center>
                    <OrbitControls
                      enableDamping
                      dampingFactor={0.2}
                      enableZoom={false}
                      minDistance={1}
                      maxDistance={3}
                    />
                    <ambientLight intensity={3} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <Model
                      position={[-1.2, -1.2, 0]}
                      rotation={[0, -0.3, 0]} // rotated slightly left
                      scale={0.5}
                    />
                  </Center>
                </Bvh>
              </Canvas>
            </div>
          </div>
        </a>
      </div>

      {/* Additional Project Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-start mt-8">
        {/* Left side: more description */}
        <div className="space-y-4 max-w-xl">
          {/* <h3 className="text-xl font-semibold text-white">
            About this project
          </h3> */}
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Valley of Guardians is where game design meets infrastructure. Built
            to test what's possible with onchain mechanics, real-time payments,
            and seamless wallet interactions—across Ethereum, Solana, and
            Bitcoin. It’s not just playable—it’s architectural. A technical
            foundation wrapped in a story-first experience.
          </p>

          {/* CTA link */}
        </div>

        {/* Right side: tech stack or rating */}
        <div className="flex flex-col md:justify-end gap-4 text-neutral-500 text-sm items-end">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-3 py-1 bg-neutral-800 rounded-full">Vite</span>
            <span className="px-3 py-1 bg-neutral-800 rounded-full">
              Tailwind
            </span>
            <span className="px-3 py-1 bg-neutral-800 rounded-full">Reown</span>
            <span className="px-3 py-1 bg-neutral-800 rounded-full">wagmi</span>
            <span className="px-3 py-1 bg-neutral-800 rounded-full">
              Supabase
            </span>
            <span className="px-3 py-1 bg-neutral-800 rounded-full">
              QuickNode
            </span>
          </div>

          <div className="flex items-center gap-1 text-yellow-400 mt-2 sm:mt-0">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09L5.4 12.545.8 8.545l6.61-.955L10 2l2.59 5.59 6.61.955-4.6 4 1.278 5.545z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Capabilities = () => {
  return (
    <section className="relative w-full bg-black text-white md:px-16 py-32">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="space-y-6 max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-neutral-400">
            vruumvruum.capabilities
          </p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Crafted on the road
          </h2>
          <p className="text-lg text-neutral-400">
            Because greatness isn’t shaped in stillness — it’s forged in chaos,
            fueled by the need to keep evolving and creating things that move
            forward. vruumvruum is a one-person studio, born on the road, built
            in unpredictable conditions, and driven by motion. <br />
            From the saddle of a motorbike to the edge of the Arctic, I craft
            sharp digital experiences for teams that refuse to blend in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <CapabilityGroup
            title="Web Experiences"
            description="From concept to launch, expressive, high-performance sites built to leave a mark — fast, fluid, and conversion-focused."
            items={[
              "Product Strategy",
              "UX/UI Design",
              "Engineering",
              "3D & Motion",
            ]}
          />
          <CapabilityGroup
            title="Brand Design"
            description="Helping brands find their voice, sharpen their edge, and scale with systems that stay consistent — even as they evolve."
            items={["Visual Identity", "Brand Systems"]}
          />
          <CapabilityGroup
            title="IRL & Spatial Design"
            description="Designing physical experiences that feel alive, connected, and unmistakably on-brand — from pop-ups to summits and beyond."
            items={["Space Design", "Keynote Design", "Interactive Moments"]}
          />
          <CapabilityGroup
            title="Launch & Marketing"
            description="Creating launch campaigns and marketing assets that drive traction — and look damn good doing it."
            items={["Campaign Assets", "Growth Design", "Sales Tools"]}
          />
        </div>
        <ExperienceSection />
        {/*
        <FreelanceSection /> */}
      </div>
    </section>
  );
};

export default Capabilities;

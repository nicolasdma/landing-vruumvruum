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

    {/* Section Content */}
    <div className="relative z-10 max-w-7xl mx-auto space-y-20 sm:px-6">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-400">
          vruumvruum.web3
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
          Featured projects
        </h2>
        <p className="text-base sm:text-lg text-neutral-500 max-w-xl">
          You’ve hit the onchain zone. Real-time payments, no KYC, just pure
          web3 magic — all built straight into the UX.
        </p>
      </div>

      {/* Project Block */}
      <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950">
        {/* Background image */}
        <img
          src="/lab/valleyofguardians-full.png"
          alt="Valley of Guardians"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 z-0" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 p-6 sm:p-10 md:p-16 items-center">
          {/* Canvas */}
          <div className="w-full h-[300px] sm:h-[400px] md:h-full">
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
                    rotation={[0, 0, 0]}
                    scale={0.5}
                  />
                </Center>
              </Bvh>
            </Canvas>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-between h-full bg-black sm:p-8 rounded-xl">
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
        </div>
      </div>
    </div>
  </section>
);

// const FreelanceSection = () => (
//   <div className="pt-32 border-t border-neutral-800 space-y-12">
//     <h3 className="text-2xl md:text-4xl font-semibold">
//       Independent Projects
//     </h3>
//     <p className="text-lg text-neutral-400 max-w-2xl">
//       As a solo operator, I’ve partnered with early-stage startups, artists,
//       and global clients to ship high-end web experiences — fully remote, fully
//       async, always on the move.
//     </p>
//     <ul className="grid md:grid-cols-2 gap-4 text-neutral-300 text-base list-disc pl-6">
//       <li>Custom portfolio sites for artists and photographers</li>
//       <li>Product landing pages built for conversion</li>
//       <li>Brand design systems from scratch</li>
//       <li>Design-to-code handoffs and rapid MVPs</li>
//     </ul>
//   </div>
// );

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

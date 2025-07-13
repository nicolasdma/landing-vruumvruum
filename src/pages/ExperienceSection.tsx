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

const ExperienceSection = () => (
  <section className="relative w-full bg-black text-white py-24 sm:py-32 overflow-hidden">
    {/* Enhanced Glow Effect */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none z-0 animate-pulse" />

    <div className="relative z-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-medium">
          vruumvruum.featured
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
          Latest Drop
        </h2>
        <p className="text-base sm:text-lg text-neutral-500 max-w-xl leading-relaxed">
          A selection of ongoing work for forward-thinking teams. Real clients,
          real users, and real results — designed and developed with a focus on
          performance, clarity, and scale.
        </p>
      </div>

      {/* Project Block */}
      <div className="relative rounded-xl mt-10 sm:mt-20 overflow-hidden border border-neutral-800 bg-neutral-950/50 backdrop-blur-sm hover:border-neutral-700 transition-colors duration-500 w-full max-w-full sm:h-[70vh] flex flex-col">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-0 items-center h-full">
          {/* Text Section */}
          <div className="order-2 md:order-1 flex flex-col justify-between h-full bg-black/40 backdrop-blur-sm p-4 sm:p-8 border-r border-neutral-800/50 group-hover:border-neutral-700 transition-all duration-500 w-full max-w-full">
            <div className="space-y-2 sm:space-y-4">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                Valley of Guardians
              </p>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                A next-gen web3 game designed for scale. Seamless wallet
                payments, instant onchain rewards, and native support for
                Ethereum, Solana, and Bitcoin — all wrapped in a rich, immersive
                experience.
              </p>
              <div className="w-full h-[40vw] min-h-[180px] max-h-[300px] sm:h-[50vh] md:h-[70vh] cursor-grabbing">
                <Canvas camera={{ fov: 50, position: [0, 0, 1.3] }}>
                  <Bvh>
                    <Center>
                      <OrbitControls
                        enableDamping
                        dampingFactor={0.2}
                        enableZoom={false}
                        minDistance={1}
                        maxDistance={3}
                        autoRotate
                        autoRotateSpeed={1}
                      />
                      <ambientLight intensity={3} />
                      <directionalLight position={[10, 10, 5]} intensity={1} />
                      <Model
                        position={[-1.2, -1.2, 0]}
                        rotation={[0, -0.3, 0]}
                        scale={0.5}
                      />
                    </Center>
                  </Bvh>
                </Canvas>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-blue-400 uppercase tracking-widest mt-4 sm:mt-6 pt-2 sm:pt-4 border-t border-neutral-800/50 group-hover:border-neutral-700 transition-colors duration-300">
              Web3 Gaming · Instant Payments · Multi-Chain
            </p>
          </div>

          {/* Image Section */}
          <div className="order-1 md:order-2 w-full h-full overflow-hidden">
            <a
              href="https://valleyofguardians.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full cursor-alias"
            >
              <img
                src="/valley_of_guardinas.png"
                alt="Valley of Guardians"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Additional Project Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-start mt-8 gap-8">
        {/* Left side */}
        <div className="space-y-4 max-w-xl">
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Built for a growing web3 gaming studio, Valley of Guardians merges
            blockchain infrastructure with compelling gameplay. From real-time
            wallet transactions to cross-chain compatibility, this project
            delivers a frictionless player experience powered by modern
            architecture and smart contract integrations.
          </p>
        </div>

        {/* Right side */}
        <div className="flex flex-col md:justify-end gap-4 text-neutral-500 text-sm items-end">
          <div className="flex items-center gap-3 flex-wrap">
            {[
              "Vite",
              "Tailwind",
              "Reown",
              "wagmi",
              "Supabase",
              "QuickNode",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-neutral-900/50 rounded-full border border-neutral-800/50 hover:border-blue-400/50 hover:bg-neutral-800/50 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
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

export default ExperienceSection;

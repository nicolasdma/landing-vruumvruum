import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import MagicButton from "../ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import FlipWords from "../ui/FlipWords";
import { basedIn } from "../data/about";
import Lab from "./Lab";
import Capabilities from "./Capabilities";
import Contact from "./Contact";
import ExperienceSection from "./ExperienceSection";

const Hero = () => {
  const basedList = basedIn.sort(() => Math.random() - 0.5);
  return (
    <>
      <div className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-transparent" />


        {/* Blue Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none z-0 animate-pulse" />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
          <div className="max-w-4xl w-full space-y-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            {/* Header Section */}
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-medium text-center">
                Argentina-born. Web-bound.
              </p>

              <div className="space-y-4">
                <TextGenerateEffect
                  words="Frontend that moves. Fast."
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400"
                />

                <p className="text-base sm:text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl">
                  I&apos;m Nicolás, a frontend developer building fast,
                  expressive digital products — based in{" "}
                  <span className="text-blue-400">
                    <FlipWords words={basedList} />
                  </span>
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center sm:justify-start pt-4">
              <MagicButton
                title="Send me a message"
                trailingIcon={
                  <FaLocationArrow className="group-hover:translate-x-1 transition-transform duration-300" />
                }
              />
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="relative z-10 border-t border-neutral-800/50 mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-[16vw] sm:text-[12vw] font-extrabold tracking-tighter uppercase leading-none text-neutral-900 hover:text-neutral-800 transition-colors duration-500">
              VRMVRM.25
            </h1>
          </div>
        </div>
      </div>
      {/* About Me Section */}
      <section id="about" className="flex flex-col md:flex-row items-center gap-8 mt-10 animate-fade-in-up bg-neutral-900/70 rounded-xl p-6 shadow-lg border border-neutral-800 max-w-4xl mx-auto mb-16">
        <img
          src="/nicolas.jpg"
          alt="Nicolás on Interceptor 650"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-blue-400 shadow-xl mb-4 md:mb-0 hover:scale-105 transition-transform duration-300"
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">About Me</h2>
          <p className="text-base md:text-lg text-neutral-300 max-w-xl">
            With over <span className="text-blue-400 font-semibold">5 years of experience</span> crafting modern, high-performance React applications, I&apos;ve helped startups and established brands bring their digital visions to life. <br className="hidden md:block" />
            <br />
            Currently, I&apos;m traveling the world on my <span className="text-blue-400 font-semibold">Royal Enfield Interceptor 650</span>, blending my passion for adventure with my love for building beautiful, interactive web experiences. <br className="hidden md:block" />
            <br />
            Let&apos;s create something amazing together!
          </p>
        </div>
      </section>

      <section id="lab">
        <Lab />
      </section>
      <section id="experience">
        <ExperienceSection />
      </section>
      <section id="capabilities">
        <Capabilities />
      </section>
      <section id="contact">
        <Contact />
      </section>
      {/* <div className="h-screen w-full flex justify-center items-center"> */}
      {/* <Canvas camera={{ fov: 50, position: [0, 0, 1.3] }}>
          <Model />
        </Canvas> */}

      {/* <Canvas camera={{ fov: 50, position: [0, 0, 1.3] }}>
          <Bvh>
            <Center>
              <OrbitControls
                enableDamping={true}
                dampingFactor={0.2}
                autoRotate={true}
                enableZoom={false}
                autoRotateSpeed={.1}
                // minDistance={1}
                // maxDistance={3}
              />
              <ambientLight intensity={3} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Model
                position={[-1.2, -1.2, 0]}
                rotation={[0, 0, 0]}
                scale={.75}
              />
            </Center>
          </Bvh>
        </Canvas> */}
      {/* </div> */}
    </>
  );
};

export default Hero;

import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import MagicButton from "../ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import FlipWords from "../ui/FlipWords";
import { basedIn } from "../data/about";
import Lab from "./Lab";
import Capabilities from "./Capabilities";
const Hero = () => {
  const basedList = basedIn.sort(() => Math.random() - 0.5);
  return (
    <>
      <div className="pb-48 pt-1 h-[100vh] flex justify-center">
        <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-black absolute top-0 left-0 dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.075)_1px,transparent_2px),linear-gradient(to_bottom,rgba(255,255,255,0.075)_2px,transparent_1px)] dark:bg-[size:100px_100px]">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
        </div>
        <div className="flex relative py-5 sm:mt-10 sm:mb-20 z-10 h-[80vh] w-[65vw] my-o mx-auto justify-center">
          <div className="flex flex-col items-center justify-between">
            <div className="flex flex-col items-start sm:items-center">
              <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                Argentina-born. Web-bound.
              </p>

              <TextGenerateEffect
                // words="Turning Smooth Ideas into Bold Digital Journeys"
                words="Frontend that moves. Fast."
                className="text-left text-[45px] md:text-5xl lg:text-8xl lg:tracking-tighter"
              />
              <p className="text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl w-full h-24 text-neutral-500 dark:text-neutral-300">
                I&apos;m Nicolás, a frontend developer building fast, expressive
                digital products — based in
                <FlipWords words={basedList} />
              </p>
            </div>

            <a href="about">
              <MagicButton
                title="Send me a message"
                trailingIcon={<FaLocationArrow />}
              />
            </a>
          </div>
        </div>
      </div>
      <Lab />
      <Capabilities />
    </>
  );
};

export default Hero;

import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import MagicButton from "../ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import FlipWords from "../ui/FlipWords";
import { basedIn } from "../data/about";
import Lab from "./Lab";
import Capabilities from "./Capabilities";
import Contact from "./Contact";
import ExperienceSection from "./ExperienceSection";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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

      {/* About Section */}
      <section className="relative w-full bg-black text-white py-24 sm:py-32">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Blue Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none z-0 animate-pulse" />

        <div className="relative z-10 max-w-6xl mx-auto space-y-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Header */}
          <div className="space-y-6 max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-neutral-400 font-medium">
              vruumvruum.about
            </p>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
              Built on the road
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed">
              With over <span className="text-blue-400 font-semibold">5 years of experience</span> crafting modern, high-performance React applications, I&apos;ve helped startups and established brands bring their digital visions to life.
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-[1fr_1.25fr] gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <p className="text-base md:text-lg text-neutral-400 leading-relaxed">
                Currently, I&apos;m traveling the world on my <span className="text-blue-400 font-semibold">Royal Enfield Interceptor 650</span>, blending my passion for adventure with my love for building beautiful, interactive web experiences.
              </p>
              <p className="text-base md:text-lg text-neutral-400 leading-relaxed">
                Let&apos;s create something amazing together!
              </p>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <img
                src="/nicolas.jpg"
                alt="Nicolás on Interceptor 650"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-400 shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Work meets adventure
              </h3>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                From client meetings to mountain passes, here's how I blend professional excellence with a life of exploration.
              </p>
            </div>
            
            <PhotoCarousel />
          </div>
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
    </>
  );
};

export default Hero;

const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const photos = [
    { 
      title: "Project Launch", 
      description: "Bringing ideas to life",
      image: "/deploy.jpg",
      style: { objectPosition: 'center 70%' }
    },
    { 
      title: "Code Review", 
      description: "Ensuring quality and performance",
      image: "/review.jpg",
      style: { objectPosition: 'center 70%' }
    },
    { 
      title: "Team Collaboration", 
      description: "Working together across time zones",
      image: "/nicolas.jpg"
    },
    { 
      title: "Product Demo", 
      description: "Showcasing innovative solutions",
      image: "/nicolas.jpg"
    },
    { 
      title: "Code Review", 
      description: "Ensuring quality and performance",
      image: "/workshop.jpg",
      style: { objectPosition: 'center 50%' }
    },
    // { 
    //   title: "Strategy Planning", 
    //   description: "Building the future of web experiences",
    //   image: "/nicolas.jpg"
    // },
    // { 
    //   title: "Strategy Planning", 
    //   description: "Building the future of web experiences",
    //   image: "/nicolas.jpg"
    // },
    // { 
    //   title: "Strategy Planning", 
    //   description: "Building the future of web experiences",
    //   image: "/nicolas.jpg"
    // },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Carousel */}
      <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-2xl border border-neutral-800">
        {/* Current Slide */}
        <div className="relative w-full h-full">
          <img
            src={photos[currentIndex].image}
            alt={photos[currentIndex].title}
            className="w-full h-full object-cover object-center"
            style={photos[currentIndex].style}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Slide Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
              {photos[currentIndex].title}
            </h4>
            <p className="text-neutral-300 text-sm md:text-base">
              {photos[currentIndex].description}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        >
          <FaChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        >
          <FaChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Slide Counter */}
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
          {currentIndex + 1} / {photos.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="mt-6 flex justify-center">
        <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 max-w-full">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex
                  ? "border-blue-400 scale-110"
                  : "border-neutral-700 hover:border-neutral-500"
              }`}
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center 30%' }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

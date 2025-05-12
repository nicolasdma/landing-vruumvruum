import { useState } from "react";

interface LabCardProps {
  title: string;
  description: string;
  videoSrc: string;
  thumbnailSrc: string;
  url: string;
  index: number;
}

const LabCard: React.FC<LabCardProps> = ({
  title,
  description,
  videoSrc,
  thumbnailSrc,
  url,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a className="grid grid-cols-1 md:grid-cols-2 gap-12" href={url} target="_blank" rel="noopener noreferrer">
      {/* Video Preview Card with image preload */}
      <div
        className="relative w-full aspect-video rounded-2xl overflow-hidden border border-neutral-800 shadow-lg cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isHovered ? (
          <img
            src={thumbnailSrc}
            alt="Preview thumbnail"
            className="w-full h-full object-cover transition-opacity duration-300"
          />
        ) : (
          <video
            className="w-full h-full object-cover transition-opacity duration-300"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
          />
        )}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </div>

      {/* Description */}
      <div className="flex flex-col justify-center text-neutral-300">
        <h3 className="text-2xl font-semibold mb-4">
          0{index} — {title}
        </h3>
        <p className="text-base leading-relaxed">
          {/* A Three.js experiment blending GLSL noise, displacement mapping and
          interactivity. This is where creative coding meets
          performance-optimized frontend. */}
          {description}
        </p>
      </div>
    </a>
  );
};

export default LabCard;

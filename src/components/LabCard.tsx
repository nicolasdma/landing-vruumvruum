import { useState, useRef, useEffect } from "react";


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
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInViewport, setIsInViewport] = useState(false);

  // Intersection Observer for preloading
  useEffect(() => {
    const node = videoRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      {
        rootMargin: "200px",
        threshold: 0.1,
      }
    );
  
    if (node) {
      observer.observe(node);
    }
  
    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  // Handle video loading
  useEffect(() => {
    if (isInViewport && videoRef.current) {
      // Start preloading when in viewport
      videoRef.current.preload = "auto";
      videoRef.current.load();
    }
  }, [isInViewport]);

  // Handle hover state
  useEffect(() => {
    if (isHovered && videoRef.current) {
      if (videoRef.current.readyState >= 3) {
        setIsVideoLoaded(true);
      }
    } else {
      setIsVideoLoaded(false);
    }
  }, [isHovered]);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <a className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-black " href={url} target="_blank" rel="noopener noreferrer">
      {/* Video Preview Card with image preload */}
      <div
        className="w-full aspect-video rounded-2xl overflow-hidden border border-neutral-800 shadow-lg cursor-alias"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Always show thumbnail until video is loaded */}
        <img
          src={thumbnailSrc}
          alt="Preview thumbnail"
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isHovered && isVideoLoaded ? "opacity-0" : "opacity-100"
          }`}
          loading="lazy"
        />
        
        {/* Video element (always in DOM but hidden until loaded) */}
        <video
          ref={videoRef}
          className={`w-full h-full object-cover absolute top-0 rounded-2xl left-0 transition-opacity duration-300 ${
            isHovered && isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          onCanPlayThrough={handleVideoLoaded}
          onLoadedData={handleVideoLoaded}
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </div>

      {/* Description */}
      <div className="flex flex-col justify-center text-neutral-300 px-4 pb-4 sm:p-0">
        <h3 className="text-2xl font-semibold mb-4">
          0{index} — {title}
        </h3>
        <p className="text-base leading-relaxed">
          {description}
        </p>
      </div>
    </a>
  );
};

export default LabCard;
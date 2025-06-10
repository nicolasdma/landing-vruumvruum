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

  useEffect(() => {
    if (isHovered && videoRef.current) {
      // Reset loaded state when hover starts
      setIsVideoLoaded(false);
      
      // Check if video is already loaded
      if (videoRef.current.readyState >= 3) { // 3 = HAVE_FUTURE_DATA
        setIsVideoLoaded(true);
      } else {
        videoRef.current.load();
      }
    }
  }, [isHovered]);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group block p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Video Preview */}
        <div
          className="relative w-full aspect-video rounded-xl overflow-hidden border border-neutral-800/50 group-hover:border-neutral-700 transition-all duration-500"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Thumbnail */}
          <img
            src={thumbnailSrc}
            alt={`${title} preview`}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isHovered && isVideoLoaded ? 'opacity-0' : 'opacity-100'
            }`}
          />
          
          {/* Video */}
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered && isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            onCanPlayThrough={handleVideoLoaded}
            onLoadedData={handleVideoLoaded}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Play Icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-blue-400">0{index}</span>
              <span className="text-sm text-neutral-400">—</span>
              <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                {title}
              </h3>
            </div>
            <p className="text-base text-neutral-400 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default LabCard;
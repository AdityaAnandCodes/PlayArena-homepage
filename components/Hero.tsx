"use client"
import React, { useState, useRef, useEffect } from 'react';

const PrimeSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 20.41 20" className="fill-current">
    <g transform="translate(-494.665 5545.366)">
      <path d="M13.672,427.634l-1.632,7.85-1.87,1.073L8.3,437.635.7,435.1,3.781,429.8l3.3,2.673.553-.315.55-.32-.649-4.2Z" transform="translate(493.977 -5973)" />
      <path d="M54.8,453.272l-5.98-5.34.006-2.156V443.62l6-5.32,3.05,5.326-3.964,1.518,0,.637,0,.636,3.959,1.538Z" transform="translate(457.197 -5981.151)" />
      <path d="M.665,472.6l7.6-2.547,1.869,1.074,1.872,1.07,1.646,7.847-6.138.008.647-4.2-.551-.319-.554-.314-3.3,2.676Z" transform="translate(494 -6005.415)" />
    </g>
  </svg>
);

const StudioSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 20.002 20" className="fill-current">
    <g transform="translate(-494.666 5759.183)">
      <path d="M10.674,221.1v.167l-2.54,2.54H.677v-9.992a10.166,10.166,0,0,1,10,7.285" transform="translate(493.992 -5973)" />
      <path d="M53.081,213.817a10.208,10.208,0,0,1-7.23,10.008H45.6l.017-.017-2.476-2.479-.061-.061v-7.452Z" transform="translate(461.588 -5973)" />
      <path d="M53.087,256.265v9.992a10.166,10.166,0,0,1-10-7.285v-.189l2.517-2.517Z" transform="translate(461.579 -6005.439)" />
      <path d="M10.669,258.728V266.2h-10A10.208,10.208,0,0,1,7.9,256.194h.231l2.476,2.473.064.064Z" transform="translate(494 -6005.386)" />
    </g>
  </svg>
);

const UnionSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 19.855 20" className="fill-current">
    <g transform="translate(-498.772 5331.946)">
      <path d="M24.627,645.563v-4.509h-7.4a2.528,2.528,0,0,1-5.057,0h-7.4v4.509a5.491,5.491,0,0,0,5.49,5.491,5.492,5.492,0,0,0-5.49,5.49v4.509h7.4a2.528,2.528,0,0,1,5.057,0h7.4v-4.509a5.492,5.492,0,0,0-5.49-5.49,5.491,5.491,0,0,0,5.49-5.491M14.7,653.579a2.527,2.527,0,1,1,2.528-2.526,2.526,2.526,0,0,1-2.528,2.526" transform="translate(494 -5973)" />
    </g>
  </svg>
);

const JuniorSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 20 20" className="fill-current">
    <path d="M22.744,861.428a5.662,5.662,0,1,0-7.974-7.979A5.661,5.661,0,1,0,6.8,861.428a5.658,5.658,0,1,0,7.971,7.971,5.66,5.66,0,1,0,7.974-7.971m-5.518,2.447H12.318v-4.9h4.907Z" transform="translate(-4 -851)" />
  </svg>
);

const PixelSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 40.638 40" className="fill-current">
    <path d="M40.638,20.319H25.38V15.257H15.263v5.062H0a20.319,20.319,0,0,1,40.638,0" />
    <path d="M40.638,62.764H0A20.333,20.333,0,0,1,15.241,43.083a.034.034,0,0,0,.022-.005v5.061H25.38V43.078a.022.022,0,0,0,.017.005A20.333,20.333,0,0,1,40.638,62.764" transform="translate(0 -22.764)" />
  </svg>
);

interface VideoCardProps {
  title: string;
  description: string;
  icon: React.ComponentType;
  bgColor: string;
  isHovered: boolean;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, description, icon: Icon, bgColor, isHovered }) => {
  return (
    <div className="relative h-20 md:h-28">
      {/* Container that moves up on hover */}
      <div
        className={`absolute bottom-0 w-full transition-all duration-300 ${
          isHovered ? '' : ''
        }`}
      >
        {/* Card content */}
        <div className={`relative w-full ${bgColor} ${
          isHovered ? 'h-24 md:h-48' : 'h-10 md:h-20'
        } transition-all duration-300`}>
          <div className="absolute inset-0 " />
          
          {/* Content wrapper - positioned at bottom */}
          <div className="absolute top-0 w-full p-4 md:p-6">
            {/* Title - always visible */}
            <div className="flex items-center gap-4">
              <span className="text-current ">
                <Icon />
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-black">{title}</h2>
            </div>

            {/* Description and button - visible only on hover */}
            <div className={`transition-all duration-300 ${
              isHovered ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
            }`}>
              <p className="text-black text-sm my-4 font-semibold">{description}</p>
              <button className="bg-blue-500 text-white px-4 md:px-6 py-2 rounded-md w-fit flex items-center gap-2 hover:bg-blue-600 transition-colors text-sm md:text-base">
                View All Activities
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const HeroSection = () => {
  const [activeVideo, setActiveVideo] = useState('prime');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      id: 'prime',
      title: 'Prime',
      description: 'Strategy and action sports for the squad',
      icon: PrimeSvg,
      videoUrl: '/Videos/prime-10sec.mp4',
      bgColor: 'bg-[#E7FF97]'
    },
    {
      id: 'studio',
      title: 'Studio',
      description: 'Short format, big thrills served a la carte',
      icon: StudioSvg,
      videoUrl: '/Videos/studio-10sec-1.mp4',
      bgColor: 'bg-[#E9E9E9]'
    },
    {
      id: 'union',
      title: 'Union',
      description: 'Classic favourites for the recreational sport',
      icon: UnionSvg,
      videoUrl: '/Videos/union-10sec.mp4',
      bgColor: 'bg-[#C1EBFF]'
    },
    {
      id: 'junior',
      title: 'Junior',
      description: 'Toddler-sized fun for little champs',
      icon: JuniorSvg,
      videoUrl: '/Videos/junior-10sec.mp4',
      bgColor: 'bg-[#DCFFE7]'
    },
    {
      id: 'pixel',
      title: 'Pixel',
      description: "Shoot, race and more in the gamer's den",
      icon: PixelSvg,
      videoUrl: '/Videos/pixel-10sec-2.mp4',
      bgColor: 'bg-[#E7FFF4]'
    }
  ];

  // Effects remain the same...
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const vh = window.innerHeight;
        containerRef.current.style.height = `${vh}px`;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Video preloading remains the same...
  useEffect(() => {
    cards.forEach(card => {
      const video = document.createElement('video');
      video.preload = 'auto';
      video.src = card.videoUrl;
    });
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-black">
      {/* Video Container */}
      <div className="absolute inset-0">
        {cards.map((card) => (
          <video
            key={card.id}
            ref={el => { videoRefs.current[card.id] = el; }}
            className={`absolute inset-0 w-full max-h-dvh object-cover transition-opacity duration-700
              ${activeVideo === card.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={card.videoUrl} type="video/mp4" />
          </video>
        ))}
      </div>

      {/* Cards Container */}
      <div className="absolute -bottom-20 w-full grid grid-cols-2 md:grid-cols-5 gap-0 z-20">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative h-32 md:h-48 cursor-pointer"
            onMouseEnter={() => {
              setActiveVideo(card.id);
              setHoveredCard(card.id);
            }}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <VideoCard {...card} isHovered={hoveredCard === card.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;


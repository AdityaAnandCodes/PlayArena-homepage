"use client"
import React, { useState, useRef, useEffect } from 'react';
import { PrimeSvg, StudioSvg, UnionSvg, JuniorSvg, PixelSvg } from './IconComponents'
import Link from 'next/link';

interface VideoCardProps {
  title: string;
  description: string;
  icon: React.ComponentType;
  bgColor: string;
  isHovered: boolean;
  isActive: boolean;
  id: string;
  link: string;
  isMobile: boolean;
}

const VideoCard: React.FC<VideoCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  bgColor, 
  isHovered,
  isActive,
  link,
  id
}) => {
  // Desktop view
  const DesktopCard = () => (
    <div className="relative h-20 md:h-28 hidden md:block">
      <div className={`absolute bottom-0 w-full transition-all duration-300`}>
        <div className={`relative w-full ${bgColor} ${
          isHovered || isActive ? 'h-40 md:h-48' : 'h-16 md:h-20'
        } transition-all duration-300`}>
          <div className="absolute inset-0" />
          
          <div className="absolute top-0 w-full p-3 md:p-6">
            <div className="flex items-center gap-2 md:gap-4">
              <span className="text-current scale-75 md:scale-100" aria-hidden="true">
                <Icon />
              </span>
              <h3 className="text-lg md:text-3xl font-semibold text-black">{title}</h3>
            </div>

            <div className={`transition-all duration-300 ${
              isHovered || isActive ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
            }`}>
              <p className="text-black text-xs md:text-sm my-2 md:my-4 font-semibold">{description}</p>
              <Link 
                href={link} 
                className="bg-blue-600 text-white px-4 md:px-6 py-2 rounded-md w-fit flex items-center gap-2 hover:bg-blue-700 transition-colors text-xs md:text-base"
                aria-label={`View all activities for ${title}`}
              >
                View All Activities
                <svg
                  className="w-3 h-3 md:w-4 md:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Mobile view
  const MobileCard = () => (
    <div className="md:hidden w-full p-2">
      <div className={`transition-all duration-300 rounded-lg p-[5px] ${
        isActive ? `${bgColor} bg-opacity-100` : 'bg-transparent'
      }`}>
        <span className={`${isActive ? 'text-black' : 'text-white'} transition-colors duration-300 flex items-center justify-center`} aria-hidden="true">
          <Icon />
        </span>
      </div>
      
      <div className={`absolute left-0 right-0 bottom-24 mx-4 transition-all duration-300 ${
        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'
      }`}>
        <div className={`${bgColor} rounded-lg py-3 px-4`}>
          <h3 className="text-xl font-semibold text-black mb-[0.1px]">{title}</h3>
          <p className="text-black text-sm mb-1 font-semibold">{description}</p>
          <Link 
            href={link} 
            className="bg-blue-600 text-white px-4 py-2 rounded-md w-fit flex items-center gap-2 hover:bg-blue-700 transition-colors text-sm"
            aria-label={`View all activities for ${title}`}
          >
            View All Activities
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <DesktopCard />
      <MobileCard />
    </>
  );
};

const HeroSection = () => {
  const [activeVideo, setActiveVideo] = useState('prime');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const containerRef = useRef<HTMLDivElement>(null);

  interface HandleKeyNavigationProps {
    event: React.KeyboardEvent<HTMLDivElement>;
    cardId: string;
  }

  const handleKeyNavigation = ({ event, cardId }: HandleKeyNavigationProps) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActiveVideo(cardId);
    }
  };

  const cards = [
    {
      id: 'prime',
      title: 'Prime',
      description: 'Strategy and action sports for the squad',
      icon: PrimeSvg,
      videoUrl: '/Videos/prime-10sec.mp4',
      bgColor: 'bg-[#E7FF97]',
      link: "https://playarena.in/activity/bowling/"
    },
    {
      id: 'studio',
      title: 'Studio',
      description: 'Short format, big thrills served a la carte',
      icon: StudioSvg,
      videoUrl: '/Videos/studio-10sec-1.mp4',
      bgColor: 'bg-[#E9E9E9]',
      link: "https://playarena.in/activity/bumper-cars-2/"
    },
    {
      id: 'union',
      title: 'Union',
      description: 'Classic favourites for the recreational sport',
      icon: UnionSvg,
      videoUrl: '/Videos/union-10sec.mp4',
      bgColor: 'bg-[#C1EBFF]',
      link: "https://playarena.in/activity/swimming-pool/"
    },
    {
      id: 'junior',
      title: 'Junior',
      description: 'Toddler-sized fun for little champs',
      icon: JuniorSvg,
      videoUrl: '/Videos/junior-10sec.mp4',
      bgColor: 'bg-[#DCFFE7]',
      link: "https://playarena.in/activity/little-gym/"
    },
    {
      id: 'pixel',
      title: 'Pixel',
      description: "Shoot, race and more in the gamer's den",
      icon: PixelSvg,
      videoUrl: '/Videos/pixel-10sec-2.mp4',
      bgColor: 'bg-[#E7FFF4]',
      link: "https://playarena.in/activity/vr-coaster/"
    }
  ];

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

  useEffect(() => {
    cards.forEach(card => {
      const video = document.createElement('video');
      video.preload = 'auto';
      video.src = card.videoUrl;
    });
  }, []);

  return (
    <div className="relative">
      <h1 className="sr-only">Play Arena Activities</h1>
      <section 
        ref={containerRef} 
        className="relative w-full h-screen overflow-hidden bg-black"
        aria-label="Featured activities showcase"
      >
        <div className="absolute inset-0" aria-hidden="true">
          {cards.map((card) => (
            <video
              key={card.id}
              ref={el => { videoRefs.current[card.id] = el; }}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
                ${activeVideo === card.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              autoPlay={activeVideo === card.id}
              muted
              loop
              playsInline
              aria-hidden="true"
            >
              <source src={card.videoUrl} type="video/mp4" />
            </video>
          ))}
        </div>

        <div className="absolute bottom-0 w-full z-20">
          {/* Mobile Interface */}
          <nav 
            className="md:hidden w-full bg-black p-4 flex justify-between items-center"
            role="tablist"
            aria-label="Mobile activity categories"
          >
            {cards.map((card) => (
              <div
                key={card.id}
                role="tab"
                tabIndex={0}
                aria-selected={activeVideo === card.id}
                aria-controls={`content-${card.id}`}
                aria-label={`${card.title} - ${card.description}`}
                className="cursor-pointer flex-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-md"
                onClick={() => setActiveVideo(card.id)}
                onKeyDown={(e) => handleKeyNavigation({ event: e, cardId: card.id })}
              >
                <VideoCard 
                  {...card} 
                  isHovered={hoveredCard === card.id} 
                  isActive={activeVideo === card.id}
                  isMobile={true}
                />
              </div>
            ))}
          </nav>

          {/* Desktop Interface */}
          <nav 
            className="hidden md:block"
            role="tablist"
            aria-label="Activity categories"
          >
            <div className="grid grid-cols-5 gap-0">
              {cards.map((card) => (
                <div
                  key={card.id}
                  role="tab"
                  tabIndex={0}
                  aria-selected={activeVideo === card.id}
                  aria-controls={`content-${card.id}`}
                  aria-label={`${card.title} - ${card.description}`}
                  className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                  onMouseEnter={() => {
                    setActiveVideo(card.id);
                    setHoveredCard(card.id);
                  }}
                  onMouseLeave={() => setHoveredCard(null)}
                  onKeyDown={(e) => handleKeyNavigation({ event: e, cardId: card.id })}
                  onFocus={() => setActiveVideo(card.id)}
                >
                  <VideoCard 
                    {...card} 
                    isHovered={hoveredCard === card.id} 
                    isActive={activeVideo === card.id}
                    isMobile={false}
                  />
                </div>
              ))}
            </div>
          </nav>
        </div>

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
        >
          Skip to main content
        </a>
      </section>
    </div>
  );
};

export default HeroSection;
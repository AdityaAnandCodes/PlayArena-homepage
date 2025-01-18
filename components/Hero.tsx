"use client"
import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PrimeSvg, StudioSvg, UnionSvg, JuniorSvg, PixelSvg } from './IconComponents';
import Link from 'next/link';
import { useMemo } from 'react';

interface VideoCardProps {
  title: string;
  description: string;
  icon: React.ComponentType;
  bgColor: string;
  isHovered: boolean;
  isActive: boolean;
  id: string;
  link: string;
  onInteraction: (id: string) => void;
}

// Memoized Link component with hover animation
const AnimatedLink = memo(({ href, children, className, ariaLabel }: {
  href: string;
  children: React.ReactNode;
  className: string;
  ariaLabel: string;
}) => (
  <Link 
    href={href} 
    className={className}
    aria-label={ariaLabel}
  >
    <motion.div
      className="flex items-center gap-2"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  </Link>
));
AnimatedLink.displayName = 'AnimatedLink';

// Memoized Arrow Icon
const ArrowIcon = memo(({ className }: { className: string }) => (
  <svg
    className={className}
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
));
ArrowIcon.displayName = 'ArrowIcon';

// Memoized Video Component
const VideoPlayer = memo(({ src, isActive }: { src: string; isActive: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
        ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
      muted
      loop
      playsInline
      preload="metadata"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
});
VideoPlayer.displayName = 'VideoPlayer';

// Memoized VideoCard Component
const VideoCard = memo(({ 
  title, 
  description, 
  icon: Icon, 
  bgColor, 
  isHovered,
  isActive,
  link,
  id,
  onInteraction
}: VideoCardProps) => {
  const cardVariants = useMemo(() => ({
    collapsed: { 
      height: "5rem",
      transition: { duration: 0.4, ease: "easeInOut" }
    },
    expanded: { 
      height: "12rem",
      transition: { duration: 0.4, ease: "easeInOut" }
    }
  }), []);

  const contentVariants = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      y: 20,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut", delay: 0.1 }
    },
    exit: { 
      opacity: 0, 
      y: 20,
      transition: { duration: 0.3, ease: "easeIn" }
    }
  }), []);

  // Desktop and Tablet Card
  const DesktopTabletCard = useCallback(() => (
    <motion.div 
      className="relative h-20 md:h-28 hidden sm:block"
      initial={false}
      animate={{ 
        scale: isActive ? 1.02 : 1,
        transition: { duration: 0.3 }
      }}
    >
      <div className="absolute bottom-0 w-full">
        <motion.div 
          className={`relative w-full ${bgColor}`}
          variants={cardVariants}
          initial="collapsed"
          animate={isHovered || isActive ? "expanded" : "collapsed"}
        >
          <motion.div 
            className="absolute top-0 w-full p-3 md:p-6"
            animate={{
              y: isActive && !isHovered ? -5 : 0
            }}
          >
            <div className="flex items-center gap-2 md:gap-4">
              <motion.span 
                className="text-current scale-75 md:scale-100 px-1" 
                animate={{ 
                  rotate: isActive ? 360 : 0 
                }}
                transition={{ 
                  duration: 0.5,
                  ease: "easeInOut"
                }}
                aria-hidden="true"
              >
                <Icon />
              </motion.span>
              <h3 className="text-lg md:text-3xl font-semibold text-black">{title}</h3>
            </div>

            <AnimatePresence mode="wait">
              {(isHovered || isActive) && (
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <p className="text-black text-xs md:text-sm my-2 md:my-4 font-semibold">{description}</p>
                  <AnimatedLink 
                    href={link}
                    className="bg-blue-600 text-white px-4 md:px-6 py-2 rounded-md w-fit flex items-center gap-2 hover:bg-blue-700 transition-colors text-xs md:text-base"
                    ariaLabel={`View all activities for ${title}`}
                  >
                    View All Activities
                    <ArrowIcon className="w-3 h-3 md:w-4 md:h-4" />
                  </AnimatedLink>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  ), [isActive, isHovered, bgColor, cardVariants, contentVariants, title, description, link, Icon]);

  // Mobile Card
  const MobileCard = useCallback(() => (
    <div className="sm:hidden w-full p-2">
      <motion.div 
        className={`rounded-lg p-[5px] ${
          isActive ? `${bgColor} bg-opacity-100` : 'bg-transparent'
        }`}
        animate={{
          backgroundColor: isActive ? bgColor : 'transparent',
          scale: isActive ? 1.1 : 1
        }}
        transition={{
          duration: 0.3
        }}
      >
        <motion.span 
          className={`${isActive ? 'text-black' : 'text-white'} transition-colors duration-300 flex items-center justify-center`}
          animate={{ 
            rotate: isActive ? 360 : 0 
          }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
          aria-hidden="true"
        >
          <Icon />
        </motion.span>
      </motion.div>
      
      <AnimatePresence>
        {isActive && (
          <motion.div 
            className="absolute left-0 right-0 bottom-24 mx-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.3,
              ease: "easeOut"
            }}
          >
            <motion.div 
              className={`${bgColor} rounded-lg py-3 px-4`}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-black mb-[0.1px]">{title}</h3>
              <p className="text-black text-sm mb-1 font-semibold">{description}</p>
              <AnimatedLink 
                href={link}
                className="bg-blue-600 text-white px-4 py-2 rounded-md w-fit flex items-center gap-2 hover:bg-blue-700 transition-colors text-sm"
                ariaLabel={`View all activities for ${title}`}
              >
                View All Activities
                <ArrowIcon className="w-3 h-3" />
              </AnimatedLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  ), [isActive, bgColor, title, description, link, Icon]);

  return (
    <>
      <DesktopTabletCard />
      <MobileCard />
    </>
  );
});
VideoCard.displayName = 'VideoCard';

// Main HeroSection Component
const HeroSection = () => {
  const [activeVideo, setActiveVideo] = useState('prime');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

  const cards = useMemo(() => [
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
      bgColor: 'bg-[#80ed99]',
      link: "https://playarena.in/activity/little-gym/"
    },
    {
      id: 'pixel',
      title: 'Pixel',
      description: "Shoot, race and more in the gamer's den",
      icon: PixelSvg,
      videoUrl: '/Videos/pixel-10sec-2.mp4',
      bgColor: 'bg-[#c7f9cc]',
      link: "https://playarena.in/activity/vr-coaster/"
    }
  ], []);

  const startAutoPlay = useCallback(() => {
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current);
    }
    
    autoPlayTimeoutRef.current = setTimeout(() => {
      if (isAutoPlaying) {
        const currentIndex = cards.findIndex(card => card.id === activeVideo);
        const nextIndex = (currentIndex + 1) % cards.length;
        setActiveVideo(cards[nextIndex].id);
      }
    }, 15000);
  }, [isAutoPlaying, activeVideo, cards]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current);
      }
    };
  }, [startAutoPlay]);

  // Intersection Observer for pausing videos when not in viewport
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          setIsAutoPlaying(false);
        } else {
          setIsAutoPlaying(true);
        }
      });
    };

    intersectionObserverRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.5
    });

    if (containerRef.current) {
      intersectionObserverRef.current.observe(containerRef.current);
    }

    return () => {
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.disconnect();
      }
    };
  }, []);

  // Dynamic viewport height handling
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

  const handleInteraction = useCallback((cardId: string) => {
    setActiveVideo(cardId);
    setIsAutoPlaying(false);
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Container */}
      <div className="absolute inset-0">
        {cards.map((card) => (
          <VideoPlayer
            key={card.id}
            src={card.videoUrl}
            isActive={activeVideo === card.id}
          />
        ))}
      </div>

      {/* Cards Container */}
      <div className="absolute bottom-0 w-full z-20">
        {/* Mobile black panel */}
        <div className="sm:hidden w-full bg-black p-4 flex justify-between items-center">
          {cards.map((card) => (
            <div
              key={card.id}
              className="cursor-pointer flex-1"
              onClick={() => handleInteraction(card.id)}
            ><VideoCard 
                {...card} 
                isHovered={hoveredCard === card.id} 
                isActive={activeVideo === card.id}
                onInteraction={handleInteraction}
              />
            </div>
          ))}
        </div>

        {/* Desktop and Tablet cards */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-5 gap-0">
            {cards.map((card) => (
              <div
                key={card.id}
                className="relative cursor-pointer"
                onMouseEnter={() => {
                  handleInteraction(card.id);
                  setHoveredCard(card.id);
                }}
                onMouseLeave={() => {
                  setHoveredCard(null);
                  setIsAutoPlaying(true);
                  startAutoPlay();
                }}
              >
                <VideoCard 
                  {...card} 
                  isHovered={hoveredCard === card.id} 
                  isActive={activeVideo === card.id}
                  onInteraction={handleInteraction}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroSection);
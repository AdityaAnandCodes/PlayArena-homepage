"use client";
import React, { useEffect, useRef, useState } from "react";
import { Gamepad2, Heart, Star, UserCircle } from "lucide-react";

const ScrollingBanner = ({ speed = 1, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [items] = useState([
    { text: "For the love of play", icon: Gamepad2 },
    { text: "For the love of play", icon: Heart },
    { text: "For the love of play", icon: Star },
    { text: "For the love of play", icon: UserCircle },
  ]);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    const updateWidths = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setContentWidth(containerRef.current.scrollWidth / 3);
      }
    };

    updateWidths();
    window.addEventListener("resize", updateWidths);
    return () => window.removeEventListener("resize", updateWidths);
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    let lastTimestamp = 0;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;

      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition - speed * (delta / 16);
        return newPosition <= -contentWidth ? 0 : newPosition;
      });

      lastTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [speed, contentWidth]);

  interface BannerItemProps {
    item: { text: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>> };
    index: number;
    setIndex: number;
  }

  const BannerItem: React.FC<BannerItemProps> = ({ item, index, setIndex }) => {
    const Icon = item.icon; // Instantiate the icon component
    return (
      <div
        key={`${setIndex}-${index}`}
        className="flex items-center mx-12 shrink-0 select-none"
      >
        <span className="text-black mr-2 text-sm md:text-base">
          {item.text}
        </span>
        <Icon
          className="w-5 h-5 stroke-black fill-transparent"
          aria-hidden="true"
        />
      </div>
    );
  };

  return (
    <div className={`relative overflow-hidden bg-[#e5f5bf] py-4 ${className}`}>
      <div
        ref={containerRef}
        className="flex whitespace-nowrap"
        style={{
          transform: `translateX(${scrollPosition}px)`,
          width: "fit-content",
        }}
      >
        {[...Array(3)].map((_, setIndex) => (
          <div key={setIndex} className="flex">
            {items.map((item, index) => (
              <BannerItem
                key={`${setIndex}-${index}`}
                item={item}
                index={index}
                setIndex={setIndex}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;

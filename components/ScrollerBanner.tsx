"use client"
import React, { useRef, useEffect, useState } from 'react';
import { Gamepad2, Heart, Star, UserCircle } from 'lucide-react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';

const ScrollingBanner = () => {
  const bannerItems = [
    { text: "For the love of play", icon: Gamepad2 },
    { text: "For the love of play", icon: Heart },
    { text: "For the love of play", icon: Star },
    { text: "For the love of play", icon: UserCircle }
  ];

  const baseX = useMotionValue(0);
  const baseVelocity = -1; // Increased speed slightly
  const [duplicates, setDuplicates] = useState(2);
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  // Calculate the width of a single set of items
  useEffect(() => {
    if (containerRef.current) {
      const singleSetWidth = containerRef.current.scrollWidth / (duplicates + 1);
      setContentWidth(singleSetWidth);
    }
  }, [duplicates]);

  useAnimationFrame(() => {
    let newX = baseX.get() + baseVelocity;

    // When we've scrolled one full set width, reset to start
    if (Math.abs(newX) >= contentWidth) {
      newX = 0;
    }
    
    baseX.set(newX);
  });

  // Create the duplicated sets of items
  const allItems = [...Array(duplicates + 1)].flatMap((_, setIndex) =>
    bannerItems.map((item, index) => (
      <div 
        key={`${setIndex}-${index}`} 
        className="flex items-center mx-12 shrink-0 select-none"
      >
        <span className="text-black mr-2">{item.text}</span>
        <item.icon 
          className="w-5 h-5 stroke-black fill-transparent" 
          fill="currentColor"
        />
      </div>
    ))
  );

  return (
    <div className="relative overflow-hidden bg-[#e5f5bf] py-4">
      <div ref={containerRef} className="flex whitespace-nowrap">
        <motion.div 
          className="flex"
          style={{ x: baseX }}
        >
          {allItems}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollingBanner;
"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  description?: string;
  imageUrl: string;
  buttonText?: string;
}

interface SpecialsSliderProps {
  events: Event[];
  autoPlayInterval?: number;
}

export default function SpecialsSlider({
  events,
  autoPlayInterval = 3000,
}: SpecialsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(3);

  // Responsive items to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      return newIndex < 0 ? events.length - itemsToShow : newIndex;
    });
  }, [events.length, itemsToShow]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      return newIndex > events.length - itemsToShow ? 0 : newIndex;
    });
  }, [events.length, itemsToShow]);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  // Auto-play effect
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, handleNext, autoPlayInterval]);

  return (
    <section className="w-full bg-gradient-to-b from-white to-sky-100">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">SPECIALS</h1>
          <div className="flex gap-4">
            <button
              onClick={togglePlayPause}
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
              aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
              }}
            >
              {events.map((event, index) => (
                <div
                  key={`${event.id}-${index}`}
                  className="flex-shrink-0"
                  style={{
                    width: `calc((100% - ${(itemsToShow - 1) * (index < 640 ? 1 : 1.5)}rem) / ${itemsToShow})`,
                  }}
                >
                  <div className="bg-gradient-to-br from-sky-100 to-sky-200 rounded-2xl overflow-hidden h-full flex flex-col">
                    {/* Fixed aspect ratio container for image */}
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src={event.imageUrl}
                        alt={event.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                        priority={index === currentIndex}
                        quality={85}
                      />
                    </div>
                    {/* Fixed height content area */}
                    <div className="p-4 sm:p-6 flex flex-col flex-grow min-h-[280px]">
                      <h2 className="text-xl sm:text-2xl font-bold mb-2 line-clamp-2">
                        {event.title}
                      </h2>
                      <p className="text-gray-700 mb-4 text-sm sm:text-base">
                        {event.date} {event.time}
                      </p>
                      {event.description && (
                        <p className="text-gray-600 mb-4 text-sm sm:text-base line-clamp-3">
                          {event.description}
                        </p>
                      )}
                      <div className="flex-grow" />
                      <button className="bg-black text-white w-full px-6 py-2 rounded-md hover:bg-gray-800 transition-colors mt-4">
                        {event.buttonText || "Book Now"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {events.length > itemsToShow && (
            <>
              <button
                onClick={() => {
                  handlePrevious();
                  setIsPlaying(false);
                }}
                className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={() => {
                  handleNext();
                  setIsPlaying(false);
                }}
                className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
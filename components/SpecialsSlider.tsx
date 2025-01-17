"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

interface Event {
  id: string;
  imageUrl: string;
  title: string;
  date: string;
  time: string;
  description?: string;
  buttonText?: string;
}

interface SpecialsSliderProps {
  events: Event[];
  autoPlayInterval?: number;
}

export default function SpecialsSlider({ events, autoPlayInterval = 3000 }: SpecialsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(3);

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

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, handleNext, autoPlayInterval]);

  return (
    <section className="w-full bg-gradient-to-b from-white to-violet-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
            SPECIALS
          </h1>
          <div className="flex gap-4">
            <button
              onClick={togglePlayPause}
              className="bg-gradient-to-r from-violet-500 to-indigo-500 text-white p-2 rounded-full hover:from-violet-600 hover:to-indigo-600 transition-all shadow-md hover:shadow-lg"
              aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex gap-3 sm:gap-4 md:gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
              }}
            >
              {events.map((event, index) => (
                <div
                  key={`${event.id}-${index}`}
                  className="flex-shrink-0"
                  style={{
                    width: `calc((100% - ${(itemsToShow - 1) * (index < 640 ? 0.75 : 1.5)}rem) / ${itemsToShow})`,
                  }}
                >
                  <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-xl overflow-hidden h-full flex flex-col shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={event.imageUrl}
                        alt={event.title}
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        priority={index === currentIndex}
                        quality={85}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 line-clamp-2 text-gray-800">
                        {event.title}
                      </h2>
                      <p className="text-violet-600 mb-2 text-sm sm:text-base font-medium">
                        {event.date} {event.time}
                      </p>
                      {event.description && (
                        <p className="text-gray-600 mb-4 text-sm sm:text-base line-clamp-3">
                          {event.description}
                        </p>
                      )}
                      <div className="flex-grow" />
                      <button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white w-full px-4 py-2.5 rounded-lg hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg text-sm sm:text-base font-medium">
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
                className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 bg-white/90 text-violet-600 p-2 sm:p-3 rounded-full shadow-lg hover:bg-violet-50 transition-all duration-300 backdrop-blur-sm z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={() => {
                  handleNext();
                  setIsPlaying(false);
                }}
                className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 bg-white/90 text-violet-600 p-2 sm:p-3 rounded-full shadow-lg hover:bg-violet-50 transition-all duration-300 backdrop-blur-sm z-10"
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
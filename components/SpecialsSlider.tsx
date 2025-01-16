"use client";
import React, { useState, useEffect, useCallback } from "react";
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
  const itemsToShow = 3;

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
    <div className="w-full max-w-7xl mx-auto px-2 py-8 ">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">SPECIALS</h1>
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
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            }}
          >
            {events.map((event, index) => (
              <div
                key={`${event.id}-${index}`}
                className="flex-shrink-0"
                style={{
                  width: `calc((100% - ${(itemsToShow - 1) * 1.5}rem) / ${itemsToShow})`,
                }}
              >
                <div className="bg-gradient-to-br from-sky-100 to-sky-200 rounded-2xl overflow-hidden h-full flex flex-col">
                  <div className="aspect-[4/3] relative">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
                    <p className="text-gray-700 mb-4">
                      {event.date} {event.time}
                    </p>
                    {event.description && (
                      <p className="text-gray-600 mb-4">{event.description}</p>
                    )}
                    <div className="flex-grow"></div>
                    <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors mt-auto">
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
              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => {
                handleNext();
                setIsPlaying(false);
              }}
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>
    </div>
    </section>
  );
}

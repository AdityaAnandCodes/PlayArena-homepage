"use client"
import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Utensils, Car, Train } from 'lucide-react';
import { Calendar } from "@/components/ui/calendar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import ScrollingBanner from './ScrollerBanner';

export default function BookingSection() {
  const [date, setDate] = useState(new Date());
  
  interface FormatDateOptions {
    weekday: 'long';
    day: 'numeric';
    month: 'long';
    year: 'numeric';
  }

  const formatDate = (date: Date): string => {
    const options: FormatDateOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
  };

  // Desktop date picker
  const DesktopDatePicker = () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          className="bg-[#e5f5bf] hover:bg-[#d8e9b3] text-black border-none 
                     px-6 py-3 h-auto hidden md:flex items-center gap-2"
        >
          <span>{formatDate(date)}</span>
          <CalendarIcon className="w-5 h-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-white">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(newDate) => setDate(newDate || date)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );

  // Mobile date picker
  const MobileDatePicker = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          className="bg-[#e5f5bf] hover:bg-[#d8e9b3] text-black border-none 
                     w-full px-6 py-3 h-auto md:hidden flex items-center gap-2"
        >
          <span>{formatDate(date)}</span>
          <CalendarIcon className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="bg-white p-0">
        <SheetHeader className="px-4 pt-4">
          <SheetTitle>Select a date</SheetTitle>
        </SheetHeader>
        <div className="p-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(newDate) => setDate(newDate || date)}
            className="rounded-md mx-auto"
          />
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <div className="bg-black text-white max-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Header Section */}
        <h1 className="text-3xl md:text-6xl font-bold mb-4">Book your slots</h1>
        <p className="text-base md:text-xl mb-6 md:mb-8">
          To find special offers, occupancy rates and free time
        </p>
        
        {/* Date Picker Section */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6 md:mb-8">
          <div className="w-full md:w-auto">
            <MobileDatePicker />
            <DesktopDatePicker />
          </div>
          <div className="text-white text-sm md:text-base">
            Average wait time 5-10mins
            <span className="hidden md:inline">,</span>
            <br className="md:hidden" />
            pre booking activities is recommended
          </div>
        </div>

        {/* Info Section */}
        <div className="border-l-4 border-white pl-4 mb-8 md:mb-12">
          <h2 className="text-lg md:text-2xl font-bold mb-4 md:mb-8">
            PLAN YOUR DAY AT PLAY
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <InfoCard 
              Icon={Clock}
              title="Activities"
              description="6:00 AM – 11:00 PM"
            />
            <InfoCard 
              Icon={Utensils}
              title="F&B Timings"
              description="10:00 AM – 11:00 PM"
            />
            <InfoCard 
              Icon={Car}
              title="Personal Vehicles"
              description="Parking available"
            />
            <InfoCard 
              Icon={Train}
              title="Nearest metro"
              description="Silk Board (Yellow Line)"
            />
          </div>
        </div>
      </div>
      
      <ScrollingBanner />
    </div>
  );
}

interface InfoCardProps {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const InfoCard = ({ Icon, title, description }: InfoCardProps) => (
  <div className="flex items-center gap-3">
    <Icon className="w-5 h-5 text-[#e5f5bf] shrink-0" />
    <div>
      <div className="text-[#e5f5bf] text-sm md:text-base">
        {title}
      </div>
      <div className="text-sm md:text-base">
        {description}
      </div>
    </div>
  </div>
);
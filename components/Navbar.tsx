"use client"
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';
import { PrimeSvg, StudioSvg, UnionSvg, JuniorSvg, PixelSvg } from './IconComponents';

const playCategories = [
  {
    name: "PIXEL",
    icon: <PixelSvg />,
    bgColor: "bg-[#e5ffa8]",
    textColor: "text-[#e5ffa8]",
    items: ["Car Simulator", "Cricket Simulator", "Lazermaze", "7D Theatre", "VR Escape", "VR Coaster"]
  },
  {
    name: "STUDIO",
    icon: <StudioSvg />,
    bgColor: "bg-[#f2e6ff]",
    textColor: "text-[#f2e6ff]",
    items: ["Archery", "Rope Course", "Rocket Ejector", "Climbing", "Trampoline Park", "Shooting", "Carnival Games"]
  },
  {
    name: "UNION",
    icon: <UnionSvg />,
    bgColor: "bg-[#ffe6d5]",
    textColor: "text-[#ffe6d5]",
    items: ["The Field", "Badminton", "Basketball", "Cricket Nets", "Swimming Pool", "Skate Park", "Gym"]
  },
  {
    name: "PRIME",
    icon: <PrimeSvg />,
    bgColor: "bg-[#e6ffe6]",
    textColor: "text-[#e6ffe6]",
    items: ["Gokarting", "Bowling", "Lasertag", "Paintball", "Off Road ATV", "Bumper Cars", "Virtual Verve"]
  },
  {
    name: "JUNIOR",
    icon: <JuniorSvg />,
    bgColor: "bg-[#e6f9ff]",
    textColor: "text-[#e6f9ff]",
    items: ["Little Gym", "Soft Play"]
  }
];

const PlayDropdown = ({ isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`
      ${isMobile ? 'w-full' : 'absolute top-5 -left-80 min-w-[1200px] scale-90 bg-white shadow-lg'}
      z-50
    `}>
      <div className="max-w-7xl ">
        <div className="grid grid-cols-5">
          {playCategories.map((category) => (
            <div key={category.name} className="relative">
              {/* Category Header */}
              <div className={`${category.bgColor} px-8 py-4 flex items-center justify-between`}>
                <span className="font-medium">{category.name}</span>
                <div className="w-8 h-8">
                  {category.icon}
                </div>
              </div>
              {/* Category Content */}
              <div className="bg-white">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="px-6 py-3 text-sm hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-none"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MobilePlayDropdown = () => {
  return (
    <div className="bg-white">
      {playCategories.map((category) => (
        <div key={category.name}>
          <div className={`${category.bgColor} px-4 py-3 flex items-center justify-between`}>
            <span className="font-medium">{category.name}</span>
            <div className="w-6 h-6">
              {category.icon}
            </div>
          </div>
          <div className="bg-white">
            {category.items.map((item, idx) => (
              <div
                key={idx}
                className="px-4 py-3 text-sm border-b border-gray-100 last:border-none"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

interface NavItemProps {
  text: string;
  dropdown?: boolean;
  children?: React.ReactNode;
  isMobile?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ text, dropdown, children, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      className="relative"
      onMouseEnter={() => !isMobile && setIsOpen(true)}
      onMouseLeave={() => !isMobile && setIsOpen(false)}
      onClick={() => isMobile && setIsOpen(!isOpen)}
    >
      <div className="flex items-center gap-2 cursor-pointer py-2 px-4">
        <span className={`${text === 'Play' ? 'text-white' : 'text-white'}`}>
          {text}
        </span>
        <ChevronDown 
          className={`w-4 h-4 ${text === 'Play' ? 'text-white' : 'text-white'} 
          transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
      {isOpen && dropdown && (
        isMobile ? <MobilePlayDropdown /> : <PlayDropdown />
      )}
      {isOpen && children && children}
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50
      transition-all duration-300
      ${isScrolled ? 'bg-black shadow-lg' : 'bg-black bg-opacity-95'}
    `}>
      <div className="max-w-7xl mx-auto">
        {/* ... (rest of the navbar structure remains the same) */}
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6 items-center">
            <NavItem text="Play" dropdown />
            <NavItem text="Participate">
              <div className="absolute top-full left-0 bg-white shadow-lg p-4 w-64">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Learn & Master</h3>
                    <p className="text-sm text-gray-600">Join one of our academies to learn And master a sport.</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Events at PLaY</h3>
                    <p className="text-sm text-gray-600">Join the community to celebrate special moments. Screenings...</p>
                  </div>
                </div>
              </div>
            </NavItem>
            <NavItem text="Host">
              <div className="absolute top-full left-0 bg-white shadow-lg p-4 w-64">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Birthdays at PLaY</h3>
                    <p className="text-sm text-gray-600">Celebrate Memorable Birthdays Here!</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Corporate events</h3>
                    <p className="text-sm text-gray-600">Dynamic events and experiences</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Perfect Dates at PLaY</h3>
                    <p className="text-sm text-gray-600">Connecting with or without a reason to celebrate</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Plan your Event</h3>
                    <p className="text-sm text-gray-600">Fill out a form to make an enquiry</p>
                  </div>
                </div>
              </div>
            </NavItem>
            <NavItem text="F&B">
  <div className="absolute top-full left-0 bg-white shadow-lg p-4 w-64">
    <div className="space-y-4">
      <div>
        <h3 className="font-medium">Food Court</h3>
        <p className="text-sm text-gray-600">
          From tasty continental bites to refreshing sips, dive into a fun-filled flavor fest.
        </p>
      </div>
      <div>
        <h3 className="font-medium">Restaurant</h3>
        <p className="text-sm text-gray-600">
          From tasty continental bites to refreshing sips, dive into a fun-filled flavor fest that’s sure to satisfy your cravings.
        </p>
      </div>
    </div>
  </div>
</NavItem>
          </div>

          {/* Contact Icons */}
          <div className="hidden lg:flex gap-4">
            <button className="text-white hover:text-gray-300 transition-colors">
              <Phone className="w-6 h-6" />
            </button>
            <button className="text-white hover:text-gray-300 transition-colors">
              <MapPin className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden
            transition-all duration-300 ease-in-out
            ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}
          `}
        >
          <div className="bg-black border-t border-gray-800">
            <NavItem text="Play" dropdown isMobile />
            <NavItem text="Participate" isMobile>
              <div className="bg-black p-4 space-y-4">
                <div>
                  <h3 className="text-white font-medium">Learn & Master</h3>
                  <p className="text-sm text-gray-400">Join one of our academies to learn And master a sport.</p>
                </div>
                <div>
                  <h3 className="text-white font-medium">Events at PLaY</h3>
                  <p className="text-sm text-gray-400">Join the community to celebrate special moments. Screenings...</p>
                </div>
              </div>
            </NavItem>
             <NavItem text="Host" isMobile>
              <div className="bg-black p-4 space-y-4">
                <div>
                  <h3 className="text-white font-medium">Birthdays at PLaY</h3>
                  <p className="text-sm text-gray-400">Celebrate Memorable Birthdays Here!</p>
                </div>
                <div>
                  <h3 className="text-white font-medium">Corporate events</h3>
                  <p className="text-sm text-gray-400">Dynamic events and experiences</p>
                </div>
                <div>
                  <h3 className="text-white font-medium">Perfect Dates at PLaY</h3>
                  <p className="text-sm text-gray-400">Connecting with or without a reason to celebrate</p>
                </div>
                <div>
                  <h3 className="text-white font-medium">Plan your Event</h3>
                  <p className="text-sm text-gray-400">Fill out a form to make an enquiry</p>
                </div>
              </div>
            </NavItem><NavItem text="F&B" isMobile>
  <div className="bg-black p-4 space-y-4">
    <div>
      <h3 className="text-white font-medium">Food Court</h3>
      <p className="text-sm text-gray-400">
        From tasty continental bites to refreshing sips, dive into a fun-filled flavor fest.
      </p>
    </div>
    <div>
      <h3 className="text-white font-medium">Restaurant</h3>
      <p className="text-sm text-gray-400">
        From tasty continental bites to refreshing sips, dive into a fun-filled flavor fest that’s sure to satisfy your cravings.
      </p>
    </div>
  </div>
</NavItem>
            <div className="flex flex-col gap-3 p-4 border-t border-gray-800">
              <button className="flex items-center gap-2 text-white hover:bg-gray-800 p-2 rounded-md">
                <Phone className="w-5 h-5" />
                <span>Contact Us</span>
              </button>
              <button className="flex items-center gap-2 text-white hover:bg-gray-800 p-2 rounded-md">
                <MapPin className="w-5 h-5" />
                <span>Find Location</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



/*  
https://playarena.in/activity/car-simulator/
https://playarena.in/activity/cricket-simulator/
https://playarena.in/activity/lazermaze/
https://playarena.in/activity/7d-theatre-2/
https://playarena.in/activity/vr-escape/





*/
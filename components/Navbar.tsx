"use client"
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';
import { PrimeSvg, StudioSvg, UnionSvg, JuniorSvg, PixelSvg } from './IconComponents';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const playCategories = [
    {
        name: "PIXEL",
        icon: <PixelSvg />,
        bgColor: "bg-[#e5ffa8]",
        textColor: "text-[#e5ffa8]",
        items: [
            { name: "Car Simulator", link: "https://playarena.in/activity/car-simulator/" },
            { name: "Cricket Simulator", link: "https://playarena.in/activity/cricket-simulator/" },
            { name: "Lazermaze", link: "https://playarena.in/activity/lazermaze/" },
            { name: "7D Theatre", link: "https://playarena.in/activity/7d-theatre-2/" },
            { name: "VR Escape", link: "https://playarena.in/activity/vr-escape/" },
            { name: "VR Coaster", link: "https://playarena.in/activity/vr-coaster/" }
        ]
    },
    {
        name: "STUDIO",
        icon: <StudioSvg />,
        bgColor: "bg-[#f2e6ff]",
        textColor: "text-[#f2e6ff]",
        items: [
            { name: "Archery", link: "https://playarena.in/activity/archery-2/" },
            { name: "Rope Course", link: "https://playarena.in/activity/rope-course-2/" },
            { name: "Rocket Ejector", link: "https://playarena.in/activity/best-rocket-ejector-in-bangalore-play-arena/" },
            { name: "Climbing", link: "https://playarena.in/activity/climbing-2/" },
            { name: "Trampoline Park", link: "https://playarena.in/activity/trampoline-park/" },
            { name: "Shooting", link: "https://playarena.in/activity/shooting-2/" },
            { name: "Carnival Games", link: "https://playarena.in/activity/carnival-games/" }
        ]
    },
    {
        name: "UNION",
        icon: <UnionSvg />,
        bgColor: "bg-[#ffe6d5]",
        textColor: "text-[#ffe6d5]",
        items: [
            { name: "The Field", link: "https://playarena.in/activity/full-field/" },
            { name: "Badminton", link: "https://playarena.in/activity/badminton-2/" },
            { name: "Basketball", link: "https://playarena.in/activity/indoor-basketball/" },
            { name: "Cricket Nets", link: "https://playarena.in/activity/cricket-nets-2/" },
            { name: "Swimming Pool", link: "https://playarena.in/activity/swimming-pool/" },
            { name: "Skate Park", link: "https://playarena.in/activity/skate-park-2/" },
            { name: "Gym", link: "https://playarena.in/activity/gym/" }
        ]
    },
    {
        name: "PRIME",
        icon: <PrimeSvg />,
        bgColor: "bg-[#e6ffe6]",
        textColor: "text-[#e6ffe6]",
        items: [
            { name: "Gokarting", link: "https://playarena.in/activity/gokarting/" },
            { name: "Bowling", link: "https://playarena.in/activity/bowling/" },
            { name: "Lasertag", link: "https://playarena.in/activity/lasertag/" },
            { name: "Paintball", link: "https://playarena.in/activity/paintball/" },
            { name: "Off Road ATV", link: "https://playarena.in/activity/off-road/" },
            { name: "Bumper Cars", link: "https://playarena.in/activity/bumper-cars/" },
            { name: "Virtual Verve", link: "https://playarena.in/activity/vr-verve/" }
        ]
    },
    {
        name: "JUNIOR",
        icon: <JuniorSvg />,
        bgColor: "bg-[#e6f9ff]",
        textColor: "text-[#e6f9ff]",
        items: [
            { name: "Little Gym", link: "https://playarena.in/activity/little-gym/" },
            { name: "Soft Play", link: "https://playarena.in/activity/soft-play/" }
        ]
    }
];

const PlayDropdown = ({ isMobile = false }) => {
  const router = useRouter();

  return (
    <div className={`
        ${isMobile ? 'w-full' : 'absolute top-5 -left-80 min-w-[1200px] scale-90 bg-white shadow-lg'}
        z-50
    `}>
      <div className="max-w-7xl ">
        <div className="grid grid-cols-5">
          {playCategories.map((category) => (
            <div key={category.name} className="relative">
              <div className={`${category.bgColor} px-8 py-4 flex items-center justify-between`}>
                <span className="font-medium">{category.name}</span>
                <div className="w-8 h-8">
                  {category.icon}
                </div>
              </div>
              <div className="bg-white">
                {category.items.map((item, idx) => (
                  <div key={idx} className="px-6 py-3 text-sm hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-none">
                    <Link href={item.link} aria-label='nav-link'>
                      <div>{item.name}</div>
                    </Link>
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
  const router = useRouter();

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
              <div key={idx} className="px-4 py-3 text-sm border-b border-gray-100 last:border-none">
                <Link href={item.link} aria-label='mobile-links'>
                  <div>{item.name}</div>
                </Link>
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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (<nav 
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled ? 'bg-black shadow-lg' : 'bg-black bg-opacity-95'}
      `}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
          <Logo />

          {/* Desktop Navigation */}
          <div 
            className="hidden lg:flex gap-6 items-center"
            role="menubar"
            aria-label="Desktop navigation"
          >
            <NavItem 
              text="Play" 
              dropdown 
              aria-haspopup="true"
              aria-expanded={isOpen}
            />
            <NavItem 
              text="Participate"
              aria-haspopup="true"
              aria-expanded={isOpen}
            >
              <div 
                className="absolute top-full left-0 bg-white shadow-lg p-4 w-64" 
                role="menu" 
                aria-label="Participate submenu"
              >
                <div className="space-y-4">
                  <NavLink
                    href="https://playarena.in/academies/"
                    title="Learn & Master"
                    description="Join one of our academies to learn And master a sport."
                  />
                  <NavLink
                    href="https://playarena.in/event/"
                    title="Events at PLaY"
                    description="Join the community to celebrate special moments. Screenings..."
                  />
                </div>
              </div>
            </NavItem>
            
            <NavItem 
              text="Host"
              aria-haspopup="true"
              aria-expanded={isOpen}
            >
              <div 
                className="absolute top-full left-0 bg-white shadow-lg p-4 w-64"
                role="menu"
                aria-label="Host submenu"
              >
                <div className="space-y-4">
                  <NavLink
                    href="https://playarena.in/birthdays/"
                    title="Birthdays at PLaY"
                    description="Celebrate Memorable Birthdays Here!"
                  />
                  <NavLink
                    href="https://playarena.in/corporates-at-play/"
                    title="Corporate events"
                    description="Dynamic events and experiences"
                  />
                  <NavLink
                    href="https://playarena.in/playdates/"
                    title="Perfect Dates at PLaY"
                    description="Connecting with or without a reason to celebrate"
                  />
                  <NavLink
                    href="https://playarena.in/enquiry/"
                    title="Plan your Event"
                    description="Fill out a form to make an enquiry"
                  />
                </div>
              </div>
            </NavItem>

            <NavItem 
              text="F&B"
              aria-haspopup="true"
              aria-expanded={isOpen}
            >
              <div 
                className="absolute top-full left-0 bg-white shadow-lg p-4 w-64"
                role="menu"
                aria-label="F&B submenu"
              >
                <div className="space-y-4">
                  <NavLink
                    href="https://playarena.in/foodcourt/"
                    title="Food Court"
                    description="From tasty continental bites to refreshing sips, dive into a fun-filled flavor fest."
                  />
                  <NavLink
                    href="https://playarena.in/restaurant/restaurant-1/"
                    title="Restaurant"
                    description="From tasty continental bites to refreshing sips, dive into a fun-filled flavor fest that's sure to satisfy your cravings."
                  />
                </div>
              </div>
            </NavItem>
          </div>

          {/* Contact Icons */}
          <div className="hidden lg:flex gap-6">
            <Link 
              href="https://api.whatsapp.com/send/?phone=919900099922&text&type=phone_number&app_absent=0" 
              className="text-white hover:text-gray-300 transition-colors p-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-md"
              aria-label="Contact us on WhatsApp"
            >
              <Phone className="w-6 h-6" aria-hidden="true" />
            </Link>
            <Link 
              href="https://www.google.com/maps/place/PLaY+Arena/@12.911395,77.6737242,1091m/" 
              className="text-white hover:text-gray-300 transition-colors p-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-md"
              aria-label="Find us on Google Maps"
            >
              <MapPin className="w-6 h-6" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? 
              <X className="w-6 h-6" aria-hidden="true" /> : 
              <Menu className="w-6 h-6" aria-hidden="true" />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`
            lg:hidden
            transition-all duration-300 ease-in-out
            ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}
          `}
          role="menu"
          aria-label="Mobile menu"
          hidden={!isOpen}
        >
          <div className="bg-black border-t border-gray-800">
            <NavItem text="Play" dropdown isMobile aria-haspopup="true" />
            <NavItem text="Participate" isMobile aria-haspopup="true">
              <div 
                className="bg-black p-4 space-y-4" 
                role="menu"
                aria-label="Mobile participate menu"
              >
                <MobileNavLink
                  href="https://playarena.in/academies/"
                  title="Learn & Master"
                  description="Join one of our academies to learn And master a sport."
                />
                <MobileNavLink
                  href="https://playarena.in/event/"
                  title="Events at PLaY"
                  description="Join the community to celebrate special moments. Screenings..."
                />
              </div>
            </NavItem>
            
            {/* Similar pattern for other mobile menu items */}
            
            <div className="flex flex-col gap-3 p-4 border-t border-gray-800">
              <Link 
                href="https://api.whatsapp.com/send/?phone=919900099922&text&type=phone_number&app_absent=0" 
                className="flex items-center gap-2 text-white hover:bg-gray-800 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Contact us on WhatsApp"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>Contact Us</span>
              </Link>
              <Link 
                href="https://www.google.com/maps/place/PLaY+Arena/@12.911395,77.6737242,1091m/" 
                className="flex items-center gap-2 text-white hover:bg-gray-800 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Find our location on Google Maps"
              >
                <MapPin className="w-5 h-5" aria-hidden="true" />
                <span>Find Location</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Helper components
interface NavLinkProps {
  href: string;
  title: string;
  description: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, description }) => (
  <Link 
    href={href}
    className="block hover:bg-gray-100 rounded-md p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
    role="menuitem"
  >
    <h3 className="font-medium text-black">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </Link>
);

interface MobileNavLinkProps {
  href: string;
  title: string;
  description: string;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, title, description }) => (
  <Link 
    href={href}
    className="block hover:bg-gray-700 rounded-md p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
    role="menuitem"
  >
    <h3 className="text-white font-medium">{title}</h3>
    <p className="text-sm text-gray-400">{description}</p>
  </Link>
);

export default Navbar;
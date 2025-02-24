"use client"
import React, { useState, useEffect, ReactNode } from 'react';
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
        ${isMobile ? 'w-full' : 'absolute -top-3 -left-80 min-w-[1200px] scale-95 bg-white shadow-lg'}
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
                    <Link href={item.link}>
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
  return (
    <div className="bg-white max-h-[60vh] overflow-y-auto">
      {playCategories.map((category) => (
        <div key={category.name}>
          <div className={`${category.bgColor} px-4 py-3 flex items-center justify-between sticky top-0`}>
            <span className="font-medium">{category.name}</span>
            <div className="w-6 h-6">
              {category.icon}
            </div>
          </div>
          <div className="bg-white">
            {category.items.map((item, idx) => (
              <div key={idx} className="px-4 py-3 text-sm border-b border-gray-100 last:border-none">
                <Link href={item.link}>
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
  children?: ReactNode;
  isMobile?: boolean;
  'aria-haspopup'?: boolean;
  isOpen: boolean;
  onToggle: () => void;
}

const NavItem = ({ 
  text, 
  dropdown = false, 
  children = null, 
  isMobile = false, 
  'aria-haspopup': hasPopup,
  isOpen,
  onToggle
}: NavItemProps) => {
  interface RenderMenuItemProps {
    child: React.ReactNode;
  }
  const [isHovered, setIsHovered] = useState(false);
  const showDropdown = isOpen || (!isMobile && isHovered);
  const renderMenuItem = ({ child }: RenderMenuItemProps): React.ReactNode => {
    if (!React.isValidElement(child)) return child;

    if (child.type === Link) {
      return React.cloneElement(child as React.ReactElement<any>, {
        ...(typeof child.props === 'object' ? child.props : {}),
        className: `block transition-colors ${(child.props as React.HTMLAttributes<HTMLElement>).className || ''}`
      });
    }

    const updatedChildren = React.Children.map((child.props as React.PropsWithChildren<any>).children, (grandChild) => {
      if (!React.isValidElement(grandChild)) return grandChild;

      if (grandChild.type === 'h3') {
        return React.cloneElement(grandChild as React.ReactElement<any>, {
          className: 'text-white font-medium mb-1',
          ...(typeof grandChild.props === 'object' ? grandChild.props : {})
        });
      }

      if (grandChild.type === 'p') {
        return React.cloneElement(grandChild as React.ReactElement<any>, {
          className: 'text-gray-400 text-sm',
          ...(typeof grandChild.props === 'object' ? grandChild.props : {})
        });
      }

      return grandChild;
    });

    return React.cloneElement(child, {
      ...(typeof child.props === 'object' ? child.props : {}),
      ...(child.props as React.PropsWithChildren<any>),
      children: updatedChildren
    });
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <button
        className={`
          flex items-center gap-2 cursor-pointer py-2 px-4
          focus:outline-none
          rounded-md
          ${isMobile ? 'w-full text-left' : ''}
          hover:bg-gray-800/50 transition-colors group
        `}
        onClick={onToggle}
        aria-expanded={showDropdown}
        aria-haspopup={hasPopup}
        aria-controls={`${text.toLowerCase()}-menu`}
      >
        <span className="text-white group-hover:text-blue-400 transition-colors">{text}</span>
        {hasPopup && (
          <ChevronDown 
            className={`w-4 h-4 text-white group-hover:text-blue-400 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        )}
      </button>

      {showDropdown && (
        <div
          id={`${text.toLowerCase()}-menu`}
          className={`
            ${isMobile ? 'w-full' : 'absolute top-full left-0'}
            z-50
          `}
        >
          {dropdown ? (
            isMobile ? (
              <div className="max-h-[60vh] overflow-y-auto">
                <MobilePlayDropdown />
              </div>
            ) : (
              <PlayDropdown />
            )
          ) : (
            <div className={`
              bg-black p-4 space-y-4
              ${!isMobile && 'shadow-lg min-w-[256px]'}
            `}>
              {React.Children.map(children, (child) => child && renderMenuItem({ child }))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDropdownToggle = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <nav role="navigation"
      aria-label="Main navigation" 
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled ? 'bg-black shadow-lg' : 'bg-black bg-opacity-95'}
      `}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6 items-center">
            <NavItem 
              text="Play" 
              dropdown 
              aria-haspopup={true}
              isOpen={activeDropdown === 'Play'}
              onToggle={() => handleDropdownToggle('Play')}
            />
            <NavItem 
              text="Participate" 
              aria-haspopup={true}
              isOpen={activeDropdown === 'Participate'}
              onToggle={() => handleDropdownToggle('Participate')}
            >
              <div className="absolute top-full left-0 bg-white shadow-lg p-4 w-64">
                <div className="space-y-4">
                  <div>
                    <Link href="https://playarena.in/academies/">
                    <h3 className="font-medium">Learn & Master</h3>
                    <p className="text-sm text-gray-600">Join one of our academies to learn And master a sport.</p>
                    </Link>
                  </div>
                  <div>
                    <Link href="https://playarena.in/event/">
                    <h3 className="font-medium">Events at PLaY</h3>
                    <p className="text-sm text-gray-600">Join the community to celebrate special moments. Screenings...</p>
                    </Link>
                  </div>
                </div>
              </div>
            </NavItem>
            <NavItem 
              text="Host" 
              aria-haspopup={true}
              isOpen={activeDropdown === 'Host'}
              onToggle={() => handleDropdownToggle('Host')}
            >
              <div className="absolute top-full left-0 bg-white shadow-lg p-4 w-64">
                <div className="space-y-4">
                  <div>
                    <Link href="https://playarena.in/birthdays/">
                    <h3 className="font-medium">Birthdays at PLaY</h3>
                    <p className="text-sm text-gray-600">Celebrate Memorable Birthdays Here!</p>
                    </Link>
                  </div>
                  <div>
                    <Link href="https://playarena.in/corporates-at-play/">
                    <h3 className="font-medium">Corporate events</h3>
                    <p className="text-sm text-gray-600">Dynamic events and experiences</p>
                    </Link>
                  </div>
                  <div>
                    <Link href="https://playarena.in/playdates/">
                    <h3 className="font-medium">Perfect Dates at PLaY</h3>
                    <p className="text-sm text-gray-600">Connecting with or without a reason to celebrate</p>
                    </Link>
                  </div>
                  <div>
                    <Link href="https://playarena.in/enquiry/">
                    <h3 className="font-medium">Plan your Event</h3>
                    <p className="text-sm text-gray-600">Fill out a form to make an enquiry</p>
                    </Link>
                  </div>
                </div>
              </div>
            </NavItem>
            <NavItem 
              text="F&B" 
              aria-haspopup={true}
              isOpen={activeDropdown === 'F&B'}
              onToggle={() => handleDropdownToggle('F&B')}
            >
  <div className="absolute top-full left-0 bg-white shadow-lg p-4 w-64">
    <div className="space-y-4">
      <div>
        <Link href="https://playarena.in/foodcourt/">
        <h3 className="font-medium">Food Court</h3>
        <p className="text-sm text-gray-600">
          From tasty continental bites to refreshing sips, dive into a fun-filled flavor fest.
        </p>
        </Link>
      </div>
      <div>
        <Link href="https://playarena.in/restaurant/restaurant-1/">
        <h3 className="font-medium">Restaurant</h3>
        <p className="text-sm text-gray-600">
          From tasty continental bites to refreshing sips, dive into a fun-filled flavor fest that’s sure to satisfy your cravings.
        </p>
        </Link>
      </div>
    </div>
  </div>
</NavItem>
          </div>

         <div className="hidden lg:flex gap-4">
  <Link 
    href="https://api.whatsapp.com/send/?phone=919900099922&text&type=phone_number&app_absent=0" 
    className="text-white hover:text-gray-300 transition-colors"
    aria-label="Contact us on WhatsApp"
  >
    <Phone className="w-6 h-6" aria-hidden="true" />
  </Link>
  <Link 
    href="https://www.google.com/maps/place/PLaY+Arena/@12.911395,77.6737242,1091m/data=!3m2!1%5B%E2%80%A6%5D1!16s%2Fg%2F124yf6tmx?entry=tts&g_ep=EgoyMDI0MDgyNi4wKgBIAVAD" 
    className="text-white hover:text-gray-300 transition-colors"
    aria-label="View PLaY Arena location on Google Maps"
  >
    <MapPin className="w-6 h-6" aria-hidden="true" />
  </Link>
</div>
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}
          `}
        >
          <div className="bg-black border-t border-gray-800">
            <NavItem 
              text="Play" 
              dropdown 
              isMobile 
              isOpen={activeDropdown === 'Play'}
              onToggle={() => handleDropdownToggle('Play')}
            />
            <NavItem 
              text="Participate" 
              isMobile
              isOpen={activeDropdown === 'Participate'}
              onToggle={() => handleDropdownToggle('Participate')}
            >
              <div className="bg-black p-4 space-y-4">
                <div>
                   <Link href="https://playarena.in/academies/">
                  <h3 className="text-white font-medium">Learn & Master</h3>
                  <p className="text-sm text-gray-400">Join one of our academies to learn And master a sport.</p>
                  </Link>
                </div>
                <div>
                  <Link href="https://playarena.in/event/">
                    <h3 className="text-white font-medium">Events at PLaY</h3>
                    <p className="text-sm text-gray-400">Join the community to celebrate special moments. Screenings...</p>
                    </Link>
                </div>
              </div>
            </NavItem>
             <NavItem 
              text="Host" 
              isMobile
              isOpen={activeDropdown === 'Host'}
              onToggle={() => handleDropdownToggle('Host')}
            >
              <div className="bg-black p-4 space-y-4">
                <div>
                  <Link href="https://playarena.in/birthdays/">
                    <h3 className="text-white font-medium">Birthdays at PLaY</h3>
                    <p className="text-sm text-gray-400">Celebrate Memorable Birthdays Here!</p>
                  </Link>
                </div>
                <div>
                  <Link href="https://playarena.in/corporates-at-play/">
                    <h3 className="text-white font-medium">Corporate events</h3>
                    <p className="text-sm text-gray-400">Dynamic events and experiences</p>
                    </Link>
                </div>
                <div>
                  <Link href="https://playarena.in/playdates/">
                    <h3 className="text-white font-medium">Perfect Dates at PLaY</h3>
                    <p className="text-sm text-gray-400">Connecting with or without a reason to celebrate</p>
                  </Link>
                </div>
                <div>
                  <Link href="https://playarena.in/enquiry/">
                    <h3 className="text-white font-medium">Plan your Event</h3>
                    <p className="text-sm text-gray-400">Fill out a form to make an enquiry</p>
                    </Link>
                </div>
              </div>
            </NavItem>
            <NavItem 
              text="F&B" 
              isMobile
              isOpen={activeDropdown === 'F&B'}
              onToggle={() => handleDropdownToggle('F&B')}
            >
              <div className="bg-black p-4 space-y-4">
                <div>
                  <Link href="https://playarena.in/foodcourt/">
                    <h3 className="text-white font-medium">Food Court</h3>
                    <p className="text-sm text-gray-400">
                      From tasty continental bites to refreshing sips, dive into a fun-filled flavor fest.
                    </p>
                    </Link>
                </div>
                <div>
                  <Link href="https://playarena.in/restaurant/restaurant-1/">
                    <h3 className="text-white font-medium">Restaurant</h3>
                    <p className="text-sm text-gray-400">
                      From tasty continental bites to refreshing sips, dive into a fun-filled flavor fest that's sure to satisfy your cravings.
                    </p>
                    </Link>
                </div>
              </div>
            </NavItem>
            <div className="flex flex-col gap-3 p-4 border-t border-gray-800">
              <Link href="https://api.whatsapp.com/send/?phone=919900099922&text&type=phone_number&app_absent=0" className="flex items-center gap-2 text-white hover:bg-gray-800 p-2 rounded-md">
                <Phone className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
              <Link href="https://www.google.com/maps/place/PLaY+Arena/@12.911395,77.6737242,1091m/data=!3m2!1%5B%E2%80%A6%5D1!16s%2Fg%2F124yf6tmx?entry=tts&g_ep=EgoyMDI0MDgyNi4wKgBIAVAD"  className="flex items-center gap-2 text-white hover:bg-gray-800 p-2 rounded-md">
                <MapPin className="w-5 h-5" />
                <span>Find Location</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

"use client"
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';

interface NavItemProps {
  text: string;
  children?: React.ReactNode;
  isMobile?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ text, children, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };
  
  return (
    <div 
      className="relative w-full"
      onMouseEnter={() => !isMobile && setIsOpen(true)} 
      onMouseLeave={() => !isMobile && setIsOpen(false)}
      onClick={handleClick}
    >
      <div className="flex items-center justify-between cursor-pointer py-2 px-4 hover:bg-gray-800 rounded-md">
        <span className="text-white">{text}</span>
        <ChevronDown 
          className={`w-4 h-4 text-white transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
      {isOpen && children && (
        <div className={`
          ${isMobile 
            ? 'bg-gray-900 mt-1 rounded-md w-full' 
            : 'absolute top-full left-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg'
          } 
          py-2 overflow-hidden
        `}>
          {children}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50
      transition-all duration-300
      ${isScrolled ? 'bg-black shadow-lg' : 'bg-black bg-opacity-95'}
    `}>
      <div className="max-w-7xl mx-auto">
        {/* Main Navbar */}
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6 items-center text-white font-normal text-base">
            <NavItem text="Play" />
            <NavItem text="Participate" />
            <NavItem text="Host" />
            <NavItem text="F&B" />
          </div>

          {/* Desktop Contact Icons */}
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
            className="lg:hidden text-white p-2 rounded-md hover:bg-gray-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`
            lg:hidden
            transition-all duration-300 ease-in-out
            bg-black border-t border-gray-800
            ${isOpen ? 'visible opacity-100' : 'invisible opacity-0 h-0'}
          `}
        >
          <div className="px-4 py-4 space-y-3">
            <NavItem text="Play" isMobile>
              <div className="px-4 py-2 text-white hover:bg-gray-800">
                Dropdown Item 1
              </div>
              <div className="px-4 py-2 text-white hover:bg-gray-800">
                Dropdown Item 2
              </div>
            </NavItem>
            <NavItem text="Participate" isMobile>
              <div className="px-4 py-2 text-white hover:bg-gray-800">
                Dropdown Item 1
              </div>
              <div className="px-4 py-2 text-white hover:bg-gray-800">
                Dropdown Item 2
              </div>
            </NavItem>
            <NavItem text="Host" isMobile>
              <div className="px-4 py-2 text-white hover:bg-gray-800">
                Dropdown Item 1
              </div>
              <div className="px-4 py-2 text-white hover:bg-gray-800">
                Dropdown Item 2
              </div>
            </NavItem>
            <NavItem text="F&B" isMobile>
              <div className="px-4 py-2 text-white hover:bg-gray-800">
                Dropdown Item 1
              </div>
              <div className="px-4 py-2 text-white hover:bg-gray-800">
                Dropdown Item 2
              </div>
            </NavItem>
            
            {/* Mobile Contact Buttons */}
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-800">
              <button className="flex items-center gap-2 text-white hover:bg-gray-800 p-2 rounded-md w-full">
                <Phone className="w-5 h-5" />
                <span>Contact Us</span>
              </button>
              <button className="flex items-center gap-2 text-white hover:bg-gray-800 p-2 rounded-md w-full">
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
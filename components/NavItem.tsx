import React, { useState } from 'react';

const NavItem = ({ label, children, hasDropdown = true }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center gap-2 cursor-pointer text-white hover:text-blue-400 transition-colors">
        <span className="text-base">{label}</span>
        {hasDropdown && (
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </div>

      {isOpen && children && (
        <div className="absolute left-0 mt-2 py-2 bg-white rounded-lg shadow-lg min-w-[200px] text-gray-800">
          {children}
        </div>
      )}
    </div>
  );
};

// Example dropdown item component for consistent styling
const DropdownItem = ({ children, onClick }) => (
  <div 
    className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors"
    onClick={onClick}
  >
    {children}
  </div>
);

// Export both components
export { NavItem, DropdownItem };

export default NavItem;
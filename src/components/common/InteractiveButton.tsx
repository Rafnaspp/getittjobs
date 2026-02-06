import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface InteractiveButtonProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

const InteractiveButton: React.FC<InteractiveButtonProps> = ({ label, children, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={toggleContent}
        className={`flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ${className}`}
        aria-expanded={isOpen}
        aria-controls="content-panel"
      >
        <span className="mr-2">{isOpen ? 'Hide Content' : 'Show Content'}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      <div
        id="content-panel"
        ref={contentRef}
        className={`absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg transform origin-top transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        role="region"
        aria-labelledby="content-title"
      >
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default InteractiveButton;
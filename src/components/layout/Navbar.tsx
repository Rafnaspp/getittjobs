'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navbarClasses = `fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
    scrolled 
      ? 'bg-white shadow-md py-4' 
      : isHomePage 
        ? 'bg-transparent py-6' 
        : 'bg-white shadow-md py-4'
  }`;

  const linkClasses = `transition-colors duration-300 font-bold uppercase tracking-wider text-sm ${
    scrolled || !isHomePage ? 'text-gray-900 hover:text-teal-600' : 'text-white hover:text-teal-200'
  }`;

  const dropdownClasses = `absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md overflow-hidden transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-top-left z-50 invisible group-hover:visible`;

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex flex-col" onClick={handleLinkClick}>
              <span className="text-4xl md:text-5xl font-black tracking-tighter leading-none">
                <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">GET</span>
                <span className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 bg-clip-text text-transparent">ITT</span>
              </span>
              <span className={`text-sm font-bold tracking-wider mt-1 uppercase ${
                scrolled || !isHomePage ? 'text-gray-600' : 'text-white'
              }`}>Making India Employed</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={linkClasses}>
              Home
            </Link>
            <div className="relative group">
              <button className={`flex items-center ${linkClasses}`}>
                Services
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className={dropdownClasses}>
                <Link href="/services/staffing" className="block px-4 py-2.5 text-gray-800 hover:bg-teal-50 hover:text-teal-600 uppercase tracking-wider text-sm">
                  Staffing
                </Link>
                <Link href="/services/recruitment-services" className="block px-4 py-2.5 text-gray-800 hover:bg-teal-50 hover:text-teal-600 uppercase tracking-wider text-sm">
                  Recruitment
                </Link>
                <Link href="/services/compliance-services" className="block px-4 py-2.5 text-gray-800 hover:bg-teal-50 hover:text-teal-600 uppercase tracking-wider text-sm">
                  Compliance
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className={`flex items-center ${linkClasses}`}>
                Industries 
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className={dropdownClasses}>
                <Link href="/industries/it" className="block px-4 py-2.5 text-gray-800 hover:bg-teal-50 hover:text-teal-600 uppercase tracking-wider text-sm">
                  Information Technology
                </Link>
                <Link href="/industries/banking" className="block px-4 py-2.5 text-gray-800 hover:bg-teal-50 hover:text-teal-600 uppercase tracking-wider text-sm">
                  Banking & Finance
                </Link>
                <Link href="/industries/retail" className="block px-4 py-2.5 text-gray-800 hover:bg-teal-50 hover:text-teal-600 uppercase tracking-wider text-sm">
                  Retail & E-commerce
                </Link>
                <Link href="/industries/healthcare" className="block px-4 py-2.5 text-gray-800 hover:bg-teal-50 hover:text-teal-600 uppercase tracking-wider text-sm">
                  Healthcare
                </Link>
                <Link href="/industries/manufacturing" className="block px-4 py-2.5 text-gray-800 hover:bg-teal-50 hover:text-teal-600 uppercase tracking-wider text-sm">
                  Manufacturing
                </Link>
              </div>
            </div>
            <Link
              href="/contact"
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={scrolled || !isHomePage ? 'text-gray-900' : 'text-white'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
            <div className="container mx-auto px-4 py-3">
              <Link
                href="/"
                className="block py-2 text-gray-900 hover:text-teal-600 border-b border-gray-100 font-bold uppercase tracking-wider text-sm"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <p className="block py-2 text-gray-900 hover:text-teal-600 border-b border-gray-100 font-bold uppercase tracking-wider text-sm">
                Services
              </p>
              <div className="py-2 border-b border-gray-100">
                <div className="space-y-2">
                  <Link href="/services/staffing" className="block text-gray-900 hover:text-teal-600 pl-4 uppercase tracking-wider text-sm" onClick={handleLinkClick}>
                    Staffing
                  </Link>
                  <Link href="/services/recruitment-services" className="block text-gray-900 hover:text-teal-600 pl-4 uppercase tracking-wider text-sm" onClick={handleLinkClick}>
                    Recruitment
                  </Link>
                  <Link href="/services/compliance-services" className="block text-gray-900 hover:text-teal-600 pl-4 uppercase tracking-wider text-sm" onClick={handleLinkClick}>
                    Compliance
                  </Link>
                </div>
              </div>
              <p className="block py-2 text-gray-900 hover:text-teal-600 border-b border-gray-100 font-bold uppercase tracking-wider text-sm">
                Industries
              </p>
              <div className="py-2 border-b border-gray-100">
                <div className="space-y-2">
                  <Link href="/industries/it" className="block text-gray-900 hover:text-teal-600 pl-4 uppercase tracking-wider text-sm" onClick={handleLinkClick}>
                    Information Technology
                  </Link>
                  <Link href="/industries/banking" className="block text-gray-900 hover:text-teal-600 pl-4 uppercase tracking-wider text-sm" onClick={handleLinkClick}>
                    Banking & Finance
                  </Link>
                  <Link href="/industries/retail" className="block text-gray-900 hover:text-teal-600 pl-4 uppercase tracking-wider text-sm" onClick={handleLinkClick}>
                    Retail & E-commerce
                  </Link>
                  <Link href="/industries/healthcare" className="block text-gray-900 hover:text-teal-600 pl-4 uppercase tracking-wider text-sm" onClick={handleLinkClick}>
                    Healthcare
                  </Link>
                  <Link href="/industries/manufacturing" className="block text-gray-900 hover:text-teal-600 pl-4 uppercase tracking-wider text-sm" onClick={handleLinkClick}>
                    Manufacturing
                  </Link>
                </div>
              </div>
              <div className="mt-4 mb-2">
                <Link
                  href="/contact"
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 inline-block w-full text-center uppercase tracking-wider text-sm"
                  onClick={handleLinkClick}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
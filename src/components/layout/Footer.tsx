import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const handleDownload = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services/staffing" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 inline-block">
                  Staffing Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/recruitment-services" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 inline-block">
                  Recruitment Services
                </Link>
              </li>
              <li>
                <Link href="/services/compliance-services" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 inline-block">
                  Compliance Services
                </Link>
              </li>
              <li>
                <div className="group relative">
                  <button className="text-gray-300 hover:text-teal-400 transition-colors duration-300 inline-block">
                    Reports
                  </button>
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-4">
                      <h5 className="text-gray-900 font-semibold mb-3">Available Reports</h5>
                      <ul className="space-y-2">
                        <li>
                          <button 
                            onClick={() => handleDownload('https://drive.google.com/file/d/1_-ygvWKsfh1V1YGMtx0WJ2M-UJGecaJZ/view?usp=sharing')}
                            className="text-gray-700 hover:text-teal-600 transition-colors duration-300 flex items-center w-full text-left"
                          >
                            Annual Reports
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleDownload('https://drive.google.com/file/d/1EH2c8dosAKpJiOHE1tIeUF-3V2YFqT5l/view?usp=drive_link')}
                            className="text-gray-700 hover:text-teal-600 transition-colors duration-300 flex items-center w-full text-left"
                          >
                            Industry Trends Reports
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Industries</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/industries/it" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 inline-block">
                  Information Technology
                </Link>
              </li>
              <li>
                <Link href="/industries/banking" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 inline-block">
                  Banking & Finance
                </Link>
              </li>
              <li>
                <Link href="/industries/retail" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 inline-block">
                  Retail & E-commerce
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 inline-block">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries/manufacturing" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 inline-block">
                  Manufacturing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-teal-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Mumbai, Maharashtra
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-teal-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">+91 8237550095</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-teal-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">HR@getittjobs.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-300">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
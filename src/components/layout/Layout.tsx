import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PopupContactForm from '../contact/PopupContactForm';
import { Plus } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />

      {/* Fixed Contact Button */}
      <button
        onClick={() => setIsContactFormOpen(true)}
        className="fixed bottom-8 right-8 bg-gray-900 hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 z-40 flex items-center gap-2"
      >
        Contact Us
        <Plus size={20} />
      </button>

      {/* Popup Contact Form */}
      <PopupContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </div>
  );
};

export default Layout;
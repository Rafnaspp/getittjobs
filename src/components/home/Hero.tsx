import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-16 md:pt-20 lg:pt-24 overflow-hidden">
      {/* Hero background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 h-[70vh] md:h-[80vh]" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
        role="img"
        aria-label="Professional team collaborating in a modern office environment"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-teal-900/90 mix-blend-multiply" />
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 h-[70vh] md:h-[80vh] flex items-center">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-none mb-4 md:mb-6 tracking-tighter">
            MAKING <span className="text-yellow-400">INDIA</span> EMPLOYED
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 md:mb-8 leading-tight max-w-3xl font-medium">
            Empowering businesses through <span className="text-yellow-400 font-bold">FAST-TRACK</span> talent delivery and strategic workforce solutions—connecting exceptional talent worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 md:mb-12 relative">
            {/* Subtle backdrop for better button visibility */}
            <div className="absolute -inset-4 bg-black/20 backdrop-blur-sm rounded-2xl -z-10 hidden sm:block" />
            <a 
              href="/contact" 
              className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white font-black px-6 py-3 md:px-8 md:py-4 rounded-full shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 text-center text-base md:text-lg uppercase tracking-wider border-2 border-yellow-400 relative z-10"
              aria-label="Start fast-track hiring process"
            >
              Fast-Track Hiring
            </a>
            <a 
              href="#services" 
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 font-black px-6 py-3 md:px-8 md:py-4 rounded-full shadow-2xl hover:shadow-gray-400/50 transition-all duration-300 text-center text-base md:text-lg uppercase tracking-wider border-2 border-gray-300 relative z-10"
              aria-label="View our recruitment services"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
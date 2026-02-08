import React from 'react';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 via-teal-900 to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-white"></div>
        <div className="absolute -left-20 top-20 w-60 h-60 rounded-full bg-white"></div>
        <div className="absolute right-20 bottom-20 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute -left-40 -bottom-40 w-80 h-80 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Ready to Experience Fast-Track Talent Solutions?
          </h2>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            Join us in our mission of making India employed through innovative and efficient workforce solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/contact" 
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center text-lg"
            >
              Start Hiring
            </Link>
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center text-lg"
            >
              Find Opportunities
            </Link>
            <Link 
              href="/contact" 
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center text-lg"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
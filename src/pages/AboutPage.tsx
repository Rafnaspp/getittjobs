import React from 'react';
import Mission from '../components/about/Mission';

const AboutPage = () => {
  return (
    <>
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">About Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn about our mission, vision and the values that drive us to connect talent with opportunity.
            </p>
          </div>
        </div>
      </div>
      <Mission />
    </>
  );
};

export default AboutPage;
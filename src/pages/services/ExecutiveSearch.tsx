import React from 'react';
import { Target, CheckCircle } from 'lucide-react';

const ExecutiveSearch = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Executive Search Services</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Strategic leadership recruitment for organizations seeking exceptional executive talent.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Finding Exceptional Leadership Talent</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our executive search service is designed to identify and attract top-tier leadership talent that can drive your organization's success and growth.
              </p>
              <div className="bg-teal-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Target className="text-teal-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900">Precision Recruitment</h3>
                </div>
                <p className="text-gray-600">
                  We employ a sophisticated, research-based approach to identify and evaluate executive talent that perfectly aligns with your organization's goals and culture.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Executive Search Process</h3>
              <div className="space-y-4">
                {[
                  "In-depth organizational analysis",
                  "Comprehensive market research",
                  "Strategic candidate identification",
                  "Rigorous evaluation process",
                  "Cultural fit assessment",
                  "Executive onboarding support"
                ].map((step, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-teal-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-600">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our Executive Search Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Industry Expertise",
                  description: "Deep understanding of leadership requirements across various sectors and functions."
                },
                {
                  title: "Global Network",
                  description: "Access to an extensive network of accomplished executives and industry leaders."
                },
                {
                  title: "Confidential Search",
                  description: "Discreet and professional handling of sensitive executive placements."
                },
                {
                  title: "Long-term Success",
                  description: "Focus on sustainable placements that drive organizational growth."
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-teal-600 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Leadership Team?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our executive search services can help you find the perfect leadership talent for your organization.
          </p>
          <a
            href="/contact"
            className="bg-white text-teal-600 hover:bg-teal-50 font-medium px-8 py-3 rounded-full inline-block transition-all duration-300"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSearch;
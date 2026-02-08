import React from 'react';
import { Search, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const RecruitmentServices = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Recruitment</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive recruitment solutions tailored to identify, attract, and secure the best talent for your organization.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">End-to-End Recruitment Excellence</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our recruitment services combine industry expertise, advanced sourcing strategies, and comprehensive evaluation processes to connect you with exceptional talent.
              </p>
              <div className="bg-teal-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Search className="text-teal-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900">Strategic Talent Acquisition</h3>
                </div>
                <p className="text-gray-600">
                  Leverage our expertise in identifying and attracting top talent through targeted recruitment strategies and industry networks.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Recruitment Process</h3>
              <div className="space-y-4">
                {[
                  "Comprehensive job analysis and requirement gathering",
                  "Strategic talent sourcing and headhunting",
                  "In-depth candidate screening and assessment",
                  "Technical and behavioral interviews",
                  "Background verification and reference checks",
                  "Offer management and negotiation support"
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
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our Recruitment Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Industry Expertise",
                  description: "Specialized recruiters with deep understanding of various sectors and roles."
                },
                {
                  title: "Quality Candidates",
                  description: "Rigorous screening process ensuring only the best candidates are presented."
                },
                {
                  title: "Time Efficiency",
                  description: "Streamlined recruitment process reducing time-to-hire significantly."
                },
                {
                  title: "Cost-Effective",
                  description: "Optimized recruitment costs with transparent pricing and guaranteed results."
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Recruitment Process?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Partner with us to access top talent and streamline your hiring process with our comprehensive recruitment solutions.
          </p>
          <Link
            href="/contact"
            className="bg-white text-teal-600 hover:bg-teal-50 font-medium px-8 py-3 rounded-full inline-block transition-all duration-300"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentServices;
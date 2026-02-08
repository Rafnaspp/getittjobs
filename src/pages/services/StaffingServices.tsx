import React from 'react';
import { Users, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const StaffingServices = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Staffing Solutions</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive staffing solutions to meet your workforce needs with flexibility and efficiency.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Workforce Solutions</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our staffing services provide comprehensive solutions to help you build and manage a skilled workforce that drives your business forward.
              </p>
              <div className="bg-teal-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Users className="text-teal-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900">Expert Talent Management</h3>
                </div>
                <p className="text-gray-600">
                  Access to a diverse pool of qualified professionals ready to contribute to your organization's success.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Staffing Process</h3>
              <div className="space-y-4">
                {[
                  "Comprehensive workforce planning",
                  "Talent pool development and management",
                  "Skill assessment and matching",
                  "Flexible staffing models",
                  "Performance monitoring",
                  "Ongoing support and optimization"
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
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Benefits of Our Staffing Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Workforce Flexibility",
                  description: "Adapt your workforce to changing business needs with flexible staffing solutions."
                },
                {
                  title: "Quality Talent",
                  description: "Access to pre-vetted professionals across various industries and skill sets."
                },
                {
                  title: "Cost Efficiency",
                  description: "Optimize staffing costs while maintaining high-quality workforce standards."
                },
                {
                  title: "Scalability",
                  description: "Easily scale your workforce up or down based on project requirements."
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Workforce?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our staffing solutions can help you build and maintain an effective workforce.
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

export default StaffingServices;
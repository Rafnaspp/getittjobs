import React from 'react';
import { Users, CheckCircle } from 'lucide-react';

const PermanentStaffing = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Permanent Staffing Solutions</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Build your dream team with our comprehensive permanent staffing solutions tailored to your organization's needs.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Permanent Staffing Services?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our permanent staffing solutions are designed to help you build a strong, capable, and committed workforce. We understand that the right talent can transform your business, which is why we take a strategic approach to permanent placements.
              </p>
              <div className="bg-teal-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Users className="text-teal-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900">Expert Talent Acquisition</h3>
                </div>
                <p className="text-gray-600">
                  Our experienced recruiters use industry-leading methodologies to identify, assess, and secure top talent for your organization.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Process</h3>
              <div className="space-y-4">
                {[
                  "Understanding your organizational culture and requirements",
                  "Comprehensive candidate screening and assessment",
                  "Skills and cultural fit evaluation",
                  "Background verification",
                  "Offer negotiation support",
                  "Post-placement follow-up"
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
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Benefits of Our Permanent Staffing Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Quality Talent Pool",
                  description: "Access to pre-screened, qualified candidates across various industries and expertise levels."
                },
                {
                  title: "Time and Cost Efficient",
                  description: "Streamlined recruitment process that saves your valuable time and resources."
                },
                {
                  title: "Industry Expertise",
                  description: "Specialized recruiters with deep understanding of your industry requirements."
                },
                {
                  title: "Long-term Success",
                  description: "Focus on matching candidates who will grow with your organization."
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Build Your Dream Team?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our permanent staffing solutions can help you find the perfect candidates for your organization.
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

export default PermanentStaffing;
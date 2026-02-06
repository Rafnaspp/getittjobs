import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComplianceServices = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Compliance</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ensuring your recruitment and staffing processes comply with all legal requirements and industry standards while protecting your organization.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Recruitment Compliance Solutions</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our specialized compliance services ensure your recruitment processes meet all regulatory requirements while maintaining fair hiring practices and protecting both employers and candidates.
              </p>
              <div className="bg-teal-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Shield className="text-teal-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900">Recruitment Risk Management</h3>
                </div>
                <p className="text-gray-600">
                  Comprehensive assessment and management of recruitment compliance risks, ensuring fair hiring practices and legal adherence throughout the staffing process.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Compliance Coverage</h3>
              <div className="space-y-4">
                {[
                  "Equal Employment Opportunity compliance",
                  "Background check regulations",
                  "Immigration and work authorization verification",
                  "Data protection and privacy compliance",
                  "Anti-discrimination policies",
                  "Fair recruitment practices"
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
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Invest in Compliance?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Legal Protection",
                  description: "Safeguard your organization from recruitment-related legal issues and discrimination claims."
                },
                {
                  title: "Fair Hiring Practices",
                  description: "Implement and maintain equitable recruitment processes that attract diverse talent."
                },
                {
                  title: "Documentation Management",
                  description: "Proper handling and storage of candidate data and recruitment documentation."
                },
                {
                  title: "Risk Mitigation",
                  description: "Proactive identification and prevention of potential compliance violations in hiring."
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
          <h2 className="text-3xl font-bold text-white mb-6">Ensure Compliant Recruitment Practices</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Partner with us to maintain compliant and ethical recruitment processes that protect your organization and enhance your hiring success.
          </p>
          <Link
            to="/contact"
            className="bg-white text-teal-600 hover:bg-teal-50 font-medium px-8 py-3 rounded-full inline-block transition-all duration-300"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComplianceServices;
import React from 'react';
import { Clock, CheckCircle } from 'lucide-react';

const ContractStaffing = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contract Staffing Solutions</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Flexible workforce solutions to meet your temporary and project-based staffing needs.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Flexible Staffing Solutions for Modern Businesses</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our contract staffing services provide the flexibility you need to manage workload fluctuations, special projects, and temporary resource requirements effectively.
              </p>
              <div className="bg-teal-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Clock className="text-teal-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900">Rapid Deployment</h3>
                </div>
                <p className="text-gray-600">
                  Quick access to qualified professionals who can hit the ground running and deliver results from day one.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Features</h3>
              <div className="space-y-4">
                {[
                  "Flexible contract durations",
                  "Pre-vetted professional contractors",
                  "Simplified billing and administration",
                  "Compliance management",
                  "Performance monitoring",
                  "Scalable workforce solutions"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-teal-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-600">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Advantages of Contract Staffing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Cost Efficiency",
                  description: "Reduce overhead costs and manage budgets more effectively with flexible staffing solutions."
                },
                {
                  title: "Immediate Availability",
                  description: "Quick access to skilled professionals for time-sensitive projects and requirements."
                },
                {
                  title: "Risk Mitigation",
                  description: "Reduced employment liabilities and simplified workforce management."
                },
                {
                  title: "Scalability",
                  description: "Easily scale your workforce up or down based on business needs."
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Flexible Staffing Solutions?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Contact us to discuss how our contract staffing services can help you maintain workforce flexibility and efficiency.
          </p>
          <a
            href="/contact"
            className="bg-white text-teal-600 hover:bg-teal-50 font-medium px-8 py-3 rounded-full inline-block transition-all duration-300"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContractStaffing;
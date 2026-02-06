import React from 'react';
import { ShoppingBag, Globe, LineChart, Users, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const RetailIndustry = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Retail & E-commerce</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Powering the future of integrated commerce with innovative talent solutions through 2025 and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Industry Overview</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The retail and e-commerce sector continues to evolve rapidly with the convergence of physical and digital shopping experiences. As consumers demand seamless omnichannel experiences and personalized services, organizations need talented professionals who can drive digital transformation while maintaining operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Market Trends Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Retail & E-commerce Trends 2025</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Globe size={24} />,
                  title: "Omnichannel Integration",
                  description: "95% of retailers implementing seamless online-offline experiences by 2025"
                },
                {
                  icon: <ShoppingBag size={24} />,
                  title: "AI-Powered Retail",
                  description: "80% adoption of AI for personalized shopping experiences through 2025"
                },
                {
                  icon: <LineChart size={24} />,
                  title: "Digital Transformation",
                  description: "100% growth in digital commerce roles projected by 2025"
                },
                {
                  icon: <Truck size={24} />,
                  title: "Last-Mile Innovation",
                  description: "70% increase in logistics technology positions through 2025"
                }
              ].map((trend, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-teal-600 mb-4">{trend.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{trend.title}</h3>
                  <p className="text-gray-600">{trend.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Retail Recruitment Services</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Technical Assessment</h3>
                <p className="text-gray-600 mb-4">
                  Our comprehensive assessment process includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Digital commerce platform expertise</li>
                  <li>Omnichannel operations capabilities</li>
                  <li>Customer experience management</li>
                  <li>Supply chain optimization skills</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Specialized Talent Pool</h3>
                <p className="text-gray-600 mb-4">
                  Access to pre-vetted professionals across:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>E-commerce Operations</li>
                  <li>Digital Marketing</li>
                  <li>Supply Chain Management</li>
                  <li>Retail Technology</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staffing Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Staffing Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Contract Staffing</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Seasonal retail staff</li>
                  <li>• E-commerce specialists</li>
                  <li>• Digital marketing experts</li>
                  <li>• Supply chain consultants</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Permanent Staffing</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Retail operations managers</li>
                  <li>• E-commerce directors</li>
                  <li>• Category managers</li>
                  <li>• Digital transformation leads</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Staffing Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">For Employers</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Flexible workforce scaling</li>
                    <li>• Seasonal staffing solutions</li>
                    <li>• Omnichannel expertise</li>
                    <li>• Cost-effective hiring</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">For Candidates</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Leading retail brands</li>
                    <li>• Career progression</li>
                    <li>• Skill enhancement</li>
                    <li>• Work-life balance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Industry Expertise",
                  description: "Deep understanding of retail operations and digital commerce."
                },
                {
                  title: "Quality Focus",
                  description: "Rigorous screening ensuring only top retail talent is presented."
                },
                {
                  title: "Fast-Track Hiring",
                  description: "Streamlined recruitment process reducing time-to-hire by 35%."
                },
                {
                  title: "Market Intelligence",
                  description: "Regular insights on retail trends and talent market dynamics."
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Transform Your Retail Workforce</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Partner with us to build a skilled team ready for the future of retail and e-commerce.
          </p>
          <Link
            to="/contact"
            className="bg-white text-teal-600 hover:bg-teal-50 font-medium px-8 py-3 rounded-full inline-block transition-all duration-300"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RetailIndustry;
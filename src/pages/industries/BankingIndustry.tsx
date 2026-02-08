import React from 'react';
import { Building, LineChart, Shield, Users } from 'lucide-react';
import Link from 'next/link';

const BankingIndustry = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Banking & Finance</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Connecting financial institutions with top talent in an evolving digital banking landscape through 2025 and beyond.
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
              The banking and finance sector is experiencing unprecedented transformation driven by digital innovation, regulatory changes, and evolving customer expectations. As financial institutions embrace digital transformation and fintech integration, the demand for specialized talent who can navigate this complex landscape while ensuring compliance and security has never been greater.
            </p>
          </div>
        </div>
      </section>

      {/* Market Trends Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Banking Sector Trends 2025</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Building size={24} />,
                  title: "Digital Banking",
                  description: "90% of banks accelerating digital transformation initiatives by 2025"
                },
                {
                  icon: <LineChart size={24} />,
                  title: "FinTech Integration",
                  description: "75% increase in demand for fintech expertise projected through 2025"
                },
                {
                  icon: <Shield size={24} />,
                  title: "Risk & Compliance",
                  description: "150% growth in regulatory technology positions expected by 2025"
                },
                {
                  icon: <Users size={24} />,
                  title: "Customer Experience",
                  description: "60% focus on digital customer experience roles through 2025"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Banking Recruitment Services</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Technical Assessment</h3>
                <p className="text-gray-600 mb-4">
                  Our comprehensive assessment process includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Financial technology competency evaluation</li>
                  <li>Regulatory knowledge assessment</li>
                  <li>Risk management capabilities</li>
                  <li>Digital banking expertise verification</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Specialized Talent Pool</h3>
                <p className="text-gray-600 mb-4">
                  Access to pre-vetted professionals across:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Digital Banking Operations</li>
                  <li>Risk and Compliance</li>
                  <li>Fintech Integration</li>
                  <li>Wealth Management</li>
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
                  <li>• Project-based financial analysts</li>
                  <li>• Interim risk managers</li>
                  <li>• Compliance consultants</li>
                  <li>• Digital banking specialists</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Permanent Staffing</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Investment banking professionals</li>
                  <li>• Risk & compliance officers</li>
                  <li>• Wealth management experts</li>
                  <li>• FinTech specialists</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Staffing Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">For Employers</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Regulatory compliant hiring</li>
                    <li>• Pre-screened financial talent</li>
                    <li>• Flexible workforce solutions</li>
                    <li>• Risk-managed staffing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">For Candidates</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Top-tier financial institutions</li>
                    <li>• Competitive packages</li>
                    <li>• Career advancement</li>
                    <li>• Professional development</li>
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
                  description: "Deep understanding of banking regulations and fintech innovations."
                },
                {
                  title: "Quality Focus",
                  description: "Rigorous screening ensuring only top banking talent is presented."
                },
                {
                  title: "Fast-Track Hiring",
                  description: "Streamlined recruitment process reducing time-to-hire by 40%."
                },
                {
                  title: "Compliance Assured",
                  description: "Complete verification of credentials and regulatory requirements."
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
          <h2 className="text-3xl font-bold text-white mb-6">Transform Your Financial Workforce</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Partner with us to build a skilled team ready for the future of banking and finance.
          </p>
          <Link
            href="/contact"
            className="bg-white text-teal-600 hover:bg-teal-50 font-medium px-8 py-3 rounded-full inline-block transition-all duration-300"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BankingIndustry;
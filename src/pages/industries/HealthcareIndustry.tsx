import React from 'react';
import { HeartPulse, Brain, Stethoscope, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const HealthcareIndustry = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Healthcare</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Empowering healthcare excellence through innovative staffing solutions through 2025 and beyond.
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
              The healthcare sector is experiencing unprecedented transformation with the integration of digital health technologies, telemedicine, and AI-driven diagnostics. As healthcare organizations adapt to these changes while maintaining the highest standards of patient care, the need for skilled professionals who can bridge traditional healthcare practices with innovative technologies has become critical.
            </p>
          </div>
        </div>
      </section>

      {/* Market Trends Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Healthcare Trends 2025</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Brain size={24} />,
                  title: "AI in Healthcare",
                  description: "85% of healthcare facilities implementing AI-assisted diagnostics by 2025"
                },
                {
                  icon: <HeartPulse size={24} />,
                  title: "Digital Health",
                  description: "200% growth in telemedicine and remote patient monitoring roles through 2025"
                },
                {
                  icon: <Stethoscope size={24} />,
                  title: "Precision Medicine",
                  description: "70% increase in genomics and personalized medicine positions by 2025"
                },
                {
                  icon: <Shield size={24} />,
                  title: "Healthcare Security",
                  description: "150% rise in healthcare cybersecurity and data protection roles through 2025"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Healthcare Recruitment Services</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Technical Assessment</h3>
                <p className="text-gray-600 mb-4">
                  Our comprehensive assessment process includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Clinical expertise evaluation</li>
                  <li>Digital health technology competency</li>
                  <li>Healthcare compliance knowledge</li>
                  <li>Patient care best practices</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Specialized Talent Pool</h3>
                <p className="text-gray-600 mb-4">
                  Access to pre-vetted professionals across:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Clinical Practice</li>
                  <li>Healthcare Technology</li>
                  <li>Healthcare Administration</li>
                  <li>Medical Research</li>
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
                  <li>• Locum healthcare professionals</li>
                  <li>• Temporary medical staff</li>
                  <li>• Healthcare IT consultants</li>
                  <li>• Clinical specialists</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Permanent Staffing</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Medical practitioners</li>
                  <li>• Healthcare administrators</li>
                  <li>• Clinical research professionals</li>
                  <li>• Healthcare technology experts</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Staffing Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">For Employers</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Credentialed healthcare staff</li>
                    <li>• Compliance-assured hiring</li>
                    <li>• Flexible staffing solutions</li>
                    <li>• Quality-focused recruitment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">For Candidates</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Premier healthcare institutions</li>
                    <li>• Competitive benefits</li>
                    <li>• Professional development</li>
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
                  description: "Deep understanding of healthcare regulations and practices."
                },
                {
                  title: "Quality Focus",
                  description: "Rigorous screening ensuring only top healthcare talent is presented."
                },
                {
                  title: "Fast-Track Hiring",
                  description: "Streamlined recruitment process reducing time-to-hire by 30%."
                },
                {
                  title: "Compliance Assured",
                  description: "Complete verification of medical credentials and licenses."
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
          <h2 className="text-3xl font-bold text-white mb-6">Transform Your Healthcare Team</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Partner with us to build a skilled team ready for the future of healthcare.
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

export default HealthcareIndustry;
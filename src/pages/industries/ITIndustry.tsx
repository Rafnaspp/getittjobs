import React from 'react';
import { Server, Code, Globe, Shield, Cpu } from 'lucide-react';
import Link from 'next/link';

const ITIndustry = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Information Technology</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Powering digital transformation through strategic IT talent solutions through 2025 and beyond.
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
              The IT industry continues to be the backbone of digital transformation across sectors. With rapid technological advancements and increasing digitalization, organizations are seeking specialized talent to drive innovation and maintain competitive advantage. Our deep understanding of the IT landscape enables us to connect businesses with skilled professionals who can navigate the complexities of modern technology and deliver impactful solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Trends Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">IT Market Trends 2025</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Code size={24} />,
                  title: "AI & Machine Learning",
                  description: "70% growth in AI-related positions projected through 2025, with emphasis on deep learning, natural language processing, and computer vision specialists."
                },
                {
                  icon: <Globe size={24} />,
                  title: "Cloud Computing",
                  description: "85% of enterprises adopting multi-cloud strategies by 2025, driving demand for cloud architects and DevOps engineers."
                },
                {
                  icon: <Shield size={24} />,
                  title: "Cybersecurity",
                  description: "200% increase in cybersecurity positions expected through 2025, focusing on zero-trust architecture and AI-driven security solutions."
                },
                {
                  icon: <Cpu size={24} />,
                  title: "Edge Computing",
                  description: "50% rise in edge computing implementations by 2025, creating new roles in IoT and distributed systems."
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

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our IT Recruitment Services</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Technical Assessment</h3>
                <p className="text-gray-600 mb-4">
                  Our comprehensive technical assessment process includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Live coding assessments and problem-solving challenges</li>
                  <li>Architecture and system design evaluations</li>
                  <li>Technical stack-specific assessments</li>
                  <li>Soft skills and team collaboration evaluation</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Specialized Talent Pool</h3>
                <p className="text-gray-600 mb-4">
                  Access to pre-vetted professionals across:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Full-stack Development (MERN, MEAN, Java)</li>
                  <li>Cloud Architecture (AWS, Azure, GCP)</li>
                  <li>Data Science and AI/ML Engineering</li>
                  <li>DevOps and SRE roles</li>
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
                  <li>• Short-term project resources</li>
                  <li>• Flexible IT team scaling</li>
                  <li>• Specialized tech consultants</li>
                  <li>• Project-based developers</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Permanent Staffing</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Full-stack development teams</li>
                  <li>• IT leadership roles</li>
                  <li>• Technical architects</li>
                  <li>• Specialized developers</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Staffing Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">For Employers</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Reduced time-to-hire by 40%</li>
                    <li>• Pre-vetted IT professionals</li>
                    <li>• Flexible team scaling</li>
                    <li>• Cost-effective solutions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">For Candidates</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Access to top tech companies</li>
                    <li>• Competitive compensation</li>
                    <li>• Career growth opportunities</li>
                    <li>• Skill development support</li>
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
                  title: "Technical Expertise",
                  description: "Our recruiters have hands-on experience in technology, ensuring accurate skill assessment and matching."
                },
                {
                  title: "Fast-Track Hiring",
                  description: "Streamlined process reducing time-to-hire by 40% compared to traditional recruitment methods."
                },
                {
                  title: "Quality Assurance",
                  description: "Rigorous screening process ensuring only the top 5% of tech talent is presented."
                },
                {
                  title: "Market Intelligence",
                  description: "Regular insights on technology trends, salary benchmarks, and skill demand patterns."
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Build Your Tech Team?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you find and hire the best IT talent for your organization.
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

export default ITIndustry;
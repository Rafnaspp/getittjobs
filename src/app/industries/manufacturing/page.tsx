import { Factory, Cpu, LineChart, Shield } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manufacturing Recruitment | GETITT - Industrial Staffing',
  description: 'Expert recruitment solutions for the manufacturing sector. Find qualified engineers, technicians, and production professionals.',
  alternates: {
    canonical: 'https://getittjobs.com/industries/manufacturing',
  },
}

export default function ManufacturingIndustry() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Manufacturing</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Empowering Industry 4.0 with advanced manufacturing talent solutions through 2025 and beyond.
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
              The manufacturing sector is undergoing a profound transformation with the advent of Industry 4.0, smart manufacturing, and sustainable practices. As automation and digitalization reshape production processes, organizations need skilled professionals who can navigate this evolving landscape while maintaining operational excellence and driving innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Market Trends Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Manufacturing Trends 2025</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Cpu size={24} />,
                  title: "Smart Manufacturing",
                  description: "80% of manufacturers implementing IoT and AI-driven processes by 2025"
                },
                {
                  icon: <Factory size={24} />,
                  title: "Sustainable Production",
                  description: "65% increase in green manufacturing initiatives through 2025"
                },
                {
                  icon: <LineChart size={24} />,
                  title: "Digital Twin Technology",
                  description: "90% adoption of digital twin technology in large manufacturing by 2025"
                },
                {
                  icon: <Shield size={24} />,
                  title: "Cybersecurity",
                  description: "150% growth in OT security positions through 2025"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Manufacturing Recruitment Services</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Technical Assessment</h3>
                <p className="text-gray-600 mb-4">
                  Our comprehensive technical assessment process includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Advanced manufacturing skills evaluation</li>
                  <li>Industry 4.0 competency assessment</li>
                  <li>Process optimization capabilities</li>
                  <li>Technical knowledge verification</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Specialized Talent Pool</h3>
                <p className="text-gray-600 mb-4">
                  Access to pre-vetted professionals across:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Advanced Manufacturing Operations</li>
                  <li>Quality Control and Assurance</li>
                  <li>Industrial Automation</li>
                  <li>Supply Chain Management</li>
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
                  <li>• Project-based manufacturing experts</li>
                  <li>• Temporary production staff</li>
                  <li>• Industrial automation specialists</li>
                  <li>• Quality control professionals</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Permanent Staffing</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Production managers</li>
                  <li>• Process engineers</li>
                  <li>• Quality assurance leads</li>
                  <li>• Manufacturing technologists</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Staffing Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">For Employers</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Skilled manufacturing talent</li>
                    <li>• Flexible workforce solutions</li>
                    <li>• Industry 4.0 expertise</li>
                    <li>• Quality-focused recruitment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">For Candidates</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Leading manufacturing firms</li>
                    <li>• Career advancement</li>
                    <li>• Skill development</li>
                    <li>• Competitive benefits</li>
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
                  description: "Deep understanding of manufacturing processes and Industry 4.0 requirements."
                },
                {
                  title: "Quality Focus",
                  description: "Rigorous screening ensuring only top manufacturing talent is presented."
                },
                {
                  title: "Fast-Track Hiring",
                  description: "Streamlined recruitment process reducing time-to-hire by 45%."
                },
                {
                  title: "Compliance Assured",
                  description: "Complete verification of certifications and safety credentials."
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
          <h2 className="text-3xl font-bold text-white mb-6">Transform Your Manufacturing Workforce</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Partner with us to build a skilled team ready for the future of manufacturing.
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
  )
}

import { Mail, Phone } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | GETITT',
  description: 'Review GETITT\'s terms of service for information about using our recruitment and staffing services.',
  alternates: {
    canonical: 'https://getittjobs.com/terms-of-service',
  },
}

export default function TermsOfService() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 via-teal-900 to-gray-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Terms of Service
            </h1>
            <p className="text-xl text-teal-100">Last updated: January 2024</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="space-y-12">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  1. Agreement to Terms
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed">
                    By accessing or using GETITT's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
                  </p>
                </div>
              </section>

              {/* Use License */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  2. Use License
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">Permission is granted to temporarily access our services for personal, non-commercial use subject to the following conditions:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>You must not modify or copy our materials</li>
                    <li>You must not use the materials for commercial purposes</li>
                    <li>You must not attempt to reverse engineer any software</li>
                    <li>You must not remove any copyright or proprietary notations</li>
                  </ul>
                </div>
              </section>

              {/* User Responsibilities */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  3. User Responsibilities
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">As a user of our services, you are responsible for:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Maintaining accurate and up-to-date information</li>
                    <li>Protecting your account credentials</li>
                    <li>Complying with all applicable laws and regulations</li>
                    <li>Using the services in a professional manner</li>
                    <li>Respecting intellectual property rights</li>
                  </ul>
                </div>
              </section>

              {/* Service Limitations */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  4. Service Limitations
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">We strive to provide reliable services but cannot guarantee:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Continuous, uninterrupted access to services</li>
                    <li>Employment or hiring success</li>
                    <li>Accuracy of third-party information</li>
                    <li>Specific outcomes or results</li>
                  </ul>
                </div>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  5. Intellectual Property
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700">
                    All content and materials available on GETITT, including but not limited to text, graphics, logos, button icons, images, audio clips, data compilations, and software, are the property of GETITT or its content suppliers and protected by international copyright laws.
                  </p>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  6. Limitation of Liability
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700">
                    GETITT shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or any content provided therein.
                  </p>
                </div>
              </section>

              {/* Termination */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  7. Termination
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700">
                    We reserve the right to terminate or suspend access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                  </p>
                </div>
              </section>

              {/* Changes to Terms */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  8. Changes to Terms
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700">
                    We reserve the right to modify or replace these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of the service constitutes acceptance of the modified terms.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  9. Contact Information
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-6">
                    For questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="text-teal-600 w-5 h-5 mr-3" />
                      <a href="mailto:HR@getittjobs.com" className="text-teal-600 hover:text-teal-700 transition-colors">
                        HR@getittjobs.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="text-teal-600 w-5 h-5 mr-3" />
                      <a href="tel:+918237550095" className="text-teal-600 hover:text-teal-700 transition-colors">
                        +91 8237550095
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

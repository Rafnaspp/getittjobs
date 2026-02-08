import { Mail, Phone } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer | GETITT',
  description: 'Read GETITT\'s disclaimer regarding the use of our recruitment services and website information.',
  alternates: {
    canonical: 'https://getittjobs.com/disclaimer',
  },
}

export default function Disclaimer() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 via-teal-900 to-gray-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Disclaimer
            </h1>
            <p className="text-xl text-teal-100">Last updated: January 2024</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="space-y-12">
              {/* General Information */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  1. General Information
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed">
                    The information provided on GETITT's website is for general informational purposes only. While we strive to keep information accurate and up-to-date, we make no representations or warranties of any kind about the completeness, accuracy, reliability, suitability, or availability of the information.
                  </p>
                </div>
              </section>

              {/* No Employment Guarantee */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  2. No Employment Guarantee
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    GETITT acts as a facilitator between job seekers and employers. We do not guarantee:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Employment or job placement</li>
                    <li>Hiring success for employers</li>
                    <li>Accuracy of job postings or candidate information</li>
                    <li>Specific salary or compensation</li>
                  </ul>
                </div>
              </section>

              {/* Third-Party Content */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  3. Third-Party Content
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    Our website may contain links to third-party websites or content. We are not responsible for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Content of external links</li>
                    <li>Accuracy of third-party information</li>
                    <li>Privacy practices of other websites</li>
                  </ul>
                </div>
              </section>

              {/* Professional Advice */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  4. Professional Advice
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700">
                    Information provided should not be construed as professional advice. Users should consult appropriate professionals for specific advice tailored to their situation.
                  </p>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  5. Limitation of Liability
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700">
                    GETITT shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of our services or information provided therein.
                  </p>
                </div>
              </section>

              {/* Changes to Disclaimer */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  6. Changes to Disclaimer
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700">
                    We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting on the website.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  7. Contact Information
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-6">
                    For questions about this disclaimer, please contact us at:
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

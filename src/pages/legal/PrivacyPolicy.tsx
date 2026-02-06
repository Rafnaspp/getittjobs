import React from 'react';
import { Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 via-teal-900 to-gray-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Privacy Policy
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
                  1. Introduction
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed">
                    GETITT ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                  </p>
                </div>
              </section>

              {/* Information Collection */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  2. Information We Collect
                </h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">2.1 Personal Information</h3>
                    <p className="text-gray-700 mb-4">We may collect:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Name and contact information</li>
                      <li>Professional and employment information</li>
                      <li>Educational background</li>
                      <li>Resume/CV and job history</li>
                      <li>Login credentials</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">2.2 Usage Information</h3>
                    <p className="text-gray-700 mb-4">We automatically collect:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>IP address and device information</li>
                      <li>Browser type and settings</li>
                      <li>Usage patterns and preferences</li>
                      <li>Log data and analytics</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Information Usage */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  3. How We Use Your Information
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">We use collected information to:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Provide and improve our services</li>
                    <li>Process job applications</li>
                    <li>Match candidates with employers</li>
                    <li>Communicate with users</li>
                    <li>Analyze and enhance user experience</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </section>

              {/* Information Sharing */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  4. Information Sharing
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">We may share your information with:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Potential employers (with your consent)</li>
                    <li>Service providers and partners</li>
                    <li>Legal authorities when required</li>
                  </ul>
                </div>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  5. Data Security
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700">
                    We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure.
                  </p>
                </div>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  6. Your Rights
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Withdraw consent</li>
                  </ul>
                </div>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  7. Cookies and Tracking
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700">
                    We use cookies and similar technologies to enhance user experience and collect usage information. You can control cookie settings through your browser preferences.
                  </p>
                </div>
              </section>

              {/* Third-Party Links */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  8. Third-Party Links
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700">
                    Our website may contain links to third-party websites. We are not responsible for their privacy practices or content.
                  </p>
                </div>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  9. Children's Privacy
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700">
                    Our services are not intended for children under 13. We do not knowingly collect information from children under 13.
                  </p>
                </div>
              </section>

              {/* Policy Changes */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  10. Changes to Privacy Policy
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700">
                    We may update this Privacy Policy periodically. We will notify users of material changes through our website or email.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  11. Contact Information
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-6">
                    For privacy-related questions or concerns, contact us at:
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
  );
};

export default PrivacyPolicy;
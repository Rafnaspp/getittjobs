import ContactForm from '@/components/contact/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact GETITT - Get Fast-Track Recruitment Solutions',
  description: 'Contact GETITT for fast-track recruitment and staffing solutions. Connect with our expert team for your hiring needs across India.',
  alternates: {
    canonical: 'https://getittjobs.com/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <div className="bg-gray-900 pt-48 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're here to help you with your staffing and recruitment needs. Get in touch with our team today.
            </p>
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  )
}

import React from 'react';
import ContactForm from '../components/contact/ContactForm';

const ContactPage = () => {
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
  );
};

export default ContactPage;
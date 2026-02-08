'use client'

import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    city: '',
    state: '',
    location: '',
    currentCTC: '',
    message: '',
    cv: null as File | null,
    type: 'employer'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size should not exceed 5MB');
        e.target.value = '';
        return;
      }
      // Check file type
      if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
        toast.error('Please upload PDF or Word documents only');
        e.target.value = '';
        return;
      }
      setFormData(prev => ({ ...prev, cv: file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formRef.current) {
        throw new Error('Form element not found');
      }

      // Send email using EmailJS
      const templateId = formData.type === 'jobseeker' ? 'template_xn4wdmp' : 
                        formData.type === 'employer' ? 'template_ay4muae' : 'template_ay4muae';
      
      await emailjs.sendForm(
        'service_gq6irkd',
        templateId,
        formRef.current,
        '5-8K1_dgT5fyesyZQ'
      );

      toast.success('Thank you for your message. We will contact you shortly!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        designation: '',
        city: '',
        state: '',
        location: '',
        currentCTC: '',
        message: '',
        cv: null,
        type: 'employer'
      });

      // Reset file input
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }

    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('There was an error sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-gray-50">
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Thank you for your interest in GETITT!</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Whether you're looking to hire talent, find a job, or simply learn more about our services, we're here to help. Reach out to us using any of the methods below.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-teal-100 text-teal-600 p-3 rounded-full mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">
                      +91 8237550095
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal-100 text-teal-600 p-3 rounded-full mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Official Email</h3>
                    <p className="text-gray-600">
                      HR@getittjobs.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal-100 text-teal-600 p-3 rounded-full mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600">
                      Dynasty Business Park, Mathuradas Vasantji Road,<br />
                      JB Nagar, Mumbai, Maharashtra 400059
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-xl mb-4 text-gray-900">Office Hours</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Weekdays</h4>
                    <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Saturday</h4>
                    <p className="text-gray-600">10:00 AM - 4:00 PM</p>
                  </div>
                  <div className="col-span-2">
                    <h4 className="font-medium text-gray-900 mb-1">Sunday</h4>
                    <p className="text-gray-600">Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h3>
              
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">I am a/an*</label>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center cursor-pointer">
                      <input 
                        type="radio" 
                        name="type" 
                        value="employer"
                        checked={formData.type === 'employer'} 
                        onChange={handleChange}
                        className="sr-only"
                        required
                      />
                      <span className={`px-4 py-2 rounded-full border ${formData.type === 'employer' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white text-gray-700 border-gray-300'}`}>
                        Employer
                      </span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input 
                        type="radio" 
                        name="type" 
                        value="jobseeker"
                        checked={formData.type === 'jobseeker'} 
                        onChange={handleChange}
                        className="sr-only"
                        required
                      />
                      <span className={`px-4 py-2 rounded-full border ${formData.type === 'jobseeker' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white text-gray-700 border-gray-300'}`}>
                        Job Seeker
                      </span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input 
                        type="radio" 
                        name="type" 
                        value="other"
                        checked={formData.type === 'other'} 
                        onChange={handleChange}
                        className="sr-only"
                        required
                      />
                      <span className={`px-4 py-2 rounded-full border ${formData.type === 'other' ? 'bg-teal-600 text-white border-teal-600' : 'bg-white text-gray-700 border-gray-300'}`}>
                        Other
                      </span>
                    </label>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      {formData.type === 'jobseeker' ? 'Email ID*' : 'Business Email*'}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all duration-300"
                      placeholder="Your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all duration-300"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                {formData.type === 'jobseeker' ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City*</label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all duration-300"
                          placeholder="Your city"
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-gray-700 font-medium mb-2">State*</label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all duration-300"
                          placeholder="Your state"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="location" className="block text-gray-700 font-medium mb-2">Location*</label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all duration-300"
                          placeholder="Your preferred location"
                        />
                      </div>
                      <div>
                        <label htmlFor="currentCTC" className="block text-gray-700 font-medium mb-2">Current CTC*</label>
                        <input
                          type="text"
                          id="currentCTC"
                          name="currentCTC"
                          value={formData.currentCTC}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all duration-300"
                          placeholder="Your current CTC"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="designation" className="block text-gray-700 font-medium mb-2">Designation*</label>
                      <input
                        type="text"
                        id="designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all duration-300"
                        placeholder="Your current designation"
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="cv" className="block text-gray-700 font-medium mb-2">Upload CV*</label>
                      <input
                        type="file"
                        id="cv"
                        name="cv"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all duration-300"
                      />
                      <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max size: 5MB)</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company Name*</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required={formData.type === 'employer'}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all duration-300"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="designation" className="block text-gray-700 font-medium mb-2">Designation</label>
                        <input
                          type="text"
                          id="designation"
                          name="designation"
                          value={formData.designation}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all duration-300"
                          placeholder="Your designation"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message*</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all duration-300 resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                  </>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
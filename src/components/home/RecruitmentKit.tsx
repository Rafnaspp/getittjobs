import React, { useState } from 'react';
import { FileCheck, Users, ClipboardCheck, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecruitmentKit = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-teal-600"></div>
        <div className="absolute -left-20 top-20 w-60 h-60 rounded-full bg-blue-600"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              {/* Content Side */}
              <div className="p-8 md:p-12">
                <div className="inline-block bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  FREE RECRUITMENT KIT
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Supercharge Your Hiring Process
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Users className="text-teal-600 w-5 h-5 mt-1 mr-3" />
                    <p className="text-gray-600">Try Before You Hire: <strong>2 Positions</strong> Fully Covered with Triple Screening</p>
                  </div>
                  <div className="flex items-start">
                    <FileCheck className="text-teal-600 w-5 h-5 mt-1 mr-3" />
                    <p className="text-gray-600">Professional Job Description Auditing & Drafting</p>
                  </div>
                  <div className="flex items-start">
                    <ClipboardCheck className="text-teal-600 w-5 h-5 mt-1 mr-3" />
                    <p className="text-gray-600">Comprehensive HR Manpower Auditing</p>
                  </div>
                  <div className="flex items-start">
                    <FileText className="text-teal-600 w-5 h-5 mt-1 mr-3" />
                    <p className="text-gray-600">Essential HR Policy Pack included</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Link
                    to="/contact"
                    className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
                  >
                    Get Free Kit
                  </Link>
                </div>
              </div>

              {/* Image Side */}
              <div 
                className="relative h-full min-h-[300px] bg-cover bg-center transform transition-transform duration-700 ease-out"
                style={{ 
                  backgroundImage: "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                  transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-transparent mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentKit;
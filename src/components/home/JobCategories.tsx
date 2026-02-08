import React from 'react';
import { Code, Building2, Factory, HeartPulse, Briefcase } from 'lucide-react';
import Link from 'next/link';

interface CategoryProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  openings: number;
}

const JobCategory: React.FC<CategoryProps> = ({ icon, title, description, openings }) => (
  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border-b-4 border-teal-600">
    <div className="p-4 sm:p-6">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-teal-50 to-blue-50 text-teal-600 flex items-center justify-center transform rotate-3">
          {icon}
        </div>
        <div className="ml-3 sm:ml-4">
          <h3 className="font-bold text-lg sm:text-xl text-gray-900">{title}</h3>
          <p className="text-teal-600 font-medium text-sm sm:text-base">{openings}+ urgent openings</p>
        </div>
      </div>
      <p className="text-gray-600 mb-4 text-sm sm:text-base">{description}</p>
      <Link 
        href="/contact" 
        className="inline-flex items-center text-teal-600 font-bold hover:text-teal-700 transition-colors text-sm sm:text-base"
      >
        Fast-Track Application →
      </Link>
    </div>
  </div>
);

const JobCategories = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">High-Priority Sectors</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Fast-track your career in India's most dynamic sectors. Immediate opportunities available with rapid placement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <JobCategory 
            icon={<Code size={24} />}
            title="Technology"
            description="Immediate openings in software development, IT services, and digital transformation."
            openings={250}
          />
          
          <JobCategory 
            icon={<Factory size={24} />}
            title="Manufacturing"
            description="Urgent positions in production, quality control, and industrial operations."
            openings={180}
          />
          
          <JobCategory 
            icon={<HeartPulse size={24} />}
            title="Healthcare"
            description="Critical roles in healthcare services, medical technology, and patient care."
            openings={150}
          />
          
          <JobCategory 
            icon={<Building2 size={24} />}
            title="Infrastructure"
            description="Essential positions in construction, urban development, and project management."
            openings={200}
          />
          
          <JobCategory 
            icon={<Briefcase size={24} />}
            title="Professional Services"
            description="Key opportunities in consulting, finance, and business operations."
            openings={120}
          />
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/contact" 
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-block text-sm sm:text-base uppercase tracking-wider"
          >
            Fast-Track Your Career Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
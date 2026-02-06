import React from 'react';
import { Users, FileCheck, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => (
  <Link to={link} className="block">
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-teal-600 h-full">
      <div className="bg-gradient-to-br from-teal-50 to-blue-50 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-6 text-teal-600 transform rotate-3">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-base md:text-lg text-gray-600 leading-relaxed">{description}</p>
    </div>
  </Link>
);

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">Fast-Track Solutions</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Delivering efficient and strategic workforce solutions that drive business success through rapid talent acquisition and placement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ServiceCard 
            icon={<Users size={40} />}
            title="Staffing"
            description="Comprehensive staffing solutions to meet your workforce needs with flexibility and efficiency."
            link="/services/staffing"
          />

          <ServiceCard 
            icon={<Search size={40} />}
            title="Recruitment"
            description="End-to-end recruitment solutions with comprehensive candidate sourcing, screening, and selection processes."
            link="/services/recruitment-services"
          />

          <ServiceCard 
            icon={<FileCheck size={40} />}
            title="Compliance"
            description="Fast-track compliance solutions ensuring your hiring processes meet all legal requirements efficiently."
            link="/services/compliance-services"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
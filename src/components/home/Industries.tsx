import React from 'react';
import { Server, Building, ShoppingBag, HeartPulse, Cpu } from 'lucide-react';

interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon, title, className }) => (
  <div className={`bg-white rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-md hover:shadow-lg transition-all duration-300 ${className}`}>
    <div className="mb-4 text-teal-600">
      {icon}
    </div>
    <h3 className="font-medium text-gray-900">{title}</h3>
  </div>
);

const Industries = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Industries We Serve</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            We provide tailored staffing solutions across diverse sectors, understanding the unique requirements and challenges of each industry.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <IndustryCard 
            icon={<Server size={32} />}
            title="Information Technology"
          />
          
          <IndustryCard 
            icon={<Building size={32} />}
            title="Banking & Finance"
          />
          
          <IndustryCard 
            icon={<ShoppingBag size={32} />}
            title="Retail & E-commerce"
          />
          
          <IndustryCard 
            icon={<HeartPulse size={32} />}
            title="Healthcare"
          />

          <IndustryCard 
            icon={<Cpu size={32} />}
            title="Manufacturing"
          />
        </div>
      </div>
    </section>
  );
};

export default Industries;
import React from 'react';
import { Users, Building2, TrendingUp, Clock } from 'lucide-react';

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="flex items-start">
      <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-3 rounded-lg text-teal-600">
        {icon}
      </div>
      <div className="ml-4">
        <div className="font-bold text-xl text-gray-900 mb-2">{title}</div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const GrowthMetrics = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-teal-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-white"></div>
        <div className="absolute -left-20 top-20 w-60 h-60 rounded-full bg-white"></div>
        <div className="absolute right-20 bottom-20 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute -left-40 -bottom-40 w-80 h-80 rounded-full bg-white"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Commitment</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 leading-relaxed">
            As a new force in India's employment landscape, we're committed to delivering exceptional value through our innovative approach to talent acquisition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MetricCard
            icon={<Clock size={24} />}
            title="Fast-Track Response"
            description="We guarantee initial responses within 24 hours, ensuring swift action on your staffing needs."
          />
          
          <MetricCard
            icon={<Users size={24} />}
            title="Dedicated Team"
            description="Our experienced recruitment specialists are ready to handle your talent requirements with precision."
          />
          
          <MetricCard
            icon={<TrendingUp size={24} />}
            title="Quality Assurance"
            description="Rigorous screening process to ensure only the most qualified candidates are presented."
          />
          
          <MetricCard
            icon={<Building2 size={24} />}
            title="Pan-India Network"
            description="Access to talent pools across major cities and emerging markets in India."
          />
        </div>

        <div className="mt-16 text-center">
          <a 
            href="/contact" 
            className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-block text-lg"
          >
            Start Your Journey With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default GrowthMetrics;
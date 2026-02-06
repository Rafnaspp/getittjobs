import React from 'react';
import { Target, Users, TrendingUp, Globe } from 'lucide-react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
    <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-teal-600">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Mission = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Mission Statement */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 leading-relaxed">
            To make India employed again. Our aim is to empower businesses across all sectors and industries by delivering the right talent efficiently and on a fast-track basis, surpassing industry benchmarks as we strive to be the global leader in our field. Through strategic workforce solutions, we strive to drive economic growth, support our clients in achieving their goals, and enable widespread employment opportunities by connecting the right talent to the right businesses worldwide.
          </p>
        </div>
        
        {/* Vision & Values */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-900 text-white p-8 md:p-10 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To become the most trusted and reliable partner for businesses and job seekers alike, creating meaningful connections that drive economic growth and prosperity across India and beyond through fast-track talent delivery.
              </p>
            </div>
            <div className="bg-teal-600 text-white p-8 md:p-10 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
              <p className="text-lg text-teal-50 leading-relaxed">
                We promise to conduct our business with integrity, transparency, and a profound commitment to excellence, ensuring efficient and fast-track delivery of talent while maintaining the highest standards of service for both clients and candidates.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              icon={<Target size={32} />}
              title="Excellence"
              description="We strive for excellence in every aspect of our service, delivering talent efficiently and surpassing industry benchmarks."
            />
            
            <ValueCard 
              icon={<Users size={32} />}
              title="Fast-Track Delivery"
              description="We prioritize swift and efficient talent placement, ensuring rapid workforce solutions for our clients."
            />
            
            <ValueCard 
              icon={<TrendingUp size={32} />}
              title="Global Leadership"
              description="We aim to be the global leader in our field through innovative solutions and exceptional service delivery."
            />
            
            <ValueCard 
              icon={<Globe size={32} />}
              title="Economic Growth"
              description="We contribute to India's economic growth by connecting the right talent with the right opportunities worldwide."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
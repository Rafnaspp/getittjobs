import React from 'react';
import { CheckCircle2, Users, FileSearch, UserCheck, PieChart } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon, isLast = false }) => (
  <div className="flex relative">
    <div className="flex flex-col items-center mr-6">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-600 to-blue-600 text-white flex items-center justify-center text-xl font-bold mb-2">
        {number}
      </div>
      {!isLast && (
        <div className="h-full w-0.5 bg-gradient-to-b from-teal-200 to-blue-200"></div>
      )}
    </div>
    <div className="pb-12">
      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-teal-600">
        <div className="text-teal-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
      </div>
    </div>
  </div>
);

const ProcessSteps = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Fast-Track Process</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-xl leading-relaxed">
            Experience our streamlined recruitment process designed for rapid talent delivery without compromising on quality.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Step 
            number={1}
            title="Initial Consultation"
            description="A focused discussion to understand your specific requirements, organizational culture, and talent needs in detail."
            icon={<FileSearch size={28} />}
          />
          
          <Step 
            number={2}
            title="Rapid Talent Sourcing"
            description="Swift deployment of our advanced sourcing strategies to identify and attract the most qualified candidates."
            icon={<Users size={28} />}
          />
          
          <Step 
            number={3}
            title="Fast-Track Screening"
            description="Accelerated yet thorough evaluation process including skills assessment and background verification."
            icon={<CheckCircle2 size={28} />}
          />
          
          <Step 
            number={4}
            title="Quality Shortlisting"
            description="Presentation of a carefully curated shortlist of pre-screened candidates within agreed timelines."
            icon={<UserCheck size={28} />}
          />
          
          <Step 
            number={5}
            title="Seamless Onboarding"
            description="Efficient coordination of the entire hiring process from offer to joining, ensuring a smooth transition."
            icon={<PieChart size={28} />}
            isLast={true}
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
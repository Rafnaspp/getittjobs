import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  company: string;
  image: string;
  type: 'candidate' | 'employer';
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "TalentForce helped me find the perfect job after months of searching. Their career counseling and interview preparation made all the difference in landing my dream role.",
    author: "Priya Sharma",
    position: "Senior Developer",
    company: "TechSolutions India",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    type: "candidate"
  },
  {
    id: 2,
    content: "Working with TalentForce transformed our hiring process. They consistently deliver high-quality candidates who match not just our skill requirements but also our company culture.",
    author: "Rajiv Mehta",
    position: "HR Director",
    company: "GlobalFinance Ltd",
    image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    type: "employer"
  },
  {
    id: 3,
    content: "After being laid off during the pandemic, TalentForce not only found me a new position but one that offered better growth opportunities than my previous job. Truly life-changing!",
    author: "Ananya Patel",
    position: "Marketing Manager",
    company: "BrandGrowth India",
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    type: "candidate"
  },
  {
    id: 4,
    content: "As a startup scaling rapidly, finding the right talent was our biggest challenge. TalentForce understood our needs perfectly and helped us build a world-class team in record time.",
    author: "Vikram Singh",
    position: "CEO",
    company: "InnovateNow Technologies",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    type: "employer"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeType, setActiveType] = useState<'candidate' | 'employer' | 'all'>('all');

  const filteredTestimonials = activeType === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.type === activeType);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === filteredTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? filteredTestimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg">
            Hear from employers and candidates who have transformed their futures with TalentForce.
          </p>
        </div>

        <div className="mb-8 flex justify-center space-x-4">
          <button 
            onClick={() => { setActiveType('all'); setActiveIndex(0); }}
            className={`px-6 py-2 rounded-full transition-colors duration-300 ${
              activeType === 'all' 
                ? 'bg-teal-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            All Stories
          </button>
          <button 
            onClick={() => { setActiveType('employer'); setActiveIndex(0); }}
            className={`px-6 py-2 rounded-full transition-colors duration-300 ${
              activeType === 'employer' 
                ? 'bg-teal-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Employers
          </button>
          <button 
            onClick={() => { setActiveType('candidate'); setActiveIndex(0); }}
            className={`px-6 py-2 rounded-full transition-colors duration-300 ${
              activeType === 'candidate' 
                ? 'bg-teal-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Job Seekers
          </button>
        </div>

        {filteredTestimonials.length > 0 && (
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-gray-800 rounded-xl p-8 md:p-10 shadow-xl relative">
              <Quote size={48} className="text-teal-500/20 absolute top-6 left-6" />
              
              <div className="mb-8 text-center">
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 relative z-10">
                  "{filteredTestimonials[activeIndex].content}"
                </p>
                
                <div className="flex items-center justify-center">
                  <img 
                    src={filteredTestimonials[activeIndex].image} 
                    alt={filteredTestimonials[activeIndex].author}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-teal-500"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{filteredTestimonials[activeIndex].author}</h4>
                    <p className="text-gray-400">{filteredTestimonials[activeIndex].position}</p>
                    <p className="text-teal-400">{filteredTestimonials[activeIndex].company}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-gray-700 hover:bg-teal-600 transition-colors duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-gray-700 hover:bg-teal-600 transition-colors duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
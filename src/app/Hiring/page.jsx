"use client";
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const openings = [
  {
    title: "Software Engineering Intern",
    description: "Work with our engineering team to develop and maintain software applications.",
    skills: ["JavaScript", "React", "Node.js"],
    duration: "3 months",
  },
  {
    title: "Product Design Intern",
    description: "Assist in designing user-friendly interfaces and experiences for our products.",
    skills: ["Figma", "UI/UX", "Prototyping"],
    duration: "3 months",
  },
  {
    title: "Marketing Intern",
    description: "Help us create and execute marketing strategies to promote our products.",
    skills: ["SEO", "Content Creation", "Social Media"],
    duration: "3 months",
  },
];

const Hiring = () => {
  const router = useRouter();
  useEffect(() => {
    
  router.back();
  }, [])
  return (
    <>
    <section className="py-20 bg-gradient-to-r from-[#fdfbfb] to-[#ebedee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Internship Opportunities
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 mx-auto">
            Join us for an exciting internship experience where you can learn, grow, and make an impact.
          </p>
        </div>

        {/* Internship Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {openings.map((internship, index) => (
            <div 
              key={index} 
              className="bg-white/40 border border-gray-100 shadow-xl rounded-xl p-6 transition-all transform hover:scale-105 hover:shadow-2xl duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.5)',
                boxShadow: '0 15px 30px rgba(0,0,0,0.05)',
              }}
            >
              <h3 className="text-xl font-bold text-gray-900">{internship.title}</h3>
              <p className="mt-2 text-gray-600">{internship.description}</p>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-800">Skills Required:</h4>
                <div className="flex flex-wrap mt-1">
                  {internship.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="mr-2 mb-1 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-2 text-gray-500">Duration: {internship.duration}</p>
              <button 
                className="mt-4 w-full cursor-pointer bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Hiring;

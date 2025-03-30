import React, { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Restaurant Owner",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "This restaurant management system has completely transformed how we operate. The efficiency gains are remarkable, and our staff adapted to it quickly. Highly recommended!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Head Chef",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "The kitchen management features are outstanding. It's helped us reduce order errors and improve preparation times significantly. A game-changer for busy restaurants.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Café Manager",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "The interface is intuitive and user-friendly. Our staff training time has been cut in half, and customer satisfaction has notably improved.",
    rating: 5
  },
  {
    name: "David Wilson",
    role: "Restaurant Owner",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "The reporting features give me insights I never had before. I can make better business decisions with real data at my fingertips.",
    rating: 5
  },
  {
    name: "Jessica Lee",
    role: "Floor Manager",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "Table management has never been easier. We can handle more guests with less confusion, and our team coordination has improved dramatically.",
    rating: 5
  }
];

function Testimony() {
  const scrollerRef = useRef(null);
  const [duplicatedTestimonials, setDuplicatedTestimonials] = useState([]);
  
  // Duplicate testimonials to create the infinite scroll effect
  useEffect(() => {
    // Create a double set of testimonials to ensure smooth looping
    setDuplicatedTestimonials([...testimonials, ...testimonials]);
  }, []);
  
  const TestimonialCard = ({ testimonial }) => (
    <div className="flex-shrink-0 w-80 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group mx-4">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-zinc-100 to-purple-100 rounded-bl-full opacity-50 transition-transform duration-300 group-hover:scale-110" />
      
      {/* Content */}
      <div className="relative">
        {/* Rating Stars */}
        <div className="flex mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-600 mb-6 italic line-clamp-4">
          "{testimonial.content}"
        </p>

        {/* Author Info */}
        <div className="flex items-center">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-zinc-100"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-900">
              {testimonial.name}
            </h4>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what restaurant owners and managers have to say about our system.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          {/* Infinite Scrolling Testimonials */}
          <div 
            ref={scrollerRef}
            className="flex animate-marquee pb-10"
            style={{
              animationDuration: '20s',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite'
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
{/* 
        Call to Action
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-gradient-to-r from-zinc-600 to-zinc-700 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
            Join Our Happy Customers
          </button>
        </div> */}
      </div>

      {/* Add keyframe animation for the marquee effect */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Testimony
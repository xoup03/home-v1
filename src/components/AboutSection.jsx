import React from "react";
import {motion} from "framer-motion";

function AboutSection() {
  return (
    <section className="px-6 py-12" id="about">
      <div className="max-w-5xl mx-auto">
      
      <motion.div
        className="text-center bg-white py-6 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold text-black mb-4">About Us</h2>
        <div className="w-20 h-1 bg-black mx-auto mt-2 mb-6"></div>
        <p className="text-gray-600 text-lg max-w-lg mx-auto">
          Revolutionize Your Restaurant with Smart Dining Solutions
        </p>
      </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-zinc-100 hover:shadow-lg transition duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-zinc-500 group-hover:w-2 group-hover:bg-zinc-700 transition-all duration-300"></div>
            <div className="relative pl-2">
              <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-zinc-200 transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-zinc-600 group-hover:text-zinc-800 transition duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-800 mb-3">
                What do we Offer?
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We provide software solutions with better User Experience &
                Usability for your restaurant's Billing and Ordering services,
                including Billing Software, Food Ordering, and Table Reservation
                software. Our solutions streamline operations, reduce errors,
                and enhance customer satisfaction, ensuring a seamless dining
                experience for both staff and guests.
              </p>
              {/* <a
                href="/Offerings"
                className="mt-4 inline-block text-sm font-medium text-zinc-600 hover:text-zinc-800 transition duration-300"
              >
                Learn more →
              </a>*/}
            </div> 
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-zinc-100 hover:shadow-lg transition duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-zinc-500 group-hover:w-2 group-hover:bg-zinc-700 transition-all duration-300"></div>
            <div className="relative pl-2">
              <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-zinc-200 transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-zinc-600 group-hover:text-zinc-800 transition duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-800 mb-3">
                What are we?
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                We are a team of passionate engineers
                dedicated to delivering scalable and efficient restaurant
                technology solutions for the food and hospitality industry. Our
                services are available across India.
              </p>
              {/* <h2>
                You're just one step away from ordering your food—simply scan,
                place your order, and enjoy!
              </h2> */}
              {/* <a
                href="/MeetOurTeam"
                className="mt-4 inline-block text-sm font-medium text-zinc-600 hover:text-zinc-800 transition duration-300"
              >
                Meet our team →
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

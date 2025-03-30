"use client";
import React from 'react';
import Footer from "@/components/Footer";

const BlogPage = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 md:py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Delicious Content Coming Soon
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're cooking up some fresh articles about restaurant management, food trends, and industry insights.
            </p>
            
            {/* Email Subscription */}
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-1 flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 border-0 focus:ring-0 focus:outline-none"
              />
              <button className="bg-zinc-600 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg transition-colors">
                Notify Me
              </button>
            </div>
          </div>
        </div>

        {/* Placeholder Section */}
        <div className="container mx-auto px-4 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
                <div className="aspect-video bg-gray-100 animate-pulse"></div>
                <div className="p-6">
                  <div className="h-5 w-24 bg-gray-200 rounded mb-4 animate-pulse"></div>
                  <div className="h-6 w-full bg-gray-200 rounded mb-3 animate-pulse"></div>
                  <div className="h-4 w-full bg-gray-100 rounded mb-3 animate-pulse"></div>
                  <div className="h-4 w-3/4 bg-gray-100 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Preview */}
        <div className="container mx-auto px-4 pb-16">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Topics We'll Cover</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Menu Design", "Sustainability", "Marketing", 
                "Staff Training", "Customer Service", "Food Trends"
              ].map((category, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
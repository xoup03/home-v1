"use client";
import React, { useEffect } from 'react';
import Footer from "@/components/Footer";
import { useRouter } from 'next/navigation';


export function Offerings() {
  const router = useRouter();
  useEffect(() => {
    
  router.back();
  }, [])
  
  return (
    <>
    <section className="px-6 py-12 bg-gradient-to-r from-blue-50 to-zinc-50" id="terms-of-service">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h2 className="text-4xl font-bold text-zinc-600 mb-4">Terms of Service are required <br/>by law get compliant today</h2>
            <p className="text-gray-600 mb-6">
              We generate custom-made Terms of Service to protect both you and your customers. No lengthy process, no marketing emails.
            </p>
            <button className="bg-zinc-500 hover:bg-zinc-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center">
              Create your Terms of Service
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6 relative z-10">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-blue-100 rounded-full w-full"></div>
                  <div className="h-4 bg-blue-100 rounded-full w-5/6"></div>
                  <div className="h-4 bg-blue-100 rounded-full w-4/6"></div>
                  <div className="h-4 bg-blue-100 rounded-full w-5/6"></div>
                </div>
                <div className="absolute -right-4 bottom-1/4 bg-yellow-400 p-4 rounded-full shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-6 left-6 w-full h-full bg-zinc-100 rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Best Features Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-12">Best features of Terms of Service</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">Protect yourself and your business</h4>
              <p className="text-gray-600 text-sm">
                Our ToS template will help your organization set legal boundaries for liability in situations of outages and service disruptions, while protecting your intellectual property and service requirements.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">Save thousands on legal fees</h4>
              <p className="text-gray-600 text-sm">
                We eliminate hefty consultation costs by offering pre-made agreements that work with commercial sites. We use your personal situation and domain specifics as a baseline for cost of having a lawyer.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">No more generic templates</h4>
              <p className="text-gray-600 text-sm">
                With our terms builder solution, you get specific terms for your situation. We allow you to specify items that are particular to your business so our document generation is customized.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">Copy or host the documents</h4>
              <p className="text-gray-600 text-sm">
                You control your documents! Host on your site or save a local copy for your records. We allow you to save all the variations you produce and maintain them in your collection.
              </p>
            </div>
          </div>
        </div>

        {/* Global Coverage Section */}
        <div className="bg-white p-8 rounded-xl shadow-md border border-zinc-100 mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Terms of Service with global coverage</h3>
          
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            Almost every country in the world has some kind of privacy laws to protect their citizens' personal information. That's why many Terms of Service are generally a standard document with the major privacy laws relevant to you. Just tell us where you operate and we'll customize your Terms of Service accordingly.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">GDPR Compliant</h4>
                <p className="text-gray-600 text-sm">
                  GDPR & CCPA/CPRA protect personal data compliance in countries of European Union, USA and UK, and ensures everyone has equal rights.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 bg-green-100 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">International Regulations</h4>
                <p className="text-gray-600 text-sm">
                  GDPR for Europe takes privacy in the EU of your location's operation within the footsteps while ensuring cross-border transfers follow your website globally.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">Ongoing Compliance</h4>
                <p className="text-gray-600 text-sm">
                  Our Terms Policies are referenced by the date which ensures users maintain compliance to protect your organization and receive all relevant updates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tailor-made Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Totally tailor-made Terms of Service</h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-8">
              Our custom-built Terms of Service generator helps you create the perfect legal document for your business or website. Answer a few simple questions and get a comprehensive Terms of Service document tailored specifically to your needs.
            </p>
            <button className="bg-zinc-500 hover:bg-zinc-600 text-white font-medium py-3 px-8 rounded-lg transition duration-300">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default Offerings;
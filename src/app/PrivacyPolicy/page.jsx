"use client";

import Footer from '@/components/Footer';
import React, { useState } from 'react';

export function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(null);
  
  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };
  
  const lastUpdated = "March 10, 2025";
  
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content: "Xoup (\"we,\" \"us,\" or \"our\") is committed to protecting the privacy of your personal information. This Privacy Policy explains how we collect, use, and disclose your personal information when you use our restaurant management system (the \"Service\")."

    },
    {
      id: "information-collected",
      title: "Information We Collect",
      content: "We collect the following types of information:\n\n• Account Information: When you register for an account, we collect your name, email address, phone number, and restaurant details.\n\n• Payment Information: If you subscribe to our paid services, we collect your payment details, such as credit card or bank account information.\n\n• Usage Information: We collect information about how you use the Service, including order history, table reservations, inventory data, and customer interactions.\n\n• Device Information: We collect data regarding the devices used to access the Service, such as IP addresses, browser types, and operating systems.\n\n• Communication Data: We collect data from your interactions with us, including support requests and feedback.\n\n• Restaurant Data: Any information entered into the system regarding menu items, sales, customer data, and other restaurant-related data."
    },
    {
      id: "information-usage",
      title: "How We Use Your Information",
      content: "We use your information for the following purposes:\n\n• To provide, manage, and maintain the Service.\n\n• To process payments and manage your account.\n\n• To personalize your experience and improve the Service.\n\n• To communicate updates, promotions, and customer support.\n\n• To comply with legal obligations.\n\n• To analyze data for service enhancement.\n\n• To maintain the security and integrity of our platform."
    },
    {
      id: "information-sharing",
      title: "Sharing Your Information",
      content: "We may share your information with:\n\n• Third-party service providers who assist with payment processing, data storage, and other essential services.\n\n• Law enforcement or government agencies as required by law.\n\n• In the event of a merger, acquisition, or asset sale, your information may be transferred to the acquiring entity.\n\n• We do not sell your data to third parties for marketing purposes."
    },
    {
      id: "data-security",
      title: "Data Security",
      content: "We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no internet-based or electronic storage system can be fully secure.\n\n• We utilize industry-standard encryption to protect sensitive data.\n\n• Access to personal data is restricted to authorized personnel only."
    },
    {
      id: "data-retention",
      title: "Data Retention",
      content: "We retain your personal information as long as necessary to provide the Service and fulfill our legal obligations."
    },
    {
      id: "your-rights",
      title: "Your Rights",
      content: "Under the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, you have certain rights regarding your personal information, including:\n\n• The right to access and correct your information.\n\n• The right to withdraw consent for data usage.\n\n• The right to request data deletion within legal constraints.\n\n• The right to request details of data-sharing entities.\n\nTo exercise these rights, please contact us at xoup.business@gmail.com."
    },
    {
      id: "policy-changes",
      title: "Changes to This Privacy Policy",
      content: "We may update this Privacy Policy periodically. Any changes will be posted on our website, and continued use of the Service after updates constitutes your acceptance of the revised Privacy Policy."
    },
    {
      id: "contact-information",
      title: "Contact Information",
      content: "If you have any questions regarding this Privacy Policy, please contact us at:\n\nEmail: xoup.business@gmail.com"
    },
    {
      id: "consent",
      title: "Consent",
      content: "By using our Service, you consent to the data practices described in this Privacy Policy."
    }
  ];

  return (
    <>
    <section className="px-6 py-12 bg-gradient-to-r from-zinc-50 to-slate-100" id="privacy-policy">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h2>
          <p className="text-gray-500 text-sm">Last Updated: {lastUpdated}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Table of Contents - Desktop */}
          <div className="hidden lg:block">
            <div className="bg-white p-6 rounded-xl shadow-md border border-zinc-100 sticky top-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Table of Contents</h3>
              <ul className="space-y-2">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <button 
                      onClick={() => toggleSection(section.id)}
                      className="text-left w-full text-gray-600 hover:text-blue-600 transition duration-200 flex items-center"
                    >
                      <span className="mr-2 font-medium">{index + 1}.</span>
                      <span className="text-sm">{section.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-zinc-100">
              <div className="mb-8">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  This Privacy Policy will help you better understand how we collect, use, and share your personal information.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Your privacy is important to us. This privacy policy document outlines the types of personal information collected
                  and recorded by our platform and how we use it.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  By using our service, you agree to the collection and use of information in accordance with this policy.
                </p>
              </div>

              {/* Mobile Table of Contents */}
              <div className="lg:hidden mb-8">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Table of Contents</h3>
                <ul className="space-y-2 border-l-2 border-gray-200 pl-4">
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <button 
                        onClick={() => toggleSection(section.id)}
                        className="text-left w-full text-gray-600 hover:text-blue-600 transition duration-200"
                      >
                        <span className="mr-1 font-medium">{index + 1}.</span>
                        <span className="text-sm">{section.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Policy Sections */}
              <div className="space-y-8">
                {sections.map((section, index) => (
                  <div 
                    key={section.id} 
                    id={section.id}
                    className={`border-b border-gray-100 pb-6 ${
                      index === sections.length - 1 ? 'border-b-0' : ''
                    }`}
                  >
                    <div 
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleSection(section.id)}
                    >
                      <h3 className="font-bold text-lg text-gray-900">
                        {index + 1}. {section.title}
                      </h3>
                      <span className="text-gray-400">
                        {activeSection === section.id ? '−' : '+'}
                      </span>
                    </div>
                    
                    <div className={`mt-3 transition-all duration-300 ${
                      activeSection === section.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                        {section.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 text-right">
                <button 
                  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                  className="text-sm text-gray-500 hover:text-blue-600 transition duration-200"
                >
                  Back to top ↑
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default PrivacyPolicy;
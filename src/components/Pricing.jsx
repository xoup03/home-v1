"use client"
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { 
  pricingData, 
  planFeatures, 
  allFeatures, 
  planDescriptions, 
  plansMetadata, 
  getBillingText, 
  getSavingsText, 
  getCardStyle 
} from "@/config/pricingConfig";

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('yearly');
  const [loading, setLoading] = useState(false);

  // Generate pricing plans dynamically from config
  const pricingPlans = plansMetadata.map(planMeta => ({
    _id: planMeta.id,
    name: planMeta.name,
    description: planDescriptions[planMeta.name],
    isPopular: planMeta.isPopular,
    availableFeatures: planMeta.name === 'Ultimate' 
      ? ["14 days Free Trial", ...allFeatures] 
      : planFeatures[planMeta.name] || []
  }));

  const getPriceDisplay = (plan) => {
    return pricingData[billingCycle][plan.name];
  };

  if (loading) {
    return (
      <section className="px-4 py-16 bg-gradient-to-b from-gray-50 to-white" id="pricing">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing</h2>
          <div className="mt-8 flex justify-center">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-gray-200 h-12 w-12"></div>
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-16" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            className="text-center bg-white mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-black mb-4">Our Plans</h2>
            <div className="w-20 h-1 bg-black mx-auto mt-2 mb-6"></div>
            <p className="text-gray-600 text-lg max-w-lg mx-auto">
              Smart solutions at prices that work for you.
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center bg-white rounded-full p-1.5 shadow-lg border border-gray-100 mb-10">
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'quarterly'
                  ? 'bg-gradient-to-r from-slate-700 to-slate-950 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Quarterly
            </button>
            <button
              onClick={() => setBillingCycle('halfYearly')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'halfYearly'
                  ? 'bg-gradient-to-r from-slate-700 to-slate-950 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Half-Yearly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-slate-700 to-slate-950 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 justify-items-center items-center gap-y-12 md:gap-8 max-w-7xl mx-auto px-4 ">
          {pricingPlans.map((plan) => (
            <div
              key={plan._id}
              className={`relative rounded-2xl border ${
                plan.isPopular ? 'border scale-105 z-10' : 'border'
              } ${getCardStyle(plan.name)} transition-all duration-500 hover:shadow-2xl hover:-translate-y-1`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-slate-800 to-slate-700 text-white px-6 py-1.5 rounded-full text-sm font-medium shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-600 mb-6 h-12">{plan.description}</p>

                <div className="mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-gray-500 text-lg">₹</span>
                    <span className="text-5xl font-bold text-gray-900">
                      {getPriceDisplay(plan)}
                    </span>
                  </div>
                  <div className="text-center text-gray-600 text-sm mt-2">
                    {getBillingText(billingCycle)}
                  </div>
                  {getSavingsText(billingCycle, plan.name) && (
                    <div className="text-emerald-600 text-sm font-medium mt-2 text-center">
                      {getSavingsText(billingCycle, plan.name)}
                    </div>
                  )}
                </div>

                <button className={`w-full py-3.5 px-4 rounded-lg font-medium mb-8 transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-gradient-to-r from-slate-800 to-slate-700 text-white hover:from-slate-700 hover:to-slate-600 hover:shadow-lg hover:-translate-y-0.5'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-slate-500 hover:text-slate-800 hover:shadow-md hover:-translate-y-0.5'
                }`}>
                  Start Free Trial
                </button>

                <ul className="space-y-3">
                  {allFeatures.map((feature, index) => {
                    const isAvailable = plan.availableFeatures.includes(feature);
                    return (
                      <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                        {isAvailable ? (
                          <FaCheck className="text-emerald-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                        ) : (
                          <span className="text-red-500 w-4 h-4 mt-0.5 flex-shrink-0">✕</span>
                        )}
                        <span className={!isAvailable ? 'text-gray-400' : ''}>{feature}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
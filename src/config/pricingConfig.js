// src/config/pricingConfig.js

// Pricing data by billing cycle
export const pricingData = {
    quarterly: {
      Basic: 2500,
      Professional: 4000,
      Ultimate: 6750
    },
    halfYearly: {
      Basic: 4000,
      Professional: 7000,
      Ultimate: 12500
    },
    yearly: {
      Basic: 7000,
      Professional: 13000,
      Ultimate: 24000
    }
  };
  
  // Features by plan
  export const planFeatures = {
    Basic: [
      "14 days Free Trial",
      "Custom Billing Options",
      "Scan and Order",
      "Order Management",
      "Customer Management",
      "Table Management",
      "65+ Reporting",
      "Menu Management",
      "KOT System",
      "Token Management",
      "Customer Interface",
      "Manager Interface",
      "24x7 Support",
      "Free Training",
      "Free Staff Re-Training",
      "Dedicated POC"
    ],
    Professional: [
      "14 days Free Trial",
      "Custom Billing Options",
      "Scan and Order",
      "Order Management",
      "Customer Management",
      "Table Management",
      "65+ Reporting",
      "Menu Management",
      "KOT System",
      "Token Management",
      "Customer Interface",
      "Manager Interface",
      "Reviews",
      "Waiter Interface",
      "Waiter Management",
      "Admin Interface",
      "Feedback Management",
      "Section Wise KDS",
      "Section Wise Menu View",
      "Dynamic Analytics",
      "Loyalty Program",
      "In-Built CRM",
      "Dish Recommendations",
      "Restaurant-Owned Delivery",
      "24x7 Support",
      "Free Training",
      "Free Staff Re-Training",
      "Dedicated POC"
    ]
  };
  
  // All features list
  export const allFeatures = [
    "14 days Free Trial",
    "Custom Billing Options",
    "Scan and Order",
    "Order Management",
    "Customer Management",
    "Table Management",
    "65+ Reporting",
    "Menu Management",
    "KOT System",
    "Token Management",
    "Customer Interface",
    "Manager Interface",
    "Reviews",
    "Waiter Interface",
    "Waiter Management",
    "Admin Interface",
    "Feedback Management",
    "Section Wise KDS",
    "Section Wise Menu View",
    "Inventory Management",
    "Online Order Integration",
    "Dynamic Analytics",
    "Loyalty Program",
    "In-Built CRM",
    "Dish Recommendations",
    "Restaurant-Owned Delivery",
    "24x7 Support",
    "Free Training",
    "Free Staff Re-Training",
    "Dedicated POC"
  ];
  
  // Plan descriptions
  export const planDescriptions = {
    Basic: "Perfect for small restaurants starting their digital journey",
    Professional: "Ideal for growing restaurants with multiple service types",
    Ultimate: "Complete solution for large restaurants and chains"
  };
  
  // Plan metadata
  export const plansMetadata = [
    {
      id: '1',
      name: 'Basic',
      isPopular: false
    },
    {
      id: '2',
      name: 'Professional',
      isPopular: true
    },
    {
      id: '3',
      name: 'Ultimate',
      isPopular: false
    }
  ];
  
  // Helper functions
  export const getBillingText = (billingCycle) => {
    switch (billingCycle) {
      case 'quarterly':
        return '/quarter/outlet';
      case 'halfYearly':
        return '/6 months/outlet';
      case 'yearly':
        return '/year/outlet';
      default:
        return '/year/outlet';
    }
  };
  
  export const getSavingsText = (billingCycle, planName) => {
    if (billingCycle === 'quarterly') return '';
  
    const quarterlyYearTotal = pricingData.quarterly[planName] * 4;
    const actualYearCost = billingCycle === 'halfYearly'
      ? pricingData.halfYearly[planName] * 2
      : pricingData.yearly[planName];
  
    const savingsPercent = Math.round((1 - (actualYearCost / quarterlyYearTotal)) * 100);
  
    return `Save ${savingsPercent}% yearly`;
  };
  
  export const getCardStyle = (planName) => {
    switch (planName) {
      case "Basic":
        return "bg-gradient-to-br from-slate-50 via-gray-50 to-white border-slate-200";
      case "Professional":
        return "bg-gradient-to-br from-slate-50 via-gray-50 to-white border-slate-200";
      case "Ultimate":
        return "bg-gradient-to-br from-slate-50 via-gray-50 to-white border-slate-200";
      default:
        return "bg-white border-gray-200";
    }
  };
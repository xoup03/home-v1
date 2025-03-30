import React from "react";
import AddonCard from "./AddOnCard";

const addonsList = [
  {
    id: 1,
    title: "Analytics – Data That Drives Success",
    description: "Make informed decisions with powerful analytics! Track sales trends, customer preferences, and staff performance to optimize operations and boost profitability.",
    vector: "circle" // This represents the vector shape in background
  },
  {
    id: 2,
    title: "CRM – Build Stronger Customer Relationships",
    description: "Keep your customers coming back with an intelligent Customer Relationship Management (CRM) system. Manage loyalty programs, track preferences, and send personalized offers effortlessly.",
    vector: "wave" // This represents the vector shape in background
  },
  {
    id: 3,
    title: "Restaurant-Owned Delivery",
    description: "Ditch third-party commissions! With your own delivery system, manage orders directly, ensure faster deliveries, and maximize profits while keeping customers happy.",
    vector: "tree" // This represents the vector shape in background
  },
  {
    id: 4,
    title: "Operations – Smarter Workflow",
    description: "Our product makes work easy for both kitchen staff and dining area teams. From order management to staff coordination and inventory tracking, streamline every process.",
    vector: "triangle" // This represents the vector shape in background
  },
];



function AddOns() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
  {/* Heading Section */}
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      Enhance Your Service
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-zinc-900 to-slate-900 mx-auto mb-6 rounded-full"></div>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      Powerful addons to extend your restaurant management capabilities
    </p>
  </div>

  {/* Addons Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {addonsList.map((addon) => (
      <AddonCard key={addon.id} addon={addon} />
    ))}
  </div>
</div>
  );
}

export default AddOns;
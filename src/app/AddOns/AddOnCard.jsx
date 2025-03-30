import React from 'react';
import { motion } from 'framer-motion'; // Assuming you're using framer-motion for animations
import { Blocks } from 'lucide-react';

function AddonCard({ addon }) {
    return (
        <motion.div 
            className="relative rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm h-full"
            initial={{ y: 10, opacity: 0.8 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
            }}
        >
            {/* Dynamic background gradient based on addon type/color */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-indigo-50/30 to-purple-50/50 opacity-90" />
            
            {/* Vector pattern with improved scaling and positioning */}
            <div 
                className="absolute inset-0 opacity-8 transition-all duration-500 bg-right-top bg-no-repeat transform scale-110"
                style={{ 
                    backgroundImage: `url('/vectors/${addon.vector}.svg')`,
                    backgroundSize: '80%',
                }}
            />
            
            {/* Card shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {/* Content container with improved vertical rhythm */}
            <div className="relative z-10 p-6 sm:p-7 flex flex-col h-full">
                {/* Header with icon and improved spacing */}
                <div className="flex items-start space-x-4 mb-5">
                    <div className="flex-shrink-0 p-2.5 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 shadow-sm border border-blue-100">
                        <Blocks/>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                        {addon.title}
                    </h3>
                </div>
                
                {/* Description with improved readability */}
                <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                    {addon.description}
                </p>
                
                {/* Enhanced CTA button with better hover effects */}
                
            </div>
            
            {/* Improved corner accent with subtle animation */}
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <motion.div 
                    className="absolute -right-10 -top-10 w-20 h-20 rotate-45 bg-gradient-to-br from-blue-400/20 to-indigo-500/20"
                    initial={{ opacity: 0.5 }}
                    whileHover={{ opacity: 0.8 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
            
            {/* Subtle bottom border accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
    );
}

export default AddonCard;
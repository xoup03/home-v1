import React from "react";

const Ribbon = ({ text }) => {
  return (
    <div className="relative w-full bg-gradient-to-r from-[#C57831] via-[#E89B4F] to-[#C57831] text-white py-2.5 shadow-md">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-medium tracking-wide uppercase">
          {text}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </div>
  );
};

export default Ribbon

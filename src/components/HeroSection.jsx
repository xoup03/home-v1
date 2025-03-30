"use client";
import React from "react";
import heroimage from "../assets/xouphero.svg";
import Image from "next/image";
import Simley from "../assets/SLADKF.gif"
import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-bl from-blue-100 via-white to-white pt-20 md:pt-16">
      <div className="relative flex flex-col md:flex-row max-w-7xl mx-auto justify-between items-center px-6 md:px-8 lg:px-16 py-10 md:py-16 min-h-[85vh]">
        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left z-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6 mt-2 md:mt-0">
            <span className="text-sm font-medium text-blue-600 flex items-center gap-2">
              Scan, Order, Enjoy <Image src={Simley} alt="Simley" width={20} height={20} />
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Smart Solutions for <br /> Modern Dining.
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Enhance your restaurant's efficiency with our Scan & Order
            Restaurant Management System, streamlining food ordering, billing,
            and Table Management for a seamless dining experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/BookDemo"
              className="px-8 py-3.5 bg-zinc-800 text-white text-base font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
            >
              Book your Demo
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mt-12 md:mt-0 z-10">
          <Image
            src={heroimage}
            alt="Restaurant Management System"
            className="relative w-full max-w-md xl:max-w-lg transform hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

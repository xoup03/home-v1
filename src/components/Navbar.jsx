"use client";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import XoupLogo from "../assets/Xouplogo.png";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // ✅ Fix: Accessing window only on client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight / 4);
      
      // Add scroll event listener
      const handleScroll = () => {
        if (window.scrollY > 5) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      
      // Clean up event listener
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const menuItems = [
    { to: "home", label: "Home" },
    { to: "about", label: "About Us" },
    { to: "pricing", label: "Pricing" },
    { to: "contact", label: "Contact Us" },
  ];

  return (
    <nav className={`z-20 fixed w-full top-0 transition-colors duration-300 ${
      scrolled ? 'bg-white/30 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {/* <h1 className="text-3xl font-bold text-blue-600">Xoup.</h1> */}
          <Image
          src={XoupLogo}
          alt="Xoup Logo"
          width={150}
          height={50}
          className="object-contain"
        />

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-windowHeight}
                  className="text-gray-600 hover:text-zinc-600 font-medium cursor-pointer transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-zinc-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-500"
          >
            <span className="sr-only">Open main menu</span>
            {!isMenuOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white border-b border-gray-200`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-windowHeight}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-zinc-600 hover:bg-gray-50 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar

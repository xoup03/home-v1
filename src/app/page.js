'use client';

import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import AddOns from "./AddOns/AddOn";
import Pricing from "../components/Pricing";
import Testimony from "../components/Testimony";
import Ribbon from "@/components/Ribbon";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function HomePage() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Register GSAP plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize animations without coupling to Locomotive
    const setupAnimations = () => {
      const sections = document.querySelectorAll('.fade-in-element');
      sections.forEach(section => {
        gsap.fromTo(section, 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%', 
              end: 'top 50%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    };

    let locoScroll;
    
    // Initialize Locomotive Scroll
    const initLocoScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      
      locoScroll = new LocomotiveScroll({
        el: scrollContainerRef.current,
        smooth: true,
        lerp: 0.08
      });
      
      // Setup animations after locomotive is initialized
      setupAnimations();
      
      // Give ScrollTrigger a chance to update
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);
    };

    initLocoScroll();

    // Cleanup function
    return () => {
      if (locoScroll) {
        locoScroll.destroy();
      }
      
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Navbar />
      <div ref={scrollContainerRef} data-scroll-container>
        <HeroSection id="home" />
        <AboutSection id="about" className="fade-in-element" />
        <Services id="services" className="fade-in-element" />
        <AddOns id="addons" className="fade-in-element" />
        <Pricing id="pricing" className="fade-in-element" />
        <Ribbon text="Designed for business teams like yours. We can also create customized plans tailored to your needs." className="fade-in-element"/>
        {/* <Testimony id="testimonials" className="fade-in-element" /> */}
        <ContactSection id="contact" className="fade-in-element" />
        <Footer />
      </div>
    </>
  );
}
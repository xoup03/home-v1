"use client";
import React from "react";
import Link from "next/link";
import { FaInstagram } from 'react-icons/fa';

function Footer() {
  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/#about", label: "About Us" },
    { to: "/#pricing", label: "Pricing" },
    { to: "/#contact", label: "Contact Us" },
  ];

  const companyInfo = [
    // { label: "Blog", href: "/BlogPage" },
    //{ label: "Careers", href: "/Hiring" },
    { label: "Privacy Policy", href: "/PrivacyPolicy" },
    { label: "Terms of Service", href: "/TermsOfService" },
  ];

  const legalInfo = [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ];

  const contactInfo = [
    { label: "xoup.business@gmail.com", href: "mailto:xoup.business@gmail.com" },
    { label: "+91 93302 77953", href: "tel:+919330277953" },
    // { label: "Follow us on Insta", href: "https://www.instagram.com/xoupcooks?igsh=MWE4bmdpNXEwNjJhYw=="},

  ];

  return (
    <footer className="bg-zinc-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">Xoup.</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Transforming restaurant management with smart solutions for modern dining.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.to}>
                  <Link
                    href={item.to}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyInfo.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex justify-between space-x-10 items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Xoup. All rights reserved.
            </p>
            <div className="flex justify-end">
            <p className="text-gray-400 text-sm">
              {/* Made with ❤️ for restaurants. */}
              <Link className="flex items-center gap-2" href="https://www.instagram.com/xoupcooks?igsh=MWE4bmdpNXEwNjJhYw==">
                <FaInstagram className="text-white" />
                Follow us on Instagram
              </Link>
            </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer

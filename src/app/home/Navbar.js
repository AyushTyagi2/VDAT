"use client";

import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import React from 'react';
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Keynotes", href: "/keynotes" },
    {
      label: "Call for Papers",
      dropdown: [
        { label: "Submissions", href: "/submissions" },
        { label: "Timeline", href: "/timeline" },
        { label: "Awards", href: "/awards" },
      ],
    },
    { label: "Speakers", href: "/Speakers" },
    { 
      label: "Committee", 
      dropdown: [
        { label: "Organizing Committee", href: "/organizing-committee" },
        { label: "Advisory Committee", href: "/advisory-committee" },
      ]
    },
    { 
      label: "Venue", 
      dropdown: [
        { label: "Accommodation", href: "/accomodation" },
        { label: "Conference Venue", href: "/venue" },
      ]
    },
    { label: "Previous Years", href: "/years" },
    { label: "Contact", href: "/contact" },
    { label: "Register", href: "/register" },
  ];

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-md bg-opacity-30">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-wide hover:text-gray-300 transition-colors duration-300">
          <h2 className="text-5xl font-extrabold text-center mb-8 tracking-tight text-purple-600 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-16 after:h-[3px] after:bg-purple-400 rounded-full">
            CVIP 2025
          </h2>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                href={item.href || "#"}
                className={`text-lg font-medium hover:text-purple-500 transition-colors duration-300 ${item.dropdown ? 'cursor-pointer' : ''}`}
              >
                {item.label}
              </Link>
              {item.dropdown && (
                <ul className="absolute left-0 mt-2 w-56 bg-gray-900 rounded-lg shadow-lg z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-300 ease-in-out">
                  {item.dropdown.map((dropdownItem, idx) => (
                    <li key={idx}>
                      <Link
                        href={dropdownItem.href}
                        className="block px-4 py-3 text-sm font-medium hover:bg-gray-800 hover:text-purple-500 transition-colors duration-300 rounded-lg"
                      >
                        {dropdownItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu (collapsible) */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-900 text-white shadow-lg rounded-b-lg py-4">
            <div className="flex flex-col">
              {menuItems.map((item, index) => (
                <React.Fragment key={index}>
                  <Link
                    href={item.href || "#"} // Handle cases where there is no href
                    className="block px-6 py-3 text-lg font-medium hover:bg-gray-800 hover:text-purple-500 transition-colors duration-300 rounded-lg"
                    onClick={toggleMobileMenu}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-6">
                      {item.dropdown.map((dropdownItem, idx) => (
                        <Link
                          key={idx}
                          href={dropdownItem.href}
                          className="block px-6 py-3 text-base font-medium hover:bg-gray-800 hover:text-purple-500 transition-colors duration-300 rounded-lg"
                          onClick={toggleMobileMenu}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

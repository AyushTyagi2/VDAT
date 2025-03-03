"use client";

import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Keynotes", href: "/keynotes" },
    { label: "Previous Years", 
      dropdown: [
        { label: "VDAT 2024", href: "https://vit.ac.in/vdat2024/" },
        { label: "VDAT 2023", href: "https://discovery.bits-pilani.ac.in/VDAT2023/" },
        { label: "VDAT 2022", href: "https://iitjammu.ac.in/vdat2022/" },
      ],
     },
    {
      label: "Call for Papers",
      dropdown: [
        { label: "Submissions", href: "/submissions" },
        { label: "Timeline", href: "/timeline" },
        { label: "Awards", href: "/awards" },
      ],
    },
    { label: "Speakers", href: "/Speakers" },
    { label: "Committee", href: "/committees" },
    {
      label: "Venue",
      dropdown: [
        { label: "Accommodation", href: "/accommodation" },
        { label: "Conference Venue", href: "/venue" },
      ],
    },
    { label: "Contact", href: "/contact" },
    { label: "Register", href: "/register" },
  ];

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-md bg-opacity-30">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <Link
      href="/"
      className="text-xl font-bold flex flex-row items-center space-x-4 tracking-wide hover:text-gray-300 transition-colors duration-300"
    >
      <Image
        src="/vlsi.png"
        alt="VLSI Society of India Logo"
        width={70}
        height={70}
        className=''
      />
      <h2 className="text-3xl font-extrabold text-center  tracking-tight text-purple-600 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-16 after:h-[3px] after:bg-purple-400 rounded-full">
 VDAT 2025
</h2>
    </Link>

        {/* Desktop Menu */}
        <div className="hidden  space-x-6 lg:space-x-8 lg:hidden xl:flex">
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
        <div className="lg:flex xl:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`absolute top-full left-0 right-0 bg-gray-900 text-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div className="flex flex-col py-4">
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
    </nav>
  );
};

export default Navbar;

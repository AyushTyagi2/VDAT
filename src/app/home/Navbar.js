"use client";

import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPapersDropdownOpen, setIsPapersDropdownOpen] = useState(false);
  const [isVenueDropdownOpen, setIsVenueDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const togglePapersDropdown = () => {
    setIsPapersDropdownOpen(!isPapersDropdownOpen);
  };

  const toggleVenueDropdown = () => {
    setIsVenueDropdownOpen(!isVenueDropdownOpen);
  };

  const menuItems = [
    { label: "Home", href: "/" },
    
    {
      label: "Call for Papers",
      onClick: togglePapersDropdown,
      dropdown: [
        { label: "Submissions", href: "/submissions" },
        { label: "Timeline", href: "/timeline" },
        { label: "Awards", href: "/awards" },
        {label: "Call for Tutorials", href:"/call"},
      ],
    },
    { label: "Speakers", href: "/Speakers" },
    { label: "Committee", href: "/committees" },
    {
      label: "Venue",
      onClick: toggleVenueDropdown,
      dropdown: [
        { label: "Accommodation", href: "/accommodation" },
        { label: "Conference Venue", href: "/venue" },
      ],
    },
    { label: "Previous Years", href: "/years" },
    { label: "Contact", href: "/contact" },
    { label: "Register", href: "/register" },
  ];

  return (
    <nav className="px-3 bg-black text-white sticky top-0 z-50 shadow-md bg-opacity-30">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold flex flex-row items-center space-x-4 tracking-wide hover:text-gray-300 transition-colors duration-300"
        >
          <Image
            src="/vlsi.png"
            alt="VLSI Society of India Logo"
            width={70}
            height={70}
            className=""
          />
          <h2 className="text-3xl font-extrabold text-center tracking-tight text-purple-600 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-16 after:h-[3px] after:bg-purple-400 rounded-full">
            VDAT 2025
          </h2>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 lg:space-x-8">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                href={item.href || "#"}
                className={`text-lg font-medium hover:text-purple-500 transition-colors duration-300 ${
                  item.dropdown ? "cursor-pointer" : ""
                }`}
                onClick={item.onClick}
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
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-full bg-gray-900 text-white shadow-lg transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col py-4 px-6 h-full">
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 text-white focus:outline-none"
          >
            <FaTimes size={24} />
          </button>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <button
                className="block w-full text-left px-6 py-3 text-lg font-medium hover:bg-gray-800 hover:text-purple-500 transition-colors duration-300 rounded-lg"
                onClick={() => {
                  if (item.dropdown) {
                    if (item.label === "Call for Papers") {
                      setIsPapersDropdownOpen(!isPapersDropdownOpen);
                    } else if (item.label === "Venue") {
                      setIsVenueDropdownOpen(!isVenueDropdownOpen);
                    }
                  } else {
                    if (item.href) {
                      window.location.href = item.href;
                    }
                    toggleMobileMenu();
                  }
                }}
              >
                {item.label}
              </button>
              {item.dropdown && (
                <div
                  className={`pl-6 ${
                    (item.label === "Call for Papers" && isPapersDropdownOpen) ||
                    (item.label === "Venue" && isVenueDropdownOpen)
                      ? "block"
                      : "hidden"
                  }`}
                >
                  {item.dropdown.map((dropdownItem, idx) => (
                    <Link
                      key={idx}
                      href={dropdownItem.href}
                      className="block w-full text-left px-6 py-3 text-base font-medium hover:bg-gray-800 hover:text-purple-500 transition-colors duration-300 rounded-lg"
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
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // Track open dropdown

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdownName) => {
    setDropdownOpen(dropdownOpen === dropdownName ? null : dropdownName);
  };

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Call for Papers",
      dropdown: [
        { label: "Submissions", href: "/submissions" },
        { label: "Timeline", href: "/timeline" },
        { label: "Awards", href: "/awards" },
      ],
    },
    
    { label: "Speakers", href: "/speakers" },
    { label: "Committee", href: "/committee",
      dropdown:[
        { label: "Organizing Committee", href: "/organizing-committee" },
        { label: "Advisory Committee", href: "/advisory-committee" },
      ]
    },
    { label: "Venue & Travel", href: "/venue" ,
      dropdown:[
        { label: "Conference Venue", href: "/conference" },
        { label: "Award Ceremony Venue", href: "/awceremony" },
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
          CVIP 2025
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {menuItems.map((item) => (
            <div key={item.label} className="relative group"> {/* Added relative wrapper and group class */}
              <Link
                href={item.href || "#"} // Prevent navigation if it's a dropdown trigger
                className={`text-lg font-medium hover:text-purple-500 transition-colors duration-300 ${item.dropdown ? 'cursor-pointer' : ''}`}
                onMouseEnter={item.dropdown ? () => toggleDropdown(item.label) : null}
                onMouseLeave={item.dropdown ? () => toggleDropdown(null) : null}
              >
                {item.label}
              </Link>
              {item.dropdown && dropdownOpen === item.label && (
                <div className="absolute left-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg z-10 group-hover:block hidden"> {/* Dropdown styles and conditional rendering */}
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.label}
                      href={dropdownItem.href}
                      className="block px-4 py-2 text-sm font-medium hover:bg-gray-800 hover:text-purple-500 transition-colors duration-300"
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
                </div>
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
              {menuItems.map((item) => (
                <React.Fragment key={item.label}>
                  <Link
                    href={item.href || "#"}
                    className="block px-6 py-3 text-lg font-medium hover:bg-gray-800 hover:text-purple-500 transition-colors duration-300"
                    onClick={() => { toggleMobileMenu(); item.href && router.push(item.href)}}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                      <div className="flex flex-col ml-6">
                          {item.dropdown.map((dropdownItem) =>(
                              <Link key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="block px-6 py-3 text-lg font-medium hover:bg-gray-800 hover:text-purple-500 transition-colors duration-300"
                              onClick={toggleMobileMenu}>
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
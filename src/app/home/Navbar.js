import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-md bg-opacity-30"> {/* Dark background, white text, subtle shadow */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-wide hover:text-gray-300 transition-colors duration-300"> {/* Smaller, bolder logo, hover effect */}
          CVIP 2025 {/* More specific logo text */}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-8"> {/* Adjusted spacing */}
          <Link href="/" className="text-lg font-medium hover:text-purple-500 transition-colors duration-300"> {/* Font weight, distinct hover */}
            Home
          </Link>
          <Link href="/about" className="text-lg font-medium hover:text-purple-500 transition-colors duration-300">
            About
          </Link>
          <Link href="/speakers" className="text-lg font-medium hover:text-purple-500 transition-colors duration-300"> {/* Added Speakers link */}
            Speakers
          </Link>
          <Link href="/contact" className="text-lg font-medium hover:text-purple-500 transition-colors duration-300">
            Contact
          </Link>
          <Link href="/register" className=" hover:bg-blue-600 text-purple-500 font-medium py-2 px-4 rounded transition-colors duration-300"> {/* Added Register button */}
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu (collapsible) */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-900 text-white shadow-lg rounded-b-lg py-4 transition-all duration-300 ease-in-out transform origin-top"> {/* Dark background, rounded bottom */}
            <div className="flex flex-col"> {/* Use flex column for better spacing */}
              <Link href="/" className="block px-6 py-3 text-lg font-medium hover:bg-gray-800 hover:text-purple-500 transition-colors duration-300" onClick={toggleMobileMenu}>
                Home
              </Link>
              <Link href="/about" className="block px-6 py-3 text-lg font-medium hover:bg-gray-800 hover:text-purple-500 transition-colors duration-300" onClick={toggleMobileMenu}>
                About
              </Link>
              <Link href="/speakers" className="block px-6 py-3 text-lg font-medium hover:bg-gray-800 hover:text-purple-500 transition-colors duration-300" onClick={toggleMobileMenu}>
                Speakers
              </Link>
              <Link href="/contact" className="block px-6 py-3 text-lg font-medium hover:bg-gray-800 hover:text-purple-500 transition-colors duration-300" onClick={toggleMobileMenu}>
                Contact
              </Link>
               <Link href="/register" className="block px-6 py-3 text-lg font-medium hover:bg-gray-800 hover:text-purple-500 transition-colors duration-300" onClick={toggleMobileMenu}>
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
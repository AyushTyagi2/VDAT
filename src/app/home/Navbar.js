import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg sticky top-0 z-50 text-white">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold tracking-wide">
          MyWebsite
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-lg hover:text-yellow-300 transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-lg hover:text-yellow-300 transition-all duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-lg hover:text-yellow-300 transition-all duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu (collapsible) */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white text-gray-800 shadow-lg rounded-lg py-4 transition-all duration-300 ease-in-out transform">
            <Link
              href="/"
              className="block px-6 py-3 text-lg hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-6 py-3 text-lg hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-6 py-3 text-lg hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

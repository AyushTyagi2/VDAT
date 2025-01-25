import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50"> {/* Sticky navbar */}
      <div className="container mx-auto px-6 py-3 flex justify-between items-center relative"> {/* Added relative positioning */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          My Website
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6"> {/* Hidden on mobile, flex on medium screens and up */}
          <Link href="/" className="text-gray-700 hover:text-blue-500 transition duration-300">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-500 transition duration-300">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-500 transition duration-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden"> {/* Hidden on medium screens and up */}
          <button onClick={toggleMobileMenu} className="text-gray-700 focus:outline-none">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />} {/* Icon changes based on menu state */}
          </button>
        </div>

        {/* Mobile Menu (collapsible) */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md flex flex-col py-2"> {/* Absolute positioning for dropdown */}
            <Link href="/" className="px-6 py-2 text-gray-700 hover:text-blue-500 transition duration-300" onClick={toggleMobileMenu}>
              Home
            </Link>
            <Link href="/about" className="px-6 py-2 text-gray-700 hover:text-blue-500 transition duration-300" onClick={toggleMobileMenu}>
              About
            </Link>
            <Link href="/contact" className="px-6 py-2 text-gray-700 hover:text-blue-500 transition duration-300" onClick={toggleMobileMenu}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
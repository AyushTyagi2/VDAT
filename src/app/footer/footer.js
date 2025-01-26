import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-12 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* IIT Ropar Info (Updated) */}
        <div className="md:col-span-1 flex flex-col items-start">
          <Image src="/images/iitrpr.png" alt="IIT Ropar Logo" width={150} height={75} />
          <div className="mt-4">
            <p className="text-sm">Indian Institute of Technology Ropar</p>
            <p className="text-sm">Ropar, Nangal Road, Rupnagar, Punjab, INDIA 140001</p>
            <p className="text-sm">Email: cvip2023@iitrpr.ac.in</p>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-purple-300">Useful Links</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="white hover:text-white transition duration-300 text-sm">
                Home
              </Link>
            </li>
            <li>
              <Link href="/author-guidelines" className="white hover:text-white transition duration-300 text-sm">
                Author Guidelines
              </Link>
            </li>
            <li>
              <Link href="/our-speakers" className="white hover:text-white transition duration-300 text-sm">
                Our Speakers
              </Link>
            </li>
            <li>
              <Link
                href="https://www.iitrpr.ac.in/"
                className="white hover:text-white transition duration-300 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                IIT Ropar Website
              </Link>
            </li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-purple-300">Important Links</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/accommodation" className="white hover:text-white transition duration-300 text-sm">
                Accommodation
              </Link>
            </li>
            <li>
              <Link href="/fellowship" className="white hover:text-white transition duration-300 text-sm">
                Fellowship
              </Link>
            </li>
            <li>
              <Link href="/sponsor" className="white hover:text-white transition duration-300 text-sm">
                Sponsor
              </Link>
            </li>
            <li>
              <Link
                href="/organising-committee"
                className="white hover:text-white transition duration-300 text-sm"
              >
                Organising Committee
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-purple-300">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="white hover:text-white transition duration-300" aria-label="Facebook">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="white hover:text-white transition duration-300" aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="white hover:text-white transition duration-300" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="white hover:text-white transition duration-300" aria-label="YouTube">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-8 pt-4 border-t border-gray-700 text-center text-sm white">
        <p>Designed & Developed by: MAFIAS (I3C, IIT Ropar Incubatee)</p>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
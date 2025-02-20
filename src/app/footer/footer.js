import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const partnerLogos = {
    "Chitkara University": "/logos/chitkara.png",
    "IIT Ropar": "/images/iitrpr.png",
    "IIT Mandi": "/logos/iit-mandi.png",
    "Chandigarh University": "/logos/cu.png",
    "PEC": "/logos/pec.png",
    "SCL": "/logos/scl.png",
  };

  const sponsorLogos = {
    "Sponsor 1": "/images/sponsor1.png",
    "Sponsor 2": "/images/sponsor2.png"
  };

  return (
    <footer className=" text-white py-12 px-4 md:px-8" style={{ backgroundColor: "#6c21a8" }}>
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Partner Institutes */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-300 text-center">Partner Institutes</h4>
          <div className="flex justify-center space-x-4">
            {Object.entries(partnerLogos).map(([name, src]) => (
              <div key={name} className="relative group">
                <Image src={src} alt={name} width={80} height={40} />
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Sponsors Section */}
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-2 text-gray-300">Our Sponsors</h4>
          <div className="flex justify-center space-x-4">
            {Object.entries(sponsorLogos).map(([name, src]) => (
              <div key={name} className="relative group">
                <Image src={src} alt={name} width={80} height={40} />
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Other Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Important Links */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-300">Important Links</h4>
            <ul className="space-y-1">
              <li><Link href="/" className="hover:text-gray-400 transition duration-300 text-sm">Home</Link></li>
              <li><Link href="/accommodation" className="hover:text-gray-400 transition duration-300 text-sm">Accommodation</Link></li>
              <li><Link href="/schedule" className="hover:text-gray-400 transition duration-300 text-sm">Schedule</Link></li>
              <li><Link href="/registration" className="hover:text-gray-400 transition duration-300 text-sm">Registration</Link></li>
              <li><Link href="/contact" className="hover:text-gray-400 transition duration-300 text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-300">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400 transition duration-300" aria-label="Facebook"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-gray-400 transition duration-300" aria-label="Twitter"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-gray-400 transition duration-300" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
              <a href="#" className="hover:text-gray-400 transition duration-300" aria-label="YouTube"><FaYoutube size={20} /></a>
              <a href="#" className="hover:text-gray-400 transition duration-300" aria-label="Instagram"><FaInstagram size={20} /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


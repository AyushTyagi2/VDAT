import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const partnerLogos = {
    "IIT Ropar": "/images/iitrpr.png",
    "IIT Mandi": "/logos/iit-mandi1.png",
    "Chitkara University": "/logos/chitkara__.png",
    "Chandigarh University": "/logos/cu__.jpeg",
    "PEC": "/logos/pec.png",
    "SCL": "/logos/scl__.png",
  };

  const sponsorLogos = {
    "Platinum Partner": "/logos/iit-mandi1.png",
    "Silver Partner" : "/logos/OS.png",
    "Gold Partner": "/images/Agmatel_Keyisght Logo HD.png",
    "Gold Partner, Media Partner": "/images/yourpedia.png",
    "Publication Sponsor": "/images/springer.png",
    "Inaugration Sponsor": "/logos/NXP.jpg",
    "Startup Partner": "/logos/SOC.png",
  };

  return (
    <footer className="text-white py-16 px-4 md:px-8" style={{ backgroundColor: "#6c21a8" }}>
      <div className="max-w-7xl mx-auto">
        
        {/* Partner Institutes Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center text-white">
            Organising Partner Institutes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {Object.entries(partnerLogos).map(([name, src]) => (
              <div
                key={name}
                className="relative group bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 hover:bg-opacity-20 transition-all duration-300 hover:scale-105"
                style={{
                  aspectRatio: '4/3',
                  minHeight: '120px'
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs font-medium block text-center">
                    {name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-20 my-12"></div>

        {/* Sponsors Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-12 text-center text-white">
            Our Sponsors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {Object.entries(sponsorLogos).map(([category, src]) => (
              <div
                key={category}
                className="relative group w-full max-w-xs"
              >
                {/* Category Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`px-4 py-2 rounded-full text-xs font-bold shadow-lg ${
                    category.includes('Platinum') 
                      ? 'bg-gradient-to-r from-gray-400 to-gray-600 text-white' 
                    : category.includes('Silver') 
                      ? 'bg-gradient-to-r from-gray-400 to-gray-600 text-white' 
                      : category.includes('Gold') 
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black' 
                      : category.includes('Publication')
                      ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white'
                      : 'bg-gradient-to-r from-green-400 to-green-600 text-white'
                  }`}>
                    {category}
                  </div>
                </div>
                
                {/* Logo Card */}
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 pt-8 hover:bg-opacity-20 transition-all duration-300 hover:scale-105 border-2 border-white border-opacity-20 hover:border-opacity-40">
                  <div className="relative w-full h-24 mb-2">
                    <Image
                      src={src}
                      alt={category}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
                  category.includes('Platinum') 
                    ? 'bg-gradient-to-t from-gray-500/30 to-transparent' 
                    : category.includes('Gold') 
                    ? 'bg-gradient-to-t from-yellow-500/30 to-transparent' 
                    : category.includes('Publication')
                    ? 'bg-gradient-to-t from-blue-500/30 to-transparent'
                    : 'bg-gradient-to-t from-green-500/30 to-transparent'
                }`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              {/*<span className="text-sm text-gray-300">Follow Us:</span>
              <Link 
                href="#" 
                className="text-white hover:text-gray-300 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </Link>}
              {/* Add more social media icons as needed */}
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-sm text-gray-300">
                &copy; {new Date().getFullYear()} All rights reserved.
              </p>
            </div>

            {/* Contact Info (Optional) */}
            <div className="text-sm text-gray-300 text-center md:text-right">
              {/*<p>Contact: info@organization.com</p>*/}
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;
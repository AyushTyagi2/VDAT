import Image from 'next/image';
import Link from 'next/link';
import {FaLinkedin} from 'react-icons/fa';


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
    "Sponsor 1": "/images/sponsor1.png",
    "Sponsor 2": "/images/sponsor2.png"
  };

  return (
    <footer className="text-white py-12 px-4 md:px-8" style={{ backgroundColor: "#6c21a8" }}>
    <div className="max-w-7xl mx-auto space-y-8">
        <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-300 text-center">Organising Partner Institutes</h4>
            <div className="flex justify-center space-x-4 flex-wrap logo-container">
                {Object.entries(partnerLogos).map(([name, src]) => (
                    <div
                        key={name}
                        className="relative group logo-item p-5"
                        style={{
                            flexShrink: 0,
                            aspectRatio: '270 / 144', // Maintain ratio
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        <Image
                            src={src}
                            alt={name}
                            layout="fill"
                            objectFit="contain"
                            className='pb-5'
                        />
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100">
                            {name}
                        </span>
                    </div>
                ))}
          </div>
        </div>
        
        {/* Sponsors Section */}
        {/* <div className="text-center">
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
        </div> */}

        {/* Other Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Important Links */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-300">Important Links</h4>
            <ul className="space-y-1">
              <li><Link href="/" className="hover:text-gray-400 transition duration-300 text-sm">Home</Link></li>
              <li><Link href="/schedule" className="hover:text-gray-400 transition duration-300 text-sm">Schedule</Link></li>
              <li><Link href="/registration" className="hover:text-gray-400 transition duration-300 text-sm">Registration</Link></li>
              
            </ul>
          </div>

          {/* Follow Us */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-300">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400 transition duration-300" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
            </div>
          </div> */}
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


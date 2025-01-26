import React from "react";
import Image from "next/image";
import Navbar from "../home/Navbar";
import Footer from "../footer/footer";

const VenuePage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-50 min-h-screen font-sans">
        {/* Hero Section */}
        <header
          className="relative h-[50vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('/images/iit-ropar-5.avif')" }}
        >
          <div className="absolute inset-0 bg-black/40" /> {/* Darker overlay */}
          <div className="relative z-10 text-center text-white"> {/* Content on top */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
              Venue & Travel
            </h1>
            <p className="text-lg md:text-2xl font-light drop-shadow-lg">
              Getting to IIT Ropar
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto py-16 px-6 md:px-12">
          {/* About IIT Ropar */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800 border-b border-gray-200 pb-4">
              About IIT Ropar
            </h2>
            <div className="prose lg:prose-xl text-gray-700"> {/* Use prose class */}
              <p>
                IIT Ropar, established in 2008, is an Institute of National
                Importance located in Rupnagar, Punjab. The institute is known
                for its modern infrastructure, vibrant academic environment, and
                commitment to research and innovation. The campus is situated on
                the banks of the Sutlej River, providing a serene and conducive
                atmosphere for learning.
              </p>
              <p>
                The city of Rupnagar, formerly known as Ropar, holds significant
                historical importance, tracing its roots back to the Indus Valley
                Civilization. The region offers a blend of historical sites,
                natural beauty, and cultural experiences.
              </p>
            </div>
          </section>

          {/* Nearby Places */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800 border-b border-gray-200 pb-4">
              Nearby Places to Visit
            </h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-3 prose lg:prose-xl">
              <li>
                <b>Chandigarh:</b> The well-planned capital city of Punjab and
                Haryana, known for its architecture, gardens (Rock Garden, Sukhna
                Lake), and museums. (Approx. 45 km)
              </li>
              <li>
                <b>Ropar Wetland:</b> A beautiful bird sanctuary and natural
                reserve on the Sutlej River, perfect for birdwatching and nature
                walks. (Approx. 10 km)
              </li>
              <li>
                <b>Virasat-e-Khalsa, Anandpur Sahib:</b> A museum showcasing the
                rich history and culture of Sikhism, known for its stunning
                architecture. (Approx. 45 km)
              </li>
              {/* Add more places */}
            </ul>
          </section>

          {/* How to Reach */}
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800 border-b border-gray-200 pb-4">
              How to Reach IIT Ropar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> {/* Increased gap */}
              <div className="md:col-span-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.275485451963!2d76.5298822151123!3d30.97500358163538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905591963000001%3A0x28f725a381440751!2sIndian%20Institute%20of%20Technology%20Ropar!5e0!3m2!1sen!2sin!4v1686214358504!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IIT Ropar Map" // Added title for accessibility
                ></iframe>
              </div>
              <div className="md:col-span-1 prose lg:prose-xl text-gray-700">
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <b>From Chandigarh Airport (IXC):</b> Pre-paid taxis are
                    readily available (approx. ₹1500).
                  </li>
                  <li>
                    <b>From Chandigarh Railway Station (CDG):</b> Pre-paid taxis
                    (approx. ₹1500) or buses to Rupnagar followed by an
                    auto-rickshaw to IIT Ropar.
                  </li>
                  <li>
                    <b>From Rupnagar Railway Station (RPAR):</b> Auto-rickshaws are
                    available to reach IIT Ropar.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default VenuePage;
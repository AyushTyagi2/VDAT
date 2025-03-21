'use client'
import React from 'react';
import Footer from '../footer/footer';
import Navbar from '../home/Navbar';

const CircuitpreneurBanner = () => {
  return (
    <section
      className="relative flex items-center justify-center text-center py-20 md:py-32 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/circuit-banner.avif')",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-purple-500 to-indigo-600 opacity-75"></div>
      <div className="relative z-10 px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Calling all Innovators & Tech Enthusiasts!
        </h1>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          If you have a vision to integrate novelty in circuit design with entrepreneurship, then this call is for you. VDAT-2025 brings an exciting opportunity to showcase your innovation at the CIRCUITPRENEUR Contest. Join an elite platform witnessed by leading VLSI industry experts, eminent academicians, and global researchers. Don&apos;t miss your chance to be the next big CIRCUITPRENEUR.
        </p>
      </div>
    </section>
  );
};

const handleRegistrationClick = () => {
  window.open("https://forms.gle/HWNBZKyaargbHGtJ7", "_blank");
};

const Circuitpreneur = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <header
        className="text-center text-white py-24 md:py-72 relative" // Adjusted padding for responsiveness
        style={{
          backgroundImage: "url('/images/iit-ropar-5.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <div className="bg-black bg-opacity-50 py-6 md:py-20 px-4"> {/* Adjusted padding for responsiveness */}
          <h1 className="text-4xl md:text-5xl font-extrabold">
          CIRCUITPRENEUR - CALL FOR IDEA PICHING</h1> {/* Adjusted font size for responsiveness */}
          <h2 className="text-xl md:text-2xl mt-4 pb-4 font-light">
          Calling all the Innovators, Tech enthusiasts, and Future Entrepreneurs.
          </h2>          
        </div>
        <div className="bg-black bg-opacity-50 py-12 md:py-6 px-4">
          <button
            className="bg-purple-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-purple-700 transition duration-200 ease-in-out"
            onClick={handleRegistrationClick}
          >
            Register Now
          </button>
        </div>
      </header>
        <CircuitpreneurBanner></CircuitpreneurBanner>
      <main className="container mx-auto px-4 py-12">
        <ParagraphSection
          title="About CIRCUITPRENEUR Contest"
          content={`If you have a vision to integrate novelty in circuit design with entrepreneurship, this call is for you. VDAT-2025 brings an exciting opportunity to showcase your innovation at the CIRCUITPRENEUR Contest. This elite platform is witnessed by leading VLSI industry experts, eminent academicians, and global researchers. Don’t miss your chance to be the next big CIRCUITPRENEUR.`}
          isAlternate={false}
        />
        <ListSection
          title="Thematic Areas"
          items={[
            "Product Circuit Design Innovation",
            "Hardware-Software Co-Design Tool for Embedded System",
            "AI Optimized Hardware Design for Real Time Image Detection",
            "Secure Hardware for IoT Communication",
            "3D Printing based Power Efficient Circuit Manufacturing Technology"
          ]}
          isAlternate={true}
        />
        <ParagraphSection
          title="Who Can Participate?"
          content={`This contest is open to individuals and teams at all levels of expertise. Whether you are a passionate novice or an experienced professional, share your perspective on innovating the circuit/product design industry. Register on or before 15th April, 2025.`}
          isAlternate={false}
        />
      </main>

      <Footer />
    </div>
  );
};

const ParagraphSection = ({ title, content, isAlternate }) => (
  <section className={`py-12 px-4 ${isAlternate ? 'bg-gray-100' : 'bg-white'} shadow-md rounded-xl mb-8`}>
    <div className="max-w-6xl mx-auto">
      <div className="section-heading">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 text-center mb-6 underline-animation">
          {title}
        </h2>
      </div>
      <div className="underline mb-6">
        <div className="dot"></div>
      </div>
      <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-loose">{content}</p>
    </div>
  </section>
);

const ListSection = ({ title, items, isAlternate }) => (
  <section className={`py-12 px-4 ${isAlternate ? 'bg-gray-100' : 'bg-white'} shadow-md rounded-xl mb-8`}>
    <div className="max-w-6xl mx-auto">
      <div className="section-heading">
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-6 underline-animation">
          {title}
        </h2>
      </div>
      <div className="underline mb-6">
        <div className="dot"></div>
      </div>
      <ul className="list-none text-lg text-gray-700 max-w-4xl mx-auto">
        {items.map((item, index) => (
          <li key={index} className="mb-2 flex items-start">
            <span className="mr-2 text-purple-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.75l-2.719 5.513L3.5 11.12l4.439 4.329-.785 6.563L12 18.29l5.846 3.722-.785-6.563 4.439-4.33-5.781-.857L12 4.75z"
                />
              </svg>
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Circuitpreneur;

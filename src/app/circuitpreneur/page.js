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
      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-purple-500 to-indigo-600 opacity-75"></div>
      <div className="relative z-10 px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Are you ready to revolutionize the future of VLSI design?
        </h1>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          Showcase your groundbreaking ideas and become a trailblazer in the semiconductor industry. Participate in the CIRCUITPRENEUR Contest at VDAT-2025 and pitch your startup to industry leaders and investors!
        </p>
      </div>
    </section>
  );
};

const handleRegistrationClick = () => {
  window.open("https://forms.gle/Cgmqhrxg95V1mNDj9", "_blank");
};


const Circuitpreneur = () => {
  return (
    <div className="bg-gray-50">
      <div className='bg-black'>
        <Navbar />
      </div>
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
          CIRCUITPRENEUR - CALL FOR IDEA PITCHING</h1> {/* Adjusted font size for responsiveness */}
          <h2 className="text-xl md:text-2xl mt-4 pb-4 font-light">
          Calling all the Innovators, Tech enthusiasts, and Future Entrepreneurs.
          </h2>          
        </div>
        <div className="bg-black bg-opacity-50 py-12 md:py-6 px-4">
          
        </div>
      </header>
        <CircuitpreneurBanner></CircuitpreneurBanner>
      <main className="container mx-auto px-4 py-12">
        <Paragraph_Section
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
            "3D Printing based Power Efficient Circuit Manufacturing Technology",
            "Open Source RISC-V Design"
          ]}
          isAlternate={true}
        />
        <ListSection
          title="PitchDeck Submission Format"
          items={[
            "Title",
            "Idea",
            "Novelty/ Uniqueness",
            "Benefits (problem solved)",
            "Design Details (Flowchart/ Block Diagram)",
            "Results/ Prototyping",
            "Market Opportunity",
            "Competitive Landscape",
            "Budget Requirements",
            "Resource Mobilisation Plan",
            "Summary"
          ]}          
          isAlternate={false}
        />
        <ListSection
          title="Event Highlights"
          items={[
            "Opportunity to pitch your startup to Industry leaders and Investors.",
            "Exciting prizes and recognition for innovative solutions.",
            "Networking with VLSI experts and Tech enthusiasts."
          ]}          
          isAlternate={true}
        />
        <ParagraphSection
          title="Who Can Participate?"
          content={"Startups, researchers and entrepreneurs with innovative solutions in VLSI Design, EDA, Embedded systems, or any Electronics related field. This contest is open to individuals and teams at all levels of expertise. Irrespective of whether you are a passionate novice or an experienced professional, come share your perspective in innovating, the circuit/product design industry. The submissions are welcome for Ideation Design stage to Higher TRL (prototyping). Registered on the link on or before 15th April, 2025"}
          isAlternate={false}
        />
        
        <section className="text-center bg-white py-12">
        <h2 className="text-4xl font-bold text-violet-800 uppercase">For Queries</h2>
        <p className="text-lg text-gray-700">Email: <a href="mailto:vdat2025@iitrpr.ac.in" className="text-blue-600">vdat2025startup@gmail.com</a></p>
      </section>
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
      <div className="text-center mt-4">
      <button
      className="bg-purple-600 text-white px-10 py-2 rounded-lg hover:bg-purple-700 transition duration-200 ease-in-out"
      onClick={handleRegistrationClick}
      >
      Register Now
      </button>
      </div>
  </section>
);
const Paragraph_Section = ({ title, content, isAlternate }) => (
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

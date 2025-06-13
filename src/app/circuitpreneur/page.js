'use client'
import React from 'react';
import Footer from '../footer/footer';
import Navbar from '../home/Navbar';

const CircuitpreneurBanner = () => {
  return (
    <section
      className="relative flex items-center justify-center text-center py-20 md:py-28"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #1a0033 100%)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)"
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* Circuit pattern overlay */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M20 20L50 20M50 20L50 80M50 80L80 80" stroke="#8844ff" strokeWidth="2" fill="none"/>
                <circle cx="20" cy="20" r="4" fill="#8844ff"/>
                <circle cx="80" cy="80" r="4" fill="#8844ff"/>
                <path d="M20 80L40 80M40 80L40 40M40 40L80 40" stroke="#8844ff" strokeWidth="2" fill="none"/>
                <circle cx="20" cy="80" r="4" fill="#8844ff"/>
                <circle cx="80" cy="40" r="4" fill="#8844ff"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>
      </div>
      
      {/* Accent lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-900 via-purple-500 to-purple-900"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-900 via-purple-500 to-purple-900"></div>
      
      <div className="relative z-10 px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300 mb-3">
            Are you ready to revolutionize
          </h2>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-200 mb-8">
            the future of VLSI design?
          </h2>
        </div>
        
        <div className="bg-black bg-opacity-30 p-6 rounded-lg border border-purple-800">
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
            Showcase your groundbreaking ideas and become a trailblazer in the semiconductor industry.
          </p>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Participate in the <span className="font-bold text-purple-300">CIRCUITPRENEUR</span> Contest at VDAT-2025 and pitch your startup to industry leaders and investors!
          </p>
        </div>
        
        <div className="mt-8">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-700 to-indigo-700 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-indigo-600 transition duration-300 shadow-lg">
            Submit Your Idea
          </button>
        </div>
      </div>
    </section>
  );
};

// Extracted icons into separate component for reusability
const Icon = ({ name, className = "w-5 h-5 flex-shrink-0" }) => {
  const iconStyles = {
    star: "text-purple-400",
    check: "text-purple-400",
    trophy: "text-purple-400",
    email: "text-purple-400",
    calendar: "text-purple-400",
  };
  
  const combinedClassName = `${className} ${iconStyles[name] || ""}`;
  
  switch(name) {
    case 'star':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={combinedClassName}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    case 'check':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={combinedClassName}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      );
    case 'trophy':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={combinedClassName}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      );
    case 'email':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={combinedClassName} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 'calendar':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={combinedClassName} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    default:
      return null;
  }
};

// Circuit pattern background component for consistency
const CircuitPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20L50 20M50 20L50 80M50 80L80 80" stroke="#8844ff" strokeWidth="2" fill="none"/>
              <circle cx="20" cy="20" r="4" fill="#8844ff"/>
              <circle cx="80" cy="80" r="4" fill="#8844ff"/>
              <path d="M20 80L40 80M40 80L40 40M40 40L80 40" stroke="#8844ff" strokeWidth="2" fill="none"/>
              <circle cx="20" cy="80" r="4" fill="#8844ff"/>
              <circle cx="80" cy="40" r="4" fill="#8844ff"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)"/>
        </svg>
      </div>
    </div>
  );
};

// Improved ContentSection component with better styling to match banner
const ContentSection = ({ title, content, items, type, icon, bgColor }) => {
  return (
    <section className={`relative py-12 px-6 ${bgColor} rounded-xl shadow-md mb-8 overflow-hidden`}>
      {/* Add circuit pattern overlay to match banner */}
      <CircuitPattern />
      
      {/* Accent lines to match banner */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-900 via-purple-500 to-purple-900"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-900 via-purple-500 to-purple-900"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-400 mb-4">
            {title}
          </h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
        </div>
        
        {type === 'paragraph' && (
          <div>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
              {content}
            </p>
          </div>
        )}
        
        {type === 'list' && (
          <ul className="grid md:grid-cols-2 gap-x-6 gap-y-3 text-lg text-gray-200 max-w-4xl mx-auto">
            {items.map((item, index) => (
              <li key={index} className="flex items-start mb-2 p-2 hover:bg-black hover:bg-opacity-30 rounded transition-all border border-transparent hover:border-purple-800">
                <span className="mr-3 mt-1">
                  <Icon name={icon} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

// Updated content sections with appropriate backgrounds
const CONTENT_SECTIONS = [
  {
    title: "About CIRCUITPRENEUR Contest",
    content: "If you have a vision to integrate novelty in circuit design with entrepreneurship, this call is for you. VDAT-2025 brings an exciting opportunity to showcase your innovation at the CIRCUITPRENEUR Contest. This elite platform is witnessed by leading VLSI industry experts, eminent academicians, and global researchers. Don't miss your chance to be the next big CIRCUITPRENEUR.",
    type: "paragraph",
    bgColor: "bg-gray-900 text-white"
  },
  {
    title: "Thematic Areas",
    items: [
      "Product Circuit Design Innovation",
      "Hardware-Software Co-Design Tool for Embedded System",
      "AI Optimized Hardware Design for Real Time Image Detection",
      "Secure Hardware for IoT Communication",
      "3D Printing based Power Efficient Circuit Manufacturing Technology",
      "Open Source RISC-V Design"
    ],
    type: "list",
    icon: "star",
    bgColor: "bg-gray-800 text-white"
  },
  {
    title: "PitchDeck Submission Format",
    items: [
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
    ],
    type: "list",
    icon: "check",
    bgColor: "bg-gray-900 text-white"
  },
  {
    title: "Event Highlights",
    items: [
      "Opportunity to pitch your startup to Industry leaders and Investors.",
      "Exciting prizes and recognition for innovative solutions.",
      "Networking with VLSI experts and Tech enthusiasts."
    ],
    type: "list",
    icon: "trophy",
    bgColor: "bg-gray-800 text-white"
  },
  {
    title: "Who Can Participate?",
    content: "Startups, researchers and entrepreneurs with innovative solutions in VLSI Design, EDA, Embedded systems, or any Electronics related field. This contest is open to individuals and teams at all levels of expertise. Irrespective of whether you are a passionate novice or an experienced professional, come share your perspective in innovating, the circuit/product design industry. The submissions are welcome for Ideation Design stage to Higher TRL (prototyping). Registered on the link on or before 15th June, 2025",
    type: "paragraph",
    bgColor: "bg-gray-900 text-white"
  }
];

const Circuitpreneur = () => {
  const handleRegistrationClick = () => {
    window.open("https://forms.gle/Cgmqhrxg95V1mNDj9", "_blank");
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Dark navbar background */}
      <div className="bg-black">
        <Navbar />
      </div>

      {/* Improved Hero Section */}
      <header
        className="text-center text-white py-40 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/iit-ropar-5.avif')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-purple-900/80"></div>
        
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-hero" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M20 20L50 20M50 20L50 80M50 80L80 80" stroke="#8844ff" strokeWidth="2" fill="none"/>
                <circle cx="20" cy="20" r="4" fill="#8844ff"/>
                <circle cx="80" cy="80" r="4" fill="#8844ff"/>
                <path d="M20 80L40 80M40 80L40 40M40 40L80 40" stroke="#8844ff" strokeWidth="2" fill="none"/>
                <circle cx="20" cy="80" r="4" fill="#8844ff"/>
                <circle cx="80" cy="40" r="4" fill="#8844ff"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-hero)"/>
          </svg>
        </div>
        
        {/* Accent lines */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-900 via-purple-500 to-purple-900"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-900 via-purple-500 to-purple-900"></div>
        
        <div className="relative z-10 px-4 py-16">
          <h1 className="text-6xl font-extrabold tracking-tight uppercase mb-6 drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-200">CIRCUITPRENEUR</h1>
          <p className="text-xl max-w-2xl mx-auto font-light text-purple-100 mb-8">CALL FOR IDEA PITCHING</p>
          
          {/* Subtle Date Banner positioned below heading */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-purple-800/40 to-indigo-800/40 backdrop-blur-sm border border-purple-600/30 rounded-lg py-4 px-6 shadow-lg">
              <div className="flex items-center justify-center text-purple-200">
                <Icon name="calendar" className="h-5 w-5 mr-3" />
                <div className="text-center">
                  <p className="text-sm font-medium text-purple-300">Registration Deadline</p>
                  <p className="text-lg font-semibold text-white">15th June, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Banner Section */}
      <CircuitpreneurBanner />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Map through content sections for cleaner rendering */}
          {CONTENT_SECTIONS.map((section, index) => (
            <ContentSection 
              key={index}
              title={section.title}
              content={section.content}
              items={section.items}
              type={section.type}
              icon={section.icon}
              bgColor={section.bgColor}
            />
          ))}
          
          {/* Call to Action */}
          <div className="mt-16 text-center relative bg-gradient-to-r from-purple-900 to-indigo-900 py-12 px-4 rounded-xl shadow-xl overflow-hidden">
            {/* Circuit pattern overlay */}
            <CircuitPattern />
            
            {/* Accent lines */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-900 via-purple-500 to-purple-900"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-900 via-purple-500 to-purple-900"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-200 mb-6">Ready to Join the Revolution?</h2>
              <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
                Submit your innovative idea and be part of shaping the future of VLSI design!
              </p>
              <button
                className="bg-white text-purple-700 px-10 py-4 text-lg rounded-lg font-medium hover:bg-purple-100 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                onClick={handleRegistrationClick}
                aria-label="Register for CIRCUITPRENEUR Contest"
              >
                Submit your Idea
              </button>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <section className="max-w-4xl mx-auto text-center relative bg-gray-900 py-12 mt-16 rounded-xl shadow-md overflow-hidden">
          {/* Circuit pattern overlay */}
          <CircuitPattern />
          
          {/* Accent lines */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-900 via-purple-500 to-purple-900"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-900 via-purple-500 to-purple-900"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-200 mb-4">For Queries</h2>
            <div className="h-1 w-16 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-100 flex items-center justify-center">
              <Icon name="email" className="h-6 w-6 mr-2" />
              <span>Email: </span>
              <a 
                href="mailto:vdat2025startup@gmail.com" 
                className="text-purple-300 ml-1 hover:underline"
                aria-label="Send email to VDAT 2025 startup team"
              >
                vdat2025startup@gmail.com
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Circuitpreneur;
'use client'
import React from 'react';
import Footer from '../footer/footer';
import Navbar from '../home/Navbar';

const PhDForumBanner = () => {
  return (
    <section
      className="relative flex items-center justify-center text-center py-20 md:py-28"
      style={{
        background: "linear-gradient(135deg, #000033 0%, #1a0033 100%)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)"
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* Modified circuit pattern for more academic feel */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="academic-circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M20 20L50 20M50 20L50 80M50 80L80 80" stroke="#9966ff" strokeWidth="2" fill="none"/>
                <circle cx="20" cy="20" r="4" fill="#9966ff"/>
                <circle cx="80" cy="80" r="4" fill="#9966ff"/>
                <path d="M20 80L40 80M40 80L40 40M40 40L80 40" stroke="#9966ff" strokeWidth="2" fill="none"/>
                <circle cx="20" cy="80" r="4" fill="#9966ff"/>
                <circle cx="80" cy="40" r="4" fill="#9966ff"/>
                {/* Additional academic-inspired elements */}
                <path d="M100 20L120 20M120 20L120 60" stroke="#9966ff" strokeWidth="2" fill="none"/>
                <circle cx="100" cy="20" r="4" fill="#9966ff"/>
                <path d="M10 100L10 120M10 120L60 120" stroke="#9966ff" strokeWidth="2" fill="none"/>
                <circle cx="10" cy="100" r="3" fill="#9966ff"/>
                <circle cx="60" cy="120" r="3" fill="#9966ff"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#academic-circuit)"/>
          </svg>
        </div>
      </div>
      
      {/* Accent lines with academic twist */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-900 via-purple-500 to-indigo-900"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-900 via-purple-500 to-indigo-900"></div>
      
      <div className="relative z-10 px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="flex justify-center mb-6">
            <svg className="w-16 h-16 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-200 mb-3">
            Doctoral Research Symposium
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-200 mb-8">
            Shaping the Future of VLSI Technology
          </h2>
        </div>
        
        <div className="bg-black bg-opacity-40 p-8 rounded-lg border border-purple-700 backdrop-blur-sm">
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
            Present your completed or near-completion doctoral research at VDAT-2025's prestigious PhD Forum.
          </p>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Connect with leading <span className="font-bold text-purple-300">researchers, industry experts, and fellow academics</span> in the field of VLSI Design and Semiconductor Technology.
          </p>
        </div>
        
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <button className="px-8 py-3 bg-gradient-to-r from-indigo-700 to-purple-700 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition duration-300 shadow-lg flex items-center">
            <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Submit Abstract
          </button>
          <a href="#eligibility" className="px-8 py-3 bg-transparent border-2 border-purple-600 text-purple-300 font-semibold rounded-lg hover:bg-purple-900 hover:bg-opacity-30 transition duration-300 flex items-center">
            <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

// Enhanced icon component
const Icon = ({ name, className = "w-5 h-5 flex-shrink-0" }) => {
  const iconStyles = {
    star: "text-indigo-400",
    check: "text-purple-400",
    trophy: "text-indigo-400",
    email: "text-purple-400",
    calendar: "text-indigo-400",
    document: "text-purple-400",
    location: "text-purple-400",
    clock: "text-purple-400",
    research: "text-indigo-400",
    format: "text-purple-400",
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case 'document':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={combinedClassName} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    case 'location':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={combinedClassName} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case 'clock':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={combinedClassName} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'research':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={combinedClassName} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    case 'format':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={combinedClassName} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      );
    default:
      return null;
  }
};

// Subtle academic circuit pattern background component
const AcademicCircuitPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="academic-circuit-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M20 20L50 20M50 20L50 80M50 80L80 80" stroke="#9966ff" strokeWidth="2" fill="none"/>
              <circle cx="20" cy="20" r="4" fill="#9966ff"/>
              <circle cx="80" cy="80" r="4" fill="#9966ff"/>
              <path d="M20 80L40 80M40 80L40 40M40 40L80 40" stroke="#9966ff" strokeWidth="2" fill="none"/>
              <circle cx="20" cy="80" r="4" fill="#9966ff"/>
              <circle cx="80" cy="40" r="4" fill="#9966ff"/>
              {/* Additional academic-inspired elements */}
              <path d="M100 20L120 20M120 20L120 60" stroke="#9966ff" strokeWidth="2" fill="none"/>
              <circle cx="100" cy="20" r="4" fill="#9966ff"/>
              <path d="M10 100L10 120M10 120L60 120" stroke="#9966ff" strokeWidth="2" fill="none"/>
              <circle cx="10" cy="100" r="3" fill="#9966ff"/>
              <circle cx="60" cy="120" r="3" fill="#9966ff"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#academic-circuit-pattern)"/>
        </svg>
      </div>
    </div>
  );
};

// Reimagined content section component
const ContentSection = ({ id, title, content, items, type, icon, bgColor, accentColor = "purple" }) => {
  const accentMap = {
    "purple": "from-purple-900 via-purple-500 to-purple-900",
    "indigo": "from-indigo-900 via-indigo-500 to-indigo-900",
    "mixed": "from-purple-900 via-indigo-500 to-purple-900"
  };
  
  const gradientClass = accentMap[accentColor] || accentMap.purple;
  
  return (
    <section id={id} className={`relative py-12 px-6 ${bgColor} rounded-xl shadow-md mb-8 overflow-hidden`}>
      {/* Add academic circuit pattern overlay */}
      <AcademicCircuitPattern />
      
      {/* Accent lines */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientClass}`}></div>
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientClass}`}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
            {title}
          </h2>
          <div className={`h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto`}></div>
        </div>
        
        {type === 'paragraph' && (
          <div>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
              {content}
            </p>
          </div>
        )}
        
        {type === 'list' && (
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-lg text-gray-200 max-w-4xl mx-auto">
            {items.map((item, index) => (
              <li key={index} className="flex items-start p-3 hover:bg-black hover:bg-opacity-40 rounded-lg transition-all border border-transparent hover:border-indigo-700">
                <span className="mr-3 mt-1">
                  <Icon name={icon} className="w-6 h-6" />
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

// Animated timeline component for important dates
const EnhancedTimeline = () => {
  const dates = [
    {
      date: "15th May 2025",
      title: "Submission Deadline",
      description: "Last date to submit your PhD Forum abstract",
      icon: "calendar"
    },
    {
      date: "15th June 2025",
      title: "Acceptance Notification",
      description: "Notifications of acceptance will be sent out",
      icon: "email"
    },
    {
      date: "5th July 2025",
      title: "Camera-ready Submission",
      description: "Deadline for camera-ready submission",
      icon: "document"
    },
    {
      date: "7th - 9th Aug 2025",
      title: "Conference Date",
      description: "PhD Forum presentation at VDAT-2025 in Chandigarh, India",
      icon: "location"
    }
  ];

  return (
    <div className="relative py-16 px-6 bg-gray-900 rounded-xl shadow-md mb-8 overflow-hidden">
      <AcademicCircuitPattern />
      
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-900 via-purple-500 to-indigo-900"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-900 via-purple-500 to-indigo-900"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-indigo-900 to-purple-900 p-3 rounded-full mb-6">
            <Icon name="calendar" className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
            Important Dates
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Mark your calendar with these crucial deadlines for participating in the PhD Forum</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {dates.map((item, index) => (
            <div key={index} className="mb-8 flex">
              <div className="w-28 flex-shrink-0 flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-indigo-700 to-purple-700 flex items-center justify-center shadow-lg">
                  <Icon name={item.icon} className="w-6 h-6 text-white" />
                </div>
                {index !== dates.length - 1 && (
                  <div className="h-full w-1 bg-gradient-to-b from-indigo-700 to-purple-700 my-1"></div>
                )}
              </div>
              <div className="bg-gradient-to-r from-black to-gray-900 bg-opacity-50 p-5 rounded-lg border-l-4 border-indigo-600 flex-grow hover:shadow-lg transition-all transform hover:-translate-y-1">
                <h3 className="text-indigo-300 font-bold text-xl">{item.date}</h3>
                <h4 className="text-white font-medium text-lg mt-1">{item.title}</h4>
                <p className="text-gray-300 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Submission format component with academic styling
const SubmissionFormat = () => {
  return (
    <div className="relative py-16 px-6 bg-gray-800 rounded-xl shadow-md mb-8 overflow-hidden">
      <AcademicCircuitPattern />
      
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-900 via-indigo-500 to-purple-900"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-900 via-indigo-500 to-purple-900"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-purple-900 to-indigo-900 p-3 rounded-full mb-6">
            <Icon name="format" className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-4">
            Submission Format Guidelines
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto"></div>
        </div>
        
        <div className="bg-black bg-opacity-40 p-8 rounded-xl border border-purple-800 max-w-4xl mx-auto backdrop-blur-sm">
          <div className="mb-8">
            <h3 className="text-purple-300 text-xl font-semibold mb-3 flex items-center">
              <svg className="w-6 h-6 mr-2 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Document Format
            </h3>
            <ul className="text-gray-200 space-y-2">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Extended abstract in PDF format only</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Times New Roman font with minimum 10pt size</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Maximum three pages including tables, diagrams, and references</span>
              </li>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="text-purple-300 text-xl font-semibold mb-3 flex items-center">
              <svg className="w-6 h-6 mr-2 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Required Content
            </h3>
            <ul className="text-gray-200 space-y-2">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Title (limited to 20 words)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Abstract clearly outlining the thesis intent</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>At least 5 keywords</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>At least 3 major research findings</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Brief explanation of research outcomes</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Research papers/tools published from the thesis</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Author qualifications and experience</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-purple-300 text-xl font-semibold mb-3 flex items-center">
              <svg className="w-6 h-6 mr-2 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              Presentation Format
            </h3>
            <p className="text-gray-200">15-minute in-person presentation at the conference venue</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// PhD Forum content sections
const CONTENT_SECTIONS = [
  {
    id: "eligibility",
    title: "PhD Forum Overview",
    content: "The Organizing Committee of VDAT 2025 invites submissions to the PhD Forum to be presented at the conference in Chandigarh. This prestigious forum provides an exclusive platform for PhD students who have submitted their thesis within the past year (after 1st June 2024) or are nearing completion. Present your cutting-edge research, gain valuable feedback, and establish meaningful connections with leading researchers and industry professionals in the VLSI design community.",
    type: "paragraph",
    bgColor: "bg-gray-900 text-white",
    accentColor: "indigo"
  },
  {
    id: "domains",
    title: "Research Domains",
    items: [
      "VLSI Design and Semiconductor Technology",
      "Next Generation Chip Architecture",
     "AI/ML for VLSI Applications",
      "Emerging Computing Paradigms (Quantum, Neuromorphic)",
      "Low Power Design and Energy-Efficient Computing",
      "Security in VLSI Design",
      "Memory Technologies and Design",
      "3D IC Design and 2.5D Integration",
      "Electronic Design Automation (EDA)",
      "Hardware Accelerators for AI/ML Applications",
      "Verification and Testing Methodologies",
      "System-on-Chip (SoC) Design"
    ],
    type: "list",
    icon: "research",
    bgColor: "bg-gray-800 text-white",
    accentColor: "purple"
  },
  {
    id: "benefits",
    title: "Why Present at the PhD Forum?",
    items: [
      "Showcase your innovative research to industry experts and academia",
      "Receive valuable feedback from renowned researchers in your field",
      "Network with potential employers and collaborators",
      "Add a prestigious presentation to your academic portfolio",
      "Special recognition for outstanding presentations",
      "Conference proceedings publication opportunity",
      "Early career mentorship from established researchers",
      "Exposure to cutting-edge industry trends and academic research"
    ],
    type: "list",
    icon: "star",
    bgColor: "bg-gray-900 text-white",
    accentColor: "mixed"
  },
  {
    id: "eligibility-criteria",
    title: "Eligibility Criteria",
    items: [
      "PhD students who have submitted their thesis after 1st June 2024",
      "PhD students who are within 6 months of thesis submission",
      "Research must be related to VLSI design or semiconductor technology domains",
      "Student must be the primary researcher and presenter",
      "Abstract must be in English and follow submission guidelines",
      "Must be available to present in-person at the conference venue",
      "Thesis supervisor endorsement required",
      "Abstract must not have been presented at previous VDAT conferences"
    ],
    type: "list",
    icon: "check",
    bgColor: "bg-gray-800 text-white",
    accentColor: "indigo"
  },
  {
    id: "awards",
    title: "Outstanding Presentation Awards",
    content: "The PhD Forum will recognize exceptional research through the 'Outstanding PhD Research Awards.' These prestigious accolades will be presented to researchers whose work demonstrates exceptional innovation, technical depth, and potential impact on the future of VLSI design. Winners will receive recognition during the conference, a certificate of excellence, and special mention in the conference proceedings. Additionally, top presenters may be invited to submit an extended version of their work to a special issue of a reputed journal in the field.",
    type: "paragraph",
    bgColor: "bg-gray-900 text-white",
    accentColor: "purple"
  }
];

// Contact information component
const ContactInfo = () => {
    return (
      <div className="relative py-8 px-4 bg-gray-800 rounded-xl shadow-md mb-8 overflow-hidden">
        {/* Missing AcademicCircuitPattern component implementation */}
        <div className="absolute inset-0 opacity-10">
          {/* Simple pattern background as a replacement */}
          <div className="w-full h-full bg-repeat" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
        </div>
        
        {/* Gradient borders */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-900 via-purple-500 to-indigo-900"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-900 via-purple-500 to-indigo-900"></div>
        
        <div className="w-full max-w-6xl mx-auto relative z-10">
          {/* Header section */}
          <div className="text-center mb-6">
            <div className="inline-block bg-gradient-to-r from-indigo-900 to-purple-900 p-3 rounded-full mb-4">
              {/* Fixed icon implementation */}
              <div className="w-8 h-8 text-purple-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">
              Contact Information
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
          </div>
          
          {/* Content section */}
          <div className="bg-black bg-opacity-40 p-6 rounded-xl border border-indigo-800 max-w-4xl mx-auto backdrop-blur-sm">
            <div className="grid grid-cols-1 gap-6">
              <div className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-lg border border-purple-800 hover:shadow-lg transition-all">
                <h3 className="text-purple-300 text-xl font-semibold mb-4">General Inquiries</h3>
                <div className='flex justify-between'>
                <div className="flex items-start mb-3">
                  {/* Email icon */}
                  <div className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium">Email:</p>
                    <p className="text-gray-300 break-words">dpsahoo@iitbbs.ac.in</p>
                  </div>
                </div>
                <div className="flex items-start">
                  {/* Location/Website icon */}
                  <div className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium">Website:</p>
                    <a href="https://softconf.com/vlsi/vdat2025" className="text-purple-300 hover:text-purple-200 underline break-words" target="_blank" rel="noopener noreferrer">
                      https://softconf.com/vlsi/vdat2025
                    </a>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

// FAQ component
const FAQ = () => {
  const faqs = [
    {
      question: "Who is eligible to submit to the PhD Forum?",
      answer: "PhD students who have submitted their thesis after 1st June 2024 or are within 6 months of thesis submission are eligible to submit to the PhD Forum. The research must be related to VLSI design or semiconductor technology domains."
    },
    {
      question: "Is there a registration fee for the PhD Forum?",
      answer: "Yes, PhD Forum presenters must register for the main VDAT-2025 conference. There is a special discounted student registration rate for PhD Forum presenters. Details can be found on the conference registration page."
    },
    {
      question: "Can I present my work remotely if I cannot attend in person?",
      answer: "The PhD Forum is designed as an in-person event to facilitate networking and meaningful interactions. Remote presentations are generally not accepted except in exceptional circumstances, which will be evaluated on a case-by-case basis."
    },
    {
      question: "Will my presentation be published in the conference proceedings?",
      answer: "Yes, accepted PhD Forum abstracts will be included in the VDAT-2025 conference proceedings. Outstanding presentations may also be invited to submit an extended version for a special journal issue."
    },
    {
      question: "Can I submit work that has been published elsewhere?",
      answer: "PhD Forum submissions should represent original work that forms part of your doctoral research. While the core research may have been partially published, your PhD Forum presentation should offer a comprehensive overview of your thesis work."
    },
    {
      question: "How are the Outstanding PhD Research Awards selected?",
      answer: "The awards will be judged by a panel of experts based on originality, technical contribution, presentation quality, potential impact, and the student's ability to address questions from the audience and judges."
    }
  ];

  return (
    <div className="relative py-16 px-6 bg-gray-900 rounded-xl shadow-md overflow-hidden">
      <AcademicCircuitPattern />
      
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-900 via-indigo-500 to-purple-900"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-900 via-indigo-500 to-purple-900"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-purple-900 to-indigo-900 p-3 rounded-full mb-6">
            <svg className="w-8 h-8 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto grid gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-black bg-opacity-40 border border-purple-800 rounded-lg p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



// ... [All the existing components remain unchanged] ...

// Modified Call to action component with QR Code
const CallToAction = () => {
  return (
    <div className="relative py-20 px-6 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-xl shadow-lg overflow-hidden">
      {/* Enhanced circuit pattern specific for CTA */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M20 20L50 20M50 20L50 80M50 80L80 80" stroke="#ffffff" strokeWidth="2" fill="none"/>
                <circle cx="20" cy="20" r="4" fill="#ffffff"/>
                <circle cx="80" cy="80" r="4" fill="#ffffff"/>
                <path d="M20 80L40 80M40 80L40 40M40 40L80 40" stroke="#ffffff" strokeWidth="2" fill="none"/>
                <circle cx="20" cy="80" r="4" fill="#ffffff"/>
                <circle cx="80" cy="40" r="4" fill="#ffffff"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-circuit)"/>
          </svg>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="mb-8">
          <div className="inline-block bg-white bg-opacity-20 p-4 rounded-full mb-6">
            <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Showcase Your Research?</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto">
            Share your groundbreaking doctoral research with the world's leading experts in VLSI and semiconductor technology at VDAT-2025.
          </p>
        </div>
        
        {/* Added QR Code Section */}
        <div className="mb-10 flex flex-col items-center">
          <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
            <img 
              src="/images/qr-submission.png" 
              alt="Scan to Submit QR Code" 
              className="w-44 h-44"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAFPklEQVR4nO2dwW4bOQxA6f//aGcLFMjBCBkNST3S78FekgDReEiK1GTSvF4v+r++vr5+zP/87+eP+Z/5zz++//vXfxf/O/h+8L3zf+/7+e/n39f3E3zf/N/7fv77zfdjvh/852m+j2qeEPj5foKJ+/7v/oL7zPdzg3ucCX9znjBxkicG8cBgPuMtNggdwRMBfO+sJwRPiOEJYYY8IczwhDADnhBmD08IMzzwf7zVqifgYxD4qiegeGLsJ+zf1xOo5zx9fzNPJIiAJwInlE/c388T6ufcfT8zT8SEAp4InKCf+Ps8oXoO8/3MPKE7ASdqx++zPZF5jvL9zDxBdwIiVO/9vXpC/Zym+6l4gnYCItSeJ3LPabyfgicqToCI/Ps9wT7H8X5snugIbTixInT9vKsnss9pvp+MJypCK06sClWfr54gnuN0P4wnukIzTuwIrTyPesLlOcr7yXiCIRQROnke9QTxnOb7UXiCJRQR2nke9UTTc977KXhiIrT7POqJwHP27mfhiYHQqfMQT7AeE93PZB8RCoV6QuOJ9H7YhEIV6u6JKaHVJ9YTWk+k9iMWivGEwhOjQplnMvtRCcV6Qu0Je6FMoQpPPFC/J6x9BBN6zhPsQtWeYD0xLTTrCbVQB0+whQ56YkRoxRMIoY6eaBfa5QlnodtC2Z5gFyoWui300BOKQkdCK57YFur8RPdCWUIrhA55QilU5gl1oV2haE9MCnXwRJfQrCcchK4LrXqi5IS6eMJRaFZo1RMlQjueIM8TrkIzQhs90S50yhPqQqNCK5648zxrocw8ESJ0QuhjT2zfz7RQe088kCfchUaENnri7vNchGb3E+lCpzzBLnRHaN0TDc9zEpr5fqJM6LQnWIVGhFY9kXlehtDM90OdUJUnmIRGhVY8kXlehdDI/VCEqj3BIHRHaNYTmec5Co3cz0SoiyfUQqNCM55QP89ZaOR+KkJdPaEUuid0zxPN9+MgNHs/GaHunlAI3RVKPcF8v6vQCaER97MQmuGJTqF7QrEn2O83W+iUJzLfz7sIzfLE3t/vC90RWvZE8/1OC532ROb72RLa5Ym9vz8ndEdo2RPE+00TOuGJzPfDEMr2xN7f54XuCmU9QbxfF6HdnsgKZQlleWLv74cK3RFK9wTxftVCOz2RFcoUyvDE3t+PFxoRSvME+X6VQjs8USGULRR5Yu/vzwmNCqV4gny/CqHVnqgS6iAUeWLv788LjQgtPwe+X6bQSk9UC3URijyx9/fXCo0KLXmCfL8ModmecBHqJHTPE3t/f73QqNCSJ8j3qxaa6Qk3oW5C9zyx9/f9hEaFpj1Bvl+V0KgnHIW6Ct3zxN7f9xUaFZryBPl+FUKjnnAW6iz0nic6hUaEMs+h38+9UIUnAoS6C73niU6hEaHMc+j3cyt0zxMhQgOE3vNEt9CI0L3zsvtxKXT1RJjQIKF3PNEtNCK0cR+x/TgU+t4TG0JDhN7xRLfQiNC984j9hBT67omHG8FBoVVPDAiNCI2eG74fB6GrJz7KE2FCoZ7YEZo9t3cf4UIXTzyI/p+qjCcyhWbP7dkHXejqia2/HyUU4gmy0Oy52f3ECA3zRJhQW0+QhGbPze4nTGiIJ0KF2nmCIDR7bmY/kUJDPBEu1MYTLUKz52b2Ey3U3hMpQu09QQrNnpvZT4ZQa0+kCbX1BCE0e250P1lCbT2RKtTOE1uFCs+N7idbqJ0nUoXaeWJTqPDcrfs5IdTKE+lCbTyxIVR8rnU/JKFunsgsVOKJpFDxudb9nBRq4QlaoeKCq54ghIrPteznpFB5T1CEigtmPLEpVHyu/PupELrnCSeh4oIZT0SFVvx+zghVeOId9jRLx7+Hc7cAAAAASUVORK5CYII=";
              }}
            />
          </div>
          <h3 className="text-xl text-white font-bold mb-2">Scan to Submit</h3>
          <p className="text-indigo-100 mb-6">
            Scan this QR code with your mobile device to access the submission portal
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <button className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-lg hover:bg-indigo-100 transition duration-300 shadow-lg flex items-center text-lg">
            <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Submit Your Abstract Now
          </button>
          <a href="#" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-300 flex items-center text-lg">
            <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Download Guidelines
          </a>
          
        </div>
      </div>
    </div>
  );
};

// Main PhDForum component that integrates all the above components
const PhDForum = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-10">
        <PhDForumBanner />
        
        <div className="mt-16 space-y-12">
          {CONTENT_SECTIONS.map((section) => (
            <ContentSection
              key={section.id}
              id={section.id}
              title={section.title}
              content={section.content}
              items={section.items}
              type={section.type}
              icon={section.icon || "star"}
              bgColor={section.bgColor}
              accentColor={section.accentColor}
            />
          ))}
          
          <EnhancedTimeline />
          <SubmissionFormat />
          <ContactInfo />
          <FAQ />
          <CallToAction />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PhDForum;
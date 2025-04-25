"use client";
import React, { useState } from "react";
import Footer from "../footer/footer";
import Navbar from "../home/Navbar";
import { Calendar, ChevronRight, FileText, ExternalLink, Check, Star } from 'lucide-react';

const TrackSection = ({ id, title, content, isAlternate }) => (
  <section
    id={id}
    className={`py-16 px-4 ${
      isAlternate ? "bg-gray-50" : "bg-white"
    } shadow-lg rounded-xl mb-8`}
  >
    <div className="max-w-6xl mx-auto">
      <div className="section-heading">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
          {title}
        </h2>
        <div className="w-16 h-1 bg-purple-600 mx-auto mb-8"></div>
      </div>

      <div className="text-lg text-gray-700 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {content.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                <Star size={14} />
              </span>
              <p className="text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const SpeakersSection = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const tracks = [
    {
      id: "Track 1",
      name: "Track 1",
      title: "Emerging Materials and Devices Technologies",
      content: [
        "Emerging materials",
        "2-D Material",
        "High-voltage MOSFET",
        "Si photonics and optoelectronics",
        "Spintronics and quantum materials",
        "MEMS/NEMS",
        "Organic electronics",
        "Emerging memory technologies",
      ],
    },
    {
      id: "Track 2",
      name: "Track 2",
      title: "VLSI Circuit and SoC Design",
      content: [
        "Digital, Analog, Mixed signal, RF circuits",
        "RTL design",
        "Processor Architecture",
        "Hardware accelerators",
        "FPGA based design",
        "Quantum Circuits",
        "Neuromorphic",
        "Memory",
        "Circuits, accelerators, SoC for ML/AI applications",
      ],
    },
    {
      id: "Track 3",
      name: "Track 3",
      title: "Electronics Design Automation, Testing and Verification",
      content: [
        "CAD Tools, software",
        "CAD for FPGA",
        "High-Level Synthesis",
        "System software",
        "Testing and Verification",
      ],
    },
    {
      id: "Track 4",
      name: "Track 4",
      title: "Embedded Systems Design",
      content: [
        "Embedded AI and Machine Learning",
        "Real-Time Systems and Applications",
        "Embedded Software and Firmware Development",
        "Hardware/Software Co-Design",
        "IoT, Edge, and Wireless Embedded Systems",
        "Embedded Vision and Multimedia Processing",
        "Reconfigurable Systems and FPGAs",
        "Automotive, Healthcare, and Industrial Applications",
      ],
    },
    {
      id: "Track 5",
      name: "Track 5",
      title: "Packaging and Manufacturing",
      content: [
        "Manufacturing technologies",
        "Packaging ",
        "Signal and Power Integrity",
      ],
    },
  ];

  const handleLinkClick = () => {
    window.open("https://softconf.com/vlsi/vdat2025/", "_blank");
  };

  const handlePDFClick = () => {
    window.open("/pdfs/VDAT - CFP2025.pdf", "_blank");
  }

  const ListSection = ({ title, items, isAlternate }) => (
    <section className={`py-12 px-4 ${isAlternate ? 'bg-gray-50' : 'bg-white'} shadow-lg rounded-xl mb-8`}>
      <div className="max-w-6xl mx-auto">
        <div className="section-heading">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
            {title}
          </h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-start group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-1 group-hover:bg-purple-200 transition-colors">
                  <span className="text-purple-600 font-semibold">{index + 1}</span>
                </div>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );

  const ImportantDatesSection = ({ title, isAlternate }) => (
    <section className={`py-12 px-4 ${isAlternate ? 'bg-gray-50' : 'bg-white'} shadow-lg rounded-xl mb-8`} id="important-dates">
      <div className="max-w-6xl mx-auto">
        <div className="section-heading">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
            {title}
          </h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500 flex-1">
                <div className="flex items-center mb-3">
                  <Calendar className="text-purple-600 w-5 h-5 mr-2" />
                  <h3 className="font-semibold text-gray-800">Paper Submission</h3>
                </div>
                <p className="text-gray-700 flex items-baseline gap-2">
                  <strong>Deadline:</strong> 
                  <span><strike className="text-red-500">April 15, 2025</strike> May 15, 2025</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">(Firm deadline, no further extension)</p>
              </div>
              
              <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-500 flex-1">
                <div className="flex items-center mb-3">
                  <Calendar className="text-indigo-600 w-5 h-5 mr-2" />
                  <h3 className="font-semibold text-gray-800">Acceptance Notification</h3>
                </div>
                <p className="text-gray-700 flex items-baseline gap-2">
                  <strong>Date:</strong>
                  <span><strike className="text-red-500">June 15, 2025</strike> July 1, 2025</span>
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500 flex-1">
                <div className="flex items-center mb-3">
                  <Calendar className="text-blue-600 w-5 h-5 mr-2" />
                  <h3 className="font-semibold text-gray-800">Early Bird Registration</h3>
                </div>
                <p className="text-gray-700 flex items-baseline gap-2">
                  <strong>Deadline:</strong>
                  <span><strike className="text-red-500">June 20, 2025</strike> July 10, 2025</span>
                </p>
              </div>
              
              <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500 flex-1">
                <div className="flex items-center mb-3">
                  <Calendar className="text-green-600 w-5 h-5 mr-2" />
                  <h3 className="font-semibold text-gray-800">Camera-ready Submission</h3>
                </div>
                <p className="text-gray-700 flex items-baseline gap-2">
                  <strong>Deadline:</strong>
                  <span><strike className="text-red-500">July 1, 2025</strike> July 15, 2025</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-200 ease-in-out flex items-center justify-center"
              onClick={handleLinkClick}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Submit Paper
            </button>
            <button
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-200 ease-in-out flex items-center justify-center"
              onClick={handlePDFClick}
            >
              <FileText className="w-5 h-5 mr-2" />
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
  
  const Dates = () => {
    return (
      <ImportantDatesSection
        title="Important Dates"
        isAlternate={true}
      />
    );
  };

  const ContentSection = () => {
    return (
      <>
        <ListSection
          title="Submission Guidelines"
          items={[
            "Submit a single PDF containing all the information listed below.",
            "Paper Format: Papers should be in PDF format following the IEEE Conference paper format.",
            "Page Limit: Submissions must not exceed six A4-sized pages.",
            "Submission Link: Upload your manuscript via the following link: Submit Here.",
            "Review Process: A double-blind review process will be followed, so ensure no author names or identifying information is included in the manuscript.",
            "Abstract: Include an abstract of 250 words with a maximum of five keywords.",
            "Notification: Authors will be notified via email regarding acceptance and required revisions.",
            "Final Submission: Revised camera-ready copies must be submitted within the specified deadline following the final submission guidelines.",
            "Registration Requirement: At least one author must register for the conference to present and publish the paper. Separate registration is required for each paper presented by the same author."
          ]}          
          isAlternate={true}
        />
      </>
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="bg-black">
        <Navbar />
      </div>
      
      <header
        className="text-center text-white py-40 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/iit-ropar-5.avif')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-violet-900/80"></div>
        <div className="relative z-10 px-4 py-16">
          <h1 className="text-6xl font-extrabold tracking-tight uppercase mb-4 drop-shadow-lg">Submissions</h1>
        </div>
      </header>
      
      <Dates />
      
      <section className="bg-gray-900 py-16 text-white px-4" id="conference">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-8">
          <div className="lg:w-2/3 bg-gray-800 p-6 lg:p-10 rounded-2xl shadow-lg relative overflow-hidden">
            {/* Decorative accent element */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-indigo-500"></div>
            
            <div className="max-w-3xl ml-4">
              <h2 className="text-3xl font-bold text-purple-400 mb-6 flex items-center">
                VDAT 2025 Conference
                <div className="h-1 flex-grow ml-4 bg-gradient-to-r from-purple-500 to-transparent"></div>
              </h2>
              
              <p className="text-lg leading-7 mb-6 text-gray-200">
                The VDAT 2025 conference provides a platform for researchers and
                practitioners to explore how VLSI and Embedded Systems can drive
                disruptive advancements for the next generation. Original
                contributions are solicited on topics covered under broad areas
                such as (but not limited to) the ones below.
              </p>
              
              <div className="mb-6 p-4 border-l-4 border-purple-500 bg-gray-700 bg-opacity-50 rounded">
                <h3 className="font-semibold text-purple-300 mb-2">Paper Submission</h3>
                <p className="text-gray-300">
                  Authors are invited to submit full-length (6 pages maximum), original, unpublished papers
                  along with an abstract of at most 200 words. To enable blind
                  review, the author list should be omitted from the main
                  document. Previously published papers or papers currently under
                  review for other conferences/journals should NOT be submitted
                  and will not be considered. Electronic submission in PDF format
                  is required. Author and contact information (name, affiliation,
                  mailing address, telephone, fax, e-mail) must be entered during
                  the submission process.
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-indigo-500 bg-gray-700 bg-opacity-50 rounded">
                <h3 className="font-semibold text-indigo-300 mb-2">Paper Format</h3>
                <p className="text-gray-300">
                  Submissions should be in camera-ready IEEE
                  two-column format, following the IEEE proceedings
                  specifications.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-gray-800 rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-purple-400 text-center">
                Conference Tracks
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {tracks.map(({ id, name }, index) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="w-full p-4 text-center font-medium border border-gray-700 rounded-lg text-white hover:bg-purple-700 transition duration-300 ease-in-out flex flex-col items-center justify-center gap-2"
                    style={{
                      background: "linear-gradient(45deg, #2d3748, #1a202c)",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <div className="w-8 h-8 rounded-full bg-purple-900 flex items-center justify-center mb-2">
                      <span className="text-purple-300 font-bold">{index + 1}</span>
                    </div>
                    {name.split(":")[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {tracks.map(({ id, title, content }, index) => (
        <TrackSection
          key={id}
          id={id}
          title={title}
          content={content}
          isAlternate={index % 2 !== 0}
        />
      ))}
      
      <ContentSection
        id="submission"
        title="Submission Guidelines"
        isAlternate={true}
      />
      
      <Footer />
    </div>
  );
};

export default SpeakersSection;
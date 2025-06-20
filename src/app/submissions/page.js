"use client";
import React, { useState } from "react";
import Footer from "../footer/footer";
import Navbar from "../home/Navbar";
import {
  Calendar,
  ChevronRight,
  FileText,
  ExternalLink,
  Check,
  Star,
} from "lucide-react";

const TrackSection = ({ id, title, content, isAlternate }) => (
  <section
    id={id}
    className={`py-8 px-4 ${
      isAlternate ? "bg-gray-50" : "bg-white"
    } shadow-lg rounded-xl mb-4`}
  >
    <div className="max-w-6xl mx-auto">
      <div className="section-heading">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
          {title}
        </h2>
        <div className="w-16 h-1 bg-purple-600 mx-auto mb-4"></div>
      </div>

      <div className="text-lg text-gray-700 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
          {content.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
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
      title: "Track 1 : Emerging Materials and Devices Technologies",
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
      title: "Track 2 : VLSI Circuit and SoC Design",
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
      title: "Track 3 : Electronics Design Automation, Testing and Verification",
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
      title: "Track 4 : Embedded Systems Design",
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
      title: "Track 5 : Packaging and Manufacturing",
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
  };

  const ListSection = ({ title, items, isAlternate }) => (
    <section
      className={`py-6 px-4 ${
        isAlternate ? "bg-gray-50" : "bg-white"
      } shadow-lg rounded-xl mb-4`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="section-heading">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
            {title}
          </h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto mb-4"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-1 group-hover:bg-purple-200 transition-colors">
                  <span className="text-purple-600 font-semibold">
                    {index + 1}
                  </span>
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
    <section
      className={`py-6 px-4 ${
        isAlternate ? "bg-gray-50" : "bg-white"
      } shadow-lg rounded-xl mb-4`}
      id="important-dates"
    >
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
                  <h3 className="font-semibold text-gray-800">
                    Paper Submission
                  </h3>
                </div>
                <p className="text-gray-700 flex items-baseline gap-2">
                  <strong>Deadline:</strong>
                  <span>
                    <strike className="text-red-500">April 15, 2025</strike> May
                    15, 2025
                  </span>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  (Firm deadline, no further extension)
                </p>
              </div>

              <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-500 flex-1">
                <div className="flex items-center mb-3">
                  <Calendar className="text-indigo-600 w-5 h-5 mr-2" />
                  <h3 className="font-semibold text-gray-800">
                    Acceptance Notification
                  </h3>
                </div>
                <p className="text-gray-700 flex items-baseline gap-2">
                  <strong>Date:</strong>
                  <span>
                    <strike className="text-red-500">June 15, 2025</strike> July
                    1, 2025
                  </span>
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500 flex-1">
                <div className="flex items-center mb-3">
                  <Calendar className="text-blue-600 w-5 h-5 mr-2" />
                  <h3 className="font-semibold text-gray-800">
                    Early Bird Registration
                  </h3>
                </div>
                <p className="text-gray-700 flex items-baseline gap-2">
                  <strong>Deadline:</strong>
                  <span>
                    <strike className="text-red-500">June 20, 2025</strike> July
                    10, 2025
                  </span>
                </p>
              </div>

              <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500 flex-1">
                <div className="flex items-center mb-3">
                  <Calendar className="text-green-600 w-5 h-5 mr-2" />
                  <h3 className="font-semibold text-gray-800">
                    Camera-ready Submission
                  </h3>
                </div>
                <p className="text-gray-700 flex items-baseline gap-2">
                  <strong>Deadline:</strong>
                  <span>
                    <strike className="text-red-500">July 1, 2025</strike> July
                    15, 2025
                  </span>
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
              <strike>Submit Paper</strike>
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
    return <ImportantDatesSection title="Important Dates" isAlternate={true} />;
  };

  const ContentSection = () => {
    return (
      <>
        <ListSection
          title="Submission Guidelines and review process"
          items={[
            "Submit a single PDF containing all the information listed below.",
            "Paper Format: Papers should be in PDF format following the IEEE Conference paper format.",
            "Page Limit: Submissions must not exceed six A4-sized pages.",
            "Submission Link: Upload your manuscript via the following link: Submit Here.",
            "Review Process: A double-blind review process will be followed, so ensure no author names or identifying information is included in the manuscript.",
            "Abstract: Include an abstract of 250 words with a maximum of five keywords.",
            "Notification: Authors will be notified via email regarding acceptance and required revisions.",
            "Final Submission: Revised camera-ready copies must be submitted within the specified deadline following the final submission guidelines.",
            "Registration Requirement: At least one author must register for the conference to present and publish the paper. Separate registration is required for each paper presented by the same author.",
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
        className="text-center text-white py-20 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/iit-ropar-5.avif')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-violet-900/80"></div>
        <div className="relative z-10 px-4 py-16">
          <h1 className="text-6xl font-extrabold tracking-tight uppercase mb-4 drop-shadow-lg">
            Call for paper
          </h1>
        </div>
      </header>

      <Dates />

      <section className="bg-gray-900 py-16 text-white px-4" id="conference">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
  {/* Main Conference Information */}
  <div className="bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 p-6 lg:p-8 rounded-2xl shadow-xl relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-indigo-500"></div>
    <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-500 rounded-full opacity-8 blur-2xl"></div>

    <div className="relative z-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-3">
          VDAT 2025 Conference
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-3xl mx-auto mb-6">
        <p className="text-lg leading-7 text-gray-200 text-center">
          The VDAT 2025 conference provides a platform for researchers and
          practitioners to explore how VLSI and Embedded Systems can drive
          disruptive advancements for the next generation.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="group p-5 border border-gray-600 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-purple-500">
          <div className="flex items-center mb-3">
            <div className="w-3 h-6 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full mr-3"></div>
            <h3 className="text-lg font-bold text-purple-300 group-hover:text-purple-200 transition-colors">
              Paper Submission
            </h3>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Submit full-length papers (6 pages max) with 200-word abstracts. 
            Blind review format required - omit author names. Only original, 
            unpublished work accepted. PDF submission with complete contact details.
          </p>
        </div>

        <div className="group p-5 border border-gray-600 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-indigo-500">
          <div className="flex items-center mb-3">
            <div className="w-3 h-6 bg-gradient-to-b from-indigo-500 to-indigo-600 rounded-full mr-3"></div>
            <h3 className="text-lg font-bold text-indigo-300 group-hover:text-indigo-200 transition-colors">
              Paper Format
            </h3>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Camera-ready IEEE two-column format following standard IEEE 
            proceedings specifications for consistency and professional presentation.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Conference Tracks Section */}
  <div className="w-full">
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 relative overflow-hidden">
      <div className="absolute -top-5 -right-5 w-32 h-32 bg-purple-500 rounded-full opacity-5 blur-2xl"></div>
      
      <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 text-center">
        Conference Tracks
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4 relative z-10">
        {tracks.map(({ id, name }, index) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="group p-3 lg:p-4 font-medium border border-gray-600 rounded-xl lg:rounded-2xl text-white hover:border-purple-500 transition-all duration-300 ease-in-out flex flex-col items-center gap-2 hover:scale-105 hover:shadow-2xl h-20 lg:h-auto"
            style={{
              background: "linear-gradient(135deg, #4c1d95, #2d1b69, #1e1b4b)",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 flex-shrink-0">
              <span className="text-purple-100 font-bold text-sm lg:text-base">
                {index + 1}
              </span>
            </div>
            <span className="font-semibold group-hover:text-purple-200 transition-colors text-center text-xs lg:text-sm leading-tight">
              {name.split(":")[0]}
            </span>
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

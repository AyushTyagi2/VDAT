'use client';
import React, { useState } from 'react';
import Footer from '../footer/footer';
import Navbar from '../home/Navbar';


const TrackSection = ({ id, title, content, isAlternate }) => (
  <section
    id={id}
    className={`py-20 px-4 ${isAlternate ? 'bg-gray-100' : 'bg-white'} shadow-md rounded-xl`}
  >
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-6">
        {title}
      </h2>
      <div className="text-lg text-gray-700 max-w-4xl mx-auto flex flex-col items-center leading-loose">
        {content.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 mb-4 w-full"
          >
            <span className="text-purple-500">
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
            <p className="text-gray-800 text-left">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);


const SpeakersSection = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const tracks = [
    {
      id: "Track 1",
      title: "Track 1: Emerging Materials and Devices Technologies",
      content: [
        "Emerging materials",
        "2-D Materials",
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
      title: "Track 2: VLSI Circuit and System Design",
      content: [
        "Digital, Analog, Mixed signal, RF circuits",
        "RTL design",
        "Processor Architecture",
        "Hardware accelerators",
        "FPGA based design",
        "Quantum",
        "Neuromorphic",
        "Memory",
      ],
    },
    {
      id: "Track 3",
      title: "Track 3: Electronics Design Automation, Testing and Verification",
      content: [
        "CAD Tools, software",
        "CAD for FPGA",
        "High-Level Synthesis",
        "System software",
        "Testing and Verification",
        "Packaging (Signal and Power Integrity)",
      ],
    },
    {
      id: "Track 4",
      title: "Track 4: Embedded Systems Design",
      content: [
        "Hardware/Software Co-design & Verification",
        "Audio, Image & Video-Processing on Embedded Systems",
        "Reconfigurable Systems",
        "Microcontroller, ARM, IoT and FPGA-based Embedded Systems Design",
        "Embedded Software",
        "Real-Time Systems",
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <header
        className="relative text-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-60"
        style={{ backgroundImage: "url('/images/iit-ropar-5.avif')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="bg-black bg-opacity-50 py-20 px-4">
          <h1 className="text-5xl font-extrabold">Submissions</h1>
        </div>
      </header>

      <section className="bg-gray-100 py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Important Deadlines</h2>
          <ul className="text-lg text-gray-700 space-y-2">
            <li><strong>Deadline for paper submission:</strong> April 15, 2025</li>
            <li><strong>Deadline for acceptance:</strong> June 15, 2025</li>
            <li><strong>Deadline for camera-ready:</strong> July 1, 2025</li>
          </ul>
        </div>
      </section>


      <section className="bg-black bg-opacity-0 py-16 text-white" id="conference">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row justify-between gap-8">
          <div className="lg:w-2/3 bg-gray-900 text-white p-6 lg:p-10 rounded-2xl shadow-lg">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-purple-500 mb-4">VDAT 2025 Conference</h2>
              <p className="text-lg leading-7 mb-6">
                The VDAT 2025 conference provides a platform for researchers and practitioners to explore how VLSI and Embedded Systems can drive disruptive advancements for the next generation. Original contributions are solicited on topics covered under broad areas such as (but not limited to) the ones below.
              </p>
              <p className="text-lg leading-7 mb-6">
                <b>Paper Submission:</b> Authors are invited to submit full-length (6 pages maximum), original, unpublished papers along with an abstract of at most 200 words. To enable blind review, the author list should be omitted from the main document. Previously published papers or papers currently under review for other conferences/journals should NOT be submitted and will not be considered. Electronic submission in PDF format is required. Author and contact information (name, affiliation, mailing address, telephone, fax, e-mail) must be entered during the submission process.
              </p>
              <p className="text-lg leading-7">
                <b>Paper Format:</b> Submissions should be in camera-ready IEEE two-column format, following the IEEE proceedings specifications.
              </p>
            </div>
          </div>

          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold mb-4 text-purple-500 text-center">Conference Tracks</h2>
            <div className="grid grid-cols-2 gap-4 text-center">
              {tracks.map(({ id, title }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="w-full h-40 text-center text-lg font-bold border border-purple-500 rounded p-2 text-white hover:bg-purple-500 transition duration-200 ease-in-out"
                >
                  {title.split(':')[0]}
                </button>
              ))}
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

      <Footer />
    </div>
  );
};

export default SpeakersSection;

"use client";
import React, { useState } from "react";
import Footer from "../footer/footer";
import Navbar from "../home/Navbar";

const TrackSection = ({ id, title, content, isAlternate }) => (
  <section
    id={id}
    className={`py-20 px-4 ${
      isAlternate ? "bg-gray-100" : "bg-white"
    } shadow-md rounded-xl`}
  >
    <div className="max-w-6xl mx-auto">
      <div className="section-heading">
        <h2 className="md:text-4xl font-semibold text-gray-800 text-center mb-6 underline-animation">
          {title}
        </h2>
        
      </div>
      <div className="underline">
        <div className="dot"></div>
      </div>
      <div className="h-6 py-5"></div>
      <div className="text-lg text-gray-700 max-w-4xl mx-auto flex flex-col items-center leading-loose">
        {content.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4 mb-4 w-full">
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
    <section className={`py-12 px-4 ${isAlternate ? 'bg-gray-100' : 'bg-white'} shadow-md rounded-xl mb-8`}>
      <div className="max-w-6xl mx-auto">
        <div className="section-heading">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-6 underline-animation">
            {title}
          </h2>
        </div>
        <div className="underline">
          <div className="dot"></div>
        </div>
        <div className="h-6 py-5"></div>
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
              </span> {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );

  const ImportantDatesSection = ({ title, isAlternate }) => (
    <section className={`py-12 px-4 ${isAlternate ? 'bg-gray-100' : 'bg-white'} shadow-md rounded-xl mb-8`}>
      <div className="max-w-6xl mx-auto">
        <div className="section-heading">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 text-center mb-6 underline-animation">
            {title}
          </h2>
          
        </div>
        <div className="underline">
          <div className="dot"></div>
        </div>
        <div className="h-6 py-5"></div>
        <div className="max-w-4xl mx-auto text-center">

        <ul className="text-lg text-gray-700 space-y-2">
            <li>
              <strong>Paper Submission Deadline:</strong> <strike>April 15, 2025</strike> May 15, 2025 (Firm deadline, no further extension)

            </li>
            <li>
              <strong>Acceptance Notification:</strong><strike>June 15, 2025</strike> July 1, 2025

            </li>
            <li>
              <strong>Early Bird Registration & Payment:</strong><strike>June 20, 2025</strike> July 10, 2025

            </li>
            {/* <li>
              <strong>Regular Registration & Payment:</strong> July 1, 2025
            </li> */}
            <li>
            <strong>Deadline for camera-ready:</strong> <strike>July 1, 2025</strike> July 15, 2025.
            </li>
        </ul>

            <div className="inline-flex flex-col max-w-max">
              <button
                className="bg-purple-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-purple-700 transition duration-200 ease-in-out w-full"
                onClick={handleLinkClick}
              >
                Submission Link
              </button>
              <button
                className="bg-purple-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-purple-700 transition duration-200 ease-in-out w-full"
                onClick={handlePDFClick}
              >
                Submission Brochure
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
    <div className="bg-gray-100">
      <div className="bg-black">
      <Navbar />
      </div>
      <header
        className="relative text-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-60"
        style={{
          backgroundImage: "url('/images/iit-ropar-5.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black bg-opacity-50 py-20 px-4">
          <h1 className=" sub text-5xl font-extrabold">SUBMISSIONS</h1>
        </div>
      </header>
      <Dates />
      <div className="bg-black">
      <section
        className="bg-black bg-opacity-0 py-16 text-white"
        id="conference"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row justify-between gap-8">
          <div className="lg:w-2/3 bg-gray-900 text-white p-6 lg:p-10 rounded-2xl shadow-lg">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-purple-500 mb-4">
                VDAT 2025 Conference
              </h2>
              <p className="text-lg leading-7 mb-6">
                The VDAT 2025 conference provides a platform for researchers and
                practitioners to explore how VLSI and Embedded Systems can drive
                disruptive advancements for the next generation. Original
                contributions are solicited on topics covered under broad areas
                such as (but not limited to) the ones below.
              </p>
              <p className="text-lg leading-7 mb-6">
                <b>Paper Submission:</b> Authors are invited to submit
                full-length (6 pages maximum), original, unpublished papers
                along with an abstract of at most 200 words. To enable blind
                review, the author list should be omitted from the main
                document. Previously published papers or papers currently under
                review for other conferences/journals should NOT be submitted
                and will not be considered. Electronic submission in PDF format
                is required. Author and contact information (name, affiliation,
                mailing address, telephone, fax, e-mail) must be entered during
                the submission process.
              </p>
              <p className="text-lg leading-7">
                <b>Paper Format:</b> Submissions should be in camera-ready IEEE
                two-column format, following the IEEE proceedings
                specifications.
              </p>
            </div>
          </div>

          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold mb-4 text-purple-500 text-center">
              Conference Tracks
            </h2>
            <div className="grid grid-cols-2 gap-4 text-center">
              {tracks.map(({ id, name }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="w-full h-40 text-center text-lg font-bold border border-purple-500 rounded p-2 text-white hover:bg-purple-500 transition duration-200 ease-in-out"
                >
                  {name.split(":")[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>

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
        ></ContentSection>
      <Footer />
    </div>
  );
};

export default SpeakersSection;

'use client'
import React from 'react';
import Footer from '../footer/footer';
import Navbar from '../home/Navbar';

const SpeakersSection = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />

      {/* Header Section */}
      <header
        className="text-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-60 relative"
        style={{ backgroundImage: "url('/images/iit-ropar-5.avif')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="bg-black bg-opacity-50 py-20 px-4">
          <h1 className="text-5xl font-extrabold">Submissions</h1>
        </div>
      </header>

      {/* Buttons Above Content on Mobile */}
      {/* Buttons Above Content on Mobile */}
<div className="block md:hidden bg-black py-4 px-6">
  <div className="flex justify-center gap-2">
    <button style={{height:"50px" , fontSize:"19px"}} className="bg-indigo-600 text-white text-sm sm:text-lg font-semibold py-2 px-3 sm:px-4 rounded-md shadow hover:bg-indigo-700 transition w-[calc(100vw/4-1rem)] max-w-[120px]" onClick={() => scrollToSection('Track 1')}>
      Track 1
    </button>
    <button style={{height:"50px" , fontSize:"19px"}} className="bg-indigo-600 text-white text-sm sm:text-lg font-semibold py-2 px-3 sm:px-4 rounded-md shadow hover:bg-indigo-700 transition w-[calc(100vw/4-1rem)] max-w-[120px]" onClick={() => scrollToSection('Track 2')}>
      Track 2
    </button>
    <button style={{height:"50px" , fontSize:"19px"}} className="bg-indigo-600 text-white text-sm sm:text-lg font-semibold py-2 px-3 sm:px-4 rounded-md shadow hover:bg-indigo-700 transition w-[calc(100vw/4-1rem)] max-w-[120px]" onClick={() => scrollToSection('Track 3')}>
      Track 3
    </button>
    <button style={{height:"50px" , fontSize:"19px"}} className="bg-indigo-600 text-white text-sm sm:text-lg font-semibold py-2 px-3 sm:px-4 rounded-md shadow hover:bg-indigo-700 transition w-[calc(100vw/4-1rem)] max-w-[120px]" onClick={() => scrollToSection('Track 4')}>
      Track 4
    </button>
  </div>
</div>


      {/* Main Content Wrapper */}
      <div className="max-w-6xl mx-auto my-4 px-6 flex flex-col md:flex-row gap-8" > 
        
        {/* Main Content Section */}
        <section className="flex-1 bg-gray-100 text-gray-800 p-6 md:p-8 rounded-lg shadow">
          <div className="max-w-3xl">
            <p className="text-lg leading-7">
              The VDAT 2025 conference provides a platform for researchers and practitioners to explore how VLSI and Embedded Systems can drive disruptive advancements for the next generation. Original contributions are solicited on topics covered under broad areas such as (but not limited to) below mentioned topics.
              <br /><br /><br /><b>Paper Submission</b>: Authors are invited to submit full-length (6 pages maximum), original, unpublished papers along with an abstract of at most 200 words. To enable blind review, the author list should be omitted from the main document. Previously published papers or papers currently under review for other conferences/journals should NOT be submitted and will not be considered. Electronic submission in PDF format is required. Author and contact information (name, affiliation, mailing address, telephone, fax, e-mail) must be entered during the submission process.<br/>
              Paper Format: Submissions should be in camera-ready IEEE two-column format, following the IEEE proceedings specifications.
            </p>
          </div>
        </section>

        {/* Vertical Divider (Hidden on Small Screens) */}
        <div className="hidden md:block w-[2px] bg-gray-300 mx-8"></div>

        {/* Sidebar Navigation (Only Visible on Desktop) */}
        <div className="hidden md:flex md:w-1/4 flex-col space-y-4">
          <button className="bg-indigo-600 text-white text-lg font-semibold py-2 px-4 rounded-md shadow hover:bg-indigo-700 transition" onClick={() => scrollToSection('Track 1')}>
            Track 1
          </button>
          <button className="bg-indigo-600 text-white text-lg font-semibold py-2 px-4 rounded-md shadow hover:bg-indigo-700 transition" onClick={() => scrollToSection('Track 2')}>
            Track 2
          </button>
          <button className="bg-indigo-600 text-white text-lg font-semibold py-2 px-4 rounded-md shadow hover:bg-indigo-700 transition" onClick={() => scrollToSection('Track 3')}>
            Track 3
          </button>
          <button className="bg-indigo-600 text-white text-lg font-semibold py-2 px-4 rounded-md shadow hover:bg-indigo-700 transition" onClick={() => scrollToSection('Track 4')}>
            Track 4
          </button>
        </div>

      </div>

      {/* Sections for Navigation Links */}
<section id="Track 1" className="py-20 bg-white px-4">
  <h2 className="text-3xl font-bold text-black text-center">Track 1: Emerging Materials and Devices Technologies</h2>
  <div className="text-lg text-black mt-4 max-w-4xl mx-auto flex flex-col items-center text-center leading-loose">
    <p>
      • Emerging materials • 2-D Materials • High-voltage MOSFET • Silicon Photonics and Optoelectronics
    </p>
    <p>
      • Spintronics and Quantum Materials • MEMS/NEMS • Organic Electronics • Emerging memory technologies
    </p>
  </div>
</section>

<section id="Track 2" className="py-20 bg-gray-200 px-4">
  <h2 className="text-3xl font-bold text-black text-center">Track 2: VLSI Circuit and System Design</h2>
  <div className="text-lg text-black mt-4 max-w-4xl mx-auto flex flex-col items-center text-center leading-loose">
    <p>
      • Digital, Analog, Mixed signal, RF circuits • RTL design • Processor Architecture • Hardware accelerators
    </p>
    <p>
      • FPGA based design • Quantum • Neuromorphic • Memory
    </p>
  </div>
</section>

<section id="Track 3" className="py-20 bg-white px-4">
  <h2 className="text-3xl font-bold text-black text-center">Track 3: Electronics Design Automation, Testing and Verification</h2>
  <div className="text-lg text-black mt-4 max-w-4xl mx-auto flex flex-col items-center text-center leading-loose">
    <p>
      • CAD Tools, software • CAD for FPGA • High-Level Synthesis • System software
    </p>
    <p>
      • Testing and Verification • Packaging (Signal and Power Integrity)
    </p>
  </div>
</section>

<section id="Track 4" className="py-20 bg-gray-200 px-4">
  <h2 className="text-3xl font-bold text-black text-center">Track 4: Embedded Systems Design</h2>
  <div className="text-lg text-black mt-4 max-w-4xl mx-auto flex flex-col items-center text-center leading-loose">
    <p>
      • Hardware/Software Co-design & Verification • Audio, Image & Video-Processing on Embedded Systems
    </p>
    <p>
      • Reconfigurable Systems • Microcontroller, ARM, IoT and FPGA-based Embedded Systems Design
    </p>
    <p>
      • Embedded Software • Real-Time Systems
    </p>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default SpeakersSection;

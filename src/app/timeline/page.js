import React from 'react';
import Footer from '../footer/footer';
import Navbar from '../home/Navbar';

const SpeakersSection = () => {
  return (
    <div>
      <Navbar />

      {/* Timeline Header Section */}
      <header
        className="text-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-60 relative"
        style={{ backgroundImage: "url('/images/iit-ropar-5.avif')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="bg-black bg-opacity-50 py-20 px-4">
          <h1 className="text-5xl font-extrabold">Timeline</h1>
          <p className="text-lg leading-relaxed" style={{ marginTop: "15px" , fontSize: "1.5rem"}}>
          Deadline for paper submission: April 15, 2025 <br />
          Deadline for acceptance: June 15, 2025 <br />
          Deadline for camera ready: July 1, 2025</p>
        </div>
      </header>
      <section className="py-16 px-6 bg-gray-100 text-gray-800 text-center">
        <div className="max-w-3xl mx-auto" >
          
        </div>
      </section>
      {/* Separate Informational Section */}
      

      <Footer />
    </div>
  );
};

export default SpeakersSection;

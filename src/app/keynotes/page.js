"use client";

import React, { memo } from "react";
import Image from "next/image";
import Navbar from "../home/Navbar";
import Footer from "../footer/footer";
const speakers = [
  { name: "Petia Radeva", affiliation: "University of Barcelona, Spain", img: "/images/Petia Radeva.jpg" },
  { name: "Bharat Biswal", affiliation: "NJIT, USA", img: "/images/bharat.jpg" },
  { name: "Fabio Dell'Acqua", affiliation: "University of Pavia, Italy", img: "/images/fabio.jpg" },
  { name: "Padma Shri Ajoy Kumar Ray", affiliation: "IIT Kharagpur", img: "/images/ajoy.jpg" },
  { name: "Ramesh Jain", affiliation: "University of California, USA", img: "/images/ramesh.jpg" },
  { name: "Venkatesh Babu", affiliation: "IISc Bangalore", img: "/images/venkatesh.jpg" },
  { name: "Richa Singh", affiliation: "IIT Jodhpur", img: "/images/richa.jpg" },
  { name: "Daniel P. Lopresti", affiliation: "Lehigh University, USA", img: "/images/daniel.jpg" },
];

// Memoized SpeakerCard to prevent unnecessary re-renders
const SpeakerCard = memo(({ name, affiliation, img }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="w-32 h-32 mx-auto mb-4 relative">
        <Image
          src={img}
          alt={`Photo of ${name}`}
          layout="fill"
          objectFit="cover"
          className="rounded-full border-4 border-gray-200"
          loading="lazy"
          priority={false}
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-sm text-gray-500">{affiliation}</p>
    </div>
  );
});

const Keynotes = () => {
  return (
    <div>
      <div>
      <Navbar />
      <header
        className="text-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-60 relative"
        style={{ backgroundImage: "url('/images/iit-ropar-5.avif')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
      

        <div className="bg-black bg-opacity-50 py-20 px-4">
          <h1 className="text-5xl font-extrabold">Keynote / Plenary</h1>
          <p className="text-xl mt-4 font-light">Meet our distinguished speakers</p>
        </div>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8 bg-gray-50 py-36">
        {speakers.map((speaker) => (
          <SpeakerCard
            key={speaker.name}
            name={speaker.name}
            affiliation={speaker.affiliation}
            img={speaker.img}
          />
        ))}
      </section>
      <Footer/>
    </div>
    </div>
  );
};

export default Keynotes;

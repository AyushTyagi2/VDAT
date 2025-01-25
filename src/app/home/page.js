"use client";
import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Link from "next/link";
import Image from "next/image";
import "../globals.css";
import Navbar from "./Navbar";
import ContactUs from "./contsct";
import AboutSection from "./about";
import SpeakersSection from "./speaker";

const images = [
  "/images/iit-ropar-5.avif",
  "/images/iit-ropar-5.jpeg",
  "/images/iit-ropar-5.jpg",
];

const sponsors = [
  { src: "/sponsors/sponsor-1.jpg", alt: "Sponsor 1" },
  { src: "/sponsors/sponsor-2.png", alt: "Sponsor 2" },
  { src: "/sponsors/sponsor-3.png", alt: "Sponsor 3" },
  { src: "/sponsors/sponsor-4.png", alt: "Sponsor 4" },
  { src: "/sponsors/sponsor-5.webp", alt: "Sponsor 5" },

];

const endorsedBy = [
  { src: "/logos/logo-1.png", alt: "Endorsed Sponsor 1" },
  { src: "/logos/logo-2.jpg", alt: "Endorsed Sponsor 2" },
  { src: "/logos/logo-3.jpg", alt: "Endorsed Sponsor 3" },
  { src: "/logos/logo-4.jpg", alt: "Endorsed Sponsor 3" },
  { src: "/logos/logo-5.jpg", alt: "Endorsed Sponsor 3" },
  //{ src: "/logos/logo-6.webp", alt: "Endorsed Sponsor 3" },

];

const speakers = [
  {
    name: "Richard Szeliski",
    title: "Distinguished Scientist and Affiliate Faculty",
    affiliation: "Google Research and University of Washington",
    website: "https://szeliski.org/",
    image: "/images/speaker-1.jpg",
  },
  {
    name: "R. Venkatesh Babu",
    title: "Professor",
    affiliation: "Dept. of Computational and Data Sciences, IISc",
    website: "https://cds.iisc.ac.in/faculty/venky/",
    image: "/images/speaker-2.jpg",
  },
  {
    name: "Fei-Fei Li",
    title: "Professor of Computer Science",
    affiliation: "Stanford University",
    website: "https://profiles.stanford.edu/fei-fei-li",
    image: "/images/speaker-3.jpg",
  },
  
];

const Carousel = ({ images, currentImageIndex, swipeHandlers }) => (
  <div className="min-h-screen bg-gray-100 flex flex-col relative overflow-hidden" {...swipeHandlers}>
    <div className="absolute inset-0 z-0">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
    <Navbar />
    <div className=" flex-grow flex items-center justify-start z-10 relative ml-28">
  <div className="max-w-2xl"> {/* Added max-width for better readability on larger screens */}
    <h1 className="text-xl lg:text-6xl font-bold border-y-black text-purple-800 mb-6"> {/* Increased font sizes, added leading */}
      9th International Conference on<br/>
      Computer Vision & Image Processing
    </h1>
    <p className="text-xl lg:text-2xl text-purple-300 text mb-8 font-medium"> {/* Increased font sizes, added font-medium, slightly lighter color */}
      04-06 December, 2025 | IIT Ropar, Punjab - 140001, INDIA
    </p>
    <Link
  href="#about"
  scroll={true}
  className="group relative overflow-hidden bg-black text-purple-900 text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
>
  <span href = "#about"className="relative z-10 ">About</span>
  <span 
    className="absolute inset-0 bg-purple-950 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
  />
</Link>
  </div>
</div>
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50 z-0"></div>
  </div>
);

const SponsorsSection = ({ title, items }) => (
  <section className="py-12 bg-gray-100">
    <h2 className="text-3xl text-purple-500 font-bold text-center mb-8">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mx-auto max-w-7xl px-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="w-full aspect-square flex justify-center items-center bg-white rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:filter-none filter grayscale"
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);
const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setCurrentImageIndex((prev) => (prev + 1) % images.length),
    onSwipedRight: () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length),
  });

  return (
    <div>
      <Carousel images={images} currentImageIndex={currentImageIndex} swipeHandlers={swipeHandlers} />
      <SponsorsSection title="Endorsed By" items={endorsedBy} />
      <SponsorsSection title="Sponsored By" items={sponsors} />
      <AboutSection />
      <SpeakersSection speakers={speakers} />
      <ContactUs />
    </div>
  );
};

export default HomePage;

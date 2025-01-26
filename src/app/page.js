"use client";
import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

import ContactUs from "./home/contsct";
import AboutSection from "./home/about";
import SpeakersSection from "./home/speaker";
import Footer from "./footer/footer";
import Navbar from "./home/Navbar";

const images = [
  "/images/iit-ropar-5.avif",
  "/images/iit-rpr.jpg",
  "/images/iit-ropar-5.jpg",
];

const sponsors = [
  { src: "/sponsors/sponsor-1.jpg", alt: "Sponsor 1" },
  { src: "/sponsors/sponsor-8.svg", alt: "Sponsor 2" },
  { src: "/sponsors/sponsor-7.svg", alt: "Sponsor 3" },
  { src: "/sponsors/sponsor-6.svg", alt: "Sponsor 4" },
  { src: "/sponsors/sponsor-5.webp", alt: "Sponsor 5" },
];

const endorsedBy = [
  { src: "/logos/logo-1.png", alt: "Endorsed Sponsor 1" },
  { src: "/logos/logo-2.jpg", alt: "Endorsed Sponsor 2" },
  { src: "/logos/logo-3.jpg", alt: "Endorsed Sponsor 3" },
  { src: "/logos/logo-6.svg", alt: "Endorsed Sponsor 4" },
  { src: "/logos/logo-5.jpg", alt: "Endorsed Sponsor 5" },
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
  <div
    className="min-h-screen bg-gray-100 flex flex-col relative overflow-hidden"
    {...swipeHandlers}
  >
    <div className="absolute inset-0 z-0">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          layout="fill"
          objectFit="cover"
          priority={index === 0}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
    <Navbar />
    <div className="flex-grow flex items-center justify-start z-10 relative px-6 md:px-28">
      <div className="max-w-2xl text-center md:text-left">
        <h1 className="text-3xl lg:text-6xl font-bold text-purple-800 mb-4 md:mb-6 leading-tight">
          9th International Conference on
          <br className="hidden md:block" />
          Computer Vision & Image Processing
        </h1>
        <p className="text-lg lg:text-2xl text-purple-300 mb-6 md:mb-8 font-medium">
          04-06 December, 2025 | IIT Ropar, Punjab - 140001, INDIA
        </p>
        <div className="flex justify-center md:justify-start">
          <Link
            href="#about"
            scroll={true}
            className="group relative overflow-hidden bg-black text-purple-900 text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="relative z-10">About</span>
            <span className="absolute inset-0 bg-purple-950 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </Link>
        </div>
      </div>
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50 z-0"></div>
  </div>
);

const SponsorsSection = ({ title, items }) => (
  <section className="py-8 md:py-12 bg-gray-100">
    <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-6 md:mb-8 tracking-tight text-purple-600 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-16 after:h-[3px] after:bg-purple-400 rounded-full">
      {title}
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 mx-auto max-w-7xl px-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="w-full flex justify-center items-center transition-transform duration-300 ease-in-out hover:scale-110 hover:translate-y-[-10px] hover:shadow-lg"
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={200}
            height={200}
            className="object-contain transition duration-300 ease-in-out"
          />
        </div>
      ))}
    </div>
  </section>
);

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentImageIndex((prev) => (prev + 1) % images.length),
    onSwipedRight: () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length),
    preventDefaultTouchmoveEvent: true,
  });

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImageIndex((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Carousel images={images} currentImageIndex={currentImageIndex} swipeHandlers={handlers} />
    
      <SponsorsSection title="Our Sponsors" items={sponsors} />
      <SponsorsSection title="Endorsed By" items={endorsedBy} />
      <AboutSection />
      <SpeakersSection speakers={speakers} />
      <ContactUs />
      <Footer />
    </>
  );
};

export default HomePage;

"use client";
import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Link from "next/link";
import Image from "next/image";
import "../globals.css";
import Navbar from "./Navbar";
import ContactUs from "./contsct";

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
];

const endorsedBy = [
  { src: "/logos/logo-1.png", alt: "Endorsed Sponsor 1" },
  { src: "/logos/logo-2.jpg", alt: "Endorsed Sponsor 2" },
  { src: "/logos/logo-3.jpg", alt: "Endorsed Sponsor 3" },
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
  {
    name: "Yann LeCun",
    title: "VP & Chief AI Scientist",
    affiliation: "Meta",
    website: "https://yann.lecun.com/",
    image: "/images/speaker-4.jpg",
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
    <div className="text-center flex-grow flex items-center justify-center z-10 relative">
      <div>
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          9th International Conference on Computer Vision & Image Processing
        </h1>
        <p className="text-red-300 text-lg mb-6">
          04-06 December, 2025 | IIT Ropar, Punjab - 140001, INDIA
        </p>
        <Link
          href="/home/#about"
          scroll={false}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
        >
          About CVIP 2025
        </Link>
      </div>
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50 z-0"></div>
  </div>
);

const SponsorsSection = ({ title, items }) => (
  <section className="py-12 bg-gray-100">
    <h2 className="text-3xl text-red-400 font-bold text-center mb-8">{title}</h2>
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

const SpeakersSection = ({ speakers }) => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Keynote Speakers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {speakers.map((speaker, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={speaker.image}
              alt={`${speaker.name}'s photo`}
              width={300}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{speaker.name}</h3>
              <p className="text-gray-600">{speaker.title}</p>
              <p className="text-gray-600 mb-4">{speaker.affiliation}</p>
              <a
                href={speaker.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutSection = () => {
  const eventDate = new Date("2025-12-04T00:00:00");
  const [remainingDays, setRemainingDays] = useState("Calculating...");

  useEffect(() => {
    const calculateDaysLeft = () => {
      const today = new Date();
      const difference = eventDate - today;
      const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

      if (days > 0) {
        setRemainingDays(`${days} days left`);
      } else if (days === 0) {
        setRemainingDays("The event is today!");
      } else {
        setRemainingDays("The event has ended.");
      }
    };

    calculateDaysLeft();
    const timer = setInterval(calculateDaysLeft, 60 * 60 * 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <section className="bg-gray-100 py-16 w-full" id="about">
      <div className="max-w-full mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600">About CVIP 2025</h2>
          <p className="mt-4 text-lg text-gray-600">
            India's premier conference on Computer Vision, Graphics, and Image Processing
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-gray-700 text-lg leading-8">
            The Indian Conference on Computer Vision, Graphics and Image Processing (ICVGIP) is India’s premier
            conference in these fields. Starting in 1998, it became an annual international event from 2022, providing a
            platform for technological advancements and research findings.
          </p>
        </div>
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-800">Countdown to Event</h3>
          <p className="text-blue-500 text-lg mt-2">{remainingDays}</p>
        </div>
      </div>
    </section>
  );
};

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

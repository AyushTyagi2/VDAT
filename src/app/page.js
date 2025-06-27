"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useSwipeable } from "react-swipeable";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { Calendar, Clock, CheckCircle } from "lucide-react";

import ContactUs from "./home/contsct";
import AboutSection from "./home/about";
import SpeakersSection from "./home/speaker";
import Footer from "./footer/footer";
import Navbar from "./home/Navbar";

// Improved Theme Banner Component with more visual elements
const ThemeBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 text-white py-20 px-6 md:px-12 overflow-hidden">
      {/* Enhanced background with multiple elements */}
      <div className="absolute inset-0 transform -skew-y-3 bg-black opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-16 bg-white opacity-5 transform rotate-45"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-purple-500 opacity-20 transform translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
          Our Theme
        </h2>
        <div className="h-1 w-24 bg-yellow-400 mx-auto mb-8 rounded-full"></div>
        <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
          VLSI Design and Semiconductor Technology for Next Gen Chips & AI
          Applications
        </p>
      </div>
    </div>
  );
};

const images = [
  "/images/iit-ropar-5.avif",
  "/images/mandi.jpg",
  "/images/cucampus.jpg",
  "/images/peccampus.png",
  "/images/chitkaracampus.jpg",
];

const sponsors = [
  // Keeping commented sponsors for future use
];

const endorsedBy = [
  // Keeping commented endorsements for future use
];

const speakers = [
  {
    name: "Tapas Nandy",
    title: "Sr. Director, Microsoft / Sr. Member, IEEE",
    affiliation: "IEEE",
    image: "/images/tapasnandy.jpg",
    linkedin:
      "https://www.linkedin.com/in/tapas-nandy-35133518/?originalSubdomain=in",
    website: "",
  },
  {
    name: "Dipan Sahu",
    title: "Assistant Innovation Director",
    affiliation: "Ministry of Education's Innovation Cell",
    image: "/images/dipansahu.jpg",
    linkedin: "https://www.linkedin.com/in/deepansahu/?originalSubdomain=in",
    website: "",
  },
  {
      name: "Ganesan Narayanasamy",
      title: "President, OpenPOWER Foundation",
      affiliation: "CEO at Object Automation Inc. – USA & India",
      image: "/images/ganesan.jpeg", // Update with correct path
      linkedin: "https://www.linkedin.com/in/ganesannarayanasamy/",
      website: ""
    },
    {
      name: "Shanthi Pavan",
      title: "Professor",
      affiliation: "IIT Madras",
      image: "/images/shanthi.jpeg", // Update with correct path
      linkedin: "https://www.linkedin.com/in/shanthi-pavan-39715a137/",
      website: "https://www.ee.iitm.ac.in/faculty/profile/shanthi.pavan"
    },
    {
      name:"Gaurav Goel",
      title:"Senior Principal Engineer",
      affiliation:"Renesas Electronics",
      image: "/images/gauravgoel.jpeg", // Update with correct path
      linkedin: "https://www.linkedin.com/in/gaurav-goel-01185a5/",
      website :""
    }
];
//the carousel should automatically slide every 3 seconds , and if clicked to go to next or prev the timer should reset
//make the additions

// Improved carousel with better transitions and controls
const Carousel = ({
  images,
  currentImageIndex,
  setCurrentImageIndex,
  swipeHandlers,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentImageIndex, images.length, setCurrentImageIndex]);

  return (
    <div
      className="min-h-screen bg-gray-100 flex flex-col relative overflow-hidden"
      {...swipeHandlers}
    >
      {/* Background images */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-5000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority={index === currentImageIndex}
              className="object-cover"
            />
            {/* Add a subtle zoom effect to active image */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out ${
                index === currentImageIndex ? "scale-110" : "scale-100"
              }`}
              style={{
                backgroundImage: `url(${src})`,
                opacity: 0.1, // Very subtle effect
              }}
            />
          </div>
        ))}
      </div>

      <Navbar />

      <div className="flex-grow flex items-center justify-start  z-10 relative px-6 md:px-28">
        <div className="max-w-4xl text-center md:text-left">
          <div className="mb-6 inline-block">
            <span
              style={{ height: "50px", alignContent: "center" }}
              className="px-4 py-1 bg-yellow-400 text-black font-medium text-lg  rounded-full inline-block mb-3 animate-[pulse_1s_linear_infinite]"
            >
              August 7-9, 2025
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight drop-shadow-xl">
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 text-transparent bg-clip-text">
              29th International <br className="hidden md:block" />
              Symposium on <br className="hidden md:block" />
              VLSI Design and Test
            </span>
          </h1>

          <p
            className="
    text-lg lg:text-2xl text-white mb-8 md:mb-10 font-medium drop-shadow-lg
    flex flex-col        /* stack them vertically on mobile  */
    space-y-4           /* add 1rem (4) of space between each span */
    md:flex-row         /* switch to a row at md and up */
    md:space-y-0        /* remove the vertical gap on md+ */
    md:space-x-4        /* add horizontal gap on md+                 */  
  "
          >
            <span className="bg-black bg-opacity-30 px-4 py-2 rounded-lg">
              Venue: Shivalik View, Sector 17
            </span>
            <span className="bg-black bg-opacity-30 px-4 py-2 rounded-lg">
              Chandigarh, India
            </span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              href="#about"
              scroll={true}
              className="group relative overflow-hidden bg-yellow-400 text-black text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl hover:bg-yellow-300"
            >
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 opacity-60 z-0"></div>

      {/* Improved carousel indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentImageIndex
                ? "bg-yellow-400 scale-125 shadow-md"
                : "bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() =>
          setCurrentImageIndex(
            (prev) => (prev - 1 + images.length) % images.length
          )
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={() =>
          setCurrentImageIndex((prev) => (prev + 1) % images.length)
        }
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

// Improved sponsors section with animation
const SponsorsSection = ({ title, items, comingSoon = false }) => (
  <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 tracking-tight text-purple-700">
        {title}
      </h2>
      <div className="h-1 w-24 bg-purple-500 mx-auto mb-12 rounded-full"></div>

      {comingSoon ? (
        <div className="text-center">
          <div className="flex flex-row justify-center items-center gap-6">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-64 h-48 flex items-center justify-center">
              <img
                src="./logos/mandi__.png"
                alt="Agmetal-Keysight Logo"
                className="max-w-full max-h-full"
              />
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-64 h-48 flex items-center justify-center">
              <img
                src="./images/Agmatel_Keyisght Logo HD.png"
                alt="Agmetal-Keysight Logo"
                className="max-w-full max-h-full"
              />
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-64 h-48 flex items-center justify-center">
              <img
                src="./images/yourpedia.png"
                alt="YourPedia Logo"
                className="max-w-full max-h-full"
              />
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-64 h-48 flex items-center justify-center">
              <img
                src="./images/springer.png"
                alt="Springer Logo"
                className="max-w-full max-h-full"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mx-auto max-w-7xl">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full flex justify-center items-center bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={150}
                height={150}
                className="object-contain transition duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  </section>
);

const Timeline = () => {
  const [currentDate] = useState(new Date());

  const timelineData = [
    {
      title: "Paper Submission",
      borderColor: "border-l-purple-500",
      bgColor: "bg-purple-50",
      icon: "📄",
      oldDate: "April 15, 2025",
      newDate: "May 15, 2025",
      note: "(Firm deadline, no further extension)"
    },
    {
      title: "Acceptance Notification", 
      borderColor: "border-l-blue-500",
      bgColor: "bg-blue-50",
      icon: "📩",
      oldDate: "June 15, 2025",
      newDate: "July 1, 2025",
      note: ""
    },
    {
      title: "Early Bird Registration",
      borderColor: "border-l-blue-600", 
      bgColor: "bg-blue-50",
      icon: "📅",
      oldDate: "June 20, 2025",
      newDate: "July 10, 2025",
      note: ""
    },
    {
      title: "Camera-ready Submission",
      borderColor: "border-l-green-500",
      bgColor: "bg-green-50", 
      icon: "📸",
      oldDate: "July 1, 2025",
      newDate: "July 15, 2025",
      note: ""
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
          Important Dates
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {timelineData.map((item, index) => (
              <div 
                key={index}
                className={`${item.bgColor} p-6 rounded-xl shadow-lg border-l-4 ${item.borderColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{item.icon}</span>
                  <h3 className="font-bold text-gray-800 text-lg">{item.title}</h3>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center flex-wrap">
                    <span className="font-semibold text-gray-700 mr-2">
                      {item.title === "Acceptance Notification" ? "Date:" : "Deadline:"}
                    </span>
                    <span className="line-through text-red-500 mr-2 text-sm">
                      {item.oldDate}
                    </span>
                    <span className="font-bold text-gray-800">
                      {item.newDate}
                    </span>
                  </div>
                  
                  {item.note && (
                    <p className="text-gray-600 text-sm italic">
                      {item.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
// Stats component
const Stats = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-purple-50 p-6 rounded-lg shadow-sm transform transition duration-300 hover:scale-105 hover:shadow-md">
            <p className="text-4xl font-bold text-purple-600 mb-2">28+</p>
            <p className="text-gray-600">Previous Editions</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg shadow-sm transform transition duration-300 hover:scale-105 hover:shadow-md">
            <p className="text-4xl font-bold text-purple-600 mb-2">300+</p>
            <p className="text-gray-600">Expected Attendees</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg shadow-sm transform transition duration-300 hover:scale-105 hover:shadow-md">
            <p className="text-4xl font-bold text-purple-600 mb-2">50+</p>
            <p className="text-gray-600">Research Papers</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg shadow-sm transform transition duration-300 hover:scale-105 hover:shadow-md">
            <p className="text-4xl font-bold text-purple-600 mb-2">15+</p>
            <p className="text-gray-600">Keynote Speakers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Memoize the handler to prevent unnecessary re-renders
  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentImageIndex((prev) => (prev + 1) % images.length),
    onSwipedRight: () =>
      setCurrentImageIndex(
        (prev) => (prev - 1 + images.length) % images.length
      ),
    preventDefaultTouchmoveEvent: true,
  });

  // Improved auto-slide with pause on hover/interaction
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(
        () => setCurrentImageIndex((prev) => (prev + 1) % images.length),
        5000 // Slower rotation for better user experience
      );
      return () => clearInterval(interval);
    }
    return undefined;
  }, [isPaused]);

  return (
    <div
      className="font-sans"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setTimeout(() => setIsPaused(false), 5000)}
    >
      <Carousel
        images={images}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        swipeHandlers={handlers}
      />

      <ThemeBanner />
      <SpeakersSection speakers={speakers} />
      <AboutSection />

      <Stats />

      <SponsorsSection
        title="Our Sponsors"
        items={sponsors}
        comingSoon={true}
      />

      {/* <SponsorsSection
        title="Endorsed By"
        items={endorsedBy}
        comingSoon={true}
      /> */}

      <Timeline />

      <Footer />
    </div>
  );
};

export default HomePage;

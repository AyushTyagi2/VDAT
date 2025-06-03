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
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const [currentDate] = useState(new Date());

  const dates = [
    {
      date: "May 15, 2025",
      event: "Paper Submission Deadline",
      description:
        "Deadline for all paper submissions. No extensions will be granted.",
    },
    {
      date: "July 1, 2025",
      event: "Notification of Acceptance",
      description:
        "Authors will be notified about the status of their submissions.",
    },
    {
      date: "July 15, 2025",
      event: "Camera-ready Submission",
      description: "Final papers must be submitted in the required format.",
    },
    {
      date: "July 10, 2025",
      event: "Early Registration Deadline",
      description: "Last day to register at the discounted early bird rate.",
    },
    {
      date: "August 7-9, 2025",
      event: "Conference Dates",
      description: "Main conference events and presentations.",
    },
  ];

  // Find the next upcoming event
  useEffect(() => {
    const findNextEvent = () => {
      for (let i = 0; i < dates.length; i++) {
        const eventDate = new Date(
          dates[i].date.replace("August 7-9, 2025", "August 7, 2025")
        );
        if (eventDate > currentDate) {
          setHighlightedIndex(i);
          return;
        }
      }
      // If all events have passed
      setHighlightedIndex(null);
    };

    findNextEvent();
  }, [currentDate]);

  // Calculate if a date is in the past
  const isPastDate = (dateString) => {
    const eventDate = new Date(
      dateString.replace("August 7-9, 2025", "August 7, 2025")
    );
    return eventDate < currentDate;
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Important Dates
        </h2>
        <div className="h-1 w-24 bg-yellow-400 mx-auto mb-12 rounded-full"></div>

        <div className="max-w-4xl mx-auto">
          {dates.map((item, index) => {
            const isPast = isPastDate(item.date);
            const isHighlighted = index === highlightedIndex;

            return (
              <div
                key={index}
                className={`flex relative pb-16 transition-all duration-300 ${
                  isHighlighted ? "scale-105" : ""
                }`}
                onMouseEnter={() => setHighlightedIndex(index)}
                onMouseLeave={() => setHighlightedIndex(highlightedIndex)}
              >
                {/* Line */}
                {index !== dates.length - 1 && (
                  <div className="absolute inset-0 flex items-center justify-center h-full w-10">
                    <div
                      className={`h-full w-1 ${
                        isPast ? "bg-green-400" : "bg-yellow-400"
                      } opacity-30 pointer-events-none`}
                    ></div>
                  </div>
                )}

                {/* Circle */}
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full ${
                    isPast
                      ? "bg-green-500"
                      : isHighlighted
                      ? "bg-yellow-300"
                      : "bg-yellow-400"
                  } 
                    inline-flex items-center justify-center text-white relative z-10 shadow-lg
                    transition-all duration-300 ${
                      isHighlighted ? "scale-125" : ""
                    }`}
                  aria-label={`Event: ${item.event}`}
                >
                  {isPast ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <Calendar className="h-5 w-5" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`flex-grow pl-6 ${
                    isHighlighted
                      ? "bg-purple-800 bg-opacity-40 p-4 rounded-lg"
                      : ""
                  }`}
                >
                  <div className="flex items-center mb-1">
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {item.event}
                    </h3>
                    {isHighlighted && (
                      <span className="ml-2 px-2 py-1 bg-yellow-500 text-xs font-bold rounded-full">
                        NEXT
                      </span>
                    )}
                  </div>
                  <div className="flex items-center text-purple-200 mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    <p>{item.date}</p>
                  </div>
                  <p
                    className={`text-sm md:text-base ${
                      isHighlighted ? "text-purple-100" : "text-purple-200"
                    } transition-colors duration-300`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
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

      <AboutSection />

      <SpeakersSection speakers={speakers} />

      <ContactUs />

      <Footer />
    </div>
  );
};

export default HomePage;

"use client";
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Link from 'next/link';
import "../globals.css";
import Navbar from './Navbar';
import Image from 'next/image';

import ContactUs from './contsct';

const images = [
  '/images/iit-ropar-5.avif',
  '/images/iit-ropar-5.jpeg',
  '/images/iit-ropar-5.jpg',
];

const Endorsed = [
  { src: '/logos/logo-1.png', alt: 'Sponsor 1' },
  { src: '/logos/logo-2.jpg', alt: 'Sponsor 2' },
  { src: '/logos/logo-3.jpg', alt: 'Sponsor 3' },
];
const sponsors = [
  { src: '/sponsors/sponsor-1.jpg', alt: 'Sponsor 1' },
  { src: '/sponsors/sponsor-2.png', alt: 'Sponsor 2' },
  { src: '/sponsors/sponsor-3.png', alt: 'Sponsor 3' },
  { src: '/sponsors/sponsor-4.png', alt: 'Sponsor 3' },

];

const speakers = [
  {
    name: 'Richard Szeliski',
    title: 'Distinguished Scientist and Affiliate Faculty',
    affiliation: 'Google Research and University of Washington',
    website: 'https://szeliski.org/',
    image: '/images/speaker-1.jpg', // Path to Richard's image
  },
  {
    name: 'R. Venkatesh Babu',
    title: 'Professor',
    affiliation: 'Dept. of Computational and Data Sciences, Indian Institute of Science (IISc)',
    website: 'https://cds.iisc.ac.in/faculty/venky/',
    image: '/images/speaker-2.jpg', // Path to Venkatesh's image
  },
  // Add more speakers here
];
const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handlers for swipe actions
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNextImage(),
    onSwipedRight: () => handlePreviousImage(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
    <div className="min-h-screen bg-gray-100 flex flex-col relative overflow-hidden" {...swipeHandlers}>

      {/* Background with swipeable images */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <Navbar />

      {/* Main Content */}
      <div className="text-center flex-grow flex items-center justify-center z-10 relative">
        <div>
          <h1 className="text-4xl font-bold text-white mb-4">
          9th International Conference on Computer Vision & Image Processing
       </h1>
          <p className="text-gray-300 text-lg mb-6">
          04-06 December, 2025 | IIT Ropar, Punjab - 140001, INDIA   
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/home/#about" scroll={false}
               className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
                About CVIP 2025
              
            </Link>
            
          </div>
        </div>
      </div>

      {/* Gradient overlay for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50 z-0"></div>
    </div>
    <section className="py-12 bg-gray-100"> {/* Added background color */}
    <h2 className="text-3xl font-bold text-center mb-8">Endorsed By</h2> {/* Improved heading styles */}
    <div className="flex justify-center items-center flex-wrap gap-8"> {/* Flexbox, centering, wrapping */}
      {Endorsed.map((sponsor, index) => (
        <div key={index} className="transition-all duration-300 hover:scale-105 hover:filter-none filter grayscale-80"> {/* Added hover effect and grayscale */}
          <Image
            src={sponsor.src}
            alt={sponsor.alt}
            width={300}
            height={250}
            style={{maxWidth: "300px", height: "250"}}
            className="object-contain" // Ensures image fits within container
          />
        </div>
        
      ))}
    </div>
  </section>
  <section className="py-12 bg-gray-100"> {/* Added background color */}
    <h2 className="text-3xl font-bold text-center mb-8">Sponsored By</h2> {/* Improved heading styles */}
    <div className="flex justify-center items-center flex-wrap gap-8"> {/* Flexbox, centering, wrapping */}
      {sponsors.map((sponsor, index) => (
        <div key={index} className="transition-all duration-300 hover:scale-105 hover:filter-none filter grayscale-80"> {/* Added hover effect and grayscale */}
          <Image
            src={sponsor.src}
            alt={sponsor.alt}
            width={300}
            height={250}
            style={{maxWidth: "300px", height: "250"}}
            className="object-contain" // Ensures image fits within container
          />
        </div>
        
      ))}
    </div>
  </section>
  <section className="bg-gray-100 py-16" id="about">
  <div className="max-w-6xl mx-auto px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-blue-600">About ICVGIP 2023</h2>
      <p className="mt-4 text-lg text-gray-600">
        India's premier conference on Computer Vision, Graphics, and Image Processing
      </p>
    </div>
    <div className="bg-white shadow-lg rounded-lg p-8">
      <p className="text-gray-700 text-lg leading-8">
        The Indian Conference on Computer Vision, Graphics and Image Processing (ICVGIP) is India’s premier conference in Computer Vision, Graphics, Image Processing, and related fields. Starting in 1998, it was a biennial international conference until 2021, providing a forum for the presentation of technological advances and research findings in these areas.
      </p>
      <p className="mt-6 text-gray-700 text-lg leading-8">
        ICVGIP 2023, the 14th conference in this series, is being organized by <span className="font-semibold text-blue-600">IIT Ropar</span> in association with the Indian Unit for Pattern Recognition and Artificial Intelligence (<span className="font-semibold text-blue-600">IUPRAI</span>), an affiliate of the <span className="font-semibold text-blue-600">International Association for Pattern Recognition (IAPR)</span>. 
      </p>
      <p className="mt-6 text-gray-700 text-lg leading-8">
        Due to the huge growth in the community, ICVGIP will now be held annually starting in 2022. Dedicated to fostering the community of computer vision, graphics, and image processing researchers and enthusiasts in India and abroad, ICVGIP strives to live up to this goal at every occurrence of this annual conference.
      </p>
    </div>
  </div>
</section>
<section className="py-16 bg-white"> {/* Section padding and background */}
      <div className="container mx-auto px-4"> {/* Container for centering */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Keynote Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Grid layout for speakers */}
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden"> {/* Speaker card */}
              <div className="relative h-64">
                  <Image
                      src={speaker.image}
                      alt={`${speaker.name}'s photo`}
                      width={150}
                      height={300}
                      style={{objectFit: "cover"}}
                  />
              </div>
              <div className="p-6"> {/* Speaker details padding */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{speaker.name}</h3>
                <p className="text-gray-600 mb-2">{speaker.title}</p>
                <p className="text-gray-600 mb-4">{speaker.affiliation}</p>
                <a href={"speaker.website"} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
          <ContactUs/>
  </div>
  );
};

export default HomePage;

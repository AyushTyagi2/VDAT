import React from "react";
import { motion } from "framer-motion";

const speakers = [
  {
    name: "Richard Szeliski",
    title: "Distinguished Scientist and Affiliate Faculty",
    affiliation: "Google Research and University of Washington",
    website: "https://szeliski.org/",
    image: "/images/speaker-1.jpg", // Replace with your image paths
  },
  {
    name: "R. Venkatesh Babu",
    title: "Professor",
    affiliation: "Dept. of Computational and Data Sciences, IISc",
    website: "https://cds.iisc.ac.in/faculty/venky/",
    image: "/images/speaker-2.jpg", // Replace with your image paths
  },
  {
    name: "Another Speaker",
    title: "Their Title",
    affiliation: "Their Affiliation",
    website: "#",
    image: "/images/speaker-3.jpg", // Replace with your image paths
  },
];

const SpeakersSection = ({ speakers: propSpeakers = speakers }) => { // Default to the imported speakers
  const [isLoading, setIsLoading] = React.useState(true);
  const [speakerData, setSpeakerData] = React.useState([]);

  React.useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      // Simulate fetching data (replace with actual API call if needed)
      await new Promise((resolve) => setTimeout(resolve, 500)); // Shortened delay
      setSpeakerData(propSpeakers);
      setIsLoading(false);
    };

    loadData();

  }, [propSpeakers]);

  if (isLoading) {
    return (
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Keynote Speakers</h2>
        <p className="text-gray-600 mt-4">Speaker information is loading...</p>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-8 tracking-tight text-purple-600 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-16 after:h-[3px] after:bg-purple-400 rounded-full">
          Keynote Speakers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakerData.map((speaker, index) => (
            <motion.div
              key={speaker.name + index} // Better key using speaker name + index
              className="relative bg-white rounded-lg shadow-md overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-full w-full"> {/* Container for image with fixed height */}
                <img
                  src={speaker.image}
                  alt={`${speaker.name}'s photo`}
                  className="object-cover w-full h-full" // Use object-cover for proper scaling
                />
              </div>
              <motion.div
                className="absolute inset-0 bg-gray-800 bg-opacity-75 text-white p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <h3 className="text-xl font-semibold">{speaker.name}</h3>
                <p className="text-gray-200 text-sm">{speaker.title}</p>
                <p className="text-gray-400 text-sm mb-4">{speaker.affiliation}</p>
                <a
                  href={speaker.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Learn More
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
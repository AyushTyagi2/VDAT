import React from "react";
import { motion } from "framer-motion";

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
    image: "/images/iit-ropar-6.jpg",
  },
];

const SpeakersSection = ({ speakers }) => {
  const [isLoading, setIsLoading] = React.useState(true); // Track loading state
  const [speakerData, setSpeakerData] = React.useState([]); // Store speaker data

  // Fetch speaker data if not already loaded (ideally in a real app)
  React.useEffect(() => {
    if (speakers.length === 0) {
      setIsLoading(true);
      // Simulate fetching data (replace with actual API call)
      setTimeout(() => {
        setSpeakerData(speakers);
        setIsLoading(false);
      }, 1000); // Simulate delay
    } else {
      setSpeakerData(speakers); // Use provided data directly
      setIsLoading(false);
    }
  }, []); // Only run when speakers prop changes

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
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Keynote Speakers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakerData.map((speaker, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-lg shadow-md overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={speaker.image}
                alt={`${speaker.name}'s photo`}
                width={150}
                height={300}
                className="w-60 h-full object-cover"
              />
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
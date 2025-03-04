import React, { useState, useEffect } from "react";

const AboutSection = () => {
  const eventDate = new Date("2025-08-07T00:00:00");
  const [remainingTime, setRemainingTime] = useState(null); // Initially null to avoid SSR mismatch.

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = eventDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setRemainingTime({ days, hours, minutes, seconds });
      } else {
        setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft(); // Calculate immediately on mount.
    const timer = setInterval(calculateTimeLeft, 1000); // Update every second.

    return () => clearInterval(timer); // Clean up on unmount.
  }, []);

  if (!remainingTime) {
    // Render nothing until the client-side calculation runs.
    return null;
  }

  return (
    <section className="bg-black bg-opacity-0 py-16 text-white" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4 text-purple-500">About VDAT 2025</h2>
          <p className="text-lg leading-7">
          VLSI Design & Test Symposium (VDAT) began as a workshop in 1998 and gained symposium status in 2005 due to growing participation from VLSI professionals and academia. Since then, it has been held annually, becoming a key event in the VLSI field.  

The symposium provides a platform for academia, researchers, startups, and industry professionals to exchange ideas, experiences, and knowledge in VLSI Design and Testing.  

Over 28 years, VDAT has introduced novel designs and technologies, contributing to global progress. High-quality technical presentations have guided participants toward advancements in VLSI technology.  

Now in its 29th year, VDAT-2025 will be a three-day in-person event in Chandigarh, India, during the first week of August 2025. It is supported by the VLSI Society of India.
          </p>
        </div>
        <div className="md:w-1/3">
          <h2 className="text-3xl font-bold mb-4 text-purple-500 text-center">Countdown</h2>
          <div className="flex justify-center space-x-4">
            {Object.entries(remainingTime).map(([unit, value]) => (
              <div className="text-center" key={unit}>
                <div className="text-4xl font-bold border border-purple-500 rounded p-2">
                  {value}
                </div>
                <div className="text-sm">{unit.charAt(0).toUpperCase() + unit.slice(1)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

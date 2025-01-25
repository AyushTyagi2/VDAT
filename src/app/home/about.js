import React, { useState, useEffect } from "react";

const AboutSection = () => {
  const eventDate = new Date("2025-12-04T00:00:00");
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
          <h2 className="text-3xl font-bold mb-4 text-purple-500">About CVIP 2025</h2>
          <p className="text-lg leading-7">
            The Indian Conference on Computer Vision, Graphics and Image Processing (ICVGIP) is India’s premier
            conference in these fields. Starting in 1998, it became an annual international event from 2022, providing a
            platform for technological advancements and research findings.
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

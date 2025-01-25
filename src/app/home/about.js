import React, { useState, useEffect } from "react";

const AboutSection = () => {
  const eventDate = new Date("2025-12-04T00:00:00");
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = eventDate - now;

      if (difference > 0) {
        setRemainingTime({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft(); // Initial calculation
    const timer = setInterval(calculateTimeLeft, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [eventDate]); // Add `eventDate` as a dependency (it should not change)

  return (
    <section id="about" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-purple-600 font-bold mb-6">About the Conference</h2>
        <p className="text-lg text-gray-700">
          The 9th International Conference on Computer Vision and Image Processing (CVIP) brings together researchers,
          practitioners, and enthusiasts to discuss cutting-edge advancements in computer vision, machine learning, and
          image processing.
        </p>
        <div className="mt-6 text-center">
          <h3 className="text-2xl font-bold text-purple-600 mb-4">Countdown to the Event</h3>
          <div className="flex justify-center space-x-6">
            {Object.entries(remainingTime).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <span className="block text-4xl font-bold text-purple-700">{value}</span>
                <span className="block text-sm text-gray-500">{unit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

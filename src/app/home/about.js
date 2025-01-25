import React, { useState, useEffect } from "react";

const AboutSection = () => {
  const eventDate = new Date("2025-12-04T00:00:00");
  const [remainingDays, setRemainingDays] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const today = new Date();
      const difference = eventDate - today;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setRemainingDays({ days, hours, minutes, seconds });
      } else {
        setRemainingDays({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <section className="bg-black bg-opacity-0 py-16  text-white" id="about"> {/* Improved opacity syntax */}
      <div className="  max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start">
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
            <div className="text-center">
              <div className="text-4xl font-bold border border-purple-500 rounded p-2">
                {remainingDays.days}
              </div>
              <div className="text-sm">Days</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold border border-purple-500 rounded p-2">
                {remainingDays.hours}
              </div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold border border-purple-500 rounded p-2">
                {remainingDays.minutes}
              </div>
              <div className="text-sm">Min.</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold border border-purple-500 rounded p-2">
                {remainingDays.seconds}
              </div>
              <div className="text-sm">Sec.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
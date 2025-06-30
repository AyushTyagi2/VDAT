// app/coming-soon/page.tsx

"use client";

import { useEffect, useState } from "react";
import React from "react";
import Footer from "../footer/footer";
import Navbar from "../home/Navbar";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date("2025-08-07T00:00:00").getTime(); // ensure full timestamp

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white px-4 py-16">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            VLSI Design & Test Symposium (VDAT) 2025
          </h1>
          <p className="text-xl md:text-2xl mb-10">We’re coming soon. Stay tuned!</p>

          <div className="flex justify-center gap-6 text-center text-xl font-semibold mb-12">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
              <div key={label}>
                <div className="text-5xl">
                  {[
                    timeLeft.days,
                    timeLeft.hours,
                    timeLeft.minutes,
                    timeLeft.seconds,
                  ][index]}
                </div>
                <div className="text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ComingSoon;

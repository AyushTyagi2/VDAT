"use client";


import React, {useState} from "react";
import Footer from "../footer/footer";
import Navbar from "../home/Navbar";
import Link from "next/link";
import { Cpu, CircuitBoard, Layers, ExternalLink } from "lucide-react";


const ConferenceScheduleTable = () => {
  const scheduleData = [
    {
      time: "9:00 AM - 10:30 AM",
      isBreak: false,
      sessions: {
        system: {
          title: "Building RISC-V based System on Chips – Embedded to AI Enabled SoCs",
          path: "tutorial1"
        },
        analogDesign: {
          title: "Testing & characterization of data converters",
          code: "IITR/IITD– 180",
          path: "tutorial2"
        },
        digitalDesign: {
          title: "An Overview of DFT fundamentals and Advanced Fault Modeling with Best Practices for Minimizing Test Escapes",
          code: "microchip -180",
          path: "tutorial3"
        },
        deviceLevel: {
          title: "Foundry Compliance and Tapeout Qualification of Analog, Digital, and Mixed-Signal IC Designs for SCL 180nm CMOS Technology Node",
          path: "tutorial4"
        }
      }
    },
    {
      time: "10:30 AM - 11:00 AM",
      isBreak: true,
      breakTitle: "Tea Break"
    },
    {
      time: "11:00 AM - 12:30 PM",
      isBreak: false,
      sessions: {
        system: {
          title: "Building RISC-V based System on Chips – Embedded to AI Enabled SoCs",
          path: "tutorial1"
        },
        analogDesign: {
          title: "Testing & characterization of data converters",
          code: "IITR/IITD– 180",
          path: "tutorial2"
        },
        digitalDesign: {
          title: "An Overview of DFT fundamentals and Advanced Fault Modeling with Best Practices for Minimizing Test Escapes",
          code: "microchip– 180",
          path: "tutorial3"
        },
        deviceLevel: {
          title: "Foundry Compliance and Tapeout Qualification of Analog, Digital, and Mixed-Signal IC Designs for SCL 180nm CMOS Technology Node",
          path: "tutorial4"
        }
      }
    },
    {
      time: "12:30 PM - 2:00 PM",
      isBreak: true,
      breakTitle: "Lunch Break"
    },
    {
      time: "2:00 PM - 3:30 PM",
      isBreak: false,
      sessions: {
        system: {
          title: "Google's Tensor Processing Unit: Understanding State-of-the-art AI Accelerator",
          path: "ts2"
        },
        analogDesign: {
          title: "Design techniques for dc-dc boost converters with a high voltage conversion ratio",
          path: "ta2"
        },
        digitalDesign: {
          title: "Metric Driven Verification of a typical Low Power Mixed Signal (LPMS) SoC",
          path: "td2"
        },
        deviceLevel: {
          title: "NQS High-frequency Modeling of the Non-planar devices",
          path: "tut8"
        }
      }
    },
    {
      time: "3:30 PM - 4:00 PM",
      isBreak: true,
      breakTitle: "Tea Break"
    },
    {
      time: "4:00 PM - 5:30 PM",
      isBreak: false,
      sessions: {
        system: {
          title: "Design of a Battery-less Wireless Sensor Node Powered by RF Energy Harvester",
          path: "tut9"
        },
        analogDesign: {
          title: "Neuromorphic Sensors: Architectures, IC Design Techniques, and Emerging Applications",
          path: "tut10"
        },
        digitalDesign: {
          title: "Workshop on Accelerating System Design: HDL Code Generation and Verification Techniques",
          path: "tut11"
        },
        deviceLevel: {
          title: "Reliability-Aware Journey from FinFET to Stacked transistor",
          path: "tut12"
        }
      }
    }
  ];

  const SessionLink = ({ session }) => (
    <div className="p-2 sm:p-3 h-full">
      <Link 
        href={`tut/${session.path}`}
        className="block text-xs sm:text-sm leading-tight sm:leading-relaxed hover:text-blue-600 transition-colors duration-200 group"
      >
        <span className="font-medium group-hover:underline text-black line-clamp-3 sm:line-clamp-none">{session.title}</span>
        <ExternalLink className="inline-block w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen font-sans">
       <div className="bg-black">
        <Navbar />
      </div>
      {/* Header */}
      <header className="text-center text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-violet-900/85"></div>
        
        {/* Animated Circuit Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 animate-pulse">
            <CircuitBoard size={48} className="text-cyan-300" />
          </div>
          <div className="absolute top-3/4 right-1/4 animate-pulse delay-1000">
            <Cpu size={36} className="text-green-300" />
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-pulse delay-500">
            <Layers size={42} className="text-purple-300" />
          </div>
        </div>

        <div className="relative z-10 px-4 py-8">
          <div className="flex items-center justify-center mb-4">
            <Cpu className="text-cyan-300 mr-3 animate-spin" size={36} />
            <h1 className="text-4xl font-extrabold tracking-tight uppercase drop-shadow-lg">
              Tutorial
            </h1>
            <CircuitBoard className="text-green-300 ml-3 animate-pulse" size={36} />
          </div>

          <p className="text-lg max-w-2xl mx-auto font-light mb-4 leading-relaxed">
            Comprehensive workshops and tutorials schedule
          </p>
        </div>
      </header>

      <div className="max-w-full mx-auto p-2 sm:p-6 bg-gray-50 min-h-screen">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
            <h2 className="text-xl sm:text-2xl font-bold text-center">7th August 2025</h2>
          </div>
          
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 sm:p-3 text-center font-bold text-gray-700 text-xs sm:text-sm bg-gray-200 min-w-[120px]">
                    <div className="flex flex-col items-center">
                      <span>Track</span>
                      <span className="text-xs text-gray-500 mt-1">Time</span>
                    </div>
                  </th>
                  <th className="border border-gray-300 p-2 sm:p-3 text-center font-bold text-gray-700 bg-pink-100 text-xs sm:text-sm min-w-[200px]">System</th>
                  <th className="border border-gray-300 p-2 sm:p-3 text-center font-bold text-gray-700 bg-yellow-100 text-xs sm:text-sm min-w-[200px]">Analog</th>
                  <th className="border border-gray-300 p-2 sm:p-3 text-center font-bold text-gray-700 bg-blue-100 text-xs sm:text-sm min-w-[200px]">Digital</th>
                  <th className="border border-gray-300 p-2 sm:p-3 text-center font-bold text-gray-700 bg-green-100 text-xs sm:text-sm min-w-[200px]">Device</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((row, index) => (
                  <tr key={index} className={row.isBreak ? "bg-gray-100" : "hover:bg-gray-50 transition-colors"}>
                    <td className="border border-gray-300 p-2 sm:p-3 text-xs sm:text-sm font-medium text-gray-700 bg-gray-50 text-center min-w-[120px]">
                      <div className="whitespace-nowrap">{row.time}</div>
                    </td>
                    {row.isBreak ? (
                      <td className="border border-gray-300 bg-gray-100 text-center py-2 px-4" colSpan={4}>
                        <div className="text-red-600 font-medium text-sm sm:text-base">
                          {row.breakTitle}
                        </div>
                      </td>
                    ) : (
                      <>
                        <td className="border border-gray-300 bg-pink-50 align-top">
                          <SessionLink session={row.sessions.system} />
                        </td>
                        <td className="border border-gray-300 bg-yellow-50 align-top">
                          <SessionLink session={row.sessions.analogDesign} />
                        </td>
                        <td className="border border-gray-300 bg-blue-50 align-top">
                          <SessionLink session={row.sessions.digitalDesign} />
                        </td>
                        <td className="border border-gray-300 bg-green-50 align-top">
                          <SessionLink session={row.sessions.deviceLevel} />
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-gray-50 p-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              <span className="font-medium">Note:</span> Click on any session title to view detailed information. 
              All sessions are subject to change.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>  
  );
};

export default ConferenceScheduleTable;
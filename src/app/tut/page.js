"use client";


import React, {useState} from "react";
import Footer from "../footer/footer";
import Navbar from "../home/Navbar";
import Link from "next/link";
import { Cpu, CircuitBoard, Layers, ExternalLink } from "lucide-react";


const ConferenceScheduleTable = () => {
  const scheduleData = [
    {
      time: "90min",
      timeSlot: "9 to 10:30",
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
    },
    {
      time: "Tea Break",
      timeSlot: "10:30 to 11:00",
      isBreak: true
    },
    {
      time: "90min",
      timeSlot: "11 to 12:30",
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
    },
    {
      time: "Lunch Break",
      timeSlot: "",
      isBreak: true
    },
    {
      time: "90min",
      timeSlot: "2 to 3:30",
      system: {
        title: "Google's Tensor Processing Unit: Understanding State-of-the-art AI Accelerator",
        path: ""
      },
      analogDesign: {
        title: "Design techniques for dc-dc boost converters with a high voltage conversion ratio",
        path: ""
      },
      digitalDesign: {
        title: "Metric Driven Verification of a typical Low Power Mixed Signal (LPMS) SoC",
        path: ""
      },
      deviceLevel: {
        title: "NQS High-frequency Modeling of the Non-planar devices",
        path: ""
      }
    },
    {
      time: "Tea Break",
      timeSlot: "3:30 to 4:00",
      isBreak: true
    },
    {
      time: "90min",
      timeSlot: "4 to 5:30",
      system: {
        title: "Design of a Battery-less Wireless Sensor Node Powered by RF Energy Harvester",
        path: ""
      },
      analogDesign: {
        title: "Neuromorphic Sensors: Architectures, IC Design Techniques, and Emerging Applications",
        path: ""
      },
      digitalDesign: {
        title: "Workshop on Accelerating System Design: HDL Code Generation and Verification Techniques",
        path: ""
      },
      deviceLevel: {
        title: "Reliability-Aware Journey from FinFET to Stacked transistor",
        path: ""
      }
    }
  ];

  const SessionLink = ({ session }) => (
    <div className="p-3 h-full">
      <Link 
        href={`tut/${session.path}`}
        className="block text-sm leading-relaxed hover:text-blue-600 transition-colors duration-200 group"
      >
        <span className="font-medium group-hover:underline text-black">{session.title}</span>
        <ExternalLink className="inline-block w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>
    </div>
  );



 return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen font-sans">
      <div className="bg-black">
        <Navbar />
      </div>
      
      {/* Reduced header size */}
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

      <div className="max-w-full mx-auto p-6 bg-gray-50 min-h-screen">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
            <h2 className="text-2xl font-bold text-center">Conference Schedule</h2>
          </div>
          
          {/* Removed overflow-x-auto to prevent horizontal scrolling */}
          <div className="w-full">
            <table className="w-full border-collapse table-fixed">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left font-bold text-gray-700 w-20">Time</th>
                  <th className="border border-gray-300 p-3 text-center font-bold text-gray-700 bg-pink-100 w-1/4">System</th>
                  <th className="border border-gray-300 p-3 text-center font-bold text-gray-700 bg-yellow-100 w-1/4">Analog Design</th>
                  <th className="border border-gray-300 p-3 text-center font-bold text-gray-700 bg-blue-100 w-1/4">Digital Design</th>
                  <th className="border border-gray-300 p-3 text-center font-bold text-gray-700 bg-green-100 w-1/4">Device level/fabrication</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((row, index) => (
                  <tr key={index} className={row.isBreak ? "bg-gray-100" : "hover:bg-gray-50 transition-colors"}>
                    <td className="border border-gray-300 p-3 text-sm font-medium text-gray-700 bg-gray-50 text-center">
                      {!row.isBreak && (
                        <>
                          <div>{row.time}</div>
                          <div className="text-xs text-gray-500 mt-1">{row.timeSlot}</div>
                        </>
                      )}
                    </td>
                    {row.isBreak ? (
                      <td className="border border-gray-300 bg-gray-100 text-center p-8" colSpan={4}>
                        <div className="text-red-600 font-medium text-lg">
                          {row.time}
                        </div>
                        <div className="text-gray-500 text-sm mt-1">
                          {row.timeSlot}
                        </div>
                      </td>
                    ) : (
                      <>
                        <td className="border border-gray-300 bg-pink-50 align-top">
                          <SessionLink session={row.system} />
                        </td>
                        <td className="border border-gray-300 bg-yellow-50 align-top">
                          <SessionLink session={row.analogDesign} />
                        </td>
                        <td className="border border-gray-300 bg-blue-50 align-top">
                          <SessionLink session={row.digitalDesign} />
                        </td>
                        <td className="border border-gray-300 bg-green-50 align-top">
                          <SessionLink session={row.deviceLevel} />
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
"use client";

import React, { useState } from "react";
import { Cpu, CircuitBoard, Layers, ExternalLink, Calendar, Clock } from "lucide-react";
const MProTable = () => {
    const [selectedDay, setSelectedDay] = useState(1);

  const day1Schedule = [
    {
      time: "9:00 AM - 9:30 AM",
      isBreak: true,
      breakTitle: "Registration"
    },
    {
      time: "9:30 AM - 1:00 PM",
      isBreak: false,
      sessions: {
        tutorial1: {
          title: "Tutorial 1: System-RISCV",
          type: "Tutorial"
        },
        tutorial3: {
          title: "Tutorial 3: DFT", 
          type: "Tutorial"
        },
        tutorial2: {
          title: "Tutorial 2: Analog Design",
          type: "Tutorial"
        },
        tutorial4: {
          title: "Tutorial 4: Fabrication",
          type: "Tutorial"
        }
      }
    },
    {
      time: "1:00 PM - 2:00 PM",
      isBreak: true,
      breakTitle: "Lunch Break"
    },
    {
      time: "2:00 PM - 3:30 PM",
      isBreak: false,
      sessions: {
        tutorial5: {
          title: "Tutorial 5: Accelerators",
          type: "Tutorial"
        },
        tutorial6: {
          title: "Tutorial 6: Analog",
          type: "Tutorial"
        },
        tutorial7: {
          title: "Tutorial 7",
          type: "Tutorial"
        },
        tutorial8: {
          title: "Tutorial 8: Devices",
          type: "Tutorial"
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
        tutorial9: {
          title: "Tutorial 9: Embedded System",
          type: "Tutorial"
        },
        tutorial10: {
          title: "Tutorial 10: Neuromorphic",
          type: "Tutorial"
        },
        tutorial11: {
          title: "Tutorial 11: HLS",
          type: "Tutorial"
        },
        tutorial12: {
          title: "Tutorial 12: Devices",
          type: "Tutorial"
        }
      }
    }
  ];

  const day2Schedule = [
    {
      time: "8:30 AM - 9:30 AM",
      isBreak: true,
      breakTitle: "Registration"
    },
    {
      time: "9:30 AM - 10:10 AM",
      isBreak: false,
      special: true,
      title: "VDAT-2025 Inauguration",
      description: "Chief Guest-Sunita Verma (TBC), IIT Ropar Director, IIT Mandi Director, Prof Animesh Biswas (IIT Mandi), Prof Bhatia (PEC Director), Prof Madhu Chitkara, Prof. Manna (CU), SCL, General Chairs, PC Chair, VSI President"
    },
    {
      time: "10:10 AM - 10:40 AM",
      isBreak: false,
      special: true,
      title: "Vision Address"
    },
    {
      time: "10:40 AM - 11:10 AM",
      isBreak: false,
      special: true,
      title: "Fireside Chat: Advance 3D Packaging",
      description: "Dr. Satya Gupta, Raj Mahajan (Intel), Wilfred Gomes (Mueon)"
    },
    {
      time: "11:10 AM - 11:30 AM",
      isBreak: true,
      breakTitle: "Tea Break"
    },
    {
      time: "11:30 AM - 11:55 AM",
      isBreak: false,
      special: true,
      title: "Keynote 1"
    },
    {
      time: "11:55 AM - 12:20 PM",
      isBreak: false,
      special: true,
      title: "Keynote: 2 Dr. Sudarshan, Executive Director, C-DAC"
    },
    {
      time: "12:20 PM - 12:40 PM",
      isBreak: false,
      special: true,
      title: "Invited Talk: Gaurav Goel, Renesas"
    },
    {
      time: "12:40 PM - 1:00 PM",
      isBreak: false,
      special: true,
      title: "Invited talk: Ganesan, OpenPower"
    },
    {
      time: "1:00 PM - 2:00 PM",
      isBreak: true,
      breakTitle: "Networking Lunch"
    },
    {
      time: "2:00 PM - 3:30 PM",
      isBreak: false,
      sessions: {
        session1a: {
          title: "Session 1a: Emerging Devices",
          papers: "Paper id: 132, 149, 200, 198, 172, 340"
        },
        session1b: {
          title: "Session 1b: RF-IC",
          papers: "Paper id: 336, 179, 373, 282, 293, 354"
        },
        session1c: {
          title: "Session 1c: Accelerator",
          papers: "Paper id: 1, 269, 147, 187, 164, 371"
        },
        session1d: {
          title: "Session 1d: Memory",
          papers: "Paper id: 169, 158, 263, 414, 186, 177"
        },
        session1e: {
          title: "Session 1e: Digital",
          papers: "Paper id: 203, 385, 251, 212, 226, 301"
        }
      }
    },
    {
      time: "3:30 PM - 3:50 PM",
      isBreak: true,
      breakTitle: "High Tea"
    },
    {
      time: "3:50 PM - 4:10 PM",
      isBreak: false,
      special: true,
      title: "Invited Talk: Dipan Sahu, MoE"
    },
    {
      time: "4:10 PM - 5:40 PM",
      isBreak: false,
      sessions: {
        session2a: {
          title: "Session 2a: PhD Forum",
          papers: "Paper id: 378, 326, 277, 235, 29, 25"
        },
        session2b: {
          title: "Session 2b: Embedded",
          papers: "Paper id: 61, 184, 225, 168, 107, 67"
        },
        session2c: {
          title: "Session 2c: Analog and Digital",
          papers: "Paper id: 126, 79, 211, 256, 165, 36"
        },
        session2d: {
          title: "Session 2d: FPGA and",
          papers: ""
        },
        session2e: {
          title: "Session 2e: Startup Contest - pitching session",
          papers: ""
        }
      }
    },
    {
      time: "5:40 PM - 6:25 PM",
      isBreak: true,
      breakTitle: ""
    },
    {
      time: "6:25 PM - 6:55 PM",
      isBreak: false,
      special: true,
      title: "Banquet speech",
      description: "Sarita Alhawat, Founder and CEO of Botlabs"
    },
    {
      time: "6:55 PM - 7:40 PM",
      isBreak: false,
      special: true,
      title: "Awards and Valedictory"
    },
    {
      time: "7:40 PM - 9:10 PM",
      isBreak: true,
      breakTitle: "Networking Dinner"
    }
  ];

  const day3Schedule = [
    {
      time: "8:00 AM - 9:30 AM",
      isBreak: true,
      breakTitle: "Registration"
    },
    {
      time: "9:30 AM - 10:00 AM",
      isBreak: false,
      special: true,
      title: "Global Vision Address"
    },
    {
      time: "10:00 AM - 10:20 AM",
      isBreak: false,
      special: true,
      title: "Invited Talk: Shanthi Pavan (IIT Madras)"
    },
    {
      time: "10:20 AM - 10:40 AM",
      isBreak: false,
      special: true,
      title: "Invited Talk: Tapas Nandi (Microsoft)"
    },
    {
      time: "10:40 AM - 11:25 AM",
      isBreak: false,
      special: true,
      title: "Student Open House - Ask me anything panel"
    },
    {
      time: "11:25 AM - 11:45 AM",
      isBreak: true,
      breakTitle: "Tea Break"
    },
    {
      time: "11:45 AM - 1:15 PM",
      isBreak: false,
      sessions: {
        session3a: {
          title: "Session 3a: Processor and FPGA",
          papers: "Paper id: 342, 92, 332, 85, 323, 335"
        },
        session3b: {
          title: "Session 3b: Digital and Analog",
          papers: "Paper id: 258, 305, 201, 279, 363, 193"
        },
        session3c: {
          title: "Session 3c: Accelerator",
          papers: "Paper id: 206, 291, 415, 130, 240, 401"
        },
        session3d: {
          title: "Session 3d: FPGA",
          papers: "Paper id: 312, 205, 255, 399, 345, 43"
        },
        session3e: {
          title: "Session 3e: Digital",
          papers: ""
        }
      }
    },
    {
      time: "1:15 PM - 2:15 PM",
      isBreak: true,
      breakTitle: "Networking Lunch"
    },
    {
      time: "2:15 PM - 4:15 PM",
      isBreak: false,
      sessions: {
        session4a: {
          title: "Session 4a: Digital and Memory",
          papers: "Paper id: 350, 91, 103, 242, 20, 297, 410, 143"
        },
        session4b: {
          title: "Session 4b: Emerging Devices and Digital & Embedded",
          papers: "Paper id: 110, 180, 183, 140, 234, 151"
        },
        session4c: {
          title: "Session 4c: Accelerator",
          papers: "Paper id: 262, 325, 213, 358, 347, 302"
        },
        session4d: {
          title: "Session 4d: FPGA",
          papers: "Paper id: 136, 224, 265, 317, 333, 144"
        },
        session4e: {
          title: "Session 4e",
          papers: "Paper id: 412, 313, 361, 274, Paper id: 257, 152, 308, 306, 365, 243"
        }
      }
    },
    {
      time: "4:15 PM - 4:35 PM",
      isBreak: true,
      breakTitle: "Tea Break"
    },
    {
      time: "4:35 PM - 4:55 PM",
      isBreak: false,
      special: true,
      title: "Group Photo"
    }
  ];

  const getCurrentSchedule = () => {
    switch(selectedDay) {
      case 1: return day1Schedule;
      case 2: return day2Schedule;
      case 3: return day3Schedule;
      default: return day1Schedule;
    }
  };

  const SessionLink = ({ session }) => (
    <div className="p-3 h-full">
      <div className="text-sm leading-relaxed text-gray-800">
        <span className="font-medium block mb-1">{session.title}</span>
        {session.papers && (
          <span className="text-xs text-gray-600 block">{session.papers}</span>
        )}
        {session.type && (
          <span className="text-xs text-blue-600 inline-block mt-1 px-2 py-1 bg-blue-50 rounded">{session.type}</span>
        )}
      </div>
    </div>
  );
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen font-sans">
      

      <div className="max-w-full mx-auto p-4 sm:p-6 bg-gray-50 min-h-screen">
        {/* Day Selection */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg shadow-md p-1 flex">
            {[1, 2, 3].map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                  selectedDay === day
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Day {day} - August {day + 6}, 2025
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white p-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-center">
              Day {selectedDay}: August {selectedDay + 6}, 2025
            </h2>
          </div>
          
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-center font-semibold text-gray-700 text-sm bg-gray-200 min-w-[140px]">
                    Time
                  </th>
                  {selectedDay === 1 ? (
                    <>
                      <th className="border border-gray-300 p-3 text-center font-semibold text-gray-700 bg-pink-50 text-sm min-w-[200px]">Tutorial 1</th>
                      <th className="border border-gray-300 p-3 text-center font-semibold text-gray-700 bg-yellow-50 text-sm min-w-[200px]">Tutorial 2</th>
                      <th className="border border-gray-300 p-3 text-center font-semibold text-gray-700 bg-blue-50 text-sm min-w-[200px]">Tutorial 3</th>
                      <th className="border border-gray-300 p-3 text-center font-semibold text-gray-700 bg-green-50 text-sm min-w-[200px]">Tutorial 4</th>
                    </>
                  ) : (
                    <>
                      <th className="border border-gray-300 p-3 text-center font-semibold text-gray-700 bg-pink-50 text-sm min-w-[200px]">Track A</th>
                      <th className="border border-gray-300 p-3 text-center font-semibold text-gray-700 bg-yellow-50 text-sm min-w-[200px]">Track B</th>
                      <th className="border border-gray-300 p-3 text-center font-semibold text-gray-700 bg-blue-50 text-sm min-w-[200px]">Track C</th>
                      <th className="border border-gray-300 p-3 text-center font-semibold text-gray-700 bg-green-50 text-sm min-w-[200px]">Track D</th>
                      <th className="border border-gray-300 p-3 text-center font-semibold text-gray-700 bg-purple-50 text-sm min-w-[200px]">Track E</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {getCurrentSchedule().map((row, index) => (
                  <tr key={index} className={row.isBreak ? "bg-gray-50" : "hover:bg-gray-50/50 transition-colors"}>
                    <td className="border border-gray-300 p-3 text-sm font-medium text-gray-700 bg-gray-50 text-center">
                      <div className="whitespace-nowrap">{row.time}</div>
                    </td>
                    {row.isBreak ? (
                      <td className="border border-gray-300 bg-gray-100 text-center py-4 px-4" colSpan={selectedDay === 1 ? 4 : 5}>
                        <div className="text-orange-600 font-medium text-sm">
                          {row.breakTitle}
                        </div>
                      </td>
                    ) : row.special ? (
                      <td className="border border-gray-300 bg-blue-50 text-center py-4 px-4" colSpan={selectedDay === 1 ? 4 : 5}>
                        <div className="text-blue-800 font-medium text-sm mb-2">
                          {row.title}
                        </div>
                        {row.description && (
                          <div className="text-gray-600 text-xs leading-relaxed">
                            {row.description}
                          </div>
                        )}
                      </td>
                    ) : (
                      Object.values(row.sessions).map((session, sessionIndex) => (
                        <td key={sessionIndex} className={`border border-gray-300 align-top ${
                          sessionIndex === 0 ? 'bg-pink-25' :
                          sessionIndex === 1 ? 'bg-yellow-25' :
                          sessionIndex === 2 ? 'bg-blue-25' :
                          sessionIndex === 3 ? 'bg-green-25' : 'bg-purple-25'
                        }`}>
                          <SessionLink session={session} />
                        </td>
                      ))
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-gray-50 p-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              <span className="font-medium">Note:</span> All sessions and timings are as per the official program. 
              Subject to change without prior notice.
            </p>
          </div>
        </div>
      </div>
    </div>  
  );
};
export default MProTable;
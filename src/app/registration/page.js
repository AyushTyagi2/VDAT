import React from "react";
import Footer from "../footer/footer";
import Navbar from "../home/Navbar";
import {
  Calendar,
  Clock,
  FileDown,
  CreditCard,
  User,
  UserPlus,
  Users,
  BookOpen,
} from "lucide-react";

const registrationFees = [
  {
    type: "VSI member",
    earlyFee: "Rs 7500/ $150",
    lateFee: "Rs 9000/ $200",
  },
  {
    type: "Working Professionals/Academicians",
    earlyFee: "Rs 8500/ $175",
    lateFee: "Rs 10000/ $225",
  },
  {
    type: "Students(Research Scholars/UG/PG)",
    earlyFee: "Rs 5000/ $125",
    lateFee: "Rs 6000/ $150",
  },
];

const registrationNotes = [
  "18% tax on all transactions (as per Gov of India)",
  "Registration fee includes, three days of conference/tutorials, lunch/tea on all three days, one conference dinner and registration kit",
  "Every accepted paper should have minimum one full registration",
];

const registrationIncludes = [
  {
    item: "Access to all technical sessions",
    icon: <BookOpen size={20} className="text-violet-600 mr-2" />,
  },
  {
    item: "Conference materials and registration kit",
    icon: <FileDown size={20} className="text-violet-600 mr-2" />,
  },
  {
    item: "Lunch and tea/coffee breaks",
    icon: <CreditCard size={20} className="text-violet-600 mr-2" />,
  },
  {
    item: "Welcome reception and conference dinner",
    icon: <Users size={20} className="text-violet-600 mr-2" />,
  },
];

const RegistrationPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="bg-black">
        <Navbar />
      </div>

      {/* Hero Section with Parallax Effect */}
      <header
        className="text-center text-white py-20 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/iit-ropar-5.avif')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-violet-900/80"></div>
        <div className="relative z-10 px-4 py-16">
          <h1 className="text-6xl font-extrabold tracking-tight uppercase mb-4 drop-shadow-lg">
            Registration
          </h1>
          <p className="text-xl max-w-2xl mx-auto font-light">
            Join us for VDAT-2025 and be part of cutting-edge VLSI design
            innovation
          </p>
        </div>
      </header>
      {/* <div className="mt-8 text-center py-5">
        <a
          href=""
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-violet-700 text-white font-medium rounded-md hover:from-blue-700 hover:to-violet-800 transition-all shadow-md hover:shadow-lg"
        >
          Register Now
        </a>
      </div> */}
      {/* Registration Information Section */}

      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-violet-800 uppercase relative inline-block">
            Registration Information
            <div className="h-1 w-24 bg-violet-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
          </h2>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            VDAT-2025 welcomes participants from academia, industry, and
            research organizations. Registration provides access to all
            conference sessions, tutorials, and networking events.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-violet-50 p-6 rounded-lg border border-violet-100">
              <div className="flex items-center mb-4">
                <Calendar className="text-violet-700 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-violet-800">
                  Important Dates
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-violet-600 mr-2 mt-1">•</span>
                  <div>
                    <p className="font-medium text-gray-800">
                      Early Registration Deadline:
                    </p>
                    <p className="text-gray-600">July 10, 2025</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-600 mr-2 mt-1">•</span>
                  <div>
                    <p className="font-medium text-gray-800">
                      Conference Dates:
                    </p>
                    <p className="text-gray-600">August 7-9, 2025</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <div className="flex items-center mb-4">
                <CreditCard className="text-blue-700 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-blue-800">
                  Registration Includes
                </h3>
              </div>
              <ul className="space-y-3">
                {registrationIncludes.map((item, index) => (
                  <li key={index} className="flex items-center">
                    {item.icon}
                    <span className="text-gray-700">{item.item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Fees Table */}
      <section className="container mx-auto px-6 py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-violet-800 uppercase relative inline-block">
            Registration Fees
            <div className="h-1 w-24 bg-violet-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
          </h2>
        </div>

        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg text-left">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-violet-700 text-white">
                <th className="border p-4 uppercase text-sm tracking-wider">
                  Category
                </th>
                <th className="border p-4 uppercase text-sm tracking-wider text-center">
                  Early Registration
                </th>
                <th className="border p-4 uppercase text-sm tracking-wider text-center">
                  Late/Onsite Registration
                </th>
              </tr>
            </thead>
            <tbody>
              {registrationFees.map((fee, index) => (
                <tr
                  key={index}
                  className="odd:bg-gray-50 even:bg-white border-b hover:bg-gray-100 transition-all"
                >
                  <td className="p-4 font-medium text-gray-700 flex items-center">
                    {fee.type.includes("IEEE") ? (
                      <User className="text-blue-500 mr-2" size={18} />
                    ) : (
                      <UserPlus className="text-violet-500 mr-2" size={18} />
                    )}
                    {fee.type}
                  </td>
                  <td className="p-4 text-center font-semibold text-green-600">
                    {fee.earlyFee}
                  </td>
                  <td className="p-4 text-center font-semibold text-blue-600">
                    {fee.lateFee}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Registration Notes */}
        <div className="bg-white p-6 rounded-lg shadow-lg mt-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Important Notes:
          </h3>
          <ul className="space-y-2">
            {registrationNotes.map((note, index) => (
              <li key={index} className="flex items-start">
                <span className="text-violet-600 font-bold mr-2">
                  {index + 1}.
                </span>
                <span className="text-gray-700">{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact for Registration */}
      {/* <section className="container mx-auto px-6 py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-violet-50 p-8 rounded-xl shadow-lg border border-blue-100">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-violet-800">Need Assistance with Registration?</h2>
            <p className="text-gray-700 mt-2">Our team is here to help with any questions you may have</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a 
              href="mailto:vdat2025registration@gmail.com" 
              className="flex items-center px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <Clock className="text-violet-600 mr-3" size={20} />
              <span className="text-gray-800 font-medium">vdat2025registration@gmail.com</span>
            </a>
            
            <a 
              href="tel:+918056237896" 
              className="flex items-center px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <Calendar className="text-violet-600 mr-3" size={20} />
              <span className="text-gray-800 font-medium">+91 8056237896</span>
            </a>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default RegistrationPage;

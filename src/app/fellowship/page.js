import React from 'react';
import Navbar from '../home/Navbar';
import Footer from '../footer/footer';
import { Calendar, Mail, CheckCircle, BookOpen, Users, AlertCircle } from "lucide-react";

const FellowshipPage = () => {
  const importantDates = [
    { event: "Fellowship application open", date: "01 June 2025" },
    { event: "Last date of application", date: "30 June 2025" },
    { event: "Round 1 Fellowship Announcement", date: "07 July 2025" },
    { event: "Acceptance deadline for Round 1", date: "10 July 2025" },
    { event: "Round 2 Fellowship Announcement (if applicable)", date: "15 July 2025" },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="bg-black"  > 
      <Navbar />
      </div>
      
      {/* Hero Section */}
      <header 
        className="text-center text-white py-40 relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/iit-ropar-5.avif')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-violet-900/80"></div>
        <div className="relative z-10 px-4 py-16">
          <h1 className="text-6xl font-extrabold tracking-tight uppercase mb-4 drop-shadow-lg">VDAT 2025 Fellowship Program</h1>
          <p className="text-xl max-w-2xl mx-auto font-light">Supporting students and faculty in the field of VLSI design</p>
        </div>
      </header>

      {/* About the Fellowship */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-violet-800 uppercase relative inline-block">
            About the Fellowship
            <div className="h-1 w-24 bg-violet-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
          </h2>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-violet-100 rounded-full">
              <BookOpen size={40} className="text-violet-700" />
            </div>
          </div>
          
          <div className="space-y-4 text-gray-700">
            <p className="text-lg leading-relaxed">
              VDAT 2025 invites students and faculty members working in the scope of VDAT to apply for the fellowship program. Over the decades, VDAT has been offering generous fellowships to students and teachers of various Indian academic institutions. This trend continues for VDAT 2025 as well. The fellowship provides complimentary registration to attend the conference.
            </p>
            
            <p className="text-lg leading-relaxed">
              Fellowships are available to Indian students and faculty working in VLSI and related fields. Fellows need to attend the entire 3-day conference, and a record of attendance will be maintained. The fellowship should not be viewed as an honor but as an enabler for students and faculty who lack adequate support.
            </p>
            
            <p className="text-lg leading-relaxed">
              Fellowship entitles you to a lower registration fee/complete registration exemption. The students/Faculty who apply for fellowship must be full time students/regular faculty at the time of the symposium. Identity card will be asked at the registration desk. Fellowships are open to all irrespective of them presenting a paper in VDAT or not. Acceptance of paper is not the eligibility for getting fellowship. However, if your paper is accepted, then the presenter/one author has to register by paying the full amount whereas rest of the authors may apply for Fellowships.
            </p>
          </div>
        </div>
      </section>

      {/* Fellowship Guidelines */}
      <section className="container mx-auto px-6 py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-violet-800 uppercase relative inline-block">
            Fellowship Guidelines
            <div className="h-1 w-24 bg-violet-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
          </h2>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-100 rounded-full">
              <AlertCircle size={40} className="text-blue-700" />
            </div>
          </div>
          
          <ul className="space-y-3 text-gray-700">
            {[
              "Fellows need to attend for the entire 3-day conference. A record of attendance would be maintained for the same.",
              "All the selected fellow will be provided accommodation inside the campus.",
              "Selected candidate may get the complimentary partial/full registration support and/or travel allowance to attend the conference.",
              "Please visit the conference website for detailed updates on time to time.",
              "In case an applicant is both a faculty member of some institute and a student of another (e.g., a faculty member pursuing part-time higher studies), only one application should be submitted. More information can be provided in the relevant text box while filling up the form.",
              "The award of these fellowships is governed by rules and regulations of VDAT.",
              "Please see that this fellowship stands cancelled if any of the rules are violated.",
              "The fellowship is conditional.",
              "If you are the sole registrant for your paper then you will have to register as a full delegate and Fellowship will stand cancelled."
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Application Process */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-violet-800 uppercase relative inline-block">
            Application Process
            <div className="h-1 w-24 bg-violet-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
          </h2>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-indigo-100 rounded-full">
              <Users size={40} className="text-indigo-700" />
            </div>
          </div>
          
          <ul className="space-y-3 text-gray-700">
            {[
              "We will be using an entirely online application process with each applicant filling up the online form and providing relevant details online.",
              "Though some of the questions are optional, applicants are requested to respond to as many questions as relevant.",
              "Since we will be using the provided email address for communication, please ensure that these two details are correctly filled.",
              "The details of recommending authority (Research supervisor/Guide/HoD) are mandatory for the student category. Post submission of your fellowship application form, a verification link will be shared to the recommending authority to complete the verification.",
              "Please submit only one form per applicant. Multiple entries may lead to reject the application."
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-indigo-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <span className="flex items-center justify-center bg-indigo-600 text-white rounded-full w-5 h-5 text-xs font-bold">
                    {index + 1}
                  </span>
                </div>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
          

        </div>
      </section>

      {/* Important Dates */}
      <section className="container mx-auto px-6 py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-violet-800 uppercase relative inline-block">
            Important Dates
            <div className="h-1 w-24 bg-violet-600 absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {importantDates.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Calendar size={24} className="text-purple-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.event}</h3>
                    <p className="text-purple-700 font-medium">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-8 rounded-lg shadow-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-3">
                <p className="text-lg text-yellow-700">
                  Please note all fellowship applications must be submitted before the deadline. Late applications will not be considered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl shadow-lg p-8 max-w-3xl mx-auto text-white">
          <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
          <p className="text-xl mb-6">Contact us for more information about the fellowship program</p>
          
          <div className="inline-flex items-center justify-center bg-white text-indigo-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            <Mail size={20} className="mr-2" />
            <a href="mailto:vdat2025@iitrpr.ac.in">vdat2025@iitrpr.ac.in</a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FellowshipPage;
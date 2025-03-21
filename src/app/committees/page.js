"use client";
import { useState } from 'react';
import React from 'react';
import Footer from '../footer/footer';
import Navbar from '../home/Navbar';

const committees = [
  { 
    title: "Program Chair", 
    members: [
      { name: "Hitesh Shrimali", institute: "IIT Mandi", linkedin: "https://www.linkedin.com/in/hitesh-shrimali-56183b19/?originalSubdomain=in", website: "https://faculty.iitmandi.ac.in/~hitesh/" },
      { name: "Brajesh Rawat", institute: "IIT Ropar", linkedin: "https://www.linkedin.com/in/brajesh-rawat/?originalSubdomain=in", website: "https://www.iitrpr.ac.in/electrical/brajesh" },
      { name: "Shivani Malhotra", institute: "Chitkara University", linkedin: "https://www.linkedin.com/in/shivani-malhotra-6349b659/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in" }
    ] 
  },
  { 
    title: "Program Track Chair", 
    members: [
      { name: "Shubham Sahay", institute: "IIT Kanpur (Track 1)", linkedin: "https://www.linkedin.com/in/shubham-sahay-b1580bb0/?originalSubdomain=in", website: "https://home.iitk.ac.in/~ssahay/" },
      { name: "Saravanna", institute: "IIT Roorkee (Track 2)", linkedin: "https://www.linkedin.com/in/saravana-kumar-687a6875/?originalSubdomain=in", website: "https://ece.iitr.ac.in/webpages/saravana/" },
      { name: "Sneh Saurabh", institute: "IIIT Delhi (Track 3)", linkedin: "https://www.linkedin.com/in/snehsaurabh/?originalSubdomain=in", website: "https://iiitd.ac.in/sneh" },
      { name: "Amit Kumar", institute: "Chitkara University (Track 4)", linkedin: "https://www.linkedin.com/in/amit-kumar-34228b139/?originalSubdomain=in" },
      { name: "Anupam Chattopadhyay", institute: "NTU Singapore (Track 4)", linkedin: "https://www.linkedin.com/in/anupamchattopadhyay/?originalSubdomain=sg", website: "https://dr.ntu.edu.sg/cris/rp/rp01076" },
      { name: "Jai Narayan Tripathi", institute: "IIT Jodhpur (Track 5)", linkedin: "https://www.linkedin.com/in/jai-narayan-tripathi-b189a88/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in", website: "http://home.iitj.ac.in/~jai/" }
    ] 
  },
  { 
    title: "Tutorial Chair", 
    members: [
      { name: "TV Kalyan", institute: "IIT Ropar", linkedin: "https://www.linkedin.com/in/venkata-kalyan-t-29ab28a0/?originalSubdomain=in", website: "https://sites.google.com/view/kalyantv" },
      { name: "Namrta", institute: "Aritrak Technologies" }
    ] 
  },
  { 
    title: "Local Organising Chair", 
    members: [
      { name: "Pradeep Duhan", institute: "IIT Ropar", linkedin: "https://www.linkedin.com/in/pardeep-duhan-64262b74/?originalSubdomain=in", website: "https://www.iitrpr.ac.in/electrical/pardeepduhan" },
      { name: "Ruchika Gupta", institute: "Chandigarh University", linkedin: "https://www.linkedin.com/in/ruchika-gupta-55bbb764/?originalSubdomain=in", website: "https://sites.google.com/view/ruchikagupta/" },
      { name: "Arun Singh", institute: "PEC Chandigarh", linkedin: "https://www.linkedin.com/in/arun-kumar-singh-a5627742/?originalSubdomain=in", website: "https://pec.ac.in/ece/faculty/arun-kumar-singh" }
    ] 
  },
  { 
    title: "Finance Chair", 
    members: [{ name: "Mahendra Sakre", institute: "IIT Ropar" }] 
  },
  { 
    title: "Sponsorship Chair", 
    members: [
      { name: "Alpana Agarwal", institute: "Thapar Institute", linkedin: "https://www.linkedin.com/in/alpana-agarwal-1542b118/?originalSubdomain=in", website: "https://www.thapar.edu/faculties/view/Dr.-Alpana-Agarwal/MTI5/MTU=" },
      { name: "Shonal Chouksey", institute: "IIIT Una", linkedin: "https://www.linkedin.com/in/shonal-chouksey-4a13568b/?originalSubdomain=in", website: "https://iiitu.ac.in/schools/soe/faculty/667b05e76914b0583f899e13" },
      { name: "Preet Yadav", institute: "NXP", linkedin: "https://www.linkedin.com/in/preet-yadav/?originalSubdomain=in"}
    ] 
  },
  { 
    title: "Fellowship Chair", 
    members: [
      { name: "Ambika Shah", institute: "IIT Jammu", linkedin: "https://www.linkedin.com/in/ambika-prasad-shah-ba978a22/?originalSubdomain=in", website: "https://www.iitjammu.ac.in/faculty/~ambikaprasadshah" },
      { name: "Shruti Jain", institute: "JUIT, Solan, Himachal Pradesh", linkedin: "https://www.linkedin.com/in/dr-shruti-jain-92705b130/?originalSubdomain=in", website: "https://www.juit.ac.in/faculty.php?id=155&dep=ece&page=1&year1=2021" },
      { name: "Balwinder Singh", institute: "CDAC", linkedin: "https://www.linkedin.com/in/dr-balwinder-singh-80a1b316/?originalSubdomain=in", website: "http://www.acsd.ac.in/Faculty_Balwinder.aspx" }
    ] 
  },
  { 
    title: "Demo and Exhibit Chair", 
    members: [
      { name: "Rajendra Prasad", institute: "HCL Tech", linkedin: "https://www.linkedin.com/in/rajendra-prasad-3a08389b/?originalSubdomain=in" },
      { name: "John Jose", institute: "IIT Guwahati", linkedin: "https://www.linkedin.com/in/john-jose-bb8431106/?originalSubdomain=in", website: "https://www.iitg.ac.in/johnjose/" },
      { name: "Mohd Asim Saeed", institute: "SCL, Mohali", linkedin: "https://www.linkedin.com/in/asim-saeed-49097579/?originalSubdomain=in" }
    ] 
  },
  { 
    title: "Web Development Team", 
    members: [
      { name: "TV Kalyan", institute: "IIT Ropar", linkedin: "https://www.linkedin.com/in/venkata-kalyan-t-29ab28a0/?originalSubdomain=in", website: "https://sites.google.com/view/kalyantv" },
      { name: "Nishant Sahni", institute: "IIT Ropar", linkedin: "https://www.linkedin.com/in/nishant-sahni-a7b01130a/?originalSubdomain=in" },
      { name: "Aryan Singh", institute: "IIT Ropar", linkedin: "https://linkedin.com/in/aryan-singh" },
      { name: "Ayush Tyagi", institute: "IIT Ropar", linkedin: "https://www.linkedin.com/in/ayush-tyagi-37154b2a4/?originalSubdomain=in" }
    ] 
  },
  { 
    title: "Startup Chair", 
    members: [{ name: "Gaganpreet Kaur" }] 
  },
  { 
    title: "PhD Forum Chair", 
    members: [{ name: "Debiprasana Sahu", institute: "IIT Bhubaneswar", linkedin: "https://old.iitbbs.ac.in/profile.php/%20dpsahoo/"}] 
  },
  { 
    title: "Publication Chair", 
    members: [
      { name: "Balwinder Raj", institute: "NIT Jalandhar", linkedin: "https://www.linkedin.com/in/balwinderraj/?originalSubdomain=in", website: "https://departments.nitj.ac.in/dept/ece/Faculty/6430445538bff038a7805bcd" },
      { name: "Sivanantham", institute: "VIT Vellore", linkedin: "https://www.linkedin.com/in/vlsisiva/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in" }
    ] 
  },
  { 
    title: "Publicity and Outreach Chair", 
    members: [
      { name: "Sagar Juneja", institute: "Chitkara University", linkedin: "https://www.linkedin.com/in/sagar-juneja/", website: "https://curin.chitkara.edu.in/profile/sagar-juneja/" },
      { name: "Gaurav Saini", institute: "NIT Kurukshetra", linkedin: "https://www.linkedin.com/in/dr-gaurav-saini-8a09ab18/?originalSubdomain=in", website: "https://nitkkr.ac.in/author/gaurav-saini/" },
      { name: "Gargi Khana", institute: "NIT Hamirpur", linkedin: "https://www.linkedin.com/in/gargi-khanna-9605078/?originalSubdomain=in" },
      { name: "Navneet Sehgal", institute: "Chandigarh University", linkedin: "https://www.linkedin.com/in/dr-navneet-sehgal-b090389b/?originalSubdomain=in" }
    ] 
  },
  { 
    title: "Registration Chair", 
    members: [{ name: "Somesh Kumar", institute: "IIITM Gwalior", linkedin: "https://www.linkedin.com/in/dr-somesh-kumar-dahiya-b551a836/?originalSubdomain=in", website: "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.Somesh" }] 
  }
];


const specialChairs = [
  {
    title: "Steering Committee Chair",
    members: [
      { 
        name: "Satya Gupta", 
        institute: "VLSI Society of India",
        linkedin: "https://www.linkedin.com/in/dr-satya-gupta-950787/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in", 
      }
    ]
  },
  {
    title: "General Chairs",
    members: [
      { 
        name: "Rohit Y Sharma", 
        institute: "IIT Ropar", 
        linkedin: "https://www.linkedin.com/in/rohit-sharma-9509b5197/?originalSubdomain=in", 
        website: "https://www.iitrpr.ac.in/ee/profile.faculty.php?mail=rohit%40iitrpr.ac.in" 
      },
      { 
        name: "Neeraj Goel", 
        institute: "IIT Ropar", 
        linkedin: "https://www.linkedin.com/in/neerajgoel/?originalSubdomain=in", 
        website: "https://sites.google.com/view/neerajgoel" 
      }
    ]
  }
];
const CommitteeCard = ({ title, members }) => {
  return (
    <div className="bg-white shadow-xl rounded-xl p-6 w-full md:w-1/2 lg:w-1/3 transition-transform hover:scale-105 hover:shadow-2xl">
      <h2 className="text-2xl font-semibold text-indigo-800 mb-4 text-center border-b-2 border-indigo-500 pb-2">{title}</h2>
      <ul className="space-y-3">
        {members.map((member, index) => {
          const isLast = index === members.length - 1;
          return (
            <li key={index} className="text-gray-900 text-lg text-center relative group cursor-pointer">
              <div className="relative inline-block font-medium">
                {member.name}, <span className="text-gray-600">{member.institute}</span>

                <div
                  className={`absolute ${
                    isLast ? "left-1/2 transform -translate-x-1/2 mt-2" : "left-full ml-3 top-1/2 -translate-y-1/2"
                  } bg-black text-white shadow-lg rounded-lg p-2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
                      LinkedIn
                    </a>
                  )}
                  {member.website && (
                    <a href={member.website} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                      Website
                    </a>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const SpeakersSection = () => {
  return (
    <div>
      <Navbar />
      <header className="text-center bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-40 relative"
        style={{ backgroundImage: "url('/images/iit-ropar-5.avif')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="bg-black bg-opacity-50 py-16 rounded-lg">
          <h1 className="text-5xl font-extrabold tracking-wide uppercase">Committees</h1>
        </div>
      </header>
      
      <div className="py-6 bg-gray-100"></div>
      <section className="py-5 bg-gray-100 text-center">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
          {/* Special Chairs Section */}
          {specialChairs?.map((committee, index) => (
            <CommitteeCard key={index} {...committee} />
          ))}
        </div>
      </section>  

      <section className="py-5 bg-gray-100 text-center">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
          {/* Main Committees Section */}
          {committees?.map((committee, index) => (
            <CommitteeCard key={index} {...committee} />
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SpeakersSection;
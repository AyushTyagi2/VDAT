import React from 'react';
import Footer from '../footer/footer';
import Navbar from '../home/Navbar';

const committees = [
  { title: "Technical Program Chair", members: ["Brajesh Rawat, IIT Ropar", "Hitesh Shrimali, IIT Mandi", "Shivani Malhotra, Chitkara University"] },
  { title: "Local Organising Chair", members: ["Pradeep Duhan, IIT Ropar", "Ruchika Gupta, Chandigarh University", "Arun Singh, Punjab Engineering College"] },
  { title: "Finance Chair", members: ["Mahendra Sakre, IIT Ropar"] },
  { title: "Publication Chair", members: ["Balwinder Raj, NIT Jalandhar"] },
  { title: "Tutorial Chair", members: ["TV Kalyan, IIT Ropar", "Namrta, Cadence"] },
  { title: "Fellowship Chair", members: ["Ambika Shah, IIT Jammu", "Shruti Jain, JUIT, Solan, Himachal Pradesh", "Balwinder Singh, CDAC"] },
  { title: "Demo and Exhibit Chair", members: ["Rajendra Prasad, HCL Tech", "John Jose (IITG)"] },
  { title: "Publicity Chair", members: ["Gaurav Saini, NIT Kurukshetra", "John Jose, IIT Guwahati", "Sagar Juneja, Chitkara University"] }
];

const CommitteeCard = ({ title, members }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2 lg:w-1/3 space-x-12">
    <h2 className="text-xl font-bold text-indigo-700">{title}</h2>
    <ul className="mt-2 space-y-1">
      {members.map((member, index) => (
        <li key={index} className="text-gray-800">{member}</li>
      ))}
    </ul>
  </div>
);

const SpeakersSection = () => {
  return (
    <div>
      <Navbar />
      <div className=''>
      <header
        className="text-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-40 relative"
        style={{ backgroundImage: "url('/images/iit-ropar-5.avif')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="bg-black bg-opacity-50 py-16">
          <h1 className="text-5xl font-extrabold">Committees</h1>
        </div>
<<<<<<< HEAD
        <div className='h-36 pb-25'></div>

      </header>
      </div>
      <div className='py-5 bg-gray-100'></div>
      <div className="w-full flex flex-col items-center space-y-12 px-12 bg-gray-100 ">
=======
      </header>
      <div className="mx-auto flex flex-col items-center space-y-12 bg-white">
>>>>>>> dcf5eff70fbcaca363bb010ea67e308fd3a8350d

          <div className="w-full text-center space-y-8">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full  ">
              <h2 className="text-2xl font-bold text-indigo-700">Steering Committee Chair</h2>
              <p className="text-lg mt-2 text-black">Satya Gupta, VLSI Society of India</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 w-full   mx-auto">
              <h2 className="text-2xl font-bold text-indigo-700">General Chairs</h2>
              <p className="text-lg mt-2 text-black">Rohit Y Sharma, IIT Ropar</p>
              <p className="text-lg text-black">Neeraj Goel, IIT Ropar</p>
            </div>

            
          </div>
      </div>
      <section className="py-16 px-6 bg-gray-100 text-gray-800 text-center ">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
          {committees.map((committee, index) => (
            <CommitteeCard key={index} {...committee} />
          ))}
        </div>
        <div className='py-12'>
        <div className="bg-white shadow-lg rounded-lg p-6 w-full mx-auto ">
              <h2 className="text-2xl font-bold text-indigo-700">Advisory Committee</h2>
              <p className="text-lg mt-2 text-black">Prof. Sudeb Das Gupta, IIT Roorkee</p>
              <p className="text-lg text-black">Ms Chitra Hariharan, Renesas</p>
              <p className="text-lg text-black">Prof. M Balakrishnan, IIT Delhi</p>
            </div>
            </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SpeakersSection; 


import React from 'react';
import Footer from '../footer/footer';
import Navbar from '../home/Navbar';

const committees = [
  { title: "Program Chair", members: ["Hitesh Shrimali, IIT Mandi", "Brajesh Rawat, IIT Ropar", "Shivani Malhotra, Chitkara University"] },
  { title: "Program Track Chair", members: ["Shubham Sahay, IIT Kanpur (Track 1)", "Saravanna, IIT Roorkee (Track 2)", "Sneh Saurabh, IIIT Delhi (Track 3)", "Amit Kumar, Chitkara University (Track 4)", "Jai Narayan Tripathi, IIT Jodhpur (Track 5)"] },
  { title: "Tutorial Chair", members: ["TV Kalyan, IIT Ropar", "Namrta, Aritrak Technologies"] },
  { title: "Local Organising Chair", members: ["Pradeep Duhan, IIT Ropar", "Ruchika Gupta, Chandigarh University", "PEC (Arun Singh)"] },
  { title: "Finance Chair", members: ["Mahendra Sakre, IIT Ropar"] },
  { title: "Sponsorship Chair", members: ["Alpana Agarwal, Thapar Institute", "Shonal Chouksey, IIIT Una"] },
  { title: "Fellowship Chair", members: ["Ambika Shah, IIT Jammu", "Shruti Jain, JUIT, Solan, Himachal Pradesh", "Balwinder Singh, CDAC"] },
  { title: "Demo and Exhibit Chair", members: ["Rajendra Prasad, HCL Tech", "John Jose, IIT Guwahati", "Industry"] },
  { title: "Web Development Team", members: ["Kalyan, IIT Ropar","Nishant Sahni, IIT Ropar","Aryan Singh, IIT Ropar","Ayush Tyagi, IIT Ropar"] },
  { title: "Startup Chair", members: ["Gagandeep Kaur"] },
  { title: "PhD Forum Chair", members: ["Debiprasana Sahu, IIT Bhubaneswar"] },
  { title: "Publication Chair", members: ["Balwinder Raj, NIT Jalandhar", "Sivanantham, VIT Vellore"] },
  { title: "Publicity and Outreach Chair", members: ["Sagar Juneja, Chitkara University", "Gaurav Saini, NIT Kurukshetra", "Gargi Khana, NIT Hamirpur", "Navneet Sehgal, Chandigarh University"] },

];
const CommitteeCard = ({ title, members }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2 lg:w-1/3">
    <h2 className="text-xl font-bold text-indigo-700 mb-4 text-center">{title}</h2>
    <ul className="space-y-2">
      {members.map((member, index) => (
        <li key={index} className="text-gray-800 text-center">{member}</li>
      ))}
    </ul>
  </div>
);

const SpeakersSection = () => {
  return (
    <div>
      <Navbar />
      <header
        className="text-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-40 relative"
        style={{ backgroundImage: "url('/images/iit-ropar-5.avif')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="bg-black bg-opacity-50 py-16">
          <h1 className="text-5xl font-extrabold">Committees</h1>
        </div>
      </header>

      <div className="py-5 bg-gray-100"></div>

      <div className="w-full flex flex-col items-center space-y-12 px-12 bg-gray-100">
        <div className="w-full text-center space-y-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-indigo-700">Steering Committee Chair</h2>
            <p className="text-lg mt-2 text-black">Satya Gupta, VLSI Society of India</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-indigo-700">General Chairs</h2>
            <p className="text-lg mt-2 text-black">Rohit Y Sharma, IIT Ropar</p>
            <p className="text-lg text-black">Neeraj Goel, IIT Ropar</p>
          </div>
        </div>
      </div>

      <section className="py-3 bg-gray-100 text-center">
        <div className="w-full flex flex-col items-center space-y-12 px-12 bg-gray-100 py-8">
          <div className="w-full text-center space-y-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">Advisory Committee</h2>
            <ul className="space-y-2">
              <li className="text-lg text-black">Chitra Hariharan, Renesas</li>
              <li className="text-lg text-black">Sudeb Das Gupta, IIT Roorkee</li>
              <li className="text-lg text-black">M Balakrishnan, IIT Delhi/Plaksha</li>
              <li className="text-lg text-black">R K Sharma, NIT Kurukshetra</li>
              <li className="text-lg text-black">Vineet Sahula, MNIT Jaipur</li>
            </ul>
          </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
          {committees.map((committee, index) => (
            <CommitteeCard key={index} {...committee} />
          ))}
        </div>

      </section>

      <Footer />
    </div>
  );
};

export default SpeakersSection;

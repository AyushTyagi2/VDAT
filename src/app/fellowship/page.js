import React from 'react';
import Navbar from '../home/Navbar';
import Footer from '../footer/footer';

const FellowshipPage = () => {
  return (
    <div className="bg-black">
      <Navbar />
      
      <header className="text-center text-white py-60 relative bg-cover bg-center" style={{ backgroundImage: "url('/images/iit-ropar-5.avif')" }}>
        <div className="bg-black bg-opacity-60 py-20 px-4">
          <h1 className=" sub text-5xl font-extrabold tracking-wide uppercase">VDAT 2025 Fellowship Program</h1>
        </div>
      </header>

      <section className="container mx-auto px-6 py-12 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-8 text-violet-800 uppercase">About the Fellowship</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-all text-center">
          <p className="text-lg text-gray-700">
            VDAT 2025 invites students and faculty members working in the scope of VDAT to apply for the fellowship program. Over the decades, VDAT has been offering generous fellowships to students and teachers of various Indian academic institutions. This trend continues for VDAT 2025 as well. The fellowship provides complimentary registration to attend the conference.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Fellowships are available to Indian students and faculty working in VLSI and related fields. Fellows need to attend the entire 3-day conference, and a record of attendance will be maintained. The fellowship should not be viewed as an honor but as an enabler for students and faculty who lack adequate support.
          </p>
          <p className="text-lg text-gray-700 mt-4" >
          Fellowship entitles you to a lower registration fee/complete registration exemption.The students/Faculty who apply for fellowship must be full time students/regular faculty at the time of the symposium. Identity card will be asked at the registration
          desk. Fellowships are open to all irrespective of them presenting a paper in VDAT or not. Acceptance of paper is not the eligibility for getting fellowship. However, if your
          paper is accepted, then the presenter/one author has to register by paying the full amount whereas rest of the authors may apply for Fellowships.
          </p>
        </div>
      </section>

      <section className="bg-white container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-violet-800 uppercase">Fellowship Guidelines</h2>
        <ul className="list-disc pl-6 text-gray-700">
        <li>Fellows need to attend for the entire 3-day conference. A record of attendance would be maintained for the same.</li>
        <li>All the selected fellow will be provided accommodation inside the campus.</li>
        <li>Selected candidate may get the complimentary partial/full registration support and/or travel allowance to attend the conference. </li>
        <li>Please visit the conference website for detailed updates on time to time.</li> 
        <li>In case an applicant is both a faculty member of some institute and a student of another (e.g., a faculty member pursuing part-time higher studies), only one
        application should be submitted. More information can be provided in the relevant text box while filling up the form.</li> 
        <li>The award of these fellowships is governed by rules and regulations of VDAT.</li>
        <li> Please see that this fellowship stands cancelled if any of the rules are violated.</li>
        <li>The fellowship is conditional.</li> 
        <li>If you are the sole registrant for your paper then you will have to register as a full delegate and Fellowship will stand cancelled.</li>
        </ul>
      </section>

      <section className="container mx-auto px-6 py-12 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-8 text-violet-800 uppercase">Application Process</h2>
        <ul className="list-disc pl-6 text-gray-700">
        <li>We will be using an entirely online application process with each applicant filling up the online form and providing relevant details online.</li> 
        <li>Though some of the questions are optional, applicants are requested to respond to as many questions as relevant.</li>
        <li>Since we will be using the provided email address for communication, please
        ensure that these two details are correctly filled.</li> 
        <li>The details of recommending authority (Research supervisor/Guide/HoD) are
        mandatory for the student category. Post submission of your fellowship
        application form, a verification link will be shared to the recommending authority
        to complete the verification. </li> 
        <li>Please submit only one form per applicant. Multiple entries may lead to reject the application.</li>
        </ul>
      </section>

      <section className="bg-white container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-violet-800 uppercase">Important Dates</h2>
        <table className="w-full border mt-4">
          <thead>
            <tr className="bg-purple-600 text-black">
              <th className="border p-4 uppercase text-sm tracking-wider">Event</th>
              <th className="border p-4 uppercase text-sm tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200 transition-all">
              <td className="border text-black p-4">Fellowship application open</td>
              <td className="border text-black p-4">01 June 2025</td>
            </tr>
            <tr className="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200 transition-all">
              <td className="border text-black p-4">Last date of application</td>
              <td className="border text-black p-4">30 June 2025</td>
            </tr>
            <tr className="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200 transition-all">
              <td className="border text-black p-4">Round 1 Fellowship Announcement</td>
              <td className="border text-black p-4">07 July 2025</td>
            </tr>
            <tr className="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200 transition-all">
              <td className="border text-black p-4">Acceptance deadline for Round 1</td>
              <td className="border text-black p-4">10 July 2025</td>
            </tr>
            <tr className="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200 transition-all">
              <td className="border text-black p-4">Round 2 Fellowship Announcement (if applicable)</td>
              <td className="border text-black p-4">15 July 2025</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="text-center bg-white py-12">
        <h2 className="text-4xl font-bold text-violet-800 uppercase">For Queries</h2>
        <p className="text-lg text-gray-700">Email: <a href="mailto:vdat2025@iitrpr.ac.in" className="text-blue-600">vdat2025@iitrpr.ac.in</a></p>
      </section>
      
      <Footer />
    </div>
  );
};

export default FellowshipPage;

import React from 'react';
import Footer from '../footer/footer';
import Navbar from '../home/Navbar';
import { CheckCircle } from "lucide-react";

const sponsorshipTiers = [
  { tier: "Platinum", amount: "5,00,000/-", benefits: [true, true, true, true, true, true, "Eight", true, true, true,true,true] },
  { tier: "Gold", amount: "3,50,000/-", benefits: [true, true, true, true, true, true, "Six", true, true, true, false,false ] },
  { tier: "Silver", amount: "2,00,000/-", benefits: [true, true, true, true, true, true, "Four", false, false, false, false,false] },
  { tier: "Bronze", amount: "1,50,000/-", benefits: [true, true, true, true, true, true, "Two", false, false, false, false,false] }
];

const additionalOpportunities = [
  "Technical Booth (1,00,000/-) for product demonstrations",
  "Technical Session Sponsorship (30,000/-) featuring company video clips before sessions",
  "Company Leaf (20,000/-) to be inserted in registration kit",
  "Delegate Sponsorship for attendance of specific delegates",
  "Other conference materials such as refreshments, T-shirts, souvenirs, etc.  For these sponsorship items, the organisation’s name and logo will feature on the relevant items appropriate places."
];

const advertisements = [
  { type: "Full Page", cost: "Rs. 20,000/-" },
  { type: "Half Page", cost: "Rs. 10,000/-" },
  { type: "Quarter Page", cost: "Rs. 5,000/-" }
];

const headers = ["Sponsorship Benefits", "Platinum", "Gold", "Silver", "Bronze"];

const benefitLabels = [
  "Sponsorship Amount", "Product Exhibition Booth", "Company’s name and logo on the conference website",
  "Banner at the main entrance of the hotel", "Company’s logo on screens at session halls", "Standees along the route to the conference venue ",
  "Company’s logo on conference registration kit ", "Complimentary Registrations", "Banner at Dining Hall",
  "Company provided leaf/ souvenir to be inserted in the registration kit", "Slot for Tutorial/Invited Talk", "Keynote Speech", "Slot in Panel Discussion"
];

const SponsorshipPage = () => {
  return (
    <div>
      <Navbar />
      
      <header
        className="text-center text-white py-60 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/iit-ropar-5.avif')" }}
      >
        <div className="bg-black bg-opacity-60 py-20 px-4">
          <h1 className=" sub text-5xl font-extrabold tracking-wide uppercase">Sponsors</h1>
        </div>
      </header>

      {/* Call for Sponsors Section */}
      <section className="container mx-auto px-6 py-12 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-8 text-violet-800 uppercase">Call for Sponsors</h2>
        <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-all text-center">
          <p className="text-lg text-gray-700">
            VDAT-2025 presents an excellent opportunity for companies and organizations to contribute as sponsors. This event serves as a crucial platform for professionals in the VLSI design field. By sponsoring VDAT-2025, companies can increase their visibility, showcase their products, and contribute to the advancement of VLSI design in India.
          </p>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="container mx-auto px-6 py-12 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-8 text-violet-800 uppercase">Sponsorship Tiers</h2>
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg text-center">
            <thead className="bg-blue-600 text-white">
              <tr>
                {headers.map((heading, index) => (
                  <th key={index} className="border p-4 uppercase text-sm tracking-wider">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {benefitLabels.map((label, rowIndex) => (
                <tr key={rowIndex} className="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200 transition-all">
                  <td className="border p-4 font-bold text-blue-700 text-left">{label}</td>
                  {sponsorshipTiers.map((tier, colIndex) => (
                    <td key={colIndex} className="border p-4 text-gray-700 text-center">
                      {rowIndex === 0 ? tier.amount : tier.benefits[rowIndex - 1] === true ? (
                        <CheckCircle className="text-green-500 inline-block" size={20} />
                      ) : tier.benefits[rowIndex - 1] === false ? "-" : tier.benefits[rowIndex - 1]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Additional Sponsorship Opportunities */}
      <section className="container mx-auto px-6 py-12 bg-gray-50">
        <h2 className=" sub text-4xl font-bold text-center mb-8 text-violet-800 uppercase">Additional Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalOpportunities.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-all">
              <p className="text-lg text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advertisement Rates */}
      <section className="bg-white container mx-auto px-6 py-12">
        <h2 className="sub text-4xl font-bold text-center mb-2 text-violet-800 uppercase">Advertisement Rates
        </h2>
        <h4 className="sub text-1xl font-bold text-center mb-8 text-violet-800 uppercase" >(In The Program Booklet)</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advertisements.map((ad, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{ad.type}</h3>
              <p className="text-gray-600">{ad.cost}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SponsorshipPage;
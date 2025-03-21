import React from 'react';
import Footer from '../footer/footer';
import Navbar from '../home/Navbar';
import { CheckCircle } from "lucide-react";

const sponsorshipTiers = [
  { tier: "Platinum", amount: "5,00,000/-", benefits: [true, true, true, true, true, true, true, true, "Eight", true, true, true] },
  { tier: "Gold", amount: "3,00,000/-", benefits: [true, true, true, true, true, true, true, true, "Six", true, true, true ] },
  { tier: "Silver", amount: "2,00,000/-", benefits: [true, true, true, true, true, false, false, true, "Four", false, false, false] },
  { tier: "Bronze", amount: "1,50,000/-", benefits: [true, true, true, false, false, false, false, false, "Two", false, false, false] }
];

const additionalOpportunities = [
  "Technical Booth (1,00,000/-) for product demonstrations",
  "Technical Session Sponsorship (30,000/-) featuring company video clips before sessions",
  "Company Leaf (20,000/-) to be inserted in registration kit",
  "Delegate Sponsorship for attendance of specific delegates",
  "Other conference materials such as refreshments, T-shirts, souvenirs, etc."
];

const advertisements = [
  { type: "Full Page", cost: "Rs. 20,000/-" },
  { type: "Half Page", cost: "Rs. 10,000/-" },
  { type: "Quarter Page", cost: "Rs. 5,000/-" }
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
          <h1 className="text-5xl font-extrabold tracking-wide uppercase">Sponsors</h1>
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
      <section className="bg-white container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-violet-800 uppercase">Sponsorship Tiers</h2>
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
            <thead className="bg-purple-600 text-white sticky top-0">
              <tr>
                {["Tier", "Amount", "Booth", "Website Logo", "Entrance Banner", "Screens Logo", "Venue Standees", "Kit Logo", "Complimentary Passes", "Dining Banner", "Kit Leaflet", "Tutorial Slot", "Keynote Speech", "Panel Slot"].map((heading, index) => (
                  <th key={index} className="border p-4 uppercase text-sm tracking-wider">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sponsorshipTiers.map((tier, index) => (
                <tr key={index} className="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200 transition-all">
                  <td className="border p-4 font-bold text-purple-700">{tier.tier}</td>
                  <td className="border p-4 text-gray-700">{tier.amount}</td>
                  {tier.benefits.map((benefit, i) => (
                    <td key={i} className="border p-4 text-gray-700 text-center">
                      {benefit === true ? <CheckCircle className="text-green-500 inline-block" size={20} /> : benefit === false ? "-" : benefit}
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
        <h2 className="text-4xl font-bold text-center mb-8 text-violet-800 uppercase">Additional Opportunities</h2>
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
        <h2 className="text-4xl font-bold text-center mb-8 text-violet-800 uppercase">Advertisement Rates</h2>
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
import React from 'react';
import Footer from '../footer/footer';
import Navbar from '../home/Navbar';

const AccommodationPage = () => {
  return (
    <div>
    <Navbar />
      <header
        className="text-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-60 relative"
        style={{ backgroundImage: "url('/images/iit-ropar-5.avif')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
      

        <div className="bg-black bg-opacity-50 py-20 px-4">
          <h1 className="text-5xl font-extrabold">Accommodation</h1>
          <p className="text-xl mt-4 font-light"></p>
        </div>
      </header>
     
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-purple-800 text-white py-8 px-6 md:px-12">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold md:text-4xl">ICVGIP 2025 Accommodation</h1>
          <p className="mt-2 text-lg opacity-80">Find the perfect place to stay during the conference.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6 md:px-12">
        {/* Accommodation Options Section */}
        <section className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b border-gray-200 pb-2">Accommodation Options</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* On-Campus Hostel Card */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-medium mb-3 text-gray-700">On-Campus Hostels (Shared)</h3>
              <p className="text-gray-600 mb-4">
                Limited shared accommodation is available in IIT Ropar hostels. This is a budget-friendly option, providing a chance to connect with fellow participants.
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Shared rooms</li>
                <li>Budget-friendly</li>
                <li>Networking opportunities</li>
              </ul>
            </div>

            {/* Hotels in Ropar Card */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-medium mb-3 text-gray-700">Hotels in Ropar</h3>
              <p className="text-gray-600 mb-4">
                Several hotels are available in Ropar, offering various levels of comfort and pricing. Participants are responsible for booking their own hotel accommodations.
              </p>
              <p className="text-gray-600 mb-4">We recommend checking popular travel websites for availability and booking.</p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Variety of options</li>
                <li>Individual bookings</li>
                <li>Range of price points</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Transportation Section */}
        <section className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b border-gray-200 pb-2">Transportation</h2>
          <p className="text-gray-600">
            Transportation will be provided between designated points in Ropar and the IIT Ropar campus during the conference days. More details on schedules and pick-up locations will be shared closer to the event.
          </p>
        </section>
      </main>

      <Footer/>
    </div>
    </div>
  );
};

export default AccommodationPage;
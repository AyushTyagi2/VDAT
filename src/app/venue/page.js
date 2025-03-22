import React from "react";
import Image from "next/image";
import Navbar from "../home/Navbar";
import Footer from "../footer/footer";

const VenuePage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen font-sans">
        {/* Header Section */}
        <header
        className="text-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-60 relative"
        style={{ backgroundImage: "url('/images/iit-ropar-5.avif')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="bg-black bg-opacity-50 py-20 px-4">
          <h1 className="text-5xl font-extrabold">Venue</h1>
          <br/>
          <h2 className="text-3xl font-light">Hotel Shivalik View, Chandigarh</h2>
          <p className="text-xl mt-4 font-light"></p>
        </div>
      </header>

        {/* Main Content */}
        <main className="container mx-auto py-16 px-6 md:px-12">
          {/* About Section */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
                About Hotel Shivalikview
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Hotel Shivalikview is a contemporary 4-star hotel nestled in Sector 17E of Chandigarh.
                  It boasts stylish, modern rooms with scenic views of a vibrant rose garden and the majestic
                  Shivalik mountain range.
                </p>
                <p>
                  Designed with the modern traveler in mind, the hotel offers all the amenities required for
                  both business and leisure stays. Its prime location ensures easy access to the city’s key attractions.
                </p>
                <p>
                  For more details, visit the hotel's page on{" "}
                  <a
                    href="https://www.makemytrip.com/hotels/hotel_shivalikview-details-chandigarh.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    MakeMyTrip
                  </a>.
                </p>
              </div>
            </div>
          </section>

          {/* Discover Chandigarh Section */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
                Discover Chandigarh
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* City Centre Card */}
                <a
                  href="https://en.wikipedia.org/wiki/Chandigarh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center hover:shadow-2xl transition-shadow"
                >
                  <Image
                    src="/images/chandigarh-city.jpg"
                    alt="Chandigarh City Centre"
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                  <h3 className="mt-4 text-xl font-medium text-gray-800">City Centre</h3>
                  <p className="text-gray-600 text-center">
                    Experience the buzz of Chandigarh's vibrant shopping and dining scene.
                  </p>
                </a>

                {/* Rose Garden Card */}
                <a
                  href="https://www.chandigarhtourism.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center hover:shadow-2xl transition-shadow"
                >
                  <Image
                    src="/images/rose-garden.jpg"
                    alt="Rose Garden, Chandigarh"
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                  <h3 className="mt-4 text-xl font-medium text-gray-800">Rose Garden</h3>
                  <p className="text-gray-600 text-center">
                    Take a leisurely walk through one of Asia's largest rose gardens.
                  </p>
                </a>

                {/* Rock Garden Card */}
                <a
                  href="https://en.wikipedia.org/wiki/Rock_Garden_(Chandigarh)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center hover:shadow-2xl transition-shadow"
                >
                  <Image
                    src="/images/rock-garden.jpg"
                    alt="Rock Garden, Chandigarh"
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                  <h3 className="mt-4 text-xl font-medium text-gray-800">Rock Garden</h3>
                  <p className="text-gray-600 text-center">
                    Explore the unique sculptures and artistic flair of this famed garden.
                  </p>
                </a>
              </div>
            </div>
          </section>

          {/* How to Reach Section */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
                How to Get to Hotel Shivalikview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="relative h-[300px] md:h-[450px]">
                  <a
                    href="https://www.google.com/maps/place/Hotel+Shivalikview/@30.7400909,76.773977,17z/data=!3m1!4b1!4m9!3m8!1s0x390fed0baaaaaaab:0x41d504d60d98ab7f!5m2!4m1!1i2!8m2!3d30.7400863!4d76.7765519!16s%2Fg%2F1tkl1q77?entry=ttu&g_ep=EgoyMDI1MDMxOS4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <iframe
                      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJq6qqqgvtDzkRf6uYDdYE1UE&key=AIzaSyCeb_aqbbf8o4741BoBP7UFbywjrVqhrv0"                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      title="Hotel Shivalikview Map"
                    ></iframe>
                  </a>
                </div>
                <div className="space-y-6 text-gray-700 text-lg">
                  <div className="flex items-start space-x-4">
                    <span className="flex-shrink-0 p-2 bg-blue-500 text-white rounded-full">
                      <i className="fas fa-plane"></i>
                    </span>
                    <div>
                      <h3 className="font-medium text-xl text-gray-800">By Air</h3>
                      <p>
                        The nearest airport is Chandigarh International Airport (about 12 km away). Taxis and ride-sharing services are readily available.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="flex-shrink-0 p-2 bg-green-500 text-white rounded-full">
                      <i className="fas fa-train"></i>
                    </span>
                    <div>
                      <h3 className="font-medium text-xl text-gray-800">By Train</h3>
                      <p>
                        Chandigarh Railway Station is approximately 8 km from the hotel. Taxis or auto-rickshaws can make the transfer comfortable and quick.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="flex-shrink-0 p-2 bg-purple-500 text-white rounded-full">
                      <i className="fas fa-bus"></i>
                    </span>
                    <div>
                      <h3 className="font-medium text-xl text-gray-800">By Bus</h3>
                      <p>
                        The hotel is well-connected via local and intercity bus services with nearby stops in Sector 17.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default VenuePage;

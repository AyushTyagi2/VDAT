import React from 'react';
import Footer from '../footer/footer';
import Navbar from '../home/Navbar';

const Tutorials = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <header
        className="text-center text-white py-24 md:py-72 relative" // Adjusted padding for responsiveness
        style={{
          backgroundImage: "url('/images/iit-ropar-5.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <div className="bg-black bg-opacity-50 py-12 md:py-20 px-4"> {/* Adjusted padding for responsiveness */}
          <h1 className="text-4xl md:text-5xl font-extrabold">Call for Tutorial:</h1> {/* Adjusted font size for responsiveness */}
          <h2 className="text-xl md:text-2xl mt-4 pb-4 font-light">
            International Symposium on VLSI Design and Test 2025 (VDAT 2025)
          </h2>
          <div className="text-lg md:text-xl"> {/* Adjusted font size for responsiveness */}
            <h3>Important Dates</h3>
            <p>March 3, 2025: Submissions Open</p>
            <p>April 24, 2025: Submission Deadline</p>
            <p>June 15, 2025: Acceptance Notification</p>
            <p>July 5, 2025: Camera Ready Deadline</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <ContentSection />
      </main>

      <Footer />
    </div>
  );
};

const ContentSection = () => {
  return (
    <>
      <ParagraphSection
        title="VDAT 2025 Tutorial Proposals"
        content={`The Organizing Committee of the VDAT 2025 invites proposals for tutorials to be presented at the conference, scheduled for 7-Aug-2025 in Chandigarh.
Tutorials are a cornerstone of the VDAT Conference, providing a unique opportunity for experts to share their knowledge on cutting-edge research, emerging technologies, and practical applications in the field of VLSI design and related areas. We welcome proposals for 90 minutes (1.5 hours) and half-day (3 hours) tutorials covering both academic and industrial topics. Proposals can range from established areas of research to emerging trends, providing fresh insights or novel solutions that will benefit attendees from academia and industry alike. The topics for the tutorials can be in-line with the theme and tracks of the VDAT2025 conference but need not be limited to them.`}
        isAlternate={false}
      />

      <ListSection
        title="Submission Guidelines"
        items={[
          "Title: Title of the tutorial, limited to 20 words",
          "Duration: 1.5 hours / 3 hours",
          "Format: Presentation / Workshop / Demo / Discussion / Other",
          "Abstract: Clearly outline the intent of the tutorial (600-1000 words)",
          "Target Audience: Specific attendees like students or corporate professionals",
          "Speaker’s Biography: Qualification, experience, publications, and past presentations",
          "Structure: Topics and time allocation per presenter",
          "Any IT or other requirement for conducting the tutorial",
        ]}
        isAlternate={true}
      />
    </>
  );
};

const ParagraphSection = ({ title, content, isAlternate }) => (
  <section className={`py-12 px-4 ${isAlternate ? 'bg-gray-100' : 'bg-white'} shadow-md rounded-xl mb-8`}>
    <div className="max-w-6xl mx-auto">
      <div className="section-heading">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 text-center mb-6 underline-animation">
          {title}
        </h2>
      </div>
      <div className="underline">
        <div className="dot"></div>
      </div>
      <div className="h-6 py-5"></div>
      <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-loose">{content}</p>
    </div>
  </section>
);

const ListSection = ({ title, items, isAlternate }) => (
  <section className={`py-12 px-4 ${isAlternate ? 'bg-gray-100' : 'bg-white'} shadow-md rounded-xl mb-8`}>
    <div className="max-w-6xl mx-auto">
      <div className="section-heading">
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-6 underline-animation">
          {title}
        </h2>
      </div>
      <div className="underline">
        <div className="dot"></div>
      </div>
      <div className="h-6 py-5"></div>
      <ul className="list-none text-lg text-gray-700 max-w-4xl mx-auto">
        {items.map((item, index) => (
          <li key={index} className="mb-2 flex items-start">
            <span className="mr-2 text-purple-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.75l-2.719 5.513L3.5 11.12l4.439 4.329-.785 6.563L12 18.29l5.846 3.722-.785-6.563 4.439-4.33-5.781-.857L12 4.75z"
                />
              </svg>
            </span> {item}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Tutorials;
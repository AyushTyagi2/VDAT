"use client";
import React from "react";
import Footer from "../../footer/footer.js";
import Navbar from "../../home/Navbar.js";
import TutorialComponent from "../tutcomponent.js";

const TutorialPage = () => {
  const tutorialData = {
    title:
      "An Overview of DFT fundamentals and Advanced Fault Modeling with Best Practices for Minimizing Test Escapes",
    duration: "180 minutes",
    speakers: [
      "Dr. Renold Sam",
      "Yadukrishnan Gopinathan",
      "UshaRani Guggulla"
    ],
    format: "Presentation + Demonstration + Open Discussion",
    //autofill from above, TAKE THE TEXT EXACTLY AS IT IS
    // from the above text, do not change the text, just copy paste it
    abstract: `Complex integrated circuits (ICs) are required for higher performance and efficiency due to the increased demand in a variety of electronics-based businesses, particularly in the fields of medical sciences and automotive electronic components.
Furthermore, the yield requirement is now expressed in DPPB (Defective Parts Per Billion) rather than DPPM (Defective Parts Per Million), as safety and reliability are of the utmost significance.
Reliability and yield are impossible to attain without sophisticated "DFT techniques".

---

Beginning with the fundamentals of the DFT, the course covers fault modeling, SCAN and compression techniques.
We will also talk about DFT approaches at the Chiplet level such as BSDL and other architectural techniques.
The workshop seeks to cover BIST methodologies for testing RAMs and ROMs.

---

Advanced fault modeling techniques, such as the Cell Aware Test, Timing Aware Test, Path Delay Fault Modelling, and Automatic Fault Grading Procedures, will be presented in addition to traditional fault modeling techniques.
Emerging 3D IC solutions and testing concepts will also be explained.

---

Best practices for improving yield and reducing test escapes will be covered in detail.
Following this, a comprehensive demonstration will be provided, starting with a comparison of designs at the RTL and GLS level.
The GLS design will be used to perform ATPG, fault modeling, fault classification, and test coverage analysis.

The generated test patterns will then be simulated, and the resulting simulation waveforms and schematics will be thoroughly explained.
Additionally, ATPG log files and simulation waveforms will be examined in detail towards the conclusion of the session.
`,
    domain: "DFT – Design for Testability",
    keywords: `SCAN, Faults and Fault Modelling, Defects and Test Coverage, ATPG (Automatic Test Pattern Generation), CAT (Cell Aware Test), TPI (Test Point Insertion), AFG (Automotive Fault Grading), DPPM (Defects parts per Million), BSDL (Boundary Scan Description Language), BIST (Build-in Self-Test), ATE (Automatic Test Equipment)`,
    prerequisites: "Basics of Digital Design, Basics of VLSI Design",
    speakerBiographies: [`Renold Sam earned his Doctorate degree in the field of DFT for FinFET circuits.

With 20+ YOE in DFT, he is currently working as a Sr. Manager DFT in Microchip Technology Inc., Vancouver, Canada.

He is managing teams across 04 geographical locations including North America and Asia continents and handles a team of 65+ Engineers.

His skills include Advanced fault modeling and Post silicon debug.

He is passionate about teaching, worked as an Adjunct Professor in IIIT Chennai.

He loves to travel and explore different islands.`,
`Yadukrishnan Gopinathan is a Digital VLSI specialist holding a master’s degree in digital VLSI Design.

With 4 years of industry experience in the Design for Testability (DFT) domain, Yadukrishnan possesses expertise in Digital ICs, System Design, and Signal Processing.

His skills include Scan Insertion, ATPG, Simulation, and Advanced fault modeling.

He previously worked as a Silicon Design Engineer at Advanced Micro Devices (AMD) for 2.5 years and currently works as a Design Engineer specialized in Design for Testability at Microchip Technology Inc.`,
`Usha Rani Guggulla is a Digital VLSI specialist holding a master's degree in VLSI design.

With 16 years of experience in the Design for Testability (DFT) domain, she is currently working as a Technical Staff Engineer at Microchip Technology Inc., Bangalore.

Usha Rani Guggulla possesses expertise in Digital ICs, Digital system testing, and testable design.

Her skills include SOC level DFT RTL integration, scan insertion, MBIST insertion, STA, ATPG, BSDL, simulations, and silicon debugging.`,],
    basicStructure: `S. No.: 1
Session: Overview to DFT
Duration: 45 Minutes
Presenter: Renold Sam
Comments: Introduction to DFT, Fault Modelling, Test Coverage, Scan Chain Structures, SA and TDF, BIST, JTAG and Testers

S. No.: 2
Session: Advanced Fault Modelling Techniques
Duration: 45 Minutes
Presenter: YaduKrishnan
Comments: CAT, PDF, TAA, IDDQ, AFG Techniques
3D IC’s Techniques

S. No.: 3
Session: Best Practices in Fault Modeling to Reduce Test Escapes and to Increase the Yield
Duration: 45 Minutes
Presenter: UshaRani
Comments: Best practices in DFT include fault modeling, ATPG, and optimized power-aware and defect-oriented testing to minimize test escapes

S. No.: 4
Session: Overview to DFT Tutorials – Demo
Duration: 45 Minutes
Presenter: YaduKrishnan and UshaRani
Comments: Demonstration on Scan Insertion, Scan Chain Analysis, DRC Violations Analysis, and ATPG. This will include an analysis of ATPG log files, as well as a quick review of simulation waveforms and schematics.`,

    youtubeVideoId: "", // Replace with actual video ID
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="bg-black">
        <Navbar />
      </div>

      <TutorialComponent {...tutorialData} />

      <Footer />
    </div>
  );
};

export default TutorialPage;

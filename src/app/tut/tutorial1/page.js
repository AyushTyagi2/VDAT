"use client";
import React from "react";
import Footer from "../../footer/footer.js";
import Navbar from "../../home/Navbar.js";
import TutorialComponent from "../tutcomponent.js";

const TutorialPage = () => {
  const tutorialData = {
    title:
      "Foundry Compliance and Tapeout Qualification of Analog, Digital, and Mixed-Signal IC Designs for SCL 180nm CMOS Technology Node",
    duration: "180 minutes",
    speakers: ["Venkata Reddy Kolagatla", "Vivian Desalphine"],
    format: "Presentation",
    //autofill from above, TAKE THE TEXT EXACTLY AS IT IS
    // from the above text, do not change the text, just copy paste it
    abstract:
      "ChipIN Centre under Chips to Startup (C2S) Programme was set up at C-DAC Bangalore by Ministry of Electronics and Information Technology (MeitY), Government of India, to catalyze chip designing in India by catering to fabless chip design ecosystem in the country. The facility provides Multi-Project Wafer (MPW) support to Academic Institutions, Startups and MSMEs by enabling access to SCL foundry and overseas foundries. It provides centralized EDA Design Tools (Synopsys, Cadence, and Siemens-EDA, Xilinx, Ansys, Keysight, Silvaco) for IC design flow. The facility also provides design services like Fab compliance checks, validation, integration of designs, coordinating with identified firm for packaging of fabricated chips and enabling characterization and prototyping in a centralized manner. A significant component of this effort is exposing Academia, Govt. R&D organizations, and Startups/MSMEs to the entire VLSI Design flow necessary to have their designs ready for fabrication at SCL Foundry.",
    domain:
      "Electronics Design Automation, Testing and Verification, Packaging and Manufacturing",
    keywords:
      "SCL 180nm CMOS process, Digital and Analog/Mixed-Signal ASIC designs, Design for Manufacturability (DFM), Reliability and Integrity, Physical Verification and Validation, Tape-out, Packaging",
    learningOutcomes: [
      "Provides a detailed overview of the essential tapeout checks required for successfully designing and tape-out of Digital, Analog, and Mixed-Signal VLSI circuit designs using SCL 180nm technology.",
      "It serves as a comprehensive guide for designers, offering critical insights and necessary inputs for preparing and submitting designs to SCL foundry.",
      "This resource aims to ensure clarity and facilitate the seamless execution of tapeout processes, thereby enhancing the overall quality and reliability of integrated circuit fabrication for SCL 180nm Process Design Kit (PDK).",
      "Vital resource for designers preparing to submit their designs to SCL, offering invaluable guidance and clarity.",
      "Students and professionals working in the fields of ASIC design and verification, electronics product development, and related fields have a great opportunity to learn about Digital, Analog/Mixed-Signal design verification and validation flow targeting SCL 180nm technology node.",
    ],
    targetAudience:
      "The tutorial caters to a diverse audience, including VLSI professionals, experts, researchers, physical designers, custom layout developers, tech enthusiasts, students and lecturers.",
    prerequisites:
      "Should be familiar with basics of VLSI, Foundry Process and Technology, Digital and Analog Systems, basic knowledge of Digital VLSI ASIC design, and custom CMOS Analog/Mixed-Signal circuit design.",
    speakerBiographies: [
      `Venkata Reddy Kolagatla is a Scientist-D working at C-DAC Bangalore for the past seven years.
Earlier, he worked with Synopsys India Pvt. Ltd. for one year as Senior Analog Design Engineer
and prior to that, for three years at Sandisk India Pvt Ltd as Design Engineer II. He is Gold
Medalist from the prestigious NIT Tiruchirappalli in his masters in the VLSI Systems
specialization. He completed his B.Tech from Vignan’s Engineering College affiliated to JNTU
Kakinada in Electronics and Communication Engineering (ECE).
During his professional career at Synopsys and Sandisk, he worked on SDR/DDR1/DDR2/DDR3
industry standard Signal/Power Integrity aware IO Designs (Input receivers and Output
transmitters) with Electrostatic discharge (ESD) and Latch-up considerations. His contributions
involve design & development of peripherals (include Analog mixers, Duty Cycle Correctors,
Frequency Dividers, Signal Drivers, On-Die Termination (ODT) Circuits, Calibration Circuits for
Process Voltage & Temperature variations) for Single Data Rate (SDR), Double Data Rate
(DDR), DDR2 and DDR3 speeds of 2D/3D NAND flash memories.
Currently at C-DAC Bangalore, Mr. Venkat has worked in the areas of Cryptography, tamper
resistant Crypto IP Cores Design, Development and Validation, System-On-Chip (SoC) Design
and Development, SoC Peripherals such as Serial Peripheral Interface (SPI), Quad SPI (QSPI),
Pulse Width Modulator (PWM), General Purpose Input Output Circuits (GPIOs), Timers,
Watchdog Timer (WDT) Design and Implementation, Digital ASIC Physical Design and Physical
Verification, etc.
He played a key role in earlier SMDP C2SD project where he was instrumental in establishing
RTL to GDS II IC Design flow using SCL 180nm PDK with the Cadence and Siemens EDA Tools.
The experience gained was tremendously valuable in the physical verification of the various
designs from academic institutes across the country. As part of Chip Centre, he led a team

that carried out the physical design of SPI enabled AES Encryptor and IEEE 754 FPU (Single-
Precision) Digital ASICs from RTL design to GDS-II generation using SCL 180nm foundry PDK

and successfully completed the tapeout for both the designs to SCL Foundry. As part of ChipIN
Centre activities under Chips to Start-up (C2S) Programme, he is involved in design and

development activities targeting ASIC and technically supporting various academic institutes
across the country.
His technical strengths and interests include FPGA and ASIC based design and development,
Analog and Mixed-Signal Design, IP core development of algorithms for Cryptanalysis/
Cryptography, Post Quantum Cryptography, Signal Integrity, and Power Integrity aware IO
design, SoC design and development. He has numerous publications in reputed international
journals and conferences, and he has presented at various seminars, workshops, and
international conferences; he is widely recognized for his impactful research contributions.`,
      `Vivian Desalphine is Scientist-F at Centre for Development of Advanced Computing (C-DAC),
Bangalore with 20 years of experience. He is currently involved in Chips-to-Startup
Programme, Design Linked Incentive and RISC-V based GPU development. He has been
involved in various projects and programmes of national importance, viz. Microprocessor
Development Programme, Chip-Centre for SMDP Chips-to-Systems Design, Cryptographic
Module Validation Technologies, Enhanced Decryption Tool on Heterogeneous Platform,

Design and Development of a Cooperative High Performance Traffic Generator for Time-
Sensitive Network Analysis, Advanced Research in Ubiquitous Computing, Cryptanalysis:

Novel Approaches and Intelligent techniques. His research interests include Computer
Architecture, VLSI design and implementation, embedded processor subsystem design,
caches, secure microprocessor architectures, SoC design, memory controllers, wired and
wireless network media access controller design, hardware acceleration of domain-specific
applications, ASIC & FPGA-based digital designs, etc.
His professional experience includes Digital VLSI design and development, IP core design and
development of hardware modules for RISC-V based microprocessor and GPU, FIPS 140-2
security compliant IP core design and development, IP integration and tapeout activities for
Digital Design tapeout as part of Chip-Centre, IP core design and development of algorithms
for Cryptanalysis/Cryptography, IP Core design and development for next-generation Gigabit
(10GbE/40GbE) Ethernet MACs and IEEE 802.15.4 MAC hardware primitives, etc.
He holds a B.Tech in Electronics and Communications Engineering from the University of
Kerala, and has completed his Masters in Digital Signal Processing from the Department of
Electronic & Electrical Engineering, University of Strathclyde, United Kingdom. His research
has been published in several international conferences, and he has presented at various
seminars, workshops, and international conferences. In addition, he has filed a patent and
also been involved in numerous efforts towards industry transfer of technology.`,
    ],
    basicStructure: `The tutorial titled:
“Foundry Compliance and Tapeout Qualification of Analog, Digital, and Mixed‑Signal IC Designs for SCL 180nm CMOS Technology Node”
will be highly relevant to students, researchers and professionals working in the area of ASIC design.

1. Introduction and Overview of Physical Validation (30 Mins)
   - Introduction to ChipIN Centre and Physical verification & validation of designs for SCL 180nm PDK
   - Digital and Analog/Mixed‑Signal ASICs fabricated at SCL 180nm foundry

2. Procedures Prior To Physical Verification for the Digital & Analog/Mixed‑Signal Designs Using SCL 180nm PDK (60 Mins)
   - Insertion of Silicon Number
   - Seal‑ring Placement
   - Die Protection requirements
   - Pad pitch Requirements
   - Crystal Oscillator Pads and their placement
   - Power pads and Filler Cells requirements
   - Clock Pads (Clock buffers) requirements and placement
   - Output pads drive strength requirements to drive the load
   - Input pads termination circuitry requirements to avoid signal reflections
   - Dummy Cells Placement
   - Powering the Full‑Chip for SCL 180nm technology
   - IO Pad Ring Establishment with Cut‑cells (pvcf)
   - IO Pad Ring Establishment with Cut‑cells (pvce)

3. Physical Verification of the Digital & Analog/Mixed‑Signal Designs Using SCL 180nm Technology PDK (50 Mins)
   - Design Rule Checks
   - Electrical Rule Checks
   - Antenna Checks
   - Layout versus Schematic
   - PEX Extraction
   - Spice Simulations (for all PVT variations)
   - Design for Manufacturability
   - Design for Reliability
   - Design for Integrity
   - Design for Assembly
   - Timing Sign‑off
   - Tape‑out Sign‑off
   - Tapeout submission form checklist
   - Reticle Definitions
   - MPW Shuttles for Fabrication

4. Packaging Requirements (30 Mins)
   - QFN Packaging Definitions
   - Bond Pad Rules
   - Rules for Bond wire
   - Bonding Diagram
   - Labelling
   - Segmentation

5. Critical Checklist for Tape‑out and Packaging (10 Mins)
   - For Analog Designs
   - For Digital Designs
   - For Mixed‑Signal Designs
   - For Packaging`,

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

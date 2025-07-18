"use client";
import React from "react";
import Footer from "../../footer/footer.js";
import Navbar from "../../home/Navbar.js";
import TutorialComponent from "../tutcomponent.js";

const TutorialPage = () => {
  const tutorialData = {
    title:
      "Design of a Battery-less Wireless Sensor Node Powered by RF Energy Harvester",
    duration: "90 minutes",
    speakers: ["Dr Jai Gopal Pandey", "M Santosh"],
    format: "Presentation",
    abstract:
      "Wireless sensor nodes are required to be deployed in remote areas for many applications, such as border security, forest fire monitoring, and monitoring of railway tracks. The major challenge is that these sensor nodes need batteries to store energy harvested from solar panels/mini wind-mills for uninterrupted operation. Batteries (lithium chemistry) have a limited or fixed life span and therefore require constant monitoring/replacement from time to time. Battery replacement is not possible for the above-mentioned applications due to replacement challenges and environmental impact. In addition, such discarded batteries end up in landfills, further polluting the environment. Battery-based energy sources eventually run out of power, but RF-based energy harvesting will continue to operate over the long term. To capture RF energy from the atmosphere, the RF energy harvesting system provides benefits over batteries: i) the rectenna nearly never needs to be replaced, since its lifespan is so long; ii) the environmental impact is \"green\" (unlike batteries, there is no waste that would harm the environment); iii) always available day and night; and iv) it is continuous but has the disadvantage of low power density and efficiency inversely proportional to the distance. A study has been conducted on harvester efficiency (patch and horn antenna) from different RF energy harvesting sources (mobile phones, Wi-Fi routers, and dedicated sub-GHz sources). Dedicated sub-GHz sources are chosen over other sources due to superior harvester efficiency, which has also been experimentally validated in the CSIR-CEERI laboratory. The dedicated source has an output power of 3W and operates at 915 MHz. The custom PCB has been developed for benchmarking harvester efficiency while connected with an in-house developed antenna. A 9.6 dBi gain antenna has been designed and associated with a harvester that generated 3.3 V for an average distance of 1 Meter—the practicality of the proposed technique validated by using a CC1350-based wireless sensor board as a load.",
    domain:
      "Circuit design, System development, Energy harvesting",
    keywords:
      "RF Energy harvesting, Wireless sensor networks",
    learningOutcomes: [
      "Design guidelines for the development of battery-less wireless sensor nodes",
      "Understanding RF energy harvesting principles and applications",
      "Knowledge of antenna design for energy harvesting systems",
      "Practical implementation techniques for wireless sensor networks",
      "System optimization for low-power wireless applications"
    ],
    targetAudience:
      "Students (Master's & Doctoral), Industry professionals",
    prerequisites:
      "Basic understanding of wireless communications, antenna theory, and electronic circuits",
    speakerBiographies: [
      `Dr. Jai Gopal Pandey did M.Tech. (Electronics Design & Technology) in 2003, and obtained his Ph.D. degree in Electronics Engineering from Birla Institute of Technology and Science (BITS), Pilani, India, in 2015. He joined the Council of Scientific and Industrial Research- Central Electronics Engineering Research Institute (CSIR-CEERI), Pilani 2005. Currently, he is working as a Senior Principal Scientist.

Dr. Pandey is actively working as a research scientist and contributing to VLSI design, High-performance Architecture, SoCs, Embedded systems, Cryptography, and FPGA-based design. He has completed 12 R&D projects, is leading 02 projects, and has published over 50 research papers. Dr. Pandey is a Fellow of IETE, a Fellow of the Institute of Engineers, a Senior Member of IEEE, and a Life Member of the Semiconductor Society of India.`,
      `Mr M Santosh is currently pursuing his Ph.D degree in Electrical Engineering from the Indian Institute of Technology, Jodhpur. He joined the Council of Scientific and Industrial Research- Central Electronics Engineering Research Institute (CSIR-CEERI), Pilani, in 2011, Currently, he is a Principal Scientist. He has published 9 journal papers and 15 conference papers.`
    ],
    basicStructure: `The tutorial will cover energy harvesting, RF power, battery-less WSN, SoC, and system aspects. Finally, measurement data will be discussed to explain the practicality of the proposed approach using SoC WSN boards with integrated RF modules.

Time split-up:
Dr Jai G Pandey - 45 min
M Santosh - 45 min

Topics covered will include:
- Introduction to RF Energy Harvesting
- Wireless Sensor Network fundamentals
- Battery-less system design principles
- Antenna design for energy harvesting
- System on Chip (SoC) integration
- Practical implementation and measurement results
- Performance analysis and optimization techniques`,

    youtubeVideoId: "", 
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
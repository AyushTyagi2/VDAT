"use client";
import React from "react";
import Footer from "../../footer/footer.js";
import Navbar from "../../home/Navbar.js";
import TutorialComponent from "../tutcomponent.js";

const TutorialPage = () => {
  const tutorialData = {
    title: "Advanced VLSI Design Techniques for AI Applications",
    duration: "3 hours",
    speakers: [
      "Dr. Sarah Johnson", 
      "Prof. Michael Chen"
    ],
    format: "Workshop",
    abstract: "This comprehensive tutorial explores cutting-edge VLSI design methodologies specifically tailored for artificial intelligence applications. Participants will gain hands-on experience with state-of-the-art design tools, learn optimization techniques for AI hardware accelerators, and understand the challenges and opportunities in designing efficient neural network processors. The tutorial covers both theoretical foundations and practical implementation strategies, making it ideal for researchers and professionals working at the intersection of VLSI design and artificial intelligence.",
    domain: "VLSI Design & AI Hardware",
    keywords: "VLSI, AI Hardware, Neural Networks, Design Optimization, Hardware Accelerators",
    learningOutcomes: "By the end of this tutorial, participants will have a comprehensive understanding of VLSI design principles for AI applications. They will be able to analyze trade-offs between power, performance, and area in AI chip design, implement basic neural network accelerators using hardware description languages, and apply optimization techniques to improve the efficiency of AI hardware. Additionally, participants will gain insights into emerging trends in AI hardware architecture and understand the challenges in scaling AI solutions for different application domains.",
    targetAudience: "Graduate students, researchers, and industry professionals in VLSI design and AI hardware",
    prerequisites: "Basic knowledge of digital circuit design and familiarity with hardware description languages",
    speakerBiographies: [
      "Dr. Sarah Johnson is a Senior Research Scientist at Advanced Computing Labs with over 15 years of experience in VLSI design and AI hardware acceleration. She has published over 50 papers in top-tier conferences and holds 12 patents in the field of neural network processors.",
      "Prof. Michael Chen is a Professor of Electrical Engineering at Tech University, specializing in computer architecture and AI hardware. He leads the AI Hardware Research Group and has received multiple awards for his contributions to the field."
    ],
    basicStructure: "The tutorial is structured as an interactive workshop with four main segments. We begin with a 45-minute introduction to AI hardware requirements and VLSI design challenges. This is followed by a 60-minute hands-on session where participants design a simple neural network accelerator. The third segment focuses on optimization techniques and includes a 45-minute practical exercise. Finally, we conclude with a 30-minute discussion on future trends and Q&A session. Each segment includes both theoretical concepts and practical exercises to reinforce learning.",
    keyLearningOutcomes: [
      "Master the fundamental principles of VLSI design for AI applications",
      "Understand power-performance-area trade-offs in AI hardware design",
      "Implement basic neural network accelerators using HDL",
      "Apply optimization techniques for efficient AI hardware design",
      "Analyze emerging trends in AI hardware architecture",
      "Design memory hierarchies optimized for AI workloads",
      "Evaluate different AI hardware architectures for specific applications"
    ],
    youtubeVideoId: "dQw4w9WgXcQ" // Replace with actual video ID
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
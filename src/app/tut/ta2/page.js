"use client";
import React from "react";
import Footer from "../../footer/footer.js";
import Navbar from "../../home/Navbar.js";
import TutorialComponent from "../tutcomponent.js";

const TutorialPage = () => {
  const tutorialData = {
    title:
      "Design techniques for dc-dc boost converters with a high voltage conversion ratio.",
    duration: "90 minutes",
    speakers: ["Saravana Kumar M"],
    format: "Presentation",
    //autofill from above, TAKE THE TEXT EXACTLY AS IT IS
    // from the above text, do not change the text, just copy paste it
    abstract:
      `A boost converter, also known as a step-up converter, is a type of DC-DC switched-mode
power supply that efficiently increases a lower input voltage to a higher output voltage. The
basic blocks of a boost converter are an inductor, two power switches and an output
capacitor. The power switch is driven by a control signal, whose duty cycle can be adjusted to
achieve a high output voltage. In this tutorial, I will start with the basics of boost converters
where I will discuss different performance metrics which determine the values of the inductor,
capacitor, frequency of the control signal and its duty cycle.

The control signal is generated using a negative feedback loop. Based on its implementation,
there are two popular types of control – the voltage mode control and the current mode
control. Voltage-mode control regulates the output voltage by adjusting the duty cycle of the
switching transistor based on voltage feedback. While straightforward, it faces challenges due
to the inherent complex poles and right-half-plane (RHP) zero, which can complicate stability
analysis and design. Current-mode control enhances the voltage-mode approach by adding
an inner current feedback loop.

This method improves transient response and provides inherent overcurrent protection. 
However, it may require additional components like current sense resistors or transformers,
and careful design. We will discuss both these techniques in this tutorial. The current mode 
control has different sub-types namely CCM, DCM and BCM control. 
Each of them has their own merits and demerits which will be discussed at length in
the tutorial. We also finally discuss the various factors which determine the efficiency of boost
converters.

Finally, I will discuss the design details of a BCM current mode control boost converter along
with the feedback circuitry. I am confident this tutorial will provide a comprehensive learning
curve for the audience in the area of boost converter design.`,

    domain:
      "Analog circuit design, Power management circuit design",
    keywords:
      "dc-dc, boost converter, voltage-mode control, current-mode control, duty cycle.",
    learningOutcomes: [
      "a) Understanding the basic specifications of a boost converter. b) Learning about two control techniques in a boost converter. c) Design challenges in a boost converter with a high voltage conversion ratio.",
    ],
    targetAudience:
      "Master’s and Ph.D students, Researchers and Industry professionals.",
    prerequisites:
      "Basic circuit analysis, Laplace transform analysis, Transfer function design.",
    speakerBiographies: [
      `
Saravana Kumar is an Assistant Professor in the Microelectronics and VLSI group, Department of Electronics and Communication Engineering (ECE), of Indian Institute of Technology (IIT) Roorkee. He works in the area of Analog and Mixed signal integrated circuit (IC) design withspecial focus on high performance and high bandwidth data converters. He received the bachelor’s degree in Electronics and Communication Engineering from the Madras Institute of Technology, Anna University, Chennai, in 2009, and the M. Tech degree from the Indian Institute of Technology Delhi, New Delhi, in 2011.
From 2011 to 2014, he worked as a Design Engineer at Analog Devices, Bengaluru, India, where he worked on high-speed chip-to-chip serial link communication. He obtained his PhD degree from the Indian Institute of Technology Madras, Chennai, in 2021, in the area of data-converter design.`,
    ],
    basicStructure: `
a) Introduction to dc-dc boost converters
b) Control techniques in boost converters – Voltage mode and Current mode control.
c) Voltage mode control – design specifications, challenges involving stability
d) Current mode control – design specifications, stability considerations.
e) Types of current mode control – CCM, DCM and BCM
f) Design example of a boost converter with a high voltage conversion ratio
g) Advanced control techniques.
h) Conclusion`,

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

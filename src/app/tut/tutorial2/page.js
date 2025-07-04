"use client";
import React from "react";
import Footer from "../../footer/footer.js";
import Navbar from "../../home/Navbar.js";
import TutorialComponent from "../tutcomponent.js";

const TutorialPage = () => {
  const tutorialData = {
    title:
      "Testing & characterization of data converters",
    duration: "180 minutes",
    speakers: [
      "Dr. R. S. Ashwin Kumar",
      "Dr. Rakesh Kumar Palani",
      "Dr. Ankesh Jain"
    ],
    format: "Presentation",
    //autofill from above, TAKE THE TEXT EXACTLY AS IT IS
    // from the above text, do not change the text, just copy paste it
    abstract: `Modern system-on-chips (SoCs) are mixed-signal in nature, comprising a combination of purely analog and mixed-signal circuits.

Analog circuits are characterized in the analog domain, and the test setup typically uses signal generators for stimulus, while the output is measured directly on spectrum analyzers, oscilloscopes, etc.

Mixed-signal systems like analog-to-digital converters (ADCs) & digital-to-analog converters (DACs), on the other hand, entail complexities not only in design but also in testing, owing to their mixed-signal nature.

In particular, since the output of ADCs is digital bits, characterization of ADCs involves careful post-processing of this digital data.

This post-processing is required to be done in the time domain or in the frequency domain, depending on the parameter being measured.

This demands that the designer or test engineer be aware of the different parameters that are of interest in an ADC and the relevance of these parameters for each application.

For example, static linearity of ADCs is measured in the time domain, while dynamic linearity requires careful measurement in the frequency domain using the discrete Fourier transform (DFT).

Besides, even the analog stimulus for ADCs must be carefully chosen and applied so as to capture the true performance of the ADC.

As a result, understanding basic signal processing techniques and tools is essential for anyone working with ADCs.

Such working knowledge not only helps during testing but also aids in making design choices that make the design amenable to easier testing (like having a crude digital-to-analog converter (DAC) on-chip for easier testing of high-speed ADCs).

---

This tutorial aims to comprehensively explain the basic signal processing knowledge required for testing.

In addition, it will discuss all other important aspects while testing, such as how to choose the input signal frequency, the minimum no. of FFT points, etc.

Besides, the challenges in testing both discrete-time and high-speed continuous-time ADCs and DACs will be explained in detail with example results.
`,
    domain: "VLSI Circuit and SoC Design",
    keywords: `Data converters, analog-to-digital converter testing,
DNL/INL, SNDR, ENOB`,
    prerequisites: "None",
    speakerBiographies: [
      `Speaker 1: R. S. Ashwin Kumar, Assistant Professor, IIT Kanpur
      
R. S. Ashwin Kumar received the B.E. degree from the College of Engineering, Guindy (CEG), Anna University, Chennai, India, in 2013, and the Ph.D. degree from IIT Madras, Chennai, India, in 2020.

He is currently an Assistant Professor with IIT Kanpur, Kanpur, India.

His research interests are in mixed-signal IC design focusing on data converters and signal processing.

---

**Related publications:**

* R. S. Ashwin Kumar, "Analysis of Stability, Noise, and Design Guidelines For a Cascaded Floating-Inverter Amplifier," in *IEEE Transactions on Circuits and Systems II: Express Briefs (TCAS-II)*.
* Rakesh N, R. S. Ashwin Kumar, "Low Noise Low Power Readout Circuit for Capacitance Based MEMS Accelerometers", *IEEE Asia Pacific Conference on Circuits and Systems (APCCAS)*, 2024.
* R. S. Ashwin Kumar, "Flip-Around Level-Shifting for Switched-Capacitor Amplifiers to Improve the Closed-Loop Settling of Floating-Inverter Amplifiers", *IEEE International Symposium on Circuits and Systems (ISCAS)*, 2024 (Won 2nd best paper award in ISCAS 2024).
* R. S. Ashwin Kumar, "Analysis of Stability, Noise, and Design Guidelines For a Cascaded Floating-Inverter Amplifier," in *IEEE Transactions on Circuits and Systems II: Express Briefs (TCAS-II)*, 2024.
* R. S. Ashwin Kumar, et. al., "Analysis and Design of a Discrete-Time Delta-Sigma Modulator Using a Cascoded Floating-Inverter-Based Dynamic Amplifier," *IEEE Journal of Solid-State Circuits (IEEE JSSC)*, 2022.
* R. S. Ashwin Kumar et. al., "Multi-channel Analog-to-Digital Conversion Using a Delta-Sigma Modulator Without Reset and a Modulated Sinc-Sum Filter," *IEEE Transactions on Circuits and Systems I: Regular Papers (TCAS-I)*.
* R. S. Ashwin Kumar and N. Krishnapura, "Multi-Channel Analog-to-Digital Conversion Techniques Using a Continuous-time Delta-Sigma Modulator Without Reset," *IEEE Transactions on Circuits and Systems I: Regular Papers (TCAS-I)*.
* R. S. Ashwin Kumar, et. al., "Reset-Free Memoryless Delta–Sigma Analog-to-Digital Conversion," *IEEE Transactions on Circuits and Systems I: Regular Papers (TCAS-I)*.
* R. S. Ashwin Kumar, "A Discrete-Time Delta-Sigma Modulator With Relaxed Driving Requirements And Improved Anti-Aliasing", *IEEE International Symposium on Circuits and Systems (ISCAS)*, 2021.
* R. S. Ashwin Kumar, "Using the Miller Theorem to Analyze Two-Stage Miller-Compensated Opamps", *IEEE International Symposium on Circuits and Systems (ISCAS)*, 2022.
* R. S. Ashwin Kumar and N. Krishnapura, "A 2-Channel ADC Using a Delta-Sigma Modulator Without Reset and a Modulated-Sinc-Sum Filter", *IEEE European Solid-State Circuits Conference (ESSCIRC)*, 2019.
* R. S. Ashwin Kumar, et. al., "A Low Power Multi-Channel Input Delta-Sigma ADC Without Reset,” *IEEE International Conference on VLSI Design and International Conference on Embedded Systems (VLSID)*, 2017.
`,
`Speaker 2: Rakesh Kumar Palani, Associate Professor, IIT Delhi

Rakesh K. Palani received his B.Tech. in Electrical Engineering from the National Institute of Technology, Kurukshetra, India in 2007 and his Ph.D. in Electrical Engineering from the University of Minnesota, Twin Cities in 2015.

For his Ph.D., he worked on the design of PVT-tolerant inverter-based circuits for baseband analog applications.

His research interest includes design of low-power filters, ADCs, and amplifiers.

In 2011, he was with Broadcom Corporation, Minneapolis, where he worked on design of word line drivers for SRAM.

In 2014, he was at Qualcomm, San Diego, where he worked on flicker noise reduction techniques in discrete time delta sigma modulators.

He is currently working as an Associate Professor at IIT Delhi.

---

**Related publications:**

* Srishti Agrawal, Rakesh Kumar Palani, Sweta Tripathi, "Analysis and Design of Ripple-Free Bandgap Reference Circuit With pnp Bipolars," in *IEEE Transactions on Very Large Scale Integration (VLSI) Systems*.
* Ayan Alam Khan and Rakesh Kumar Palani, "Analysis and Design of Low Noise Voltage Regulator with Integrated Single BJT Bandgap Reference up to 10 mA Loads," in *IEEE Transactions on Circuits and Systems II: Express Briefs*, June 2024.
* S. Narayan Sinha, S. Chatterjee and Rakesh Kumar Palani, "A 2-GHz Two-Tone Direct Digital Frequency Synthesizer," in *IEEE Transactions on Circuits and Systems II: Express Briefs*, Dec. 2022.
* Rakesh Kumar Palani, Srikar Bhagavatula and Denny Yuen, "A Sub -1V 8.5 ppm/°C Sampled Bandgap Voltage Reference," *IEEE Transactions on Circuits and Systems II: Express Briefs*, Oct. 2022.
* Nagulapalli, Rajasekhar, Rakesh Kumar Palani, and Srikar Bhagavatula, "A 24.4 ppm/°C Voltage Mode Bandgap Reference With a 1.05 V Supply," *IEEE Transactions on Circuits and Systems II*, 2020.
* Harjani, Ramesh, Danijela Cabric, Dejan Markovic, Brian M. Sadler, Rakesh K. Palani, Anindya Saha, Hundo Shin, Eric Rebeiz, Sina Basir-Kazeruni, and Fang-Li Yuan, "Wideband Blind Signal Classification on a Battery Budget," *IEEE Communications Magazine*, Vol. 53, No. 10, 2015.
* Palani, Rakesh Kumar, and Ramesh Harjani, "A 220-MS/s 9-Bit 2X Time-Interleaved SAR ADC With a 133-fF Input Capacitance and a FOM of 37 fJ/conv in 65-nm CMOS," *IEEE Transactions on Circuits and Systems II: Express Briefs*, Vol. 62, No. 11, 2015.
* Rakesh Kumar Palani, "Analysis and Design of Chopperless 7 ppm/°C Bandgap Voltage Reference," *IEEE International Symposium on Circuits and Systems (ISCAS)*, 2024.
* Rakesh Kumar Palani, Srishti Agrawal, Ayan Alam Khan and R. Nagulapalli, "A Wide Range Constant Transconductance Circuit Based on Negative Feedback for Analog Circuits," *IEEE International Symposium on Circuits and Systems (ISCAS)*, 2024.
* Rakesh Kumar Palani, R. Nagulapalli and Srikar Bhagavatula, "Dynamic Averager Based Sub-1V Bandgap Voltage Reference," *IEEE International Midwest Symposium on Circuits & Systems (MWSCAS)*, 2023.
* R. Nagulapalli and Rakesh Kumar Palani, "A 4.5X Noise Improved Split-Resistance Current Mode Bandgap with 18.4 ppm/°C in 28nm CMOS," *Irish Signals and Systems Conference (ISSC)*, Dublin, Ireland, 2023.
* Sweta Agarwal, S. Chatterjee and Rakesh Kumar Palani, "On Thermally-Induced Mechanical Stress in High Resistivity Polysilicon Resistors," *IEEE International Symposium on Circuits and Systems (ISCAS)*, 2023.
* R. Nagulapalli, Rakesh Kumar Palani, "A 22.7 ppm/°C Voltage Mode Sub-Bandgap Reference with Robust Start-Up Nature," *IEEE International Midwest Symposium on Circuits & Systems (MWSCAS)*, 2021.
* R. Nagulapalli, Rakesh Kumar Palani, "A 820mV Supply and 23.4 ppm/°C Current Mirror Assisted Bandgap Reference," *Irish Signals & Systems Conference*, 2021.
* R. Nagulapalli, Rakesh Kumar Palani, Sweta Agarwal, Shouri Chatterjee, K. Hayatleh, S. Barker, "A 15uW, 12 ppm/°C Curvature Compensated Bandgap in 0.85 V Supply," *IEEE International Symposium on Circuits and Systems (ISCAS)*, 2021.
* Ramesh Harjani and Rakesh Kumar Palani, "Design of PVT Tolerant Inverter Based Circuits for Low Supply Voltages," *(Invited)* *IEEE Custom Integrated Circuits Conference*, September 2015.
* Rakesh Kumar Palani and Ramesh Harjani, "A 4.6mW, 22dBm IIP3 All-MOSCAP Based 34–314 MHz Tunable Continuous Time Filter in 65nm," *IEEE Custom Integrated Circuits Conference*, September 2015.
* Hundo Shin, Rakesh Kumar Palani, Anindya Saha, Fang-Li Yuan, Dejan Markovic and Ramesh Harjani, "An Eight Channel Analog-FFT Based 450MS/s Hybrid Filter Bank ADC With Improved SNDR for Multi-Band Signals in 40nm", *IEEE Custom Integrated Circuits Conference*, September 2015.
* Fang-Li Yuan, Rakesh Kumar Palani, Sina Basir-Kazeruni, Hundo Shin, Anindya Saha, Ramesh Harjani and Dejan Markovic, "A Throughput-Agnostic 11.9–13.6 GOPS/mW Multi-Signal Classification SoC for Cognitive Radios in 40nm CMOS", *IEEE VLSI Circuits Symposium*, June 2015.
* Rakesh Kumar Palani and Ramesh Harjani, "High Linearity PVT Tolerant 100MS/s Rail-to-Rail ADC Driver with Built-in Sampler in 65nm CMOS", *IEEE Custom Integrated Circuits Conference*, September 2014.
* Rakesh Kumar Palani, Martin Sturm, and Ramesh Harjani, "A 1.56mW 50MHz 3rd-Order Filter with Current-Mode Active-RC Biquad and 33dBm IIP3 in 65nm CMOS", *IEEE Asian Solid-State Circuit Conference*, 2013.
* Rakesh Kumar Palani, Aravindan Rangarajan and Ramesh Harjani, "Chopper Stabilized Sub-1V Reference Voltage in 65nm CMOS", *IEEE International Midwest Symposium on Circuits and Systems*, 2015.
`,
`Speaker 3: Ankesh Jain, Associate Professor, IIT Delhi

Ankesh Jain (S’09–M’16) received his Ph.D. from IIT Madras, Chennai, India, in 2016, where he worked on the design and characterization of high-speed continuous-time delta–sigma converters. He is currently serving as an Associate Professor at IIT Delhi. Prior to this, he was a Postdoctoral Researcher at the University of Ulm, Germany. His current research interests include data-conversion, power converters, and phase-lock techniques. Dr. Jain was a co-recipient of the ISCAS 2013 Best Student Paper Award.

---

**Related Publications:**

* A. Abdelaal, M. Pietzko, J. Kauffman, A. Jain, M. Ortmanns, "DS Modulators Employing MASH DSM DAC-Based Dual Quantization," *IEEE Transactions on Circuits and Systems I: Regular Papers*
* P. Verma, S. Naval, D. Mallick, A. Jain, "Hybrid Piezoelectric-Triboelectric Biomechanical Harvesting System for Wearable Applications," *IEEE Transactions on Circuits and Systems II: Express Briefs*, Apr. 2024
* P. Verma et al., "System Architecture for Conditioning the Asymmetric and High Crest Output of Triboelectric Generators," *IEEE Sensors Letters*, Oct. 2023
* S. Naval et al., "Hybrid Vector and Pressure Sensor for Fingertip Dynamics Sensing," *Sensors and Actuators A: Physical*, June 2023
* S. Naval et al., "Multi-output AC/DC Triboelectric Generator with Dual Rectification," *Nano Energy*, Jan. 2023
* S. Naval, A. Jain, D. Mallick, "Direct Current Triboelectric Nanogenerators: A Review," *Journal of Micromechanics and Microengineering*, Dec. 2022
* L. Qi et al., "A 76.6dB-SNDR 50MHz-BW 29.2mW Multibit CT Sturdy MASH," *IEEE Journal of Solid-State Circuits*, Feb. 2020
* Y. Luo et al., "Input Referred Comparator Noise in SAR ADCs," *IEEE Transactions on Circuits and Systems II: Express Briefs*, May 2019
* L. Lv et al., "A 0.4-V Gm-C Proportional-Integrator-Based CTDSM," *IEEE Journal of Solid-State Circuits*, Nov. 2018
* A. Jain, S. Pavan, "CT Delta-Sigma Modulators with Time-Interleaved FIR Feedback," *IEEE Transactions on Circuits and Systems I: Regular Papers*, Feb. 2018
* A. Jain, S. Pavan, "Characterization Techniques for High-Speed Oversampled Data Converters," *IEEE Transactions on Circuits and Systems I: Regular Papers*, May 2014 (Invited)
* A. Jain, S. Pavan, "Design of a High-Speed CTDSM Using the Assisted Opamp Technique," *IEEE Journal of Solid-State Circuits*, Jul. 2012 (Invited)
* A. Shahane et al., "Graph of Circuits with GNN for Exploring the Optimal Design Space," *NeurIPS*, Dec. 2023
* S. Banerjee, A. Jain, "Modified Gm-Free Assisted Opamp in CTDSM," *IEEE APCCAS*, Nov. 2023
* D. Lawania et al., "Design and Characterization of an FMCW-Based Ultrasound System," *IEEE APSCON*, Jan. 2023
* S. Naval et al., "Flexible DC Triboelectric Generator with Conditioning Circuit," *PowerMEMS*, 2022 (Best Student Paper Finalist)
* A. Jain, "High-Speed CTDSM for Wide-Band Applications: A Review," *IEEE SoC Design Conference*, 2021
* J. Sharma et al., "Electrical Energy Injection using Hybrid SECE," *IEEE MWSCAS*, 2021
* M. Kundurthi et al., "System-Level Modeling of Hybrid Vibration Energy Harvesters," *IEEE ISCAS*, 2020
* J. Sharda et al., "Reduction of Weight-Decay in Analog Neural Networks," *Neuromorphic Systems Conference*, 2020
* M. Rajabzadeh et al., "Integrated Readout for Current Sensing Using CTDSM," *ESSCIRC*, 2019
* A. Jain et al., "Filtering of Requantization Error in Dual Quantized CTDSM," *IEEE ISCAS*, 2019
* L. Qi et al., "Noise-Coupling-Assisted CT Sturdy MASH DSM," *ISSCC*, Feb. 2019
* J. Chi et al., "Jitter Reduction in Bandpass CT SD Modulators," *ISCAS*, 2018
* A. Jain, M. Ortmanns, "Gain Mismatch Insensitive TI DAC for CTDSM," *ISCAS*, 2018
* T. Jain et al., "Deriving Concentrators from Binary Sorters," *ReConFig*, 2017
* T. Jain et al., "Non-blocking Interconnect Network on Chip," *NoCArc*, 2017
* A. Jain, S. Pavan, "A 13.3 mW 60 MHz BW 6 GS/s CTDSM," *IEEE VLSI Symposium*, 2016
* A. Jain, S. Pavan, "Student Research Preview (SRP-ISSCC)," *ISSCC*, Jan. 2016
* A. Jain, S. Pavan, "Duobinary Test Interface for CTDSM," *ISCAS*, 2013 (Best Student Paper Award)
* A. Jain, S. Pavan, "A 4mW 1 GS/s CTDSM with 15.6 MHz BW," *ESSCIRC*, Sep. 2011
`,
],
    basicStructure: `Here is the formatted version of the session details:

---

**There are a total of six sessions, with each session taking approximately 30 minutes.**

---

**1. ADC Performance Metrics**
*Presenter: R. S. Ashwin Kumar*

* Static non-linearity measurement for DC signals
* Need for frequency domain measurements for dynamic non-linearity
* Differentiating SQNR, SNR, SNDR (SINAD) & SFDR
* Need for DFT & refresher on spectral analysis
* How to choose the input frequency given the sampling frequency
* Need for windowing in practice and necessity of windowing in noise-shaping ADCs

---

**2. Measurement of DNL & INL**
*Presenter: Rakesh Kumar Palani*

* Using a ramp-based test to measure DNL & INL
* How to remove the DC offset & gain error before estimating DNL & INL
* Practical difficulties with ramp input-based measurement
* Need for sinusoidal histogram-based test setup
* Inverting the characteristics to measure the DNL & INL
* Missing codes & non-monotonicity
* When to look for DNL & when to look for INL

---

**3. Challenges in Testing Discrete-Time ADCs**
*Presenter: R. S. Ashwin Kumar*

* Need for clean sinusoidal signal generators
* Need for reference buffer and input buffer
* How to choose or design the right buffer
* Effect of noise on reference voltages, and need for LDOs
* Choosing the right passives for high-precision measurement
* Example measurement results

---

**4. Challenges in Testing High-Speed Continuous-Time ADCs**
*Presenter: Ankesh Jain*

* Effect of clock jitter; choosing the right clock source
* Using a cheap DAC for easier measurements
* Design of such DACs & discussion on common architectures for such DACs
* Duo-binary scheme for measurement of the high-speed ADCs
* Example measurement results

---

**5. Testing High-Speed Time-Interleaved ADCs**
*Presenter: Ankesh Jain*

* Need for time-interleaved ADCs
* Brief discussion on the effect of channel mismatches in offset, gain, and timing
* Understanding the impact of these mismatches on the output spectrum
* Digital calibration

---

**6. Testing of DACs**
*Presenter: Rakesh Kumar Palani*

* Measurement of DNL & INL for DAC
* Measuring SFDR
* Generation of high-speed sinusoidal digital signals
* Two-tone testing
* Characterization of DAC across the amplitude
* Design of high-speed DDFS
* RF DAC testing
* LDO requirement

---
`,

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

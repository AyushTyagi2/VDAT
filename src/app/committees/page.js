"use client";
import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Footer from "../footer/footer";
import Navbar from "../home/Navbar";

const committees = [
  {
    title: "Steering Committee Chair",
    members: [
      {
        name: "Dr.Satya Gupta",
        institute: "VLSI Society of India",
        linkedin:
          "https://www.linkedin.com/in/dr-satya-gupta-950787/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
        image: "./images/satya.jpg",
      },
    ],
  },
  {
    title: "Patrons",
    members: [
      {
        name: "Prof. Rajeev Ahuja",
        institute: "Director, IIT Ropar",
        linkedin: "https://www.linkedin.com/in/prof-rajeev-ahuja-6436b3335/?originalSubdomain=in",
        website: "https://www.iitrpr.ac.in/director",
        image: "./images/rajeev.jpeg",
      },
      {
        name: "Prof Laxmidhar Behera",
        institute: "Director, IIT Mandi",
        website: "https://iitmandi.ac.in/institute/director",
        image: "./images/laxmi.png",
      },
      {
        name: "Prof Rajesh Bhatia",
        institute: "Director, PEC Chandigarh",
        linkedin: "https://www.linkedin.com/in/rajesh-bhatia-ab5aa235/?originalSubdomain=in",
        website: "https://pec.ac.in/director",
        image: "./images/rajesh.jpg",
      },
      {
        name: "Dr Madhu Chitkara",
        institute: "Pro-Chancellor, Chitkara University",
        linkedin: "https://www.linkedin.com/in/dr-madhu-chitkara-97713b185/?originalSubdomain=in",
        website: "https://www.chitkara.edu.in/dr-madhu-chitkara/",
        image: "./images/madhu.jpg",
      },
      {
        name: "Prof. Manpreet Singh Manna",
        institute: "Vice Chancellor, Chandigarh University",
        linkedin: "https://www.linkedin.com/in/drmanna/",
        image: "./images/manpreet.jpg",
      },
    ],
  },
  {
    title: "General Chairs",
    members: [
      { 
        name: "Rohit Y Sharma", 
        institute: "IIT Ropar", 
        linkedin: "https://www.linkedin.com/in/rohit-sharma-9509b5197/?originalSubdomain=in", 
        website: "https://www.iitrpr.ac.in/ee/profile.faculty.php?mail=rohit%40iitrpr.ac.in",
        image: "./images/rohit.jpg"
      },
      { 
        name: "Neeraj Goel", 
        institute: "IIT Ropar", 
        linkedin: "https://www.linkedin.com/in/neerajgoel/?originalSubdomain=in", 
        website: "https://sites.google.com/view/neerajgoel",
        image: "./images/neeraj.jpg"
      }
    ]
  },
  {
    title: "Program Chair",
    members: [
      { name: "Hitesh Shrimali", institute: "IIT Mandi", linkedin: "https://www.linkedin.com/in/hitesh-shrimali-56183b19/?originalSubdomain=in", website: "https://faculty.iitmandi.ac.in/~hitesh/", image: "./images/hitesh.jpg" },
      { name: "Brajesh Rawat", institute: "IIT Ropar", linkedin: "https://www.linkedin.com/in/brajesh-rawat/?originalSubdomain=in", website: "https://www.iitrpr.ac.in/electrical/brajesh", image: "./images/brajesh.jpg" },
      { name: "Shivani Malhotra", institute: "Chitkara University", linkedin: "https://www.linkedin.com/in/shivani-malhotra-6349b659/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in", image: "./images/shivani.jpg" },
    ] 
  },
  {
    title: "Program Track Chair",
    members: [
      { name: "Shubham Sahay", institute: "IIT Kanpur (Track 1)", linkedin: "https://www.linkedin.com/in/shubham-sahay-b1580bb0/?originalSubdomain=in", website: "https://home.iitk.ac.in/~ssahay/", image: "./images/shubham.jpg" },
      { name: "Saravana", institute: "IIT Roorkee (Track 2)", linkedin: "https://www.linkedin.com/in/saravana-kumar-687a6875/?originalSubdomain=in", website: "https://ece.iitr.ac.in/webpages/saravana/", image: "./images/saravana.jpg" },
      { name: "Sneh Saurabh", institute: "IIIT Delhi (Track 3)", linkedin: "https://www.linkedin.com/in/snehsaurabh/?originalSubdomain=in", website: "https://iiitd.ac.in/sneh", image: "./images/sneh.jpg" },
      { name: "Amit Kumar", institute: "Chitkara University (Track 4)", linkedin: "https://www.linkedin.com/in/amit-kumar-34228b139/?originalSubdomain=in", image: "./images/amit.jpg" },
      { name: "Anupam Chattopadhyay", institute: "NTU Singapore (Track 4)", linkedin: "https://www.linkedin.com/in/anupamchattopadhyay/?originalSubdomain=sg", website: "https://dr.ntu.edu.sg/cris/rp/rp01076", image: "./images/anupam.jpg" },
      { name: "Jai Narayan Tripathi", institute: "IIT Jodhpur (Track 5)", linkedin: "https://www.linkedin.com/in/jai-narayan-tripathi-b189a88/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in", website: "http://home.iitj.ac.in/~jai/", image: "./images/jai.jpg" },
    ] 
  },
  {
    title: "Tutorial Chair",
    members: [
      { name: "TV Kalyan", institute: "IIT Ropar", linkedin: "https://www.linkedin.com/in/venkata-kalyan-t-29ab28a0/?originalSubdomain=in", website: "https://sites.google.com/view/kalyantv", image: "./images/tv.jpg" },
      { name: "Namrta", institute: "Aritrak Technologies", image: "./images/namrta.jpg" },
    ] 
  },
  {
    title: "Local Organising Chair",
    members: [
      { name: "Pradeep Duhan", institute: "IIT Ropar", linkedin: "https://www.linkedin.com/in/pardeep-duhan-64262b74/?originalSubdomain=in", website: "https://www.iitrpr.ac.in/electrical/pardeepduhan", image: "./images/pradeep.jpg" },
      { name: "Ruchika Gupta", institute: "Chandigarh University", linkedin: "https://www.linkedin.com/in/ruchika-gupta-55bbb764/?originalSubdomain=in", website: "https://sites.google.com/view/ruchikagupta/", image: "./images/ruchika.jpg" },
      { name: "Arun Singh", institute: "PEC Chandigarh", linkedin: "https://www.linkedin.com/in/arun-kumar-singh-a5627742/?originalSubdomain=in", website: "https://pec.ac.in/ece/faculty/arun-kumar-singh", image: "./images/arun.jpg" },
    ] 
  },
  {
    title: "Finance Chair",
    members: [{ name: "Mahendra Sakre", institute: "IIT Ropar" }],
  },
  {
    title: "Sponsorship Chair",
    members: [
      { name: "Alpana Agarwal", institute: "Thapar Institute", linkedin: "https://www.linkedin.com/in/alpana-agarwal-1542b118/?originalSubdomain=in", website: "https://www.thapar.edu/faculties/view/Dr.-Alpana-Agarwal/MTI5/MTU=", image: "./images/alpana.jpg" },
      { name: "Shonal Chouksey", institute: "IIIT Una", linkedin: "https://www.linkedin.com/in/shonal-chouksey-4a13568b/?originalSubdomain=in", website: "https://iiitu.ac.in/schools/soe/faculty/667b05e76914b0583f899e13", image: "./images/shonal.jpg" },
      { name: "Preet Yadav", institute: "NXP", linkedin: "https://www.linkedin.com/in/preet-yadav/?originalSubdomain=in", image: "./images/preet.jpg" }
    ] 
  },
  {
    title: "Fellowship Chair",
    members: [
      { name: "Ambika Shah", institute: "IIT Jammu", linkedin: "https://www.linkedin.com/in/ambika-prasad-shah-ba978a22/?originalSubdomain=in", website: "https://www.iitjammu.ac.in/faculty/~ambikaprasadshah", image: "./images/ambika.jpg" },
      { name: "Shruti Jain", institute: "JUIT, Solan, Himachal Pradesh", linkedin: "https://www.linkedin.com/in/dr-shruti-jain-92705b130/?originalSubdomain=in", website: "https://www.juit.ac.in/faculty.php?id=155&dep=ece&page=1&year1=2021", image: "./images/shruti.jpg" },
      { name: "Balwinder Singh", institute: "CDAC", linkedin: "https://www.linkedin.com/in/dr-balwinder-singh-80a1b316/?originalSubdomain=in", website: "http://www.acsd.ac.in/Faculty_Balwinder.aspx", image: "./images/balwinders.jpg" },
    ] 
  },
  {
    title: "Demo and Exhibit Chair",
    members: [
      { name: "Rajendra Pratap", institute: "HCL Tech", linkedin: "https://www.linkedin.com/in/rajendrapratap/", image: "./images/rajendra.jpg" },
      { name: "John Jose", institute: "IIT Guwahati", linkedin: "https://www.linkedin.com/in/john-jose-bb8431106/?originalSubdomain=in", website: "https://www.iitg.ac.in/johnjose/", image: "./images/john.jpg" },
      { name: "Mohd Asim Saeed", institute: "SCL, Mohali", linkedin: "https://www.linkedin.com/in/asim-saeed-49097579/?originalSubdomain=in", image: "./images/Asim.jpeg" },
    ] 
  },
  {
    title: "Web Development Team",
    members: [
      { name: "TV Kalyan", institute: "IIT Ropar", linkedin: "https://www.linkedin.com/in/venkata-kalyan-t-29ab28a0/?originalSubdomain=in", website: "https://sites.google.com/view/kalyantv", image: "./images/tv.jpg" },
      { name: "Nishant Sahni", institute: "IIT Ropar", linkedin: "https://www.linkedin.com/in/nishant-sahni-a7b01130a/?originalSubdomain=in", image: "./images/nishant.jpg" },
      { name: "Aryan Singh", institute: "IIT Ropar", linkedin: "https://www.linkedin.com/in/aryan-singh-824329287/", image: "./images/aryan.jpg" },
      { name: "Ayush Tyagi", institute: "IIT Ropar", linkedin: "https://www.linkedin.com/in/ayush-tyagi-37154b2a4/?originalSubdomain=in", image: "./images/ayush.jpg" },
    ] 
  },
  {
    title: "Startup Chair",
    members: [{ name: "Gaganpreet Kaur", institute: "Thapar University", image: "./images/gaganpreet.jpg" }],
  },
  { 
    title: "PhD Forum Chair", 
    members: [{ name: "Debiprasanna Sahu", institute: "IIT Bhubaneswar", linkedin: "https://old.iitbbs.ac.in/profile.php/%20dpsahoo/", image: "./images/debiprasanna.png" }] 
  },
  {
    title: "Publication Chair",
    members: [
      { name: "Balwinder Raj", institute: "NIT Jalandhar", linkedin: "https://www.linkedin.com/in/balwinderraj/?originalSubdomain=in", website: "https://departments.nitj.ac.in/dept/ece/Faculty/6430445538bff038a7805bcd", image: "./images/balwinder.jpg" },
      { name: "Sivanantham", institute: "VIT Vellore", linkedin: "https://www.linkedin.com/in/vlsisiva/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in", image: "./images/sivanantham.jpg" },
    ] 
  },
  {
    title: "Publicity and Outreach Chair",
    members: [
      { name: "Sagar Juneja", institute: "Chitkara University", linkedin: "https://www.linkedin.com/in/sagar-juneja/", website: "https://curin.chitkara.edu.in/profile/sagar-juneja/", image: "./images/sagar.jpg" },
      { name: "Gaurav Saini", institute: "NIT Kurukshetra", linkedin: "https://www.linkedin.com/in/dr-gaurav-saini-8a09ab18/?originalSubdomain=in", website: "https://nitkkr.ac.in/author/gaurav-saini/", image: "./images/gaurav.jpg" },
      { name: "Gargi Khanna", institute: "NIT Hamirpur", linkedin: "https://www.linkedin.com/in/gargi-khanna-9605078/?originalSubdomain=in", image: "./images/gargi.jpg" },
      { name: "Navneet Sehgal", institute: "Chandigarh University", linkedin: "https://www.linkedin.com/in/dr-navneet-sehgal-b090389b/?originalSubdomain=in", image: "./images/navneet.jpg" },
    ] 
  },
  { 
    title: "Registration Chair", 
    members: [{ name: "Somesh Kumar", institute: "IIITM Gwalior", linkedin: "https://www.linkedin.com/in/dr-somesh-kumar-dahiya-b551a836/?originalSubdomain=in", website: "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.Somesh", image: "./images/somesh.jpg " },
      { name: "Sharda Vashisth", institute: "The NorthCap University, Gurugoan", linkedin: "https://www.linkedin.com/in/dr-sharda-vashisth-23a25021/", image: "./images/sharda.jpg" }
    ] 
  },
  {
    title: "Advisory Committee",
    members: [
      {
        name: "Sudeb Das Gupta",
        institute: "IIT Roorkee",
        linkedin:
          "https://www.linkedin.com/in/sudeb-dasgupta-2b19b64/?originalSubdomain=in",
        website: "https://ece.iitr.ac.in/sudeb-das-gupta/",
        image: "./images/sudeb.jpg",
      },
      {
        name: "M Balakrishnan",
        institute: "IIT Delhi",
        linkedin:
          "https://www.linkedin.com/in/m-balakrishnan-b3467924/?originalSubdomain=in",
        website: "https://www.cse.iitd.ernet.in/~mbala/",
        image: "./images/MBala.jpg",
      },
      {
        name: "R.K Sharma",
        institute: "NIT Kururkshetra",
        linkedin:
          "https://www.linkedin.com/in/r-k-sharma-21b3792a/?originalSubdomain=in",
        website: "https://nitkkr.ac.in/author/r-k-sharma/",
        image: "./images/rk.jpg",
      },
      {
        name: "Vineet Sahula",
        institute: "MNIT Jaipur",
        linkedin: "https://www.linkedin.com/in/vineet07/?originalSubdomain=in",
        website: "https://mnit.ac.in/dept_ece/profile?fid=Q6w=",
        image: "./images/vineet.jpg",
      },
      {
        name: "Chitra Hariharan",
        institute: "Renesas",
        linkedin:
          "https://www.linkedin.com/in/chitra-hariharan-3a52691/?originalSubdomain=in",
        image: "./images/chitra.jpg",
      },
      {
        name: "RAJNISH SHARMA",
        institute: "Chitkara University",
        linkedin: "https://www.linkedin.com/in/rajnish-sharma-39948719/",
        image: "./images/rajnish.jpg",
      },
      {
        name: "Yajvender Pal Verma",
        institute: " UIET Panjab University Chandigarh",
        linkedin: "https://www.linkedin.com/in/yajvender-pal-verma-042a5193/?originalSubdomain=in",
        image: "./images/pal.jpg",
      },
    ],
  },
];

const CommitteeCard = ({ title, members }) => {
  return (
    <div className="w-full bg-white text-center my-8">
      <h2 className="text-4xl font-extrabold text-purple-700 mb-8">{title}</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {members.map((member, index) => (
          <div key={index} className="relative group w-48">
            <div className="relative">
              <img
                src={member.image || "/default-avatar.png"}
                alt={member.name}
                className="w-48 h-48 rounded-full border-4 border-purple-300 shadow-xl transition-transform duration-300 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                <div className="flex gap-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-600 p-3 rounded-full text-white transition-all hover:bg-purple-800"
                    >
                      🔗
                    </a>
                  )}
                  {member.website && (
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-600 p-3 rounded-full text-white transition-all hover:bg-purple-800"
                    >
                      🌐
                    </a>
                  )}
                </div>
              </div>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-purple-900">
              {member.name}
            </h3>
            <p className="text-sm text-blue-600 font-semibold">
              {member.institute}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function CommitteePage() {
  // Using the index as the active tab state
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-black">
        <Navbar />
      </div>
      <header
        className="text-center bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-40 relative"
        style={{
          backgroundImage: "url('/images/iit-ropar-5.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black bg-opacity-50 py-16 rounded-lg">
          <h1 className="sub text-5xl font-extrabold tracking-wide uppercase">
            Committees
          </h1>
        </div>
      </header>

      {/* MUI Scrollable Tabs */}
      <Box sx={{ bgcolor: "background.paper", margin: "auto" }}>
        <Tabs
          value={value}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#8024cc", // your desired color
            },
            "& .MuiTabScrollButton-root": {
              color: "black", // set arrow color here
            },
          }}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs for committees"
        >
          {committees.map((committee, index) => (
            <Tab
              sx={{
                color: "grey",
                "&.Mui-selected": {
                  color: "#8024cc",
                },
              }}
              key={committee.title}
              label={committee.title}
            />
          ))}
        </Tabs>
      </Box>

      {/* Render the selected committee */}
      {committees
        .filter((_, index) => index === value)
        .map((committee) => (
          <CommitteeCard key={committee.title} {...committee} />
        ))}

      <Footer />
    </div>
  );
}

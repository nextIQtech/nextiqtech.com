import React, { useEffect } from "react";
import { scroller } from "react-scroll";
import { useScrollContext } from "../context/scrollContext";
import '../App.css';
import Navbar from '../components/Navbar';
import { Grid, Typography, Box } from '@mui/material';
import { ArrowOutward } from '@mui/icons-material';
import ImageSlider from '../components/SliderSection';
import SoftwareCompanyCards from '../components/CardSection';
import ContactSection from '../components/Contact';
import Footer from '../components/Footer';
import AnimatedBowl from '../components/AnimatedBowl';

function Home() {

    const { targetSection, setTargetSection } = useScrollContext();

  useEffect(() => {
    if (targetSection) {
      scroller.scrollTo(targetSection, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
      setTargetSection(""); // Reset after scrolling
    }
  }, [targetSection, setTargetSection]);


  const services = [
    {
      title: "OUR PRODUCTS",
      description: "Crafting unique and memorable brand identities",
    },
    {
      title: "WEB & MOBILE DESIGN",
      description: "Next-gen web and mobile designs",
    },
    {
      title: "UI/UX INTERFACES",
      description: "Sleek and user-friendly interfaces",
    },
  ];

  return (
    <div className="App">
          <Navbar />
    <section className="rounded-lg bg-white p-4">

  <div
    className="relative w-full bg-no-repeat"
  >
    <AnimatedBowl />
    
    <div className="text-right md:pt-64 pt-10">
      {/* Reach Out Section */}
      <p className="text-[#7832F3] flex justify-end uppercase text-sm sm:text-base lg:text-lg">
        reach out <ArrowOutward />
      </p>

      {/* Main Heading */}
      <h1 className="uppercase font-medium text-gray-800 text-[3rem] sm:text-[5rem] lg:text-[9.375rem] leading-[3rem] sm:leading-[5rem] lg:leading-[8.5rem]">
        limitless<br />
        technology<br />
        solutions
      </h1>
    </div>
  </div>
</section>


      {/* bottom two */}

      <section className="mx-auto py-5" id="services">
      {/* Main Flex Container */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1 flex flex-col bg-white rounded-lg items-center md:items-start">
          <h1 className="text-3xl p-4 w-full font-medium mb-4 text-center md:text-right">
            EXPLORE OUR <br/>SERVICES
          </h1>
          <img
            src="next-iq/images/computer-img.svg"
            alt="Services Illustration"
            className="w-full max-w-sm"
          />
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-4 border card-hover rounded-lg shadow-sm bg-white  transition-all duration-300"
            >
              <h2 className="text-2xl uppercase text-left font-medium">{service.title}</h2>
              <div className="flex justify-end align-middle">
              <p className="text-sm uppercase">{service.description}</p>
              <div className="mt-2 text-right" >
                <a
                  href="/"
                  className="font-bold text-sm hover-content"
                >
                 <ArrowOutward/>
                </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
       
       {/* slider section */}
     <section className="bg-black rounded-lg mt-2 p-6 ">
     <h1 className="md:text-[7rem] text-3xl lg:leading-[8rem] sm:leading-[5rem] leading-normal uppercase text-left md:max-w-[70%] max-w-[100%] font-medium text-white">Transform your business with Next-gen software.</h1>
     <div className="text-right w-full relative h-[150px]">
      <p className="text-white absolute right-0 bottom-0 uppercase text-lg md:max-w-[33%] max-w-[100%]">
        Here’s a glimpse of the products and solutions we provide. We specialize in crafting tailored solutions to simplify and enhance everyday business operations.
        </p>
      </div>
      <ImageSlider/>
    </section>

    {/* Card section of About us */}
    <section className="about-section mb-8">
      <div className="bg-white rounded-lg p-4 mt-8 mb-4">
        <Grid container spacing={4} className="py-12">
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography className="text-left max-w-[65%] uppercase">
                A software company dedicated to pioneering innovative, streamlined solutions for everyday business needs. We deliver creative, minimalist, and highly efficient tools that empower companies to thrive.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box className="text-right">
              <Typography variant="h4" gutterBottom className="uppercase text-2xl text-right">
              ABOUT US
              </Typography>
              <img src="next-iq/images/pageicon.png" alt="page icon" className="float-right"/>
            </Box>
          </Grid>
        </Grid>
      </div>
      <SoftwareCompanyCards />
    </section>

    {/* Contact section */}

    <section className="bg-white rounded-lg mt-5 grid">
      <ContactSection/>
      <Footer/>
    </section>
    </div>
  );
}

export default Home;

// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import TermsAndConditions from './pages/TermsAndConditions';
// import PrivacyPolicy from './pages/PrivacyPolicy';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
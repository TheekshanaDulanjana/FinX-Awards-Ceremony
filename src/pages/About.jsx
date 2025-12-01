import React from "react";
import AboutBanner from "../assets/AboutBanner.jpg";

const AboutUs = () => {
  return (
    <div
      className="w-full px-6 py-12"
      style={{ backgroundColor: "#080B1F", color: "white" }}
    >
      {/* About Us Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl  mt-20 md:text-3xl font-alatsi mb-4" style={{ color: "#E29D42" }}>
          About Us
        </h2>
        <p className="text-white font-alata md:text-2xl mb-8">
          We are at the intersection of finance and technology. <br />
          We empower the Fintech community through high-impact <br /> events and authoritative content.
        </p>

        {/* Vision & Mission */}
        <div className="flex flex-col md:flex-row  mb-12">
          <div
            className="flex-1 p-6 text-[#080B1F] rounded-l-md "
            style={{ backgroundColor: "#E29D42" }}
          >
            <h3 className="font-alatsi text-2xl text-center mb-2">Our Vision</h3>
            <p className="text-[#080B1F] text-center font-alata">
              To become the global benchmark for recognizing excellence in <br />fintech and digital finance.
            </p>
          </div>
          <div
            className="flex-1 p-6 border rounded-r-md"
            style={{ borderColor: "#E29D42" }}
          >
            <h3 className="font-alatsi text-2xl text-center mb-2" style={{ color: "#E29D42" }}>
              Our Mission
            </h3>
            <p className="text-[#E29D42] text-center font-alata">
              To empower individuals and institutions through recognition, collaboration, and industry-defining thought leadership.
            </p>
          </div>
        </div>

        {/* Banner & Event */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Image */}
          <div className="md:w-1/2">
            <img src={AboutBanner} alt="Event Banner" className="rounded-md w-full" />
          </div>

          {/* Event Details */}
          <div className="md:w-1/2 text-white">
            <h3 className="text-2xl md:text-3xl font-alatsi mb-4" style={{ color: "#E29D42" }}>
              Flagship Event – FinX Awards Ceremony
            </h3>
            <p className="mb-4 font-alata">
              The FinX Awards Ceremony is our signature annual event designed to celebrate excellence in crypto trading, blockchain innovation, and fintech advancement.
            </p>
            <p className="mb-4 font-alata">
              This prestigious gathering brings together:
            </p>
            <ul className="list-disc list-inside mb-4 font-alata">
              <li>Leading trading firms</li>
              <li>Outstanding individual traders</li>
              <li>Technological innovators</li>
              <li>Industry-shaping fintech companies</li>
              <li>Visionary leaders</li>
            </ul>
            <p className="font-alata">
              Together, we honor the achievements that elevate the entire financial technology ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
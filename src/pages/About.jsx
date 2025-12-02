import React from "react";
import AboutBanner from "../assets/AboutBanner.jpg";

const AboutUs = () => {
  return (
    <div
      className="w-full px-4 md:px-6 py-12"
      style={{ backgroundColor: "#080B1F", color: "white" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* About Us */}
        <h2
          className="text-2xl md:text-4xl font-alatsi mt-16 md:mt-20 mb-4"
          style={{ color: "#E29D42" }}
        >
          About Us
        </h2>

        <p className="text-white font-alata text-lg md:text-2xl leading-relaxed mb-10">
          We are at the intersection of finance and technology. <br />
          We empower the Fintech community through high-impact events
          and authoritative content.
        </p>

        {/* Vision & Mission */}
        <div className="flex flex-col md:flex-row mb-12">
          {/* Vision */}
          <div
            className="flex-1 p-6 rounded-t-md md:rounded-l-md md:rounded-tr-none"
            style={{ backgroundColor: "#E29D42", color: "#080B1F" }}
          >
            <h3 className="font-alatsi text-xl md:text-2xl text-center mb-3">
              Our Vision
            </h3>
            <p className="font-alata text-center leading-relaxed">
              To become the global benchmark for recognizing excellence in
              fintech and digital finance.
            </p>
          </div>

          {/* Mission */}
          <div
            className="flex-1 p-6 border rounded-b-md md:rounded-r-md md:rounded-bl-none"
            style={{ borderColor: "#E29D42" }}
          >
            <h3
              className="font-alatsi text-xl md:text-2xl text-center mb-3"
              style={{ color: "#E29D42" }}
            >
              Our Mission
            </h3>
            <p className="font-alata text-center leading-relaxed" style={{ color: "#E29D42" }}>
              To empower individuals and institutions through recognition,
              collaboration, and industry-defining thought leadership.
            </p>
          </div>
        </div>

        {/* Banner + Event */}
        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={AboutBanner}
              alt="Event Banner"
              className="rounded-md w-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="w-full md:w-1/2 text-white">
            <h3
              className="text-2xl md:text-3xl font-alatsi mb-4"
              style={{ color: "#E29D42" }}
            >
              Flagship Event – FinX Awards Ceremony
            </h3>

            <p className="font-alata leading-relaxed mb-4">
              The FinX Awards Ceremony is our signature annual event designed to
              celebrate excellence in crypto trading, blockchain innovation, and
              fintech advancement.
            </p>

            <p className="font-alata leading-relaxed mb-2">
              This prestigious gathering brings together:
            </p>

            <ul className="list-disc list-inside font-alata space-y-1 mb-4">
              <li>Leading trading firms</li>
              <li>Outstanding individual traders</li>
              <li>Technological innovators</li>
              <li>Industry-shaping fintech companies</li>
              <li>Visionary leaders</li>
            </ul>

            <p className="font-alata leading-relaxed">
              Together, we honor the achievements that elevate the entire
              financial technology ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

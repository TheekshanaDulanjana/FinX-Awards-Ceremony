import React from "react";
import CityWatermark from "../assets/CityWatermark.png";
import LocationImg from "../assets/Location.jpg";
import TimeImg from "../assets/Time.jpg";
import DateImg from "../assets/Date.jpg";
import PassImg from "../assets/Pass.jpg";

const EventDetails = () => {
  return (
    <div
      className="w-full py-12 px-4 md:px-6"
      style={{ backgroundColor: "#080B1F", color: "white" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className="text-2xl md:mt-20 md:text-3xl font-alatsi mb-4"
          style={{ color: "#E29D42" }}
        >
          Event Details
        </h2>

        <p className="text-white font-alata text-base md:text-xl leading-relaxed mb-10">
          The FinX Awards Ceremony is a premium, invite-only event featuring
          industry thought leaders, innovators, and top-performing traders.
          Expect networking opportunities, keynote sessions, and a night
          dedicated to honoring excellence.
        </p>

        {/* Details Cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 ">
          {[
            {
              img: LocationImg,
              label: "Location",
              title: "Lotus Tower",
              sub: "Colombo, Sri Lanka",
            },
            {
              img: DateImg,
              label: "Date",
              title: "27th January",
              sub: "2026",
            },
            {
              img: TimeImg,
              label: "Time",
              title: "06.00 PM",
              sub: "Onwards",
            },
            {
              img: PassImg,
              label: "Pass",
              title: "200+",
              sub: "Limited Pass",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="p-4 text-left text-white rounded-xl border relative flex flex-col justify-end 
              h-50 w-41 sm:h-72 sm:w-56 bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: `url(${card.img})` }}
            >
              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, #080B1F, transparent)",
                }}
              ></div>

              {/* Text */}
              <div className="relative z-10">
                <p className="font-alata">{card.label}</p>
                <h3 className="font-alatsi text-xl md:text-2xl mt-2 uppercase">
                  {card.title}
                </h3>
                <p className="font-alata text-sm ">{card.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        {/* <div className="absolute flex flex-row sm:flex-row gap-4 mt-12 ">
          <button className="w-[165px] md:w-[170px] h-[48px] bg-white text-[#080B1F] font-alata px-5 py-2 text-sm md:text-base rounded-md border border-white hover:bg-transparent hover:text-white transition cursor-pointer">
            Get Event Pass
          </button>

          <button className="w-[165px] md:w-[170px] h-[48px] border border-white text-white font-alata px-5 py-2 text-sm md:text-base rounded-md hover:bg-white hover:text-[#080B1F] transition cursor-pointer">
            Become a Partner
          </button>
        </div> */}

        {/* Watermark */}
        <div className="md:mt  mt-8">
          <img
            src={CityWatermark}
            alt="City Watermark"
            className="w-full opacity-15 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

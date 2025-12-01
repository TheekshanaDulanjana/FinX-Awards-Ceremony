import React from "react";
import CityWatermark from "../assets/CityWatermark.png";
import LocationImg from "../assets/Location.jpg";
import TimeImg from "../assets/Time.jpg";
import DateImg from "../assets/Date.jpg";
import PassImg from "../assets/Pass.jpg";

const EventDetails = () => {
  return (
    <div
      className="w-full  py-12 "
      style={{ backgroundColor: "#080B1F", color: "white" }}
    >
      {/* Event Details Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl mt-20 md:text-3xl font-alatsi mb-4" style={{ color: "#E29D42" }}>
          Event Details
        </h2>
        <p className="text-white font-alata md:text-xl mb-8">
         The FinX Awards Ceremony is a premium, invite-only event featuring industry <br />thought leaders, innovators, and top-performing traders. <br />
         Expect networking opportunities, keynote sessions, and a night dedicated to honoring excellence.
</p>



        {/* Details Cards*/}
        <div className="flex flex-col md:flex-row gap-4 h-56 w-4xl">

          <div
            className="flex-1 p-4 text-left text-white rounded-xl border relative flex flex-col justify-end h-64 bg-cover bg-center overflow-hidden"
            style={{
              backgroundImage: `url(${LocationImg})`,
            }} >

            {/* Overlay */}
            <div className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, #080B1F, transparent)",
              }}
            ></div>

            {/* Text */}
            <div className="relative z-10">
              <p className="font-alata">Location</p>
              <h3 className="font-alatsi text-2xl mt-2 uppercase">Lotus Tower</h3>
              <p className="font-alata">Colombo, Sri Lanka</p>
            </div>
          </div>

          <div
            className="flex-1 p-4 text-left text-white rounded-xl border relative flex flex-col justify-end h-64 bg-cover bg-center overflow-hidden"
            style={{
              backgroundImage: `url(${DateImg})`,
            }} >

            {/* Overlay */}
            <div className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, #080B1F, transparent)",
              }}
            ></div>

            {/* Text */}
            <div className="relative z-10">
              <p className="font-alata">Date</p>
              <h3 className="font-alatsi text-2xl mt-2 uppercase">27th January</h3>
              <p className="font-alata">2026</p>
            </div>
          </div>

          <div
            className="flex-1 p-4 text-left text-white rounded-xl border relative flex flex-col justify-end h-64 bg-cover bg-center overflow-hidden"
            style={{
              backgroundImage: `url(${TimeImg})`,
            }} >

            {/* Overlay */}
            <div className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, #080B1F, transparent)",
              }}
            ></div>

            {/* Text */}
            <div className="relative z-10">
              <p className="font-alata">Time</p>
              <h3 className="font-alatsi text-2xl mt-2 uppercase">06.00 PM</h3>
              <p className="font-alata">Onwards</p>
            </div>
          </div>

          <div
            className="flex-1 p-4 text-left text-white rounded-xl border relative flex flex-col justify-end h-64 bg-cover bg-center overflow-hidden"
            style={{
              backgroundImage: `url(${PassImg})`,
            }} >

            {/* Overlay */}
            <div className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, #080B1F, transparent)",
              }}
            ></div>

            {/* Text */}
            <div className="relative z-10">
              <p className="font-alata">Pass</p>
              <h3 className="font-alatsi text-2xl mt-2 uppercase">200+</h3>
              <p className="font-alata">Limited Pass</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-16  relative">
          <button className="bg-white text-black font-alata px-4 py-2 rounded-md hover:bg-transparent hover:text-white hover:border-white cursor-pointer border transition">
            Get Event Pass
          </button>

          <button className="border border-white text-white font-alata px-4 py-2 rounded-md hover:bg-white hover:text-black cursor-pointer transition">
            Become a Partner
          </button>
        </div>


        {/* Banner & Event */}
         <img src={CityWatermark} alt="CityWatermark" className="w-screen -mt-100 opacity-20" />
      
        </div>
        </div>
  );
};

export default EventDetails;
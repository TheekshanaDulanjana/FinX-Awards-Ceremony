import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import HomeBg from "../assets/home.png";
import HomeVideo from "../assets/home.mp4";

const HeroSection = () => {

  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2026-01-26T23:59:00"); 

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0");
      const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0");
      const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* <section
        className="relative flex w-full max-h-screen max-w-screen min-h-screen md:h-[700px] flex-col items-center justify-center text-center px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HomeBg})`,
        }}
      > */}

      <section className="relative flex w-full max-h-screen max-w-screen min-h-screen md:h-[700px] flex-col items-center justify-center text-center px-4">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={HomeVideo}
          autoPlay
          loop
          muted
        ></video>



        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#080B1F]/60 to-transparent"></div>


        {/* Content */}
        <div className="relative z-10 flex flex-col items-left">

          <h1 className="text-xl text-left sm:text-3xl md:text-6xl mt-10 font-alatsi text-[#E29D42] leading-tight">
            Celebrating Excellence in <br />
            Forex & Fintech Innovation!
          </h1>

          <p className="text-white text-left font-alata text-base sm:text-lg md:text-xl max-w-3xl mt-4">
            Where visionary traders, pioneering firms, and emerging leaders are honored <br />
            for shaping the future of digital finance.
          </p>

          <div className="flex gap-4 mt-6">
            <button className="bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-transparent hover:text-white hover:border cursor-pointer hover:border-white transition">
              Nominate Now
            </button>

            <button
              onClick={() => navigate("/allaward")}
              className="border border-white text-white font-semibold px-6 py-2 rounded-md hover:bg-white cursor-pointer hover:text-black transition"
            >
              Explore Awards
            </button>
          </div>

          {/* Countdown Timer */}
          <div className="flex gap-4 mt-8 text-white font-alata">
            <div className="flex flex-col items-center">
              <span className="w-16 h-16 flex items-center justify-center text-2xl border rounded-md bg-black/20">
                {timeLeft.days}
              </span>
              <span className="text-xs mt-1 tracking-widest">DAYS</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="w-16 h-16 flex items-center justify-center text-2xl border rounded-md bg-black/20">
                {timeLeft.hours}
              </span>
              <span className="text-xs mt-1 tracking-widest">HOURS</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="w-16 h-16 flex items-center justify-center text-2xl border rounded-md bg-black/20">
                {timeLeft.minutes}
              </span>
              <span className="text-xs mt-1 tracking-widest">MINUTES</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="w-16 h-16 flex items-center justify-center text-2xl border rounded-md bg-black/20">
                {timeLeft.seconds}
              </span>
              <span className="text-xs mt-1 tracking-widest">SECONDS</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default HeroSection;

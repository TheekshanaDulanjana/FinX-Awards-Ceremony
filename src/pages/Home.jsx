import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HomeVideo from "../assets/home.mp4";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // Countdown Timer
  useEffect(() => {
    const targetDate = new Date("2026-01-26T23:59:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = String(
        Math.floor(difference / (1000 * 60 * 60 * 24))
      ).padStart(2, "0");
      const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0"
      );
      const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
        2,
        "0"
      );
      const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Scroll to hash section if URL has hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const section = document.getElementById(id);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="overflow-x-hidden">
      <section className="relative flex w-full min-h-screen md:h-[700px] items-center justify-center text-center px-4">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={HomeVideo}
          autoPlay
          loop
          muted
        ></video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#080B1F]/60 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start max-w-4xl w-full mt-20 sm:mt-28 px-2">
          <h1 className="text-left text-xl sm:text-3xl md:text-6xl font-alatsi text-[#E29D42] leading-tight">
            Celebrating Excellence in <br />
            Forex & Fintech Innovation!
          </h1>

          <p className="text-white text-left font-alata text-sm sm:text-lg md:text-xl mt-4 max-w-3xl">
            Where visionary traders, pioneering firms, and emerging leaders are honored <br />
            for shaping the future of digital finance.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button
              onClick={() => navigate("/nomination")}
              className="bg-white text-[#080B1F] cursor-pointer font-semibold px-6 py-2 rounded-md hover:bg-transparent hover:text-white hover:border hover:border-white transition"
            >
              Nominate Now
            </button>

            <button
              onClick={() => navigate("/allaward")}
              className="border border-white text-white cursor-pointer font-semibold px-6 py-2 rounded-md hover:bg-white hover:text-[#080B1F] transition"
            >
              Explore Awards
            </button>
          </div>

          {/* Countdown */}
          <div className="flex flex-wrap gap-4 mt-8 text-white font-alata">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINUTES", value: timeLeft.minutes },
              { label: "SECONDS", value: timeLeft.seconds },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="w-14 h-14 sm:w-15 sm:h-15 flex items-center justify-center text-xl sm:text-2xl border rounded-md backdrop-blur-xs bg-[#080B1F]/40">
                  {item.value}
                </span>
                <span className="text-xs mt-1 tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

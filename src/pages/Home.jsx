import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HomeVideo from "../assets/home.mp4";
import FallbackImg from "../assets/fallback.png";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [videoLoaded, setVideoLoaded] = useState(false);

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

      const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0");
      const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0");
      const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Scroll to hash section
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

        {/* Fallback Image */}
        <motion.img
          src={FallbackImg}
          alt="Hero Fallback"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 1 }}
          animate={{ opacity: videoLoaded ? 0 : 1 }}
          transition={{ duration: 1 }}
        />

        {/* Background Video */}
        <motion.video
          className="absolute inset-0 w-full h-full object-cover"
          src={HomeVideo}
          autoPlay
          loop
          muted
          playsInline
          onCanPlayThrough={() => setVideoLoaded(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: videoLoaded ? 1 : 0 }}
          transition={{ duration: 1.2 }}
        ></motion.video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#080B1F]/60 to-transparent"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 flex flex-col items-start max-w-4xl w-full sm:mt-28 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Heading */}
          <motion.h1
            className="text-left text-3xl sm:text-3xl md:text-6xl font-alatsi text-[#E29D42] leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Celebrating Excellence in <br />
            Forex & Fintech Innovation!
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-white text-left font-alata text-sm sm:text-lg md:text-xl mt-4 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Where visionary traders, pioneering firms, and emerging leaders are honored <br />
            for shaping the future of digital finance.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <button
              onClick={() => navigate("/nomination")}
              className="w-[150px] h-12 bg-white text-[#080B1F] cursor-pointer font-semibold rounded-md hover:bg-transparent hover:text-white hover:border hover:border-white transition"
            >
              Nominate Now
            </button>

            <button
              onClick={() => navigate("/allaward")}
              className="w-[150px] h-12 border border-white text-white cursor-pointer font-semibold rounded-md hover:bg-white hover:text-[#080B1F] transition"
            >
              Explore Awards
            </button>
          </motion.div>

          {/* Countdown */}
          <motion.div
            className="flex flex-wrap gap-4 mt-8 text-white font-alata"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delay: 1, staggerChildren: 0.15 },
              },
            }}
          >
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINUTES", value: timeLeft.minutes },
              { label: "SECONDS", value: timeLeft.seconds },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="w-14 h-14 sm:w-15 sm:h-15 flex items-center justify-center text-xl sm:text-2xl border rounded-md backdrop-blur-xs bg-[#080B1F]/40">
                  {item.value}
                </span>
                <span className="text-xs mt-1 tracking-widest">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </section>
    </div>
  );
};

export default Home;

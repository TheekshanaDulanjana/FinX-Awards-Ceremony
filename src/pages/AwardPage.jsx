import React from "react";

import AwardCategory1 from "../components/AwardCategory1";
import AwardCategory2 from "../components/AwardCategory2";
import AwardCategory3 from "../components/AwardCategory3";

const AwardPage = () => {
  return (
    <div
      className="w-full  py-12 "
      style={{ backgroundColor: "#080B1F", color: "white" }}
    >
      {/* Awards & Recognitions Section */}
        <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl mt-20 md:text-3xl font-alatsi mb-4" style={{ color: "#E29D42" }}>
                Awards & Recognitions
            </h2>
                <p className="text-white font-alata md:text-xl mb-8">
                Our awards honor traders who demonstrate exceptional talent, innovation,
                and dedication in the fast-paced world of finance. From strategic brilliance
                to consistent performance, these recognitions highlight those who set new
                standards in trading.
                <br />
                <br />Beyond individual success, we celebrate those who inspire the community,
                lead with vision, and contribute to shaping a smarter, more dynamic financial
                ecosystem. These awards recognize not just achievements, but the passion and impact
                that drive the trading world forward..</p>
                <div className="border-t border-gray-700 pt-10"></div>
        </div>
            <div className="max-w-6xl mx-auto">
                <h2 className="text-xl  md:text-2xl font-alatsi mb-4" style={{ color: "#E29D42" }}>
                    Category 01: Trading Excellence
                </h2>
                    <p className="text-white font-alata md:text-lg mb-8">
                    Recognizing the leaders in trading performance and skill.</p>
                    <AwardCategory1 />
            </div>

            <div className="max-w-6xl mx-auto mt-16">
                <h2 className="text-xl  md:text-2xl font-alatsi mb-4" style={{ color: "#E29D42" }}>
                    Category 02: Innovation & Strategy
                </h2>
                    <p className="text-white font-alata md:text-lg mb-8">
                    For traders and firms pushing the boundaries of finance and strategy.</p>
                    <AwardCategory2 />
            </div>

            <div className="max-w-6xl mx-auto mt-16">
                <h2 className="text-xl  md:text-2xl font-alatsi mb-4" style={{ color: "#E29D42" }}>
                    Category 01: Trading Excellence
                </h2>
                    <p className="text-white font-alata md:text-lg mb-8">
                    Highlighting influence, mentorship, and market contribution.</p>
                    <AwardCategory3 />
            </div>

            <div className="max-w-6xl mx-auto mt-16">
                <div className="border-t border-gray-700 pt-10"></div>
               <p className="text-white font-alata md:text-lg mb-8">
                   Every award reflects not just numbers, but vision, 
                   discipline, and inspiration. These achievers are setting 
                   benchmarks and leading the way for the next generation of 
                   traders.</p>
            </div>

    </div>
  );
};

export default AwardPage;
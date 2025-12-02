import React, { useState } from "react";
import award01 from "../assets/award01.png";
import award02 from "../assets/award02.png";
import award03 from "../assets/award03.png";
import titleLeft from "../assets/tittle_left.png";
import titleRight from "../assets/tittle_right.png";

const awards = [
  {
    awardImg: award01,
    title: "Award Category 03",
    description: "Honoring exceptional performance, innovation, and market impact."
  },
  {
    awardImg: award02,
    title: "Award Category 03",
    description: "Recognizing groundbreaking strategies and outstanding crypto performance."
  },
  {
    awardImg: award03,
    title: "Award Category 03",
    description: "Celebrating leading female talents showing skill, growth, and discipline."
  },
  {
    awardImg: award03,
    title: "Award Category 03",
    description: "Highlighting young achievers with remarkable trading skills and potential."
  }
];

export default function AwardCategory3() {
  const [visibleCount, setVisibleCount] = useState(6);

  const toggleShowMore = () => {
    if (visibleCount === 6) {
      setVisibleCount(awards.length);
    } else {
      setVisibleCount(6);
    }
  };

  return (
    <div className="px-4 mt-10">
      <div className="flex flex-wrap gap-6 justify-start">
        {awards.slice(0, visibleCount).map((award, idx) => (
          <div
            key={idx}
            className="w-[355px] h-[241px] shadow-2xl bg-[#535353]/20 outline outline-white text-white rounded-md p-4 flex flex-row"
          >
            {/* Left side */}
            <div className="shrink-0 flex items-center justify-center w-1/3">
              <img src={award.awardImg} alt="Award" className="w-20 h-auto" />
            </div>

            {/* Right side */}
            <div className="flex flex-col justify-center flex-1">
              <div className="flex items-center mb-3">
                <img src={titleLeft} alt="Left decor" className="w-6 h-auto" />
                <h2 className="font-alatsi text-lg text-white text-center flex-1">
                  {award.title}
                </h2>
                <img src={titleRight} alt="Right decor" className="w-6 h-auto" />
              </div>
              <p className="font-alata text-sm text-gray-300">{award.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      {awards.length > 6 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={toggleShowMore}
            className="px-6 py-2 font-alata rounded-md border cursor-pointer border-white text-white hover:bg-white hover:text-[#080B1F] transition"
          >
            {visibleCount === 6 ? "Show More" : "Show Less"}
          </button>
        </div>
      )}
    </div>
  );
}

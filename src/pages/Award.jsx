import React, { useState } from "react";
import AwardCategory1 from "../components/AwardCategory1";
import AwardCategory2 from "../components/AwardCategory2";
import AwardCategory3 from "../components/AwardCategory3";

const Award = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  const categories = [
    { id: 1, name: "Traders Award", component: <AwardCategory1 /> },
    { id: 2, name: "Brokers Award", component: <AwardCategory2 /> },
    { id: 3, name: "Support Services", component: <AwardCategory3 /> },
  ];

  return (
    <div
      className="w-full py-12 px-4 md:px-6"
      style={{ backgroundColor: "#080B1F", color: "white" }}
    > 
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <h2
          className="text-2xl md:text-3xl font-alatsi  md:mt-20 mb-4"
          style={{ color: "#E29D42" }}
        >
          Featured Award Categories
        </h2>

        <p className="text-white font-alata text-base md:text-xl leading-relaxed mb-6">
          The FinX Awards honor remarkable achievements across the fintech
          and crypto ecosystem. Each category highlights individuals and
          organizations demonstrating exceptional innovation, leadership,
          and impact in shaping the future of digital finance.
        </p>

        <p className="text-white font-alata text-base md:text-xl mb-8">
          Discover our prestigious award categories:
        </p>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-3 md:gap-4 mb-8 ">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-semibold cursor-pointer px-5 md:px-6 py-2 rounded-md transition text-sm md:text-base
                ${
                  activeCategory === cat.id
                    ? "bg-white text-[#080B1F] border border-white "
                    : "border border-white  text-white hover:bg-white hover:text-[#080B1F]"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Display Active Category */}
        <div className="w-full">
          {categories.map(
            (cat) =>
              activeCategory === cat.id && (
                <div key={cat.id} className="w-full">
                  {cat.component}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Award;

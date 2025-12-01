import React, { useState } from "react";
import AwardCategory1 from "../components/AwardCategory1";
import AwardCategory2 from "../components/AwardCategory2";
import AwardCategory3 from "../components/AwardCategory3";

const Award = () => {
  const [activeCategory, setActiveCategory] = useState(1); // Default show Category1

  const categories = [
    { id: 1, name: "Award Category 01", component: <AwardCategory1 /> },
    { id: 2, name: "Award Category 02", component: <AwardCategory2 /> },
    { id: 3, name: "Award Category 03", component: <AwardCategory3 /> },
  ];

  return (
    <div
      className="w-full py-12"
      style={{ backgroundColor: "#080B1F", color: "white" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2
          className="text-2xl mt-20 md:text-3xl font-alatsi mb-4"
          style={{ color: "#E29D42" }}
        > Featured Award Categories
        </h2>
        <p className="text-white font-alata md:text-xl mb-4">
          The FinX Awards honor remarkable achievements across the fintech and crypto ecosystem.
          <br /> Each category highlights individuals and organizations that demonstrate exceptional innovation,
          <br /> leadership, and impact in shaping the future of digital finance.
        </p>
        <p className="text-white font-alata md:text-xl mb-6">
          Discover our prestigious award categories:
        </p>

        {/* Category Buttons */}
        <div className="flex gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-semibold px-6 py-2 cursor-pointer rounded-md transition
                ${
                  activeCategory === cat.id
                    ? "bg-white text-black border border-white"
                    : "border border-white cursor-pointer text-white hover:bg-white hover:text-black"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Display Active Category */}
        <div>
          {categories.map(
            (cat) => activeCategory === cat.id && <div key={cat.id}>{cat.component}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Award;

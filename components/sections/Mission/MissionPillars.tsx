"use client";

import React from "react";
import { Reveal } from "../../ui/Reveal";

// Data for the 5 Pillars
const PILLARS = [
  {
    id: 1,
    title: "Nutritional health",
    description:
      "We promote nutritional and sustainable health through stories and recipes from ancient African Wisdom",
    icon: "/missionicons/nutrition.png", // Yellow background in design
    color: "bg-[#FFF9C4]", // Light yellow placeholder bg
  },
  {
    id: 2,
    title: "Mental health",
    description:
      "We promote movement through traditional African dance and games that spark joy and laughter and bring children outdoors",
    icon: "/missionicons/mental.png", // Blue background in design
    color: "bg-[#E3F2FD]", // Light blue placeholder bg
  },
  {
    id: 3,
    title: "Physical health",
    description:
      "We promote movement through traditional African dance and games that spark joy and laughter and bring children outdoors",
    icon: "/missionicons/physical.png", // Brown background in design
    color: "bg-[#D7CCC8]", // Light brown placeholder bg
  },
  {
    id: 4,
    title: "Wealth as health",
    description:
      "We promote wealth as a reciprocal process through stories of shared resources to build sustainable communities.",
    icon: "/missionicons/wealth.png", // Pink background in design
    color: "bg-[#FFEBEE]", // Light pink placeholder bg
  },
  {
    id: 5,
    title: "Creativity as health",
    description:
      "We support creative expression through art and crafts that reconnect children to their inner nature.",
    icon: "/missionicons/creativity.png", // Teal background in design
    color: "bg-[#E0F2F1]", // Light teal placeholder bg
  },
];

export const MissionPillars = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* --- HEADER --- */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <Reveal width="100%">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1F2937]">
              Promoting well being through our pillars
            </h2>
          </Reveal>

          <Reveal delay={0.1} width="100%">
            <p className="font-sans text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              All our Bokobokids families have access to products and learning
              resources that have been carefully selected to promote well being
              through our unique five pillars:
            </p>
          </Reveal>
        </div>

        {/* --- PILLARS GRID --- */}
        {/* Using Flex wrap with justify-center to achieve the "3 top, 2 bottom centered" layout automatically */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-16">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.id} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center max-w-[320px]">
                {/* Icon Container */}
                <div className="w-24 h-24 mb-6 relative">
                  {/* We use the image directly, assuming the colored circle is part of the image export. 
                      If not, we can add a div with the 'color' prop behind it. 
                  */}
                  <img
                    src={pillar.icon}
                    alt={pillar.title}
                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="font-sans text-xl font-bold text-[#1F2937] mb-3">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-gray-500 text-xs md:text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { Reveal } from "../../ui/Reveal";

export const MissionHero = () => {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* --- 1. TEXT CONTENT --- */}
        <div className="max-w-4xl mb-8 text-left">
          {/* Eyebrow */}
          <Reveal>
            <h4 className="font-sans text-[#2B59C3] font-bold text-xs md:text-base uppercase tracking-widest mb-4">
              AN AFRICAN PROVERB
            </h4>
          </Reveal>

          {/* Main Heading */}
          <Reveal delay={0.1}>
            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[#1F2937] leading-tight tracking-tight">
              If it takes a village to raise a child, it will take a Bokobo kids
              village to raise the next generation of global citizens
            </h1>
          </Reveal>
        </div>

        {/* --- 2. HERO IMAGE WITH BLUE BORDER --- */}
        <Reveal delay={0.3} width="100%">
          <div className="relative w-full aspect-[16/9] md:aspect-[17/9] rounded-[2rem] overflow-hidden  shadow-sm">
            <img
              src="/missionheroimg.png" // Placeholder path
              alt="Bokobo Mission - African Proverb Storyteller"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

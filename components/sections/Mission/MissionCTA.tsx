"use client";

import React from "react";
import { Reveal } from "../../ui/Reveal";

export const MissionCTA = () => {
  return (
    <section className="w-full bg-white pb-24 pt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal width="100%">
          <div className="relative w-full bg-[#A6714B] rounded-[2.5rem] overflow-hidden py-24 px-6 md:px-12 text-center">
            {/* --- DECORATIONS (Vectors) --- */}
            {/* 1. Yellow Sunburst (Top Left) */}
            <div className="absolute top-8 left-8 w-20 h-20 opacity-90">
              <img
                src="/missionicons/yellowvector.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>

            {/* 2. Orange Circles (Top Right) */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-80">
              <img
                src="/missionicons/orangevector.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>

            {/* 3. Pink Arches (Bottom Left) */}
            <div className="absolute bottom-0 left-0 w-32 h-32 opacity-90">
              <img
                src="/missionicons/pinkvector.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>

            {/* 4. Cyan Waves (Bottom Right) */}
            <div className="absolute bottom-0 right-0 w-48 h-24 opacity-90">
              <img
                src="/missionicons/bluevector.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>

            {/* --- CONTENT --- */}
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Why should you join the <br /> Bokobo kids movement?
              </h2>

              <p className="font-sans text-white/90 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                Joining the Bokobokids movement means joining a welcoming
                community of families who desire to empower children with
                indestructible tools to promote inner well being.
              </p>

              <button className="mt-6 border-2 border-white text-white px-10 py-3 rounded-full font-bold text-sm hover:bg-white hover:text-[#A6714B] transition-colors uppercase tracking-wide">
                Start shopping
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

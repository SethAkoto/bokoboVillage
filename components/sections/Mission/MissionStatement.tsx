"use client";

import React from "react";
import { Reveal } from "../../ui/Reveal";

export const MissionStatement = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* --- IMAGE LEFT --- */}
          <div className="w-full md:w-1/2">
            <Reveal width="100%">
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-lg">
                <img
                  src="/missionstatementimg.png"
                  alt="Bokobo Community"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* --- TEXT RIGHT --- */}
          <div className="w-full md:w-1/2 space-y-8">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] leading-tight">
                Bokobo mission statement will be put here like this
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="font-sans text-gray-500 text-sm md:text-base leading-relaxed space-y-6">
                <p>
                  As parents, educators and keepers of ancient African knowledge
                  and wisdom, we are on a mission to help afro descendant kids
                  worldwide inherit, use and pass down knowledge about who they,
                  who their ancestors are, and what their heritage means in the
                  modern, global society.
                </p>
                <p>
                  We are invested in helping children learn how to tap into
                  their inner joy, to flourish and own their rich heritage
                  through authentic storytelling.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

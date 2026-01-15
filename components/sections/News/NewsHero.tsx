"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../../ui/Reveal";

export const NewsHero = () => {
  return (
    <section className="relative w-full bg-gray-50 pt-24 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* --- LEFT: TEXT CONTENT --- */}
          <div className="flex-1 space-y-6">
            <Reveal>
              <span className="inline-block bg-[#2B59C3]/10 text-[#2B59C3] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
                Featured Story
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] leading-tight">
                Bokobo Kids partners with National Library for summer reading
                initiative
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="font-sans text-gray-500 text-lg leading-relaxed max-w-xl">
                We are thrilled to announce a groundbreaking partnership
                designed to bring ancient African wisdom stories to thousands of
                children across the country this coming summer holiday.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <button className="mt-4 bg-[#2B59C3] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-blue-700 transition-all flex items-center gap-2 shadow-md group">
                Read full article
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Reveal>
          </div>

          {/* --- RIGHT: IMAGE --- */}
          <div className="flex-1 w-full">
            <Reveal width="100%" delay={0.3}>
              {/* Rounded container with shadow and slight rotation for playfulness */}
              <div className="relative aspect-[3/3] rounded-[2.5rem] overflow-hidden shadow-2xl md:rotate-2 hover:rotate-0 transition-all duration-500">
                <img
                  src="/missionheroimg.png" // Placeholder needed
                  alt="Children reading together"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* --- BOTTOM WAVE DECORATION --- */}
      <div className="absolute bottom-[-1px] left-0 w-full leading-[0] z-0">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-[80px] md:h-[120px] text-white fill-current"
          preserveAspectRatio="none"
        >
          <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

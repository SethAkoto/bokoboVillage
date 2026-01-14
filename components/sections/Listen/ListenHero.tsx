"use client";

import React from "react";
import { ShoppingBasket } from "lucide-react";
import { Reveal } from "../../ui/Reveal";

export const ListenHero = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center overflow-hidden">
      {/* --- BACKGROUND IMAGE LAYER --- */}
      <div className="absolute inset-0 z-0">
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="/listenhero.jpg"
          alt="Girl listening to headphones"
          className="w-full h-full object-cover"
        />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl text-white space-y-6">
          <Reveal>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide">
              Discover the world of <br />
              African ancient wisdom
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-sans text-sm md:text-base leading-relaxed opacity-95 max-w-lg font-normal">
              If it takes a village to raise a child, it will take a Bokobo kids
              village to raise the next generation of global citizens
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <button className="bg-white text-[#1F2937] px-8 py-3.5 rounded-full font-bold text-sm hover:scale-105 transition-transform duration-200 flex items-center gap-3 shadow-lg mt-4">
              <ShoppingBasket className="w-5 h-5" />
              Listen on spotify
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

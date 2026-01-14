"use client";

import React from "react";
import { ShoppingBasket } from "lucide-react";
import { Reveal } from "../../ui/Reveal";

export const Hero = () => {
  return (
    <section className="relative w-full bg-[#2B59C3] min-h-[85vh] flex flex-col items-center pt-10 pb-32 overflow-hidden">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B59C3]/90 via-[#2B59C3]/80 to-[#2B59C3] z-10"></div>
        <img
          src="/treesbg.png"
          alt="Background"
          className="w-full h-full object-cover opacity-120 mix-blend-overlay absolute inset-0"
        />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* --- LEFT STICKER --- */}
        {/* <div className="absolute left-8 bottom-32 hidden lg:block">
          <img src="/zigvector.png" alt="decoration" className="w-24 h-auto" />
        </div> */}

        {/* --- RIGHT BLOB --- */}
        <div className="absolute right-0 top-1/4 hidden lg:block opacity-20 pointer-events-none">
          <img
            src="/rightvector.png"
            alt="decoration"
            className="w-40 h-auto"
          />
        </div>

        {/* --- BOOK IMAGE --- */}
        <div className="relative mb-8 w-full max-w-[600px] flex justify-center">
          <Reveal width="100%">
            <div className="flex justify-center">
              <img
                src="/books.png"
                alt="Featured Book"
                className="object-contain max-h-[350px] mx-auto"
              />
            </div>
          </Reveal>
        </div>

        {/* --- TEXT CONTENT --- */}
        <div className="text-center text-white space-y-4 z-30 max-w-5xl mx-auto px-4 flex flex-col items-center">
          <Reveal delay={0.1}>
            {/* LABEL: Uses Days One (font-days) */}
            <h3 className="font-days text-xs md:text-sm font-bold tracking-[0.2em] uppercase opacity-90">
              Bokobo Kids Village
            </h3>
          </Reveal>

          <Reveal delay={0.2}>
            {/* HEADING: Uses Concert One (font-display) 
                Note: Concert One is naturally bold, so we don't need 'font-extrabold'
            */}
            <h1 className="font-days text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-wide drop-shadow-sm -mt-1">
              DISCOVER THE WORLD OF <br />
              AFRICAN ANCIENT WISDOM
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            {/* PARAGRAPH: Uses Days One (font-days) */}
            <p className="font-days text-xs md:text-lg font-normal max-w-xl mx-auto leading-relaxed opacity-95 -mt-1">
              If it takes a village to raise a child, it will take a Bokobo kids
              village to raise the next generation of global citizens
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            {/* BUTTON: Uses Andika (font-sans) */}
            <button className="font-sans mt-4 bg-white text-[#1F2937] pl-6 pr-8 py-3.5 rounded-full font-bold text-sm hover:scale-105 transition-transform duration-200 flex items-center gap-3 shadow-lg">
              <ShoppingBasket className="w-5 h-5" />
              See our bookstore
            </button>
          </Reveal>
        </div>
      </div>

      {/* --- BOTTOM WAVE --- */}
      <div className="absolute bottom-[-1px] left-0 w-full z-40 leading-[0]">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-[120px] md:h-[180px] text-white fill-current"
          preserveAspectRatio="none"
        >
          <path d="M0,160 C200,280 400,280 600,220 C800,160 1000,100 1200,180 L1440,260 V320 H0 Z"></path>
        </svg>
      </div>
    </section>
  );
};

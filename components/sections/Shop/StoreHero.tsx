"use client";

import React from "react";
import { ShoppingBasket } from "lucide-react";
import { Reveal } from "../../ui/Reveal";

export const StoreHero = () => {
  return (
    <section className="relative w-full bg-white min-h-[80vh] flex flex-col items-center pt-20 overflow-hidden">
      {/* --- BACKGROUND VECTORS --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* 1. LEFT VECTOR */}
        <div className="absolute top-20 left-[-50px] md:left-10 w-40 h-40 md:w-64 md:h-64 opacity-30">
          <img
            src="/bookvector.png"
            alt="Book Outline"
            className="w-full h-full object-contain -rotate-12"
          />
        </div>

        {/* 2. RIGHT TOP VECTOR */}
        <div className="absolute top-10 right-[-20px] w-32 h-32 md:w-48 md:h-48 opacity-30">
          <img
            src="/pencilvector.png"
            alt="Pencil Outline"
            className="w-full h-full object-contain"
          />
        </div>

        {/* 3. RIGHT BOTTOM VECTOR */}
        <div className="absolute bottom-20 right-0 w-64 h-64 opacity-20">
          <img
            src="/storecontourvector.png"
            alt="Blob Outline"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* --- CENTER TEXT CONTENT --- */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6 mb-8 md:mb-12">
        <Reveal width="100%">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-[#1F2937] leading-tight tracking-tight text-center">
            Discover the world of <br />
            African ancient wisdom
          </h1>
        </Reveal>

        <Reveal delay={0.1} width="100%">
          <p className="font-sans text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-center">
            If it takes a village to raise a child, it will take a Bokobo kids
            village to raise the next generation of global citizens
          </p>
        </Reveal>

        <Reveal delay={0.2} width="100%">
          {/* FIX: Explicit flex container to force centering */}
          <div className="flex justify-center w-full">
            <button className="bg-white border border-gray-200 text-[#1F2937] px-8 py-3 rounded-full font-bold text-sm hover:border-[#2B59C3] hover:text-[#2B59C3] transition-colors shadow-sm flex items-center gap-2">
              <ShoppingBasket className="w-4 h-4" />
              See our bookstore
            </button>
          </div>
        </Reveal>
      </div>

      {/* --- THE BOOK FAN (Single Image) --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 mt-auto">
        <Reveal delay={0.3} width="100%">
          <div className="flex justify-center w-full">
            <img
              src="/storeherobooks.png"
              alt="Bokobo Bookstore Collection"
              className="w-full h-auto max-w-[900px] object-contain drop-shadow-2xl"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { AudioWaveform, ShoppingBasket, PlayCircle } from "lucide-react";
import { Reveal } from "../../ui/Reveal";

export const AudioShowcase = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* --- 1. HEADER SECTION --- */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <Reveal>
            <div className="text-[#2B59C3] mb-2">
              <AudioWaveform className="w-8 h-8 md:w-10 md:h-10" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1F2937] leading-tight">
              Discover the world of African <br />
              ancient wisdom
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-sans text-gray-500 text-sm md:text-base max-w-2xl">
              If it takes a village to raise a child, it will take a Bokobo kids
              village to raise the next generation of global citizens
            </p>
          </Reveal>
        </div>

        {/* --- 2. THREE COLUMN FEATURES --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {/* Feature 1 */}
          <Reveal delay={0.3}>
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-32 h-32 mb-6">
                <img
                  src="/trumpet.png"
                  alt="Audio Books"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-[#2B59C3] font-bold text-lg mb-3">
                Using audio books
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                If it takes a village to raise a child, it will take a Bokobo
                kids village to raise the next
              </p>
            </div>
          </Reveal>

          {/* Feature 2 */}
          <Reveal delay={0.4}>
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-32 h-32 mb-6">
                <img
                  src="/table-globe.png"
                  alt="Worldwide Reach"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-[#2B59C3] font-bold text-lg mb-3">
                Worldwide reach
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                If it takes a village to raise a child, it will take a Bokobo
                kids village to raise the next
              </p>
            </div>
          </Reveal>

          {/* Feature 3 */}
          <Reveal delay={0.5}>
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-32 h-32 mb-6">
                <img
                  src="/board.png"
                  alt="Education"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-[#2B59C3] font-bold text-lg mb-3">
                Worldwide reach
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                If it takes a village to raise a child, it will take a Bokobo
                kids village to raise the next
              </p>
            </div>
          </Reveal>
        </div>

        {/* --- 3. BOTTOM FEATURE CARD (Split Layout) --- */}
        <Reveal delay={0.6} width="100%">
          <div className="w-full  flex flex-col md:flex-row overflow-hidden min-h-[400px]">
            {/* Left Side: Content */}
            <div className="flex-1 bg-white p-8 md:p-12 flex flex-col justify-center items-start">
              <span className="text-[#2B59C3] text-xs font-bold uppercase tracking-widest mb-4">
                REGISTERED AUDIO BOOKS
              </span>

              <h3 className="font-display text-3xl md:text-4xl font-bold text-[#1F2937] mb-6 leading-tight">
                Audio books that actually inspire kids to want to be more!
              </h3>

              <p className="font-sans text-gray-500 text-sm leading-relaxed mb-8">
                We are committed to providing high-speed, reliable, and value
                for money internet solutions, thoughtfully tailored to meet the
                unique lifestyle needs of residential users, small and
                medium-sized enterpri
              </p>

              <button className="bg-[#2B59C3] text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-md">
                <ShoppingBasket className="w-4 h-4" />
                Listen on spotify
              </button>
            </div>

            {/* Right Side: Image with Play Button */}
            <div className="flex-1 relative min-h-[300px] md:min-h-full">
              <img
                src="/events/feature-storyteller.jpg"
                alt="Storyteller"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors cursor-pointer group">
                <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

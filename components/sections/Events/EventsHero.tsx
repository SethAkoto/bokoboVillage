"use client";

import React from "react";
import { ShoppingBasket } from "lucide-react";
import { Reveal } from "../../ui/Reveal";
import { motion } from "framer-motion";

// Placeholder images for the slider
const SLIDER_IMAGES = [
  "/missionheroimg.png", // Group photo
  "/missionstatementimg.png", // Speaker photo
  "/missionheroimg.png", // Another event photo
  "/missionstatementimg.png", // Repeat for seamless loop
  "/missionheroimg.png",
  "/missionstatementimg.png",
];

export const EventsHero = () => {
  return (
    <section className="w-full bg-[#2B59C3] pt-20 pb-0 overflow-hidden flex flex-col items-center">
      {/* --- 1. TEXT CONTENT --- */}
      <div className="max-w-4xl mx-auto px-6 text-center text-white space-y-8 mb-16 relative z-10">
        <Reveal>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
            Discover the world of <br />
            African ancient wisdom
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-sans text-white/90 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            If it takes a village to raise a child, it will take a Bokobo kids
            village to raise the next generation of global citizens
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <button className="bg-white flex items-center justify-center text-[#1F2937] px-8 py-3.5 rounded-full font-bold text-sm hover:scale-105 transition-transform duration-200 gap-2 mx-auto shadow-lg">
            <ShoppingBasket className="w-4 h-4" />
            See our bookstore
          </button>
        </Reveal>
      </div>

      {/* --- 2. INFINITE IMAGE MARQUEE --- */}
      <div className="w-full relative">
        <div className="flex overflow-hidden">
          {/* We use framer-motion to slide the container to the left forever.
            The x: "-50%" assumes the content is duplicated so it loops seamlessly.
          */}
          <motion.div
            className="flex gap-4 md:gap-6 min-w-max px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20, // Adjust speed here (higher = slower)
            }}
          >
            {/* Render images twice to ensure enough width for the loop */}
            {[...SLIDER_IMAGES, ...SLIDER_IMAGES].map((src, index) => (
              <div
                key={index}
                className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex-shrink-0 rounded-t-2xl overflow-hidden"
              >
                <img
                  src={src}
                  alt="Event Moment"
                  className="w-full h-full object-cover"
                />
                {/* Optional: Add a slight gradient at the bottom if needed for blend */}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

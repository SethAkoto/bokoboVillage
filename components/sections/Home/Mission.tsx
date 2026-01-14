"use client";

import React from "react";
import { Reveal } from "../../ui/Reveal";

// Reusable Component with Flexible Layouts
const MissionItem = ({
  imageSrc,
  title,
  text,
  layoutType = "standard", // "standard" | "vertical" | "reversed"
  delay = 0,
}: {
  imageSrc: string;
  title: string;
  text: string;
  layoutType?: "standard" | "vertical" | "reversed";
  delay?: number;
}) => {
  // Determine layout classes
  let containerClasses = "";
  let textClasses = "";
  // New: Determine alignment classes to push items to extremes
  let wrapperAlignment = "";

  switch (layoutType) {
    case "vertical":
      // Image Top, Text Bottom (Centered text)
      // We want this whole block to sit on the RIGHT
      containerClasses = "flex-col text-center";
      textClasses = "items-center";
      wrapperAlignment = "ml-auto"; // Push to extreme right
      break;
    case "reversed":
      // Text Left, Image Right
      // We want this whole block to sit on the LEFT
      containerClasses =
        "flex-col md:flex-row-reverse text-center md:text-right";
      textClasses = "items-center md:items-end";
      wrapperAlignment = "mr-auto"; // Push to extreme left
      break;
    case "standard":
    default:
      // Image Left, Text Right
      // We want this whole block to sit on the LEFT
      containerClasses = "flex-col md:flex-row text-center md:text-left";
      textClasses = "items-center md:items-start";
      wrapperAlignment = "mr-auto"; // Push to extreme left
      break;
  }

  return (
    <Reveal width="100%" delay={delay}>
      {/* Removed 'mx-auto' to allow extreme left/right positioning.
         Added 'wrapperAlignment' (ml-auto or mr-auto) to push content to edges.
      */}
      <div
        className={`flex ${containerClasses} items-center gap-4 w-full max-w-lg ${wrapperAlignment}`}
      >
        {/* --- IMAGE AREA --- */}
        <div className="relative flex-shrink-0 w-40 h-40 md:w-48 md:h-48 flex items-center justify-center">
          <img
            src={imageSrc}
            alt="Mission Graphic"
            className="w-full h-full object-contain drop-shadow-sm"
          />
        </div>

        {/* --- TEXT CONTENT --- */}
        <div className={`flex flex-col space-y-2 pt-2 ${textClasses}`}>
          <h3 className="font-display text-lg md:text-xl font-bold text-[#1F2937]">
            {title}
          </h3>
          <p className="font-sans text-gray-600 leading-relaxed text-sm md:text-[15px] max-w-xs">
            {text}
          </p>
        </div>
      </div>
    </Reveal>
  );
};

export const Mission = () => {
  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">
      {/* --- BACKGROUND VECTORS --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* 1. THE MAIN LINE/SWOOSH */}
        <div className="absolute top-[280px] left-0 w-full flex justify-center opacity-100">
          <img
            src="/zigzagvector.png"
            alt="Background Line"
            className="w-full max-w-[1400px] h-auto object-cover"
          />
        </div>

        {/* 2. Bottom Left Circles (Visible behind 3rd item) */}
        <div className="absolute bottom-[-20px] left-[-20px] w-80 h-80 opacity-80">
          <img
            src="/dotflakevector.png"
            alt="Decoration"
            className="w-full h-full object-contain"
          />
        </div>

        {/* 3. Right Contour Outline */}
        <div className="absolute top-[40%] right-[-50px] w-80 h-80 opacity-40">
          <img
            src="/contourvector.png"
            alt="Decoration"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col items-center justify-center text-center mb-16 relative">
          <Reveal>
            <h4 className="font-sans text-[#2B59C3] font-bold tracking-[0.2em] uppercase text-xs mb-3">
              OUR MISSION
            </h4>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] leading-tight">
              WHAT THE BOKOBO <br /> MOVEMENT MEANS
            </h2>
          </Reveal>
        </div>

        {/* --- ITEMS GRID --- */}
        <div className="flex flex-col gap-4 w-full">
          {/* 1. EXTREME LEFT ITEM */}
          {/* Layout: Blob Left, Text Right */}
          <div className="w-full ml-32 flex justify-start">
            <MissionItem
              imageSrc="/mission1.png"
              title="Educating our children"
              text="If it takes a village to raise a child, it will take a Bokobo kids village to"
              layoutType="standard"
              delay={0.2}
            />
          </div>

          {/* 2. EXTREME RIGHT ITEM */}
          {/* Layout: Blob Top, Text Below */}
          <div className="w-full mr-32 flex justify-end">
            <MissionItem
              imageSrc="/mission2.png"
              title="Empowering kids across the continent"
              text="If it takes a village to raise a child, it will take a Bokobo kids village to"
              layoutType="vertical"
              delay={0.3}
            />
          </div>

          {/* 3. EXTREME LEFT ITEM */}
          {/* Layout: Text Left, Blob Right (Reversed) */}
          {/* NOTE: This will sit over the 'dotflakevector' on the left */}
          <div className="w-full ml-32 flex justify-start">
            <MissionItem
              imageSrc="/mission3.png"
              title="Educating our children"
              text="If it takes a village to raise a child, it will take a Bokobo kids village to"
              layoutType="reversed"
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../../ui/Reveal";

// Placeholder Data (Repeated as seen in screenshot)
const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Susanna bokobo",
    role: "The guide",
    image: "/Susanna.png", // Placeholder
  },
  {
    id: 2,
    name: "Susanna bokobo",
    role: "The guide",
    image: "/Susanna.png", // Placeholder
  },
  {
    id: 3,
    name: "Susanna bokobo",
    role: "The guide",
    image: "/Susanna.png", // Placeholder
  },
  {
    id: 4,
    name: "Susanna bokobo",
    role: "The guide",
    image: "/Susanna.png", // Placeholder
  },
  {
    id: 5,
    name: "Susanna bokobo",
    role: "The guide",
    image: "/Susanna.png", // Placeholder
  },
  {
    id: 6,
    name: "Susanna bokobo",
    role: "The guide",
    image: "/Susanna.png", // Placeholder
  },
];

export const Team = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* --- HEADER SECTION (Left Aligned) --- */}
        <div className="mb-12 max-w-2xl">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1F2937] uppercase mb-4">
              THE VILLAGE TEAM
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-sans text-gray-500 text-sm md:text-base leading-relaxed">
              If it takes a village to raise a child, it will take a Bokobo kids
              village to raise the next generation of global citizens
            </p>
          </Reveal>
        </div>

        {/* --- TEAM GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {TEAM_MEMBERS.map((member, index) => (
            <Reveal key={member.id} delay={index * 0.1}>
              <div className="group cursor-pointer">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl aspect-square mb-5">
                  {/* Grayscale Image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  />

                  {/* Floating Action Button (Bottom Right) */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-gray-900" />
                  </div>
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="font-display text-xl font-bold text-[#1F2937]">
                    {member.name}
                  </h3>
                  <p className="font-sans text-gray-400 text-sm mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

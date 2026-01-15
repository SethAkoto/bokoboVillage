"use client";

import React from "react";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Reveal } from "../../ui/Reveal";

const EVENTS = [
  {
    id: 1,
    title: "Book and arts reading session",
    location: "Nguyena Park, Accra, Ghana",
    description:
      "“The Winds of Napata” and Its Modern Relevance. Dr. Kheftusa Akhiba Ankh’s The Winds of Napata is a poignant tale that weaves African history, culture, and identity into an immersive narrative designed to inspire.",
    startTime: "12:00",
    endTime: "18:00",
    tags: ["Book reading", "Book listening", "Book listening"],
    image: "/missionheroimg.png", // Placeholder
  },
  {
    id: 2,
    title: "Book and arts reading session",
    location: "Nguyena Park, Accra, Ghana",
    description:
      "“The Winds of Napata” and Its Modern Relevance. Dr. Kheftusa Akhiba Ankh’s The Winds of Napata is a poignant tale that weaves African history, culture, and identity into an immersive narrative designed to inspire.",
    startTime: "12:00",
    endTime: "18:00",
    tags: ["Book reading", "Book listening", "Book listening"],
    image: "/missionheroimg.png", // Placeholder
  },
  {
    id: 3,
    title: "Book and arts reading session",
    location: "Nguyena Park, Accra, Ghana",
    description:
      "“The Winds of Napata” and Its Modern Relevance. Dr. Kheftusa Akhiba Ankh’s The Winds of Napata is a poignant tale that weaves African history, culture, and identity into an immersive narrative designed to inspire.",
    startTime: "12:00",
    endTime: "18:00",
    tags: ["Book reading", "Book listening", "Book listening"],
    image: "/missionheroimg.png", // Placeholder
  },
];

export const UpcomingEvents = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* --- HEADER --- */}
        <div className="mb-16">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1F2937] mb-4">
              Upcoming events
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-sans text-gray-500 text-sm md:text-base max-w-2xl leading-relaxed">
              If it takes a village to raise a child, it will take a Bokobo kids
              village to raise the next generation of global citizens
            </p>
          </Reveal>
        </div>

        {/* --- EVENTS LIST --- */}
        <div className="flex flex-col gap-12">
          {EVENTS.map((event, index) => (
            <Reveal key={event.id} delay={index * 0.1}>
              <div className="flex flex-col md:flex-row gap-8 pb-12 border-b border-gray-100 last:border-0 last:pb-0">
                {/* Image */}
                <div className="w-full md:w-[400px] h-[260px] flex-shrink-0 rounded-2xl overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center flex-grow space-y-4">
                  {/* Title */}
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-[#1F2937]">
                    {event.title}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-gray-500 font-bold text-sm">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>

                  {/* Description */}
                  <p className="font-sans text-gray-500 text-sm leading-relaxed max-w-3xl">
                    {event.description}
                  </p>

                  {/* Time Row */}
                  <div className="flex items-center gap-4 text-sm font-bold text-[#1F2937]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {event.startTime}
                    </div>
                    <div className="w-8 h-[1px] bg-gray-300"></div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {event.endTime}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 py-2">
                    {event.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 rounded-full border border-gray-200 text-xs font-bold text-gray-600 bg-gray-50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-2">
                    <button className="text-[#2B59C3] font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                      See details
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

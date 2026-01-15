"use client";

import React, { useState } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { Reveal } from "../../ui/Reveal";

// Sample Data
const NEWS_ARTICLES = [
  {
    id: 1,
    title: "Launching our new interactive audiobook series",
    category: "Technology",
    date: "Oct 24, 2025",
    image: "/missionheroimg.png",
  },
  {
    id: 2,
    title: "Community spotlight: The teachers making a difference",
    category: "Community",
    date: "Oct 18, 2025",
    image: "/missionstatementimg.png",
  },
  {
    id: 3,
    title: "Why ancient wisdom matters in modern education",
    category: "Education",
    date: "Oct 12, 2025",
    image: "/missionheroimg.png",
  },
  {
    id: 4,
    title: "Highlights from our annual storytelling festival",
    category: "Events",
    date: "Oct 05, 2025",
    image: "/missionstatementimg.png",
  },
  {
    id: 5,
    title: "Expanding our reach: New partnerships announced",
    category: "Community",
    date: "Sep 28, 2025",
    image: "/missionheroimg.png",
  },
  {
    id: 6,
    title: "5 tips for encouraging reading at home",
    category: "Education",
    date: "Sep 15, 2025",
    image: "/missionstatementimg.png",
  },
];

const CATEGORIES = ["All", "Education", "Community", "Technology", "Events"];

export const NewsGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? NEWS_ARTICLES
      : NEWS_ARTICLES.filter((article) => article.category === activeCategory);

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* --- HEADER & FILTERS --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1F2937]">
              Latest Articles
            </h2>
          </Reveal>

          {/* Filters (Styled like store filters) */}
          <Reveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2 bg-gray-50 p-1.5 rounded-full">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-[#2B59C3] text-white shadow-sm"
                      : "text-gray-500 hover:text-[#2B59C3] hover:bg-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* --- ARTICLE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredArticles.map((article, index) => (
            <Reveal key={article.id} delay={index * 0.05}>
              <article className="group cursor-pointer flex flex-col h-full">
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-5">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category Badge on Image */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#2B59C3] text-xs font-bold px-3 py-1.5 rounded-full">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow space-y-3">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#1F2937] leading-tight group-hover:text-[#2B59C3] transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Read More Link */}
                  <div className="mt-auto pt-4">
                    <div className="flex items-center gap-2 text-[#2B59C3] font-bold text-sm group-hover:gap-3 transition-all">
                      Read article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

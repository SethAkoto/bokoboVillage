"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../../ui/Reveal";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Information here to look like this",
    excerpt:
      "If it takes a village to raise a child, it will take a Bokobo kids village to raise the next generation of global citizens",
    author: "Phoebe",
    date: "24 October, 2025",
    image: "/blogimg.png", // Placeholder
    authorImage: "/blog/avatar-1.png", // Placeholder
  },
  {
    id: 2,
    title: "Information here to look like this",
    excerpt:
      "If it takes a village to raise a child, it will take a Bokobo kids village to raise the next generation of global citizens",
    author: "Phoebe",
    date: "24 October, 2025",
    image: "/blogimg.png", // Placeholder
    authorImage: "/blog/avatar-2.png", // Placeholder
  },
  {
    id: 3,
    title: "Information here to look like this",
    excerpt:
      "If it takes a village to raise a child, it will take a Bokobo kids village to raise the next generation of global citizens",
    author: "Phoebe",
    date: "24 October, 2025",
    image: "/blogimg.png", // Placeholder
    authorImage: "/blog/avatar-3.png", // Placeholder
  },
];

export const Blog = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* --- HEADER --- */}
        <div className="mb-12">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-4">
              <span className="text-[#1F2937]">READ</span>{" "}
              <span className="text-[#2B59C3]">OUR NEWS BLOG</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-sans text-gray-500 text-sm md:text-base max-w-2xl leading-relaxed">
              If it takes a village to raise a child, it will take a Bokobo kids
              village to raise the next generation of global citizens
            </p>
          </Reveal>
        </div>

        {/* --- BLOG GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <Reveal key={post.id} delay={index * 0.1}>
              <article className="group cursor-pointer flex flex-col h-full">
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <h3 className="font-display text-xl font-bold text-[#1F2937] mb-3 group-hover:text-[#2B59C3] transition-colors">
                    {post.title}
                  </h3>

                  <p className="font-sans text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Author & Meta */}
                  <div className="mt-auto flex items-center gap-3 mb-6">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col text-sm">
                      <span className="font-bold text-[#1F2937]">
                        {post.author}
                      </span>
                      <span className="text-gray-400">{post.date}</span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-[#2B59C3] font-bold text-sm group-hover:gap-3 transition-all">
                    Read full story
                    <ArrowRight className="w-4 h-4" />
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

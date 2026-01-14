"use client";

import React from "react";
import { Reveal } from "../../ui/Reveal";

interface BookListProps {
  content: {
    ui: {
      title: string;
      subtitle: string;
      startShopping: string;
      buyButton: string;
      currency?: string;
    };
    books: Array<{
      id: number;
      title: string;
      author: string;
      category: string;
      price: number;
      image: string;
      description?: string;
    }>;
  };
}

export const BookList = ({ content }: BookListProps) => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1F2937] leading-tight">
                {content.ui.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-sans text-gray-500 text-sm md:text-base leading-relaxed max-w-xl">
                {content.ui.subtitle}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <button className="hidden md:block border border-gray-200 text-[#1F2937] px-8 py-3 rounded-full font-bold text-sm hover:bg-[#2B59C3] hover:text-white hover:border-[#2B59C3] transition-all">
              Start shopping
            </button>
          </Reveal>
        </div>

        {/* --- BOOKS GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-12">
          {content.books.map((book, index) => (
            <Reveal key={book.id} delay={index * 0.1}>
              <div className="group flex flex-col h-full items-start">
                {/* 1. Gray Image Container (Significantly Reduced) */}
                {/* Added max-w-[320px] to constrain width */}
                <div className="bg-gray-100/80 rounded-3xl p-6 aspect-square w-full max-w-[320px] flex items-center justify-center mb-6 relative overflow-hidden transition-colors group-hover:bg-gray-100">
                  {/* The Book Image (Smaller) */}
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-36 md:w-40 h-auto object-contain shadow-lg transform transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                  />
                </div>

                {/* 2. Book Details */}
                {/* Added max-w matches the box for alignment */}
                <div className="space-y-2 w-full max-w-[320px]">
                  <div className="text-[#2B59C3] font-bold text-sm tracking-wide">
                    {book.category}
                  </div>

                  <h3 className="font-display text-xl md:text-2xl font-bold text-[#1F2937]">
                    {book.title}
                  </h3>

                  <p className="font-sans text-gray-500 text-sm leading-relaxed line-clamp-3 mb-2">
                    Is your child ready to dive into a world of magic, mystery,
                    and environmental stewardship? Then join Eniola, a young
                    girl blessed by the sea goddess Yemaya, on an unforgettable
                    quest to protect the ocean.
                  </p>

                  <div className="pt-2">
                    <button className="bg-[#2B59C3] text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-blue-700 transition-colors shadow-sm">
                      Buy book
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

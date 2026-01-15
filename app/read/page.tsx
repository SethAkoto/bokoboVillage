"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PlayCircle, Info } from "lucide-react";
import { ImmersiveReader } from "@/components/sections/Read/ImmersiveReader";
import { AnimatePresence } from "framer-motion";

// --- DATA ---
// Using categories to create "Shelves"
const FEATURED_BOOK = {
  id: 0,
  title: "The Lady of the Sea",
  description:
    "Join Eniola, a young girl blessed by the sea goddess Yemaya, on an unforgettable quest to protect the ocean from pollution and neglect.",
  cover: "/books/store-book-3.png",
  backdrop: "/books/store-book-3.png", // We will blur this
  pages: [{ image: "/read/page1.jpg" }, { image: "/read/page2.jpg" }],
};

const SHELVES = [
  {
    category: "New Arrivals",
    books: [
      { id: 1, title: "The First Rainbow", cover: "/books/store-book-5.png" },
      { id: 2, title: "Kweku Ananse", cover: "/books/store-book-1.png" },
      { id: 3, title: "The Golden Stool", cover: "/books/store-book-2.png" },
      { id: 4, title: "African Myths", cover: "/books/store-book-4.png" },
    ],
  },
  {
    category: "Popular Folklore",
    books: [
      { id: 5, title: "Kweku Ananse", cover: "/books/store-book-1.png" },
      { id: 6, title: "The Golden Stool", cover: "/books/store-book-2.png" },
      { id: 7, title: "The First Rainbow", cover: "/books/store-book-5.png" },
    ],
  },
];

export default function ReadPage() {
  const [activeBook, setActiveBook] = useState<any>(null);

  return (
    <main className="min-h-screen bg-[#F9FAFB]">
      <Navbar />

      {/* --- READER OVERLAY --- */}
      <AnimatePresence>
        {activeBook && (
          <ImmersiveReader
            book={activeBook}
            onClose={() => setActiveBook(null)}
          />
        )}
      </AnimatePresence>

      {/* --- 1. CINEMATIC HERO --- */}
      <section className="relative w-full h-[85vh] flex items-center overflow-hidden">
        {/* Blurred Backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src={FEATURED_BOOK.backdrop}
            className="w-full h-full object-cover opacity-50 blur-3xl scale-110"
            alt="Backdrop"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F9FAFB] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full flex flex-col md:flex-row items-center gap-12 mt-20">
          {/* Text Info */}
          <div className="flex-1 space-y-6 md:space-y-8">
            <span className="inline-block px-4 py-2 rounded-full bg-[#2B59C3]/10 text-[#2B59C3] font-bold text-xs uppercase tracking-widest">
              Book of the Month
            </span>
            <h1 className="font-display font-extrabold text-5xl md:text-7xl text-gray-900 leading-[1.1]">
              {FEATURED_BOOK.title}
            </h1>
            <p className="font-sans text-gray-500 text-lg max-w-xl leading-relaxed">
              {FEATURED_BOOK.description}
            </p>

            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={() => setActiveBook(FEATURED_BOOK)}
                className="bg-[#2B59C3] text-white px-10 py-4 rounded-full font-bold text-sm hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 transition-all flex items-center gap-3"
              >
                <PlayCircle
                  size={20}
                  fill="currentColor"
                  className="text-white"
                />
                Start Reading
              </button>
              <button className="px-8 py-4 rounded-full border border-gray-300 font-bold text-gray-600 text-sm hover:bg-white hover:border-gray-400 transition-all flex items-center gap-2">
                <Info size={18} />
                More Info
              </button>
            </div>
          </div>

          {/* 3D Cover Art */}
          <div className="flex-1 flex justify-center md:justify-end perspective-1000">
            <div
              className="relative w-[300px] md:w-[400px] aspect-[3/4] rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transform rotate-y-[-12deg] hover:rotate-y-0 transition-transform duration-700 ease-out cursor-pointer"
              onClick={() => setActiveBook(FEATURED_BOOK)}
            >
              <img
                src={FEATURED_BOOK.cover}
                alt="Cover"
                className="w-full h-full object-cover rounded-2xl"
              />
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-50 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. THE SHELVES (Netflix Style) --- */}
      <div className="pb-32 space-y-16 relative z-10">
        {SHELVES.map((shelf, index) => (
          <section key={index} className="pl-6 md:pl-10">
            <div className="max-w-7xl mx-auto">
              <h3 className="font-display text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                {shelf.category}{" "}
                <span className="text-gray-300 text-sm font-normal">
                  Scroll to view
                </span>
              </h3>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="flex overflow-x-auto gap-6 pb-12 pr-10 scrollbar-hide snap-x">
              {shelf.books.map((book) => (
                <div
                  key={book.id}
                  className="group relative flex-shrink-0 w-[200px] md:w-[240px] snap-start cursor-pointer"
                  onClick={() =>
                    setActiveBook({
                      ...book,
                      pages: [{ image: "/read/page1.jpg" }],
                    })
                  } // Mock data injection
                >
                  <div className="relative aspect-[2/3] rounded-xl overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:scale-105">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <PlayCircle
                        size={48}
                        className="text-white drop-shadow-lg"
                      />
                    </div>
                  </div>
                  <h4 className="mt-4 font-bold text-gray-800 text-base leading-tight group-hover:text-[#2B59C3] transition-colors">
                    {book.title}
                  </h4>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </main>
  );
}

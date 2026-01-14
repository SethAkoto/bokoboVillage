"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "../../ui/Reveal";
import { AnimatePresence, motion } from "framer-motion";

// Data for the 3 Books in the Carousel
const BOOKS = [
  {
    id: 1,
    title: "“THE WINDS OF NAPATA” AND ITS MODERN RELEVANCE",
    description: [
      "“The Winds of Napata” and Its Modern Relevance. Dr. Kheftusa Akhiba Ankh’s The Winds of Napata is a poignant tale that weaves African history, culture, and identity into an immersive narrative designed to inspire and empower.",
      "Through the lens of a young boy, Mark, and his journey of self-discovery between modern-day Manchester and his ancestral African roots, the book merges dreams, folklore, and historical insights to illuminate the legacy of ancient African civilizations.",
    ],
    image: "/discoverbook1.png", // Placeholder
  },
  {
    id: 2,
    title: "THE LEGEND OF THE FIRST RAINBOW",
    description: [
      "Discover the magical origins of the rainbow in this enchanting tale. Set in a time before colors graced the sky, this story follows a courageous young girl who seeks to bring hope to her village after a long drought.",
      "Rich with folklore and vibrant imagery, 'The Legend of the First Rainbow' teaches children about the importance of unity, diversity, and the beauty that emerges when we all come together.",
    ],
    image: "/discoverbook3.png", // Placeholder
  },
  {
    id: 3,
    title: "THE LADY OF THE SEA",
    description: [
      "A mesmerizing journey beneath the waves. 'The Lady of the Sea' introduces young readers to the mysteries of the ocean and the guardians who protect it.",
      "This book explores themes of environmental stewardship and respect for nature, wrapped in a captivating adventure that spans from the sandy shores of Ghana to the deepest coral reefs.",
    ],
    image: "/discoverbook2.png", // Placeholder
  },
];

export const FeaturedBook = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Logic to go to next slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === BOOKS.length - 1 ? 0 : prev + 1));
  };

  // Logic to go to previous slide
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? BOOKS.length - 1 : prev - 1));
  };

  // Logic for specific dot click
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full">
      {/* ==============================================
          PART 1: WHITE HEADING SECTION (Strictly Centered)
      =============================================== */}
      <div className="bg-white py-20 px-4 w-full flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl w-full mx-auto space-y-6 flex flex-col items-center">
          {/* FIX: Added width="100%" to Reveal. 
             This forces the container to fill the width so text-center works perfectly.
          */}
          <Reveal width="100%">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] leading-tight uppercase text-center">
              DISCOVER THE WORLD OF <br />
              <span className="text-[#2B59C3]">AFRICAN ANCIENT WISDOM</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} width="100%">
            <p className="font-sans text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-center">
              If it takes a village to raise a child, it will take a Bokobo kids
              village to raise the next generation of global citizens
            </p>
          </Reveal>
        </div>
      </div>

      {/* ==============================================
          PART 2: BLUE CAROUSEL SECTION
      =============================================== */}
      <div className="relative w-full bg-[#2B59C3] py-10 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 min-h-[500px]">
          {/* --- CAROUSEL CONTENT --- */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* LEFT ARROW (Desktop) */}
            <button
              onClick={prevSlide}
              className="hidden md:flex items-center justify-center w-12 h-12 bg-white rounded-full text-[#2B59C3] hover:scale-110 transition-transform shadow-lg absolute left-4 top-1/2 -translate-y-1/2 z-30"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* --- SLIDE CONTENT (Animated Switch) --- */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row items-center gap-12 md:gap-20 w-full"
              >
                {/* TEXT SIDE (Left) */}
                <div className="flex-1 text-white space-y-5 md:pl-16">
                  <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase">
                    {BOOKS[currentIndex].title}
                  </h2>

                  <div className="font-sans text-xs md:text-sm leading-relaxed opacity-90 space-y-4 font-light">
                    {BOOKS[currentIndex].description.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>

                  <button className="mt-4 bg-white text-[#1F2937] px-8 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-md">
                    Buy this book
                  </button>
                </div>

                {/* IMAGE SIDE (Right) */}
                <div className="flex-1 flex justify-center md:justify-end relative md:pr-16">
                  <div className="relative w-[250px] md:w-[350px] aspect-[3/4] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 bg-gray-200 rounded-md overflow-hidden">
                    {/* Placeholder Image */}
                    <img
                      src={BOOKS[currentIndex].image}
                      alt={BOOKS[currentIndex].title}
                      className="w-full h-full object-cover"
                    />
                    {/* Spine Shadow */}
                    <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/20 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* RIGHT ARROW (Desktop) */}
            <button
              onClick={nextSlide}
              className="hidden md:flex items-center justify-center w-12 h-12 bg-white rounded-full text-[#2B59C3] hover:scale-110 transition-transform shadow-lg absolute right-4 top-1/2 -translate-y-1/2 z-30"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* --- PAGINATION DOTS --- */}
          <div className="flex justify-center gap-3 mt-12 md:mt-16">
            {BOOKS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white scale-125"
                    : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* --- BOTTOM WAVE (Replaced Zigzag with Smooth Wave) --- */}
        <div className="absolute bottom-[-1px] left-0 w-full leading-[0] z-20">
          {/* Smooth Wave SVG */}
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-[80px] md:h-[120px] text-white fill-current"
            preserveAspectRatio="none"
          >
            <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

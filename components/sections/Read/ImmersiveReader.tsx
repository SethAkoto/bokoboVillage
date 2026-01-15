"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Settings,
  Moon,
  Sun,
  BookOpen,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BookPage {
  image: string;
  text?: string;
}

interface ImmersiveReaderProps {
  book: { title: string; pages: BookPage[] };
  onClose: () => void;
}

const THEMES = {
  light: "bg-white text-gray-900",
  sepia: "bg-[#F4ECD8] text-[#5B4636]",
  dark: "bg-[#1a1a1a] text-gray-300",
};

export const ImmersiveReader = ({ book, onClose }: ImmersiveReaderProps) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [theme, setTheme] = useState<"light" | "sepia" | "dark">("light");
  const [showControls, setShowControls] = useState(true);

  // Auto-hide controls after 3 seconds of inactivity
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const resetControls = () => {
      setShowControls(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setShowControls(false), 3000);
    };
    window.addEventListener("mousemove", resetControls);
    return () => {
      window.removeEventListener("mousemove", resetControls);
      clearTimeout(timeout);
    };
  }, []);

  // Keyboard Nav
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextPage();
      if (e.key === "ArrowLeft") prevPage();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [pageIndex]);

  const nextPage = () => {
    if (pageIndex < book.pages.length - 1) setPageIndex((p) => p + 1);
  };

  const prevPage = () => {
    if (pageIndex > 0) setPageIndex((p) => p - 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 z-50 flex flex-col transition-colors duration-500 ${THEMES[theme]}`}
    >
      {/* --- TOP CONTROL BAR --- */}
      <motion.div
        animate={{ y: showControls ? 0 : -100 }}
        className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-20 bg-gradient-to-b from-black/50 to-transparent"
      >
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 text-white transition-all"
          >
            <X size={20} />
          </button>
          <h2 className="text-white font-bold text-lg drop-shadow-md hidden md:block">
            {book.title}
          </h2>
        </div>

        {/* Theme Toggles */}
        <div className="flex gap-2 bg-black/30 backdrop-blur-md p-1.5 rounded-full border border-white/10">
          <button
            onClick={() => setTheme("light")}
            className={`p-2 rounded-full transition-all ${
              theme === "light"
                ? "bg-white text-black"
                : "text-white/70 hover:text-white"
            }`}
          >
            <Sun size={16} />
          </button>
          <button
            onClick={() => setTheme("sepia")}
            className={`p-2 rounded-full transition-all ${
              theme === "sepia"
                ? "bg-[#F4ECD8] text-[#5B4636]"
                : "text-white/70 hover:text-white"
            }`}
          >
            <BookOpen size={16} />
          </button>
          <button
            onClick={() => setTheme("dark")}
            className={`p-2 rounded-full transition-all ${
              theme === "dark"
                ? "bg-[#333] text-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            <Moon size={16} />
          </button>
        </div>
      </motion.div>

      {/* --- MAIN READING AREA --- */}
      <div className="flex-1 relative flex items-center justify-center p-4 md:p-10 h-full overflow-hidden">
        {/* Navigation Arrows (Desktop) */}
        <button
          onClick={prevPage}
          disabled={pageIndex === 0}
          className={`hidden md:block absolute left-8 z-10 p-4 rounded-full text-white/50 hover:bg-white/10 hover:text-white transition-all ${
            pageIndex === 0 ? "opacity-0" : "opacity-100"
          }`}
        >
          <ChevronLeft size={40} />
        </button>

        <button
          onClick={nextPage}
          disabled={pageIndex === book.pages.length - 1}
          className={`hidden md:block absolute right-8 z-10 p-4 rounded-full text-white/50 hover:bg-white/10 hover:text-white transition-all ${
            pageIndex === book.pages.length - 1 ? "opacity-0" : "opacity-100"
          }`}
        >
          <ChevronRight size={40} />
        </button>

        {/* The Page */}
        <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={pageIndex}
              src={book.pages[pageIndex].image}
              alt={`Page ${pageIndex + 1}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="max-w-full max-h-full object-contain shadow-2xl rounded-sm"
              style={{ boxShadow: "0 20px 50px -12px rgba(0,0,0,0.5)" }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* --- BOTTOM PROGRESS BAR --- */}
      <motion.div
        animate={{ y: showControls ? 0 : 100 }}
        className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/50 to-transparent flex flex-col items-center gap-2"
      >
        <div className="text-white/80 text-xs font-bold uppercase tracking-widest drop-shadow-md">
          Page {pageIndex + 1} of {book.pages.length}
        </div>
        <div className="w-full max-w-md h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
          <motion.div
            className="h-full bg-[#2B59C3]"
            initial={{ width: 0 }}
            animate={{
              width: `${((pageIndex + 1) / book.pages.length) * 100}%`,
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

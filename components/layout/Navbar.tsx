"use client";

import React, { useState } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isStoreOpen, setIsStoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileStoreExpanded, setIsMobileStoreExpanded] = useState(false);

  // Use this to highlight the active link if needed
  const pathname = usePathname();

  return (
    <header className="w-full bg-white z-50 relative font-sans shadow-sm md:shadow-none">
      {/* --- TOP ROW --- */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo Area (Links to Home) */}
        <div className="flex-shrink-0 z-50">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-4 h-4 bg-gray-800 rounded-sm"></div>
              <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
              <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">
              logoipsum
            </span>
          </Link>
        </div>

        {/* --- DESKTOP: Right Side Actions --- */}
        <div className="hidden md:flex items-center gap-3">
          <div className="relative flex items-center w-[280px]">
            <Search className="absolute left-4 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search our book store"
              className="w-full pl-11 pr-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:border-brand-blue transition-all"
            />
          </div>
          <button className="bg-[#2B59C3] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm">
            Start shopping
          </button>
        </div>

        {/* --- MOBILE: Hamburger Toggle --- */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* --- DESKTOP: Bottom Navigation --- */}
      <div className="hidden md:block border-t border-gray-200/80">
        <nav className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-center gap-8 text-[14px] font-medium text-gray-600">
          {/* Added HOME Link */}
          <Link
            href="/"
            className={`hover:text-[#2B59C3] transition-colors ${
              pathname === "/" ? "text-[#2B59C3] font-bold" : ""
            }`}
          >
            Home
          </Link>

          {/* Store Dropdown */}
          <div
            className="relative group h-full flex items-center"
            onMouseEnter={() => setIsStoreOpen(true)}
            onMouseLeave={() => setIsStoreOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#2B59C3] transition-colors">
              Store <ChevronDown className="w-3 h-3 opacity-70" />
            </button>
            <AnimatePresence>
              {isStoreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-0 bg-white shadow-xl border border-gray-100 rounded-xl py-2 min-w-[160px] z-50 flex flex-col overflow-hidden"
                >
                  <Link
                    href="/shop/en"
                    className="px-5 py-2 hover:bg-blue-50 text-sm text-gray-700 hover:text-brand-blue text-left"
                  >
                    English Shop
                  </Link>
                  <Link
                    href="/shop/es"
                    className="px-5 py-2 hover:bg-blue-50 text-sm text-gray-700 hover:text-brand-blue text-left"
                  >
                    Tienda Español
                  </Link>
                  <Link
                    href="/shop/fr"
                    className="px-5 py-2 hover:bg-blue-50 text-sm text-gray-700 hover:text-brand-blue text-left"
                  >
                    Boutique Français
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/events"
            className="hover:text-[#2B59C3] transition-colors"
          >
            Events
          </Link>
          <Link href="/news" className="hover:text-[#2B59C3] transition-colors">
            News
          </Link>
          <Link
            href="/mission"
            className="hover:text-[#2B59C3] transition-colors"
          >
            Mission
          </Link>
          <Link href="/read" className="hover:text-[#2B59C3] transition-colors">
            Read
          </Link>
          <Link
            href="/listen"
            className="hover:text-[#2B59C3] transition-colors"
          >
            Listen
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#2B59C3] transition-colors"
          >
            Contact us
          </Link>
        </nav>
      </div>

      {/* --- MOBILE: Slide-down Menu --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100 shadow-xl absolute top-full left-0 w-full z-40"
          >
            <div className="flex flex-col p-6 space-y-6">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search our book store"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-600 focus:outline-none focus:border-brand-blue bg-gray-50"
                />
              </div>

              <nav className="flex flex-col space-y-4 text-base font-medium text-gray-600">
                {/* Added HOME Link for Mobile */}
                <Link
                  href="/"
                  className="py-2 hover:text-[#2B59C3]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>

                <div>
                  <button
                    onClick={() =>
                      setIsMobileStoreExpanded(!isMobileStoreExpanded)
                    }
                    className="flex items-center justify-between w-full py-2 hover:text-[#2B59C3]"
                  >
                    Store{" "}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isMobileStoreExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isMobileStoreExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 border-l-2 border-gray-100 ml-1 space-y-3 mt-2"
                      >
                        <Link
                          href="/shop/en"
                          className="block text-sm text-gray-500 hover:text-brand-blue"
                        >
                          English Shop
                        </Link>
                        <Link
                          href="/shop/es"
                          className="block text-sm text-gray-500 hover:text-brand-blue"
                        >
                          Tienda Español
                        </Link>
                        <Link
                          href="/shop/fr"
                          className="block text-sm text-gray-500 hover:text-brand-blue"
                        >
                          Boutique Français
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/events" className="py-2 hover:text-[#2B59C3]">
                  Events
                </Link>
                <Link href="/news" className="py-2 hover:text-[#2B59C3]">
                  News
                </Link>
                <Link href="/mission" className="py-2 hover:text-[#2B59C3]">
                  Mission
                </Link>
                <Link href="/read" className="py-2 hover:text-[#2B59C3]">
                  Read
                </Link>
                <Link href="/listen" className="py-2 hover:text-[#2B59C3]">
                  Listen
                </Link>
                <Link href="/contact" className="py-2 hover:text-[#2B59C3]">
                  Contact us
                </Link>
              </nav>

              <button className="w-full bg-[#2B59C3] text-white py-3.5 rounded-xl font-bold shadow-sm hover:bg-blue-700 transition-colors">
                Start shopping
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

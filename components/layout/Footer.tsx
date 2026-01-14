"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#2B59C3] text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* --- BRAND COLUMN (Left) --- */}
          <div className="lg:col-span-4 space-y-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-5 h-5 bg-white rounded-sm"></div>
                <div className="w-5 h-5 bg-white rounded-full"></div>
                <div className="w-5 h-5 bg-white rounded-full"></div>
              </div>
              <span className="font-bold text-2xl tracking-tight">
                logoipsum
              </span>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-sans text-lg mb-4">Social media</h4>
              <div className="flex gap-4">
                {/* Facebook */}
                <Link
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2B59C3] hover:scale-110 transition-transform"
                >
                  <Facebook className="w-5 h-5 fill-current" />
                </Link>
                {/* Instagram */}
                <Link
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2B59C3] hover:scale-110 transition-transform"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                {/* TikTok (Custom SVG since Lucide doesn't have a perfect match) */}
                <Link
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2B59C3] hover:scale-110 transition-transform"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* --- LINKS COLUMN 1 (Products) --- */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h4 className="font-sans text-lg mb-6 opacity-0 md:opacity-100">
              Products
            </h4>{" "}
            {/* Hidden label for alignment if needed, or just spacers */}
            <ul className="space-y-4 font-sans text-sm md:text-base opacity-90">
              <li>
                <Link href="#" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  The lady of the sea
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  The legend of the first rainbow
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Book 3
                </Link>
              </li>
            </ul>
          </div>

          {/* --- LINKS COLUMN 2 (About) --- */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-lg mb-6 opacity-0 md:opacity-100">
              Company
            </h4>
            <ul className="space-y-4 font-sans text-sm md:text-base opacity-90">
              <li>
                <Link href="#" className="hover:underline">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Mission
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* --- LINKS COLUMN 3 (Resources) --- */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-lg mb-6 opacity-0 md:opacity-100">
              Resources
            </h4>
            <ul className="space-y-4 font-sans text-sm md:text-base opacity-90">
              <li>
                <Link href="#" className="hover:underline">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Read
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Listen
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

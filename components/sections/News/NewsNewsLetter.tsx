"use client";

import React from "react";
import { Send } from "lucide-react";
import { Reveal } from "../../ui/Reveal";

export const NewsNewsletter = () => {
  return (
    <section className="w-full bg-[#2B59C3] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal width="100%">
          <div className="bg-[#2B59C3] flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
            {/* Text */}
            <div className="max-w-2xl space-y-4 text-white">
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Never miss a story from Bokobo
              </h2>
              <p className="font-sans text-white/80 text-base leading-relaxed">
                Subscribe to our newsletter to get the latest news, event
                updates, and educational resources delivered straight to your
                inbox.
              </p>
            </div>

            {/* Input Field */}
            <div className="w-full max-w-md">
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full pl-6 pr-36 py-4 rounded-full border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-white transition-all"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-[#2B59C3] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors flex items-center gap-2">
                  Subscribe
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

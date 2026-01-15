"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { NewsHero } from "@/components/sections/News/NewsHero";
import { NewsGrid } from "@/components/sections/News/NewsGrid";
import { NewsNewsletter } from "@/components/sections/News/NewsNewsLetter";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* 1. Featured Article Hero */}
      <NewsHero />

      {/* 2. Article Grid with Filters */}
      <NewsGrid />

      {/* 3. Newsletter Sign-up Banner */}
      <NewsNewsletter />

      <Footer />
    </main>
  );
}

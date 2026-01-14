"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MissionHero } from "@/components/sections/Mission/MissionHero";
export default function MissionPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Navigation */}
      <Navbar />

      {/* 2. Mission Hero Section (from image_7.png) */}
      <MissionHero />

      {/* We will add the next section of the mission page here later */}

      {/* 3. Footer */}
      <Footer />
    </main>
  );
}

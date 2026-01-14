"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MissionHero } from "@/components/sections/Mission/MissionHero";
import { MissionPillars } from "@/components/sections/Mission/MissionPillars";
import { MissionStatement } from "@/components/sections/Mission/MissionStatement"; // New
import { MissionCTA } from "@/components/sections/Mission/MissionCTA"; // New

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* 1. Hero */}
      <MissionHero />

      {/* 2. Pillars */}
      <MissionPillars />

      {/* 3. Statement (Group Photo) */}
      <MissionStatement />

      {/* 4. CTA Banner (Brown) */}
      <MissionCTA />

      <Footer />
    </main>
  );
}

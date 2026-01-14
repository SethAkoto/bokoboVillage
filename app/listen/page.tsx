"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ListenHero } from "@/components/sections/Listen/ListenHero";
import { AudioShowcase } from "@/components/sections/Listen/AudioShowcase";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Navigation */}
      <Navbar />

      {/* 2. Events Hero Section */}
      <ListenHero />

      <AudioShowcase />

      {/* 4. Footer */}
      <Footer />
    </main>
  );
}

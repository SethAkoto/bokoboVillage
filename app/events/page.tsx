"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EventsHero } from "@/components/sections/Events/EventsHero";
import { UpcomingEvents } from "@/components/sections/Events/UpcomingEvents";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* 1. Blue Hero with Slider */}
      <EventsHero />

      {/* 2. Upcoming Events List */}
      <UpcomingEvents />

      <Footer />
    </main>
  );
}

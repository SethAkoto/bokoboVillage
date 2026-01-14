"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { STORE_CONTENT } from "@/data/storeData";
import { StoreHero } from "@/components/sections/Shop/StoreHero";
import { BookList } from "@/components/sections/Shop/BookList"; // Import the new component

export default function ShopPage() {
  const params = useParams();
  const lang = (params.lang as string) || "en";

  // Language Logic: Get the correct content object
  const content =
    STORE_CONTENT[lang as keyof typeof STORE_CONTENT] || STORE_CONTENT.en;

  // Map the store content to the shape BookList expects (provide fallbacks)
  const mappedContent = {
    ui: {
      title: content.ui.title,
      subtitle: content.ui.subtitle,
      // BookList expects `startShopping`; prefer an existing field or fallback to a sensible default
      startShopping:
        (content.ui as any).startShopping ??
        (content.ui as any).filterAll ??
        "Start Shopping",
      buyButton: content.ui.buyButton,
      // some locales use `pricePrefix`; map it to `currency` if present
      currency: (content.ui as any).pricePrefix ?? undefined,
    },
    books: content.books.map((b) => ({
      id: b.id,
      title: b.title,
      author: b.author,
      category: (b as any).category ?? b.category,
      price: b.price,
      image: b.image,
      // BookList may expect `description`; provide empty string if missing
      description: (b as any).description ?? "",
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* 1. Hero Section (Fan of books) */}
      <StoreHero />

      {/* 2. Book List Section (Grid of books with Language Logic) */}
      <BookList content={mappedContent as any} />

      <Footer />
    </main>
  );
}

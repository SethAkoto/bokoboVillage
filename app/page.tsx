import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Blog } from "@/components/sections/Home/Blog";
import { FeaturedBook } from "@/components/sections/Home/FeaturedBook";
import { Hero } from "@/components/sections/Home/Hero";
import { Mission } from "@/components/sections/Home/Mission"; // Import the new component
import { Team } from "@/components/sections/Home/Team";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      {/* Add the Mission section here */}
      <Mission />
      <FeaturedBook />
      <Team />
      <Blog />
      <Footer />
    </main>
  );
}

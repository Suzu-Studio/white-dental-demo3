"use client";

import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import Menu from "@/app/components/Menu";
import Schedule from "@/app/components/Schedule";
import Access from "@/app/components/Access";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-700 font-sans">
      <Header />
      <Hero />
      <Features />
      <Menu />
      <Schedule />
      <Access />
      <Footer />
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCatalog from "./components/ProductCatalog";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import QuoteModal from "./components/QuoteModal";

export default function Home() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#070d19] text-white">
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />
      <main className="flex-grow">
        <Hero />
        <ProductCatalog />
        <Services />
        <About />
      </main>
      <Footer />
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}
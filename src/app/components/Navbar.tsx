"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Home, ShoppingBag, Truck, Users, Phone, Package, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "#inicio", icon: Home },
    { name: "Productos", href: "#catalogo", icon: ShoppingBag },
    { name: "Proceso y Logística", href: "#proceso", icon: Truck },
    { name: "Nosotros", href: "#nosotros", icon: Users },
    { name: "Contacto", href: "#contacto", icon: Phone },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#13381c]/95 backdrop-blur-md border-b border-emerald-800/40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-amber-400/40 shadow-md bg-emerald-950">
              <Image
                src="/images/logotipo-frutyork.png"
                alt="Logotipo Frutyork"
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white leading-none">
                FRUTYORK
              </span>
              <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase mt-1">
                JUGOS 100% NATURALES
              </span>
            </div>
          </a>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 text-sm font-medium text-gray-200 hover:text-amber-400 transition-colors"
                >
                  <Icon className="w-4 h-4 text-emerald-400" />
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Botón Pedidos al por Mayor */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={onOpenQuote}
              className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm px-5 py-2.5 rounded-full shadow-md shadow-amber-500/20 transition-all cursor-pointer"
            >
              <Package className="w-4 h-4" />
              Pedidos al por Mayor
            </button>
          </div>

          {/* Botón Menú Móvil */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-200 hover:bg-emerald-900/60"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0f2b16] border-t border-emerald-800/50 px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-200 hover:bg-emerald-900/50 hover:text-amber-400 text-sm font-medium"
              >
                <Icon className="w-4 h-4 text-emerald-400" />
                {link.name}
              </a>
            );
          })}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuote();
            }}
            className="w-full mt-3 flex items-center justify-center gap-2 bg-amber-400 text-slate-950 font-bold text-sm px-5 py-3 rounded-full"
          >
            <Package className="w-4 h-4" />
            Pedidos al por Mayor
          </button>
        </div>
      )}
    </header>
  );
}
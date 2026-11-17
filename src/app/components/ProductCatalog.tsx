"use client";

import React, { useState } from "react";
import Image from "next/image";
import { products } from "../data/products";
import { Check, MessageCircle, Sparkles } from "lucide-react";

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");

  const categories = [
    { id: "todos", label: "Todos los Sabores" },
    { id: "cítricos", label: "Cítricos" },
    { id: "dulces", label: "Dulces & Cremosos" },
  ];

  const filteredProducts =
    selectedCategory === "todos"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="catalogo"
      className="py-20 bg-[#09101f] border-t border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Catálogo Oficial
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Nuestros Jugos y Pulpas Naturales
          </h2>
          <p className="text-gray-400 text-base">
            Disponibles en presentaciones <strong className="text-amber-400">con leche y sin leche</strong>, listos para disfrutar en casa o abastecer tu negocio.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20"
                  : "bg-[#0f172a] text-gray-300 border border-slate-800 hover:border-amber-400/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {filteredProducts.map((product) => {
            const message = encodeURIComponent(
              `Hola Frutyork, me interesa pedir: ${product.name}. ¿Qué presentaciones tienen disponibles?`
            );
            return (
              <div
                key={product.id}
                className="group bg-[#0d1526] border border-slate-800 hover:border-amber-400/50 rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Imagen */}
                  <div className="relative h-60 w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-400/30 text-amber-300 text-[11px] font-bold">
                      {product.badge}
                    </span>
                  </div>

                  {/* Contenido */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {product.description}
                    </p>

                    <ul className="space-y-1.5 pt-1">
                      {product.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-center gap-2 text-xs text-gray-300"
                        >
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Botón Pedir */}
                <div className="px-6 pb-6">
                  <a
                    href={`https://wa.me/573025503798?text=${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 px-4 rounded-xl transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Pedir este Sabor
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
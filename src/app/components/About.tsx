"use client";

import React from "react";
import { Award, ShieldCheck, Target, Compass } from "lucide-react";

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-[#070d19] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950 border border-emerald-700/40 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            Nuestra Identidad
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pureza del Campo a tu Mesa
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            En <strong className="text-white">FRUTYORK</strong> transformamos frutas
            frescas seleccionadas en experiencias naturales saludables, manteniendo cada
            vitamina intacta gracias a nuestros rigurosos estándares de procesamiento y
            refrigeración.
          </p>
        </div>

        {/* Tarjetas Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Misión */}
          <div className="bg-[#0d1526] border border-slate-800 hover:border-amber-400/40 rounded-3xl p-8 space-y-4 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Nuestra Misión</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Producir y comercializar jugos y pulpas de fruta 100% naturales de la más
              alta calidad en Barranquilla, Soledad y su área metropolitana, apoyando
              directamente a nuestros cultivadores locales y garantizando bienestar,
              frescura y sabor auténtico sin conservantes artificiales en cada entrega.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-[#0d1526] border border-slate-800 hover:border-emerald-400/40 rounded-3xl p-8 space-y-4 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Nuestra Visión</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Consolidarnos como la marca referente de bebidas y pulpas naturales en la
              región Caribe colombiana, reconocidos por nuestra innovación en empaques
              térmicos, cumplimiento logístico y compromiso inquebrantable con la salud y
              satisfacción de hogares, restaurantes y aliados comerciales.
            </p>
          </div>
        </div>

        {/* Banner de Garantía */}
        <div className="bg-gradient-to-r from-[#112e1a] via-[#0e2329] to-[#0d1526] border border-emerald-700/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">
                Compromiso 100% Libre de Químicos
              </h4>
              <p className="text-gray-300 text-sm">
                Sin colorantes, sin saborizantes artificiales y con cadena de frío
                certificada desde la planta hasta tu puerta.
              </p>
            </div>
          </div>
          <span className="px-4 py-2 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider shrink-0">
            Calidad Garantizada
          </span>
        </div>
      </div>
    </section>
  );
}
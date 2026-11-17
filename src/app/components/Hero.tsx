"use client";

import React from "react";
import { Sparkles, CheckCircle2, ArrowRight, Snowflake, Sprout, GlassWater } from "lucide-react";

export default function Hero() {
  const whatsappUrl =
    "https://wa.me/573025503798?text=Hola%20Frutyork,%20quiero%20pedir%20jugos%20y%20pulpas%20naturales.";

  return (
    <section
      id="inicio"
      className="relative min-h-[88vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0e2e16] via-[#0b1f18] to-[#070d19] py-16 lg:py-24"
    >
      {/* Resplandor ambiental */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Columna Izquierda */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Gran Variedad de Frutas 100% Naturales
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
              El Sabor Auténtico de{" "}
              <span className="text-amber-400">Nuestras Frutas</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
              Disfruta una gran variedad de jugos y pulpas naturales (maracuyá, guanábana,
              níspero, zapote y más). Elaboradas con fruta seleccionada directamente de
              cultivadores, con opciones{" "}
              <strong className="text-amber-400 font-semibold">con leche y sin leche</strong>,
              cero químicos y total frescura.
            </p>

            {/* Píldoras de beneficios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-xl">
              <div className="flex items-center gap-2.5 bg-[#0f172a]/80 border border-slate-800 px-4 py-3 rounded-xl text-sm text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Cero químicos • 100% Pulpa Frutal</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#0f172a]/80 border border-slate-800 px-4 py-3 rounded-xl text-sm text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Líneas Con y Sin Leche</span>
              </div>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg shadow-amber-500/25 transition-all"
              >
                Pedir Variedad al WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#catalogo"
                className="inline-flex items-center justify-center bg-[#0f172a]/90 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all"
              >
                Ver Catálogo de Sabores
              </a>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta Flotante */}
          <div className="lg:col-span-5">
            <div className="bg-[#0b1322]/90 backdrop-blur-md border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-amber-500/10 space-y-5">
              {/* Encabezado Tarjeta */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400">
                    <GlassWater className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base sm:text-lg leading-tight">
                      Variedad de Sabores
                    </h3>
                    <p className="text-amber-400 text-xs font-semibold tracking-wider uppercase mt-0.5">
                      CON Y SIN LECHE
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                  ¡Frescura!
                </span>
              </div>

              {/* Filas de Garantía */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between bg-[#111c33] border border-slate-800/80 px-4 py-3.5 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <Snowflake className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-gray-200 font-medium">
                      Cadena de Frío Activa
                    </span>
                  </div>
                  <span className="text-xs font-bold text-emerald-400">Garantizado</span>
                </div>

                <div className="flex items-center justify-between bg-[#111c33] border border-slate-800/80 px-4 py-3.5 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <Sprout className="w-4 h-4 text-amber-400" />
                    <span className="text-sm text-gray-200 font-medium">
                      Cultivadores Locales
                    </span>
                  </div>
                  <span className="text-xs font-bold text-amber-400">100% Fruta</span>
                </div>
              </div>

              {/* Barra de Progreso Sabor y Nutrición */}
              <div className="pt-2 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400 font-medium">Sabor y Nutrición</span>
                  <span className="text-amber-400 font-bold">Excelente</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
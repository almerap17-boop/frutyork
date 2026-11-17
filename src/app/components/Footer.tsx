"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-[#050912] border-t border-slate-800/80 pt-16 pb-10 text-gray-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-800/80">
          {/* Marca */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-amber-400/40">
                <Image
                  src="/images/logotipo-frutyork.png"
                  alt="Frutyork Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-extrabold text-white leading-none">
                  FRUTYORK
                </h4>
                <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
                  JUGOS 100% NATURALES
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Jugos y pulpas de fruta fresca sin conservantes. Cadena de frío garantizada desde el campo hasta tu mesa.
            </p>
          </div>

          {/* Contacto y Cobertura */}
          <div className="space-y-3">
            <h5 className="text-white font-bold text-base">Cobertura y Horarios</h5>
            <div className="flex items-start gap-2.5 text-sm text-gray-400">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
              <span>Barranquilla, Soledad y Área Metropolitana, Atlántico.</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-gray-400">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Lunes a Sábado: 7:00 AM – 6:00 PM</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-gray-400">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span>+57 302 550 3798</span>
            </div>
          </div>

          {/* CTA Directo */}
          <div className="space-y-4">
            <h5 className="text-white font-bold text-base">Haz tu Pedido Hoy</h5>
            <p className="text-sm text-gray-400">
              Atención rápida para pedidos personales, familiares y suministros comerciales.
            </p>
            <a
              href="https://wa.me/573025503798?text=Hola%20Frutyork,%20quiero%20hacer%20un%20pedido."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Escribir al WhatsApp
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} FRUTYORK. Todos los derechos reservados.</p>
          <p>100% Pulpa Natural • Cero Químicos</p>
        </div>
      </div>
    </footer>
  );
}
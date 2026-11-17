"use client";

import React, { useState } from "react";
import { X, Send, Building2 } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [businessName, setBusinessName] = useState("");
  const [city, setCity] = useState("Barranquilla");
  const [quantity, setQuantity] = useState("20 - 50 unidades / litros");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hola Frutyork, solicito cotización al por mayor:\n• Empresa/Negocio: ${businessName || "Cliente Mayorista"}\n• Ciudad: ${city}\n• Volumen estimado: ${quantity}\n• Detalles: ${notes || "Sin observaciones adicionales"}`
    );
    window.open(`https://wa.me/573025503798?text=${text}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg bg-[#0d1526] border border-amber-400/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-white hover:bg-slate-800 cursor-pointer"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Cotización Mayorista</h3>
            <p className="text-xs text-gray-400">
              Precios especiales para restaurantes, cafeterías y eventos
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1.5">
              Nombre del Negocio o Contacto
            </label>
            <input
              type="text"
              required
              placeholder="Ej. Restaurante El Sabor / Carlos Pérez"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#111c33] border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                Ubicación
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#111c33] border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
              >
                <option value="Barranquilla">Barranquilla</option>
                <option value="Soledad">Soledad</option>
                <option value="Área Metropolitana">Área Metropolitana</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                Cantidad Estimada
              </label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#111c33] border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
              >
                <option value="20 - 50 unidades / litros">20 - 50 unidades</option>
                <option value="50 - 150 unidades / litros">50 - 150 unidades</option>
                <option value="Más de 150 unidades / litros">Más de 150 unidades</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1.5">
              Sabores o Presentación (Con/Sin leche, Pulpa)
            </label>
            <textarea
              rows={3}
              placeholder="Ej. Necesitamos 30 litros de maracuyá y 20 de zapote para el viernes..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#111c33] border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            Enviar Solicitud por WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
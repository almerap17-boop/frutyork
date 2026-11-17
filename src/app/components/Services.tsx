"use client";

import React from "react";
import {
  Sprout,
  Droplets,
  Snowflake,
  PackageCheck,
  Truck,
  Store,
} from "lucide-react";

export default function Services() {
  const steps = [
    {
      icon: Sprout,
      title: "1. Selección en Origen",
      description:
        "Trabajamos directamente con cultivadores locales para escoger frutas en su punto óptimo de maduración y dulzura natural.",
    },
    {
      icon: Droplets,
      title: "2. Higiene y Extracción Pura",
      description:
        "Lavado, desinfección y despulpado bajo estrictos protocolos sanitarios, conservando la fibra y nutrientes sin añadir químicos.",
    },
    {
      icon: PackageCheck,
      title: "3. Empaque Térmico Especializado",
      description:
        "Sellado hermético de grado alimenticio y aislamiento térmico diseñado para proteger el sabor y evitar choques de temperatura.",
    },
    {
      icon: Snowflake,
      title: "4. Cadena de Frío Continua",
      description:
        "Refrigeración controlada desde nuestra planta hasta la entrega para garantizar frescura total en cada envase.",
    },
    {
      icon: Truck,
      title: "5. Domicilios en Barranquilla y Soledad",
      description:
        "Rutas diarias ágiles y puntuales directo a la puerta de tu hogar con atención personalizada por WhatsApp.",
    },
    {
      icon: Store,
      title: "6. Abastecimiento Mayorista",
      description:
        "Suministro constante y precios preferenciales para restaurantes, cafeterías, casinos empresariales y eventos.",
    },
  ];

  return (
    <section
      id="proceso"
      className="py-20 bg-[#070d19] border-t border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-950 border border-emerald-700/40 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Calidad & Logística
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Nuestro Proceso de Frescura Garantizada
          </h2>
          <p className="text-gray-400 text-base">
            Controlamos cada etapa de producción y distribución para que recibas un producto inocuo, frío y 100% natural.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="bg-[#0d1526] border border-slate-800 hover:border-emerald-500/40 rounded-3xl p-7 space-y-4 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
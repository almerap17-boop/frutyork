import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "FRUTYORK | Jugos y Pulpa 100% Naturales en Barranquilla y Soledad",
  description:
    "Disfruta una gran variedad de jugos y pulpas 100% naturales (maracuyá, guanábana, níspero, zapote y más). Cero químicos, cadena de frío activa y entrega a domicilio.",
  keywords: [
    "jugos naturales Barranquilla",
    "pulpas de fruta Soledad",
    "jugo de zapote",
    "jugo de maracuyá",
    "Frutyork",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${jakarta.className} bg-[#070d19] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UrbanKick - Sneakers Premium en Colombia",
  description: "Tu tienda de sneakers premium en Pereira y Dosquebradas. Productos 100% originales, pago contra entrega y envíos a todo Colombia.",
  keywords: "sneakers, tenis, zapatos, Colombia, Pereira, Dosquebradas, Nike, Adidas, Jordan",
  openGraph: {
    title: "UrbanKick - Sneakers Premium en Colombia",
    description: "Tu tienda de sneakers premium en Pereira y Dosquebradas. Productos 100% originales.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
